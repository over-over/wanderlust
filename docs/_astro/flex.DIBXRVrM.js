import { r as c, c as ne, g as ae } from './index.DFz9pK5G.js';
var L = { exports: {} },
  _ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oe = c,
  ie = Symbol.for('react.element'),
  le = Symbol.for('react.fragment'),
  ce = Object.prototype.hasOwnProperty,
  ue = oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  pe = { key: !0, ref: !0, __self: !0, __source: !0 };
function I(e, t, s) {
  var n,
    a = {},
    r = null,
    o = null;
  s !== void 0 && (r = '' + s),
    t.key !== void 0 && (r = '' + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (n in t) ce.call(t, n) && !pe.hasOwnProperty(n) && (a[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) a[n] === void 0 && (a[n] = t[n]);
  return {
    $$typeof: ie,
    type: e,
    key: r,
    ref: o,
    props: a,
    _owner: ue.current,
  };
}
_.Fragment = le;
_.jsx = I;
_.jsxs = I;
L.exports = _;
var wt = L.exports;
function V() {
  return (
    (V = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var n in s)
              Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
          }
          return e;
        }),
    V.apply(this, arguments)
  );
}
function me(e, t) {
  typeof e == 'function' ? e(t) : e != null && (e.current = t);
}
function q(...e) {
  return (t) => e.forEach((s) => me(s, t));
}
function Pt(...e) {
  return c.useCallback(q(...e), e);
}
const j = c.forwardRef((e, t) => {
  const { children: s, ...n } = e,
    a = c.Children.toArray(s),
    r = a.find(de);
  if (r) {
    const o = r.props.children,
      i = a.map((l) =>
        l === r
          ? c.Children.count(o) > 1
            ? c.Children.only(null)
            : c.isValidElement(o)
              ? o.props.children
              : null
          : l,
      );
    return c.createElement(
      A,
      V({}, n, { ref: t }),
      c.isValidElement(o) ? c.cloneElement(o, void 0, i) : null,
    );
  }
  return c.createElement(A, V({}, n, { ref: t }), s);
});
j.displayName = 'Slot';
const A = c.forwardRef((e, t) => {
  const { children: s, ...n } = e;
  return c.isValidElement(s)
    ? c.cloneElement(s, { ...ve(n, s.props), ref: t ? q(t, s.ref) : s.ref })
    : c.Children.count(s) > 1
      ? c.Children.only(null)
      : null;
});
A.displayName = 'SlotClone';
const fe = ({ children: e }) => c.createElement(c.Fragment, null, e);
function de(e) {
  return c.isValidElement(e) && e.type === fe;
}
function ve(e, t) {
  const s = { ...t };
  for (const n in t) {
    const a = e[n],
      r = t[n];
    /^on[A-Z]/.test(n)
      ? a && r
        ? (s[n] = (...i) => {
            r(...i), a(...i);
          })
        : a && (s[n] = a)
      : n === 'style'
        ? (s[n] = { ...a, ...r })
        : n === 'className' && (s[n] = [a, r].filter(Boolean).join(' '));
  }
  return { ...e, ...s };
}
const ye = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ],
  Et = ye.reduce((e, t) => {
    const s = c.forwardRef((n, a) => {
      const { asChild: r, ...o } = n,
        i = r ? j : t;
      return (
        c.useEffect(() => {
          window[Symbol.for('radix-ui')] = !0;
        }, []),
        c.createElement(i, V({}, o, { ref: a }))
      );
    });
    return (s.displayName = `Primitive.${t}`), { ...e, [t]: s };
  }, {});
