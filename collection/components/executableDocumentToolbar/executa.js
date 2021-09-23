import { datumEither as DE } from '@nll/datum';
import { pipe } from 'fp-ts/lib/function';
import wretch from 'wretch';
var JobStatus;
(function (JobStatus) {
  // Keep checking
  JobStatus["WAITING"] = "WAITING";
  JobStatus["DISPATCHED"] = "DISPATCHED";
  JobStatus["PENDING"] = "PENDING";
  JobStatus["RECEIVED"] = "RECEIVED";
  JobStatus["STARTED"] = "STARTED";
  // Stop Checking
  JobStatus["SUCCESS"] = "SUCCESS";
  JobStatus["FAILURE"] = "FAILURE";
  JobStatus["CANCELLED"] = "CANCELLED";
  JobStatus["REVOKED"] = "REVOKED";
  JobStatus["TERMINATED"] = "TERMINATED";
  // Ready to execute
  JobStatus["RUNNING"] = "RUNNING";
})(JobStatus || (JobStatus = {}));
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
};
export const isErrorGuard = (jobError) => !(jobError instanceof Error);
export const executableJobGuard = (job) => job.url !== null && jobLogic.readyToExecute.includes(job.status);
const failedJobGuard = (job) => jobLogic.stopChecking.includes(job.status);
export const isReadyToExecute = (jobDatum) => pipe(jobDatum, DE.squash(() => false, () => false, executableJobGuard));
export const jobToDatum = (job) => {
  if (jobLogic.stopChecking.includes(job.status)) {
    // Stop polling
    return DE.failure(job);
  }
  else if (jobLogic.readyToExecute.includes(job.status)) {
    // Ready to execute
    return executableJobGuard(job) ? DE.success(job) : DE.failure(job);
  }
  return DE.toReplete(failedJobGuard(job) ? DE.failure(job) : DE.success(job));
};
export const jobFetch = wretch().options({ credentials: 'include' });
export const fetchJob = (jobUrl) => jobFetch
  .url(jobUrl)
  .get()
  .json((job) => job);
export const fetchJobDatum = (jobUrl) => jobUrl === undefined
  ? Promise.resolve(DE.failure(new Error('No Job Url to connect to')))
  : pipe(jobUrl, async (job) => {
    const j = await fetchJob(job);
    return jobToDatum(j);
  });
