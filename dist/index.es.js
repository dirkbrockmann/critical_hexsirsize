(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._legend_bbbfp_1{font-size:16px;alignment-baseline:middle}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Zi = {
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 1005, height: 1005 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function on(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Wi(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function kr(t) {
  let n, e, r;
  t.length !== 2 ? (n = on, e = (s, l) => on(t(s), l), r = (s, l) => t(s) - l) : (n = t === on || t === Wi ? t : Ji, e = t, r = t);
  function i(s, l, u = 0, h = s.length) {
    if (u < h) {
      if (n(l, l) !== 0) return h;
      do {
        const d = u + h >>> 1;
        e(s[d], l) < 0 ? u = d + 1 : h = d;
      } while (u < h);
    }
    return u;
  }
  function o(s, l, u = 0, h = s.length) {
    if (u < h) {
      if (n(l, l) !== 0) return h;
      do {
        const d = u + h >>> 1;
        e(s[d], l) <= 0 ? u = d + 1 : h = d;
      } while (u < h);
    }
    return u;
  }
  function a(s, l, u = 0, h = s.length) {
    const d = i(s, l, u, h - 1);
    return d > u && r(s[d - 1], l) > -r(s[d], l) ? d - 1 : d;
  }
  return { left: i, center: a, right: o };
}
function Ji() {
  return 0;
}
function Qi(t) {
  return t === null ? NaN : +t;
}
const ji = kr(on), to = ji.right;
kr(Qi).center;
class Le extends Map {
  constructor(n, e = ro) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null) for (const [r, i] of n) this.set(r, i);
  }
  get(n) {
    return super.get(qe(this, n));
  }
  has(n) {
    return super.has(qe(this, n));
  }
  set(n, e) {
    return super.set(no(this, n), e);
  }
  delete(n) {
    return super.delete(eo(this, n));
  }
}
function qe({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function no({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function eo({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function ro(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const io = Math.sqrt(50), oo = Math.sqrt(10), ao = Math.sqrt(2);
function fn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= io ? 10 : o >= oo ? 5 : o >= ao ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? fn(t, n, e * 2) : [s, l, u];
}
function so(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? fn(n, t, e) : fn(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, l = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) l[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) l[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * a;
  return l;
}
function Kn(t, n, e) {
  return n = +n, t = +t, e = +e, fn(t, n, e)[2];
}
function uo(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Kn(n, t, e) : Kn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Zt(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function lo(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var fo = { value: () => {
} };
function ye() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new an(e);
}
function an(t) {
  this._ = t;
}
function co(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
an.prototype = ye.prototype = {
  constructor: an,
  on: function(t, n) {
    var e = this._, r = co(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = ho(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = He(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = He(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new an(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function ho(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function He(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = fo, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Vn = "http://www.w3.org/1999/xhtml";
const Ne = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Vn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function xn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Ne.hasOwnProperty(n) ? { space: Ne[n], local: t } : t;
}
function po(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Vn && n.documentElement.namespaceURI === Vn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function go(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Fr(t) {
  var n = xn(t);
  return (n.local ? go : po)(n);
}
function yo() {
}
function me(t) {
  return t == null ? yo : function() {
    return this.querySelector(t);
  };
}
function mo(t) {
  typeof t != "function" && (t = me(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), l, u, h = 0; h < a; ++h)
      (l = o[h]) && (u = t.call(l, l.__data__, h, o)) && ("__data__" in l && (u.__data__ = l.__data__), s[h] = u);
  return new k(r, this._parents);
}
function _o(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function vo() {
  return [];
}
function Dr(t) {
  return t == null ? vo : function() {
    return this.querySelectorAll(t);
  };
}
function wo(t) {
  return function() {
    return _o(t.apply(this, arguments));
  };
}
function bo(t) {
  typeof t == "function" ? t = wo(t) : t = Dr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new k(r, i);
}
function Lr(t) {
  return function() {
    return this.matches(t);
  };
}
function qr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var xo = Array.prototype.find;
function Mo(t) {
  return function() {
    return xo.call(this.children, t);
  };
}
function $o() {
  return this.firstElementChild;
}
function To(t) {
  return this.select(t == null ? $o : Mo(typeof t == "function" ? t : qr(t)));
}
var Ao = Array.prototype.filter;
function So() {
  return Array.from(this.children);
}
function Po(t) {
  return function() {
    return Ao.call(this.children, t);
  };
}
function Eo(t) {
  return this.selectAll(t == null ? So : Po(typeof t == "function" ? t : qr(t)));
}
function Io(t) {
  typeof t != "function" && (t = Lr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new k(r, this._parents);
}
function Hr(t) {
  return new Array(t.length);
}
function Oo() {
  return new k(this._enter || this._groups.map(Hr), this._parents);
}
function cn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
cn.prototype = {
  constructor: cn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function zo(t) {
  return function() {
    return t;
  };
}
function Co(t, n, e, r, i, o) {
  for (var a = 0, s, l = n.length, u = o.length; a < u; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new cn(t, o[a]);
  for (; a < l; ++a)
    (s = n[a]) && (i[a] = s);
}
function Ro(t, n, e, r, i, o, a) {
  var s, l, u = /* @__PURE__ */ new Map(), h = n.length, d = o.length, c = new Array(h), f;
  for (s = 0; s < h; ++s)
    (l = n[s]) && (c[s] = f = a.call(l, l.__data__, s, n) + "", u.has(f) ? i[s] = l : u.set(f, l));
  for (s = 0; s < d; ++s)
    f = a.call(t, o[s], s, o) + "", (l = u.get(f)) ? (r[s] = l, l.__data__ = o[s], u.delete(f)) : e[s] = new cn(t, o[s]);
  for (s = 0; s < h; ++s)
    (l = n[s]) && u.get(c[s]) === l && (i[s] = l);
}
function ko(t) {
  return t.__data__;
}
function Fo(t, n) {
  if (!arguments.length) return Array.from(this, ko);
  var e = n ? Ro : Co, r = this._parents, i = this._groups;
  typeof t != "function" && (t = zo(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), u = 0; u < o; ++u) {
    var h = r[u], d = i[u], c = d.length, f = Do(t.call(h, h && h.__data__, u, r)), p = f.length, _ = s[u] = new Array(p), g = a[u] = new Array(p), m = l[u] = new Array(c);
    e(h, d, _, g, m, f, n);
    for (var x = 0, $ = 0, y, w; x < p; ++x)
      if (y = _[x]) {
        for (x >= $ && ($ = x + 1); !(w = g[$]) && ++$ < p; ) ;
        y._next = w || null;
      }
  }
  return a = new k(a, r), a._enter = s, a._exit = l, a;
}
function Do(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Lo() {
  return new k(this._exit || this._groups.map(Hr), this._parents);
}
function qo(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Ho(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), l = 0; l < a; ++l)
    for (var u = e[l], h = r[l], d = u.length, c = s[l] = new Array(d), f, p = 0; p < d; ++p)
      (f = u[p] || h[p]) && (c[p] = f);
  for (; l < i; ++l)
    s[l] = e[l];
  return new k(s, this._parents);
}
function No() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Bo(t) {
  t || (t = Xo);
  function n(d, c) {
    return d && c ? t(d.__data__, c.__data__) : !d - !c;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, l = i[o] = new Array(s), u, h = 0; h < s; ++h)
      (u = a[h]) && (l[h] = u);
    l.sort(n);
  }
  return new k(i, this._parents).order();
}
function Xo(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Uo() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Go() {
  return Array.from(this);
}
function Yo() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Ko() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Vo() {
  return !this.node();
}
function Zo(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Wo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Jo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Qo(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function jo(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function ta(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function na(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function ea(t, n) {
  var e = xn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Jo : Wo : typeof n == "function" ? e.local ? na : ta : e.local ? jo : Qo)(e, n));
}
function Nr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ra(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ia(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function oa(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function aa(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? ra : typeof n == "function" ? oa : ia)(t, n, e ?? "")) : $t(this.node(), t);
}
function $t(t, n) {
  return t.style.getPropertyValue(n) || Nr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function sa(t) {
  return function() {
    delete this[t];
  };
}
function ua(t, n) {
  return function() {
    this[t] = n;
  };
}
function la(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function fa(t, n) {
  return arguments.length > 1 ? this.each((n == null ? sa : typeof n == "function" ? la : ua)(t, n)) : this.node()[t];
}
function Br(t) {
  return t.trim().split(/^|\s+/);
}
function _e(t) {
  return t.classList || new Xr(t);
}
function Xr(t) {
  this._node = t, this._names = Br(t.getAttribute("class") || "");
}
Xr.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Ur(t, n) {
  for (var e = _e(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Gr(t, n) {
  for (var e = _e(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function ca(t) {
  return function() {
    Ur(this, t);
  };
}
function ha(t) {
  return function() {
    Gr(this, t);
  };
}
function pa(t, n) {
  return function() {
    (n.apply(this, arguments) ? Ur : Gr)(this, t);
  };
}
function da(t, n) {
  var e = Br(t + "");
  if (arguments.length < 2) {
    for (var r = _e(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? pa : n ? ca : ha)(e, n));
}
function ga() {
  this.textContent = "";
}
function ya(t) {
  return function() {
    this.textContent = t;
  };
}
function ma(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function _a(t) {
  return arguments.length ? this.each(t == null ? ga : (typeof t == "function" ? ma : ya)(t)) : this.node().textContent;
}
function va() {
  this.innerHTML = "";
}
function wa(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ba(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function xa(t) {
  return arguments.length ? this.each(t == null ? va : (typeof t == "function" ? ba : wa)(t)) : this.node().innerHTML;
}
function Ma() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function $a() {
  return this.each(Ma);
}
function Ta() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Aa() {
  return this.each(Ta);
}
function Sa(t) {
  var n = typeof t == "function" ? t : Fr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Pa() {
  return null;
}
function Ea(t, n) {
  var e = typeof t == "function" ? t : Fr(t), r = n == null ? Pa : typeof n == "function" ? n : me(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ia() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Oa() {
  return this.each(Ia);
}
function za() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ca() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ra(t) {
  return this.select(t ? Ca : za);
}
function ka(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Fa(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Da(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function La(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function qa(t, n, e) {
  return function() {
    var r = this.__on, i, o = Fa(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Ha(t, n, e) {
  var r = Da(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, h; l < u; ++l)
        for (i = 0, h = s[l]; i < o; ++i)
          if ((a = r[i]).type === h.type && a.name === h.name)
            return h.value;
    }
    return;
  }
  for (s = n ? qa : La, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function Yr(t, n, e) {
  var r = Nr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Na(t, n) {
  return function() {
    return Yr(this, t, n);
  };
}
function Ba(t, n) {
  return function() {
    return Yr(this, t, n.apply(this, arguments));
  };
}
function Xa(t, n) {
  return this.each((typeof n == "function" ? Ba : Na)(t, n));
}
function* Ua() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Kr = [null];
function k(t, n) {
  this._groups = t, this._parents = n;
}
function Ut() {
  return new k([[document.documentElement]], Kr);
}
function Ga() {
  return this;
}
k.prototype = Ut.prototype = {
  constructor: k,
  select: mo,
  selectAll: bo,
  selectChild: To,
  selectChildren: Eo,
  filter: Io,
  data: Fo,
  enter: Oo,
  exit: Lo,
  join: qo,
  merge: Ho,
  selection: Ga,
  order: No,
  sort: Bo,
  call: Uo,
  nodes: Go,
  node: Yo,
  size: Ko,
  empty: Vo,
  each: Zo,
  attr: ea,
  style: aa,
  property: fa,
  classed: da,
  text: _a,
  html: xa,
  raise: $a,
  lower: Aa,
  append: Sa,
  insert: Ea,
  remove: Oa,
  clone: Ra,
  datum: ka,
  on: Ha,
  dispatch: Xa,
  [Symbol.iterator]: Ua
};
function E(t) {
  return typeof t == "string" ? new k([[document.querySelector(t)]], [document.documentElement]) : new k([[t]], Kr);
}
function Ya(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Zn(t, n) {
  if (t = Ya(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Ka = { passive: !1 }, Ft = { capture: !0, passive: !1 };
function Ln(t) {
  t.stopImmediatePropagation();
}
function bt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Va(t) {
  var n = t.document.documentElement, e = E(t).on("dragstart.drag", bt, Ft);
  "onselectstart" in n ? e.on("selectstart.drag", bt, Ft) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Za(t, n) {
  var e = t.document.documentElement, r = E(t).on("dragstart.drag", null);
  n && (r.on("click.drag", bt, Ft), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Wt = (t) => () => t;
function Wn(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: l,
  dy: u,
  dispatch: h
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: h }
  });
}
Wn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Wa(t) {
  return !t.ctrlKey && !t.button;
}
function Ja() {
  return this.parentNode;
}
function Qa(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function ja() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ts() {
  var t = Wa, n = Ja, e = Qa, r = ja, i = {}, o = ye("start", "drag", "end"), a = 0, s, l, u, h, d = 0;
  function c(y) {
    y.on("mousedown.drag", f).filter(r).on("touchstart.drag", g).on("touchmove.drag", m, Ka).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function f(y, w) {
    if (!(h || !t.call(this, y, w))) {
      var A = $(this, n.call(this, y, w), y, w, "mouse");
      A && (E(y.view).on("mousemove.drag", p, Ft).on("mouseup.drag", _, Ft), Va(y.view), Ln(y), u = !1, s = y.clientX, l = y.clientY, A("start", y));
    }
  }
  function p(y) {
    if (bt(y), !u) {
      var w = y.clientX - s, A = y.clientY - l;
      u = w * w + A * A > d;
    }
    i.mouse("drag", y);
  }
  function _(y) {
    E(y.view).on("mousemove.drag mouseup.drag", null), Za(y.view, u), bt(y), i.mouse("end", y);
  }
  function g(y, w) {
    if (t.call(this, y, w)) {
      var A = y.changedTouches, S = n.call(this, y, w), I = A.length, X, V;
      for (X = 0; X < I; ++X)
        (V = $(this, S, y, w, A[X].identifier, A[X])) && (Ln(y), V("start", y, A[X]));
    }
  }
  function m(y) {
    var w = y.changedTouches, A = w.length, S, I;
    for (S = 0; S < A; ++S)
      (I = i[w[S].identifier]) && (bt(y), I("drag", y, w[S]));
  }
  function x(y) {
    var w = y.changedTouches, A = w.length, S, I;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), S = 0; S < A; ++S)
      (I = i[w[S].identifier]) && (Ln(y), I("end", y, w[S]));
  }
  function $(y, w, A, S, I, X) {
    var V = o.copy(), b = Zn(X || A, w), U, O, D;
    if ((D = e.call(y, new Wn("beforestart", {
      sourceEvent: A,
      target: c,
      identifier: I,
      active: a,
      x: b[0],
      y: b[1],
      dx: 0,
      dy: 0,
      dispatch: V
    }), S)) != null)
      return U = D.x - b[0] || 0, O = D.y - b[1] || 0, function Vt(ot, lt, vt) {
        var F = b, Dn;
        switch (ot) {
          case "start":
            i[I] = Vt, Dn = a++;
            break;
          case "end":
            delete i[I], --a;
          // falls through
          case "drag":
            b = Zn(vt || lt, w), Dn = a;
            break;
        }
        V.call(
          ot,
          y,
          new Wn(ot, {
            sourceEvent: lt,
            subject: D,
            target: c,
            identifier: I,
            active: Dn,
            x: b[0] + U,
            y: b[1] + O,
            dx: b[0] - F[0],
            dy: b[1] - F[1],
            dispatch: V
          }),
          S
        );
      };
  }
  return c.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : Wt(!!y), c) : t;
  }, c.container = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Wt(y), c) : n;
  }, c.subject = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Wt(y), c) : e;
  }, c.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Wt(!!y), c) : r;
  }, c.on = function() {
    var y = o.on.apply(o, arguments);
    return y === o ? c : y;
  }, c.clickDistance = function(y) {
    return arguments.length ? (d = (y = +y) * y, c) : Math.sqrt(d);
  }, c;
}
function ve(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Vr(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Gt() {
}
var Dt = 0.7, hn = 1 / Dt, xt = "\\s*([+-]?\\d+)\\s*", Lt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", G = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ns = /^#([0-9a-f]{3,8})$/, es = new RegExp(`^rgb\\(${xt},${xt},${xt}\\)$`), rs = new RegExp(`^rgb\\(${G},${G},${G}\\)$`), is = new RegExp(`^rgba\\(${xt},${xt},${xt},${Lt}\\)$`), os = new RegExp(`^rgba\\(${G},${G},${G},${Lt}\\)$`), as = new RegExp(`^hsl\\(${Lt},${G},${G}\\)$`), ss = new RegExp(`^hsla\\(${Lt},${G},${G},${Lt}\\)$`), Be = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
ve(Gt, pt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Xe,
  // Deprecated! Use color.formatHex.
  formatHex: Xe,
  formatHex8: us,
  formatHsl: ls,
  formatRgb: Ue,
  toString: Ue
});
function Xe() {
  return this.rgb().formatHex();
}
function us() {
  return this.rgb().formatHex8();
}
function ls() {
  return Zr(this).formatHsl();
}
function Ue() {
  return this.rgb().formatRgb();
}
function pt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = ns.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ge(n) : e === 3 ? new C(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Jt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Jt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = es.exec(t)) ? new C(n[1], n[2], n[3], 1) : (n = rs.exec(t)) ? new C(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = is.exec(t)) ? Jt(n[1], n[2], n[3], n[4]) : (n = os.exec(t)) ? Jt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = as.exec(t)) ? Ve(n[1], n[2] / 100, n[3] / 100, 1) : (n = ss.exec(t)) ? Ve(n[1], n[2] / 100, n[3] / 100, n[4]) : Be.hasOwnProperty(t) ? Ge(Be[t]) : t === "transparent" ? new C(NaN, NaN, NaN, 0) : null;
}
function Ge(t) {
  return new C(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Jt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new C(t, n, e, r);
}
function fs(t) {
  return t instanceof Gt || (t = pt(t)), t ? (t = t.rgb(), new C(t.r, t.g, t.b, t.opacity)) : new C();
}
function Jn(t, n, e, r) {
  return arguments.length === 1 ? fs(t) : new C(t, n, e, r ?? 1);
}
function C(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ve(C, Jn, Vr(Gt, {
  brighter(t) {
    return t = t == null ? hn : Math.pow(hn, t), new C(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Dt : Math.pow(Dt, t), new C(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new C(ht(this.r), ht(this.g), ht(this.b), pn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ye,
  // Deprecated! Use color.formatHex.
  formatHex: Ye,
  formatHex8: cs,
  formatRgb: Ke,
  toString: Ke
}));
function Ye() {
  return `#${ct(this.r)}${ct(this.g)}${ct(this.b)}`;
}
function cs() {
  return `#${ct(this.r)}${ct(this.g)}${ct(this.b)}${ct((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ke() {
  const t = pn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${ht(this.r)}, ${ht(this.g)}, ${ht(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function pn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ht(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ct(t) {
  return t = ht(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ve(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new H(t, n, e, r);
}
function Zr(t) {
  if (t instanceof H) return new H(t.h, t.s, t.l, t.opacity);
  if (t instanceof Gt || (t = pt(t)), !t) return new H();
  if (t instanceof H) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new H(a, s, l, t.opacity);
}
function hs(t, n, e, r) {
  return arguments.length === 1 ? Zr(t) : new H(t, n, e, r ?? 1);
}
function H(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ve(H, hs, Vr(Gt, {
  brighter(t) {
    return t = t == null ? hn : Math.pow(hn, t), new H(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Dt : Math.pow(Dt, t), new H(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new C(
      qn(t >= 240 ? t - 240 : t + 120, i, r),
      qn(t, i, r),
      qn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new H(Ze(this.h), Qt(this.s), Qt(this.l), pn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = pn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ze(this.h)}, ${Qt(this.s) * 100}%, ${Qt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ze(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Qt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function qn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const we = (t) => () => t;
function ps(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function ds(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function gs(t) {
  return (t = +t) == 1 ? Wr : function(n, e) {
    return e - n ? ds(n, e, t) : we(isNaN(n) ? e : n);
  };
}
function Wr(t, n) {
  var e = n - t;
  return e ? ps(t, e) : we(isNaN(t) ? n : t);
}
const dn = function t(n) {
  var e = gs(n);
  function r(i, o) {
    var a = e((i = Jn(i)).r, (o = Jn(o)).r), s = e(i.g, o.g), l = e(i.b, o.b), u = Wr(i.opacity, o.opacity);
    return function(h) {
      return i.r = a(h), i.g = s(h), i.b = l(h), i.opacity = u(h), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ys(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function ms(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function _s(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = be(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function vs(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function L(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function ws(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = be(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var Qn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Hn = new RegExp(Qn.source, "g");
function bs(t) {
  return function() {
    return t;
  };
}
function xs(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Jr(t, n) {
  var e = Qn.lastIndex = Hn.lastIndex = 0, r, i, o, a = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = Qn.exec(t)) && (i = Hn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: L(r, i) })), e = Hn.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? xs(l[0].x) : bs(n) : (n = l.length, function(u) {
    for (var h = 0, d; h < n; ++h) s[(d = l[h]).i] = d.x(u);
    return s.join("");
  });
}
function be(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? we(n) : (e === "number" ? L : e === "string" ? (r = pt(n)) ? (n = r, dn) : Jr : n instanceof pt ? dn : n instanceof Date ? vs : ms(n) ? ys : Array.isArray(n) ? _s : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? ws : L)(t, n);
}
function Ms(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var We = 180 / Math.PI, jn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Qr(t, n, e, r, i, o) {
  var a, s, l;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * We,
    skewX: Math.atan(l) * We,
    scaleX: a,
    scaleY: s
  };
}
var jt;
function $s(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? jn : Qr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Ts(t) {
  return t == null || (jt || (jt = document.createElementNS("http://www.w3.org/2000/svg", "g")), jt.setAttribute("transform", t), !(t = jt.transform.baseVal.consolidate())) ? jn : (t = t.matrix, Qr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function jr(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, h, d, c, f, p) {
    if (u !== d || h !== c) {
      var _ = f.push("translate(", null, n, null, e);
      p.push({ i: _ - 4, x: L(u, d) }, { i: _ - 2, x: L(h, c) });
    } else (d || c) && f.push("translate(" + d + n + c + e);
  }
  function a(u, h, d, c) {
    u !== h ? (u - h > 180 ? h += 360 : h - u > 180 && (u += 360), c.push({ i: d.push(i(d) + "rotate(", null, r) - 2, x: L(u, h) })) : h && d.push(i(d) + "rotate(" + h + r);
  }
  function s(u, h, d, c) {
    u !== h ? c.push({ i: d.push(i(d) + "skewX(", null, r) - 2, x: L(u, h) }) : h && d.push(i(d) + "skewX(" + h + r);
  }
  function l(u, h, d, c, f, p) {
    if (u !== d || h !== c) {
      var _ = f.push(i(f) + "scale(", null, ",", null, ")");
      p.push({ i: _ - 4, x: L(u, d) }, { i: _ - 2, x: L(h, c) });
    } else (d !== 1 || c !== 1) && f.push(i(f) + "scale(" + d + "," + c + ")");
  }
  return function(u, h) {
    var d = [], c = [];
    return u = t(u), h = t(h), o(u.translateX, u.translateY, h.translateX, h.translateY, d, c), a(u.rotate, h.rotate, d, c), s(u.skewX, h.skewX, d, c), l(u.scaleX, u.scaleY, h.scaleX, h.scaleY, d, c), u = h = null, function(f) {
      for (var p = -1, _ = c.length, g; ++p < _; ) d[(g = c[p]).i] = g.x(f);
      return d.join("");
    };
  };
}
var As = jr($s, "px, ", "px)", "deg)"), Ss = jr(Ts, ", ", ")", ")"), Tt = 0, zt = 0, It = 0, ti = 1e3, gn, Ct, yn = 0, dt = 0, Mn = 0, qt = typeof performance == "object" && performance.now ? performance : Date, ni = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function $n() {
  return dt || (ni(Ps), dt = qt.now() + Mn);
}
function Ps() {
  dt = 0;
}
function Ht() {
  this._call = this._time = this._next = null;
}
Ht.prototype = ei.prototype = {
  constructor: Ht,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? $n() : +e) + (n == null ? 0 : +n), !this._next && Ct !== this && (Ct ? Ct._next = this : gn = this, Ct = this), this._call = t, this._time = e, te();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, te());
  }
};
function ei(t, n, e) {
  var r = new Ht();
  return r.restart(t, n, e), r;
}
function Es() {
  $n(), ++Tt;
  for (var t = gn, n; t; )
    (n = dt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Tt;
}
function Je() {
  dt = (yn = qt.now()) + Mn, Tt = zt = 0;
  try {
    Es();
  } finally {
    Tt = 0, Os(), dt = 0;
  }
}
function Is() {
  var t = qt.now(), n = t - yn;
  n > ti && (Mn -= n, yn = t);
}
function Os() {
  for (var t, n = gn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : gn = e);
  Ct = t, te(r);
}
function te(t) {
  if (!Tt) {
    zt && (zt = clearTimeout(zt));
    var n = t - dt;
    n > 24 ? (t < 1 / 0 && (zt = setTimeout(Je, t - qt.now() - Mn)), It && (It = clearInterval(It))) : (It || (yn = qt.now(), It = setInterval(Is, ti)), Tt = 1, ni(Je));
  }
}
function Qe(t, n, e) {
  var r = new Ht();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function zs(t, n, e) {
  var r = new Ht(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? $n() : +s, r._restart(function l(u) {
      u += i, r._restart(l, i += a, s), o(u);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var Cs = ye("start", "end", "cancel", "interrupt"), Rs = [], ri = 0, je = 1, ne = 2, sn = 3, tr = 4, ee = 5, un = 6;
function Tn(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  ks(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Cs,
    tween: Rs,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ri
  });
}
function xe(t, n) {
  var e = N(t, n);
  if (e.state > ri) throw new Error("too late; already scheduled");
  return e;
}
function K(t, n) {
  var e = N(t, n);
  if (e.state > sn) throw new Error("too late; already running");
  return e;
}
function N(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function ks(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = ei(o, 0, e.time);
  function o(u) {
    e.state = je, e.timer.restart(a, e.delay, e.time), e.delay <= u && a(u - e.delay);
  }
  function a(u) {
    var h, d, c, f;
    if (e.state !== je) return l();
    for (h in r)
      if (f = r[h], f.name === e.name) {
        if (f.state === sn) return Qe(a);
        f.state === tr ? (f.state = un, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete r[h]) : +h < n && (f.state = un, f.timer.stop(), f.on.call("cancel", t, t.__data__, f.index, f.group), delete r[h]);
      }
    if (Qe(function() {
      e.state === sn && (e.state = tr, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = ne, e.on.call("start", t, t.__data__, e.index, e.group), e.state === ne) {
      for (e.state = sn, i = new Array(c = e.tween.length), h = 0, d = -1; h < c; ++h)
        (f = e.tween[h].value.call(t, t.__data__, e.index, e.group)) && (i[++d] = f);
      i.length = d + 1;
    }
  }
  function s(u) {
    for (var h = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = ee, 1), d = -1, c = i.length; ++d < c; )
      i[d].call(t, h);
    e.state === ee && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = un, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Fs(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > ne && r.state < ee, r.state = un, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Ds(t) {
  return this.each(function() {
    Fs(this, t);
  });
}
function Ls(t, n) {
  var e, r;
  return function() {
    var i = K(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function qs(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = K(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    o.tween = i;
  };
}
function Hs(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = N(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Ls : qs)(e, t, n));
}
function Me(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = K(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return N(i, r).value[n];
  };
}
function ii(t, n) {
  var e;
  return (typeof n == "number" ? L : n instanceof pt ? dn : (e = pt(n)) ? (n = e, dn) : Jr)(t, n);
}
function Ns(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Bs(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Xs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Us(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Gs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Ys(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Ks(t, n) {
  var e = xn(t), r = e === "transform" ? Ss : ii;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Ys : Gs)(e, r, Me(this, "attr." + t, n)) : n == null ? (e.local ? Bs : Ns)(e) : (e.local ? Us : Xs)(e, r, n));
}
function Vs(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Zs(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Ws(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Zs(t, o)), e;
  }
  return i._value = n, i;
}
function Js(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Vs(t, o)), e;
  }
  return i._value = n, i;
}
function Qs(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = xn(t);
  return this.tween(e, (r.local ? Ws : Js)(r, n));
}
function js(t, n) {
  return function() {
    xe(this, t).delay = +n.apply(this, arguments);
  };
}
function tu(t, n) {
  return n = +n, function() {
    xe(this, t).delay = n;
  };
}
function nu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? js : tu)(n, t)) : N(this.node(), n).delay;
}
function eu(t, n) {
  return function() {
    K(this, t).duration = +n.apply(this, arguments);
  };
}
function ru(t, n) {
  return n = +n, function() {
    K(this, t).duration = n;
  };
}
function iu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? eu : ru)(n, t)) : N(this.node(), n).duration;
}
function ou(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    K(this, t).ease = n;
  };
}
function au(t) {
  var n = this._id;
  return arguments.length ? this.each(ou(n, t)) : N(this.node(), n).ease;
}
function su(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    K(this, t).ease = e;
  };
}
function uu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(su(this._id, t));
}
function lu(t) {
  typeof t != "function" && (t = Lr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new tt(r, this._parents, this._name, this._id);
}
function fu(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var l = n[s], u = e[s], h = l.length, d = a[s] = new Array(h), c, f = 0; f < h; ++f)
      (c = l[f] || u[f]) && (d[f] = c);
  for (; s < r; ++s)
    a[s] = n[s];
  return new tt(a, this._parents, this._name, this._id);
}
function cu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function hu(t, n, e) {
  var r, i, o = cu(n) ? xe : K;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function pu(t, n) {
  var e = this._id;
  return arguments.length < 2 ? N(this.node(), e).on.on(t) : this.each(hu(e, t, n));
}
function du(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function gu() {
  return this.on("end.remove", du(this._id));
}
function yu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = me(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], l = s.length, u = o[a] = new Array(l), h, d, c = 0; c < l; ++c)
      (h = s[c]) && (d = t.call(h, h.__data__, c, s)) && ("__data__" in h && (d.__data__ = h.__data__), u[c] = d, Tn(u[c], n, e, c, u, N(h, e)));
  return new tt(o, this._parents, n, e);
}
function mu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Dr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, h, d = 0; d < u; ++d)
      if (h = l[d]) {
        for (var c = t.call(h, h.__data__, d, l), f, p = N(h, e), _ = 0, g = c.length; _ < g; ++_)
          (f = c[_]) && Tn(f, n, e, _, c, p);
        o.push(c), a.push(h);
      }
  return new tt(o, a, n, e);
}
var _u = Ut.prototype.constructor;
function vu() {
  return new _u(this._groups, this._parents);
}
function wu(t, n) {
  var e, r, i;
  return function() {
    var o = $t(this, t), a = (this.style.removeProperty(t), $t(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function oi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function bu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = $t(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function xu(t, n, e) {
  var r, i, o;
  return function() {
    var a = $t(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), $t(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s));
  };
}
function Mu(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var l = K(this, t), u = l.on, h = l.value[o] == null ? s || (s = oi(n)) : void 0;
    (u !== e || i !== h) && (r = (e = u).copy()).on(a, i = h), l.on = r;
  };
}
function $u(t, n, e) {
  var r = (t += "") == "transform" ? As : ii;
  return n == null ? this.styleTween(t, wu(t, r)).on("end.style." + t, oi(t)) : typeof n == "function" ? this.styleTween(t, xu(t, r, Me(this, "style." + t, n))).each(Mu(this._id, t)) : this.styleTween(t, bu(t, r, n), e).on("end.style." + t, null);
}
function Tu(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Au(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && Tu(t, a, e)), r;
  }
  return o._value = n, o;
}
function Su(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Au(t, n, e ?? ""));
}
function Pu(t) {
  return function() {
    this.textContent = t;
  };
}
function Eu(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Iu(t) {
  return this.tween("text", typeof t == "function" ? Eu(Me(this, "text", t)) : Pu(t == null ? "" : t + ""));
}
function Ou(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function zu(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Ou(i)), n;
  }
  return r._value = t, r;
}
function Cu(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, zu(t));
}
function Ru() {
  for (var t = this._name, n = this._id, e = ai(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var h = N(l, n);
        Tn(l, t, e, u, a, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new tt(r, this._parents, t, e);
}
function ku() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var u = K(this, r), h = u.on;
      h !== t && (n = (t = h).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && o();
  });
}
var Fu = 0;
function tt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function ai() {
  return ++Fu;
}
var Z = Ut.prototype;
tt.prototype = {
  constructor: tt,
  select: yu,
  selectAll: mu,
  selectChild: Z.selectChild,
  selectChildren: Z.selectChildren,
  filter: lu,
  merge: fu,
  selection: vu,
  transition: Ru,
  call: Z.call,
  nodes: Z.nodes,
  node: Z.node,
  size: Z.size,
  empty: Z.empty,
  each: Z.each,
  on: pu,
  attr: Ks,
  attrTween: Qs,
  style: $u,
  styleTween: Su,
  text: Iu,
  textTween: Cu,
  remove: gu,
  tween: Hs,
  delay: nu,
  duration: iu,
  ease: au,
  easeVarying: uu,
  end: ku,
  [Symbol.iterator]: Z[Symbol.iterator]
};
function Du(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Lu = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Du
};
function qu(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Hu(t) {
  var n, e;
  t instanceof tt ? (n = t._id, t = t._name) : (n = ai(), (e = Lu).time = $n(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Tn(l, t, n, u, a, e || qu(l, n));
  return new tt(r, this._parents, t, n);
}
Ut.prototype.interrupt = Ds;
Ut.prototype.transition = Hu;
const re = Math.PI, ie = 2 * re, ft = 1e-6, Nu = ie - ft;
function si(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Bu(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return si;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class ui {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? si : Bu(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, l = r - n, u = i - e, h = a - n, d = s - e, c = h * h + d * d;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (c > ft) if (!(Math.abs(d * l - u * h) > ft) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let f = r - a, p = i - s, _ = l * l + u * u, g = f * f + p * p, m = Math.sqrt(_), x = Math.sqrt(c), $ = o * Math.tan((re - Math.acos((_ + c - g) / (2 * m * x))) / 2), y = $ / x, w = $ / m;
      Math.abs(y - 1) > ft && this._append`L${n + y * h},${e + y * d}`, this._append`A${o},${o},0,0,${+(d * f > h * p)},${this._x1 = n + w * l},${this._y1 = e + w * u}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, h = e + l, d = 1 ^ a, c = a ? i - o : o - i;
    this._x1 === null ? this._append`M${u},${h}` : (Math.abs(this._x1 - u) > ft || Math.abs(this._y1 - h) > ft) && this._append`L${u},${h}`, r && (c < 0 && (c = c % ie + ie), c > Nu ? this._append`A${r},${r},0,1,${d},${n - s},${e - l}A${r},${r},0,1,${d},${this._x1 = u},${this._y1 = h}` : c > ft && this._append`A${r},${r},0,${+(c >= re)},${d},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function B() {
  return new ui();
}
B.prototype = ui.prototype;
function Xu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function mn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function At(t) {
  return t = mn(Math.abs(t)), t ? t[1] : NaN;
}
function Uu(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), o.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Gu(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Yu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function _n(t) {
  if (!(n = Yu.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new $e({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
_n.prototype = $e.prototype;
function $e(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
$e.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ku(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var li;
function Vu(t, n) {
  var e = mn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (li = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + mn(t, Math.max(0, n + o - 1))[0];
}
function nr(t, n) {
  var e = mn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const er = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Xu,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => nr(t * 100, n),
  r: nr,
  s: Vu,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function rr(t) {
  return t;
}
var ir = Array.prototype.map, or = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Zu(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? rr : Uu(ir.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? rr : Gu(ir.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(d) {
    d = _n(d);
    var c = d.fill, f = d.align, p = d.sign, _ = d.symbol, g = d.zero, m = d.width, x = d.comma, $ = d.precision, y = d.trim, w = d.type;
    w === "n" ? (x = !0, w = "g") : er[w] || ($ === void 0 && ($ = 12), y = !0, w = "g"), (g || c === "0" && f === "=") && (g = !0, c = "0", f = "=");
    var A = _ === "$" ? e : _ === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : "", S = _ === "$" ? r : /[%p]/.test(w) ? a : "", I = er[w], X = /[defgprs%]/.test(w);
    $ = $ === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
    function V(b) {
      var U = A, O = S, D, Vt, ot;
      if (w === "c")
        O = I(b) + O, b = "";
      else {
        b = +b;
        var lt = b < 0 || 1 / b < 0;
        if (b = isNaN(b) ? l : I(Math.abs(b), $), y && (b = Ku(b)), lt && +b == 0 && p !== "+" && (lt = !1), U = (lt ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + U, O = (w === "s" ? or[8 + li / 3] : "") + O + (lt && p === "(" ? ")" : ""), X) {
          for (D = -1, Vt = b.length; ++D < Vt; )
            if (ot = b.charCodeAt(D), 48 > ot || ot > 57) {
              O = (ot === 46 ? i + b.slice(D + 1) : b.slice(D)) + O, b = b.slice(0, D);
              break;
            }
        }
      }
      x && !g && (b = n(b, 1 / 0));
      var vt = U.length + b.length + O.length, F = vt < m ? new Array(m - vt + 1).join(c) : "";
      switch (x && g && (b = n(F + b, F.length ? m - O.length : 1 / 0), F = ""), f) {
        case "<":
          b = U + b + O + F;
          break;
        case "=":
          b = U + F + b + O;
          break;
        case "^":
          b = F.slice(0, vt = F.length >> 1) + U + b + O + F.slice(vt);
          break;
        default:
          b = F + U + b + O;
          break;
      }
      return o(b);
    }
    return V.toString = function() {
      return d + "";
    }, V;
  }
  function h(d, c) {
    var f = u((d = _n(d), d.type = "f", d)), p = Math.max(-8, Math.min(8, Math.floor(At(c) / 3))) * 3, _ = Math.pow(10, -p), g = or[8 + p / 3];
    return function(m) {
      return f(_ * m) + g;
    };
  }
  return {
    format: u,
    formatPrefix: h
  };
}
var tn, An, fi;
Wu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Wu(t) {
  return tn = Zu(t), An = tn.format, fi = tn.formatPrefix, tn;
}
function Ju(t) {
  return Math.max(0, -At(Math.abs(t)));
}
function Qu(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(At(n) / 3))) * 3 - At(Math.abs(t)));
}
function ju(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, At(n) - At(t)) + 1;
}
function ci(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
const ar = Symbol("implicit");
function hi() {
  var t = new Le(), n = [], e = [], r = ar;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== ar) return r;
      t.set(o, a = n.push(o) - 1);
    }
    return e[a % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length) return n.slice();
    n = [], t = new Le();
    for (const a of o)
      t.has(a) || t.set(a, n.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), i) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return hi(n, e).unknown(r);
  }, ci.apply(i, arguments), i;
}
function tl(t) {
  return function() {
    return t;
  };
}
function nl(t) {
  return +t;
}
var sr = [0, 1];
function wt(t) {
  return t;
}
function oe(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : tl(isNaN(n) ? NaN : 0.5);
}
function el(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function rl(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = oe(i, r), o = e(a, o)) : (r = oe(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function il(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = oe(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var l = to(t, s, 1, r) - 1;
    return o[l](i[l](s));
  };
}
function ol(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function al() {
  var t = sr, n = sr, e = be, r, i, o, a = wt, s, l, u;
  function h() {
    var c = Math.min(t.length, n.length);
    return a !== wt && (a = el(t[0], t[c - 1])), s = c > 2 ? il : rl, l = u = null, d;
  }
  function d(c) {
    return c == null || isNaN(c = +c) ? o : (l || (l = s(t.map(r), n, e)))(r(a(c)));
  }
  return d.invert = function(c) {
    return a(i((u || (u = s(n, t.map(r), L)))(c)));
  }, d.domain = function(c) {
    return arguments.length ? (t = Array.from(c, nl), h()) : t.slice();
  }, d.range = function(c) {
    return arguments.length ? (n = Array.from(c), h()) : n.slice();
  }, d.rangeRound = function(c) {
    return n = Array.from(c), e = Ms, h();
  }, d.clamp = function(c) {
    return arguments.length ? (a = c ? !0 : wt, h()) : a !== wt;
  }, d.interpolate = function(c) {
    return arguments.length ? (e = c, h()) : e;
  }, d.unknown = function(c) {
    return arguments.length ? (o = c, d) : o;
  }, function(c, f) {
    return r = c, i = f, h();
  };
}
function sl() {
  return al()(wt, wt);
}
function ul(t, n, e, r) {
  var i = uo(t, n, e), o;
  switch (r = _n(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Qu(i, a)) && (r.precision = o), fi(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = ju(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Ju(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return An(r);
}
function ll(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return so(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return ul(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], l, u, h = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); h-- > 0; ) {
      if (u = Kn(a, s, e), u === l)
        return r[i] = a, r[o] = s, n(r);
      if (u > 0)
        a = Math.floor(a / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function ut() {
  var t = sl();
  return t.copy = function() {
    return ol(t, ut());
  }, ci.apply(t, arguments), ll(t);
}
function Rt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Rt.prototype = {
  constructor: Rt,
  scale: function(t) {
    return t === 1 ? this : new Rt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Rt(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Rt.prototype;
var pi = typeof global == "object" && global && global.Object === Object && global, fl = typeof self == "object" && self && self.Object === Object && self, et = pi || fl || Function("return this")(), Y = et.Symbol, di = Object.prototype, cl = di.hasOwnProperty, hl = di.toString, Ot = Y ? Y.toStringTag : void 0;
function pl(t) {
  var n = cl.call(t, Ot), e = t[Ot];
  try {
    t[Ot] = void 0;
    var r = !0;
  } catch {
  }
  var i = hl.call(t);
  return r && (n ? t[Ot] = e : delete t[Ot]), i;
}
var dl = Object.prototype, gl = dl.toString;
function yl(t) {
  return gl.call(t);
}
var ml = "[object Null]", _l = "[object Undefined]", ur = Y ? Y.toStringTag : void 0;
function St(t) {
  return t == null ? t === void 0 ? _l : ml : ur && ur in Object(t) ? pl(t) : yl(t);
}
function gt(t) {
  return t != null && typeof t == "object";
}
var vl = "[object Symbol]";
function Sn(t) {
  return typeof t == "symbol" || gt(t) && St(t) == vl;
}
function Pt(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var R = Array.isArray, lr = Y ? Y.prototype : void 0, fr = lr ? lr.toString : void 0;
function gi(t) {
  if (typeof t == "string")
    return t;
  if (R(t))
    return Pt(t, gi) + "";
  if (Sn(t))
    return fr ? fr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var wl = /\s/;
function bl(t) {
  for (var n = t.length; n-- && wl.test(t.charAt(n)); )
    ;
  return n;
}
var xl = /^\s+/;
function Ml(t) {
  return t && t.slice(0, bl(t) + 1).replace(xl, "");
}
function nt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var cr = NaN, $l = /^[-+]0x[0-9a-f]+$/i, Tl = /^0b[01]+$/i, Al = /^0o[0-7]+$/i, Sl = parseInt;
function Pl(t) {
  if (typeof t == "number")
    return t;
  if (Sn(t))
    return cr;
  if (nt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = nt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Ml(t);
  var e = Tl.test(t);
  return e || Al.test(t) ? Sl(t.slice(2), e ? 2 : 8) : $l.test(t) ? cr : +t;
}
var El = 1 / 0, Il = 17976931348623157e292;
function Nn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Pl(t), t === El || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * Il;
  }
  return t === t ? t : 0;
}
function Pn(t) {
  return t;
}
var Ol = "[object AsyncFunction]", zl = "[object Function]", Cl = "[object GeneratorFunction]", Rl = "[object Proxy]";
function yi(t) {
  if (!nt(t))
    return !1;
  var n = St(t);
  return n == zl || n == Cl || n == Ol || n == Rl;
}
var Bn = et["__core-js_shared__"], hr = function() {
  var t = /[^.]+$/.exec(Bn && Bn.keys && Bn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function kl(t) {
  return !!hr && hr in t;
}
var Fl = Function.prototype, Dl = Fl.toString;
function mt(t) {
  if (t != null) {
    try {
      return Dl.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Ll = /[\\^$.*+?()[\]{}|]/g, ql = /^\[object .+?Constructor\]$/, Hl = Function.prototype, Nl = Object.prototype, Bl = Hl.toString, Xl = Nl.hasOwnProperty, Ul = RegExp(
  "^" + Bl.call(Xl).replace(Ll, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Gl(t) {
  if (!nt(t) || kl(t))
    return !1;
  var n = yi(t) ? Ul : ql;
  return n.test(mt(t));
}
function Yl(t, n) {
  return t == null ? void 0 : t[n];
}
function _t(t, n) {
  var e = Yl(t, n);
  return Gl(e) ? e : void 0;
}
var ae = _t(et, "WeakMap");
function Kl(t, n, e) {
  switch (e.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, e[0]);
    case 2:
      return t.call(n, e[0], e[1]);
    case 3:
      return t.call(n, e[0], e[1], e[2]);
  }
  return t.apply(n, e);
}
function Vl(t, n) {
  var e = -1, r = t.length;
  for (n || (n = Array(r)); ++e < r; )
    n[e] = t[e];
  return n;
}
var Zl = 800, Wl = 16, Jl = Date.now;
function Ql(t) {
  var n = 0, e = 0;
  return function() {
    var r = Jl(), i = Wl - (r - e);
    if (e = r, i > 0) {
      if (++n >= Zl)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function jl(t) {
  return function() {
    return t;
  };
}
var vn = function() {
  try {
    var t = _t(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), tf = vn ? function(t, n) {
  return vn(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: jl(n),
    writable: !0
  });
} : Pn, nf = Ql(tf);
function ef(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var rf = 9007199254740991, of = /^(?:0|[1-9]\d*)$/;
function En(t, n) {
  var e = typeof t;
  return n = n ?? rf, !!n && (e == "number" || e != "symbol" && of.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function af(t, n, e) {
  n == "__proto__" && vn ? vn(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function In(t, n) {
  return t === n || t !== t && n !== n;
}
var sf = Object.prototype, uf = sf.hasOwnProperty;
function lf(t, n, e) {
  var r = t[n];
  (!(uf.call(t, n) && In(r, e)) || e === void 0 && !(n in t)) && af(t, n, e);
}
var pr = Math.max;
function ff(t, n, e) {
  return n = pr(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, o = pr(r.length - n, 0), a = Array(o); ++i < o; )
      a[i] = r[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = r[i];
    return s[n] = e(a), Kl(t, this, s);
  };
}
function cf(t, n) {
  return nf(ff(t, n, Pn), t + "");
}
var hf = 9007199254740991;
function Te(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= hf;
}
function Et(t) {
  return t != null && Te(t.length) && !yi(t);
}
function pf(t, n, e) {
  if (!nt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Et(e) && En(n, e.length) : r == "string" && n in e) ? In(e[n], t) : !1;
}
var df = Object.prototype;
function mi(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || df;
  return t === e;
}
function _i(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var gf = "[object Arguments]";
function dr(t) {
  return gt(t) && St(t) == gf;
}
var vi = Object.prototype, yf = vi.hasOwnProperty, mf = vi.propertyIsEnumerable, Ae = dr(/* @__PURE__ */ function() {
  return arguments;
}()) ? dr : function(t) {
  return gt(t) && yf.call(t, "callee") && !mf.call(t, "callee");
};
function _f() {
  return !1;
}
var wi = typeof exports == "object" && exports && !exports.nodeType && exports, gr = wi && typeof module == "object" && module && !module.nodeType && module, vf = gr && gr.exports === wi, yr = vf ? et.Buffer : void 0, wf = yr ? yr.isBuffer : void 0, se = wf || _f, bf = "[object Arguments]", xf = "[object Array]", Mf = "[object Boolean]", $f = "[object Date]", Tf = "[object Error]", Af = "[object Function]", Sf = "[object Map]", Pf = "[object Number]", Ef = "[object Object]", If = "[object RegExp]", Of = "[object Set]", zf = "[object String]", Cf = "[object WeakMap]", Rf = "[object ArrayBuffer]", kf = "[object DataView]", Ff = "[object Float32Array]", Df = "[object Float64Array]", Lf = "[object Int8Array]", qf = "[object Int16Array]", Hf = "[object Int32Array]", Nf = "[object Uint8Array]", Bf = "[object Uint8ClampedArray]", Xf = "[object Uint16Array]", Uf = "[object Uint32Array]", T = {};
T[Ff] = T[Df] = T[Lf] = T[qf] = T[Hf] = T[Nf] = T[Bf] = T[Xf] = T[Uf] = !0;
T[bf] = T[xf] = T[Rf] = T[Mf] = T[kf] = T[$f] = T[Tf] = T[Af] = T[Sf] = T[Pf] = T[Ef] = T[If] = T[Of] = T[zf] = T[Cf] = !1;
function Gf(t) {
  return gt(t) && Te(t.length) && !!T[St(t)];
}
function Yf(t) {
  return function(n) {
    return t(n);
  };
}
var bi = typeof exports == "object" && exports && !exports.nodeType && exports, kt = bi && typeof module == "object" && module && !module.nodeType && module, Kf = kt && kt.exports === bi, Xn = Kf && pi.process, mr = function() {
  try {
    var t = kt && kt.require && kt.require("util").types;
    return t || Xn && Xn.binding && Xn.binding("util");
  } catch {
  }
}(), _r = mr && mr.isTypedArray, xi = _r ? Yf(_r) : Gf, Vf = Object.prototype, Zf = Vf.hasOwnProperty;
function Mi(t, n) {
  var e = R(t), r = !e && Ae(t), i = !e && !r && se(t), o = !e && !r && !i && xi(t), a = e || r || i || o, s = a ? _i(t.length, String) : [], l = s.length;
  for (var u in t)
    (n || Zf.call(t, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    En(u, l))) && s.push(u);
  return s;
}
function $i(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Wf = $i(Object.keys, Object), Jf = Object.prototype, Qf = Jf.hasOwnProperty;
function jf(t) {
  if (!mi(t))
    return Wf(t);
  var n = [];
  for (var e in Object(t))
    Qf.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Yt(t) {
  return Et(t) ? Mi(t) : jf(t);
}
function tc(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var nc = Object.prototype, ec = nc.hasOwnProperty;
function rc(t) {
  if (!nt(t))
    return tc(t);
  var n = mi(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !ec.call(t, r)) || e.push(r);
  return e;
}
function ic(t) {
  return Et(t) ? Mi(t, !0) : rc(t);
}
var oc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ac = /^\w*$/;
function Se(t, n) {
  if (R(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Sn(t) ? !0 : ac.test(t) || !oc.test(t) || n != null && t in Object(n);
}
var Nt = _t(Object, "create");
function sc() {
  this.__data__ = Nt ? Nt(null) : {}, this.size = 0;
}
function uc(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var lc = "__lodash_hash_undefined__", fc = Object.prototype, cc = fc.hasOwnProperty;
function hc(t) {
  var n = this.__data__;
  if (Nt) {
    var e = n[t];
    return e === lc ? void 0 : e;
  }
  return cc.call(n, t) ? n[t] : void 0;
}
var pc = Object.prototype, dc = pc.hasOwnProperty;
function gc(t) {
  var n = this.__data__;
  return Nt ? n[t] !== void 0 : dc.call(n, t);
}
var yc = "__lodash_hash_undefined__";
function mc(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Nt && n === void 0 ? yc : n, this;
}
function yt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
yt.prototype.clear = sc;
yt.prototype.delete = uc;
yt.prototype.get = hc;
yt.prototype.has = gc;
yt.prototype.set = mc;
function _c() {
  this.__data__ = [], this.size = 0;
}
function On(t, n) {
  for (var e = t.length; e--; )
    if (In(t[e][0], n))
      return e;
  return -1;
}
var vc = Array.prototype, wc = vc.splice;
function bc(t) {
  var n = this.__data__, e = On(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : wc.call(n, e, 1), --this.size, !0;
}
function xc(t) {
  var n = this.__data__, e = On(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Mc(t) {
  return On(this.__data__, t) > -1;
}
function $c(t, n) {
  var e = this.__data__, r = On(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function rt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
rt.prototype.clear = _c;
rt.prototype.delete = bc;
rt.prototype.get = xc;
rt.prototype.has = Mc;
rt.prototype.set = $c;
var Bt = _t(et, "Map");
function Tc() {
  this.size = 0, this.__data__ = {
    hash: new yt(),
    map: new (Bt || rt)(),
    string: new yt()
  };
}
function Ac(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function zn(t, n) {
  var e = t.__data__;
  return Ac(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Sc(t) {
  var n = zn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Pc(t) {
  return zn(this, t).get(t);
}
function Ec(t) {
  return zn(this, t).has(t);
}
function Ic(t, n) {
  var e = zn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function it(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
it.prototype.clear = Tc;
it.prototype.delete = Sc;
it.prototype.get = Pc;
it.prototype.has = Ec;
it.prototype.set = Ic;
var Oc = "Expected a function";
function Pe(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Oc);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Pe.Cache || it)(), e;
}
Pe.Cache = it;
var zc = 500;
function Cc(t) {
  var n = Pe(t, function(r) {
    return e.size === zc && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Rc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, kc = /\\(\\)?/g, Fc = Cc(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Rc, function(e, r, i, o) {
    n.push(i ? o.replace(kc, "$1") : r || e);
  }), n;
});
function Cn(t) {
  return t == null ? "" : gi(t);
}
function Rn(t, n) {
  return R(t) ? t : Se(t, n) ? [t] : Fc(Cn(t));
}
function Kt(t) {
  if (typeof t == "string" || Sn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Ee(t, n) {
  n = Rn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Kt(n[e++])];
  return e && e == r ? t : void 0;
}
function Dc(t, n, e) {
  var r = t == null ? void 0 : Ee(t, n);
  return r === void 0 ? e : r;
}
function Ie(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var vr = Y ? Y.isConcatSpreadable : void 0;
function Lc(t) {
  return R(t) || Ae(t) || !!(vr && t && t[vr]);
}
function qc(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = Lc), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? Ie(i, s) : i[i.length] = s;
  }
  return i;
}
function Hc(t) {
  var n = t == null ? 0 : t.length;
  return n ? qc(t) : [];
}
var Nc = $i(Object.getPrototypeOf, Object);
function Bc(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function Xc(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Bc(t, n, e);
}
var Uc = "\\ud800-\\udfff", Gc = "\\u0300-\\u036f", Yc = "\\ufe20-\\ufe2f", Kc = "\\u20d0-\\u20ff", Vc = Gc + Yc + Kc, Zc = "\\ufe0e\\ufe0f", Wc = "\\u200d", Jc = RegExp("[" + Wc + Uc + Vc + Zc + "]");
function Ti(t) {
  return Jc.test(t);
}
function Qc(t) {
  return t.split("");
}
var Ai = "\\ud800-\\udfff", jc = "\\u0300-\\u036f", th = "\\ufe20-\\ufe2f", nh = "\\u20d0-\\u20ff", eh = jc + th + nh, rh = "\\ufe0e\\ufe0f", ih = "[" + Ai + "]", ue = "[" + eh + "]", le = "\\ud83c[\\udffb-\\udfff]", oh = "(?:" + ue + "|" + le + ")", Si = "[^" + Ai + "]", Pi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ei = "[\\ud800-\\udbff][\\udc00-\\udfff]", ah = "\\u200d", Ii = oh + "?", Oi = "[" + rh + "]?", sh = "(?:" + ah + "(?:" + [Si, Pi, Ei].join("|") + ")" + Oi + Ii + ")*", uh = Oi + Ii + sh, lh = "(?:" + [Si + ue + "?", ue, Pi, Ei, ih].join("|") + ")", fh = RegExp(le + "(?=" + le + ")|" + lh + uh, "g");
function ch(t) {
  return t.match(fh) || [];
}
function hh(t) {
  return Ti(t) ? ch(t) : Qc(t);
}
function ph(t) {
  return function(n) {
    n = Cn(n);
    var e = Ti(n) ? hh(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Xc(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var dh = ph("toUpperCase");
function gh(t) {
  return dh(Cn(t).toLowerCase());
}
function yh() {
  this.__data__ = new rt(), this.size = 0;
}
function mh(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function _h(t) {
  return this.__data__.get(t);
}
function vh(t) {
  return this.__data__.has(t);
}
var wh = 200;
function bh(t, n) {
  var e = this.__data__;
  if (e instanceof rt) {
    var r = e.__data__;
    if (!Bt || r.length < wh - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new it(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function j(t) {
  var n = this.__data__ = new rt(t);
  this.size = n.size;
}
j.prototype.clear = yh;
j.prototype.delete = mh;
j.prototype.get = _h;
j.prototype.has = vh;
j.prototype.set = bh;
function Oe(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function zi() {
  return [];
}
var xh = Object.prototype, Mh = xh.propertyIsEnumerable, wr = Object.getOwnPropertySymbols, Ci = wr ? function(t) {
  return t == null ? [] : (t = Object(t), Oe(wr(t), function(n) {
    return Mh.call(t, n);
  }));
} : zi, $h = Object.getOwnPropertySymbols, Th = $h ? function(t) {
  for (var n = []; t; )
    Ie(n, Ci(t)), t = Nc(t);
  return n;
} : zi;
function Ri(t, n, e) {
  var r = n(t);
  return R(t) ? r : Ie(r, e(t));
}
function br(t) {
  return Ri(t, Yt, Ci);
}
function Ah(t) {
  return Ri(t, ic, Th);
}
var fe = _t(et, "DataView"), ce = _t(et, "Promise"), he = _t(et, "Set"), xr = "[object Map]", Sh = "[object Object]", Mr = "[object Promise]", $r = "[object Set]", Tr = "[object WeakMap]", Ar = "[object DataView]", Ph = mt(fe), Eh = mt(Bt), Ih = mt(ce), Oh = mt(he), zh = mt(ae), W = St;
(fe && W(new fe(new ArrayBuffer(1))) != Ar || Bt && W(new Bt()) != xr || ce && W(ce.resolve()) != Mr || he && W(new he()) != $r || ae && W(new ae()) != Tr) && (W = function(t) {
  var n = St(t), e = n == Sh ? t.constructor : void 0, r = e ? mt(e) : "";
  if (r)
    switch (r) {
      case Ph:
        return Ar;
      case Eh:
        return xr;
      case Ih:
        return Mr;
      case Oh:
        return $r;
      case zh:
        return Tr;
    }
  return n;
});
var Sr = et.Uint8Array, Ch = "__lodash_hash_undefined__";
function Rh(t) {
  return this.__data__.set(t, Ch), this;
}
function kh(t) {
  return this.__data__.has(t);
}
function wn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new it(); ++n < e; )
    this.add(t[n]);
}
wn.prototype.add = wn.prototype.push = Rh;
wn.prototype.has = kh;
function Fh(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Dh(t, n) {
  return t.has(n);
}
var Lh = 1, qh = 2;
function ki(t, n, e, r, i, o) {
  var a = e & Lh, s = t.length, l = n.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(t), h = o.get(n);
  if (u && h)
    return u == n && h == t;
  var d = -1, c = !0, f = e & qh ? new wn() : void 0;
  for (o.set(t, n), o.set(n, t); ++d < s; ) {
    var p = t[d], _ = n[d];
    if (r)
      var g = a ? r(_, p, d, n, t, o) : r(p, _, d, t, n, o);
    if (g !== void 0) {
      if (g)
        continue;
      c = !1;
      break;
    }
    if (f) {
      if (!Fh(n, function(m, x) {
        if (!Dh(f, x) && (p === m || i(p, m, e, r, o)))
          return f.push(x);
      })) {
        c = !1;
        break;
      }
    } else if (!(p === _ || i(p, _, e, r, o))) {
      c = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), c;
}
function Fi(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Hh(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Nh = 1, Bh = 2, Xh = "[object Boolean]", Uh = "[object Date]", Gh = "[object Error]", Yh = "[object Map]", Kh = "[object Number]", Vh = "[object RegExp]", Zh = "[object Set]", Wh = "[object String]", Jh = "[object Symbol]", Qh = "[object ArrayBuffer]", jh = "[object DataView]", Pr = Y ? Y.prototype : void 0, Un = Pr ? Pr.valueOf : void 0;
function tp(t, n, e, r, i, o, a) {
  switch (e) {
    case jh:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Qh:
      return !(t.byteLength != n.byteLength || !o(new Sr(t), new Sr(n)));
    case Xh:
    case Uh:
    case Kh:
      return In(+t, +n);
    case Gh:
      return t.name == n.name && t.message == n.message;
    case Vh:
    case Wh:
      return t == n + "";
    case Yh:
      var s = Fi;
    case Zh:
      var l = r & Nh;
      if (s || (s = Hh), t.size != n.size && !l)
        return !1;
      var u = a.get(t);
      if (u)
        return u == n;
      r |= Bh, a.set(t, n);
      var h = ki(s(t), s(n), r, i, o, a);
      return a.delete(t), h;
    case Jh:
      if (Un)
        return Un.call(t) == Un.call(n);
  }
  return !1;
}
var np = 1, ep = Object.prototype, rp = ep.hasOwnProperty;
function ip(t, n, e, r, i, o) {
  var a = e & np, s = br(t), l = s.length, u = br(n), h = u.length;
  if (l != h && !a)
    return !1;
  for (var d = l; d--; ) {
    var c = s[d];
    if (!(a ? c in n : rp.call(n, c)))
      return !1;
  }
  var f = o.get(t), p = o.get(n);
  if (f && p)
    return f == n && p == t;
  var _ = !0;
  o.set(t, n), o.set(n, t);
  for (var g = a; ++d < l; ) {
    c = s[d];
    var m = t[c], x = n[c];
    if (r)
      var $ = a ? r(x, m, c, n, t, o) : r(m, x, c, t, n, o);
    if (!($ === void 0 ? m === x || i(m, x, e, r, o) : $)) {
      _ = !1;
      break;
    }
    g || (g = c == "constructor");
  }
  if (_ && !g) {
    var y = t.constructor, w = n.constructor;
    y != w && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof w == "function" && w instanceof w) && (_ = !1);
  }
  return o.delete(t), o.delete(n), _;
}
var op = 1, Er = "[object Arguments]", Ir = "[object Array]", nn = "[object Object]", ap = Object.prototype, Or = ap.hasOwnProperty;
function sp(t, n, e, r, i, o) {
  var a = R(t), s = R(n), l = a ? Ir : W(t), u = s ? Ir : W(n);
  l = l == Er ? nn : l, u = u == Er ? nn : u;
  var h = l == nn, d = u == nn, c = l == u;
  if (c && se(t)) {
    if (!se(n))
      return !1;
    a = !0, h = !1;
  }
  if (c && !h)
    return o || (o = new j()), a || xi(t) ? ki(t, n, e, r, i, o) : tp(t, n, l, e, r, i, o);
  if (!(e & op)) {
    var f = h && Or.call(t, "__wrapped__"), p = d && Or.call(n, "__wrapped__");
    if (f || p) {
      var _ = f ? t.value() : t, g = p ? n.value() : n;
      return o || (o = new j()), i(_, g, e, r, o);
    }
  }
  return c ? (o || (o = new j()), ip(t, n, e, r, i, o)) : !1;
}
function ze(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !gt(t) && !gt(n) ? t !== t && n !== n : sp(t, n, e, r, ze, i);
}
var up = 1, lp = 2;
function fp(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], l = t[s], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var h = new j(), d;
      if (!(d === void 0 ? ze(u, l, up | lp, r, h) : d))
        return !1;
    }
  }
  return !0;
}
function Di(t) {
  return t === t && !nt(t);
}
function cp(t) {
  for (var n = Yt(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Di(i)];
  }
  return n;
}
function Li(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function hp(t) {
  var n = cp(t);
  return n.length == 1 && n[0][2] ? Li(n[0][0], n[0][1]) : function(e) {
    return e === t || fp(e, t, n);
  };
}
function pp(t, n) {
  return t != null && n in Object(t);
}
function qi(t, n, e) {
  n = Rn(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = Kt(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Te(i) && En(a, i) && (R(t) || Ae(t)));
}
function dp(t, n) {
  return t != null && qi(t, n, pp);
}
var gp = 1, yp = 2;
function mp(t, n) {
  return Se(t) && Di(n) ? Li(Kt(t), n) : function(e) {
    var r = Dc(e, t);
    return r === void 0 && r === n ? dp(e, t) : ze(n, r, gp | yp);
  };
}
function Hi(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function _p(t) {
  return function(n) {
    return Ee(n, t);
  };
}
function vp(t) {
  return Se(t) ? Hi(Kt(t)) : _p(t);
}
function Ce(t) {
  return typeof t == "function" ? t : t == null ? Pn : typeof t == "object" ? R(t) ? mp(t[0], t[1]) : hp(t) : vp(t);
}
function wp(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var l = a[++i];
      if (e(o[l], l, o) === !1)
        break;
    }
    return n;
  };
}
var bp = wp();
function xp(t, n) {
  return t && bp(t, n, Yt);
}
function Mp(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Et(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Re = Mp(xp);
function $p(t) {
  return gt(t) && Et(t);
}
function Tp(t) {
  return typeof t == "function" ? t : Pn;
}
function at(t, n) {
  var e = R(t) ? ef : Re;
  return e(t, Tp(n));
}
function Ap(t, n) {
  return Pt(n, function(e) {
    return [e, t[e]];
  });
}
function Sp(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var Pp = "[object Map]", Ep = "[object Set]";
function Ip(t) {
  return function(n) {
    var e = W(n);
    return e == Pp ? Fi(n) : e == Ep ? Sp(n) : Ap(n, t(n));
  };
}
var Ni = Ip(Yt);
function Op(t, n) {
  var e = [];
  return Re(t, function(r, i, o) {
    n(r, i, o) && e.push(r);
  }), e;
}
function zp(t, n) {
  var e = R(t) ? Oe : Op;
  return e(t, Ce(n));
}
function Cp(t, n) {
  var e = -1, r = Et(t) ? Array(t.length) : [];
  return Re(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function Xt(t, n) {
  var e = R(t) ? Pt : Cp;
  return e(t, Ce(n));
}
var Rp = Object.prototype, kp = Rp.hasOwnProperty;
function Fp(t, n) {
  return t != null && kp.call(t, n);
}
function Bi(t, n) {
  return t != null && qi(t, n, Fp);
}
function Dp(t, n) {
  return Pt(n, function(e) {
    return t[e];
  });
}
function Lp(t) {
  return t == null ? [] : Dp(t, Yt(t));
}
function qp(t, n, e, r) {
  if (!nt(t))
    return t;
  n = Rn(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var l = Kt(n[i]), u = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != a) {
      var h = s[l];
      u = void 0, u === void 0 && (u = nt(h) ? h : En(n[i + 1]) ? [] : {});
    }
    lf(s, l, u), s = s[l];
  }
  return t;
}
function Hp(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = Ee(t, a);
    e(s, a) && qp(o, Rn(a, t), s);
  }
  return o;
}
function Np(t, n) {
  if (t == null)
    return {};
  var e = Pt(Ah(t), function(r) {
    return [r];
  });
  return n = Ce(n), Hp(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var Bp = Math.floor, Xp = Math.random;
function Up(t, n) {
  return t + Bp(Xp() * (n - t + 1));
}
var Gp = Math.ceil, Yp = Math.max;
function Kp(t, n, e, r) {
  for (var i = -1, o = Yp(Gp((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function Vp(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && pf(n, e, r) && (e = r = void 0), n = Nn(n), e === void 0 ? (e = n, n = 0) : e = Nn(e), r = r === void 0 ? n < e ? 1 : -1 : Nn(r), Kp(n, e, r);
  };
}
var Mt = Vp();
function Zp() {
  var t = arguments, n = Cn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function Xi(t, n) {
  var e = -1, r = t.length, i = r - 1;
  for (n = n === void 0 ? r : n; ++e < n; ) {
    var o = Up(e, i), a = t[o];
    t[o] = t[e], t[e] = a;
  }
  return t.length = n, t;
}
function Wp(t) {
  return Xi(Vl(t));
}
function Jp(t) {
  return Xi(Lp(t));
}
function Qp(t) {
  var n = R(t) ? Wp : Jp;
  return n(t);
}
var jp = Math.max;
function t0(t) {
  if (!(t && t.length))
    return [];
  var n = 0;
  return t = Oe(t, function(e) {
    if ($p(e))
      return n = jp(e.length, n), !0;
  }), _i(n, function(e) {
    return Pt(t, Hi(e));
  });
}
var bn = cf(t0);
const n0 = (t, n, e = 12, r = 12) => {
  const i = ut().domain([0, e]).range([0, t]), o = ut().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Mt((e + 1) * (r + 1)).map(function(l) {
        return { m: l % (e + 1), n: Math.floor(l / (e + 1)), x: i(l % (e + 1)), y: o(Math.floor(l / (e + 1))) };
      });
    },
    position: function(l, u) {
      typeof l == "number" && (l = [l]), typeof u == "number" && (u = [u]);
      const h = Hc(Xt(u, function(d) {
        return Xt(
          l,
          function(c) {
            return { x: i(c), y: o(d) };
          }
        );
      }));
      return h.length == 1 ? h[0] : h;
    }
  };
}, e0 = "_widget_18g36_1", r0 = "_label_18g36_19", i0 = "_lit_18g36_24", o0 = "_button_18g36_29", a0 = "_symbol_18g36_29", s0 = "_radio_18g36_29", u0 = "_radiobutton_18g36_29", l0 = "_selected_18g36_35", f0 = "_toggle_18g36_35", c0 = "_slider_18g36_44", h0 = "_track_18g36_44", p0 = "_track_overlay_18g36_48", d0 = "_handle_18g36_55", v = {
  widget: e0,
  label: r0,
  lit: i0,
  button: o0,
  symbol: a0,
  radio: s0,
  radiobutton: u0,
  selected: l0,
  toggle: f0,
  slider: c0,
  track: h0,
  track_overlay: p0,
  handle: d0
}, Ui = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, ke = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, g0 = (t = 1) => {
  const n = B();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, y0 = (t = 1) => {
  const n = B(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, m0 = (t = 1) => {
  const n = B();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, _0 = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = B();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, v0 = (t = 1) => {
  const n = B(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, l = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, w0 = (t = 1) => {
  const n = B(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, b0 = (t = 1) => {
  const n = B(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var l = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, x0 = (t = 1) => {
  var n = B(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, M0 = (t = 1) => {
  const n = B(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, pe = (t) => {
  switch (t) {
    case "play":
      return g0;
    case "forward":
      return y0;
    case "back":
      return m0;
    case "pause":
      return _0;
    case "reload":
      return v0;
    case "capture":
      return w0;
    case "rewind":
      return b0;
    case "stop":
      return x0;
    case "push":
      return M0;
  }
}, Fe = () => {
  const t = "button";
  var n = Ui(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", l = null, u = function(p) {
  }, h = ["play"], d = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    symbolsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? o.x : (o.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? o.y : (o.y = p, this);
    },
    label: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? l : (l = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return u = p, this;
      u(p);
    },
    actions: function(p) {
      return typeof p > "u" ? h : (h = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? d : (d = p, this);
    },
    click: function() {
      d = (d + 1) % h.length, u(), E(this.parentNode).select("." + v.symbol).attr("d", pe(h[d])(r * e));
    },
    press: function(p) {
      d = (d + 1) % h.length, u(), p.select("#button_" + n).select("." + v.symbol).attr("d", pe(h[d])(r * e));
    }
  };
}, $0 = () => {
  const t = "slider", n = An(".3f");
  var e = Ui(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, l = "top-left", u = null, h = function(m) {
  }, d = function(m) {
  }, c = [0, 1], f = 0, p = null, _ = ut().domain(c).range([0, r]).clamp(!0);
  const g = function(m, x, $ = c) {
    const y = m.select("#slider_" + e);
    _.domain($), f = x, y.selectAll("." + v.handle).transition().attr("cx", _(x)), a && y.select("." + v.label).text(p + " = " + n(f)), h(), d();
  };
  return {
    type: t,
    scale: _,
    id: function(m) {
      return typeof m > "u" ? e : (e = m, this);
    },
    label: function(m) {
      return typeof m > "u" ? p : (p = m, this);
    },
    size: function(m) {
      return typeof m > "u" ? r : (r = m, this);
    },
    girth: function(m) {
      return typeof m > "u" ? i : (i = m, this);
    },
    knob: function(m) {
      return typeof m > "u" ? o : (o = m, this);
    },
    show: function(m) {
      return typeof m > "u" ? a : (a = m, this);
    },
    position: function(m) {
      return typeof m > "u" ? s : (s = m, this);
    },
    x: function(m) {
      return typeof m > "u" ? s.x : (s.x = m, this);
    },
    y: function(m) {
      return typeof m > "u" ? s.y : (s.y = m, this);
    },
    labelposition: function(m) {
      return typeof m > "u" ? l : (l = m, this);
    },
    fontsize: function(m) {
      return typeof m > "u" ? u : (u = m, this);
    },
    update: function(m) {
      if (typeof m == "function")
        return h = m, this;
      h(m);
    },
    update_end: function(m) {
      if (typeof m == "function")
        return d = m, this;
      d(m);
    },
    range: function(m) {
      return typeof m > "u" ? c : (c = m, this);
    },
    value: function(m) {
      return typeof m > "u" ? f : (f = m, this);
    },
    reset: g,
    click: g
  };
}, T0 = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = E(o).attr("class", v.widget + " " + v.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", v.background).on("click", t.click).on("mouseover", function() {
    E(this).classed(v.lit, !0), E(this.parentNode).select("." + v.symbol).classed(v.lit, !0);
  }).on("mouseout", function() {
    E(this).classed(v.lit, !1), E(this.parentNode).select("." + v.symbol).classed(v.lit, !1);
  }), a.append("path").attr("d", pe(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", v.symbol), r) {
    const l = ke(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", v.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return o;
}, Gi = (t, n) => {
  const e = B();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, A0 = (t, n) => {
  const e = An(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = E(l).attr("class", v.widget + " " + v.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Gi(t.size(), t.girth())).attr("class", v.track), s.append("circle").attr("class", v.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", v.track_overlay).on("click", function(p) {
    const _ = Zn(p, this)[0];
    t.value(a.invert(_)), t.update(), t.update_end(), s.selectAll("." + v.handle).attr("cx", a(t.value())), t.show() && s.select("." + v.label).text(t.label() + " = " + e(t.value()));
  }).call(
    ts().on("drag", function(p) {
      t.value(a.invert(p.x)), t.update(), s.selectAll("." + v.handle).attr("cx", a(t.value())), t.show() && s.select("." + v.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(p) {
      t.update_end();
    })
  );
  var h, d, c, f = "bottom";
  return t.fontsize && (d = t.labelposition().match(/bottom/i) != null ? Zt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Zt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), d = t.labelposition().match(/bottom/i) != null ? Zt([t.girth() / 2, t.knob()]) + 7 : -Zt([t.girth() / 2, t.knob()]) - 7, h = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, c = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", f = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", v.label).style("text-anchor", c).style("alignment-baseline", f).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + h + "," + d + ")"), l;
}, S0 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = E(a).attr("class", v.widget + " " + v.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(v.selected, t.value() == 1);
  if (s.append("path").attr("d", Gi(2 * t.size(), 2 * t.size())).attr("class", v.track), s.append("circle").attr("class", v.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", v.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = ke(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", v.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return a;
}, P0 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = lo(a), l = ut().domain([0, a - 1]).range([0, t.size()]), u = ut().domain([0, a - 1]).range([0, t.size()]), h = document.createElementNS("http://www.w3.org/2000/svg", "g"), c = E(h).attr("class", v.widget + " " + v.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + v.radiobutton).data(s).enter().append("g").attr("class", v.radiobutton).attr("id", (g) => "b" + g).attr("transform", (g) => t.orientation() == "vertical" ? "translate(0," + u(g) + ")" : "translate(" + l(g) + ",0)");
  var f, p;
  t.shape() == "rect" ? (f = c.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = c.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (f = c.append("circle").attr("r", i / 2), p = c.append("circle").attr("r", o / 2)), f.attr("class", v.background).on("mouseover", function() {
    E(this).classed(v.lit, !0), E(this.parentNode).select("." + v.symbol).classed(v.lit, !0);
  }).on("mouseout", function() {
    E(this).classed(v.lit, !1), E(this.parentNode).select("." + v.symbol).classed(v.lit, !1);
  }), p.attr("class", v.symbol), p.filter((g) => g == t.value()).classed(v.selected, !0), c.on("click", t.click);
  const _ = ke(t.buttonsize(), t.buttonsize(), r);
  return c.append("text").attr("class", v.label).text(function(g, m) {
    return t.choices()[m];
  }).attr("alignment-baseline", _.valign).attr("transform", "translate(" + _.x + "," + _.y + ")").style("font-size", t.fontsize()).attr("text-anchor", _.anchor), h;
}, zr = (t, n) => {
  switch (t.type) {
    case "button":
      return T0(t);
    case "slider":
      return A0(t);
    case "radio":
      return P0(t);
    case "toggle":
      return S0(t);
  }
}, E0 = (t, n) => {
  const e = n0(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = E("#" + t).classed("explorable " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height);
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && o.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && o.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: e };
}, M = {
  widgets: {
    slider_size: 400,
    slider_gap: 2,
    slider_girth: 14,
    slider_knob: 16,
    slider_anchor: { x: 1, y: 5.5 },
    legend_anchor: { x: 1, y: 11 },
    legend_gap: 4,
    legend: ["Susceptible", "Infected", "Recovered"],
    playbutton_size: 120,
    button_size: 70,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 10, y: 2 },
    resetbutton_anchor: { x: 7, y: 2 }
  },
  simulation: {
    delay: 10,
    I_color: "#D2042D",
    S_color: "#40B5AD",
    R_color: "rgb(0,0,0)"
  }
}, q = {
  N: 50,
  seed_size: 1,
  boundary: "dirichlet",
  infection_rate: {
    range: [0, 1],
    default: 0.69
  },
  recovery_rate: {
    range: [0, 0.2],
    default: 0.1
  },
  waning_immunity_rate: {
    range: [0, 0.1],
    default: 0.01
  }
}, I0 = (t) => Xt(
  Ni(t),
  (n) => {
    n[1].id = n[0], Bi(n[1], "label") || (n[1].label = Zp(gh(n[0]), /_/g, " "));
  }
), O0 = (t) => Xt(Ni(t), (n) => n[1]), z0 = (t, n) => at(t, (e, r) => e.widget = n[r]), C0 = (t) => Np(t, (n) => Bi(n, "range")), R0 = (t, n) => {
  var e = Math.abs(t.x - n.x), r = Math.abs(t.y - n.y);
  return Math.sqrt(e ** 2 + r ** 2);
}, k0 = "_legend_bbbfp_1", F0 = {
  legend: k0
}, De = C0(q);
I0(De);
const Yi = O0(De), ln = Xt(
  Yi,
  (t) => $0().id(t.id).label(t.label).range(t.range).value(t.default).size(M.widgets.slider_size).girth(M.widgets.slider_girth).knob(M.widgets.slider_knob)
);
z0(Yi, ln);
const st = Fe().actions(["play", "pause"]), kn = Fe().actions(["back"]), Fn = Fe().actions(["rewind"]), D0 = [st, kn, Fn], L0 = (t, n) => {
  const e = n.position(M.widgets.slider_anchor.x, Mt(ln.length).map((a) => M.widgets.slider_anchor.y + M.widgets.slider_gap * a)), r = n.position(Mt(M.widgets.legend.length).map((a) => M.widgets.legend_anchor.x + M.widgets.legend_gap * a), M.widgets.legend_anchor.y);
  ln.forEach((a, s) => a.position(e[s])), st.position(n.position(M.widgets.playbutton_anchor.x, M.widgets.playbutton_anchor.y)).size(M.widgets.playbutton_size), Fn.position(n.position(M.widgets.backbutton_anchor.x, M.widgets.backbutton_anchor.y)).size(M.widgets.button_size), kn.position(n.position(M.widgets.resetbutton_anchor.x, M.widgets.resetbutton_anchor.y)).size(M.widgets.button_size), t.selectAll(null).data(ln).enter().append(zr), t.selectAll(null).data(D0).enter().append(zr);
  const i = t.selectAll(null).data(M.widgets.legend).enter().append("g").attr("class", F0.legend).attr("transform", (a, s) => "translate(" + r[s].x + "," + r[s].y + ")");
  i.append("text").text((a) => a).attr("transform", "translate(20,0)");
  const o = [M.simulation.S_color, M.simulation.I_color, M.simulation.R_color];
  i.append("circle").attr("r", 10).attr("cy", -5).style("fill", (a, s) => o[s]);
}, q0 = (t) => {
  at(De, (n) => n.widget.reset(t, n.default));
};
bn([-1, 1, 0, 0], [0, 0, -1, 1]), bn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
const en = [1, 0], rn = [0.5, Math.sqrt(3) / 2], z = [
  { l: 1, m: 0, n: -1 },
  { l: 1, m: -1, n: 0 },
  { l: 0, m: -1, n: 1 },
  { l: 0, m: 1, n: -1 },
  { l: -1, m: 0, n: 1 },
  { l: -1, m: 1, n: 0 }
], Cr = [
  [z[0], z[1]],
  [z[1], z[2]],
  [z[2], z[4]],
  [z[4], z[5]],
  [z[5], z[3]],
  [z[3], z[0]]
];
function P(t) {
  return "id_l" + t.l + "m" + t.m + "n" + t.n;
}
const H0 = function(t) {
  var n = "periodic", e = 1, r = e / (2 * t + 1);
  const i = [], o = {};
  Mt(-t, t + 1).forEach(function(c) {
    Mt(-t, t + 1).forEach(function(f) {
      Mt(-t, t + 1).forEach(function(p) {
        c + f + p == 0 && i.push({
          l: c,
          m: f,
          n: p,
          x: r * c * en[0] + r * f * rn[0],
          y: r * c * en[1] + r * f * rn[1]
        });
      });
    });
  }), i.forEach(function(c) {
    o[P(c)] = c, c.cell = () => {
      const f = 1 / Math.sqrt(3);
      return [
        { x: c.x + r / 2, y: c.y + f * r / 2 },
        { x: c.x, y: c.y + f * r },
        { x: c.x - r / 2, y: c.y + f * r / 2 },
        { x: c.x - r / 2, y: c.y - f * r / 2 },
        { x: c.x, y: c.y - f * r },
        { x: c.x + r / 2, y: c.y - f * r / 2 },
        { x: c.x + r / 2, y: c.y + f * r / 2 }
      ];
    }, c.random_interior_point = () => {
      const f = 1 / Math.sqrt(3), p = Math.random(), _ = Math.random(), g = Math.floor(Math.random() * 6) * 2 * Math.PI / 6, m = r / 2 * Math.sqrt(p), x = r / 2 * Math.sqrt(p) * f * (1 - 2 * _), $ = Math.cos(g) * m - Math.sin(g) * x, y = Math.sin(g) * m + Math.cos(g) * x;
      return {
        x: c.x + $,
        y: c.y + y
      };
    };
  }), d(i);
  const a = function(c) {
    return typeof c < "u" ? (e = c, r = e / (2 * t + 1), i.forEach((f) => {
      f.x = r * f.l * en[0] + r * f.m * rn[0], f.y = r * f.l * en[1] + r * f.m * rn[1];
    }), this.L = e, this) : e;
  }, s = function(c) {
    var f = 1 / Math.sqrt(3);
    return [
      { x: c.x + Scale / t / 2, y: c.y + f / 2 * Scale / t },
      { x: c.x, y: c.y + f * Scale / t },
      { x: c.x - Scale / t / 2, y: c.y + f / 2 * Scale / t },
      { x: c.x - Scale / t / 2, y: c.y - f / 2 * Scale / t },
      { x: c.x, y: c.y - f * Scale / t },
      { x: c.x + Scale / t / 2, y: c.y - f / 2 * Scale / t },
      { x: c.x + Scale / t / 2, y: c.y + f / 2 * Scale / t }
    ];
  }, l = function(c) {
    return typeof c < "u" ? (c == "dirichlet" ? (n = "dirichlet", h(i)) : (n = "periodic", d(i)), i.forEach((f) => {
      f.is_boundary = n == "dirichlet" && (f.n == -t || f.n == t || f.l == -t || f.l == t || f.m == -t || f.m == t);
    }), this) : n;
  }, u = function() {
    return n === "periodic" ? null : zp(i, (c) => c.n == -t || c.n == t || c.l == -t || c.l == t || c.m == -t || c.m == t);
  };
  return {
    type: "hexagonal",
    L: e,
    N: t,
    size: 1 + 3 * t * (t + 1),
    nodes: i,
    scale: a,
    boundary: l,
    boundary_cells: u,
    cell: s
  };
  function h(c) {
    c.forEach(function(f) {
      f.neighbors = [], z.forEach(function(p) {
        const _ = P({ l: f.l + p.l, m: f.m + p.m, n: f.n + p.n }), g = o[_];
        typeof g < "u" && f.neighbors.push(g);
      });
    }), c.forEach(function(f) {
      f.triangles = [], Cr.forEach(function(p) {
        const _ = P({ l: f.l + p[0].l, m: f.m + p[0].m, n: f.n + p[0].n }), g = P({ l: f.l + p[1].l, m: f.m + p[1].m, n: f.n + p[1].n });
        typeof o[_] < "u" && typeof o[g] < "u" && f.triangles.push([o[_], o[g]]);
      });
    });
  }
  function d(c) {
    c.forEach(function(f) {
      f.neighbors = [], z.forEach(function(p) {
        var _ = P({ l: f.l + p.l, m: f.m + p.m, n: f.n + p.n });
        typeof o[_] > "u" && (f.l + p.l == t + 1 && Math.abs(f.m + p.m) <= t + 1 && Math.abs(f.n + p.n) <= t && (_ = P({ l: f.l + p.l - (2 * t + 1), m: f.m + p.m + (t + 1), n: f.n + p.n + t })), f.l + p.l == -(t + 1) && Math.abs(f.m + p.m) <= t + 1 && Math.abs(f.n + p.n) <= t && (_ = P({ l: f.l + p.l + (2 * t + 1), m: f.m + p.m - (t + 1), n: f.n + p.n - t })), f.m + p.m == t + 1 && Math.abs(f.l + p.l) <= t && Math.abs(f.n + p.n) <= t + 1 && (_ = P({ m: f.m + p.m - (2 * t + 1), n: f.n + p.n + (t + 1), l: f.l + p.l + t })), f.m + p.m == -(t + 1) && Math.abs(f.l + p.l) <= t && Math.abs(f.n + p.n) <= t + 1 && (_ = P({ m: f.m + p.m + (2 * t + 1), n: f.n + p.n - (t + 1), l: f.l + p.l - t })), f.n + p.n == t + 1 && Math.abs(f.l + p.l) <= t + 1 && Math.abs(f.m + p.m) <= t && (_ = P({ n: f.n + p.n - (2 * t + 1), l: f.l + p.l + (t + 1), m: f.m + p.m + t })), f.n + p.n == -(t + 1) && Math.abs(f.l + p.l) <= t + 1 && Math.abs(f.m + p.m) <= t && (_ = P({ n: f.n + p.n + (2 * t + 1), l: f.l + p.l - (t + 1), m: f.m + p.m - t }))), f.neighbors.push(o[_]);
      });
    }), c.forEach(function(f) {
      f.triangles = [], Cr.forEach(function(p) {
        var _ = [];
        p.forEach(function(g, m) {
          var x = P({ l: f.l + g.l, m: f.m + g.m, n: f.n + g.n });
          typeof o[x] > "u" && (f.l + g.l == t + 1 && Math.abs(f.m + g.m) <= t + 1 && Math.abs(f.n + g.n) <= t && P({ l: f.l + g.l - (2 * t + 1), m: f.m + g.m + (t + 1), n: f.n + g.n + t }), f.l + g.l == -(t + 1) && Math.abs(f.m + g.m) <= t + 1 && Math.abs(f.n + g.n) <= t && P({ l: f.l + g.l + (2 * t + 1), m: f.m + g.m - (t + 1), n: f.n + g.n - t }), f.m + g.m == t + 1 && Math.abs(f.l + g.l) <= t && Math.abs(f.n + g.n) <= t + 1 && P({ m: f.m + g.m - (2 * t + 1), n: f.n + g.n + (t + 1), l: f.l + g.l + t }), f.m + g.m == -(t + 1) && Math.abs(f.l + g.l) <= t && Math.abs(f.n + g.n) <= t + 1 && P({ m: f.m + g.m + (2 * t + 1), n: f.n + g.n - (t + 1), l: f.l + g.l - t }), f.n + g.n == t + 1 && Math.abs(f.l + g.l) <= t + 1 && Math.abs(f.m + g.m) <= t && P({ n: f.n + g.n - (2 * t + 1), l: f.l + g.l + (t + 1), m: f.m + g.m + t }), f.n + g.n == -(t + 1) && Math.abs(f.l + g.l) <= t + 1 && Math.abs(f.m + g.m) <= t && P({ n: f.n + g.n + (2 * t + 1), l: f.l + g.l - (t + 1), m: f.m + g.m - t })), _[m] = x;
        }), f.triangles.push([o[_[0]], o[_[1]]]);
      });
    });
  }
};
bn([-1, 1, 0, 0], [0, 0, -1, 1]), bn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
var Q = [];
const N0 = () => {
  q.timer = {}, q.tick = 0, Q = H0(q.N).boundary(q.boundary).nodes, Q.forEach((n) => {
    n.state = "S", n.change = !0;
  }), Q.filter((n) => R0(n, { x: 0, y: 0 }) < q.seed_size / q.N).forEach((n) => {
    n.state = "I", n.change = !0;
  });
}, B0 = () => {
  q.tick++, at(Q, (e) => {
    e.change = !1;
  });
  let t = Q.filter((e) => e.state == "I"), n = Q.filter((e) => e.state == "R");
  at(t, (e) => {
    Math.random() < q.recovery_rate.widget.value() && (e.state = "R", e.change = !0);
  }), at(n, (e) => {
    Math.random() < q.waning_immunity_rate.widget.value() && (e.state = "S", e.change = !0);
  }), t = Q.filter((e) => e.state == "I"), at(Qp(t), (e) => {
    const r = e.neighbors.filter((i) => i.state == "S");
    at(r, (i) => {
      Math.random() < q.infection_rate.widget.value() && (i.state = "I", i.change = !0);
    });
  });
};
var J, Gn, Yn;
const de = ut().domain([-0.5, 0.5]), ge = ut().domain([-0.5, 0.5]), X0 = hi().domain(["S", "I", "R"]).range([M.simulation.S_color, M.simulation.I_color, M.simulation.R_color]);
function Ki(t) {
  t.forEach((n) => {
    const e = n.cell(), r = e.length, i = X0(n.state);
    J.fillStyle = i, J.beginPath(), J.moveTo(de(e[0].x), ge(e[0].y)), at(e, (o, a) => J.lineTo(de(e[(a + 1) % r].x), ge(e[(a + 1) % r].y))), J.fill(), J.closePath();
  });
}
const U0 = (t, n) => {
  Ki(Q.filter((e) => e.change == !0));
}, G0 = (t, n) => {
  Gn = n.display_size.width, Yn = n.display_size.height, de.range([0, Gn]), ge.range([0, Yn]), J = t.node().getContext("2d"), J.translate(0.5, 0.5), J.clearRect(0, 0, Gn, Yn), Ki(Q);
};
function Y0(t, n) {
  B0(), U0();
}
function Vi(t, n) {
  N0(), G0(t, n);
}
var Rr = {};
const K0 = (t, n) => {
  st.value() == 1 ? Rr = zs(() => Y0(), M.simulation.delay) : Rr.stop();
}, V0 = (t, n, e) => {
  Fn.update(() => q0(n)), st.update(() => K0()), kn.update(() => Vi(t, e));
}, Z0 = {
  name: "@explorables/critical_hexsirsize",
  title: "Critical HexSIRSize",
  subtitle: "The stochastic, spatial SIRS model",
  description: "The explorable illustrates the behavior of a contagion process, like an epidemic. Susceptibles (S) can be infected by other infected sites (I), infected site become immune and recover (R), and when immunity wanes immune sites become susceptible again.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function W0(t, n = Zi) {
  const e = E0(t, n), r = e.display, i = e.controls, o = e.grid;
  return L0(i, o), V0(r, i, n), Vi(r, n), {
    halt() {
      st.value() === 1 && st.press(i);
    },
    reset() {
      st.value() === 1 && st.press(i), Fn.press(i), kn.press(i);
    },
    config: n,
    meta: Z0
  };
}
export {
  Zi as config,
  W0 as default,
  W0 as load,
  Z0 as meta
};
