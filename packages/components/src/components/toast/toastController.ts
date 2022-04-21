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
  present: (message: string, options?: ToastOptions) => HTMLStencilaToastElement
}

// Base Toast controller function for managing the presentation of `stencila-toast` components
export const toastController = (
  baseOptions: ToastOptions = {}
): ToastController => {
  const present = (
    message: string,
    options: ToastOptions | undefined = {}
  ): HTMLStencilaToastElement => {
    const toastEl = document.createElement('stencila-toast')

    toastEl.type = options.type ?? baseOptions.type ?? ToastTypes.neutral
    toastEl.position =
      options.position ?? baseOptions.position ?? ToastPositions.topCenter
    toastEl.dismissable = options.dismissable ?? baseOptions.dismissable
    toastEl.duration = options.duration ?? baseOptions.duration

    toastEl.innerText = message
    init(baseOptions).append(toastEl)
    return toastEl
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
