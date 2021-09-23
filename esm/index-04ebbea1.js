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
var __spreadArray$2 = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var mix = function (one, two, mergeArrays) {
    if (mergeArrays === void 0) { mergeArrays = false; }
    if (!one || !two || typeof one !== "object" || typeof two !== "object")
        return one;
    var clone = __assign$1({}, one);
    for (var prop in two) {
        if (two.hasOwnProperty(prop)) {
            if (two[prop] instanceof Array && one[prop] instanceof Array) {
                clone[prop] = mergeArrays ? __spreadArray$2(__spreadArray$2([], one[prop]), two[prop]) : two[prop];
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

var __spreadArray$1 = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
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
        return instance && res ? new (res.bind.apply(res, __spreadArray$1([void 0], args)))() : res;
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var JSON_MIME = "application/json";
var CONTENT_TYPE_HEADER = "Content-Type";
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
        return new Wretcher(url, __assign({}, options), new Map(catchers), __spreadArray([], resolvers), __spreadArray([], middlewares), __spreadArray([], deferredChain));
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
        return this.selfFactory({ resolvers: clear ? [doResolve] : __spreadArray(__spreadArray([], this._resolvers), [doResolve]) });
    };
    /**
     * Defer wretcher methods that will be chained and called just before the request is performed.
     */
    Wretcher.prototype.defer = function (callback, clear) {
        if (clear === void 0) { clear = false; }
        return this.selfFactory({
            deferredChain: clear ? [callback] : __spreadArray(__spreadArray([], this._deferredChain), [callback])
        });
    };
    /**
     * Add middlewares to intercept a request before being sent.
     */
    Wretcher.prototype.middlewares = function (middlewares, clear) {
        if (clear === void 0) { clear = false; }
        return this.selfFactory({
            middlewares: clear ? middlewares : __spreadArray(__spreadArray([], this._middlewares), middlewares)
        });
    };
    Wretcher.prototype.method = function (method, options, body) {
        if (options === void 0) { options = {}; }
        if (body === void 0) { body = null; }
        var base = this.options(__assign(__assign({}, options), { method: method }));
        var headers = base._options.headers;
        base =
            !body ? base :
                typeof body === "object" && (!headers ||
                    Object.entries(headers).every(function (_a) {
                        var k = _a[0], v = _a[1];
                        return k.toLowerCase() !== CONTENT_TYPE_HEADER.toLowerCase() ||
                            v.startsWith(JSON_MIME);
                    })) ? base.json(body) :
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
     */
    Wretcher.prototype.json = function (jsObject) {
        var _a;
        var preservedContentType = (_a = Object.entries(this._options.headers || {}).find(function (_a) {
            var k = _a[0], v = _a[1];
            return k.toLowerCase() === CONTENT_TYPE_HEADER.toLowerCase() && v.startsWith(JSON_MIME);
        })) === null || _a === void 0 ? void 0 : _a[1];
        return this.content(preservedContentType || JSON_MIME).body(JSON.stringify(jsObject));
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
        var formKey = ancestors.reduce(function (acc, ancestor) { return (acc ? acc + "[" + ancestor + "]" : ancestor); }, null);
        formKey = formKey ? formKey + "[" + key + "]" : key;
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
                convertFormData(value, recursive, formData, __spreadArray(__spreadArray([], ancestors), [key]));
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

export { factory as f };
