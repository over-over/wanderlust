import { r as a, a as ut, b as dt, c as ft } from './index.DFz9pK5G.js';
import {
  b as N,
  _ as y,
  d as le,
  c as L,
  k as T,
  I as pt,
  $ as Z,
  J as vt,
  g as me,
  K as mt,
  o as Te,
  s as $t,
  a as gt,
  r as bt,
  L as ht,
  M as Et,
  N as yt,
  y as j,
  v as $e,
  i as Ct,
  t as wt,
  O as Dt,
  h as ue,
  f as ke,
} from './flex.DIBXRVrM.js';
const St = a.forwardRef((e, t) =>
  a.createElement(
    N.span,
    y({}, e, {
      ref: t,
      style: {
        position: 'absolute',
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
        ...e.style,
      },
    }),
  ),
);
function P(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e?.(o), n === !1 || !o.defaultPrevented)) return t?.(o);
  };
}
const At = ut.useId || (() => {});
let Rt = 0;
function te(e) {
  const [t, n] = a.useState(At());
  return (
    le(() => {
      e || n((r) => r ?? String(Rt++));
    }, [e]),
    e || (t ? `radix-${t}` : '')
  );
}
function Pt({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = Nt({ defaultProp: t, onChange: n }),
    c = e !== void 0,
    i = c ? e : r,
    s = L(n),
    f = a.useCallback(
      (u) => {
        if (c) {
          const d = typeof u == 'function' ? u(e) : u;
          d !== e && s(d);
        } else o(u);
      },
      [c, e, o, s],
    );
  return [i, f];
}
function Nt({ defaultProp: e, onChange: t }) {
  const n = a.useState(e),
    [r] = n,
    o = a.useRef(r),
    c = L(t);
  return (
    a.useEffect(() => {
      o.current !== r && (c(r), (o.current = r));
    }, [r, o, c]),
    n
  );
}
function _t(e, t = globalThis?.document) {
  const n = L(e);
  a.useEffect(() => {
    const r = (o) => {
      o.key === 'Escape' && n(o);
    };
    return (
      t.addEventListener('keydown', r),
      () => t.removeEventListener('keydown', r)
    );
  }, [n, t]);
}
const de = 'dismissableLayer.update',
  xt = 'dismissableLayer.pointerDownOutside',
  Ot = 'dismissableLayer.focusOutside';
let ye;
const Tt = a.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  kt = a.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: c,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: f,
        ...u
      } = e,
      p = a.useContext(Tt),
      [d, $] = a.useState(null),
      v =
        (n = d?.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis?.document,
      [, D] = a.useState({}),
      l = T(t, (w) => $(w)),
      m = Array.from(p.layers),
      [g] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
      C = m.indexOf(g),
      b = d ? m.indexOf(d) : -1,
      h = p.layersWithOutsidePointerEventsDisabled.size > 0,
      E = b >= C,
      k = It((w) => {
        const I = w.target,
          Ee = [...p.branches].some((ee) => ee.contains(I));
        !E || Ee || (c?.(w), s?.(w), w.defaultPrevented || f?.());
      }, v),
      x = Lt((w) => {
        const I = w.target;
        [...p.branches].some((ee) => ee.contains(I)) ||
          (i?.(w), s?.(w), w.defaultPrevented || f?.());
      }, v);
    return (
      _t((w) => {
        b === p.layers.size - 1 &&
          (o?.(w), !w.defaultPrevented && f && (w.preventDefault(), f()));
      }, v),
      a.useEffect(() => {
        if (d)
          return (
            r &&
              (p.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((ye = v.body.style.pointerEvents),
                (v.body.style.pointerEvents = 'none')),
              p.layersWithOutsidePointerEventsDisabled.add(d)),
            p.layers.add(d),
            Ce(),
            () => {
              r &&
                p.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (v.body.style.pointerEvents = ye);
            }
          );
      }, [d, v, r, p]),
      a.useEffect(
        () => () => {
          d &&
            (p.layers.delete(d),
            p.layersWithOutsidePointerEventsDisabled.delete(d),
            Ce());
        },
        [d, p],
      ),
      a.useEffect(() => {
        const w = () => D({});
        return (
          document.addEventListener(de, w),
          () => document.removeEventListener(de, w)
        );
      }, []),
      a.createElement(
        N.div,
        y({}, u, {
          ref: l,
          style: {
            pointerEvents: h ? (E ? 'auto' : 'none') : void 0,
            ...e.style,
          },
          onFocusCapture: P(e.onFocusCapture, x.onFocusCapture),
          onBlurCapture: P(e.onBlurCapture, x.onBlurCapture),
          onPointerDownCapture: P(
            e.onPointerDownCapture,
            k.onPointerDownCapture,
          ),
        }),
      )
    );
  });
