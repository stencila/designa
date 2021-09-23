import { datumEither as DE } from '@nll/datum';
import { Component, h, Host, Prop, State, } from '@stencil/core';
import { WebSocketClient } from '@stencila/executa';
import { codeError, softwareSession, } from '@stencila/schema';
import { array as A, option as O } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import pluralize from 'pluralize';
import { toastController, ToastPositions, ToastTypes, } from '../toast/toastController';
import { executableJobGuard, fetchJobDatum, jobFetch, } from './executa';
import { SessionStatus } from './sessionStatus';
const notify = toastController({
  position: ToastPositions.topCenter,
});
const errorNotification = () => notify.present('Couldn’t start a compute session', {
  type: ToastTypes.danger,
});
// =============================================================================
export class StencilaExecutableDocumentToolbar {
  constructor() {
    this.jobPoller = undefined;
    /** Frequency in milliseconds with which to check the status of a Job on Stencila Hub */
    this.jobPollFrequency = 3000;
    this.requestController = new AbortController();
    this.requestSignal = this.requestController.signal;
    this.initAbortControllers = () => {
      this.requestController = new AbortController();
      this.requestSignal = this.requestController.signal;
    };
    /**
     * When `fixed` the Navbar will remain pinned to the top of the screen.
     * Note that if the Navbar component is not followed by a sibling element,
     * you will have to set `margin-top: 3rem` on the following element yourself.
     */
    this.position = 'fixed';
    this.session = DE.initial;
    this.job = DE.initial;
    this.executor = null;
    this.codeCount = 0;
    this.statusMessage = '';
    this.checkJobStatus = async () => {
      // If we're already checking for the status, don't send second request
      if (DE.isRefresh(this.job)) {
        return this.job;
      }
      else {
        this.job = DE.toRefresh(this.job);
        return fetchJobDatum(this.jobUrl);
      }
    };
    this.handleJobStatus = (job, onJobReady, onJobError) => pipe(job, DE.fold(() => {
      this.jobPoller = this.pollJobFn(this.jobPollFrequency, onJobReady, onJobError);
      return DE.pending;
    }, () => job, () => job, () => job, (jobError) => {
      var _a;
      window.clearInterval(this.jobPoller);
      this.requestController.abort();
      (_a = this.executor) === null || _a === void 0 ? void 0 : _a.stop().catch((err) => {
        console.warn('Failed to stop Executa', err);
      });
      this.session = DE.failure(jobError);
      return job;
    }, (jobValue) => {
      if (executableJobGuard(jobValue)) {
        window.clearInterval(this.jobPoller);
        this.jobPoller = this.pollJobFn(10000);
        if (onJobReady) {
          onJobReady(this.startExecutor(jobValue.url));
        }
      }
      return job;
    }), (jobDatum) => {
      this.job = jobDatum;
      return jobDatum;
    });
    this.pollJob = (onConnectCb, onRejectCb) => this.checkJobStatus()
      .then((job) => this.handleJobStatus(job, onConnectCb, onRejectCb))
      .catch((err) => this.handleJobStatus(DE.failure(err)));
    this.pollJobFn = (interval = this.jobPollFrequency, onJobReady, onJobError) => window.setInterval(() => {
      this.pollJob(onJobReady, onJobError).catch((err) => DE.failure(err));
    }, interval);
    this.findSession = async () => {
      // TODO: Smart polling: aggressive, ease up, accelerate again once wait time low?
      if (this.sessionProviderUrl === undefined) {
        return DE.failure(new Error('Please set a SessionProviderUrl'));
      }
      if (DE.isInitial(this.session) || DE.isFailure(this.session)) {
        this.session = DE.pending;
        return jobFetch
          .url(this.sessionProviderUrl)
          .post()
          .res((res) => {
          this.jobUrl = res.url;
        })
          .then(() => new Promise((resolve, reject) => this.handleJobStatus(DE.initial, resolve, reject)))
          .catch((err) => {
          errorNotification();
          this.session = DE.failure(err);
          throw err;
        });
      }
      return Promise.resolve(this.session);
    };
    this.startExecutor = async (executorUrl) => {
      const sessionClient = new WebSocketClient(executorUrl);
      this.executor = sessionClient;
      this.session = await sessionClient
        .begin(softwareSession())
        .then((session) => {
        notify.present('Ready to run document', {
          type: ToastTypes.success,
        });
        return DE.success(session);
      })
        .catch((err) => {
        errorNotification();
        return DE.failure(new Error(err));
      });
      return this.session;
    };
    this.codeNodeSelector = () => [
      ...Array.from(document.querySelectorAll('stencila-code-chunk, stencila-code-expression')),
    ];
    this.executeHandler = async (code) => {
      if (DE.isPending(this.session)) {
        notify.present('Please wait until a compute session is found', {
          type: ToastTypes.warn,
        });
        return code;
      }
      const failureCase = (stackTrace) => {
        var _a;
        return (Object.assign(Object.assign({}, code), { errors: [
            ...((_a = code.errors) !== null && _a !== void 0 ? _a : []),
            codeError({
              errorType: 'error',
              errorMessage: `Could not run ${code.type === 'CodeChunk' ? 'code chunk' : 'code expression'}`,
              stackTrace: stackTrace,
            }),
          ] }));
      };
      return this.findSession()
        .then(() => {
        if (this.executor && DE.isSuccess(this.session)) {
          return this.executor
            .execute(code, this.session.value.right)
            .catch((err) => {
            console.error(err);
            return failureCase(err);
          });
        }
        return failureCase('Couldn’t start a compute session');
      })
        .catch((err) => failureCase(err));
    };
    this.runAll = async (e) => {
      e.preventDefault();
      this.initAbortControllers();
      return new Promise((resolve, reject) => {
        this.requestSignal.addEventListener('abort', reject);
        this.findSession()
          .then(async () => {
          const results = [];
          let idx = 0;
          this.session = DE.toRefresh(this.session);
          for (const node of this.codeNodeSelector()) {
            this.activeNodeIndex = idx;
            this.statusMessage = `${++idx} of ${this.codeCount} code ${pluralize('node', this.codeCount)}`;
            const res = await node.execute();
            results.push(res);
            if (idx >= this.codeCount) {
              this.statusMessage = '';
            }
          }
          this.session = DE.toReplete(this.session);
          this.requestSignal.removeEventListener('abort', reject);
          return resolve(results);
        })
          .catch((err) => {
          this.requestSignal.removeEventListener('abort', reject);
          reject(err);
        });
      });
    };
    this.goToActiveNode = () => {
      var _a;
      pipe(this.codeNodeSelector(), A.lookup((_a = this.activeNodeIndex) !== null && _a !== void 0 ? _a : -1), O.map((el) => {
        var _a;
        const toolbar = document.querySelector('stencila-executable-document-toolbar');
        const offset = (_a = toolbar === null || toolbar === void 0 ? void 0 : toolbar.getBoundingClientRect().height) !== null && _a !== void 0 ? _a : 0;
        const target = el.getBoundingClientRect().top - offset + window.pageYOffset;
        window.scrollTo({
          top: target,
          behavior: 'smooth',
        });
      }));
    };
    this.executionProgress = () => (h("stencila-tooltip", { text: "Jump to location", onClick: this.goToActiveNode },
      h("stencila-icon", { icon: "focus-3" }),
      h("span", null, this.statusMessage)));
  }
  componentWillLoad() {
    const codeNodes = this.codeNodeSelector();
    this.codeCount = codeNodes.length;
    codeNodes.map((code) => {
      // @ts-ignore
      code.executeHandler = this.executeHandler;
    });
  }
  render() {
    return (h(Host, { position: this.position },
      h("stencila-toolbar", null,
        h("span", { slot: "start" },
          h("stencila-button", { color: "stock", icon: "play", size: "small", onClick: this.runAll, disabled: this.codeCount <= 0, tooltip: this.codeCount <= 0
              ? 'No code nodes in the document to execute'
              : undefined, isLoading: DE.isPending(this.session) || DE.isRefresh(this.session), dataEl: "Toolbar/Run Document" }, DE.isPending(this.session) || DE.isRefresh(this.session)
            ? 'Running'
            : ['Run', h("span", { class: "hidden-sm" }, " Document")])),
        h("span", { slot: "middle" },
          h(SessionStatus, { job: this.job, session: this.session }, DE.isRefresh(this.session) && this.executionProgress())),
        this.sourceUrl !== undefined && (h("span", { slot: "end" },
          h("stencila-button", { color: "stock", href: this.sourceUrl, target: "_blank", rel: "nofollow noopener", icon: "external-link", size: "small", dataEl: "Toolbar/Project Source" }, "Source"))))));
  }
  static get is() { return "stencila-executable-document-toolbar"; }
  static get originalStyleUrls() { return {
    "default": ["executableDocumentToolbar.css"],
    "material": ["executableDocumentToolbar.css"]
  }; }
  static get styleUrls() { return {
    "default": ["executableDocumentToolbar.css"],
    "material": ["executableDocumentToolbar.css"]
  }; }
  static get properties() { return {
    "sourceUrl": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The URL of the document being decorated. Could be a Snapshot from Stencila Hub, a Project URL, or something else."
      },
      "attribute": "source-url",
      "reflect": false
    },
    "sessionProviderUrl": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The URL for requesting a SoftwareSession as defined in Stencila Schema.\nPassed to Stencila Executa for instantiating the session.\nTODO: If undefined user should be able to set one themselves (e.g. running a local machine)"
      },
      "attribute": "session-provider-url",
      "reflect": false
    },
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'fixed' | 'static'",
        "resolved": "\"fixed\" | \"static\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "When `fixed` the Navbar will remain pinned to the top of the screen.\nNote that if the Navbar component is not followed by a sibling element,\nyou will have to set `margin-top: 3rem` on the following element yourself."
      },
      "attribute": "position",
      "reflect": false,
      "defaultValue": "'fixed'"
    }
  }; }
  static get states() { return {
    "session": {},
    "job": {},
    "executor": {},
    "codeCount": {},
    "statusMessage": {}
  }; }
}
