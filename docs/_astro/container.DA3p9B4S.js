import { r as t } from './index.DFz9pK5G.js';
import {
  o as v,
  v as i,
  g as x,
  y as r,
  e as N,
  f as $,
  u as C,
  G as H,
  H as W,
} from './flex.DIBXRVrM.js';
const w = ['1', '2', '3', '4'],
  E = ['none', 'initial'],
  z = ['left', 'center', 'right'],
  V = {
    ...v,
    size: {
      type: 'enum',
      className: 'rt-r-size',
      values: w,
      default: '4',
      responsive: !0,
    },
    display: {
      type: 'enum',
      className: 'rt-r-display',
      values: E,
      parseValue: G,
      responsive: !0,
    },
    align: {
      type: 'enum',
      className: 'rt-r-ai',
      values: z,
      parseValue: I,
      responsive: !0,
    },
  };
function G(e) {
  return e === 'initial' ? 'flex' : e;
}
function I(e) {
  return e === 'left' ? 'start' : e === 'right' ? 'end' : e;
}
const R = t.forwardRef(
  (
    {
      width: e,
      minWidth: s,
      maxWidth: n,
      height: l,
      minHeight: c,
      maxHeight: m,
      ...d
    },
    h,
  ) => {
    const { asChild: a, children: o, className: p, ...u } = i(d, V, C, $),
      { className: f, style: g } = i(
        {
          width: e,
          minWidth: s,
          maxWidth: n,
          height: l,
          minHeight: c,
          maxHeight: m,
        },
        W,
        H,
      );
    return t.createElement(
      a ? x : 'div',
      { ...u, ref: h, className: r('rt-Container', p) },
      N({ asChild: a, children: o }, (y) =>
        t.createElement(
          'div',
          { className: r('rt-ContainerInner', f), style: g },
          y,
        ),
      ),
    );
  },
);
R.displayName = 'Container';
export { R as n };
