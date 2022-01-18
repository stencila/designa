import { Colors } from '../../types'
import { IconNames } from '../icon/iconNames'
import { ExecuteRequired, ExecuteStatus } from './codeTypes'

export const executionIconByStatus = (
  executeStatus: ExecuteStatus,
  executeRequired: ExecuteRequired
): {
  icon: IconNames
  color: `${Colors}, ${string}`
  title: string
} => {
  if (executeRequired === 'No') {
    switch (executeStatus) {
      case 'Scheduled': {
        return {
          icon: 'timer-2',
          color: 'neutral-500, #6e7591',
          title: 'Scheduled',
        }
      }
      case 'ScheduledPreviouslyFailed': {
        return {
          icon: 'timer-2',
          color: 'danger-500, #cf445e',
          title: 'Scheduled (previously failed)',
        }
      }
      case 'Running': {
        return {
          icon: 'loader-2',
          color: 'neutral-500, #6e7591',
          title: 'Running',
        }
      }
      case 'RunningPreviouslyFailed': {
        return {
          icon: 'loader-2',
          color: 'danger-500, #cf445e',
          title: 'Running (previously failed)',
        }
      }
      case 'Succeeded': {
        return {
          icon: 'checkbox-circle',
          color: 'success-500, #3c8455',
          title: 'Succeeded',
        }
      }
      case 'Failed': {
        return {
          icon: 'close-circle',
          color: 'danger-500, #cf445e',
          title: 'Failed',
        }
      }
      case 'Cancelled': {
        return {
          icon: 'forbid',
          color: 'warn-600, #ba8925',
          title: 'Cancelled',
        }
      }
      default: {
        return {
          icon: 'refresh',
          color: 'neutral-500, #6e7591',
          title: 'Run node',
        }
      }
    }
  }

  switch (executeRequired) {
    case 'NeverExecuted': {
      return {
        icon: 'indeterminate-circle',
        color: 'neutral-500, #6e7591',
        title: 'Not run yet',
      }
    }
    case 'DependenciesFailed': {
      return {
        icon: 'refresh',
        color: 'danger-500, #cf445e',
        title: 'Dependencies failed, re-run to update value',
      }
    }
    case 'DependenciesChanged': {
      return {
        icon: 'refresh',
        color: 'warn-600, #ba8925',
        title: 'Dependencies changed, re-run to update value',
      }
    }
    case 'SemanticsChanged': {
      return {
        icon: 'refresh',
        color: 'warn-600, #ba8925',
        title: 'Semantics changed, re-run to update value',
      }
    }
  }
}
