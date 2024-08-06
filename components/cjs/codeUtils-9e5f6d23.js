'use strict';

const isPending = (status) => {
  var _a;
  return ((_a = ((status === null || status === void 0 ? void 0 : status.includes('Running')) === true ||
    (status === null || status === void 0 ? void 0 : status.includes('Scheduled')) === true)) !== null && _a !== void 0 ? _a : false);
};
const executionIconByStatus = (executeStatus, executeRequired) => {
  // If scheduled or running then show that status
  switch (executeStatus) {
    case 'Scheduled': {
      return {
        icon: 'timer-2',
        color: 'neutral-500, #6e7591',
        title: 'Scheduled',
      };
    }
    case 'ScheduledPreviouslyFailed': {
      return {
        icon: 'timer-2',
        color: 'danger-500, #cf445e',
        title: 'Scheduled (previously failed)',
      };
    }
    case 'Running': {
      return {
        icon: 'loader-2',
        color: 'neutral-500, #6e7591',
        title: 'Running',
      };
    }
    case 'RunningPreviouslyFailed': {
      return {
        icon: 'loader-2',
        color: 'danger-500, #cf445e',
        title: 'Running (previously failed)',
      };
    }
  }
  // Otherwise, if execution is required show why
  switch (executeRequired) {
    case 'NeverExecuted': {
      return {
        icon: 'indeterminate-circle',
        color: 'neutral-500, #6e7591',
        title: 'Not run yet',
      };
    }
    case 'DependenciesFailed': {
      return {
        icon: 'refresh',
        color: 'danger-500, #cf445e',
        title: 'Dependencies failed',
      };
    }
    case 'DependenciesChanged': {
      return {
        icon: 'refresh',
        color: 'warn-600, #ba8925',
        title: 'Dependencies changed',
      };
    }
    case 'SemanticsChanged': {
      return {
        icon: 'refresh',
        color: 'warn-600, #ba8925',
        title: 'Semantics changed',
      };
    }
    case 'Failed': {
      return {
        icon: 'close-circle',
        color: 'danger-500, #cf445e',
        title: 'Failed',
      };
    }
  }
  // Otherwise, show last status
  switch (executeStatus) {
    case 'Succeeded': {
      return {
        icon: 'checkbox-circle',
        color: 'success-500, #3c8455',
        title: 'Succeeded',
      };
    }
    case 'Failed': {
      return {
        icon: 'close-circle',
        color: 'danger-500, #cf445e',
        title: 'Failed',
      };
    }
    case 'Cancelled': {
      return {
        icon: 'forbid',
        color: 'warn-600, #ba8925',
        title: 'Cancelled',
      };
    }
  }
  // Although this should be redundant, it avoids this function every returning undefined
  // which causes other errors (e.g. if there is a patching error or a new variant added to
  // the above enums)
  return {
    icon: 'question',
    color: 'neutral-500, #6e7591',
    title: 'Unknown status',
  };
};

exports.executionIconByStatus = executionIconByStatus;
exports.isPending = isPending;

//# sourceMappingURL=codeUtils-9e5f6d23.js.map