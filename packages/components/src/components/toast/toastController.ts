import mem from 'mem'
import { Components } from '../../components'

export enum ToastTypes {
  neutral = 'neutral',
  success = 'success',
  warn = 'warn',
  danger = 'danger',
}

export type ToastType = keyof typeof ToastTypes

export enum ToastPositions {
  topStart = 'topStart',
  topCenter = 'topCenter',
  topEnd = 'topEnd',
  bottomStart = 'bottomStart',
  bottomCenter = 'bottomCenter',
  bottomEnd = 'bottomEnd',
}

export type ToastPosition = keyof typeof ToastPositions

type ToastOptions = Partial<Components.StencilaToast>

const init = (options: ToastOptions): Element | HTMLElement => {
  const toastContainer = document.querySelector('stencila-toast-container')

  if (toastContainer) {
    return toastContainer
  }

  const container = document.createElement('stencila-toast-container')

  if (options.position !== undefined) {
    container.position = options.position
  }

  document.body.append(container)
  return container
}

// ==============================================================================

interface ToastController {
  present: (message: string, options?: ToastOptions) => void
}

// Base Toast controller function for managing the presentation of `stencila-toast` components
export const toastController = (
  baseOptions: ToastOptions = {}
): ToastController => {
  const present = (
    message: string,
    options: ToastOptions | undefined = {}
  ): void => {
    const el = document.createElement('stencila-toast')

    el.type = options.type ?? baseOptions.type ?? ToastTypes.neutral
    el.position =
      options.position ?? baseOptions.position ?? ToastPositions.topCenter
    el.dismissable = options.dismissable ?? baseOptions.dismissable
    el.duration = options.duration ?? baseOptions.duration

    el.innerText = message
    init(baseOptions).append(el)
  }

  /** Memoize the notification function based on the message string and options to avoid showing
   * duplicate notifications in quick succession.
   */
  const memoizedPresent = mem(present, {
    cacheKey: JSON.stringify,
    maxAge: 150,
  })

  return {
    present: memoizedPresent,
  }
}
