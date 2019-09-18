/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Collection,
} from '@stencila/schema';

export namespace Components {
  interface StencilaActionMenu {
    /**
    * List of buttons to include in Action Menu.
    */
    'actions': HTMLButtonElement[];
  }
  interface StencilaButton {
    /**
    * Screen-reader accessible label to read out.
    */
    'ariaLabel': string;
    /**
    * The type of button to render, options correspond to HTML Button `type` attribute. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
    */
    'buttonType': 'button' | 'submit' | 'reset';
    /**
    * If true, prevents the user from interacting with the button.
    */
    'disabled': boolean;
    /**
    * If an `href` property is provided, button will be rendered using an `<a>` anchor tag.
    */
    'href'?: string;
    'iconName': string;
    /**
    * The displayed text of the Tab.
    */
    'isSecondary': boolean;
    /**
    * The displayed text of the Button.
    */
    'label': string;
    /**
    * The displayed text of the Button.
    */
    'size': 'xsmall' | 'small' | 'default' | 'large';
  }
  interface StencilaCodeChunk {
    /**
    * Whether the code section is visible or not
    */
    'isCodeCollapsedProp': boolean;
  }
  interface StencilaCodeExpression {}
  interface StencilaTab {
    /**
    * The link the tab should navigate to
    */
    'href': string;
    /**
    * Indicates whether the current tab is "selected"
    */
    'isSelected': boolean;
    /**
    * The displayed text of the Tab
    */
    'label': string;
  }
  interface StencilaTabList {
    /**
    * The link the tab should navigate to
    */
    'href': string;
    /**
    * The displayed text of the Tab
    */
    'label': string;
    /**
    * A list of string values to use as tab labels
    */
    'tabs': string[];
  }
  interface StencilaToc {
    /**
    * Where to grab the headings to build the table of contents.
    */
    'contentSelector': string;
    /**
    * Which headings to grab inside of the contentSelector element.
    */
    'headingSelector': string;
  }
  interface StencilaVerticalNav {
    'collection'?: Collection;
  }
}

declare global {


  interface HTMLStencilaActionMenuElement extends Components.StencilaActionMenu, HTMLStencilElement {}
  var HTMLStencilaActionMenuElement: {
    prototype: HTMLStencilaActionMenuElement;
    new (): HTMLStencilaActionMenuElement;
  };

  interface HTMLStencilaButtonElement extends Components.StencilaButton, HTMLStencilElement {}
  var HTMLStencilaButtonElement: {
    prototype: HTMLStencilaButtonElement;
    new (): HTMLStencilaButtonElement;
  };

  interface HTMLStencilaCodeChunkElement extends Components.StencilaCodeChunk, HTMLStencilElement {}
  var HTMLStencilaCodeChunkElement: {
    prototype: HTMLStencilaCodeChunkElement;
    new (): HTMLStencilaCodeChunkElement;
  };

  interface HTMLStencilaCodeExpressionElement extends Components.StencilaCodeExpression, HTMLStencilElement {}
  var HTMLStencilaCodeExpressionElement: {
    prototype: HTMLStencilaCodeExpressionElement;
    new (): HTMLStencilaCodeExpressionElement;
  };

  interface HTMLStencilaTabElement extends Components.StencilaTab, HTMLStencilElement {}
  var HTMLStencilaTabElement: {
    prototype: HTMLStencilaTabElement;
    new (): HTMLStencilaTabElement;
  };

  interface HTMLStencilaTabListElement extends Components.StencilaTabList, HTMLStencilElement {}
  var HTMLStencilaTabListElement: {
    prototype: HTMLStencilaTabListElement;
    new (): HTMLStencilaTabListElement;
  };

  interface HTMLStencilaTocElement extends Components.StencilaToc, HTMLStencilElement {}
  var HTMLStencilaTocElement: {
    prototype: HTMLStencilaTocElement;
    new (): HTMLStencilaTocElement;
  };

  interface HTMLStencilaVerticalNavElement extends Components.StencilaVerticalNav, HTMLStencilElement {}
  var HTMLStencilaVerticalNavElement: {
    prototype: HTMLStencilaVerticalNavElement;
    new (): HTMLStencilaVerticalNavElement;
  };
  interface HTMLElementTagNameMap {
    'stencila-action-menu': HTMLStencilaActionMenuElement;
    'stencila-button': HTMLStencilaButtonElement;
    'stencila-code-chunk': HTMLStencilaCodeChunkElement;
    'stencila-code-expression': HTMLStencilaCodeExpressionElement;
    'stencila-tab': HTMLStencilaTabElement;
    'stencila-tab-list': HTMLStencilaTabListElement;
    'stencila-toc': HTMLStencilaTocElement;
    'stencila-vertical-nav': HTMLStencilaVerticalNavElement;
  }
}

