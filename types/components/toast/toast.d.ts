import { ToastPosition, ToastType } from './toastController';
export declare class StencilaToast {
  private el;
  private timeout;
  /**
   * If true, shows a "close" button to immediately dismiss the toast
   */
  dismissable?: boolean | undefined;
  /**
   * Duration in milliseconds for how long the toast should be display
   * Setting `duration` to `0` will disable auto-dismissal of the toast.
   */
  duration?: number | undefined;
  /**
   * Type of the toast to show. Affects the component colour scheme.
   */
  type: ToastType;
  /**
   * Where on the screen to show the Toast. Overrides the base position set in the `ToastController` instance.
   */
  position: ToastPosition | undefined;
  private getIconByType;
  private dismiss;
  private pauseAutoDismiss;
  private autoDismiss;
  private styleActionButtons;
  componentWillLoad(): void;
  componentDidLoad(): void;
  render(): any;
}
