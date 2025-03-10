(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [187], {
        2350: function() {},
        5677: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    noSSR: function() {
                        return a
                    },
                    default: function() {
                        return s
                    }
                });
            let r = n(8754),
                i = (n(7294), r._(n(8976)));

            function o(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function a(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }

            function s(e, t) {
                let n = i.default,
                    r = {
                        loading: e => {
                            let {
                                error: t,
                                isLoading: n,
                                pastDelay: r
                            } = e;
                            return null
                        }
                    };
                e instanceof Promise ? r.loader = () => e : "function" == typeof e ? r.loader = e : "object" == typeof e && (r = {
                    ...r,
                    ...e
                }), r = {
                    ...r,
                    ...t
                };
                let s = r.loader,
                    l = () => null != s ? s().then(o) : Promise.resolve(o(() => null));
                return (r.loadableGenerated && (r = {
                    ...r,
                    ...r.loadableGenerated
                }, delete r.loadableGenerated), "boolean" != typeof r.ssr || r.ssr) ? n({
                    ...r,
                    loader: l
                }) : (delete r.webpack, delete r.modules, a(n, r))
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        2254: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "LoadableContext", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(8754),
                i = r._(n(7294)),
                o = i.default.createContext(null)
        },
        8976: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return h
                }
            });
            let r = n(8754),
                i = r._(n(7294)),
                o = n(2254),
                a = [],
                s = [],
                l = !1;

            function u(e) {
                let t = e(),
                    n = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return n.promise = t.then(e => (n.loading = !1, n.loaded = e, e)).catch(e => {
                    throw n.loading = !1, n.error = e, e
                }), n
            }
            class c {
                promise() {
                    return this._res.promise
                }
                retry() {
                    this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                    let {
                        _res: e,
                        _opts: t
                    } = this;
                    e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                        this._update({
                            pastDelay: !0
                        })
                    }, t.delay)), "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
                        this._update({
                            timedOut: !0
                        })
                    }, t.timeout))), this._res.promise.then(() => {
                        this._update({}), this._clearTimeouts()
                    }).catch(e => {
                        this._update({}), this._clearTimeouts()
                    }), this._update({})
                }
                _update(e) {
                    this._state = {
                        ...this._state,
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading,
                        ...e
                    }, this._callbacks.forEach(e => e())
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout)
                }
                getCurrentValue() {
                    return this._state
                }
                subscribe(e) {
                    return this._callbacks.add(e), () => {
                        this._callbacks.delete(e)
                    }
                }
                constructor(e, t) {
                    this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
            }

            function d(e) {
                return function(e, t) {
                    let n = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null
                        }, t),
                        r = null;

                    function a() {
                        if (!r) {
                            let t = new c(e, n);
                            r = {
                                getCurrentValue: t.getCurrentValue.bind(t),
                                subscribe: t.subscribe.bind(t),
                                retry: t.retry.bind(t),
                                promise: t.promise.bind(t)
                            }
                        }
                        return r.promise()
                    }
                    if (!l) {
                        let e = n.webpack ? n.webpack() : n.modules;
                        e && s.push(t => {
                            for (let n of e)
                                if (-1 !== t.indexOf(n)) return a()
                        })
                    }

                    function u(e, t) {
                        ! function() {
                            a();
                            let e = i.default.useContext(o.LoadableContext);
                            e && Array.isArray(n.modules) && n.modules.forEach(t => {
                                e(t)
                            })
                        }();
                        let s = i.default.useSyncExternalStore(r.subscribe, r.getCurrentValue, r.getCurrentValue);
                        return i.default.useImperativeHandle(t, () => ({
                            retry: r.retry
                        }), []), i.default.useMemo(() => {
                            var t;
                            return s.loading || s.error ? i.default.createElement(n.loading, {
                                isLoading: s.loading,
                                pastDelay: s.pastDelay,
                                timedOut: s.timedOut,
                                error: s.error,
                                retry: r.retry
                            }) : s.loaded ? i.default.createElement((t = s.loaded) && t.default ? t.default : t, e) : null
                        }, [e, s])
                    }
                    return u.preload = () => a(), u.displayName = "LoadableComponent", i.default.forwardRef(u)
                }(u, e)
            }

            function p(e, t) {
                let n = [];
                for (; e.length;) {
                    let r = e.pop();
                    n.push(r(t))
                }
                return Promise.all(n).then(() => {
                    if (e.length) return p(e, t)
                })
            }
            d.preloadAll = () => new Promise((e, t) => {
                p(a).then(e, t)
            }), d.preloadReady = e => (void 0 === e && (e = []), new Promise(t => {
                let n = () => (l = !0, t());
                p(s, e).then(n, n)
            })), window.__NEXT_PRELOADREADY = d.preloadReady;
            let h = d
        },
        9578: function(e, t, n) {
            var r = n(3454);
            n(2350);
            var i = n(7294),
                o = i && "object" == typeof i && "default" in i ? i : {
                    default: i
                };

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var s = void 0 !== r && r.env && !0,
                l = function(e) {
                    return "[object String]" === Object.prototype.toString.call(e)
                },
                u = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            n = t.name,
                            r = void 0 === n ? "stylesheet" : n,
                            i = t.optimizeForSpeed,
                            o = void 0 === i ? s : i;
                        c(l(r), "`name` must be a string"), this._name = r, this._deletedRulePlaceholder = "#" + r + "-deleted-rule____{}", c("boolean" == typeof o, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = o, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                        var a = document.querySelector('meta[property="csp-nonce"]');
                        this._nonce = a ? a.getAttribute("content") : null
                    }
                    var t, n = e.prototype;
                    return n.setOptimizeForSpeed = function(e) {
                        c("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), c(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                    }, n.isOptimizeForSpeed = function() {
                        return this._optimizeForSpeed
                    }, n.inject = function() {
                        var e = this;
                        if (c(!this._injected, "sheet already injected"), this._injected = !0, this._optimizeForSpeed) {
                            this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (s || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                            return
                        }
                        this._serverSheet = {
                            cssRules: [],
                            insertRule: function(t, n) {
                                return "number" == typeof n ? e._serverSheet.cssRules[n] = {
                                    cssText: t
                                } : e._serverSheet.cssRules.push({
                                    cssText: t
                                }), n
                            },
                            deleteRule: function(t) {
                                e._serverSheet.cssRules[t] = null
                            }
                        }
                    }, n.getSheetForTag = function(e) {
                        if (e.sheet) return e.sheet;
                        for (var t = 0; t < document.styleSheets.length; t++)
                            if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                    }, n.getSheet = function() {
                        return this.getSheetForTag(this._tags[this._tags.length - 1])
                    }, n.insertRule = function(e, t) {
                        if (c(l(e), "`insertRule` accepts only strings"), this._optimizeForSpeed) {
                            var n = this.getSheet();
                            "number" != typeof t && (t = n.cssRules.length);
                            try {
                                n.insertRule(e, t)
                            } catch (t) {
                                return s || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                            }
                        } else {
                            var r = this._tags[t];
                            this._tags.push(this.makeStyleTag(this._name, e, r))
                        }
                        return this._rulesCount++
                    }, n.replaceRule = function(e, t) {
                        if (this._optimizeForSpeed) {
                            var n = this.getSheet();
                            if (t.trim() || (t = this._deletedRulePlaceholder), !n.cssRules[e]) return e;
                            n.deleteRule(e);
                            try {
                                n.insertRule(t, e)
                            } catch (r) {
                                s || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), n.insertRule(this._deletedRulePlaceholder, e)
                            }
                        } else {
                            var r = this._tags[e];
                            c(r, "old rule at index `" + e + "` not found"), r.textContent = t
                        }
                        return e
                    }, n.deleteRule = function(e) {
                        if (this._optimizeForSpeed) this.replaceRule(e, "");
                        else {
                            var t = this._tags[e];
                            c(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                        }
                    }, n.flush = function() {
                        this._injected = !1, this._rulesCount = 0, this._tags.forEach(function(e) {
                            return e && e.parentNode.removeChild(e)
                        }), this._tags = []
                    }, n.cssRules = function() {
                        var e = this;
                        return this._tags.reduce(function(t, n) {
                            return n ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules, function(t) {
                                return t.cssText === e._deletedRulePlaceholder ? null : t
                            })) : t.push(null), t
                        }, [])
                    }, n.makeStyleTag = function(e, t, n) {
                        t && c(l(t), "makeStyleTag accepts only strings as second parameter");
                        var r = document.createElement("style");
                        this._nonce && r.setAttribute("nonce", this._nonce), r.type = "text/css", r.setAttribute("data-" + e, ""), t && r.appendChild(document.createTextNode(t));
                        var i = document.head || document.getElementsByTagName("head")[0];
                        return n ? i.insertBefore(r, n) : i.appendChild(r), r
                    }, a(e.prototype, [{
                        key: "length",
                        get: function() {
                            return this._rulesCount
                        }
                    }]), t && a(e, t), e
                }();

            function c(e, t) {
                if (!e) throw Error("StyleSheet: " + t + ".")
            }
            var d = function(e) {
                    for (var t = 5381, n = e.length; n;) t = 33 * t ^ e.charCodeAt(--n);
                    return t >>> 0
                },
                p = {};

            function h(e, t) {
                if (!t) return "jsx-" + e;
                var n = String(t),
                    r = e + n;
                return p[r] || (p[r] = "jsx-" + d(e + "-" + n)), p[r]
            }

            function f(e, t) {
                var n = e + t;
                return p[n] || (p[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), p[n]
            }
            var m = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            n = t.styleSheet,
                            r = void 0 === n ? null : n,
                            i = t.optimizeForSpeed,
                            o = void 0 !== i && i;
                        this._sheet = r || new u({
                            name: "styled-jsx",
                            optimizeForSpeed: o
                        }), this._sheet.inject(), r && "boolean" == typeof o && (this._sheet.setOptimizeForSpeed(o), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }
                    var t = e.prototype;
                    return t.add = function(e) {
                        var t = this;
                        void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                            return e[t] = 0, e
                        }, {}));
                        var n = this.getIdAndRules(e),
                            r = n.styleId,
                            i = n.rules;
                        if (r in this._instancesCounts) {
                            this._instancesCounts[r] += 1;
                            return
                        }
                        var o = i.map(function(e) {
                            return t._sheet.insertRule(e)
                        }).filter(function(e) {
                            return -1 !== e
                        });
                        this._indices[r] = o, this._instancesCounts[r] = 1
                    }, t.remove = function(e) {
                        var t = this,
                            n = this.getIdAndRules(e).styleId;
                        if (function(e, t) {
                                if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                            }(n in this._instancesCounts, "styleId: `" + n + "` not found"), this._instancesCounts[n] -= 1, this._instancesCounts[n] < 1) {
                            var r = this._fromServer && this._fromServer[n];
                            r ? (r.parentNode.removeChild(r), delete this._fromServer[n]) : (this._indices[n].forEach(function(e) {
                                return t._sheet.deleteRule(e)
                            }), delete this._indices[n]), delete this._instancesCounts[n]
                        }
                    }, t.update = function(e, t) {
                        this.add(t), this.remove(e)
                    }, t.flush = function() {
                        this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }, t.cssRules = function() {
                        var e = this,
                            t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                                return [t, e._fromServer[t]]
                            }) : [],
                            n = this._sheet.cssRules();
                        return t.concat(Object.keys(this._indices).map(function(t) {
                            return [t, e._indices[t].map(function(e) {
                                return n[e].cssText
                            }).join(e._optimizeForSpeed ? "" : "\n")]
                        }).filter(function(e) {
                            return !!e[1]
                        }))
                    }, t.styles = function(e) {
                        var t, n;
                        return t = this.cssRules(), void 0 === (n = e) && (n = {}), t.map(function(e) {
                            var t = e[0],
                                r = e[1];
                            return o.default.createElement("style", {
                                id: "__" + t,
                                key: "__" + t,
                                nonce: n.nonce ? n.nonce : void 0,
                                dangerouslySetInnerHTML: {
                                    __html: r
                                }
                            })
                        })
                    }, t.getIdAndRules = function(e) {
                        var t = e.children,
                            n = e.dynamic,
                            r = e.id;
                        if (n) {
                            var i = h(r, n);
                            return {
                                styleId: i,
                                rules: Array.isArray(t) ? t.map(function(e) {
                                    return f(i, e)
                                }) : [f(i, t)]
                            }
                        }
                        return {
                            styleId: h(r),
                            rules: Array.isArray(t) ? t : [t]
                        }
                    }, t.selectFromServer = function() {
                        return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                            return e[t.id.slice(2)] = t, e
                        }, {})
                    }, e
                }(),
                g = i.createContext(null);
            g.displayName = "StyleSheetContext";
            var v = o.default.useInsertionEffect || o.default.useLayoutEffect,
                y = new m;

            function A(e) {
                var t = y || i.useContext(g);
                return t && v(function() {
                    return t.add(e),
                        function() {
                            t.remove(e)
                        }
                }, [e.id, String(e.dynamic)]), null
            }
            A.dynamic = function(e) {
                return e.map(function(e) {
                    return h(e[0], e[1])
                }).join(" ")
            }, t.style = A
        },
        6465: function(e, t, n) {
            "use strict";
            e.exports = n(9578).style
        },
        5152: function(e, t, n) {
            e.exports = n(5677)
        },
        1163: function(e, t, n) {
            e.exports = n(6885)
        },
        3412: function(e, t, n) {
            "use strict";
            let r;

            function i(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function a(e) {
                var t = function(e, t) {
                    if ("object" != o(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != o(r)) return r;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == o(t) ? t : t + ""
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, a(r.key), r)
                }
            }

            function l(e, t, n) {
                return t && s(e.prototype, t), n && s(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function u(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function c(e, t) {
                return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function d(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && c(e, t)
            }

            function p(e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                return u(e)
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function f(e, t, n) {
                return (t = a(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, {
                Z: function() {
                    return eJ
                }
            });
            var m, g, v = n(7294);
            let y = /^[a-z0-9]+(-[a-z0-9]+)*$/,
                A = (e, t, n, r = "") => {
                    let i = e.split(":");
                    if ("@" === e.slice(0, 1)) {
                        if (i.length < 2 || i.length > 3) return null;
                        r = i.shift().slice(1)
                    }
                    if (i.length > 3 || !i.length) return null;
                    if (i.length > 1) {
                        let e = i.pop(),
                            n = i.pop(),
                            o = {
                                provider: i.length > 0 ? i[0] : r,
                                prefix: n,
                                name: e
                            };
                        return t && !w(o) ? null : o
                    }
                    let o = i[0],
                        a = o.split("-");
                    if (a.length > 1) {
                        let e = {
                            provider: r,
                            prefix: a.shift(),
                            name: a.join("-")
                        };
                        return t && !w(e) ? null : e
                    }
                    if (n && "" === r) {
                        let e = {
                            provider: r,
                            prefix: "",
                            name: o
                        };
                        return t && !w(e, n) ? null : e
                    }
                    return null
                },
                w = (e, t) => !!e && !!(("" === e.provider || e.provider.match(y)) && (t && "" === e.prefix || e.prefix.match(y)) && e.name.match(y)),
                E = Object.freeze({
                    left: 0,
                    top: 0,
                    width: 16,
                    height: 16
                }),
                b = Object.freeze({
                    rotate: 0,
                    vFlip: !1,
                    hFlip: !1
                }),
                S = Object.freeze({
                    ...E,
                    ...b
                }),
                C = Object.freeze({
                    ...S,
                    body: "",
                    hidden: !1
                });

            function _(e, t) {
                let n = function(e, t) {
                    let n = {};
                    !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
                    let r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
                    return r && (n.rotate = r), n
                }(e, t);
                for (let r in C) r in b ? r in e && !(r in n) && (n[r] = b[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
                return n
            }

            function x(e, t) {
                let n = [];
                if ("object" != typeof e || "object" != typeof e.icons) return n;
                e.not_found instanceof Array && e.not_found.forEach(e => {
                    t(e, null), n.push(e)
                });
                let r = function(e, t) {
                    let n = e.icons,
                        r = e.aliases || Object.create(null),
                        i = Object.create(null);
                    return Object.keys(n).concat(Object.keys(r)).forEach(function e(t) {
                        if (n[t]) return i[t] = [];
                        if (!(t in i)) {
                            i[t] = null;
                            let n = r[t] && r[t].parent,
                                o = n && e(n);
                            o && (i[t] = [n].concat(o))
                        }
                        return i[t]
                    }), i
                }(e);
                for (let i in r) {
                    let o = r[i];
                    o && (t(i, function(e, t, n) {
                        let r = e.icons,
                            i = e.aliases || Object.create(null),
                            o = {};

                        function a(e) {
                            o = _(r[e] || i[e], o)
                        }
                        return a(t), n.forEach(a), _(e, o)
                    }(e, i, o)), n.push(i))
                }
                return n
            }
            let P = {
                provider: "",
                aliases: {},
                not_found: {},
                ...E
            };

            function T(e, t) {
                for (let n in t)
                    if (n in e && typeof e[n] != typeof t[n]) return !1;
                return !0
            }

            function L(e) {
                if ("object" != typeof e || null === e || "string" != typeof e.prefix || !e.icons || "object" != typeof e.icons || !T(e, P)) return null;
                let t = e.icons;
                for (let e in t) {
                    let n = t[e];
                    if (!e.match(y) || "string" != typeof n.body || !T(n, C)) return null
                }
                let n = e.aliases || Object.create(null);
                for (let e in n) {
                    let r = n[e],
                        i = r.parent;
                    if (!e.match(y) || "string" != typeof i || !t[i] && !n[i] || !T(r, C)) return null
                }
                return e
            }
            let O = Object.create(null);

            function M(e, t) {
                let n = O[e] || (O[e] = Object.create(null));
                return n[t] || (n[t] = {
                    provider: e,
                    prefix: t,
                    icons: Object.create(null),
                    missing: new Set
                })
            }

            function R(e, t) {
                return L(t) ? x(t, (t, n) => {
                    n ? e.icons[t] = n : e.missing.add(t)
                }) : []
            }
            let k = !1;

            function D(e) {
                return "boolean" == typeof e && (k = e), k
            }
            let I = Object.freeze({
                    width: null,
                    height: null
                }),
                N = Object.freeze({
                    ...I,
                    ...b
                }),
                F = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
                j = /^-?[0-9.]*[0-9]+[0-9.]*$/g;

            function B(e, t, n) {
                if (1 === t) return e;
                if (n = n || 100, "number" == typeof e) return Math.ceil(e * t * n) / n;
                if ("string" != typeof e) return e;
                let r = e.split(F);
                if (null === r || !r.length) return e;
                let i = [],
                    o = r.shift(),
                    a = j.test(o);
                for (;;) {
                    if (a) {
                        let e = parseFloat(o);
                        isNaN(e) ? i.push(o) : i.push(Math.ceil(e * t * n) / n)
                    } else i.push(o);
                    if (void 0 === (o = r.shift())) return i.join("");
                    a = !a
                }
            }
            let U = e => "unset" === e || "undefined" === e || "none" === e,
                z = /\sid="(\S+)"/g,
                W = "IconifyId" + Date.now().toString(16) + (16777216 * Math.random() | 0).toString(16),
                V = 0,
                Y = Object.create(null);

            function H(e) {
                return Y[e] || Y[""]
            }

            function X(e) {
                let t;
                if ("string" == typeof e.resources) t = [e.resources];
                else if (!((t = e.resources) instanceof Array) || !t.length) return null;
                let n = {
                    resources: t,
                    path: e.path || "/",
                    maxURL: e.maxURL || 500,
                    rotate: e.rotate || 750,
                    timeout: e.timeout || 5e3,
                    random: !0 === e.random,
                    index: e.index || 0,
                    dataAfterTimeout: !1 !== e.dataAfterTimeout
                };
                return n
            }
            let J = Object.create(null),
                Q = ["https://api.simplesvg.com", "https://api.unisvg.com"],
                G = [];
            for (; Q.length > 0;) 1 === Q.length ? G.push(Q.shift()) : Math.random() > .5 ? G.push(Q.shift()) : G.push(Q.pop());
            J[""] = X({
                resources: ["https://api.iconify.design"].concat(G)
            });
            let Z = (() => {
                    let e;
                    try {
                        if (e = fetch, "function" == typeof e) return e
                    } catch (e) {}
                })(),
                q = (e, t, n) => {
                    let r = [],
                        i = function(e, t) {
                            let n;
                            let r = J[e];
                            if (!r) return 0;
                            if (r.maxURL) {
                                let e = 0;
                                r.resources.forEach(t => {
                                    e = Math.max(e, t.length)
                                }), n = r.maxURL - e - r.path.length - (t + ".json?icons=").length
                            } else n = 0;
                            return n
                        }(e, t),
                        o = "icons",
                        a = {
                            type: o,
                            provider: e,
                            prefix: t,
                            icons: []
                        },
                        s = 0;
                    return n.forEach((n, l) => {
                        (s += n.length + 1) >= i && l > 0 && (r.push(a), a = {
                            type: o,
                            provider: e,
                            prefix: t,
                            icons: []
                        }, s = n.length), a.icons.push(n)
                    }), r.push(a), r
                },
                K = (e, t, n) => {
                    if (!Z) {
                        n("abort", 424);
                        return
                    }
                    let r = function(e) {
                        if ("string" == typeof e) {
                            let t = J[e];
                            if (t) return t.path
                        }
                        return "/"
                    }(t.provider);
                    switch (t.type) {
                        case "icons": {
                            let e = t.prefix,
                                n = t.icons,
                                i = n.join(","),
                                o = new URLSearchParams({
                                    icons: i
                                });
                            r += e + ".json?" + o.toString();
                            break
                        }
                        case "custom": {
                            let e = t.uri;
                            r += "/" === e.slice(0, 1) ? e.slice(1) : e;
                            break
                        }
                        default:
                            n("abort", 400);
                            return
                    }
                    let i = 503;
                    Z(e + r).then(e => {
                        let t = e.status;
                        if (200 !== t) {
                            setTimeout(() => {
                                n(404 === t ? "abort" : "next", t)
                            });
                            return
                        }
                        return i = 501, e.json()
                    }).then(e => {
                        if ("object" != typeof e || null === e) {
                            setTimeout(() => {
                                404 === e ? n("abort", e) : n("next", i)
                            });
                            return
                        }
                        setTimeout(() => {
                            n("success", e)
                        })
                    }).catch(() => {
                        n("next", i)
                    })
                };

            function $(e, t) {
                e.forEach(e => {
                    let n = e.loaderCallbacks;
                    n && (e.loaderCallbacks = n.filter(e => e.id !== t))
                })
            }
            let ee = 0;
            var et = {
                resources: [],
                index: 0,
                timeout: 2e3,
                rotate: 750,
                random: !1,
                dataAfterTimeout: !1
            };

            function en(e) {
                let t = {
                        ...et,
                        ...e
                    },
                    n = [];

                function r() {
                    n = n.filter(e => "pending" === e().status)
                }
                return {
                    query: function(e, i, o) {
                        let a = function(e, t, n, r) {
                            let i, o;
                            let a = e.resources.length,
                                s = e.random ? Math.floor(Math.random() * a) : e.index;
                            if (e.random) {
                                let t = e.resources.slice(0);
                                for (i = []; t.length > 1;) {
                                    let e = Math.floor(Math.random() * t.length);
                                    i.push(t[e]), t = t.slice(0, e).concat(t.slice(e + 1))
                                }
                                i = i.concat(t)
                            } else i = e.resources.slice(s).concat(e.resources.slice(0, s));
                            let l = Date.now(),
                                u = "pending",
                                c = 0,
                                d = null,
                                p = [],
                                h = [];

                            function f() {
                                d && (clearTimeout(d), d = null)
                            }

                            function m() {
                                "pending" === u && (u = "aborted"), f(), p.forEach(e => {
                                    "pending" === e.status && (e.status = "aborted")
                                }), p = []
                            }

                            function g(e, t) {
                                t && (h = []), "function" == typeof e && h.push(e)
                            }

                            function v() {
                                u = "failed", h.forEach(e => {
                                    e(void 0, o)
                                })
                            }

                            function y() {
                                p.forEach(e => {
                                    "pending" === e.status && (e.status = "aborted")
                                }), p = []
                            }
                            return "function" == typeof r && h.push(r), setTimeout(function r() {
                                    if ("pending" !== u) return;
                                    f();
                                    let a = i.shift();
                                    if (void 0 === a) {
                                        if (p.length) {
                                            d = setTimeout(() => {
                                                f(), "pending" === u && (y(), v())
                                            }, e.timeout);
                                            return
                                        }
                                        v();
                                        return
                                    }
                                    let s = {
                                        status: "pending",
                                        resource: a,
                                        callback: (t, n) => {
                                            ! function(t, n, a) {
                                                let s = "success" !== n;
                                                switch (p = p.filter(e => e !== t), u) {
                                                    case "pending":
                                                        break;
                                                    case "failed":
                                                        if (s || !e.dataAfterTimeout) return;
                                                        break;
                                                    default:
                                                        return
                                                }
                                                if ("abort" === n) {
                                                    o = a, v();
                                                    return
                                                }
                                                if (s) {
                                                    o = a, p.length || (i.length ? r() : v());
                                                    return
                                                }
                                                if (f(), y(), !e.random) {
                                                    let n = e.resources.indexOf(t.resource); - 1 !== n && n !== e.index && (e.index = n)
                                                }
                                                u = "completed", h.forEach(e => {
                                                    e(a)
                                                })
                                            }(s, t, n)
                                        }
                                    };
                                    p.push(s), c++, d = setTimeout(r, e.rotate), n(a, t, s.callback)
                                }),
                                function() {
                                    return {
                                        startTime: l,
                                        payload: t,
                                        status: u,
                                        queriesSent: c,
                                        queriesPending: p.length,
                                        subscribe: g,
                                        abort: m
                                    }
                                }
                        }(t, e, i, (e, t) => {
                            r(), o && o(e, t)
                        });
                        return n.push(a), a
                    },
                    find: function(e) {
                        return n.find(t => e(t)) || null
                    },
                    setIndex: e => {
                        t.index = e
                    },
                    getIndex: () => t.index,
                    cleanup: r
                }
            }
            let er = Object.create(null),
                ei = "iconify2",
                eo = "iconify",
                ea = eo + "-count",
                es = eo + "-version";

            function el(e, t) {
                try {
                    return e.getItem(t)
                } catch (e) {}
            }

            function eu(e, t, n) {
                try {
                    return e.setItem(t, n), !0
                } catch (e) {}
            }

            function ec(e, t) {
                try {
                    e.removeItem(t)
                } catch (e) {}
            }

            function ed(e, t) {
                return eu(e, ea, t.toString())
            }

            function ep(e) {
                return parseInt(el(e, ea)) || 0
            }
            let eh = {
                    local: !0,
                    session: !0
                },
                ef = {
                    local: new Set,
                    session: new Set
                },
                em = !1,
                eg = "undefined" == typeof window ? {} : window;

            function ev(e) {
                let t = e + "Storage";
                try {
                    if (eg && eg[t] && "number" == typeof eg[t].length) return eg[t]
                } catch (e) {}
                eh[e] = !1
            }

            function ey(e, t) {
                let n = ev(e);
                if (!n) return;
                let r = el(n, es);
                if (r !== ei) {
                    if (r) {
                        let e = ep(n);
                        for (let t = 0; t < e; t++) ec(n, eo + t.toString())
                    }
                    eu(n, es, ei), ed(n, 0);
                    return
                }
                let i = Math.floor(Date.now() / 36e5) - 168,
                    o = e => {
                        let r = eo + e.toString(),
                            o = el(n, r);
                        if ("string" == typeof o) {
                            try {
                                let n = JSON.parse(o);
                                if ("object" == typeof n && "number" == typeof n.cached && n.cached > i && "string" == typeof n.provider && "object" == typeof n.data && "string" == typeof n.data.prefix && t(n, e)) return !0
                            } catch (e) {}
                            ec(n, r)
                        }
                    },
                    a = ep(n);
                for (let t = a - 1; t >= 0; t--) o(t) || (t === a - 1 ? ed(n, --a) : ef[e].add(t))
            }

            function eA() {
                if (!em)
                    for (let e in em = !0, eh) ey(e, e => {
                        let t = e.data,
                            n = e.provider,
                            r = t.prefix,
                            i = M(n, r);
                        if (!R(i, t).length) return !1;
                        let o = t.lastModified || -1;
                        return i.lastModifiedCached = i.lastModifiedCached ? Math.min(i.lastModifiedCached, o) : o, !0
                    })
            }

            function ew() {}
            let eE = (e, t) => {
                    let n, r;
                    let i = function(e, t = !0, n = !1) {
                            let r = [];
                            return e.forEach(e => {
                                let i = "string" == typeof e ? A(e, t, n) : e;
                                i && r.push(i)
                            }), r
                        }(e, !0, D()),
                        o = function(e) {
                            let t = {
                                    loaded: [],
                                    missing: [],
                                    pending: []
                                },
                                n = Object.create(null);
                            e.sort((e, t) => e.provider !== t.provider ? e.provider.localeCompare(t.provider) : e.prefix !== t.prefix ? e.prefix.localeCompare(t.prefix) : e.name.localeCompare(t.name));
                            let r = {
                                provider: "",
                                prefix: "",
                                name: ""
                            };
                            return e.forEach(e => {
                                if (r.name === e.name && r.prefix === e.prefix && r.provider === e.provider) return;
                                r = e;
                                let i = e.provider,
                                    o = e.prefix,
                                    a = e.name,
                                    s = n[i] || (n[i] = Object.create(null)),
                                    l = s[o] || (s[o] = M(i, o));
                                (a in l.icons ? t.loaded : "" === o || l.missing.has(a) ? t.missing : t.pending).push({
                                    provider: i,
                                    prefix: o,
                                    name: a
                                })
                            }), t
                        }(i);
                    if (!o.pending.length) {
                        let e = !0;
                        return t && setTimeout(() => {
                            e && t(o.loaded, o.missing, o.pending, ew)
                        }), () => {
                            e = !1
                        }
                    }
                    let a = Object.create(null),
                        s = [];
                    return o.pending.forEach(e => {
                        let {
                            provider: t,
                            prefix: i
                        } = e;
                        if (i === r && t === n) return;
                        n = t, r = i, s.push(M(t, i));
                        let o = a[t] || (a[t] = Object.create(null));
                        o[i] || (o[i] = [])
                    }), o.pending.forEach(e => {
                        let {
                            provider: t,
                            prefix: n,
                            name: r
                        } = e, i = M(t, n), o = i.pendingIcons || (i.pendingIcons = new Set);
                        o.has(r) || (o.add(r), a[t][n].push(r))
                    }), s.forEach(e => {
                        let {
                            provider: t,
                            prefix: n
                        } = e;
                        if (a[t][n].length) {
                            var r, i;
                            r = e, i = a[t][n], r.iconsToLoad ? r.iconsToLoad = r.iconsToLoad.concat(i).sort() : r.iconsToLoad = i, r.iconsQueueFlag || (r.iconsQueueFlag = !0, setTimeout(() => {
                                let e;
                                r.iconsQueueFlag = !1;
                                let {
                                    provider: t,
                                    prefix: n
                                } = r, i = r.iconsToLoad;
                                if (delete r.iconsToLoad, !i || !(e = H(t))) return;
                                let o = e.prepare(t, n, i);
                                o.forEach(e => {
                                    ! function(e, t, n) {
                                        let r, i;
                                        if ("string" == typeof e) {
                                            let t = H(e);
                                            if (!t) return n(void 0, 424);
                                            i = t.send;
                                            let o = function(e) {
                                                if (!er[e]) {
                                                    let t = J[e];
                                                    if (!t) return;
                                                    let n = en(t);
                                                    er[e] = {
                                                        config: t,
                                                        redundancy: n
                                                    }
                                                }
                                                return er[e]
                                            }(e);
                                            o && (r = o.redundancy)
                                        } else {
                                            let t = X(e);
                                            if (t) {
                                                r = en(t);
                                                let n = e.resources ? e.resources[0] : "",
                                                    o = H(n);
                                                o && (i = o.send)
                                            }
                                        }
                                        r && i ? r.query(t, i, n)().abort : n(void 0, 424)
                                    }(t, e, t => {
                                        var n;
                                        if ("object" != typeof t) e.icons.forEach(e => {
                                            r.missing.add(e)
                                        });
                                        else try {
                                            let e = R(r, t);
                                            if (!e.length) return;
                                            let n = r.pendingIcons;
                                            n && e.forEach(e => {
                                                    n.delete(e)
                                                }),
                                                function(e, t) {
                                                    function n(n) {
                                                        let r, i;
                                                        if (!eh[n] || !(r = ev(n))) return;
                                                        let o = ef[n];
                                                        if (o.size) o.delete(i = Array.from(o).shift());
                                                        else if (i = ep(r), !ed(r, i + 1)) return;
                                                        let a = {
                                                            cached: Math.floor(Date.now() / 36e5),
                                                            provider: e.provider,
                                                            data: t
                                                        };
                                                        return eu(r, eo + i.toString(), JSON.stringify(a))
                                                    }
                                                    em || eA(), (!t.lastModified || function(e, t) {
                                                        let n = e.lastModifiedCached;
                                                        if (n && n >= t) return n === t;
                                                        if (e.lastModifiedCached = t, n)
                                                            for (let n in eh) ey(n, n => {
                                                                let r = n.data;
                                                                return n.provider !== e.provider || r.prefix !== e.prefix || r.lastModified === t
                                                            });
                                                        return !0
                                                    }(e, t.lastModified)) && Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), n("local") || n("session"))
                                                }(r, t)
                                        } catch (e) {
                                            console.error(e)
                                        }(n = r).iconsLoaderFlag || (n.iconsLoaderFlag = !0, setTimeout(() => {
                                            var e;
                                            n.iconsLoaderFlag = !1, (e = n).pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
                                                e.pendingCallbacksFlag = !1;
                                                let t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
                                                if (!t.length) return;
                                                let n = !1,
                                                    r = e.provider,
                                                    i = e.prefix;
                                                t.forEach(t => {
                                                    let o = t.icons,
                                                        a = o.pending.length;
                                                    o.pending = o.pending.filter(t => {
                                                        if (t.prefix !== i) return !0;
                                                        let a = t.name;
                                                        if (e.icons[a]) o.loaded.push({
                                                            provider: r,
                                                            prefix: i,
                                                            name: a
                                                        });
                                                        else {
                                                            if (!e.missing.has(a)) return n = !0, !0;
                                                            o.missing.push({
                                                                provider: r,
                                                                prefix: i,
                                                                name: a
                                                            })
                                                        }
                                                        return !1
                                                    }), o.pending.length !== a && (n || $([e], t.id), t.callback(o.loaded.slice(0), o.missing.slice(0), o.pending.slice(0), t.abort))
                                                })
                                            }))
                                        }))
                                    })
                                })
                            }))
                        }
                    }), t ? function(e, t, n) {
                        let r = ee++,
                            i = $.bind(null, n, r);
                        if (!t.pending.length) return i;
                        let o = {
                            id: r,
                            icons: t,
                            callback: e,
                            abort: i
                        };
                        return n.forEach(e => {
                            (e.loaderCallbacks || (e.loaderCallbacks = [])).push(o)
                        }), i
                    }(t, o, s) : ew
                },
                eb = /[\s,]+/,
                eS = {
                    ...N,
                    inline: !1
                },
                eC = {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    "aria-hidden": !0,
                    role: "img"
                },
                e_ = {
                    display: "inline-block"
                },
                ex = {
                    backgroundColor: "currentColor"
                },
                eP = {
                    backgroundColor: "transparent"
                },
                eT = {
                    Image: "var(--svg)",
                    Repeat: "no-repeat",
                    Size: "100% 100%"
                },
                eL = {
                    WebkitMask: ex,
                    mask: ex,
                    background: eP
                };
            for (let e in eL) {
                let t = eL[e];
                for (let n in eT) t[e + n] = eT[n]
            }
            let eO = {
                ...eS,
                inline: !0
            };

            function eM(e) {
                return e + (e.match(/^[-0-9.]+$/) ? "px" : "")
            }
            let eR = (e, t, n, i) => {
                let o = n ? eO : eS,
                    a = function(e, t) {
                        let n = {
                            ...e
                        };
                        for (let e in t) {
                            let r = t[e],
                                i = typeof r;
                            e in I ? (null === r || r && ("string" === i || "number" === i)) && (n[e] = r) : i === typeof n[e] && (n[e] = "rotate" === e ? r % 4 : r)
                        }
                        return n
                    }(o, t),
                    s = t.mode || "svg",
                    l = {},
                    u = t.style || {},
                    c = {
                        ..."svg" === s ? eC : {},
                        ref: i
                    };
                for (let e in t) {
                    let n = t[e];
                    if (void 0 !== n) switch (e) {
                        case "icon":
                        case "style":
                        case "children":
                        case "onLoad":
                        case "mode":
                        case "_ref":
                        case "_inline":
                            break;
                        case "inline":
                        case "hFlip":
                        case "vFlip":
                            a[e] = !0 === n || "true" === n || 1 === n;
                            break;
                        case "flip":
                            "string" == typeof n && function(e, t) {
                                t.split(eb).forEach(t => {
                                    let n = t.trim();
                                    switch (n) {
                                        case "horizontal":
                                            e.hFlip = !0;
                                            break;
                                        case "vertical":
                                            e.vFlip = !0
                                    }
                                })
                            }(a, n);
                            break;
                        case "color":
                            l.color = n;
                            break;
                        case "rotate":
                            "string" == typeof n ? a[e] = function(e, t = 0) {
                                let n = e.replace(/^-?[0-9.]*/, "");

                                function r(e) {
                                    for (; e < 0;) e += 4;
                                    return e % 4
                                }
                                if ("" === n) {
                                    let t = parseInt(e);
                                    return isNaN(t) ? 0 : r(t)
                                }
                                if (n !== e) {
                                    let t = 0;
                                    switch (n) {
                                        case "%":
                                            t = 25;
                                            break;
                                        case "deg":
                                            t = 90
                                    }
                                    if (t) {
                                        let i = parseFloat(e.slice(0, e.length - n.length));
                                        return isNaN(i) ? 0 : (i /= t) % 1 == 0 ? r(i) : 0
                                    }
                                }
                                return t
                            }(n) : "number" == typeof n && (a[e] = n);
                            break;
                        case "ariaHidden":
                        case "aria-hidden":
                            !0 !== n && "true" !== n && delete c["aria-hidden"];
                            break;
                        default:
                            void 0 === o[e] && (c[e] = n)
                    }
                }
                let d = function(e, t) {
                        let n, r;
                        let i = {
                                ...S,
                                ...e
                            },
                            o = {
                                ...N,
                                ...t
                            },
                            a = {
                                left: i.left,
                                top: i.top,
                                width: i.width,
                                height: i.height
                            },
                            s = i.body;
                        [i, o].forEach(e => {
                            let t;
                            let n = [],
                                r = e.hFlip,
                                i = e.vFlip,
                                o = e.rotate;
                            switch (r ? i ? o += 2 : (n.push("translate(" + (a.width + a.left).toString() + " " + (0 - a.top).toString() + ")"), n.push("scale(-1 1)"), a.top = a.left = 0) : i && (n.push("translate(" + (0 - a.left).toString() + " " + (a.height + a.top).toString() + ")"), n.push("scale(1 -1)"), a.top = a.left = 0), o < 0 && (o -= 4 * Math.floor(o / 4)), o %= 4) {
                                case 1:
                                    n.unshift("rotate(90 " + (t = a.height / 2 + a.top).toString() + " " + t.toString() + ")");
                                    break;
                                case 2:
                                    n.unshift("rotate(180 " + (a.width / 2 + a.left).toString() + " " + (a.height / 2 + a.top).toString() + ")");
                                    break;
                                case 3:
                                    n.unshift("rotate(-90 " + (t = a.width / 2 + a.left).toString() + " " + t.toString() + ")")
                            }
                            o % 2 == 1 && (a.left !== a.top && (t = a.left, a.left = a.top, a.top = t), a.width !== a.height && (t = a.width, a.width = a.height, a.height = t)), n.length && (s = '<g transform="' + n.join(" ") + '">' + s + "</g>")
                        });
                        let l = o.width,
                            u = o.height,
                            c = a.width,
                            d = a.height;
                        null === l ? n = B(r = null === u ? "1em" : "auto" === u ? d : u, c / d) : (n = "auto" === l ? c : l, r = null === u ? B(n, d / c) : "auto" === u ? d : u);
                        let p = {},
                            h = (e, t) => {
                                U(t) || (p[e] = t.toString())
                            };
                        return h("width", n), h("height", r), p.viewBox = a.left.toString() + " " + a.top.toString() + " " + c.toString() + " " + d.toString(), {
                            attributes: p,
                            body: s
                        }
                    }(e, a),
                    p = d.attributes;
                if (a.inline && (l.verticalAlign = "-0.125em"), "svg" === s) {
                    var h;
                    c.style = {
                        ...l,
                        ...u
                    }, Object.assign(c, p);
                    let e = 0,
                        n = t.id;
                    return "string" == typeof n && (n = n.replace(/-/g, "_")), c.dangerouslySetInnerHTML = {
                        __html: (h = function(e, t = W) {
                            let n;
                            let r = [];
                            for (; n = z.exec(e);) r.push(n[1]);
                            if (!r.length) return e;
                            let i = "suffix" + (16777216 * Math.random() | Date.now()).toString(16);
                            return r.forEach(n => {
                                let r = "function" == typeof t ? t(n) : t + (V++).toString(),
                                    o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                                e = e.replace(RegExp('([#;"])(' + o + ')([")]|\\.[a-z])', "g"), "$1" + r + i + "$3")
                            }), e = e.replace(RegExp(i, "g"), "")
                        }(d.body, n ? () => n + "ID" + e++ : "iconifyReact"), void 0 === r && function() {
                            try {
                                r = window.trustedTypes.createPolicy("iconify", {
                                    createHTML: e => e
                                })
                            } catch (e) {
                                r = null
                            }
                        }(), r ? r.createHTML(h) : h)
                    }, v.createElement("svg", c)
                }
                let {
                    body: f,
                    width: m,
                    height: g
                } = e, y = "mask" === s || "bg" !== s && -1 !== f.indexOf("currentColor"), A = function(e, t) {
                    let n = -1 === e.indexOf("xlink:") ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
                    for (let e in t) n += " " + e + '="' + t[e] + '"';
                    return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>"
                }(f, {
                    ...p,
                    width: m + "",
                    height: g + ""
                });
                return c.style = {
                    ...l,
                    "--svg": 'url("data:image/svg+xml,' + A.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ") + '")',
                    width: eM(p.width),
                    height: eM(p.height),
                    ...e_,
                    ...y ? ex : eP,
                    ...u
                }, v.createElement("span", c)
            };
            if (D(!0), Y[""] = {
                    prepare: q,
                    send: K
                }, "undefined" != typeof document && "undefined" != typeof window) {
                eA();
                let e = window;
                if (void 0 !== e.IconifyPreload) {
                    let t = e.IconifyPreload,
                        n = "Invalid IconifyPreload syntax.";
                    "object" == typeof t && null !== t && (t instanceof Array ? t : [t]).forEach(e => {
                        try {
                            ("object" != typeof e || null === e || e instanceof Array || "object" != typeof e.icons || "string" != typeof e.prefix || ! function(e, t) {
                                if ("object" != typeof e) return !1;
                                if ("string" != typeof t && (t = e.provider || ""), k && !t && !e.prefix) {
                                    let t = !1;
                                    return L(e) && (e.prefix = "", x(e, (e, n) => {
                                        n && function(e, t) {
                                            let n = A(e, !0, k);
                                            if (!n) return !1;
                                            let r = M(n.provider, n.prefix);
                                            return function(e, t, n) {
                                                try {
                                                    if ("string" == typeof n.body) return e.icons[t] = {
                                                        ...n
                                                    }, !0
                                                } catch (e) {}
                                                return !1
                                            }(r, n.name, t)
                                        }(e, n) && (t = !0)
                                    })), t
                                }
                                let n = e.prefix;
                                if (!w({
                                        provider: t,
                                        prefix: n,
                                        name: "a"
                                    })) return !1;
                                let r = M(t, n);
                                return !!R(r, e)
                            }(e)) && console.error(n)
                        } catch (e) {
                            console.error(n)
                        }
                    })
                }
                if (void 0 !== e.IconifyProviders) {
                    let t = e.IconifyProviders;
                    if ("object" == typeof t && null !== t)
                        for (let e in t) {
                            let n = "IconifyProviders[" + e + "] is invalid.";
                            try {
                                let r = t[e];
                                if ("object" != typeof r || !r || void 0 === r.resources) continue;
                                ! function(e, t) {
                                    let n = X(t);
                                    return null !== n && (J[e] = n, !0)
                                }(e, r) && console.error(n)
                            } catch (e) {
                                console.error(n)
                            }
                        }
                }
            }
            class ek extends v.Component {
                constructor(e) {
                    super(e), this.state = {
                        icon: null
                    }
                }
                _abortLoading() {
                    this._loading && (this._loading.abort(), this._loading = null)
                }
                _setData(e) {
                    this.state.icon !== e && this.setState({
                        icon: e
                    })
                }
                _checkIcon(e) {
                    let t;
                    let n = this.state,
                        r = this.props.icon;
                    if ("object" == typeof r && null !== r && "string" == typeof r.body) {
                        this._icon = "", this._abortLoading(), (e || null === n.icon) && this._setData({
                            data: r
                        });
                        return
                    }
                    if ("string" != typeof r || null === (t = A(r, !1, !0))) {
                        this._abortLoading(), this._setData(null);
                        return
                    }
                    let i = function(e) {
                        let t = "string" == typeof e ? A(e, !0, k) : e;
                        if (t) {
                            let e = M(t.provider, t.prefix),
                                n = t.name;
                            return e.icons[n] || (e.missing.has(n) ? null : void 0)
                        }
                    }(t);
                    if (!i) {
                        this._loading && this._loading.name === r || (this._abortLoading(), this._icon = "", this._setData(null), null !== i && (this._loading = {
                            name: r,
                            abort: eE([t], this._checkIcon.bind(this, !1))
                        }));
                        return
                    }
                    if (this._icon !== r || null === n.icon) {
                        this._abortLoading(), this._icon = r;
                        let e = ["iconify"];
                        "" !== t.prefix && e.push("iconify--" + t.prefix), "" !== t.provider && e.push("iconify--" + t.provider), this._setData({
                            data: i,
                            classes: e
                        }), this.props.onLoad && this.props.onLoad(r)
                    }
                }
                componentDidMount() {
                    this._checkIcon(!1)
                }
                componentDidUpdate(e) {
                    e.icon !== this.props.icon && this._checkIcon(!0)
                }
                componentWillUnmount() {
                    this._abortLoading()
                }
                render() {
                    let e = this.props,
                        t = this.state.icon;
                    if (null === t) return e.children ? e.children : v.createElement("span", {});
                    let n = e;
                    return t.classes && (n = {
                        ...e,
                        className: ("string" == typeof e.className ? e.className + " " : "") + t.classes.join(" ")
                    }), eR({
                        ...S,
                        ...t.data
                    }, n, e._inline, e._ref)
                }
            }
            let eD = v.forwardRef(function(e, t) {
                let n = {
                    ...e,
                    _ref: t,
                    _inline: !1
                };
                return v.createElement(ek, n)
            });

            function eI() {
                return (eI = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(null, arguments)
            }
            v.forwardRef(function(e, t) {
                let n = {
                    ...e,
                    _ref: t,
                    _inline: !0
                };
                return v.createElement(ek, n)
            });
            var eN = function(e) {
                    switch (e) {
                        case "stacked":
                        default:
                            return "rhap_stacked";
                        case "stacked-reverse":
                            return "rhap_stacked-reverse";
                        case "horizontal":
                            return "rhap_horizontal";
                        case "horizontal-reverse":
                            return "rhap_horizontal-reverse"
                    }
                },
                eF = function(e) {
                    return e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
                },
                ej = function(e) {
                    return e > 9 ? e.toString() : "0".concat(e)
                },
                eB = function(e, t, n) {
                    if (!isFinite(e)) return null;
                    var r = Math.floor(e / 60),
                        i = ej(r),
                        o = ej(Math.floor(e % 60)),
                        a = ej(Math.floor(r % 60)),
                        s = "".concat(i, ":").concat(o),
                        l = "".concat(Math.floor(r / 60), ":").concat(a, ":").concat(o);
                    return "auto" === n ? t >= 3600 ? l : s : "mm:ss" === n ? s : "hh:mm:ss" === n ? l : void 0
                };

            function eU(e, t) {
                var n = !1;
                return function(r) {
                    n || (e(r), n = !0, setTimeout(function() {
                        return n = !1
                    }, t))
                }
            }
            var ez = function(e) {
                    d(r, e);
                    var t, n = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = h(r);
                        if (t) {
                            var i = h(this).constructor;
                            e = Reflect.construct(n, arguments, i)
                        } else e = n.apply(this, arguments);
                        return p(this, e)
                    });

                    function r() {
                        var e;
                        i(this, r);
                        for (var t = arguments.length, o = Array(t), a = 0; a < t; a++) o[a] = arguments[a];
                        return f(u(e = n.call.apply(n, [this].concat(o))), "audio", void 0), f(u(e), "timeOnMouseMove", 0), f(u(e), "hasAddedAudioEventListener", !1), f(u(e), "downloadProgressAnimationTimer", void 0), f(u(e), "state", {
                            isDraggingProgress: !1,
                            currentTimePos: "0%",
                            hasDownloadProgressAnimation: !1,
                            downloadProgressArr: [],
                            waitingForSeekCallback: !1
                        }), f(u(e), "getCurrentProgress", function(t) {
                            var n = e.props,
                                r = n.audio,
                                i = n.progressBar;
                            if (0 !== r.src.indexOf("blob:") && void 0 === e.props.srcDuration && (!r.src || !isFinite(r.currentTime) || !i.current)) return {
                                currentTime: 0,
                                currentTimePos: "0%"
                            };
                            var o = i.current.getBoundingClientRect(),
                                a = o.width,
                                s = eF(t) - o.left;
                            return s < 0 ? s = 0 : s > a && (s = a), {
                                currentTime: e.getDuration() * s / a,
                                currentTimePos: "".concat((s / a * 100).toFixed(2), "%")
                            }
                        }), f(u(e), "handleContextMenu", function(e) {
                            e.preventDefault()
                        }), f(u(e), "handleMouseDownOrTouchStartProgressBar", function(t) {
                            t.stopPropagation();
                            var n = e.getCurrentProgress(t.nativeEvent),
                                r = n.currentTime,
                                i = n.currentTimePos;
                            isFinite(r) && (e.timeOnMouseMove = r, e.setState({
                                isDraggingProgress: !0,
                                currentTimePos: i
                            }), t.nativeEvent instanceof MouseEvent ? (window.addEventListener("mousemove", e.handleWindowMouseOrTouchMove), window.addEventListener("mouseup", e.handleWindowMouseOrTouchUp)) : (window.addEventListener("touchmove", e.handleWindowMouseOrTouchMove), window.addEventListener("touchend", e.handleWindowMouseOrTouchUp)))
                        }), f(u(e), "handleWindowMouseOrTouchMove", function(t) {
                            t instanceof MouseEvent && t.preventDefault(), t.stopPropagation();
                            var n = window.getSelection();
                            if (n && "Range" === n.type && n.empty(), e.state.isDraggingProgress) {
                                var r = e.getCurrentProgress(t),
                                    i = r.currentTime,
                                    o = r.currentTimePos;
                                e.timeOnMouseMove = i, e.setState({
                                    currentTimePos: o
                                })
                            }
                        }), f(u(e), "handleWindowMouseOrTouchUp", function(t) {
                            t.stopPropagation();
                            var n = e.timeOnMouseMove,
                                r = e.props,
                                i = r.audio,
                                o = r.onChangeCurrentTimeError,
                                a = r.onSeek;
                            if (a) e.setState({
                                isDraggingProgress: !1,
                                waitingForSeekCallback: !0
                            }, function() {
                                a(i, n).then(function() {
                                    return e.setState({
                                        waitingForSeekCallback: !1
                                    })
                                }, function(e) {
                                    throw Error(e)
                                })
                            });
                            else {
                                var s = {
                                    isDraggingProgress: !1
                                };
                                if (i.readyState === i.HAVE_NOTHING || i.readyState === i.HAVE_METADATA || !isFinite(n)) try {
                                    i.load()
                                } catch (e) {
                                    return s.currentTimePos = "0%", o && o(e)
                                }
                                i.currentTime = n, e.setState(s)
                            }
                            t instanceof MouseEvent ? (window.removeEventListener("mousemove", e.handleWindowMouseOrTouchMove), window.removeEventListener("mouseup", e.handleWindowMouseOrTouchUp)) : (window.removeEventListener("touchmove", e.handleWindowMouseOrTouchMove), window.removeEventListener("touchend", e.handleWindowMouseOrTouchUp))
                        }), f(u(e), "handleAudioTimeUpdate", eU(function(t) {
                            var n = e.state.isDraggingProgress,
                                r = t.target;
                            if (!n && !0 !== e.state.waitingForSeekCallback) {
                                var i = r.currentTime,
                                    o = e.getDuration();
                                e.setState({
                                    currentTimePos: "".concat((i / o * 100 || 0).toFixed(2), "%")
                                })
                            }
                        }, e.props.progressUpdateInterval)), f(u(e), "handleAudioDownloadProgressUpdate", function(t) {
                            for (var n = t.target, r = e.getDuration(), i = [], o = 0; o < n.buffered.length; o++) {
                                var a = n.buffered.start(o),
                                    s = n.buffered.end(o);
                                i.push({
                                    left: "".concat(Math.round(100 / r * a) || 0, "%"),
                                    width: "".concat(Math.round(100 / r * (s - a)) || 0, "%")
                                })
                            }
                            clearTimeout(e.downloadProgressAnimationTimer), e.setState({
                                downloadProgressArr: i,
                                hasDownloadProgressAnimation: !0
                            }), e.downloadProgressAnimationTimer = setTimeout(function() {
                                e.setState({
                                    hasDownloadProgressAnimation: !1
                                })
                            }, 200)
                        }), e
                    }
                    return l(r, [{
                        key: "getDuration",
                        value: function() {
                            var e = this.props,
                                t = e.audio,
                                n = e.srcDuration;
                            return void 0 === n ? t.duration : n
                        }
                    }, {
                        key: "initialize",
                        value: function() {
                            var e = this.props.audio;
                            e && !this.hasAddedAudioEventListener && (this.audio = e, this.hasAddedAudioEventListener = !0, e.addEventListener("timeupdate", this.handleAudioTimeUpdate), e.addEventListener("progress", this.handleAudioDownloadProgressUpdate))
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.initialize()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.initialize()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.audio && this.hasAddedAudioEventListener && (this.audio.removeEventListener("timeupdate", this.handleAudioTimeUpdate), this.audio.removeEventListener("progress", this.handleAudioDownloadProgressUpdate)), clearTimeout(this.downloadProgressAnimationTimer)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.showDownloadProgress,
                                n = e.showFilledProgress,
                                r = e.progressBar,
                                i = e.i18nProgressBar,
                                o = this.state,
                                a = o.currentTimePos,
                                s = o.downloadProgressArr,
                                l = o.hasDownloadProgressAnimation;
                            return v.createElement("div", {
                                className: "rhap_progress-container",
                                ref: r,
                                "aria-label": i,
                                role: "progressbar",
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                "aria-valuenow": Number(a.split("%")[0]),
                                tabIndex: 0,
                                onMouseDown: this.handleMouseDownOrTouchStartProgressBar,
                                onTouchStart: this.handleMouseDownOrTouchStartProgressBar,
                                onContextMenu: this.handleContextMenu
                            }, v.createElement("div", {
                                className: "rhap_progress-bar ".concat(t ? "rhap_progress-bar-show-download" : "")
                            }, v.createElement("div", {
                                className: "rhap_progress-indicator",
                                style: {
                                    left: a
                                }
                            }), n && v.createElement("div", {
                                className: "rhap_progress-filled",
                                style: {
                                    width: a
                                }
                            }), t && s.map(function(e, t) {
                                var n = e.left,
                                    r = e.width;
                                return v.createElement("div", {
                                    key: t,
                                    className: "rhap_download-progress",
                                    style: {
                                        left: n,
                                        width: r,
                                        transitionDuration: l ? ".2s" : "0s"
                                    }
                                })
                            })))
                        }
                    }]), r
                }(v.Component),
                eW = (0, v.forwardRef)(function(e, t) {
                    return v.createElement(ez, eI({}, e, {
                        progressBar: t
                    }))
                }),
                eV = function(e) {
                    d(r, e);
                    var t, n = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = h(r);
                        if (t) {
                            var i = h(this).constructor;
                            e = Reflect.construct(n, arguments, i)
                        } else e = n.apply(this, arguments);
                        return p(this, e)
                    });

                    function r(e) {
                        i(this, r), f(u(t = n.call(this, e)), "audio", void 0), f(u(t), "hasAddedAudioEventListener", !1), f(u(t), "state", {
                            currentTime: t.props.defaultCurrentTime
                        }), f(u(t), "handleAudioCurrentTimeChange", function(e) {
                            var n = e.target,
                                r = t.props,
                                i = r.isLeftTime,
                                o = r.timeFormat,
                                a = r.defaultCurrentTime;
                            t.setState({
                                currentTime: eB(i ? n.duration - n.currentTime : n.currentTime, n.duration, o) || a
                            })
                        }), f(u(t), "addAudioEventListeners", function() {
                            var e = t.props.audio;
                            e && !t.hasAddedAudioEventListener && (t.audio = e, t.hasAddedAudioEventListener = !0, e.addEventListener("timeupdate", t.handleAudioCurrentTimeChange), e.addEventListener("loadedmetadata", t.handleAudioCurrentTimeChange))
                        });
                        var t, o = e.audio,
                            a = e.defaultCurrentTime,
                            s = e.isLeftTime,
                            l = e.timeFormat,
                            c = a;
                        return o && (c = eB(s ? o.duration - o.currentTime : o.currentTime, o.duration, l)), t.state = {
                            currentTime: c
                        }, t
                    }
                    return l(r, [{
                        key: "componentDidMount",
                        value: function() {
                            this.addAudioEventListeners()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.addAudioEventListeners()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.audio && this.hasAddedAudioEventListener && (this.audio.removeEventListener("timeupdate", this.handleAudioCurrentTimeChange), this.audio.removeEventListener("loadedmetadata", this.handleAudioCurrentTimeChange))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.currentTime
                        }
                    }]), r
                }(v.PureComponent),
                eY = function(e) {
                    d(r, e);
                    var t, n = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = h(r);
                        if (t) {
                            var i = h(this).constructor;
                            e = Reflect.construct(n, arguments, i)
                        } else e = n.apply(this, arguments);
                        return p(this, e)
                    });

                    function r(e) {
                        i(this, r), f(u(t = n.call(this, e)), "audio", void 0), f(u(t), "hasAddedAudioEventListener", !1), f(u(t), "state", {
                            duration: t.props.audio ? eB(t.props.audio.duration, t.props.audio.duration, t.props.timeFormat) : t.props.defaultDuration
                        }), f(u(t), "handleAudioDurationChange", function(e) {
                            var n = e.target,
                                r = t.props,
                                i = r.timeFormat,
                                o = r.defaultDuration;
                            t.setState({
                                duration: eB(n.duration, n.duration, i) || o
                            })
                        }), f(u(t), "addAudioEventListeners", function() {
                            var e = t.props.audio;
                            e && !t.hasAddedAudioEventListener && (t.audio = e, t.hasAddedAudioEventListener = !0, e.addEventListener("durationchange", t.handleAudioDurationChange), e.addEventListener("abort", t.handleAudioDurationChange))
                        });
                        var t, o = e.audio,
                            a = e.timeFormat,
                            s = e.defaultDuration;
                        return t.state = {
                            duration: o ? eB(o.duration, o.duration, a) : s
                        }, t
                    }
                    return l(r, [{
                        key: "componentDidMount",
                        value: function() {
                            this.addAudioEventListeners()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.addAudioEventListeners()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.audio && this.hasAddedAudioEventListener && (this.audio.removeEventListener("durationchange", this.handleAudioDurationChange), this.audio.removeEventListener("abort", this.handleAudioDurationChange))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.duration
                        }
                    }]), r
                }(v.PureComponent),
                eH = function(e) {
                    d(r, e);
                    var t, n = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = h(r);
                        if (t) {
                            var i = h(this).constructor;
                            e = Reflect.construct(n, arguments, i)
                        } else e = n.apply(this, arguments);
                        return p(this, e)
                    });

                    function r() {
                        var e;
                        i(this, r);
                        for (var t = arguments.length, o = Array(t), a = 0; a < t; a++) o[a] = arguments[a];
                        return f(u(e = n.call.apply(n, [this].concat(o))), "audio", void 0), f(u(e), "hasAddedAudioEventListener", !1), f(u(e), "volumeBar", (0, v.createRef)()), f(u(e), "volumeAnimationTimer", 0), f(u(e), "lastVolume", e.props.volume), f(u(e), "state", {
                            currentVolumePos: "".concat((e.lastVolume / 1 * 100 || 0).toFixed(2), "%"),
                            hasVolumeAnimation: !1,
                            isDraggingVolume: !1
                        }), f(u(e), "getCurrentVolume", function(t) {
                            var n, r, i = e.props.audio;
                            if (!e.volumeBar.current) return {
                                currentVolume: i.volume,
                                currentVolumePos: e.state.currentVolumePos
                            };
                            var o = e.volumeBar.current.getBoundingClientRect(),
                                a = o.width,
                                s = eF(t) - o.left;
                            return s < 0 ? (n = 0, r = "0%") : s > o.width ? (n = 1, r = "100%") : (n = s / a, r = "".concat(s / a * 100, "%")), {
                                currentVolume: n,
                                currentVolumePos: r
                            }
                        }), f(u(e), "handleContextMenu", function(e) {
                            e.preventDefault()
                        }), f(u(e), "handleClickVolumeButton", function() {
                            var t = e.props.audio;
                            t.volume > 0 ? (e.lastVolume = t.volume, t.volume = 0) : t.volume = e.lastVolume
                        }), f(u(e), "handleVolumnControlMouseOrTouchDown", function(t) {
                            t.stopPropagation();
                            var n = e.props.audio,
                                r = e.getCurrentVolume(t.nativeEvent),
                                i = r.currentVolume,
                                o = r.currentVolumePos;
                            n.volume = i, e.setState({
                                isDraggingVolume: !0,
                                currentVolumePos: o
                            }), t.nativeEvent instanceof MouseEvent ? (window.addEventListener("mousemove", e.handleWindowMouseOrTouchMove), window.addEventListener("mouseup", e.handleWindowMouseOrTouchUp)) : (window.addEventListener("touchmove", e.handleWindowMouseOrTouchMove), window.addEventListener("touchend", e.handleWindowMouseOrTouchUp))
                        }), f(u(e), "handleWindowMouseOrTouchMove", function(t) {
                            t instanceof MouseEvent && t.preventDefault(), t.stopPropagation();
                            var n = e.props.audio,
                                r = window.getSelection();
                            if (r && "Range" === r.type && r.empty(), e.state.isDraggingVolume) {
                                var i = e.getCurrentVolume(t),
                                    o = i.currentVolume,
                                    a = i.currentVolumePos;
                                n.volume = o, e.setState({
                                    currentVolumePos: a
                                })
                            }
                        }), f(u(e), "handleWindowMouseOrTouchUp", function(t) {
                            t.stopPropagation(), e.setState({
                                isDraggingVolume: !1
                            }), t instanceof MouseEvent ? (window.removeEventListener("mousemove", e.handleWindowMouseOrTouchMove), window.removeEventListener("mouseup", e.handleWindowMouseOrTouchUp)) : (window.removeEventListener("touchmove", e.handleWindowMouseOrTouchMove), window.removeEventListener("touchend", e.handleWindowMouseOrTouchUp))
                        }), f(u(e), "handleAudioVolumeChange", function(t) {
                            var n = e.state.isDraggingVolume,
                                r = t.target.volume;
                            (e.lastVolume > 0 && 0 === r || 0 === e.lastVolume && r > 0) && e.props.onMuteChange(), e.lastVolume = r, n || (e.setState({
                                hasVolumeAnimation: !0,
                                currentVolumePos: "".concat((r / 1 * 100 || 0).toFixed(2), "%")
                            }), clearTimeout(e.volumeAnimationTimer), e.volumeAnimationTimer = setTimeout(function() {
                                e.setState({
                                    hasVolumeAnimation: !1
                                })
                            }, 100))
                        }), e
                    }
                    return l(r, [{
                        key: "componentDidUpdate",
                        value: function() {
                            var e = this.props.audio;
                            e && !this.hasAddedAudioEventListener && (this.audio = e, this.hasAddedAudioEventListener = !0, e.addEventListener("volumechange", this.handleAudioVolumeChange))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.audio && this.hasAddedAudioEventListener && this.audio.removeEventListener("volumechange", this.handleAudioVolumeChange), clearTimeout(this.volumeAnimationTimer)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.audio,
                                n = e.showFilledVolume,
                                r = e.i18nVolumeControl,
                                i = this.state,
                                o = i.currentVolumePos,
                                a = i.hasVolumeAnimation,
                                s = (t || {}).volume;
                            return v.createElement("div", {
                                ref: this.volumeBar,
                                onMouseDown: this.handleVolumnControlMouseOrTouchDown,
                                onTouchStart: this.handleVolumnControlMouseOrTouchDown,
                                onContextMenu: this.handleContextMenu,
                                role: "progressbar",
                                "aria-label": r,
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                "aria-valuenow": Number((100 * s).toFixed(0)),
                                tabIndex: 0,
                                className: "rhap_volume-bar-area"
                            }, v.createElement("div", {
                                className: "rhap_volume-bar"
                            }, v.createElement("div", {
                                className: "rhap_volume-indicator",
                                style: {
                                    left: o,
                                    transitionDuration: a ? ".1s" : "0s"
                                }
                            }), n && v.createElement("div", {
                                className: "rhap_volume-filled",
                                style: {
                                    width: o
                                }
                            })))
                        }
                    }]), r
                }(v.Component);
            (m = g || (g = {})).CURRENT_TIME = "CURRENT_TIME", m.CURRENT_LEFT_TIME = "CURRENT_LEFT_TIME", m.PROGRESS_BAR = "PROGRESS_BAR", m.DURATION = "DURATION", m.ADDITIONAL_CONTROLS = "ADDITIONAL_CONTROLS", m.MAIN_CONTROLS = "MAIN_CONTROLS", m.VOLUME_CONTROLS = "VOLUME_CONTROLS", m.LOOP = "LOOP", m.VOLUME = "VOLUME";
            var eX = function(e) {
                d(r, e);
                var t, n = (t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, n = h(r);
                    if (t) {
                        var i = h(this).constructor;
                        e = Reflect.construct(n, arguments, i)
                    } else e = n.apply(this, arguments);
                    return p(this, e)
                });

                function r() {
                    var e;
                    i(this, r);
                    for (var t = arguments.length, o = Array(t), a = 0; a < t; a++) o[a] = arguments[a];
                    return f(u(e = n.call.apply(n, [this].concat(o))), "audio", (0, v.createRef)()), f(u(e), "progressBar", (0, v.createRef)()), f(u(e), "container", (0, v.createRef)()), f(u(e), "lastVolume", e.props.volume), f(u(e), "listenTracker", void 0), f(u(e), "volumeAnimationTimer", void 0), f(u(e), "downloadProgressAnimationTimer", void 0), f(u(e), "togglePlay", function(t) {
                        t.stopPropagation();
                        var n = e.audio.current;
                        (n.paused || n.ended) && n.src ? e.playAudioPromise() : n.paused || n.pause()
                    }), f(u(e), "playAudioPromise", function() {
                        e.audio.current.error && e.audio.current.load();
                        var t = e.audio.current.play();
                        t ? t.then(null).catch(function(t) {
                            var n = e.props.onPlayError;
                            n && n(Error(t))
                        }) : e.forceUpdate()
                    }), f(u(e), "isPlaying", function() {
                        var t = e.audio.current;
                        return !!t && !t.paused && !t.ended
                    }), f(u(e), "handlePlay", function(t) {
                        e.forceUpdate(), e.props.onPlay && e.props.onPlay(t)
                    }), f(u(e), "handlePause", function(t) {
                        e.audio && (e.forceUpdate(), e.props.onPause && e.props.onPause(t))
                    }), f(u(e), "handleEnded", function(t) {
                        e.audio && (e.forceUpdate(), e.props.onEnded && e.props.onEnded(t))
                    }), f(u(e), "handleAbort", function(t) {
                        e.props.onAbort && e.props.onAbort(t)
                    }), f(u(e), "handleClickVolumeButton", function() {
                        var t = e.audio.current;
                        t.volume > 0 ? (e.lastVolume = t.volume, t.volume = 0) : t.volume = e.lastVolume
                    }), f(u(e), "handleMuteChange", function() {
                        e.forceUpdate()
                    }), f(u(e), "handleClickLoopButton", function() {
                        e.audio.current.loop = !e.audio.current.loop, e.forceUpdate()
                    }), f(u(e), "handleClickRewind", function() {
                        var t = e.props,
                            n = t.progressJumpSteps,
                            r = t.progressJumpStep,
                            i = n.backward || r;
                        e.setJumpTime(-i)
                    }), f(u(e), "handleClickForward", function() {
                        var t = e.props,
                            n = t.progressJumpSteps,
                            r = t.progressJumpStep,
                            i = n.forward || r;
                        e.setJumpTime(i)
                    }), f(u(e), "setJumpTime", function(t) {
                        var n = e.audio.current,
                            r = n.duration,
                            i = n.currentTime;
                        if (n.readyState === n.HAVE_NOTHING || n.readyState === n.HAVE_METADATA || !isFinite(r) || !isFinite(i)) try {
                            n.load()
                        } catch (t) {
                            return e.props.onChangeCurrentTimeError && e.props.onChangeCurrentTimeError(t)
                        }
                        var o = i + t / 1e3;
                        o < 0 ? (n.currentTime = 0, o = 0) : o > r ? (n.currentTime = r, o = r) : n.currentTime = o
                    }), f(u(e), "setJumpVolume", function(t) {
                        var n = e.audio.current.volume + t;
                        n < 0 ? n = 0 : n > 1 && (n = 1), e.audio.current.volume = n
                    }), f(u(e), "handleKeyDown", function(t) {
                        if (e.props.hasDefaultKeyBindings) switch (t.key) {
                            case " ":
                                (t.target === e.container.current || t.target === e.progressBar.current) && (t.preventDefault(), e.togglePlay(t));
                                break;
                            case "ArrowLeft":
                                e.handleClickRewind();
                                break;
                            case "ArrowRight":
                                e.handleClickForward();
                                break;
                            case "ArrowUp":
                                t.preventDefault(), e.setJumpVolume(e.props.volumeJumpStep);
                                break;
                            case "ArrowDown":
                                t.preventDefault(), e.setJumpVolume(-e.props.volumeJumpStep);
                                break;
                            case "l":
                                e.handleClickLoopButton();
                                break;
                            case "m":
                                e.handleClickVolumeButton()
                        }
                    }), f(u(e), "renderUIModules", function(t) {
                        return t.map(function(t, n) {
                            return e.renderUIModule(t, n)
                        })
                    }), f(u(e), "renderUIModule", function(t, n) {
                        var r = e.props,
                            i = r.defaultCurrentTime,
                            o = r.progressUpdateInterval,
                            a = r.showDownloadProgress,
                            s = r.showFilledProgress,
                            l = r.showFilledVolume,
                            u = r.defaultDuration,
                            c = r.customIcons,
                            d = r.showSkipControls,
                            p = r.onClickPrevious,
                            h = r.onClickNext,
                            f = r.onChangeCurrentTimeError,
                            m = r.showJumpControls,
                            y = r.customAdditionalControls,
                            A = r.customVolumeControls,
                            w = r.muted,
                            E = r.timeFormat,
                            b = r.volume,
                            S = r.loop,
                            C = r.mse,
                            _ = r.i18nAriaLabels;
                        switch (t) {
                            case g.CURRENT_TIME:
                                return v.createElement("div", {
                                    key: n,
                                    id: "rhap_current-time",
                                    className: "rhap_time rhap_current-time"
                                }, v.createElement(eV, {
                                    audio: e.audio.current,
                                    isLeftTime: !1,
                                    defaultCurrentTime: i,
                                    timeFormat: E
                                }));
                            case g.CURRENT_LEFT_TIME:
                                return v.createElement("div", {
                                    key: n,
                                    id: "rhap_current-left-time",
                                    className: "rhap_time rhap_current-left-time"
                                }, v.createElement(eV, {
                                    audio: e.audio.current,
                                    isLeftTime: !0,
                                    defaultCurrentTime: i,
                                    timeFormat: E
                                }));
                            case g.PROGRESS_BAR:
                                return v.createElement(eW, {
                                    key: n,
                                    ref: e.progressBar,
                                    audio: e.audio.current,
                                    progressUpdateInterval: o,
                                    showDownloadProgress: a,
                                    showFilledProgress: s,
                                    onSeek: C && C.onSeek,
                                    onChangeCurrentTimeError: f,
                                    srcDuration: C && C.srcDuration,
                                    i18nProgressBar: _.progressControl
                                });
                            case g.DURATION:
                                return v.createElement("div", {
                                    key: n,
                                    className: "rhap_time rhap_total-time"
                                }, C && C.srcDuration ? eB(C.srcDuration, C.srcDuration, e.props.timeFormat) : v.createElement(eY, {
                                    audio: e.audio.current,
                                    defaultDuration: u,
                                    timeFormat: E
                                }));
                            case g.ADDITIONAL_CONTROLS:
                                return v.createElement("div", {
                                    key: n,
                                    className: "rhap_additional-controls"
                                }, e.renderUIModules(y));
                            case g.MAIN_CONTROLS:
                                var x, P = e.isPlaying();
                                return x = P ? c.pause ? c.pause : v.createElement(eD, {
                                    icon: "mdi:pause-circle"
                                }) : c.play ? c.play : v.createElement(eD, {
                                    icon: "mdi:play-circle"
                                }), v.createElement("div", {
                                    key: n,
                                    className: "rhap_main-controls"
                                }, d && v.createElement("button", {
                                    "aria-label": _.previous,
                                    className: "rhap_button-clear rhap_main-controls-button rhap_skip-button",
                                    type: "button",
                                    onClick: p
                                }, c.previous ? c.previous : v.createElement(eD, {
                                    icon: "mdi:skip-previous"
                                })), m && v.createElement("button", {
                                    "aria-label": _.rewind,
                                    className: "rhap_button-clear rhap_main-controls-button rhap_rewind-button",
                                    type: "button",
                                    onClick: e.handleClickRewind
                                }, c.rewind ? c.rewind : v.createElement(eD, {
                                    icon: "mdi:rewind"
                                })), v.createElement("button", {
                                    "aria-label": P ? _.pause : _.play,
                                    className: "rhap_button-clear rhap_main-controls-button rhap_play-pause-button",
                                    type: "button",
                                    onClick: e.togglePlay
                                }, x), m && v.createElement("button", {
                                    "aria-label": _.forward,
                                    className: "rhap_button-clear rhap_main-controls-button rhap_forward-button",
                                    type: "button",
                                    onClick: e.handleClickForward
                                }, c.forward ? c.forward : v.createElement(eD, {
                                    icon: "mdi:fast-forward"
                                })), d && v.createElement("button", {
                                    "aria-label": _.next,
                                    className: "rhap_button-clear rhap_main-controls-button rhap_skip-button",
                                    type: "button",
                                    onClick: h
                                }, c.next ? c.next : v.createElement(eD, {
                                    icon: "mdi:skip-next"
                                })));
                            case g.VOLUME_CONTROLS:
                                return v.createElement("div", {
                                    key: n,
                                    className: "rhap_volume-controls"
                                }, e.renderUIModules(A));
                            case g.LOOP:
                                var T, L = e.audio.current ? e.audio.current.loop : S;
                                return T = L ? c.loop ? c.loop : v.createElement(eD, {
                                    icon: "mdi:repeat"
                                }) : c.loopOff ? c.loopOff : v.createElement(eD, {
                                    icon: "mdi:repeat-off"
                                }), v.createElement("button", {
                                    key: n,
                                    "aria-label": L ? _.loop : _.loopOff,
                                    className: "rhap_button-clear rhap_repeat-button",
                                    type: "button",
                                    onClick: e.handleClickLoopButton
                                }, T);
                            case g.VOLUME:
                                var O, M = (e.audio.current || {}).volume,
                                    R = void 0 === M ? w ? 0 : b : M;
                                return O = R ? c.volume ? c.volume : v.createElement(eD, {
                                    icon: "mdi:volume-high"
                                }) : c.volume ? c.volumeMute : v.createElement(eD, {
                                    icon: "mdi:volume-mute"
                                }), v.createElement("div", {
                                    key: n,
                                    className: "rhap_volume-container"
                                }, v.createElement("button", {
                                    "aria-label": R ? _.volume : _.volumeMute,
                                    onClick: e.handleClickVolumeButton,
                                    type: "button",
                                    className: "rhap_button-clear rhap_volume-button"
                                }, O), v.createElement(eH, {
                                    audio: e.audio.current,
                                    volume: R,
                                    onMuteChange: e.handleMuteChange,
                                    showFilledVolume: l,
                                    i18nVolumeControl: _.volumeControl
                                }));
                            default:
                                if (!(0, v.isValidElement)(t)) return null;
                                return t.key ? t : (0, v.cloneElement)(t, {
                                    key: n
                                })
                        }
                    }), e
                }
                return l(r, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.forceUpdate();
                        var t = this.audio.current;
                        this.props.muted ? t.volume = 0 : t.volume = this.lastVolume, t.addEventListener("error", function(t) {
                            var n = t.target;
                            if (n.error && n.currentTime === n.duration) return e.props.onEnded && e.props.onEnded(t);
                            e.props.onError && e.props.onError(t)
                        }), t.addEventListener("canplay", function(t) {
                            e.props.onCanPlay && e.props.onCanPlay(t)
                        }), t.addEventListener("canplaythrough", function(t) {
                            e.props.onCanPlayThrough && e.props.onCanPlayThrough(t)
                        }), t.addEventListener("play", this.handlePlay), t.addEventListener("abort", this.handleAbort), t.addEventListener("ended", this.handleEnded), t.addEventListener("playing", function(t) {
                            e.props.onPlaying && e.props.onPlaying(t)
                        }), t.addEventListener("seeking", function(t) {
                            e.props.onSeeking && e.props.onSeeking(t)
                        }), t.addEventListener("seeked", function(t) {
                            e.props.onSeeked && e.props.onSeeked(t)
                        }), t.addEventListener("waiting", function(t) {
                            e.props.onWaiting && e.props.onWaiting(t)
                        }), t.addEventListener("emptied", function(t) {
                            e.props.onEmptied && e.props.onEmptied(t)
                        }), t.addEventListener("stalled", function(t) {
                            e.props.onStalled && e.props.onStalled(t)
                        }), t.addEventListener("suspend", function(t) {
                            e.props.onSuspend && e.props.onSuspend(t)
                        }), t.addEventListener("loadstart", function(t) {
                            e.props.onLoadStart && e.props.onLoadStart(t)
                        }), t.addEventListener("loadedmetadata", function(t) {
                            e.props.onLoadedMetaData && e.props.onLoadedMetaData(t)
                        }), t.addEventListener("loadeddata", function(t) {
                            e.props.onLoadedData && e.props.onLoadedData(t)
                        }), t.addEventListener("pause", this.handlePause), t.addEventListener("timeupdate", eU(function(t) {
                            e.props.onListen && e.props.onListen(t)
                        }, this.props.listenInterval)), t.addEventListener("volumechange", function(t) {
                            e.props.onVolumeChange && e.props.onVolumeChange(t)
                        }), t.addEventListener("encrypted", function(t) {
                            var n = e.props.mse;
                            n && n.onEcrypted && n.onEcrypted(t)
                        })
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this.props,
                            n = t.src,
                            r = t.autoPlayAfterSrcChange;
                        e.src !== n && (r ? this.playAudioPromise() : this.forceUpdate())
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            n = e.src,
                            r = e.loop,
                            i = e.preload,
                            o = e.autoPlay,
                            a = e.crossOrigin,
                            s = e.mediaGroup,
                            l = e.header,
                            u = e.footer,
                            c = e.layout,
                            d = e.customProgressBarSection,
                            p = e.customControlsSection,
                            h = e.children,
                            f = e.style,
                            m = e.i18nAriaLabels,
                            g = this.audio.current ? this.audio.current.loop : r,
                            y = this.isPlaying() ? "rhap_play-status--playing" : "rhap_play-status--paused";
                        return v.createElement("div", {
                            role: "group",
                            tabIndex: 0,
                            "aria-label": m.player,
                            className: "rhap_container ".concat(g ? "rhap_loop--on" : "rhap_loop--off", " ").concat(y, " ").concat(t),
                            onKeyDown: this.handleKeyDown,
                            ref: this.container,
                            style: f
                        }, v.createElement("audio", {
                            src: n,
                            controls: !1,
                            loop: g,
                            autoPlay: o,
                            preload: i,
                            crossOrigin: a,
                            mediaGroup: s,
                            ref: this.audio
                        }, h), l && v.createElement("div", {
                            className: "rhap_header"
                        }, l), v.createElement("div", {
                            className: "rhap_main ".concat(eN(c))
                        }, v.createElement("div", {
                            className: "rhap_progress-section"
                        }, this.renderUIModules(d)), v.createElement("div", {
                            className: "rhap_controls-section"
                        }, this.renderUIModules(p))), u && v.createElement("div", {
                            className: "rhap_footer"
                        }, u))
                    }
                }]), r
            }(v.Component);
            f(eX, "defaultProps", {
                autoPlay: !1,
                autoPlayAfterSrcChange: !0,
                listenInterval: 1e3,
                progressJumpStep: 5e3,
                progressJumpSteps: {},
                volumeJumpStep: .1,
                loop: !1,
                muted: !1,
                preload: "auto",
                progressUpdateInterval: 20,
                defaultCurrentTime: "--:--",
                defaultDuration: "--:--",
                timeFormat: "auto",
                volume: 1,
                className: "",
                showJumpControls: !0,
                showSkipControls: !1,
                showDownloadProgress: !0,
                showFilledProgress: !0,
                showFilledVolume: !1,
                customIcons: {},
                customProgressBarSection: [g.CURRENT_TIME, g.PROGRESS_BAR, g.DURATION],
                customControlsSection: [g.ADDITIONAL_CONTROLS, g.MAIN_CONTROLS, g.VOLUME_CONTROLS],
                customAdditionalControls: [g.LOOP],
                customVolumeControls: [g.VOLUME],
                layout: "stacked",
                hasDefaultKeyBindings: !0,
                i18nAriaLabels: {
                    player: "Audio player",
                    progressControl: "Audio progress control",
                    volumeControl: "Volume control",
                    play: "Play",
                    pause: "Pause",
                    rewind: "Rewind",
                    forward: "Forward",
                    previous: "Previous",
                    next: "Skip",
                    loop: "Disable loop",
                    loopOff: "Enable loop",
                    volume: "Mute",
                    volumeMute: "Unmute"
                }
            });
            var eJ = eX
        },
        9844: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return d
                }
            });
            var r = n(7294);

            function i(e, t, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function a(e) {
                        try {
                            l(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            l(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    l((r = r.apply(e, t || [])).next())
                })
            }

            function o(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }

            function a(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function s(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return a
            }

            function l(e, t, n) {
                if (n || 2 == arguments.length)
                    for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                return e.concat(r || Array.prototype.slice.call(t))
            }

            function u(e, t, n, r, u) {
                for (var d = [], p = 5; p < arguments.length; p++) d[p - 5] = arguments[p];
                return i(this, void 0, void 0, function() {
                    var p, h, f, m, g;
                    return o(this, function(v) {
                        switch (v.label) {
                            case 0:
                                v.trys.push([0, 12, 13, 14]), h = (p = a(d)).next(), v.label = 1;
                            case 1:
                                if (h.done) return [3, 11];
                                switch (typeof(f = h.value)) {
                                    case "string":
                                        return [3, 2];
                                    case "number":
                                        return [3, 4];
                                    case "function":
                                        return [3, 6]
                                }
                                return [3, 8];
                            case 2:
                                return [4, function(e, t, n, r, u, d) {
                                    return i(this, void 0, void 0, function() {
                                        var p, h;
                                        return o(this, function(f) {
                                            switch (f.label) {
                                                case 0:
                                                    var m, g;
                                                    return m = p = e.textContent || "", g = s(n).slice(0), h = l(l([], s(m), !1), [NaN], !1).findIndex(function(e, t) {
                                                        return g[t] !== e
                                                    }), [4, function(e, t, n, r, l) {
                                                        return i(this, void 0, void 0, function() {
                                                            var i, u, d, p, h, f, m, g, v, y, A, w;
                                                            return o(this, function(E) {
                                                                switch (E.label) {
                                                                    case 0:
                                                                        if (i = t, l) {
                                                                            for (u = 0, d = 1; d < t.length; d++)
                                                                                if (h = (p = s([t[d - 1], t[d]], 2))[0], (f = p[1]).length > h.length || "" === f) {
                                                                                    u = d;
                                                                                    break
                                                                                } i = t.slice(u, t.length)
                                                                        }
                                                                        E.label = 1;
                                                                    case 1:
                                                                        E.trys.push([1, 6, 7, 8]), g = (m = a(function(e) {
                                                                            var t, n, r, i, s;
                                                                            return o(this, function(l) {
                                                                                switch (l.label) {
                                                                                    case 0:
                                                                                        t = function(e) {
                                                                                            return o(this, function(t) {
                                                                                                switch (t.label) {
                                                                                                    case 0:
                                                                                                        return [4, {
                                                                                                            op: function(t) {
                                                                                                                return requestAnimationFrame(function() {
                                                                                                                    return t.textContent = e
                                                                                                                })
                                                                                                            },
                                                                                                            opCode: function(t) {
                                                                                                                var n = t.textContent || "";
                                                                                                                return "" === e || n.length > e.length ? "DELETE" : "WRITING"
                                                                                                            }
                                                                                                        }];
                                                                                                    case 1:
                                                                                                        return t.sent(), [2]
                                                                                                }
                                                                                            })
                                                                                        }, l.label = 1;
                                                                                    case 1:
                                                                                        l.trys.push([1, 6, 7, 8]), r = (n = a(e)).next(), l.label = 2;
                                                                                    case 2:
                                                                                        return r.done ? [3, 5] : [5, t(r.value)];
                                                                                    case 3:
                                                                                        l.sent(), l.label = 4;
                                                                                    case 4:
                                                                                        return r = n.next(), [3, 2];
                                                                                    case 5:
                                                                                        return [3, 8];
                                                                                    case 6:
                                                                                        return i = {
                                                                                            error: l.sent()
                                                                                        }, [3, 8];
                                                                                    case 7:
                                                                                        try {
                                                                                            r && !r.done && (s = n.return) && s.call(n)
                                                                                        } finally {
                                                                                            if (i) throw i.error
                                                                                        }
                                                                                        return [7];
                                                                                    case 8:
                                                                                        return [2]
                                                                                }
                                                                            })
                                                                        }(i))).next(), E.label = 2;
                                                                    case 2:
                                                                        return g.done ? [3, 5] : (y = "WRITING" === (v = g.value).opCode(e) ? n + n * (Math.random() - .5) : r + r * (Math.random() - .5), v.op(e), [4, c(y)]);
                                                                    case 3:
                                                                        E.sent(), E.label = 4;
                                                                    case 4:
                                                                        return g = m.next(), [3, 2];
                                                                    case 5:
                                                                        return [3, 8];
                                                                    case 6:
                                                                        return A = {
                                                                            error: E.sent()
                                                                        }, [3, 8];
                                                                    case 7:
                                                                        try {
                                                                            g && !g.done && (w = m.return) && w.call(m)
                                                                        } finally {
                                                                            if (A) throw A.error
                                                                        }
                                                                        return [7];
                                                                    case 8:
                                                                        return [2]
                                                                }
                                                            })
                                                        })
                                                    }(e, l(l([], s(function(e, t, n) {
                                                        var r, i;
                                                        return void 0 === n && (n = 0), o(this, function(o) {
                                                            switch (o.label) {
                                                                case 0:
                                                                    i = (r = t(e)).length, o.label = 1;
                                                                case 1:
                                                                    return i > n ? [4, r.slice(0, --i).join("")] : [3, 3];
                                                                case 2:
                                                                    return o.sent(), [3, 1];
                                                                case 3:
                                                                    return [2]
                                                            }
                                                        })
                                                    }(p, t, h)), !1), s(function(e, t, n) {
                                                        var r, i;
                                                        return void 0 === n && (n = 0), o(this, function(o) {
                                                            switch (o.label) {
                                                                case 0:
                                                                    i = (r = t(e)).length, o.label = 1;
                                                                case 1:
                                                                    return n < i ? [4, r.slice(0, ++n).join("")] : [3, 3];
                                                                case 2:
                                                                    return o.sent(), [3, 1];
                                                                case 3:
                                                                    return [2]
                                                            }
                                                        })
                                                    }(n, t, h)), !1), r, u, d)];
                                                case 1:
                                                    return f.sent(), [2]
                                            }
                                        })
                                    })
                                }(e, t, f, n, r, u)];
                            case 3:
                            case 5:
                            case 7:
                                return v.sent(), [3, 10];
                            case 4:
                                return [4, c(f)];
                            case 6:
                                return [4, f.apply(void 0, l([e, t, n, r, u], s(d), !1))];
                            case 8:
                                return [4, f];
                            case 9:
                                v.sent(), v.label = 10;
                            case 10:
                                return h = p.next(), [3, 1];
                            case 11:
                                return [3, 14];
                            case 12:
                                return m = {
                                    error: v.sent()
                                }, [3, 14];
                            case 13:
                                try {
                                    h && !h.done && (g = p.return) && g.call(p)
                                } finally {
                                    if (m) throw m.error
                                }
                                return [7];
                            case 14:
                                return [2]
                        }
                    })
                })
            }

            function c(e) {
                return i(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, new Promise(function(t) {
                                    return setTimeout(t, e)
                                })];
                            case 1:
                                return t.sent(), [2]
                        }
                    })
                })
            }! function(e, t) {
                void 0 === t && (t = {});
                var n = t.insertAt;
                if (e && "undefined" != typeof document) {
                    var r = document.head || document.getElementsByTagName("head")[0],
                        i = document.createElement("style");
                    i.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
                }
            }(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");
            var d = (0, r.memo)((0, r.forwardRef)(function(e, t) {
                var n = e.sequence,
                    i = e.repeat,
                    o = e.className,
                    a = e.speed,
                    c = void 0 === a ? 40 : a,
                    d = e.deletionSpeed,
                    p = e.omitDeletionAnimation,
                    h = void 0 !== p && p,
                    f = e.preRenderFirstString,
                    m = e.wrapper,
                    g = e.splitter,
                    v = void 0 === g ? function(e) {
                        return l([], s(e), !1)
                    } : g,
                    y = e.cursor,
                    A = void 0 === y || y,
                    w = e.style,
                    E = function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                        }
                        return n
                    }(e, ["sequence", "repeat", "className", "speed", "deletionSpeed", "omitDeletionAnimation", "preRenderFirstString", "wrapper", "splitter", "cursor", "style"]),
                    b = E["aria-label"],
                    S = E["aria-hidden"],
                    C = E.role;
                d || (d = c);
                var _ = [, , ].fill(40);
                [c, d].forEach(function(e, t) {
                    switch (typeof e) {
                        case "number":
                            _[t] = Math.abs(e - 100);
                            break;
                        case "object":
                            var n = e.type,
                                r = e.value;
                            if ("number" != typeof r) break;
                            "keyStrokeDelayInMs" === n && (_[t] = r)
                    }
                });
                var x, P, T, L, O, M, R, k, D, I = _[0],
                    N = _[1],
                    F = (x = t, void 0 === P && (P = null), T = (0, r.useRef)(P), (0, r.useEffect)(function() {
                        x && ("function" == typeof x ? x(T.current) : x.current = T.current)
                    }, [x]), T),
                    j = "index-module_type__E-SaG";
                L = o ? "".concat(A ? j + " " : "").concat(o) : A ? j : "", O = (0, r.useRef)(function() {
                    var e, t = n;
                    i === 1 / 0 ? e = u : "number" == typeof i && (t = Array(1 + i).fill(n).flat());
                    var r = e ? l(l([], s(t), !1), [e], !1) : l([], s(t), !1);
                    return u.apply(void 0, l([F.current, v, I, N, h], s(r), !1)),
                        function() {
                            F.current
                        }
                }), M = (0, r.useRef)(), R = (0, r.useRef)(!1), k = (0, r.useRef)(!1), D = s((0, r.useState)(0), 2)[1], R.current && (k.current = !0), (0, r.useEffect)(function() {
                    return R.current || (M.current = O.current(), R.current = !0), D(function(e) {
                            return e + 1
                        }),
                        function() {
                            k.current && M.current && M.current()
                        }
                }, []);
                var B = void 0 !== f && f ? n.find(function(e) {
                    return "string" == typeof e
                }) || "" : null;
                return r.createElement(void 0 === m ? "span" : m, {
                    "aria-hidden": S,
                    "aria-label": b,
                    role: C,
                    style: w,
                    className: L,
                    children: b ? r.createElement("span", {
                        "aria-hidden": "true",
                        ref: F,
                        children: B
                    }) : B,
                    ref: b ? void 0 : F
                })
            }), function(e, t) {
                return !0
            })
        },
        689: function(e, t, n) {
            "use strict";
            n.d(t, {
                p: function() {
                    return Z
                }
            });
            var r, i, o, a, s, l, u, c, d = n(7294),
                p = n.t(d, 2),
                h = Object.defineProperty,
                f = (e, t, n) => t in e ? h(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                m = (e, t, n) => (f(e, "symbol" != typeof t ? t + "" : t, n), n);
            let g = new class {
                    constructor() {
                        m(this, "current", this.detect()), m(this, "handoffState", "pending"), m(this, "currentId", 0)
                    }
                    set(e) {
                        this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
                    }
                    reset() {
                        this.set(this.detect())
                    }
                    nextId() {
                        return ++this.currentId
                    }
                    get isServer() {
                        return "server" === this.current
                    }
                    get isClient() {
                        return "client" === this.current
                    }
                    detect() {
                        return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
                    }
                    handoff() {
                        "pending" === this.handoffState && (this.handoffState = "complete")
                    }
                    get isHandoffComplete() {
                        return "complete" === this.handoffState
                    }
                },
                v = (e, t) => {
                    g.isServer ? (0, d.useEffect)(e, t) : (0, d.useLayoutEffect)(e, t)
                },
                y = function(e) {
                    let t;
                    let n = (t = (0, d.useRef)(e), v(() => {
                        t.current = e
                    }, [e]), t);
                    return d.useCallback((...e) => n.current(...e), [n])
                },
                A = null != (u = d.useId) ? u : function() {
                    let e = function() {
                            let e;
                            let t = (e = "undefined" == typeof document, (0, p.useSyncExternalStore)(() => () => {}, () => !1, () => !e)),
                                [n, r] = d.useState(g.isHandoffComplete);
                            return n && !1 === g.isHandoffComplete && r(!1), d.useEffect(() => {
                                !0 !== n && r(!0)
                            }, [n]), d.useEffect(() => g.handoff(), []), !t && n
                        }(),
                        [t, n] = d.useState(e ? () => g.nextId() : null);
                    return v(() => {
                        null === t && n(g.nextId())
                    }, [t]), null != t ? "" + t : void 0
                };

            function w(e) {
                var t;
                if (e.type) return e.type;
                let n = null != (t = e.as) ? t : "button";
                if ("string" == typeof n && "button" === n.toLowerCase()) return "button"
            }
            let E = Symbol();

            function b(...e) {
                let t = (0, d.useRef)(e);
                (0, d.useEffect)(() => {
                    t.current = e
                }, [e]);
                let n = y(e => {
                    for (let n of t.current) null != n && ("function" == typeof n ? n(e) : n.current = e)
                });
                return e.every(e => null == e || (null == e ? void 0 : e[E])) ? void 0 : n
            }
            let S = (0, d.createContext)(null);
            S.displayName = "OpenClosedContext";
            var C = ((r = C || {})[r.Open = 1] = "Open", r[r.Closed = 2] = "Closed", r[r.Closing = 4] = "Closing", r[r.Opening = 8] = "Opening", r);

            function _({
                value: e,
                children: t
            }) {
                return d.createElement(S.Provider, {
                    value: e
                }, t)
            }

            function x(e, t, ...n) {
                if (e in t) {
                    let r = t[e];
                    return "function" == typeof r ? r(...n) : r
                }
                let r = Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(r, x), r
            }

            function P(...e) {
                return Array.from(new Set(e.flatMap(e => "string" == typeof e ? e.split(" ") : []))).filter(Boolean).join(" ")
            }
            var T = ((i = T || {})[i.None = 0] = "None", i[i.RenderStrategy = 1] = "RenderStrategy", i[i.Static = 2] = "Static", i),
                L = ((o = L || {})[o.Unmount = 0] = "Unmount", o[o.Hidden = 1] = "Hidden", o);

            function O({
                ourProps: e,
                theirProps: t,
                slot: n,
                defaultTag: r,
                features: i,
                visible: o = !0,
                name: a,
                mergeRefs: s
            }) {
                s = null != s ? s : k;
                let l = D(t, e);
                if (o) return M(l, n, r, a, s);
                let u = null != i ? i : 0;
                if (2 & u) {
                    let {
                        static: e = !1,
                        ...t
                    } = l;
                    if (e) return M(t, n, r, a, s)
                }
                if (1 & u) {
                    let {
                        unmount: e = !0,
                        ...t
                    } = l;
                    return x(e ? 0 : 1, {
                        0: () => null,
                        1: () => M({
                            ...t,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, n, r, a, s)
                    })
                }
                return M(l, n, r, a, s)
            }

            function M(e, t = {}, n, r, i) {
                let {
                    as: o = n,
                    children: a,
                    refName: s = "ref",
                    ...l
                } = F(e, ["unmount", "static"]), u = void 0 !== e.ref ? {
                    [s]: e.ref
                } : {}, c = "function" == typeof a ? a(t) : a;
                "className" in l && l.className && "function" == typeof l.className && (l.className = l.className(t));
                let p = {};
                if (t) {
                    let e = !1,
                        n = [];
                    for (let [r, i] of Object.entries(t)) "boolean" == typeof i && (e = !0), !0 === i && n.push(r);
                    e && (p["data-headlessui-state"] = n.join(" "))
                }
                if (o === d.Fragment && Object.keys(N(l)).length > 0) {
                    if (!(0, d.isValidElement)(c) || Array.isArray(c) && c.length > 1) throw Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(l).map(e => `  - ${e}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => `  - ${e}`).join(`
`)].join(`
`));
                    let e = c.props,
                        t = "function" == typeof(null == e ? void 0 : e.className) ? (...t) => P(null == e ? void 0 : e.className(...t), l.className) : P(null == e ? void 0 : e.className, l.className);
                    return (0, d.cloneElement)(c, Object.assign({}, D(c.props, N(F(l, ["ref"]))), p, u, {
                        ref: i(c.ref, u.ref)
                    }, t ? {
                        className: t
                    } : {}))
                }
                return (0, d.createElement)(o, Object.assign({}, F(l, ["ref"]), o !== d.Fragment && u, o !== d.Fragment && p), c)
            }

            function R() {
                let e = (0, d.useRef)([]),
                    t = (0, d.useCallback)(t => {
                        for (let n of e.current) null != n && ("function" == typeof n ? n(t) : n.current = t)
                    }, []);
                return (...n) => {
                    if (!n.every(e => null == e)) return e.current = n, t
                }
            }

            function k(...e) {
                return e.every(e => null == e) ? void 0 : t => {
                    for (let n of e) null != n && ("function" == typeof n ? n(t) : n.current = t)
                }
            }

            function D(...e) {
                if (0 === e.length) return {};
                if (1 === e.length) return e[0];
                let t = {},
                    n = {};
                for (let r of e)
                    for (let e in r) e.startsWith("on") && "function" == typeof r[e] ? (null != n[e] || (n[e] = []), n[e].push(r[e])) : t[e] = r[e];
                if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(e => [e, void 0])));
                for (let e in n) Object.assign(t, {
                    [e](t, ...r) {
                        for (let i of n[e]) {
                            if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
                            i(t, ...r)
                        }
                    }
                });
                return t
            }

            function I(e) {
                var t;
                return Object.assign((0, d.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function N(e) {
                let t = Object.assign({}, e);
                for (let e in t) void 0 === t[e] && delete t[e];
                return t
            }

            function F(e, t = []) {
                let n = Object.assign({}, e);
                for (let e of t) e in n && delete n[e];
                return n
            }
            let j = null != (c = d.startTransition) ? c : function(e) {
                e()
            };
            var B = ((a = B || {}).Space = " ", a.Enter = "Enter", a.Escape = "Escape", a.Backspace = "Backspace", a.Delete = "Delete", a.ArrowLeft = "ArrowLeft", a.ArrowUp = "ArrowUp", a.ArrowRight = "ArrowRight", a.ArrowDown = "ArrowDown", a.Home = "Home", a.End = "End", a.PageUp = "PageUp", a.PageDown = "PageDown", a.Tab = "Tab", a),
                U = ((s = U || {})[s.Open = 0] = "Open", s[s.Closed = 1] = "Closed", s),
                z = ((l = z || {})[l.ToggleDisclosure = 0] = "ToggleDisclosure", l[l.CloseDisclosure = 1] = "CloseDisclosure", l[l.SetButtonId = 2] = "SetButtonId", l[l.SetPanelId = 3] = "SetPanelId", l[l.LinkPanel = 4] = "LinkPanel", l[l.UnlinkPanel = 5] = "UnlinkPanel", l);
            let W = {
                    0: e => ({
                        ...e,
                        disclosureState: x(e.disclosureState, {
                            0: 1,
                            1: 0
                        })
                    }),
                    1: e => 1 === e.disclosureState ? e : {
                        ...e,
                        disclosureState: 1
                    },
                    4: e => !0 === e.linkedPanel ? e : {
                        ...e,
                        linkedPanel: !0
                    },
                    5: e => !1 === e.linkedPanel ? e : {
                        ...e,
                        linkedPanel: !1
                    },
                    2: (e, t) => e.buttonId === t.buttonId ? e : {
                        ...e,
                        buttonId: t.buttonId
                    },
                    3: (e, t) => e.panelId === t.panelId ? e : {
                        ...e,
                        panelId: t.panelId
                    }
                },
                V = (0, d.createContext)(null);

            function Y(e) {
                let t = (0, d.useContext)(V);
                if (null === t) {
                    let t = Error(`<${e} /> is missing a parent <Disclosure /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, Y), t
                }
                return t
            }
            V.displayName = "DisclosureContext";
            let H = (0, d.createContext)(null);
            H.displayName = "DisclosureAPIContext";
            let X = (0, d.createContext)(null);

            function J(e, t) {
                return x(t.type, W, e, t)
            }
            X.displayName = "DisclosurePanelContext";
            let Q = d.Fragment,
                G = T.RenderStrategy | T.Static,
                Z = Object.assign(I(function(e, t) {
                    let {
                        defaultOpen: n = !1,
                        ...r
                    } = e, i = (0, d.useRef)(null), o = b(t, function(e, t = !0) {
                        return Object.assign(e, {
                            [E]: t
                        })
                    }(e => {
                        i.current = e
                    }, void 0 === e.as || e.as === d.Fragment)), a = (0, d.useRef)(null), s = (0, d.useRef)(null), l = (0, d.useReducer)(J, {
                        disclosureState: n ? 0 : 1,
                        linkedPanel: !1,
                        buttonRef: s,
                        panelRef: a,
                        buttonId: null,
                        panelId: null
                    }), [{
                        disclosureState: u,
                        buttonId: c
                    }, p] = l, h = y(e => {
                        p({
                            type: 1
                        });
                        let t = g.isServer ? null : i instanceof Node ? i.ownerDocument : null != i && i.hasOwnProperty("current") && i.current instanceof Node ? i.current.ownerDocument : document;
                        if (!t || !c) return;
                        let n = e ? e instanceof HTMLElement ? e : e.current instanceof HTMLElement ? e.current : t.getElementById(c) : t.getElementById(c);
                        null == n || n.focus()
                    }), f = (0, d.useMemo)(() => ({
                        close: h
                    }), [h]), m = (0, d.useMemo)(() => ({
                        open: 0 === u,
                        close: h
                    }), [u, h]);
                    return d.createElement(V.Provider, {
                        value: l
                    }, d.createElement(H.Provider, {
                        value: f
                    }, d.createElement(_, {
                        value: x(u, {
                            0: C.Open,
                            1: C.Closed
                        })
                    }, O({
                        ourProps: {
                            ref: o
                        },
                        theirProps: r,
                        slot: m,
                        defaultTag: Q,
                        name: "Disclosure"
                    }))))
                }), {
                    Button: I(function(e, t) {
                        let n = A(),
                            {
                                id: r = `headlessui-disclosure-button-${n}`,
                                ...i
                            } = e,
                            [o, a] = Y("Disclosure.Button"),
                            s = (0, d.useContext)(X),
                            l = null !== s && s === o.panelId,
                            u = (0, d.useRef)(null),
                            c = b(u, t, l ? null : o.buttonRef),
                            p = R();
                        (0, d.useEffect)(() => {
                            if (!l) return a({
                                type: 2,
                                buttonId: r
                            }), () => {
                                a({
                                    type: 2,
                                    buttonId: null
                                })
                            }
                        }, [r, a, l]);
                        let h = y(e => {
                                var t;
                                if (l) {
                                    if (1 === o.disclosureState) return;
                                    switch (e.key) {
                                        case B.Space:
                                        case B.Enter:
                                            e.preventDefault(), e.stopPropagation(), a({
                                                type: 0
                                            }), null == (t = o.buttonRef.current) || t.focus()
                                    }
                                } else switch (e.key) {
                                    case B.Space:
                                    case B.Enter:
                                        e.preventDefault(), e.stopPropagation(), a({
                                            type: 0
                                        })
                                }
                            }),
                            f = y(e => {
                                e.key === B.Space && e.preventDefault()
                            }),
                            m = y(t => {
                                var n;
                                (function(e) {
                                    let t = e.parentElement,
                                        n = null;
                                    for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
                                    let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
                                    return !(r && function(e) {
                                        if (!e) return !1;
                                        let t = e.previousElementSibling;
                                        for (; null !== t;) {
                                            if (t instanceof HTMLLegendElement) return !1;
                                            t = t.previousElementSibling
                                        }
                                        return !0
                                    }(n)) && r
                                })(t.currentTarget) || e.disabled || (l ? (a({
                                    type: 0
                                }), null == (n = o.buttonRef.current) || n.focus()) : a({
                                    type: 0
                                }))
                            }),
                            g = (0, d.useMemo)(() => ({
                                open: 0 === o.disclosureState
                            }), [o]),
                            E = function(e, t) {
                                let [n, r] = (0, d.useState)(() => w(e));
                                return v(() => {
                                    r(w(e))
                                }, [e.type, e.as]), v(() => {
                                    n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
                                }, [n, t]), n
                            }(e, u);
                        return O({
                            mergeRefs: p,
                            ourProps: l ? {
                                ref: c,
                                type: E,
                                onKeyDown: h,
                                onClick: m
                            } : {
                                ref: c,
                                id: r,
                                type: E,
                                "aria-expanded": 0 === o.disclosureState,
                                "aria-controls": o.linkedPanel ? o.panelId : void 0,
                                onKeyDown: h,
                                onKeyUp: f,
                                onClick: m
                            },
                            theirProps: i,
                            slot: g,
                            defaultTag: "button",
                            name: "Disclosure.Button"
                        })
                    }),
                    Panel: I(function(e, t) {
                        let n = A(),
                            {
                                id: r = `headlessui-disclosure-panel-${n}`,
                                ...i
                            } = e,
                            [o, a] = Y("Disclosure.Panel"),
                            {
                                close: s
                            } = function e(t) {
                                let n = (0, d.useContext)(H);
                                if (null === n) {
                                    let n = Error(`<${t} /> is missing a parent <Disclosure /> component.`);
                                    throw Error.captureStackTrace && Error.captureStackTrace(n, e), n
                                }
                                return n
                            }("Disclosure.Panel"),
                            l = R(),
                            u = b(t, o.panelRef, e => {
                                j(() => a({
                                    type: e ? 4 : 5
                                }))
                            });
                        (0, d.useEffect)(() => (a({
                            type: 3,
                            panelId: r
                        }), () => {
                            a({
                                type: 3,
                                panelId: null
                            })
                        }), [r, a]);
                        let c = (0, d.useContext)(S),
                            p = null !== c ? (c & C.Open) === C.Open : 0 === o.disclosureState,
                            h = (0, d.useMemo)(() => ({
                                open: 0 === o.disclosureState,
                                close: s
                            }), [o, s]);
                        return d.createElement(X.Provider, {
                            value: o.panelId
                        }, O({
                            mergeRefs: l,
                            ourProps: {
                                ref: u,
                                id: r
                            },
                            theirProps: i,
                            slot: h,
                            defaultTag: "div",
                            features: G,
                            visible: p,
                            name: "Disclosure.Panel"
                        }))
                    })
                })
        },
        1562: function(e, t, n) {
            "use strict";

            function r(e) {
                let t, n, r, i = e && e.colors || ["#D61C59", "#E7D84B", "#1B8798"],
                    o = e && e.element,
                    a = o || document.body,
                    s = window.innerWidth,
                    l = window.innerHeight,
                    u = {
                        x: s / 2,
                        y: s / 2
                    },
                    c = {
                        x: s / 2,
                        y: s / 2
                    },
                    d = [],
                    p = [],
                    h = window.matchMedia("(prefers-reduced-motion: reduce)");

                function f() {
                    if (h.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
                    n = (t = document.createElement("canvas")).getContext("2d"), t.style.top = "0px", t.style.left = "0px", t.style.pointerEvents = "none", o ? (t.style.position = "absolute", a.appendChild(t), t.width = a.clientWidth, t.height = a.clientHeight) : (t.style.position = "fixed", a.appendChild(t), t.width = s, t.height = l), n.font = "21px serif", n.textBaseline = "middle", n.textAlign = "center", i.forEach(e => {
                            let t = n.measureText("*"),
                                r = document.createElement("canvas"),
                                i = r.getContext("2d");
                            r.width = t.width, r.height = t.actualBoundingBoxAscent + t.actualBoundingBoxDescent, i.fillStyle = e, i.textAlign = "center", i.font = "21px serif", i.textBaseline = "middle", i.fillText("*", r.width / 2, t.actualBoundingBoxAscent), p.push(r)
                        }), a.addEventListener("mousemove", v), a.addEventListener("touchmove", g, {
                            passive: !0
                        }), a.addEventListener("touchstart", g, {
                            passive: !0
                        }), window.addEventListener("resize", m),
                        function e() {
                            (function() {
                                if (0 != d.length) {
                                    n.clearRect(0, 0, s, l);
                                    for (let e = 0; e < d.length; e++) d[e].update(n);
                                    for (let e = d.length - 1; e >= 0; e--) d[e].lifeSpan < 0 && d.splice(e, 1);
                                    0 == d.length && n.clearRect(0, 0, s, l)
                                }
                            })(), r = requestAnimationFrame(e)
                        }()
                }

                function m(e) {
                    s = window.innerWidth, l = window.innerHeight, o ? (t.width = a.clientWidth, t.height = a.clientHeight) : (t.width = s, t.height = l)
                }

                function g(e) {
                    if (e.touches.length > 0)
                        for (let t = 0; t < e.touches.length; t++) y(e.touches[t].clientX, e.touches[t].clientY, p[Math.floor(Math.random() * p.length)])
                }

                function v(e) {
                    window.requestAnimationFrame(() => {
                        if (o) {
                            let t = a.getBoundingClientRect();
                            u.x = e.clientX - t.left, u.y = e.clientY - t.top
                        } else u.x = e.clientX, u.y = e.clientY;
                        Math.hypot(u.x - c.x, u.y - c.y) > 1.5 && (y(u.x, u.y, p[Math.floor(Math.random() * i.length)]), c.x = u.x, c.y = u.y)
                    })
                }

                function y(e, t, n) {
                    d.push(new w(e, t, n))
                }

                function A() {
                    t.remove(), cancelAnimationFrame(r), a.removeEventListener("mousemove", v), a.removeEventListener("touchmove", g), a.removeEventListener("touchstart", g), window.addEventListener("resize", m)
                }

                function w(e, t, n) {
                    let r = Math.floor(30 * Math.random() + 60);
                    this.initialLifeSpan = r, this.lifeSpan = r, this.velocity = {
                        x: (.5 > Math.random() ? -1 : 1) * (Math.random() / 2),
                        y: .7 * Math.random() + .9
                    }, this.position = {
                        x: e,
                        y: t
                    }, this.canv = n, this.update = function(e) {
                        this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.lifeSpan--, this.velocity.y += .02;
                        let t = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
                        e.drawImage(this.canv, this.position.x - this.canv.width / 2 * t, this.position.y - this.canv.height / 2, this.canv.width * t, this.canv.height * t)
                    }
                }
                return h.onchange = () => {
                    h.matches ? A() : f()
                }, f(), {
                    destroy: A
                }
            }

            function i(e) {
                let t, n, r, i = e && e.element,
                    o = i || document.body,
                    a = window.innerWidth,
                    s = window.innerHeight,
                    l = {
                        x: a / 2,
                        y: a / 2
                    },
                    u = [],
                    c = e?.particles || 15,
                    d = e?.rate || .4,
                    p = e?.baseImageSrc || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEwAAAAAChpcNAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABqElEQVQoFY3SPUvDQBgH8BREpRHExYiDgmLFl6WC+AYmWeyLg4i7buJX8DMpOujgyxGvUYeCgzhUQUSKKLUS0+ZyptXh8Z5Ti621ekPyJHl+uftfomhaf9Ei5JyxXKfynyEA6EYcLHpwyflT958GAQ7DTABNHd8EbtDbEH2BD5QEQmi2mM8P/Iq+A0SzszEg+3sPjDnDdVEtQKQbMUidHD3xVzf6A9UDEmEm+8h9KTqTVUjT+vB53aHrCbAPiceYq1dQI1Aqv4EhMll0jzv+Y0yiRgCnLRSYyDQHVoqUXe4uKL9l+L7GXC4vkMhE6eW/AOJs9k583ORDUyXMZ8F5SVHVVnllmPNKSFagAJ5DofaqGXw/gHBYg51dIldkmknY3tguv3jOtHR4+MqAzaraJXbEhqHhcQlwGSOi5pytVQHZLN5s0WNe8HPrLYlFsO20RPHkImxsbmHdLJFI76th7Z4SeuF53hTeFLvhRCJRCTKZKxgdnRDbW+iozFJbBMw14/ElwGYc0egMBMFzT21f5Rog33Z7dX02GBm7WV5ZfT5Nn5bE3zuCDe9UxdTpNvK+5AAAAABJRU5ErkJggg==",
                    h = !1,
                    f = new Image;
                f.src = p;
                let m = window.matchMedia("(prefers-reduced-motion: reduce)");

                function g() {
                    if (m.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
                    n = (t = document.createElement("canvas")).getContext("2d"), t.style.top = "0px", t.style.left = "0px", t.style.pointerEvents = "none", i ? (t.style.position = "absolute", o.appendChild(t), t.width = o.clientWidth, t.height = o.clientHeight) : (t.style.position = "fixed", document.body.appendChild(t), t.width = a, t.height = s), o.addEventListener("mousemove", y), window.addEventListener("resize", v),
                        function e() {
                            let t, i;
                            n.clearRect(0, 0, a, s), t = l.x, i = l.y, u.forEach(function(e, r, o) {
                                let a = o[r + 1] || o[0];
                                e.position.x = t, e.position.y = i, e.move(n), t += (a.position.x - e.position.x) * d, i += (a.position.y - e.position.y) * d
                            }), r = requestAnimationFrame(e)
                        }()
                }

                function v(e) {
                    a = window.innerWidth, s = window.innerHeight, i ? (t.width = o.clientWidth, t.height = o.clientHeight) : (t.width = a, t.height = s)
                }

                function y(e) {
                    var t, n;
                    if (i) {
                        let t = o.getBoundingClientRect();
                        l.x = e.clientX - t.left, l.y = e.clientY - t.top
                    } else l.x = e.clientX, l.y = e.clientY;
                    if (!1 === h) {
                        h = !0;
                        for (let e = 0; e < c; e++) t = l.x, n = l.y, u.push(new w(t, n, f))
                    }
                }

                function A() {
                    t.remove(), cancelAnimationFrame(r), o.removeEventListener("mousemove", y), window.addEventListener("resize", v)
                }

                function w(e, t, n) {
                    this.position = {
                        x: e,
                        y: t
                    }, this.image = n, this.move = function(e) {
                        e.drawImage(this.image, this.position.x, this.position.y)
                    }
                }
                return m.onchange = () => {
                    m.matches ? A() : g()
                }, g(), {
                    destroy: A
                }
            }

            function o(e) {
                let t, n, r = e && e.element,
                    i = r || document.body,
                    o = window.innerWidth,
                    a = window.innerHeight,
                    s = {
                        x: o / 2,
                        y: o / 2
                    },
                    l = new function(e, t, n, r) {
                        this.position = {
                            x: e,
                            y: t
                        }, this.width = n, this.lag = r, this.moveTowards = function(e, t, n) {
                            this.position.x += (e - this.position.x) / this.lag, this.position.y += (t - this.position.y) / this.lag, n.fillStyle = u, n.beginPath(), n.arc(this.position.x, this.position.y, this.width, 0, 2 * Math.PI), n.fill(), n.closePath()
                        }
                    }(o / 2, a / 2, 10, 10),
                    u = e?.color || "#323232a6",
                    c = window.matchMedia("(prefers-reduced-motion: reduce)");

                function d() {
                    if (c.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
                    n = (t = document.createElement("canvas")).getContext("2d"), t.style.top = "0px", t.style.left = "0px", t.style.pointerEvents = "none", r ? (t.style.position = "absolute", i.appendChild(t), t.width = i.clientWidth, t.height = i.clientHeight) : (t.style.position = "fixed", document.body.appendChild(t), t.width = o, t.height = a), i.addEventListener("mousemove", h), window.addEventListener("resize", p), f()
                }

                function p(e) {
                    o = window.innerWidth, a = window.innerHeight, r ? (t.width = i.clientWidth, t.height = i.clientHeight) : (t.width = o, t.height = a)
                }

                function h(e) {
                    if (r) {
                        let t = i.getBoundingClientRect();
                        s.x = e.clientX - t.left, s.y = e.clientY - t.top
                    } else s.x = e.clientX, s.y = e.clientY
                }

                function f() {
                    n.clearRect(0, 0, o, a), l.moveTowards(s.x, s.y, n), requestAnimationFrame(f)
                }

                function m() {
                    t.remove(), cancelAnimationFrame(f), i.removeEventListener("mousemove", h), window.addEventListener("resize", p)
                }
                return c.onchange = () => {
                    c.matches ? m() : d()
                }, d(), {
                    destroy: m
                }
            }

            function a(e) {
                let t = e && e.element,
                    n = t || document.body,
                    r = e && e.randomDelay,
                    i = e && e.minDelay || 5,
                    o = e && e.maxDelay || 50,
                    a = e && e.lifeSpan || 40,
                    s, l, u, c = window.innerWidth,
                    d = window.innerHeight,
                    p = {
                        x: c / 2,
                        y: c / 2
                    },
                    h = [],
                    f = new Image;
                e && e.image ? f.src = e.image : f.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEwAAAAAChpcNAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABqElEQVQoFY3SPUvDQBgH8BREpRHExYiDgmLFl6WC+AYmWeyLg4i7buJX8DMpOujgyxGvUYeCgzhUQUSKKLUS0+ZyptXh8Z5Ti621ekPyJHl+uftfomhaf9Ei5JyxXKfynyEA6EYcLHpwyflT958GAQ7DTABNHd8EbtDbEH2BD5QEQmi2mM8P/Iq+A0SzszEg+3sPjDnDdVEtQKQbMUidHD3xVzf6A9UDEmEm+8h9KTqTVUjT+vB53aHrCbAPiceYq1dQI1Aqv4EhMll0jzv+Y0yiRgCnLRSYyDQHVoqUXe4uKL9l+L7GXC4vkMhE6eW/AOJs9k583ORDUyXMZ8F5SVHVVnllmPNKSFagAJ5DofaqGXw/gHBYg51dIldkmknY3tguv3jOtHR4+MqAzaraJXbEhqHhcQlwGSOi5pytVQHZLN5s0WNe8HPrLYlFsO20RPHkImxsbmHdLJFI76th7Z4SeuF53hTeFLvhRCJRCTKZKxgdnRDbW+iozFJbBMw14/ElwGYc0egMBMFzT21f5Rog33Z7dX02GBm7WV5ZfT5Nn5bE3zuCDe9UxdTpNvK+5AAAAABJRU5ErkJggg==";
                let m = window.matchMedia("(prefers-reduced-motion: reduce)");

                function g() {
                    if (m.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
                    l = (s = document.createElement("canvas")).getContext("2d"), s.style.top = "0px", s.style.left = "0px", s.style.pointerEvents = "none", t ? (s.style.position = "absolute", n.appendChild(s), s.width = n.clientWidth, s.height = n.clientHeight) : (s.style.position = "fixed", document.body.appendChild(s), s.width = c, s.height = d), n.addEventListener("mousemove", b), n.addEventListener("touchmove", y, {
                            passive: !0
                        }), n.addEventListener("touchstart", y, {
                            passive: !0
                        }), window.addEventListener("resize", v),
                        function e() {
                            (function() {
                                if (0 != h.length) {
                                    l.clearRect(0, 0, c, d);
                                    for (let e = 0; e < h.length; e++) h[e].update(l);
                                    for (let e = h.length - 1; e >= 0; e--) h[e].lifeSpan < 0 && h.splice(e, 1);
                                    0 == h.length && l.clearRect(0, 0, c, d)
                                }
                            })(), u = requestAnimationFrame(e)
                        }()
                }

                function v(e) {
                    c = window.innerWidth, d = window.innerHeight, t ? (s.width = n.clientWidth, s.height = n.clientHeight) : (s.width = c, s.height = d)
                }

                function y(e) {
                    if (e.touches.length > 0)
                        for (let t = 0; t < e.touches.length; t++) S(e.touches[t].clientX, e.touches[t].clientY, f)
                }
                m.onchange = () => {
                    m.matches ? C() : g()
                };
                let A = () => Math.floor(Math.random() * (o - i + 1)) + i,
                    w = Date.now(),
                    E = A();

                function b(e) {
                    if (r) {
                        if (w + E > Date.now()) return;
                        w = Date.now(), E = A()
                    }
                    if (t) {
                        let t = n.getBoundingClientRect();
                        p.x = e.clientX - t.left, p.y = e.clientY - t.top
                    } else p.x = e.clientX, p.y = e.clientY;
                    S(p.x, p.y, f)
                }

                function S(e, t, n) {
                    h.push(new _(e, t, n))
                }

                function C() {
                    s.remove(), cancelAnimationFrame(u), n.removeEventListener("mousemove", b), n.removeEventListener("touchmove", y), n.removeEventListener("touchstart", y), window.addEventListener("resize", v)
                }

                function _(e, t, n) {
                    this.initialLifeSpan = a, this.lifeSpan = a, this.position = {
                        x: e,
                        y: t
                    }, this.image = n, this.update = function(e) {
                        this.lifeSpan--;
                        let t = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
                        e.globalAlpha = t, e.drawImage(this.image, this.position.x, this.position.y)
                    }
                }
                return g(), {
                    destroy: C
                }
            }
            n.d(t, {
                $N: function() {
                    return a
                },
                Y2: function() {
                    return o
                },
                f4: function() {
                    return r
                },
                n8: function() {
                    return i
                }
            })
        },
        6825: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var r = n(5893),
                i = n(7294);
            let o = (e, t, n, r) => {
                    e.style.transition = `${t} ${n}ms ${r}`
                },
                a = (e, t, n) => Math.min(Math.max(e, t), n);
            class s {
                constructor(e, t) {
                    this.glareAngle = 0, this.glareOpacity = 0, this.calculateGlareSize = e => {
                        let {
                            width: t,
                            height: n
                        } = e, r = Math.sqrt(t ** 2 + n ** 2);
                        return {
                            width: r,
                            height: r
                        }
                    }, this.setSize = e => {
                        let t = this.calculateGlareSize(e);
                        this.glareEl.style.width = `${t.width}px`, this.glareEl.style.height = `${t.height}px`
                    }, this.update = (e, t, n, r) => {
                        this.updateAngle(e, t.glareReverse), this.updateOpacity(e, t, n, r)
                    }, this.updateAngle = (e, t) => {
                        let {
                            xPercentage: n,
                            yPercentage: r
                        } = e;
                        this.glareAngle = (n ? Math.atan2(r, -n) * (180 / Math.PI) : 0) - (t ? 180 : 0)
                    }, this.updateOpacity = (e, t, n, r) => {
                        let {
                            xPercentage: i,
                            yPercentage: o
                        } = e, {
                            glarePosition: s,
                            glareReverse: l,
                            glareMaxOpacity: u
                        } = t, c = n ? -1 : 1, d = r ? -1 : 1, p = l ? -1 : 1, h = 0;
                        switch (s) {
                            case "top":
                                h = -i * c * p;
                                break;
                            case "right":
                                h = o * d * p;
                                break;
                            case "bottom":
                            case void 0:
                                h = i * c * p;
                                break;
                            case "left":
                                h = -o * d * p;
                                break;
                            case "all":
                                h = Math.hypot(i, o)
                        }
                        let f = a(h, 0, 100);
                        this.glareOpacity = f * u / 100
                    }, this.render = e => {
                        let {
                            glareColor: t
                        } = e;
                        this.glareEl.style.transform = `rotate(${this.glareAngle}deg) translate(-50%, -50%)`, this.glareEl.style.opacity = this.glareOpacity.toString(), this.glareEl.style.background = `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`
                    }, this.glareWrapperEl = document.createElement("div"), this.glareEl = document.createElement("div"), this.glareWrapperEl.appendChild(this.glareEl), this.glareWrapperEl.className = "glare-wrapper", this.glareEl.className = "glare";
                    let n = this.calculateGlareSize(e),
                        r = {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transformOrigin: "0% 0%",
                            pointerEvents: "none",
                            width: `${n.width}px`,
                            height: `${n.height}px`
                        };
                    Object.assign(this.glareWrapperEl.style, {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        borderRadius: t,
                        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                        pointerEvents: "none"
                    }), Object.assign(this.glareEl.style, r)
                }
            }
            class l {
                constructor() {
                    this.glareAngle = 0, this.glareOpacity = 0, this.tiltAngleX = 0, this.tiltAngleY = 0, this.tiltAngleXPercentage = 0, this.tiltAngleYPercentage = 0, this.update = (e, t) => {
                        this.updateTilt(e, t), this.updateTiltManualInput(e, t), this.updateTiltReverse(t), this.updateTiltLimits(t)
                    }, this.updateTilt = (e, t) => {
                        let {
                            xPercentage: n,
                            yPercentage: r
                        } = e, {
                            tiltMaxAngleX: i,
                            tiltMaxAngleY: o
                        } = t;
                        this.tiltAngleX = n * i / 100, this.tiltAngleY = -(r * o / 100 * 1)
                    }, this.updateTiltManualInput = (e, t) => {
                        let {
                            tiltAngleXManual: n,
                            tiltAngleYManual: r,
                            tiltMaxAngleX: i,
                            tiltMaxAngleY: o
                        } = t;
                        (null !== n || null !== r) && (this.tiltAngleX = null !== n ? n : 0, this.tiltAngleY = null !== r ? r : 0, e.xPercentage = 100 * this.tiltAngleX / i, e.yPercentage = 100 * this.tiltAngleY / o)
                    }, this.updateTiltReverse = e => {
                        let t = e.tiltReverse ? -1 : 1;
                        this.tiltAngleX = t * this.tiltAngleX, this.tiltAngleY = t * this.tiltAngleY
                    }, this.updateTiltLimits = e => {
                        let {
                            tiltAxis: t
                        } = e;
                        this.tiltAngleX = a(this.tiltAngleX, -90, 90), this.tiltAngleY = a(this.tiltAngleY, -90, 90), t && (this.tiltAngleX = "x" === t ? this.tiltAngleX : 0, this.tiltAngleY = "y" === t ? this.tiltAngleY : 0)
                    }, this.updateTiltAnglesPercentage = e => {
                        let {
                            tiltMaxAngleX: t,
                            tiltMaxAngleY: n
                        } = e;
                        this.tiltAngleXPercentage = this.tiltAngleX / t * 100, this.tiltAngleYPercentage = this.tiltAngleY / n * 100
                    }, this.render = e => {
                        e.style.transform += `rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `
                    }
                }
            }
            class u extends i.PureComponent {
                constructor() {
                    super(...arguments), this.wrapperEl = {
                        node: null,
                        size: {
                            width: 0,
                            height: 0,
                            left: 0,
                            top: 0
                        },
                        clientPosition: {
                            x: null,
                            y: null,
                            xPercentage: 0,
                            yPercentage: 0
                        },
                        updateAnimationId: null,
                        scale: 1
                    }, this.tilt = null, this.glare = null, this.addDeviceOrientationEventListener = async () => {
                        if (!window.DeviceOrientationEvent) return;
                        let e = DeviceOrientationEvent.requestPermission;
                        "function" == typeof e ? "granted" === await e() && window.addEventListener("deviceorientation", this.onMove) : window.addEventListener("deviceorientation", this.onMove)
                    }, this.setSize = () => {
                        this.setWrapperElSize(), this.glare && this.glare.setSize(this.wrapperEl.size)
                    }, this.mainLoop = e => {
                        null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId), this.processInput(e), this.update(e.type), this.wrapperEl.updateAnimationId = requestAnimationFrame(this.renderFrame)
                    }, this.onEnter = e => {
                        let {
                            onEnter: t
                        } = this.props;
                        this.setSize(), this.wrapperEl.node.style.willChange = "transform", this.setTransitions(), t && t({
                            event: e
                        })
                    }, this.onMove = e => {
                        this.mainLoop(e), this.emitOnMove(e)
                    }, this.onLeave = e => {
                        let {
                            onLeave: t
                        } = this.props;
                        if (this.setTransitions(), t && t({
                                event: e
                            }), this.props.reset) {
                            let e = new CustomEvent("autoreset");
                            this.onMove(e)
                        }
                    }, this.processInput = e => {
                        let {
                            scale: t
                        } = this.props;
                        switch (e.type) {
                            case "mousemove":
                                this.wrapperEl.clientPosition.x = e.pageX, this.wrapperEl.clientPosition.y = e.pageY, this.wrapperEl.scale = t;
                                break;
                            case "touchmove":
                                this.wrapperEl.clientPosition.x = e.touches[0].pageX, this.wrapperEl.clientPosition.y = e.touches[0].pageY, this.wrapperEl.scale = t;
                                break;
                            case "deviceorientation":
                                this.processInputDeviceOrientation(e), this.wrapperEl.scale = t;
                                break;
                            case "autoreset": {
                                let {
                                    tiltAngleXInitial: e,
                                    tiltAngleYInitial: t,
                                    tiltMaxAngleX: n,
                                    tiltMaxAngleY: r
                                } = this.props;
                                this.wrapperEl.clientPosition.xPercentage = a(e / n * 100, -100, 100), this.wrapperEl.clientPosition.yPercentage = a(t / r * 100, -100, 100), this.wrapperEl.scale = 1
                            }
                        }
                    }, this.processInputDeviceOrientation = e => {
                        if (!e.gamma || !e.beta || !this.props.gyroscope) return;
                        let {
                            tiltMaxAngleX: t,
                            tiltMaxAngleY: n
                        } = this.props, r = e.gamma;
                        this.wrapperEl.clientPosition.xPercentage = e.beta / t * 100, this.wrapperEl.clientPosition.yPercentage = r / n * 100, this.wrapperEl.clientPosition.xPercentage = a(this.wrapperEl.clientPosition.xPercentage, -100, 100), this.wrapperEl.clientPosition.yPercentage = a(this.wrapperEl.clientPosition.yPercentage, -100, 100)
                    }, this.update = e => {
                        let {
                            tiltEnable: t,
                            flipVertically: n,
                            flipHorizontally: r
                        } = this.props;
                        "autoreset" !== e && "deviceorientation" !== e && "propChange" !== e && this.updateClientInput(), t && this.tilt.update(this.wrapperEl.clientPosition, this.props), this.updateFlip(), this.tilt.updateTiltAnglesPercentage(this.props), this.glare && this.glare.update(this.wrapperEl.clientPosition, this.props, n, r)
                    }, this.updateClientInput = () => {
                        let e, t;
                        let {
                            trackOnWindow: n
                        } = this.props;
                        if (n) {
                            let {
                                x: n,
                                y: r
                            } = this.wrapperEl.clientPosition;
                            e = r / window.innerHeight * 200 - 100, t = n / window.innerWidth * 200 - 100
                        } else {
                            let {
                                size: {
                                    width: n,
                                    height: r,
                                    left: i,
                                    top: o
                                },
                                clientPosition: {
                                    x: a,
                                    y: s
                                }
                            } = this.wrapperEl;
                            e = (s - o) / r * 200 - 100, t = (a - i) / n * 200 - 100
                        }
                        this.wrapperEl.clientPosition.xPercentage = a(e, -100, 100), this.wrapperEl.clientPosition.yPercentage = a(t, -100, 100)
                    }, this.updateFlip = () => {
                        let {
                            flipVertically: e,
                            flipHorizontally: t
                        } = this.props;
                        e && (this.tilt.tiltAngleX += 180, this.tilt.tiltAngleY *= -1), t && (this.tilt.tiltAngleY += 180)
                    }, this.renderFrame = () => {
                        this.resetWrapperElTransform(), this.renderPerspective(), this.tilt.render(this.wrapperEl.node), this.renderScale(), this.glare && this.glare.render(this.props)
                    }
                }
                componentDidMount() {
                    if (this.tilt = new l, this.initGlare(), this.setSize(), this.addEventListeners(), "undefined" == typeof CustomEvent) return;
                    let e = new CustomEvent("autoreset");
                    this.mainLoop(e);
                    let t = new CustomEvent("initial");
                    this.emitOnMove(t)
                }
                componentWillUnmount() {
                    null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId), this.removeEventListeners()
                }
                componentDidUpdate() {
                    let e = new CustomEvent("propChange");
                    this.mainLoop(e), this.emitOnMove(e)
                }
                addEventListeners() {
                    let {
                        trackOnWindow: e,
                        gyroscope: t
                    } = this.props;
                    window.addEventListener("resize", this.setSize), e && (window.addEventListener("mouseenter", this.onEnter), window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseout", this.onLeave), window.addEventListener("touchstart", this.onEnter), window.addEventListener("touchmove", this.onMove), window.addEventListener("touchend", this.onLeave)), t && this.addDeviceOrientationEventListener()
                }
                removeEventListeners() {
                    let {
                        trackOnWindow: e,
                        gyroscope: t
                    } = this.props;
                    window.removeEventListener("resize", this.setSize), e && (window.removeEventListener("mouseenter", this.onEnter), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseout", this.onLeave), window.removeEventListener("touchstart", this.onEnter), window.removeEventListener("touchmove", this.onMove), window.removeEventListener("touchend", this.onLeave)), t && window.DeviceOrientationEvent && window.removeEventListener("deviceorientation", this.onMove)
                }
                setWrapperElSize() {
                    let e = this.wrapperEl.node.getBoundingClientRect();
                    this.wrapperEl.size.width = this.wrapperEl.node.offsetWidth, this.wrapperEl.size.height = this.wrapperEl.node.offsetHeight, this.wrapperEl.size.left = e.left + window.scrollX, this.wrapperEl.size.top = e.top + window.scrollY
                }
                initGlare() {
                    let {
                        glareEnable: e,
                        glareBorderRadius: t
                    } = this.props;
                    e && (this.glare = new s(this.wrapperEl.size, t), this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))
                }
                emitOnMove(e) {
                    let {
                        onMove: t
                    } = this.props;
                    if (!t) return;
                    let n = 0,
                        r = 0;
                    this.glare && (n = this.glare.glareAngle, r = this.glare.glareOpacity), t({
                        tiltAngleX: this.tilt.tiltAngleX,
                        tiltAngleY: this.tilt.tiltAngleY,
                        tiltAngleXPercentage: this.tilt.tiltAngleXPercentage,
                        tiltAngleYPercentage: this.tilt.tiltAngleYPercentage,
                        glareAngle: n,
                        glareOpacity: r,
                        event: e
                    })
                }
                resetWrapperElTransform() {
                    this.wrapperEl.node.style.transform = ""
                }
                renderPerspective() {
                    let {
                        perspective: e
                    } = this.props;
                    this.wrapperEl.node.style.transform += `perspective(${e}px) `
                }
                renderScale() {
                    let {
                        scale: e
                    } = this.wrapperEl;
                    this.wrapperEl.node.style.transform += `scale3d(${e},${e},${e})`
                }
                setTransitions() {
                    let {
                        transitionSpeed: e,
                        transitionEasing: t
                    } = this.props;
                    o(this.wrapperEl.node, "all", e, t), this.glare && o(this.glare.glareEl, "opacity", e, t)
                }
                render() {
                    let {
                        children: e,
                        className: t,
                        style: n
                    } = this.props;
                    return (0, r.jsx)("div", {
                        ref: e => {
                            this.wrapperEl.node = e
                        },
                        onMouseEnter: this.onEnter,
                        onMouseMove: this.onMove,
                        onMouseLeave: this.onLeave,
                        onTouchStart: this.onEnter,
                        onTouchMove: this.onMove,
                        onTouchEnd: this.onLeave,
                        className: t,
                        style: n,
                        children: e
                    })
                }
            }
            u.defaultProps = {
                scale: 1,
                perspective: 1e3,
                flipVertically: !1,
                flipHorizontally: !1,
                reset: !0,
                transitionEasing: "cubic-bezier(.03,.98,.52,.99)",
                transitionSpeed: 400,
                trackOnWindow: !1,
                gyroscope: !1,
                tiltEnable: !0,
                tiltReverse: !1,
                tiltAngleXInitial: 0,
                tiltAngleYInitial: 0,
                tiltMaxAngleX: 20,
                tiltMaxAngleY: 20,
                tiltAxis: void 0,
                tiltAngleXManual: null,
                tiltAngleYManual: null,
                glareEnable: !1,
                glareMaxOpacity: .7,
                glareColor: "#ffffff",
                glarePosition: "bottom",
                glareReverse: !1,
                glareBorderRadius: "0"
            }
        }
    }
]);