import mem from 'mem'
import { Components } from '../../components'

export enum ToastTypes {
  info = 'info',
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
  const toastContainer = document.querySelector('.stencila-toast-container')

  if (toastContainer) {
    return toastContainer
  }

  const container = document.createElement('animate-presence')
  container.classList.add('stencila-toast-container')
  container.setAttribute('aria-live', 'polite')
  container.setAttribute('role', 'status')
  // TODO: Look into `aria-relevant="additions"` not silencing node removals in VoiceOver
  container.setAttribute('aria-relevant', 'additions')

  if (options.position !== undefined) {
    container.setAttribute('position', options.position)
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

    el.type = options.type ?? baseOptions.type ?? ToastTypes.info
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
