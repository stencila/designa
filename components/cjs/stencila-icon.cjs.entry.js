'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c157949f.js');

var __assign$1 = (undefined && undefined.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
var __spreadArray$2 = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var mix = function (one, two, mergeArrays) {
    if (mergeArrays === void 0) { mergeArrays = false; }
    if (!one || !two || typeof one !== "object" || typeof two !== "object")
        return one;
    var clone = __assign$1({}, one);
    for (var prop in two) {
        if (two.hasOwnProperty(prop)) {
            if (two[prop] instanceof Array && one[prop] instanceof Array) {
                clone[prop] = mergeArrays ? __spreadArray$2(__spreadArray$2([], one[prop], true), two[prop], true) : two[prop];
            }
            else if (typeof two[prop] === "object" && typeof one[prop] === "object") {
                clone[prop] = mix(one[prop], two[prop], mergeArrays);
            }
            else {
                clone[prop] = two[prop];
            }
        }
    }
    return clone;
};

var __spreadArray$1 = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var config = {
    // Default options
    defaults: {},
    // Error type
    errorType: null,
    // Polyfills
    polyfills: {
        fetch: null,
        FormData: null,
        URLSearchParams: null,
        performance: null,
        PerformanceObserver: null,
        AbortController: null
    },
    polyfill: function (p, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.doThrow, doThrow = _c === void 0 ? true : _c, _d = _b.instance, instance = _d === void 0 ? false : _d;
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var res = this.polyfills[p] ||
            (typeof self !== "undefined" ? self[p] : null) ||
            (typeof global !== "undefined" ? global[p] : null);
        if (doThrow && !res)
            throw new Error(p + " is not defined");
        return instance && res ? new (res.bind.apply(res, __spreadArray$1([void 0], args, false)))() : res;
    }
};

var onMatch = function (entries, name, callback, _performance) {
    if (!entries.getEntriesByName)
        return false;
    var matches = entries.getEntriesByName(name);
    if (matches && matches.length > 0) {
        callback(matches.reverse()[0]);
        if (_performance.clearMeasures)
            _performance.clearMeasures(name);
        perfs.callbacks.delete(name);
        if (perfs.callbacks.size < 1) {
            perfs.observer.disconnect();
            if (_performance.clearResourceTimings) {
                _performance.clearResourceTimings();
            }
        }
        return true;
    }
    return false;
};
var lazyObserver = function (_performance, _observer) {
    if (!perfs.observer && _performance && _observer) {
        perfs.observer = new _observer(function (entries) {
            perfs.callbacks.forEach(function (callback, name) {
                onMatch(entries, name, callback, _performance);
            });
        });
        if (_performance.clearResourceTimings)
            _performance.clearResourceTimings();
    }
    return perfs.observer;
};
var perfs = {
    callbacks: new Map(),
    observer: null,
    observe: function (name, callback) {
        if (!name || !callback)
            return;
        var _performance = config.polyfill("performance", { doThrow: false });
        var _observer = config.polyfill("PerformanceObserver", { doThrow: false });
        if (!lazyObserver(_performance, _observer))
            return;
        if (!onMatch(_performance, name, callback, _performance)) {
            if (perfs.callbacks.size < 1)
                perfs.observer.observe({ entryTypes: ["resource", "measure"] });
            perfs.callbacks.set(name, callback);
        }
    }
};

var middlewareHelper = function (middlewares) { return function (fetchFunction) {
    return (middlewares.length === 0 ?
        fetchFunction :
        middlewares.length === 1 ?
            middlewares[0](fetchFunction) :
            middlewares.reduceRight(function (acc, curr, idx) {
                return (idx === middlewares.length - 2) ? curr(acc(fetchFunction)) : curr(acc);
            }));
}; };

var WretchErrorWrapper = /** @class */ (function () {
    function WretchErrorWrapper(error) {
        this.error = error;
    }
    return WretchErrorWrapper;
}());
var resolver = function (wretcher) {
    var url = wretcher._url, _catchers = wretcher._catchers, resolvers = wretcher._resolvers, middlewares = wretcher._middlewares, opts = wretcher._options;
    var catchers = new Map(_catchers);
    var finalOptions = mix(config.defaults, opts);
    var fetchController = config.polyfill("AbortController", { doThrow: false, instance: true });
    if (!finalOptions["signal"] && fetchController) {
        finalOptions["signal"] = fetchController.signal;
    }
    // Request timeout
    var timeout = {
        ref: null,
        clear: function () {
            if (timeout.ref) {
                clearTimeout(timeout.ref);
                timeout.ref = null;
            }
        }
    };
    // The generated fetch request
    var fetchRequest = middlewareHelper(middlewares)(config.polyfill("fetch"))(url, finalOptions);
    // Throws on an http error
    var throwingPromise = fetchRequest
        .catch(function (error) {
        throw new WretchErrorWrapper(error);
    })
        .then(function (response) {
        timeout.clear();
        if (!response.ok) {
            if (response.type === "opaque") {
                var err = new Error("Opaque response");
                err["status"] = response.status;
                err["response"] = response;
                throw err;
            }
            return response[config.errorType || "text"]().then(function (msg) {
                // Enhances the error object
                var err = new Error(msg);
                err[config.errorType || "text"] = msg;
                err["status"] = response.status;
                err["response"] = response;
                throw err;
            });
        }
        return response;
    });
    // Wraps the Promise in order to dispatch the error to a matching catcher
    var catchersWrapper = function (promise) {
        return promise.catch(function (err) {
            timeout.clear();
            var error = err instanceof WretchErrorWrapper ? err.error : err;
            if (err instanceof WretchErrorWrapper && catchers.has("__fromFetch"))
                return catchers.get("__fromFetch")(error, wretcher);
            else if (catchers.has(error.status))
                return catchers.get(error.status)(error, wretcher);
            else if (catchers.has(error.name))
                return catchers.get(error.name)(error, wretcher);
            else
                throw error;
        });
    };
    var bodyParser = function (funName) { return function (cb) { return funName ?
        // If a callback is provided, then callback with the body result otherwise return the parsed body itself.
        catchersWrapper(throwingPromise.then(function (_) { return _ && _[funName](); }).then(function (_) { return cb ? cb(_) : _; })) :
        // No body parsing method - return the response
        catchersWrapper(throwingPromise.then(function (_) { return cb ? cb(_) : _; })); }; };
    var responseChain = {
        /**
         * Retrieves the raw result as a promise.
         */
        res: bodyParser(null),
        /**
         * Retrieves the result as a parsed JSON object.
         */
        json: bodyParser("json"),
        /**
         * Retrieves the result as a Blob object.
         */
        blob: bodyParser("blob"),
        /**
         * Retrieves the result as a FormData object.
         */
        formData: bodyParser("formData"),
        /**
         * Retrieves the result as an ArrayBuffer object.
         */
        arrayBuffer: bodyParser("arrayBuffer"),
        /**
         * Retrieves the result as a string.
         */
        text: bodyParser("text"),
        /**
         * Performs a callback on the API performance timings of the request.
         *
         * Warning: Still experimental on browsers and node.js
         */
        perfs: function (cb) {
            fetchRequest.then(function (res) { return perfs.observe(res.url, cb); });
            return responseChain;
        },
        /**
         * Aborts the request after a fixed time.
         *
         * @param time Time in milliseconds
         * @param controller A custom controller
         */
        setTimeout: function (time, controller) {
            if (controller === void 0) { controller = fetchController; }
            timeout.clear();
            timeout.ref = setTimeout(function () { return controller.abort(); }, time);
            return responseChain;
        },
        /**
         * Returns the automatically generated AbortController alongside the current wretch response as a pair.
         */
        controller: function () { return [fetchController, responseChain]; },
        /**
         * Catches an http response with a specific error code or name and performs a callback.
         */
        error: function (errorId, cb) {
            catchers.set(errorId, cb);
            return responseChain;
        },
        /**
         * Catches a bad request (http code 400) and performs a callback.
         */
        badRequest: function (cb) { return responseChain.error(400, cb); },
        /**
         * Catches an unauthorized request (http code 401) and performs a callback.
         */
        unauthorized: function (cb) { return responseChain.error(401, cb); },
        /**
         * Catches a forbidden request (http code 403) and performs a callback.
         */
        forbidden: function (cb) { return responseChain.error(403, cb); },
        /**
         * Catches a "not found" request (http code 404) and performs a callback.
         */
        notFound: function (cb) { return responseChain.error(404, cb); },
        /**
         * Catches a timeout (http code 408) and performs a callback.
         */
        timeout: function (cb) { return responseChain.error(408, cb); },
        /**
         * Catches an internal server error (http code 500) and performs a callback.
         */
        internalError: function (cb) { return responseChain.error(500, cb); },
        /**
         * Catches errors thrown when calling the fetch function and performs a callback.
         */
        fetchError: function (cb) { return responseChain.error("__fromFetch", cb); },
        /**
         * Catches an AbortError and performs a callback.
         */
        onAbort: function (cb) { return responseChain.error("AbortError", cb); }
    };
    return resolvers.reduce(function (chain, r) { return r(chain, wretcher); }, responseChain);
};

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var JSON_MIME = "application/json";
var CONTENT_TYPE_HEADER = "Content-Type";
function extractContentType(headers) {
    var _a;
    if (headers === void 0) { headers = {}; }
    return (_a = Object.entries(headers).find(function (_a) {
        var k = _a[0];
        return k.toLowerCase() === CONTENT_TYPE_HEADER.toLowerCase();
    })) === null || _a === void 0 ? void 0 : _a[1];
}
function isLikelyJsonMime(value) {
    return /^application\/.*json.*/.test(value);
}
/**
 * The Wretcher class used to perform easy fetch requests.
 *
 * Immutability : almost every method of this class return a fresh Wretcher object.
 */
var Wretcher = /** @class */ (function () {
    function Wretcher(_url, _options, _catchers, _resolvers, _middlewares, _deferredChain) {
        if (_catchers === void 0) { _catchers = new Map(); }
        if (_resolvers === void 0) { _resolvers = []; }
        if (_middlewares === void 0) { _middlewares = []; }
        if (_deferredChain === void 0) { _deferredChain = []; }
        this._url = _url;
        this._options = _options;
        this._catchers = _catchers;
        this._resolvers = _resolvers;
        this._middlewares = _middlewares;
        this._deferredChain = _deferredChain;
    }
    Wretcher.factory = function (url, options) {
        if (url === void 0) { url = ""; }
        if (options === void 0) { options = {}; }
        return new Wretcher(url, options);
    };
    Wretcher.prototype.selfFactory = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.url, url = _c === void 0 ? this._url : _c, _d = _b.options, options = _d === void 0 ? this._options : _d, _e = _b.catchers, catchers = _e === void 0 ? this._catchers : _e, _f = _b.resolvers, resolvers = _f === void 0 ? this._resolvers : _f, _g = _b.middlewares, middlewares = _g === void 0 ? this._middlewares : _g, _h = _b.deferredChain, deferredChain = _h === void 0 ? this._deferredChain : _h;
        return new Wretcher(url, __assign({}, options), new Map(catchers), __spreadArray([], resolvers, true), __spreadArray([], middlewares, true), __spreadArray([], deferredChain, true));
    };
    /**
     * Sets the default fetch options used for every subsequent fetch call.
     * @param options New default options
     * @param mixin If true, mixes in instead of replacing the existing options
     */
    Wretcher.prototype.defaults = function (options, mixin) {
        if (mixin === void 0) { mixin = false; }
        config.defaults = mixin ? mix(config.defaults, options) : options;
        return this;
    };
    /**
     * Sets the method (text, json ...) used to parse the data contained in the response body in case of an HTTP error.
     *
     * Persists for every subsequent requests.
     *
     * Default is "text".
     */
    Wretcher.prototype.errorType = function (method) {
        config.errorType = method;
        return this;
    };
    /**
     * Sets the non-global polyfills which will be used for every subsequent calls.
     *
     * Needed for libraries like [fetch-ponyfill](https://github.com/qubyte/fetch-ponyfill).
     *
     * @param polyfills An object containing the polyfills.
     */
    Wretcher.prototype.polyfills = function (polyfills) {
        config.polyfills = __assign(__assign({}, config.polyfills), polyfills);
        return this;
    };
    /**
     * Returns a new Wretcher object with the argument url appended and the same options.
     * @param url String url
     * @param replace Boolean If true, replaces the current url instead of appending
     */
    Wretcher.prototype.url = function (url, replace) {
        if (replace === void 0) { replace = false; }
        if (replace)
            return this.selfFactory({ url: url });
        var split = this._url.split("?");
        return this.selfFactory({
            url: split.length > 1 ?
                split[0] + url + "?" + split[1] :
                this._url + url
        });
    };
    /**
     * Returns a new Wretcher object with the same url and new options.
     * @param options New options
     * @param mixin If true, mixes in instead of replacing the existing options
     */
    Wretcher.prototype.options = function (options, mixin) {
        if (mixin === void 0) { mixin = true; }
        return this.selfFactory({ options: mixin ? mix(this._options, options) : options });
    };
    /**
     * Converts a javascript object to query parameters,
     * then appends this query string to the current url.
     *
     * If given a string, use the string as the query verbatim.
     *
     * ```
     * let w = wretch("http://example.com") // url is http://example.com
     *
     * // Chain query calls
     * w = w.query({ a: 1, b : 2 }) // url is now http://example.com?a=1&b=2
     * w = w.query("foo-bar-baz-woz") // url is now http://example.com?a=1&b=2&foo-bar-baz-woz
     *
     * // Pass true as the second argument to replace existing query parameters
     * w = w.query("c=3&d=4", true) // url is now http://example.com?c=3&d=4
     * ```
     *
     * @param qp An object which will be converted, or a string which will be used verbatim.
     */
    Wretcher.prototype.query = function (qp, replace) {
        if (replace === void 0) { replace = false; }
        return this.selfFactory({ url: appendQueryParams(this._url, qp, replace) });
    };
    /**
     * Set request headers.
     * @param headerValues An object containing header keys and values
     */
    Wretcher.prototype.headers = function (headerValues) {
        return this.selfFactory({ options: mix(this._options, { headers: headerValues || {} }) });
    };
    /**
     * Shortcut to set the "Accept" header.
     * @param headerValue Header value
     */
    Wretcher.prototype.accept = function (headerValue) {
        return this.headers({ Accept: headerValue });
    };
    /**
     * Shortcut to set the "Content-Type" header.
     * @param headerValue Header value
     */
    Wretcher.prototype.content = function (headerValue) {
        var _a;
        return this.headers((_a = {}, _a[CONTENT_TYPE_HEADER] = headerValue, _a));
    };
    /**
     * Shortcut to set the "Authorization" header.
     * @param headerValue Header value
     */
    Wretcher.prototype.auth = function (headerValue) {
        return this.headers({ Authorization: headerValue });
    };
    /**
     * Adds a default catcher which will be called on every subsequent request error when the error code matches.
     * @param errorId Error code or name
     * @param catcher: The catcher method
     */
    Wretcher.prototype.catcher = function (errorId, catcher) {
        var newMap = new Map(this._catchers);
        newMap.set(errorId, catcher);
        return this.selfFactory({ catchers: newMap });
    };
    /**
     * Associates a custom signal with the request.
     * @param controller : An AbortController
     */
    Wretcher.prototype.signal = function (controller) {
        return this.selfFactory({ options: __assign(__assign({}, this._options), { signal: controller.signal }) });
    };
    /**
     * Program a resolver to perform response chain tasks automatically.
     * @param doResolve : Resolver callback
     */
    Wretcher.prototype.resolve = function (doResolve, clear) {
        if (clear === void 0) { clear = false; }
        return this.selfFactory({ resolvers: clear ? [doResolve] : __spreadArray(__spreadArray([], this._resolvers, true), [doResolve], false) });
    };
    /**
     * Defer wretcher methods that will be chained and called just before the request is performed.
     */
    Wretcher.prototype.defer = function (callback, clear) {
        if (clear === void 0) { clear = false; }
        return this.selfFactory({
            deferredChain: clear ? [callback] : __spreadArray(__spreadArray([], this._deferredChain, true), [callback], false)
        });
    };
    /**
     * Add middlewares to intercept a request before being sent.
     */
    Wretcher.prototype.middlewares = function (middlewares, clear) {
        if (clear === void 0) { clear = false; }
        return this.selfFactory({
            middlewares: clear ? middlewares : __spreadArray(__spreadArray([], this._middlewares, true), middlewares, true)
        });
    };
    Wretcher.prototype.method = function (method, options, body) {
        if (options === void 0) { options = {}; }
        if (body === void 0) { body = null; }
        var base = this.options(__assign(__assign({}, options), { method: method }));
        // "Jsonify" the body if it is an object and if it is likely that the content type targets json.
        var contentType = extractContentType(base._options.headers);
        var jsonify = typeof body === "object" && (!base._options.headers || !contentType || isLikelyJsonMime(contentType));
        base =
            !body ? base :
                jsonify ? base.json(body, contentType) :
                    base.body(body);
        return resolver(base
            ._deferredChain
            .reduce(function (acc, curr) { return curr(acc, acc._url, acc._options); }, base));
    };
    /**
     * Performs a get request.
     */
    Wretcher.prototype.get = function (options) {
        return this.method("GET", options);
    };
    /**
     * Performs a delete request.
     */
    Wretcher.prototype.delete = function (options) {
        return this.method("DELETE", options);
    };
    /**
     * Performs a put request.
     */
    Wretcher.prototype.put = function (body, options) {
        return this.method("PUT", options, body);
    };
    /**
     * Performs a post request.
     */
    Wretcher.prototype.post = function (body, options) {
        return this.method("POST", options, body);
    };
    /**
     * Performs a patch request.
     */
    Wretcher.prototype.patch = function (body, options) {
        return this.method("PATCH", options, body);
    };
    /**
     * Performs a head request.
     */
    Wretcher.prototype.head = function (options) {
        return this.method("HEAD", options);
    };
    /**
     * Performs an options request
     */
    Wretcher.prototype.opts = function (options) {
        return this.method("OPTIONS", options);
    };
    /**
     * Replay a request.
     */
    Wretcher.prototype.replay = function (options) {
        return this.method(this._options.method, options);
    };
    /**
     * Sets the request body with any content.
     * @param contents The body contents
     */
    Wretcher.prototype.body = function (contents) {
        return this.selfFactory({ options: __assign(__assign({}, this._options), { body: contents }) });
    };
    /**
     * Sets the content type header, stringifies an object and sets the request body.
     * @param jsObject An object which will be serialized into a JSON
     * @param contentType A custom content type.
     */
    Wretcher.prototype.json = function (jsObject, contentType) {
        var currentContentType = extractContentType(this._options.headers);
        return this.content(contentType ||
            isLikelyJsonMime(currentContentType) && currentContentType ||
            JSON_MIME).body(JSON.stringify(jsObject));
    };
    /**
     * Converts the javascript object to a FormData and sets the request body.
     * @param formObject An object which will be converted to a FormData
     * @param recursive If `true`, will recurse through all nested objects
     * Can be set as an array of string to exclude specific keys.
     * See https://github.com/elbywan/wretch/issues/68 for more details.
     */
    Wretcher.prototype.formData = function (formObject, recursive) {
        if (recursive === void 0) { recursive = false; }
        return this.body(convertFormData(formObject, recursive));
    };
    /**
     * Converts the input to an url encoded string and sets the content-type header and body.
     * If the input argument is already a string, skips the conversion part.
     *
     * @param input An object to convert into an url encoded string or an already encoded string
     */
    Wretcher.prototype.formUrl = function (input) {
        return this
            .body(typeof input === "string" ? input : convertFormUrl(input))
            .content("application/x-www-form-urlencoded");
    };
    return Wretcher;
}());
// Internal helpers
var appendQueryParams = function (url, qp, replace) {
    var queryString;
    if (typeof qp === "string") {
        queryString = qp;
    }
    else {
        var usp = config.polyfill("URLSearchParams", { instance: true });
        for (var key in qp) {
            if (qp[key] instanceof Array) {
                for (var _i = 0, _a = qp[key]; _i < _a.length; _i++) {
                    var val = _a[_i];
                    usp.append(key, val);
                }
            }
            else {
                usp.append(key, qp[key]);
            }
        }
        queryString = usp.toString();
    }
    var split = url.split("?");
    if (!queryString)
        return replace ? split[0] : url;
    if (replace || split.length < 2)
        return split[0] + "?" + queryString;
    return url + "&" + queryString;
};
function convertFormData(formObject, recursive, formData, ancestors) {
    if (recursive === void 0) { recursive = false; }
    if (formData === void 0) { formData = config.polyfill("FormData", { instance: true }); }
    if (ancestors === void 0) { ancestors = []; }
    Object.entries(formObject).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        var formKey = ancestors.reduce(function (acc, ancestor) { return (acc ? "".concat(acc, "[").concat(ancestor, "]") : ancestor); }, null);
        formKey = formKey ? "".concat(formKey, "[").concat(key, "]") : key;
        if (value instanceof Array) {
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var item = value_1[_i];
                formData.append(formKey + "[]", item);
            }
        }
        else if (recursive &&
            typeof value === "object" &&
            (!(recursive instanceof Array) ||
                !recursive.includes(key))) {
            if (value !== null) {
                convertFormData(value, recursive, formData, __spreadArray(__spreadArray([], ancestors, true), [key], false));
            }
        }
        else {
            formData.append(formKey, value);
        }
    });
    return formData;
}
function encodeQueryValue(key, value) {
    return encodeURIComponent(key) +
        "=" +
        encodeURIComponent(typeof value === "object" ?
            JSON.stringify(value) :
            "" + value);
}
function convertFormUrl(formObject) {
    return Object.keys(formObject)
        .map(function (key) {
        var value = formObject[key];
        if (value instanceof Array) {
            return value.map(function (v) { return encodeQueryValue(key, v); }).join("&");
        }
        return encodeQueryValue(key, value);
    })
        .join("&");
}

