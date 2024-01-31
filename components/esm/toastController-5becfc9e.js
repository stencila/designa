import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-9943807e.js';

const copyProperty = (to, from, property, ignoreNonConfigurable) => {
	// `Function#length` should reflect the parameters of `to` not `from` since we keep its body.
	// `Function#prototype` is non-writable and non-configurable so can never be modified.
	if (property === 'length' || property === 'prototype') {
		return;
	}

	// `Function#arguments` and `Function#caller` should not be copied. They were reported to be present in `Reflect.ownKeys` for some devices in React Native (#41), so we explicitly ignore them here.
	if (property === 'arguments' || property === 'caller') {
		return;
	}

	const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
	const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);

	if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
		return;
	}

	Object.defineProperty(to, property, fromDescriptor);
};

// `Object.defineProperty()` throws if the property exists, is not configurable and either:
//  - one its descriptors is changed
//  - it is non-writable and its value is changed
const canCopyProperty = function (toDescriptor, fromDescriptor) {
	return toDescriptor === undefined || toDescriptor.configurable || (
		toDescriptor.writable === fromDescriptor.writable &&
		toDescriptor.enumerable === fromDescriptor.enumerable &&
		toDescriptor.configurable === fromDescriptor.configurable &&
		(toDescriptor.writable || toDescriptor.value === fromDescriptor.value)
	);
};

const changePrototype = (to, from) => {
	const fromPrototype = Object.getPrototypeOf(from);
	if (fromPrototype === Object.getPrototypeOf(to)) {
		return;
	}

	Object.setPrototypeOf(to, fromPrototype);
};

const wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/\n${fromBody}`;

const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, 'toString');
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, 'name');

// We call `from.toString()` early (not lazily) to ensure `from` can be garbage collected.
// We use `bind()` instead of a closure for the same reason.
// Calling `from.toString()` early also allows caching it in case `to.toString()` is called several times.
const changeToString = (to, from, name) => {
	const withName = name === '' ? '' : `with ${name.trim()}() `;
	const newToString = wrappedToString.bind(null, withName, from.toString());
	// Ensure `to.toString.toString` is non-enumerable and has the same `same`
	Object.defineProperty(newToString, 'name', toStringName);
	Object.defineProperty(to, 'toString', {...toStringDescriptor, value: newToString});
};

const mimicFn = (to, from, {ignoreNonConfigurable = false} = {}) => {
	const {name} = to;

	for (const property of Reflect.ownKeys(from)) {
		copyProperty(to, from, property, ignoreNonConfigurable);
	}

	changePrototype(to, from);
	changeToString(to, from, name);

	return to;
};

var mimicFn_1 = mimicFn;

var pDefer = () => {
	const ret = {};

	ret.promise = new Promise((resolve, reject) => {
		ret.resolve = resolve;
		ret.reject = reject;
	});

	return ret;
};

var dist$1 = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const p_defer_1 = __importDefault(pDefer);
function mapAgeCleaner(map, property = 'maxAge') {
    let processingKey;
    let processingTimer;
    let processingDeferred;
    const cleanup = () => __awaiter(this, void 0, void 0, function* () {
        if (processingKey !== undefined) {
            // If we are already processing an item, we can safely exit
            return;
        }
        const setupTimer = (item) => __awaiter(this, void 0, void 0, function* () {
            processingDeferred = p_defer_1.default();
            const delay = item[1][property] - Date.now();
            if (delay <= 0) {
                // Remove the item immediately if the delay is equal to or below 0
                map.delete(item[0]);
                processingDeferred.resolve();
                return;
            }
            // Keep track of the current processed key
            processingKey = item[0];
            processingTimer = setTimeout(() => {
                // Remove the item when the timeout fires
                map.delete(item[0]);
                if (processingDeferred) {
                    processingDeferred.resolve();
                }
            }, delay);
            // tslint:disable-next-line:strict-type-predicates
            if (typeof processingTimer.unref === 'function') {
                // Don't hold up the process from exiting
                processingTimer.unref();
            }
            return processingDeferred.promise;
        });
        try {
            for (const entry of map) {
                yield setupTimer(entry);
            }
        }
        catch (_a) {
            // Do nothing if an error occurs, this means the timer was cleaned up and we should stop processing
        }
        processingKey = undefined;
    });
    const reset = () => {
        processingKey = undefined;
        if (processingTimer !== undefined) {
            clearTimeout(processingTimer);
            processingTimer = undefined;
        }
        if (processingDeferred !== undefined) { // tslint:disable-line:early-exit
            processingDeferred.reject(undefined);
            processingDeferred = undefined;
        }
    };
    const originalSet = map.set.bind(map);
    map.set = (key, value) => {
        if (map.has(key)) {
            // If the key already exist, remove it so we can add it back at the end of the map.
            map.delete(key);
        }
        // Call the original `map.set`
        const result = originalSet(key, value);
        // If we are already processing a key and the key added is the current processed key, stop processing it
        if (processingKey && processingKey === key) {
            reset();
        }
        // Always run the cleanup method in case it wasn't started yet
        cleanup(); // tslint:disable-line:no-floating-promises
        return result;
    };
    cleanup(); // tslint:disable-line:no-floating-promises
    return map;
}
exports.default = mapAgeCleaner;
// Add support for CJS
module.exports = mapAgeCleaner;
module.exports.default = mapAgeCleaner;
});

const decoratorInstanceMap = new WeakMap();
const cacheStore = new WeakMap();
/**
[Memoize](https://en.wikipedia.org/wiki/Memoization) functions - An optimization used to speed up consecutive function calls by caching the result of calls with identical input.

@param fn - Function to be memoized.

@example
```
import mem = require('mem');

