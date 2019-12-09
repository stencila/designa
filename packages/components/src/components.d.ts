/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  IconNames,
} from './components/icon/icon';
import {
  CodeChunk,
  Collection,
  Node,
} from '@stencila/schema';
import {
  IconNames as IconNames1,
} from './components/icon/icon';
import {
  ChildTab,
} from './components/tabList/tabList';

export namespace Components {
  interface StencilaActionMenu {
    /**
    * List of buttons to include in Action Menu.
    */
    'actions': HTMLButtonElement[];
    /**
    * Defines whether the Action Menu can be collapsed and expanded
    */
    'expandable': boolean;
  }
  interface StencilaButton {
    /**
    * Screen-reader accessible label to read out.
    */
    'ariaLabel': string;
    /**
    * The type of button to render, options correspond to HTML Button `type` attribute. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button Only applies if the button is not an anchor link.
    */
    'buttonType': 'button' | 'submit' | 'reset';
    /**
    * Function to be called when clicking the button. Passed function will be wrapped in a Promise, and the result returned.
    */
    'clickHandlerProp': (e?: MouseEvent) => unknown;
    /**
    * If true, prevents the user from interacting with the button.
    */
    'disabled': boolean;
    /**
    * If an `href` property is provided, button will be rendered using an `<a>` anchor tag.
    */
    'href'?: string;
    /**
    * Name of the icon to render inside the button
    * @see Icon component for possible values
    */
    'icon': HTMLElement | IconNames;
    /**
    * If true, removes extra padding from Icon inside the button TODO: See if we can automatically infer removal of padding through CSS
    */
    'iconOnly': boolean;
    /**
    * If true, disables the button, shows a loading icon, and prevents the click handler from firing
    */
    'isLoading': boolean;
    /**
    * Renders the button using a secondory, and usually less visually prominent, Button CSS stylesheet.
    */
    'isSecondary': boolean;
    /**
    * The overall size of the Button.
    */
    'size': 'xsmall' | 'small' | 'default' | 'large';
    /**
    * Determines where to display the linked URL, options correspond to HTML Anchor `target` attribute. Only applies if the button is an anchor link. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
    */
    'target'?: HTMLAnchorElement['target'];
  }
  interface StencilaCodeChunk {
    'executeHandler': (codeChunk: CodeChunk) => Promise<CodeChunk>;
    'getJSON': () => Promise<CodeChunk>;
    /**
    * Whether the code section is visible or not
    */
    'isCodeCollapsedProp': boolean;
    /**
    * Programming language of the CodeChunk
    */
    'programmingLanguageProp': string;
  }
  interface StencilaCodeEditor {
    /**
    * Function to be evaluated over the contents of the CodeChunk.
    */
    'executeHandler': (codeChunk: CodeChunk) => Promise<CodeChunk>;
    /**
    * Public method, returning the CodeChunk contents as Stencila JSON.
    */
    'getJSON': () => Promise<CodeChunk>;
    /**
    * Determines the visibility of line numbers
    */
    'lineNumbers': boolean;
    /**
    * Programming language of the CodeEditor
    */
    'programmingLanguage': string;
    /**
    * List of all supported programming languages
    */
    'programmingLanguages': string[];
  }
  interface StencilaCodeError {
    'hasStacktrace': boolean;
    'kind': 'incapable' | 'warning' | 'error';
    'open': boolean;
  }
  interface StencilaCodeExpression {}
  interface StencilaDetails {
    'open': boolean;
  }
  interface StencilaIcon {
    'icon': IconNames;
  }
  interface StencilaNodeList {
    'nodes': Node[];
  }
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
    * A list of string values to use as tab labels
    */
    'tabs': ChildTab[];
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
  interface StencilaTooltip {
    /**
    * The text content of the Tooltip.
    */
    'text': string;
  }
  interface StencilaTooltipElement {}
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

  interface HTMLStencilaCodeEditorElement extends Components.StencilaCodeEditor, HTMLStencilElement {}
  var HTMLStencilaCodeEditorElement: {
    prototype: HTMLStencilaCodeEditorElement;
    new (): HTMLStencilaCodeEditorElement;
  };

  interface HTMLStencilaCodeErrorElement extends Components.StencilaCodeError, HTMLStencilElement {}
  var HTMLStencilaCodeErrorElement: {
    prototype: HTMLStencilaCodeErrorElement;
    new (): HTMLStencilaCodeErrorElement;
  };

  interface HTMLStencilaCodeExpressionElement extends Components.StencilaCodeExpression, HTMLStencilElement {}
  var HTMLStencilaCodeExpressionElement: {
    prototype: HTMLStencilaCodeExpressionElement;
    new (): HTMLStencilaCodeExpressionElement;
  };