var factory = Wretcher.factory;
factory["default"] = Wretcher.factory;

const unsuffixedIconNames = [
  'a-b',
  'align-bottom',
  'align-center',
  'align-justify',
  'align-left',
  'align-right',
  'align-top',
  'align-vertically',
  'asterisk',
  'attachment-2',
  'bold',
  'bring-forward',
  'bring-to-front',
  'code-view',
  'delete-column',
  'delete-row',
  'double-quotes-l',
  'double-quotes-r',
  'emphasis-cn',
  'emphasis',
  'english-input',
  'flow-chart',
  'font-color',
  'font-size-2',
  'font-size',
  'format-clear',
  'functions',
  'h-1',
  'h-2',
  'h-3',
  'h-4',
  'h-5',
  'h-6',
  'hashtag',
  'heading',
  'indent-decrease',
  'indent-increase',
  'input-cursor-move',
  'insert-column-left',
  'insert-column-right',
  'insert-row-bottom',
  'insert-row-top',
  'italic',
  'line-height',
  'link-m',
  'link-unlink-m',
  'link-unlink',
  'link',
  'list-check-2',
  'list-check',
  'list-ordered',
  'list-unordered',
  'merge-cells-horizontal',
  'merge-cells-vertical',
  'mind-map',
  'node-tree',
  'number-0',
  'number-1',
  'number-2',
  'number-3',
  'number-4',
  'number-5',
  'number-6',
  'number-7',
  'number-8',
  'number-9',
  'omega',
  'organization-chart',
  'page-separator',
  'paragraph',
  'pinyin-input',
  'question-mark',
  'rounded-corner',
  'safafill',
  'safaline',
  'send-backward',
  'send-to-back',
  'separator',
  'single-quotes-l',
  'single-quotes-r',
  'sort-asc',
  'sort-desc',
  'space',
  'split-cells-horizontal',
  'split-cells-vertical',
  'strikethrough-2',
  'strikethrough',
  'subscript-2',
  'subscript',
  'superscript-2',
  'superscript',
  'table-2',
  'text-direction-l',
  'text-direction-r',
  'text-spacing',
  'text-wrap',
  'text',
  'translate-2',
  'translate',
  'underline',
  'wubi-input',
];
const suffixedIconNames = [
  '24-hours',
  '4k',
  'account-box',
  'account-circle',
  'account-pin-box',
  'account-pin-circle',
  'add-box',
  'add-circle',
  'add',
  'admin',
  'advertisement',
  'airplay',
  'alarm',
  'alarm-warning',
  'album',
  'alert',
  'aliens',
  'alipay',
  'amazon',
  'anchor',
  'ancient-gate',
  'ancient-pavilion',
  'android',
  'angularjs',
  'anticlockwise-2',
  'anticlockwise',
  'app-store',
  'apple',
  'apps-2',
  'apps',
  'archive-drawer',
  'archive',
  'arrow-down-circle',
  'arrow-down',
  'arrow-down-s',
  'arrow-drop-down',
  'arrow-drop-left',
  'arrow-drop-right',
  'arrow-drop-up',
  'arrow-go-back',
  'arrow-go-forward',
  'arrow-left-circle',
  'arrow-left-down',
  'arrow-left',
  'arrow-left-right',
  'arrow-left-s',
  'arrow-left-up',
  'arrow-right-circle',
  'arrow-right-down',
  'arrow-right',
  'arrow-right-s',
  'arrow-right-up',
  'arrow-up-circle',
  'arrow-up-down',
  'arrow-up',
  'arrow-up-s',
  'artboard-2',
  'artboard',
  'article',
  'aspect-ratio',
  'at',
  'attachment',
  'auction',
  'award',
  'baidu',
  'ball-pen',
  'bank-card-2',
  'bank-card',
  'bank',
  'bar-chart-2',
  'bar-chart-box',
  'bar-chart-grouped',
  'bar-chart-horizontal',
  'bar-chart',
  'barcode-box',
  'barcode',
  'barricade',
  'base-station',
  'basketball',
  'battery-2-charge',
  'battery-2',
  'battery-charge',
  'battery',
  'battery-low',
  'battery-saver',
  'battery-share',
  'bear-smile',
  'behance',
  'bell',
  'bike',
  'bilibili',
  'bill',
  'billiards',
  'bit-coin',
  'blaze',
  'bluetooth-connect',
  'bluetooth',
  'blur-off',
  'body-scan',
  'book-2',
  'book-3',
  'book',
  'book-mark',
  'book-open',
  'book-read',
  'booklet',
  'bookmark-2',
  'bookmark-3',
  'bookmark',
  'boxing',
  'braces',
  'brackets',
  'briefcase-2',
  'briefcase-3',
  'briefcase-4',
  'briefcase-5',
  'briefcase',
  'broadcast',
  'brush-2',
  'brush-3',
  'brush-4',
  'brush',
  'bubble-chart',
  'bug-2',
  'bug',
  'building-2',
  'building-3',
  'building-4',
  'building',
  'bus-2',
  'bus',
  'bus-wifi',
  'cactus',
  'cake-2',
  'cake-3',
  'cake',
  'calculator',
  'calendar-2',
  'calendar-check',
  'calendar-event',
  'calendar',
  'calendar-todo',
  'camera-2',
  'camera-3',
  'camera-lens',
  'camera',
  'camera-off',
  'camera-switch',
  'capsule',
  'car',
  'car-washing',
  'caravan',
  'cast',
  'cellphone',
  'celsius',
  'centos',
  'character-recognition',
  'charging-pile-2',
  'charging-pile',
  'chat-1',
  'chat-2',
  'chat-3',
  'chat-4',
  'chat-check',
  'chat-delete',
  'chat-download',
  'chat-follow-up',
  'chat-forward',
  'chat-heart',
  'chat-history',
  'chat-new',
  'chat-off',
  'chat-poll',
  'chat-private',
  'chat-quote',
  'chat-settings',
  'chat-smile-2',
  'chat-smile-3',
  'chat-smile',
  'chat-upload',
  'chat-voice',
  'check-double',
  'check',
  'checkbox-blank-circle',
  'checkbox-blank',
  'checkbox-circle',
  'checkbox-indeterminate',
  'checkbox',
  'checkbox-multiple-blank',
  'checkbox-multiple',
  'china-railway',
  'chrome',
  'clapperboard',
  'clipboard',
  'clockwise-2',
  'clockwise',
  'close-circle',
  'close',
  'closed-captioning',
  'cloud',
  'cloud-off',
  'cloud-windy',
  'cloudy-2',
  'cloudy',
  'code-box',
  'code',
  'code-s',
  'code-s-slash',
  'codepen',
  'coin',
  'coins',
  'collage',
  'command',
  'community',
  'compass-2',
  'compass-3',
  'compass-4',
  'compass-discover',
  'compass',
  'compasses-2',
  'compasses',
  'computer',
  'contacts-book-2',
  'contacts-book',
  'contacts-book-upload',
  'contacts',
  'contrast-2',
  'contrast-drop-2',
  'contrast-drop',
  'contrast',
  'copper-coin',
  'copper-diamond',
  'copyleft',
  'copyright',
  'coreos',
  'coupon-2',
  'coupon-3',
  'coupon-4',
  'coupon-5',
  'coupon',
  'cpu',
  'creative-commons-by',
  'creative-commons',
  'creative-commons-nc',
  'creative-commons-nd',
  'creative-commons-sa',
  'creative-commons-zero',
  'criminal',
  'crop-2',
  'crop',
  'css3',
  'cup',
  'currency',
  'cursor',
  'customer-service-2',
  'customer-service',
  'dashboard-2',
  'dashboard-3',
  'dashboard',
  'database-2',
  'database',
  'delete-back-2',
  'delete-back',
  'delete-bin-2',
  'delete-bin-3',
  'delete-bin-4',
  'delete-bin-5',
  'delete-bin-6',
  'delete-bin-7',
  'delete-bin',
  'device',
  'device-recover',
  'dingding',
  'direction',
  'disc',
  'discord',
  'discuss',
  'dislike',
  'disqus',
  'divide',
  'donut-chart',
  'door-closed',
  'door',
  'door-lock-box',
  'door-lock',
  'door-open',
  'dossier',
  'douban',
  'download-2',
  'download-cloud-2',
  'download-cloud',
  'download',
  'draft',
  'drag-drop',
  'drag-move-2',
  'drag-move',
  'dribbble',
  'drive',
  'drizzle',
  'drop',
  'dropbox',
  'dual-sim-1',
  'dual-sim-2',
  'dv',
  'dvd',
  'e-bike-2',
  'e-bike',
  'earth',
  'earthquake',
  'edge',
  'edit-2',
  'edit-box',
  'edit-circle',
  'edit',
  'eject',
  'emotion-2',
  'emotion-happy',
  'emotion-laugh',
  'emotion',
  'emotion-normal',
  'emotion-sad',
  'emotion-unhappy',
  'empathize',
  'equalizer',
  'eraser',
  'error-warning',
  'evernote',
  'exchange-box',
  'exchange-cny',
  'exchange-dollar',
  'exchange-funds',
  'exchange',
  'external-link',
  'eye-2',
  'eye-close',
  'eye',
  'eye-off',
  'facebook-box',
  'facebook-circle',
  'facebook',
  'fahrenheit',
  'feedback',
  'file-2',
  'file-3',
  'file-4',
  'file-add',
  'file-chart-2',
  'file-chart',
  'file-cloud',
  'file-code',
  'file-copy-2',
  'file-copy',
  'file-damage',
  'file-download',
  'file-edit',
  'file-excel-2',
  'file-excel',
  'file-forbid',
  'file-gif',
  'file-history',
  'file-hwp',
  'file-info',
  'file',
  'file-list-2',
  'file-list-3',
  'file-list',
  'file-lock',
  'file-mark',
  'file-music',
  'file-paper-2',
  'file-paper',
  'file-pdf',
  'file-ppt-2',
  'file-ppt',
  'file-reduce',
  'file-search',
  'file-settings',
  'file-shield-2',
  'file-shield',
  'file-shred',
  'file-text',
  'file-transfer',
  'file-unknow',
  'file-upload',
  'file-user',
  'file-warning',
  'file-word-2',
  'file-word',
  'file-zip',
  'film',
  'filter-2',
  'filter-3',
  'filter',
  'filter-off',
  'find-replace',
  'finder',
  'fingerprint-2',
  'fingerprint',
  'fire',
  'firefox',
  'first-aid-kit',
  'flag-2',
  'flag',
  'flashlight',
  'flask',
  'flight-land',
  'flight-takeoff',
  'flood',
  'flutter',
  'focus-2',
  'focus-3',
  'focus',
  'foggy',
  'folder-2',
  'folder-3',
  'folder-4',
  'folder-5',
  'folder-add',
  'folder-chart-2',
  'folder-chart',
  'folder-download',
  'folder-forbid',
  'folder-history',
  'folder-info',
  'folder-keyhole',
  'folder',
  'folder-lock',
  'folder-music',
  'folder-open',
  'folder-received',
  'folder-reduce',
  'folder-settings',
  'folder-shared',
  'folder-shield-2',
  'folder-shield',
  'folder-transfer',
  'folder-unknow',
  'folder-upload',
  'folder-user',
  'folder-warning',
  'folder-zip',
  'folders',
  'football',
  'footprint',
  'forbid-2',
  'forbid',
  'fridge',
  'fullscreen-exit',
  'fullscreen',
  'function',
  'funds-box',
  'funds',
  'gallery',
  'gallery-upload',
  'game',
  'gamepad',
  'gas-station',
  'gatsby',
  'genderless',
  'ghost-2',
  'ghost',
  'ghost-smile',
  'gift-2',
  'gift',
  'git-branch',
  'git-commit',
  'git-merge',
  'git-pull-request',
  'git-repository-commits',
  'git-repository',
  'git-repository-private',
  'github',
  'gitlab',
  'global',
  'globe',
  'goblet',
  'google',
  'google-play',
  'government',
  'gps',
  'gradienter',
  'grid',
  'group-2',
  'group',
  'guide',
  'hail',
  'hammer',
  'hand-coin',
  'hand-heart',
  'hand-sanitizer',
  'handbag',
  'hard-drive-2',
  'hard-drive',
  'haze-2',
  'haze',
  'hd',
  'headphone',
  'health-book',
  'heart-2',
  'heart-3',
  'heart-add',
  'heart',
  'heart-pulse',
  'hearts',
  'heavy-showers',
  'history',
  'home-2',
  'home-3',
  'home-4',
  'home-5',
  'home-6',
  'home-7',
  'home-8',
  'home-gear',
  'home-heart',
  'home',
  'home-smile-2',
  'home-smile',
  'home-wifi',
  'honor-of-kings',
  'honour',
  'hospital',
  'hotel-bed',
  'hotel',
  'hotspot',
  'hq',
  'html5',
  'ie',
  'image-2',
  'image-add',
  'image-edit',
  'image',
  'inbox-archive',
  'inbox',
  'inbox-unarchive',
  'increase-decrease',
  'indeterminate-circle',
  'information',
  'infrared-thermometer',
  'ink-bottle',
  'input-method',
  'instagram',
  'install',
  'invision',
  'kakao-talk',
  'key-2',
  'key',
  'keyboard-box',
  'keyboard',
  'keynote',
  'knife-blood',
  'knife',
  'landscape',
  'layout-2',
  'layout-3',
  'layout-4',
  'layout-5',
  'layout-6',
  'layout-bottom-2',
  'layout-bottom',
  'layout-column',
  'layout-grid',
  'layout-left-2',
  'layout-left',
  'layout',
  'layout-masonry',
  'layout-right-2',
  'layout-right',
  'layout-row',
  'layout-top-2',
  'layout-top',
  'leaf',
  'lifebuoy',
  'lightbulb-flash',
  'lightbulb',
  'line-chart',
  'line',
  'linkedin-box',
  'linkedin',
  'links',
  'list-settings',
  'live',
  'loader-2',
  'loader-3',
  'loader-4',
  'loader-5',
  'loader',
  'lock-2',
  'lock',
  'lock-password',
  'lock-unlock',
  'login-box',
  'login-circle',
  'logout-box',
  'logout-box-r',
  'logout-circle',
  'logout-circle-r',
  'luggage-cart',
  'luggage-deposit',
  'lungs',
  'mac',
  'macbook',
  'magic',
  'mail-add',
  'mail-check',
  'mail-close',
  'mail-download',
  'mail-forbid',
  'mail',
  'mail-lock',
  'mail-open',
  'mail-send',
  'mail-settings',
  'mail-star',
  'mail-unread',
  'mail-volume',
  'map-2',
  'map',
  'map-pin-2',
  'map-pin-3',
  'map-pin-4',
  'map-pin-5',
  'map-pin-add',
  'map-pin',
  'map-pin-range',
  'map-pin-time',
  'map-pin-user',
  'mark-pen',
  'markdown',
  'markup',
  'mastercard',
  'mastodon',
  'medal-2',
  'medal',
  'medicine-bottle',
  'medium',
  'men',
  'mental-health',
  'menu-2',
  'menu-3',
  'menu-4',
  'menu-5',
  'menu-add',
  'menu-fold',
  'menu',
  'menu-unfold',
  'message-2',
  'message-3',
  'message',
  'messenger',
  'meteor',
  'mic-2',
  'mic',
  'mic-off',
  'mickey',
  'microscope',
  'microsoft',
  'mini-program',
  'mist',
  'money-cny-box',
  'money-cny-circle',
  'money-dollar-box',
  'money-dollar-circle',
  'money-euro-box',
  'money-euro-circle',
  'money-pound-box',
  'money-pound-circle',
  'moon-clear',
  'moon-cloudy',
  'moon-foggy',
  'moon',
  'more-2',
  'more',
  'motorbike',
  'mouse',
  'movie-2',
  'movie',
  'music-2',
  'music',
  'mv',
  'navigation',
  'netease-cloud-music',
  'netflix',
  'newspaper',
  'notification-2',
  'notification-3',
  'notification-4',
  'notification-badge',
  'notification',
  'notification-off',
  'npmjs',
  'numbers',
  'nurse',
  'oil',
  'open-arm',
  'open-source',
  'opera',
  'order-play',
  'outlet-2',
  'outlet',
  'pages',
  'paint-brush',
  'paint',
  'palette',
  'pantone',
  'parent',
  'parentheses',
  'parking-box',
  'parking',
  'passport',
  'patreon',
  'pause-circle',
  'pause',
  'pause-mini',
  'paypal',
  'pen-nib',
  'pencil',
  'pencil-ruler-2',
  'pencil-ruler',
  'percent',
  'phone-camera',
  'phone-find',
  'phone',
  'phone-lock',
  'picture-in-picture-2',
  'picture-in-picture-exit',
  'picture-in-picture',
  'pie-chart-2',
  'pie-chart-box',
  'pie-chart',
  'pin-distance',
  'ping-pong',
  'pinterest',
  'pixelfed',
  'plane',
  'plant',
  'play-circle',
  'play',
  'play-list-2',
  'play-list-add',
  'play-list',
  'play-mini',
  'playstation',
  'plug-2',
  'plug',
  'polaroid-2',
  'polaroid',
  'police-car',
  'price-tag-2',
  'price-tag-3',
  'price-tag',
  'printer-cloud',
  'printer',
  'product-hunt',
  'profile',
  'projector-2',
  'projector',
  'psychotherapy',
  'pulse',
  'pushpin-2',
  'pushpin',
  'qq',
  'qr-code',
  'qr-scan-2',
  'qr-scan',
  'question-answer',
  'question',
  'questionnaire',
  'quill-pen',
  'radar',
  'radio-2',
  'radio-button',
  'radio',
  'rainbow',
  'rainy',
  'reactjs',
  'record-circle',
  'record-mail',
  'recycle',
  'red-packet',
  'reddit',
  'refresh',
  'refund-2',
  'refund',
  'registered',
  'remixicon',
  'remote-control-2',
  'remote-control',
  'repeat-2',
  'repeat',
  'repeat-one',
  'reply-all',
  'reply',
  'reserved',
  'rest-time',
  'restart',
  'restaurant-2',
  'restaurant',
  'rewind',
  'rewind-mini',
  'rhythm',
  'riding',
  'road-map',
  'roadster',
  'robot',
  'rocket-2',
  'rocket',
  'rotate-lock',
  'route',
  'router',
  'rss',
  'ruler-2',
  'ruler',
  'run',
  'safe-2',
  'safe',
  'sailboat',
  'save-2',
  'save-3',
  'save',
  'scales-2',
  'scales-3',
  'scales',
  'scan-2',
  'scan',
  'scissors-2',
  'scissors-cut',
  'scissors',
  'screenshot-2',
  'screenshot',
  'sd-card',
  'sd-card-mini',
  'search-2',
  'search-eye',
  'search',
  'secure-payment',
  'seedling',
  'send-plane-2',
  'send-plane',
  'sensor',
  'server',
  'service',
  'settings-2',
  'settings-3',
  'settings-4',
  'settings-5',
  'settings-6',
  'settings',
  'shape-2',
  'shape',
  'share-box',
  'share-circle',
  'share-forward-2',
  'share-forward-box',
  'share-forward',
  'share',
  'shield-check',
  'shield-cross',
  'shield-flash',
  'shield-keyhole',
  'shield',
  'shield-star',
  'shield-user',
  'ship-2',
  'ship',
  'shirt',
  'shopping-bag-2',
  'shopping-bag-3',
  'shopping-bag',
  'shopping-basket-2',
  'shopping-basket',
  'shopping-cart-2',
  'shopping-cart',
  'showers',
  'shuffle',
  'shut-down',
  'side-bar',
  'signal-tower',
  'signal-wifi-1',
  'signal-wifi-2',
  'signal-wifi-3',
  'signal-wifi-error',
  'signal-wifi',
  'signal-wifi-off',
  'sim-card-2',
  'sim-card',
  'sip',
  'skip-back',
  'skip-back-mini',
  'skip-forward',
  'skip-forward-mini',
  'skull-2',
  'skull',
  'skype',
  'slack',
  'slice',
  'slideshow-2',
  'slideshow-3',
  'slideshow-4',
  'slideshow',
  'smartphone',
  'snapchat',
  'snowy',
  'sound-module',
  'soundcloud',
  'space-ship',
  'spam-2',
  'spam-3',
  'spam',
  'speaker-2',
  'speaker-3',
  'speaker',
  'spectrum',
  'speed',
  'speed-mini',
  'spotify',
  'spy',
  'stack',
  'stack-overflow',
  'stackshare',
  'star-half',
  'star-half-s',
  'star',
  'star-s',
  'star-smile',
  'steam',
  'steering-2',
  'steering',
  'stethoscope',
  'sticky-note-2',
  'sticky-note',
  'stock',
  'stop-circle',
  'stop',
  'stop-mini',
  'store-2',
  'store-3',
  'store',
  'subtract',
  'subway',
  'subway-wifi',
  'suitcase-2',
  'suitcase-3',
  'suitcase',
  'sun-cloudy',
  'sun-foggy',
  'sun',
  'surgical-mask',
  'surround-sound',
  'survey',
  'swap-box',
  'swap',
  'switch',
  'sword',
  'syringe',
  't-box',
  't-shirt-2',
  't-shirt-air',
  't-shirt',
  'table-alt',
  'table',
  'tablet',
  'takeaway',
  'taobao',
  'tape',
  'task',
  'taxi',
  'taxi-wifi',
  'team',
  'telegram',
  'temp-cold',
  'temp-hot',
  'terminal-box',
  'terminal',
  'terminal-window',
  'test-tube',
  'thermometer',
  'thumb-down',
  'thumb-up',
  'thunderstorms',
  'ticket-2',
  'ticket',
  'time',
  'timer-2',
  'timer-flash',
  'timer',
  'todo',
  'toggle',
  'tools',
  'tornado',
  'trademark',
  'traffic-light',
  'train',
  'train-wifi',
  'travesti',
  'treasure-map',
  'trello',
  'trophy',
  'truck',
  'tumblr',
  'tv-2',
  'tv',
  'twitch',
  'twitter',
  'typhoon',
  'u-disk',
  'ubuntu',
  'umbrella',
  'uninstall',
  'unsplash',
  'upload-2',
  'upload-cloud-2',
  'upload-cloud',
  'upload',
  'usb',
  'user-2',
  'user-3',
  'user-4',
  'user-5',
  'user-6',
  'user-add',
  'user-follow',
  'user-heart',
  'user',
  'user-location',
  'user-received-2',
  'user-received',
  'user-search',
  'user-settings',
  'user-shared-2',
  'user-shared',
  'user-smile',
  'user-star',
  'user-unfollow',
  'user-voice',
  'video-add',
  'video-chat',
  'video-download',
  'video',
  'video-upload',
  'vidicon-2',
  'vidicon',
  'vimeo',
  'vip-crown-2',
  'vip-crown',
  'vip-diamond',
  'vip',
  'virus',
  'visa',
  'voice-recognition',
  'voiceprint',
  'volume-down',
  'volume-mute',
  'volume-off-vibrate',
  'volume-up',
  'volume-vibrate',
  'vuejs',
  'walk',
  'wallet-2',
  'wallet-3',
  'wallet',
  'water-flash',
  'webcam',
  'wechat-2',
  'wechat',
  'wechat-pay',
  'weibo',
  'whatsapp',
  'wheelchair',
  'wifi',
  'wifi-off',
  'window-2',
  'window',
  'windows',
  'windy',
  'wireless-charging',
  'women',
  'xbox',
  'xing',
  'youtube',
  'zcool',
  'zhihu',
  'zoom-in',
  'zoom-out',
  'zzz',
];
const isUnsuffixedIconName = (iconName) => unsuffixedIconNames.includes(iconName);
const isSuffixedIconName = (iconName) => suffixedIconNames.includes(iconName);

