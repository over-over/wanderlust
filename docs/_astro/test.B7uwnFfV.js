import {
  o as ae,
  r as Ee,
  $ as xe,
  a as _,
  b as W,
  _ as v,
  c as R,
  d as ye,
  h as Ce,
  y as S,
  l as Te,
  e as Re,
  g as K,
  v as D,
  f as Pe,
  i as ce,
  j as Z,
  u as Ae,
  k as re,
  m,
  n as Ne,
} from './flex.C11PjoqR.js';
import { r } from './index.DFz9pK5G.js';
import {
  $ as _e,
  a as F,
  b as P,
  c as De,
  n as ze,
  o as J,
  s as Le,
  p as He,
  g as je,
  D as We,
  m as Me,
} from './button.CYWjHZRM.js';
const Ve = ['all', 'x', 'y', 'top', 'bottom', 'left', 'right'],
  Oe = ['border-box', 'padding-box'],
  C = ['current', '0'],
  Xe = {
    ...ae,
    side: {
      type: 'enum',
      className: 'rt-r-side',
      values: Ve,
      default: 'all',
      responsive: !0,
    },
    clip: {
      type: 'enum',
      className: 'rt-r-clip',
      values: Oe,
      default: 'border-box',
      responsive: !0,
    },
    p: {
      type: 'enum',
      className: 'rt-r-p',
      values: C,
      parseValue: T,
      responsive: !0,
    },
    px: {
      type: 'enum',
      className: 'rt-r-px',
      values: C,
      parseValue: T,
      responsive: !0,
    },
    py: {
      type: 'enum',
      className: 'rt-r-py',
      values: C,
      parseValue: T,
      responsive: !0,
    },
    pt: {
      type: 'enum',
      className: 'rt-r-pt',
      values: C,
      parseValue: T,
      responsive: !0,
    },
    pr: {
      type: 'enum',
      className: 'rt-r-pr',
      values: C,
      parseValue: T,
      responsive: !0,
    },
    pb: {
      type: 'enum',
      className: 'rt-r-pb',
      values: C,
      parseValue: T,
      responsive: !0,
    },
    pl: {
      type: 'enum',
      className: 'rt-r-pl',
      values: C,
      parseValue: T,
      responsive: !0,
    },
  };
function T(e) {
  return e === 'current' ? 'inset' : e;
}
const Ye = ['1', '2', '3'],
  Ie = ['vertical', 'horizontal', 'both'],
  H = {
    ...ae,
    size: {
      type: 'enum',
      className: 'rt-r-size',
      values: Ye,
      default: '1',
      responsive: !0,
    },
    ...Ee,
    scrollbars: { type: 'enum', values: Ie, default: 'both' },
  };
