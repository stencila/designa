import { Components } from '../../components';
export declare enum ToastTypes {
  neutral = "neutral",
  success = "success",
  warn = "warn",
  danger = "danger"
}
export declare type ToastType = keyof typeof ToastTypes;
export declare enum ToastPositions {
  topStart = "topStart",
  topCenter = "topCenter",
  topEnd = "topEnd",
  bottomStart = "bottomStart",
  bottomCenter = "bottomCenter",
  bottomEnd = "bottomEnd"
}
export declare type ToastPosition = keyof typeof ToastPositions;
declare type ToastOptions = Partial<Components.StencilaToast>;
interface ToastController {
  present: (message: string, options?: ToastOptions) => void;
}
export declare const toastController: (baseOptions?: ToastOptions) => ToastController;
export {};
