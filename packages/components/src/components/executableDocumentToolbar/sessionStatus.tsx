import { datumEither as DE } from '@nll/datum'
import { FunctionalComponent, h } from '@stencil/core'
import { pipe } from 'fp-ts/lib/function'
import { isErrorGuard, JobDatum, JobError, SessionDatum } from './executa'

interface HelloProps {
  session: SessionDatum
  job: JobDatum
}

const jobErrorMessage = (jobError: JobError): string =>
  isErrorGuard(jobError) ? jobError.statusMessage : 'failed'

const jobStatusString = (jobObject: JobDatum): string =>
  pipe(
    jobObject,
    DE.fold(
      () => 'Requesting compute session',
      () => 'Requesting compute session',
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
            <stencila-icon icon="loader"></stencila-icon>
            {jobStatusString(job)}
          </span>
        ),
        (refreshingErroredJob) => (
          <span>
            <stencila-icon icon="loader"></stencila-icon>
            {jobErrorMessage(refreshingErroredJob)}
          </span>
        ),
        (refreshingSession) => (
          <span>
            <stencila-icon icon="loader"></stencila-icon>
            {refreshingSession.status}
          </span>
        ),
        (err) => (
          <span>
            <stencila-icon icon="x-octagon"></stencila-icon>
            {jobErrorMessage(err)}
          </span>
        ),
        () => (
          <stencila-tooltip text="Compute session is active">
            <stencila-icon icon="activity"></stencila-icon>
          </stencila-tooltip>
        )
      )
    )}
  </span>
)