  interface HTMLStencilaDetailsElement extends Components.StencilaDetails, HTMLStencilElement {}
  var HTMLStencilaDetailsElement: {
    prototype: HTMLStencilaDetailsElement;
    new (): HTMLStencilaDetailsElement;
  };

  interface HTMLStencilaIconElement extends Components.StencilaIcon, HTMLStencilElement {}
  var HTMLStencilaIconElement: {
    prototype: HTMLStencilaIconElement;
    new (): HTMLStencilaIconElement;
  };

  interface HTMLStencilaNodeListElement extends Components.StencilaNodeList, HTMLStencilElement {}
  var HTMLStencilaNodeListElement: {
    prototype: HTMLStencilaNodeListElement;
    new (): HTMLStencilaNodeListElement;
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

  interface HTMLStencilaTooltipElement extends Components.StencilaTooltip, HTMLStencilElement {}
  var HTMLStencilaTooltipElement: {
    prototype: HTMLStencilaTooltipElement;
    new (): HTMLStencilaTooltipElement;
  };

  interface HTMLStencilaTooltipElementElement extends Components.StencilaTooltipElement, HTMLStencilElement {}
  var HTMLStencilaTooltipElementElement: {
    prototype: HTMLStencilaTooltipElementElement;
    new (): HTMLStencilaTooltipElementElement;
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
    'stencila-code-editor': HTMLStencilaCodeEditorElement;
    'stencila-code-error': HTMLStencilaCodeErrorElement;
    'stencila-code-expression': HTMLStencilaCodeExpressionElement;
    'stencila-details': HTMLStencilaDetailsElement;
    'stencila-icon': HTMLStencilaIconElement;
    'stencila-node-list': HTMLStencilaNodeListElement;
    'stencila-tab': HTMLStencilaTabElement;
    'stencila-tab-list': HTMLStencilaTabListElement;
    'stencila-toc': HTMLStencilaTocElement;
    'stencila-tooltip': HTMLStencilaTooltipElement;
    'stencila-tooltip-element': HTMLStencilaTooltipElementElement;
    'stencila-vertical-nav': HTMLStencilaVerticalNavElement;
  }
}

declare namespace LocalJSX {
  interface StencilaActionMenu {
    /**
    * List of buttons to include in Action Menu.
    */
    'actions'?: HTMLButtonElement[];
    /**
    * Defines whether the Action Menu can be collapsed and expanded
    */
    'expandable'?: boolean;
  }
  interface StencilaButton {
    /**
    * Screen-reader accessible label to read out.
    */
    'ariaLabel'?: string;
    /**
    * The type of button to render, options correspond to HTML Button `type` attribute. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button Only applies if the button is not an anchor link.
    */
    'buttonType'?: 'button' | 'submit' | 'reset';
    /**
    * Function to be called when clicking the button. Passed function will be wrapped in a Promise, and the result returned.
    */
    'clickHandlerProp'?: (e?: MouseEvent) => unknown;
    /**
    * If true, prevents the user from interacting with the button.
    */
    'disabled'?: boolean;
    /**
    * If an `href` property is provided, button will be rendered using an `<a>` anchor tag.
    */
    'href'?: string;
    /**
    * Name of the icon to render inside the button
    * @see Icon component for possible values
    */
    'icon'?: HTMLElement | IconNames;
    /**
    * If true, removes extra padding from Icon inside the button TODO: See if we can automatically infer removal of padding through CSS
    */
    'iconOnly'?: boolean;
    /**
    * If true, disables the button, shows a loading icon, and prevents the click handler from firing
    */
    'isLoading'?: boolean;
    /**
    * Renders the button using a secondory, and usually less visually prominent, Button CSS stylesheet.
    */
    'isSecondary'?: boolean;
    /**
    * The overall size of the Button.
    */
    'size'?: 'xsmall' | 'small' | 'default' | 'large';
    /**
    * Determines where to display the linked URL, options correspond to HTML Anchor `target` attribute. Only applies if the button is an anchor link. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
    */
    'target'?: HTMLAnchorElement['target'];
  }
  interface StencilaCodeChunk {
    'executeHandler'?: (codeChunk: CodeChunk) => Promise<CodeChunk>;
    /**
    * Whether the code section is visible or not
    */
    'isCodeCollapsedProp'?: boolean;
    'onCollapseAllCode'?: (event: CustomEvent<any>) => void;
    /**
    * Programming language of the CodeChunk
    */
    'programmingLanguageProp'?: string;
  }
  interface StencilaCodeEditor {
    /**
    * Function to be evaluated over the contents of the CodeChunk.
    */
    'executeHandler'?: (codeChunk: CodeChunk) => Promise<CodeChunk>;
    /**
    * Determines the visibility of line numbers
    */
    'lineNumbers'?: boolean;
    /**
    * Programming language of the CodeEditor
    */
    'programmingLanguage'?: string;
    /**
    * List of all supported programming languages
    */
    'programmingLanguages'?: string[];
  }
  interface StencilaCodeError {
    'hasStacktrace'?: boolean;
    'kind'?: 'incapable' | 'warning' | 'error';
    'open'?: boolean;
  }
  interface StencilaCodeExpression {}
  interface StencilaDetails {
    'open'?: boolean;
  }
  interface StencilaIcon {
    'icon'?: IconNames;
  }
  interface StencilaNodeList {
    'nodes'?: Node[];
  }
  interface StencilaTab {
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
  interface StencilaTabList {
    /**
    * A list of string values to use as tab labels
    */
    'tabs': ChildTab[];
  }
  interface StencilaToc {
    /**
    * Where to grab the headings to build the table of contents.
    */
    'contentSelector'?: string;
    /**
    * Which headings to grab inside of the contentSelector element.
    */
    'headingSelector'?: string;
  }
  interface StencilaTooltip {
    /**
    * The text content of the Tooltip.
    */
    'text': string;
  }
  interface StencilaTooltipElement {}
  interface StencilaVerticalNav {
    'collection'?: Collection;
  }

