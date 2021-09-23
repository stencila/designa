import { datumEither as DE } from '@nll/datum';
import { SoftwareSession } from '@stencila/schema';
declare enum JobStatus {
  WAITING = "WAITING",
  DISPATCHED = "DISPATCHED",
  PENDING = "PENDING",
  RECEIVED = "RECEIVED",
  STARTED = "STARTED",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  CANCELLED = "CANCELLED",
  REVOKED = "REVOKED",
  TERMINATED = "TERMINATED",
  RUNNING = "RUNNING"
}
export declare const jobLogic: {
  keepChecking: JobStatus[];
  stopChecking: JobStatus[];
  readyToExecute: JobStatus[];
};
export interface Job {
  id: number;
  statusMessage: string;
  summaryString: string;
  runtimeFormatted: string;
  url: null | string;
  position: number;
  children: unknown[];
  key: string;
  description: string;
  created: Date;
  updated: Date;
  began: null;
  ended: null;
  status: JobStatus;
  isActive: boolean;
  method: string;
  params: Params;
  result: null;
  error: null | {
    message: string;
    type: string;
  };
  log: null;
  runtime: null;
  worker: null;
  retries: null;
  callbackId: null;
  callbackMethod: null;
  project: number;
  creator: number;
  queue: number;
  parent: null;
  callbackType: null;
  users: number[];
}
interface Params {
  project: number;
  snapshotPath: string;
}
export interface ExecutableJob extends Job {
  url: string;
  status: JobStatus.RUNNING;
}
export declare type JobDatum = DE.DatumEither<JobError, Job>;
export declare type JobError = Job | Error;
export declare const isErrorGuard: (jobError: JobError) => jobError is Job;
export declare type SessionDatum = DE.DatumEither<JobError, SoftwareSession>;
export declare const executableJobGuard: (job: Job) => job is ExecutableJob;
export declare const isReadyToExecute: (jobDatum: JobDatum) => boolean;
export declare const jobToDatum: (job: Job) => JobDatum;
export declare const jobFetch: import("wretch").Wretcher;
export declare const fetchJob: (jobUrl: string) => Promise<Job>;
export declare const fetchJobDatum: (jobUrl: string | undefined) => Promise<JobDatum>;
export {};
