import { datumEither as DE } from '@nll/datum'
import { FunctionalComponent, h, VNode } from '@stencil/core'
import { array as A } from 'fp-ts'
import { pipe } from 'fp-ts/function'
import { isErrorGuard, JobDatum, JobError, SessionDatum } from './executa'

interface HelloProps {
  session: SessionDatum
  job: JobDatum
  children?: VNode | VNode[]
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

export const SessionStatus: FunctionalComponent<HelloProps> = (
  { session, job },
  children
) => (
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
            <span>{jobStatusString(job)}</span>
          </span>
        ),
        (refreshingErroredJob) => (
          <span>
            <stencila-icon icon="loader-2"></stencila-icon>
            <span>{jobErrorMessage(refreshingErroredJob)}</span>
          </span>
        ),
        (refreshingSession) => (
          <span>
            {A.isEmpty(children) ? (
              [
                <stencila-icon icon="loader-2"></stencila-icon>,
                refreshingSession.status,
              ]
            ) : (
              <span>{children}</span>
            )}
          </span>
        ),
        (err) => (
          <span>
            <stencila-icon icon="error-warning"></stencila-icon>
            <span>{jobErrorMessage(err)}</span>
          </span>
        ),
        () => (
          <stencila-tooltip text="Compute session is active">
            <stencila-icon icon="pulse"></stencila-icon>
            {A.isEmpty(children) ? null : <span>{children}</span>}
          </stencila-tooltip>
        )
      )
    )}
  </span>
)
