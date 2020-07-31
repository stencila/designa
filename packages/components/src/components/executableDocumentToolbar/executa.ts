import { datumEither as DE } from '@nll/datum'
import { SoftwareSession } from '@stencila/schema'
import { pipe } from 'fp-ts/lib/function'
import wretch from 'wretch'

enum JobStatus {
  // Keep checking
  WAITING = 'WAITING',
  DISPATCHED = 'DISPATCHED',
  PENDING = 'PENDING',
  RECEIVED = 'RECEIVED',
  STARTED = 'STARTED',
  // Stop Checking
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  CANCELLED = 'CANCELLED',
  REVOKED = 'REVOKED',
  TERMINATED = 'TERMINATED',
  // Ready to execute
  RUNNING = 'RUNNING',
}

export const jobLogic = {
  keepChecking: [
    JobStatus.WAITING,
    JobStatus.DISPATCHED,
    JobStatus.PENDING,
    JobStatus.RECEIVED,
    JobStatus.STARTED,
  ],
  stopChecking: [
    JobStatus.SUCCESS,
    JobStatus.FAILURE,
    JobStatus.CANCELLED,
    JobStatus.REVOKED,
    JobStatus.TERMINATED,
  ],
  readyToExecute: [JobStatus.RUNNING],
}

export interface Job {
  id: number
  statusMessage: string
  summaryString: string
  runtimeFormatted: string
  url: null | string
  position: number
  children: unknown[]
  key: string
  description: string
  created: Date
  updated: Date
  began: null
  ended: null
  status: JobStatus
  isActive: boolean
  method: string
  params: Params
  result: null
  error: null | { message: string; type: string }
  log: null
  runtime: null
  worker: null
  retries: null
  callbackId: null
  callbackMethod: null
  project: number
  creator: number
  queue: number
  parent: null
  callbackType: null
  users: number[]
}

interface Params {
  project: number
  snapshotPath: string
}

export interface ExecutableJob extends Job {
  url: string
  status: JobStatus.RUNNING
}

export type JobDatum = DE.DatumEither<JobError, Job>
export type JobError = Job | Error

export const isErrorGuard = (jobError: JobError): jobError is Job =>
  !(jobError instanceof Error)

export type SessionDatum = DE.DatumEither<JobError, SoftwareSession>

export const executableJobGuard = (job: Job): job is ExecutableJob =>
  job.url !== null && jobLogic.readyToExecute.includes(job.status)

const failedJobGuard = (job: Job) => jobLogic.stopChecking.includes(job.status)

export const isReadyToExecute = (jobDatum: JobDatum): boolean =>
  pipe(
    jobDatum,
    DE.squash(
      () => false,
      () => false,
      executableJobGuard
    )
  )

export const jobToDatum = (job: Job): JobDatum => {
  if (jobLogic.stopChecking.includes(job.status)) {
    // Stop polling
    return DE.failure(job)
  } else if (jobLogic.readyToExecute.includes(job.status)) {
    // Ready to execute
    return executableJobGuard(job) ? DE.success(job) : DE.failure(job)
  }

  return DE.toReplete(failedJobGuard(job) ? DE.failure(job) : DE.success(job))
}

export const fetchJob = (jobUrl: string): Promise<Job> =>
  wretch()
    .url(jobUrl)
    .get()
    .json((job) => job as Job)

export const fetchJobDatum = (jobUrl: string | undefined): Promise<JobDatum> =>
  jobUrl === undefined
    ? Promise.resolve(DE.failure(new Error('No Job Url to connect to')))
    : pipe(jobUrl, async (job) => {
        const j = await fetchJob(job)
        return jobToDatum(j)
      })
