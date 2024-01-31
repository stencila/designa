import { h } from '@stencil/core';
import { lookupFormat } from '../languageUtils';
export const LanguagePicker = (props) => {
  const activeLanguageByAlias = lookupFormat(props.activeLanguage);
  const hasExecutableLanguages = Object.keys(props.executableLanguages).length > 0;
  const filteredLanguages = hasExecutableLanguages
    ? Object.entries(props.languageCapabilities).reduce((langs, [name, details]) => {
      return Object.keys(props.executableLanguages).includes(name)
        ? langs
        : Object.assign(Object.assign({}, langs), { [name]: details });
    }, {})
    : props.languageCapabilities;
  return (h("label", { "aria-label": "Programming Language" },
    h("stencila-icon", { icon: "terminal" }),
    h("select", { onChange: props.onSetLanguage, ref: props.setRef, disabled: props.disabled },
      hasExecutableLanguages &&
        Object.values(props.executableLanguages).map((language) => (h("option", { value: language.name, selected: language.name === activeLanguageByAlias.name }, language.name))),
      h("option", { disabled: true }, "Not executable"),
      Object.values(filteredLanguages).map((language) => (h("option", { value: language.name, selected: language.name === activeLanguageByAlias.name }, language.name))))));
};
//# sourceMappingURL=languageSelect.js.map