import { r as registerInstance, h, H as Host, a as getElement } from './index-364020fb.js';

const defaultButtonCss = "a.button.sc-stencila-button-default,button.sc-stencila-button-default{background-image:none;border-style:none;display:inline-block;font-family:sans-serif;font-family:var(--font-family-display,sans-serif);font-size:.875rem;font-weight:600;line-height:1.25rem;line-height:1;margin:0;padding:.5rem .75rem;text-decoration:none;-webkit-transition:color .12s ease-out,background-color .12s ease-out;transition:color .12s ease-out,background-color .12s ease-out;white-space:nowrap}@media (min-width:768px){a.button.sc-stencila-button-default,button.sc-stencila-button-default{font-size:1rem;line-height:1.5rem;line-height:1;padding:.5rem 1rem}}a.button.xsmall.sc-stencila-button-default,a.button[size=xsmall].sc-stencila-button-default,button.xsmall.sc-stencila-button-default,button[size=xsmall].sc-stencila-button-default{border-radius:.125rem;font-size:.75rem;line-height:1rem;line-height:1;padding:.25rem .5rem}a.button.small.sc-stencila-button-default,a.button[size=small].sc-stencila-button-default,button.small.sc-stencila-button-default,button[size=small].sc-stencila-button-default{font-size:.875rem;line-height:1.25rem;line-height:1;padding:.5rem .75rem}a.button.large.sc-stencila-button-default,a.button[size=large].sc-stencila-button-default,button.large.sc-stencila-button-default,button[size=large].sc-stencila-button-default{font-size:1.5rem;line-height:2rem;line-height:1;padding:.75rem 1.5rem}a.button.sc-stencila-button-default:hover,button.sc-stencila-button-default:hover{cursor:pointer}a.button[disabled].sc-stencila-button-default,a.button[disabled].sc-stencila-button-default:active,a.button[disabled].sc-stencila-button-default:hover,button[disabled].sc-stencila-button-default,button[disabled].sc-stencila-button-default:active,button[disabled].sc-stencila-button-default:hover{cursor:not-allowed}a.button.fill.sc-stencila-button-default,button.fill.sc-stencila-button-default{width:100%}a.button.sc-stencila-button-default>*.sc-stencila-button-default,button.sc-stencila-button-default>*.sc-stencila-button-default{vertical-align:middle}a.button.sc-stencila-button-default *.sc-stencila-button-default,button.sc-stencila-button-default *.sc-stencila-button-default{pointer-events:none}a.button.sc-stencila-button-default stencila-icon.sc-stencila-button-default,button.sc-stencila-button-default stencila-icon.sc-stencila-button-default{--width:1.25em;--height:1.25em;padding-right:.25rem}a.button.sc-stencila-button-default>img.sc-stencila-button-default,a.button.sc-stencila-button-default>svg.sc-stencila-button-default,button.sc-stencila-button-default>img.sc-stencila-button-default,button.sc-stencila-button-default>svg.sc-stencila-button-default{display:inline-block;height:1.25em;padding-right:.25rem;width:1.25em}a.button.iconOnly.sc-stencila-button-default,button.iconOnly.sc-stencila-button-default{padding:.25rem}a.button.iconOnly.sc-stencila-button-default>img.sc-stencila-button-default,a.button.iconOnly.sc-stencila-button-default>svg.sc-stencila-button-default,a.button.iconOnly.sc-stencila-button-default stencila-icon.sc-stencila-button-default,button.iconOnly.sc-stencila-button-default>img.sc-stencila-button-default,button.iconOnly.sc-stencila-button-default>svg.sc-stencila-button-default,button.iconOnly.sc-stencila-button-default stencila-icon.sc-stencila-button-default{padding-right:0}a.button.iconOnly.sc-stencila-button-default .label.sc-stencila-button-default,button.iconOnly.sc-stencila-button-default .label.sc-stencila-button-default{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.sc-stencila-button-default-h.sc-stencila-button-default-s>button>*{vertical-align:middle}.sc-stencila-button-default-h.sc-stencila-button-default-s>button>img,.sc-stencila-button-default-h.sc-stencila-button-default-s>button>svg{display:inline-block;padding-right:.25rem}.sc-stencila-button-default-h.sc-stencila-button-default-s>button>img,.sc-stencila-button-default-h.sc-stencila-button-default-s>button>svg{height:1.25em;width:1.25em}[size=xsmall].sc-stencila-button-default-h stencila-icon.sc-stencila-button-default{--width:1.125em;--height:1.125em}.sc-stencila-button-default-h[size=xsmall].sc-stencila-button-default-s>button>img,.sc-stencila-button-default-h[size=xsmall].sc-stencila-button-default-s>button>svg{height:1.125em;width:1.125em}.sc-stencila-button-default-h[icon-only=true].sc-stencila-button-default-s>button>img,.sc-stencila-button-default-h[icon-only=true].sc-stencila-button-default-s>button>svg{padding-right:0}a.button.sc-stencila-button-default:not(.secondary),button.sc-stencila-button-default:not(.secondary){border-radius:.125rem;color:#fff;color:var(--color-stock,#fff)}a.button.sc-stencila-button-default:not(.secondary).xsmall,a.button.sc-stencila-button-default:not(.secondary)[size=xsmall],button.sc-stencila-button-default:not(.secondary).xsmall,button.sc-stencila-button-default:not(.secondary)[size=xsmall]{border-radius:.125rem}a.button.sc-stencila-button-default:not(.secondary).color-stock,button.sc-stencila-button-default:not(.secondary).color-stock{background-color:#fff;background-color:var(--color-stock,#fff);color:#4a4a4a;color:var(--color-key,#4a4a4a)}a.button.sc-stencila-button-default:not(.secondary).color-stock:hover,button.sc-stencila-button-default:not(.secondary).color-stock:hover{background-color:#cfd2e1;background-color:var(--color-neutral-100,#cfd2e1)}a.button.sc-stencila-button-default:not(.secondary).color-stock[disabled],a.button.sc-stencila-button-default:not(.secondary).color-stock[disabled]:active,a.button.sc-stencila-button-default:not(.secondary).color-stock[disabled]:focus,a.button.sc-stencila-button-default:not(.secondary).color-stock[disabled]:hover,button.sc-stencila-button-default:not(.secondary).color-stock[disabled],button.sc-stencila-button-default:not(.secondary).color-stock[disabled]:active,button.sc-stencila-button-default:not(.secondary).color-stock[disabled]:focus,button.sc-stencila-button-default:not(.secondary).color-stock[disabled]:hover{background-color:#b6bacf;background-color:var(--color-neutral-200,#b6bacf);color:#444a5e;color:var(--color-neutral-700,#444a5e)}a.button.sc-stencila-button-default:not(.secondary).color-danger,button.sc-stencila-button-default:not(.secondary).color-danger{background-color:#cf445e;background-color:var(--color-danger-500,#cf445e)}a.button.sc-stencila-button-default:not(.secondary).color-danger:hover,button.sc-stencila-button-default:not(.secondary).color-danger:hover{background-color:#b02d4a;background-color:var(--color-danger-600,#b02d4a)}a.button.sc-stencila-button-default:not(.secondary).color-danger,button.sc-stencila-button-default:not(.secondary).color-danger{color:#fff;color:var(--color-stock,#fff)}a.button.sc-stencila-button-default:not(.secondary).color-danger[disabled],a.button.sc-stencila-button-default:not(.secondary).color-danger[disabled]:active,a.button.sc-stencila-button-default:not(.secondary).color-danger[disabled]:focus,a.button.sc-stencila-button-default:not(.secondary).color-danger[disabled]:hover,button.sc-stencila-button-default:not(.secondary).color-danger[disabled],button.sc-stencila-button-default:not(.secondary).color-danger[disabled]:active,button.sc-stencila-button-default:not(.secondary).color-danger[disabled]:focus,button.sc-stencila-button-default:not(.secondary).color-danger[disabled]:hover{background-color:#ffa6ae;background-color:var(--color-danger-200,#ffa6ae);color:#e76276;color:var(--color-danger-400,#e76276)}a.button.sc-stencila-button-default:not(.secondary).color-neutral,button.sc-stencila-button-default:not(.secondary).color-neutral{background-color:#6e7591;background-color:var(--color-neutral-500,#6e7591)}a.button.sc-stencila-button-default:not(.secondary).color-neutral:hover,button.sc-stencila-button-default:not(.secondary).color-neutral:hover{background-color:#595f78;background-color:var(--color-neutral-600,#595f78)}a.button.sc-stencila-button-default:not(.secondary).color-neutral,button.sc-stencila-button-default:not(.secondary).color-neutral{color:#fff;color:var(--color-stock,#fff)}a.button.sc-stencila-button-default:not(.secondary).color-neutral[disabled],a.button.sc-stencila-button-default:not(.secondary).color-neutral[disabled]:active,a.button.sc-stencila-button-default:not(.secondary).color-neutral[disabled]:focus,a.button.sc-stencila-button-default:not(.secondary).color-neutral[disabled]:hover,button.sc-stencila-button-default:not(.secondary).color-neutral[disabled],button.sc-stencila-button-default:not(.secondary).color-neutral[disabled]:active,button.sc-stencila-button-default:not(.secondary).color-neutral[disabled]:focus,button.sc-stencila-button-default:not(.secondary).color-neutral[disabled]:hover{background-color:#b6bacf;background-color:var(--color-neutral-200,#b6bacf);color:#858ca8;color:var(--color-neutral-400,#858ca8)}a.button.sc-stencila-button-default:not(.secondary).color-primary,button.sc-stencila-button-default:not(.secondary).color-primary{background-color:#2069f2;background-color:var(--color-primary-500,#2069f2)}a.button.sc-stencila-button-default:not(.secondary).color-primary:hover,button.sc-stencila-button-default:not(.secondary).color-primary:hover{background-color:#0054cf;background-color:var(--color-primary-600,#0054cf)}a.button.sc-stencila-button-default:not(.secondary).color-primary,button.sc-stencila-button-default:not(.secondary).color-primary{color:#fff;color:var(--color-stock,#fff)}a.button.sc-stencila-button-default:not(.secondary).color-primary[disabled],a.button.sc-stencila-button-default:not(.secondary).color-primary[disabled]:active,a.button.sc-stencila-button-default:not(.secondary).color-primary[disabled]:focus,a.button.sc-stencila-button-default:not(.secondary).color-primary[disabled]:hover,button.sc-stencila-button-default:not(.secondary).color-primary[disabled],button.sc-stencila-button-default:not(.secondary).color-primary[disabled]:active,button.sc-stencila-button-default:not(.secondary).color-primary[disabled]:focus,button.sc-stencila-button-default:not(.secondary).color-primary[disabled]:hover{background-color:#a7b3ff;background-color:var(--color-primary-200,#a7b3ff);color:#527fff;color:var(--color-primary-400,#527fff)}a.button.sc-stencila-button-default:not(.secondary).color-success,button.sc-stencila-button-default:not(.secondary).color-success{background-color:#3c8455;background-color:var(--color-success-500,#3c8455)}a.button.sc-stencila-button-default:not(.secondary).color-success:hover,button.sc-stencila-button-default:not(.secondary).color-success:hover{background-color:#286c41;background-color:var(--color-success-600,#286c41)}a.button.sc-stencila-button-default:not(.secondary).color-success,button.sc-stencila-button-default:not(.secondary).color-success{color:#fff;color:var(--color-stock,#fff)}a.button.sc-stencila-button-default:not(.secondary).color-success[disabled],a.button.sc-stencila-button-default:not(.secondary).color-success[disabled]:active,a.button.sc-stencila-button-default:not(.secondary).color-success[disabled]:focus,a.button.sc-stencila-button-default:not(.secondary).color-success[disabled]:hover,button.sc-stencila-button-default:not(.secondary).color-success[disabled],button.sc-stencila-button-default:not(.secondary).color-success[disabled]:active,button.sc-stencila-button-default:not(.secondary).color-success[disabled]:focus,button.sc-stencila-button-default:not(.secondary).color-success[disabled]:hover{background-color:#9dcaa9;background-color:var(--color-success-200,#9dcaa9);color:#589c6d;color:var(--color-success-400,#589c6d)}a.button.sc-stencila-button-default:not(.secondary).color-warn,button.sc-stencila-button-default:not(.secondary).color-warn{background-color:#f6bc4d;background-color:var(--color-warn-400,#f6bc4d)}a.button.sc-stencila-button-default:not(.secondary).color-warn:hover,button.sc-stencila-button-default:not(.secondary).color-warn:hover{background-color:#dca435;background-color:var(--color-warn-500,#dca435)}a.button.sc-stencila-button-default:not(.secondary).color-warn,button.sc-stencila-button-default:not(.secondary).color-warn{color:#674c15;color:var(--color-warn-800,#674c15)}a.button.sc-stencila-button-default:not(.secondary).color-warn[disabled],a.button.sc-stencila-button-default:not(.secondary).color-warn[disabled]:active,a.button.sc-stencila-button-default:not(.secondary).color-warn[disabled]:focus,a.button.sc-stencila-button-default:not(.secondary).color-warn[disabled]:hover,button.sc-stencila-button-default:not(.secondary).color-warn[disabled],button.sc-stencila-button-default:not(.secondary).color-warn[disabled]:active,button.sc-stencila-button-default:not(.secondary).color-warn[disabled]:focus,button.sc-stencila-button-default:not(.secondary).color-warn[disabled]:hover{background-color:#ffde88;background-color:var(--color-warn-200,#ffde88);color:#f6bc4d;color:var(--color-warn-400,#f6bc4d)}a.button.secondary.sc-stencila-button-default,button.secondary.sc-stencila-button-default{background-color:transparent;border-color:#2069f2;border-color:var(--color-primary-500,#2069f2);border-width:2px;color:#2069f2;color:var(--color-primary-500,#2069f2)}a.button.secondary.sc-stencila-button-default:active,a.button.secondary.sc-stencila-button-default:hover,button.secondary.sc-stencila-button-default:active,button.secondary.sc-stencila-button-default:hover{background-color:#2069f2;background-color:var(--color-primary-500,#2069f2);color:#fff;color:var(--color-stock,#fff)}a.button.secondary[disabled].sc-stencila-button-default,a.button.secondary[disabled].sc-stencila-button-default:active,a.button.secondary[disabled].sc-stencila-button-default:hover,button.secondary[disabled].sc-stencila-button-default,button.secondary[disabled].sc-stencila-button-default:active,button.secondary[disabled].sc-stencila-button-default:hover{background-color:transparent;color:#6e7591;color:var(--color-neutral-500,#6e7591)}a.button.minimal.sc-stencila-button-default,a.button.minimal.sc-stencila-button-default:not(.secondary),button.minimal.sc-stencila-button-default,button.minimal.sc-stencila-button-default:not(.secondary){--tw-shadow:0 0 #0000;background-color:transparent;border-radius:.125rem;border-width:0;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:#2069f2;color:var(--color-primary-500,#2069f2);overflow:hidden;position:relative}a.button.minimal.sc-stencila-button-default:before,a.button.minimal.sc-stencila-button-default:not(.secondary):before,button.minimal.sc-stencila-button-default:before,button.minimal.sc-stencila-button-default:not(.secondary):before{content:\"\";display:block;height:100%;left:0;position:absolute;top:0;width:100%}a.button.minimal.sc-stencila-button-default:focus,a.button.minimal.sc-stencila-button-default:hover,a.button.minimal.sc-stencila-button-default:not(.secondary):focus,a.button.minimal.sc-stencila-button-default:not(.secondary):hover,button.minimal.sc-stencila-button-default:focus,button.minimal.sc-stencila-button-default:hover,button.minimal.sc-stencila-button-default:not(.secondary):focus,button.minimal.sc-stencila-button-default:not(.secondary):hover{background-color:transparent}a.button.minimal.sc-stencila-button-default:focus:before,a.button.minimal.sc-stencila-button-default:hover:before,a.button.minimal.sc-stencila-button-default:not(.secondary):focus:before,a.button.minimal.sc-stencila-button-default:not(.secondary):hover:before,button.minimal.sc-stencila-button-default:focus:before,button.minimal.sc-stencila-button-default:hover:before,button.minimal.sc-stencila-button-default:not(.secondary):focus:before,button.minimal.sc-stencila-button-default:not(.secondary):hover:before{background-color:rgba(0,0,0,.25);mix-blend-mode:darken}a.button.minimal.color-stock.sc-stencila-button-default,a.button.minimal.sc-stencila-button-default:not(.secondary).color-stock,button.minimal.color-stock.sc-stencila-button-default,button.minimal.sc-stencila-button-default:not(.secondary).color-stock{color:#fff;color:var(--color-stock,#fff)}a.button.minimal.color-key.sc-stencila-button-default,a.button.minimal.sc-stencila-button-default:not(.secondary).color-key,button.minimal.color-key.sc-stencila-button-default,button.minimal.sc-stencila-button-default:not(.secondary).color-key{color:#4a4a4a;color:var(--color-key,#4a4a4a)}a.button.minimal.color-danger.sc-stencila-button-default,a.button.minimal.sc-stencila-button-default:not(.secondary).color-danger,button.minimal.color-danger.sc-stencila-button-default,button.minimal.sc-stencila-button-default:not(.secondary).color-danger{color:#cf445e;color:var(--color-danger-500,#cf445e)}a.button.minimal.color-warn.sc-stencila-button-default,a.button.minimal.sc-stencila-button-default:not(.secondary).color-warn,button.minimal.color-warn.sc-stencila-button-default,button.minimal.sc-stencila-button-default:not(.secondary).color-warn{color:#dca435;color:var(--color-warn-500,#dca435)}a.button.minimal.color-success.sc-stencila-button-default,a.button.minimal.sc-stencila-button-default:not(.secondary).color-success,button.minimal.color-success.sc-stencila-button-default,button.minimal.sc-stencila-button-default:not(.secondary).color-success{color:#3c8455;color:var(--color-success-500,#3c8455)}a.button.minimal.color-primary.sc-stencila-button-default,a.button.minimal.sc-stencila-button-default:not(.secondary).color-primary,button.minimal.color-primary.sc-stencila-button-default,button.minimal.sc-stencila-button-default:not(.secondary).color-primary{color:#2069f2;color:var(--color-primary-500,#2069f2)}a.button.minimal.color-neutral.sc-stencila-button-default,a.button.minimal.sc-stencila-button-default:not(.secondary).color-neutral,button.minimal.color-neutral.sc-stencila-button-default,button.minimal.sc-stencila-button-default:not(.secondary).color-neutral{color:#6e7591;color:var(--color-neutral-500,#6e7591)}a.button.minimal.color-neutral.sc-stencila-button-default:focus,a.button.minimal.color-neutral.sc-stencila-button-default:hover,a.button.minimal.sc-stencila-button-default:not(.secondary).color-neutral:focus,a.button.minimal.sc-stencila-button-default:not(.secondary).color-neutral:hover,button.minimal.color-neutral.sc-stencila-button-default:focus,button.minimal.color-neutral.sc-stencila-button-default:hover,button.minimal.sc-stencila-button-default:not(.secondary).color-neutral:focus,button.minimal.sc-stencila-button-default:not(.secondary).color-neutral:hover{color:#1f212a;color:var(--color-neutral-900,#1f212a)}a.button.minimal.sc-stencila-button-default:not(.secondary)[disabled],a.button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:active,a.button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:focus,a.button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:hover,a.button.minimal[disabled].sc-stencila-button-default,a.button.minimal[disabled].sc-stencila-button-default:active,a.button.minimal[disabled].sc-stencila-button-default:focus,a.button.minimal[disabled].sc-stencila-button-default:hover,button.minimal.sc-stencila-button-default:not(.secondary)[disabled],button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:active,button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:focus,button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:hover,button.minimal[disabled].sc-stencila-button-default,button.minimal[disabled].sc-stencila-button-default:active,button.minimal[disabled].sc-stencila-button-default:focus,button.minimal[disabled].sc-stencila-button-default:hover{color:#000!important;color:var(--color-key,#000)!important;mix-blend-mode:soft-light;opacity:.65}a.button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:active:before,a.button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:before,a.button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:focus:before,a.button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:hover:before,a.button.minimal[disabled].sc-stencila-button-default:active:before,a.button.minimal[disabled].sc-stencila-button-default:before,a.button.minimal[disabled].sc-stencila-button-default:focus:before,a.button.minimal[disabled].sc-stencila-button-default:hover:before,button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:active:before,button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:before,button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:focus:before,button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:hover:before,button.minimal[disabled].sc-stencila-button-default:active:before,button.minimal[disabled].sc-stencila-button-default:before,button.minimal[disabled].sc-stencila-button-default:focus:before,button.minimal[disabled].sc-stencila-button-default:hover:before{background-color:#fff;background-color:var(--color-stock,#fff);mix-blend-mode:soft-light}a.button.minimal.sc-stencila-button-default:not(.secondary)[disabled].color-key,a.button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:active.color-key,a.button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:focus.color-key,a.button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:hover.color-key,a.button.minimal[disabled].color-key.sc-stencila-button-default,a.button.minimal[disabled].sc-stencila-button-default:active.color-key,a.button.minimal[disabled].sc-stencila-button-default:focus.color-key,a.button.minimal[disabled].sc-stencila-button-default:hover.color-key,button.minimal.sc-stencila-button-default:not(.secondary)[disabled].color-key,button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:active.color-key,button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:focus.color-key,button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:hover.color-key,button.minimal[disabled].color-key.sc-stencila-button-default,button.minimal[disabled].sc-stencila-button-default:active.color-key,button.minimal[disabled].sc-stencila-button-default:focus.color-key,button.minimal[disabled].sc-stencila-button-default:hover.color-key{mix-blend-mode:normal;opacity:.55}a.button.minimal.sc-stencila-button-default:not(.secondary)[disabled].color-key:before,a.button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:active.color-key:before,a.button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:focus.color-key:before,a.button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:hover.color-key:before,a.button.minimal[disabled].color-key.sc-stencila-button-default:before,a.button.minimal[disabled].sc-stencila-button-default:active.color-key:before,a.button.minimal[disabled].sc-stencila-button-default:focus.color-key:before,a.button.minimal[disabled].sc-stencila-button-default:hover.color-key:before,button.minimal.sc-stencila-button-default:not(.secondary)[disabled].color-key:before,button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:active.color-key:before,button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:focus.color-key:before,button.minimal.sc-stencila-button-default:not(.secondary)[disabled]:hover.color-key:before,button.minimal[disabled].color-key.sc-stencila-button-default:before,button.minimal[disabled].sc-stencila-button-default:active.color-key:before,button.minimal[disabled].sc-stencila-button-default:focus.color-key:before,button.minimal[disabled].sc-stencila-button-default:hover.color-key:before{background-color:#fff;background-color:var(--color-stock,#fff);mix-blend-mode:normal}";

