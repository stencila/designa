'use strict';

const index = require('./index-c157949f.js');
const languageUtils = require('./languageUtils-85e2591f.js');

const LanguagePickerInline = (props) => {
  var _a, _b;
  const activeLanguageByAlias = languageUtils.lookupFormat(props.activeLanguage);
  const hasExecutableLanguages = Object.keys((_a = props.executableLanguages) !== null && _a !== void 0 ? _a : {}).length > 0;
  const filteredLanguages = hasExecutableLanguages
    ? Object.entries(props.languageCapabilities).reduce((langs, [name, details]) => {
      return Object.keys(props.executableLanguages).includes(name)
        ? langs
        : Object.assign(Object.assign({}, langs), { [name]: details });
    }, {})
    : props.languageCapabilities;
  return (index.h("stencila-menu", { "aria-label": "Programming Language", autoClose: true },
    index.h("stencila-button", { iconOnly: true, icon: "terminal", size: "xsmall", slot: "toggle", "aria-label": "Toggle menu", color: "key", minimal: true, tooltip: `${activeLanguageByAlias.name}`, disabled: props.disabled }),
    hasExecutableLanguages && (index.h(index.Fragment, null,
      Object.values((_b = props.executableLanguages) !== null && _b !== void 0 ? _b : {}).map((language) => (index.h("stencila-menu-item", { size: "xsmall", onClick: () => { var _a; return (_a = props.onSetLanguage) === null || _a === void 0 ? void 0 : _a.call(props, language.name); }, icon: language.name === activeLanguageByAlias.name
          ? 'check'
          : undefined }, language.name))),
      index.h("stencila-menu-item", { size: "xsmall", divider: true }, "Not executable"))),
    Object.values(filteredLanguages).map((language) => (index.h("stencila-menu-item", { size: "xsmall", onClick: () => { var _a; return (_a = props.onSetLanguage) === null || _a === void 0 ? void 0 : _a.call(props, language.name); } }, language.name)))));
};

exports.LanguagePickerInline = LanguagePickerInline;

//# sourceMappingURL=languageSelect-0197201f.js.map