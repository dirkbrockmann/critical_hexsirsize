(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-black{color:var(--tw-color-black)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}@media (prefers-color-scheme:dark){.tw\\:dark\\:bg-black{background-color:var(--tw-color-black)}.tw\\:dark\\:text-white{color:var(--tw-color-white)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._displayPanel_17y2l_1,._controlPanel_17y2l_8{display:block;line-height:0;box-sizing:border-box}._displayPanel_17y2l_1>canvas,._displayPanel_17y2l_1>svg,._controlPanel_17y2l_8>svg,._controlPanel_17y2l_8>canvas{display:block;box-sizing:border-box}._legend_17y2l_25{font-size:16px;alignment-baseline:middle;fill:#000}@media (prefers-color-scheme: dark){._legend_17y2l_25{fill:#fff}}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Ru = {
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
function te(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Nu(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Ta(t) {
  let n, e, r;
  t.length !== 2 ? (n = te, e = (s, l) => te(t(s), l), r = (s, l) => t(s) - l) : (n = t === te || t === Nu ? t : ju, e = t, r = t);
  function i(s, l, u = 0, f = s.length) {
    if (u < f) {
      if (n(l, l) !== 0) return f;
      do {
        const p = u + f >>> 1;
        e(s[p], l) < 0 ? u = p + 1 : f = p;
      } while (u < f);
    }
    return u;
  }
  function o(s, l, u = 0, f = s.length) {
    if (u < f) {
      if (n(l, l) !== 0) return f;
      do {
        const p = u + f >>> 1;
        e(s[p], l) <= 0 ? u = p + 1 : f = p;
      } while (u < f);
    }
    return u;
  }
  function a(s, l, u = 0, f = s.length) {
    const p = i(s, l, u, f - 1);
    return p > u && r(s[p - 1], l) > -r(s[p], l) ? p - 1 : p;
  }
  return { left: i, center: a, right: o };
}
function ju() {
  return 0;
}
function Du(t) {
  return t === null ? NaN : +t;
}
const Fu = Ta(te), Lu = Fu.right;
Ta(Du).center;
class Di extends Map {
  constructor(n, e = Xu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null) for (const [r, i] of n) this.set(r, i);
  }
  get(n) {
    return super.get(Fi(this, n));
  }
  has(n) {
    return super.has(Fi(this, n));
  }
  set(n, e) {
    return super.set(qu(this, n), e);
  }
  delete(n) {
    return super.delete(Hu(this, n));
  }
}
function Fi({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function qu({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function Hu({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function Xu(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const Bu = Math.sqrt(50), Uu = Math.sqrt(10), Yu = Math.sqrt(2);
function le(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Bu ? 10 : o >= Uu ? 5 : o >= Yu ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? le(t, n, e * 2) : [s, l, u];
}
function Gu(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? le(n, t, e) : le(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, l = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) l[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) l[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * a;
  return l;
}
function _r(t, n, e) {
  return n = +n, t = +t, e = +e, le(t, n, e)[2];
}
function Vu(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? _r(n, t, e) : _r(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
var Ku = { value: () => {
} };
function Ea() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new ne(e);
}
function ne(t) {
  this._ = t;
}
function Wu(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
ne.prototype = Ea.prototype = {
  constructor: ne,
  on: function(t, n) {
    var e = this._, r = Wu(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Zu(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Li(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Li(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new ne(t);
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
function Zu(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Li(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Ku, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var mr = "http://www.w3.org/1999/xhtml";
const qi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: mr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ze(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), qi.hasOwnProperty(n) ? { space: qi[n], local: t } : t;
}
function Ju(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === mr && n.documentElement.namespaceURI === mr ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Qu(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ka(t) {
  var n = ze(t);
  return (n.local ? Qu : Ju)(n);
}
function tl() {
}
function Qr(t) {
  return t == null ? tl : function() {
    return this.querySelector(t);
  };
}
function nl(t) {
  typeof t != "function" && (t = Qr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = o[f]) && (u = t.call(l, l.__data__, f, o)) && ("__data__" in l && (u.__data__ = l.__data__), s[f] = u);
  return new L(r, this._parents);
}
function el(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function rl() {
  return [];
}
function Pa(t) {
  return t == null ? rl : function() {
    return this.querySelectorAll(t);
  };
}
function il(t) {
  return function() {
    return el(t.apply(this, arguments));
  };
}
function ol(t) {
  typeof t == "function" ? t = il(t) : t = Pa(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new L(r, i);
}
function Oa(t) {
  return function() {
    return this.matches(t);
  };
}
function za(t) {
  return function(n) {
    return n.matches(t);
  };
}
var al = Array.prototype.find;
function sl(t) {
  return function() {
    return al.call(this.children, t);
  };
}
function ul() {
  return this.firstElementChild;
}
function ll(t) {
  return this.select(t == null ? ul : sl(typeof t == "function" ? t : za(t)));
}
var cl = Array.prototype.filter;
function fl() {
  return Array.from(this.children);
}
function hl(t) {
  return function() {
    return cl.call(this.children, t);
  };
}
function pl(t) {
  return this.selectAll(t == null ? fl : hl(typeof t == "function" ? t : za(t)));
}
function dl(t) {
  typeof t != "function" && (t = Oa(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new L(r, this._parents);
}
function Ca(t) {
  return new Array(t.length);
}
function gl() {
  return new L(this._enter || this._groups.map(Ca), this._parents);
}
function ce(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
ce.prototype = {
  constructor: ce,
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
function yl(t) {
  return function() {
    return t;
  };
}
function _l(t, n, e, r, i, o) {
  for (var a = 0, s, l = n.length, u = o.length; a < u; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new ce(t, o[a]);
  for (; a < l; ++a)
    (s = n[a]) && (i[a] = s);
}
function ml(t, n, e, r, i, o, a) {
  var s, l, u = /* @__PURE__ */ new Map(), f = n.length, p = o.length, c = new Array(f), h;
  for (s = 0; s < f; ++s)
    (l = n[s]) && (c[s] = h = a.call(l, l.__data__, s, n) + "", u.has(h) ? i[s] = l : u.set(h, l));
  for (s = 0; s < p; ++s)
    h = a.call(t, o[s], s, o) + "", (l = u.get(h)) ? (r[s] = l, l.__data__ = o[s], u.delete(h)) : e[s] = new ce(t, o[s]);
  for (s = 0; s < f; ++s)
    (l = n[s]) && u.get(c[s]) === l && (i[s] = l);
}
function vl(t) {
  return t.__data__;
}
function wl(t, n) {
  if (!arguments.length) return Array.from(this, vl);
  var e = n ? ml : _l, r = this._parents, i = this._groups;
  typeof t != "function" && (t = yl(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), u = 0; u < o; ++u) {
    var f = r[u], p = i[u], c = p.length, h = bl(t.call(f, f && f.__data__, u, r)), d = h.length, _ = s[u] = new Array(d), y = a[u] = new Array(d), b = l[u] = new Array(c);
    e(f, p, _, y, b, h, n);
    for (var g = 0, x = 0, m, w; g < d; ++g)
      if (m = _[g]) {
        for (g >= x && (x = g + 1); !(w = y[x]) && ++x < d; ) ;
        m._next = w || null;
      }
  }
  return a = new L(a, r), a._enter = s, a._exit = l, a;
}
function bl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function xl() {
  return new L(this._exit || this._groups.map(Ca), this._parents);
}
function Ml(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Al(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), l = 0; l < a; ++l)
    for (var u = e[l], f = r[l], p = u.length, c = s[l] = new Array(p), h, d = 0; d < p; ++d)
      (h = u[d] || f[d]) && (c[d] = h);
  for (; l < i; ++l)
    s[l] = e[l];
  return new L(s, this._parents);
}
function $l() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Sl(t) {
  t || (t = Tl);
  function n(p, c) {
    return p && c ? t(p.__data__, c.__data__) : !p - !c;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, l = i[o] = new Array(s), u, f = 0; f < s; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(n);
  }
  return new L(i, this._parents).order();
}
function Tl(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function El() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function kl() {
  return Array.from(this);
}
function Pl() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Ol() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function zl() {
  return !this.node();
}
function Cl(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Il(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Rl(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Nl(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function jl(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Dl(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Fl(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Ll(t, n) {
  var e = ze(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Rl : Il : typeof n == "function" ? e.local ? Fl : Dl : e.local ? jl : Nl)(e, n));
}
function Ia(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ql(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Hl(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Xl(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Bl(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? ql : typeof n == "function" ? Xl : Hl)(t, n, e ?? "")) : Vt(this.node(), t);
}
function Vt(t, n) {
  return t.style.getPropertyValue(n) || Ia(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Ul(t) {
  return function() {
    delete this[t];
  };
}
function Yl(t, n) {
  return function() {
    this[t] = n;
  };
}
function Gl(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Vl(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Ul : typeof n == "function" ? Gl : Yl)(t, n)) : this.node()[t];
}
function Ra(t) {
  return t.trim().split(/^|\s+/);
}
function ti(t) {
  return t.classList || new Na(t);
}
function Na(t) {
  this._node = t, this._names = Ra(t.getAttribute("class") || "");
}
Na.prototype = {
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
function ja(t, n) {
  for (var e = ti(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Da(t, n) {
  for (var e = ti(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Kl(t) {
  return function() {
    ja(this, t);
  };
}
function Wl(t) {
  return function() {
    Da(this, t);
  };
}
function Zl(t, n) {
  return function() {
    (n.apply(this, arguments) ? ja : Da)(this, t);
  };
}
function Jl(t, n) {
  var e = Ra(t + "");
  if (arguments.length < 2) {
    for (var r = ti(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Zl : n ? Kl : Wl)(e, n));
}
function Ql() {
  this.textContent = "";
}
function tc(t) {
  return function() {
    this.textContent = t;
  };
}
function nc(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ec(t) {
  return arguments.length ? this.each(t == null ? Ql : (typeof t == "function" ? nc : tc)(t)) : this.node().textContent;
}
function rc() {
  this.innerHTML = "";
}
function ic(t) {
  return function() {
    this.innerHTML = t;
  };
}
function oc(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ac(t) {
  return arguments.length ? this.each(t == null ? rc : (typeof t == "function" ? oc : ic)(t)) : this.node().innerHTML;
}
function sc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function uc() {
  return this.each(sc);
}
function lc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function cc() {
  return this.each(lc);
}
function fc(t) {
  var n = typeof t == "function" ? t : ka(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function hc() {
  return null;
}
function pc(t, n) {
  var e = typeof t == "function" ? t : ka(t), r = n == null ? hc : typeof n == "function" ? n : Qr(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function dc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function gc() {
  return this.each(dc);
}
function yc() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function _c() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function mc(t) {
  return this.select(t ? _c : yc);
}
function vc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function wc(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function bc(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function xc(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Mc(t, n, e) {
  return function() {
    var r = this.__on, i, o = wc(n);
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
function Ac(t, n, e) {
  var r = bc(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, f; l < u; ++l)
        for (i = 0, f = s[l]; i < o; ++i)
          if ((a = r[i]).type === f.type && a.name === f.name)
            return f.value;
    }
    return;
  }
  for (s = n ? Mc : xc, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function Fa(t, n, e) {
  var r = Ia(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function $c(t, n) {
  return function() {
    return Fa(this, t, n);
  };
}
function Sc(t, n) {
  return function() {
    return Fa(this, t, n.apply(this, arguments));
  };
}
function Tc(t, n) {
  return this.each((typeof n == "function" ? Sc : $c)(t, n));
}
function* Ec() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var La = [null];
function L(t, n) {
  this._groups = t, this._parents = n;
}
function In() {
  return new L([[document.documentElement]], La);
}
function kc() {
  return this;
}
L.prototype = In.prototype = {
  constructor: L,
  select: nl,
  selectAll: ol,
  selectChild: ll,
  selectChildren: pl,
  filter: dl,
  data: wl,
  enter: gl,
  exit: xl,
  join: Ml,
  merge: Al,
  selection: kc,
  order: $l,
  sort: Sl,
  call: El,
  nodes: kl,
  node: Pl,
  size: Ol,
  empty: zl,
  each: Cl,
  attr: Ll,
  style: Bl,
  property: Vl,
  classed: Jl,
  text: ec,
  html: ac,
  raise: uc,
  lower: cc,
  append: fc,
  insert: pc,
  remove: gc,
  clone: mc,
  datum: vc,
  on: Ac,
  dispatch: Tc,
  [Symbol.iterator]: Ec
};
function Pc(t) {
  return typeof t == "string" ? new L([[document.querySelector(t)]], [document.documentElement]) : new L([[t]], La);
}
function ni(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function qa(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Rn() {
}
var xn = 0.7, fe = 1 / xn, Ut = "\\s*([+-]?\\d+)\\s*", Mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", et = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Oc = /^#([0-9a-f]{3,8})$/, zc = new RegExp(`^rgb\\(${Ut},${Ut},${Ut}\\)$`), Cc = new RegExp(`^rgb\\(${et},${et},${et}\\)$`), Ic = new RegExp(`^rgba\\(${Ut},${Ut},${Ut},${Mn}\\)$`), Rc = new RegExp(`^rgba\\(${et},${et},${et},${Mn}\\)$`), Nc = new RegExp(`^hsl\\(${Mn},${et},${et}\\)$`), jc = new RegExp(`^hsla\\(${Mn},${et},${et},${Mn}\\)$`), Hi = {
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
ni(Rn, Ct, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Xi,
  // Deprecated! Use color.formatHex.
  formatHex: Xi,
  formatHex8: Dc,
  formatHsl: Fc,
  formatRgb: Bi,
  toString: Bi
});
function Xi() {
  return this.rgb().formatHex();
}
function Dc() {
  return this.rgb().formatHex8();
}
function Fc() {
  return Ha(this).formatHsl();
}
function Bi() {
  return this.rgb().formatRgb();
}
function Ct(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Oc.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ui(n) : e === 3 ? new j(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Ln(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Ln(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = zc.exec(t)) ? new j(n[1], n[2], n[3], 1) : (n = Cc.exec(t)) ? new j(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Ic.exec(t)) ? Ln(n[1], n[2], n[3], n[4]) : (n = Rc.exec(t)) ? Ln(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Nc.exec(t)) ? Vi(n[1], n[2] / 100, n[3] / 100, 1) : (n = jc.exec(t)) ? Vi(n[1], n[2] / 100, n[3] / 100, n[4]) : Hi.hasOwnProperty(t) ? Ui(Hi[t]) : t === "transparent" ? new j(NaN, NaN, NaN, 0) : null;
}
function Ui(t) {
  return new j(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ln(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new j(t, n, e, r);
}
function Lc(t) {
  return t instanceof Rn || (t = Ct(t)), t ? (t = t.rgb(), new j(t.r, t.g, t.b, t.opacity)) : new j();
}
function vr(t, n, e, r) {
  return arguments.length === 1 ? Lc(t) : new j(t, n, e, r ?? 1);
}
function j(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ni(j, vr, qa(Rn, {
  brighter(t) {
    return t = t == null ? fe : Math.pow(fe, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? xn : Math.pow(xn, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new j(Ot(this.r), Ot(this.g), Ot(this.b), he(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Yi,
  // Deprecated! Use color.formatHex.
  formatHex: Yi,
  formatHex8: qc,
  formatRgb: Gi,
  toString: Gi
}));
function Yi() {
  return `#${kt(this.r)}${kt(this.g)}${kt(this.b)}`;
}
function qc() {
  return `#${kt(this.r)}${kt(this.g)}${kt(this.b)}${kt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Gi() {
  const t = he(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ot(this.r)}, ${Ot(this.g)}, ${Ot(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function he(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ot(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function kt(t) {
  return t = Ot(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Vi(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new W(t, n, e, r);
}
function Ha(t) {
  if (t instanceof W) return new W(t.h, t.s, t.l, t.opacity);
  if (t instanceof Rn || (t = Ct(t)), !t) return new W();
  if (t instanceof W) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new W(a, s, l, t.opacity);
}
function Hc(t, n, e, r) {
  return arguments.length === 1 ? Ha(t) : new W(t, n, e, r ?? 1);
}
function W(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ni(W, Hc, qa(Rn, {
  brighter(t) {
    return t = t == null ? fe : Math.pow(fe, t), new W(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? xn : Math.pow(xn, t), new W(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new j(
      er(t >= 240 ? t - 240 : t + 120, i, r),
      er(t, i, r),
      er(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new W(Ki(this.h), qn(this.s), qn(this.l), he(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = he(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ki(this.h)}, ${qn(this.s) * 100}%, ${qn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ki(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function qn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function er(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const ei = (t) => () => t;
function Xc(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Bc(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Uc(t) {
  return (t = +t) == 1 ? Xa : function(n, e) {
    return e - n ? Bc(n, e, t) : ei(isNaN(n) ? e : n);
  };
}
function Xa(t, n) {
  var e = n - t;
  return e ? Xc(t, e) : ei(isNaN(t) ? n : t);
}
const pe = function t(n) {
  var e = Uc(n);
  function r(i, o) {
    var a = e((i = vr(i)).r, (o = vr(o)).r), s = e(i.g, o.g), l = e(i.b, o.b), u = Xa(i.opacity, o.opacity);
    return function(f) {
      return i.r = a(f), i.g = s(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Yc(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Gc(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Vc(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = ri(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Kc(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function G(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Wc(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = ri(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var wr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, rr = new RegExp(wr.source, "g");
function Zc(t) {
  return function() {
    return t;
  };
}
function Jc(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Ba(t, n) {
  var e = wr.lastIndex = rr.lastIndex = 0, r, i, o, a = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = wr.exec(t)) && (i = rr.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: G(r, i) })), e = rr.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? Jc(l[0].x) : Zc(n) : (n = l.length, function(u) {
    for (var f = 0, p; f < n; ++f) s[(p = l[f]).i] = p.x(u);
    return s.join("");
  });
}
function ri(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? ei(n) : (e === "number" ? G : e === "string" ? (r = Ct(n)) ? (n = r, pe) : Ba : n instanceof Ct ? pe : n instanceof Date ? Kc : Gc(n) ? Yc : Array.isArray(n) ? Vc : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Wc : G)(t, n);
}
function Qc(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Wi = 180 / Math.PI, br = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ua(t, n, e, r, i, o) {
  var a, s, l;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Wi,
    skewX: Math.atan(l) * Wi,
    scaleX: a,
    scaleY: s
  };
}
var Hn;
function tf(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? br : Ua(n.a, n.b, n.c, n.d, n.e, n.f);
}
function nf(t) {
  return t == null || (Hn || (Hn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Hn.setAttribute("transform", t), !(t = Hn.transform.baseVal.consolidate())) ? br : (t = t.matrix, Ua(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ya(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, f, p, c, h, d) {
    if (u !== p || f !== c) {
      var _ = h.push("translate(", null, n, null, e);
      d.push({ i: _ - 4, x: G(u, p) }, { i: _ - 2, x: G(f, c) });
    } else (p || c) && h.push("translate(" + p + n + c + e);
  }
  function a(u, f, p, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: p.push(i(p) + "rotate(", null, r) - 2, x: G(u, f) })) : f && p.push(i(p) + "rotate(" + f + r);
  }
  function s(u, f, p, c) {
    u !== f ? c.push({ i: p.push(i(p) + "skewX(", null, r) - 2, x: G(u, f) }) : f && p.push(i(p) + "skewX(" + f + r);
  }
  function l(u, f, p, c, h, d) {
    if (u !== p || f !== c) {
      var _ = h.push(i(h) + "scale(", null, ",", null, ")");
      d.push({ i: _ - 4, x: G(u, p) }, { i: _ - 2, x: G(f, c) });
    } else (p !== 1 || c !== 1) && h.push(i(h) + "scale(" + p + "," + c + ")");
  }
  return function(u, f) {
    var p = [], c = [];
    return u = t(u), f = t(f), o(u.translateX, u.translateY, f.translateX, f.translateY, p, c), a(u.rotate, f.rotate, p, c), s(u.skewX, f.skewX, p, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, p, c), u = f = null, function(h) {
      for (var d = -1, _ = c.length, y; ++d < _; ) p[(y = c[d]).i] = y.x(h);
      return p.join("");
    };
  };
}
var ef = Ya(tf, "px, ", "px)", "deg)"), rf = Ya(nf, ", ", ")", ")"), Kt = 0, pn = 0, ln = 0, Ga = 1e3, de, dn, ge = 0, It = 0, Ce = 0, An = typeof performance == "object" && performance.now ? performance : Date, Va = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ie() {
  return It || (Va(of), It = An.now() + Ce);
}
function of() {
  It = 0;
}
function $n() {
  this._call = this._time = this._next = null;
}
$n.prototype = Ka.prototype = {
  constructor: $n,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Ie() : +e) + (n == null ? 0 : +n), !this._next && dn !== this && (dn ? dn._next = this : de = this, dn = this), this._call = t, this._time = e, xr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, xr());
  }
};
function Ka(t, n, e) {
  var r = new $n();
  return r.restart(t, n, e), r;
}
function af() {
  Ie(), ++Kt;
  for (var t = de, n; t; )
    (n = It - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Kt;
}
function Zi() {
  It = (ge = An.now()) + Ce, Kt = pn = 0;
  try {
    af();
  } finally {
    Kt = 0, uf(), It = 0;
  }
}
function sf() {
  var t = An.now(), n = t - ge;
  n > Ga && (Ce -= n, ge = t);
}
function uf() {
  for (var t, n = de, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : de = e);
  dn = t, xr(r);
}
function xr(t) {
  if (!Kt) {
    pn && (pn = clearTimeout(pn));
    var n = t - It;
    n > 24 ? (t < 1 / 0 && (pn = setTimeout(Zi, t - An.now() - Ce)), ln && (ln = clearInterval(ln))) : (ln || (ge = An.now(), ln = setInterval(sf, Ga)), Kt = 1, Va(Zi));
  }
}
function Ji(t, n, e) {
  var r = new $n();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function lf(t, n, e) {
  var r = new $n(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Ie() : +s, r._restart(function l(u) {
      u += i, r._restart(l, i += a, s), o(u);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var cf = Ea("start", "end", "cancel", "interrupt"), ff = [], Wa = 0, Qi = 1, Mr = 2, ee = 3, to = 4, Ar = 5, re = 6;
function Re(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  hf(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: cf,
    tween: ff,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Wa
  });
}
function ii(t, n) {
  var e = Q(t, n);
  if (e.state > Wa) throw new Error("too late; already scheduled");
  return e;
}
function ot(t, n) {
  var e = Q(t, n);
  if (e.state > ee) throw new Error("too late; already running");
  return e;
}
function Q(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function hf(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Ka(o, 0, e.time);
  function o(u) {
    e.state = Qi, e.timer.restart(a, e.delay, e.time), e.delay <= u && a(u - e.delay);
  }
  function a(u) {
    var f, p, c, h;
    if (e.state !== Qi) return l();
    for (f in r)
      if (h = r[f], h.name === e.name) {
        if (h.state === ee) return Ji(a);
        h.state === to ? (h.state = re, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete r[f]) : +f < n && (h.state = re, h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete r[f]);
      }
    if (Ji(function() {
      e.state === ee && (e.state = to, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Mr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Mr) {
      for (e.state = ee, i = new Array(c = e.tween.length), f = 0, p = -1; f < c; ++f)
        (h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++p] = h);
      i.length = p + 1;
    }
  }
  function s(u) {
    for (var f = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = Ar, 1), p = -1, c = i.length; ++p < c; )
      i[p].call(t, f);
    e.state === Ar && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = re, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function pf(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Mr && r.state < Ar, r.state = re, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function df(t) {
  return this.each(function() {
    pf(this, t);
  });
}
function gf(t, n) {
  var e, r;
  return function() {
    var i = ot(this, t), o = i.tween;
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
function yf(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = ot(this, t), a = o.tween;
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
function _f(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Q(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? gf : yf)(e, t, n));
}
function oi(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = ot(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return Q(i, r).value[n];
  };
}
function Za(t, n) {
  var e;
  return (typeof n == "number" ? G : n instanceof Ct ? pe : (e = Ct(n)) ? (n = e, pe) : Ba)(t, n);
}
function mf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function vf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function wf(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function bf(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function xf(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Mf(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Af(t, n) {
  var e = ze(t), r = e === "transform" ? rf : Za;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Mf : xf)(e, r, oi(this, "attr." + t, n)) : n == null ? (e.local ? vf : mf)(e) : (e.local ? bf : wf)(e, r, n));
}
function $f(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Sf(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Tf(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Sf(t, o)), e;
  }
  return i._value = n, i;
}
function Ef(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && $f(t, o)), e;
  }
  return i._value = n, i;
}
function kf(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = ze(t);
  return this.tween(e, (r.local ? Tf : Ef)(r, n));
}
function Pf(t, n) {
  return function() {
    ii(this, t).delay = +n.apply(this, arguments);
  };
}
function Of(t, n) {
  return n = +n, function() {
    ii(this, t).delay = n;
  };
}
function zf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Pf : Of)(n, t)) : Q(this.node(), n).delay;
}
function Cf(t, n) {
  return function() {
    ot(this, t).duration = +n.apply(this, arguments);
  };
}
function If(t, n) {
  return n = +n, function() {
    ot(this, t).duration = n;
  };
}
function Rf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Cf : If)(n, t)) : Q(this.node(), n).duration;
}
function Nf(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    ot(this, t).ease = n;
  };
}
function jf(t) {
  var n = this._id;
  return arguments.length ? this.each(Nf(n, t)) : Q(this.node(), n).ease;
}
function Df(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    ot(this, t).ease = e;
  };
}
function Ff(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Df(this._id, t));
}
function Lf(t) {
  typeof t != "function" && (t = Oa(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new dt(r, this._parents, this._name, this._id);
}
function qf(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var l = n[s], u = e[s], f = l.length, p = a[s] = new Array(f), c, h = 0; h < f; ++h)
      (c = l[h] || u[h]) && (p[h] = c);
  for (; s < r; ++s)
    a[s] = n[s];
  return new dt(a, this._parents, this._name, this._id);
}
function Hf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Xf(t, n, e) {
  var r, i, o = Hf(n) ? ii : ot;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function Bf(t, n) {
  var e = this._id;
  return arguments.length < 2 ? Q(this.node(), e).on.on(t) : this.each(Xf(e, t, n));
}
function Uf(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Yf() {
  return this.on("end.remove", Uf(this._id));
}
function Gf(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Qr(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], l = s.length, u = o[a] = new Array(l), f, p, c = 0; c < l; ++c)
      (f = s[c]) && (p = t.call(f, f.__data__, c, s)) && ("__data__" in f && (p.__data__ = f.__data__), u[c] = p, Re(u[c], n, e, c, u, Q(f, e)));
  return new dt(o, this._parents, n, e);
}
function Vf(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Pa(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, f, p = 0; p < u; ++p)
      if (f = l[p]) {
        for (var c = t.call(f, f.__data__, p, l), h, d = Q(f, e), _ = 0, y = c.length; _ < y; ++_)
          (h = c[_]) && Re(h, n, e, _, c, d);
        o.push(c), a.push(f);
      }
  return new dt(o, a, n, e);
}
var Kf = In.prototype.constructor;
function Wf() {
  return new Kf(this._groups, this._parents);
}
function Zf(t, n) {
  var e, r, i;
  return function() {
    var o = Vt(this, t), a = (this.style.removeProperty(t), Vt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function Ja(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Jf(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Vt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Qf(t, n, e) {
  var r, i, o;
  return function() {
    var a = Vt(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), Vt(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s));
  };
}
function th(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var l = ot(this, t), u = l.on, f = l.value[o] == null ? s || (s = Ja(n)) : void 0;
    (u !== e || i !== f) && (r = (e = u).copy()).on(a, i = f), l.on = r;
  };
}
function nh(t, n, e) {
  var r = (t += "") == "transform" ? ef : Za;
  return n == null ? this.styleTween(t, Zf(t, r)).on("end.style." + t, Ja(t)) : typeof n == "function" ? this.styleTween(t, Qf(t, r, oi(this, "style." + t, n))).each(th(this._id, t)) : this.styleTween(t, Jf(t, r, n), e).on("end.style." + t, null);
}
function eh(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function rh(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && eh(t, a, e)), r;
  }
  return o._value = n, o;
}
function ih(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, rh(t, n, e ?? ""));
}
function oh(t) {
  return function() {
    this.textContent = t;
  };
}
function ah(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function sh(t) {
  return this.tween("text", typeof t == "function" ? ah(oi(this, "text", t)) : oh(t == null ? "" : t + ""));
}
function uh(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function lh(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && uh(i)), n;
  }
  return r._value = t, r;
}
function ch(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, lh(t));
}
function fh() {
  for (var t = this._name, n = this._id, e = Qa(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var f = Q(l, n);
        Re(l, t, e, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new dt(r, this._parents, t, e);
}
function hh() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var u = ot(this, r), f = u.on;
      f !== t && (n = (t = f).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && o();
  });
}
var ph = 0;
function dt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Qa() {
  return ++ph;
}
var st = In.prototype;
dt.prototype = {
  constructor: dt,
  select: Gf,
  selectAll: Vf,
  selectChild: st.selectChild,
  selectChildren: st.selectChildren,
  filter: Lf,
  merge: qf,
  selection: Wf,
  transition: fh,
  call: st.call,
  nodes: st.nodes,
  node: st.node,
  size: st.size,
  empty: st.empty,
  each: st.each,
  on: Bf,
  attr: Af,
  attrTween: kf,
  style: nh,
  styleTween: ih,
  text: sh,
  textTween: ch,
  remove: Yf,
  tween: _f,
  delay: zf,
  duration: Rf,
  ease: jf,
  easeVarying: Ff,
  end: hh,
  [Symbol.iterator]: st[Symbol.iterator]
};
function dh(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var gh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: dh
};
function yh(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function _h(t) {
  var n, e;
  t instanceof dt ? (n = t._id, t = t._name) : (n = Qa(), (e = gh).time = Ie(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Re(l, t, n, u, a, e || yh(l, n));
  return new dt(r, this._parents, t, n);
}
In.prototype.interrupt = df;
In.prototype.transition = _h;
function mh(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function ye(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Wt(t) {
  return t = ye(Math.abs(t)), t ? t[1] : NaN;
}
function vh(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), o.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function wh(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var bh = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function _e(t) {
  if (!(n = bh.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new ai({
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
_e.prototype = ai.prototype;
function ai(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
ai.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function xh(t) {
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
var ts;
function Mh(t, n) {
  var e = ye(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (ts = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + ye(t, Math.max(0, n + o - 1))[0];
}
function no(t, n) {
  var e = ye(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const eo = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: mh,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => no(t * 100, n),
  r: no,
  s: Mh,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function ro(t) {
  return t;
}
var io = Array.prototype.map, oo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ah(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? ro : vh(io.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? ro : wh(io.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(p) {
    p = _e(p);
    var c = p.fill, h = p.align, d = p.sign, _ = p.symbol, y = p.zero, b = p.width, g = p.comma, x = p.precision, m = p.trim, w = p.type;
    w === "n" ? (g = !0, w = "g") : eo[w] || (x === void 0 && (x = 12), m = !0, w = "g"), (y || c === "0" && h === "=") && (y = !0, c = "0", h = "=");
    var E = _ === "$" ? e : _ === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : "", k = _ === "$" ? r : /[%p]/.test(w) ? a : "", O = eo[w], X = /[defgprs%]/.test(w);
    x = x === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function B(v) {
      var z = E, A = k, C, Tt, F;
      if (w === "c")
        A = O(v) + A, v = "";
      else {
        v = +v;
        var U = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : O(Math.abs(v), x), m && (v = xh(v)), U && +v == 0 && d !== "+" && (U = !1), z = (U ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + z, A = (w === "s" ? oo[8 + ts / 3] : "") + A + (U && d === "(" ? ")" : ""), X) {
          for (C = -1, Tt = v.length; ++C < Tt; )
            if (F = v.charCodeAt(C), 48 > F || F > 57) {
              A = (F === 46 ? i + v.slice(C + 1) : v.slice(C)) + A, v = v.slice(0, C);
              break;
            }
        }
      }
      g && !y && (v = n(v, 1 / 0));
      var Y = z.length + v.length + A.length, P = Y < b ? new Array(b - Y + 1).join(c) : "";
      switch (g && y && (v = n(P + v, P.length ? b - A.length : 1 / 0), P = ""), h) {
        case "<":
          v = z + v + A + P;
          break;
        case "=":
          v = z + P + v + A;
          break;
        case "^":
          v = P.slice(0, Y = P.length >> 1) + z + v + A + P.slice(Y);
          break;
        default:
          v = P + z + v + A;
          break;
      }
      return o(v);
    }
    return B.toString = function() {
      return p + "";
    }, B;
  }
  function f(p, c) {
    var h = u((p = _e(p), p.type = "f", p)), d = Math.max(-8, Math.min(8, Math.floor(Wt(c) / 3))) * 3, _ = Math.pow(10, -d), y = oo[8 + d / 3];
    return function(b) {
      return h(_ * b) + y;
    };
  }
  return {
    format: u,
    formatPrefix: f
  };
}
var Xn, ns, es;
$h({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function $h(t) {
  return Xn = Ah(t), ns = Xn.format, es = Xn.formatPrefix, Xn;
}
function Sh(t) {
  return Math.max(0, -Wt(Math.abs(t)));
}
function Th(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Wt(n) / 3))) * 3 - Wt(Math.abs(t)));
}
function Eh(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Wt(n) - Wt(t)) + 1;
}
function rs(t, n) {
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
const ao = Symbol("implicit");
function is() {
  var t = new Di(), n = [], e = [], r = ao;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== ao) return r;
      t.set(o, a = n.push(o) - 1);
    }
    return e[a % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length) return n.slice();
    n = [], t = new Di();
    for (const a of o)
      t.has(a) || t.set(a, n.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), i) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return is(n, e).unknown(r);
  }, rs.apply(i, arguments), i;
}
function kh(t) {
  return function() {
    return t;
  };
}
function Ph(t) {
  return +t;
}
var so = [0, 1];
function Xt(t) {
  return t;
}
function $r(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : kh(isNaN(n) ? NaN : 0.5);
}
function Oh(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function zh(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = $r(i, r), o = e(a, o)) : (r = $r(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function Ch(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = $r(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var l = Lu(t, s, 1, r) - 1;
    return o[l](i[l](s));
  };
}
function Ih(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Rh() {
  var t = so, n = so, e = ri, r, i, o, a = Xt, s, l, u;
  function f() {
    var c = Math.min(t.length, n.length);
    return a !== Xt && (a = Oh(t[0], t[c - 1])), s = c > 2 ? Ch : zh, l = u = null, p;
  }
  function p(c) {
    return c == null || isNaN(c = +c) ? o : (l || (l = s(t.map(r), n, e)))(r(a(c)));
  }
  return p.invert = function(c) {
    return a(i((u || (u = s(n, t.map(r), G)))(c)));
  }, p.domain = function(c) {
    return arguments.length ? (t = Array.from(c, Ph), f()) : t.slice();
  }, p.range = function(c) {
    return arguments.length ? (n = Array.from(c), f()) : n.slice();
  }, p.rangeRound = function(c) {
    return n = Array.from(c), e = Qc, f();
  }, p.clamp = function(c) {
    return arguments.length ? (a = c ? !0 : Xt, f()) : a !== Xt;
  }, p.interpolate = function(c) {
    return arguments.length ? (e = c, f()) : e;
  }, p.unknown = function(c) {
    return arguments.length ? (o = c, p) : o;
  }, function(c, h) {
    return r = c, i = h, f();
  };
}
function Nh() {
  return Rh()(Xt, Xt);
}
function jh(t, n, e, r) {
  var i = Vu(t, n, e), o;
  switch (r = _e(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Th(i, a)) && (r.precision = o), es(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Eh(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Sh(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return ns(r);
}
function Dh(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Gu(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return jh(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], l, u, f = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); f-- > 0; ) {
      if (u = _r(a, s, e), u === l)
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
function si() {
  var t = Nh();
  return t.copy = function() {
    return Ih(t, si());
  }, rs.apply(t, arguments), Dh(t);
}
function gn(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
gn.prototype = {
  constructor: gn,
  scale: function(t) {
    return t === 1 ? this : new gn(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new gn(this.k, this.x + this.k * t, this.y + this.k * n);
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
gn.prototype;
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode('.d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff;font-size:var(--d3w-font-size, 16px);line-height:var(--d3w-line-height, 1.25);font-family:var(--d3w-font-family, system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif);font-weight:var(--d3w-font-weight, 400)}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_1279t_47{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:1em}._widget_1279t_47 ._title_1279t_59{font-size:1.25em;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_1279t_47 ._label_1279t_67{fill:var(--color-text);stroke:none}._widget_1279t_47 ._lit_1279t_72{fill:var(--color-lit)}._button_1279t_76>._symbol_1279t_76,._radio_1279t_77>._radiobutton_1279t_77>._symbol_1279t_76{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_1279t_47 ._symbol_1279t_76._selected_1279t_83,._toggle_1279t_84._selected_1279t_83,._widget_1279t_47 ._symbol_1279t_76._selected_1279t_83._lit_1279t_72{fill:var(--color-selected)}._widget_1279t_47 ._symbol_1279t_76._lit_1279t_72{fill:var(--color-lit-symbol)}._slider_1279t_93>._track_1279t_93,._toggle_1279t_84>._track_1279t_93{pointer-events:none}._slider_1279t_93>._track_overlay_1279t_98,._toggle_1279t_84>._track_overlay_1279t_98{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_1279t_93>._handle_1279t_106,._toggle_1279t_84>._handle_1279t_106{fill:var(--color-handle)}')), document.head.appendChild(t);
    }
  } catch (n) {
    console.error("vite-plugin-css-injected-by-js", n);
  }
})();
function ie(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Fh(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function os(t) {
  let n, e, r;
  t.length !== 2 ? (n = ie, e = (s, l) => ie(t(s), l), r = (s, l) => t(s) - l) : (n = t === ie || t === Fh ? t : Lh, e = t, r = t);
  function i(s, l, u = 0, f = s.length) {
    if (u < f) {
      if (n(l, l) !== 0) return f;
      do {
        const p = u + f >>> 1;
        e(s[p], l) < 0 ? u = p + 1 : f = p;
      } while (u < f);
    }
    return u;
  }
  function o(s, l, u = 0, f = s.length) {
    if (u < f) {
      if (n(l, l) !== 0) return f;
      do {
        const p = u + f >>> 1;
        e(s[p], l) <= 0 ? u = p + 1 : f = p;
      } while (u < f);
    }
    return u;
  }
  function a(s, l, u = 0, f = s.length) {
    const p = i(s, l, u, f - 1);
    return p > u && r(s[p - 1], l) > -r(s[p], l) ? p - 1 : p;
  }
  return { left: i, center: a, right: o };
}
function Lh() {
  return 0;
}
function qh(t) {
  return t === null ? NaN : +t;
}
const Hh = os(ie), Xh = Hh.right;
os(qh).center;
const Bh = Math.sqrt(50), Uh = Math.sqrt(10), Yh = Math.sqrt(2);
function me(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Bh ? 10 : o >= Uh ? 5 : o >= Yh ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? me(t, n, e * 2) : [s, l, u];
}
function Gh(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? me(n, t, e) : me(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, l = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) l[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) l[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * a;
  return l;
}
function Sr(t, n, e) {
  return n = +n, t = +t, e = +e, me(t, n, e)[2];
}
function Vh(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Sr(n, t, e) : Sr(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Bn(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function Kh(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var Wh = { value: () => {
} };
function ui() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new oe(e);
}
function oe(t) {
  this._ = t;
}
function Zh(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
oe.prototype = ui.prototype = {
  constructor: oe,
  on: function(t, n) {
    var e = this._, r = Zh(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Jh(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = uo(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = uo(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new oe(t);
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
function Jh(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function uo(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Wh, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Tr = "http://www.w3.org/1999/xhtml";
const lo = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Tr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ne(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), lo.hasOwnProperty(n) ? { space: lo[n], local: t } : t;
}
function Qh(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Tr && n.documentElement.namespaceURI === Tr ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function tp(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function as(t) {
  var n = Ne(t);
  return (n.local ? tp : Qh)(n);
}
function np() {
}
function li(t) {
  return t == null ? np : function() {
    return this.querySelector(t);
  };
}
function ep(t) {
  typeof t != "function" && (t = li(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = o[f]) && (u = t.call(l, l.__data__, f, o)) && ("__data__" in l && (u.__data__ = l.__data__), s[f] = u);
  return new q(r, this._parents);
}
function rp(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function ip() {
  return [];
}
function ss(t) {
  return t == null ? ip : function() {
    return this.querySelectorAll(t);
  };
}
function op(t) {
  return function() {
    return rp(t.apply(this, arguments));
  };
}
function ap(t) {
  typeof t == "function" ? t = op(t) : t = ss(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new q(r, i);
}
function us(t) {
  return function() {
    return this.matches(t);
  };
}
function ls(t) {
  return function(n) {
    return n.matches(t);
  };
}
var sp = Array.prototype.find;
function up(t) {
  return function() {
    return sp.call(this.children, t);
  };
}
function lp() {
  return this.firstElementChild;
}
function cp(t) {
  return this.select(t == null ? lp : up(typeof t == "function" ? t : ls(t)));
}
var fp = Array.prototype.filter;
function hp() {
  return Array.from(this.children);
}
function pp(t) {
  return function() {
    return fp.call(this.children, t);
  };
}
function dp(t) {
  return this.selectAll(t == null ? hp : pp(typeof t == "function" ? t : ls(t)));
}
function gp(t) {
  typeof t != "function" && (t = us(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new q(r, this._parents);
}
function cs(t) {
  return new Array(t.length);
}
function yp() {
  return new q(this._enter || this._groups.map(cs), this._parents);
}
function ve(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
ve.prototype = {
  constructor: ve,
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
function _p(t) {
  return function() {
    return t;
  };
}
function mp(t, n, e, r, i, o) {
  for (var a = 0, s, l = n.length, u = o.length; a < u; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new ve(t, o[a]);
  for (; a < l; ++a)
    (s = n[a]) && (i[a] = s);
}
function vp(t, n, e, r, i, o, a) {
  var s, l, u = /* @__PURE__ */ new Map(), f = n.length, p = o.length, c = new Array(f), h;
  for (s = 0; s < f; ++s)
    (l = n[s]) && (c[s] = h = a.call(l, l.__data__, s, n) + "", u.has(h) ? i[s] = l : u.set(h, l));
  for (s = 0; s < p; ++s)
    h = a.call(t, o[s], s, o) + "", (l = u.get(h)) ? (r[s] = l, l.__data__ = o[s], u.delete(h)) : e[s] = new ve(t, o[s]);
  for (s = 0; s < f; ++s)
    (l = n[s]) && u.get(c[s]) === l && (i[s] = l);
}
function wp(t) {
  return t.__data__;
}
function bp(t, n) {
  if (!arguments.length) return Array.from(this, wp);
  var e = n ? vp : mp, r = this._parents, i = this._groups;
  typeof t != "function" && (t = _p(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), u = 0; u < o; ++u) {
    var f = r[u], p = i[u], c = p.length, h = xp(t.call(f, f && f.__data__, u, r)), d = h.length, _ = s[u] = new Array(d), y = a[u] = new Array(d), b = l[u] = new Array(c);
    e(f, p, _, y, b, h, n);
    for (var g = 0, x = 0, m, w; g < d; ++g)
      if (m = _[g]) {
        for (g >= x && (x = g + 1); !(w = y[x]) && ++x < d; ) ;
        m._next = w || null;
      }
  }
  return a = new q(a, r), a._enter = s, a._exit = l, a;
}
function xp(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Mp() {
  return new q(this._exit || this._groups.map(cs), this._parents);
}
function Ap(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function $p(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), l = 0; l < a; ++l)
    for (var u = e[l], f = r[l], p = u.length, c = s[l] = new Array(p), h, d = 0; d < p; ++d)
      (h = u[d] || f[d]) && (c[d] = h);
  for (; l < i; ++l)
    s[l] = e[l];
  return new q(s, this._parents);
}
function Sp() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Tp(t) {
  t || (t = Ep);
  function n(p, c) {
    return p && c ? t(p.__data__, c.__data__) : !p - !c;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, l = i[o] = new Array(s), u, f = 0; f < s; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(n);
  }
  return new q(i, this._parents).order();
}
function Ep(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function kp() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Pp() {
  return Array.from(this);
}
function Op() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function zp() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Cp() {
  return !this.node();
}
function Ip(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Rp(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Np(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function jp(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Dp(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Fp(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Lp(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function qp(t, n) {
  var e = Ne(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Np : Rp : typeof n == "function" ? e.local ? Lp : Fp : e.local ? Dp : jp)(e, n));
}
function fs(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Hp(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Xp(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Bp(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Up(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Hp : typeof n == "function" ? Bp : Xp)(t, n, e ?? "")) : Zt(this.node(), t);
}
function Zt(t, n) {
  return t.style.getPropertyValue(n) || fs(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Yp(t) {
  return function() {
    delete this[t];
  };
}
function Gp(t, n) {
  return function() {
    this[t] = n;
  };
}
function Vp(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Kp(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Yp : typeof n == "function" ? Vp : Gp)(t, n)) : this.node()[t];
}
function hs(t) {
  return t.trim().split(/^|\s+/);
}
function ci(t) {
  return t.classList || new ps(t);
}
function ps(t) {
  this._node = t, this._names = hs(t.getAttribute("class") || "");
}
ps.prototype = {
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
function ds(t, n) {
  for (var e = ci(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function gs(t, n) {
  for (var e = ci(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Wp(t) {
  return function() {
    ds(this, t);
  };
}
function Zp(t) {
  return function() {
    gs(this, t);
  };
}
function Jp(t, n) {
  return function() {
    (n.apply(this, arguments) ? ds : gs)(this, t);
  };
}
function Qp(t, n) {
  var e = hs(t + "");
  if (arguments.length < 2) {
    for (var r = ci(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Jp : n ? Wp : Zp)(e, n));
}
function td() {
  this.textContent = "";
}
function nd(t) {
  return function() {
    this.textContent = t;
  };
}
function ed(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function rd(t) {
  return arguments.length ? this.each(t == null ? td : (typeof t == "function" ? ed : nd)(t)) : this.node().textContent;
}
function id() {
  this.innerHTML = "";
}
function od(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ad(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function sd(t) {
  return arguments.length ? this.each(t == null ? id : (typeof t == "function" ? ad : od)(t)) : this.node().innerHTML;
}
function ud() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ld() {
  return this.each(ud);
}
function cd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function fd() {
  return this.each(cd);
}
function hd(t) {
  var n = typeof t == "function" ? t : as(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function pd() {
  return null;
}
function dd(t, n) {
  var e = typeof t == "function" ? t : as(t), r = n == null ? pd : typeof n == "function" ? n : li(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function gd() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function yd() {
  return this.each(gd);
}
function _d() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function md() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function vd(t) {
  return this.select(t ? md : _d);
}
function wd(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function bd(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function xd(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Md(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Ad(t, n, e) {
  return function() {
    var r = this.__on, i, o = bd(n);
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
function $d(t, n, e) {
  var r = xd(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, f; l < u; ++l)
        for (i = 0, f = s[l]; i < o; ++i)
          if ((a = r[i]).type === f.type && a.name === f.name)
            return f.value;
    }
    return;
  }
  for (s = n ? Ad : Md, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function ys(t, n, e) {
  var r = fs(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Sd(t, n) {
  return function() {
    return ys(this, t, n);
  };
}
function Td(t, n) {
  return function() {
    return ys(this, t, n.apply(this, arguments));
  };
}
function Ed(t, n) {
  return this.each((typeof n == "function" ? Td : Sd)(t, n));
}
function* kd() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var _s = [null];
function q(t, n) {
  this._groups = t, this._parents = n;
}
function Nn() {
  return new q([[document.documentElement]], _s);
}
function Pd() {
  return this;
}
q.prototype = Nn.prototype = {
  constructor: q,
  select: ep,
  selectAll: ap,
  selectChild: cp,
  selectChildren: dp,
  filter: gp,
  data: bp,
  enter: yp,
  exit: Mp,
  join: Ap,
  merge: $p,
  selection: Pd,
  order: Sp,
  sort: Tp,
  call: kp,
  nodes: Pp,
  node: Op,
  size: zp,
  empty: Cp,
  each: Ip,
  attr: qp,
  style: Up,
  property: Kp,
  classed: Qp,
  text: rd,
  html: sd,
  raise: ld,
  lower: fd,
  append: hd,
  insert: dd,
  remove: yd,
  clone: vd,
  datum: wd,
  on: $d,
  dispatch: Ed,
  [Symbol.iterator]: kd
};
function R(t) {
  return typeof t == "string" ? new q([[document.querySelector(t)]], [document.documentElement]) : new q([[t]], _s);
}
function Od(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function co(t, n) {
  if (t = Od(t), n === void 0 && (n = t.currentTarget), n) {
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
const zd = { passive: !1 }, Sn = { capture: !0, passive: !1 };
function ir(t) {
  t.stopImmediatePropagation();
}
function Yt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Cd(t) {
  var n = t.document.documentElement, e = R(t).on("dragstart.drag", Yt, Sn);
  "onselectstart" in n ? e.on("selectstart.drag", Yt, Sn) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Id(t, n) {
  var e = t.document.documentElement, r = R(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Yt, Sn), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Un = (t) => () => t;
function Er(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: l,
  dy: u,
  dispatch: f
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
    _: { value: f }
  });
}
Er.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Rd(t) {
  return !t.ctrlKey && !t.button;
}
function Nd() {
  return this.parentNode;
}
function jd(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Dd() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Fd() {
  var t = Rd, n = Nd, e = jd, r = Dd, i = {}, o = ui("start", "drag", "end"), a = 0, s, l, u, f, p = 0;
  function c(m) {
    m.on("mousedown.drag", h).filter(r).on("touchstart.drag", y).on("touchmove.drag", b, zd).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(m, w) {
    if (!(f || !t.call(this, m, w))) {
      var E = x(this, n.call(this, m, w), m, w, "mouse");
      E && (R(m.view).on("mousemove.drag", d, Sn).on("mouseup.drag", _, Sn), Cd(m.view), ir(m), u = !1, s = m.clientX, l = m.clientY, E("start", m));
    }
  }
  function d(m) {
    if (Yt(m), !u) {
      var w = m.clientX - s, E = m.clientY - l;
      u = w * w + E * E > p;
    }
    i.mouse("drag", m);
  }
  function _(m) {
    R(m.view).on("mousemove.drag mouseup.drag", null), Id(m.view, u), Yt(m), i.mouse("end", m);
  }
  function y(m, w) {
    if (t.call(this, m, w)) {
      var E = m.changedTouches, k = n.call(this, m, w), O = E.length, X, B;
      for (X = 0; X < O; ++X)
        (B = x(this, k, m, w, E[X].identifier, E[X])) && (ir(m), B("start", m, E[X]));
    }
  }
  function b(m) {
    var w = m.changedTouches, E = w.length, k, O;
    for (k = 0; k < E; ++k)
      (O = i[w[k].identifier]) && (Yt(m), O("drag", m, w[k]));
  }
  function g(m) {
    var w = m.changedTouches, E = w.length, k, O;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), k = 0; k < E; ++k)
      (O = i[w[k].identifier]) && (ir(m), O("end", m, w[k]));
  }
  function x(m, w, E, k, O, X) {
    var B = o.copy(), v = co(X || E, w), z, A, C;
    if ((C = e.call(m, new Er("beforestart", {
      sourceEvent: E,
      target: c,
      identifier: O,
      active: a,
      x: v[0],
      y: v[1],
      dx: 0,
      dy: 0,
      dispatch: B
    }), k)) != null)
      return z = C.x - v[0] || 0, A = C.y - v[1] || 0, function Tt(F, U, Y) {
        var P = v, nr;
        switch (F) {
          case "start":
            i[O] = Tt, nr = a++;
            break;
          case "end":
            delete i[O], --a;
          // falls through
          case "drag":
            v = co(Y || U, w), nr = a;
            break;
        }
        B.call(
          F,
          m,
          new Er(F, {
            sourceEvent: U,
            subject: C,
            target: c,
            identifier: O,
            active: nr,
            x: v[0] + z,
            y: v[1] + A,
            dx: v[0] - P[0],
            dy: v[1] - P[1],
            dispatch: B
          }),
          k
        );
      };
  }
  return c.filter = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : Un(!!m), c) : t;
  }, c.container = function(m) {
    return arguments.length ? (n = typeof m == "function" ? m : Un(m), c) : n;
  }, c.subject = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : Un(m), c) : e;
  }, c.touchable = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : Un(!!m), c) : r;
  }, c.on = function() {
    var m = o.on.apply(o, arguments);
    return m === o ? c : m;
  }, c.clickDistance = function(m) {
    return arguments.length ? (p = (m = +m) * m, c) : Math.sqrt(p);
  }, c;
}
function fi(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function ms(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function jn() {
}
var Tn = 0.7, we = 1 / Tn, Gt = "\\s*([+-]?\\d+)\\s*", En = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ld = /^#([0-9a-f]{3,8})$/, qd = new RegExp(`^rgb\\(${Gt},${Gt},${Gt}\\)$`), Hd = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`), Xd = new RegExp(`^rgba\\(${Gt},${Gt},${Gt},${En}\\)$`), Bd = new RegExp(`^rgba\\(${rt},${rt},${rt},${En}\\)$`), Ud = new RegExp(`^hsl\\(${En},${rt},${rt}\\)$`), Yd = new RegExp(`^hsla\\(${En},${rt},${rt},${En}\\)$`), fo = {
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
fi(jn, Rt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ho,
  // Deprecated! Use color.formatHex.
  formatHex: ho,
  formatHex8: Gd,
  formatHsl: Vd,
  formatRgb: po,
  toString: po
});
function ho() {
  return this.rgb().formatHex();
}
function Gd() {
  return this.rgb().formatHex8();
}
function Vd() {
  return vs(this).formatHsl();
}
function po() {
  return this.rgb().formatRgb();
}
function Rt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Ld.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? go(n) : e === 3 ? new D(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Yn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Yn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = qd.exec(t)) ? new D(n[1], n[2], n[3], 1) : (n = Hd.exec(t)) ? new D(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Xd.exec(t)) ? Yn(n[1], n[2], n[3], n[4]) : (n = Bd.exec(t)) ? Yn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Ud.exec(t)) ? mo(n[1], n[2] / 100, n[3] / 100, 1) : (n = Yd.exec(t)) ? mo(n[1], n[2] / 100, n[3] / 100, n[4]) : fo.hasOwnProperty(t) ? go(fo[t]) : t === "transparent" ? new D(NaN, NaN, NaN, 0) : null;
}
function go(t) {
  return new D(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Yn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new D(t, n, e, r);
}
function Kd(t) {
  return t instanceof jn || (t = Rt(t)), t ? (t = t.rgb(), new D(t.r, t.g, t.b, t.opacity)) : new D();
}
function kr(t, n, e, r) {
  return arguments.length === 1 ? Kd(t) : new D(t, n, e, r ?? 1);
}
function D(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
fi(D, kr, ms(jn, {
  brighter(t) {
    return t = t == null ? we : Math.pow(we, t), new D(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Tn : Math.pow(Tn, t), new D(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new D(zt(this.r), zt(this.g), zt(this.b), be(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: yo,
  // Deprecated! Use color.formatHex.
  formatHex: yo,
  formatHex8: Wd,
  formatRgb: _o,
  toString: _o
}));
function yo() {
  return `#${Pt(this.r)}${Pt(this.g)}${Pt(this.b)}`;
}
function Wd() {
  return `#${Pt(this.r)}${Pt(this.g)}${Pt(this.b)}${Pt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function _o() {
  const t = be(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${zt(this.r)}, ${zt(this.g)}, ${zt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function be(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function zt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Pt(t) {
  return t = zt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function mo(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Z(t, n, e, r);
}
function vs(t) {
  if (t instanceof Z) return new Z(t.h, t.s, t.l, t.opacity);
  if (t instanceof jn || (t = Rt(t)), !t) return new Z();
  if (t instanceof Z) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new Z(a, s, l, t.opacity);
}
function Zd(t, n, e, r) {
  return arguments.length === 1 ? vs(t) : new Z(t, n, e, r ?? 1);
}
function Z(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
fi(Z, Zd, ms(jn, {
  brighter(t) {
    return t = t == null ? we : Math.pow(we, t), new Z(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Tn : Math.pow(Tn, t), new Z(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new D(
      or(t >= 240 ? t - 240 : t + 120, i, r),
      or(t, i, r),
      or(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Z(vo(this.h), Gn(this.s), Gn(this.l), be(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = be(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${vo(this.h)}, ${Gn(this.s) * 100}%, ${Gn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function vo(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Gn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function or(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const hi = (t) => () => t;
function Jd(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Qd(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function t0(t) {
  return (t = +t) == 1 ? ws : function(n, e) {
    return e - n ? Qd(n, e, t) : hi(isNaN(n) ? e : n);
  };
}
function ws(t, n) {
  var e = n - t;
  return e ? Jd(t, e) : hi(isNaN(t) ? n : t);
}
const xe = function t(n) {
  var e = t0(n);
  function r(i, o) {
    var a = e((i = kr(i)).r, (o = kr(o)).r), s = e(i.g, o.g), l = e(i.b, o.b), u = ws(i.opacity, o.opacity);
    return function(f) {
      return i.r = a(f), i.g = s(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function n0(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function e0(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function r0(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = pi(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function i0(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function V(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function o0(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = pi(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var Pr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ar = new RegExp(Pr.source, "g");
function a0(t) {
  return function() {
    return t;
  };
}
function s0(t) {
  return function(n) {
    return t(n) + "";
  };
}
function bs(t, n) {
  var e = Pr.lastIndex = ar.lastIndex = 0, r, i, o, a = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = Pr.exec(t)) && (i = ar.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: V(r, i) })), e = ar.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? s0(l[0].x) : a0(n) : (n = l.length, function(u) {
    for (var f = 0, p; f < n; ++f) s[(p = l[f]).i] = p.x(u);
    return s.join("");
  });
}
function pi(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? hi(n) : (e === "number" ? V : e === "string" ? (r = Rt(n)) ? (n = r, xe) : bs : n instanceof Rt ? xe : n instanceof Date ? i0 : e0(n) ? n0 : Array.isArray(n) ? r0 : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? o0 : V)(t, n);
}
function u0(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var wo = 180 / Math.PI, xs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ms(t, n, e, r, i, o) {
  var a, s, l;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * wo,
    skewX: Math.atan(l) * wo,
    scaleX: a,
    scaleY: s
  };
}
var Vn;
function l0(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? xs : Ms(n.a, n.b, n.c, n.d, n.e, n.f);
}
function c0(t) {
  return t == null || (Vn || (Vn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Vn.setAttribute("transform", t), !(t = Vn.transform.baseVal.consolidate())) ? xs : (t = t.matrix, Ms(t.a, t.b, t.c, t.d, t.e, t.f));
}
function As(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, f, p, c, h, d) {
    if (u !== p || f !== c) {
      var _ = h.push("translate(", null, n, null, e);
      d.push({ i: _ - 4, x: V(u, p) }, { i: _ - 2, x: V(f, c) });
    } else (p || c) && h.push("translate(" + p + n + c + e);
  }
  function a(u, f, p, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: p.push(i(p) + "rotate(", null, r) - 2, x: V(u, f) })) : f && p.push(i(p) + "rotate(" + f + r);
  }
  function s(u, f, p, c) {
    u !== f ? c.push({ i: p.push(i(p) + "skewX(", null, r) - 2, x: V(u, f) }) : f && p.push(i(p) + "skewX(" + f + r);
  }
  function l(u, f, p, c, h, d) {
    if (u !== p || f !== c) {
      var _ = h.push(i(h) + "scale(", null, ",", null, ")");
      d.push({ i: _ - 4, x: V(u, p) }, { i: _ - 2, x: V(f, c) });
    } else (p !== 1 || c !== 1) && h.push(i(h) + "scale(" + p + "," + c + ")");
  }
  return function(u, f) {
    var p = [], c = [];
    return u = t(u), f = t(f), o(u.translateX, u.translateY, f.translateX, f.translateY, p, c), a(u.rotate, f.rotate, p, c), s(u.skewX, f.skewX, p, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, p, c), u = f = null, function(h) {
      for (var d = -1, _ = c.length, y; ++d < _; ) p[(y = c[d]).i] = y.x(h);
      return p.join("");
    };
  };
}
var f0 = As(l0, "px, ", "px)", "deg)"), h0 = As(c0, ", ", ")", ")"), Jt = 0, yn = 0, cn = 0, $s = 1e3, Me, _n, Ae = 0, Nt = 0, je = 0, kn = typeof performance == "object" && performance.now ? performance : Date, Ss = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function di() {
  return Nt || (Ss(p0), Nt = kn.now() + je);
}
function p0() {
  Nt = 0;
}
function $e() {
  this._call = this._time = this._next = null;
}
$e.prototype = Ts.prototype = {
  constructor: $e,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? di() : +e) + (n == null ? 0 : +n), !this._next && _n !== this && (_n ? _n._next = this : Me = this, _n = this), this._call = t, this._time = e, Or();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Or());
  }
};
function Ts(t, n, e) {
  var r = new $e();
  return r.restart(t, n, e), r;
}
function d0() {
  di(), ++Jt;
  for (var t = Me, n; t; )
    (n = Nt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Jt;
}
function bo() {
  Nt = (Ae = kn.now()) + je, Jt = yn = 0;
  try {
    d0();
  } finally {
    Jt = 0, y0(), Nt = 0;
  }
}
function g0() {
  var t = kn.now(), n = t - Ae;
  n > $s && (je -= n, Ae = t);
}
function y0() {
  for (var t, n = Me, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Me = e);
  _n = t, Or(r);
}
function Or(t) {
  if (!Jt) {
    yn && (yn = clearTimeout(yn));
    var n = t - Nt;
    n > 24 ? (t < 1 / 0 && (yn = setTimeout(bo, t - kn.now() - je)), cn && (cn = clearInterval(cn))) : (cn || (Ae = kn.now(), cn = setInterval(g0, $s)), Jt = 1, Ss(bo));
  }
}
function xo(t, n, e) {
  var r = new $e();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var _0 = ui("start", "end", "cancel", "interrupt"), m0 = [], Es = 0, Mo = 1, zr = 2, ae = 3, Ao = 4, Cr = 5, se = 6;
function De(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  v0(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: _0,
    tween: m0,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Es
  });
}
function gi(t, n) {
  var e = tt(t, n);
  if (e.state > Es) throw new Error("too late; already scheduled");
  return e;
}
function at(t, n) {
  var e = tt(t, n);
  if (e.state > ae) throw new Error("too late; already running");
  return e;
}
function tt(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function v0(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Ts(o, 0, e.time);
  function o(u) {
    e.state = Mo, e.timer.restart(a, e.delay, e.time), e.delay <= u && a(u - e.delay);
  }
  function a(u) {
    var f, p, c, h;
    if (e.state !== Mo) return l();
    for (f in r)
      if (h = r[f], h.name === e.name) {
        if (h.state === ae) return xo(a);
        h.state === Ao ? (h.state = se, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete r[f]) : +f < n && (h.state = se, h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete r[f]);
      }
    if (xo(function() {
      e.state === ae && (e.state = Ao, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = zr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === zr) {
      for (e.state = ae, i = new Array(c = e.tween.length), f = 0, p = -1; f < c; ++f)
        (h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++p] = h);
      i.length = p + 1;
    }
  }
  function s(u) {
    for (var f = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = Cr, 1), p = -1, c = i.length; ++p < c; )
      i[p].call(t, f);
    e.state === Cr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = se, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function w0(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > zr && r.state < Cr, r.state = se, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function b0(t) {
  return this.each(function() {
    w0(this, t);
  });
}
function x0(t, n) {
  var e, r;
  return function() {
    var i = at(this, t), o = i.tween;
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
function M0(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = at(this, t), a = o.tween;
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
function A0(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = tt(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? x0 : M0)(e, t, n));
}
function yi(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = at(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return tt(i, r).value[n];
  };
}
function ks(t, n) {
  var e;
  return (typeof n == "number" ? V : n instanceof Rt ? xe : (e = Rt(n)) ? (n = e, xe) : bs)(t, n);
}
function $0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function S0(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function T0(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function E0(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function k0(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function P0(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function O0(t, n) {
  var e = Ne(t), r = e === "transform" ? h0 : ks;
  return this.attrTween(t, typeof n == "function" ? (e.local ? P0 : k0)(e, r, yi(this, "attr." + t, n)) : n == null ? (e.local ? S0 : $0)(e) : (e.local ? E0 : T0)(e, r, n));
}
function z0(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function C0(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function I0(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && C0(t, o)), e;
  }
  return i._value = n, i;
}
function R0(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && z0(t, o)), e;
  }
  return i._value = n, i;
}
function N0(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Ne(t);
  return this.tween(e, (r.local ? I0 : R0)(r, n));
}
function j0(t, n) {
  return function() {
    gi(this, t).delay = +n.apply(this, arguments);
  };
}
function D0(t, n) {
  return n = +n, function() {
    gi(this, t).delay = n;
  };
}
function F0(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? j0 : D0)(n, t)) : tt(this.node(), n).delay;
}
function L0(t, n) {
  return function() {
    at(this, t).duration = +n.apply(this, arguments);
  };
}
function q0(t, n) {
  return n = +n, function() {
    at(this, t).duration = n;
  };
}
function H0(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? L0 : q0)(n, t)) : tt(this.node(), n).duration;
}
function X0(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    at(this, t).ease = n;
  };
}
function B0(t) {
  var n = this._id;
  return arguments.length ? this.each(X0(n, t)) : tt(this.node(), n).ease;
}
function U0(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    at(this, t).ease = e;
  };
}
function Y0(t) {
  if (typeof t != "function") throw new Error();
  return this.each(U0(this._id, t));
}
function G0(t) {
  typeof t != "function" && (t = us(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new gt(r, this._parents, this._name, this._id);
}
function V0(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var l = n[s], u = e[s], f = l.length, p = a[s] = new Array(f), c, h = 0; h < f; ++h)
      (c = l[h] || u[h]) && (p[h] = c);
  for (; s < r; ++s)
    a[s] = n[s];
  return new gt(a, this._parents, this._name, this._id);
}
function K0(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function W0(t, n, e) {
  var r, i, o = K0(n) ? gi : at;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function Z0(t, n) {
  var e = this._id;
  return arguments.length < 2 ? tt(this.node(), e).on.on(t) : this.each(W0(e, t, n));
}
function J0(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Q0() {
  return this.on("end.remove", J0(this._id));
}
function tg(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = li(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], l = s.length, u = o[a] = new Array(l), f, p, c = 0; c < l; ++c)
      (f = s[c]) && (p = t.call(f, f.__data__, c, s)) && ("__data__" in f && (p.__data__ = f.__data__), u[c] = p, De(u[c], n, e, c, u, tt(f, e)));
  return new gt(o, this._parents, n, e);
}
function ng(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ss(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, f, p = 0; p < u; ++p)
      if (f = l[p]) {
        for (var c = t.call(f, f.__data__, p, l), h, d = tt(f, e), _ = 0, y = c.length; _ < y; ++_)
          (h = c[_]) && De(h, n, e, _, c, d);
        o.push(c), a.push(f);
      }
  return new gt(o, a, n, e);
}
var eg = Nn.prototype.constructor;
function rg() {
  return new eg(this._groups, this._parents);
}
function ig(t, n) {
  var e, r, i;
  return function() {
    var o = Zt(this, t), a = (this.style.removeProperty(t), Zt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function Ps(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function og(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Zt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function ag(t, n, e) {
  var r, i, o;
  return function() {
    var a = Zt(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), Zt(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s));
  };
}
function sg(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var l = at(this, t), u = l.on, f = l.value[o] == null ? s || (s = Ps(n)) : void 0;
    (u !== e || i !== f) && (r = (e = u).copy()).on(a, i = f), l.on = r;
  };
}
function ug(t, n, e) {
  var r = (t += "") == "transform" ? f0 : ks;
  return n == null ? this.styleTween(t, ig(t, r)).on("end.style." + t, Ps(t)) : typeof n == "function" ? this.styleTween(t, ag(t, r, yi(this, "style." + t, n))).each(sg(this._id, t)) : this.styleTween(t, og(t, r, n), e).on("end.style." + t, null);
}
function lg(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function cg(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && lg(t, a, e)), r;
  }
  return o._value = n, o;
}
function fg(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, cg(t, n, e ?? ""));
}
function hg(t) {
  return function() {
    this.textContent = t;
  };
}
function pg(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function dg(t) {
  return this.tween("text", typeof t == "function" ? pg(yi(this, "text", t)) : hg(t == null ? "" : t + ""));
}
function gg(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function yg(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && gg(i)), n;
  }
  return r._value = t, r;
}
function _g(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, yg(t));
}
function mg() {
  for (var t = this._name, n = this._id, e = Os(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var f = tt(l, n);
        De(l, t, e, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new gt(r, this._parents, t, e);
}
function vg() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var u = at(this, r), f = u.on;
      f !== t && (n = (t = f).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && o();
  });
}
var wg = 0;
function gt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Os() {
  return ++wg;
}
var ut = Nn.prototype;
gt.prototype = {
  constructor: gt,
  select: tg,
  selectAll: ng,
  selectChild: ut.selectChild,
  selectChildren: ut.selectChildren,
  filter: G0,
  merge: V0,
  selection: rg,
  transition: mg,
  call: ut.call,
  nodes: ut.nodes,
  node: ut.node,
  size: ut.size,
  empty: ut.empty,
  each: ut.each,
  on: Z0,
  attr: O0,
  attrTween: N0,
  style: ug,
  styleTween: fg,
  text: dg,
  textTween: _g,
  remove: Q0,
  tween: A0,
  delay: F0,
  duration: H0,
  ease: B0,
  easeVarying: Y0,
  end: vg,
  [Symbol.iterator]: ut[Symbol.iterator]
};
function bg(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var xg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: bg
};
function Mg(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ag(t) {
  var n, e;
  t instanceof gt ? (n = t._id, t = t._name) : (n = Os(), (e = xg).time = di(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && De(l, t, n, u, a, e || Mg(l, n));
  return new gt(r, this._parents, t, n);
}
Nn.prototype.interrupt = b0;
Nn.prototype.transition = Ag;
const Ir = Math.PI, Rr = 2 * Ir, Et = 1e-6, $g = Rr - Et;
function zs(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Sg(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return zs;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Cs {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? zs : Sg(n);
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
    let a = this._x1, s = this._y1, l = r - n, u = i - e, f = a - n, p = s - e, c = f * f + p * p;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (c > Et) if (!(Math.abs(p * l - u * f) > Et) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let h = r - a, d = i - s, _ = l * l + u * u, y = h * h + d * d, b = Math.sqrt(_), g = Math.sqrt(c), x = o * Math.tan((Ir - Math.acos((_ + c - y) / (2 * b * g))) / 2), m = x / g, w = x / b;
      Math.abs(m - 1) > Et && this._append`L${n + m * f},${e + m * p}`, this._append`A${o},${o},0,0,${+(p * h > f * d)},${this._x1 = n + w * l},${this._y1 = e + w * u}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, f = e + l, p = 1 ^ a, c = a ? i - o : o - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > Et || Math.abs(this._y1 - f) > Et) && this._append`L${u},${f}`, r && (c < 0 && (c = c % Rr + Rr), c > $g ? this._append`A${r},${r},0,1,${p},${n - s},${e - l}A${r},${r},0,1,${p},${this._x1 = u},${this._y1 = f}` : c > Et && this._append`A${r},${r},0,${+(c >= Ir)},${p},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function nt() {
  return new Cs();
}
nt.prototype = Cs.prototype;
function Tg(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Se(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Qt(t) {
  return t = Se(Math.abs(t)), t ? t[1] : NaN;
}
function Eg(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), o.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function kg(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Pg = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Te(t) {
  if (!(n = Pg.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new _i({
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
Te.prototype = _i.prototype;
function _i(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
_i.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Og(t) {
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
var Is;
function zg(t, n) {
  var e = Se(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (Is = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Se(t, Math.max(0, n + o - 1))[0];
}
function $o(t, n) {
  var e = Se(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const So = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Tg,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => $o(t * 100, n),
  r: $o,
  s: zg,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function To(t) {
  return t;
}
var Eo = Array.prototype.map, ko = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Cg(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? To : Eg(Eo.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? To : kg(Eo.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(p) {
    p = Te(p);
    var c = p.fill, h = p.align, d = p.sign, _ = p.symbol, y = p.zero, b = p.width, g = p.comma, x = p.precision, m = p.trim, w = p.type;
    w === "n" ? (g = !0, w = "g") : So[w] || (x === void 0 && (x = 12), m = !0, w = "g"), (y || c === "0" && h === "=") && (y = !0, c = "0", h = "=");
    var E = _ === "$" ? e : _ === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : "", k = _ === "$" ? r : /[%p]/.test(w) ? a : "", O = So[w], X = /[defgprs%]/.test(w);
    x = x === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function B(v) {
      var z = E, A = k, C, Tt, F;
      if (w === "c")
        A = O(v) + A, v = "";
      else {
        v = +v;
        var U = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : O(Math.abs(v), x), m && (v = Og(v)), U && +v == 0 && d !== "+" && (U = !1), z = (U ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + z, A = (w === "s" ? ko[8 + Is / 3] : "") + A + (U && d === "(" ? ")" : ""), X) {
          for (C = -1, Tt = v.length; ++C < Tt; )
            if (F = v.charCodeAt(C), 48 > F || F > 57) {
              A = (F === 46 ? i + v.slice(C + 1) : v.slice(C)) + A, v = v.slice(0, C);
              break;
            }
        }
      }
      g && !y && (v = n(v, 1 / 0));
      var Y = z.length + v.length + A.length, P = Y < b ? new Array(b - Y + 1).join(c) : "";
      switch (g && y && (v = n(P + v, P.length ? b - A.length : 1 / 0), P = ""), h) {
        case "<":
          v = z + v + A + P;
          break;
        case "=":
          v = z + P + v + A;
          break;
        case "^":
          v = P.slice(0, Y = P.length >> 1) + z + v + A + P.slice(Y);
          break;
        default:
          v = P + z + v + A;
          break;
      }
      return o(v);
    }
    return B.toString = function() {
      return p + "";
    }, B;
  }
  function f(p, c) {
    var h = u((p = Te(p), p.type = "f", p)), d = Math.max(-8, Math.min(8, Math.floor(Qt(c) / 3))) * 3, _ = Math.pow(10, -d), y = ko[8 + d / 3];
    return function(b) {
      return h(_ * b) + y;
    };
  }
  return {
    format: u,
    formatPrefix: f
  };
}
var Kn, Fe, Rs;
Ig({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ig(t) {
  return Kn = Cg(t), Fe = Kn.format, Rs = Kn.formatPrefix, Kn;
}
function Rg(t) {
  return Math.max(0, -Qt(Math.abs(t)));
}
function Ng(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Qt(n) / 3))) * 3 - Qt(Math.abs(t)));
}
function jg(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Qt(n) - Qt(t)) + 1;
}
function Dg(t, n) {
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
function Fg(t) {
  return function() {
    return t;
  };
}
function Lg(t) {
  return +t;
}
var Po = [0, 1];
function Bt(t) {
  return t;
}
function Nr(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Fg(isNaN(n) ? NaN : 0.5);
}
function qg(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Hg(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Nr(i, r), o = e(a, o)) : (r = Nr(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function Xg(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Nr(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var l = Xh(t, s, 1, r) - 1;
    return o[l](i[l](s));
  };
}
function Bg(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Ug() {
  var t = Po, n = Po, e = pi, r, i, o, a = Bt, s, l, u;
  function f() {
    var c = Math.min(t.length, n.length);
    return a !== Bt && (a = qg(t[0], t[c - 1])), s = c > 2 ? Xg : Hg, l = u = null, p;
  }
  function p(c) {
    return c == null || isNaN(c = +c) ? o : (l || (l = s(t.map(r), n, e)))(r(a(c)));
  }
  return p.invert = function(c) {
    return a(i((u || (u = s(n, t.map(r), V)))(c)));
  }, p.domain = function(c) {
    return arguments.length ? (t = Array.from(c, Lg), f()) : t.slice();
  }, p.range = function(c) {
    return arguments.length ? (n = Array.from(c), f()) : n.slice();
  }, p.rangeRound = function(c) {
    return n = Array.from(c), e = u0, f();
  }, p.clamp = function(c) {
    return arguments.length ? (a = c ? !0 : Bt, f()) : a !== Bt;
  }, p.interpolate = function(c) {
    return arguments.length ? (e = c, f()) : e;
  }, p.unknown = function(c) {
    return arguments.length ? (o = c, p) : o;
  }, function(c, h) {
    return r = c, i = h, f();
  };
}
function Yg() {
  return Ug()(Bt, Bt);
}
function Gg(t, n, e, r) {
  var i = Vh(t, n, e), o;
  switch (r = Te(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Ng(i, a)) && (r.precision = o), Rs(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = jg(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Rg(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Fe(r);
}
function Vg(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Gh(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Gg(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], l, u, f = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); f-- > 0; ) {
      if (u = Sr(a, s, e), u === l)
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
function tn() {
  var t = Yg();
  return t.copy = function() {
    return Bg(t, tn());
  }, Dg.apply(t, arguments), Vg(t);
}
function mn(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
mn.prototype = {
  constructor: mn,
  scale: function(t) {
    return t === 1 ? this : new mn(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new mn(this.k, this.x + this.k * t, this.y + this.k * n);
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
mn.prototype;
var Ns = typeof global == "object" && global && global.Object === Object && global, Kg = typeof self == "object" && self && self.Object === Object && self, _t = Ns || Kg || Function("return this")(), it = _t.Symbol, js = Object.prototype, Wg = js.hasOwnProperty, Zg = js.toString, fn = it ? it.toStringTag : void 0;
function Jg(t) {
  var n = Wg.call(t, fn), e = t[fn];
  try {
    t[fn] = void 0;
    var r = !0;
  } catch {
  }
  var i = Zg.call(t);
  return r && (n ? t[fn] = e : delete t[fn]), i;
}
var Qg = Object.prototype, ty = Qg.toString;
function ny(t) {
  return ty.call(t);
}
var ey = "[object Null]", ry = "[object Undefined]", Oo = it ? it.toStringTag : void 0;
function rn(t) {
  return t == null ? t === void 0 ? ry : ey : Oo && Oo in Object(t) ? Jg(t) : ny(t);
}
function nn(t) {
  return t != null && typeof t == "object";
}
var iy = "[object Symbol]";
function Le(t) {
  return typeof t == "symbol" || nn(t) && rn(t) == iy;
}
function Ds(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var J = Array.isArray, zo = it ? it.prototype : void 0, Co = zo ? zo.toString : void 0;
function Fs(t) {
  if (typeof t == "string")
    return t;
  if (J(t))
    return Ds(t, Fs) + "";
  if (Le(t))
    return Co ? Co.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var oy = /\s/;
function ay(t) {
  for (var n = t.length; n-- && oy.test(t.charAt(n)); )
    ;
  return n;
}
var sy = /^\s+/;
function uy(t) {
  return t && t.slice(0, ay(t) + 1).replace(sy, "");
}
function en(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var Io = NaN, ly = /^[-+]0x[0-9a-f]+$/i, cy = /^0b[01]+$/i, fy = /^0o[0-7]+$/i, hy = parseInt;
function py(t) {
  if (typeof t == "number")
    return t;
  if (Le(t))
    return Io;
  if (en(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = en(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = uy(t);
  var e = cy.test(t);
  return e || fy.test(t) ? hy(t.slice(2), e ? 2 : 8) : ly.test(t) ? Io : +t;
}
var dy = 1 / 0, gy = 17976931348623157e292;
function sr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = py(t), t === dy || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * gy;
  }
  return t === t ? t : 0;
}
function yy(t) {
  return t;
}
var _y = "[object AsyncFunction]", my = "[object Function]", vy = "[object GeneratorFunction]", wy = "[object Proxy]";
function Ls(t) {
  if (!en(t))
    return !1;
  var n = rn(t);
  return n == my || n == vy || n == _y || n == wy;
}
var ur = _t["__core-js_shared__"], Ro = function() {
  var t = /[^.]+$/.exec(ur && ur.keys && ur.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function by(t) {
  return !!Ro && Ro in t;
}
var xy = Function.prototype, My = xy.toString;
function Lt(t) {
  if (t != null) {
    try {
      return My.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Ay = /[\\^$.*+?()[\]{}|]/g, $y = /^\[object .+?Constructor\]$/, Sy = Function.prototype, Ty = Object.prototype, Ey = Sy.toString, ky = Ty.hasOwnProperty, Py = RegExp(
  "^" + Ey.call(ky).replace(Ay, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Oy(t) {
  if (!en(t) || by(t))
    return !1;
  var n = Ls(t) ? Py : $y;
  return n.test(Lt(t));
}
function zy(t, n) {
  return t == null ? void 0 : t[n];
}
function on(t, n) {
  var e = zy(t, n);
  return Oy(e) ? e : void 0;
}
var jr = on(_t, "WeakMap"), Cy = 9007199254740991, Iy = /^(?:0|[1-9]\d*)$/;
function mi(t, n) {
  var e = typeof t;
  return n = n ?? Cy, !!n && (e == "number" || e != "symbol" && Iy.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function vi(t, n) {
  return t === n || t !== t && n !== n;
}
var Ry = 9007199254740991;
function wi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ry;
}
function qe(t) {
  return t != null && wi(t.length) && !Ls(t);
}
function Ny(t, n, e) {
  if (!en(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? qe(e) && mi(n, e.length) : r == "string" && n in e) ? vi(e[n], t) : !1;
}
var jy = Object.prototype;
function Dy(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || jy;
  return t === e;
}
function Fy(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var Ly = "[object Arguments]";
function No(t) {
  return nn(t) && rn(t) == Ly;
}
var qs = Object.prototype, qy = qs.hasOwnProperty, Hy = qs.propertyIsEnumerable, bi = No(/* @__PURE__ */ function() {
  return arguments;
}()) ? No : function(t) {
  return nn(t) && qy.call(t, "callee") && !Hy.call(t, "callee");
};
function Xy() {
  return !1;
}
var Hs = typeof exports == "object" && exports && !exports.nodeType && exports, jo = Hs && typeof module == "object" && module && !module.nodeType && module, By = jo && jo.exports === Hs, Do = By ? _t.Buffer : void 0, Uy = Do ? Do.isBuffer : void 0, Dr = Uy || Xy, Yy = "[object Arguments]", Gy = "[object Array]", Vy = "[object Boolean]", Ky = "[object Date]", Wy = "[object Error]", Zy = "[object Function]", Jy = "[object Map]", Qy = "[object Number]", t_ = "[object Object]", n_ = "[object RegExp]", e_ = "[object Set]", r_ = "[object String]", i_ = "[object WeakMap]", o_ = "[object ArrayBuffer]", a_ = "[object DataView]", s_ = "[object Float32Array]", u_ = "[object Float64Array]", l_ = "[object Int8Array]", c_ = "[object Int16Array]", f_ = "[object Int32Array]", h_ = "[object Uint8Array]", p_ = "[object Uint8ClampedArray]", d_ = "[object Uint16Array]", g_ = "[object Uint32Array]", S = {};
S[s_] = S[u_] = S[l_] = S[c_] = S[f_] = S[h_] = S[p_] = S[d_] = S[g_] = !0;
S[Yy] = S[Gy] = S[o_] = S[Vy] = S[a_] = S[Ky] = S[Wy] = S[Zy] = S[Jy] = S[Qy] = S[t_] = S[n_] = S[e_] = S[r_] = S[i_] = !1;
function y_(t) {
  return nn(t) && wi(t.length) && !!S[rn(t)];
}
function __(t) {
  return function(n) {
    return t(n);
  };
}
var Xs = typeof exports == "object" && exports && !exports.nodeType && exports, vn = Xs && typeof module == "object" && module && !module.nodeType && module, m_ = vn && vn.exports === Xs, lr = m_ && Ns.process, Fo = function() {
  try {
    var t = vn && vn.require && vn.require("util").types;
    return t || lr && lr.binding && lr.binding("util");
  } catch {
  }
}(), Lo = Fo && Fo.isTypedArray, Bs = Lo ? __(Lo) : y_, v_ = Object.prototype, w_ = v_.hasOwnProperty;
function b_(t, n) {
  var e = J(t), r = !e && bi(t), i = !e && !r && Dr(t), o = !e && !r && !i && Bs(t), a = e || r || i || o, s = a ? Fy(t.length, String) : [], l = s.length;
  for (var u in t)
    w_.call(t, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    mi(u, l))) && s.push(u);
  return s;
}
function x_(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var M_ = x_(Object.keys, Object), A_ = Object.prototype, $_ = A_.hasOwnProperty;
function S_(t) {
  if (!Dy(t))
    return M_(t);
  var n = [];
  for (var e in Object(t))
    $_.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function xi(t) {
  return qe(t) ? b_(t) : S_(t);
}
var T_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, E_ = /^\w*$/;
function Mi(t, n) {
  if (J(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Le(t) ? !0 : E_.test(t) || !T_.test(t) || n != null && t in Object(n);
}
var Pn = on(Object, "create");
function k_() {
  this.__data__ = Pn ? Pn(null) : {}, this.size = 0;
}
function P_(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var O_ = "__lodash_hash_undefined__", z_ = Object.prototype, C_ = z_.hasOwnProperty;
function I_(t) {
  var n = this.__data__;
  if (Pn) {
    var e = n[t];
    return e === O_ ? void 0 : e;
  }
  return C_.call(n, t) ? n[t] : void 0;
}
var R_ = Object.prototype, N_ = R_.hasOwnProperty;
function j_(t) {
  var n = this.__data__;
  return Pn ? n[t] !== void 0 : N_.call(n, t);
}
var D_ = "__lodash_hash_undefined__";
function F_(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Pn && n === void 0 ? D_ : n, this;
}
function jt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
jt.prototype.clear = k_;
jt.prototype.delete = P_;
jt.prototype.get = I_;
jt.prototype.has = j_;
jt.prototype.set = F_;
function L_() {
  this.__data__ = [], this.size = 0;
}
function He(t, n) {
  for (var e = t.length; e--; )
    if (vi(t[e][0], n))
      return e;
  return -1;
}
var q_ = Array.prototype, H_ = q_.splice;
function X_(t) {
  var n = this.__data__, e = He(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : H_.call(n, e, 1), --this.size, !0;
}
function B_(t) {
  var n = this.__data__, e = He(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function U_(t) {
  return He(this.__data__, t) > -1;
}
function Y_(t, n) {
  var e = this.__data__, r = He(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function mt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = L_;
mt.prototype.delete = X_;
mt.prototype.get = B_;
mt.prototype.has = U_;
mt.prototype.set = Y_;
var On = on(_t, "Map");
function G_() {
  this.size = 0, this.__data__ = {
    hash: new jt(),
    map: new (On || mt)(),
    string: new jt()
  };
}
function V_(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Xe(t, n) {
  var e = t.__data__;
  return V_(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function K_(t) {
  var n = Xe(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function W_(t) {
  return Xe(this, t).get(t);
}
function Z_(t) {
  return Xe(this, t).has(t);
}
function J_(t, n) {
  var e = Xe(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function vt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
vt.prototype.clear = G_;
vt.prototype.delete = K_;
vt.prototype.get = W_;
vt.prototype.has = Z_;
vt.prototype.set = J_;
var Q_ = "Expected a function";
function Ai(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Q_);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Ai.Cache || vt)(), e;
}
Ai.Cache = vt;
var tm = 500;
function nm(t) {
  var n = Ai(t, function(r) {
    return e.size === tm && e.clear(), r;
  }), e = n.cache;
  return n;
}
var em = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, rm = /\\(\\)?/g, im = nm(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(em, function(e, r, i, o) {
    n.push(i ? o.replace(rm, "$1") : r || e);
  }), n;
});
function om(t) {
  return t == null ? "" : Fs(t);
}
function Us(t, n) {
  return J(t) ? t : Mi(t, n) ? [t] : im(om(t));
}
function Be(t) {
  if (typeof t == "string" || Le(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Ys(t, n) {
  n = Us(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Be(n[e++])];
  return e && e == r ? t : void 0;
}
function am(t, n, e) {
  var r = t == null ? void 0 : Ys(t, n);
  return r === void 0 ? e : r;
}
function Gs(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var qo = it ? it.isConcatSpreadable : void 0;
function sm(t) {
  return J(t) || bi(t) || !!(qo && t && t[qo]);
}
function um(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = sm), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? Gs(i, s) : i[i.length] = s;
  }
  return i;
}
function lm(t) {
  var n = t == null ? 0 : t.length;
  return n ? um(t) : [];
}
function cm() {
  this.__data__ = new mt(), this.size = 0;
}
function fm(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function hm(t) {
  return this.__data__.get(t);
}
function pm(t) {
  return this.__data__.has(t);
}
var dm = 200;
function gm(t, n) {
  var e = this.__data__;
  if (e instanceof mt) {
    var r = e.__data__;
    if (!On || r.length < dm - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new vt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function ht(t) {
  var n = this.__data__ = new mt(t);
  this.size = n.size;
}
ht.prototype.clear = cm;
ht.prototype.delete = fm;
ht.prototype.get = hm;
ht.prototype.has = pm;
ht.prototype.set = gm;
function ym(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function _m() {
  return [];
}
var mm = Object.prototype, vm = mm.propertyIsEnumerable, Ho = Object.getOwnPropertySymbols, wm = Ho ? function(t) {
  return t == null ? [] : (t = Object(t), ym(Ho(t), function(n) {
    return vm.call(t, n);
  }));
} : _m;
function bm(t, n, e) {
  var r = n(t);
  return J(t) ? r : Gs(r, e(t));
}
function Xo(t) {
  return bm(t, xi, wm);
}
var Fr = on(_t, "DataView"), Lr = on(_t, "Promise"), qr = on(_t, "Set"), Bo = "[object Map]", xm = "[object Object]", Uo = "[object Promise]", Yo = "[object Set]", Go = "[object WeakMap]", Vo = "[object DataView]", Mm = Lt(Fr), Am = Lt(On), $m = Lt(Lr), Sm = Lt(qr), Tm = Lt(jr), Mt = rn;
(Fr && Mt(new Fr(new ArrayBuffer(1))) != Vo || On && Mt(new On()) != Bo || Lr && Mt(Lr.resolve()) != Uo || qr && Mt(new qr()) != Yo || jr && Mt(new jr()) != Go) && (Mt = function(t) {
  var n = rn(t), e = n == xm ? t.constructor : void 0, r = e ? Lt(e) : "";
  if (r)
    switch (r) {
      case Mm:
        return Vo;
      case Am:
        return Bo;
      case $m:
        return Uo;
      case Sm:
        return Yo;
      case Tm:
        return Go;
    }
  return n;
});
var Ko = _t.Uint8Array, Em = "__lodash_hash_undefined__";
function km(t) {
  return this.__data__.set(t, Em), this;
}
function Pm(t) {
  return this.__data__.has(t);
}
function Ee(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new vt(); ++n < e; )
    this.add(t[n]);
}
Ee.prototype.add = Ee.prototype.push = km;
Ee.prototype.has = Pm;
function Om(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function zm(t, n) {
  return t.has(n);
}
var Cm = 1, Im = 2;
function Vs(t, n, e, r, i, o) {
  var a = e & Cm, s = t.length, l = n.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(t), f = o.get(n);
  if (u && f)
    return u == n && f == t;
  var p = -1, c = !0, h = e & Im ? new Ee() : void 0;
  for (o.set(t, n), o.set(n, t); ++p < s; ) {
    var d = t[p], _ = n[p];
    if (r)
      var y = a ? r(_, d, p, n, t, o) : r(d, _, p, t, n, o);
    if (y !== void 0) {
      if (y)
        continue;
      c = !1;
      break;
    }
    if (h) {
      if (!Om(n, function(b, g) {
        if (!zm(h, g) && (d === b || i(d, b, e, r, o)))
          return h.push(g);
      })) {
        c = !1;
        break;
      }
    } else if (!(d === _ || i(d, _, e, r, o))) {
      c = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), c;
}
function Rm(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Nm(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var jm = 1, Dm = 2, Fm = "[object Boolean]", Lm = "[object Date]", qm = "[object Error]", Hm = "[object Map]", Xm = "[object Number]", Bm = "[object RegExp]", Um = "[object Set]", Ym = "[object String]", Gm = "[object Symbol]", Vm = "[object ArrayBuffer]", Km = "[object DataView]", Wo = it ? it.prototype : void 0, cr = Wo ? Wo.valueOf : void 0;
function Wm(t, n, e, r, i, o, a) {
  switch (e) {
    case Km:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Vm:
      return !(t.byteLength != n.byteLength || !o(new Ko(t), new Ko(n)));
    case Fm:
    case Lm:
    case Xm:
      return vi(+t, +n);
    case qm:
      return t.name == n.name && t.message == n.message;
    case Bm:
    case Ym:
      return t == n + "";
    case Hm:
      var s = Rm;
    case Um:
      var l = r & jm;
      if (s || (s = Nm), t.size != n.size && !l)
        return !1;
      var u = a.get(t);
      if (u)
        return u == n;
      r |= Dm, a.set(t, n);
      var f = Vs(s(t), s(n), r, i, o, a);
      return a.delete(t), f;
    case Gm:
      if (cr)
        return cr.call(t) == cr.call(n);
  }
  return !1;
}
var Zm = 1, Jm = Object.prototype, Qm = Jm.hasOwnProperty;
function t1(t, n, e, r, i, o) {
  var a = e & Zm, s = Xo(t), l = s.length, u = Xo(n), f = u.length;
  if (l != f && !a)
    return !1;
  for (var p = l; p--; ) {
    var c = s[p];
    if (!(a ? c in n : Qm.call(n, c)))
      return !1;
  }
  var h = o.get(t), d = o.get(n);
  if (h && d)
    return h == n && d == t;
  var _ = !0;
  o.set(t, n), o.set(n, t);
  for (var y = a; ++p < l; ) {
    c = s[p];
    var b = t[c], g = n[c];
    if (r)
      var x = a ? r(g, b, c, n, t, o) : r(b, g, c, t, n, o);
    if (!(x === void 0 ? b === g || i(b, g, e, r, o) : x)) {
      _ = !1;
      break;
    }
    y || (y = c == "constructor");
  }
  if (_ && !y) {
    var m = t.constructor, w = n.constructor;
    m != w && "constructor" in t && "constructor" in n && !(typeof m == "function" && m instanceof m && typeof w == "function" && w instanceof w) && (_ = !1);
  }
  return o.delete(t), o.delete(n), _;
}
var n1 = 1, Zo = "[object Arguments]", Jo = "[object Array]", Wn = "[object Object]", e1 = Object.prototype, Qo = e1.hasOwnProperty;
function r1(t, n, e, r, i, o) {
  var a = J(t), s = J(n), l = a ? Jo : Mt(t), u = s ? Jo : Mt(n);
  l = l == Zo ? Wn : l, u = u == Zo ? Wn : u;
  var f = l == Wn, p = u == Wn, c = l == u;
  if (c && Dr(t)) {
    if (!Dr(n))
      return !1;
    a = !0, f = !1;
  }
  if (c && !f)
    return o || (o = new ht()), a || Bs(t) ? Vs(t, n, e, r, i, o) : Wm(t, n, l, e, r, i, o);
  if (!(e & n1)) {
    var h = f && Qo.call(t, "__wrapped__"), d = p && Qo.call(n, "__wrapped__");
    if (h || d) {
      var _ = h ? t.value() : t, y = d ? n.value() : n;
      return o || (o = new ht()), i(_, y, e, r, o);
    }
  }
  return c ? (o || (o = new ht()), t1(t, n, e, r, i, o)) : !1;
}
function $i(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !nn(t) && !nn(n) ? t !== t && n !== n : r1(t, n, e, r, $i, i);
}
var i1 = 1, o1 = 2;
function a1(t, n, e, r) {
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
      var f = new ht(), p;
      if (!(p === void 0 ? $i(u, l, i1 | o1, r, f) : p))
        return !1;
    }
  }
  return !0;
}
function Ks(t) {
  return t === t && !en(t);
}
function s1(t) {
  for (var n = xi(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Ks(i)];
  }
  return n;
}
function Ws(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function u1(t) {
  var n = s1(t);
  return n.length == 1 && n[0][2] ? Ws(n[0][0], n[0][1]) : function(e) {
    return e === t || a1(e, t, n);
  };
}
function l1(t, n) {
  return t != null && n in Object(t);
}
function c1(t, n, e) {
  n = Us(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = Be(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && wi(i) && mi(a, i) && (J(t) || bi(t)));
}
function f1(t, n) {
  return t != null && c1(t, n, l1);
}
var h1 = 1, p1 = 2;
function d1(t, n) {
  return Mi(t) && Ks(n) ? Ws(Be(t), n) : function(e) {
    var r = am(e, t);
    return r === void 0 && r === n ? f1(e, t) : $i(n, r, h1 | p1);
  };
}
function g1(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function y1(t) {
  return function(n) {
    return Ys(n, t);
  };
}
function _1(t) {
  return Mi(t) ? g1(Be(t)) : y1(t);
}
function m1(t) {
  return typeof t == "function" ? t : t == null ? yy : typeof t == "object" ? J(t) ? d1(t[0], t[1]) : u1(t) : _1(t);
}
function v1(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var l = a[++i];
      if (e(o[l], l, o) === !1)
        break;
    }
    return n;
  };
}
var w1 = v1();
function b1(t, n) {
  return t && w1(t, n, xi);
}
function x1(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!qe(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var M1 = x1(b1);
function A1(t, n) {
  var e = -1, r = qe(t) ? Array(t.length) : [];
  return M1(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function ta(t, n) {
  var e = J(t) ? Ds : A1;
  return e(t, m1(n));
}
var $1 = Math.ceil, S1 = Math.max;
function T1(t, n, e, r) {
  for (var i = -1, o = S1($1((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function E1(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && Ny(n, e, r) && (e = r = void 0), n = sr(n), e === void 0 ? (e = n, n = 0) : e = sr(e), r = r === void 0 ? n < e ? 1 : -1 : sr(r), T1(n, e, r);
  };
}
var k1 = E1();
const P1 = (t, n, e = 12, r = 12) => {
  const i = tn().domain([0, e]).range([0, t]), o = tn().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return k1((e + 1) * (r + 1)).map(function(a) {
        return { m: a % (e + 1), n: Math.floor(a / (e + 1)), x: i(a % (e + 1)), y: o(Math.floor(a / (e + 1))) };
      });
    },
    position: function(a, s) {
      typeof a == "number" && (a = [a]), typeof s == "number" && (s = [s]);
      const l = lm(ta(s, function(u) {
        return ta(
          a,
          function(f) {
            return { x: i(f), y: o(u) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, O1 = "_widget_1279t_47", z1 = "_label_1279t_67", C1 = "_lit_1279t_72", I1 = "_button_1279t_76", R1 = "_symbol_1279t_76", N1 = "_radio_1279t_77", j1 = "_radiobutton_1279t_77", D1 = "_selected_1279t_83", F1 = "_toggle_1279t_84", L1 = "_slider_1279t_93", q1 = "_track_1279t_93", H1 = "_track_overlay_1279t_98", X1 = "_handle_1279t_106", M = {
  widget: O1,
  label: z1,
  lit: C1,
  button: I1,
  symbol: R1,
  radio: N1,
  radiobutton: j1,
  selected: D1,
  toggle: F1,
  slider: L1,
  track: q1,
  track_overlay: H1,
  handle: X1
}, Zs = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = t.length;
  let e = "";
  for (let r = 0; r < 10; ++r)
    e += t[Math.floor(Math.random() * n)];
  return e;
}, Si = (t, n, e) => {
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
}, B1 = (t = 1) => {
  const n = nt();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, U1 = (t = 1) => {
  const n = nt(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Y1 = (t = 1) => {
  const n = nt();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, G1 = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = nt();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, V1 = (t = 1) => {
  const n = nt(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, l = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, K1 = (t = 1) => {
  const n = nt(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, W1 = (t = 1) => {
  const n = nt(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var l = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, Z1 = (t = 1) => {
  var n = nt(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, J1 = (t = 1) => {
  const n = nt(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, Hr = (t) => {
  switch (t) {
    case "play":
      return B1;
    case "forward":
      return U1;
    case "back":
      return Y1;
    case "pause":
      return G1;
    case "reload":
      return V1;
    case "capture":
      return K1;
    case "rewind":
      return W1;
    case "stop":
      return Z1;
    case "push":
      return J1;
  }
}, Ti = () => {
  const t = "button";
  var n = Zs(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", l = null, u = function(c) {
  }, f = ["play"], p = 0;
  return {
    type: t,
    id: function(c) {
      return typeof c > "u" ? n : (n = c, this);
    },
    size: function(c) {
      return typeof c > "u" ? e : (e = c, this);
    },
    symbolsize: function(c) {
      return typeof c > "u" ? r : (r = c, this);
    },
    shape: function(c) {
      return typeof c > "u" ? i : (i = c, this);
    },
    position: function(c) {
      return typeof c > "u" ? o : (o = c, this);
    },
    x: function(c) {
      return typeof c > "u" ? o.x : (o.x = c, this);
    },
    y: function(c) {
      return typeof c > "u" ? o.y : (o.y = c, this);
    },
    label: function(c) {
      return typeof c > "u" ? a : (a = c, this);
    },
    labelposition: function(c) {
      return typeof c > "u" ? s : (s = c, this);
    },
    fontsize: function(c) {
      return typeof c > "u" ? l : (l = c, this);
    },
    update: function(c) {
      if (typeof c == "function")
        return u = c, this;
      u(c);
    },
    actions: function(c) {
      return typeof c > "u" ? f : (f = c, this);
    },
    value: function(c) {
      return typeof c > "u" ? p : (p = c, this);
    },
    click: function() {
      p = (p + 1) % f.length, u(), R(this.parentNode).select("." + M.symbol).attr("d", Hr(f[p])(r * e));
    },
    press: function(c) {
      p = (p + 1) % f.length, u(), c.select("#button_" + n).select("." + M.symbol).attr("d", Hr(f[p])(r * e));
    }
  };
}, Q1 = () => {
  const t = "slider", n = Fe(".3f");
  var e = Zs(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, l = "top-left", u = 4, f = null, p = function(g) {
  }, c = function(g) {
  }, h = [0, 1], d = 0, _ = null, y = tn().domain(h).range([0, r]).clamp(!0);
  const b = function(g, x, m = h) {
    const w = g.select("#slider_" + e);
    y.domain(m), d = x, w.selectAll("." + M.handle).transition().attr("cx", y(x)), a && w.select("." + M.label).text(_ + " = " + n(d)), p(), c();
  };
  return {
    type: t,
    scale: y,
    id: function(g) {
      return typeof g > "u" ? e : (e = g, this);
    },
    label: function(g) {
      return typeof g > "u" ? _ : (_ = g, this);
    },
    size: function(g) {
      return typeof g > "u" ? r : (r = g, this);
    },
    girth: function(g) {
      return typeof g > "u" ? i : (i = g, this);
    },
    knob: function(g) {
      return typeof g > "u" ? o : (o = g, this);
    },
    show: function(g) {
      return typeof g > "u" ? a : (a = g, this);
    },
    position: function(g) {
      return typeof g > "u" ? s : (s = g, this);
    },
    x: function(g) {
      return typeof g > "u" ? s.x : (s.x = g, this);
    },
    y: function(g) {
      return typeof g > "u" ? s.y : (s.y = g, this);
    },
    labelposition: function(g) {
      return typeof g > "u" ? l : (l = g, this);
    },
    labelpadding: function(g) {
      return typeof g > "u" ? u : (u = g, this);
    },
    fontsize: function(g) {
      return typeof g > "u" ? f : (f = g, this);
    },
    update: function(g) {
      if (typeof g == "function")
        return p = g, this;
      p(g);
    },
    update_end: function(g) {
      if (typeof g == "function")
        return c = g, this;
      c(g);
    },
    range: function(g) {
      return typeof g > "u" ? h : (h = g, this);
    },
    value: function(g) {
      return typeof g > "u" ? d : (d = g, this);
    },
    reset: b,
    click: b
  };
}, tv = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = R(o).attr("class", M.widget + " " + M.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", M.background).on("click", t.click).on("mouseover", function() {
    R(this).classed(M.lit, !0), R(this.parentNode).select("." + M.symbol).classed(M.lit, !0);
  }).on("mouseout", function() {
    R(this).classed(M.lit, !1), R(this.parentNode).select("." + M.symbol).classed(M.lit, !1);
  }), a.append("path").attr("d", Hr(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", M.symbol), r) {
    const l = Si(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", M.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return o;
}, Js = (t, n) => {
  const e = nt();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, nv = (t, n) => {
  const e = Fe(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = R(l).attr("class", M.widget + " " + M.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2, f = (b) => {
    const g = b && b.sourceEvent ? b.sourceEvent : b;
    return g ? g.clientX != null ? g.clientX : g.touches && g.touches.length ? g.touches[0].clientX : g.changedTouches && g.changedTouches.length ? g.changedTouches[0].clientX : null : null;
  }, p = (b, g) => {
    const x = f(b);
    if (x == null) return null;
    const m = g.getBoundingClientRect(), w = x - m.left, E = g.width && g.width.baseVal ? g.width.baseVal.value : m.width, k = m.width ? E / m.width : 1;
    return w * k - u;
  };
  s.append("path").attr("d", Js(t.size(), t.girth())).attr("class", M.track), s.append("circle").attr("class", M.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", M.track_overlay).on("click", function(b) {
    const g = p(b, this);
    if (g == null) return;
    const x = Math.max(0, Math.min(t.size(), g));
    t.value(a.invert(x)), t.update(), t.update_end(), s.selectAll("." + M.handle).attr("cx", a(t.value())), t.show() && s.select("." + M.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Fd().on("drag", function(b) {
      const g = p(b, this);
      if (g == null) return;
      const x = Math.max(0, Math.min(t.size(), g));
      t.value(a.invert(x)), t.update(), s.selectAll("." + M.handle).attr("cx", a(t.value())), t.show() && s.select("." + M.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(b) {
      t.update_end();
    })
  );
  var c, h, d, _ = "bottom";
  const y = (typeof t.labelpadding == "function" ? t.labelpadding() : 4) || 0;
  return t.fontsize ? h = t.labelposition().match(/bottom/i) != null ? Bn([t.girth() / 2, t.knob()]) + t.fontsize() / 2 + y : -Bn([t.girth() / 2, t.knob()]) - t.fontsize() / 2 - y : h = t.labelposition().match(/bottom/i) != null ? Bn([t.girth() / 2, t.knob()]) + 7 + y : -Bn([t.girth() / 2, t.knob()]) - 7 - y, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, d = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", _ = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", M.label).style("text-anchor", d).style("alignment-baseline", _).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + h + ")"), l;
}, ev = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = R(a).attr("class", M.widget + " " + M.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(M.selected, t.value() == 1);
  if (s.append("path").attr("d", Js(2 * t.size(), 2 * t.size())).attr("class", M.track), s.append("circle").attr("class", M.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", M.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = Si(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", M.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return a;
}, rv = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = Kh(a), l = tn().domain([0, a - 1]).range([0, t.size()]), u = tn().domain([0, a - 1]).range([0, t.size()]), f = document.createElementNS("http://www.w3.org/2000/svg", "g"), p = R(f).attr("class", M.widget + " " + M.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + M.radiobutton).data(s).enter().append("g").attr("class", M.radiobutton).attr("id", (_) => "b" + _).attr("transform", (_) => t.orientation() == "vertical" ? "translate(0," + u(_) + ")" : "translate(" + l(_) + ",0)");
  var c, h;
  t.shape() == "rect" ? (c = p.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), h = p.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (c = p.append("circle").attr("r", i / 2), h = p.append("circle").attr("r", o / 2)), c.attr("class", M.background).on("mouseover", function() {
    R(this).classed(M.lit, !0), R(this.parentNode).select("." + M.symbol).classed(M.lit, !0);
  }).on("mouseout", function() {
    R(this).classed(M.lit, !1), R(this.parentNode).select("." + M.symbol).classed(M.lit, !1);
  }), h.attr("class", M.symbol), h.filter((_) => _ == t.value()).classed(M.selected, !0), p.on("click", t.click);
  const d = Si(t.buttonsize(), t.buttonsize(), r);
  return p.append("text").attr("class", M.label).text(function(_, y) {
    return t.choices()[y];
  }).attr("alignment-baseline", d.valign).attr("transform", "translate(" + d.x + "," + d.y + ")").style("font-size", t.fontsize()).attr("text-anchor", d.anchor), f;
}, na = (t, n) => {
  switch (t.type) {
    case "button":
      return tv(t);
    case "slider":
      return nv(t);
    case "radio":
      return rv(t);
    case "toggle":
      return ev(t);
  }
}, iv = "_displayPanel_17y2l_1", ov = "_controlPanel_17y2l_8", av = "_legend_17y2l_25", Xr = {
  displayPanel: iv,
  controlPanel: ov,
  legend: av
}, sv = (t, n) => {
  const e = P1(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  );
  console.log(t);
  const r = Pc("#" + t).classed(t + " " + n.container_class, !0), i = t + "_display", o = t + "_controls", a = r.append("div").attr("id", i).attr("class", Xr.displayPanel).classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), s = r.append("div").attr("id", o).attr("class", "d3-widgets " + Xr.controlPanel).classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && s.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && a.style("border", n.display_border), n.debug && s.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (l) => "translate(" + l.x + "," + l.y + ")").style("fill", "black"), { display: a, controls: s, grid: e };
};
var Qs = typeof global == "object" && global && global.Object === Object && global, uv = typeof self == "object" && self && self.Object === Object && self, wt = Qs || uv || Function("return this")(), St = wt.Symbol, tu = Object.prototype, lv = tu.hasOwnProperty, cv = tu.toString, hn = St ? St.toStringTag : void 0;
function fv(t) {
  var n = lv.call(t, hn), e = t[hn];
  try {
    t[hn] = void 0;
    var r = !0;
  } catch {
  }
  var i = cv.call(t);
  return r && (n ? t[hn] = e : delete t[hn]), i;
}
var hv = Object.prototype, pv = hv.toString;
function dv(t) {
  return pv.call(t);
}
var gv = "[object Null]", yv = "[object Undefined]", ea = St ? St.toStringTag : void 0;
function an(t) {
  return t == null ? t === void 0 ? yv : gv : ea && ea in Object(t) ? fv(t) : dv(t);
}
function Dt(t) {
  return t != null && typeof t == "object";
}
var _v = "[object Symbol]";
function Ue(t) {
  return typeof t == "symbol" || Dt(t) && an(t) == _v;
}
function sn(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var H = Array.isArray, ra = St ? St.prototype : void 0, ia = ra ? ra.toString : void 0;
function nu(t) {
  if (typeof t == "string")
    return t;
  if (H(t))
    return sn(t, nu) + "";
  if (Ue(t))
    return ia ? ia.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var mv = /\s/;
function vv(t) {
  for (var n = t.length; n-- && mv.test(t.charAt(n)); )
    ;
  return n;
}
var wv = /^\s+/;
function bv(t) {
  return t && t.slice(0, vv(t) + 1).replace(wv, "");
}
function yt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var oa = NaN, xv = /^[-+]0x[0-9a-f]+$/i, Mv = /^0b[01]+$/i, Av = /^0o[0-7]+$/i, $v = parseInt;
function Sv(t) {
  if (typeof t == "number")
    return t;
  if (Ue(t))
    return oa;
  if (yt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = yt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = bv(t);
  var e = Mv.test(t);
  return e || Av.test(t) ? $v(t.slice(2), e ? 2 : 8) : xv.test(t) ? oa : +t;
}
var Tv = 1 / 0, Ev = 17976931348623157e292;
function fr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Sv(t), t === Tv || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * Ev;
  }
  return t === t ? t : 0;
}
function Ye(t) {
  return t;
}
var kv = "[object AsyncFunction]", Pv = "[object Function]", Ov = "[object GeneratorFunction]", zv = "[object Proxy]";
function eu(t) {
  if (!yt(t))
    return !1;
  var n = an(t);
  return n == Pv || n == Ov || n == kv || n == zv;
}
var hr = wt["__core-js_shared__"], aa = function() {
  var t = /[^.]+$/.exec(hr && hr.keys && hr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Cv(t) {
  return !!aa && aa in t;
}
var Iv = Function.prototype, Rv = Iv.toString;
function qt(t) {
  if (t != null) {
    try {
      return Rv.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Nv = /[\\^$.*+?()[\]{}|]/g, jv = /^\[object .+?Constructor\]$/, Dv = Function.prototype, Fv = Object.prototype, Lv = Dv.toString, qv = Fv.hasOwnProperty, Hv = RegExp(
  "^" + Lv.call(qv).replace(Nv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Xv(t) {
  if (!yt(t) || Cv(t))
    return !1;
  var n = eu(t) ? Hv : jv;
  return n.test(qt(t));
}
function Bv(t, n) {
  return t == null ? void 0 : t[n];
}
function Ht(t, n) {
  var e = Bv(t, n);
  return Xv(e) ? e : void 0;
}
var Br = Ht(wt, "WeakMap");
function Uv(t, n, e) {
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
function Yv(t, n) {
  var e = -1, r = t.length;
  for (n || (n = Array(r)); ++e < r; )
    n[e] = t[e];
  return n;
}
var Gv = 800, Vv = 16, Kv = Date.now;
function Wv(t) {
  var n = 0, e = 0;
  return function() {
    var r = Kv(), i = Vv - (r - e);
    if (e = r, i > 0) {
      if (++n >= Gv)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function Zv(t) {
  return function() {
    return t;
  };
}
var ke = function() {
  try {
    var t = Ht(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Jv = ke ? function(t, n) {
  return ke(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Zv(n),
    writable: !0
  });
} : Ye, Qv = Wv(Jv);
function tw(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var nw = 9007199254740991, ew = /^(?:0|[1-9]\d*)$/;
function Ge(t, n) {
  var e = typeof t;
  return n = n ?? nw, !!n && (e == "number" || e != "symbol" && ew.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function rw(t, n, e) {
  n == "__proto__" && ke ? ke(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Ve(t, n) {
  return t === n || t !== t && n !== n;
}
var iw = Object.prototype, ow = iw.hasOwnProperty;
function aw(t, n, e) {
  var r = t[n];
  (!(ow.call(t, n) && Ve(r, e)) || e === void 0 && !(n in t)) && rw(t, n, e);
}
var sa = Math.max;
function sw(t, n, e) {
  return n = sa(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, o = sa(r.length - n, 0), a = Array(o); ++i < o; )
      a[i] = r[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = r[i];
    return s[n] = e(a), Uv(t, this, s);
  };
}
function uw(t, n) {
  return Qv(sw(t, n, Ye), t + "");
}
var lw = 9007199254740991;
function Ei(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= lw;
}
function un(t) {
  return t != null && Ei(t.length) && !eu(t);
}
function cw(t, n, e) {
  if (!yt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? un(e) && Ge(n, e.length) : r == "string" && n in e) ? Ve(e[n], t) : !1;
}
var fw = Object.prototype;
function ru(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || fw;
  return t === e;
}
function iu(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var hw = "[object Arguments]";
function ua(t) {
  return Dt(t) && an(t) == hw;
}
var ou = Object.prototype, pw = ou.hasOwnProperty, dw = ou.propertyIsEnumerable, au = ua(/* @__PURE__ */ function() {
  return arguments;
}()) ? ua : function(t) {
  return Dt(t) && pw.call(t, "callee") && !dw.call(t, "callee");
};
function gw() {
  return !1;
}
var su = typeof exports == "object" && exports && !exports.nodeType && exports, la = su && typeof module == "object" && module && !module.nodeType && module, yw = la && la.exports === su, ca = yw ? wt.Buffer : void 0, _w = ca ? ca.isBuffer : void 0, Ur = _w || gw, mw = "[object Arguments]", vw = "[object Array]", ww = "[object Boolean]", bw = "[object Date]", xw = "[object Error]", Mw = "[object Function]", Aw = "[object Map]", $w = "[object Number]", Sw = "[object Object]", Tw = "[object RegExp]", Ew = "[object Set]", kw = "[object String]", Pw = "[object WeakMap]", Ow = "[object ArrayBuffer]", zw = "[object DataView]", Cw = "[object Float32Array]", Iw = "[object Float64Array]", Rw = "[object Int8Array]", Nw = "[object Int16Array]", jw = "[object Int32Array]", Dw = "[object Uint8Array]", Fw = "[object Uint8ClampedArray]", Lw = "[object Uint16Array]", qw = "[object Uint32Array]", T = {};
T[Cw] = T[Iw] = T[Rw] = T[Nw] = T[jw] = T[Dw] = T[Fw] = T[Lw] = T[qw] = !0;
T[mw] = T[vw] = T[Ow] = T[ww] = T[zw] = T[bw] = T[xw] = T[Mw] = T[Aw] = T[$w] = T[Sw] = T[Tw] = T[Ew] = T[kw] = T[Pw] = !1;
function Hw(t) {
  return Dt(t) && Ei(t.length) && !!T[an(t)];
}
function Xw(t) {
  return function(n) {
    return t(n);
  };
}
var uu = typeof exports == "object" && exports && !exports.nodeType && exports, wn = uu && typeof module == "object" && module && !module.nodeType && module, Bw = wn && wn.exports === uu, pr = Bw && Qs.process, fa = function() {
  try {
    var t = wn && wn.require && wn.require("util").types;
    return t || pr && pr.binding && pr.binding("util");
  } catch {
  }
}(), ha = fa && fa.isTypedArray, lu = ha ? Xw(ha) : Hw, Uw = Object.prototype, Yw = Uw.hasOwnProperty;
function cu(t, n) {
  var e = H(t), r = !e && au(t), i = !e && !r && Ur(t), o = !e && !r && !i && lu(t), a = e || r || i || o, s = a ? iu(t.length, String) : [], l = s.length;
  for (var u in t)
    (n || Yw.call(t, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ge(u, l))) && s.push(u);
  return s;
}
function fu(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Gw = fu(Object.keys, Object), Vw = Object.prototype, Kw = Vw.hasOwnProperty;
function Ww(t) {
  if (!ru(t))
    return Gw(t);
  var n = [];
  for (var e in Object(t))
    Kw.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Dn(t) {
  return un(t) ? cu(t) : Ww(t);
}
function Zw(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Jw = Object.prototype, Qw = Jw.hasOwnProperty;
function tb(t) {
  if (!yt(t))
    return Zw(t);
  var n = ru(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !Qw.call(t, r)) || e.push(r);
  return e;
}
function nb(t) {
  return un(t) ? cu(t, !0) : tb(t);
}
var eb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, rb = /^\w*$/;
function ki(t, n) {
  if (H(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Ue(t) ? !0 : rb.test(t) || !eb.test(t) || n != null && t in Object(n);
}
var zn = Ht(Object, "create");
function ib() {
  this.__data__ = zn ? zn(null) : {}, this.size = 0;
}
function ob(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var ab = "__lodash_hash_undefined__", sb = Object.prototype, ub = sb.hasOwnProperty;
function lb(t) {
  var n = this.__data__;
  if (zn) {
    var e = n[t];
    return e === ab ? void 0 : e;
  }
  return ub.call(n, t) ? n[t] : void 0;
}
var cb = Object.prototype, fb = cb.hasOwnProperty;
function hb(t) {
  var n = this.__data__;
  return zn ? n[t] !== void 0 : fb.call(n, t);
}
var pb = "__lodash_hash_undefined__";
function db(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = zn && n === void 0 ? pb : n, this;
}
function Ft(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Ft.prototype.clear = ib;
Ft.prototype.delete = ob;
Ft.prototype.get = lb;
Ft.prototype.has = hb;
Ft.prototype.set = db;
function gb() {
  this.__data__ = [], this.size = 0;
}
function Ke(t, n) {
  for (var e = t.length; e--; )
    if (Ve(t[e][0], n))
      return e;
  return -1;
}
var yb = Array.prototype, _b = yb.splice;
function mb(t) {
  var n = this.__data__, e = Ke(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : _b.call(n, e, 1), --this.size, !0;
}
function vb(t) {
  var n = this.__data__, e = Ke(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function wb(t) {
  return Ke(this.__data__, t) > -1;
}
function bb(t, n) {
  var e = this.__data__, r = Ke(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function bt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
bt.prototype.clear = gb;
bt.prototype.delete = mb;
bt.prototype.get = vb;
bt.prototype.has = wb;
bt.prototype.set = bb;
var Cn = Ht(wt, "Map");
function xb() {
  this.size = 0, this.__data__ = {
    hash: new Ft(),
    map: new (Cn || bt)(),
    string: new Ft()
  };
}
function Mb(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function We(t, n) {
  var e = t.__data__;
  return Mb(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Ab(t) {
  var n = We(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function $b(t) {
  return We(this, t).get(t);
}
function Sb(t) {
  return We(this, t).has(t);
}
function Tb(t, n) {
  var e = We(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function xt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
xt.prototype.clear = xb;
xt.prototype.delete = Ab;
xt.prototype.get = $b;
xt.prototype.has = Sb;
xt.prototype.set = Tb;
var Eb = "Expected a function";
function Pi(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Eb);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Pi.Cache || xt)(), e;
}
Pi.Cache = xt;
var kb = 500;
function Pb(t) {
  var n = Pi(t, function(r) {
    return e.size === kb && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Ob = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, zb = /\\(\\)?/g, Cb = Pb(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Ob, function(e, r, i, o) {
    n.push(i ? o.replace(zb, "$1") : r || e);
  }), n;
});
function Ze(t) {
  return t == null ? "" : nu(t);
}
function Je(t, n) {
  return H(t) ? t : ki(t, n) ? [t] : Cb(Ze(t));
}
function Fn(t) {
  if (typeof t == "string" || Ue(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Oi(t, n) {
  n = Je(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Fn(n[e++])];
  return e && e == r ? t : void 0;
}
function Ib(t, n, e) {
  var r = t == null ? void 0 : Oi(t, n);
  return r === void 0 ? e : r;
}
function hu(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Rb = fu(Object.getPrototypeOf, Object);
function Nb(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function jb(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Nb(t, n, e);
}
var Db = "\\ud800-\\udfff", Fb = "\\u0300-\\u036f", Lb = "\\ufe20-\\ufe2f", qb = "\\u20d0-\\u20ff", Hb = Fb + Lb + qb, Xb = "\\ufe0e\\ufe0f", Bb = "\\u200d", Ub = RegExp("[" + Bb + Db + Hb + Xb + "]");
function pu(t) {
  return Ub.test(t);
}
function Yb(t) {
  return t.split("");
}
var du = "\\ud800-\\udfff", Gb = "\\u0300-\\u036f", Vb = "\\ufe20-\\ufe2f", Kb = "\\u20d0-\\u20ff", Wb = Gb + Vb + Kb, Zb = "\\ufe0e\\ufe0f", Jb = "[" + du + "]", Yr = "[" + Wb + "]", Gr = "\\ud83c[\\udffb-\\udfff]", Qb = "(?:" + Yr + "|" + Gr + ")", gu = "[^" + du + "]", yu = "(?:\\ud83c[\\udde6-\\uddff]){2}", _u = "[\\ud800-\\udbff][\\udc00-\\udfff]", tx = "\\u200d", mu = Qb + "?", vu = "[" + Zb + "]?", nx = "(?:" + tx + "(?:" + [gu, yu, _u].join("|") + ")" + vu + mu + ")*", ex = vu + mu + nx, rx = "(?:" + [gu + Yr + "?", Yr, yu, _u, Jb].join("|") + ")", ix = RegExp(Gr + "(?=" + Gr + ")|" + rx + ex, "g");
function ox(t) {
  return t.match(ix) || [];
}
function ax(t) {
  return pu(t) ? ox(t) : Yb(t);
}
function sx(t) {
  return function(n) {
    n = Ze(n);
    var e = pu(n) ? ax(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? jb(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var ux = sx("toUpperCase");
function lx(t) {
  return ux(Ze(t).toLowerCase());
}
function cx() {
  this.__data__ = new bt(), this.size = 0;
}
function fx(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function hx(t) {
  return this.__data__.get(t);
}
function px(t) {
  return this.__data__.has(t);
}
var dx = 200;
function gx(t, n) {
  var e = this.__data__;
  if (e instanceof bt) {
    var r = e.__data__;
    if (!Cn || r.length < dx - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new xt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function pt(t) {
  var n = this.__data__ = new bt(t);
  this.size = n.size;
}
pt.prototype.clear = cx;
pt.prototype.delete = fx;
pt.prototype.get = hx;
pt.prototype.has = px;
pt.prototype.set = gx;
function zi(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function wu() {
  return [];
}
var yx = Object.prototype, _x = yx.propertyIsEnumerable, pa = Object.getOwnPropertySymbols, bu = pa ? function(t) {
  return t == null ? [] : (t = Object(t), zi(pa(t), function(n) {
    return _x.call(t, n);
  }));
} : wu, mx = Object.getOwnPropertySymbols, vx = mx ? function(t) {
  for (var n = []; t; )
    hu(n, bu(t)), t = Rb(t);
  return n;
} : wu;
function xu(t, n, e) {
  var r = n(t);
  return H(t) ? r : hu(r, e(t));
}
function da(t) {
  return xu(t, Dn, bu);
}
function wx(t) {
  return xu(t, nb, vx);
}
var Vr = Ht(wt, "DataView"), Kr = Ht(wt, "Promise"), Wr = Ht(wt, "Set"), ga = "[object Map]", bx = "[object Object]", ya = "[object Promise]", _a = "[object Set]", ma = "[object WeakMap]", va = "[object DataView]", xx = qt(Vr), Mx = qt(Cn), Ax = qt(Kr), $x = qt(Wr), Sx = qt(Br), lt = an;
(Vr && lt(new Vr(new ArrayBuffer(1))) != va || Cn && lt(new Cn()) != ga || Kr && lt(Kr.resolve()) != ya || Wr && lt(new Wr()) != _a || Br && lt(new Br()) != ma) && (lt = function(t) {
  var n = an(t), e = n == bx ? t.constructor : void 0, r = e ? qt(e) : "";
  if (r)
    switch (r) {
      case xx:
        return va;
      case Mx:
        return ga;
      case Ax:
        return ya;
      case $x:
        return _a;
      case Sx:
        return ma;
    }
  return n;
});
var wa = wt.Uint8Array, Tx = "__lodash_hash_undefined__";
function Ex(t) {
  return this.__data__.set(t, Tx), this;
}
function kx(t) {
  return this.__data__.has(t);
}
function Pe(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new xt(); ++n < e; )
    this.add(t[n]);
}
Pe.prototype.add = Pe.prototype.push = Ex;
Pe.prototype.has = kx;
function Px(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Ox(t, n) {
  return t.has(n);
}
var zx = 1, Cx = 2;
function Mu(t, n, e, r, i, o) {
  var a = e & zx, s = t.length, l = n.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(t), f = o.get(n);
  if (u && f)
    return u == n && f == t;
  var p = -1, c = !0, h = e & Cx ? new Pe() : void 0;
  for (o.set(t, n), o.set(n, t); ++p < s; ) {
    var d = t[p], _ = n[p];
    if (r)
      var y = a ? r(_, d, p, n, t, o) : r(d, _, p, t, n, o);
    if (y !== void 0) {
      if (y)
        continue;
      c = !1;
      break;
    }
    if (h) {
      if (!Px(n, function(b, g) {
        if (!Ox(h, g) && (d === b || i(d, b, e, r, o)))
          return h.push(g);
      })) {
        c = !1;
        break;
      }
    } else if (!(d === _ || i(d, _, e, r, o))) {
      c = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), c;
}
function Au(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Ix(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Rx = 1, Nx = 2, jx = "[object Boolean]", Dx = "[object Date]", Fx = "[object Error]", Lx = "[object Map]", qx = "[object Number]", Hx = "[object RegExp]", Xx = "[object Set]", Bx = "[object String]", Ux = "[object Symbol]", Yx = "[object ArrayBuffer]", Gx = "[object DataView]", ba = St ? St.prototype : void 0, dr = ba ? ba.valueOf : void 0;
function Vx(t, n, e, r, i, o, a) {
  switch (e) {
    case Gx:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Yx:
      return !(t.byteLength != n.byteLength || !o(new wa(t), new wa(n)));
    case jx:
    case Dx:
    case qx:
      return Ve(+t, +n);
    case Fx:
      return t.name == n.name && t.message == n.message;
    case Hx:
    case Bx:
      return t == n + "";
    case Lx:
      var s = Au;
    case Xx:
      var l = r & Rx;
      if (s || (s = Ix), t.size != n.size && !l)
        return !1;
      var u = a.get(t);
      if (u)
        return u == n;
      r |= Nx, a.set(t, n);
      var f = Mu(s(t), s(n), r, i, o, a);
      return a.delete(t), f;
    case Ux:
      if (dr)
        return dr.call(t) == dr.call(n);
  }
  return !1;
}
var Kx = 1, Wx = Object.prototype, Zx = Wx.hasOwnProperty;
function Jx(t, n, e, r, i, o) {
  var a = e & Kx, s = da(t), l = s.length, u = da(n), f = u.length;
  if (l != f && !a)
    return !1;
  for (var p = l; p--; ) {
    var c = s[p];
    if (!(a ? c in n : Zx.call(n, c)))
      return !1;
  }
  var h = o.get(t), d = o.get(n);
  if (h && d)
    return h == n && d == t;
  var _ = !0;
  o.set(t, n), o.set(n, t);
  for (var y = a; ++p < l; ) {
    c = s[p];
    var b = t[c], g = n[c];
    if (r)
      var x = a ? r(g, b, c, n, t, o) : r(b, g, c, t, n, o);
    if (!(x === void 0 ? b === g || i(b, g, e, r, o) : x)) {
      _ = !1;
      break;
    }
    y || (y = c == "constructor");
  }
  if (_ && !y) {
    var m = t.constructor, w = n.constructor;
    m != w && "constructor" in t && "constructor" in n && !(typeof m == "function" && m instanceof m && typeof w == "function" && w instanceof w) && (_ = !1);
  }
  return o.delete(t), o.delete(n), _;
}
var Qx = 1, xa = "[object Arguments]", Ma = "[object Array]", Zn = "[object Object]", t2 = Object.prototype, Aa = t2.hasOwnProperty;
function n2(t, n, e, r, i, o) {
  var a = H(t), s = H(n), l = a ? Ma : lt(t), u = s ? Ma : lt(n);
  l = l == xa ? Zn : l, u = u == xa ? Zn : u;
  var f = l == Zn, p = u == Zn, c = l == u;
  if (c && Ur(t)) {
    if (!Ur(n))
      return !1;
    a = !0, f = !1;
  }
  if (c && !f)
    return o || (o = new pt()), a || lu(t) ? Mu(t, n, e, r, i, o) : Vx(t, n, l, e, r, i, o);
  if (!(e & Qx)) {
    var h = f && Aa.call(t, "__wrapped__"), d = p && Aa.call(n, "__wrapped__");
    if (h || d) {
      var _ = h ? t.value() : t, y = d ? n.value() : n;
      return o || (o = new pt()), i(_, y, e, r, o);
    }
  }
  return c ? (o || (o = new pt()), Jx(t, n, e, r, i, o)) : !1;
}
function Ci(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !Dt(t) && !Dt(n) ? t !== t && n !== n : n2(t, n, e, r, Ci, i);
}
var e2 = 1, r2 = 2;
function i2(t, n, e, r) {
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
      var f = new pt(), p;
      if (!(p === void 0 ? Ci(u, l, e2 | r2, r, f) : p))
        return !1;
    }
  }
  return !0;
}
function $u(t) {
  return t === t && !yt(t);
}
function o2(t) {
  for (var n = Dn(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, $u(i)];
  }
  return n;
}
function Su(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function a2(t) {
  var n = o2(t);
  return n.length == 1 && n[0][2] ? Su(n[0][0], n[0][1]) : function(e) {
    return e === t || i2(e, t, n);
  };
}
function s2(t, n) {
  return t != null && n in Object(t);
}
function Tu(t, n, e) {
  n = Je(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = Fn(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Ei(i) && Ge(a, i) && (H(t) || au(t)));
}
function u2(t, n) {
  return t != null && Tu(t, n, s2);
}
var l2 = 1, c2 = 2;
function f2(t, n) {
  return ki(t) && $u(n) ? Su(Fn(t), n) : function(e) {
    var r = Ib(e, t);
    return r === void 0 && r === n ? u2(e, t) : Ci(n, r, l2 | c2);
  };
}
function Eu(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function h2(t) {
  return function(n) {
    return Oi(n, t);
  };
}
function p2(t) {
  return ki(t) ? Eu(Fn(t)) : h2(t);
}
function Ii(t) {
  return typeof t == "function" ? t : t == null ? Ye : typeof t == "object" ? H(t) ? f2(t[0], t[1]) : a2(t) : p2(t);
}
function d2(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var l = a[++i];
      if (e(o[l], l, o) === !1)
        break;
    }
    return n;
  };
}
var g2 = d2();
function y2(t, n) {
  return t && g2(t, n, Dn);
}
function _2(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!un(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Ri = _2(y2);
function m2(t) {
  return Dt(t) && un(t);
}
function v2(t) {
  return typeof t == "function" ? t : Ye;
}
function At(t, n) {
  var e = H(t) ? tw : Ri;
  return e(t, v2(n));
}
function w2(t, n) {
  return sn(n, function(e) {
    return [e, t[e]];
  });
}
function b2(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var x2 = "[object Map]", M2 = "[object Set]";
function A2(t) {
  return function(n) {
    var e = lt(n);
    return e == x2 ? Au(n) : e == M2 ? b2(n) : w2(n, t(n));
  };
}
var ku = A2(Dn);
function $2(t, n) {
  var e = [];
  return Ri(t, function(r, i, o) {
    n(r, i, o) && e.push(r);
  }), e;
}
function S2(t, n) {
  var e = H(t) ? zi : $2;
  return e(t, Ii(n));
}
function T2(t, n) {
  var e = -1, r = un(t) ? Array(t.length) : [];
  return Ri(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function Ni(t, n) {
  var e = H(t) ? sn : T2;
  return e(t, Ii(n));
}
var E2 = Object.prototype, k2 = E2.hasOwnProperty;
function P2(t, n) {
  return t != null && k2.call(t, n);
}
function Pu(t, n) {
  return t != null && Tu(t, n, P2);
}
function O2(t, n) {
  return sn(n, function(e) {
    return t[e];
  });
}
function z2(t) {
  return t == null ? [] : O2(t, Dn(t));
}
function C2(t, n, e, r) {
  if (!yt(t))
    return t;
  n = Je(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var l = Fn(n[i]), u = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != a) {
      var f = s[l];
      u = void 0, u === void 0 && (u = yt(f) ? f : Ge(n[i + 1]) ? [] : {});
    }
    aw(s, l, u), s = s[l];
  }
  return t;
}
function I2(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = Oi(t, a);
    e(s, a) && C2(o, Je(a, t), s);
  }
  return o;
}
function R2(t, n) {
  if (t == null)
    return {};
  var e = sn(wx(t), function(r) {
    return [r];
  });
  return n = Ii(n), I2(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var N2 = Math.floor, j2 = Math.random;
function D2(t, n) {
  return t + N2(j2() * (n - t + 1));
}
var F2 = Math.ceil, L2 = Math.max;
function q2(t, n, e, r) {
  for (var i = -1, o = L2(F2((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function H2(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && cw(n, e, r) && (e = r = void 0), n = fr(n), e === void 0 ? (e = n, n = 0) : e = fr(e), r = r === void 0 ? n < e ? 1 : -1 : fr(r), q2(n, e, r);
  };
}
var bn = H2();
function X2() {
  var t = arguments, n = Ze(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function Ou(t, n) {
  var e = -1, r = t.length, i = r - 1;
  for (n = n === void 0 ? r : n; ++e < n; ) {
    var o = D2(e, i), a = t[o];
    t[o] = t[e], t[e] = a;
  }
  return t.length = n, t;
}
function B2(t) {
  return Ou(Yv(t));
}
function U2(t) {
  return Ou(z2(t));
}
function Y2(t) {
  var n = H(t) ? B2 : U2;
  return n(t);
}
var G2 = Math.max;
function V2(t) {
  if (!(t && t.length))
    return [];
  var n = 0;
  return t = zi(t, function(e) {
    if (m2(e))
      return n = G2(e.length, n), !0;
  }), iu(n, function(e) {
    return sn(t, Eu(e));
  });
}
var Oe = uw(V2);
const $ = {
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
    R_color: "rgb(50,50,50)"
  }
}, K = {
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
}, K2 = (t) => Ni(
  ku(t),
  (n) => {
    n[1].id = n[0], Pu(n[1], "label") || (n[1].label = X2(lx(n[0]), /_/g, " "));
  }
), W2 = (t) => Ni(ku(t), (n) => n[1]), Z2 = (t, n) => At(t, (e, r) => e.widget = n[r]), J2 = (t) => R2(t, (n) => Pu(n, "range")), Q2 = (t, n) => {
  var e = Math.abs(t.x - n.x), r = Math.abs(t.y - n.y);
  return Math.sqrt(e ** 2 + r ** 2);
}, ji = J2(K);
K2(ji);
const zu = W2(ji), ue = Ni(
  zu,
  (t) => Q1().id(t.id).label(t.label).range(t.range).value(t.default).size($.widgets.slider_size).girth($.widgets.slider_girth).knob($.widgets.slider_knob)
);
Z2(zu, ue);
const $t = Ti().actions(["play", "pause"]), Qe = Ti().actions(["back"]), tr = Ti().actions(["rewind"]), tM = [$t, Qe, tr], nM = (t, n) => {
  const e = n.position($.widgets.slider_anchor.x, bn(ue.length).map((a) => $.widgets.slider_anchor.y + $.widgets.slider_gap * a)), r = n.position(bn($.widgets.legend.length).map((a) => $.widgets.legend_anchor.x + $.widgets.legend_gap * a), $.widgets.legend_anchor.y);
  ue.forEach((a, s) => a.position(e[s])), $t.position(n.position($.widgets.playbutton_anchor.x, $.widgets.playbutton_anchor.y)).size($.widgets.playbutton_size), tr.position(n.position($.widgets.backbutton_anchor.x, $.widgets.backbutton_anchor.y)).size($.widgets.button_size), Qe.position(n.position($.widgets.resetbutton_anchor.x, $.widgets.resetbutton_anchor.y)).size($.widgets.button_size), t.selectAll(null).data(ue).enter().append(na), t.selectAll(null).data(tM).enter().append(na);
  const i = t.selectAll(null).data($.widgets.legend).enter().append("g").attr("class", Xr.legend).attr("transform", (a, s) => "translate(" + r[s].x + "," + r[s].y + ")");
  i.append("text").text((a) => a).attr("transform", "translate(20,0)");
  const o = [$.simulation.S_color, $.simulation.I_color, $.simulation.R_color];
  i.append("circle").attr("r", 10).attr("cy", -5).style("fill", (a, s) => o[s]);
}, eM = (t) => {
  At(ji, (n) => n.widget.reset(t, n.default));
};
Oe([-1, 1, 0, 0], [0, 0, -1, 1]), Oe([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
const Jn = [1, 0], Qn = [0.5, Math.sqrt(3) / 2], N = [
  { l: 1, m: 0, n: -1 },
  { l: 1, m: -1, n: 0 },
  { l: 0, m: -1, n: 1 },
  { l: 0, m: 1, n: -1 },
  { l: -1, m: 0, n: 1 },
  { l: -1, m: 1, n: 0 }
], $a = [
  [N[0], N[1]],
  [N[1], N[2]],
  [N[2], N[4]],
  [N[4], N[5]],
  [N[5], N[3]],
  [N[3], N[0]]
];
function I(t) {
  return "id_l" + t.l + "m" + t.m + "n" + t.n;
}
const rM = function(t) {
  var n = "periodic", e = 1, r = e / (2 * t + 1);
  const i = [], o = {};
  bn(-t, t + 1).forEach(function(c) {
    bn(-t, t + 1).forEach(function(h) {
      bn(-t, t + 1).forEach(function(d) {
        c + h + d == 0 && i.push({
          l: c,
          m: h,
          n: d,
          x: r * c * Jn[0] + r * h * Qn[0],
          y: r * c * Jn[1] + r * h * Qn[1]
        });
      });
    });
  }), i.forEach(function(c) {
    o[I(c)] = c, c.cell = () => {
      const h = 1 / Math.sqrt(3);
      return [
        { x: c.x + r / 2, y: c.y + h * r / 2 },
        { x: c.x, y: c.y + h * r },
        { x: c.x - r / 2, y: c.y + h * r / 2 },
        { x: c.x - r / 2, y: c.y - h * r / 2 },
        { x: c.x, y: c.y - h * r },
        { x: c.x + r / 2, y: c.y - h * r / 2 },
        { x: c.x + r / 2, y: c.y + h * r / 2 }
      ];
    }, c.random_interior_point = () => {
      const h = 1 / Math.sqrt(3), d = Math.random(), _ = Math.random(), y = Math.floor(Math.random() * 6) * 2 * Math.PI / 6, b = r / 2 * Math.sqrt(d), g = r / 2 * Math.sqrt(d) * h * (1 - 2 * _), x = Math.cos(y) * b - Math.sin(y) * g, m = Math.sin(y) * b + Math.cos(y) * g;
      return {
        x: c.x + x,
        y: c.y + m
      };
    };
  }), p(i);
  const a = function(c) {
    return typeof c < "u" ? (e = c, r = e / (2 * t + 1), i.forEach((h) => {
      h.x = r * h.l * Jn[0] + r * h.m * Qn[0], h.y = r * h.l * Jn[1] + r * h.m * Qn[1];
    }), this.L = e, this) : e;
  }, s = function(c) {
    var h = 1 / Math.sqrt(3);
    return [
      { x: c.x + Scale / t / 2, y: c.y + h / 2 * Scale / t },
      { x: c.x, y: c.y + h * Scale / t },
      { x: c.x - Scale / t / 2, y: c.y + h / 2 * Scale / t },
      { x: c.x - Scale / t / 2, y: c.y - h / 2 * Scale / t },
      { x: c.x, y: c.y - h * Scale / t },
      { x: c.x + Scale / t / 2, y: c.y - h / 2 * Scale / t },
      { x: c.x + Scale / t / 2, y: c.y + h / 2 * Scale / t }
    ];
  }, l = function(c) {
    return typeof c < "u" ? (c == "dirichlet" ? (n = "dirichlet", f(i)) : (n = "periodic", p(i)), i.forEach((h) => {
      h.is_boundary = n == "dirichlet" && (h.n == -t || h.n == t || h.l == -t || h.l == t || h.m == -t || h.m == t);
    }), this) : n;
  }, u = function() {
    return n === "periodic" ? null : S2(i, (c) => c.n == -t || c.n == t || c.l == -t || c.l == t || c.m == -t || c.m == t);
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
  function f(c) {
    c.forEach(function(h) {
      h.neighbors = [], N.forEach(function(d) {
        const _ = I({ l: h.l + d.l, m: h.m + d.m, n: h.n + d.n }), y = o[_];
        typeof y < "u" && h.neighbors.push(y);
      });
    }), c.forEach(function(h) {
      h.triangles = [], $a.forEach(function(d) {
        const _ = I({ l: h.l + d[0].l, m: h.m + d[0].m, n: h.n + d[0].n }), y = I({ l: h.l + d[1].l, m: h.m + d[1].m, n: h.n + d[1].n });
        typeof o[_] < "u" && typeof o[y] < "u" && h.triangles.push([o[_], o[y]]);
      });
    });
  }
  function p(c) {
    c.forEach(function(h) {
      h.neighbors = [], N.forEach(function(d) {
        var _ = I({ l: h.l + d.l, m: h.m + d.m, n: h.n + d.n });
        typeof o[_] > "u" && (h.l + d.l == t + 1 && Math.abs(h.m + d.m) <= t + 1 && Math.abs(h.n + d.n) <= t && (_ = I({ l: h.l + d.l - (2 * t + 1), m: h.m + d.m + (t + 1), n: h.n + d.n + t })), h.l + d.l == -(t + 1) && Math.abs(h.m + d.m) <= t + 1 && Math.abs(h.n + d.n) <= t && (_ = I({ l: h.l + d.l + (2 * t + 1), m: h.m + d.m - (t + 1), n: h.n + d.n - t })), h.m + d.m == t + 1 && Math.abs(h.l + d.l) <= t && Math.abs(h.n + d.n) <= t + 1 && (_ = I({ m: h.m + d.m - (2 * t + 1), n: h.n + d.n + (t + 1), l: h.l + d.l + t })), h.m + d.m == -(t + 1) && Math.abs(h.l + d.l) <= t && Math.abs(h.n + d.n) <= t + 1 && (_ = I({ m: h.m + d.m + (2 * t + 1), n: h.n + d.n - (t + 1), l: h.l + d.l - t })), h.n + d.n == t + 1 && Math.abs(h.l + d.l) <= t + 1 && Math.abs(h.m + d.m) <= t && (_ = I({ n: h.n + d.n - (2 * t + 1), l: h.l + d.l + (t + 1), m: h.m + d.m + t })), h.n + d.n == -(t + 1) && Math.abs(h.l + d.l) <= t + 1 && Math.abs(h.m + d.m) <= t && (_ = I({ n: h.n + d.n + (2 * t + 1), l: h.l + d.l - (t + 1), m: h.m + d.m - t }))), h.neighbors.push(o[_]);
      });
    }), c.forEach(function(h) {
      h.triangles = [], $a.forEach(function(d) {
        var _ = [];
        d.forEach(function(y, b) {
          var g = I({ l: h.l + y.l, m: h.m + y.m, n: h.n + y.n });
          typeof o[g] > "u" && (h.l + y.l == t + 1 && Math.abs(h.m + y.m) <= t + 1 && Math.abs(h.n + y.n) <= t && I({ l: h.l + y.l - (2 * t + 1), m: h.m + y.m + (t + 1), n: h.n + y.n + t }), h.l + y.l == -(t + 1) && Math.abs(h.m + y.m) <= t + 1 && Math.abs(h.n + y.n) <= t && I({ l: h.l + y.l + (2 * t + 1), m: h.m + y.m - (t + 1), n: h.n + y.n - t }), h.m + y.m == t + 1 && Math.abs(h.l + y.l) <= t && Math.abs(h.n + y.n) <= t + 1 && I({ m: h.m + y.m - (2 * t + 1), n: h.n + y.n + (t + 1), l: h.l + y.l + t }), h.m + y.m == -(t + 1) && Math.abs(h.l + y.l) <= t && Math.abs(h.n + y.n) <= t + 1 && I({ m: h.m + y.m + (2 * t + 1), n: h.n + y.n - (t + 1), l: h.l + y.l - t }), h.n + y.n == t + 1 && Math.abs(h.l + y.l) <= t + 1 && Math.abs(h.m + y.m) <= t && I({ n: h.n + y.n - (2 * t + 1), l: h.l + y.l + (t + 1), m: h.m + y.m + t }), h.n + y.n == -(t + 1) && Math.abs(h.l + y.l) <= t + 1 && Math.abs(h.m + y.m) <= t && I({ n: h.n + y.n + (2 * t + 1), l: h.l + y.l - (t + 1), m: h.m + y.m - t })), _[b] = g;
        }), h.triangles.push([o[_[0]], o[_[1]]]);
      });
    });
  }
};
Oe([-1, 1, 0, 0], [0, 0, -1, 1]), Oe([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
var ft = [];
const iM = () => {
  K.timer = {}, K.tick = 0, ft = rM(K.N).boundary(K.boundary).nodes, ft.forEach((n) => {
    n.state = "S", n.change = !0;
  }), ft.filter((n) => Q2(n, { x: 0, y: 0 }) < K.seed_size / K.N).forEach((n) => {
    n.state = "I", n.change = !0;
  });
}, oM = () => {
  K.tick++, At(ft, (e) => {
    e.change = !1;
  });
  let t = ft.filter((e) => e.state == "I"), n = ft.filter((e) => e.state == "R");
  At(t, (e) => {
    Math.random() < K.recovery_rate.widget.value() && (e.state = "R", e.change = !0);
  }), At(n, (e) => {
    Math.random() < K.waning_immunity_rate.widget.value() && (e.state = "S", e.change = !0);
  }), t = ft.filter((e) => e.state == "I"), At(Y2(t), (e) => {
    const r = e.neighbors.filter((i) => i.state == "S");
    At(r, (i) => {
      Math.random() < K.infection_rate.widget.value() && (i.state = "I", i.change = !0);
    });
  });
};
var ct, gr, yr;
const Zr = si().domain([-0.5, 0.5]), Jr = si().domain([-0.5, 0.5]), aM = is().domain(["S", "I", "R"]).range([$.simulation.S_color, $.simulation.I_color, $.simulation.R_color]);
function Cu(t) {
  t.forEach((n) => {
    const e = n.cell(), r = e.length, i = aM(n.state);
    ct.fillStyle = i, ct.beginPath(), ct.moveTo(Zr(e[0].x), Jr(e[0].y)), At(e, (o, a) => ct.lineTo(Zr(e[(a + 1) % r].x), Jr(e[(a + 1) % r].y))), ct.fill(), ct.closePath();
  });
}
const sM = (t, n) => {
  Cu(ft.filter((e) => e.change == !0));
}, uM = (t, n) => {
  gr = n.display_size.width, yr = n.display_size.height, Zr.range([0, gr]), Jr.range([0, yr]), ct = t.node().getContext("2d"), ct.translate(0.5, 0.5), ct.clearRect(0, 0, gr, yr), Cu(ft);
};
function lM(t, n) {
  oM(), sM();
}
function Iu(t, n) {
  iM(), uM(t, n);
}
var Sa = {};
const cM = (t, n) => {
  $t.value() == 1 ? Sa = lf(() => lM(), $.simulation.delay) : Sa.stop();
}, fM = (t, n, e) => {
  tr.update(() => eM(n)), $t.update(() => cM()), Qe.update(() => Iu(t, e));
}, hM = {
  name: "@explorables/critical_hexsirsize",
  title: "Critical HexSIRSize",
  subtitle: "The stochastic, spatial SIRS model",
  description: "The explorable illustrates the behavior of a contagion process, like an epidemic. Susceptibles (S) can be infected by other infected sites (I), infected site become immune and recover (R), and when immunity wanes immune sites become susceptible again.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function pM(t, n = Ru) {
  const e = sv(t, n), r = e.display, i = e.controls, o = e.grid;
  return nM(i, o), fM(r, i, n), Iu(r, n), {
    halt() {
      $t.value() === 1 && $t.press(i);
    },
    reset() {
      $t.value() === 1 && $t.press(i), tr.press(i), Qe.press(i);
    },
    config: n,
    meta: hM
  };
}
export {
  Ru as config,
  pM as default,
  pM as load,
  hM as meta
};
