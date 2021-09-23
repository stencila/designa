import { datumEither as DE } from '@nll/datum';
import { h } from '@stencil/core';
import { array as A } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import { isErrorGuard } from './executa';
const jobErrorMessage = (jobError) => isErrorGuard(jobError)
  ? jobError.statusMessage
  : 'An unexpected error occurred';
const jobStatusString = (jobObject) => pipe(jobObject, DE.fold(() => 'Requesting session', () => 'Requesting session', jobErrorMessage, (job) => job.statusMessage, jobErrorMessage, (job) => job.statusMessage));
export const SessionStatus = ({ session, job }, children) => (h("span", { class: {
    executableDocumentStatus: true,
    danger: DE.isFailure(session),
    success: DE.isSuccess(session),
  } }, pipe(session, DE.fold(() => '', () => (h("span", null,
  h("stencila-icon", { icon: "loader-2" }),
  h("span", null, jobStatusString(job)))), (refreshingErroredJob) => (h("span", null,
  h("stencila-icon", { icon: "loader-2" }),
  h("span", null, jobErrorMessage(refreshingErroredJob)))), (refreshingSession) => (h("span", null, A.isEmpty(children) ? ([
  h("stencila-icon", { icon: "loader-2" }),
  refreshingSession.status,
]) : (h("span", null, children)))), (err) => (h("span", null,
  h("stencila-icon", { icon: "error-warning" }),
  h("span", null, jobErrorMessage(err)))), () => (h("stencila-tooltip", { text: "Compute session is active" },
  h("stencila-icon", { icon: "pulse" }),
  A.isEmpty(children) ? null : h("span", null, children)))))));