function Ue(e) {
  const { m: o, mx: t, my: l, mt: n, mr: a, mb: c, ml: s, ...i } = e;
  return { m: o, mx: t, my: l, mt: n, mr: a, mb: c, ml: s, rest: i };
}
function Be(e, [o, t]) {
  return Math.min(t, Math.max(o, e));
}
function Fe(e, o) {
  return r.useReducer((t, l) => {
    const n = o[t][l];
    return n ?? t;
  }, e);
}
const se = 'ScrollArea',
  [ie, pr] = xe(se),
  [ke, w] = ie(se),
  qe = r.forwardRef((e, o) => {
    const {
        __scopeScrollArea: t,
        type: l = 'hover',
        dir: n,
        scrollHideDelay: a = 600,
        ...c
      } = e,
      [s, i] = r.useState(null),
      [u, d] = r.useState(null),
      [f, b] = r.useState(null),
      [h, $] = r.useState(null),
      [E, z] = r.useState(null),
      [x, M] = r.useState(0),
      [G, V] = r.useState(0),
      [O, L] = r.useState(!1),
      [X, Y] = r.useState(!1),
      p = _(o, (A) => i(A)),
      g = _e(n);
    return r.createElement(
      ke,
      {
        scope: t,
        type: l,
        dir: g,
        scrollHideDelay: a,
        scrollArea: s,
        viewport: u,
        onViewportChange: d,
        content: f,
        onContentChange: b,
        scrollbarX: h,
        onScrollbarXChange: $,
        scrollbarXEnabled: O,
        onScrollbarXEnabledChange: L,
        scrollbarY: E,
        onScrollbarYChange: z,
        scrollbarYEnabled: X,
        onScrollbarYEnabledChange: Y,
        onCornerWidthChange: M,
        onCornerHeightChange: V,
      },
      r.createElement(
        W.div,
        v({ dir: g }, c, {
          ref: p,
          style: {
            position: 'relative',
            '--radix-scroll-area-corner-width': x + 'px',
            '--radix-scroll-area-corner-height': G + 'px',
            ...e.style,
          },
        }),
      ),
    );
  }),
  Ge = 'ScrollAreaViewport',
  Ze = r.forwardRef((e, o) => {
    const { __scopeScrollArea: t, children: l, ...n } = e,
      a = w(Ge, t),
      c = r.useRef(null),
      s = _(o, c, a.onViewportChange);
    return r.createElement(
      r.Fragment,
      null,
      r.createElement('style', {
        dangerouslySetInnerHTML: {
          __html:
            '[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}',
        },
      }),
      r.createElement(
        W.div,
        v({ 'data-radix-scroll-area-viewport': '' }, n, {
          ref: s,
          style: {
            overflowX: a.scrollbarXEnabled ? 'scroll' : 'hidden',
            overflowY: a.scrollbarYEnabled ? 'scroll' : 'hidden',
            ...e.style,
          },
        }),
        r.createElement(
          'div',
          {
            ref: a.onContentChange,
            style: { minWidth: '100%', display: 'table' },
          },
          l,
        ),
      ),
    );
  }),
  y = 'ScrollAreaScrollbar',
  Je = r.forwardRef((e, o) => {
    const { forceMount: t, ...l } = e,
      n = w(y, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: c } = n,
      s = e.orientation === 'horizontal';
    return (
      r.useEffect(
        () => (
          s ? a(!0) : c(!0),
          () => {
            s ? a(!1) : c(!1);
          }
        ),
        [s, a, c],
      ),
      n.type === 'hover'
        ? r.createElement(Ke, v({}, l, { ref: o, forceMount: t }))
        : n.type === 'scroll'
          ? r.createElement(Qe, v({}, l, { ref: o, forceMount: t }))
          : n.type === 'auto'
            ? r.createElement(de, v({}, l, { ref: o, forceMount: t }))
            : n.type === 'always'
              ? r.createElement(te, v({}, l, { ref: o }))
              : null
    );
  }),
  Ke = r.forwardRef((e, o) => {
    const { forceMount: t, ...l } = e,
      n = w(y, e.__scopeScrollArea),
      [a, c] = r.useState(!1);
    return (
      r.useEffect(() => {
        const s = n.scrollArea;
        let i = 0;
        if (s) {
          const u = () => {
              window.clearTimeout(i), c(!0);
            },
            d = () => {
              i = window.setTimeout(() => c(!1), n.scrollHideDelay);
            };
          return (
            s.addEventListener('pointerenter', u),
            s.addEventListener('pointerleave', d),
            () => {
              window.clearTimeout(i),
                s.removeEventListener('pointerenter', u),
                s.removeEventListener('pointerleave', d);
            }
          );
        }
      }, [n.scrollArea, n.scrollHideDelay]),
      r.createElement(
        F,
        { present: t || a },
        r.createElement(
          de,
          v({ 'data-state': a ? 'visible' : 'hidden' }, l, { ref: o }),
        ),
      )
    );
  }),
  Qe = r.forwardRef((e, o) => {
    const { forceMount: t, ...l } = e,
      n = w(y, e.__scopeScrollArea),
      a = e.orientation === 'horizontal',
      c = q(() => i('SCROLL_END'), 100),
      [s, i] = Fe('hidden', {
        hidden: { SCROLL: 'scrolling' },
        scrolling: { SCROLL_END: 'idle', POINTER_ENTER: 'interacting' },
        interacting: { SCROLL: 'interacting', POINTER_LEAVE: 'idle' },
        idle: {
          HIDE: 'hidden',
          SCROLL: 'scrolling',
          POINTER_ENTER: 'interacting',
        },
      });
    return (
      r.useEffect(() => {
        if (s === 'idle') {
          const u = window.setTimeout(() => i('HIDE'), n.scrollHideDelay);
          return () => window.clearTimeout(u);
        }
      }, [s, n.scrollHideDelay, i]),
      r.useEffect(() => {
        const u = n.viewport,
          d = a ? 'scrollLeft' : 'scrollTop';
        if (u) {
          let f = u[d];
          const b = () => {
            const h = u[d];
            f !== h && (i('SCROLL'), c()), (f = h);
          };
          return (
            u.addEventListener('scroll', b),
            () => u.removeEventListener('scroll', b)
          );
        }
      }, [n.viewport, a, i, c]),
      r.createElement(
        F,
        { present: t || s !== 'hidden' },
        r.createElement(
          te,
          v({ 'data-state': s === 'hidden' ? 'hidden' : 'visible' }, l, {
            ref: o,
            onPointerEnter: P(e.onPointerEnter, () => i('POINTER_ENTER')),
            onPointerLeave: P(e.onPointerLeave, () => i('POINTER_LEAVE')),
          }),
        ),
      )
    );
  }),
  de = r.forwardRef((e, o) => {
    const t = w(y, e.__scopeScrollArea),
      { forceMount: l, ...n } = e,
      [a, c] = r.useState(!1),
      s = e.orientation === 'horizontal',
      i = q(() => {
        if (t.viewport) {
          const u = t.viewport.offsetWidth < t.viewport.scrollWidth,
            d = t.viewport.offsetHeight < t.viewport.scrollHeight;
          c(s ? u : d);
        }
      }, 10);
    return (
      N(t.viewport, i),
      N(t.content, i),
      r.createElement(
        F,
        { present: l || a },
        r.createElement(
          te,
          v({ 'data-state': a ? 'visible' : 'hidden' }, n, { ref: o }),
        ),
      )
    );
  }),
  te = r.forwardRef((e, o) => {
    const { orientation: t = 'vertical', ...l } = e,
      n = w(y, e.__scopeScrollArea),
      a = r.useRef(null),
      c = r.useRef(0),
      [s, i] = r.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      u = me(s.viewport, s.content),
      d = {
        ...l,
        sizes: s,
        onSizesChange: i,
        hasThumb: u > 0 && u < 1,
        onThumbChange: (b) => (a.current = b),
        onThumbPointerUp: () => (c.current = 0),
        onThumbPointerDown: (b) => (c.current = b),
      };
    function f(b, h) {
      return cr(b, c.current, s, h);
    }
    return t === 'horizontal'
      ? r.createElement(
          er,
          v({}, d, {
            ref: o,
            onThumbPositionChange: () => {
              if (n.viewport && a.current) {
                const b = n.viewport.scrollLeft,
                  h = oe(b, s, n.dir);
                a.current.style.transform = `translate3d(${h}px, 0, 0)`;
              }
            },
            onWheelScroll: (b) => {
              n.viewport && (n.viewport.scrollLeft = b);
            },
            onDragScroll: (b) => {
              n.viewport && (n.viewport.scrollLeft = f(b, n.dir));
            },
          }),
        )
      : t === 'vertical'
        ? r.createElement(
            rr,
            v({}, d, {
              ref: o,
              onThumbPositionChange: () => {
                if (n.viewport && a.current) {
                  const b = n.viewport.scrollTop,
                    h = oe(b, s);
                  a.current.style.transform = `translate3d(0, ${h}px, 0)`;
                }
              },
              onWheelScroll: (b) => {
                n.viewport && (n.viewport.scrollTop = b);
              },
              onDragScroll: (b) => {
                n.viewport && (n.viewport.scrollTop = f(b));
              },
            }),
          )
        : null;
  }),
  er = r.forwardRef((e, o) => {
    const { sizes: t, onSizesChange: l, ...n } = e,
      a = w(y, e.__scopeScrollArea),
      [c, s] = r.useState(),
      i = r.useRef(null),
      u = _(o, i, a.onScrollbarXChange);
    return (
      r.useEffect(() => {
        i.current && s(getComputedStyle(i.current));
      }, [i]),
      r.createElement(
        be,
        v({ 'data-orientation': 'horizontal' }, n, {
          ref: u,
          sizes: t,
          style: {
            bottom: 0,
            left: a.dir === 'rtl' ? 'var(--radix-scroll-area-corner-width)' : 0,
            right:
              a.dir === 'ltr' ? 'var(--radix-scroll-area-corner-width)' : 0,
            '--radix-scroll-area-thumb-width': k(t) + 'px',
            ...e.style,
          },
          onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
          onDragScroll: (d) => e.onDragScroll(d.x),
          onWheelScroll: (d, f) => {
            if (a.viewport) {
              const b = a.viewport.scrollLeft + d.deltaX;
              e.onWheelScroll(b), pe(b, f) && d.preventDefault();
            }
          },
          onResize: () => {
            i.current &&
              a.viewport &&
              c &&
              l({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: i.current.clientWidth,
                  paddingStart: B(c.paddingLeft),
                  paddingEnd: B(c.paddingRight),
                },
              });
          },
        }),
      )
    );
  }),
  rr = r.forwardRef((e, o) => {
    const { sizes: t, onSizesChange: l, ...n } = e,
      a = w(y, e.__scopeScrollArea),
      [c, s] = r.useState(),
      i = r.useRef(null),
      u = _(o, i, a.onScrollbarYChange);
    return (
      r.useEffect(() => {
        i.current && s(getComputedStyle(i.current));
      }, [i]),
      r.createElement(
        be,
        v({ 'data-orientation': 'vertical' }, n, {
          ref: u,
          sizes: t,
          style: {
            top: 0,
            right: a.dir === 'ltr' ? 0 : void 0,
            left: a.dir === 'rtl' ? 0 : void 0,
            bottom: 'var(--radix-scroll-area-corner-height)',
            '--radix-scroll-area-thumb-height': k(t) + 'px',
            ...e.style,
          },
          onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
          onDragScroll: (d) => e.onDragScroll(d.y),
          onWheelScroll: (d, f) => {
            if (a.viewport) {
              const b = a.viewport.scrollTop + d.deltaY;
              e.onWheelScroll(b), pe(b, f) && d.preventDefault();
            }
          },
          onResize: () => {
            i.current &&
              a.viewport &&
              c &&
              l({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: i.current.clientHeight,
                  paddingStart: B(c.paddingTop),
                  paddingEnd: B(c.paddingBottom),
                },
              });
          },
        }),
      )
    );
  }),
  [tr, ue] = ie(y),
  be = r.forwardRef((e, o) => {
    const {
        __scopeScrollArea: t,
        sizes: l,
        hasThumb: n,
        onThumbChange: a,
        onThumbPointerUp: c,
        onThumbPointerDown: s,
        onThumbPositionChange: i,
        onDragScroll: u,
        onWheelScroll: d,
        onResize: f,
        ...b
      } = e,
      h = w(y, t),
      [$, E] = r.useState(null),
      z = _(o, (p) => E(p)),
      x = r.useRef(null),
      M = r.useRef(''),
      G = h.viewport,
      V = l.content - l.viewport,
      O = R(d),
      L = R(i),
      X = q(f, 10);
    function Y(p) {
      if (x.current) {
        const g = p.clientX - x.current.left,
          A = p.clientY - x.current.top;
        u({ x: g, y: A });
      }
    }
    return (
      r.useEffect(() => {
        const p = (g) => {
          const A = g.target;
          $?.contains(A) && O(g, V);
        };
        return (
          document.addEventListener('wheel', p, { passive: !1 }),
          () => document.removeEventListener('wheel', p, { passive: !1 })
        );
      }, [G, $, V, O]),
      r.useEffect(L, [l, L]),
      N($, X),
      N(h.content, X),
      r.createElement(
        tr,
        {
          scope: t,
          scrollbar: $,
          hasThumb: n,
          onThumbChange: R(a),
          onThumbPointerUp: R(c),
          onThumbPositionChange: L,
          onThumbPointerDown: R(s),
        },
        r.createElement(
          W.div,
          v({}, b, {
            ref: z,
            style: { position: 'absolute', ...b.style },
            onPointerDown: P(e.onPointerDown, (p) => {
              p.button === 0 &&
                (p.target.setPointerCapture(p.pointerId),
                (x.current = $.getBoundingClientRect()),
                (M.current = document.body.style.webkitUserSelect),
                (document.body.style.webkitUserSelect = 'none'),
                h.viewport && (h.viewport.style.scrollBehavior = 'auto'),
                Y(p));
            }),
            onPointerMove: P(e.onPointerMove, Y),
            onPointerUp: P(e.onPointerUp, (p) => {
              const g = p.target;
              g.hasPointerCapture(p.pointerId) &&
                g.releasePointerCapture(p.pointerId),
                (document.body.style.webkitUserSelect = M.current),
                h.viewport && (h.viewport.style.scrollBehavior = ''),
                (x.current = null);
            }),
          }),
        ),
      )
    );
  }),
  Q = 'ScrollAreaThumb',
  or = r.forwardRef((e, o) => {
    const { forceMount: t, ...l } = e,
      n = ue(Q, e.__scopeScrollArea);
    return r.createElement(
      F,
      { present: t || n.hasThumb },
      r.createElement(nr, v({ ref: o }, l)),
    );
  }),
  nr = r.forwardRef((e, o) => {
    const { __scopeScrollArea: t, style: l, ...n } = e,
      a = w(Q, t),
      c = ue(Q, t),
      { onThumbPositionChange: s } = c,
      i = _(o, (f) => c.onThumbChange(f)),
      u = r.useRef(),
      d = q(() => {
        u.current && (u.current(), (u.current = void 0));
      }, 100);
    return (
      r.useEffect(() => {
        const f = a.viewport;
        if (f) {
          const b = () => {
            if ((d(), !u.current)) {
              const h = sr(f, s);
              (u.current = h), s();
            }
          };
          return (
            s(),
            f.addEventListener('scroll', b),
            () => f.removeEventListener('scroll', b)
          );
        }
      }, [a.viewport, d, s]),
      r.createElement(
        W.div,
        v({ 'data-state': c.hasThumb ? 'visible' : 'hidden' }, n, {
          ref: i,
          style: {
            width: 'var(--radix-scroll-area-thumb-width)',
            height: 'var(--radix-scroll-area-thumb-height)',
            ...l,
          },
          onPointerDownCapture: P(e.onPointerDownCapture, (f) => {
            const h = f.target.getBoundingClientRect(),
              $ = f.clientX - h.left,
              E = f.clientY - h.top;
            c.onThumbPointerDown({ x: $, y: E });
          }),
          onPointerUp: P(e.onPointerUp, c.onThumbPointerUp),
        }),
      )
    );
  }),
  fe = 'ScrollAreaCorner',
  lr = r.forwardRef((e, o) => {
    const t = w(fe, e.__scopeScrollArea),
      l = !!(t.scrollbarX && t.scrollbarY);
    return t.type !== 'scroll' && l
      ? r.createElement(ar, v({}, e, { ref: o }))
      : null;
  }),
  ar = r.forwardRef((e, o) => {
    const { __scopeScrollArea: t, ...l } = e,
      n = w(fe, t),
      [a, c] = r.useState(0),
      [s, i] = r.useState(0),
      u = !!(a && s);
    return (
      N(n.scrollbarX, () => {
        var d;
        const f =
          ((d = n.scrollbarX) === null || d === void 0
            ? void 0
            : d.offsetHeight) || 0;
        n.onCornerHeightChange(f), i(f);
      }),
      N(n.scrollbarY, () => {
        var d;
        const f =
          ((d = n.scrollbarY) === null || d === void 0
            ? void 0
            : d.offsetWidth) || 0;
        n.onCornerWidthChange(f), c(f);
      }),
      u
        ? r.createElement(
            W.div,
            v({}, l, {
              ref: o,
              style: {
                width: a,
                height: s,
                position: 'absolute',
                right: n.dir === 'ltr' ? 0 : void 0,
                left: n.dir === 'rtl' ? 0 : void 0,
                bottom: 0,
                ...e.style,
              },
            }),
          )
        : null
    );
  });