let i = 0;
const counter = () => ++i;
const memoized = mem(counter);

memoized('foo');
//=> 1

// Cached as it's the same arguments
memoized('foo');
//=> 1

// Not cached anymore as the arguments changed
memoized('bar');
//=> 2

memoized('bar');
//=> 2
```
*/
const mem = (fn, { cacheKey, cache = new Map(), maxAge } = {}) => {
    if (typeof maxAge === 'number') {
        // TODO: Drop after https://github.com/SamVerschueren/map-age-cleaner/issues/5
        // @ts-expect-error
        dist$1(cache);
    }
    const memoized = function (...arguments_) {
        const key = cacheKey ? cacheKey(arguments_) : arguments_[0];
        const cacheItem = cache.get(key);
        if (cacheItem) {
            return cacheItem.data;
        }
        const result = fn.apply(this, arguments_);
        cache.set(key, {
            data: result,
            maxAge: maxAge ? Date.now() + maxAge : Number.POSITIVE_INFINITY
        });
        return result;
    };
    mimicFn_1(memoized, fn, {
        ignoreNonConfigurable: true
    });
    cacheStore.set(memoized, cache);
    return memoized;
};
/**
@returns A [decorator](https://github.com/tc39/proposal-decorators) to memoize class methods or static class methods.

@example
```
import mem = require('mem');

class Example {
    index = 0

    @mem.decorator()
    counter() {
        return ++this.index;
    }
}

class ExampleWithOptions {
    index = 0

    @mem.decorator({maxAge: 1000})
    counter() {
        return ++this.index;
    }
}
```
*/
mem.decorator = (options = {}) => (target, propertyKey, descriptor) => {
    const input = target[propertyKey];
    if (typeof input !== 'function') {
        throw new TypeError('The decorated value must be a function');
    }
    delete descriptor.value;
    delete descriptor.writable;
    descriptor.get = function () {
        if (!decoratorInstanceMap.has(this)) {
            const value = mem(input, options);
            decoratorInstanceMap.set(this, value);
            return value;
        }
        return decoratorInstanceMap.get(this);
    };
};
/**
Clear all cached data of a memoized function.

@param fn - Memoized function.
*/
mem.clear = (fn) => {
    const cache = cacheStore.get(fn);
    if (!cache) {
        throw new TypeError('Can\'t clear a function that was not memoized!');
    }
    if (typeof cache.clear !== 'function') {
        throw new TypeError('The cache Map can\'t be cleared!');
    }
    cache.clear();
};
var dist = mem;

var ToastTypes;
(function (ToastTypes) {
  ToastTypes["neutral"] = "neutral";
  ToastTypes["success"] = "success";
  ToastTypes["warn"] = "warn";
  ToastTypes["danger"] = "danger";
})(ToastTypes || (ToastTypes = {}));
var ToastPositions;
(function (ToastPositions) {
  ToastPositions["topStart"] = "topStart";
  ToastPositions["topCenter"] = "topCenter";
  ToastPositions["topEnd"] = "topEnd";
  ToastPositions["bottomStart"] = "bottomStart";
  ToastPositions["bottomCenter"] = "bottomCenter";
  ToastPositions["bottomEnd"] = "bottomEnd";
})(ToastPositions || (ToastPositions = {}));
const init = (options) => {
  const toastContainer = document.querySelector('stencila-toast-container');
  if (toastContainer) {
    return toastContainer;
  }
  const container = document.createElement('stencila-toast-container');
  if (options.position !== undefined) {
    container.position = options.position;
  }
  document.body.append(container);
  return container;
};
// Base Toast controller function for managing the presentation of `stencila-toast` components
const toastController = (baseOptions = {}) => {
  const present = (message, options = {}) => {
    var _a, _b, _c, _d, _e, _f;
    const toastEl = document.createElement('stencila-toast');
    toastEl.type = (_b = (_a = options.type) !== null && _a !== void 0 ? _a : baseOptions.type) !== null && _b !== void 0 ? _b : ToastTypes.neutral;
    toastEl.position =
      (_d = (_c = options.position) !== null && _c !== void 0 ? _c : baseOptions.position) !== null && _d !== void 0 ? _d : ToastPositions.topCenter;
    toastEl.dismissable = (_e = options.dismissable) !== null && _e !== void 0 ? _e : baseOptions.dismissable;
    toastEl.duration = (_f = options.duration) !== null && _f !== void 0 ? _f : baseOptions.duration;
    toastEl.innerText = message;
    init(baseOptions).append(toastEl);
    return toastEl;
  };
  /** Memoize the notification function based on the message string and options to avoid showing
   * duplicate notifications in quick succession.
   */
  const memoizedPresent = dist(present, {
    cacheKey: JSON.stringify,
    maxAge: 150,
  });
  return {
    present: memoizedPresent,
  };
};

const toastController$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get ToastTypes () { return ToastTypes; },
	get ToastPositions () { return ToastPositions; },
	toastController: toastController
});

export { ToastTypes as T, ToastPositions as a, toastController$1 as t };

//# sourceMappingURL=toastController-5becfc9e.js.map