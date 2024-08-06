import { Placement } from '@popperjs/core';
import { ComponentInterface } from '../../stencil-public-runtime';
export declare class Tooltip implements ComponentInterface {
  el: HTMLStencilaTooltipElement;
  /**
   * The text content of the Tooltip.
   */
  text: string;
  /**
   * The placement of the tooltip
   */
  position: Placement;
  private tooltipRef?;
  private popperRef;
  private showTooltip;
  private onMouseMoveHandler;
  private onMouseOutHandler;
  private destroyTooltip;
  private loadComponent;
  private unloadComponent;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  watchHandler(newText: string): void;
  render(): HTMLElement;
}