const defaultIconCss = "@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.sc-stencila-icon-default-h{--height:1.25em;--width:1.25em;color:currentColor;display:inline-block;line-height:1;vertical-align:middle}.sc-stencila-icon-default-h svg.sc-stencila-icon-default{fill:currentColor;display:block;height:auto;height:var(--height);max-height:100%;position:relative;width:100%;width:var(--width)}[icon^=loader].sc-stencila-icon-default-h svg.sc-stencila-icon-default{-webkit-animation:spin 3s linear infinite;animation:spin 3s linear infinite}";

const iconMaterialCss = "@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.sc-stencila-icon-material-h{--height:1.25em;--width:1.25em;color:currentColor;display:inline-block;line-height:1;vertical-align:middle}.sc-stencila-icon-material-h svg.sc-stencila-icon-material{fill:currentColor;stroke-linecap:butt;display:block;height:auto;height:var(--height);max-height:100%;position:relative;width:100%;width:var(--width)}[icon^=loader].sc-stencila-icon-material-h svg.sc-stencila-icon-material{-webkit-animation:spin 3s linear infinite;animation:spin 3s linear infinite}";

let isFetchingIcons = false;
const getGlobalIconStyle = () => document.getElementsByTagName('html')[0].getAttribute('data-icon-style') ===
  'fill'
  ? 'fill'
  : 'line';
