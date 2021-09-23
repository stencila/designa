import { CodeError } from '@stencila/schema';
declare type Level = 'info' | 'warning' | 'error';
export declare class ErrorComponent {
  private el;
  /**
   * The `CodeError` object
   */
  error?: CodeError;
  /**
   * The severity of the error message
   */
  kind: string | Level;
  stackIsOpen: boolean;
  private hasStack;
  private toggleStackVisibility;
  private getIcon;
  private getLevel;
  componentWillLoad(): void;
  render(): any;
}
export {};
