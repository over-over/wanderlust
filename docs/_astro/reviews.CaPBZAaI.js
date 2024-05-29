import {
  o as $,
  s as L,
  a as R,
  r as j,
  $ as z,
  b as p,
  _ as g,
  c as I,
  d as N,
  v as b,
  y as f,
  e as k,
  f as v,
  g as A,
  u as M,
  j as o,
  h,
  i as F,
  t as m,
} from './flex.DIBXRVrM.js';
import { s as u } from './index.e3a5107b.5N7Nn848.js';
import { r as a } from './index.DFz9pK5G.js';
import { n as P } from './container.DA3p9B4S.js';
const T = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  B = ['solid', 'soft'],
  V = {
    ...$,
    size: {
      type: 'enum',
      className: 'rt-r-size',
      values: T,
      default: '3',
      responsive: !0,
    },
    variant: {
      type: 'enum',
      className: 'rt-variant',
      values: B,
      default: 'soft',
    },
    ...L,
    ...R,
    ...j,
    fallback: { type: 'ReactNode', required: !0 },
  },
  q = ['1', '2', '3', '4', '5'],
  G = ['surface', 'classic', 'ghost'],
  K = {
    ...$,
    size: {
      type: 'enum',
      className: 'rt-r-size',
      values: q,
      default: '1',
      responsive: !0,
    },
    variant: {
      type: 'enum',
      className: 'rt-variant',
      values: G,
      default: 'surface',
    },
  },
  D = ['1', '2', '3', '4'],
  H = ['none', 'initial'],
  J = {
    ...$,
    size: {
      type: 'enum',
      className: 'rt-r-size',
      values: D,
      default: '3',
      responsive: !0,
    },
    display: {
      type: 'enum',
      className: 'rt-r-display',
      values: H,
      parseValue: O,
      responsive: !0,
    },
  };
function O(e) {
  return e === 'initial' ? 'block' : e;
}
const y = 'Avatar',
  [Q, le] = z(y),
  [U, S] = Q(y),
  W = a.forwardRef((e, n) => {
    const { __scopeAvatar: s, ...t } = e,
      [r, c] = a.useState('idle');
    return a.createElement(
      U,
      { scope: s, imageLoadingStatus: r, onImageLoadingStatusChange: c },
      a.createElement(p.span, g({}, t, { ref: n })),
    );
  }),
  X = 'AvatarImage',
  Y = a.forwardRef((e, n) => {
    const {
        __scopeAvatar: s,
        src: t,
        onLoadingStatusChange: r = () => {},
        ...c
      } = e,
      d = S(X, s),
      i = ae(t),
      l = I((x) => {
        r(x), d.onImageLoadingStatusChange(x);
      });
    return (
      N(() => {
        i !== 'idle' && l(i);
      }, [i, l]),
      i === 'loaded'
        ? a.createElement(p.img, g({}, c, { ref: n, src: t }))
        : null
    );
  }),
  Z = 'AvatarFallback',
  ee = a.forwardRef((e, n) => {
    const { __scopeAvatar: s, delayMs: t, ...r } = e,
      c = S(Z, s),
      [d, i] = a.useState(t === void 0);
    return (
      a.useEffect(() => {
        if (t !== void 0) {
          const l = window.setTimeout(() => i(!0), t);
          return () => window.clearTimeout(l);
        }
      }, [t]),
      d && c.imageLoadingStatus !== 'loaded'
        ? a.createElement(p.span, g({}, r, { ref: n }))
        : null
    );
  });
function ae(e) {
  const [n, s] = a.useState('idle');
  return (
    N(() => {
      if (!e) {
        s('error');
        return;
      }
      let t = !0;
      const r = new window.Image(),
        c = (d) => () => {
          t && s(d);
        };
      return (
        s('loading'),
        (r.onload = c('loaded')),
        (r.onerror = c('error')),
        (r.src = e),
        () => {
          t = !1;
        }
      );
    }, [e]),
    n
  );
}
const te = W,
  se = Y,
  re = ee,
  w = a.forwardRef((e, n) => {
    const {
      asChild: s,
      children: t,
      className: r,
      style: c,
      color: d,
      radius: i,
      ...l
    } = b(e, V, v);
    return a.createElement(
      te,
      {
        'data-accent-color': d,
        'data-radius': i,
        className: f('rt-reset', 'rt-AvatarRoot', r),
        style: c,
        asChild: s,
      },
      k({ asChild: s, children: t }, a.createElement(C, { ref: n, ...l })),
    );
  });
