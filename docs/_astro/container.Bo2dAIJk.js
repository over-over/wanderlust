import { r as t } from './index.DFz9pK5G.js';
import {
  o as v,
  v as i,
  f as N,
  y as r,
  e as x,
  i as $,
  q as C,
  N as H,
  O as W,
} from './flex.C11PjoqR.js';
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
      parseValue: q,
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
function q(e) {
  return e === 'initial' ? 'flex' : e;
}
function I(e) {
  return e === 'left' ? 'start' : e === 'right' ? 'end' : e;
}
const O = t.forwardRef(
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
      { className: f, style: y } = i(
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
      a ? N : 'div',
      { ...u, ref: h, className: r('rt-Container', p) },
      x({ asChild: a, children: o }, (g) =>
        t.createElement(
          'div',
          { className: r('rt-ContainerInner', f), style: y },
          g,
        ),
      ),
    );
  },
);
O.displayName = 'Container';
export { O as n };
