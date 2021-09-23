'use strict';

const presence = (element, hooks = {}) => {
    const { afterSelf } = hooks;
    return new Promise(async (resolve) => {
        var _a;
        if (typeof element.dataset.hold !== 'undefined' &&
            'MutationObserver' in window) {
            const mo = new MutationObserver(([record]) => {
                var _a;
                if (typeof record.target.dataset.hold === 'undefined') {
                    (_a = afterSelf) === null || _a === void 0 ? void 0 : _a();
                    resolve();
                }
            });
            mo.observe(element, {
                attributeFilter: ['data-hold'],
                attributes: true,
            });
            return;
        }
        // If WAAPI getAnimations exists, use that
        if (typeof element.getAnimations !== 'undefined') {
            Promise.all(element.getAnimations().map(anim => anim.finished)).then(() => {
                var _a;
                (_a = afterSelf) === null || _a === void 0 ? void 0 : _a();
                resolve();
                return;
            });
        }
        else {
            // Otherwise grab the computed style to check what listeners to attach
            // or bail out if there aren't any animations/transitions set
            const { animationName, animationDuration, transitionDuration, } = window.getComputedStyle(element);
            if (animationName !== 'none' && animationDuration !== '0s') {
                listen('animation');
            }
            else if (transitionDuration !== '0s') {
                listen('transition');
            }
            else {
                (_a = afterSelf) === null || _a === void 0 ? void 0 : _a();
                resolve();
            }
            // }
            function listen(name) {
                element.addEventListener(`${name}end`, onEnd(name));
            }
            function onEnd(name) {
                return function (event) {
                    var _a;
                    if (event.target !== element)
                        return;
                    element.removeEventListener(`${name}end`, this);
                    (_a = afterSelf) === null || _a === void 0 ? void 0 : _a();
                    resolve();
                    return;
                };
            }
        }
    });
};
const kebab = (str) => str.replace(/([A-Z])/g, `-$1`).toLowerCase();
const setCustomProperties = (el, props) => {
    const customProps = convertToCustomProperties(props);
    for (const [key, value] of Object.entries(customProps)) {
        el.style.setProperty(key, value);
    }
};
const convertToCustomProperties = (o, prefix = '--', result = {}) => {
    if (o == null)
        return result;
    switch (typeof o) {
        case 'string': {
            result[kebab(prefix)] = o;
            return result;
        }
        case 'number': {
            result[kebab(prefix)] = o.toString(10);
            return result;
        }
        case 'boolean': {
            result[kebab(prefix)] = o ? `1` : `0`;
            return result;
        }
    }
    if (Array.isArray(o) || typeof o === 'object') {
        for (let [key, value] of Object.entries(o)) {
            const name = [prefix, !prefix.endsWith('-') && '-', key]
                .filter(Boolean)
                .join('');
            convertToCustomProperties(value, name, result);
        }
        return result;
    }
    return result;
};
const isHTMLElement = (node) => node &&
    node.nodeType === node.ELEMENT_NODE &&
    typeof node.tagName !== 'undefined';
const hasData = (el, key) => typeof el.dataset[key] !== 'undefined';
function closest(selector, base = this) {
    try {
        function closestFrom(el) {
            if (!el || el === document || el === window)
                return null;
            let found = el.closest(selector);
            return found
                ? found
                : closestFrom(el.getRootNode().host);
        }
        return closestFrom(base);
    }
    catch (e) {
        return null;
    }
}
const getTopLevelChildren = (el) => {
    const all = Array.from(el.querySelectorAll('animate-presence'));
    const nested = Array.from(el.querySelectorAll(':scope animate-presence animate-presence'));
    return all.filter(el => !nested.includes(el));
};
const exitChildren = async (el) => {
    return Promise.all(getTopLevelChildren(el).map((el) => el.exit()));
};
const enterChildren = async (el) => {
    return Promise.all(getTopLevelChildren(el).map((el) => el.enter()));
};
const injectGlobalStyle = () => {
    let ss = document.head.querySelector('[data-ap-global]');
    if (ss)
        return;
    ss = document.createElement('style');
    ss.dataset.apGlobal = '';
    ss.textContent = `animate-presence>[data-enter][style*="--i:"],animate-presence>[data-exit][style*="--i:"]{animation-fill-mode:both;}`;
    document.head.appendChild(ss);
};

exports.closest = closest;
exports.enterChildren = enterChildren;
exports.exitChildren = exitChildren;
exports.hasData = hasData;
exports.injectGlobalStyle = injectGlobalStyle;
exports.isHTMLElement = isHTMLElement;
exports.presence = presence;
exports.setCustomProperties = setCustomProperties;