const buttonMaterialCss = "a.button.sc-stencila-button-material,button.sc-stencila-button-material{background-image:none;border-radius:.25rem;border-style:none;display:inline-block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:.875rem;font-weight:700;line-height:1.25rem;line-height:1;margin:0;padding:.5rem;text-decoration:none;-webkit-transition:color .12s ease-out,background-color .12s ease-out;transition:color .12s ease-out,background-color .12s ease-out;white-space:nowrap}a.button.secondary.sc-stencila-button-material,button.secondary.sc-stencila-button-material{padding:.25rem .5rem}@media (min-width:768px){a.button.sc-stencila-button-material,button.sc-stencila-button-material{font-size:1rem;line-height:1.5rem;line-height:1;padding:.5rem 1rem}}a.button.xsmall.sc-stencila-button-material,a.button[size=xsmall].sc-stencila-button-material,button.xsmall.sc-stencila-button-material,button[size=xsmall].sc-stencila-button-material{border-radius:.125rem;font-size:.75rem;line-height:1rem;line-height:1;padding:.25rem .5rem}a.button.small.sc-stencila-button-material,a.button[size=small].sc-stencila-button-material,button.small.sc-stencila-button-material,button[size=small].sc-stencila-button-material{font-size:.875rem;line-height:1.25rem;line-height:1;padding:.5rem}a.button.large.sc-stencila-button-material,a.button[size=large].sc-stencila-button-material,button.large.sc-stencila-button-material,button[size=large].sc-stencila-button-material{font-size:1.5rem;line-height:2rem;line-height:1;padding:.75rem 1.5rem}a.button.sc-stencila-button-material:hover,button.sc-stencila-button-material:hover{cursor:pointer}a.button[disabled].sc-stencila-button-material,a.button[disabled].sc-stencila-button-material:active,a.button[disabled].sc-stencila-button-material:hover,button[disabled].sc-stencila-button-material,button[disabled].sc-stencila-button-material:active,button[disabled].sc-stencila-button-material:hover{cursor:not-allowed}a.button.fill.sc-stencila-button-material,button.fill.sc-stencila-button-material{width:100%}a.button.sc-stencila-button-material>*.sc-stencila-button-material,button.sc-stencila-button-material>*.sc-stencila-button-material{vertical-align:middle}a.button.sc-stencila-button-material *.sc-stencila-button-material,button.sc-stencila-button-material *.sc-stencila-button-material{pointer-events:none}a.button.sc-stencila-button-material stencila-icon.sc-stencila-button-material,button.sc-stencila-button-material stencila-icon.sc-stencila-button-material{--height:1.25em;--width:1.25em;padding-right:.25rem}a.button.sc-stencila-button-material>img.sc-stencila-button-material,a.button.sc-stencila-button-material>svg.sc-stencila-button-material,button.sc-stencila-button-material>img.sc-stencila-button-material,button.sc-stencila-button-material>svg.sc-stencila-button-material{display:inline-block;height:1.25em;padding-right:.25rem;width:1.25em}a.button.iconOnly.sc-stencila-button-material,button.iconOnly.sc-stencila-button-material{padding:.25rem}a.button.iconOnly.sc-stencila-button-material>img.sc-stencila-button-material,a.button.iconOnly.sc-stencila-button-material>svg.sc-stencila-button-material,a.button.iconOnly.sc-stencila-button-material stencila-icon.sc-stencila-button-material,button.iconOnly.sc-stencila-button-material>img.sc-stencila-button-material,button.iconOnly.sc-stencila-button-material>svg.sc-stencila-button-material,button.iconOnly.sc-stencila-button-material stencila-icon.sc-stencila-button-material{padding-right:0}a.button.iconOnly.sc-stencila-button-material .label.sc-stencila-button-material,button.iconOnly.sc-stencila-button-material .label.sc-stencila-button-material{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.sc-stencila-button-material-h.sc-stencila-button-material-s>button>*{vertical-align:middle}.sc-stencila-button-material-h.sc-stencila-button-material-s>button>img,.sc-stencila-button-material-h.sc-stencila-button-material-s>button>svg{display:inline-block;padding-right:.25rem}.sc-stencila-button-material-h.sc-stencila-button-material-s>button>img,.sc-stencila-button-material-h.sc-stencila-button-material-s>button>svg{height:1.25em;width:1.25em}.sc-stencila-button-material-h[icon-only=true].sc-stencila-button-material-s>button>img,.sc-stencila-button-material-h[icon-only=true].sc-stencila-button-material-s>button>svg{padding-right:0}a.button.sc-stencila-button-material:not(.secondary),button.sc-stencila-button-material:not(.secondary){--tw-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-weight:700;letter-spacing:.025em;text-transform:uppercase}a.button.sc-stencila-button-material:not(.secondary):hover,button.sc-stencila-button-material:not(.secondary):hover{background-color:#3c8455;background-color:var(--color-success-500,#3c8455);color:#fff;color:var(--color-stock,#fff)}a.button.sc-stencila-button-material:not(.secondary)[disabled],a.button.sc-stencila-button-material:not(.secondary)[disabled]:active,a.button.sc-stencila-button-material:not(.secondary)[disabled]:hover,button.sc-stencila-button-material:not(.secondary)[disabled],button.sc-stencila-button-material:not(.secondary)[disabled]:active,button.sc-stencila-button-material:not(.secondary)[disabled]:hover{cursor:not-allowed}a.button.sc-stencila-button-material:not(.secondary).color-danger,button.sc-stencila-button-material:not(.secondary).color-danger{background-color:#cf445e;background-color:var(--color-danger-500,#cf445e)}a.button.sc-stencila-button-material:not(.secondary).color-danger:hover,button.sc-stencila-button-material:not(.secondary).color-danger:hover{background-color:#8c1f38;background-color:var(--color-danger-700,#8c1f38)}a.button.sc-stencila-button-material:not(.secondary).color-danger,button.sc-stencila-button-material:not(.secondary).color-danger{color:#fff;color:var(--color-stock,#fff)}a.button.sc-stencila-button-material:not(.secondary).color-danger[disabled],a.button.sc-stencila-button-material:not(.secondary).color-danger[disabled]:active,a.button.sc-stencila-button-material:not(.secondary).color-danger[disabled]:focus,a.button.sc-stencila-button-material:not(.secondary).color-danger[disabled]:hover,button.sc-stencila-button-material:not(.secondary).color-danger[disabled],button.sc-stencila-button-material:not(.secondary).color-danger[disabled]:active,button.sc-stencila-button-material:not(.secondary).color-danger[disabled]:focus,button.sc-stencila-button-material:not(.secondary).color-danger[disabled]:hover{background-color:#ffa6ae;background-color:var(--color-danger-200,#ffa6ae);color:#e76276;color:var(--color-danger-400,#e76276)}a.button.sc-stencila-button-material:not(.secondary).color-neutral,button.sc-stencila-button-material:not(.secondary).color-neutral{background-color:#6e7591;background-color:var(--color-neutral-500,#6e7591)}a.button.sc-stencila-button-material:not(.secondary).color-neutral:hover,button.sc-stencila-button-material:not(.secondary).color-neutral:hover{background-color:#444a5e;background-color:var(--color-neutral-700,#444a5e)}a.button.sc-stencila-button-material:not(.secondary).color-neutral,button.sc-stencila-button-material:not(.secondary).color-neutral{color:#fff;color:var(--color-stock,#fff)}a.button.sc-stencila-button-material:not(.secondary).color-neutral[disabled],a.button.sc-stencila-button-material:not(.secondary).color-neutral[disabled]:active,a.button.sc-stencila-button-material:not(.secondary).color-neutral[disabled]:focus,a.button.sc-stencila-button-material:not(.secondary).color-neutral[disabled]:hover,button.sc-stencila-button-material:not(.secondary).color-neutral[disabled],button.sc-stencila-button-material:not(.secondary).color-neutral[disabled]:active,button.sc-stencila-button-material:not(.secondary).color-neutral[disabled]:focus,button.sc-stencila-button-material:not(.secondary).color-neutral[disabled]:hover{background-color:#b6bacf;background-color:var(--color-neutral-200,#b6bacf);color:#858ca8;color:var(--color-neutral-400,#858ca8)}a.button.sc-stencila-button-material:not(.secondary).color-primary,button.sc-stencila-button-material:not(.secondary).color-primary{background-color:#2069f2;background-color:var(--color-primary-500,#2069f2)}a.button.sc-stencila-button-material:not(.secondary).color-primary:hover,button.sc-stencila-button-material:not(.secondary).color-primary:hover{background-color:#1b5430;background-color:var(--color-success-700,#1b5430)}a.button.sc-stencila-button-material:not(.secondary).color-primary,button.sc-stencila-button-material:not(.secondary).color-primary{color:#fff;color:var(--color-stock,#fff)}a.button.sc-stencila-button-material:not(.secondary).color-primary[disabled],a.button.sc-stencila-button-material:not(.secondary).color-primary[disabled]:active,a.button.sc-stencila-button-material:not(.secondary).color-primary[disabled]:focus,a.button.sc-stencila-button-material:not(.secondary).color-primary[disabled]:hover,button.sc-stencila-button-material:not(.secondary).color-primary[disabled],button.sc-stencila-button-material:not(.secondary).color-primary[disabled]:active,button.sc-stencila-button-material:not(.secondary).color-primary[disabled]:focus,button.sc-stencila-button-material:not(.secondary).color-primary[disabled]:hover{background-color:#a7b3ff;background-color:var(--color-primary-200,#a7b3ff);color:#527fff;color:var(--color-primary-400,#527fff)}a.button.sc-stencila-button-material:not(.secondary).color-success,button.sc-stencila-button-material:not(.secondary).color-success{background-color:#3c8455;background-color:var(--color-success-500,#3c8455)}a.button.sc-stencila-button-material:not(.secondary).color-success:hover,button.sc-stencila-button-material:not(.secondary).color-success:hover{background-color:#1b5430;background-color:var(--color-success-700,#1b5430)}a.button.sc-stencila-button-material:not(.secondary).color-success,button.sc-stencila-button-material:not(.secondary).color-success{color:#fff;color:var(--color-stock,#fff)}a.button.sc-stencila-button-material:not(.secondary).color-success[disabled],a.button.sc-stencila-button-material:not(.secondary).color-success[disabled]:active,a.button.sc-stencila-button-material:not(.secondary).color-success[disabled]:focus,a.button.sc-stencila-button-material:not(.secondary).color-success[disabled]:hover,button.sc-stencila-button-material:not(.secondary).color-success[disabled],button.sc-stencila-button-material:not(.secondary).color-success[disabled]:active,button.sc-stencila-button-material:not(.secondary).color-success[disabled]:focus,button.sc-stencila-button-material:not(.secondary).color-success[disabled]:hover{background-color:#9dcaa9;background-color:var(--color-success-200,#9dcaa9);color:#589c6d;color:var(--color-success-400,#589c6d)}a.button.sc-stencila-button-material:not(.secondary).color-warn,button.sc-stencila-button-material:not(.secondary).color-warn{background-color:#dca435;background-color:var(--color-warn-500,#dca435)}a.button.sc-stencila-button-material:not(.secondary).color-warn:hover,button.sc-stencila-button-material:not(.secondary).color-warn:hover{background-color:#926b1b;background-color:var(--color-warn-700,#926b1b)}a.button.sc-stencila-button-material:not(.secondary).color-warn,button.sc-stencila-button-material:not(.secondary).color-warn{color:#926b1b;color:var(--color-warn-700,#926b1b)}a.button.sc-stencila-button-material:not(.secondary).color-warn[disabled],a.button.sc-stencila-button-material:not(.secondary).color-warn[disabled]:active,a.button.sc-stencila-button-material:not(.secondary).color-warn[disabled]:focus,a.button.sc-stencila-button-material:not(.secondary).color-warn[disabled]:hover,button.sc-stencila-button-material:not(.secondary).color-warn[disabled],button.sc-stencila-button-material:not(.secondary).color-warn[disabled]:active,button.sc-stencila-button-material:not(.secondary).color-warn[disabled]:focus,button.sc-stencila-button-material:not(.secondary).color-warn[disabled]:hover{background-color:#ffde88;background-color:var(--color-warn-200,#ffde88);color:#f6bc4d;color:var(--color-warn-400,#f6bc4d)}a.button.sc-stencila-button-material:not(.secondary).color-stock,button.sc-stencila-button-material:not(.secondary).color-stock{background-color:#fff;background-color:var(--color-stock,#fff);color:#4a4a4a;color:var(--color-key,#4a4a4a)}a.button.sc-stencila-button-material:not(.secondary).color-stock:hover,button.sc-stencila-button-material:not(.secondary).color-stock:hover{background-color:#b6bacf;background-color:var(--color-neutral-200,#b6bacf);color:#4a4a4a;color:var(--color-key,#4a4a4a)}a.button.sc-stencila-button-material:not(.secondary).color-stock[disabled],a.button.sc-stencila-button-material:not(.secondary).color-stock[disabled]:active,a.button.sc-stencila-button-material:not(.secondary).color-stock[disabled]:hover,button.sc-stencila-button-material:not(.secondary).color-stock[disabled],button.sc-stencila-button-material:not(.secondary).color-stock[disabled]:active,button.sc-stencila-button-material:not(.secondary).color-stock[disabled]:hover{background-color:#b6bacf;background-color:var(--color-neutral-200,#b6bacf);color:#6e7591;color:var(--color-neutral-500,#6e7591)}a.button.secondary.sc-stencila-button-material,button.secondary.sc-stencila-button-material{--tw-shadow:0 0 #0000;background-color:#fff;background-color:var(--color-stock,#fff);-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:#2069f2;color:var(--color-primary-500,#2069f2);font-weight:700;letter-spacing:.025em;text-transform:uppercase}a.button.secondary.sc-stencila-button-material:active,a.button.secondary.sc-stencila-button-material:hover,button.secondary.sc-stencila-button-material:active,button.secondary.sc-stencila-button-material:hover{background-color:#2069f2;background-color:var(--color-primary-500,#2069f2);color:#fff;color:var(--color-stock,#fff)}a.button.secondary[disabled].sc-stencila-button-material,a.button.secondary[disabled].sc-stencila-button-material:active,a.button.secondary[disabled].sc-stencila-button-material:hover,button.secondary[disabled].sc-stencila-button-material,button.secondary[disabled].sc-stencila-button-material:active,button.secondary[disabled].sc-stencila-button-material:hover{background-color:#b6bacf;background-color:var(--color-neutral-200,#b6bacf);color:#6e7591;color:var(--color-neutral-500,#6e7591)}a.button.secondary.button.secondary.color-stock.sc-stencila-button-material,a.button.secondary.secondary.color-stock.sc-stencila-button-material,button.secondary.button.secondary.color-stock.sc-stencila-button-material,button.secondary.secondary.color-stock.sc-stencila-button-material{background-color:#fff;background-color:var(--color-stock,#fff);color:#4a4a4a;color:var(--color-key,#4a4a4a)}a.button.secondary.button.secondary.color-stock.sc-stencila-button-material:hover,a.button.secondary.secondary.color-stock.sc-stencila-button-material:hover,button.secondary.button.secondary.color-stock.sc-stencila-button-material:hover,button.secondary.secondary.color-stock.sc-stencila-button-material:hover{background-color:#b6bacf;background-color:var(--color-neutral-200,#b6bacf);color:#4a4a4a;color:var(--color-key,#4a4a4a)}a.button.secondary.button.secondary.color-stock[disabled].sc-stencila-button-material,a.button.secondary.button.secondary.color-stock[disabled].sc-stencila-button-material:active,a.button.secondary.button.secondary.color-stock[disabled].sc-stencila-button-material:hover,a.button.secondary.secondary.color-stock[disabled].sc-stencila-button-material,a.button.secondary.secondary.color-stock[disabled].sc-stencila-button-material:active,a.button.secondary.secondary.color-stock[disabled].sc-stencila-button-material:hover,button.secondary.button.secondary.color-stock[disabled].sc-stencila-button-material,button.secondary.button.secondary.color-stock[disabled].sc-stencila-button-material:active,button.secondary.button.secondary.color-stock[disabled].sc-stencila-button-material:hover,button.secondary.secondary.color-stock[disabled].sc-stencila-button-material,button.secondary.secondary.color-stock[disabled].sc-stencila-button-material:active,button.secondary.secondary.color-stock[disabled].sc-stencila-button-material:hover{background-color:#b6bacf;background-color:var(--color-neutral-200,#b6bacf);color:#6e7591;color:var(--color-neutral-500,#6e7591)}a.button.minimal.sc-stencila-button-material,a.button.minimal.sc-stencila-button-material:not(.secondary),button.minimal.sc-stencila-button-material,button.minimal.sc-stencila-button-material:not(.secondary){--tw-shadow:0 0 #0000;background-color:transparent;border-radius:.25rem;border-width:0;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:#2069f2;color:var(--color-primary-500,#2069f2);overflow:hidden;position:relative}a.button.minimal.sc-stencila-button-material:before,a.button.minimal.sc-stencila-button-material:not(.secondary):before,button.minimal.sc-stencila-button-material:before,button.minimal.sc-stencila-button-material:not(.secondary):before{content:\"\";display:block;height:100%;left:0;position:absolute;top:0;width:100%}a.button.minimal.sc-stencila-button-material:focus,a.button.minimal.sc-stencila-button-material:hover,a.button.minimal.sc-stencila-button-material:not(.secondary):focus,a.button.minimal.sc-stencila-button-material:not(.secondary):hover,button.minimal.sc-stencila-button-material:focus,button.minimal.sc-stencila-button-material:hover,button.minimal.sc-stencila-button-material:not(.secondary):focus,button.minimal.sc-stencila-button-material:not(.secondary):hover{background-color:transparent}a.button.minimal.sc-stencila-button-material:focus:before,a.button.minimal.sc-stencila-button-material:hover:before,a.button.minimal.sc-stencila-button-material:not(.secondary):focus:before,a.button.minimal.sc-stencila-button-material:not(.secondary):hover:before,button.minimal.sc-stencila-button-material:focus:before,button.minimal.sc-stencila-button-material:hover:before,button.minimal.sc-stencila-button-material:not(.secondary):focus:before,button.minimal.sc-stencila-button-material:not(.secondary):hover:before{background-color:rgba(0,0,0,.25);mix-blend-mode:darken}a.button.minimal.color-stock.sc-stencila-button-material,a.button.minimal.sc-stencila-button-material:not(.secondary).color-stock,button.minimal.color-stock.sc-stencila-button-material,button.minimal.sc-stencila-button-material:not(.secondary).color-stock{color:#fff;color:var(--color-stock,#fff)}a.button.minimal.color-key.sc-stencila-button-material,a.button.minimal.sc-stencila-button-material:not(.secondary).color-key,button.minimal.color-key.sc-stencila-button-material,button.minimal.sc-stencila-button-material:not(.secondary).color-key{color:#4a4a4a;color:var(--color-key,#4a4a4a)}a.button.minimal.color-danger.sc-stencila-button-material,a.button.minimal.sc-stencila-button-material:not(.secondary).color-danger,button.minimal.color-danger.sc-stencila-button-material,button.minimal.sc-stencila-button-material:not(.secondary).color-danger{color:#cf445e;color:var(--color-danger-500,#cf445e)}a.button.minimal.color-warn.sc-stencila-button-material,a.button.minimal.sc-stencila-button-material:not(.secondary).color-warn,button.minimal.color-warn.sc-stencila-button-material,button.minimal.sc-stencila-button-material:not(.secondary).color-warn{color:#dca435;color:var(--color-warn-500,#dca435)}a.button.minimal.color-success.sc-stencila-button-material,a.button.minimal.sc-stencila-button-material:not(.secondary).color-success,button.minimal.color-success.sc-stencila-button-material,button.minimal.sc-stencila-button-material:not(.secondary).color-success{color:#3c8455;color:var(--color-success-500,#3c8455)}a.button.minimal.color-primary.sc-stencila-button-material,a.button.minimal.sc-stencila-button-material:not(.secondary).color-primary,button.minimal.color-primary.sc-stencila-button-material,button.minimal.sc-stencila-button-material:not(.secondary).color-primary{color:#2069f2;color:var(--color-primary-500,#2069f2)}a.button.minimal.color-neutral.sc-stencila-button-material,a.button.minimal.sc-stencila-button-material:not(.secondary).color-neutral,button.minimal.color-neutral.sc-stencila-button-material,button.minimal.sc-stencila-button-material:not(.secondary).color-neutral{color:#6e7591;color:var(--color-neutral-500,#6e7591)}a.button.minimal.color-neutral.sc-stencila-button-material:focus,a.button.minimal.color-neutral.sc-stencila-button-material:hover,a.button.minimal.sc-stencila-button-material:not(.secondary).color-neutral:focus,a.button.minimal.sc-stencila-button-material:not(.secondary).color-neutral:hover,button.minimal.color-neutral.sc-stencila-button-material:focus,button.minimal.color-neutral.sc-stencila-button-material:hover,button.minimal.sc-stencila-button-material:not(.secondary).color-neutral:focus,button.minimal.sc-stencila-button-material:not(.secondary).color-neutral:hover{color:#1f212a;color:var(--color-neutral-900,#1f212a)}a.button.minimal.sc-stencila-button-material:not(.secondary)[disabled],a.button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:active,a.button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:focus,a.button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:hover,a.button.minimal[disabled].sc-stencila-button-material,a.button.minimal[disabled].sc-stencila-button-material:active,a.button.minimal[disabled].sc-stencila-button-material:focus,a.button.minimal[disabled].sc-stencila-button-material:hover,button.minimal.sc-stencila-button-material:not(.secondary)[disabled],button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:active,button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:focus,button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:hover,button.minimal[disabled].sc-stencila-button-material,button.minimal[disabled].sc-stencila-button-material:active,button.minimal[disabled].sc-stencila-button-material:focus,button.minimal[disabled].sc-stencila-button-material:hover{color:#000!important;color:var(--color-key,#000)!important;mix-blend-mode:soft-light;opacity:.65}a.button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:active:before,a.button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:before,a.button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:focus:before,a.button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:hover:before,a.button.minimal[disabled].sc-stencila-button-material:active:before,a.button.minimal[disabled].sc-stencila-button-material:before,a.button.minimal[disabled].sc-stencila-button-material:focus:before,a.button.minimal[disabled].sc-stencila-button-material:hover:before,button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:active:before,button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:before,button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:focus:before,button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:hover:before,button.minimal[disabled].sc-stencila-button-material:active:before,button.minimal[disabled].sc-stencila-button-material:before,button.minimal[disabled].sc-stencila-button-material:focus:before,button.minimal[disabled].sc-stencila-button-material:hover:before{background-color:#fff;background-color:var(--color-stock,#fff);mix-blend-mode:soft-light}a.button.minimal.sc-stencila-button-material:not(.secondary)[disabled].color-key,a.button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:active.color-key,a.button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:focus.color-key,a.button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:hover.color-key,a.button.minimal[disabled].color-key.sc-stencila-button-material,a.button.minimal[disabled].sc-stencila-button-material:active.color-key,a.button.minimal[disabled].sc-stencila-button-material:focus.color-key,a.button.minimal[disabled].sc-stencila-button-material:hover.color-key,button.minimal.sc-stencila-button-material:not(.secondary)[disabled].color-key,button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:active.color-key,button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:focus.color-key,button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:hover.color-key,button.minimal[disabled].color-key.sc-stencila-button-material,button.minimal[disabled].sc-stencila-button-material:active.color-key,button.minimal[disabled].sc-stencila-button-material:focus.color-key,button.minimal[disabled].sc-stencila-button-material:hover.color-key{mix-blend-mode:normal;opacity:.55}a.button.minimal.sc-stencila-button-material:not(.secondary)[disabled].color-key:before,a.button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:active.color-key:before,a.button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:focus.color-key:before,a.button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:hover.color-key:before,a.button.minimal[disabled].color-key.sc-stencila-button-material:before,a.button.minimal[disabled].sc-stencila-button-material:active.color-key:before,a.button.minimal[disabled].sc-stencila-button-material:focus.color-key:before,a.button.minimal[disabled].sc-stencila-button-material:hover.color-key:before,button.minimal.sc-stencila-button-material:not(.secondary)[disabled].color-key:before,button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:active.color-key:before,button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:focus.color-key:before,button.minimal.sc-stencila-button-material:not(.secondary)[disabled]:hover.color-key:before,button.minimal[disabled].color-key.sc-stencila-button-material:before,button.minimal[disabled].sc-stencila-button-material:active.color-key:before,button.minimal[disabled].sc-stencila-button-material:focus.color-key:before,button.minimal[disabled].sc-stencila-button-material:hover.color-key:before{background-color:#fff;background-color:var(--color-stock,#fff);mix-blend-mode:normal}";

const Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The color of the button
     */
    this.color = 'primary';
    /**
     * The overall size of the Button.
     */
    this.size = 'default';
    /**
     * Renders the button without initial background color or border.
     */
    this.minimal = false;
    /**
     * Renders the button using a secondory, and usually less visually prominent, Button CSS stylesheet.
     */
    this.isSecondary = false;
    /**
     * If true, prevents the user from interacting with the button.
     * Note: Not all browser prevent the click handler from firing on disabled buttons.
     */
    this.disabled = false;
    /**
     * If true, removes extra padding from Icon inside the button
     * TODO: See if we can automatically infer removal of padding through CSS
     */
    this.iconOnly = false;
    /**
     * If true, shows a loading spinner icon and sets a `disabled` attribute on the button.
     * Note: Not all browser prevent the click handler from firing on disabled buttons.
     */
    this.isLoading = false;
    /**
     * If true, the button will take up the full width of the parent container
     */
    this.fill = false;
    this.generateButton = () => {
      var _a;
      const TagType = this.href === undefined ? 'button' : 'a';
      const elAttrs = TagType === 'button'
        ? { type: this.buttonType }
        : { href: this.href, rel: this.rel, target: this.target };
      const extraAttrs = {};
      if (this.dataEl !== undefined) {
        extraAttrs['data-el'] = this.dataEl;
      }
      return (h(TagType, Object.assign({ class: {
          button: this.href !== undefined,
          fill: this.fill,
          iconOnly: this.iconOnly,
          minimal: this.minimal,
          secondary: this.isSecondary,
          [this.size]: this.size !== undefined,
          [`color-${this.color}`]: true,
        } }, elAttrs, extraAttrs, { disabled: this.isLoading || this.disabled || false, "aria-label": (_a = this.ariaLabel) !== null && _a !== void 0 ? _a : this.tooltip }), typeof this.icon === 'string' ? (h("stencila-icon", { icon: this.isLoading ? 'loader-2' : this.icon, class: { spin: this.isLoading } })) : (this.icon), h("slot", { name: "icon" }), h("span", { class: "label" }, h("slot", null))));
    };
  }
  render() {
    return (h(Host, { size: this.size, icon: this.icon }, this.tooltip === undefined ? (this.generateButton()) : (h("stencila-tooltip", { text: this.tooltip }, this.generateButton()))));
  }
};
Button.elementName = 'stencila-button';
Button.slots = {
  default: undefined,
};
Button.style = {
  default: defaultButtonCss,
  material: buttonMaterialCss
};

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


const applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var round$1 = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    // Fallback to 1 in case both values are `0`

    if (offsetWidth > 0) {
      scaleX = rect.width / offsetWidth || 1;
    }

    if (offsetHeight > 0) {
      scaleY = rect.height / offsetHeight || 1;
    }
  }

  return {
    width: round$1(rect.width / scaleX),
    height: round$1(rect.height / scaleY),
    top: round$1(rect.top / scaleY),
    right: round$1(rect.right / scaleX),
    bottom: round$1(rect.bottom / scaleY),
    left: round$1(rect.left / scaleX),
    x: round$1(rect.left / scaleX),
    y: round$1(rect.top / scaleY)
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


const arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


const computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


const eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


const flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


const hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


const popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

const defaultTooltipCss = "";

const materialTooltipCss = "";

const Tooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.popperRef = null;
    this.showTooltip = () => {
      var _a, _b;
      // TODO: Use Schema helpers once package is updated: https://github.com/stencila/schema/issues/178
      const target = (_a = document.querySelector('[data-itemscope="root"]')) !== null && _a !== void 0 ? _a : document.body;
      if (this.tooltipRef === undefined) {
        this.tooltipRef =
          (_b = document.querySelector('stencila-tooltip-element')) !== null && _b !== void 0 ? _b : document.createElement('stencila-tooltip-element');
      }
      this.tooltipRef.innerText = this.text;
      target.appendChild(this.tooltipRef);
      this.popperRef = createPopper(this.el, this.tooltipRef, {
        placement: 'bottom',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
          {
            name: 'preventOverflow',
          },
        ],
      });
      window.addEventListener('mousemove', this.onMouseMoveHandler);
    };
    this.onMouseMoveHandler = (e) => {
      if (!this.el.contains(e.target)) {
        this.destroyTooltip();
      }
    };
    this.onMouseOutHandler = (e) => {
      if (e.relatedTarget && !this.el.contains(e.relatedTarget)) {
        this.destroyTooltip();
      }
    };
    this.destroyTooltip = () => {
      if (this.tooltipRef) {
        this.tooltipRef.remove();
      }
      if (this.popperRef) {
        this.popperRef.destroy();
        this.popperRef = null;
      }
      window.removeEventListener('mousemove', this.onMouseMoveHandler);
    };
    this.loadComponent = () => {
      this.el.addEventListener('focusin', this.showTooltip);
      this.el.addEventListener('focusout', this.destroyTooltip);
      this.el.addEventListener('mouseenter', this.showTooltip);
      this.el.addEventListener('mouseout', this.onMouseOutHandler);
    };
    this.unloadComponent = () => {
      this.el.removeEventListener('focusin', this.showTooltip);
      this.el.removeEventListener('focusout', this.destroyTooltip);
      this.el.removeEventListener('mouseenter', this.showTooltip);
      this.el.removeEventListener('mouseout', this.onMouseOutHandler);
      window.removeEventListener('mousemove', this.onMouseMoveHandler);
    };
  }
  componentDidLoad() {
    this.loadComponent();
  }
  disconnectedCallback() {
    this.unloadComponent();
    this.destroyTooltip();
  }
  watchHandler(newText) {
    if (this.tooltipRef !== undefined) {
      this.tooltipRef.innerText = newText;
      if (this.popperRef) {
        this.popperRef
          .update()
          .catch((err) => console.log('could not update Tooltip position\n', err));
      }
    }
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "text": ["watchHandler"]
  }; }
};
Tooltip.elementName = 'stencila-tooltip';
Tooltip.style = {
  default: defaultTooltipCss,
  material: materialTooltipCss
};