w.displayName = 'Avatar';
const C = a.forwardRef(({ fallback: e, ...n }, s) => {
  const [t, r] = a.useState('idle');
  return a.createElement(
    a.Fragment,
    null,
    t === 'idle' || t === 'loading'
      ? a.createElement('span', { className: 'rt-AvatarFallback' })
      : null,
    t === 'error'
      ? a.createElement(
          re,
          {
            className: f('rt-AvatarFallback', {
              'rt-one-letter': typeof e == 'string' && e.length === 1,
              'rt-two-letters': typeof e == 'string' && e.length === 2,
            }),
            delayMs: 0,
          },
          e,
        )
      : null,
    a.createElement(se, {
      ref: s,
      className: 'rt-AvatarImage',
      ...n,
      onLoadingStatusChange: (c) => {
        n.onLoadingStatusChange?.(c), r(c);
      },
    }),
  );
});
C.displayName = 'AvatarImpl';
const E = a.forwardRef((e, n) => {
  const { asChild: s, className: t, ...r } = b(e, K, v);
  return a.createElement(s ? A : 'div', {
    ref: n,
    ...r,
    className: f('rt-reset', 'rt-BaseCard', 'rt-Card', t),
  });
});
E.displayName = 'Card';
const _ = a.forwardRef((e, n) => {
  const { asChild: s, className: t, ...r } = b(e, J, M, v);
  return a.createElement(s ? A : 'section', {
    ...r,
    ref: n,
    className: f('rt-Section', t),
  });
});
_.displayName = 'Section';
const ne = [
    {
      id: 1,
      name: 'Константин Запольский',
      initials: 'КЗ',
      text: 'Наши гайды включают уникальные локации, которые вы не найдёте в обычных путеводителях',
    },
    {
      id: 2,
      name: 'Константин Запольский',
      initials: 'КЗ',
      text: 'Наши гайды включают уникальные локации, которые вы не найдёте в обычных путеводителях',
    },
    {
      id: 3,
      name: 'Константин Запольский',
      initials: 'КЗ',
      text: 'Наши гайды включают уникальные локации, которые вы не найдёте в обычных путеводителях',
    },
    {
      id: 4,
      name: 'Константин Запольский',
      initials: 'КЗ',
      text: 'Наши гайды включают уникальные локации, которые вы не найдёте в обычных путеводителях',
    },
    {
      id: 5,
      name: 'Константин Запольский',
      initials: 'КЗ',
      text: 'Наши гайды включают уникальные локации, которые вы не найдёте в обычных путеводителях',
    },
  ],
  ue = () =>
    o.jsxs(_, {
      className: u.root,
      children: [
        o.jsx(P, {
          children: o.jsxs(h, {
            direction: 'column',
            gap: '24px',
            mb: '64px',
            children: [
              o.jsx(F, {
                size: '9',
                weight: 'bold',
                align: 'center',
                children: 'Отзывы на гайды',
              }),
              o.jsx(m, {
                size: '6',
                weight: 'medium',
                align: 'center',
                children: 'Вот такие вот отзывы мы получим',
              }),
            ],
          }),
        }),
        o.jsx('div', {
          className: u.list,
          children: ne.map((e) =>
            o.jsx(
              E,
              {
                variant: 'classic',
                className: u.review,
                children: o.jsxs(h, {
                  direction: 'column',
                  gap: '24px',
                  children: [
                    o.jsx(w, {
                      size: '7',
                      variant: 'soft',
                      fallback: e.initials,
                      src: 'https://i.pravatar.cc/300',
                    }),
                    o.jsx(m, {
                      className: u.text,
                      size: '4',
                      weight: 'regular',
                      children: e.text,
                    }),
                    o.jsx(m, {
                      className: u.text,
                      size: '4',
                      weight: 'medium',
                      children: e.name,
                    }),
                  ],
                }),
              },
              e.id,
            ),
          ),
        }),
      ],
    });
export { ue as default };
