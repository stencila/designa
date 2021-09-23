import { ComponentInterface } from '../../stencil-public-runtime';
import { Executor } from '@stencila/executa';
import { JobDatum, SessionDatum } from './executa';
export declare class StencilaExecutableDocumentToolbar implements ComponentInterface {
  private jobPoller;
  /** Frequency in milliseconds with which to check the status of a Job on Stencila Hub */
  private jobPollFrequency;
  private jobUrl;
  private activeNodeIndex?;
  private requestController;
  private requestSignal;
  private initAbortControllers;
  /**
   * The URL of the document being decorated. Could be a Snapshot from Stencila Hub, a Project URL, or something else.
   */
  sourceUrl: string;
  /**
   * The URL for requesting a SoftwareSession as defined in Stencila Schema.
   * Passed to Stencila Executa for instantiating the session.
   * TODO: If undefined user should be able to set one themselves (e.g. running a local machine)
   */
  sessionProviderUrl: string;
  /**
   * When `fixed` the Navbar will remain pinned to the top of the screen.
   * Note that if the Navbar component is not followed by a sibling element,
   * you will have to set `margin-top: 3rem` on the following element yourself.
   */
  position: 'fixed' | 'static';
  session: SessionDatum;
  job: JobDatum;
  executor: null | Executor;
  private codeCount;
  statusMessage: string;
  private checkJobStatus;
  private handleJobStatus;
  private pollJob;
  private pollJobFn;
  private findSession;
  private startExecutor;
  private codeNodeSelector;
  private executeHandler;
  private runAll;
  componentWillLoad(): void;
  private goToActiveNode;
  private executionProgress;
  render(): HTMLElement;
}
