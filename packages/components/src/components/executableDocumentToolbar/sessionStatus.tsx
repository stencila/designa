import { datumEither as DE } from '@nll/datum'
import { FunctionalComponent, h } from '@stencil/core'
import { pipe } from 'fp-ts/lib/function'
import { isErrorGuard, JobDatum, JobError, SessionDatum } from './executa'

interface HelloProps {
  session: SessionDatum
  job: JobDatum
}

const jobErrorMessage = (jobError: JobError): string =>
  isErrorGuard(jobError)
    ? jobError.statusMessage
    : 'An unexpected error occurred'

const jobStatusString = (jobObject: JobDatum): string =>
  pipe(
    jobObject,
    DE.fold(
      () => 'Requesting session',
      () => 'Requesting session',
      jobErrorMessage,
      (job) => job.statusMessage,
      jobErrorMessage,
      (job) => job.statusMessage
    )
  )

export const SessionStatus: FunctionalComponent<HelloProps> = ({
  session,
  job,
}) => (
  <span
    class={{
      executableDocumentStatus: true,
      danger: DE.isFailure(session),
      success: DE.isSuccess(session),
    }}
  >
    {pipe(
      session,
      DE.fold(
        () => '',
        () => (
          <span>
            <stencila-icon icon="loader-2"></stencila-icon>
            {jobStatusString(job)}
          </span>
        ),
        (refreshingErroredJob) => (
          <span>
            <stencila-icon icon="loader-2"></stencila-icon>
            {jobErrorMessage(refreshingErroredJob)}
          </span>
        ),
        (refreshingSession) => (
          <span>
            <stencila-icon icon="loader-2"></stencila-icon>
            {refreshingSession.status}
          </span>
        ),
        (err) => (
          <span>
            <stencila-icon icon="error-warning"></stencila-icon>
            {jobErrorMessage(err)}
          </span>
        ),
        () => (
          <stencila-tooltip text="Compute session is active">
            <stencila-icon icon="pulse"></stencila-icon>
          </stencila-tooltip>
        )
      )
    )}
  </span>
)
