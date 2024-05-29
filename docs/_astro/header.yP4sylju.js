import {
  o as In,
  x as Mr,
  z as $r,
  A as xr,
  B as Ur,
  s as Fr,
  p as wn,
  C as jr,
  v as ie,
  i as ke,
  q as Br,
  f as lt,
  y as F,
  $ as Rt,
  a as dt,
  _ as x,
  c as Vr,
  b as be,
  w as B,
  D as Hr,
  E as Wr,
  F as zr,
  m as d,
  n as V,
} from './flex.C11PjoqR.js';
import {
  $ as yn,
  d as En,
  b as M,
  e as Tn,
  r as Gr,
  a as Kr,
  _ as At,
  I as Sn,
  c as Cn,
  n as Rn,
  s as An,
  g as ut,
  D as ht,
  o as K,
  p as qr,
  m as Jr,
} from './button.CYWjHZRM.js';
import { r as u, $ as A } from './index.DFz9pK5G.js';
import { s as ee, a as Yr, b as ue } from './about.63b7fff8.CdblSClp.js';
import { n as Xr } from './container.Bo2dAIJk.js';
const Qr = ['div', 'span'],
  Zr = ['none', 'inline', 'inline-block', 'block'],
  es = {
    as: { type: 'enum', values: Qr, default: 'div' },
    ...In,
    display: {
      type: 'enum',
      className: 'rt-r-display',
      values: Zr,
      responsive: !0,
    },
  },
  ts = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ns = ['auto', 'always', 'hover', 'none'],
  rs = {
    ...In,
    size: { type: 'enum', className: 'rt-r-size', values: ts, responsive: !0 },
    ...Mr,
    ...$r,
    ...xr,
    ...Ur,
    underline: {
      type: 'enum',
      className: 'rt-underline',
      values: ns,
      default: 'auto',
    },
    ...Fr,
    ...wn,
  },
  ss = ['1', '2'],
  is = ['nowrap', 'wrap', 'wrap-reverse'],
  os = ['start', 'center', 'end'],
  as = {
    size: {
      type: 'enum',
      className: 'rt-r-size',
      values: ss,
      default: '2',
      responsive: !0,
    },
    wrap: { type: 'enum', className: 'rt-r-fw', values: is, responsive: !0 },
    justify: { type: 'enum', className: 'rt-r-jc', values: os, responsive: !0 },
    ...jr,
    ...wn,
  },
  kn = u.forwardRef((n, e) => {
    const { className: t, asChild: r, as: s = 'div', ...i } = ie(n, es, Br, ke);
    return u.createElement(r ? lt : s, {
      ...i,
      ref: e,
      className: F('rt-Box', t),
    });
  });
kn.displayName = 'Box';
function cs(n) {
  const e = n + 'CollectionProvider',
    [t, r] = Rt(e),
    [s, i] = t(e, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (y) => {
      const { scope: g, children: I } = y,
        w = A.useRef(null),
        _ = A.useRef(new Map()).current;
      return A.createElement(s, { scope: g, itemMap: _, collectionRef: w }, I);
    },
    c = n + 'CollectionSlot',
    a = A.forwardRef((y, g) => {
      const { scope: I, children: w } = y,
        _ = i(c, I),
        v = dt(g, _.collectionRef);
      return A.createElement(lt, { ref: v }, w);
    }),
    l = n + 'CollectionItemSlot',
    h = 'data-radix-collection-item',
    f = A.forwardRef((y, g) => {
      const { scope: I, children: w, ..._ } = y,
        v = A.useRef(null),
        E = dt(g, v),
        T = i(l, I);
      return (
        A.useEffect(
          () => (
            T.itemMap.set(v, { ref: v, ..._ }), () => void T.itemMap.delete(v)
          ),
        ),
        A.createElement(lt, { [h]: '', ref: E }, w)
      );
    });
  function m(y) {
    const g = i(n + 'CollectionConsumer', y);
    return A.useCallback(() => {
      const w = g.collectionRef.current;
      if (!w) return [];
      const _ = Array.from(w.querySelectorAll(`[${h}]`));
      return Array.from(g.itemMap.values()).sort(
        (T, ce) => _.indexOf(T.ref.current) - _.indexOf(ce.ref.current),
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [{ Provider: o, Slot: a, ItemSlot: f }, m, r];
}
const tt = 'rovingFocusGroup.onEntryFocus',
  ls = { bubbles: !1, cancelable: !0 },
  kt = 'RovingFocusGroup',
  [ft, Pn, ds] = cs(kt),
  [us, Nn] = Rt(kt, [ds]),
  [hs, fs] = us(kt),
  ps = u.forwardRef((n, e) =>
    u.createElement(
      ft.Provider,
      { scope: n.__scopeRovingFocusGroup },
      u.createElement(
        ft.Slot,
        { scope: n.__scopeRovingFocusGroup },
        u.createElement(ms, x({}, n, { ref: e })),
      ),
    ),
  ),
  ms = u.forwardRef((n, e) => {
    const {
        __scopeRovingFocusGroup: t,
        orientation: r,
        loop: s = !1,
        dir: i,
        currentTabStopId: o,
        defaultCurrentTabStopId: c,
        onCurrentTabStopIdChange: a,
        onEntryFocus: l,
        ...h
      } = n,
      f = u.useRef(null),
      m = dt(e, f),
      y = yn(i),
      [g = null, I] = En({ prop: o, defaultProp: c, onChange: a }),
      [w, _] = u.useState(!1),
      v = Vr(l),
      E = Pn(t),
      T = u.useRef(!1),
      [ce, le] = u.useState(0);
    return (
      u.useEffect(() => {
        const S = f.current;
        if (S)
          return S.addEventListener(tt, v), () => S.removeEventListener(tt, v);
      }, [v]),
      u.createElement(
        hs,
        {
          scope: t,
          orientation: r,
          dir: y,
          loop: s,
          currentTabStopId: g,
          onItemFocus: u.useCallback((S) => I(S), [I]),
          onItemShiftTab: u.useCallback(() => _(!0), []),
          onFocusableItemAdd: u.useCallback(() => le((S) => S + 1), []),
          onFocusableItemRemove: u.useCallback(() => le((S) => S - 1), []),
        },
        u.createElement(
          be.div,
          x({ tabIndex: w || ce === 0 ? -1 : 0, 'data-orientation': r }, h, {
            ref: m,
            style: { outline: 'none', ...n.style },
            onMouseDown: M(n.onMouseDown, () => {
              T.current = !0;
            }),
            onFocus: M(n.onFocus, (S) => {
              const et = !T.current;
              if (S.target === S.currentTarget && et && !w) {
                const de = new CustomEvent(tt, ls);
                if ((S.currentTarget.dispatchEvent(de), !de.defaultPrevented)) {
                  const we = E().filter((Z) => Z.focusable),
                    Or = we.find((Z) => Z.active),
                    Dr = we.find((Z) => Z.id === g),
                    Lr = [Or, Dr, ...we]
                      .filter(Boolean)
                      .map((Z) => Z.ref.current);
                  On(Lr);
                }
              }
              T.current = !1;
            }),
            onBlur: M(n.onBlur, () => _(!1)),
          }),
        ),
      )
    );
  }),
  gs = 'RovingFocusGroupItem',
  _s = u.forwardRef((n, e) => {
    const {
        __scopeRovingFocusGroup: t,
        focusable: r = !0,
        active: s = !1,
        tabStopId: i,
        ...o
      } = n,
      c = Tn(),
      a = i || c,
      l = fs(gs, t),
      h = l.currentTabStopId === a,
      f = Pn(t),
      { onFocusableItemAdd: m, onFocusableItemRemove: y } = l;
    return (
      u.useEffect(() => {
        if (r) return m(), () => y();
      }, [r, m, y]),
      u.createElement(
        ft.ItemSlot,
        { scope: t, id: a, focusable: r, active: s },
        u.createElement(
          be.span,
          x({ tabIndex: h ? 0 : -1, 'data-orientation': l.orientation }, o, {
            ref: e,
            onMouseDown: M(n.onMouseDown, (g) => {
              r ? l.onItemFocus(a) : g.preventDefault();
            }),
            onFocus: M(n.onFocus, () => l.onItemFocus(a)),
            onKeyDown: M(n.onKeyDown, (g) => {
              if (g.key === 'Tab' && g.shiftKey) {
                l.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const I = Is(g, l.orientation, l.dir);
              if (I !== void 0) {
                g.preventDefault();
                let _ = f()
                  .filter((v) => v.focusable)
                  .map((v) => v.ref.current);
                if (I === 'last') _.reverse();
                else if (I === 'prev' || I === 'next') {
                  I === 'prev' && _.reverse();
                  const v = _.indexOf(g.currentTarget);
                  _ = l.loop ? ws(_, v + 1) : _.slice(v + 1);
                }
                setTimeout(() => On(_));
              }
            }),
          }),
        ),
      )
    );
  }),
  vs = {
    ArrowLeft: 'prev',
    ArrowUp: 'prev',
    ArrowRight: 'next',
    ArrowDown: 'next',
    PageUp: 'first',
    Home: 'first',
    PageDown: 'last',
    End: 'last',
  };
function bs(n, e) {
  return e !== 'rtl'
    ? n
    : n === 'ArrowLeft'
      ? 'ArrowRight'
      : n === 'ArrowRight'
        ? 'ArrowLeft'
        : n;
}
function Is(n, e, t) {
  const r = bs(n.key, t);
  if (
    !(e === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(r)) &&
    !(e === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(r))
  )
    return vs[r];
}
function On(n) {
  const e = document.activeElement;
  for (const t of n)
    if (t === e || (t.focus(), document.activeElement !== e)) return;
}
function ws(n, e) {
  return n.map((t, r) => n[(e + r) % n.length]);
}
const ys = ps,
  Es = _s,
  pt = u.forwardRef(({ className: n, ...e }, t) =>
    u.createElement(Gr, { ...e, ref: t, className: F('rt-IconButton', n) }),
  );
pt.displayName = 'IconButton';
const Dn = u.forwardRef((n, e) => {
  const { children: t, className: r, color: s, asChild: i, ...o } = ie(n, rs);
  return u.createElement(
    B,
    {
      ...o,
      'data-accent-color': s,
      ref: e,
      asChild: !0,
      className: F('rt-reset', 'rt-Link', r),
    },
    i ? t : u.createElement('a', null, t),
  );
});
Dn.displayName = 'Link';
const Ln = 'Tabs',
  [Ts, Fc] = Rt(Ln, [Nn]),
  Mn = Nn(),
  [Ss, Pt] = Ts(Ln),
  Cs = u.forwardRef((n, e) => {
    const {
        __scopeTabs: t,
        value: r,
        onValueChange: s,
        defaultValue: i,
        orientation: o = 'horizontal',
        dir: c,
        activationMode: a = 'automatic',
        ...l
      } = n,
      h = yn(c),
      [f, m] = En({ prop: r, onChange: s, defaultProp: i });
    return u.createElement(
      Ss,
      {
        scope: t,
        baseId: Tn(),
        value: f,
        onValueChange: m,
        orientation: o,
        dir: h,
        activationMode: a,
      },
      u.createElement(
        be.div,
        x({ dir: h, 'data-orientation': o }, l, { ref: e }),
      ),
    );
  }),
  Rs = 'TabsList',
  As = u.forwardRef((n, e) => {
    const { __scopeTabs: t, loop: r = !0, ...s } = n,
      i = Pt(Rs, t),
      o = Mn(t);
    return u.createElement(
      ys,
      x({ asChild: !0 }, o, {
        orientation: i.orientation,
        dir: i.dir,
        loop: r,
      }),
      u.createElement(
        be.div,
        x({ role: 'tablist', 'aria-orientation': i.orientation }, s, {
          ref: e,
        }),
      ),
    );
  }),
  ks = 'TabsTrigger',
  Ps = u.forwardRef((n, e) => {
    const { __scopeTabs: t, value: r, disabled: s = !1, ...i } = n,
      o = Pt(ks, t),
      c = Mn(t),
      a = $n(o.baseId, r),
      l = xn(o.baseId, r),
      h = r === o.value;
    return u.createElement(
      Es,
      x({ asChild: !0 }, c, { focusable: !s, active: h }),
      u.createElement(
        be.button,
        x(
          {
            type: 'button',
            role: 'tab',
            'aria-selected': h,
            'aria-controls': l,
            'data-state': h ? 'active' : 'inactive',
            'data-disabled': s ? '' : void 0,
            disabled: s,
            id: a,
          },
          i,
          {
            ref: e,
            onMouseDown: M(n.onMouseDown, (f) => {
              !s && f.button === 0 && f.ctrlKey === !1
                ? o.onValueChange(r)
                : f.preventDefault();
            }),
            onKeyDown: M(n.onKeyDown, (f) => {
              [' ', 'Enter'].includes(f.key) && o.onValueChange(r);
            }),
            onFocus: M(n.onFocus, () => {
              const f = o.activationMode !== 'manual';
              !h && !s && f && o.onValueChange(r);
            }),
          },
        ),
      ),
    );
  }),
  Ns = 'TabsContent',
  Os = u.forwardRef((n, e) => {
    const { __scopeTabs: t, value: r, forceMount: s, children: i, ...o } = n,
      c = Pt(Ns, t),
      a = $n(c.baseId, r),
      l = xn(c.baseId, r),
      h = r === c.value,
      f = u.useRef(h);
    return (
      u.useEffect(() => {
        const m = requestAnimationFrame(() => (f.current = !1));
        return () => cancelAnimationFrame(m);
      }, []),
      u.createElement(Kr, { present: s || h }, ({ present: m }) =>
        u.createElement(
          be.div,
          x(
            {
              'data-state': h ? 'active' : 'inactive',
              'data-orientation': c.orientation,
              role: 'tabpanel',
              'aria-labelledby': a,
              hidden: !m,
              id: l,
              tabIndex: 0,
            },
            o,
            {
              ref: e,
              style: {
                ...n.style,
                animationDuration: f.current ? '0s' : void 0,
              },
            },
          ),
          m && i,
        ),
      )
    );
  });
function $n(n, e) {
  return `${n}-trigger-${e}`;
}
function xn(n, e) {
  return `${n}-content-${e}`;
}
const Ds = Cs,
  Ls = As,
  Ms = Ps,
  $s = Os,
  Un = u.forwardRef((n, e) => {
    const { className: t, ...r } = ie(n, ke);
    return u.createElement(Ds, {
      ...r,
      ref: e,
      className: F('rt-TabsRoot', t),
    });
  });
Un.displayName = 'Tabs.Root';
const Fn = u.forwardRef((n, e) => {
  const { className: t, color: r, ...s } = ie(n, as, ke);
  return u.createElement(Ls, {
    'data-accent-color': r,
    ...s,
    asChild: !1,
    ref: e,
    className: F('rt-BaseTabList', 'rt-TabsList', t),
  });
});
Fn.displayName = 'Tabs.List';
const mt = u.forwardRef((n, e) => {
  const { className: t, children: r, ...s } = n;
  return u.createElement(
    Ms,
    {
      ...s,
      asChild: !1,
      ref: e,
      className: F('rt-reset', 'rt-BaseTabListTrigger', 'rt-TabsTrigger', t),
    },
    u.createElement(
      'span',
      { className: 'rt-BaseTabListTriggerInner rt-TabsTriggerInner' },
      r,
    ),
    u.createElement(
      'span',
      {
        className: 'rt-BaseTabListTriggerInnerHidden rt-TabsTriggerInnerHidden',
      },
      r,
    ),
  );
});
mt.displayName = 'Tabs.Trigger';
const gt = u.forwardRef((n, e) => {
  const { className: t, ...r } = ie(n, ke);
  return u.createElement($s, {
    ...r,
    ref: e,
    className: F('rt-TabsContent', t),
  });
});
gt.displayName = 'Tabs.Content';
const he = u.forwardRef((n, e) => {
  const t = u.useRef(null),
    {
      children: r,
      className: s,
      color: i,
      radius: o,
      style: c,
      ...a
    } = ie(n, Hr, ke);
  return u.createElement(
    'div',
    {
      'data-accent-color': i,
      'data-radius': o,
      style: c,
      className: F('rt-TextFieldRoot', s),
      onPointerDown: (l) => {
        const h = l.target;
        if (h.closest('input, button, a')) return;
        const f = t.current;
        if (!f) return;
        const m = h.closest(`
            .rt-TextFieldSlot[data-side='right'],
            .rt-TextFieldSlot:not([data-side='right']) ~ .rt-TextFieldSlot:not([data-side='left'])
          `)
          ? f.value.length
          : 0;
        requestAnimationFrame(() => {
          try {
            f.setSelectionRange(m, m);
          } catch {}
          f.focus();
        });
      },
    },
    u.createElement('input', {
      spellCheck: 'false',
      ...a,
      ref: Wr(t, e),
      className: 'rt-reset rt-TextFieldInput',
    }),
    r,
  );
});
he.displayName = 'TextField.Root';
const _t = u.forwardRef((n, e) => {
  const { className: t, color: r, side: s, ...i } = ie(n, zr);
  return u.createElement('div', {
    'data-accent-color': r,
    'data-side': s,
    ...i,
    ref: e,
    className: F('rt-TextFieldSlot', t),
  });
});
_t.displayName = 'TextField.Slot';
var Vt = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const jn = function (n) {
    const e = [];
    let t = 0;
    for (let r = 0; r < n.length; r++) {
      let s = n.charCodeAt(r);
      s < 128
        ? (e[t++] = s)
        : s < 2048
          ? ((e[t++] = (s >> 6) | 192), (e[t++] = (s & 63) | 128))
          : (s & 64512) === 55296 &&
              r + 1 < n.length &&
              (n.charCodeAt(r + 1) & 64512) === 56320
            ? ((s = 65536 + ((s & 1023) << 10) + (n.charCodeAt(++r) & 1023)),
              (e[t++] = (s >> 18) | 240),
              (e[t++] = ((s >> 12) & 63) | 128),
              (e[t++] = ((s >> 6) & 63) | 128),
              (e[t++] = (s & 63) | 128))
            : ((e[t++] = (s >> 12) | 224),
              (e[t++] = ((s >> 6) & 63) | 128),
              (e[t++] = (s & 63) | 128));
    }
    return e;
  },
  xs = function (n) {
    const e = [];
    let t = 0,
      r = 0;
    for (; t < n.length; ) {
      const s = n[t++];
      if (s < 128) e[r++] = String.fromCharCode(s);
      else if (s > 191 && s < 224) {
        const i = n[t++];
        e[r++] = String.fromCharCode(((s & 31) << 6) | (i & 63));
      } else if (s > 239 && s < 365) {
        const i = n[t++],
          o = n[t++],
          c = n[t++],
          a =
            (((s & 7) << 18) | ((i & 63) << 12) | ((o & 63) << 6) | (c & 63)) -
            65536;
        (e[r++] = String.fromCharCode(55296 + (a >> 10))),
          (e[r++] = String.fromCharCode(56320 + (a & 1023)));
      } else {
        const i = n[t++],
          o = n[t++];
        e[r++] = String.fromCharCode(
          ((s & 15) << 12) | ((i & 63) << 6) | (o & 63),
        );
      }
    }
    return e.join('');
  },
  Bn = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + '+/=';
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + '-_.';
    },
    HAS_NATIVE_SUPPORT: typeof atob == 'function',
    encodeByteArray(n, e) {
      if (!Array.isArray(n))
        throw Error('encodeByteArray takes an array as a parameter');
      this.init_();
      const t = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let s = 0; s < n.length; s += 3) {
        const i = n[s],
          o = s + 1 < n.length,
          c = o ? n[s + 1] : 0,
          a = s + 2 < n.length,
          l = a ? n[s + 2] : 0,
          h = i >> 2,
          f = ((i & 3) << 4) | (c >> 4);
        let m = ((c & 15) << 2) | (l >> 6),
          y = l & 63;
        a || ((y = 64), o || (m = 64)), r.push(t[h], t[f], t[m], t[y]);
      }
      return r.join('');
    },
    encodeString(n, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(n)
        : this.encodeByteArray(jn(n), e);
    },
    decodeString(n, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(n)
        : xs(this.decodeStringToByteArray(n, e));
    },
    decodeStringToByteArray(n, e) {
      this.init_();
      const t = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let s = 0; s < n.length; ) {
        const i = t[n.charAt(s++)],
          c = s < n.length ? t[n.charAt(s)] : 0;
        ++s;
        const l = s < n.length ? t[n.charAt(s)] : 64;
        ++s;
        const f = s < n.length ? t[n.charAt(s)] : 64;
        if ((++s, i == null || c == null || l == null || f == null))
          throw new Us();
        const m = (i << 2) | (c >> 4);
        if ((r.push(m), l !== 64)) {
          const y = ((c << 4) & 240) | (l >> 2);
          if ((r.push(y), f !== 64)) {
            const g = ((l << 6) & 192) | f;
            r.push(g);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let n = 0; n < this.ENCODED_VALS.length; n++)
          (this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n)),
            (this.charToByteMap_[this.byteToCharMap_[n]] = n),
            (this.byteToCharMapWebSafe_[n] =
              this.ENCODED_VALS_WEBSAFE.charAt(n)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n),
            n >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n));
      }
    },
  };