const defaultTooltipElementCss = ".sc-stencila-tooltip-element-default-h,stencila-tooltip-element.sc-stencila-tooltip-element-default{--tw-shadow:0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);background-color:#1f212a;background-color:var(--color-neutral-900,#1f212a);border-radius:.375rem;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:#fff;color:var(--color-stock,#fff);font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:.75rem;line-height:1rem;padding:.25rem .5rem;width:auto;z-index:1}.sc-stencila-tooltip-element-default-h,stencila-tooltip-element.sc-stencila-tooltip-element-default{width:auto!important}";

const tooltipElementMaterialCss = ".sc-stencila-tooltip-element-material-h,stencila-tooltip-element.sc-stencila-tooltip-element-material{--tw-shadow:0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);background-color:#444a5e;background-color:var(--color-neutral-700,#444a5e);border-radius:.25rem;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:#fff;color:var(--color-stock,#fff);display:inline-block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:.75rem;line-height:1rem;padding:.25rem .5rem;white-space:nowrap;width:auto;z-index:1}.sc-stencila-tooltip-element-material-h,stencila-tooltip-element.sc-stencila-tooltip-element-material{width:auto!important}";

const TooltipElement = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
TooltipElement.elementName = 'stencila-tooltip-element';
TooltipElement.style = {
  default: defaultTooltipElementCss,
  material: tooltipElementMaterialCss
};

export { Button as stencila_button, Tooltip as stencila_tooltip, TooltipElement as stencila_tooltip_element };
