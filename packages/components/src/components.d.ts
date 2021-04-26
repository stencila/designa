/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Colors } from "./types";
import { IconNames } from "./components/icon/iconNames";
import { CodeChunk, CodeError, CodeExpression, Datatable, ImageObject, Node } from "@stencila/schema";
import { Keymap } from "./components/editor/editor";
import { EditorContents, Keymap as Keymap1 } from "./components/editor/editor";
import { Config, Data, Layout } from "plotly.js";
import { VisualizationSpec } from "vega-embed";
import { VegaLoadEvent } from "./components/imageDynamic/imageVega/imageVegaUtils";
import { ChildTab } from "./components/tabList/tabList";
import { ToastPosition, ToastType } from "./components/toast/toastController";
export namespace Components {
    interface StencilaActionMenu {
        /**
          * List of buttons to include in Action Menu.
         */
        "actions": HTMLButtonElement[];
        /**
          * Defines whether the Action Menu can be collapsed and expanded
         */
        "expandable": boolean;
    }
    interface StencilaButton {
        /**
          * Screen-reader accessible label to read out.
         */
        "ariaLabel": string;
        /**
          * The type of button to render, options correspond to HTML Button `type` attribute. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button Only applies if the button is not an anchor link.
         */
        "buttonType": 'button' | 'submit' | 'reset';
        /**
          * The color of the button
         */
        "color": Colors;
        /**
          * An optional data attribute set on the button element for easier targeting using JavaScript.
         */
        "dataEl"?: string;
        /**
          * If true, prevents the user from interacting with the button. Note: Not all browser prevent the click handler from firing on disabled buttons.
         */
        "disabled": boolean;
        /**
          * If true, the button will take up the full width of the parent container
         */
        "fill": boolean;
        /**
          * If an `href` property is provided, button will be rendered using an `<a>` anchor tag.
         */
        "href"?: string;
        /**
          * Name of the icon to render inside the button
          * @see Icon component for possible values
         */
        "icon"?: HTMLElement | IconNames;
        /**
          * If true, removes extra padding from Icon inside the button TODO: See if we can automatically infer removal of padding through CSS
         */
        "iconOnly": boolean;
        /**
          * If true, shows a loading spinner icon and sets a `disabled` attribute on the button. Note: Not all browser prevent the click handler from firing on disabled buttons.
         */
        "isLoading": boolean;
        /**
          * Renders the button using a secondory, and usually less visually prominent, Button CSS stylesheet.
         */
        "isSecondary": boolean;
        /**
          * Renders the button without initial background color or border.
         */
        "minimal": boolean;
        /**
          * Relationship of the link
          * @see https ://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#rel Only applied if `href` prop is also set.
         */
        "rel"?: string;
        /**
          * The overall size of the Button.
         */
        "size": 'xsmall' | 'small' | 'default' | 'large';
        /**
          * Determines where to display the linked URL, options correspond to HTML Anchor `target` attribute. Only applies if the button is an anchor link. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
         */
        "target"?: HTMLAnchorElement['target'];
        /**
          * An optional help text to display for button focus and hover states.
         */
        "tooltip"?: string;
    }
    interface StencilaCodeChunk {
        /**
          * Autofocus the editor on page load
         */
        "autofocus": boolean;
        /**
          * Run the `CodeChunk`
         */
        "execute": () => Promise<CodeChunk>;
        /**
          * A callback function to be called with the value of the `CodeChunk` node when executing the `CodeChunk`.
         */
        "executeHandler"?: (codeChunk: CodeChunk) => Promise<CodeChunk>;
        /**
          * Returns the `CodeChunk` node with the updated `text` content from the editor.
         */
        "getContents": () => Promise<CodeChunk>;
        /**
          * Whether the code section is visible or not
         */
        "isCodeVisible": boolean;
        /**
          * Custom keyboard shortcuts to pass along to CodeMirror
          * @see https ://codemirror.net/6/docs/ref/#keymap
         */
        "keymap": Keymap[];
        /**
          * Programming language of the CodeChunk
         */
        "programmingLanguageProp": string;
    }
    interface StencilaCodeError {
        /**
          * The `CodeError` object
         */
        "error"?: CodeError;
        /**
          * The severity of the error message
         */
        "kind": string | Level;
    }
    interface StencilaCodeExpression {
        /**
          * Run the `CodeExpression`
         */
        "execute": () => Promise<CodeExpression>;
        /**
          * A callback function to be called with the value of the `CodeExpression` node when executing the `CodeExpression`.
         */
        "executeHandler"?: (
    codeExpression: CodeExpression
  ) => Promise<CodeExpression>;
        /**
          * Returns the `CodeExpression` node with the updated `text` contents from the editor.
         */
        "getContents": () => Promise<CodeExpression>;
        /**
          * Programming language of the CodeExpression
         */
        "programmingLanguage": string;
    }
    interface StencilaDataTable {
        /**
          * The `Datatable` node to render
         */
        "table": Datatable;
    }
    interface StencilaDetails {
        /**
          * Determines whether the contents are visible or not.
         */
        "open"?: boolean;
    }
    interface StencilaEditor {
        /**
          * Programming language of the Editor
         */
        "activeLanguage": string;
        /**
          * Autofocus the editor on page load
         */
        "autofocus": boolean;
        /**
          * List of errors to display at the bottom of the code editor section. If the error is a `string`, then it will be rendered as a warning.
         */
        "errors"?: CodeError[] | string[];
        /**
          * Function to be evaluated over the contents of the editor.
         */
        "executeHandler"?: (contents: EditorContents) => Promise<unknown>;
        /**
          * Enables abiility to fold sections of code
         */
        "foldGutter": boolean;
        /**
          * Public method, returning the Editor contents and active language.
         */
        "getContents": () => Promise<EditorContents>;
        /**
          * Custom keyboard shortcuts to pass along to CodeMirror
          * @see https ://codemirror.net/6/docs/ref/#keymap
         */
        "keymap": Keymap[];
        /**
          * List of all supported programming languages
         */
        "languageCapabilities": string[];
        /**
          * Determines the visibility of line numbers
         */
        "lineNumbers": boolean;
        /**
          * Disallow editing of the editor contents when set to `true`
         */
        "readOnly": boolean;
        /**
          * Public method, to replace the contents of the Editor with a supplied string.
         */
        "setContents": (contents: string) => Promise<string>;
    }
    interface StencilaExecutableDocumentToolbar {
        /**
          * When `fixed` the Navbar will remain pinned to the top of the screen. Note that if the Navbar component is not followed by a sibling element, you will have to set `margin-top: 3rem` on the following element yourself.
         */
        "position": 'fixed' | 'static';
        /**
          * The URL for requesting a SoftwareSession as defined in Stencila Schema. Passed to Stencila Executa for instantiating the session. TODO: If undefined user should be able to set one themselves (e.g. running a local machine)
         */
        "sessionProviderUrl": string;
        /**
          * The URL of the document being decorated. Could be a Snapshot from Stencila Hub, a Project URL, or something else.
         */
        "sourceUrl": string;
    }
    interface StencilaIcon {
        /**
          * Name of the icon to be rendered. Corresponds to icon names from the [Remix Icon set](http://remixicon.com)
         */
        "icon": IconNames;
        /**
          * Style with which to render the icon
         */
        "iconStyle": 'fill' | 'line';
    }
    interface StencilaImageObject {
        /**
          * The `ImageObject` node to render
         */
        "image": ImageObject;
    }
    interface StencilaImagePlotly {
        /**
          * The Plotly configuration object
         */
        "config"?: Partial<Config>;
        /**
          * The Plotly data to render as an interactive visualization.
         */
        "data"?: Data[];
        /**
          * The Plotly layout settings object
         */
        "layout"?: Partial<Layout>;
    }
    interface StencilaImageVega {
        /**
          * A JavaScript object containing options for embedding
          * @see https ://github.com/vega/vega-embed#options
         */
        "options"?: Record<string, unknown>;
        /**
          * The Vega or Vega-Lite spec
          * @see https ://vega.github.io/vega/docs/specification/
         */
        "spec"?: VisualizationSpec | string;
    }
    interface StencilaInput {
        /**
          * Automatically bring cursor focus to the input field on render.
         */
        "autoFocus": boolean;
        /**
          * Visually conceal the input label. Use sparingly for simple forms only with a descriptive action button.
         */
        "hideLabel": boolean;
        /**
          * Icon to show at the start of the input field.
         */
        "iconStart"?: IconNames;
        /**
          * Render the label and input field as inline elements.
         */
        "inline": boolean;
        /**
          * A hint to the browser for which keyboard to display.
         */
        "inputmode"?: | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';
        /**
          * Accessible text label for the input field. Defaults to the input's `name` prop.
         */
        "label"?: string;
        /**
          * The name of the input, submitted as the value's label inside the form data.
         */
        "name": string;
        /**
          * Short hint demonstrating expected input value. Shown when the input is empty.
         */
        "placeholder"?: string;
        /**
          * When `true` value must be provided before submitting.
         */
        "required": boolean;
        /**
          * Type of input field.
         */
        "type": 'text' | 'password' | 'number' | 'search';
        /**
          * Text value of the input.
         */
        "value"?: number | string;
    }
    interface StencilaMenu {
        /**
          * Determines whether the Menu is shown or not
         */
        "isOpen": boolean;
    }
    interface StencilaMenuItem {
        "icon": IconNames | undefined;
    }
    interface StencilaNodeList {
        /**
          * Array of nodes to render.
         */
        "nodes": Node[] | undefined;
    }
    interface StencilaTab {
        /**
          * The link the tab should navigate to
         */
        "href": string;
        /**
          * Indicates whether the current tab is "selected"
         */
        "isSelected": boolean;
        /**
          * The displayed text of the Tab
         */
        "label": string;
    }
    interface StencilaTabList {
        /**
          * A list of string values to use as tab labels
         */
        "tabs": ChildTab[];
    }
    interface StencilaToast {
        /**
          * Duration in milliseconds for how long the toast should be display
         */
        "duration": number;
        /**
          * Where on the screen to show the Toast. Overrides the base position set in the `ToastController` instance.
         */
        "position": ToastPosition | undefined;
        /**
          * Type of the toast to show. Affects the component color scheme.
         */
        "type": ToastType;
    }
    interface StencilaToolbar {
        /**
          * The background fill color of the Navbar
         */
        "color": Colors | string;
        /**
          * When `fixed` the Navbar will remain pinned to the top of the screen. Note that if the Navbar component is not followed by a sibling element, you will have to set `margin-top: 3rem` on the following element yourself.
         */
        "position": 'static' | 'fixed';
    }
    interface StencilaTooltip {
        /**
          * The text content of the Tooltip.
         */
        "text": string;
    }
    interface StencilaTooltipElement {
    }
}
declare global {
    interface HTMLStencilaActionMenuElement extends Components.StencilaActionMenu, HTMLStencilElement {
    }
    var HTMLStencilaActionMenuElement: {
        prototype: HTMLStencilaActionMenuElement;
        new (): HTMLStencilaActionMenuElement;
    };
    interface HTMLStencilaButtonElement extends Components.StencilaButton, HTMLStencilElement {
    }
    var HTMLStencilaButtonElement: {
        prototype: HTMLStencilaButtonElement;
        new (): HTMLStencilaButtonElement;
    };
    interface HTMLStencilaCodeChunkElement extends Components.StencilaCodeChunk, HTMLStencilElement {
    }
    var HTMLStencilaCodeChunkElement: {
        prototype: HTMLStencilaCodeChunkElement;
        new (): HTMLStencilaCodeChunkElement;
    };
    interface HTMLStencilaCodeErrorElement extends Components.StencilaCodeError, HTMLStencilElement {
    }
    var HTMLStencilaCodeErrorElement: {
        prototype: HTMLStencilaCodeErrorElement;
        new (): HTMLStencilaCodeErrorElement;
    };
    interface HTMLStencilaCodeExpressionElement extends Components.StencilaCodeExpression, HTMLStencilElement {
    }
    var HTMLStencilaCodeExpressionElement: {
        prototype: HTMLStencilaCodeExpressionElement;
        new (): HTMLStencilaCodeExpressionElement;
    };
    interface HTMLStencilaDataTableElement extends Components.StencilaDataTable, HTMLStencilElement {
    }
    var HTMLStencilaDataTableElement: {
        prototype: HTMLStencilaDataTableElement;
        new (): HTMLStencilaDataTableElement;
    };
    interface HTMLStencilaDetailsElement extends Components.StencilaDetails, HTMLStencilElement {
    }
    var HTMLStencilaDetailsElement: {
        prototype: HTMLStencilaDetailsElement;
        new (): HTMLStencilaDetailsElement;
    };
    interface HTMLStencilaEditorElement extends Components.StencilaEditor, HTMLStencilElement {
    }
    var HTMLStencilaEditorElement: {
        prototype: HTMLStencilaEditorElement;
        new (): HTMLStencilaEditorElement;
    };
    interface HTMLStencilaExecutableDocumentToolbarElement extends Components.StencilaExecutableDocumentToolbar, HTMLStencilElement {
    }
    var HTMLStencilaExecutableDocumentToolbarElement: {
        prototype: HTMLStencilaExecutableDocumentToolbarElement;
        new (): HTMLStencilaExecutableDocumentToolbarElement;
    };
    interface HTMLStencilaIconElement extends Components.StencilaIcon, HTMLStencilElement {
    }
    var HTMLStencilaIconElement: {
        prototype: HTMLStencilaIconElement;
        new (): HTMLStencilaIconElement;
    };
    interface HTMLStencilaImageObjectElement extends Components.StencilaImageObject, HTMLStencilElement {
    }
    var HTMLStencilaImageObjectElement: {
        prototype: HTMLStencilaImageObjectElement;
        new (): HTMLStencilaImageObjectElement;
    };
    interface HTMLStencilaImagePlotlyElement extends Components.StencilaImagePlotly, HTMLStencilElement {
    }
    var HTMLStencilaImagePlotlyElement: {
        prototype: HTMLStencilaImagePlotlyElement;
        new (): HTMLStencilaImagePlotlyElement;
    };
    interface HTMLStencilaImageVegaElement extends Components.StencilaImageVega, HTMLStencilElement {
    }
    var HTMLStencilaImageVegaElement: {
        prototype: HTMLStencilaImageVegaElement;
        new (): HTMLStencilaImageVegaElement;
    };
    interface HTMLStencilaInputElement extends Components.StencilaInput, HTMLStencilElement {
    }
    var HTMLStencilaInputElement: {
        prototype: HTMLStencilaInputElement;
        new (): HTMLStencilaInputElement;
    };
    interface HTMLStencilaMenuElement extends Components.StencilaMenu, HTMLStencilElement {
    }
    var HTMLStencilaMenuElement: {
        prototype: HTMLStencilaMenuElement;
        new (): HTMLStencilaMenuElement;
    };
    interface HTMLStencilaMenuItemElement extends Components.StencilaMenuItem, HTMLStencilElement {
    }
    var HTMLStencilaMenuItemElement: {
        prototype: HTMLStencilaMenuItemElement;
        new (): HTMLStencilaMenuItemElement;
    };
    interface HTMLStencilaNodeListElement extends Components.StencilaNodeList, HTMLStencilElement {
    }
    var HTMLStencilaNodeListElement: {
        prototype: HTMLStencilaNodeListElement;
        new (): HTMLStencilaNodeListElement;
    };
    interface HTMLStencilaTabElement extends Components.StencilaTab, HTMLStencilElement {
    }
    var HTMLStencilaTabElement: {
        prototype: HTMLStencilaTabElement;
        new (): HTMLStencilaTabElement;
    };
    interface HTMLStencilaTabListElement extends Components.StencilaTabList, HTMLStencilElement {
    }
    var HTMLStencilaTabListElement: {
        prototype: HTMLStencilaTabListElement;
        new (): HTMLStencilaTabListElement;
    };
    interface HTMLStencilaToastElement extends Components.StencilaToast, HTMLStencilElement {
    }
    var HTMLStencilaToastElement: {
        prototype: HTMLStencilaToastElement;
        new (): HTMLStencilaToastElement;
    };
    interface HTMLStencilaToolbarElement extends Components.StencilaToolbar, HTMLStencilElement {
    }
    var HTMLStencilaToolbarElement: {
        prototype: HTMLStencilaToolbarElement;
        new (): HTMLStencilaToolbarElement;
    };
    interface HTMLStencilaTooltipElement extends Components.StencilaTooltip, HTMLStencilElement {
    }
    var HTMLStencilaTooltipElement: {
        prototype: HTMLStencilaTooltipElement;
        new (): HTMLStencilaTooltipElement;
    };
    interface HTMLStencilaTooltipElementElement extends Components.StencilaTooltipElement, HTMLStencilElement {
    }
    var HTMLStencilaTooltipElementElement: {
        prototype: HTMLStencilaTooltipElementElement;
        new (): HTMLStencilaTooltipElementElement;
    };
    interface HTMLElementTagNameMap {
        "stencila-action-menu": HTMLStencilaActionMenuElement;
        "stencila-button": HTMLStencilaButtonElement;
        "stencila-code-chunk": HTMLStencilaCodeChunkElement;
        "stencila-code-error": HTMLStencilaCodeErrorElement;
        "stencila-code-expression": HTMLStencilaCodeExpressionElement;
        "stencila-data-table": HTMLStencilaDataTableElement;
        "stencila-details": HTMLStencilaDetailsElement;
        "stencila-editor": HTMLStencilaEditorElement;
        "stencila-executable-document-toolbar": HTMLStencilaExecutableDocumentToolbarElement;
        "stencila-icon": HTMLStencilaIconElement;
        "stencila-image-object": HTMLStencilaImageObjectElement;
        "stencila-image-plotly": HTMLStencilaImagePlotlyElement;
        "stencila-image-vega": HTMLStencilaImageVegaElement;
        "stencila-input": HTMLStencilaInputElement;
        "stencila-menu": HTMLStencilaMenuElement;
        "stencila-menu-item": HTMLStencilaMenuItemElement;
        "stencila-node-list": HTMLStencilaNodeListElement;
        "stencila-tab": HTMLStencilaTabElement;
        "stencila-tab-list": HTMLStencilaTabListElement;
        "stencila-toast": HTMLStencilaToastElement;
        "stencila-toolbar": HTMLStencilaToolbarElement;
        "stencila-tooltip": HTMLStencilaTooltipElement;
        "stencila-tooltip-element": HTMLStencilaTooltipElementElement;
    }
}
declare namespace LocalJSX {
    interface StencilaActionMenu {
        /**
          * List of buttons to include in Action Menu.
         */
        "actions"?: HTMLButtonElement[];
        /**
          * Defines whether the Action Menu can be collapsed and expanded
         */
        "expandable"?: boolean;
    }
    interface StencilaButton {
        /**
          * Screen-reader accessible label to read out.
         */
        "ariaLabel"?: string;
        /**
          * The type of button to render, options correspond to HTML Button `type` attribute. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button Only applies if the button is not an anchor link.
         */
        "buttonType"?: 'button' | 'submit' | 'reset';
        /**
          * The color of the button
         */
        "color"?: Colors;
        /**
          * An optional data attribute set on the button element for easier targeting using JavaScript.
         */
        "dataEl"?: string;
        /**
          * If true, prevents the user from interacting with the button. Note: Not all browser prevent the click handler from firing on disabled buttons.
         */
        "disabled"?: boolean;
        /**
          * If true, the button will take up the full width of the parent container
         */
        "fill"?: boolean;
        /**
          * If an `href` property is provided, button will be rendered using an `<a>` anchor tag.
         */
        "href"?: string;
        /**
          * Name of the icon to render inside the button
          * @see Icon component for possible values
         */
        "icon"?: HTMLElement | IconNames;
        /**
          * If true, removes extra padding from Icon inside the button TODO: See if we can automatically infer removal of padding through CSS
         */
        "iconOnly"?: boolean;
        /**
          * If true, shows a loading spinner icon and sets a `disabled` attribute on the button. Note: Not all browser prevent the click handler from firing on disabled buttons.
         */
        "isLoading"?: boolean;
        /**
          * Renders the button using a secondory, and usually less visually prominent, Button CSS stylesheet.
         */
        "isSecondary"?: boolean;
        /**
          * Renders the button without initial background color or border.
         */
        "minimal"?: boolean;
        /**
          * Relationship of the link
          * @see https ://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#rel Only applied if `href` prop is also set.
         */
        "rel"?: string;
        /**
          * The overall size of the Button.
         */
        "size"?: 'xsmall' | 'small' | 'default' | 'large';
        /**
          * Determines where to display the linked URL, options correspond to HTML Anchor `target` attribute. Only applies if the button is an anchor link. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
         */
        "target"?: HTMLAnchorElement['target'];
        /**
          * An optional help text to display for button focus and hover states.
         */
        "tooltip"?: string;
    }
    interface StencilaCodeChunk {
        /**
          * Autofocus the editor on page load
         */
        "autofocus"?: boolean;
        /**
          * A callback function to be called with the value of the `CodeChunk` node when executing the `CodeChunk`.
         */
        "executeHandler"?: (codeChunk: CodeChunk) => Promise<CodeChunk>;
        /**
          * Whether the code section is visible or not
         */
        "isCodeVisible"?: boolean;
        /**
          * Custom keyboard shortcuts to pass along to CodeMirror
          * @see https ://codemirror.net/6/docs/ref/#keymap
         */
        "keymap"?: Keymap[];
        /**
          * Trigger a global DOM event to hide or show all `CodeChunk` and `CodeExpress` component source code, leaving only the results visible.
         */
        "onSetAllCodeVisibility"?: (event: CustomEvent<any>) => void;
        /**
          * Trigger a global DOM event to set the layout of all `CodeChunk` component. Can be set to either show the editor and outputs side by side or stacked vertically.
         */
        "onSetEditorLayout"?: (event: CustomEvent<any>) => void;
        /**
          * Programming language of the CodeChunk
         */
        "programmingLanguageProp"?: string;
    }
    interface StencilaCodeError {
        /**
          * The `CodeError` object
         */
        "error"?: CodeError;
        /**
          * The severity of the error message
         */
        "kind"?: string | Level;
    }
    interface StencilaCodeExpression {
        /**
          * A callback function to be called with the value of the `CodeExpression` node when executing the `CodeExpression`.
         */
        "executeHandler"?: (
    codeExpression: CodeExpression
  ) => Promise<CodeExpression>;
        /**
          * Programming language of the CodeExpression
         */
        "programmingLanguage"?: string;
    }
    interface StencilaDataTable {
        /**
          * The `Datatable` node to render
         */
        "table"?: Datatable;
    }
    interface StencilaDetails {
        /**
          * Determines whether the contents are visible or not.
         */
        "open"?: boolean;
    }
    interface StencilaEditor {
        /**
          * Programming language of the Editor
         */
        "activeLanguage"?: string;
        /**
          * Autofocus the editor on page load
         */
        "autofocus"?: boolean;
        /**
          * List of errors to display at the bottom of the code editor section. If the error is a `string`, then it will be rendered as a warning.
         */
        "errors"?: CodeError[] | string[];
        /**
          * Function to be evaluated over the contents of the editor.
         */
        "executeHandler"?: (contents: EditorContents) => Promise<unknown>;
        /**
          * Enables abiility to fold sections of code
         */
        "foldGutter"?: boolean;
        /**
          * Custom keyboard shortcuts to pass along to CodeMirror
          * @see https ://codemirror.net/6/docs/ref/#keymap
         */
        "keymap"?: Keymap[];
        /**
          * List of all supported programming languages
         */
        "languageCapabilities"?: string[];
        /**
          * Determines the visibility of line numbers
         */
        "lineNumbers"?: boolean;
        /**
          * Event emitted when the language of the editor is changed.
         */
        "onSetLanguage"?: (event: CustomEvent<string | undefined>) => void;
        /**
          * Disallow editing of the editor contents when set to `true`
         */
        "readOnly"?: boolean;
    }
    interface StencilaExecutableDocumentToolbar {
        /**
          * When `fixed` the Navbar will remain pinned to the top of the screen. Note that if the Navbar component is not followed by a sibling element, you will have to set `margin-top: 3rem` on the following element yourself.
         */
        "position"?: 'fixed' | 'static';
        /**
          * The URL for requesting a SoftwareSession as defined in Stencila Schema. Passed to Stencila Executa for instantiating the session. TODO: If undefined user should be able to set one themselves (e.g. running a local machine)
         */
        "sessionProviderUrl"?: string;
        /**
          * The URL of the document being decorated. Could be a Snapshot from Stencila Hub, a Project URL, or something else.
         */
        "sourceUrl"?: string;
    }
    interface StencilaIcon {
        /**
          * Name of the icon to be rendered. Corresponds to icon names from the [Remix Icon set](http://remixicon.com)
         */
        "icon"?: IconNames;
        /**
          * Style with which to render the icon
         */
        "iconStyle"?: 'fill' | 'line';
    }
    interface StencilaImageObject {
        /**
          * The `ImageObject` node to render
         */
        "image"?: ImageObject;
    }
    interface StencilaImagePlotly {
        /**
          * The Plotly configuration object
         */
        "config"?: Partial<Config>;
        /**
          * The Plotly data to render as an interactive visualization.
         */
        "data"?: Data[];
        /**
          * The Plotly layout settings object
         */
        "layout"?: Partial<Layout>;
        /**
          * Custom event emitter to indicate that the loading of the Plotly.js script has finished
         */
        "onPlotlyLoaded"?: (event: CustomEvent<any>) => void;
    }
    interface StencilaImageVega {
        /**
          * Custom event emitter to indicate that the loading of the Vega JS script has finished
         */
        "onVegaLoaded"?: (event: CustomEvent<VegaLoadEvent>) => void;
        /**
          * A JavaScript object containing options for embedding
          * @see https ://github.com/vega/vega-embed#options
         */
        "options"?: Record<string, unknown>;
        /**
          * The Vega or Vega-Lite spec
          * @see https ://vega.github.io/vega/docs/specification/
         */
        "spec"?: VisualizationSpec | string;
    }
    interface StencilaInput {
        /**
          * Automatically bring cursor focus to the input field on render.
         */
        "autoFocus"?: boolean;
        /**
          * Visually conceal the input label. Use sparingly for simple forms only with a descriptive action button.
         */
        "hideLabel"?: boolean;
        /**
          * Icon to show at the start of the input field.
         */
        "iconStart"?: IconNames;
        /**
          * Render the label and input field as inline elements.
         */
        "inline"?: boolean;
        /**
          * A hint to the browser for which keyboard to display.
         */
        "inputmode"?: | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';
        /**
          * Accessible text label for the input field. Defaults to the input's `name` prop.
         */
        "label"?: string;
        /**
          * The name of the input, submitted as the value's label inside the form data.
         */
        "name": string;
        /**
          * Short hint demonstrating expected input value. Shown when the input is empty.
         */
        "placeholder"?: string;
        /**
          * When `true` value must be provided before submitting.
         */
        "required"?: boolean;
        /**
          * Type of input field.
         */
        "type"?: 'text' | 'password' | 'number' | 'search';
        /**
          * Text value of the input.
         */
        "value"?: number | string;
    }
    interface StencilaMenu {
        /**
          * Determines whether the Menu is shown or not
         */
        "isOpen"?: boolean;
    }
    interface StencilaMenuItem {
        "icon"?: IconNames | undefined;
    }
    interface StencilaNodeList {
        /**
          * Array of nodes to render.
         */
        "nodes"?: Node[] | undefined;
    }
    interface StencilaTab {
        /**
          * The link the tab should navigate to
         */
        "href"?: string;
        /**
          * Indicates whether the current tab is "selected"
         */
        "isSelected"?: boolean;
        /**
          * The displayed text of the Tab
         */
        "label"?: string;
    }
    interface StencilaTabList {
        /**
          * A list of string values to use as tab labels
         */
        "tabs": ChildTab[];
    }
    interface StencilaToast {
        /**
          * Duration in milliseconds for how long the toast should be display
         */
        "duration"?: number;
        /**
          * Where on the screen to show the Toast. Overrides the base position set in the `ToastController` instance.
         */
        "position"?: ToastPosition | undefined;
        /**
          * Type of the toast to show. Affects the component color scheme.
         */
        "type"?: ToastType;
    }
    interface StencilaToolbar {
        /**
          * The background fill color of the Navbar
         */
        "color"?: Colors | string;
        /**
          * When `fixed` the Navbar will remain pinned to the top of the screen. Note that if the Navbar component is not followed by a sibling element, you will have to set `margin-top: 3rem` on the following element yourself.
         */
        "position"?: 'static' | 'fixed';
    }
    interface StencilaTooltip {
        /**
          * The text content of the Tooltip.
         */
        "text": string;
    }
    interface StencilaTooltipElement {
    }
    interface IntrinsicElements {
        "stencila-action-menu": StencilaActionMenu;
        "stencila-button": StencilaButton;
        "stencila-code-chunk": StencilaCodeChunk;
        "stencila-code-error": StencilaCodeError;
        "stencila-code-expression": StencilaCodeExpression;
        "stencila-data-table": StencilaDataTable;
        "stencila-details": StencilaDetails;
        "stencila-editor": StencilaEditor;
        "stencila-executable-document-toolbar": StencilaExecutableDocumentToolbar;
        "stencila-icon": StencilaIcon;
        "stencila-image-object": StencilaImageObject;
        "stencila-image-plotly": StencilaImagePlotly;
        "stencila-image-vega": StencilaImageVega;
        "stencila-input": StencilaInput;
        "stencila-menu": StencilaMenu;
        "stencila-menu-item": StencilaMenuItem;
        "stencila-node-list": StencilaNodeList;
        "stencila-tab": StencilaTab;
        "stencila-tab-list": StencilaTabList;
        "stencila-toast": StencilaToast;
        "stencila-toolbar": StencilaToolbar;
        "stencila-tooltip": StencilaTooltip;
        "stencila-tooltip-element": StencilaTooltipElement;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "stencila-action-menu": LocalJSX.StencilaActionMenu & JSXBase.HTMLAttributes<HTMLStencilaActionMenuElement>;
            "stencila-button": LocalJSX.StencilaButton & JSXBase.HTMLAttributes<HTMLStencilaButtonElement>;
            "stencila-code-chunk": LocalJSX.StencilaCodeChunk & JSXBase.HTMLAttributes<HTMLStencilaCodeChunkElement>;
            "stencila-code-error": LocalJSX.StencilaCodeError & JSXBase.HTMLAttributes<HTMLStencilaCodeErrorElement>;
            "stencila-code-expression": LocalJSX.StencilaCodeExpression & JSXBase.HTMLAttributes<HTMLStencilaCodeExpressionElement>;
            "stencila-data-table": LocalJSX.StencilaDataTable & JSXBase.HTMLAttributes<HTMLStencilaDataTableElement>;
            "stencila-details": LocalJSX.StencilaDetails & JSXBase.HTMLAttributes<HTMLStencilaDetailsElement>;
            "stencila-editor": LocalJSX.StencilaEditor & JSXBase.HTMLAttributes<HTMLStencilaEditorElement>;
            "stencila-executable-document-toolbar": LocalJSX.StencilaExecutableDocumentToolbar & JSXBase.HTMLAttributes<HTMLStencilaExecutableDocumentToolbarElement>;
            "stencila-icon": LocalJSX.StencilaIcon & JSXBase.HTMLAttributes<HTMLStencilaIconElement>;
            "stencila-image-object": LocalJSX.StencilaImageObject & JSXBase.HTMLAttributes<HTMLStencilaImageObjectElement>;
            "stencila-image-plotly": LocalJSX.StencilaImagePlotly & JSXBase.HTMLAttributes<HTMLStencilaImagePlotlyElement>;
            "stencila-image-vega": LocalJSX.StencilaImageVega & JSXBase.HTMLAttributes<HTMLStencilaImageVegaElement>;
            "stencila-input": LocalJSX.StencilaInput & JSXBase.HTMLAttributes<HTMLStencilaInputElement>;
            "stencila-menu": LocalJSX.StencilaMenu & JSXBase.HTMLAttributes<HTMLStencilaMenuElement>;
            "stencila-menu-item": LocalJSX.StencilaMenuItem & JSXBase.HTMLAttributes<HTMLStencilaMenuItemElement>;
            "stencila-node-list": LocalJSX.StencilaNodeList & JSXBase.HTMLAttributes<HTMLStencilaNodeListElement>;
            "stencila-tab": LocalJSX.StencilaTab & JSXBase.HTMLAttributes<HTMLStencilaTabElement>;
            "stencila-tab-list": LocalJSX.StencilaTabList & JSXBase.HTMLAttributes<HTMLStencilaTabListElement>;
            "stencila-toast": LocalJSX.StencilaToast & JSXBase.HTMLAttributes<HTMLStencilaToastElement>;
            "stencila-toolbar": LocalJSX.StencilaToolbar & JSXBase.HTMLAttributes<HTMLStencilaToolbarElement>;
            "stencila-tooltip": LocalJSX.StencilaTooltip & JSXBase.HTMLAttributes<HTMLStencilaTooltipElement>;
            "stencila-tooltip-element": LocalJSX.StencilaTooltipElement & JSXBase.HTMLAttributes<HTMLStencilaTooltipElementElement>;
        }
    }
}