const Icon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Style with which to render the icon
     */
    this.iconStyle = getGlobalIconStyle();
    /**
     * The URL of the SVG file containing icon symbols
     */
    this.iconUrl = index.getAssetPath(`./assets/remixicon.symbol.svg`);
    this.fetchIcons = async () => {
      const response = await factory()
        .url(this.iconUrl)
        .options({ credentials: 'omit', mode: 'cors' })
        .get()
        .text();
      const div = document.createElement('div');
      div.innerHTML = response;
      document.body.append(div);
    };
  }
  componentWillLoad() {
    if (!isFetchingIcons) {
      isFetchingIcons = true;
      this.fetchIcons().catch((err) => {
        console.log('Failed to load icons', err);
      });
    }
  }
  render() {
    const iconName = isSuffixedIconName(this.icon)
      ? `#ri-${this.icon}-${this.iconStyle}`
      : isUnsuffixedIconName(this.icon)
        ? `#ri-${this.icon}`
        : this.icon;
    return (index.h(index.Host, { icon: this.icon, "aria-hidden": "true" }, index.h("svg", { style: {
        fill: this.color !== undefined
          ? `var(--color-${this.color})`
          : undefined,
      } }, index.h("use", { href: iconName }))));
  }
  static get assetsDirs() { return ["assets"]; }
};
Icon.style = {
  default: defaultIconCss,
  material: iconMaterialCss
};

exports.stencila_icon = Icon;

//# sourceMappingURL=stencila-icon.cjs.entry.js.map