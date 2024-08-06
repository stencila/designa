import{r as registerInstance,h,e as Host,c as getElement}from"./index-2305c23c.js";import{c as createPopper}from"./popper-93ecb064.js";var defaultMenuCss=".sc-stencila-menu-default-h,stencila-menu.sc-stencila-menu-default{display:inline-block;position:relative}.sc-stencila-menu-default-h ul.sc-stencila-menu-default,stencila-menu.sc-stencila-menu-default ul.sc-stencila-menu-default{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:#fff;background-color:var(--color-stock,#fff);border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);display:inline-block;left:100%;margin:0;min-width:112px;padding:0;position:absolute;top:0;z-index:30}.sc-stencila-menu-default-h ul[aria-hidden].sc-stencila-menu-default,stencila-menu.sc-stencila-menu-default ul[aria-hidden].sc-stencila-menu-default{display:none}.sc-stencila-menu-default-h ul.sc-stencila-menu-default-s>:not(:last-child),stencila-menu ul.sc-stencila-menu-default-s>:not(:last-child){border:solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-width:0 0 1px}";var menuMaterialCss=".sc-stencila-menu-material-h ul.sc-stencila-menu-material{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:#fff;background-color:var(--color-stock,#fff);border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);display:inline-block;margin:0;min-width:112px;padding:0;position:absolute;z-index:30}.sc-stencila-menu-material-h ul[aria-hidden].sc-stencila-menu-material{display:none}";var menuIds=0;var Menu=function(){function e(e){var t=this;registerInstance(this,e);this.popperRef=null;this.isOpen=false;this.autoClose=true;this.autoOpen=false;this.menuPosition="right-start";this.initMenu=function(){if(t.menuEl){t.popperRef=createPopper(t.el,t.menuEl,{placement:t.menuPosition,strategy:"fixed",modifiers:[{name:"preventOverflow"}]})}};this.computeMenuLocation=function(){t.popperRef?t.popperRef.update().catch((function(e){console.error("Could not update menu position",e)})):t.initMenu()};this.toggleMenu=function(e){e.preventDefault();if(t.autoClose){e.stopPropagation()}t.isOpen?t.isOpen=false:t.openMenu()};this.openMenu=function(){t.computeMenuLocation();t.isOpen=true};this.closeMenu=function(){if(t.autoClose){t.isOpen=false}};this.closeOnBlur=function(e){if(t.isOpen&&!t.el.contains(e.relatedTarget)){t.autoCloseTimeoutRef=window.setTimeout(t.closeMenu,250)}};this.clearTimeout=function(){window.clearTimeout(t.autoCloseTimeoutRef)};this.menuId="stencila-menu-".concat(menuIds++)}e.prototype.componentWillLoad=function(){if(this.autoClose){this.el.addEventListener("mouseout",this.closeOnBlur);this.el.addEventListener("mouseenter",this.clearTimeout)}if(this.autoOpen){this.el.addEventListener("mouseenter",this.openMenu);this.el.addEventListener("focus",this.openMenu)}};e.prototype.disconnectedCallback=function(){this.el.removeEventListener("mouseout",this.closeOnBlur);this.el.removeEventListener("mouseenter",this.clearTimeout);this.el.removeEventListener("mouseenter",this.openMenu);this.el.removeEventListener("focus",this.openMenu);if(this.popperRef){this.popperRef.destroy();this.popperRef=null}};e.prototype.render=function(){var e=this;return h(Host,null,h("span",{onClick:this.toggleMenu,"aria-controls":this.menuId,"aria-expanded":this.isOpen?"true":"false"},h("slot",{name:"toggle"})),h("ul",{role:"menu","aria-hidden":!this.isOpen,"aria-orientation":"vertical",tabindex:"-1",id:this.menuId,onClick:this.closeMenu,ref:function(t){return e.menuEl=t}},h("slot",null)))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();Menu.style={default:defaultMenuCss,material:menuMaterialCss};export{Menu as stencila_menu};
//# sourceMappingURL=stencila-menu.entry.js.map