function It(e, t = globalThis?.document) {
  const n = L(e),
    r = a.useRef(!1),
    o = a.useRef(() => {});
  return (
    a.useEffect(() => {
      const c = (s) => {
          if (s.target && !r.current) {
            let u = function () {
              Ie(xt, n, f, { discrete: !0 });
            };
            const f = { originalEvent: s };
            s.pointerType === 'touch'
              ? (t.removeEventListener('click', o.current),
                (o.current = u),
                t.addEventListener('click', o.current, { once: !0 }))
              : u();
          } else t.removeEventListener('click', o.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener('pointerdown', c);
        }, 0);
      return () => {
        window.clearTimeout(i),
          t.removeEventListener('pointerdown', c),
          t.removeEventListener('click', o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Lt(e, t = globalThis?.document) {
  const n = L(e),
    r = a.useRef(!1);
  return (
    a.useEffect(() => {
      const o = (c) => {
        c.target &&
          !r.current &&
          Ie(Ot, n, { originalEvent: c }, { discrete: !1 });
      };
      return (
        t.addEventListener('focusin', o),
        () => t.removeEventListener('focusin', o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Ce() {
  const e = new CustomEvent(de);
  document.dispatchEvent(e);
}
function Ie(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    c = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? pt(o, c) : o.dispatchEvent(c);
}
const ne = 'focusScope.autoFocusOnMount',
  ae = 'focusScope.autoFocusOnUnmount',
  we = { bubbles: !1, cancelable: !0 },
  Mt = a.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: c,
        ...i
      } = e,
      [s, f] = a.useState(null),
      u = L(o),
      p = L(c),
      d = a.useRef(null),
      $ = T(t, (l) => f(l)),
      v = a.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    a.useEffect(() => {
      if (r) {
        let l = function (b) {
            if (v.paused || !s) return;
            const h = b.target;
            s.contains(h) ? (d.current = h) : O(d.current, { select: !0 });
          },
          m = function (b) {
            if (v.paused || !s) return;
            const h = b.relatedTarget;
            h !== null && (s.contains(h) || O(d.current, { select: !0 }));
          },
          g = function (b) {
            if (document.activeElement === document.body)
              for (const E of b) E.removedNodes.length > 0 && O(s);
          };
        document.addEventListener('focusin', l),
          document.addEventListener('focusout', m);
        const C = new MutationObserver(g);
        return (
          s && C.observe(s, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener('focusin', l),
              document.removeEventListener('focusout', m),
              C.disconnect();
          }
        );
      }
    }, [r, s, v.paused]),
      a.useEffect(() => {
        if (s) {
          Se.add(v);
          const l = document.activeElement;
          if (!s.contains(l)) {
            const g = new CustomEvent(ne, we);
            s.addEventListener(ne, u),
              s.dispatchEvent(g),
              g.defaultPrevented ||
                (Ft(zt(Le(s)), { select: !0 }),
                document.activeElement === l && O(s));
          }
          return () => {
            s.removeEventListener(ne, u),
              setTimeout(() => {
                const g = new CustomEvent(ae, we);
                s.addEventListener(ae, p),
                  s.dispatchEvent(g),
                  g.defaultPrevented || O(l ?? document.body, { select: !0 }),
                  s.removeEventListener(ae, p),
                  Se.remove(v);
              }, 0);
          };
        }
      }, [s, u, p, v]);
    const D = a.useCallback(
      (l) => {
        if ((!n && !r) || v.paused) return;
        const m = l.key === 'Tab' && !l.altKey && !l.ctrlKey && !l.metaKey,
          g = document.activeElement;
        if (m && g) {
          const C = l.currentTarget,
            [b, h] = Bt(C);
          b && h
            ? !l.shiftKey && g === h
              ? (l.preventDefault(), n && O(b, { select: !0 }))
              : l.shiftKey &&
                g === b &&
                (l.preventDefault(), n && O(h, { select: !0 }))
            : g === C && l.preventDefault();
        }
      },
      [n, r, v.paused],
    );
    return a.createElement(
      N.div,
      y({ tabIndex: -1 }, i, { ref: $, onKeyDown: D }),
    );
  });
function Ft(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((O(r, { select: t }), document.activeElement !== n)) return;
}
function Bt(e) {
  const t = Le(e),
    n = De(t, e),
    r = De(t.reverse(), e);
  return [n, r];
}
function Le(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden';
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function De(e, t) {
  for (const n of e) if (!Wt(n, { upTo: t })) return n;
}
function Wt(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === 'hidden') return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === 'none') return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ut(e) {
  return e instanceof HTMLInputElement && 'select' in e;
}
function O(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ut(e) && t && e.select();
  }
}
const Se = jt();
function jt() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), (e = Ae(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Ae(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
}
function Ae(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function zt(e) {
  return e.filter((t) => t.tagName !== 'A');
}
const Kt = a.forwardRef((e, t) => {
  var n;
  const {
    container: r = globalThis == null ||
    (n = globalThis.document) === null ||
    n === void 0
      ? void 0
      : n.body,
    ...o
  } = e;
  return r
    ? dt.createPortal(a.createElement(N.div, y({}, o, { ref: t })), r)
    : null;
});
function Yt(e, t) {
  return a.useReducer((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const q = (e) => {
  const { present: t, children: n } = e,
    r = Gt(t),
    o =
      typeof n == 'function' ? n({ present: r.isPresent }) : a.Children.only(n),
    c = T(r.ref, o.ref);
  return typeof n == 'function' || r.isPresent
    ? a.cloneElement(o, { ref: c })
    : null;
};
q.displayName = 'Presence';
function Gt(e) {
  const [t, n] = a.useState(),
    r = a.useRef({}),
    o = a.useRef(e),
    c = a.useRef('none'),
    i = e ? 'mounted' : 'unmounted',
    [s, f] = Yt(i, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    a.useEffect(() => {
      const u = z(r.current);
      c.current = s === 'mounted' ? u : 'none';
    }, [s]),
    le(() => {
      const u = r.current,
        p = o.current;
      if (p !== e) {
        const $ = c.current,
          v = z(u);
        e
          ? f('MOUNT')
          : v === 'none' || u?.display === 'none'
            ? f('UNMOUNT')
            : f(p && $ !== v ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = e);
      }
    }, [e, f]),
    le(() => {
      if (t) {
        const u = (d) => {
            const v = z(r.current).includes(d.animationName);
            d.target === t && v && ft.flushSync(() => f('ANIMATION_END'));
          },
          p = (d) => {
            d.target === t && (c.current = z(r.current));
          };
        return (
          t.addEventListener('animationstart', p),
          t.addEventListener('animationcancel', u),
          t.addEventListener('animationend', u),
          () => {
            t.removeEventListener('animationstart', p),
              t.removeEventListener('animationcancel', u),
              t.removeEventListener('animationend', u);
          }
        );
      } else f('ANIMATION_END');
    }, [t, f]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(s),
      ref: a.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function z(e) {
  return e?.animationName || 'none';
}
let re = 0;
function Ht() {
  a.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll('[data-radix-focus-guard]');
    return (
      document.body.insertAdjacentElement(
        'afterbegin',
        (e = n[0]) !== null && e !== void 0 ? e : Re(),
      ),
      document.body.insertAdjacentElement(
        'beforeend',
        (t = n[1]) !== null && t !== void 0 ? t : Re(),
      ),
      re++,
      () => {
        re === 1 &&
          document
            .querySelectorAll('[data-radix-focus-guard]')
            .forEach((r) => r.remove()),
          re--;
      }
    );
  }, []);
}
function Re() {
  const e = document.createElement('span');
  return (
    e.setAttribute('data-radix-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.cssText =
      'outline: none; opacity: 0; position: fixed; pointer-events: none'),
    e
  );
}
var R = function () {
  return (
    (R =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var c in n)
            Object.prototype.hasOwnProperty.call(n, c) && (t[c] = n[c]);
        }
        return t;
      }),
    R.apply(this, arguments)
  );
};
function Me(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function Xt(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, c; r < o; r++)
      (c || !(r in t)) &&
        (c || (c = Array.prototype.slice.call(t, 0, r)), (c[r] = t[r]));
  return e.concat(c || Array.prototype.slice.call(t));
}
var X = 'right-scroll-bar-position',
  V = 'width-before-scroll-bar',
  Vt = 'with-scroll-bars-hidden',
  Zt = '--removed-body-scroll-bar-size';
function oe(e, t) {
  return typeof e == 'function' ? e(t) : e && (e.current = t), e;
}
function qt(e, t) {
  var n = a.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var Qt = typeof window < 'u' ? a.useLayoutEffect : a.useEffect,
  Pe = new WeakMap();
function Jt(e, t) {
  var n = qt(null, function (r) {
    return e.forEach(function (o) {
      return oe(o, r);
    });
  });
  return (
    Qt(
      function () {
        var r = Pe.get(n);
        if (r) {
          var o = new Set(r),
            c = new Set(e),
            i = n.current;
          o.forEach(function (s) {
            c.has(s) || oe(s, null);
          }),
            c.forEach(function (s) {
              o.has(s) || oe(s, i);
            });
        }
        Pe.set(n, e);
      },
      [e],
    ),
    n
  );
}
function en(e) {
  return e;
}
function tn(e, t) {
  t === void 0 && (t = en);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (c) {
        var i = t(c, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (s) {
              return s !== i;
            });
          }
        );
      },
      assignSyncMedium: function (c) {
        for (r = !0; n.length; ) {
          var i = n;
          (n = []), i.forEach(c);
        }
        n = {
          push: function (s) {
            return c(s);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (c) {
        r = !0;
        var i = [];
        if (n.length) {
          var s = n;
          (n = []), s.forEach(c), (i = n);
        }
        var f = function () {
            var p = i;
            (i = []), p.forEach(c);
          },
          u = function () {
            return Promise.resolve().then(f);
          };
        u(),
          (n = {
            push: function (p) {
              i.push(p), u();
            },
            filter: function (p) {
              return (i = i.filter(p)), n;
            },
          });
      },
    };
  return o;
}
function nn(e) {
  e === void 0 && (e = {});
  var t = tn(null);
  return (t.options = R({ async: !0, ssr: !1 }, e)), t;
}
var Fe = function (e) {
  var t = e.sideCar,
    n = Me(e, ['sideCar']);
  if (!t)
    throw new Error(
      'Sidecar: please provide `sideCar` property to import the right car',
    );
  var r = t.read();
  if (!r) throw new Error('Sidecar medium not found');
  return a.createElement(r, R({}, n));
};
Fe.isSideCarExport = !0;
function an(e, t) {
  return e.useMedium(t), Fe;
}
var Be = nn(),
  ce = function () {},
  Q = a.forwardRef(function (e, t) {
    var n = a.useRef(null),
      r = a.useState({
        onScrollCapture: ce,
        onWheelCapture: ce,
        onTouchMoveCapture: ce,
      }),
      o = r[0],
      c = r[1],
      i = e.forwardProps,
      s = e.children,
      f = e.className,
      u = e.removeScrollBar,
      p = e.enabled,
      d = e.shards,
      $ = e.sideCar,
      v = e.noIsolation,
      D = e.inert,
      l = e.allowPinchZoom,
      m = e.as,
      g = m === void 0 ? 'div' : m,
      C = Me(e, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
      ]),
      b = $,
      h = Jt([n, t]),
      E = R(R({}, C), o);
    return a.createElement(
      a.Fragment,
      null,
      p &&
        a.createElement(b, {
          sideCar: Be,
          removeScrollBar: u,
          shards: d,
          noIsolation: v,
          inert: D,
          setCallbacks: c,
          allowPinchZoom: !!l,
          lockRef: n,
        }),
      i
        ? a.cloneElement(a.Children.only(s), R(R({}, E), { ref: h }))
        : a.createElement(g, R({}, E, { className: f, ref: h }), s),
    );
  });
Q.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Q.classNames = { fullWidth: V, zeroRight: X };
var rn = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function on() {
  if (!document) return null;
  var e = document.createElement('style');
  e.type = 'text/css';
  var t = rn();
  return t && e.setAttribute('nonce', t), e;
}
function cn(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function sn(e) {
  var t = document.head || document.getElementsByTagName('head')[0];
  t.appendChild(e);
}
var ln = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = on()) && (cn(t, n), sn(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  un = function () {
    var e = ln();
    return function (t, n) {
      a.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  We = function () {
    var e = un(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  dn = { left: 0, top: 0, right: 0, gap: 0 },
  se = function (e) {
    return parseInt(e || '', 10) || 0;
  },
  fn = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
      r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
      o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
    return [se(n), se(r), se(o)];
  },
  pn = function (e) {
    if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return dn;
    var t = fn(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  vn = We(),
  mn = function (e, t, n, r) {
    var o = e.left,
      c = e.top,
      i = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = 'margin'),
      `
  .`
        .concat(
          Vt,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(s, 'px ')
        .concat(
          r,
          `;
  }
  body {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && 'position: relative '.concat(r, ';'),
            n === 'margin' &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  c,
                  `px;
    padding-right: `,
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(s, 'px ')
                .concat(
                  r,
                  `;
    `,
                ),
            n === 'padding' &&
              'padding-right: '.concat(s, 'px ').concat(r, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`,
        )
        .concat(
          X,
          ` {
    right: `,
        )
        .concat(s, 'px ')
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          V,
          ` {
    margin-right: `,
        )
        .concat(s, 'px ')
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(X, ' .')
        .concat(
          X,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(V, ' .')
        .concat(
          V,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body {
    `,
        )
        .concat(Zt, ': ')
        .concat(
          s,
          `px;
  }
`,
        )
    );
  },
  $n = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? 'margin' : r,
      c = a.useMemo(
        function () {
          return pn(o);
        },
        [o],
      );
    return a.createElement(vn, { styles: mn(c, !t, o, n ? '' : '!important') });
  },
  fe = !1;
if (typeof window < 'u')
  try {
    var K = Object.defineProperty({}, 'passive', {
      get: function () {
        return (fe = !0), !0;
      },
    });
    window.addEventListener('test', K, K),
      window.removeEventListener('test', K, K);
  } catch {
    fe = !1;
  }
var M = fe ? { passive: !1 } : !1,
  gn = function (e) {
    return e.tagName === 'TEXTAREA';
  },
  Ue = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== 'hidden' &&
      !(n.overflowY === n.overflowX && !gn(e) && n[t] === 'visible')
    );
  },
  bn = function (e) {
    return Ue(e, 'overflowY');
  },
  hn = function (e) {
    return Ue(e, 'overflowX');
  },
  Ne = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < 'u' && n instanceof ShadowRoot && (n = n.host);
      var r = je(e, n);
      if (r) {
        var o = ze(e, n),
          c = o[1],
          i = o[2];
        if (c > i) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  En = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  yn = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  je = function (e, t) {
    return e === 'v' ? bn(t) : hn(t);
  },
  ze = function (e, t) {
    return e === 'v' ? En(t) : yn(t);
  },
  Cn = function (e, t) {
    return e === 'h' && t === 'rtl' ? -1 : 1;
  },
  wn = function (e, t, n, r, o) {
    var c = Cn(e, window.getComputedStyle(t).direction),
      i = c * r,
      s = n.target,
      f = t.contains(s),
      u = !1,
      p = i > 0,
      d = 0,
      $ = 0;
    do {
      var v = ze(e, s),
        D = v[0],
        l = v[1],
        m = v[2],
        g = l - m - c * D;
      (D || g) && je(e, s) && ((d += g), ($ += D)), (s = s.parentNode);
    } while ((!f && s !== document.body) || (f && (t.contains(s) || t === s)));
    return ((p && (d === 0 || !o)) || (!p && ($ === 0 || !o))) && (u = !0), u;
  },
  Y = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  _e = function (e) {
    return [e.deltaX, e.deltaY];
  },
  xe = function (e) {
    return e && 'current' in e ? e.current : e;
  },
  Dn = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Sn = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  An = 0,
  F = [];
function Rn(e) {
  var t = a.useRef([]),
    n = a.useRef([0, 0]),
    r = a.useRef(),
    o = a.useState(An++)[0],
    c = a.useState(function () {
      return We();
    })[0],
    i = a.useRef(e);
  a.useEffect(
    function () {
      i.current = e;
    },
    [e],
  ),
    a.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(o));
          var l = Xt([e.lockRef.current], (e.shards || []).map(xe), !0).filter(
            Boolean,
          );
          return (
            l.forEach(function (m) {
              return m.classList.add('allow-interactivity-'.concat(o));
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(o)),
                l.forEach(function (m) {
                  return m.classList.remove('allow-interactivity-'.concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var s = a.useCallback(function (l, m) {
      if ('touches' in l && l.touches.length === 2)
        return !i.current.allowPinchZoom;
      var g = Y(l),
        C = n.current,
        b = 'deltaX' in l ? l.deltaX : C[0] - g[0],
        h = 'deltaY' in l ? l.deltaY : C[1] - g[1],
        E,
        k = l.target,
        x = Math.abs(b) > Math.abs(h) ? 'h' : 'v';
      if ('touches' in l && x === 'h' && k.type === 'range') return !1;
      var w = Ne(x, k);
      if (!w) return !0;
      if ((w ? (E = x) : ((E = x === 'v' ? 'h' : 'v'), (w = Ne(x, k))), !w))
        return !1;
      if (
        (!r.current && 'changedTouches' in l && (b || h) && (r.current = E), !E)
      )
        return !0;
      var I = r.current || E;
      return wn(I, m, l, I === 'h' ? b : h, !0);
    }, []),
    f = a.useCallback(function (l) {
      var m = l;
      if (!(!F.length || F[F.length - 1] !== c)) {
        var g = 'deltaY' in m ? _e(m) : Y(m),
          C = t.current.filter(function (E) {
            return E.name === m.type && E.target === m.target && Dn(E.delta, g);
          })[0];
        if (C && C.should) {
          m.cancelable && m.preventDefault();
          return;
        }
        if (!C) {
          var b = (i.current.shards || [])
              .map(xe)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(m.target);
              }),
            h = b.length > 0 ? s(m, b[0]) : !i.current.noIsolation;
          h && m.cancelable && m.preventDefault();
        }
      }
    }, []),
    u = a.useCallback(function (l, m, g, C) {
      var b = { name: l, delta: m, target: g, should: C };
      t.current.push(b),
        setTimeout(function () {
          t.current = t.current.filter(function (h) {
            return h !== b;
          });
        }, 1);
    }, []),
    p = a.useCallback(function (l) {
      (n.current = Y(l)), (r.current = void 0);
    }, []),
    d = a.useCallback(function (l) {
      u(l.type, _e(l), l.target, s(l, e.lockRef.current));
    }, []),
    $ = a.useCallback(function (l) {
      u(l.type, Y(l), l.target, s(l, e.lockRef.current));
    }, []);
  a.useEffect(function () {
    return (
      F.push(c),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: $,
      }),
      document.addEventListener('wheel', f, M),
      document.addEventListener('touchmove', f, M),
      document.addEventListener('touchstart', p, M),
      function () {
        (F = F.filter(function (l) {
          return l !== c;
        })),
          document.removeEventListener('wheel', f, M),
          document.removeEventListener('touchmove', f, M),
          document.removeEventListener('touchstart', p, M);
      }
    );
  }, []);
  var v = e.removeScrollBar,
    D = e.inert;
  return a.createElement(
    a.Fragment,
    null,
    D ? a.createElement(c, { styles: Sn(o) }) : null,
    v ? a.createElement($n, { gapMode: 'margin' }) : null,
  );
}
const Pn = an(Be, Rn);
var Ke = a.forwardRef(function (e, t) {
  return a.createElement(Q, R({}, e, { ref: t, sideCar: Pn }));
});
Ke.classNames = Q.classNames;
var Nn = function (e) {
    if (typeof document > 'u') return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  B = new WeakMap(),
  G = new WeakMap(),
  H = {},
  ie = 0,
  Ye = function (e) {
    return e && (e.host || Ye(e.parentNode));
  },
  _n = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Ye(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              'aria-hidden',
              n,
              'in not contained inside',
              e,
              '. Doing nothing',
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  xn = function (e, t, n, r) {
    var o = _n(t, Array.isArray(e) ? e : [e]);
    H[n] || (H[n] = new WeakMap());
    var c = H[n],
      i = [],
      s = new Set(),
      f = new Set(o),
      u = function (d) {
        !d || s.has(d) || (s.add(d), u(d.parentNode));
      };
    o.forEach(u);
    var p = function (d) {
      !d ||
        f.has(d) ||
        Array.prototype.forEach.call(d.children, function ($) {
          if (s.has($)) p($);
          else
            try {
              var v = $.getAttribute(r),
                D = v !== null && v !== 'false',
                l = (B.get($) || 0) + 1,
                m = (c.get($) || 0) + 1;
              B.set($, l),
                c.set($, m),
                i.push($),
                l === 1 && D && G.set($, !0),
                m === 1 && $.setAttribute(n, 'true'),
                D || $.setAttribute(r, 'true');
            } catch (g) {
              console.error('aria-hidden: cannot operate on ', $, g);
            }
        });
    };
    return (
      p(t),
      s.clear(),
      ie++,
      function () {
        i.forEach(function (d) {
          var $ = B.get(d) - 1,
            v = c.get(d) - 1;
          B.set(d, $),
            c.set(d, v),
            $ || (G.has(d) || d.removeAttribute(r), G.delete(d)),
            v || d.removeAttribute(n);
        }),
          ie--,
          ie ||
            ((B = new WeakMap()),
            (B = new WeakMap()),
            (G = new WeakMap()),
            (H = {}));
      }
    );
  },
  On = function (e, t, n) {
    n === void 0 && (n = 'data-aria-hidden');
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = Nn(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))),
        xn(r, o, n, 'aria-hidden'))
      : function () {
          return null;
        };
  };
const Ge = 'Dialog',
  [He, Xe] = Z(Ge),
  [Tn, A] = He(Ge),
  kn = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: c,
        modal: i = !0,
      } = e,
      s = a.useRef(null),
      f = a.useRef(null),
      [u = !1, p] = Pt({ prop: r, defaultProp: o, onChange: c });
    return a.createElement(
      Tn,
      {
        scope: t,
        triggerRef: s,
        contentRef: f,
        contentId: te(),
        titleId: te(),
        descriptionId: te(),
        open: u,
        onOpenChange: p,
        onOpenToggle: a.useCallback(() => p((d) => !d), [p]),
        modal: i,
      },
      n,
    );
  },
  In = 'DialogTrigger',
  Ln = a.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = A(In, n),
      c = T(t, o.triggerRef);
    return a.createElement(
      N.button,
      y(
        {
          type: 'button',
          'aria-haspopup': 'dialog',
          'aria-expanded': o.open,
          'aria-controls': o.contentId,
          'data-state': ge(o.open),
        },
        r,
        { ref: c, onClick: P(e.onClick, o.onOpenToggle) },
      ),
    );
  }),
  Ve = 'DialogPortal',
  [Mn, Ze] = He(Ve, { forceMount: void 0 }),
  Fn = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      c = A(Ve, t);
    return a.createElement(
      Mn,
      { scope: t, forceMount: n },
      a.Children.map(r, (i) =>
        a.createElement(
          q,
          { present: n || c.open },
          a.createElement(Kt, { asChild: !0, container: o }, i),
        ),
      ),
    );
  },
  pe = 'DialogOverlay',
  Bn = a.forwardRef((e, t) => {
    const n = Ze(pe, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      c = A(pe, e.__scopeDialog);
    return c.modal
      ? a.createElement(
          q,
          { present: r || c.open },
          a.createElement(Wn, y({}, o, { ref: t })),
        )
      : null;
  }),
  Wn = a.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = A(pe, n);
    return a.createElement(
      Ke,
      { as: me, allowPinchZoom: !0, shards: [o.contentRef] },
      a.createElement(
        N.div,
        y({ 'data-state': ge(o.open) }, r, {
          ref: t,
          style: { pointerEvents: 'auto', ...r.style },
        }),
      ),
    );
  }),
  U = 'DialogContent',
  Un = a.forwardRef((e, t) => {
    const n = Ze(U, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      c = A(U, e.__scopeDialog);
    return a.createElement(
      q,
      { present: r || c.open },
      c.modal
        ? a.createElement(jn, y({}, o, { ref: t }))
        : a.createElement(zn, y({}, o, { ref: t })),
    );
  }),
  jn = a.forwardRef((e, t) => {
    const n = A(U, e.__scopeDialog),
      r = a.useRef(null),
      o = T(t, n.contentRef, r);
    return (
      a.useEffect(() => {
        const c = r.current;
        if (c) return On(c);
      }, []),
      a.createElement(
        qe,
        y({}, e, {
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: P(e.onCloseAutoFocus, (c) => {
            var i;
            c.preventDefault(),
              (i = n.triggerRef.current) === null || i === void 0 || i.focus();
          }),
          onPointerDownOutside: P(e.onPointerDownOutside, (c) => {
            const i = c.detail.originalEvent,
              s = i.button === 0 && i.ctrlKey === !0;
            (i.button === 2 || s) && c.preventDefault();
          }),
          onFocusOutside: P(e.onFocusOutside, (c) => c.preventDefault()),
        }),
      )
    );
  }),
  zn = a.forwardRef((e, t) => {
    const n = A(U, e.__scopeDialog),
      r = a.useRef(!1),
      o = a.useRef(!1);
    return a.createElement(
      qe,
      y({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (c) => {
          var i;
          if (
            ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, c),
            !c.defaultPrevented)
          ) {
            var s;
            r.current ||
              (s = n.triggerRef.current) === null ||
              s === void 0 ||
              s.focus(),
              c.preventDefault();
          }
          (r.current = !1), (o.current = !1);
        },
        onInteractOutside: (c) => {
          var i, s;
          (i = e.onInteractOutside) === null || i === void 0 || i.call(e, c),
            c.defaultPrevented ||
              ((r.current = !0),
              c.detail.originalEvent.type === 'pointerdown' &&
                (o.current = !0));
          const f = c.target;
          ((s = n.triggerRef.current) === null || s === void 0
            ? void 0
            : s.contains(f)) && c.preventDefault(),
            c.detail.originalEvent.type === 'focusin' &&
              o.current &&
              c.preventDefault();
        },
      }),
    );
  }),
  qe = a.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: c,
        ...i
      } = e,
      s = A(U, n),
      f = a.useRef(null),
      u = T(t, f);
    return (
      Ht(),
      a.createElement(
        a.Fragment,
        null,
        a.createElement(
          Mt,
          {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: c,
          },
          a.createElement(
            kt,
            y(
              {
                role: 'dialog',
                id: s.contentId,
                'aria-describedby': s.descriptionId,
                'aria-labelledby': s.titleId,
                'data-state': ge(s.open),
              },
              i,
              { ref: u, onDismiss: () => s.onOpenChange(!1) },
            ),
          ),
        ),
        !1,
      )
    );
  }),
  Qe = 'DialogTitle',
  Kn = a.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = A(Qe, n);
    return a.createElement(N.h2, y({ id: o.titleId }, r, { ref: t }));
  }),
  Yn = 'DialogDescription',
  Gn = a.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = A(Yn, n);
    return a.createElement(N.p, y({ id: o.descriptionId }, r, { ref: t }));
  }),
  Hn = 'DialogClose',
  Xn = a.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = A(Hn, n);
    return a.createElement(
      N.button,
      y({ type: 'button' }, r, {
        ref: t,
        onClick: P(e.onClick, () => o.onOpenChange(!1)),
      }),
    );
  });
function ge(e) {
  return e ? 'open' : 'closed';
}
const Vn = 'DialogTitleWarning',
  [Zn, nr] = vt(Vn, { contentName: U, titleName: Qe, docsSlug: 'dialog' }),
  qn = kn,
  Qn = Ln,
  Jn = Fn,
  ea = Bn,
  ta = Un,
  na = Kn,
  aa = Gn,
  Je = Xn,
  ra = 'AlertDialog',
  [oa, ar] = Z(ra, [Xe]),
  _ = Xe(),
  ca = (e) => {
    const { __scopeAlertDialog: t, ...n } = e,
      r = _(t);
    return a.createElement(qn, y({}, r, n, { modal: !0 }));
  },
  sa = a.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = _(n);
    return a.createElement(Qn, y({}, o, r, { ref: t }));
  }),
  ia = (e) => {
    const { __scopeAlertDialog: t, ...n } = e,
      r = _(t);
    return a.createElement(Jn, y({}, r, n));
  },
  la = a.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = _(n);
    return a.createElement(ea, y({}, o, r, { ref: t }));
  }),
  et = 'AlertDialogContent',
  [ua, da] = oa(et),
  fa = a.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e,
      c = _(n),
      i = a.useRef(null),
      s = T(t, i),
      f = a.useRef(null);
    return a.createElement(
      Zn,
      { contentName: et, titleName: pa, docsSlug: 'alert-dialog' },
      a.createElement(
        ua,
        { scope: n, cancelRef: f },
        a.createElement(
          ta,
          y({ role: 'alertdialog' }, c, o, {
            ref: s,
            onOpenAutoFocus: P(o.onOpenAutoFocus, (u) => {
              var p;
              u.preventDefault(),
                (p = f.current) === null ||
                  p === void 0 ||
                  p.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (u) => u.preventDefault(),
            onInteractOutside: (u) => u.preventDefault(),
          }),
          a.createElement(mt, null, r),
          !1,
        ),
      ),
    );
  }),
  pa = 'AlertDialogTitle',
  va = a.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = _(n);
    return a.createElement(na, y({}, o, r, { ref: t }));
  }),
  ma = a.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = _(n);
    return a.createElement(aa, y({}, o, r, { ref: t }));
  }),
  $a = a.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = _(n);
    return a.createElement(Je, y({}, o, r, { ref: t }));
  }),
  ga = 'AlertDialogCancel',
  ba = a.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      { cancelRef: o } = da(ga, n),
      c = _(n),
      i = T(t, o);
    return a.createElement(Je, y({}, c, r, { ref: i }));
  }),
  ha = ca,
  Ea = sa,
  ya = ia,
  Ca = la,
  wa = fa,
  Da = $a,
  Sa = ba,
  Aa = va,
  Ra = ma,
  Pa = ['1', '2', '3', '4'],
  Na = ['classic', 'solid', 'soft', 'surface', 'outline', 'ghost'],
  Oe = {
    ...Te,
    size: {
      type: 'enum',
      className: 'rt-r-size',
      values: Pa,
      default: '2',
      responsive: !0,
    },
    variant: {
      type: 'enum',
      className: 'rt-variant',
      values: Na,
      default: 'solid',
    },
    ...$t,
    ...gt,
    ...bt,
    loading: { type: 'boolean', className: 'rt-loading', default: !1 },
  },
  _a = ['1', '2', '3'],
  xa = {
    size: {
      type: 'enum',
      className: 'rt-r-size',
      values: _a,
      default: '2',
      responsive: !0,
    },
    loading: { type: 'boolean', default: !0 },
  },
  Oa = ['inherit', 'light', 'dark'],
  Ta = ['solid', 'translucent'],
  ka = ['90%', '95%', '100%', '105%', '110%'],
  S = {
    ...Te,
    hasBackground: { type: 'boolean', default: !0 },
    appearance: { type: 'enum', values: Oa, default: 'inherit' },
    accentColor: { type: 'enum', values: ht, default: 'indigo' },
    grayColor: { type: 'enum', values: Et, default: 'auto' },
    panelBackground: { type: 'enum', values: Ta, default: 'translucent' },
    radius: { type: 'enum', values: yt, default: 'medium' },
    scaling: { type: 'enum', values: ka, default: '100%' },
  };
function Ia(e) {
  switch (e) {
    case 'tomato':
    case 'red':
    case 'ruby':
    case 'crimson':
    case 'pink':
    case 'plum':
    case 'purple':
    case 'violet':
      return 'mauve';
    case 'iris':
    case 'indigo':
    case 'blue':
    case 'sky':
    case 'cyan':
      return 'slate';
    case 'teal':
    case 'jade':
    case 'mint':
    case 'green':
      return 'sage';
    case 'grass':
    case 'lime':
      return 'olive';
    case 'yellow':
    case 'amber':
    case 'orange':
    case 'brown':
    case 'gold':
    case 'bronze':
      return 'sand';
    case 'gray':
      return 'gray';
  }
}
function La(e, t) {
  if (e !== void 0)
    return typeof e == 'string'
      ? t(e)
      : Object.fromEntries(Object.entries(e).map(([n, r]) => [n, t(r)]));
}
function Ma(e) {
  switch (e) {
    case '1':
      return '1';
    case '2':
    case '3':
      return '2';
    case '4':
      return '3';
  }
}
const be = (e) => {
  if (!a.isValidElement(e))
    throw Error(
      `Expected a single React Element child, but got: ${a.Children.toArray(e)
        .map((t) =>
          typeof t == 'object' && 'type' in t && typeof t.type == 'string'
            ? t.type
            : typeof t,
        )
        .join(', ')}`,
    );
  return e;
};
const tt = 'Popper',
  [nt, at] = Z(tt);
nt(tt);
const Fa = 'PopperContent',
  [rr, or] = nt(Fa);
const [J, cr] = Z('Tooltip', [at]);
at();
const Ba = 'TooltipProvider',
  Wa = 700,
  [Ua, sr] = J(Ba),
  ja = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Wa,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: c,
      } = e,
      [i, s] = a.useState(!0),
      f = a.useRef(!1),
      u = a.useRef(0);
    return (
      a.useEffect(() => {
        const p = u.current;
        return () => window.clearTimeout(p);
      }, []),
      a.createElement(
        Ua,
        {
          scope: t,
          isOpenDelayed: i,
          delayDuration: n,
          onOpen: a.useCallback(() => {
            window.clearTimeout(u.current), s(!1);
          }, []),
          onClose: a.useCallback(() => {
            window.clearTimeout(u.current),
              (u.current = window.setTimeout(() => s(!0), r));
          }, [r]),
          isPointerInTransitRef: f,
          onPointerInTransitChange: a.useCallback((p) => {
            f.current = p;
          }, []),
          disableHoverableContent: o,
        },
        c,
      )
    );
  },
  rt = 'Tooltip';
J(rt);
const za = 'TooltipPortal';
J(za, { forceMount: void 0 });
J(rt, { isInside: !1 });
const Ka = ja,
  ot = a.createContext(void 0),
  Ya = (e) => {
    const { dir: t, children: n } = e;
    return a.createElement(ot.Provider, { value: t }, n);
  };
function ir(e) {
  const t = a.useContext(ot);
  return e || t || 'ltr';
}
const W = () => {},
  ve = a.createContext(void 0),
  ct = a.forwardRef((e, t) =>
    a.useContext(ve) === void 0
      ? a.createElement(
          Ka,
          { delayDuration: 200 },
          a.createElement(
            Ya,
            { dir: 'ltr' },
            a.createElement(st, { ...e, ref: t }),
          ),
        )
      : a.createElement(he, { ...e, ref: t }),
  );
ct.displayName = 'Theme';
const st = a.forwardRef((e, t) => {
  const {
      appearance: n = S.appearance.default,
      accentColor: r = S.accentColor.default,
      grayColor: o = S.grayColor.default,
      panelBackground: c = S.panelBackground.default,
      radius: i = S.radius.default,
      scaling: s = S.scaling.default,
      hasBackground: f = S.hasBackground.default,
      ...u
    } = e,
    [p, d] = a.useState(n);
  a.useEffect(() => d(n), [n]);
  const [$, v] = a.useState(r);
  a.useEffect(() => v(r), [r]);
  const [D, l] = a.useState(o);
  a.useEffect(() => l(o), [o]);
  const [m, g] = a.useState(c);
  a.useEffect(() => g(c), [c]);
  const [C, b] = a.useState(i);
  a.useEffect(() => b(i), [i]);
  const [h, E] = a.useState(s);
  return (
    a.useEffect(() => E(s), [s]),
    a.createElement(he, {
      ...u,
      ref: t,
      isRoot: !0,
      hasBackground: f,
      appearance: p,
      accentColor: $,
      grayColor: D,
      panelBackground: m,
      radius: C,
      scaling: h,
      onAppearanceChange: d,
      onAccentColorChange: v,
      onGrayColorChange: l,
      onPanelBackgroundChange: g,
      onRadiusChange: b,
      onScalingChange: E,
    })
  );
});
st.displayName = 'ThemeRoot';
const he = a.forwardRef((e, t) => {
  const n = a.useContext(ve),
    {
      asChild: r,
      isRoot: o,
      hasBackground: c,
      appearance: i = n?.appearance ?? S.appearance.default,
      accentColor: s = n?.accentColor ?? S.accentColor.default,
      grayColor: f = n?.resolvedGrayColor ?? S.grayColor.default,
      panelBackground: u = n?.panelBackground ?? S.panelBackground.default,
      radius: p = n?.radius ?? S.radius.default,
      scaling: d = n?.scaling ?? S.scaling.default,
      onAppearanceChange: $ = W,
      onAccentColorChange: v = W,
      onGrayColorChange: D = W,
      onPanelBackgroundChange: l = W,
      onRadiusChange: m = W,
      onScalingChange: g = W,
      ...C
    } = e,
    b = r ? me : 'div',
    h = f === 'auto' ? Ia(s) : f,
    E = e.appearance === 'light' || e.appearance === 'dark',
    k = c === void 0 ? o || E : c;
  return a.createElement(
    ve.Provider,
    {
      value: a.useMemo(
        () => ({
          appearance: i,
          accentColor: s,
          grayColor: f,
          resolvedGrayColor: h,
          panelBackground: u,
          radius: p,
          scaling: d,
          onAppearanceChange: $,
          onAccentColorChange: v,
          onGrayColorChange: D,
          onPanelBackgroundChange: l,
          onRadiusChange: m,
          onScalingChange: g,
        }),
        [i, s, f, h, u, p, d, $, v, D, l, m, g],
      ),
    },
    a.createElement(b, {
      'data-is-root-theme': o ? 'true' : 'false',
      'data-accent-color': s,
      'data-gray-color': h,
      'data-has-background': k ? 'true' : 'false',
      'data-panel-background': u,
      'data-radius': p,
      'data-scaling': d,
      ref: t,
      ...C,
      className: j(
        'radix-themes',
        { light: i === 'light', dark: i === 'dark' },
        C.className,
      ),
    }),
  );
});
he.displayName = 'ThemeImpl';
const Ga = (e) => a.createElement(ha, { ...e });
Ga.displayName = 'AlertDialog.Root';
const Ha = a.forwardRef(({ children: e, ...t }, n) =>
  a.createElement(Ea, { ...t, ref: n, asChild: !0 }, be(e)),
);
Ha.displayName = 'AlertDialog.Trigger';
const Xa = a.forwardRef((e, t) => {
  const { className: n, forceMount: r, container: o, ...c } = $e(e, Dt);
  return a.createElement(
    ya,
    { container: o, forceMount: r },
    a.createElement(
      ct,
      { asChild: !0 },
      a.createElement(
        Ca,
        { className: 'rt-BaseDialogOverlay rt-AlertDialogOverlay' },
        a.createElement(
          'div',
          { className: 'rt-BaseDialogScroll rt-AlertDialogScroll' },
          a.createElement(
            'div',
            {
              className:
                'rt-BaseDialogScrollPadding rt-AlertDialogScrollPadding',
            },
            a.createElement(wa, {
              ...c,
              ref: t,
              className: j('rt-BaseDialogContent', 'rt-AlertDialogContent', n),
            }),
          ),
        ),
      ),
    ),
  );
});
Xa.displayName = 'AlertDialog.Content';
const Va = a.forwardRef((e, t) =>
  a.createElement(
    Aa,
    { asChild: !0 },
    a.createElement(Ct, {
      size: '5',
      mb: '3',
      trim: 'start',
      ...e,
      asChild: !1,
      ref: t,
    }),
  ),
);
Va.displayName = 'AlertDialog.Title';
const Za = a.forwardRef((e, t) =>
  a.createElement(
    Ra,
    { asChild: !0 },
    a.createElement(wt, { as: 'p', size: '3', ...e, asChild: !1, ref: t }),
  ),
);
Za.displayName = 'AlertDialog.Description';
const qa = a.forwardRef(({ children: e, ...t }, n) =>
  a.createElement(Da, { ...t, ref: n, asChild: !0 }, be(e)),
);
qa.displayName = 'AlertDialog.Action';
const Qa = a.forwardRef(({ children: e, ...t }, n) =>
  a.createElement(Sa, { ...t, ref: n, asChild: !0 }, be(e)),
);
Qa.displayName = 'AlertDialog.Cancel';
const it = a.forwardRef((e, t) => {
  const { className: n, children: r, loading: o, ...c } = $e(e, xa, ke);
  if (!o) return r;
  const i = a.createElement(
    'span',
    { ...c, ref: t, className: j('rt-Spinner', n) },
    a.createElement('span', { className: 'rt-SpinnerLeaf' }),
    a.createElement('span', { className: 'rt-SpinnerLeaf' }),
    a.createElement('span', { className: 'rt-SpinnerLeaf' }),
    a.createElement('span', { className: 'rt-SpinnerLeaf' }),
    a.createElement('span', { className: 'rt-SpinnerLeaf' }),
    a.createElement('span', { className: 'rt-SpinnerLeaf' }),
    a.createElement('span', { className: 'rt-SpinnerLeaf' }),
    a.createElement('span', { className: 'rt-SpinnerLeaf' }),
  );
  return r === void 0
    ? i
    : a.createElement(
        ue,
        {
          asChild: !0,
          position: 'relative',
          align: 'center',
          justify: 'center',
        },
        a.createElement(
          'span',
          null,
          a.createElement(
            'span',
            {
              'aria-hidden': !0,
              style: { display: 'contents', visibility: 'hidden' },
              inert: '',
            },
            r,
          ),
          a.createElement(
            ue,
            {
              asChild: !0,
              align: 'center',
              justify: 'center',
              position: 'absolute',
              inset: '0',
            },
            a.createElement('span', null, i),
          ),
        ),
      );
});
it.displayName = 'Spinner';
const lt = a.forwardRef((e, t) => {
  const { size: n = Oe.size.default } = e,
    {
      className: r,
      children: o,
      asChild: c,
      color: i,
      radius: s,
      disabled: f = e.loading,
      ...u
    } = $e(e, Oe, ke);
  return a.createElement(
    c ? me : 'button',
    {
      'data-disabled': f || void 0,
      'data-accent-color': i,
      'data-radius': s,
      ...u,
      ref: t,
      className: j('rt-reset', 'rt-BaseButton', r),
      disabled: f,
    },
    e.loading
      ? a.createElement(
          a.Fragment,
          null,
          a.createElement(
            'span',
            {
              style: { display: 'contents', visibility: 'hidden' },
              'aria-hidden': !0,
            },
            o,
          ),
          a.createElement(St, null, o),
          a.createElement(
            ue,
            {
              asChild: !0,
              align: 'center',
              justify: 'center',
              position: 'absolute',
              inset: '0',
            },
            a.createElement(
              'span',
              null,
              a.createElement(it, { size: La(n, Ma) }),
            ),
          ),
        )
      : o,
  );
});
lt.displayName = 'BaseButton';
const Ja = a.forwardRef(({ className: e, ...t }, n) =>
  a.createElement(lt, { ...t, ref: n, className: j('rt-Button', e) }),
);
Ja.displayName = 'Button';
export {
  ir as $,
  Qa as D,
  ct as I,
  Me as _,
  q as a,
  P as b,
  Ga as c,
  Pt as d,
  te as e,
  Za as g,
  qa as m,
  Ha as n,
  Ja as o,
  Va as p,
  lt as r,
  Xa as s,
};