function B(e) {
  return e ? parseInt(e, 10) : 0;
}
function me(e, o) {
  const t = e / o;
  return isNaN(t) ? 0 : t;
}
function k(e) {
  const o = me(e.viewport, e.content),
    t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    l = (e.scrollbar.size - t) * o;
  return Math.max(l, 18);
}
function cr(e, o, t, l = 'ltr') {
  const n = k(t),
    a = n / 2,
    c = o || a,
    s = n - c,
    i = t.scrollbar.paddingStart + c,
    u = t.scrollbar.size - t.scrollbar.paddingEnd - s,
    d = t.content - t.viewport,
    f = l === 'ltr' ? [0, d] : [d * -1, 0];
  return he([i, u], f)(e);
}
function oe(e, o, t = 'ltr') {
  const l = k(o),
    n = o.scrollbar.paddingStart + o.scrollbar.paddingEnd,
    a = o.scrollbar.size - n,
    c = o.content - o.viewport,
    s = a - l,
    i = t === 'ltr' ? [0, c] : [c * -1, 0],
    u = Be(e, i);
  return he([0, c], [0, s])(u);
}
function he(e, o) {
  return (t) => {
    if (e[0] === e[1] || o[0] === o[1]) return o[0];
    const l = (o[1] - o[0]) / (e[1] - e[0]);
    return o[0] + l * (t - e[0]);
  };
}
function pe(e, o) {
  return e > 0 && e < o;
}
const sr = (e, o = () => {}) => {
  let t = { left: e.scrollLeft, top: e.scrollTop },
    l = 0;
  return (
    (function n() {
      const a = { left: e.scrollLeft, top: e.scrollTop },
        c = t.left !== a.left,
        s = t.top !== a.top;
      (c || s) && o(), (t = a), (l = window.requestAnimationFrame(n));
    })(),
    () => window.cancelAnimationFrame(l)
  );
};
function q(e, o) {
  const t = R(e),
    l = r.useRef(0);
  return (
    r.useEffect(() => () => window.clearTimeout(l.current), []),
    r.useCallback(() => {
      window.clearTimeout(l.current), (l.current = window.setTimeout(t, o));
    }, [t, o])
  );
}
function N(e, o) {
  const t = R(o);
  ye(() => {
    let l = 0;
    if (e) {
      const n = new ResizeObserver(() => {
        cancelAnimationFrame(l), (l = window.requestAnimationFrame(t));
      });
      return (
        n.observe(e),
        () => {
          window.cancelAnimationFrame(l), n.unobserve(e);
        }
      );
    }
  }, [e, t]);
}
const ir = qe,
  dr = Ze,
  ne = Je,
  le = or,
  ur = lr,
  ve = r.forwardRef((e, o) => {
    const { rest: t, ...l } = Ue(e),
      [n, a] = Ce(l),
      {
        asChild: c,
        children: s,
        className: i,
        style: u,
        type: d,
        scrollHideDelay: f = d !== 'scroll' ? 0 : void 0,
        dir: b,
        size: h = H.size.default,
        radius: $ = H.radius.default,
        scrollbars: E = H.scrollbars.default,
        ...z
      } = t;
    return r.createElement(
      ir,
      {
        type: d,
        scrollHideDelay: f,
        className: S('rt-ScrollAreaRoot', n, i),
        style: Te(a, u),
        asChild: c,
      },
      Re({ asChild: c, children: s }, (x) =>
        r.createElement(
          r.Fragment,
          null,
          r.createElement(
            dr,
            { ...z, ref: o, className: 'rt-ScrollAreaViewport' },
            x,
          ),
          r.createElement('div', {
            className: 'rt-ScrollAreaViewportFocusRing',
          }),
          E !== 'vertical'
            ? r.createElement(
                ne,
                {
                  'data-radius': $,
                  orientation: 'horizontal',
                  className: S(
                    'rt-ScrollAreaScrollbar',
                    K({
                      className: 'rt-r-size',
                      value: h,
                      propValues: H.size.values,
                    }),
                  ),
                },
                r.createElement(le, { className: 'rt-ScrollAreaThumb' }),
              )
            : null,
          E !== 'horizontal'
            ? r.createElement(
                ne,
                {
                  'data-radius': $,
                  orientation: 'vertical',
                  className: S(
                    'rt-ScrollAreaScrollbar',
                    K({
                      className: 'rt-r-size',
                      value: h,
                      propValues: H.size.values,
                    }),
                  ),
                },
                r.createElement(le, { className: 'rt-ScrollAreaThumb' }),
              )
            : null,
          E === 'both'
            ? r.createElement(ur, { className: 'rt-ScrollAreaCorner' })
            : null,
        ),
      ),
    );
  });