  interface IntrinsicElements {
    'stencila-action-menu': StencilaActionMenu;
    'stencila-button': StencilaButton;
    'stencila-code-chunk': StencilaCodeChunk;
    'stencila-code-editor': StencilaCodeEditor;
    'stencila-code-error': StencilaCodeError;
    'stencila-code-expression': StencilaCodeExpression;
    'stencila-details': StencilaDetails;
    'stencila-icon': StencilaIcon;
    'stencila-node-list': StencilaNodeList;
    'stencila-tab': StencilaTab;
    'stencila-tab-list': StencilaTabList;
    'stencila-toc': StencilaToc;
    'stencila-tooltip': StencilaTooltip;
    'stencila-tooltip-element': StencilaTooltipElement;
    'stencila-vertical-nav': StencilaVerticalNav;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'stencila-action-menu': LocalJSX.StencilaActionMenu & JSXBase.HTMLAttributes<HTMLStencilaActionMenuElement>;
      'stencila-button': LocalJSX.StencilaButton & JSXBase.HTMLAttributes<HTMLStencilaButtonElement>;
      'stencila-code-chunk': LocalJSX.StencilaCodeChunk & JSXBase.HTMLAttributes<HTMLStencilaCodeChunkElement>;
      'stencila-code-editor': LocalJSX.StencilaCodeEditor & JSXBase.HTMLAttributes<HTMLStencilaCodeEditorElement>;
      'stencila-code-error': LocalJSX.StencilaCodeError & JSXBase.HTMLAttributes<HTMLStencilaCodeErrorElement>;
      'stencila-code-expression': LocalJSX.StencilaCodeExpression & JSXBase.HTMLAttributes<HTMLStencilaCodeExpressionElement>;
      'stencila-details': LocalJSX.StencilaDetails & JSXBase.HTMLAttributes<HTMLStencilaDetailsElement>;
      'stencila-icon': LocalJSX.StencilaIcon & JSXBase.HTMLAttributes<HTMLStencilaIconElement>;
      'stencila-node-list': LocalJSX.StencilaNodeList & JSXBase.HTMLAttributes<HTMLStencilaNodeListElement>;
      'stencila-tab': LocalJSX.StencilaTab & JSXBase.HTMLAttributes<HTMLStencilaTabElement>;
      'stencila-tab-list': LocalJSX.StencilaTabList & JSXBase.HTMLAttributes<HTMLStencilaTabListElement>;
      'stencila-toc': LocalJSX.StencilaToc & JSXBase.HTMLAttributes<HTMLStencilaTocElement>;
      'stencila-tooltip': LocalJSX.StencilaTooltip & JSXBase.HTMLAttributes<HTMLStencilaTooltipElement>;
      'stencila-tooltip-element': LocalJSX.StencilaTooltipElement & JSXBase.HTMLAttributes<HTMLStencilaTooltipElementElement>;
      'stencila-vertical-nav': LocalJSX.StencilaVerticalNav & JSXBase.HTMLAttributes<HTMLStencilaVerticalNavElement>;
    }
  }
}