declare namespace LocalJSX {
  interface StencilaActionMenu extends JSXBase.HTMLAttributes<HTMLStencilaActionMenuElement> {
    /**
    * List of buttons to include in Action Menu.
    */
    'actions'?: HTMLButtonElement[];
  }
  interface StencilaButton extends JSXBase.HTMLAttributes<HTMLStencilaButtonElement> {
    /**
    * Screen-reader accessible label to read out.
    */
    'ariaLabel'?: string;
    /**
    * The type of button to render, options correspond to HTML Button `type` attribute. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
    */
    'buttonType'?: 'button' | 'submit' | 'reset';
    /**
    * If true, prevents the user from interacting with the button.
    */
    'disabled'?: boolean;
    /**
    * If an `href` property is provided, button will be rendered using an `<a>` anchor tag.
    */
    'href'?: string;
    'iconName'?: string;
    /**
    * The displayed text of the Tab.
    */
    'isSecondary'?: boolean;
    /**
    * The displayed text of the Button.
    */
    'label'?: string;
    /**
    * The displayed text of the Button.
    */
    'size'?: 'xsmall' | 'small' | 'default' | 'large';
  }
  interface StencilaCodeChunk extends JSXBase.HTMLAttributes<HTMLStencilaCodeChunkElement> {
    /**
    * Whether the code section is visible or not
    */
    'isCodeCollapsedProp'?: boolean;
    'onCollapseAllCode'?: (event: CustomEvent<any>) => void;
  }
  interface StencilaCodeExpression extends JSXBase.HTMLAttributes<HTMLStencilaCodeExpressionElement> {}
  interface StencilaTab extends JSXBase.HTMLAttributes<HTMLStencilaTabElement> {
    /**
    * The link the tab should navigate to
    */
    'href'?: string;
    /**
    * Indicates whether the current tab is "selected"
    */
    'isSelected'?: boolean;
    /**
    * The displayed text of the Tab
    */
    'label'?: string;
  }
  interface StencilaTabList extends JSXBase.HTMLAttributes<HTMLStencilaTabListElement> {
    /**
    * The link the tab should navigate to
    */
    'href'?: string;
    /**
    * The displayed text of the Tab
    */
    'label'?: string;
    /**
    * A list of string values to use as tab labels
    */
    'tabs': string[];
  }
  interface StencilaToc extends JSXBase.HTMLAttributes<HTMLStencilaTocElement> {
    /**
    * Where to grab the headings to build the table of contents.
    */
    'contentSelector'?: string;
    /**
    * Which headings to grab inside of the contentSelector element.
    */
    'headingSelector'?: string;
  }
  interface StencilaVerticalNav extends JSXBase.HTMLAttributes<HTMLStencilaVerticalNavElement> {
    'collection'?: Collection;
  }

  interface IntrinsicElements {
    'stencila-action-menu': StencilaActionMenu;
    'stencila-button': StencilaButton;
    'stencila-code-chunk': StencilaCodeChunk;
    'stencila-code-expression': StencilaCodeExpression;
    'stencila-tab': StencilaTab;
    'stencila-tab-list': StencilaTabList;
    'stencila-toc': StencilaToc;
    'stencila-vertical-nav': StencilaVerticalNav;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