class Us extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError');
  }
}
const Fs = function (n) {
    const e = jn(n);
    return Bn.encodeByteArray(e, !0);
  },
  Vn = function (n) {
    return Fs(n).replace(/\./g, '');
  },
  Hn = function (n) {
    try {
      return Bn.decodeString(n, !0);
    } catch (e) {
      console.error('base64Decode failed: ', e);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function js() {
  if (typeof self < 'u') return self;
  if (typeof window < 'u') return window;
  if (typeof global < 'u') return global;
  throw new Error('Unable to locate global object.');
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Bs = () => js().__FIREBASE_DEFAULTS__,
  Vs = () => {
    if (typeof process > 'u' || typeof Vt > 'u') return;
    const n = Vt.__FIREBASE_DEFAULTS__;
    if (n) return JSON.parse(n);
  },
  Hs = () => {
    if (typeof document > 'u') return;
    let n;
    try {
      n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = n && Hn(n[1]);
    return e && JSON.parse(e);
  },
  Nt = () => {
    try {
      return Bs() || Vs() || Hs();
    } catch (n) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
      return;
    }
  },
  Ws = (n) => {
    var e, t;
    return (t =
      (e = Nt()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
      null || t === void 0
      ? void 0
      : t[n];
  },
  Wn = () => {
    var n;
    return (n = Nt()) === null || n === void 0 ? void 0 : n.config;
  },
  zn = (n) => {
    var e;
    return (e = Nt()) === null || e === void 0 ? void 0 : e[`_${n}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zs {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, t) => {
        (this.resolve = e), (this.reject = t);
      }));
  }
  wrapCallback(e) {
    return (t, r) => {
      t ? this.reject(t) : this.resolve(r),
        typeof e == 'function' &&
          (this.promise.catch(() => {}), e.length === 1 ? e(t) : e(t, r));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function C() {
  return typeof navigator < 'u' && typeof navigator.userAgent == 'string'
    ? navigator.userAgent
    : '';
}
function Gs() {
  return (
    typeof window < 'u' &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(C())
  );
}
function Ks() {
  const n =
    typeof chrome == 'object'
      ? chrome.runtime
      : typeof browser == 'object'
        ? browser.runtime
        : void 0;
  return typeof n == 'object' && n.id !== void 0;
}
function qs() {
  return typeof navigator == 'object' && navigator.product === 'ReactNative';
}
function Js() {
  const n = C();
  return n.indexOf('MSIE ') >= 0 || n.indexOf('Trident/') >= 0;
}
function Ys() {
  try {
    return typeof indexedDB == 'object';
  } catch {
    return !1;
  }
}
function Xs() {
  return new Promise((n, e) => {
    try {
      let t = !0;
      const r = 'validate-browser-context-for-indexeddb-analytics-module',
        s = self.indexedDB.open(r);
      (s.onsuccess = () => {
        s.result.close(), t || self.indexedDB.deleteDatabase(r), n(!0);
      }),
        (s.onupgradeneeded = () => {
          t = !1;
        }),
        (s.onerror = () => {
          var i;
          e(
            ((i = s.error) === null || i === void 0 ? void 0 : i.message) || '',
          );
        });
    } catch (t) {
      e(t);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qs = 'FirebaseError';
class Y extends Error {
  constructor(e, t, r) {
    super(t),
      (this.code = e),
      (this.customData = r),
      (this.name = Qs),
      Object.setPrototypeOf(this, Y.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, Pe.prototype.create);
  }
}
class Pe {
  constructor(e, t, r) {
    (this.service = e), (this.serviceName = t), (this.errors = r);
  }
  create(e, ...t) {
    const r = t[0] || {},
      s = `${this.service}/${e}`,
      i = this.errors[e],
      o = i ? Zs(i, r) : 'Error',
      c = `${this.serviceName}: ${o} (${s}).`;
    return new Y(s, c, r);
  }
}
function Zs(n, e) {
  return n.replace(ei, (t, r) => {
    const s = e[r];
    return s != null ? String(s) : `<${r}?>`;
  });
}
const ei = /\{\$([^}]+)}/g;
function ti(n) {
  for (const e in n) if (Object.prototype.hasOwnProperty.call(n, e)) return !1;
  return !0;
}
function Ve(n, e) {
  if (n === e) return !0;
  const t = Object.keys(n),
    r = Object.keys(e);
  for (const s of t) {
    if (!r.includes(s)) return !1;
    const i = n[s],
      o = e[s];
    if (Ht(i) && Ht(o)) {
      if (!Ve(i, o)) return !1;
    } else if (i !== o) return !1;
  }
  for (const s of r) if (!t.includes(s)) return !1;
  return !0;
}
function Ht(n) {
  return n !== null && typeof n == 'object';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ne(n) {
  const e = [];
  for (const [t, r] of Object.entries(n))
    Array.isArray(r)
      ? r.forEach((s) => {
          e.push(encodeURIComponent(t) + '=' + encodeURIComponent(s));
        })
      : e.push(encodeURIComponent(t) + '=' + encodeURIComponent(r));
  return e.length ? '&' + e.join('&') : '';
}
function ye(n) {
  const e = {};
  return (
    n
      .replace(/^\?/, '')
      .split('&')
      .forEach((r) => {
        if (r) {
          const [s, i] = r.split('=');
          e[decodeURIComponent(s)] = decodeURIComponent(i);
        }
      }),
    e
  );
}
function Ee(n) {
  const e = n.indexOf('?');
  if (!e) return '';
  const t = n.indexOf('#', e);
  return n.substring(e, t > 0 ? t : void 0);
}
function ni(n, e) {
  const t = new ri(n, e);
  return t.subscribe.bind(t);
}
class ri {
  constructor(e, t) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = t),
      this.task
        .then(() => {
          e(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(e) {
    this.forEachObserver((t) => {
      t.next(e);
    });
  }
  error(e) {
    this.forEachObserver((t) => {
      t.error(e);
    }),
      this.close(e);
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete();
    }),
      this.close();
  }
  subscribe(e, t, r) {
    let s;
    if (e === void 0 && t === void 0 && r === void 0)
      throw new Error('Missing Observer.');
    si(e, ['next', 'error', 'complete'])
      ? (s = e)
      : (s = { next: e, error: t, complete: r }),
      s.next === void 0 && (s.next = nt),
      s.error === void 0 && (s.error = nt),
      s.complete === void 0 && (s.complete = nt);
    const i = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? s.error(this.finalError) : s.complete();
          } catch {}
        }),
      this.observers.push(s),
      i
    );
  }
  unsubscribeOne(e) {
    this.observers === void 0 ||
      this.observers[e] === void 0 ||
      (delete this.observers[e],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e);
  }
  sendOne(e, t) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          t(this.observers[e]);
        } catch (r) {
          typeof console < 'u' && console.error && console.error(r);
        }
    });
  }
  close(e) {
    this.finalized ||
      ((this.finalized = !0),
      e !== void 0 && (this.finalError = e),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function si(n, e) {
  if (typeof n != 'object' || n === null) return !1;
  for (const t of e) if (t in n && typeof n[t] == 'function') return !0;
  return !1;
}
function nt() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function oe(n) {
  return n && n._delegate ? n._delegate : n;
}
class ve {
  constructor(e, t, r) {
    (this.name = e),
      (this.instanceFactory = t),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY'),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(e) {
    return (this.instantiationMode = e), this;
  }
  setMultipleInstances(e) {
    return (this.multipleInstances = e), this;
  }
  setServiceProps(e) {
    return (this.serviceProps = e), this;
  }
  setInstanceCreatedCallback(e) {
    return (this.onInstanceCreated = e), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const te = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ii {
  constructor(e, t) {
    (this.name = e),
      (this.container = t),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(e) {
    const t = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(t)) {
      const r = new zs();
      if (
        (this.instancesDeferred.set(t, r),
        this.isInitialized(t) || this.shouldAutoInitialize())
      )
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: t });
          s && r.resolve(s);
        } catch {}
    }
    return this.instancesDeferred.get(t).promise;
  }
  getImmediate(e) {
    var t;
    const r = this.normalizeInstanceIdentifier(e?.identifier),
      s = (t = e?.optional) !== null && t !== void 0 ? t : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (i) {
        if (s) return null;
        throw i;
      }
    else {
      if (s) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (ai(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: te });
        } catch {}
      for (const [t, r] of this.instancesDeferred.entries()) {
        const s = this.normalizeInstanceIdentifier(t);
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: s });
          r.resolve(i);
        } catch {}
      }
    }
  }
  clearInstance(e = te) {
    this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e);
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((t) => 'INTERNAL' in t).map((t) => t.INTERNAL.delete()),
      ...e.filter((t) => '_delete' in t).map((t) => t._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = te) {
    return this.instances.has(e);
  }
  getOptions(e = te) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: t = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const s = this.getOrInitializeService({
      instanceIdentifier: r,
      options: t,
    });
    for (const [i, o] of this.instancesDeferred.entries()) {
      const c = this.normalizeInstanceIdentifier(i);
      r === c && o.resolve(s);
    }
    return s;
  }
  onInit(e, t) {
    var r;
    const s = this.normalizeInstanceIdentifier(t),
      i =
        (r = this.onInitCallbacks.get(s)) !== null && r !== void 0
          ? r
          : new Set();
    i.add(e), this.onInitCallbacks.set(s, i);
    const o = this.instances.get(s);
    return (
      o && e(o, s),
      () => {
        i.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, t) {
    const r = this.onInitCallbacks.get(t);
    if (r)
      for (const s of r)
        try {
          s(e, t);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
    let r = this.instances.get(e);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: oi(e),
        options: t,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, t),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(e = te) {
    return this.component ? (this.component.multipleInstances ? e : te) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT';
  }
}
function oi(n) {
  return n === te ? void 0 : n;
}
function ai(n) {
  return n.instantiationMode === 'EAGER';
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ci {
  constructor(e) {
    (this.name = e), (this.providers = new Map());
  }
  addComponent(e) {
    const t = this.getProvider(e.name);
    if (t.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`,
      );
    t.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e);
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const t = new ii(e, this);
    return this.providers.set(e, t), t;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var b;
(function (n) {
  (n[(n.DEBUG = 0)] = 'DEBUG'),
    (n[(n.VERBOSE = 1)] = 'VERBOSE'),
    (n[(n.INFO = 2)] = 'INFO'),
    (n[(n.WARN = 3)] = 'WARN'),
    (n[(n.ERROR = 4)] = 'ERROR'),
    (n[(n.SILENT = 5)] = 'SILENT');
})(b || (b = {}));
const li = {
    debug: b.DEBUG,
    verbose: b.VERBOSE,
    info: b.INFO,
    warn: b.WARN,
    error: b.ERROR,
    silent: b.SILENT,
  },
  di = b.INFO,
  ui = {
    [b.DEBUG]: 'log',
    [b.VERBOSE]: 'log',
    [b.INFO]: 'info',
    [b.WARN]: 'warn',
    [b.ERROR]: 'error',
  },
  hi = (n, e, ...t) => {
    if (e < n.logLevel) return;
    const r = new Date().toISOString(),
      s = ui[e];
    if (s) console[s](`[${r}]  ${n.name}:`, ...t);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`,
      );
  };
class Gn {
  constructor(e) {
    (this.name = e),
      (this._logLevel = di),
      (this._logHandler = hi),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in b))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == 'string' ? li[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != 'function')
      throw new TypeError('Value assigned to `logHandler` must be a function');
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, b.DEBUG, ...e),
      this._logHandler(this, b.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, b.VERBOSE, ...e),
      this._logHandler(this, b.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, b.INFO, ...e),
      this._logHandler(this, b.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, b.WARN, ...e),
      this._logHandler(this, b.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, b.ERROR, ...e),
      this._logHandler(this, b.ERROR, ...e);
  }
}
const fi = (n, e) => e.some((t) => n instanceof t);
let Wt, zt;
function pi() {
  return (
    Wt ||
    (Wt = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function mi() {
  return (
    zt ||
    (zt = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Kn = new WeakMap(),
  vt = new WeakMap(),
  qn = new WeakMap(),
  rt = new WeakMap(),
  Ot = new WeakMap();
function gi(n) {
  const e = new Promise((t, r) => {
    const s = () => {
        n.removeEventListener('success', i), n.removeEventListener('error', o);
      },
      i = () => {
        t(q(n.result)), s();
      },
      o = () => {
        r(n.error), s();
      };
    n.addEventListener('success', i), n.addEventListener('error', o);
  });
  return (
    e
      .then((t) => {
        t instanceof IDBCursor && Kn.set(t, n);
      })
      .catch(() => {}),
    Ot.set(e, n),
    e
  );
}
function _i(n) {
  if (vt.has(n)) return;
  const e = new Promise((t, r) => {
    const s = () => {
        n.removeEventListener('complete', i),
          n.removeEventListener('error', o),
          n.removeEventListener('abort', o);
      },
      i = () => {
        t(), s();
      },
      o = () => {
        r(n.error || new DOMException('AbortError', 'AbortError')), s();
      };
    n.addEventListener('complete', i),
      n.addEventListener('error', o),
      n.addEventListener('abort', o);
  });
  vt.set(n, e);
}
let bt = {
  get(n, e, t) {
    if (n instanceof IDBTransaction) {
      if (e === 'done') return vt.get(n);
      if (e === 'objectStoreNames') return n.objectStoreNames || qn.get(n);
      if (e === 'store')
        return t.objectStoreNames[1]
          ? void 0
          : t.objectStore(t.objectStoreNames[0]);
    }
    return q(n[e]);
  },
  set(n, e, t) {
    return (n[e] = t), !0;
  },
  has(n, e) {
    return n instanceof IDBTransaction && (e === 'done' || e === 'store')
      ? !0
      : e in n;
  },
};
function vi(n) {
  bt = n(bt);
}
function bi(n) {
  return n === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (e, ...t) {
        const r = n.call(st(this), e, ...t);
        return qn.set(r, e.sort ? e.sort() : [e]), q(r);
      }
    : mi().includes(n)
      ? function (...e) {
          return n.apply(st(this), e), q(Kn.get(this));
        }
      : function (...e) {
          return q(n.apply(st(this), e));
        };
}
function Ii(n) {
  return typeof n == 'function'
    ? bi(n)
    : (n instanceof IDBTransaction && _i(n),
      fi(n, pi()) ? new Proxy(n, bt) : n);
}
function q(n) {
  if (n instanceof IDBRequest) return gi(n);
  if (rt.has(n)) return rt.get(n);
  const e = Ii(n);
  return e !== n && (rt.set(n, e), Ot.set(e, n)), e;
}
const st = (n) => Ot.get(n);
function wi(n, e, { blocked: t, upgrade: r, blocking: s, terminated: i } = {}) {
  const o = indexedDB.open(n, e),
    c = q(o);
  return (
    r &&
      o.addEventListener('upgradeneeded', (a) => {
        r(q(o.result), a.oldVersion, a.newVersion, q(o.transaction), a);
      }),
    t && o.addEventListener('blocked', (a) => t(a.oldVersion, a.newVersion, a)),
    c
      .then((a) => {
        i && a.addEventListener('close', () => i()),
          s &&
            a.addEventListener('versionchange', (l) =>
              s(l.oldVersion, l.newVersion, l),
            );
      })
      .catch(() => {}),
    c
  );
}
const yi = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  Ei = ['put', 'add', 'delete', 'clear'],
  it = new Map();
function Gt(n, e) {
  if (!(n instanceof IDBDatabase && !(e in n) && typeof e == 'string')) return;
  if (it.get(e)) return it.get(e);
  const t = e.replace(/FromIndex$/, ''),
    r = e !== t,
    s = Ei.includes(t);
  if (
    !(t in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(s || yi.includes(t))
  )
    return;
  const i = async function (o, ...c) {
    const a = this.transaction(o, s ? 'readwrite' : 'readonly');
    let l = a.store;
    return (
      r && (l = l.index(c.shift())),
      (await Promise.all([l[t](...c), s && a.done]))[0]
    );
  };
  return it.set(e, i), i;
}
vi((n) => ({
  ...n,
  get: (e, t, r) => Gt(e, t) || n.get(e, t, r),
  has: (e, t) => !!Gt(e, t) || n.has(e, t),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ti {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((t) => {
        if (Si(t)) {
          const r = t.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((t) => t)
      .join(' ');
  }
}
function Si(n) {
  const e = n.getComponent();
  return e?.type === 'VERSION';
}
const It = '@firebase/app',
  Kt = '0.10.5';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ne = new Gn('@firebase/app'),
  Ci = '@firebase/app-compat',
  Ri = '@firebase/analytics-compat',
  Ai = '@firebase/analytics',
  ki = '@firebase/app-check-compat',
  Pi = '@firebase/app-check',
  Ni = '@firebase/auth',
  Oi = '@firebase/auth-compat',
  Di = '@firebase/database',
  Li = '@firebase/database-compat',
  Mi = '@firebase/functions',
  $i = '@firebase/functions-compat',
  xi = '@firebase/installations',
  Ui = '@firebase/installations-compat',
  Fi = '@firebase/messaging',
  ji = '@firebase/messaging-compat',
  Bi = '@firebase/performance',
  Vi = '@firebase/performance-compat',
  Hi = '@firebase/remote-config',
  Wi = '@firebase/remote-config-compat',
  zi = '@firebase/storage',
  Gi = '@firebase/storage-compat',
  Ki = '@firebase/firestore',
  qi = '@firebase/vertexai-preview',
  Ji = '@firebase/firestore-compat',
  Yi = 'firebase',
  Xi = '10.12.2';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const wt = '[DEFAULT]',
  Qi = {
    [It]: 'fire-core',
    [Ci]: 'fire-core-compat',
    [Ai]: 'fire-analytics',
    [Ri]: 'fire-analytics-compat',
    [Pi]: 'fire-app-check',
    [ki]: 'fire-app-check-compat',
    [Ni]: 'fire-auth',
    [Oi]: 'fire-auth-compat',
    [Di]: 'fire-rtdb',
    [Li]: 'fire-rtdb-compat',
    [Mi]: 'fire-fn',
    [$i]: 'fire-fn-compat',
    [xi]: 'fire-iid',
    [Ui]: 'fire-iid-compat',
    [Fi]: 'fire-fcm',
    [ji]: 'fire-fcm-compat',
    [Bi]: 'fire-perf',
    [Vi]: 'fire-perf-compat',
    [Hi]: 'fire-rc',
    [Wi]: 'fire-rc-compat',
    [zi]: 'fire-gcs',
    [Gi]: 'fire-gcs-compat',
    [Ki]: 'fire-fst',
    [Ji]: 'fire-fst-compat',
    [qi]: 'fire-vertex',
    'fire-js': 'fire-js',
    [Yi]: 'fire-js-all',
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const He = new Map(),
  Zi = new Map(),
  yt = new Map();
function qt(n, e) {
  try {
    n.container.addComponent(e);
  } catch (t) {
    ne.debug(
      `Component ${e.name} failed to register with FirebaseApp ${n.name}`,
      t,
    );
  }
}
function Se(n) {
  const e = n.name;
  if (yt.has(e))
    return (
      ne.debug(`There were multiple attempts to register component ${e}.`), !1
    );
  yt.set(e, n);
  for (const t of He.values()) qt(t, n);
  for (const t of Zi.values()) qt(t, n);
  return !0;
}
function Jn(n, e) {
  const t = n.container.getProvider('heartbeat').getImmediate({ optional: !0 });
  return t && t.triggerHeartbeat(), n.container.getProvider(e);
}
function k(n) {
  return n.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const eo = {
    'no-app':
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    'bad-app-name': "Illegal App name: '{$appName}'",
    'duplicate-app':
      "Firebase App named '{$appName}' already exists with different options or config",
    'app-deleted': "Firebase App named '{$appName}' already deleted",
    'server-app-deleted': 'Firebase Server App has been deleted',
    'no-options':
      'Need to provide options, when not being deployed to hosting via source.',
    'invalid-app-argument':
      'firebase.{$appName}() takes either no argument or a Firebase App instance.',
    'invalid-log-argument':
      'First argument to `onLog` must be null or a function.',
    'idb-open':
      'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-get':
      'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-set':
      'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-delete':
      'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    'finalization-registry-not-supported':
      'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
    'invalid-server-app-environment':
      'FirebaseServerApp is not for use in browser environments.',
  },
  J = new Pe('app', 'Firebase', eo);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class to {
  constructor(e, t, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, t)),
      (this._name = t.name),
      (this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new ve('app', () => this, 'PUBLIC'));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw J.create('app-deleted', { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Oe = Xi;
function Je(n, e = {}) {
  let t = n;
  typeof e != 'object' && (e = { name: e });
  const r = Object.assign({ name: wt, automaticDataCollectionEnabled: !1 }, e),
    s = r.name;
  if (typeof s != 'string' || !s)
    throw J.create('bad-app-name', { appName: String(s) });
  if ((t || (t = Wn()), !t)) throw J.create('no-options');
  const i = He.get(s);
  if (i) {
    if (Ve(t, i.options) && Ve(r, i.config)) return i;
    throw J.create('duplicate-app', { appName: s });
  }
  const o = new ci(s);
  for (const a of yt.values()) o.addComponent(a);
  const c = new to(t, r, o);
  return He.set(s, c), c;
}
function no(n = wt) {
  const e = He.get(n);
  if (!e && n === wt && Wn()) return Je();
  if (!e) throw J.create('no-app', { appName: n });
  return e;
}
function pe(n, e, t) {
  var r;
  let s = (r = Qi[n]) !== null && r !== void 0 ? r : n;
  t && (s += `-${t}`);
  const i = s.match(/\s|\//),
    o = e.match(/\s|\//);
  if (i || o) {
    const c = [`Unable to register library "${s}" with version "${e}":`];
    i &&
      c.push(
        `library name "${s}" contains illegal characters (whitespace or "/")`,
      ),
      i && o && c.push('and'),
      o &&
        c.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`,
        ),
      ne.warn(c.join(' '));
    return;
  }
  Se(new ve(`${s}-version`, () => ({ library: s, version: e }), 'VERSION'));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ro = 'firebase-heartbeat-database',
  so = 1,
  Ce = 'firebase-heartbeat-store';
let ot = null;
function Yn() {
  return (
    ot ||
      (ot = wi(ro, so, {
        upgrade: (n, e) => {
          switch (e) {
            case 0:
              try {
                n.createObjectStore(Ce);
              } catch (t) {
                console.warn(t);
              }
          }
        },
      }).catch((n) => {
        throw J.create('idb-open', { originalErrorMessage: n.message });
      })),
    ot
  );
}
async function io(n) {
  try {
    const t = (await Yn()).transaction(Ce),
      r = await t.objectStore(Ce).get(Xn(n));
    return await t.done, r;
  } catch (e) {
    if (e instanceof Y) ne.warn(e.message);
    else {
      const t = J.create('idb-get', { originalErrorMessage: e?.message });
      ne.warn(t.message);
    }
  }
}
async function Jt(n, e) {
  try {
    const r = (await Yn()).transaction(Ce, 'readwrite');
    await r.objectStore(Ce).put(e, Xn(n)), await r.done;
  } catch (t) {
    if (t instanceof Y) ne.warn(t.message);
    else {
      const r = J.create('idb-set', { originalErrorMessage: t?.message });
      ne.warn(r.message);
    }
  }
}
function Xn(n) {
  return `${n.name}!${n.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const oo = 1024,
  ao = 30 * 24 * 60 * 60 * 1e3;
class co {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const t = this.container.getProvider('app').getImmediate();
    (this._storage = new uo(t)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var e, t;
    const s = this.container
        .getProvider('platform-logger')
        .getImmediate()
        .getPlatformInfoString(),
      i = Yt();
    if (
      !(
        ((e = this._heartbeatsCache) === null || e === void 0
          ? void 0
          : e.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null)
      ) &&
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === i ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === i)
      )
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: i, agent: s }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((o) => {
            const c = new Date(o.date).valueOf();
            return Date.now() - c <= ao;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    var e;
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      ((e = this._heartbeatsCache) === null || e === void 0
        ? void 0
        : e.heartbeats) == null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return '';
    const t = Yt(),
      { heartbeatsToSend: r, unsentEntries: s } = lo(
        this._heartbeatsCache.heartbeats,
      ),
      i = Vn(JSON.stringify({ version: 2, heartbeats: r }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = t),
      s.length > 0
        ? ((this._heartbeatsCache.heartbeats = s),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      i
    );
  }
}
function Yt() {
  return new Date().toISOString().substring(0, 10);
}
function lo(n, e = oo) {
  const t = [];
  let r = n.slice();
  for (const s of n) {
    const i = t.find((o) => o.agent === s.agent);
    if (i) {
      if ((i.dates.push(s.date), Xt(t) > e)) {
        i.dates.pop();
        break;
      }
    } else if ((t.push({ agent: s.agent, dates: [s.date] }), Xt(t) > e)) {
      t.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: t, unsentEntries: r };
}
class uo {
  constructor(e) {
    (this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return Ys()
      ? Xs()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const t = await io(this.app);
      return t?.heartbeats ? t : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return Jt(this.app, {
        lastSentHeartbeatDate:
          (t = e.lastSentHeartbeatDate) !== null && t !== void 0
            ? t
            : s.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return Jt(this.app, {
        lastSentHeartbeatDate:
          (t = e.lastSentHeartbeatDate) !== null && t !== void 0
            ? t
            : s.lastSentHeartbeatDate,
        heartbeats: [...s.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function Xt(n) {
  return Vn(JSON.stringify({ version: 2, heartbeats: n })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ho(n) {
  Se(new ve('platform-logger', (e) => new Ti(e), 'PRIVATE')),
    Se(new ve('heartbeat', (e) => new co(e), 'PRIVATE')),
    pe(It, Kt, n),
    pe(It, Kt, 'esm2017'),
    pe('fire-js', '');
}
ho('');
function Qn() {
  return {
    'dependent-sdk-initialized-before-auth':
      'Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.',
  };
}
const fo = Qn,
  Zn = new Pe('auth', 'Firebase', Qn());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const We = new Gn('@firebase/auth');
function po(n, ...e) {
  We.logLevel <= b.WARN && We.warn(`Auth (${Oe}): ${n}`, ...e);
}
function Ue(n, ...e) {
  We.logLevel <= b.ERROR && We.error(`Auth (${Oe}): ${n}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function R(n, ...e) {
  throw Dt(n, ...e);
}
function P(n, ...e) {
  return Dt(n, ...e);
}
function er(n, e, t) {
  const r = Object.assign(Object.assign({}, fo()), { [e]: t });
  return new Pe('auth', 'Firebase', r).create(e, { appName: n.name });
}
function $(n) {
  return er(
    n,
    'operation-not-supported-in-this-environment',
    'Operations that alter the current user are not supported in conjunction with FirebaseServerApp',
  );
}
function Dt(n, ...e) {
  if (typeof n != 'string') {
    const t = e[0],
      r = [...e.slice(1)];
    return r[0] && (r[0].appName = n.name), n._errorFactory.create(t, ...r);
  }
  return Zn.create(n, ...e);
}
function p(n, e, ...t) {
  if (!n) throw Dt(e, ...t);
}
function O(n) {
  const e = 'INTERNAL ASSERTION FAILED: ' + n;
  throw (Ue(e), new Error(e));
}
function U(n, e) {
  n || O(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Et() {
  var n;
  return (
    (typeof self < 'u' &&
      ((n = self.location) === null || n === void 0 ? void 0 : n.href)) ||
    ''
  );
}
function mo() {
  return Qt() === 'http:' || Qt() === 'https:';
}
function Qt() {
  var n;
  return (
    (typeof self < 'u' &&
      ((n = self.location) === null || n === void 0 ? void 0 : n.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function go() {
  return typeof navigator < 'u' &&
    navigator &&
    'onLine' in navigator &&
    typeof navigator.onLine == 'boolean' &&
    (mo() || Ks() || 'connection' in navigator)
    ? navigator.onLine
    : !0;
}
function _o() {
  if (typeof navigator > 'u') return null;
  const n = navigator;
  return (n.languages && n.languages[0]) || n.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class De {
  constructor(e, t) {
    (this.shortDelay = e),
      (this.longDelay = t),
      U(t > e, 'Short delay should be less than long delay!'),
      (this.isMobile = Gs() || qs());
  }
  get() {
    return go()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Lt(n, e) {
  U(n.emulator, 'Emulator should always be set here');
  const { url: t } = n.emulator;
  return e ? `${t}${e.startsWith('/') ? e.slice(1) : e}` : t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tr {
  static initialize(e, t, r) {
    (this.fetchImpl = e),
      t && (this.headersImpl = t),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < 'u' && 'fetch' in self) return self.fetch;
    if (typeof globalThis < 'u' && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < 'u') return fetch;
    O(
      'Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill',
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < 'u' && 'Headers' in self) return self.Headers;
    if (typeof globalThis < 'u' && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < 'u') return Headers;
    O(
      'Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill',
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < 'u' && 'Response' in self) return self.Response;
    if (typeof globalThis < 'u' && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < 'u') return Response;
    O(
      'Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill',
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vo = {
  CREDENTIAL_MISMATCH: 'custom-token-mismatch',
  MISSING_CUSTOM_TOKEN: 'internal-error',
  INVALID_IDENTIFIER: 'invalid-email',
  MISSING_CONTINUE_URI: 'internal-error',
  INVALID_PASSWORD: 'wrong-password',
  MISSING_PASSWORD: 'missing-password',
  INVALID_LOGIN_CREDENTIALS: 'invalid-credential',
  EMAIL_EXISTS: 'email-already-in-use',
  PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
  INVALID_IDP_RESPONSE: 'invalid-credential',
  INVALID_PENDING_TOKEN: 'invalid-credential',
  FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
  MISSING_REQ_TYPE: 'internal-error',
  EMAIL_NOT_FOUND: 'user-not-found',
  RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
  EXPIRED_OOB_CODE: 'expired-action-code',
  INVALID_OOB_CODE: 'invalid-action-code',
  MISSING_OOB_CODE: 'internal-error',
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
  INVALID_ID_TOKEN: 'invalid-user-token',
  TOKEN_EXPIRED: 'user-token-expired',
  USER_NOT_FOUND: 'user-token-expired',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: 'password-does-not-meet-requirements',
  INVALID_CODE: 'invalid-verification-code',
  INVALID_SESSION_INFO: 'invalid-verification-id',
  INVALID_TEMPORARY_PROOF: 'invalid-credential',
  MISSING_SESSION_INFO: 'missing-verification-id',
  SESSION_EXPIRED: 'code-expired',
  MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
  UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
  INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
  ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
  INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
  MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
  MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
  MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
  SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
  SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
  BLOCKING_FUNCTION_ERROR_RESPONSE: 'internal-error',
  RECAPTCHA_NOT_ENABLED: 'recaptcha-not-enabled',
  MISSING_RECAPTCHA_TOKEN: 'missing-recaptcha-token',
  INVALID_RECAPTCHA_TOKEN: 'invalid-recaptcha-token',
  INVALID_RECAPTCHA_ACTION: 'invalid-recaptcha-action',
  MISSING_CLIENT_TYPE: 'missing-client-type',
  MISSING_RECAPTCHA_VERSION: 'missing-recaptcha-version',
  INVALID_RECAPTCHA_VERSION: 'invalid-recaptcha-version',
  INVALID_REQ_TYPE: 'invalid-req-type',
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const bo = new De(3e4, 6e4);
function X(n, e) {
  return n.tenantId && !e.tenantId
    ? Object.assign(Object.assign({}, e), { tenantId: n.tenantId })
    : e;
}
async function Q(n, e, t, r, s = {}) {
  return nr(n, s, async () => {
    let i = {},
      o = {};
    r && (e === 'GET' ? (o = r) : (i = { body: JSON.stringify(r) }));
    const c = Ne(Object.assign({ key: n.config.apiKey }, o)).slice(1),
      a = await n._getAdditionalHeaders();
    return (
      (a['Content-Type'] = 'application/json'),
      n.languageCode && (a['X-Firebase-Locale'] = n.languageCode),
      tr.fetch()(
        rr(n, n.config.apiHost, t, c),
        Object.assign(
          { method: e, headers: a, referrerPolicy: 'no-referrer' },
          i,
        ),
      )
    );
  });
}
async function nr(n, e, t) {
  n._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, vo), e);
  try {
    const s = new wo(n),
      i = await Promise.race([t(), s.promise]);
    s.clearNetworkTimeout();
    const o = await i.json();
    if ('needConfirmation' in o)
      throw xe(n, 'account-exists-with-different-credential', o);
    if (i.ok && !('errorMessage' in o)) return o;
    {
      const c = i.ok ? o.errorMessage : o.error.message,
        [a, l] = c.split(' : ');
      if (a === 'FEDERATED_USER_ID_ALREADY_LINKED')
        throw xe(n, 'credential-already-in-use', o);
      if (a === 'EMAIL_EXISTS') throw xe(n, 'email-already-in-use', o);
      if (a === 'USER_DISABLED') throw xe(n, 'user-disabled', o);
      const h = r[a] || a.toLowerCase().replace(/[_\s]+/g, '-');
      if (l) throw er(n, h, l);
      R(n, h);
    }
  } catch (s) {
    if (s instanceof Y) throw s;
    R(n, 'network-request-failed', { message: String(s) });
  }
}
async function Le(n, e, t, r, s = {}) {
  const i = await Q(n, e, t, r, s);
  return (
    'mfaPendingCredential' in i &&
      R(n, 'multi-factor-auth-required', { _serverResponse: i }),
    i
  );
}
function rr(n, e, t, r) {
  const s = `${e}${t}?${r}`;
  return n.config.emulator ? Lt(n.config, s) : `${n.config.apiScheme}://${s}`;
}
function Io(n) {
  switch (n) {
    case 'ENFORCE':
      return 'ENFORCE';
    case 'AUDIT':
      return 'AUDIT';
    case 'OFF':
      return 'OFF';
    default:
      return 'ENFORCEMENT_STATE_UNSPECIFIED';
  }
}
class wo {
  constructor(e) {
    (this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((t, r) => {
        this.timer = setTimeout(
          () => r(P(this.auth, 'network-request-failed')),
          bo.get(),
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function xe(n, e, t) {
  const r = { appName: n.name };
  t.email && (r.email = t.email),
    t.phoneNumber && (r.phoneNumber = t.phoneNumber);
  const s = P(n, e, r);
  return (s.customData._tokenResponse = t), s;
}
function Zt(n) {
  return n !== void 0 && n.enterprise !== void 0;
}
class yo {
  constructor(e) {
    if (
      ((this.siteKey = ''),
      (this.recaptchaEnforcementState = []),
      e.recaptchaKey === void 0)
    )
      throw new Error('recaptchaKey undefined');
    (this.siteKey = e.recaptchaKey.split('/')[3]),
      (this.recaptchaEnforcementState = e.recaptchaEnforcementState);
  }
  getProviderEnforcementState(e) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null;
    for (const t of this.recaptchaEnforcementState)
      if (t.provider && t.provider === e) return Io(t.enforcementState);
    return null;
  }
  isProviderEnabled(e) {
    return (
      this.getProviderEnforcementState(e) === 'ENFORCE' ||
      this.getProviderEnforcementState(e) === 'AUDIT'
    );
  }
}
async function Eo(n, e) {
  return Q(n, 'GET', '/v2/recaptchaConfig', X(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function To(n, e) {
  return Q(n, 'POST', '/v1/accounts:delete', e);
}
async function sr(n, e) {
  return Q(n, 'POST', '/v1/accounts:lookup', e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Te(n) {
  if (n)
    try {
      const e = new Date(Number(n));
      if (!isNaN(e.getTime())) return e.toUTCString();
    } catch {}
}
async function So(n, e = !1) {
  const t = oe(n),
    r = await t.getIdToken(e),
    s = Mt(r);
  p(s && s.exp && s.auth_time && s.iat, t.auth, 'internal-error');
  const i = typeof s.firebase == 'object' ? s.firebase : void 0,
    o = i?.sign_in_provider;
  return {
    claims: s,
    token: r,
    authTime: Te(at(s.auth_time)),
    issuedAtTime: Te(at(s.iat)),
    expirationTime: Te(at(s.exp)),
    signInProvider: o || null,
    signInSecondFactor: i?.sign_in_second_factor || null,
  };
}
function at(n) {
  return Number(n) * 1e3;
}
function Mt(n) {
  const [e, t, r] = n.split('.');
  if (e === void 0 || t === void 0 || r === void 0)
    return Ue('JWT malformed, contained fewer than 3 sections'), null;
  try {
    const s = Hn(t);
    return s
      ? JSON.parse(s)
      : (Ue('Failed to decode base64 JWT payload'), null);
  } catch (s) {
    return Ue('Caught error parsing JWT payload as JSON', s?.toString()), null;
  }
}
function en(n) {
  const e = Mt(n);
  return (
    p(e, 'internal-error'),
    p(typeof e.exp < 'u', 'internal-error'),
    p(typeof e.iat < 'u', 'internal-error'),
    Number(e.exp) - Number(e.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Re(n, e, t = !1) {
  if (t) return e;
  try {
    return await e;
  } catch (r) {
    throw (
      (r instanceof Y &&
        Co(r) &&
        n.auth.currentUser === n &&
        (await n.auth.signOut()),
      r)
    );
  }
}
function Co({ code: n }) {
  return n === 'auth/user-disabled' || n === 'auth/user-token-expired';
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ro {
  constructor(e) {
    (this.user = e),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    var t;
    if (e) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const s =
        ((t = this.user.stsTokenManager.expirationTime) !== null && t !== void 0
          ? t
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, s);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning) return;
    const t = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, t);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (e) {
      e?.code === 'auth/network-request-failed' && this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tt {
  constructor(e, t) {
    (this.createdAt = e), (this.lastLoginAt = t), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = Te(this.lastLoginAt)),
      (this.creationTime = Te(this.createdAt));
  }
  _copy(e) {
    (this.createdAt = e.createdAt),
      (this.lastLoginAt = e.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ze(n) {
  var e;
  const t = n.auth,
    r = await n.getIdToken(),
    s = await Re(n, sr(t, { idToken: r }));
  p(s?.users.length, t, 'internal-error');
  const i = s.users[0];
  n._notifyReloadListener(i);
  const o =
      !((e = i.providerUserInfo) === null || e === void 0) && e.length
        ? ir(i.providerUserInfo)
        : [],
    c = ko(n.providerData, o),
    a = n.isAnonymous,
    l = !(n.email && i.passwordHash) && !c?.length,
    h = a ? l : !1,
    f = {
      uid: i.localId,
      displayName: i.displayName || null,
      photoURL: i.photoUrl || null,
      email: i.email || null,
      emailVerified: i.emailVerified || !1,
      phoneNumber: i.phoneNumber || null,
      tenantId: i.tenantId || null,
      providerData: c,
      metadata: new Tt(i.createdAt, i.lastLoginAt),
      isAnonymous: h,
    };
  Object.assign(n, f);
}
async function Ao(n) {
  const e = oe(n);
  await ze(e),
    await e.auth._persistUserIfCurrent(e),
    e.auth._notifyListenersIfCurrent(e);
}
function ko(n, e) {
  return [
    ...n.filter((r) => !e.some((s) => s.providerId === r.providerId)),
    ...e,
  ];
}
function ir(n) {
  return n.map((e) => {
    var { providerId: t } = e,
      r = At(e, ['providerId']);
    return {
      providerId: t,
      uid: r.rawId || '',
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Po(n, e) {
  const t = await nr(n, {}, async () => {
    const r = Ne({ grant_type: 'refresh_token', refresh_token: e }).slice(1),
      { tokenApiHost: s, apiKey: i } = n.config,
      o = rr(n, s, '/v1/token', `key=${i}`),
      c = await n._getAdditionalHeaders();
    return (
      (c['Content-Type'] = 'application/x-www-form-urlencoded'),
      tr.fetch()(o, { method: 'POST', headers: c, body: r })
    );
  });
  return {
    accessToken: t.access_token,
    expiresIn: t.expires_in,
    refreshToken: t.refresh_token,
  };
}
async function No(n, e) {
  return Q(n, 'POST', '/v2/accounts:revokeToken', X(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class me {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    p(e.idToken, 'internal-error'),
      p(typeof e.idToken < 'u', 'internal-error'),
      p(typeof e.refreshToken < 'u', 'internal-error');
    const t =
      'expiresIn' in e && typeof e.expiresIn < 'u'
        ? Number(e.expiresIn)
        : en(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
  }
  updateFromIdToken(e) {
    p(e.length !== 0, 'internal-error');
    const t = en(e);
    this.updateTokensAndExpiration(e, null, t);
  }
  async getToken(e, t = !1) {
    return !t && this.accessToken && !this.isExpired
      ? this.accessToken
      : (p(this.refreshToken, e, 'user-token-expired'),
        this.refreshToken
          ? (await this.refresh(e, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, t) {
    const { accessToken: r, refreshToken: s, expiresIn: i } = await Po(e, t);
    this.updateTokensAndExpiration(r, s, Number(i));
  }
  updateTokensAndExpiration(e, t, r) {
    (this.refreshToken = t || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(e, t) {
    const { refreshToken: r, accessToken: s, expirationTime: i } = t,
      o = new me();
    return (
      r &&
        (p(typeof r == 'string', 'internal-error', { appName: e }),
        (o.refreshToken = r)),
      s &&
        (p(typeof s == 'string', 'internal-error', { appName: e }),
        (o.accessToken = s)),
      i &&
        (p(typeof i == 'number', 'internal-error', { appName: e }),
        (o.expirationTime = i)),
      o
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(e) {
    (this.accessToken = e.accessToken),
      (this.refreshToken = e.refreshToken),
      (this.expirationTime = e.expirationTime);
  }
  _clone() {
    return Object.assign(new me(), this.toJSON());
  }
  _performRefresh() {
    return O('not implemented');
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function j(n, e) {
  p(typeof n == 'string' || typeof n > 'u', 'internal-error', { appName: e });
}
class D {
  constructor(e) {
    var { uid: t, auth: r, stsTokenManager: s } = e,
      i = At(e, ['uid', 'auth', 'stsTokenManager']);
    (this.providerId = 'firebase'),
      (this.proactiveRefresh = new Ro(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = t),
      (this.auth = r),
      (this.stsTokenManager = s),
      (this.accessToken = s.accessToken),
      (this.displayName = i.displayName || null),
      (this.email = i.email || null),
      (this.emailVerified = i.emailVerified || !1),
      (this.phoneNumber = i.phoneNumber || null),
      (this.photoURL = i.photoURL || null),
      (this.isAnonymous = i.isAnonymous || !1),
      (this.tenantId = i.tenantId || null),
      (this.providerData = i.providerData ? [...i.providerData] : []),
      (this.metadata = new Tt(i.createdAt || void 0, i.lastLoginAt || void 0));
  }
  async getIdToken(e) {
    const t = await Re(this, this.stsTokenManager.getToken(this.auth, e));
    return (
      p(t, this.auth, 'internal-error'),
      this.accessToken !== t &&
        ((this.accessToken = t),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      t
    );
  }
  getIdTokenResult(e) {
    return So(this, e);
  }
  reload() {
    return Ao(this);
  }
  _assign(e) {
    this !== e &&
      (p(this.uid === e.uid, this.auth, 'internal-error'),
      (this.displayName = e.displayName),
      (this.photoURL = e.photoURL),
      (this.email = e.email),
      (this.emailVerified = e.emailVerified),
      (this.phoneNumber = e.phoneNumber),
      (this.isAnonymous = e.isAnonymous),
      (this.tenantId = e.tenantId),
      (this.providerData = e.providerData.map((t) => Object.assign({}, t))),
      this.metadata._copy(e.metadata),
      this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const t = new D(
      Object.assign(Object.assign({}, this), {
        auth: e,
        stsTokenManager: this.stsTokenManager._clone(),
      }),
    );
    return t.metadata._copy(this.metadata), t;
  }
  _onReload(e) {
    p(!this.reloadListener, this.auth, 'internal-error'),
      (this.reloadListener = e),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, t = !1) {
    let r = !1;
    e.idToken &&
      e.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(e), (r = !0)),
      t && (await ze(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (k(this.auth.app)) return Promise.reject($(this.auth));
    const e = await this.getIdToken();
    return (
      await Re(this, To(this.auth, { idToken: e })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((e) => Object.assign({}, e)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON(),
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name },
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || '';
  }
  static _fromJSON(e, t) {
    var r, s, i, o, c, a, l, h;
    const f = (r = t.displayName) !== null && r !== void 0 ? r : void 0,
      m = (s = t.email) !== null && s !== void 0 ? s : void 0,
      y = (i = t.phoneNumber) !== null && i !== void 0 ? i : void 0,
      g = (o = t.photoURL) !== null && o !== void 0 ? o : void 0,
      I = (c = t.tenantId) !== null && c !== void 0 ? c : void 0,
      w = (a = t._redirectEventId) !== null && a !== void 0 ? a : void 0,
      _ = (l = t.createdAt) !== null && l !== void 0 ? l : void 0,
      v = (h = t.lastLoginAt) !== null && h !== void 0 ? h : void 0,
      {
        uid: E,
        emailVerified: T,
        isAnonymous: ce,
        providerData: le,
        stsTokenManager: S,
      } = t;
    p(E && S, e, 'internal-error');
    const et = me.fromJSON(this.name, S);
    p(typeof E == 'string', e, 'internal-error'),
      j(f, e.name),
      j(m, e.name),
      p(typeof T == 'boolean', e, 'internal-error'),
      p(typeof ce == 'boolean', e, 'internal-error'),
      j(y, e.name),
      j(g, e.name),
      j(I, e.name),
      j(w, e.name),
      j(_, e.name),
      j(v, e.name);
    const de = new D({
      uid: E,
      auth: e,
      email: m,
      emailVerified: T,
      displayName: f,
      isAnonymous: ce,
      photoURL: g,
      phoneNumber: y,
      tenantId: I,
      stsTokenManager: et,
      createdAt: _,
      lastLoginAt: v,
    });
    return (
      le &&
        Array.isArray(le) &&
        (de.providerData = le.map((we) => Object.assign({}, we))),
      w && (de._redirectEventId = w),
      de
    );
  }
  static async _fromIdTokenResponse(e, t, r = !1) {
    const s = new me();
    s.updateFromServerResponse(t);
    const i = new D({
      uid: t.localId,
      auth: e,
      stsTokenManager: s,
      isAnonymous: r,
    });
    return await ze(i), i;
  }
  static async _fromGetAccountInfoResponse(e, t, r) {
    const s = t.users[0];
    p(s.localId !== void 0, 'internal-error');
    const i = s.providerUserInfo !== void 0 ? ir(s.providerUserInfo) : [],
      o = !(s.email && s.passwordHash) && !i?.length,
      c = new me();
    c.updateFromIdToken(r);
    const a = new D({
        uid: s.localId,
        auth: e,
        stsTokenManager: c,
        isAnonymous: o,
      }),
      l = {
        uid: s.localId,
        displayName: s.displayName || null,
        photoURL: s.photoUrl || null,
        email: s.email || null,
        emailVerified: s.emailVerified || !1,
        phoneNumber: s.phoneNumber || null,
        tenantId: s.tenantId || null,
        providerData: i,
        metadata: new Tt(s.createdAt, s.lastLoginAt),
        isAnonymous: !(s.email && s.passwordHash) && !i?.length,
      };
    return Object.assign(a, l), a;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tn = new Map();
function L(n) {
  U(n instanceof Function, 'Expected a class definition');
  let e = tn.get(n);
  return e
    ? (U(e instanceof n, 'Instance stored in cache mismatched with class'), e)
    : ((e = new n()), tn.set(n, e), e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class or {
  constructor() {
    (this.type = 'NONE'), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, t) {
    this.storage[e] = t;
  }
  async _get(e) {
    const t = this.storage[e];
    return t === void 0 ? null : t;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, t) {}
  _removeListener(e, t) {}
}
or.type = 'NONE';
const nn = or;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Fe(n, e, t) {
  return `firebase:${n}:${e}:${t}`;
}
class ge {
  constructor(e, t, r) {
    (this.persistence = e), (this.auth = t), (this.userKey = r);
    const { config: s, name: i } = this.auth;
    (this.fullUserKey = Fe(this.userKey, s.apiKey, i)),
      (this.fullPersistenceKey = Fe('persistence', s.apiKey, i)),
      (this.boundEventHandler = t._onStorageEvent.bind(t)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? D._fromJSON(this.auth, e) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type,
    );
  }
  async setPersistence(e) {
    if (this.persistence === e) return;
    const t = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = e), t))
      return this.setCurrentUser(t);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, t, r = 'authUser') {
    if (!t.length) return new ge(L(nn), e, r);
    const s = (
      await Promise.all(
        t.map(async (l) => {
          if (await l._isAvailable()) return l;
        }),
      )
    ).filter((l) => l);
    let i = s[0] || L(nn);
    const o = Fe(r, e.config.apiKey, e.name);
    let c = null;
    for (const l of t)
      try {
        const h = await l._get(o);
        if (h) {
          const f = D._fromJSON(e, h);
          l !== i && (c = f), (i = l);
          break;
        }
      } catch {}
    const a = s.filter((l) => l._shouldAllowMigration);
    return !i._shouldAllowMigration || !a.length
      ? new ge(i, e, r)
      : ((i = a[0]),
        c && (await i._set(o, c.toJSON())),
        await Promise.all(
          t.map(async (l) => {
            if (l !== i)
              try {
                await l._remove(o);
              } catch {}
          }),
        ),
        new ge(i, e, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rn(n) {
  const e = n.toLowerCase();
  if (e.includes('opera/') || e.includes('opr/') || e.includes('opios/'))
    return 'Opera';
  if (lr(e)) return 'IEMobile';
  if (e.includes('msie') || e.includes('trident/')) return 'IE';
  if (e.includes('edge/')) return 'Edge';
  if (ar(e)) return 'Firefox';
  if (e.includes('silk/')) return 'Silk';
  if (ur(e)) return 'Blackberry';
  if (hr(e)) return 'Webos';
  if ($t(e)) return 'Safari';
  if ((e.includes('chrome/') || cr(e)) && !e.includes('edge/')) return 'Chrome';
  if (dr(e)) return 'Android';
  {
    const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = n.match(t);
    if (r?.length === 2) return r[1];
  }
  return 'Other';
}
function ar(n = C()) {
  return /firefox\//i.test(n);
}
function $t(n = C()) {
  const e = n.toLowerCase();
  return (
    e.includes('safari/') &&
    !e.includes('chrome/') &&
    !e.includes('crios/') &&
    !e.includes('android')
  );
}
function cr(n = C()) {
  return /crios\//i.test(n);
}
function lr(n = C()) {
  return /iemobile/i.test(n);
}
function dr(n = C()) {
  return /android/i.test(n);
}
function ur(n = C()) {
  return /blackberry/i.test(n);
}
function hr(n = C()) {
  return /webos/i.test(n);
}
function Ye(n = C()) {
  return (
    /iphone|ipad|ipod/i.test(n) || (/macintosh/i.test(n) && /mobile/i.test(n))
  );
}
function Oo(n = C()) {
  var e;
  return (
    Ye(n) &&
    !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
  );
}
function Do() {
  return Js() && document.documentMode === 10;
}
function fr(n = C()) {
  return Ye(n) || dr(n) || hr(n) || ur(n) || /windows phone/i.test(n) || lr(n);
}
function Lo() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pr(n, e = []) {
  let t;
  switch (n) {
    case 'Browser':
      t = rn(C());
      break;
    case 'Worker':
      t = `${rn(C())}-${n}`;
      break;
    default:
      t = n;
  }
  const r = e.length ? e.join(',') : 'FirebaseCore-web';
  return `${t}/JsCore/${Oe}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mo {
  constructor(e) {
    (this.auth = e), (this.queue = []);
  }
  pushCallback(e, t) {
    const r = (i) =>
      new Promise((o, c) => {
        try {
          const a = e(i);
          o(a);
        } catch (a) {
          c(a);
        }
      });
    (r.onAbort = t), this.queue.push(r);
    const s = this.queue.length - 1;
    return () => {
      this.queue[s] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e) return;
    const t = [];
    try {
      for (const r of this.queue) await r(e), r.onAbort && t.push(r.onAbort);
    } catch (r) {
      t.reverse();
      for (const s of t)
        try {
          s();
        } catch {}
      throw this.auth._errorFactory.create('login-blocked', {
        originalMessage: r?.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function $o(n, e = {}) {
  return Q(n, 'GET', '/v2/passwordPolicy', X(n, e));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xo = 6;
class Uo {
  constructor(e) {
    var t, r, s, i;
    const o = e.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (t = o.minPasswordLength) !== null && t !== void 0 ? t : xo),
      o.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength),
      o.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          o.containsLowercaseCharacter),
      o.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          o.containsUppercaseCharacter),
      o.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          o.containsNumericCharacter),
      o.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          o.containsNonAlphanumericCharacter),
      (this.enforcementState = e.enforcementState),
      this.enforcementState === 'ENFORCEMENT_STATE_UNSPECIFIED' &&
        (this.enforcementState = 'OFF'),
      (this.allowedNonAlphanumericCharacters =
        (s =
          (r = e.allowedNonAlphanumericCharacters) === null || r === void 0
            ? void 0
            : r.join('')) !== null && s !== void 0
          ? s
          : ''),
      (this.forceUpgradeOnSignin =
        (i = e.forceUpgradeOnSignin) !== null && i !== void 0 ? i : !1),
      (this.schemaVersion = e.schemaVersion);
  }
  validatePassword(e) {
    var t, r, s, i, o, c;
    const a = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(e, a),
      this.validatePasswordCharacterOptions(e, a),
      a.isValid &&
        (a.isValid =
          (t = a.meetsMinPasswordLength) !== null && t !== void 0 ? t : !0),
      a.isValid &&
        (a.isValid =
          (r = a.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
      a.isValid &&
        (a.isValid =
          (s = a.containsLowercaseLetter) !== null && s !== void 0 ? s : !0),
      a.isValid &&
        (a.isValid =
          (i = a.containsUppercaseLetter) !== null && i !== void 0 ? i : !0),
      a.isValid &&
        (a.isValid =
          (o = a.containsNumericCharacter) !== null && o !== void 0 ? o : !0),
      a.isValid &&
        (a.isValid =
          (c = a.containsNonAlphanumericCharacter) !== null && c !== void 0
            ? c
            : !0),
      a
    );
  }
  validatePasswordLengthOptions(e, t) {
    const r = this.customStrengthOptions.minPasswordLength,
      s = this.customStrengthOptions.maxPasswordLength;
    r && (t.meetsMinPasswordLength = e.length >= r),
      s && (t.meetsMaxPasswordLength = e.length <= s);
  }
  validatePasswordCharacterOptions(e, t) {
    this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
    let r;
    for (let s = 0; s < e.length; s++)
      (r = e.charAt(s)),
        this.updatePasswordCharacterOptionsStatuses(
          t,
          r >= 'a' && r <= 'z',
          r >= 'A' && r <= 'Z',
          r >= '0' && r <= '9',
          this.allowedNonAlphanumericCharacters.includes(r),
        );
  }
  updatePasswordCharacterOptionsStatuses(e, t, r, s, i) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (e.containsNumericCharacter || (e.containsNumericCharacter = s)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (e.containsNonAlphanumericCharacter ||
          (e.containsNonAlphanumericCharacter = i));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fo {
  constructor(e, t, r, s) {
    (this.app = e),
      (this.heartbeatServiceProvider = t),
      (this.appCheckServiceProvider = r),
      (this.config = s),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new sn(this)),
      (this.idTokenSubscription = new sn(this)),
      (this.beforeStateQueue = new Mo(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = Zn),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = e.name),
      (this.clientVersion = s.sdkClientVersion);
  }
  _initializeWithPersistence(e, t) {
    return (
      t && (this._popupRedirectResolver = L(t)),
      (this._initializationPromise = this.queue(async () => {
        var r, s;
        if (
          !this._deleted &&
          ((this.persistenceManager = await ge.create(this, e)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(t),
            (this.lastNotifiedUid =
              ((s = this.currentUser) === null || s === void 0
                ? void 0
                : s.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        this._currentUser._assign(e), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(e, !0);
    }
  }
  async initializeCurrentUserFromIdToken(e) {
    try {
      const t = await sr(this, { idToken: e }),
        r = await D._fromGetAccountInfoResponse(this, t, e);
      await this.directlySetCurrentUser(r);
    } catch (t) {
      console.warn(
        'FirebaseServerApp could not login user with provided authIdToken: ',
        t,
      ),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(e) {
    var t;
    if (k(this.app)) {
      const o = this.app.settings.authIdToken;
      return o
        ? new Promise((c) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(o).then(c, c),
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const r = await this.assertedPersistence.getCurrentUser();
    let s = r,
      i = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o =
          (t = this.redirectUser) === null || t === void 0
            ? void 0
            : t._redirectEventId,
        c = s?._redirectEventId,
        a = await this.tryRedirectSignIn(e);
      (!o || o === c) && a?.user && ((s = a.user), (i = !0));
    }
    if (!s) return this.directlySetCurrentUser(null);
    if (!s._redirectEventId) {
      if (i)
        try {
          await this.beforeStateQueue.runMiddleware(s);
        } catch (o) {
          (s = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(o),
            );
        }
      return s
        ? this.reloadAndSetCurrentUserOrClear(s)
        : this.directlySetCurrentUser(null);
    }
    return (
      p(this._popupRedirectResolver, this, 'argument-error'),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === s._redirectEventId
        ? this.directlySetCurrentUser(s)
        : this.reloadAndSetCurrentUserOrClear(s)
    );
  }
  async tryRedirectSignIn(e) {
    let t = null;
    try {
      t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return t;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await ze(e);
    } catch (t) {
      if (t?.code !== 'auth/network-request-failed')
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = _o();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (k(this.app)) return Promise.reject($(this));
    const t = e ? oe(e) : null;
    return (
      t &&
        p(
          t.auth.config.apiKey === this.config.apiKey,
          this,
          'invalid-user-token',
        ),
      this._updateCurrentUser(t && t._clone(this))
    );
  }
  async _updateCurrentUser(e, t = !1) {
    if (!this._deleted)
      return (
        e && p(this.tenantId === e.tenantId, this, 'tenant-id-mismatch'),
        t || (await this.beforeStateQueue.runMiddleware(e)),
        this.queue(async () => {
          await this.directlySetCurrentUser(e), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return k(this.app)
      ? Promise.reject($(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(e) {
    return k(this.app)
      ? Promise.reject($(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(L(e));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(e) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const t = this._getPasswordPolicyInternal();
    return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            'unsupported-password-policy-schema-version',
            {},
          ),
        )
      : t.validatePassword(e);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const e = await $o(this),
      t = new Uo(e);
    this.tenantId === null
      ? (this._projectPasswordPolicy = t)
      : (this._tenantPasswordPolicies[this.tenantId] = t);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new Pe('auth', 'Firebase', e());
  }
  onAuthStateChanged(e, t, r) {
    return this.registerStateListener(this.authStateSubscription, e, t, r);
  }
  beforeAuthStateChanged(e, t) {
    return this.beforeStateQueue.pushCallback(e, t);
  }
  onIdTokenChanged(e, t, r) {
    return this.registerStateListener(this.idTokenSubscription, e, t, r);
  }
  authStateReady() {
    return new Promise((e, t) => {
      if (this.currentUser) e();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), e();
        }, t);
      }
    });
  }
  async revokeAccessToken(e) {
    if (this.currentUser) {
      const t = await this.currentUser.getIdToken(),
        r = {
          providerId: 'apple.com',
          tokenType: 'ACCESS_TOKEN',
          token: e,
          idToken: t,
        };
      this.tenantId != null && (r.tenantId = this.tenantId), await No(this, r);
    }
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON(),
    };
  }
  async _setRedirectUser(e, t) {
    const r = await this.getOrInitRedirectPersistenceManager(t);
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const t = (e && L(e)) || this._popupRedirectResolver;
      p(t, this, 'argument-error'),
        (this.redirectPersistenceManager = await ge.create(
          this,
          [L(t._redirectPersistence)],
          'redirectUser',
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var t, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((t = this._currentUser) === null || t === void 0
        ? void 0
        : t._redirectEventId) === e
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
              ? void 0
              : r._redirectEventId) === e
          ? this.redirectUser
          : null
    );
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var e, t;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (t = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !==
        null && t !== void 0
        ? t
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, t, r, s) {
    if (this._deleted) return () => {};
    const i = typeof t == 'function' ? t : t.next.bind(t);
    let o = !1;
    const c = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (p(c, this, 'internal-error'),
      c.then(() => {
        o || i(this.currentUser);
      }),
      typeof t == 'function')
    ) {
      const a = e.addObserver(t, r, s);
      return () => {
        (o = !0), a();
      };
    } else {
      const a = e.addObserver(t);
      return () => {
        (o = !0), a();
      };
    }
  }
  async directlySetCurrentUser(e) {
    this.currentUser &&
      this.currentUser !== e &&
      this._currentUser._stopProactiveRefresh(),
      e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
      (this.currentUser = e),
      e
        ? await this.assertedPersistence.setCurrentUser(e)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(e) {
    return (this.operations = this.operations.then(e, e)), this.operations;
  }
  get assertedPersistence() {
    return (
      p(this.persistenceManager, this, 'internal-error'),
      this.persistenceManager
    );
  }
  _logFramework(e) {
    !e ||
      this.frameworks.includes(e) ||
      (this.frameworks.push(e),
      this.frameworks.sort(),
      (this.clientVersion = pr(
        this.config.clientPlatform,
        this._getFrameworks(),
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const t = { 'X-Client-Version': this.clientVersion };
    this.app.options.appId && (t['X-Firebase-gmpid'] = this.app.options.appId);
    const r = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getHeartbeatsHeader());
    r && (t['X-Firebase-Client'] = r);
    const s = await this._getAppCheckToken();
    return s && (t['X-Firebase-AppCheck'] = s), t;
  }
  async _getAppCheckToken() {
    var e;
    const t = await ((e = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getToken());
    return (
      t?.error && po(`Error while retrieving App Check token: ${t.error}`),
      t?.token
    );
  }
}
function ae(n) {
  return oe(n);
}
class sn {
  constructor(e) {
    (this.auth = e),
      (this.observer = null),
      (this.addObserver = ni((t) => (this.observer = t)));
  }
  get next() {
    return (
      p(this.observer, this.auth, 'internal-error'),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Xe = {
  async loadJS() {
    throw new Error('Unable to load external scripts');
  },
  recaptchaV2Script: '',
  recaptchaEnterpriseScript: '',
  gapiScript: '',
};
function jo(n) {
  Xe = n;
}
function mr(n) {
  return Xe.loadJS(n);
}
function Bo() {
  return Xe.recaptchaEnterpriseScript;
}
function Vo() {
  return Xe.gapiScript;
}
function Ho(n) {
  return `__${n}${Math.floor(Math.random() * 1e6)}`;
}
const Wo = 'recaptcha-enterprise',
  zo = 'NO_RECAPTCHA';
class Go {
  constructor(e) {
    (this.type = Wo), (this.auth = ae(e));
  }
  async verify(e = 'verify', t = !1) {
    async function r(i) {
      if (!t) {
        if (i.tenantId == null && i._agentRecaptchaConfig != null)
          return i._agentRecaptchaConfig.siteKey;
        if (
          i.tenantId != null &&
          i._tenantRecaptchaConfigs[i.tenantId] !== void 0
        )
          return i._tenantRecaptchaConfigs[i.tenantId].siteKey;
      }
      return new Promise(async (o, c) => {
        Eo(i, {
          clientType: 'CLIENT_TYPE_WEB',
          version: 'RECAPTCHA_ENTERPRISE',
        })
          .then((a) => {
            if (a.recaptchaKey === void 0)
              c(new Error('recaptcha Enterprise site key undefined'));
            else {
              const l = new yo(a);
              return (
                i.tenantId == null
                  ? (i._agentRecaptchaConfig = l)
                  : (i._tenantRecaptchaConfigs[i.tenantId] = l),
                o(l.siteKey)
              );
            }
          })
          .catch((a) => {
            c(a);
          });
      });
    }
    function s(i, o, c) {
      const a = window.grecaptcha;
      Zt(a)
        ? a.enterprise.ready(() => {
            a.enterprise
              .execute(i, { action: e })
              .then((l) => {
                o(l);
              })
              .catch(() => {
                o(zo);
              });
          })
        : c(Error('No reCAPTCHA enterprise script loaded.'));
    }
    return new Promise((i, o) => {
      r(this.auth)
        .then((c) => {
          if (!t && Zt(window.grecaptcha)) s(c, i, o);
          else {
            if (typeof window > 'u') {
              o(new Error('RecaptchaVerifier is only supported in browser'));
              return;
            }
            let a = Bo();
            a.length !== 0 && (a += c),
              mr(a)
                .then(() => {
                  s(c, i, o);
                })
                .catch((l) => {
                  o(l);
                });
          }
        })
        .catch((c) => {
          o(c);
        });
    });
  }
}
async function on(n, e, t, r = !1) {
  const s = new Go(n);
  let i;
  try {
    i = await s.verify(t);
  } catch {
    i = await s.verify(t, !0);
  }
  const o = Object.assign({}, e);
  return (
    r
      ? Object.assign(o, { captchaResp: i })
      : Object.assign(o, { captchaResponse: i }),
    Object.assign(o, { clientType: 'CLIENT_TYPE_WEB' }),
    Object.assign(o, { recaptchaVersion: 'RECAPTCHA_ENTERPRISE' }),
    o
  );
}
async function St(n, e, t, r) {
  var s;
  if (
    !((s = n._getRecaptchaConfig()) === null || s === void 0) &&
    s.isProviderEnabled('EMAIL_PASSWORD_PROVIDER')
  ) {
    const i = await on(n, e, t, t === 'getOobCode');
    return r(n, i);
  } else
    return r(n, e).catch(async (i) => {
      if (i.code === 'auth/missing-recaptcha-token') {
        console.log(
          `${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`,
        );
        const o = await on(n, e, t, t === 'getOobCode');
        return r(n, o);
      } else return Promise.reject(i);
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ko(n, e) {
  const t = Jn(n, 'auth');
  if (t.isInitialized()) {
    const s = t.getImmediate(),
      i = t.getOptions();
    if (Ve(i, e ?? {})) return s;
    R(s, 'already-initialized');
  }
  return t.initialize({ options: e });
}
function qo(n, e) {
  const t = e?.persistence || [],
    r = (Array.isArray(t) ? t : [t]).map(L);
  e?.errorMap && n._updateErrorMap(e.errorMap),
    n._initializeWithPersistence(r, e?.popupRedirectResolver);
}
function Jo(n, e, t) {
  const r = ae(n);
  p(r._canInitEmulator, r, 'emulator-config-failed'),
    p(/^https?:\/\//.test(e), r, 'invalid-emulator-scheme');
  const s = !1,
    i = gr(e),
    { host: o, port: c } = Yo(e),
    a = c === null ? '' : `:${c}`;
  (r.config.emulator = { url: `${i}//${o}${a}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: o,
      port: c,
      protocol: i.replace(':', ''),
      options: Object.freeze({ disableWarnings: s }),
    })),
    Xo();
}
function gr(n) {
  const e = n.indexOf(':');
  return e < 0 ? '' : n.substr(0, e + 1);
}
function Yo(n) {
  const e = gr(n),
    t = /(\/\/)?([^?#/]+)/.exec(n.substr(e.length));
  if (!t) return { host: '', port: null };
  const r = t[2].split('@').pop() || '',
    s = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (s) {
    const i = s[1];
    return { host: i, port: an(r.substr(i.length + 1)) };
  } else {
    const [i, o] = r.split(':');
    return { host: i, port: an(o) };
  }
}
function an(n) {
  if (!n) return null;
  const e = Number(n);
  return isNaN(e) ? null : e;
}
function Xo() {
  function n() {
    const e = document.createElement('p'),
      t = e.style;
    (e.innerText =
      'Running in emulator mode. Do not use with production credentials.'),
      (t.position = 'fixed'),
      (t.width = '100%'),
      (t.backgroundColor = '#ffffff'),
      (t.border = '.1em solid #000000'),
      (t.color = '#b50000'),
      (t.bottom = '0px'),
      (t.left = '0px'),
      (t.margin = '0px'),
      (t.zIndex = '10000'),
      (t.textAlign = 'center'),
      e.classList.add('firebase-emulator-warning'),
      document.body.appendChild(e);
  }
  typeof console < 'u' &&
    typeof console.info == 'function' &&
    console.info(
      'WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.',
    ),
    typeof window < 'u' &&
      typeof document < 'u' &&
      (document.readyState === 'loading'
        ? window.addEventListener('DOMContentLoaded', n)
        : n());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xt {
  constructor(e, t) {
    (this.providerId = e), (this.signInMethod = t);
  }
  toJSON() {
    return O('not implemented');
  }
  _getIdTokenResponse(e) {
    return O('not implemented');
  }
  _linkToIdToken(e, t) {
    return O('not implemented');
  }
  _getReauthenticationResolver(e) {
    return O('not implemented');
  }
}
async function Qo(n, e) {
  return Q(n, 'POST', '/v1/accounts:signUp', e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Zo(n, e) {
  return Le(n, 'POST', '/v1/accounts:signInWithPassword', X(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ea(n, e) {
  return Le(n, 'POST', '/v1/accounts:signInWithEmailLink', X(n, e));
}
async function ta(n, e) {
  return Le(n, 'POST', '/v1/accounts:signInWithEmailLink', X(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ae extends xt {
  constructor(e, t, r, s = null) {
    super('password', r),
      (this._email = e),
      (this._password = t),
      (this._tenantId = s);
  }
  static _fromEmailAndPassword(e, t) {
    return new Ae(e, t, 'password');
  }
  static _fromEmailAndCode(e, t, r = null) {
    return new Ae(e, t, 'emailLink', r);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    };
  }
  static fromJSON(e) {
    const t = typeof e == 'string' ? JSON.parse(e) : e;
    if (t?.email && t?.password) {
      if (t.signInMethod === 'password')
        return this._fromEmailAndPassword(t.email, t.password);
      if (t.signInMethod === 'emailLink')
        return this._fromEmailAndCode(t.email, t.password, t.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(e) {
    switch (this.signInMethod) {
      case 'password':
        const t = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: 'CLIENT_TYPE_WEB',
        };
        return St(e, t, 'signInWithPassword', Zo);
      case 'emailLink':
        return ea(e, { email: this._email, oobCode: this._password });
      default:
        R(e, 'internal-error');
    }
  }
  async _linkToIdToken(e, t) {
    switch (this.signInMethod) {
      case 'password':
        const r = {
          idToken: t,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: 'CLIENT_TYPE_WEB',
        };
        return St(e, r, 'signUpPassword', Qo);
      case 'emailLink':
        return ta(e, {
          idToken: t,
          email: this._email,
          oobCode: this._password,
        });
      default:
        R(e, 'internal-error');
    }
  }
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function _e(n, e) {
  return Le(n, 'POST', '/v1/accounts:signInWithIdp', X(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const na = 'http://localhost';
class re extends xt {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(e) {
    const t = new re(e.providerId, e.signInMethod);
    return (
      e.idToken || e.accessToken
        ? (e.idToken && (t.idToken = e.idToken),
          e.accessToken && (t.accessToken = e.accessToken),
          e.nonce && !e.pendingToken && (t.nonce = e.nonce),
          e.pendingToken && (t.pendingToken = e.pendingToken))
        : e.oauthToken && e.oauthTokenSecret
          ? ((t.accessToken = e.oauthToken), (t.secret = e.oauthTokenSecret))
          : R('argument-error'),
      t
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(e) {
    const t = typeof e == 'string' ? JSON.parse(e) : e,
      { providerId: r, signInMethod: s } = t,
      i = At(t, ['providerId', 'signInMethod']);
    if (!r || !s) return null;
    const o = new re(r, s);
    return (
      (o.idToken = i.idToken || void 0),
      (o.accessToken = i.accessToken || void 0),
      (o.secret = i.secret),
      (o.nonce = i.nonce),
      (o.pendingToken = i.pendingToken || null),
      o
    );
  }
  _getIdTokenResponse(e) {
    const t = this.buildRequest();
    return _e(e, t);
  }
  _linkToIdToken(e, t) {
    const r = this.buildRequest();
    return (r.idToken = t), _e(e, r);
  }
  _getReauthenticationResolver(e) {
    const t = this.buildRequest();
    return (t.autoCreate = !1), _e(e, t);
  }
  buildRequest() {
    const e = { requestUri: na, returnSecureToken: !0 };
    if (this.pendingToken) e.pendingToken = this.pendingToken;
    else {
      const t = {};
      this.idToken && (t.id_token = this.idToken),
        this.accessToken && (t.access_token = this.accessToken),
        this.secret && (t.oauth_token_secret = this.secret),
        (t.providerId = this.providerId),
        this.nonce && !this.pendingToken && (t.nonce = this.nonce),
        (e.postBody = Ne(t));
    }
    return e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ra(n) {
  switch (n) {
    case 'recoverEmail':
      return 'RECOVER_EMAIL';
    case 'resetPassword':
      return 'PASSWORD_RESET';
    case 'signIn':
      return 'EMAIL_SIGNIN';
    case 'verifyEmail':
      return 'VERIFY_EMAIL';
    case 'verifyAndChangeEmail':
      return 'VERIFY_AND_CHANGE_EMAIL';
    case 'revertSecondFactorAddition':
      return 'REVERT_SECOND_FACTOR_ADDITION';
    default:
      return null;
  }
}
function sa(n) {
  const e = ye(Ee(n)).link,
    t = e ? ye(Ee(e)).deep_link_id : null,
    r = ye(Ee(n)).deep_link_id;
  return (r ? ye(Ee(r)).link : null) || r || t || e || n;
}
class Ut {
  constructor(e) {
    var t, r, s, i, o, c;
    const a = ye(Ee(e)),
      l = (t = a.apiKey) !== null && t !== void 0 ? t : null,
      h = (r = a.oobCode) !== null && r !== void 0 ? r : null,
      f = ra((s = a.mode) !== null && s !== void 0 ? s : null);
    p(l && h && f, 'argument-error'),
      (this.apiKey = l),
      (this.operation = f),
      (this.code = h),
      (this.continueUrl =
        (i = a.continueUrl) !== null && i !== void 0 ? i : null),
      (this.languageCode =
        (o = a.languageCode) !== null && o !== void 0 ? o : null),
      (this.tenantId = (c = a.tenantId) !== null && c !== void 0 ? c : null);
  }
  static parseLink(e) {
    const t = sa(e);
    try {
      return new Ut(t);
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ie {
  constructor() {
    this.providerId = Ie.PROVIDER_ID;
  }
  static credential(e, t) {
    return Ae._fromEmailAndPassword(e, t);
  }
  static credentialWithLink(e, t) {
    const r = Ut.parseLink(t);
    return p(r, 'argument-error'), Ae._fromEmailAndCode(e, r.code, r.tenantId);
  }
}
Ie.PROVIDER_ID = 'password';
Ie.EMAIL_PASSWORD_SIGN_IN_METHOD = 'password';
Ie.EMAIL_LINK_SIGN_IN_METHOD = 'emailLink';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _r {
  constructor(e) {
    (this.providerId = e),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  setCustomParameters(e) {
    return (this.customParameters = e), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Me extends _r {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class H extends Me {
  constructor() {
    super('facebook.com');
  }
  static credential(e) {
    return re._fromParams({
      providerId: H.PROVIDER_ID,
      signInMethod: H.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return H.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return H.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return H.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
H.FACEBOOK_SIGN_IN_METHOD = 'facebook.com';
H.PROVIDER_ID = 'facebook.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class W extends Me {
  constructor() {
    super('google.com'), this.addScope('profile');
  }
  static credential(e, t) {
    return re._fromParams({
      providerId: W.PROVIDER_ID,
      signInMethod: W.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: t,
    });
  }
  static credentialFromResult(e) {
    return W.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return W.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthIdToken: t, oauthAccessToken: r } = e;
    if (!t && !r) return null;
    try {
      return W.credential(t, r);
    } catch {
      return null;
    }
  }
}
W.GOOGLE_SIGN_IN_METHOD = 'google.com';
W.PROVIDER_ID = 'google.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class z extends Me {
  constructor() {
    super('github.com');
  }
  static credential(e) {
    return re._fromParams({
      providerId: z.PROVIDER_ID,
      signInMethod: z.GITHUB_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return z.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return z.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return z.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
z.GITHUB_SIGN_IN_METHOD = 'github.com';
z.PROVIDER_ID = 'github.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class G extends Me {
  constructor() {
    super('twitter.com');
  }
  static credential(e, t) {
    return re._fromParams({
      providerId: G.PROVIDER_ID,
      signInMethod: G.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: t,
    });
  }
  static credentialFromResult(e) {
    return G.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return G.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthAccessToken: t, oauthTokenSecret: r } = e;
    if (!t || !r) return null;
    try {
      return G.credential(t, r);
    } catch {
      return null;
    }
  }
}
G.TWITTER_SIGN_IN_METHOD = 'twitter.com';
G.PROVIDER_ID = 'twitter.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ia(n, e) {
  return Le(n, 'POST', '/v1/accounts:signUp', X(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class se {
  constructor(e) {
    (this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType);
  }
  static async _fromIdTokenResponse(e, t, r, s = !1) {
    const i = await D._fromIdTokenResponse(e, r, s),
      o = cn(r);
    return new se({
      user: i,
      providerId: o,
      _tokenResponse: r,
      operationType: t,
    });
  }
  static async _forOperation(e, t, r) {
    await e._updateTokensIfNecessary(r, !0);
    const s = cn(r);
    return new se({
      user: e,
      providerId: s,
      _tokenResponse: r,
      operationType: t,
    });
  }
}
function cn(n) {
  return n.providerId ? n.providerId : 'phoneNumber' in n ? 'phone' : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ge extends Y {
  constructor(e, t, r, s) {
    var i;
    super(t.code, t.message),
      (this.operationType = r),
      (this.user = s),
      Object.setPrototypeOf(this, Ge.prototype),
      (this.customData = {
        appName: e.name,
        tenantId: (i = e.tenantId) !== null && i !== void 0 ? i : void 0,
        _serverResponse: t.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(e, t, r, s) {
    return new Ge(e, t, r, s);
  }
}
function vr(n, e, t, r) {
  return (
    e === 'reauthenticate'
      ? t._getReauthenticationResolver(n)
      : t._getIdTokenResponse(n)
  ).catch((i) => {
    throw i.code === 'auth/multi-factor-auth-required'
      ? Ge._fromErrorAndOperation(n, i, e, r)
      : i;
  });
}
async function oa(n, e, t = !1) {
  const r = await Re(n, e._linkToIdToken(n.auth, await n.getIdToken()), t);
  return se._forOperation(n, 'link', r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aa(n, e, t = !1) {
  const { auth: r } = n;
  if (k(r.app)) return Promise.reject($(r));
  const s = 'reauthenticate';
  try {
    const i = await Re(n, vr(r, s, e, n), t);
    p(i.idToken, r, 'internal-error');
    const o = Mt(i.idToken);
    p(o, r, 'internal-error');
    const { sub: c } = o;
    return p(n.uid === c, r, 'user-mismatch'), se._forOperation(n, s, i);
  } catch (i) {
    throw (i?.code === 'auth/user-not-found' && R(r, 'user-mismatch'), i);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function br(n, e, t = !1) {
  if (k(n.app)) return Promise.reject($(n));
  const r = 'signIn',
    s = await vr(n, r, e),
    i = await se._fromIdTokenResponse(n, r, s);
  return t || (await n._updateCurrentUser(i.user)), i;
}
async function ca(n, e) {
  return br(ae(n), e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ir(n) {
  const e = ae(n);
  e._getPasswordPolicyInternal() && (await e._updatePasswordPolicy());
}
async function la(n, e, t) {
  if (k(n.app)) return Promise.reject($(n));
  const r = ae(n),
    o = await St(
      r,
      {
        returnSecureToken: !0,
        email: e,
        password: t,
        clientType: 'CLIENT_TYPE_WEB',
      },
      'signUpPassword',
      ia,
    ).catch((a) => {
      throw (a.code === 'auth/password-does-not-meet-requirements' && Ir(n), a);
    }),
    c = await se._fromIdTokenResponse(r, 'signIn', o);
  return await r._updateCurrentUser(c.user), c;
}
function da(n, e, t) {
  return k(n.app)
    ? Promise.reject($(n))
    : ca(oe(n), Ie.credential(e, t)).catch(async (r) => {
        throw (
          (r.code === 'auth/password-does-not-meet-requirements' && Ir(n), r)
        );
      });
}
function ua(n, e, t, r) {
  return oe(n).onIdTokenChanged(e, t, r);
}
function ha(n, e, t) {
  return oe(n).beforeAuthStateChanged(e, t);
}
const Ke = '__sak';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wr {
  constructor(e, t) {
    (this.storageRetriever = e), (this.type = t);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(Ke, '1'),
          this.storage.removeItem(Ke),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, t) {
    return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
  }
  _get(e) {
    const t = this.storage.getItem(e);
    return Promise.resolve(t ? JSON.parse(t) : null);
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function fa() {
  const n = C();
  return $t(n) || Ye(n);
}
const pa = 1e3,
  ma = 10;
class yr extends wr {
  constructor() {
    super(() => window.localStorage, 'LOCAL'),
      (this.boundEventHandler = (e, t) => this.onStorageEvent(e, t)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = fa() && Lo()),
      (this.fallbackToPolling = fr()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(e) {
    for (const t of Object.keys(this.listeners)) {
      const r = this.storage.getItem(t),
        s = this.localCache[t];
      r !== s && e(t, s, r);
    }
  }
  onStorageEvent(e, t = !1) {
    if (!e.key) {
      this.forAllChangedKeys((o, c, a) => {
        this.notifyListeners(o, a);
      });
      return;
    }
    const r = e.key;
    if (
      (t ? this.detachListener() : this.stopPolling(),
      this.safariLocalStorageNotSynced)
    ) {
      const o = this.storage.getItem(r);
      if (e.newValue !== o)
        e.newValue !== null
          ? this.storage.setItem(r, e.newValue)
          : this.storage.removeItem(r);
      else if (this.localCache[r] === e.newValue && !t) return;
    }
    const s = () => {
        const o = this.storage.getItem(r);
        (!t && this.localCache[r] === o) || this.notifyListeners(r, o);
      },
      i = this.storage.getItem(r);
    Do() && i !== e.newValue && e.newValue !== e.oldValue
      ? setTimeout(s, ma)
      : s();
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const r = this.listeners[e];
    if (r) for (const s of Array.from(r)) s(t && JSON.parse(t));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((e, t, r) => {
          this.onStorageEvent(
            new StorageEvent('storage', { key: e, oldValue: t, newValue: r }),
            !0,
          );
        });
      }, pa));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener('storage', this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener('storage', this.boundEventHandler);
  }
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[e] ||
        ((this.listeners[e] = new Set()),
        (this.localCache[e] = this.storage.getItem(e))),
      this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] &&
      (this.listeners[e].delete(t),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(e, t) {
    await super._set(e, t), (this.localCache[e] = JSON.stringify(t));
  }
  async _get(e) {
    const t = await super._get(e);
    return (this.localCache[e] = JSON.stringify(t)), t;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
yr.type = 'LOCAL';
const ga = yr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Er extends wr {
  constructor() {
    super(() => window.sessionStorage, 'SESSION');
  }
  _addListener(e, t) {}
  _removeListener(e, t) {}
}
Er.type = 'SESSION';
const Tr = Er;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _a(n) {
  return Promise.all(
    n.map(async (e) => {
      try {
        return { fulfilled: !0, value: await e };
      } catch (t) {
        return { fulfilled: !1, reason: t };
      }
    }),
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qe {
  constructor(e) {
    (this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(e) {
    const t = this.receivers.find((s) => s.isListeningto(e));
    if (t) return t;
    const r = new Qe(e);
    return this.receivers.push(r), r;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  async handleEvent(e) {
    const t = e,
      { eventId: r, eventType: s, data: i } = t.data,
      o = this.handlersMap[s];
    if (!o?.size) return;
    t.ports[0].postMessage({ status: 'ack', eventId: r, eventType: s });
    const c = Array.from(o).map(async (l) => l(t.origin, i)),
      a = await _a(c);
    t.ports[0].postMessage({
      status: 'done',
      eventId: r,
      eventType: s,
      response: a,
    });
  }
  _subscribe(e, t) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener('message', this.boundEventHandler),
      this.handlersMap[e] || (this.handlersMap[e] = new Set()),
      this.handlersMap[e].add(t);
  }
  _unsubscribe(e, t) {
    this.handlersMap[e] && t && this.handlersMap[e].delete(t),
      (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener('message', this.boundEventHandler);
  }
}
Qe.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ft(n = '', e = 10) {
  let t = '';
  for (let r = 0; r < e; r++) t += Math.floor(Math.random() * 10);
  return n + t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class va {
  constructor(e) {
    (this.target = e), (this.handlers = new Set());
  }
  removeMessageHandler(e) {
    e.messageChannel &&
      (e.messageChannel.port1.removeEventListener('message', e.onMessage),
      e.messageChannel.port1.close()),
      this.handlers.delete(e);
  }
  async _send(e, t, r = 50) {
    const s = typeof MessageChannel < 'u' ? new MessageChannel() : null;
    if (!s) throw new Error('connection_unavailable');
    let i, o;
    return new Promise((c, a) => {
      const l = Ft('', 20);
      s.port1.start();
      const h = setTimeout(() => {
        a(new Error('unsupported_event'));
      }, r);
      (o = {
        messageChannel: s,
        onMessage(f) {
          const m = f;
          if (m.data.eventId === l)
            switch (m.data.status) {
              case 'ack':
                clearTimeout(h),
                  (i = setTimeout(() => {
                    a(new Error('timeout'));
                  }, 3e3));
                break;
              case 'done':
                clearTimeout(i), c(m.data.response);
                break;
              default:
                clearTimeout(h),
                  clearTimeout(i),
                  a(new Error('invalid_response'));
                break;
            }
        },
      }),
        this.handlers.add(o),
        s.port1.addEventListener('message', o.onMessage),
        this.target.postMessage({ eventType: e, eventId: l, data: t }, [
          s.port2,
        ]);
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function N() {
  return window;
}
function ba(n) {
  N().location.href = n;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Sr() {
  return (
    typeof N().WorkerGlobalScope < 'u' && typeof N().importScripts == 'function'
  );
}
async function Ia() {
  if (!navigator?.serviceWorker) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function wa() {
  var n;
  return (
    ((n = navigator?.serviceWorker) === null || n === void 0
      ? void 0
      : n.controller) || null
  );
}
function ya() {
  return Sr() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Cr = 'firebaseLocalStorageDb',
  Ea = 1,
  qe = 'firebaseLocalStorage',
  Rr = 'fbase_key';
class $e {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, t) => {
      this.request.addEventListener('success', () => {
        e(this.request.result);
      }),
        this.request.addEventListener('error', () => {
          t(this.request.error);
        });
    });
  }
}
function Ze(n, e) {
  return n.transaction([qe], e ? 'readwrite' : 'readonly').objectStore(qe);
}
function Ta() {
  const n = indexedDB.deleteDatabase(Cr);
  return new $e(n).toPromise();
}
function Ct() {
  const n = indexedDB.open(Cr, Ea);
  return new Promise((e, t) => {
    n.addEventListener('error', () => {
      t(n.error);
    }),
      n.addEventListener('upgradeneeded', () => {
        const r = n.result;
        try {
          r.createObjectStore(qe, { keyPath: Rr });
        } catch (s) {
          t(s);
        }
      }),
      n.addEventListener('success', async () => {
        const r = n.result;
        r.objectStoreNames.contains(qe)
          ? e(r)
          : (r.close(), await Ta(), e(await Ct()));
      });
  });
}
async function ln(n, e, t) {
  const r = Ze(n, !0).put({ [Rr]: e, value: t });
  return new $e(r).toPromise();
}
async function Sa(n, e) {
  const t = Ze(n, !1).get(e),
    r = await new $e(t).toPromise();
  return r === void 0 ? null : r.value;
}
function dn(n, e) {
  const t = Ze(n, !0).delete(e);
  return new $e(t).toPromise();
}
const Ca = 800,
  Ra = 3;
class Ar {
  constructor() {
    (this.type = 'LOCAL'),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {},
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await Ct()), this.db);
  }
  async _withRetries(e) {
    let t = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (t++ > Ra) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Sr() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = Qe._getInstance(ya())),
      this.receiver._subscribe('keyChanged', async (e, t) => ({
        keyProcessed: (await this._poll()).includes(t.key),
      })),
      this.receiver._subscribe('ping', async (e, t) => ['keyChanged']);
  }
  async initializeSender() {
    var e, t;
    if (((this.activeServiceWorker = await Ia()), !this.activeServiceWorker))
      return;
    this.sender = new va(this.activeServiceWorker);
    const r = await this.sender._send('ping', {}, 800);
    r &&
      !((e = r[0]) === null || e === void 0) &&
      e.fulfilled &&
      !((t = r[0]) === null || t === void 0) &&
      t.value.includes('keyChanged') &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(e) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        wa() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          'keyChanged',
          { key: e },
          this.serviceWorkerReceiverAvailable ? 800 : 50,
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const e = await Ct();
      return await ln(e, Ke, '1'), await dn(e, Ke), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => ln(r, e, t)),
        (this.localCache[e] = t),
        this.notifyServiceWorker(e)
      ),
    );
  }
  async _get(e) {
    const t = await this._withRetries((r) => Sa(r, e));
    return (this.localCache[e] = t), t;
  }
  async _remove(e) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((t) => dn(t, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)
      ),
    );
  }
  async _poll() {
    const e = await this._withRetries((s) => {
      const i = Ze(s, !1).getAll();
      return new $e(i).toPromise();
    });
    if (!e) return [];
    if (this.pendingWrites !== 0) return [];
    const t = [],
      r = new Set();
    if (e.length !== 0)
      for (const { fbase_key: s, value: i } of e)
        r.add(s),
          JSON.stringify(this.localCache[s]) !== JSON.stringify(i) &&
            (this.notifyListeners(s, i), t.push(s));
    for (const s of Object.keys(this.localCache))
      this.localCache[s] &&
        !r.has(s) &&
        (this.notifyListeners(s, null), t.push(s));
    return t;
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const r = this.listeners[e];
    if (r) for (const s of Array.from(r)) s(t);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), Ca));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
      this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] &&
      (this.listeners[e].delete(t),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Ar.type = 'LOCAL';
const Aa = Ar;
new De(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ka(n, e) {
  return e
    ? L(e)
    : (p(n._popupRedirectResolver, n, 'argument-error'),
      n._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jt extends xt {
  constructor(e) {
    super('custom', 'custom'), (this.params = e);
  }
  _getIdTokenResponse(e) {
    return _e(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, t) {
    return _e(e, this._buildIdpRequest(t));
  }
  _getReauthenticationResolver(e) {
    return _e(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const t = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return e && (t.idToken = e), t;
  }
}
function Pa(n) {
  return br(n.auth, new jt(n), n.bypassAuthState);
}
function Na(n) {
  const { auth: e, user: t } = n;
  return p(t, e, 'internal-error'), aa(t, new jt(n), n.bypassAuthState);
}
async function Oa(n) {
  const { auth: e, user: t } = n;
  return p(t, e, 'internal-error'), oa(t, new jt(n), n.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kr {
  constructor(e, t, r, s, i = !1) {
    (this.auth = e),
      (this.resolver = r),
      (this.user = s),
      (this.bypassAuthState = i),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(t) ? t : [t]);
  }
  execute() {
    return new Promise(async (e, t) => {
      this.pendingPromise = { resolve: e, reject: t };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(e) {
    const {
      urlResponse: t,
      sessionId: r,
      postBody: s,
      tenantId: i,
      error: o,
      type: c,
    } = e;
    if (o) {
      this.reject(o);
      return;
    }
    const a = {
      auth: this.auth,
      requestUri: t,
      sessionId: r,
      tenantId: i || void 0,
      postBody: s || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(c)(a));
    } catch (l) {
      this.reject(l);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case 'signInViaPopup':
      case 'signInViaRedirect':
        return Pa;
      case 'linkViaPopup':
      case 'linkViaRedirect':
        return Oa;
      case 'reauthViaPopup':
      case 'reauthViaRedirect':
        return Na;
      default:
        R(this.auth, 'internal-error');
    }
  }
  resolve(e) {
    U(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.resolve(e),
      this.unregisterAndCleanUp();
  }
  reject(e) {
    U(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.reject(e),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Da = new De(2e3, 1e4);
class fe extends kr {
  constructor(e, t, r, s, i) {
    super(e, t, s, i),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      fe.currentPopupAction && fe.currentPopupAction.cancel(),
      (fe.currentPopupAction = this);
  }
  async executeNotNull() {
    const e = await this.execute();
    return p(e, this.auth, 'internal-error'), e;
  }
  async onExecution() {
    U(this.filter.length === 1, 'Popup operations only handle one event');
    const e = Ft();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      e,
    )),
      (this.authWindow.associatedEvent = e),
      this.resolver._originValidation(this.auth).catch((t) => {
        this.reject(t);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (t) => {
        t || this.reject(P(this.auth, 'web-storage-unsupported'));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var e;
    return (
      ((e = this.authWindow) === null || e === void 0
        ? void 0
        : e.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(P(this.auth, 'cancelled-popup-request'));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (fe.currentPopupAction = null);
  }
  pollUserCancellation() {
    const e = () => {
      var t, r;
      if (
        !(
          (r =
            (t = this.authWindow) === null || t === void 0
              ? void 0
              : t.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(P(this.auth, 'popup-closed-by-user'));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(e, Da.get());
    };
    e();
  }
}
fe.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const La = 'pendingRedirect',
  je = new Map();
class Ma extends kr {
  constructor(e, t, r = !1) {
    super(
      e,
      ['signInViaRedirect', 'linkViaRedirect', 'reauthViaRedirect', 'unknown'],
      t,
      void 0,
      r,
    ),
      (this.eventId = null);
  }
  async execute() {
    let e = je.get(this.auth._key());
    if (!e) {
      try {
        const r = (await $a(this.resolver, this.auth))
          ? await super.execute()
          : null;
        e = () => Promise.resolve(r);
      } catch (t) {
        e = () => Promise.reject(t);
      }
      je.set(this.auth._key(), e);
    }
    return (
      this.bypassAuthState ||
        je.set(this.auth._key(), () => Promise.resolve(null)),
      e()
    );
  }
  async onAuthEvent(e) {
    if (e.type === 'signInViaRedirect') return super.onAuthEvent(e);
    if (e.type === 'unknown') {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const t = await this.auth._redirectUserForId(e.eventId);
      if (t) return (this.user = t), super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function $a(n, e) {
  const t = Fa(e),
    r = Ua(n);
  if (!(await r._isAvailable())) return !1;
  const s = (await r._get(t)) === 'true';
  return await r._remove(t), s;
}
function xa(n, e) {
  je.set(n._key(), e);
}
function Ua(n) {
  return L(n._redirectPersistence);
}
function Fa(n) {
  return Fe(La, n.config.apiKey, n.name);
}
async function ja(n, e, t = !1) {
  if (k(n.app)) return Promise.reject($(n));
  const r = ae(n),
    s = ka(r, e),
    o = await new Ma(r, s, t).execute();
  return (
    o &&
      !t &&
      (delete o.user._redirectEventId,
      await r._persistUserIfCurrent(o.user),
      await r._setRedirectUser(null, e)),
    o
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ba = 10 * 60 * 1e3;
class Va {
  constructor(e) {
    (this.auth = e),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(e) {
    this.consumers.add(e),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, e) &&
        (this.sendToConsumer(this.queuedRedirectEvent, e),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e)) return !1;
    let t = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(e, r) &&
          ((t = !0), this.sendToConsumer(e, r), this.saveEventToCache(e));
      }),
      this.hasHandledPotentialRedirect ||
        !Ha(e) ||
        ((this.hasHandledPotentialRedirect = !0),
        t || ((this.queuedRedirectEvent = e), (t = !0))),
      t
    );
  }
  sendToConsumer(e, t) {
    var r;
    if (e.error && !Pr(e)) {
      const s =
        ((r = e.error.code) === null || r === void 0
          ? void 0
          : r.split('auth/')[1]) || 'internal-error';
      t.onError(P(this.auth, s));
    } else t.onAuthEvent(e);
  }
  isEventForConsumer(e, t) {
    const r = t.eventId === null || (!!e.eventId && e.eventId === t.eventId);
    return t.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return (
      Date.now() - this.lastProcessedEventTime >= Ba &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(un(e))
    );
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(un(e)), (this.lastProcessedEventTime = Date.now());
  }
}
function un(n) {
  return [n.type, n.eventId, n.sessionId, n.tenantId]
    .filter((e) => e)
    .join('-');
}
function Pr({ type: n, error: e }) {
  return n === 'unknown' && e?.code === 'auth/no-auth-event';
}
function Ha(n) {
  switch (n.type) {
    case 'signInViaRedirect':
    case 'linkViaRedirect':
    case 'reauthViaRedirect':
      return !0;
    case 'unknown':
      return Pr(n);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Wa(n, e = {}) {
  return Q(n, 'GET', '/v1/projects', e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const za = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  Ga = /^https?/;
async function Ka(n) {
  if (n.config.emulator) return;
  const { authorizedDomains: e } = await Wa(n);
  for (const t of e)
    try {
      if (qa(t)) return;
    } catch {}
  R(n, 'unauthorized-domain');
}
function qa(n) {
  const e = Et(),
    { protocol: t, hostname: r } = new URL(e);
  if (n.startsWith('chrome-extension://')) {
    const o = new URL(n);
    return o.hostname === '' && r === ''
      ? t === 'chrome-extension:' &&
          n.replace('chrome-extension://', '') ===
            e.replace('chrome-extension://', '')
      : t === 'chrome-extension:' && o.hostname === r;
  }
  if (!Ga.test(t)) return !1;
  if (za.test(n)) return r === n;
  const s = n.replace(/\./g, '\\.');
  return new RegExp('^(.+\\.' + s + '|' + s + ')$', 'i').test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ja = new De(3e4, 6e4);
function hn() {
  const n = N().___jsl;
  if (n?.H) {
    for (const e of Object.keys(n.H))
      if (
        ((n.H[e].r = n.H[e].r || []),
        (n.H[e].L = n.H[e].L || []),
        (n.H[e].r = [...n.H[e].L]),
        n.CP)
      )
        for (let t = 0; t < n.CP.length; t++) n.CP[t] = null;
  }
}
function Ya(n) {
  return new Promise((e, t) => {
    var r, s, i;
    function o() {
      hn(),
        gapi.load('gapi.iframes', {
          callback: () => {
            e(gapi.iframes.getContext());
          },
          ontimeout: () => {
            hn(), t(P(n, 'network-request-failed'));
          },
          timeout: Ja.get(),
        });
    }
    if (
      !(
        (s = (r = N().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || s === void 0
      ) &&
      s.Iframe
    )
      e(gapi.iframes.getContext());
    else if (!((i = N().gapi) === null || i === void 0) && i.load) o();
    else {
      const c = Ho('iframefcb');
      return (
        (N()[c] = () => {
          gapi.load ? o() : t(P(n, 'network-request-failed'));
        }),
        mr(`${Vo()}?onload=${c}`).catch((a) => t(a))
      );
    }
  }).catch((e) => {
    throw ((Be = null), e);
  });
}
let Be = null;
function Xa(n) {
  return (Be = Be || Ya(n)), Be;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qa = new De(5e3, 15e3),
  Za = '__/auth/iframe',
  ec = 'emulator/auth/iframe',
  tc = {
    style: { position: 'absolute', top: '-100px', width: '1px', height: '1px' },
    'aria-hidden': 'true',
    tabindex: '-1',
  },
  nc = new Map([
    ['identitytoolkit.googleapis.com', 'p'],
    ['staging-identitytoolkit.sandbox.googleapis.com', 's'],
    ['test-identitytoolkit.sandbox.googleapis.com', 't'],
  ]);
function rc(n) {
  const e = n.config;
  p(e.authDomain, n, 'auth-domain-config-required');
  const t = e.emulator ? Lt(e, ec) : `https://${n.config.authDomain}/${Za}`,
    r = { apiKey: e.apiKey, appName: n.name, v: Oe },
    s = nc.get(n.config.apiHost);
  s && (r.eid = s);
  const i = n._getFrameworks();
  return i.length && (r.fw = i.join(',')), `${t}?${Ne(r).slice(1)}`;
}
async function sc(n) {
  const e = await Xa(n),
    t = N().gapi;
  return (
    p(t, n, 'internal-error'),
    e.open(
      {
        where: document.body,
        url: rc(n),
        messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: tc,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (s, i) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = P(n, 'network-request-failed'),
            c = N().setTimeout(() => {
              i(o);
            }, Qa.get());
          function a() {
            N().clearTimeout(c), s(r);
          }
          r.ping(a).then(a, () => {
            i(o);
          });
        }),
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ic = {
    location: 'yes',
    resizable: 'yes',
    statusbar: 'yes',
    toolbar: 'no',
  },
  oc = 500,
  ac = 600,
  cc = '_blank',
  lc = 'http://localhost';
class fn {
  constructor(e) {
    (this.window = e), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function dc(n, e, t, r = oc, s = ac) {
  const i = Math.max((window.screen.availHeight - s) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let c = '';
  const a = Object.assign(Object.assign({}, ic), {
      width: r.toString(),
      height: s.toString(),
      top: i,
      left: o,
    }),
    l = C().toLowerCase();
  t && (c = cr(l) ? cc : t), ar(l) && ((e = e || lc), (a.scrollbars = 'yes'));
  const h = Object.entries(a).reduce((m, [y, g]) => `${m}${y}=${g},`, '');
  if (Oo(l) && c !== '_self') return uc(e || '', c), new fn(null);
  const f = window.open(e || '', c, h);
  p(f, n, 'popup-blocked');
  try {
    f.focus();
  } catch {}
  return new fn(f);
}
function uc(n, e) {
  const t = document.createElement('a');
  (t.href = n), (t.target = e);
  const r = document.createEvent('MouseEvent');
  r.initMouseEvent(
    'click',
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null,
  ),
    t.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hc = '__/auth/handler',
  fc = 'emulator/auth/handler',
  pc = encodeURIComponent('fac');
async function pn(n, e, t, r, s, i) {
  p(n.config.authDomain, n, 'auth-domain-config-required'),
    p(n.config.apiKey, n, 'invalid-api-key');
  const o = {
    apiKey: n.config.apiKey,
    appName: n.name,
    authType: t,
    redirectUrl: r,
    v: Oe,
    eventId: s,
  };
  if (e instanceof _r) {
    e.setDefaultLanguage(n.languageCode),
      (o.providerId = e.providerId || ''),
      ti(e.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [h, f] of Object.entries({})) o[h] = f;
  }
  if (e instanceof Me) {
    const h = e.getScopes().filter((f) => f !== '');
    h.length > 0 && (o.scopes = h.join(','));
  }
  n.tenantId && (o.tid = n.tenantId);
  const c = o;
  for (const h of Object.keys(c)) c[h] === void 0 && delete c[h];
  const a = await n._getAppCheckToken(),
    l = a ? `#${pc}=${encodeURIComponent(a)}` : '';
  return `${mc(n)}?${Ne(c).slice(1)}${l}`;
}
function mc({ config: n }) {
  return n.emulator ? Lt(n, fc) : `https://${n.authDomain}/${hc}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ct = 'webStorageSupport';
class gc {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = Tr),
      (this._completeRedirectFn = ja),
      (this._overrideRedirectResult = xa);
  }
  async _openPopup(e, t, r, s) {
    var i;
    U(
      (i = this.eventManagers[e._key()]) === null || i === void 0
        ? void 0
        : i.manager,
      '_initialize() not called before _openPopup()',
    );
    const o = await pn(e, t, r, Et(), s);
    return dc(e, o, Ft());
  }
  async _openRedirect(e, t, r, s) {
    await this._originValidation(e);
    const i = await pn(e, t, r, Et(), s);
    return ba(i), new Promise(() => {});
  }
  _initialize(e) {
    const t = e._key();
    if (this.eventManagers[t]) {
      const { manager: s, promise: i } = this.eventManagers[t];
      return s
        ? Promise.resolve(s)
        : (U(i, 'If manager is not set, promise should be'), i);
    }
    const r = this.initAndGetManager(e);
    return (
      (this.eventManagers[t] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[t];
      }),
      r
    );
  }
  async initAndGetManager(e) {
    const t = await sc(e),
      r = new Va(e);
    return (
      t.register(
        'authEvent',
        (s) => (
          p(s?.authEvent, e, 'invalid-auth-event'),
          { status: r.onEvent(s.authEvent) ? 'ACK' : 'ERROR' }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
      ),
      (this.eventManagers[e._key()] = { manager: r }),
      (this.iframes[e._key()] = t),
      r
    );
  }
  _isIframeWebStorageSupported(e, t) {
    this.iframes[e._key()].send(
      ct,
      { type: ct },
      (s) => {
        var i;
        const o = (i = s?.[0]) === null || i === void 0 ? void 0 : i[ct];
        o !== void 0 && t(!!o), R(e, 'internal-error');
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    );
  }
  _originValidation(e) {
    const t = e._key();
    return (
      this.originValidationPromises[t] ||
        (this.originValidationPromises[t] = Ka(e)),
      this.originValidationPromises[t]
    );
  }
  get _shouldInitProactively() {
    return fr() || $t() || Ye();
  }
}
const _c = gc;
var mn = '@firebase/auth',
  gn = '1.7.4';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vc {
  constructor(e) {
    (this.auth = e), (this.internalListeners = new Map());
  }
  getUid() {
    var e;
    return (
      this.assertAuthConfigured(),
      ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) ||
        null
    );
  }
  async getToken(e) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(e) }
        : null
    );
  }
  addAuthTokenListener(e) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
    const t = this.auth.onIdTokenChanged((r) => {
      e(r?.stsTokenManager.accessToken || null);
    });
    this.internalListeners.set(e, t), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const t = this.internalListeners.get(e);
    t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    p(
      this.auth._initializationPromise,
      'dependent-sdk-initialized-before-auth',
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bc(n) {
  switch (n) {
    case 'Node':
      return 'node';
    case 'ReactNative':
      return 'rn';
    case 'Worker':
      return 'webworker';
    case 'Cordova':
      return 'cordova';
    case 'WebExtension':
      return 'web-extension';
    default:
      return;
  }
}
function Ic(n) {
  Se(
    new ve(
      'auth',
      (e, { options: t }) => {
        const r = e.getProvider('app').getImmediate(),
          s = e.getProvider('heartbeat'),
          i = e.getProvider('app-check-internal'),
          { apiKey: o, authDomain: c } = r.options;
        p(o && !o.includes(':'), 'invalid-api-key', { appName: r.name });
        const a = {
            apiKey: o,
            authDomain: c,
            clientPlatform: n,
            apiHost: 'identitytoolkit.googleapis.com',
            tokenApiHost: 'securetoken.googleapis.com',
            apiScheme: 'https',
            sdkClientVersion: pr(n),
          },
          l = new Fo(r, s, i, a);
        return qo(l, t), l;
      },
      'PUBLIC',
    )
      .setInstantiationMode('EXPLICIT')
      .setInstanceCreatedCallback((e, t, r) => {
        e.getProvider('auth-internal').initialize();
      }),
  ),
    Se(
      new ve(
        'auth-internal',
        (e) => {
          const t = ae(e.getProvider('auth').getImmediate());
          return ((r) => new vc(r))(t);
        },
        'PRIVATE',
      ).setInstantiationMode('EXPLICIT'),
    ),
    pe(mn, gn, bc(n)),
    pe(mn, gn, 'esm2017');
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const wc = 5 * 60,
  yc = zn('authIdTokenMaxAge') || wc;
let _n = null;
const Ec = (n) => async (e) => {
  const t = e && (await e.getIdTokenResult()),
    r = t && (new Date().getTime() - Date.parse(t.issuedAtTime)) / 1e3;
  if (r && r > yc) return;
  const s = t?.token;
  _n !== s &&
    ((_n = s),
    await fetch(n, {
      method: s ? 'POST' : 'DELETE',
      headers: s ? { Authorization: `Bearer ${s}` } : {},
    }));
};
function Bt(n = no()) {
  const e = Jn(n, 'auth');
  if (e.isInitialized()) return e.getImmediate();
  const t = Ko(n, { popupRedirectResolver: _c, persistence: [Aa, ga, Tr] }),
    r = zn('authTokenSyncURL');
  if (r && typeof isSecureContext == 'boolean' && isSecureContext) {
    const i = new URL(r, location.origin);
    if (location.origin === i.origin) {
      const o = Ec(i.toString());
      ha(t, o, () => o(t.currentUser)), ua(t, (c) => o(c));
    }
  }
  const s = Ws('auth');
  return s && Jo(t, `http://${s}`), t;
}
function Tc() {
  var n, e;
  return (e =
    (n = document.getElementsByTagName('head')) === null || n === void 0
      ? void 0
      : n[0]) !== null && e !== void 0
    ? e
    : document;
}
jo({
  loadJS(n) {
    return new Promise((e, t) => {
      const r = document.createElement('script');
      r.setAttribute('src', n),
        (r.onload = e),
        (r.onerror = (s) => {
          const i = P('internal-error');
          (i.customData = s), t(i);
        }),
        (r.type = 'text/javascript'),
        (r.charset = 'UTF-8'),
        Tc().appendChild(r);
    });
  },
  gapiScript: 'https://apis.google.com/js/api.js',
  recaptchaV2Script: 'https://www.google.com/recaptcha/api.js',
  recaptchaEnterpriseScript:
    'https://www.google.com/recaptcha/enterprise.js?render=',
});
Ic('Browser');
var Sc = 'firebase',
  Cc = '10.12.2';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ pe(Sc, Cc, 'app');
function Nr(n, e) {
  if (n == null) return {};
  var t = {},
    r = Object.keys(n),
    s,
    i;
  for (i = 0; i < r.length; i++)
    (s = r[i]), !(e.indexOf(s) >= 0) && (t[s] = n[s]);
  return t;
}
var Rc = ['color'],
  vn = u.forwardRef(function (n, e) {
    var t = n.color,
      r = t === void 0 ? 'currentColor' : t,
      s = Nr(n, Rc);
    return u.createElement(
      'svg',
      Object.assign(
        {
          width: '15',
          height: '15',
          viewBox: '0 0 15 15',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        s,
        { ref: e },
      ),
      u.createElement('path', {
        d: 'M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z',
        fill: r,
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }),
    );
  }),
  Ac = ['color'],
  bn = u.forwardRef(function (n, e) {
    var t = n.color,
      r = t === void 0 ? 'currentColor' : t,
      s = Nr(n, Ac);
    return u.createElement(
      'svg',
      Object.assign(
        {
          width: '15',
          height: '15',
          viewBox: '0 0 15 15',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        s,
        { ref: e },
      ),
      u.createElement('path', {
        d: 'M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z',
        fill: r,
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }),
    );
  });
const kc = ({ children: n }) => {
    const [e, t] = u.useState(null),
      [r, s] = u.useState(!1),
      [i, o] = u.useState(!1),
      [c, a] = u.useState(' '),
      [l, h] = u.useState(' '),
      [f, m] = u.useState(' ');
    u.useEffect(() => {
      const w = Je({
        apiKey: 'AIzaSyBnzumQnSV3aj6Rt0ie5dH0gVn_qFRWsYs',
        authDomain: 'wanderlust-3f040.firebaseapp.com',
        projectId: 'wanderlust-3f040',
        storageBucket: 'wanderlust-3f040.appspot.com',
        messagingSenderId: '596092578936',
        appId: '1:596092578936:web:72e2657864029eac74918d',
      });
      t(Bt(w));
    }, []);
    const y = async (I) => {
        I.preventDefault();
        const w = new FormData(I.currentTarget),
          _ = w.get('mail'),
          v = w.get('password');
        if (!(!e || !_ || !v))
          try {
            await da(e, _, v);
          } catch (E) {
            h(`Ошибка авторизации ${typeof E == 'object' && E !== null && 'code' in E ? E.code : ''}
Попробуйте перезагрузить страницу и попробовать снова.`);
          }
      },
      g = async (I) => {
        I.preventDefault();
        const w = new FormData(I.currentTarget),
          _ = w.get('mail'),
          v = w.get('newPassword'),
          E = w.get('newPasswordConfirm');
        if (!(!e || !_ || !v || !E)) {
          if (v !== E) {
            a('Пароли не совпадают');
            return;
          }
          try {
            await la(e, _, v);
          } catch (T) {
            m(`Ошибка регистрации ${typeof T == 'object' && T !== null && 'code' in T ? T.code : ''}
Попробуйте перезагрузить страницу и попробовать снова.`);
          }
        }
      };
    return d.jsx(Sn, {
      appearance: 'light',
      accentColor: 'teal',
      grayColor: 'slate',
      radius: 'large',
      scaling: '100%',
      className: ee.theme,
      panelBackground: 'solid',
      children: d.jsxs(Cn, {
        children: [
          d.jsx(Rn, { children: n }),
          d.jsx(An, {
            maxWidth: '450px',
            children: d.jsxs(Un, {
              defaultValue: 'login',
              children: [
                d.jsxs(Fn, {
                  size: '2',
                  children: [
                    d.jsx(mt, {
                      className: ee.tabTrigger,
                      value: 'login',
                      children: 'Войти',
                    }),
                    d.jsx(mt, {
                      className: ee.tabTrigger,
                      value: 'signup',
                      children: 'Создать аккаунт',
                    }),
                  ],
                }),
                d.jsxs(kn, {
                  pt: '16px',
                  children: [
                    d.jsxs(gt, {
                      value: 'login',
                      children: [
                        d.jsx(ut, {
                          className: ee.preWrap,
                          mb: '8px',
                          color: 'red',
                          size: '2',
                          children: l,
                        }),
                        d.jsxs('form', {
                          className: ee.form,
                          onSubmit: y,
                          children: [
                            d.jsx(V, {
                              asChild: !0,
                              direction: 'column',
                              gap: '8px',
                              flexGrow: '1',
                              children: d.jsxs('label', {
                                children: [
                                  d.jsx(B, {
                                    as: 'p',
                                    size: '2',
                                    weight: 'medium',
                                    children: 'Ваша почта',
                                  }),
                                  d.jsx(he, {
                                    size: '3',
                                    variant: 'surface',
                                    placeholder: 'example@mail.com',
                                    name: 'mail',
                                    autoComplete: 'email',
                                    inputMode: 'email',
                                    type: 'email',
                                    required: !0,
                                  }),
                                ],
                              }),
                            }),
                            d.jsx(V, {
                              asChild: !0,
                              direction: 'column',
                              gap: '8px',
                              flexGrow: '1',
                              children: d.jsxs('label', {
                                children: [
                                  d.jsx(B, {
                                    as: 'p',
                                    size: '2',
                                    weight: 'medium',
                                    children: 'Пароль',
                                  }),
                                  d.jsx(he, {
                                    size: '3',
                                    variant: 'surface',
                                    autoComplete: 'current-password',
                                    name: 'password',
                                    inputMode: 'text',
                                    type: r ? 'text' : 'password',
                                    required: !0,
                                    children: d.jsx(_t, {
                                      side: 'right',
                                      children: d.jsx(pt, {
                                        type: 'button',
                                        size: '1',
                                        variant: 'ghost',
                                        onClick: () => s(!r),
                                        children: r
                                          ? d.jsx(bn, {})
                                          : d.jsx(vn, {}),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            d.jsxs(V, {
                              gap: '3',
                              mt: '4',
                              justify: 'end',
                              children: [
                                d.jsx(ht, {
                                  children: d.jsx(K, {
                                    size: '3',
                                    variant: 'soft',
                                    color: 'gray',
                                    children: 'Отмена',
                                  }),
                                }),
                                d.jsx(K, {
                                  size: '3',
                                  variant: 'outline',
                                  type: 'submit',
                                  children: 'Отправить',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    d.jsxs(gt, {
                      value: 'signup',
                      children: [
                        d.jsx(ut, {
                          className: ee.preWrap,
                          mb: '8px',
                          color: 'red',
                          size: '2',
                          children: f,
                        }),
                        d.jsxs('form', {
                          className: ee.form,
                          onSubmit: g,
                          children: [
                            d.jsx(V, {
                              asChild: !0,
                              direction: 'column',
                              gap: '8px',
                              flexGrow: '1',
                              children: d.jsxs('label', {
                                children: [
                                  d.jsx(B, {
                                    as: 'p',
                                    size: '2',
                                    weight: 'medium',
                                    children: 'Ваша почта',
                                  }),
                                  d.jsx(he, {
                                    size: '3',
                                    variant: 'surface',
                                    placeholder: 'example@mail.com',
                                    name: 'mail',
                                    autoComplete: 'email',
                                    inputMode: 'email',
                                    type: 'email',
                                    required: !0,
                                  }),
                                ],
                              }),
                            }),
                            d.jsx(V, {
                              asChild: !0,
                              direction: 'column',
                              gap: '8px',
                              flexGrow: '1',
                              children: d.jsxs('label', {
                                children: [
                                  d.jsx(B, {
                                    as: 'p',
                                    size: '2',
                                    weight: 'medium',
                                    children: 'Придумайте пароль',
                                  }),
                                  d.jsx(B, {
                                    as: 'p',
                                    size: '1',
                                    weight: 'regular',
                                    color: 'gray',
                                    children: 'Минимум 8 символов',
                                  }),
                                  d.jsx(he, {
                                    size: '3',
                                    variant: 'surface',
                                    autoComplete: 'new-password',
                                    name: 'newPassword',
                                    minLength: 8,
                                    inputMode: 'text',
                                    type: i ? 'text' : 'password',
                                    required: !0,
                                    children: d.jsx(_t, {
                                      side: 'right',
                                      children: d.jsx(pt, {
                                        type: 'button',
                                        size: '1',
                                        variant: 'ghost',
                                        onClick: () => o(!i),
                                        children: i
                                          ? d.jsx(bn, {})
                                          : d.jsx(vn, {}),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            d.jsx(V, {
                              asChild: !0,
                              direction: 'column',
                              gap: '8px',
                              flexGrow: '1',
                              children: d.jsxs('label', {
                                children: [
                                  d.jsx(B, {
                                    as: 'p',
                                    size: '2',
                                    weight: 'medium',
                                    children: 'Повторите пароль',
                                  }),
                                  d.jsx(he, {
                                    size: '3',
                                    variant: 'surface',
                                    autoComplete: 'new-password',
                                    name: 'newPasswordConfirm',
                                    inputMode: 'text',
                                    type: 'password',
                                    required: !0,
                                  }),
                                  d.jsx(B, {
                                    as: 'p',
                                    size: '1',
                                    color: 'red',
                                    weight: 'regular',
                                    children: c,
                                  }),
                                ],
                              }),
                            }),
                            d.jsxs(V, {
                              gap: '3',
                              mt: '4',
                              justify: 'end',
                              children: [
                                d.jsx(ht, {
                                  children: d.jsx(K, {
                                    size: '3',
                                    variant: 'soft',
                                    color: 'gray',
                                    children: 'Отмена',
                                  }),
                                }),
                                d.jsx(K, {
                                  size: '3',
                                  variant: 'outline',
                                  type: 'submit',
                                  children: 'Отправить',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  Pc = {
    src: '/wanderlust/_astro/logo.yj5y_18P.svg',
    width: 173,
    height: 21,
    format: 'svg',
  },
  Nc = ({ children: n }) => {
    const [e, t] = u.useState(null);
    u.useEffect(() => {
      const i = Je({
        apiKey: 'AIzaSyBnzumQnSV3aj6Rt0ie5dH0gVn_qFRWsYs',
        authDomain: 'wanderlust-3f040.firebaseapp.com',
        projectId: 'wanderlust-3f040',
        storageBucket: 'wanderlust-3f040.appspot.com',
        messagingSenderId: '596092578936',
        appId: '1:596092578936:web:72e2657864029eac74918d',
      });
      t(Bt(i));
    }, []);
    const r = () => {
      e?.signOut();
    };
    return d.jsx(Sn, {
      appearance: 'light',
      accentColor: 'teal',
      grayColor: 'slate',
      radius: 'large',
      scaling: '100%',
      className: Yr.theme,
      panelBackground: 'solid',
      children: d.jsxs(Cn, {
        children: [
          d.jsx(Rn, { children: n }),
          d.jsxs(An, {
            maxWidth: '450px',
            children: [
              d.jsx(qr, { children: 'Выход из аккаунта' }),
              d.jsx(ut, {
                size: '3',
                children:
                  'Вы уверены что хотите выйти? Если да, то вы в любой момент можете авторизоваться снова.',
              }),
              d.jsxs(V, {
                gap: '3',
                mt: '4',
                justify: 'end',
                children: [
                  d.jsx(ht, {
                    children: d.jsx(K, {
                      variant: 'soft',
                      color: 'gray',
                      children: 'Отмена',
                    }),
                  }),
                  d.jsx(Jr, {
                    children: d.jsx(K, {
                      variant: 'ghost',
                      onClick: r,
                      children: 'Выйти',
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Oc = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О нас' },
    { href: '/guides', label: 'Гайды' },
    { href: '/reviews', label: 'Отзывы' },
    { href: '/contacts', label: 'Контакты' },
  ],
  jc = ({ currentPath: n }) => {
    const [e, t] = u.useState('');
    return (
      u.useEffect(() => {
        const s = Je({
            apiKey: 'AIzaSyBnzumQnSV3aj6Rt0ie5dH0gVn_qFRWsYs',
            authDomain: 'wanderlust-3f040.firebaseapp.com',
            projectId: 'wanderlust-3f040',
            storageBucket: 'wanderlust-3f040.appspot.com',
            messagingSenderId: '596092578936',
            appId: '1:596092578936:web:72e2657864029eac74918d',
          }),
          o = Bt(s).onAuthStateChanged((c) => {
            c?.email ? t(c.email) : t('');
          });
        return () => o();
      }, []),
      d.jsx('header', {
        className: ue.root,
        children: d.jsx(Xr, {
          children: d.jsxs('div', {
            className: ue.content,
            children: [
              d.jsx('img', { ...Pc, alt: 'Wanderlust' }),
              d.jsx('nav', {
                children: d.jsx('ul', {
                  className: ue.navList,
                  children: Oc.map((r) => {
                    const s =
                      n === '/'
                        ? n === r.href
                        : n.startsWith(r.href) && r.href !== '/';
                    return d.jsx(
                      'li',
                      {
                        children: d.jsx(Dn, {
                          href: r.href,
                          size: '3',
                          weight: 'medium',
                          underline: 'hover',
                          color: s ? void 0 : 'gray',
                          children: r.label,
                        }),
                      },
                      r.href,
                    );
                  }),
                }),
              }),
              d.jsx('div', {
                className: ue.actions,
                children: e
                  ? d.jsx(Nc, {
                      children: d.jsx(K, {
                        className: ue.button,
                        color: 'teal',
                        size: '2',
                        variant: 'solid',
                        children: e,
                      }),
                    })
                  : d.jsx(kc, {
                      children: d.jsx(K, {
                        className: ue.button,
                        color: 'teal',
                        size: '2',
                        variant: 'solid',
                        children: 'Войти',
                      }),
                    }),
              }),
            ],
          }),
        }),
      })
    );
  };
export { jc as default };
