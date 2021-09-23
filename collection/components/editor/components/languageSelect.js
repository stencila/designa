import { h } from '@stencil/core';
import { lookupFormat } from '../languageUtils';
export const LanguagePicker = (props) => {
  const activeLanguageByAlias = lookupFormat(props.activeLanguage);
  return (h("label", { "aria-label": "Programming Language" },
    h("stencila-icon", { icon: "terminal" }),
    h("select", { onChange: props.onSetLanguage, ref: props.setRef }, Object.values(props.languageCapabilities).map((language) => (h("option", { value: language.name, selected: language.name === activeLanguageByAlias.name }, language.name))))));
};