function Ct(e, t) {
  e && ne.flushSync(() => e.dispatchEvent(t));
}
var Y = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function s() {
      for (var r = '', o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        i && (r = a(r, n(i)));
      }
      return r;
    }
    function n(r) {
      if (typeof r == 'string' || typeof r == 'number') return r;
      if (typeof r != 'object') return '';
      if (Array.isArray(r)) return s.apply(null, r);
      if (
        r.toString !== Object.prototype.toString &&
        !r.toString.toString().includes('[native code]')
      )
        return r.toString();
      var o = '';
      for (var i in r) t.call(r, i) && r[i] && (o = a(o, i));
      return o;
    }
    function a(r, o) {
      return o ? (r ? r + ' ' + o : r + o) : r;
    }
    e.exports ? ((s.default = s), (e.exports = s)) : (window.classNames = s);
  })();
})(Y);
var $e = Y.exports;
const $ = ae($e);
function Vt(e, t) {
  const s = c.createContext(t);
  function n(r) {
    const { children: o, ...i } = r,
      l = c.useMemo(() => i, Object.values(i));
    return c.createElement(s.Provider, { value: l }, o);
  }
  function a(r) {
    const o = c.useContext(s);
    if (o) return o;
    if (t !== void 0) return t;
    throw new Error(`\`${r}\` must be used within \`${e}\``);
  }
  return (n.displayName = e + 'Provider'), [n, a];
}
function St(e, t = []) {
  let s = [];
  function n(r, o) {
    const i = c.createContext(o),
      l = s.length;
    s = [...s, o];
    function p(d) {
      const { scope: m, children: w, ...h } = d,
        se = m?.[e][l] || i,
        re = c.useMemo(() => h, Object.values(h));
      return c.createElement(se.Provider, { value: re }, w);
    }
    function f(d, m) {
      const w = m?.[e][l] || i,
        h = c.useContext(w);
      if (h) return h;
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${r}\``);
    }
    return (p.displayName = r + 'Provider'), [p, f];
  }
  const a = () => {
    const r = s.map((o) => c.createContext(o));
    return function (i) {
      const l = i?.[e] || r;
      return c.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: l } }), [i, l]);
    };
  };
  return (a.scopeName = e), [n, ge(a, ...t)];
}
function ge(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const s = () => {
    const n = e.map((a) => ({ useScope: a(), scopeName: a.scopeName }));
    return function (r) {
      const o = n.reduce((i, { useScope: l, scopeName: p }) => {
        const d = l(r)[`__scope${p}`];
        return { ...i, ...d };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return (s.scopeName = t.scopeName), s;
}
const jt = globalThis?.document ? c.useLayoutEffect : () => {};
function zt(e) {
  const t = c.useRef(e);
  return (
    c.useEffect(() => {
      t.current = e;
    }),
    c.useMemo(
      () =>
        (...s) => {
          var n;
          return (n = t.current) === null || n === void 0
            ? void 0
            : n.call(t, ...s);
        },
      [],
    )
  );
}
const T = ['initial', 'xs', 'sm', 'md', 'lg', 'xl'],
  v = { asChild: { type: 'boolean' } },
  G = [
    'gray',
    'gold',
    'bronze',
    'brown',
    'yellow',
    'amber',
    'orange',
    'tomato',
    'red',
    'ruby',
    'crimson',
    'pink',
    'plum',
    'purple',
    'violet',
    'iris',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'jade',
    'green',
    'grass',
    'lime',
    'mint',
    'sky',
  ],
  _t = ['auto', 'gray', 'mauve', 'slate', 'sage', 'olive', 'sand'],
  g = { color: { type: 'enum', values: G, default: void 0 } },
  Ot = { color: { type: 'enum', values: G, default: '' } },
  W = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  J = {
    gap: {
      type: 'enum | string',
      className: 'rt-r-gap',
      customProperties: ['--gap'],
      values: W,
      responsive: !0,
    },
    gapX: {
      type: 'enum | string',
      className: 'rt-r-cg',
      customProperties: ['--column-gap'],
      values: W,
      responsive: !0,
    },
    gapY: {
      type: 'enum | string',
      className: 'rt-r-rg',
      customProperties: ['--row-gap'],
      values: W,
      responsive: !0,
    },
  },
  O = {
    height: {
      type: 'string',
      className: 'rt-r-h',
      customProperties: ['--height'],
      responsive: !0,
    },
    minHeight: {
      type: 'string',
      className: 'rt-r-min-h',
      customProperties: ['--min-height'],
      responsive: !0,
    },
    maxHeight: {
      type: 'string',
      className: 'rt-r-max-h',
      customProperties: ['--max-height'],
      responsive: !0,
    },
  },
  z = {
    highContrast: {
      type: 'boolean',
      className: 'rt-high-contrast',
      default: void 0,
    },
  },
  N = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  E = {
    p: {
      type: 'enum | string',
      className: 'rt-r-p',
      customProperties: ['--p'],
      values: N,
      responsive: !0,
    },
    px: {
      type: 'enum | string',
      className: 'rt-r-px',
      customProperties: ['--pl', '--pr'],
      values: N,
      responsive: !0,
    },
    py: {
      type: 'enum | string',
      className: 'rt-r-py',
      customProperties: ['--pt', '--pb'],
      values: N,
      responsive: !0,
    },
    pt: {
      type: 'enum | string',
      className: 'rt-r-pt',
      customProperties: ['--pt'],
      values: N,
      responsive: !0,
    },
    pr: {
      type: 'enum | string',
      className: 'rt-r-pr',
      customProperties: ['--pr'],
      values: N,
      responsive: !0,
    },
    pb: {
      type: 'enum | string',
      className: 'rt-r-pb',
      customProperties: ['--pb'],
      values: N,
      responsive: !0,
    },
    pl: {
      type: 'enum | string',
      className: 'rt-r-pl',
      customProperties: ['--pl'],
      values: N,
      responsive: !0,
    },
  },
  u = {
    width: {
      type: 'string',
      className: 'rt-r-w',
      customProperties: ['--width'],
      responsive: !0,
    },
    minWidth: {
      type: 'string',
      className: 'rt-r-min-w',
      customProperties: ['--min-width'],
      responsive: !0,
    },
    maxWidth: {
      type: 'string',
      className: 'rt-r-max-w',
      customProperties: ['--max-width'],
      responsive: !0,
    },
  },
  k = ['visible', 'hidden', 'clip', 'scroll', 'auto'],
  he = ['static', 'relative', 'absolute', 'fixed', 'sticky'],
  P = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '-1',
    '-2',
    '-3',
    '-4',
    '-5',
    '-6',
    '-7',
    '-8',
    '-9',
  ],
  Ne = ['0', '1'],
  be = ['0', '1'],
  xe = {
    ...E,
    ...u,
    ...O,
    position: {
      type: 'enum',
      className: 'rt-r-position',
      values: he,
      responsive: !0,
    },
    inset: {
      type: 'enum | string',
      className: 'rt-r-inset',
      customProperties: ['--inset'],
      values: P,
      responsive: !0,
    },
    top: {
      type: 'enum | string',
      className: 'rt-r-top',
      customProperties: ['--top'],
      values: P,
      responsive: !0,
    },
    right: {
      type: 'enum | string',
      className: 'rt-r-right',
      customProperties: ['--right'],
      values: P,
      responsive: !0,
    },
    bottom: {
      type: 'enum | string',
      className: 'rt-r-bottom',
      customProperties: ['--bottom'],
      values: P,
      responsive: !0,
    },
    left: {
      type: 'enum | string',
      className: 'rt-r-left',
      customProperties: ['--left'],
      values: P,
      responsive: !0,
    },
    overflow: {
      type: 'enum',
      className: 'rt-r-overflow',
      values: k,
      responsive: !0,
    },
    overflowX: {
      type: 'enum',
      className: 'rt-r-ox',
      values: k,
      responsive: !0,
    },
    overflowY: {
      type: 'enum',
      className: 'rt-r-oy',
      values: k,
      responsive: !0,
    },
    flexBasis: {
      type: 'string',
      className: 'rt-r-fb',
      customProperties: ['--flex-basis'],
      responsive: !0,
    },
    flexShrink: {
      type: 'enum | string',
      className: 'rt-r-fs',
      customProperties: ['--flex-shrink'],
      values: Ne,
      responsive: !0,
    },
    flexGrow: {
      type: 'enum | string',
      className: 'rt-r-fg',
      customProperties: ['--flex-grow'],
      values: be,
      responsive: !0,
    },
    gridColumn: {
      type: 'string',
      className: 'rt-r-gc',
      customProperties: ['--grid-column'],
      responsive: !0,
    },
    gridColumnStart: {
      type: 'string',
      className: 'rt-r-gcs',
      customProperties: ['--grid-column-start'],
      responsive: !0,
    },
    gridColumnEnd: {
      type: 'string',
      className: 'rt-r-gce',
      customProperties: ['--grid-column-end'],
      responsive: !0,
    },
    gridRow: {
      type: 'string',
      className: 'rt-r-gr',
      customProperties: ['--grid-row'],
      responsive: !0,
    },
    gridRowStart: {
      type: 'string',
      className: 'rt-r-grs',
      customProperties: ['--grid-row-start'],
      responsive: !0,
    },
    gridRowEnd: {
      type: 'string',
      className: 'rt-r-gre',
      customProperties: ['--grid-row-end'],
      responsive: !0,
    },
  },
  we = ['normal', 'start', 'end', 'both'],
  D = {
    trim: { type: 'enum', className: 'rt-r-lt', values: we, responsive: !0 },
  },
  b = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '-1',
    '-2',
    '-3',
    '-4',
    '-5',
    '-6',
    '-7',
    '-8',
    '-9',
  ],
  R = {
    m: {
      type: 'enum | string',
      values: b,
      responsive: !0,
      className: 'rt-r-m',
      customProperties: ['--m'],
    },
    mx: {
      type: 'enum | string',
      values: b,
      responsive: !0,
      className: 'rt-r-mx',
      customProperties: ['--ml', '--mr'],
    },
    my: {
      type: 'enum | string',
      values: b,
      responsive: !0,
      className: 'rt-r-my',
      customProperties: ['--mt', '--mb'],
    },
    mt: {
      type: 'enum | string',
      values: b,
      responsive: !0,
      className: 'rt-r-mt',
      customProperties: ['--mt'],
    },
    mr: {
      type: 'enum | string',
      values: b,
      responsive: !0,
      className: 'rt-r-mr',
      customProperties: ['--mr'],
    },
    mb: {
      type: 'enum | string',
      values: b,
      responsive: !0,
      className: 'rt-r-mb',
      customProperties: ['--mb'],
    },
    ml: {
      type: 'enum | string',
      values: b,
      responsive: !0,
      className: 'rt-r-ml',
      customProperties: ['--ml'],
    },
  },
  Pe = ['none', 'small', 'medium', 'large', 'full'],
  Ee = { radius: { type: 'enum', values: Pe, default: void 0 } },
  Ce = ['left', 'center', 'right'],
  U = {
    align: { type: 'enum', className: 'rt-r-ta', values: Ce, responsive: !0 },
  },
  Ve = ['wrap', 'nowrap', 'pretty', 'balance'],
  X = {
    wrap: { type: 'enum', className: 'rt-r-tw', values: Ve, responsive: !0 },
  },
  K = { truncate: { type: 'boolean', className: 'rt-truncate' } },
  Se = ['light', 'regular', 'medium', 'bold'],
  Z = {
    weight: {
      type: 'enum',
      className: 'rt-r-weight',
      values: Se,
      responsive: !0,
    },
  },
  je = ['div', 'span'],
  ze = ['none', 'inline-grid', 'grid'],
  _e = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  Oe = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  Re = ['row', 'column', 'dense', 'row-dense', 'column-dense'],
  We = ['start', 'center', 'end', 'baseline', 'stretch'],
  ke = ['start', 'center', 'end', 'between'],
  S = {
    as: { type: 'enum', values: je, default: 'div' },
    ...v,
    display: {
      type: 'enum',
      className: 'rt-r-display',
      values: ze,
      responsive: !0,
    },
    columns: {
      type: 'enum | string',
      className: 'rt-r-gtc',
      customProperties: ['--grid-template-columns'],
      values: _e,
      parseValue: B,
      responsive: !0,
    },
    rows: {
      type: 'enum | string',
      className: 'rt-r-gtr',
      customProperties: ['--grid-template-rows'],
      values: Oe,
      parseValue: B,
      responsive: !0,
    },
    flow: { type: 'enum', className: 'rt-r-gaf', values: Re, responsive: !0 },
    align: { type: 'enum', className: 'rt-r-ai', values: We, responsive: !0 },
    justify: {
      type: 'enum',
      className: 'rt-r-jc',
      values: ke,
      parseValue: Ae,
      responsive: !0,
    },
    ...J,
  };
function B(e) {
  return S.columns.values.includes(e)
    ? e
    : e?.match(/^\d+$/)
      ? `repeat(${e}, minmax(0, 1fr))`
      : e;
}
function Ae(e) {
  return e === 'between' ? 'space-between' : e;
}
const He = ['1', '2', '3'],
  Te = ['surface', 'classic'];
({ ...v, ...g, ...z, columns: { ...S.columns }, gap: { ...S.gap } });
const De = ['horizontal', 'vertical'],
  Fe = ['1', '2', '3'];
({ ...D.trim });
({ ...u, ...g, ...z });
const Be = ['div', 'span'],
  Me = ['none', 'inline-flex', 'flex'],
  Le = ['row', 'column', 'row-reverse', 'column-reverse'],
  Ie = ['start', 'center', 'end', 'baseline', 'stretch'],
  qe = ['start', 'center', 'end', 'between'],
  Ye = ['nowrap', 'wrap', 'wrap-reverse'],
  Q = {
    as: { type: 'enum', values: Be, default: 'div' },
    ...v,
    display: {
      type: 'enum',
      className: 'rt-r-display',
      values: Me,
      responsive: !0,
    },
    direction: {
      type: 'enum',
      className: 'rt-r-fd',
      values: Le,
      responsive: !0,
    },
    align: { type: 'enum', className: 'rt-r-ai', values: Ie, responsive: !0 },
    justify: {
      type: 'enum',
      className: 'rt-r-jc',
      values: qe,
      parseValue: Ge,
      responsive: !0,
    },
    wrap: { type: 'enum', className: 'rt-r-fw', values: Ye, responsive: !0 },
    ...J,
  };
function Ge(e) {
  return e === 'between' ? 'space-between' : e;
}
const Je = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  Ue = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  Xe = {
    as: { type: 'enum', values: Je, default: 'h1' },
    ...v,
    size: {
      type: 'enum',
      className: 'rt-r-size',
      values: Ue,
      default: '6',
      responsive: !0,
    },
    ...Z,
    ...U,
    ...D,
    ...K,
    ...X,
    ...g,
    ...z,
  },
  Ke = ['1', '2', '3'];
({
  ...v,
  width: u.width,
  minWidth: u.minWidth,
  maxWidth: { ...u.maxWidth },
  ...O,
});
const Ze = ['1', '2', '3', '4'];
({
  ...v,
  width: u.width,
  minWidth: u.minWidth,
  maxWidth: { ...u.maxWidth },
  ...O,
});
const Qe = ['1', '2', '3'],
  et = ['surface', 'classic'];
({ ...v, ...g, ...z, columns: { ...S.columns }, gap: { ...S.gap } });
const tt = ['horizontal', 'vertical'],
  st = ['1', '2', '3', '4'];
({ ...g.color });
({ ...u, ...O });
const rt = ['1', '2', '3'],
  nt = ['surface', 'ghost'],
  at = ['auto', 'fixed'],
  Rt = {
    size: {
      type: 'enum',
      className: 'rt-r-size',
      values: rt,
      default: '2',
      responsive: !0,
    },
    variant: {
      type: 'enum',
      className: 'rt-variant',
      values: nt,
      default: 'ghost',
    },
    layout: { type: 'enum', className: 'rt-r-tl', values: at, responsive: !0 },
  },
  ot = ['start', 'center', 'end', 'baseline'],
  Wt = {
    align: {
      type: 'enum',
      className: 'rt-r-va',
      values: ot,
      parseValue: it,
      responsive: !0,
    },
  };
function it(e) {
  return {
    baseline: 'baseline',
    start: 'top',
    center: 'middle',
    end: 'bottom',
  }[e];
}
const lt = ['start', 'center', 'end'],
  kt = {
    justify: {
      type: 'enum',
      className: 'rt-r-ta',
      values: lt,
      parseValue: ct,
      responsive: !0,
    },
    ...u,
    ...E,
  };
function ct(e) {
  return { start: 'left', center: 'center', end: 'right' }[e];
}
const ut = ['1', '2', '3'],
  pt = ['classic', 'surface', 'soft'],
  At = {
    size: {
      type: 'enum',
      className: 'rt-r-size',
      values: ut,
      default: '2',
      responsive: !0,
    },
    variant: {
      type: 'enum',
      className: 'rt-variant',
      values: pt,
      default: 'surface',
    },
    ...g,
    ...Ee,
  },
  mt = ['left', 'right'],
  Ht = {
    side: { type: 'enum', values: mt },
    ...g,
    gap: Q.gap,
    px: E.px,
    pl: E.pl,
    pr: E.pr,
  },
  ft = ['span', 'div', 'label', 'p'],
  dt = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  vt = {
    as: { type: 'enum', values: ft, default: 'span' },
    ...v,
    size: { type: 'enum', className: 'rt-r-size', values: dt, responsive: !0 },
    ...Z,
    ...U,
    ...D,
    ...K,
    ...X,
    ...g,
    ...z,
  };
u.width, u.minWidth, { ...u.maxWidth };
const yt = ['1', '2', '3', '4'],
  Tt = {
    ...v,
    size: {
      type: 'enum',
      className: 'rt-r-size',
      values: yt,
      default: '3',
      responsive: !0,
    },
    width: u.width,
    minWidth: u.minWidth,
    maxWidth: { ...u.maxWidth, default: '600px' },
  };
function ee(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function C(e) {
  return typeof e == 'object' && Object.keys(e).some((t) => T.includes(t));
}
function y({ className: e, customProperties: t, ...s }) {
  const n = te({ allowArbitraryValues: !0, className: e, ...s }),
    a = $t({ customProperties: t, ...s });
  return [n, a];
}
function te({
  allowArbitraryValues: e,
  value: t,
  className: s,
  propValues: n,
  parseValue: a = (r) => r,
}) {
  const r = [];
  if (t) {
    if (typeof t == 'string' && n.includes(t)) return M(s, t, a);
    if (C(t)) {
      const o = t;
      for (const i in o) {
        if (!ee(o, i) || !T.includes(i)) continue;
        const l = o[i];
        if (l !== void 0) {
          if (n.includes(l)) {
            const p = M(s, l, a),
              f = i === 'initial' ? p : `${i}:${p}`;
            r.push(f);
          } else if (e) {
            const p = i === 'initial' ? s : `${i}:${s}`;
            r.push(p);
          }
        }
      }
      return r.join(' ');
    }
    if (e) return s;
  }
}
function M(e, t, s) {
  const n = e ? '-' : '',
    a = s(t),
    r = a?.startsWith('-'),
    o = r ? '-' : '',
    i = r ? a?.substring(1) : a;
  return `${o}${e}${n}${i}`;
}
function $t({
  customProperties: e,
  value: t,
  propValues: s,
  parseValue: n = (a) => a,
}) {
  let a = {};
  if (!(!t || (typeof t == 'string' && s.includes(t)))) {
    if (
      (typeof t == 'string' && (a = Object.fromEntries(e.map((r) => [r, t]))),
      C(t))
    ) {
      const r = t;
      for (const o in r) {
        if (!ee(r, o) || !T.includes(o)) continue;
        const i = r[o];
        if (!s.includes(i))
          for (const l of e)
            a = { [o === 'initial' ? l : `${l}-${o}`]: i, ...a };
      }
    }
    for (const r in a) {
      const o = a[r];
      o !== void 0 && (a[r] = n(o));
    }
    return a;
  }
}
function H(...e) {
  let t = {};
  for (const s of e) s && (t = { ...t, ...s });
  return Object.keys(t).length ? t : void 0;
}
function gt(...e) {
  return Object.assign({}, ...e);
}
function F(e, ...t) {
  let s, n;
  const a = { ...e },
    r = gt(...t);
  for (const o in r) {
    let i = a[o];
    const l = r[o];
    if (
      (l.default !== void 0 && i === void 0 && (i = l.default),
      l.type === 'enum' &&
        ![l.default, ...l.values].includes(i) &&
        !C(i) &&
        (i = l.default),
      (a[o] = i),
      'className' in l && l.className)
    ) {
      delete a[o];
      const p = 'responsive' in l;
      if (!i || (C(i) && !p)) continue;
      if (
        (C(i) &&
          (l.default !== void 0 &&
            i.initial === void 0 &&
            (i.initial = l.default),
          l.type === 'enum' &&
            ([l.default, ...l.values].includes(i.initial) ||
              (i.initial = l.default))),
        l.type === 'enum')
      ) {
        const f = te({
          allowArbitraryValues: !1,
          value: i,
          className: l.className,
          propValues: l.values,
          parseValue: l.parseValue,
        });
        s = $(s, f);
        continue;
      }
      if (l.type === 'string' || l.type === 'enum | string') {
        const f = l.type === 'string' ? [] : l.values,
          [d, m] = y({
            className: l.className,
            customProperties: l.customProperties,
            propValues: f,
            parseValue: l.parseValue,
            value: i,
          });
        (n = H(n, m)), (s = $(s, d));
        continue;
      }
      if (l.type === 'boolean' && i) {
        s = $(s, l.className);
        continue;
      }
    }
  }
  return (a.className = $(s, e.className)), (a.style = H(n, e.style)), a;
}
const x = R.m.values;
function Dt(e) {
  const [t, s] = y({
      className: 'rt-r-m',
      customProperties: ['--margin'],
      propValues: x,
      value: e.m,
    }),
    [n, a] = y({
      className: 'rt-r-mx',
      customProperties: ['--margin-left', '--margin-right'],
      propValues: x,
      value: e.mx,
    }),
    [r, o] = y({
      className: 'rt-r-my',
      customProperties: ['--margin-top', '--margin-bottom'],
      propValues: x,
      value: e.my,
    }),
    [i, l] = y({
      className: 'rt-r-mt',
      customProperties: ['--margin-top'],
      propValues: x,
      value: e.mt,
    }),
    [p, f] = y({
      className: 'rt-r-mr',
      customProperties: ['--margin-right'],
      propValues: x,
      value: e.mr,
    }),
    [d, m] = y({
      className: 'rt-r-mb',
      customProperties: ['--margin-bottom'],
      propValues: x,
      value: e.mb,
    }),
    [w, h] = y({
      className: 'rt-r-ml',
      customProperties: ['--margin-left'],
      propValues: x,
      value: e.ml,
    });
  return [$(t, n, r, i, p, d, w), H(s, a, o, l, f, m, h)];
}
function Ft(e, t) {
  const { asChild: s, children: n } = e;
  if (!s) return typeof t == 'function' ? t(n) : t;
  const a = c.Children.only(n);
  return c.cloneElement(a, {
    children: typeof t == 'function' ? t(a.props.children) : t,
  });
}
const ht = c.forwardRef((e, t) => {
  const {
    children: s,
    className: n,
    asChild: a,
    as: r = 'h1',
    color: o,
    ...i
  } = F(e, Xe, R);
  return c.createElement(
    j,
    { 'data-accent-color': o, ...i, ref: t, className: $('rt-Heading', n) },
    a ? s : c.createElement(r, null, s),
  );
});
ht.displayName = 'Heading';
const Nt = c.forwardRef((e, t) => {
  const {
    children: s,
    className: n,
    asChild: a,
    as: r = 'span',
    color: o,
    ...i
  } = F(e, vt, R);
  return c.createElement(
    j,
    { 'data-accent-color': o, ...i, ref: t, className: $('rt-Text', n) },
    a ? s : c.createElement(r, null, s),
  );
});
Nt.displayName = 'Text';
const bt = c.forwardRef((e, t) => {
  const { className: s, asChild: n, as: a = 'div', ...r } = F(e, Q, xe, R);
  return c.createElement(n ? j : a, {
    ...r,
    ref: t,
    className: $('rt-Flex', s),
  });
});
bt.displayName = 'Flex';
export {
  St as $,
  K as A,
  X as B,
  g as C,
  At as D,
  q as E,
  Ht as F,
  O as G,
  u as H,
  Ct as I,
  Vt as J,
  fe as K,
  G as L,
  _t as M,
  Pe as N,
  Tt as O,
  V as _,
  z as a,
  Et as b,
  zt as c,
  jt as d,
  Ft as e,
  R as f,
  j as g,
  bt as h,
  ht as i,
  wt as j,
  Pt as k,
  Dt as l,
  H as m,
  te as n,
  v as o,
  Rt as p,
  Wt as q,
  Ee as r,
  Ot as s,
  Nt as t,
  xe as u,
  F as v,
  kt as w,
  Z as x,
  $ as y,
  D as z,
};
