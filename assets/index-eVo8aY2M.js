var Te = Object.defineProperty; var ke = (t, e, n) => e in t ? Te(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n; var V = (t, e, n) => (ke(t, typeof e != "symbol" ? e + "" : e, n), n); (function () { const e = document.createElement("link").relList; if (e && e.supports && e.supports("modulepreload")) return; for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r); new MutationObserver(r => { for (const o of r) if (o.type === "childList") for (const a of o.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && i(a) }).observe(document, { childList: !0, subtree: !0 }); function n(r) { const o = {}; return r.integrity && (o.integrity = r.integrity), r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o } function i(r) { if (r.ep) return; r.ep = !0; const o = n(r); fetch(r.href, o) } })(); function O() { } function me(t) { return t() } function re() { return Object.create(null) } function S(t) { t.forEach(me) } function _e(t) { return typeof t == "function" } function Z(t, e) { return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function" } function Ie(t) { return Object.keys(t).length === 0 } function m(t, e) { t.appendChild(e) } function k(t, e, n) { t.insertBefore(e, n || null) } function w(t) { t.parentNode && t.parentNode.removeChild(t) } function he(t, e) { for (let n = 0; n < t.length; n += 1)t[n] && t[n].d(e) } function p(t) { return document.createElement(t) } function W(t) { return document.createTextNode(t) } function E() { return W(" ") } function M(t, e, n, i) { return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i) } function b(t, e, n) { n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n) } function $e(t) { return Array.from(t.childNodes) } function B(t, e) { e = "" + e, t.data !== e && (t.data = e) } function ie(t, e) { t.value = e ?? "" } function Ee(t, e, n, i) { n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "") } let z; function R(t) { z = t } function pe() { if (!z) throw new Error("Function called outside component initialization"); return z } function Me(t) { pe().$$.on_mount.push(t) } function je(t) { pe().$$.on_destroy.push(t) } const P = [], G = []; let C = []; const le = [], Le = Promise.resolve(); let J = !1; function Oe() { J || (J = !0, Le.then(ge)) } function U(t) { C.push(t) } const Y = new Set; let A = 0; function ge() { if (A !== 0) return; const t = z; do { try { for (; A < P.length;) { const e = P[A]; A++, R(e), Se(e.$$) } } catch (e) { throw P.length = 0, A = 0, e } for (R(null), P.length = 0, A = 0; G.length;)G.pop()(); for (let e = 0; e < C.length; e += 1) { const n = C[e]; Y.has(n) || (Y.add(n), n()) } C.length = 0 } while (P.length); for (; le.length;)le.pop()(); J = !1, Y.clear(), R(t) } function Se(t) { if (t.fragment !== null) { t.update(), S(t.before_update); const e = t.dirty; t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(U) } } function qe(t) { const e = [], n = []; C.forEach(i => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach(i => i()), C = e } const H = new Set; let q; function Ae() { q = { r: 0, c: [], p: q } } function Pe() { q.r || S(q.c), q = q.p } function N(t, e) { t && t.i && (H.delete(t), t.i(e)) } function F(t, e, n, i) { if (t && t.o) { if (H.has(t)) return; H.add(t), q.c.push(() => { H.delete(t), i && (n && t.d(1), i()) }), t.o(e) } else i && i() } function X(t) { return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t) } function ve(t) { t && t.c() } function x(t, e, n) { const { fragment: i, after_update: r } = t.$$; i && i.m(e, n), U(() => { const o = t.$$.on_mount.map(me).filter(_e); t.$$.on_destroy ? t.$$.on_destroy.push(...o) : S(o), t.$$.on_mount = [] }), r.forEach(U) } function ee(t, e) { const n = t.$$; n.fragment !== null && (qe(n.after_update), S(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []) } function Ce(t, e) { t.$$.dirty[0] === -1 && (P.push(t), Oe(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31 } function te(t, e, n, i, r, o, a = null, _ = [-1]) { const s = z; R(t); const f = t.$$ = { fragment: null, ctx: [], props: o, update: O, not_equal: r, bound: re(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(e.context || (s ? s.$$.context : [])), callbacks: re(), dirty: _, skip_bound: !1, root: e.target || s.$$.root }; a && a(f.root); let u = !1; if (f.ctx = n ? n(t, e.props || {}, (l, c, ...d) => { const I = d.length ? d[0] : c; return f.ctx && r(f.ctx[l], f.ctx[l] = I) && (!f.skip_bound && f.bound[l] && f.bound[l](I), u && Ce(t, l)), c }) : [], f.update(), u = !0, S(f.before_update), f.fragment = i ? i(f.ctx) : !1, e.target) { if (e.hydrate) { const l = $e(e.target); f.fragment && f.fragment.l(l), l.forEach(w) } else f.fragment && f.fragment.c(); e.intro && N(t.$$.fragment), x(t, e.target, e.anchor), ge() } R(s) } class ne { constructor() { V(this, "$$"); V(this, "$$set") } $destroy() { ee(this, 1), this.$destroy = O } $on(e, n) { if (!_e(n)) return O; const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []); return i.push(n), () => { const r = i.indexOf(n); r !== -1 && i.splice(r, 1) } } $set(e) { this.$$set && !Ie(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1) } } const Ne = "4"; typeof window < "u" && (window.__svelte || (window.__svelte = { v: new Set })).v.add(Ne); function Q(t) { var e = ""; t = Math.floor(t / 1e3); var n = t % 60; t = Math.floor(t / 60); var i = t % 60; t = Math.floor(t / 60); var r = t % 24; return t = Math.floor(t / 24), e = `${r < 10 ? "0" + r.toString() : r}:${i < 10 ? "0" + i.toString() : i}:${n < 10 ? "0" + n.toString() : n}`, e } function K(t) { return new Date(t).toLocaleTimeString() } function oe(t, e, n) { const i = t.slice(); return i[23] = e[n], i } function We(t) { let e, n = t[0].name + "", i; return { c() { e = p("p"), i = W(n) }, m(r, o) { k(r, e, o), m(e, i) }, p(r, o) { o & 1 && n !== (n = r[0].name + "") && B(i, n) }, d(r) { r && w(e) } } } function De(t) { let e, n, i; return { c() { e = p("input"), b(e, "class", "name_edit svelte-1qjnfm6") }, m(r, o) { k(r, e, o), ie(e, t[0].name), t[15](e), n || (i = [M(e, "input", t[14]), M(e, "keypress", t[16])], n = !0) }, p(r, o) { o & 1 && e.value !== r[0].name && ie(e, r[0].name) }, d(r) { r && w(e), t[15](null), n = !1, S(i) } } } function Re(t) { let e, n, i; return { c() { e = p("button"), e.innerHTML = "<b>STOP</b>", b(e, "class", "btn svelte-1qjnfm6"), Ee(e, "background-color", "var(--accent-dark)") }, m(r, o) { k(r, e, o), n || (i = M(e, "click", t[8]), n = !0) }, p: O, d(r) { r && w(e), n = !1, i() } } } function ze(t) { let e, n, i; return { c() { e = p("button"), e.innerHTML = "<b>START</b>", b(e, "class", "btn svelte-1qjnfm6") }, m(r, o) { k(r, e, o), n || (i = M(e, "click", t[7]), n = !0) }, p: O, d(r) { r && w(e), n = !1, i() } } } function fe(t) { let e, n, i, r, o, a, _ = X(t[0].timerIntervals), s = []; for (let f = 0; f < _.length; f += 1)s[f] = ce(oe(t, _, f)); return { c() { e = p("div"), n = p("h2"), n.innerHTML = "<em>Intervals</em>", i = E(), r = p("table"), o = p("tbody"); for (let f = 0; f < s.length; f += 1)s[f].c(); b(r, "class", "log_table svelte-1qjnfm6"), b(e, "class", a = "info_box container " + (t[5] ? "info_box_left" : "info_box_right") + " svelte-1qjnfm6") }, m(f, u) { k(f, e, u), m(e, n), m(e, i), m(e, r), m(r, o); for (let l = 0; l < s.length; l += 1)s[l] && s[l].m(o, null) }, p(f, u) { if (u & 1) { _ = X(f[0].timerIntervals); let l; for (l = 0; l < _.length; l += 1) { const c = oe(f, _, l); s[l] ? s[l].p(c, u) : (s[l] = ce(c), s[l].c(), s[l].m(o, null)) } for (; l < s.length; l += 1)s[l].d(1); s.length = _.length } u & 32 && a !== (a = "info_box container " + (f[5] ? "info_box_left" : "info_box_right") + " svelte-1qjnfm6") && b(e, "class", a) }, d(f) { f && w(e), he(s, f) } } } function se(t) { let e = K(t[23].stopTime) + "", n; return { c() { n = W(e) }, m(i, r) { k(i, n, r) }, p(i, r) { r & 1 && e !== (e = K(i[23].stopTime) + "") && B(n, e) }, d(i) { i && w(n) } } } function ue(t) { let e = Q(t[23].stopTime - t[23].startTime) + "", n; return { c() { n = W(e) }, m(i, r) { k(i, n, r) }, p(i, r) { r & 1 && e !== (e = Q(i[23].stopTime - i[23].startTime) + "") && B(n, e) }, d(i) { i && w(n) } } } function ce(t) { let e, n, i = K(t[23].startTime) + "", r, o, a, _, s, f, u = t[23].stopTime && se(t), l = t[23].stopTime && ue(t); return { c() { e = p("tr"), n = p("td"), r = W(i), o = E(), a = p("td"), u && u.c(), _ = E(), s = p("td"), l && l.c(), f = E() }, m(c, d) { k(c, e, d), m(e, n), m(n, r), m(e, o), m(e, a), u && u.m(a, null), m(e, _), m(e, s), l && l.m(s, null), m(e, f) }, p(c, d) { d & 1 && i !== (i = K(c[23].startTime) + "") && B(r, i), c[23].stopTime ? u ? u.p(c, d) : (u = se(c), u.c(), u.m(a, null)) : u && (u.d(1), u = null), c[23].stopTime ? l ? l.p(c, d) : (l = ue(c), l.c(), l.m(s, null)) : l && (l.d(1), l = null) }, d(c) { c && w(e), u && u.d(), l && l.d() } } } function Be(t) { let e, n, i, r, o, a, _, s, f, u, l, c, d; function I(g, $) { return g[4] ? De : We } let L = I(t), y = L(t); function D(g, $) { return g[0].isRunning ? Re : ze } let j = D(t), T = j(t), v = t[2] && fe(t); return { c() { e = p("div"), n = p("h1"), i = W(t[3]), r = E(), o = p("div"), y.c(), a = E(), _ = p("div"), T.c(), s = E(), f = p("div"), u = p("button"), u.textContent = "X", l = E(), v && v.c(), b(o, "role", "button"), b(o, "tabindex", "0"), b(u, "class", "svelte-1qjnfm6"), b(f, "class", "floating_button svelte-1qjnfm6"), b(e, "class", "container svelte-1qjnfm6"), b(e, "role", "contentinfo") }, m(g, $) { k(g, e, $), m(e, n), m(n, i), m(e, r), m(e, o), y.m(o, null), m(e, a), m(e, _), T.m(_, null), m(e, s), m(e, f), m(f, u), m(e, l), v && v.m(e, null), c || (d = [M(o, "dblclick", t[17]), M(u, "click", t[18]), M(e, "mouseenter", t[19]), M(e, "mouseleave", t[20])], c = !0) }, p(g, [$]) { $ & 8 && B(i, g[3]), L === (L = I(g)) && y ? y.p(g, $) : (y.d(1), y = L(g), y && (y.c(), y.m(o, null))), j === (j = D(g)) && T ? T.p(g, $) : (T.d(1), T = j(g), T && (T.c(), T.m(_, null))), g[2] ? v ? v.p(g, $) : (v = fe(g), v.c(), v.m(e, null)) : v && (v.d(1), v = null) }, i: O, o: O, d(g) { g && w(e), y.d(), T.d(), v && v.d(), c = !1, S(d) } } } function He(t, e, n) {
    let { innerWidth: i } = e, { timer: r } = e, { remove_timer: o } = e; var a = !1, _ = "00:00:00", s = !1, f = !1, u, l; function c() { n(0, r.currentTime = Date.now(), r), n(3, _ = Q(r.currentTime - l.startTime)) } function d() { var h = { startTime: Date.now(), stopTime: 0 }; r.timerIntervals.push(h), l = h, n(0, r.isRunning = !0, r), n(13, j = setInterval(c, 1e3)) } function I() { n(0, r.timerIntervals[r.timerIntervals.length - 1].stopTime = Date.now(), r), n(0, r.isRunning = !1, r) } function L() { n(4, s = !s) } function y(h) { h.clientX > i / 2 ? n(5, f = !0) : n(5, f = !1), n(2, a = !0) } function D() { n(2, a = !1) } je(() => { clearInterval(j) }); let j = setInterval(c, 1e3); function T() { r.name = this.value, n(0, r) } function v(h) { G[h ? "unshift" : "push"](() => { u = h, n(6, u) }) } const g = h => { h.key === "Enter" && L() }, $ = h => { h.preventDefault(), s || L() }, be = () => {
        var h = window.confirm(`Your are deleting:
 `+ r.name); h && o(r.id)
    }, ye = h => y(h), we = () => D(); return t.$$set = h => { "innerWidth" in h && n(12, i = h.innerWidth), "timer" in h && n(0, r = h.timer), "remove_timer" in h && n(1, o = h.remove_timer) }, t.$$.update = () => { t.$$.dirty & 8193 && (r.isRunning || clearInterval(j)) }, [r, o, a, _, s, f, u, d, I, L, y, D, i, j, T, v, g, $, be, ye, we]
} class Ue extends ne { constructor(e) { super(), te(this, e, He, Be, Z, { innerWidth: 12, timer: 0, remove_timer: 1 }) } } function ae(t, e, n) { const i = t.slice(); return i[7] = e[n], i } function de(t) { let e, n; return e = new Ue({ props: { timer: t[7], remove_timer: t[3], innerWidth: t[0] } }), { c() { ve(e.$$.fragment) }, m(i, r) { x(e, i, r), n = !0 }, p(i, r) { const o = {}; r & 2 && (o.timer = i[7]), r & 1 && (o.innerWidth = i[0]), e.$set(o) }, i(i) { n || (N(e.$$.fragment, i), n = !0) }, o(i) { F(e.$$.fragment, i), n = !1 }, d(i) { ee(e, i) } } } function Fe(t) { let e, n, i, r, o, a, _; U(t[4]); let s = X(t[1]), f = []; for (let l = 0; l < s.length; l += 1)f[l] = de(ae(t, s, l)); const u = l => F(f[l], 1, 1, () => { f[l] = null }); return { c() { e = p("div"), n = p("button"), n.textContent = "Add", i = E(), r = p("div"); for (let l = 0; l < f.length; l += 1)f[l].c(); b(n, "class", "add_btn svelte-s30ye7"), b(r, "class", "grid svelte-s30ye7"), b(e, "class", "container svelte-s30ye7") }, m(l, c) { k(l, e, c), m(e, n), m(e, i), m(e, r); for (let d = 0; d < f.length; d += 1)f[d] && f[d].m(r, null); o = !0, a || (_ = [M(window, "resize", t[4]), M(n, "click", t[2])], a = !0) }, p(l, [c]) { if (c & 11) { s = X(l[1]); let d; for (d = 0; d < s.length; d += 1) { const I = ae(l, s, d); f[d] ? (f[d].p(I, c), N(f[d], 1)) : (f[d] = de(I), f[d].c(), N(f[d], 1), f[d].m(r, null)) } for (Ae(), d = s.length; d < f.length; d += 1)u(d); Pe() } }, i(l) { if (!o) { for (let c = 0; c < s.length; c += 1)N(f[c]); o = !0 } }, o(l) { f = f.filter(Boolean); for (let c = 0; c < f.length; c += 1)F(f[c]); o = !1 }, d(l) { l && w(e), he(f, l), a = !1, S(_) } } } function Xe(t, e, n) {
    var i = 0, r = [], o = []; function a() { var u = { id: crypto.randomUUID(), currentTime: 0, name: _(), isRunning: !1, timerIntervals: [] }; n(1, r = [...r, u]) } function _() { return o[Math.floor(Math.random() * o.length)] } function s(u) { var l = r.findIndex(c => c.id === u); r.splice(l, 1), n(1, r = [...r]) } Me(async () => {
        var u = await fetch("./names.txt"), l = await u.text(); o = [...l.split(`
`)], r.length <= 0 && a()
    }); function f() { n(0, i = window.innerWidth) } return [i, r, a, s, f]
} class Ke extends ne { constructor(e) { super(), te(this, e, Xe, Fe, Z, {}) } } function Ve(t) { let e, n, i, r; return e = new Ke({}), { c() { ve(e.$$.fragment), n = E(), i = p("div"), i.innerHTML = "<p><em>Chronos app created by Aevum - 2024</em></p>", b(i, "class", "footer svelte-3b0hzs") }, m(o, a) { x(e, o, a), k(o, n, a), k(o, i, a), r = !0 }, p: O, i(o) { r || (N(e.$$.fragment, o), r = !0) }, o(o) { F(e.$$.fragment, o), r = !1 }, d(o) { o && (w(n), w(i)), ee(e, o) } } } class Ye extends ne { constructor(e) { super(), te(this, e, null, Ve, Z, {}) } } new Ye({ target: document.getElementById("app") })
