System.register(["./p-6cc918a4.system.js","./p-96c0bf40.system.js"],(function(e){"use strict";var t,o,n,i,s;return{setters:[function(e){t=e.r;o=e.h;n=e.e;i=e.c},function(e){s=e.c}],execute:function(){var a=".sc-stencila-menu-default-h,stencila-menu.sc-stencila-menu-default{display:inline-block;position:relative}.sc-stencila-menu-default-h ul.sc-stencila-menu-default,stencila-menu.sc-stencila-menu-default ul.sc-stencila-menu-default{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:#fff;background-color:var(--color-stock,#fff);border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);display:inline-block;left:100%;margin:0;min-width:112px;padding:0;position:absolute;top:0;z-index:30}.sc-stencila-menu-default-h ul[aria-hidden].sc-stencila-menu-default,stencila-menu.sc-stencila-menu-default ul[aria-hidden].sc-stencila-menu-default{display:none}.sc-stencila-menu-default-h ul.sc-stencila-menu-default-s>:not(:last-child),stencila-menu ul.sc-stencila-menu-default-s>:not(:last-child){border:solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-width:0 0 1px}";var r=".sc-stencila-menu-material-h ul.sc-stencila-menu-material{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:#fff;background-color:var(--color-stock,#fff);border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);display:inline-block;margin:0;min-width:112px;padding:0;position:absolute;z-index:30}.sc-stencila-menu-material-h ul[aria-hidden].sc-stencila-menu-material{display:none}";var l=0;var u=e("stencila_menu",function(){function e(e){var o=this;t(this,e);this.popperRef=null;this.isOpen=false;this.autoClose=true;this.autoOpen=false;this.menuPosition="right-start";this.initMenu=function(){if(o.menuEl){o.popperRef=s(o.el,o.menuEl,{placement:o.menuPosition,strategy:"fixed",modifiers:[{name:"preventOverflow"}]})}};this.computeMenuLocation=function(){o.popperRef?o.popperRef.update().catch((function(e){console.error("Could not update menu position",e)})):o.initMenu()};this.toggleMenu=function(e){e.preventDefault();if(o.autoClose){e.stopPropagation()}o.isOpen?o.isOpen=false:o.openMenu()};this.openMenu=function(){o.computeMenuLocation();o.isOpen=true};this.closeMenu=function(){if(o.autoClose){o.isOpen=false}};this.closeOnBlur=function(e){if(o.isOpen&&!o.el.contains(e.relatedTarget)){o.autoCloseTimeoutRef=window.setTimeout(o.closeMenu,250)}};this.clearTimeout=function(){window.clearTimeout(o.autoCloseTimeoutRef)};this.menuId="stencila-menu-".concat(l++)}e.prototype.componentWillLoad=function(){if(this.autoClose){this.el.addEventListener("mouseout",this.closeOnBlur);this.el.addEventListener("mouseenter",this.clearTimeout)}if(this.autoOpen){this.el.addEventListener("mouseenter",this.openMenu);this.el.addEventListener("focus",this.openMenu)}};e.prototype.disconnectedCallback=function(){this.el.removeEventListener("mouseout",this.closeOnBlur);this.el.removeEventListener("mouseenter",this.clearTimeout);this.el.removeEventListener("mouseenter",this.openMenu);this.el.removeEventListener("focus",this.openMenu);if(this.popperRef){this.popperRef.destroy();this.popperRef=null}};e.prototype.render=function(){var e=this;return o(n,null,o("span",{onClick:this.toggleMenu,"aria-controls":this.menuId,"aria-expanded":this.isOpen?"true":"false"},o("slot",{name:"toggle"})),o("ul",{role:"menu","aria-hidden":!this.isOpen,"aria-orientation":"vertical",tabindex:"-1",id:this.menuId,onClick:this.closeMenu,ref:function(t){return e.menuEl=t}},o("slot",null)))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return e}());u.style={default:a,material:r}}}}));
//# sourceMappingURL=p-37d02d92.system.entry.js.map