ve.displayName = 'ScrollArea';
const $e = r.forwardRef((e, o) => {
  const { asChild: t, className: l, ...n } = D(e, Xe, ce);
  return r.createElement(t ? Pe : 'div', {
    ...n,
    ref: o,
    className: S('rt-Inset', l),
  });
});
$e.displayName = 'Inset';
const Se = r.forwardRef((e, o) => {
  const { layout: t, ...l } = Z,
    { className: n, children: a, layout: c, ...s } = D(e, l, ce),
    i = K({
      value: c,
      className: Z.layout.className,
      propValues: Z.layout.values,
    });
  return r.createElement(
    'div',
    { ref: o, className: S('rt-TableRoot', n), ...s },
    r.createElement(
      ve,
      null,
      r.createElement('table', { className: S('rt-TableRootTable', i) }, a),
    ),
  );
});
Se.displayName = 'Table.Root';
const we = r.forwardRef(({ className: e, ...o }, t) =>
  r.createElement('thead', { ...o, ref: t, className: S('rt-TableHeader', e) }),
);
we.displayName = 'Table.Header';
const ge = r.forwardRef(({ className: e, ...o }, t) =>
  r.createElement('tbody', { ...o, ref: t, className: S('rt-TableBody', e) }),
);
ge.displayName = 'Table.Body';
const I = r.forwardRef((e, o) => {
  const { className: t, ...l } = D(e, Ae);
  return r.createElement('tr', {
    ...l,
    ref: o,
    className: S('rt-TableRow', t),
  });
});
I.displayName = 'Table.Row';
const j = r.forwardRef((e, o) => {
  const { className: t, ...l } = D(e, re);
  return r.createElement('td', {
    className: S('rt-TableCell', t),
    ref: o,
    ...l,
  });
});
j.displayName = 'Table.Cell';
const U = r.forwardRef((e, o) => {
  const { className: t, ...l } = D(e, re);
  return r.createElement('th', {
    className: S('rt-TableCell', 'rt-TableColumnHeaderCell', t),
    scope: 'col',
    ref: o,
    ...l,
  });
});
U.displayName = 'Table.ColumnHeaderCell';
const ee = r.forwardRef((e, o) => {
  const { className: t, ...l } = D(e, re);
  return r.createElement('th', {
    className: S('rt-TableCell', 'rt-TableRowHeaderCell', t),
    scope: 'row',
    ref: o,
    ...l,
  });
});
ee.displayName = 'Table.RowHeaderCell';
const vr = () =>
  m.jsxs(De, {
    children: [
      m.jsx(ze, {
        children: m.jsx(J, { color: 'red', children: 'Delete users' }),
      }),
      m.jsxs(Le, {
        maxWidth: '500px',
        children: [
          m.jsx(He, { children: 'Delete Users' }),
          m.jsx(je, {
            size: '2',
            children:
              'Are you sure you want to delete these users? This action is permanent and cannot be undone.',
          }),
          m.jsx($e, {
            side: 'x',
            my: '5',
            children: m.jsxs(Se, {
              children: [
                m.jsx(we, {
                  children: m.jsxs(I, {
                    children: [
                      m.jsx(U, { children: 'Full name' }),
                      m.jsx(U, { children: 'Email' }),
                      m.jsx(U, { children: 'Group' }),
                    ],
                  }),
                }),
                m.jsxs(ge, {
                  children: [
                    m.jsxs(I, {
                      children: [
                        m.jsx(ee, { children: 'Danilo Sousa' }),
                        m.jsx(j, { children: 'danilo@example.com' }),
                        m.jsx(j, { children: 'Developer' }),
                      ],
                    }),
                    m.jsxs(I, {
                      children: [
                        m.jsx(ee, { children: 'Zahra Ambessa' }),
                        m.jsx(j, { children: 'zahra@example.com' }),
                        m.jsx(j, { children: 'Admin' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          m.jsxs(Ne, {
            gap: '3',
            justify: 'end',
            children: [
              m.jsx(We, {
                children: m.jsx(J, {
                  variant: 'soft',
                  color: 'gray',
                  children: 'Cancel',
                }),
              }),
              m.jsx(Me, {
                children: m.jsx(J, { color: 'red', children: 'Delete users' }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
export { vr as Test };
