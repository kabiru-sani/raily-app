!function() {
    "use strict";
    function e() {}
    const t = e=>e;
    function n(e, t) {
        for (const n in t)
            e[n] = t[n];
        return e
    }
    function i(e) {
        return e()
    }
    function o() {
        return Object.create(null)
    }
    function r(e) {
        e.forEach(i)
    }
    function a(e) {
        return "function" == typeof e
    }
    function s(e, t) {
        return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
    }
    let l;
    function c(e, t) {
        return l || (l = document.createElement("a")),
        l.href = t,
        e === l.href
    }
    function d(e) {
        return 0 === Object.keys(e).length
    }
    function u(t, ...n) {
        if (null == t)
            return e;
        const i = t.subscribe(...n);
        return i.unsubscribe ? ()=>i.unsubscribe() : i
    }
    function f(e, t, n) {
        e.$$.on_destroy.push(u(t, n))
    }
    function p(e, t, n, i) {
        if (e) {
            const o = m(e, t, n, i);
            return e[0](o)
        }
    }
    function m(e, t, i, o) {
        return e[1] && o ? n(i.ctx.slice(), e[1](o(t))) : i.ctx
    }
    function h(e, t, n, i) {
        if (e[2] && i) {
            const o = e[2](i(n));
            if (void 0 === t.dirty)
                return o;
            if ("object" == typeof o) {
                const e = []
                  , n = Math.max(t.dirty.length, o.length);
                for (let i = 0; i < n; i += 1)
                    e[i] = t.dirty[i] | o[i];
                return e
            }
            return t.dirty | o
        }
        return t.dirty
    }
    function g(e, t, n, i, o, r) {
        if (o) {
            const a = m(t, n, i, r);
            e.p(a, o)
        }
    }
    function w(e) {
        if (e.ctx.length > 32) {
            const t = []
              , n = e.ctx.length / 32;
            for (let e = 0; e < n; e++)
                t[e] = -1;
            return t
        }
        return -1
    }
    function b(e) {
        return null == e ? "" : e
    }
    function v(t) {
        return t && a(t.destroy) ? t.destroy : e
    }
    function y(e) {
        const t = "string" == typeof e && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
        return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"]
    }
    const x = "undefined" != typeof window;
    let A = x ? ()=>window.performance.now() : ()=>Date.now()
      , $ = x ? e=>requestAnimationFrame(e) : e;
    const j = new Set;
    function k(e) {
        j.forEach((t=>{
            t.c(e) || (j.delete(t),
            t.f())
        }
        )),
        0 !== j.size && $(k)
    }
    function S(e) {
        let t;
        return 0 === j.size && $(k),
        {
            promise: new Promise((n=>{
                j.add(t = {
                    c: e,
                    f: n
                })
            }
            )),
            abort() {
                j.delete(t)
            }
        }
    }
    function _(e, t) {
        e.appendChild(t)
    }
    function E(e, t, n) {
        const i = C(e);
        if (!i.getElementById(t)) {
            const e = T("style");
            e.id = t,
            e.textContent = n,
            R(i, e)
        }
    }
    function C(e) {
        if (!e)
            return document;
        const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
        return t && t.host ? t : e.ownerDocument
    }
    function P(e) {
        const t = T("style");
        return R(C(e), t),
        t.sheet
    }
    function R(e, t) {
        return _(e.head || e, t),
        t.sheet
    }
    function z(e, t, n) {
        e.insertBefore(t, n || null)
    }
    function L(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }
    function M(e, t) {
        for (let n = 0; n < e.length; n += 1)
            e[n] && e[n].d(t)
    }
    function T(e) {
        return document.createElement(e)
    }
    function B(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e)
    }
    function U(e) {
        return document.createTextNode(e)
    }
    function N() {
        return U(" ")
    }
    function D() {
        return U("")
    }
    function I(e, t, n, i) {
        return e.addEventListener(t, n, i),
        ()=>e.removeEventListener(t, n, i)
    }
    function W(e) {
        return function(t) {
            return t.stopPropagation(),
            e.call(this, t)
        }
    }
    function O(e, t, n) {
        null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
    }
    const H = ["width", "height"];
    function G(e, t) {
        const n = Object.getOwnPropertyDescriptors(e.__proto__);
        for (const i in t)
            null == t[i] ? e.removeAttribute(i) : "style" === i ? e.style.cssText = t[i] : "__value" === i ? e.value = e[i] = t[i] : n[i] && n[i].set && -1 === H.indexOf(i) ? e[i] = t[i] : O(e, i, t[i])
    }
    function K(e, t) {
        Object.keys(t).forEach((n=>{
            F(e, n, t[n])
        }
        ))
    }
    function F(e, t, n) {
        t in e ? e[t] = "boolean" == typeof e[t] && "" === n || n : O(e, t, n)
    }
    function V(e) {
        return /-/.test(e) ? K : G
    }
    function Y(e) {
        return Array.from(e.childNodes)
    }
    function Z(e, t) {
        t = "" + t,
        e.data !== t && (e.data = t)
    }
    function X(e, t, n, i) {
        null == n ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "")
    }
    function q(e, t, {bubbles: n=!1, cancelable: i=!1}={}) {
        const o = document.createEvent("CustomEvent");
        return o.initCustomEvent(e, n, i, t),
        o
    }
    class J {
        constructor(e=!1) {
            this.is_svg = !1,
            this.is_svg = e,
            this.e = this.n = null
        }
        c(e) {
            this.h(e)
        }
        m(e, t, n=null) {
            this.e || (this.is_svg ? this.e = B(t.nodeName) : this.e = T(11 === t.nodeType ? "TEMPLATE" : t.nodeName),
            this.t = "TEMPLATE" !== t.tagName ? t : t.content,
            this.c(e)),
            this.i(n)
        }
        h(e) {
            this.e.innerHTML = e,
            this.n = Array.from("TEMPLATE" === this.e.nodeName ? this.e.content.childNodes : this.e.childNodes)
        }
        i(e) {
            for (let t = 0; t < this.n.length; t += 1)
                z(this.t, this.n[t], e)
        }
        p(e) {
            this.d(),
            this.h(e),
            this.i(this.a)
        }
        d() {
            this.n.forEach(L)
        }
    }
    const Q = new Map;
    let ee = 0, te;
    function ne(e) {
        let t = 5381
          , n = e.length;
        for (; n--; )
            t = (t << 5) - t ^ e.charCodeAt(n);
        return t >>> 0
    }
    function ie(e, t) {
        const n = {
            stylesheet: P(t),
            rules: {}
        };
        return Q.set(e, n),
        n
    }
    function oe(e, t, n, i, o, r, a, s=0) {
        const l = 16.666 / i;
        let c = "{\n";
        for (let e = 0; e <= 1; e += l) {
            const i = t + (n - t) * r(e);
            c += 100 * e + `%{${a(i, 1 - i)}}\n`
        }
        const d = c + `100% {${a(n, 1 - n)}}\n}`
          , u = `__svelte_${ne(d)}_${s}`
          , f = C(e)
          , {stylesheet: p, rules: m} = Q.get(f) || ie(f, e);
        m[u] || (m[u] = !0,
        p.insertRule(`@keyframes ${u} ${d}`, p.cssRules.length));
        const h = e.style.animation || "";
        return e.style.animation = `${h ? `${h}, ` : ""}${u} ${i}ms linear ${o}ms 1 both`,
        ee += 1,
        u
    }
    function re(e, t) {
        const n = (e.style.animation || "").split(", ")
          , i = n.filter(t ? e=>e.indexOf(t) < 0 : e=>-1 === e.indexOf("__svelte"))
          , o = n.length - i.length;
        o && (e.style.animation = i.join(", "),
        ee -= o,
        ee || ae())
    }
    function ae() {
        $((()=>{
            ee || (Q.forEach((e=>{
                const {ownerNode: t} = e.stylesheet;
                t && L(t)
            }
            )),
            Q.clear())
        }
        ))
    }
    function se(e) {
        te = e
    }
    function le() {
        if (!te)
            throw new Error("Function called outside component initialization");
        return te
    }
    function ce(e) {
        le().$$.on_mount.push(e)
    }
    function de() {
        const e = le();
        return (t,n,{cancelable: i=!1}={})=>{
            const o = e.$$.callbacks[t];
            if (o) {
                const r = q(t, n, {
                    cancelable: i
                });
                return o.slice().forEach((t=>{
                    t.call(e, r)
                }
                )),
                !r.defaultPrevented
            }
            return !0
        }
    }
    function ue(e, t) {
        return le().$$.context.set(e, t),
        t
    }
    function fe(e) {
        return le().$$.context.get(e)
    }
    const pe = []
      , me = [];
    let he = [];
    const ge = []
      , we = Promise.resolve();
    let be = !1;
    function ve() {
        be || (be = !0,
        we.then(ke))
    }
    function ye() {
        return ve(),
        we
    }
    function xe(e) {
        he.push(e)
    }
    const Ae = new Set;
    let $e = 0, je;
    function ke() {
        if (0 !== $e)
            return;
        const e = te;
        do {
            try {
                for (; $e < pe.length; ) {
                    const e = pe[$e];
                    $e++,
                    se(e),
                    Se(e.$$)
                }
            } catch (e) {
                throw pe.length = 0,
                $e = 0,
                e
            }
            for (se(null),
            pe.length = 0,
            $e = 0; me.length; )
                me.pop()();
            for (let e = 0; e < he.length; e += 1) {
                const t = he[e];
                Ae.has(t) || (Ae.add(t),
                t())
            }
            he.length = 0
        } while (pe.length);
        for (; ge.length; )
            ge.pop()();
        be = !1,
        Ae.clear(),
        se(e)
    }
    function Se(e) {
        if (null !== e.fragment) {
            e.update(),
            r(e.before_update);
            const t = e.dirty;
            e.dirty = [-1],
            e.fragment && e.fragment.p(e.ctx, t),
            e.after_update.forEach(xe)
        }
    }
    function _e(e) {
        const t = []
          , n = [];
        he.forEach((i=>-1 === e.indexOf(i) ? t.push(i) : n.push(i))),
        n.forEach((e=>e())),
        he = t
    }
    function Ee() {
        return je || (je = Promise.resolve(),
        je.then((()=>{
            je = null
        }
        ))),
        je
    }
    function Ce(e, t, n) {
        e.dispatchEvent(q(`${t ? "intro" : "outro"}${n}`))
    }
    const Pe = new Set;
    let Re;
    function ze() {
        Re = {
            r: 0,
            c: [],
            p: Re
        }
    }
    function Le() {
        Re.r || r(Re.c),
        Re = Re.p
    }
    function Me(e, t) {
        e && e.i && (Pe.delete(e),
        e.i(t))
    }
    function Te(e, t, n, i) {
        if (e && e.o) {
            if (Pe.has(e))
                return;
            Pe.add(e),
            Re.c.push((()=>{
                Pe.delete(e),
                i && (n && e.d(1),
                i())
            }
            )),
            e.o(t)
        } else
            i && i()
    }
    const Be = {
        duration: 0
    };
    function Ue(n, i, o) {
        const r = {
            direction: "in"
        };
        let s = i(n, o, r), l = !1, c, d, u = 0;
        function f() {
            c && re(n, c)
        }
        function p() {
            const {delay: i=0, duration: o=300, easing: r=t, tick: a=e, css: p} = s || Be;
            p && (c = oe(n, 0, 1, o, i, r, p, u++)),
            a(0, 1);
            const m = A() + i
              , h = m + o;
            d && d.abort(),
            l = !0,
            xe((()=>Ce(n, !0, "start"))),
            d = S((e=>{
                if (l) {
                    if (e >= h)
                        return a(1, 0),
                        Ce(n, !0, "end"),
                        f(),
                        l = !1;
                    if (e >= m) {
                        const t = r((e - m) / o);
                        a(t, 1 - t)
                    }
                }
                return l
            }
            ))
        }
        let m = !1;
        return {
            start() {
                m || (m = !0,
                re(n),
                a(s) ? (s = s(r),
                Ee().then(p)) : p())
            },
            invalidate() {
                m = !1
            },
            end() {
                l && (f(),
                l = !1)
            }
        }
    }
    function Ne(n, i, o, s) {
        const l = {
            direction: "both"
        };
        let c = i(n, o, l)
          , d = s ? 0 : 1
          , u = null
          , f = null
          , p = null;
        function m() {
            p && re(n, p)
        }
        function h(e, t) {
            const n = e.b - d;
            return t *= Math.abs(n),
            {
                a: d,
                b: e.b,
                d: n,
                duration: t,
                start: e.start,
                end: e.start + t,
                group: e.group
            }
        }
        function g(i) {
            const {delay: o=0, duration: a=300, easing: s=t, tick: l=e, css: g} = c || Be
              , w = {
                start: A() + o,
                b: i
            };
            i || (w.group = Re,
            Re.r += 1),
            u || f ? f = w : (g && (m(),
            p = oe(n, d, i, a, o, s, g)),
            i && l(0, 1),
            u = h(w, a),
            xe((()=>Ce(n, i, "start"))),
            S((e=>{
                if (f && e > f.start && (u = h(f, a),
                f = null,
                Ce(n, u.b, "start"),
                g && (m(),
                p = oe(n, d, u.b, u.duration, 0, s, c.css))),
                u)
                    if (e >= u.end)
                        l(d = u.b, 1 - d),
                        Ce(n, u.b, "end"),
                        f || (u.b ? m() : --u.group.r || r(u.group.c)),
                        u = null;
                    else if (e >= u.start) {
                        const t = e - u.start;
                        d = u.a + u.d * s(t / u.duration),
                        l(d, 1 - d)
                    }
                return !(!u && !f)
            }
            )))
        }
        return {
            run(e) {
                a(c) ? Ee().then((()=>{
                    c = c(l),
                    g(e)
                }
                )) : g(e)
            },
            end() {
                m(),
                u = f = null
            }
        }
    }
    function De(e, t) {
        const n = {}
          , i = {}
          , o = {
            $$scope: 1
        };
        let r = e.length;
        for (; r--; ) {
            const a = e[r]
              , s = t[r];
            if (s) {
                for (const e in a)
                    e in s || (i[e] = 1);
                for (const e in s)
                    o[e] || (n[e] = s[e],
                    o[e] = 1);
                e[r] = s
            } else
                for (const e in a)
                    o[e] = 1
        }
        for (const e in i)
            e in n || (n[e] = void 0);
        return n
    }
    function Ie(e) {
        e && e.c()
    }
    function We(e, t, n, o) {
        const {fragment: s, after_update: l} = e.$$;
        s && s.m(t, n),
        o || xe((()=>{
            const t = e.$$.on_mount.map(i).filter(a);
            e.$$.on_destroy ? e.$$.on_destroy.push(...t) : r(t),
            e.$$.on_mount = []
        }
        )),
        l.forEach(xe)
    }
    function Oe(e, t) {
        const n = e.$$;
        null !== n.fragment && (_e(n.after_update),
        r(n.on_destroy),
        n.fragment && n.fragment.d(t),
        n.on_destroy = n.fragment = null,
        n.ctx = [])
    }
    function He(e, t) {
        -1 === e.$$.dirty[0] && (pe.push(e),
        ve(),
        e.$$.dirty.fill(0)),
        e.$$.dirty[t / 31 | 0] |= 1 << t % 31
    }
    function Ge(t, n, i, a, s, l, c, d=[-1]) {
        const u = te;
        se(t);
        const f = t.$$ = {
            fragment: null,
            ctx: [],
            props: l,
            update: e,
            not_equal: s,
            bound: o(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(n.context || (u ? u.$$.context : [])),
            callbacks: o(),
            dirty: d,
            skip_bound: !1,
            root: n.target || u.$$.root
        };
        c && c(f.root);
        let p = !1;
        if (f.ctx = i ? i(t, n.props || {}, ((e,n,...i)=>{
            const o = i.length ? i[0] : n;
            return f.ctx && s(f.ctx[e], f.ctx[e] = o) && (!f.skip_bound && f.bound[e] && f.bound[e](o),
            p && He(t, e)),
            n
        }
        )) : [],
        f.update(),
        p = !0,
        r(f.before_update),
        f.fragment = !!a && a(f.ctx),
        n.target) {
            if (n.hydrate) {
                const e = Y(n.target);
                f.fragment && f.fragment.l(e),
                e.forEach(L)
            } else
                f.fragment && f.fragment.c();
            n.intro && Me(t.$$.fragment),
            We(t, n.target, n.anchor, n.customElement),
            ke()
        }
        se(u)
    }
    class Ke {
        $destroy() {
            Oe(this, 1),
            this.$destroy = e
        }
        $on(t, n) {
            if (!a(n))
                return e;
            const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return i.push(n),
            ()=>{
                const e = i.indexOf(n);
                -1 !== e && i.splice(e, 1)
            }
        }
        $set(e) {
            this.$$set && !d(e) && (this.$$.skip_bound = !0,
            this.$$set(e),
            this.$$.skip_bound = !1)
        }
    }
    const Fe = "#6701E6"
      , Ve = "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741"
      , Ye = "#374151"
      , Ze = "#FBBF24"
      , Xe = "#ffcd3640"
      , qe = ["popup", "toast"]
      , Je = e=>qe.includes(null == e ? void 0 : e.type);
    function Qe(...e) {
        return e.filter(Boolean).join(" ")
    }
    function et(e) {
        const t = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif';
        return e ? e + ", " + t : t
    }
    const tt = e=>{
        var t, n;
        const i = [];
        return i.push(`--clr-highlight: ${null !== (n = null === (t = e.colors) || void 0 === t ? void 0 : t.highlight) && void 0 !== n ? n : Xe}`),
        i
    }
    ;
    var nt = function(e, t, n, i) {
        function o(e) {
            return e instanceof n ? e : new n((function(t) {
                t(e)
            }
            ))
        }
        return new (n || (n = Promise))((function(n, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }
            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }
            function l(e) {
                e.done ? n(e.value) : o(e.value).then(a, s)
            }
            l((i = i.apply(e, t || [])).next())
        }
        ))
    };
    class it {
        static loadScript(e) {
            return nt(this, void 0, void 0, (function*() {
                if (!this.scripts.has(e)) {
                    let t = document.querySelector(`script[src="${e}"]`);
                    if (!t) {
                        const n = new Promise(((n,i)=>{
                            t = document.createElement("script"),
                            t.src = e,
                            t.async = !0,
                            t.onload = ()=>n(t),
                            t.onerror = i,
                            document.head.appendChild(t)
                        }
                        ));
                        this.scripts.set(e, n)
                    }
                }
                return this.scripts.get(e)
            }
            ))
        }
    }
    function ot(e, t, n) {
        var i = this && this.__awaiter || function(e, t, n, i) {
            function o(e) {
                return e instanceof n ? e : new n((function(t) {
                    t(e)
                }
                ))
            }
            return new (n || (n = Promise))((function(n, r) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : o(e.value).then(a, s)
                }
                l((i = i.apply(e, t || [])).next())
            }
            ))
        }
        ;
        const o = de();
        let {font: r} = t;
        function a() {
            var e;
            return i(this, void 0, void 0, (function*() {
                try {
                    if ("undefined" == typeof window)
                        return;
                    const t = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
                    yield it.loadScript(t),
                    null === (e = window.WebFont) || void 0 === e || e.load({
                        google: {
                            families: [`${r}:400,700&display=swap`]
                        },
                        active: ()=>{
                            o("fontsLoaded")
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
            }
            ))
        }
        return ce((()=>{
            r && a()
        }
        )),
        e.$$set = e=>{
            "font"in e && n(0, r = e.font)
        }
        ,
        [r]
    }
    it.scripts = new Map;
    class rt extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, ot, null, s, {
                font: 0
            })
        }
    }
    const at = [];
    function st(t, n=e) {
        let i;
        const o = new Set;
        function r(e) {
            if (s(t, e) && (t = e,
            i)) {
                const e = !at.length;
                for (const e of o)
                    e[1](),
                    at.push(e, t);
                if (e) {
                    for (let e = 0; e < at.length; e += 2)
                        at[e][0](at[e + 1]);
                    at.length = 0
                }
            }
        }
        function a(e) {
            r(e(t))
        }
        function l(a, s=e) {
            const l = [a, s];
            return o.add(l),
            1 === o.size && (i = n(r) || e),
            a(t),
            ()=>{
                o.delete(l),
                0 === o.size && i && (i(),
                i = null)
            }
        }
        return {
            set: r,
            update: a,
            subscribe: l
        }
    }
    const lt = e=>({
        rp: 16 & e
    })
      , ct = e=>({
        rp: e[4]
    });
    function dt(e) {
        let t, i, o, r, a;
        const s = e[9].default
          , l = p(s, e, e[8], ct);
        let c = [{
            class: i = e[0] + " sj-responsive"
        }, {
            style: e[1]
        }]
          , d = {};
        for (let e = 0; e < c.length; e += 1)
            d = n(d, c[e]);
        return {
            c() {
                t = T(e[2]),
                l && l.c(),
                V(e[2])(t, d)
            },
            m(n, i) {
                z(n, t, i),
                l && l.m(t, null),
                e[11](t),
                o = !0,
                r || (a = I(t, "click", e[10]),
                r = !0)
            },
            p(e, n) {
                l && l.p && (!o || 272 & n) && g(l, s, e, e[8], o ? h(s, e[8], n, lt) : w(e[8]), ct),
                V(e[2])(t, d = De(c, [(!o || 1 & n && i !== (i = e[0] + " sj-responsive")) && {
                    class: i
                }, (!o || 2 & n) && {
                    style: e[1]
                }]))
            },
            i(e) {
                o || (Me(l, e),
                o = !0)
            },
            o(e) {
                Te(l, e),
                o = !1
            },
            d(n) {
                n && L(t),
                l && l.d(n),
                e[11](null),
                r = !1,
                a()
            }
        }
    }
    function ut(e) {
        let t = e[2], n, i, o = e[2] && dt(e);
        return {
            c() {
                o && o.c(),
                n = D()
            },
            m(e, t) {
                o && o.m(e, t),
                z(e, n, t),
                i = !0
            },
            p(e, [i]) {
                e[2] ? t ? s(t, e[2]) ? (o.d(1),
                o = dt(e),
                t = e[2],
                o.c(),
                o.m(n.parentNode, n)) : o.p(e, i) : (o = dt(e),
                t = e[2],
                o.c(),
                o.m(n.parentNode, n)) : t && (o.d(1),
                o = null,
                t = e[2])
            },
            i(e) {
                i || (Me(o),
                i = !0)
            },
            o(e) {
                Te(o),
                i = !1
            },
            d(e) {
                e && L(n),
                o && o.d(e)
            }
        }
    }
    function ft(e, t, n) {
        let i, o, {$$slots: r={}, $$scope: a} = t;
        var s = this && this.__awaiter || function(e, t, n, i) {
            function o(e) {
                return e instanceof n ? e : new n((function(t) {
                    t(e)
                }
                ))
            }
            return new (n || (n = Promise))((function(n, r) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : o(e.value).then(a, s)
                }
                l((i = i.apply(e, t || [])).next())
            }
            ))
        }
        ;
        const l = de()
          , c = {
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            "2xl": 1536
        };
        let d;
        const u = st(0)
          , p = fe("containerWidthStore") || u;
        f(e, p, (e=>n(7, o = e))),
        ue("containerWidthStore", u),
        ce((()=>s(void 0, void 0, void 0, (function*() {
            p.set(d.clientWidth);
            const e = new ResizeObserver((e=>{
                for (let t of e)
                    u.set(t.contentRect.width)
            }
            ));
            return e.observe(d),
            yield ye(),
            l("init"),
            ()=>{
                e.unobserve(d)
            }
        }
        ))));
        let {class: m=""} = t
          , {style: h=""} = t
          , {tag: g="div"} = t;
        const w = ()=>l("click");
        function b(e) {
            me[e ? "unshift" : "push"]((()=>{
                d = e,
                n(3, d)
            }
            ))
        }
        return e.$$set = e=>{
            "class"in e && n(0, m = e.class),
            "style"in e && n(1, h = e.style),
            "tag"in e && n(2, g = e.tag),
            "$$scope"in e && n(8, a = e.$$scope)
        }
        ,
        e.$$.update = ()=>{
            128 & e.$$.dirty && n(4, i = (e,t)=>{
                let n = t;
                const i = o;
                let r = Object.entries(Object.assign({
                    base: e
                }, n)).sort((([e],[t])=>c[e] - c[t]))
                  , a = r[0][1];
                for (let e = 1; e < r.length; e++) {
                    const [t,n] = r[e];
                    if (i < c[t])
                        break;
                    a = n
                }
                return a
            }
            )
        }
        ,
        [m, h, g, d, i, l, p, o, a, r, w, b]
    }
    class pt extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, ft, ut, s, {
                class: 0,
                style: 1,
                tag: 2
            })
        }
    }
    function mt(e, t) {
        var n;
        if (!e)
            return null;
        let i = !0
          , o = e;
        if (e.includes("https://senja-io.s3.us-west-1.amazonaws.com"))
            o = e.replace("https://senja-io.s3.us-west-1.amazonaws.com", "https://senjaio.b-cdn.net");
        else {
            if (e.includes("image.mux.com")) {
                let n = e;
                if (e.includes(".gif"))
                    return e;
                (e.includes(".jpg") || e.includes(".png")) && ((null == t ? void 0 : t.format) && "auto" != (null == t ? void 0 : t.format) && "webp" != (null == t ? void 0 : t.format) || (n = n.replace(".jpg", ".webp")),
                "png" == (null == t ? void 0 : t.format) && (n = n.replace(".jpg", ".png")),
                "jpg" == (null == t ? void 0 : t.format) && (n = n.replace(".png", ".jpg")));
                const i = new URL(n);
                return (null == t ? void 0 : t.width) && i.searchParams.set("width", `${t.width}`),
                (null == t ? void 0 : t.height) && i.searchParams.set("height", `${t.height}`),
                i.toString()
            }
            if (e.includes("https://lh3.googleusercontent.com"))
                o = e.replace("https://lh3.googleusercontent.com", "https://senja-lh3.b-cdn.net");
            else {
                if (e.includes("https://ph-avatars.imgix.net")) {
                    const n = new URL(e);
                    return (null == t ? void 0 : t.width) && n.searchParams.set("w", `${t.width}`),
                    (null == t ? void 0 : t.height) && n.searchParams.set("w", `${t.height}`),
                    n.toString()
                }
                if (e.includes("https://ik.imagekit.io/senja")) {
                    const i = e.split("https://ik.imagekit.io/senja")[0]
                      , r = e.split("https://ik.imagekit.io/senja")[1];
                    if (e.includes("tr:"))
                        return e;
                    const a = [];
                    return (null == t ? void 0 : t.width) && a.push(`w-${t.width}`),
                    (null == t ? void 0 : t.height) && a.push(`h-${t.height}`),
                    a.push(`f-${null !== (n = null == t ? void 0 : t.format) && void 0 !== n ? n : "webp"}`),
                    o = a.length > 0 ? `${i}https://ik.imagekit.io/senja/tr:${a.join(",")}${r}` : e,
                    o
                }
                i = !1
            }
        }
        if (i) {
            const e = new URL(o);
            return (null == t ? void 0 : t.width) && e.searchParams.set("width", `${t.width}`),
            (null == t ? void 0 : t.height) && e.searchParams.set("height", `${t.height}`),
            (null == t ? void 0 : t.format) && e.searchParams.set("format", null == t ? void 0 : t.format),
            e.toString()
        }
        return e
    }
    function ht(e) {
        let t, n, i, o;
        return {
            c() {
                t = T("img"),
                O(t, "alt", n = e[0].alt ?? e[0].id),
                O(t, "width", e[3]),
                O(t, "height", e[3]),
                c(t.src, i = mt(e[0].src, {
                    format: "png",
                    width: 2 * parseInt(e[3]?.toString())
                })) || O(t, "src", i),
                O(t, "style", o = "width: " + e[3] + "px; height: " + e[3] + "px; object-fit: contain; " + e[7]),
                O(t, "class", e[8])
            },
            m(e, n) {
                z(e, t, n)
            },
            p(e, r) {
                1 & r && n !== (n = e[0].alt ?? e[0].id) && O(t, "alt", n),
                8 & r && O(t, "width", e[3]),
                8 & r && O(t, "height", e[3]),
                9 & r && !c(t.src, i = mt(e[0].src, {
                    format: "png",
                    width: 2 * parseInt(e[3]?.toString())
                })) && O(t, "src", i),
                136 & r && o !== (o = "width: " + e[3] + "px; height: " + e[3] + "px; object-fit: contain; " + e[7]) && O(t, "style", o),
                256 & r && O(t, "class", e[8])
            },
            d(e) {
                e && L(t)
            }
        }
    }
    function gt(e) {
        let t, n = e[0].svg + "";
        return {
            c() {
                t = B("svg"),
                O(t, "xmlns", "http://www.w3.org/2000/svg"),
                O(t, "width", e[3]),
                O(t, "height", e[3]),
                O(t, "viewBox", "0 0 24 24"),
                O(t, "stroke", e[1]),
                O(t, "fill", e[2]),
                O(t, "style", e[7]),
                O(t, "stroke-width", e[4]),
                O(t, "stroke-linecap", e[5]),
                O(t, "stroke-linejoin", e[6]),
                O(t, "class", e[8])
            },
            m(e, i) {
                z(e, t, i),
                t.innerHTML = n
            },
            p(e, i) {
                1 & i && n !== (n = e[0].svg + "") && (t.innerHTML = n),
                8 & i && O(t, "width", e[3]),
                8 & i && O(t, "height", e[3]),
                2 & i && O(t, "stroke", e[1]),
                4 & i && O(t, "fill", e[2]),
                128 & i && O(t, "style", e[7]),
                16 & i && O(t, "stroke-width", e[4]),
                32 & i && O(t, "stroke-linecap", e[5]),
                64 & i && O(t, "stroke-linejoin", e[6]),
                256 & i && O(t, "class", e[8])
            },
            d(e) {
                e && L(t)
            }
        }
    }
    function wt(t) {
        let n;
        function i(e, t) {
            return "lucide" == e[0].type ? gt : "image" == e[0].type ? ht : void 0
        }
        let o = i(t)
          , r = o && o(t);
        return {
            c() {
                r && r.c(),
                n = D()
            },
            m(e, t) {
                r && r.m(e, t),
                z(e, n, t)
            },
            p(e, [t]) {
                o === (o = i(e)) && r ? r.p(e, t) : (r && r.d(1),
                r = o && o(e),
                r && (r.c(),
                r.m(n.parentNode, n)))
            },
            i: e,
            o: e,
            d(e) {
                r && r.d(e),
                e && L(n)
            }
        }
    }
    function bt(e, t, n) {
        let {data: i} = t
          , {stroke: o="currentColor"} = t
          , {fill: r="none"} = t
          , {size: a="24"} = t
          , {strokeWidth: s="2"} = t
          , {strokeLinecap: l="round"} = t
          , {strokeLinejoin: c="round"} = t
          , {style: d=""} = t
          , {class: u=""} = t;
        return e.$$set = e=>{
            "data"in e && n(0, i = e.data),
            "stroke"in e && n(1, o = e.stroke),
            "fill"in e && n(2, r = e.fill),
            "size"in e && n(3, a = e.size),
            "strokeWidth"in e && n(4, s = e.strokeWidth),
            "strokeLinecap"in e && n(5, l = e.strokeLinecap),
            "strokeLinejoin"in e && n(6, c = e.strokeLinejoin),
            "style"in e && n(7, d = e.style),
            "class"in e && n(8, u = e.class)
        }
        ,
        [i, o, r, a, s, l, c, d, u]
    }
    class vt extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, bt, wt, s, {
                data: 0,
                stroke: 1,
                fill: 2,
                size: 3,
                strokeWidth: 4,
                strokeLinecap: 5,
                strokeLinejoin: 6,
                style: 7,
                class: 8
            })
        }
    }
    function yt(t) {
        let n, i, o, r, a, s, l, c, d;
        return {
            c() {
                n = B("svg"),
                i = B("defs"),
                o = B("style"),
                r = U(".cls-1 {\n\t\t\t\tfill: #6701e6;\n\t\t\t}\n\t\t\t.cls-2 {\n\t\t\t\tfill: #8b41f2;\n\t\t\t}\n\t\t"),
                a = B("g"),
                s = B("g"),
                l = B("path"),
                c = B("path"),
                d = B("path"),
                O(l, "class", "cls-1"),
                O(l, "d", "M239.53,111.88,128.9,222.51,93.62,187.23h0L35.36,129l0,0L18.3,111.83a62.5,62.5,0,0,1,0-88.38l5.17-5.15a62.51,62.51,0,0,1,88.38,0l17.09,17.09,17.06-17a62.42,62.42,0,0,1,88.36,0l5.17,5.16A62.49,62.49,0,0,1,239.53,111.88Z"),
                O(c, "class", "cls-2"),
                O(c, "d", "M204.24,76.59,93.65,187.18l0,0h0L35.36,129l0,0L18.3,111.83a62.5,62.5,0,0,1,0-88.38l5.17-5.15a62.51,62.51,0,0,1,88.38,0l17.09,17.09,17.06-17A62.47,62.47,0,0,1,216.66,5.91,62.5,62.5,0,0,1,204.24,76.59Z"),
                O(d, "class", "cls-1"),
                O(d, "d", "M128.94,35.39c-17.51,22-37.38,36.89-57.62,39.78a37.72,37.72,0,1,1-8-74.89C65.11.12,66.87,0,68.61,0A62.22,62.22,0,0,1,111.85,18.3Z"),
                O(s, "id", "Layer_1-2"),
                O(s, "data-name", "Layer 1"),
                O(a, "id", "Layer_2"),
                O(a, "data-name", "Layer 2"),
                O(n, "width", t[0]),
                O(n, "height", t[0]),
                O(n, "class", t[1]),
                O(n, "xmlns", "http://www.w3.org/2000/svg"),
                O(n, "viewBox", "0 0 257.84 222.51")
            },
            m(e, t) {
                z(e, n, t),
                _(n, i),
                _(i, o),
                _(o, r),
                _(n, a),
                _(a, s),
                _(s, l),
                _(s, c),
                _(s, d)
            },
            p(e, [t]) {
                1 & t && O(n, "width", e[0]),
                1 & t && O(n, "height", e[0]),
                2 & t && O(n, "class", e[1])
            },
            i: e,
            o: e,
            d(e) {
                e && L(n)
            }
        }
    }
    function xt(e, t, n) {
        let {size: i="32px"} = t
          , {class: o=""} = t;
        return e.$$set = e=>{
            "size"in e && n(0, i = e.size),
            "class"in e && n(1, o = e.class)
        }
        ,
        [i, o]
    }
    class At extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, xt, yt, s, {
                size: 0,
                class: 1
            })
        }
    }
    const $t = {
        type: "lucide",
        svg: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>'
    }
      , jt = {
        type: "lucide",
        svg: '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>'
    }
      , kt = {
        type: "lucide",
        svg: '<polygon points="5 3 19 12 5 21 5 3"></polygon>'
    };
    function St(e) {
        var t;
        try {
            const t = new URL("https://senja.io?utm_medium=powered_by");
            if (t.searchParams.append("utm_source", e.source),
            e.content && t.searchParams.append("utm_content", e.content),
            e.campaign && t.searchParams.append("utm_campaign", e.campaign),
            e.userProvidedUrl) {
                const t = new URL(e.userProvidedUrl);
                return t.searchParams.append("utm_source", e.source),
                t.searchParams.append("utm_medium", "powered_by"),
                e.content && t.searchParams.append("utm_content", e.content),
                e.campaign && t.searchParams.append("utm_campaign", e.campaign),
                t.toString()
            }
            return t.toString()
        } catch (n) {
            return console.log(n),
            `https://senja.io?utm_medium=powered_by&utm_source=${e.source}&utm_content=${null !== (t = e.content) && void 0 !== t ? t : ""}`
        }
    }
    function _t(e) {
        E(e, "svelte-yfjn2g", "a.svelte-yfjn2g{border-bottom:none !important}")
    }
    function Et(e) {
        let t, n, i, o;
        const r = e[9].default
          , a = p(r, e, e[8], null)
          , s = a || Pt(e);
        return {
            c() {
                t = T("a"),
                s && s.c(),
                O(t, "target", "_blank"),
                O(t, "href", e[4]),
                O(t, "class", "sj-powered-by flex justify-end svelte-yfjn2g")
            },
            m(r, a) {
                z(r, t, a),
                s && s.m(t, null),
                n = !0,
                i || (o = I(t, "click", e[5]),
                i = !0)
            },
            p(e, i) {
                a ? a.p && (!n || 256 & i) && g(a, r, e, e[8], n ? h(r, e[8], i, null) : w(e[8]), null) : s && s.p && (!n || 2 & i) && s.p(e, n ? i : -1),
                (!n || 16 & i) && O(t, "href", e[4])
            },
            i(e) {
                n || (Me(s, e),
                n = !0)
            },
            o(e) {
                Te(s, e),
                n = !1
            },
            d(e) {
                e && L(t),
                s && s.d(e),
                i = !1,
                o()
            }
        }
    }
    function Ct(e) {
        let t, n, i, o, r, a;
        const s = e[9].default
          , l = p(s, e, e[8], null)
          , c = l || Rt(e);
        return {
            c() {
                t = T("div"),
                n = T("a"),
                c && c.c(),
                O(n, "target", "_blank"),
                O(n, "rel", "nofollow"),
                O(n, "href", e[4]),
                O(n, "class", " svelte-yfjn2g"),
                O(t, "class", i = "sj-powered-by flex " + ("start" == e[3] ? "justify-start" : "justify-end"))
            },
            m(i, s) {
                z(i, t, s),
                _(t, n),
                c && c.m(n, null),
                o = !0,
                r || (a = I(n, "click", e[5]),
                r = !0)
            },
            p(e, r) {
                l ? l.p && (!o || 256 & r) && g(l, s, e, e[8], o ? h(s, e[8], r, null) : w(e[8]), null) : c && c.p && (!o || 4 & r) && c.p(e, o ? r : -1),
                (!o || 16 & r) && O(n, "href", e[4]),
                (!o || 8 & r && i !== (i = "sj-powered-by flex " + ("start" == e[3] ? "justify-start" : "justify-end"))) && O(t, "class", i)
            },
            i(e) {
                o || (Me(c, e),
                o = !0)
            },
            o(e) {
                Te(c, e),
                o = !1
            },
            d(e) {
                e && L(t),
                c && c.d(e),
                r = !1,
                a()
            }
        }
    }
    function Pt(e) {
        let t, n;
        return t = new At({
            props: {
                class: "inline",
                size: e[1]
            }
        }),
        {
            c() {
                Ie(t.$$.fragment)
            },
            m(e, i) {
                We(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                2 & n && (i.size = e[1]),
                t.$set(i)
            },
            i(e) {
                n || (Me(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Te(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Oe(t, e)
            }
        }
    }
    function Rt(e) {
        let t, n, i, o, r, a, s, l, c, d;
        return i = new At({
            props: {
                class: "inline -mt-0.5",
                size: 14
            }
        }),
        l = new vt({
            props: {
                data: jt,
                size: 14,
                class: "-rotate-45 mr-2"
            }
        }),
        {
            c() {
                t = T("div"),
                n = T("div"),
                Ie(i.$$.fragment),
                r = N(),
                a = T("div"),
                a.textContent = "Collect testimonials with Senja",
                s = N(),
                Ie(l.$$.fragment),
                O(n, "class", o = Qe(!e[2] && "p-1 px-[5px] group-hover:-mr-0 -mr-0.5 rounded-full group-hover:scale-105 shadow-xl bg-white")),
                O(a, "class", "py-1"),
                O(t, "class", c = Qe(" rounded-full group  flex gap-1 items-center   align-middle text-xs font-medium", e[2] ? "" : "mb-1 border hover:border-transparent origin-bottom-right hover:scale-[1.02] duration-200 bg-white hover:text-white hover:from-[#6701EF] hover:to-purple-500 hover:bg-gradient-to-r text-gray-600 backdrop-blur-lg"))
            },
            m(e, o) {
                z(e, t, o),
                _(t, n),
                We(i, n, null),
                _(t, r),
                _(t, a),
                _(t, s),
                We(l, t, null),
                d = !0
            },
            p(e, i) {
                (!d || 4 & i && o !== (o = Qe(!e[2] && "p-1 px-[5px] group-hover:-mr-0 -mr-0.5 rounded-full group-hover:scale-105 shadow-xl bg-white"))) && O(n, "class", o),
                (!d || 4 & i && c !== (c = Qe(" rounded-full group  flex gap-1 items-center   align-middle text-xs font-medium", e[2] ? "" : "mb-1 border hover:border-transparent origin-bottom-right hover:scale-[1.02] duration-200 bg-white hover:text-white hover:from-[#6701EF] hover:to-purple-500 hover:bg-gradient-to-r text-gray-600 backdrop-blur-lg"))) && O(t, "class", c)
            },
            i(e) {
                d || (Me(i.$$.fragment, e),
                Me(l.$$.fragment, e),
                d = !0)
            },
            o(e) {
                Te(i.$$.fragment, e),
                Te(l.$$.fragment, e),
                d = !1
            },
            d(e) {
                e && L(t),
                Oe(i),
                Oe(l)
            }
        }
    }
    function zt(e) {
        let t, n, i, o;
        const r = [Ct, Et]
          , a = [];
        function s(e, t) {
            return "logo_with_text" == e[0] ? 0 : 1
        }
        return t = s(e),
        n = a[t] = r[t](e),
        {
            c() {
                n.c(),
                i = D()
            },
            m(e, n) {
                a[t].m(e, n),
                z(e, i, n),
                o = !0
            },
            p(e, [o]) {
                let l = t;
                t = s(e),
                t === l ? a[t].p(e, o) : (ze(),
                Te(a[l], 1, 1, (()=>{
                    a[l] = null
                }
                )),
                Le(),
                n = a[t],
                n ? n.p(e, o) : (n = a[t] = r[t](e),
                n.c()),
                Me(n, 1),
                n.m(i.parentNode, i))
            },
            i(e) {
                o || (Me(n),
                o = !0)
            },
            o(e) {
                Te(n),
                o = !1
            },
            d(e) {
                a[t].d(e),
                e && L(i)
            }
        }
    }
    function Lt(e, t, n) {
        let i, {$$slots: o={}, $$scope: r} = t;
        var a;
        let {style: s="logo_with_text"} = t
          , {logoSize: l=24} = t
          , {design: c} = t
          , {textOnly: d=!1} = t
          , {justify: u="end"} = t;
        function f(e) {
            var t, n;
            const i = null !== (n = null === (t = e.target.closest("div.senja-embed")) || void 0 === t ? void 0 : t.getAttribute("data-id")) && void 0 !== n ? n : ""
              , o = new CustomEvent("senjaWidgetPoweredByClick",{
                detail: {
                    design_id: null == c ? void 0 : c.type,
                    widget_id: i
                }
            });
            window.dispatchEvent(o)
        }
        return e.$$set = e=>{
            "style"in e && n(0, s = e.style),
            "logoSize"in e && n(1, l = e.logoSize),
            "design"in e && n(6, c = e.design),
            "textOnly"in e && n(2, d = e.textOnly),
            "justify"in e && n(3, u = e.justify),
            "$$scope"in e && n(8, r = e.$$scope)
        }
        ,
        e.$$.update = ()=>{
            192 & e.$$.dirty && n(4, i = St({
                source: "widget",
                content: null !== n(7, a = null == c ? void 0 : c.type) && void 0 !== a ? a : "",
                userProvidedUrl: "undefined" != typeof window ? window.SenjaAffiliatePoweredBy : void 0
            }))
        }
        ,
        [s, l, d, u, i, f, c, a, r, o]
    }
    class Mt extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, Lt, zt, s, {
                style: 0,
                logoSize: 1,
                design: 6,
                textOnly: 2,
                justify: 3
            }, _t)
        }
    }
    const Tt = ["top", "right", "bottom", "left"]
      , Bt = ["start", "end"]
      , Ut = Tt.reduce(((e,t)=>e.concat(t, t + "-" + Bt[0], t + "-" + Bt[1])), [])
      , Nt = Math.min
      , Dt = Math.max
      , It = Math.round
      , Wt = e=>({
        x: e,
        y: e
    })
      , Ot = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    }
      , Ht = {
        start: "end",
        end: "start"
    };
    function Gt(e, t, n) {
        return Dt(e, Nt(t, n))
    }
    function Kt(e, t) {
        return "function" == typeof e ? e(t) : e
    }
    function Ft(e) {
        return e.split("-")[0]
    }
    function Vt(e) {
        return e.split("-")[1]
    }
    function Yt(e) {
        return "x" === e ? "y" : "x"
    }
    function Zt(e) {
        return "y" === e ? "height" : "width"
    }
    function Xt(e) {
        return ["top", "bottom"].includes(Ft(e)) ? "y" : "x"
    }
    function qt(e) {
        return Yt(Xt(e))
    }
    function Jt(e, t, n) {
        void 0 === n && (n = !1);
        const i = Vt(e)
          , o = qt(e)
          , r = Zt(o);
        let a = "x" === o ? i === (n ? "end" : "start") ? "right" : "left" : "start" === i ? "bottom" : "top";
        return t.reference[r] > t.floating[r] && (a = on(a)),
        [a, on(a)]
    }
    function Qt(e) {
        const t = on(e);
        return [en(e), t, en(t)]
    }
    function en(e) {
        return e.replace(/start|end/g, (e=>Ht[e]))
    }
    function tn(e, t, n) {
        const i = ["left", "right"]
          , o = ["right", "left"]
          , r = ["top", "bottom"]
          , a = ["bottom", "top"];
        switch (e) {
        case "top":
        case "bottom":
            return n ? t ? o : i : t ? i : o;
        case "left":
        case "right":
            return t ? r : a;
        default:
            return []
        }
    }
    function nn(e, t, n, i) {
        const o = Vt(e);
        let r = tn(Ft(e), "start" === n, i);
        return o && (r = r.map((e=>e + "-" + o)),
        t && (r = r.concat(r.map(en)))),
        r
    }
    function on(e) {
        return e.replace(/left|right|bottom|top/g, (e=>Ot[e]))
    }
    function rn(e) {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
        }
    }
    function an(e) {
        return "number" != typeof e ? rn(e) : {
            top: e,
            right: e,
            bottom: e,
            left: e
        }
    }
    function sn(e) {
        return {
            ...e,
            top: e.y,
            left: e.x,
            right: e.x + e.width,
            bottom: e.y + e.height
        }
    }
    function ln(e, t, n) {
        let {reference: i, floating: o} = e;
        const r = Xt(t)
          , a = qt(t)
          , s = Zt(a)
          , l = Ft(t)
          , c = "y" === r
          , d = i.x + i.width / 2 - o.width / 2
          , u = i.y + i.height / 2 - o.height / 2
          , f = i[s] / 2 - o[s] / 2;
        let p;
        switch (l) {
        case "top":
            p = {
                x: d,
                y: i.y - o.height
            };
            break;
        case "bottom":
            p = {
                x: d,
                y: i.y + i.height
            };
            break;
        case "right":
            p = {
                x: i.x + i.width,
                y: u
            };
            break;
        case "left":
            p = {
                x: i.x - o.width,
                y: u
            };
            break;
        default:
            p = {
                x: i.x,
                y: i.y
            }
        }
        switch (Vt(t)) {
        case "start":
            p[a] -= f * (n && c ? -1 : 1);
            break;
        case "end":
            p[a] += f * (n && c ? -1 : 1)
        }
        return p
    }
    const cn = async(e,t,n)=>{
        const {placement: i="bottom", strategy: o="absolute", middleware: r=[], platform: a} = n
          , s = r.filter(Boolean)
          , l = await (null == a.isRTL ? void 0 : a.isRTL(t));
        let c = await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        })
          , {x: d, y: u} = ln(c, i, l)
          , f = i
          , p = {}
          , m = 0;
        for (let n = 0; n < s.length; n++) {
            const {name: r, fn: h} = s[n]
              , {x: g, y: w, data: b, reset: v} = await h({
                x: d,
                y: u,
                initialPlacement: i,
                placement: f,
                strategy: o,
                middlewareData: p,
                rects: c,
                platform: a,
                elements: {
                    reference: e,
                    floating: t
                }
            });
            d = null != g ? g : d,
            u = null != w ? w : u,
            p = {
                ...p,
                [r]: {
                    ...p[r],
                    ...b
                }
            },
            v && m <= 50 && (m++,
            "object" == typeof v && (v.placement && (f = v.placement),
            v.rects && (c = !0 === v.rects ? await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
            }) : v.rects),
            ({x: d, y: u} = ln(c, f, l))),
            n = -1)
        }
        return {
            x: d,
            y: u,
            placement: f,
            strategy: o,
            middlewareData: p
        }
    }
    ;
    async function dn(e, t) {
        var n;
        void 0 === t && (t = {});
        const {x: i, y: o, platform: r, rects: a, elements: s, strategy: l} = e
          , {boundary: c="clippingAncestors", rootBoundary: d="viewport", elementContext: u="floating", altBoundary: f=!1, padding: p=0} = Kt(t, e)
          , m = an(p)
          , h = "floating" === u ? "reference" : "floating"
          , g = s[f ? h : u]
          , w = sn(await r.getClippingRect({
            element: null == (n = await (null == r.isElement ? void 0 : r.isElement(g))) || n ? g : g.contextElement || await (null == r.getDocumentElement ? void 0 : r.getDocumentElement(s.floating)),
            boundary: c,
            rootBoundary: d,
            strategy: l
        }))
          , b = "floating" === u ? {
            ...a.floating,
            x: i,
            y: o
        } : a.reference
          , v = await (null == r.getOffsetParent ? void 0 : r.getOffsetParent(s.floating))
          , y = await (null == r.isElement ? void 0 : r.isElement(v)) && await (null == r.getScale ? void 0 : r.getScale(v)) || {
            x: 1,
            y: 1
        }
          , x = sn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: b,
            offsetParent: v,
            strategy: l
        }) : b);
        return {
            top: (w.top - x.top + m.top) / y.y,
            bottom: (x.bottom - w.bottom + m.bottom) / y.y,
            left: (w.left - x.left + m.left) / y.x,
            right: (x.right - w.right + m.right) / y.x
        }
    }
    const un = e=>({
        name: "arrow",
        options: e,
        async fn(t) {
            const {x: n, y: i, placement: o, rects: r, platform: a, elements: s, middlewareData: l} = t
              , {element: c, padding: d=0} = Kt(e, t) || {};
            if (null == c)
                return {};
            const u = an(d)
              , f = {
                x: n,
                y: i
            }
              , p = qt(o)
              , m = Zt(p)
              , h = await a.getDimensions(c)
              , g = "y" === p
              , w = g ? "top" : "left"
              , b = g ? "bottom" : "right"
              , v = g ? "clientHeight" : "clientWidth"
              , y = r.reference[m] + r.reference[p] - f[p] - r.floating[m]
              , x = f[p] - r.reference[p]
              , A = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(c));
            let $ = A ? A[v] : 0;
            $ && await (null == a.isElement ? void 0 : a.isElement(A)) || ($ = s.floating[v] || r.floating[m]);
            const j = y / 2 - x / 2
              , k = $ / 2 - h[m] / 2 - 1
              , S = Nt(u[w], k)
              , _ = Nt(u[b], k)
              , E = S
              , C = $ - h[m] - _
              , P = $ / 2 - h[m] / 2 + j
              , R = Gt(E, P, C)
              , z = !l.arrow && null != Vt(o) && P != R && r.reference[m] / 2 - (P < E ? S : _) - h[m] / 2 < 0
              , L = z ? P < E ? P - E : P - C : 0;
            return {
                [p]: f[p] + L,
                data: {
                    [p]: R,
                    centerOffset: P - R - L,
                    ...z && {
                        alignmentOffset: L
                    }
                },
                reset: z
            }
        }
    });
    function fn(e, t, n) {
        const i = e ? [...n.filter((t=>Vt(t) === e)), ...n.filter((t=>Vt(t) !== e))] : n.filter((e=>Ft(e) === e));
        return i.filter((n=>!e || (Vt(n) === e || !!t && en(n) !== n)))
    }
    const pn = function(e) {
        return void 0 === e && (e = {}),
        {
            name: "autoPlacement",
            options: e,
            async fn(t) {
                var n, i, o;
                const {rects: r, middlewareData: a, placement: s, platform: l, elements: c} = t
                  , {crossAxis: d=!1, alignment: u, allowedPlacements: f=Ut, autoAlignment: p=!0, ...m} = Kt(e, t)
                  , h = void 0 !== u || f === Ut ? fn(u || null, p, f) : f
                  , g = await dn(t, m)
                  , w = (null == (n = a.autoPlacement) ? void 0 : n.index) || 0
                  , b = h[w];
                if (null == b)
                    return {};
                const v = Jt(b, r, await (null == l.isRTL ? void 0 : l.isRTL(c.floating)));
                if (s !== b)
                    return {
                        reset: {
                            placement: h[0]
                        }
                    };
                const y = [g[Ft(b)], g[v[0]], g[v[1]]]
                  , x = [...(null == (i = a.autoPlacement) ? void 0 : i.overflows) || [], {
                    placement: b,
                    overflows: y
                }]
                  , A = h[w + 1];
                if (A)
                    return {
                        data: {
                            index: w + 1,
                            overflows: x
                        },
                        reset: {
                            placement: A
                        }
                    };
                const $ = x.map((e=>{
                    const t = Vt(e.placement);
                    return [e.placement, t && d ? e.overflows.slice(0, 2).reduce(((e,t)=>e + t), 0) : e.overflows[0], e.overflows]
                }
                )).sort(((e,t)=>e[1] - t[1]))
                  , j = $.filter((e=>e[2].slice(0, Vt(e[0]) ? 2 : 3).every((e=>e <= 0))))
                  , k = (null == (o = j[0]) ? void 0 : o[0]) || $[0][0];
                return k !== s ? {
                    data: {
                        index: w + 1,
                        overflows: x
                    },
                    reset: {
                        placement: k
                    }
                } : {}
            }
        }
    }
      , mn = function(e) {
        return void 0 === e && (e = {}),
        {
            name: "flip",
            options: e,
            async fn(t) {
                var n, i;
                const {placement: o, middlewareData: r, rects: a, initialPlacement: s, platform: l, elements: c} = t
                  , {mainAxis: d=!0, crossAxis: u=!0, fallbackPlacements: f, fallbackStrategy: p="bestFit", fallbackAxisSideDirection: m="none", flipAlignment: h=!0, ...g} = Kt(e, t);
                if (null != (n = r.arrow) && n.alignmentOffset)
                    return {};
                const w = Ft(o)
                  , b = Ft(s) === s
                  , v = await (null == l.isRTL ? void 0 : l.isRTL(c.floating))
                  , y = f || (b || !h ? [on(s)] : Qt(s));
                f || "none" === m || y.push(...nn(s, h, m, v));
                const x = [s, ...y]
                  , A = await dn(t, g)
                  , $ = [];
                let j = (null == (i = r.flip) ? void 0 : i.overflows) || [];
                if (d && $.push(A[w]),
                u) {
                    const e = Jt(o, a, v);
                    $.push(A[e[0]], A[e[1]])
                }
                if (j = [...j, {
                    placement: o,
                    overflows: $
                }],
                !$.every((e=>e <= 0))) {
                    var k, S;
                    const e = ((null == (k = r.flip) ? void 0 : k.index) || 0) + 1
                      , t = x[e];
                    if (t)
                        return {
                            data: {
                                index: e,
                                overflows: j
                            },
                            reset: {
                                placement: t
                            }
                        };
                    let n = null == (S = j.filter((e=>e.overflows[0] <= 0)).sort(((e,t)=>e.overflows[1] - t.overflows[1]))[0]) ? void 0 : S.placement;
                    if (!n)
                        switch (p) {
                        case "bestFit":
                            {
                                var _;
                                const e = null == (_ = j.map((e=>[e.placement, e.overflows.filter((e=>e > 0)).reduce(((e,t)=>e + t), 0)])).sort(((e,t)=>e[1] - t[1]))[0]) ? void 0 : _[0];
                                e && (n = e);
                                break
                            }
                        case "initialPlacement":
                            n = s
                        }
                    if (o !== n)
                        return {
                            reset: {
                                placement: n
                            }
                        }
                }
                return {}
            }
        }
    };
    function hn(e, t) {
        return {
            top: e.top - t.height,
            right: e.right - t.width,
            bottom: e.bottom - t.height,
            left: e.left - t.width
        }
    }
    function gn(e) {
        return Tt.some((t=>e[t] >= 0))
    }
    const wn = function(e) {
        return void 0 === e && (e = {}),
        {
            name: "hide",
            options: e,
            async fn(t) {
                const {rects: n} = t
                  , {strategy: i="referenceHidden", ...o} = Kt(e, t);
                switch (i) {
                case "referenceHidden":
                    {
                        const e = await dn(t, {
                            ...o,
                            elementContext: "reference"
                        })
                          , i = hn(e, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: i,
                                referenceHidden: gn(i)
                            }
                        }
                    }
                case "escaped":
                    {
                        const e = await dn(t, {
                            ...o,
                            altBoundary: !0
                        })
                          , i = hn(e, n.floating);
                        return {
                            data: {
                                escapedOffsets: i,
                                escaped: gn(i)
                            }
                        }
                    }
                default:
                    return {}
                }
            }
        }
    };
    function bn(e) {
        const t = Nt(...e.map((e=>e.left)))
          , n = Nt(...e.map((e=>e.top)))
          , i = Dt(...e.map((e=>e.right)))
          , o = Dt(...e.map((e=>e.bottom)));
        return {
            x: t,
            y: n,
            width: i - t,
            height: o - n
        }
    }
    function vn(e) {
        const t = e.slice().sort(((e,t)=>e.y - t.y))
          , n = [];
        let i = null;
        for (let e = 0; e < t.length; e++) {
            const o = t[e];
            !i || o.y - i.y > i.height / 2 ? n.push([o]) : n[n.length - 1].push(o),
            i = o
        }
        return n.map((e=>sn(bn(e))))
    }
    const yn = function(e) {
        return void 0 === e && (e = {}),
        {
            name: "inline",
            options: e,
            async fn(t) {
                const {placement: n, elements: i, rects: o, platform: r, strategy: a} = t
                  , {padding: s=2, x: l, y: c} = Kt(e, t)
                  , d = Array.from(await (null == r.getClientRects ? void 0 : r.getClientRects(i.reference)) || [])
                  , u = vn(d)
                  , f = sn(bn(d))
                  , p = an(s);
                function m() {
                    if (2 === u.length && u[0].left > u[1].right && null != l && null != c)
                        return u.find((e=>l > e.left - p.left && l < e.right + p.right && c > e.top - p.top && c < e.bottom + p.bottom)) || f;
                    if (u.length >= 2) {
                        if ("y" === Xt(n)) {
                            const e = u[0]
                              , t = u[u.length - 1]
                              , i = "top" === Ft(n)
                              , o = e.top
                              , r = t.bottom
                              , a = i ? e.left : t.left
                              , s = i ? e.right : t.right
                              , l = s - a
                              , c = r - o;
                            return {
                                top: o,
                                bottom: r,
                                left: a,
                                right: s,
                                width: l,
                                height: c,
                                x: a,
                                y: o
                            }
                        }
                        const e = "left" === Ft(n)
                          , t = Dt(...u.map((e=>e.right)))
                          , i = Nt(...u.map((e=>e.left)))
                          , o = u.filter((n=>e ? n.left === i : n.right === t))
                          , r = o[0].top
                          , a = o[o.length - 1].bottom
                          , s = i
                          , l = t
                          , c = l - s
                          , d = a - r;
                        return {
                            top: r,
                            bottom: a,
                            left: s,
                            right: l,
                            width: c,
                            height: d,
                            x: s,
                            y: r
                        }
                    }
                    return f
                }
                const h = await r.getElementRects({
                    reference: {
                        getBoundingClientRect: m
                    },
                    floating: i.floating,
                    strategy: a
                });
                return o.reference.x !== h.reference.x || o.reference.y !== h.reference.y || o.reference.width !== h.reference.width || o.reference.height !== h.reference.height ? {
                    reset: {
                        rects: h
                    }
                } : {}
            }
        }
    }
      , xn = function(e) {
        return void 0 === e && (e = {}),
        {
            name: "shift",
            options: e,
            async fn(t) {
                const {x: n, y: i, placement: o} = t
                  , {mainAxis: r=!0, crossAxis: a=!1, limiter: s={
                    fn: e=>{
                        let {x: t, y: n} = e;
                        return {
                            x: t,
                            y: n
                        }
                    }
                }, ...l} = Kt(e, t)
                  , c = {
                    x: n,
                    y: i
                }
                  , d = await dn(t, l)
                  , u = Xt(Ft(o))
                  , f = Yt(u);
                let p = c[f]
                  , m = c[u];
                if (r) {
                    const e = "y" === f ? "top" : "left"
                      , t = "y" === f ? "bottom" : "right"
                      , n = p + d[e]
                      , i = p - d[t];
                    p = Gt(n, p, i)
                }
                if (a) {
                    const e = "y" === u ? "top" : "left"
                      , t = "y" === u ? "bottom" : "right"
                      , n = m + d[e]
                      , i = m - d[t];
                    m = Gt(n, m, i)
                }
                const h = s.fn({
                    ...t,
                    [f]: p,
                    [u]: m
                });
                return {
                    ...h,
                    data: {
                        x: h.x - n,
                        y: h.y - i
                    }
                }
            }
        }
    }
      , An = function(e) {
        return void 0 === e && (e = {}),
        {
            options: e,
            fn(t) {
                const {x: n, y: i, placement: o, rects: r, middlewareData: a} = t
                  , {offset: s=0, mainAxis: l=!0, crossAxis: c=!0} = Kt(e, t)
                  , d = {
                    x: n,
                    y: i
                }
                  , u = Xt(o)
                  , f = Yt(u);
                let p = d[f]
                  , m = d[u];
                const h = Kt(s, t)
                  , g = "number" == typeof h ? {
                    mainAxis: h,
                    crossAxis: 0
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    ...h
                };
                if (l) {
                    const e = "y" === f ? "height" : "width"
                      , t = r.reference[f] - r.floating[e] + g.mainAxis
                      , n = r.reference[f] + r.reference[e] - g.mainAxis;
                    p < t ? p = t : p > n && (p = n)
                }
                if (c) {
                    var w, b;
                    const e = "y" === f ? "width" : "height"
                      , t = ["top", "left"].includes(Ft(o))
                      , n = r.reference[u] - r.floating[e] + (t && (null == (w = a.offset) ? void 0 : w[u]) || 0) + (t ? 0 : g.crossAxis)
                      , i = r.reference[u] + r.reference[e] + (t ? 0 : (null == (b = a.offset) ? void 0 : b[u]) || 0) - (t ? g.crossAxis : 0);
                    m < n ? m = n : m > i && (m = i)
                }
                return {
                    [f]: p,
                    [u]: m
                }
            }
        }
    }
      , $n = function(e) {
        return void 0 === e && (e = {}),
        {
            name: "size",
            options: e,
            async fn(t) {
                const {placement: n, rects: i, platform: o, elements: r} = t
                  , {apply: a=(()=>{}
                ), ...s} = Kt(e, t)
                  , l = await dn(t, s)
                  , c = Ft(n)
                  , d = Vt(n)
                  , u = "y" === Xt(n)
                  , {width: f, height: p} = i.floating;
                let m, h;
                "top" === c || "bottom" === c ? (m = c,
                h = d === (await (null == o.isRTL ? void 0 : o.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (h = c,
                m = "end" === d ? "top" : "bottom");
                const g = p - l[m]
                  , w = f - l[h]
                  , b = !t.middlewareData.shift;
                let v = g
                  , y = w;
                if (u) {
                    const e = f - l.left - l.right;
                    y = d || b ? Nt(w, e) : e
                } else {
                    const e = p - l.top - l.bottom;
                    v = d || b ? Nt(g, e) : e
                }
                if (b && !d) {
                    const e = Dt(l.left, 0)
                      , t = Dt(l.right, 0)
                      , n = Dt(l.top, 0)
                      , i = Dt(l.bottom, 0);
                    u ? y = f - 2 * (0 !== e || 0 !== t ? e + t : Dt(l.left, l.right)) : v = p - 2 * (0 !== n || 0 !== i ? n + i : Dt(l.top, l.bottom))
                }
                await a({
                    ...t,
                    availableWidth: y,
                    availableHeight: v
                });
                const x = await o.getDimensions(r.floating);
                return f !== x.width || p !== x.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };
    function jn(e) {
        return _n(e) ? (e.nodeName || "").toLowerCase() : "#document"
    }
    function kn(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
    }
    function Sn(e) {
        var t;
        return null == (t = (_n(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
    }
    function _n(e) {
        return e instanceof Node || e instanceof kn(e).Node
    }
    function En(e) {
        return e instanceof Element || e instanceof kn(e).Element
    }
    function Cn(e) {
        return e instanceof HTMLElement || e instanceof kn(e).HTMLElement
    }
    function Pn(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof kn(e).ShadowRoot)
    }
    function Rn(e) {
        const {overflow: t, overflowX: n, overflowY: i, display: o} = Un(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(o)
    }
    function zn(e) {
        return ["table", "td", "th"].includes(jn(e))
    }
    function Ln(e) {
        const t = Tn()
          , n = Un(e);
        return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some((e=>(n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e=>(n.contain || "").includes(e)))
    }
    function Mn(e) {
        let t = Dn(e);
        for (; Cn(t) && !Bn(t); ) {
            if (Ln(t))
                return t;
            t = Dn(t)
        }
        return null
    }
    function Tn() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
    }
    function Bn(e) {
        return ["html", "body", "#document"].includes(jn(e))
    }
    function Un(e) {
        return kn(e).getComputedStyle(e)
    }
    function Nn(e) {
        return En(e) ? {
            scrollLeft: e.scrollLeft,
            scrollTop: e.scrollTop
        } : {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }
    function Dn(e) {
        if ("html" === jn(e))
            return e;
        const t = e.assignedSlot || e.parentNode || Pn(e) && e.host || Sn(e);
        return Pn(t) ? t.host : t
    }
    function In(e) {
        const t = Dn(e);
        return Bn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Cn(t) && Rn(t) ? t : In(t)
    }
    function Wn(e, t, n) {
        var i;
        void 0 === t && (t = []),
        void 0 === n && (n = !0);
        const o = In(e)
          , r = o === (null == (i = e.ownerDocument) ? void 0 : i.body)
          , a = kn(o);
        return r ? t.concat(a, a.visualViewport || [], Rn(o) ? o : [], a.frameElement && n ? Wn(a.frameElement) : []) : t.concat(o, Wn(o, [], n))
    }
    function On(e) {
        const t = Un(e);
        let n = parseFloat(t.width) || 0
          , i = parseFloat(t.height) || 0;
        const o = Cn(e)
          , r = o ? e.offsetWidth : n
          , a = o ? e.offsetHeight : i
          , s = It(n) !== r || It(i) !== a;
        return s && (n = r,
        i = a),
        {
            width: n,
            height: i,
            $: s
        }
    }
    function Hn(e) {
        return En(e) ? e : e.contextElement
    }
    function Gn(e) {
        const t = Hn(e);
        if (!Cn(t))
            return Wt(1);
        const n = t.getBoundingClientRect()
          , {width: i, height: o, $: r} = On(t);
        let a = (r ? It(n.width) : n.width) / i
          , s = (r ? It(n.height) : n.height) / o;
        return a && Number.isFinite(a) || (a = 1),
        s && Number.isFinite(s) || (s = 1),
        {
            x: a,
            y: s
        }
    }
    const Kn = Wt(0);
    function Fn(e) {
        const t = kn(e);
        return Tn() && t.visualViewport ? {
            x: t.visualViewport.offsetLeft,
            y: t.visualViewport.offsetTop
        } : Kn
    }
    function Vn(e, t, n) {
        return void 0 === t && (t = !1),
        !(!n || t && n !== kn(e)) && t
    }
    function Yn(e, t, n, i) {
        void 0 === t && (t = !1),
        void 0 === n && (n = !1);
        const o = e.getBoundingClientRect()
          , r = Hn(e);
        let a = Wt(1);
        t && (i ? En(i) && (a = Gn(i)) : a = Gn(e));
        const s = Vn(r, n, i) ? Fn(r) : Wt(0);
        let l = (o.left + s.x) / a.x
          , c = (o.top + s.y) / a.y
          , d = o.width / a.x
          , u = o.height / a.y;
        if (r) {
            const e = kn(r)
              , t = i && En(i) ? kn(i) : i;
            let n = e
              , o = n.frameElement;
            for (; o && i && t !== n; ) {
                const e = Gn(o)
                  , t = o.getBoundingClientRect()
                  , i = Un(o)
                  , r = t.left + (o.clientLeft + parseFloat(i.paddingLeft)) * e.x
                  , a = t.top + (o.clientTop + parseFloat(i.paddingTop)) * e.y;
                l *= e.x,
                c *= e.y,
                d *= e.x,
                u *= e.y,
                l += r,
                c += a,
                n = kn(o),
                o = n.frameElement
            }
        }
        return sn({
            width: d,
            height: u,
            x: l,
            y: c
        })
    }
    const Zn = [":popover-open", ":modal"];
    function Xn(e) {
        return Zn.some((t=>{
            try {
                return e.matches(t)
            } catch (e) {
                return !1
            }
        }
        ))
    }
    function qn(e) {
        let {elements: t, rect: n, offsetParent: i, strategy: o} = e;
        const r = "fixed" === o
          , a = Sn(i)
          , s = !!t && Xn(t.floating);
        if (i === a || s && r)
            return n;
        let l = {
            scrollLeft: 0,
            scrollTop: 0
        }
          , c = Wt(1);
        const d = Wt(0)
          , u = Cn(i);
        if ((u || !u && !r) && (("body" !== jn(i) || Rn(a)) && (l = Nn(i)),
        Cn(i))) {
            const e = Yn(i);
            c = Gn(i),
            d.x = e.x + i.clientLeft,
            d.y = e.y + i.clientTop
        }
        return {
            width: n.width * c.x,
            height: n.height * c.y,
            x: n.x * c.x - l.scrollLeft * c.x + d.x,
            y: n.y * c.y - l.scrollTop * c.y + d.y
        }
    }
    function Jn(e) {
        return Array.from(e.getClientRects())
    }
    function Qn(e) {
        return Yn(Sn(e)).left + Nn(e).scrollLeft
    }
    function ei(e) {
        const t = Sn(e)
          , n = Nn(e)
          , i = e.ownerDocument.body
          , o = Dt(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth)
          , r = Dt(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
        let a = -n.scrollLeft + Qn(e);
        const s = -n.scrollTop;
        return "rtl" === Un(i).direction && (a += Dt(t.clientWidth, i.clientWidth) - o),
        {
            width: o,
            height: r,
            x: a,
            y: s
        }
    }
    function ti(e, t) {
        const n = kn(e)
          , i = Sn(e)
          , o = n.visualViewport;
        let r = i.clientWidth
          , a = i.clientHeight
          , s = 0
          , l = 0;
        if (o) {
            r = o.width,
            a = o.height;
            const e = Tn();
            (!e || e && "fixed" === t) && (s = o.offsetLeft,
            l = o.offsetTop)
        }
        return {
            width: r,
            height: a,
            x: s,
            y: l
        }
    }
    function ni(e, t) {
        const n = Yn(e, !0, "fixed" === t)
          , i = n.top + e.clientTop
          , o = n.left + e.clientLeft
          , r = Cn(e) ? Gn(e) : Wt(1)
          , a = e.clientWidth * r.x
          , s = e.clientHeight * r.y
          , l = o * r.x
          , c = i * r.y;
        return {
            width: a,
            height: s,
            x: l,
            y: c
        }
    }
    function ii(e, t, n) {
        let i;
        if ("viewport" === t)
            i = ti(e, n);
        else if ("document" === t)
            i = ei(Sn(e));
        else if (En(t))
            i = ni(t, n);
        else {
            const n = Fn(e);
            i = {
                ...t,
                x: t.x - n.x,
                y: t.y - n.y
            }
        }
        return sn(i)
    }
    function oi(e, t) {
        const n = Dn(e);
        return !(n === t || !En(n) || Bn(n)) && ("fixed" === Un(n).position || oi(n, t))
    }
    function ri(e, t) {
        const n = t.get(e);
        if (n)
            return n;
        let i = Wn(e, [], !1).filter((e=>En(e) && "body" !== jn(e)))
          , o = null;
        const r = "fixed" === Un(e).position;
        let a = r ? Dn(e) : e;
        for (; En(a) && !Bn(a); ) {
            const t = Un(a)
              , n = Ln(a);
            n || "fixed" !== t.position || (o = null);
            const s = r ? !n && !o : !n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || Rn(a) && !n && oi(e, a);
            s ? i = i.filter((e=>e !== a)) : o = t,
            a = Dn(a)
        }
        return t.set(e, i),
        i
    }
    function ai(e) {
        let {element: t, boundary: n, rootBoundary: i, strategy: o} = e;
        const r = "clippingAncestors" === n ? ri(t, this._c) : [].concat(n)
          , a = [...r, i]
          , s = a[0]
          , l = a.reduce(((e,n)=>{
            const i = ii(t, n, o);
            return e.top = Dt(i.top, e.top),
            e.right = Nt(i.right, e.right),
            e.bottom = Nt(i.bottom, e.bottom),
            e.left = Dt(i.left, e.left),
            e
        }
        ), ii(t, s, o));
        return {
            width: l.right - l.left,
            height: l.bottom - l.top,
            x: l.left,
            y: l.top
        }
    }
    function si(e) {
        const {width: t, height: n} = On(e);
        return {
            width: t,
            height: n
        }
    }
    function li(e, t, n) {
        const i = Cn(t)
          , o = Sn(t)
          , r = "fixed" === n
          , a = Yn(e, !0, r, t);
        let s = {
            scrollLeft: 0,
            scrollTop: 0
        };
        const l = Wt(0);
        if (i || !i && !r)
            if (("body" !== jn(t) || Rn(o)) && (s = Nn(t)),
            i) {
                const e = Yn(t, !0, r, t);
                l.x = e.x + t.clientLeft,
                l.y = e.y + t.clientTop
            } else
                o && (l.x = Qn(o));
        const c = a.left + s.scrollLeft - l.x
          , d = a.top + s.scrollTop - l.y;
        return {
            x: c,
            y: d,
            width: a.width,
            height: a.height
        }
    }
    function ci(e, t) {
        return Cn(e) && "fixed" !== Un(e).position ? t ? t(e) : e.offsetParent : null
    }
    function di(e, t) {
        const n = kn(e);
        if (!Cn(e) || Xn(e))
            return n;
        let i = ci(e, t);
        for (; i && zn(i) && "static" === Un(i).position; )
            i = ci(i, t);
        return i && ("html" === jn(i) || "body" === jn(i) && "static" === Un(i).position && !Ln(i)) ? n : i || Mn(e) || n
    }
    const ui = async function(e) {
        const t = this.getOffsetParent || di
          , n = this.getDimensions;
        return {
            reference: li(e.reference, await t(e.floating), e.strategy),
            floating: {
                x: 0,
                y: 0,
                ...await n(e.floating)
            }
        }
    };
    function fi(e) {
        return "rtl" === Un(e).direction
    }
    const pi = {
        convertOffsetParentRelativeRectToViewportRelativeRect: qn,
        getDocumentElement: Sn,
        getClippingRect: ai,
        getOffsetParent: di,
        getElementRects: ui,
        getClientRects: Jn,
        getDimensions: si,
        getScale: Gn,
        isElement: En,
        isRTL: fi
    }
      , mi = xn
      , hi = (e,t,n)=>{
        const i = new Map
          , o = {
            platform: pi,
            ...n
        }
          , r = {
            ...o.platform,
            _c: i
        };
        return cn(e, t, {
            ...o,
            platform: r
        })
    }
    ;
    let gi = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    };
    const wi = (e,t)=>{
        var n, i;
        const o = e.src
          , r = null === (i = null === (n = null === window || void 0 === window ? void 0 : window.location) || void 0 === n ? void 0 : n.search) || void 0 === i ? void 0 : i.includes("disableLazyLoad=true");
        if (r)
            return;
        const a = ()=>{
            const t = e.getBoundingClientRect();
            return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
        }
        ;
        if (a())
            return;
        e.src = "";
        const s = ()=>{
            var n;
            null === (n = null == t ? void 0 : t.onLoad) || void 0 === n || n.call(t),
            e.style.opacity = "1"
        }
          , l = new IntersectionObserver((t=>{
            t[0].isIntersecting && (e.src = o,
            e.complete ? s() : e.addEventListener("load", s),
            l.unobserve(e))
        }
        ),gi);
        return l.observe(e),
        e.style.opacity = "0",
        {
            destroy() {
                e.removeEventListener("load", s)
            }
        }
    }
    ;
    function bi(e) {
        E(e, "svelte-1dfnct6", ".sj-avatar-container.svelte-1dfnct6.svelte-1dfnct6{border-radius:9999px;background-color:rgba(128, 128, 128, 0.14)}.sj-avatar-container.svelte-1dfnct6 img.svelte-1dfnct6{border-radius:9999px;object-fit:cover}.sj-avatar-container.svelte-1dfnct6 img.svelte-1dfnct6:after{display:none}")
    }
    function vi(t) {
        let n, i, o, a, s, l, d, u;
        return {
            c() {
                n = T("div"),
                i = T("img"),
                X(i, "width", t[7] + "px"),
                X(i, "height", t[7] + "px"),
                c(i.src, o = t[6]) || O(i, "src", o),
                O(i, "alt", a = (t[0] ?? "") + " avatar"),
                O(i, "class", s = b(t[2]) + " svelte-1dfnct6"),
                O(i, "loading", "lazy"),
                O(i, "referrerpolicy", "no-referrer"),
                O(n, "class", l = "sj-avatar-container " + t[3] + " svelte-1dfnct6")
            },
            m(e, o) {
                z(e, n, o),
                _(n, i),
                d || (u = [v(t[5].call(null, i)), I(i, "error", t[16])],
                d = !0)
            },
            p(e, [t]) {
                128 & t && X(i, "width", e[7] + "px"),
                128 & t && X(i, "height", e[7] + "px"),
                64 & t && !c(i.src, o = e[6]) && O(i, "src", o),
                1 & t && a !== (a = (e[0] ?? "") + " avatar") && O(i, "alt", a),
                4 & t && s !== (s = b(e[2]) + " svelte-1dfnct6") && O(i, "class", s),
                8 & t && l !== (l = "sj-avatar-container " + e[3] + " svelte-1dfnct6") && O(n, "class", l)
            },
            i: e,
            o: e,
            d(e) {
                e && L(n),
                d = !1,
                r(u)
            }
        }
    }
    function yi(e, t, n) {
        let i, o, r, a, {src: s} = t, {size: l="40px"} = t, {useSize: c=!0} = t, {gravatarHash: d} = t, {fallbackName: u} = t, {fallbackSrc: f} = t, {optimize: p=!0} = t, {lazyload: m=!0} = t, h = 40, g = 40, w = !1;
        function b(e) {
            return e || (d ? `https://www.gravatar.com/avatar/${d}?d=mp` : f ?? Ve)
        }
        let {class: v=""} = t
          , {outerClass: y=""} = t;
        const x = e=>{
            w || (e.target.src = f ?? Ve,
            n(4, w = !0))
        }
        ;
        return e.$$set = e=>{
            "src"in e && n(9, s = e.src),
            "size"in e && n(8, l = e.size),
            "useSize"in e && n(10, c = e.useSize),
            "gravatarHash"in e && n(11, d = e.gravatarHash),
            "fallbackName"in e && n(0, u = e.fallbackName),
            "fallbackSrc"in e && n(1, f = e.fallbackSrc),
            "optimize"in e && n(12, p = e.optimize),
            "lazyload"in e && n(13, m = e.lazyload),
            "class"in e && n(2, v = e.class),
            "outerClass"in e && n(3, y = e.outerClass)
        }
        ,
        e.$$.update = ()=>{
            if (256 & e.$$.dirty)
                try {
                    n(8, l = parseInt(`${l}`)),
                    n(14, g = parseInt(`${l}`)),
                    h = 1.5 * l
                } catch (e) {
                    console.warn("Error parsing size"),
                    h = 40
                }
            512 & e.$$.dirty && n(15, i = b(s)),
            1280 & e.$$.dirty && n(7, o = c ? l : void 0),
            53248 & e.$$.dirty && n(6, r = p ? mt(i, {
                width: 1.5 * g,
                height: 1.5 * g,
                format: "webp"
            }) : i),
            8192 & e.$$.dirty && n(5, a = m ? wi : ()=>{}
            )
        }
        ,
        [u, f, v, y, w, a, r, o, l, s, c, d, p, m, g, i, x]
    }
    class xi extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, yi, vi, s, {
                src: 9,
                size: 8,
                useSize: 10,
                gravatarHash: 11,
                fallbackName: 0,
                fallbackSrc: 1,
                optimize: 12,
                lazyload: 13,
                class: 2,
                outerClass: 3
            }, bi)
        }
    }
    function Ai(e) {
        let t, n, i, o, r;
        const s = e[2].default
          , l = p(s, e, e[1], null);
        return {
            c() {
                t = T("div"),
                l && l.c(),
                t.hidden = !0
            },
            m(a, s) {
                z(a, t, s),
                l && l.m(t, null),
                i = !0,
                o || (r = v(n = $i.call(null, t, e[0])),
                o = !0)
            },
            p(e, [t]) {
                l && l.p && (!i || 2 & t) && g(l, s, e, e[1], i ? h(s, e[1], t, null) : w(e[1]), null),
                n && a(n.update) && 1 & t && n.update.call(null, e[0])
            },
            i(e) {
                i || (Me(l, e),
                i = !0)
            },
            o(e) {
                Te(l, e),
                i = !1
            },
            d(e) {
                e && L(t),
                l && l.d(e),
                o = !1,
                r()
            }
        }
    }
    function $i(e, t="body") {
        let n;
        async function i(i) {
            if (t = i,
            "string" == typeof t) {
                if (n = document.querySelector(t),
                null === n && (await ye(),
                n = document.querySelector(t)),
                null === n)
                    throw new Error(`No element found matching css selector: "${t}"`)
            } else {
                if (!(t instanceof HTMLElement))
                    throw new TypeError(`Unknown portal target type: ${null === t ? "null" : typeof t}. Allowed types: string (CSS selector) or HTMLElement.`);
                n = t
            }
            n.appendChild(e),
            e.hidden = !1
        }
        function o() {
            e.parentNode && e.parentNode.removeChild(e)
        }
        return i(t),
        {
            update: i,
            destroy: o
        }
    }
    function ji(e, t, n) {
        let {$$slots: i={}, $$scope: o} = t
          , {target: r="body"} = t;
        return e.$$set = e=>{
            "target"in e && n(0, r = e.target),
            "$$scope"in e && n(1, o = e.$$scope)
        }
        ,
        [r, o, i]
    }
    class ki extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, ji, Ai, s, {
                target: 0
            })
        }
    }
    function Si(e, t) {
        const n = n=>{
            let i = e;
            const o = e.getRootNode();
            o instanceof ShadowRoot && o == n.target.shadowRoot || !i || i.contains(n.target) || n.defaultPrevented || t()
        }
        ;
        return document.addEventListener("click", n, !0),
        {
            destroy() {
                document.removeEventListener("click", n, !0)
            }
        }
    }
    function _i(e) {
        let t, n;
        const i = e[4].default
          , o = p(i, e, e[3], null);
        return {
            c() {
                t = T("div"),
                o && o.c()
            },
            m(i, r) {
                z(i, t, r),
                o && o.m(t, null),
                e[5](t),
                n = !0
            },
            p(e, [t]) {
                o && o.p && (!n || 8 & t) && g(o, i, e, e[3], n ? h(i, e[3], t, null) : w(e[3]), null)
            },
            i(e) {
                n || (Me(o, e),
                n = !0)
            },
            o(e) {
                Te(o, e),
                n = !1
            },
            d(n) {
                n && L(t),
                o && o.d(n),
                e[5](null)
            }
        }
    }
    function Ei(e, t, n) {
        let {$$slots: i={}, $$scope: o} = t;
        var r = this && this.__awaiter || function(e, t, n, i) {
            function o(e) {
                return e instanceof n ? e : new n((function(t) {
                    t(e)
                }
                ))
            }
            return new (n || (n = Promise))((function(n, r) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : o(e.value).then(a, s)
                }
                l((i = i.apply(e, t || [])).next())
            }
            ))
        }
        ;
        let {styles: a=[]} = t, {enabled: s} = t, l;
        function c(e) {
            me[e ? "unshift" : "push"]((()=>{
                l = e,
                n(0, l)
            }
            ))
        }
        return ce((()=>r(void 0, void 0, void 0, (function*() {
            if (yield ye(),
            !s)
                return;
            const e = l.attachShadow({
                mode: "open"
            });
            if (e instanceof ShadowRoot)
                for (const t of a) {
                    const n = t.cloneNode(!0);
                    e.appendChild(n)
                }
            e.appendChild(l.firstChild),
            yield ye()
        }
        )))),
        e.$$set = e=>{
            "styles"in e && n(1, a = e.styles),
            "enabled"in e && n(2, s = e.enabled),
            "$$scope"in e && n(3, o = e.$$scope)
        }
        ,
        [l, a, s, o, i, c]
    }
    class Ci extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, Ei, _i, s, {
                styles: 1,
                enabled: 2
            })
        }
    }
    const Pi = e=>({
        styles: 1 & e,
        enabled: 4 & e
    })
      , Ri = e=>({
        styles: e[0],
        enabled: e[2]
    });
    function zi(e) {
        let t, n, i;
        const o = e[4].default
          , r = p(o, e, e[3], Ri);
        return {
            c() {
                t = T("div"),
                n = N(),
                r && r.c()
            },
            m(o, a) {
                z(o, t, a),
                e[5](t),
                z(o, n, a),
                r && r.m(o, a),
                i = !0
            },
            p(e, [t]) {
                r && r.p && (!i || 13 & t) && g(r, o, e, e[3], i ? h(o, e[3], t, Pi) : w(e[3]), Ri)
            },
            i(e) {
                i || (Me(r, e),
                i = !0)
            },
            o(e) {
                Te(r, e),
                i = !1
            },
            d(i) {
                i && L(t),
                e[5](null),
                i && L(n),
                r && r.d(i)
            }
        }
    }
    function Li(e, t, n) {
        let {$$slots: i={}, $$scope: o} = t;
        var r = this && this.__awaiter || function(e, t, n, i) {
            function o(e) {
                return e instanceof n ? e : new n((function(t) {
                    t(e)
                }
                ))
            }
            return new (n || (n = Promise))((function(n, r) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : o(e.value).then(a, s)
                }
                l((i = i.apply(e, t || [])).next())
            }
            ))
        }
        ;
        let a = [], s, l = !1;
        function c(e) {
            me[e ? "unshift" : "push"]((()=>{
                s = e,
                n(1, s)
            }
            ))
        }
        return ce((()=>r(void 0, void 0, void 0, (function*() {
            const e = s.getRootNode();
            if (e) {
                if (e instanceof ShadowRoot) {
                    const t = e.querySelectorAll("style");
                    n(0, a = Array.from(t)),
                    n(2, l = !0)
                }
                s.remove()
            }
        }
        )))),
        e.$$set = e=>{
            "$$scope"in e && n(3, o = e.$$scope)
        }
        ,
        [a, s, l, o, i, c]
    }
    class Mi extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, Li, zi, s, {})
        }
    }
    var Ti = e=>"number" == typeof e && e === Number(e) && Number.isFinite(e);
    function Bi(e) {
        E(e, "svelte-g0yi58", "svg.svelte-g0yi58{width:var(--width);height:var(--height);margin-right:2px;flex:none;overflow:visible}")
    }
    function Ui(e) {
        let t, n, i, o, r, a, s, l;
        return {
            c() {
                t = B("defs"),
                n = B("linearGradient"),
                i = B("stop"),
                o = B("stop"),
                a = B("stop"),
                O(i, "offset", "0%"),
                X(i, "stop-color", e[5]),
                X(i, "stop-opacity", "1"),
                O(o, "offset", r = 100 * e[0] + "%"),
                X(o, "stop-color", e[5]),
                X(o, "stop-opacity", "1"),
                O(a, "offset", s = 100 * e[0] + "%"),
                X(a, "stop-color", e[6]),
                X(a, "stop-opacity", "1"),
                O(n, "id", l = "grad-" + e[1]),
                O(n, "x1", "0%"),
                O(n, "y1", "0%"),
                O(n, "x2", "100%"),
                O(n, "y2", "0%")
            },
            m(e, r) {
                z(e, t, r),
                _(t, n),
                _(n, i),
                _(n, o),
                _(n, a)
            },
            p(e, t) {
                1 & t && r !== (r = 100 * e[0] + "%") && O(o, "offset", r),
                1 & t && s !== (s = 100 * e[0] + "%") && O(a, "offset", s),
                2 & t && l !== (l = "grad-" + e[1]) && O(n, "id", l)
            },
            d(e) {
                e && L(t)
            }
        }
    }
    function Ni(t) {
        let n, i, o, r, a = 1 !== t[0] && 0 !== t[0] && Ui(t);
        return {
            c() {
                n = B("svg"),
                a && a.c(),
                i = B("path"),
                O(i, "fill", o = 1 === t[0] ? t[5] : 0 === t[0] ? t[6] : `url(#grad-${t[1]})`),
                O(i, "d", "M187.183 57.47a9.955 9.955 0\n    00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972\n    9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578\n    6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0\n    003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0\n    005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979\n    9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0\n    002.925-10.604zm0 0"),
                O(n, "xmlns", "http://www.w3.org/2000/svg"),
                O(n, "width", "249.748"),
                O(n, "viewBox", "0 -10 187.673 179.503"),
                O(n, "height", "239.338"),
                X(n, "--width", t[4]),
                X(n, "--height", t[7]),
                O(n, "stroke", t[3]),
                O(n, "stroke-width", r = t[2] + "px"),
                O(n, "stroke-linejoin", "round"),
                O(n, "stroke-linecap", "round"),
                O(n, "vector-effect", "non-scaling-stroke"),
                O(n, "class", "svelte-g0yi58")
            },
            m(e, t) {
                z(e, n, t),
                a && a.m(n, null),
                _(n, i)
            },
            p(e, [t]) {
                1 !== e[0] && 0 !== e[0] ? a ? a.p(e, t) : (a = Ui(e),
                a.c(),
                a.m(n, i)) : a && (a.d(1),
                a = null),
                3 & t && o !== (o = 1 === e[0] ? e[5] : 0 === e[0] ? e[6] : `url(#grad-${e[1]})`) && O(i, "fill", o),
                16 & t && X(n, "--width", e[4]),
                8 & t && O(n, "stroke", e[3]),
                4 & t && r !== (r = e[2] + "px") && O(n, "stroke-width", r)
            },
            i: e,
            o: e,
            d(e) {
                e && L(n),
                a && a.d()
            }
        }
    }
    function Di(e, t, n) {
        let {full: i} = t
          , {id: o} = t
          , {config: r={}} = t;
        const a = r.fullColor || "#ffcf00"
          , s = r.emptyColor || "#7f7f7f";
        let {strokeWidth: l=0} = t
          , {stroke: c="currentColor"} = t
          , d = r.size && Ti(r.size) ? r.size : 20;
        d += "px";
        const u = d;
        return e.$$set = e=>{
            "full"in e && n(0, i = e.full),
            "id"in e && n(1, o = e.id),
            "config"in e && n(8, r = e.config),
            "strokeWidth"in e && n(2, l = e.strokeWidth),
            "stroke"in e && n(3, c = e.stroke)
        }
        ,
        [i, o, l, c, d, a, s, u, r]
    }
    class Ii extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, Di, Ni, s, {
                full: 0,
                id: 1,
                config: 8,
                strokeWidth: 2,
                stroke: 3
            }, Bi)
        }
    }
    var Wi = ()=>"_" + Math.random().toString(36).substr(2, 9);
    function Oi(e) {
        E(e, "svelte-11fw6uj", "div.svelte-11fw6uj{display:flex;gap:0.1rem}span.svelte-11fw6uj{color:#7f7f7f;line-height:1;align-self:center;margin-left:8px}")
    }
    function Hi(e, t, n) {
        const i = e.slice();
        return i[14] = t[n],
        i
    }
    function Gi(e) {
        let t, n;
        return t = new Ii({
            props: {
                id: e[0],
                full: e[14],
                config: e[3],
                stroke: e[4],
                strokeWidth: e[5]
            }
        }),
        {
            c() {
                Ie(t.$$.fragment)
            },
            m(e, i) {
                We(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                1 & n && (i.id = e[0]),
                128 & n && (i.full = e[14]),
                8 & n && (i.config = e[3]),
                16 & n && (i.stroke = e[4]),
                32 & n && (i.strokeWidth = e[5]),
                t.$set(i)
            },
            i(e) {
                n || (Me(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Te(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Oe(t, e)
            }
        }
    }
    function Ki(e) {
        let t, n;
        return {
            c() {
                t = T("span"),
                n = U(e[1]),
                X(t, "font-size", e[6] + "px"),
                O(t, "class", "svelte-11fw6uj")
            },
            m(e, i) {
                z(e, t, i),
                _(t, n)
            },
            p(e, i) {
                2 & i && Z(n, e[1]),
                64 & i && X(t, "font-size", e[6] + "px")
            },
            d(e) {
                e && L(t)
            }
        }
    }
    function Fi(e) {
        let t, n, i, o = e[7], r = [];
        for (let t = 0; t < o.length; t += 1)
            r[t] = Gi(Hi(e, o, t));
        const a = e=>Te(r[e], 1, 1, (()=>{
            r[e] = null
        }
        ));
        let s = e[3].showText && Ki(e);
        return {
            c() {
                t = T("div");
                for (let e = 0; e < r.length; e += 1)
                    r[e].c();
                n = N(),
                s && s.c(),
                O(t, "style", e[2]),
                O(t, "class", "sj-star-rating svelte-11fw6uj")
            },
            m(e, o) {
                z(e, t, o);
                for (let e = 0; e < r.length; e += 1)
                    r[e] && r[e].m(t, null);
                _(t, n),
                s && s.m(t, null),
                i = !0
            },
            p(e, [l]) {
                if (185 & l) {
                    let i;
                    for (o = e[7],
                    i = 0; i < o.length; i += 1) {
                        const a = Hi(e, o, i);
                        r[i] ? (r[i].p(a, l),
                        Me(r[i], 1)) : (r[i] = Gi(a),
                        r[i].c(),
                        Me(r[i], 1),
                        r[i].m(t, n))
                    }
                    for (ze(),
                    i = o.length; i < r.length; i += 1)
                        a(i);
                    Le()
                }
                e[3].showText ? s ? s.p(e, l) : (s = Ki(e),
                s.c(),
                s.m(t, null)) : s && (s.d(1),
                s = null),
                (!i || 4 & l) && O(t, "style", e[2])
            },
            i(e) {
                if (!i) {
                    for (let e = 0; e < o.length; e += 1)
                        Me(r[e]);
                    i = !0
                }
            },
            o(e) {
                r = r.filter(Boolean);
                for (let e = 0; e < r.length; e += 1)
                    Te(r[e]);
                i = !1
            },
            d(e) {
                e && L(t),
                M(r, e),
                s && s.d()
            }
        }
    }
    function Vi(e, t, n) {
        let i, o, r, a, s, l, c, {id: d=Wi()} = t, {rating: u} = t, {style: f=""} = t, {config: p={}} = t, {stroke: m="currentColor"} = t, {strokeWidth: h=0} = t, g = p.size && Ti(p.size) ? p.size : 20;
        return g = g / 2 < 16 ? 16 : g / 2,
        e.$$set = e=>{
            "id"in e && n(0, d = e.id),
            "rating"in e && n(1, u = e.rating),
            "style"in e && n(2, f = e.style),
            "config"in e && n(3, p = e.config),
            "stroke"in e && n(4, m = e.stroke),
            "strokeWidth"in e && n(5, h = e.strokeWidth)
        }
        ,
        e.$$.update = ()=>{
            2 & e.$$.dirty && (!Ti(u) || u < 0 || u > 5) && console.error(`Rating prop must be a number between 0 and 5. Received ${u}`),
            2 & e.$$.dirty && n(13, i = Math.floor(u)),
            8194 & e.$$.dirty && n(12, o = Math.round(100 * (u - i)) / 100),
            2 & e.$$.dirty && n(11, r = Math.floor(5 - u)),
            8192 & e.$$.dirty && n(10, a = Array(i).fill(1)),
            4096 & e.$$.dirty && n(9, s = 0 !== o ? [o] : []),
            2048 & e.$$.dirty && n(8, l = Array(r).fill(0)),
            1792 & e.$$.dirty && n(7, c = a.concat(s).concat(l))
        }
        ,
        [d, u, f, p, m, h, g, c, l, s, a, r, o, i]
    }
    class Yi extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, Vi, Fi, s, {
                id: 0,
                rating: 1,
                style: 2,
                config: 3,
                stroke: 4,
                strokeWidth: 5
            }, Oi)
        }
    }
    function Zi(e) {
        let t, n;
        return t = new Yi({
            props: {
                rating: Xi(e[0]),
                stroke: e[3],
                strokeWidth: e[4],
                config: {
                    emptyColor: e[2] == e[5] ? "rgb(229 231 235)" : "rgba(180 180 180 / 0.5)",
                    size: e[1],
                    fullColor: e[2]
                }
            }
        }),
        {
            c() {
                Ie(t.$$.fragment)
            },
            m(e, i) {
                We(t, e, i),
                n = !0
            },
            p(e, [n]) {
                const i = {};
                1 & n && (i.rating = Xi(e[0])),
                8 & n && (i.stroke = e[3]),
                16 & n && (i.strokeWidth = e[4]),
                6 & n && (i.config = {
                    emptyColor: e[2] == e[5] ? "rgb(229 231 235)" : "rgba(180 180 180 / 0.5)",
                    size: e[1],
                    fullColor: e[2]
                }),
                t.$set(i)
            },
            i(e) {
                n || (Me(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Te(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Oe(t, e)
            }
        }
    }
    function Xi(e) {
        let t = e;
        return isNaN(e) && (t = 5),
        e < 0 && (t = -e),
        e > 5 && e <= 10 ? t = e / 2 : e > 10 && (t = 5),
        t
    }
    function qi(e, t, n) {
        const i = Ze;
        let {rating: o=0} = t
          , {size: r=20} = t
          , {color: a=i} = t
          , {stroke: s="currentColor"} = t
          , {strokeWidth: l=0} = t;
        return e.$$set = e=>{
            "rating"in e && n(0, o = e.rating),
            "size"in e && n(1, r = e.size),
            "color"in e && n(2, a = e.color),
            "stroke"in e && n(3, s = e.stroke),
            "strokeWidth"in e && n(4, l = e.strokeWidth)
        }
        ,
        [o, r, a, s, l, i]
    }
    class Ji extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, qi, Zi, s, {
                rating: 0,
                size: 1,
                color: 2,
                stroke: 3,
                strokeWidth: 4
            })
        }
    }
    const Qi = [{
        title: "Text",
        id: "text"
    }, {
        title: "Video",
        id: "video"
    }, {
        title: "CSV",
        id: "csv"
    }, {
        title: "Twitter",
        id: "twitter"
    }, {
        title: "Facebook",
        id: "facebook"
    }, {
        title: "Product Hunt",
        id: "product_hunt"
    }, {
        title: "Linkedin",
        id: "linkedin"
    }, {
        title: "Reddit",
        id: "reddit"
    }, {
        title: "Capterra",
        id: "capterra"
    }, {
        title: "Trustpilot",
        id: "trustpilot"
    }, {
        title: "Shopify",
        id: "shopify"
    }, {
        title: "G2",
        id: "g2"
    }, {
        title: "Google",
        id: "google"
    }, {
        title: "Play Store",
        id: "play_store"
    }, {
        title: "App Store",
        id: "app_store"
    }, {
        title: "Slack",
        id: "slack"
    }, {
        title: "Yelp",
        id: "yelp"
    }, {
        title: "Apple Podcasts",
        id: "apple_podcasts"
    }, {
        title: "Whatsapp",
        id: "whatsapp"
    }, {
        title: "Telegram",
        id: "telegram"
    }, {
        title: "Youtube",
        id: "youtube"
    }];
    function eo(e, t=!1, n) {
        var i, o;
        const r = !!e.customer_username
          , a = !!e.customer_tagline
          , s = to(e, n);
        if (r || a) {
            const t = (null === (i = e.customer_username) || void 0 === i ? void 0 : i.startsWith("@")) ? e.customer_username : `@${e.customer_username}`;
            return "twitter" === e.integration ? e.customer_username ? t : null != s ? s : "" : "product_hunt" == e.integration ? r ? t : s : null != s ? s : ""
        }
        return t && e.integration ? `Posted on ${null === (o = Qi.find((t=>t.id == e.integration))) || void 0 === o ? void 0 : o.title}` : ""
    }
    function to(e, t) {
        if (!t)
            return e.customer_tagline;
        if (e.lang == t)
            return e.customer_tagline;
        if (e.translations) {
            const n = e.translations.find((e=>e.lang == t));
            if (n)
                return n.customer_tagline
        }
        return e.customer_tagline
    }
    function no(e, t) {
        const n = io(e);
        return e.thumbnail_url && !(null == t ? void 0 : t.animated) ? e.thumbnail_url : n ? `https://image.mux.com/${n}/${(null == t ? void 0 : t.animated) ? "animated.webp" : "thumbnail.jpg"}` : null
    }
    function io(e) {
        var t, n, i;
        if (!e.media_asset)
            return null;
        const o = null === (t = e.media_asset) || void 0 === t ? void 0 : t.metadata;
        if (!(null == o ? void 0 : o.playback_ids))
            return null;
        const r = o.playback_ids;
        return null !== (i = null === (n = r.find((e=>"public" === e.policy))) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : ""
    }
    function oo(e) {
        const t = e - 1;
        return t * t * t + 1
    }
    function ro(e, {delay: n=0, duration: i=400, easing: o=t}={}) {
        const r = +getComputedStyle(e).opacity;
        return {
            delay: n,
            duration: i,
            easing: o,
            css: e=>"opacity: " + e * r
        }
    }
    function ao(e, {delay: t=0, duration: n=400, easing: i=oo, x: o=0, y: r=0, opacity: a=0}={}) {
        const s = getComputedStyle(e)
          , l = +s.opacity
          , c = "none" === s.transform ? "" : s.transform
          , d = l * (1 - a)
          , [u,f] = y(o)
          , [p,m] = y(r);
        return {
            delay: t,
            duration: n,
            easing: i,
            css: (e,t)=>`\n\t\t\ttransform: ${c} translate(${(1 - e) * u}${f}, ${(1 - e) * p}${m});\n\t\t\topacity: ${l - d * t}`
        }
    }
    Qi.filter((e=>"csv" !== e.id && "video" !== e.id));
    const so = e=>({
        text: 8 & e
    })
      , lo = e=>({
        text: e[3]
    })
      , co = e=>({
        text: 4 & e
    })
      , uo = e=>({
        text: e[2]
    });
    function fo(e) {
        let t, n, i, o;
        const r = [mo, po]
          , a = [];
        function s(e, t) {
            return e[5] ? 0 : e[6] ? 1 : -1
        }
        return ~(t = s(e)) && (n = a[t] = r[t](e)),
        {
            c() {
                n && n.c(),
                i = D()
            },
            m(e, n) {
                ~t && a[t].m(e, n),
                z(e, i, n),
                o = !0
            },
            p(e, o) {
                let l = t;
                t = s(e),
                t === l ? ~t && a[t].p(e, o) : (n && (ze(),
                Te(a[l], 1, 1, (()=>{
                    a[l] = null
                }
                )),
                Le()),
                ~t ? (n = a[t],
                n ? n.p(e, o) : (n = a[t] = r[t](e),
                n.c()),
                Me(n, 1),
                n.m(i.parentNode, i)) : n = null)
            },
            i(e) {
                o || (Me(n),
                o = !0)
            },
            o(e) {
                Te(n),
                o = !1
            },
            d(e) {
                ~t && a[t].d(e),
                e && L(i)
            }
        }
    }
    function po(e) {
        let t, n, i, o;
        const r = e[10].label
          , a = p(r, e, e[9], lo)
          , s = a || ho(e);
        return {
            c() {
                t = T("button"),
                s && s.c(),
                O(t, "class", "border-none"),
                X(t, "opacity", "0.8"),
                X(t, "transform", "scale(0.95)"),
                X(t, "margin-top", "1px"),
                X(t, "transform-origin", "top left")
            },
            m(r, a) {
                z(r, t, a),
                s && s.m(t, null),
                n = !0,
                i || (o = I(t, "click", W(e[8])),
                i = !0)
            },
            p(e, t) {
                a ? a.p && (!n || 520 & t) && g(a, r, e, e[9], n ? h(r, e[9], t, so) : w(e[9]), lo) : s && s.p && (!n || 8 & t) && s.p(e, n ? t : -1)
            },
            i(e) {
                n || (Me(s, e),
                n = !0)
            },
            o(e) {
                Te(s, e),
                n = !1
            },
            d(e) {
                e && L(t),
                s && s.d(e),
                i = !1,
                o()
            }
        }
    }
    function mo(e) {
        let t, n, i, o;
        const r = e[10].label
          , a = p(r, e, e[9], uo)
          , s = a || go(e);
        return {
            c() {
                t = T("button"),
                s && s.c(),
                O(t, "class", "border-none"),
                X(t, "opacity", "0.8"),
                X(t, "transform", "scale(0.95)"),
                X(t, "margin-top", "1px"),
                X(t, "transform-origin", "top left")
            },
            m(r, a) {
                z(r, t, a),
                s && s.m(t, null),
                n = !0,
                i || (o = I(t, "click", W(e[7])),
                i = !0)
            },
            p(e, t) {
                a ? a.p && (!n || 516 & t) && g(a, r, e, e[9], n ? h(r, e[9], t, co) : w(e[9]), uo) : s && s.p && (!n || 4 & t) && s.p(e, n ? t : -1)
            },
            i(e) {
                n || (Me(s, e),
                n = !0)
            },
            o(e) {
                Te(s, e),
                n = !1
            },
            d(e) {
                e && L(t),
                s && s.d(e),
                i = !1,
                o()
            }
        }
    }
    function ho(e) {
        let t, n;
        return {
            c() {
                t = T("span"),
                n = U(e[3])
            },
            m(e, i) {
                z(e, t, i),
                _(t, n)
            },
            p(e, t) {
                8 & t && Z(n, e[3])
            },
            d(e) {
                e && L(t)
            }
        }
    }
    function go(e) {
        let t, n;
        return {
            c() {
                t = T("span"),
                n = U(e[2])
            },
            m(e, i) {
                z(e, t, i),
                _(t, n)
            },
            p(e, t) {
                4 & t && Z(n, e[2])
            },
            d(e) {
                e && L(t)
            }
        }
    }
    function wo(e) {
        let t, n, i, o;
        const r = e[10].default
          , a = p(r, e, e[9], null);
        let s = e[1] && fo(e);
        return {
            c() {
                t = T("div"),
                n = T("div"),
                a && a.c(),
                i = N(),
                s && s.c(),
                X(n, "overflow", "hidden"),
                X(n, "display", "-webkit-box"),
                X(n, "-webkit-line-clamp", e[1] ? `${e[0]}` : "10000"),
                X(n, "-webkit-box-orient", "vertical"),
                X(n, "transition", "-webkit-line-clamp 0.5s ease-out")
            },
            m(r, l) {
                z(r, t, l),
                _(t, n),
                a && a.m(n, null),
                e[11](n),
                _(t, i),
                s && s.m(t, null),
                o = !0
            },
            p(e, [i]) {
                a && a.p && (!o || 512 & i) && g(a, r, e, e[9], o ? h(r, e[9], i, null) : w(e[9]), null),
                (!o || 3 & i) && X(n, "-webkit-line-clamp", e[1] ? `${e[0]}` : "10000"),
                e[1] ? s ? (s.p(e, i),
                2 & i && Me(s, 1)) : (s = fo(e),
                s.c(),
                Me(s, 1),
                s.m(t, null)) : s && (ze(),
                Te(s, 1, 1, (()=>{
                    s = null
                }
                )),
                Le())
            },
            i(e) {
                o || (Me(a, e),
                Me(s),
                o = !0)
            },
            o(e) {
                Te(a, e),
                Te(s),
                o = !1
            },
            d(n) {
                n && L(t),
                a && a.d(n),
                e[11](null),
                s && s.d()
            }
        }
    }
    function bo(e, t, n) {
        let {$$slots: i={}, $$scope: o} = t;
        var r = this && this.__awaiter || function(e, t, n, i) {
            function o(e) {
                return e instanceof n ? e : new n((function(t) {
                    t(e)
                }
                ))
            }
            return new (n || (n = Promise))((function(n, r) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : o(e.value).then(a, s)
                }
                l((i = i.apply(e, t || [])).next())
            }
            ))
        }
        ;
        let {maxLines: a=10} = t
          , {enable: s=!0} = t
          , {text: l="Read more"} = t
          , {readLessText: c="Read less"} = t;
        const d = de();
        let u = a, f, p = !1;
        function m() {
            return r(this, void 0, void 0, (function*() {
                yield ye();
                const {scrollHeight: e, clientHeight: t} = f;
                if (0 == t)
                    return setTimeout(m, 100);
                n(5, p = e > t),
                d("calculated")
            }
            ))
        }
        ce((()=>{
            m()
        }
        ));
        let h = !1;
        function g() {
            return r(this, void 0, void 0, (function*() {
                n(0, a = 1e4),
                yield ye(),
                yield m(),
                yield ye(),
                d("readMore"),
                n(6, h = !0)
            }
            ))
        }
        function w() {
            return r(this, void 0, void 0, (function*() {
                n(0, a = u),
                yield ye(),
                yield m(),
                yield ye(),
                d("readMore"),
                n(6, h = !1)
            }
            ))
        }
        function b(e) {
            me[e ? "unshift" : "push"]((()=>{
                f = e,
                n(4, f)
            }
            ))
        }
        return e.$$set = e=>{
            "maxLines"in e && n(0, a = e.maxLines),
            "enable"in e && n(1, s = e.enable),
            "text"in e && n(2, l = e.text),
            "readLessText"in e && n(3, c = e.readLessText),
            "$$scope"in e && n(9, o = e.$$scope)
        }
        ,
        [a, s, l, c, f, p, h, g, w, o, i, b]
    }
    class vo extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, bo, wo, s, {
                maxLines: 0,
                enable: 1,
                text: 2,
                readLessText: 3
            })
        }
    }
    function yo(e) {
        let t;
        const n = e[3].default
          , i = p(n, e, e[2], null);
        return {
            c() {
                i && i.c()
            },
            m(e, n) {
                i && i.m(e, n),
                t = !0
            },
            p(e, o) {
                i && i.p && (!t || 4 & o) && g(i, n, e, e[2], t ? h(n, e[2], o, null) : w(e[2]), null)
            },
            i(e) {
                t || (Me(i, e),
                t = !0)
            },
            o(e) {
                Te(i, e),
                t = !1
            },
            d(e) {
                i && i.d(e)
            }
        }
    }
    function xo(e) {
        let t = e[0], n, i, o = e[0] && Ao(e);
        return {
            c() {
                o && o.c(),
                n = D()
            },
            m(e, t) {
                o && o.m(e, t),
                z(e, n, t),
                i = !0
            },
            p(e, i) {
                e[0] ? t ? s(t, e[0]) ? (o.d(1),
                o = Ao(e),
                t = e[0],
                o.c(),
                o.m(n.parentNode, n)) : o.p(e, i) : (o = Ao(e),
                t = e[0],
                o.c(),
                o.m(n.parentNode, n)) : t && (o.d(1),
                o = null,
                t = e[0])
            },
            i(e) {
                i || (Me(o),
                i = !0)
            },
            o(e) {
                Te(o),
                i = !1
            },
            d(e) {
                e && L(n),
                o && o.d(e)
            }
        }
    }
    function Ao(e) {
        let t, i;
        const o = e[3].default
          , r = p(o, e, e[2], null);
        let a = [{
            class: e[1]
        }]
          , s = {};
        for (let e = 0; e < a.length; e += 1)
            s = n(s, a[e]);
        return {
            c() {
                t = T(e[0]),
                r && r.c(),
                V(e[0])(t, s)
            },
            m(e, n) {
                z(e, t, n),
                r && r.m(t, null),
                i = !0
            },
            p(e, n) {
                r && r.p && (!i || 4 & n) && g(r, o, e, e[2], i ? h(o, e[2], n, null) : w(e[2]), null),
                V(e[0])(t, s = De(a, [(!i || 2 & n) && {
                    class: e[1]
                }]))
            },
            i(e) {
                i || (Me(r, e),
                i = !0)
            },
            o(e) {
                Te(r, e),
                i = !1
            },
            d(e) {
                e && L(t),
                r && r.d(e)
            }
        }
    }
    function $o(e) {
        let t, n, i, o;
        const r = [xo, yo]
          , a = [];
        function s(e, t) {
            return e[0] ? 0 : 1
        }
        return t = s(e),
        n = a[t] = r[t](e),
        {
            c() {
                n.c(),
                i = D()
            },
            m(e, n) {
                a[t].m(e, n),
                z(e, i, n),
                o = !0
            },
            p(e, [o]) {
                let l = t;
                t = s(e),
                t === l ? a[t].p(e, o) : (ze(),
                Te(a[l], 1, 1, (()=>{
                    a[l] = null
                }
                )),
                Le(),
                n = a[t],
                n ? n.p(e, o) : (n = a[t] = r[t](e),
                n.c()),
                Me(n, 1),
                n.m(i.parentNode, i))
            },
            i(e) {
                o || (Me(n),
                o = !0)
            },
            o(e) {
                Te(n),
                o = !1
            },
            d(e) {
                a[t].d(e),
                e && L(i)
            }
        }
    }
    function jo(e, t, n) {
        let {$$slots: i={}, $$scope: o} = t
          , {tag: r=null} = t
          , {class: a=""} = t;
        return e.$$set = e=>{
            "tag"in e && n(0, r = e.tag),
            "class"in e && n(1, a = e.class),
            "$$scope"in e && n(2, o = e.$$scope)
        }
        ,
        [r, a, o, i]
    }
    class ko extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, jo, $o, s, {
                tag: 0,
                class: 1
            })
        }
    }
    function So(e) {
        E(e, "svelte-15z69jy", ".aspect-container.svelte-15z69jy{width:var(--aspect-width);height:var(--aspect-height);padding-top:var(--aspect-padding-top);padding-left:var(--aspect-padding-left);position:relative}.aspect-content.svelte-15z69jy{position:absolute;top:0;left:0;bottom:0;right:0}")
    }
    function _o(e) {
        let t;
        const n = e[9].default
          , i = p(n, e, e[10], null);
        return {
            c() {
                i && i.c()
            },
            m(e, n) {
                i && i.m(e, n),
                t = !0
            },
            p(e, o) {
                i && i.p && (!t || 1024 & o) && g(i, n, e, e[10], t ? h(n, e[10], o, null) : w(e[10]), null)
            },
            i(e) {
                t || (Me(i, e),
                t = !0)
            },
            o(e) {
                Te(i, e),
                t = !1
            },
            d(e) {
                i && i.d(e)
            }
        }
    }
    function Eo(e) {
        let t, n, i;
        return t = new ko({
            props: {
                $$slots: {
                    default: [Co]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                n = T("div"),
                Ie(t.$$.fragment),
                X(n, "display", "contents"),
                X(n, "--aspect-padding-top", e[5]),
                X(n, "--aspect-padding-left", e[4]),
                X(n, "--aspect-width", e[3]),
                X(n, "--aspect-height", e[2])
            },
            m(e, o) {
                z(e, n, o),
                We(t, n, null),
                i = !0
            },
            p(e, i) {
                32 & i && X(n, "--aspect-padding-top", e[5]),
                16 & i && X(n, "--aspect-padding-left", e[4]),
                8 & i && X(n, "--aspect-width", e[3]),
                4 & i && X(n, "--aspect-height", e[2]);
                const o = {};
                1026 & i && (o.$$scope = {
                    dirty: i,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                i || (Me(t.$$.fragment, e),
                i = !0)
            },
            o(e) {
                Te(t.$$.fragment, e),
                i = !1
            },
            d(e) {
                e && t && L(n),
                Oe(t, e)
            }
        }
    }
    function Co(e) {
        let t, n, i, o;
        const r = e[9].default
          , a = p(r, e, e[10], null);
        return {
            c() {
                t = T("div"),
                n = T("div"),
                a && a.c(),
                O(n, "class", i = "aspect-content " + e[1] + " svelte-15z69jy"),
                O(t, "class", "aspect-container svelte-15z69jy")
            },
            m(e, i) {
                z(e, t, i),
                _(t, n),
                a && a.m(n, null),
                o = !0
            },
            p(e, t) {
                a && a.p && (!o || 1024 & t) && g(a, r, e, e[10], o ? h(r, e[10], t, null) : w(e[10]), null),
                (!o || 2 & t && i !== (i = "aspect-content " + e[1] + " svelte-15z69jy")) && O(n, "class", i)
            },
            i(e) {
                o || (Me(a, e),
                o = !0)
            },
            o(e) {
                Te(a, e),
                o = !1
            },
            d(e) {
                e && L(t),
                a && a.d(e)
            }
        }
    }
    function Po(e) {
        let t, n, i, o;
        const r = [Eo, _o]
          , a = [];
        function s(e, t) {
            return e[0] ? 0 : 1
        }
        return t = s(e),
        n = a[t] = r[t](e),
        {
            c() {
                n.c(),
                i = D()
            },
            m(e, n) {
                a[t].m(e, n),
                z(e, i, n),
                o = !0
            },
            p(e, [o]) {
                let l = t;
                t = s(e),
                t === l ? a[t].p(e, o) : (ze(),
                Te(a[l], 1, 1, (()=>{
                    a[l] = null
                }
                )),
                Le(),
                n = a[t],
                n ? n.p(e, o) : (n = a[t] = r[t](e),
                n.c()),
                Me(n, 1),
                n.m(i.parentNode, i))
            },
            i(e) {
                o || (Me(n),
                o = !0)
            },
            o(e) {
                Te(n),
                o = !1
            },
            d(e) {
                a[t].d(e),
                e && L(i)
            }
        }
    }
    function Ro(e, t, n) {
        let i, o, r, a, s, {$$slots: l={}, $$scope: c} = t, {ratio: d=16 / 9} = t, {enabled: u=!0} = t, {useWidth: f=!0} = t, {class: p=""} = t;
        return e.$$set = e=>{
            "ratio"in e && n(6, d = e.ratio),
            "enabled"in e && n(0, u = e.enabled),
            "useWidth"in e && n(7, f = e.useWidth),
            "class"in e && n(1, p = e.class),
            "$$scope"in e && n(10, c = e.$$scope)
        }
        ,
        e.$$.update = ()=>{
            64 & e.$$.dirty && n(8, i = 1 / d * 100),
            384 & e.$$.dirty && n(5, o = f ? `${i}%` : ""),
            384 & e.$$.dirty && n(4, r = f ? "" : `${i}%`),
            128 & e.$$.dirty && n(3, a = f ? "100%" : ""),
            128 & e.$$.dirty && n(2, s = f ? "" : "100%")
        }
        ,
        [u, p, s, a, r, o, d, f, i, l, c]
    }
    class zo extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, Ro, Po, s, {
                ratio: 6,
                enabled: 0,
                useWidth: 7,
                class: 1
            }, So)
        }
    }
    function Lo(e) {
        E(e, "svelte-ahd6o7", ".lds-ring.svelte-ahd6o7.svelte-ahd6o7{display:inline-block;position:relative;width:var(--lds-size);height:var(--lds-size)}.lds-ring.svelte-ahd6o7 div.svelte-ahd6o7{box-sizing:border-box;display:block;position:absolute;width:var(--lds-size);height:var(--lds-size);border:2px solid var(--lds-color);border-radius:50%;animation:svelte-ahd6o7-lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:var(--lds-color) transparent transparent transparent}.lds-ring.svelte-ahd6o7 div.svelte-ahd6o7:nth-child(1){animation-delay:-0.45s}.lds-ring.svelte-ahd6o7 div.svelte-ahd6o7:nth-child(2){animation-delay:-0.3s}.lds-ring.svelte-ahd6o7 div.svelte-ahd6o7:nth-child(3){animation-delay:-0.15s}@keyframes svelte-ahd6o7-lds-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}")
    }
    function Mo(t) {
        let n, i, o, r, a, s, l, c, d;
        return {
            c() {
                n = T("div"),
                i = T("div"),
                o = N(),
                r = T("div"),
                a = N(),
                s = T("div"),
                l = N(),
                c = T("div"),
                O(i, "class", "svelte-ahd6o7"),
                O(r, "class", "svelte-ahd6o7"),
                O(s, "class", "svelte-ahd6o7"),
                O(c, "class", "svelte-ahd6o7"),
                X(n, "opacity", t[2]),
                X(n, "--lds-color", t[1] ?? "currentColor"),
                X(n, "--lds-size", t[0]),
                O(n, "class", d = "lds-ring " + t[3] + " svelte-ahd6o7")
            },
            m(e, t) {
                z(e, n, t),
                _(n, i),
                _(n, o),
                _(n, r),
                _(n, a),
                _(n, s),
                _(n, l),
                _(n, c)
            },
            p(e, [t]) {
                4 & t && X(n, "opacity", e[2]),
                2 & t && X(n, "--lds-color", e[1] ?? "currentColor"),
                1 & t && X(n, "--lds-size", e[0]),
                8 & t && d !== (d = "lds-ring " + e[3] + " svelte-ahd6o7") && O(n, "class", d)
            },
            i: e,
            o: e,
            d(e) {
                e && L(n)
            }
        }
    }
    function To(e, t, n) {
        let {size: i="48px"} = t
          , {color: o=null} = t
          , {opacity: r=1} = t
          , {class: a=""} = t;
        return e.$$set = e=>{
            "size"in e && n(0, i = e.size),
            "color"in e && n(1, o = e.color),
            "opacity"in e && n(2, r = e.opacity),
            "class"in e && n(3, a = e.class)
        }
        ,
        [i, o, r, a]
    }
    class Bo extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, To, Mo, s, {
                size: 0,
                color: 1,
                opacity: 2,
                class: 3
            }, Lo)
        }
    }
    function Uo(e) {
        var t, n;
        return !!(null === (n = null === (t = e.media) || void 0 === t ? void 0 : t[0]) || void 0 === n ? void 0 : n.external)
    }
    function No(e) {
        var t, n, i, o, r;
        if ("video" != (null == e ? void 0 : e.type))
            return;
        if ("video" == (null === (n = null === (t = e.media) || void 0 === t ? void 0 : t[0]) || void 0 === n ? void 0 : n.type)) {
            const t = null !== (i = e.media[0].width) && void 0 !== i ? i : 16
              , n = null !== (o = e.media[0].height) && void 0 !== o ? o : 9;
            return t / n
        }
        const a = null === (r = e.media_asset) || void 0 === r ? void 0 : r.metadata;
        if (!a)
            return 4 / 3;
        const s = a.aspect_ratio;
        if (!s)
            return 4 / 3;
        const [l,c] = s.split(":").map((e=>parseInt(e)));
        return l / c
    }
    function Do() {
        try {
            if (window.Hls)
                return window.Hls;
            const e = "https://cdn.jsdelivr.net/npm/hls.js@1"
              , t = document.querySelector(`script[src="${e}"]`);
            if (t)
                return "true" === t.getAttribute("data-loaded") ? Promise.resolve(window.Hls) : new Promise(((e,n)=>{
                    t.addEventListener("load", (()=>{
                        e(window.Hls),
                        t.setAttribute("data-loaded", "true")
                    }
                    )),
                    t.addEventListener("error", (()=>{
                        n("load error")
                    }
                    ))
                }
                ));
            const n = document.createElement("script");
            return n.type = "text/javascript",
            document.head.appendChild(n),
            new Promise(((t,i)=>{
                n.onload = ()=>{
                    t(window.Hls),
                    n.setAttribute("data-loaded", "true")
                }
                ,
                n.onerror = ()=>{
                    i("load error")
                }
                ,
                n.src = e
            }
            ))
        } catch (e) {
            throw e
        }
    }
    async function Io(e, t, n) {
        var i, o;
        if ("undefined" == typeof window)
            return;
        if (null === (i = window.location.href) || void 0 === i ? void 0 : i.includes("preview=true"))
            return;
        await Wo.loadScript("https://src.litix.io/core/4/mux.js");
        const r = window.mux.utils.now();
        window.mux.monitor(e, {
            debug: !1,
            data: {
                env_key: "ur7ktq7kbsjgmh3ppg0vuu2vk",
                player_name: n.player,
                player_init_time: r,
                video_id: null === (o = null == t ? void 0 : t.media_asset) || void 0 === o ? void 0 : o.id,
                video_title: `Testimonial by ${null == t ? void 0 : t.customer_name}`,
                custom_1: t.id,
                custom_2: n.widgetId
            }
        })
    }
    class Wo {
        static async loadScript(e) {
            if (!this.scripts.has(e)) {
                let t = document.querySelector(`script[src="${e}"]`);
                if (!t) {
                    const n = new Promise(((n,i)=>{
                        t = document.createElement("script"),
                        t.src = e,
                        t.async = !0,
                        t.onload = ()=>n(t),
                        t.onerror = i,
                        document.head.appendChild(t)
                    }
                    ));
                    this.scripts.set(e, n)
                }
            }
            return this.scripts.get(e)
        }
    }
    Wo.scripts = new Map;
    const Oo = e=>({
        loading: 4096 & e[0],
        playing: 2048 & e[0]
    })
      , Ho = e=>({
        class: "h-full w-full",
        loading: e[12],
        togglePlay: e[5],
        playing: e[11]
    });
    function Go(e) {
        let t, n = e[16](), i, o = n && Ko(e);
        return {
            c() {
                t = T("video"),
                o && o.c(),
                t.playsInline = !0,
                O(t, "disablepictureinpicture", !0),
                O(t, "preload", "metadata"),
                O(t, "class", i = "relative h-full bg-black w-full object-cover " + e[6])
            },
            m(n, i) {
                z(n, t, i),
                o && o.m(t, null),
                e[27](t)
            },
            p(e, r) {
                n && o.p(e, r),
                64 & r[0] && i !== (i = "relative h-full bg-black w-full object-cover " + e[6]) && O(t, "class", i)
            },
            d(n) {
                n && L(t),
                o && o.d(),
                e[27](null)
            }
        }
    }
    function Ko(t) {
        let n, i;
        return {
            c() {
                n = T("track"),
                O(n, "kind", "captions"),
                c(n.src, i = t[16]()) || O(n, "src", i),
                n.default = !0
            },
            m(e, t) {
                z(e, n, t)
            },
            p: e,
            d(e) {
                e && L(n)
            }
        }
    }
    function Fo(e) {
        let t, n, i, o, r, a, s;
        return {
            c() {
                t = T("div"),
                n = T("img"),
                c(n.src, i = mt(e[14], {
                    width: e[2] ? 400 : e[3],
                    format: "webp"
                })) || O(n, "src", i),
                O(n, "class", "h-full w-full object-cover"),
                O(n, "alt", ""),
                O(t, "class", "absolute inset-0 bg-black rounded-none overflow-hidden")
            },
            m(e, i) {
                z(e, t, i),
                _(t, n),
                r = !0,
                a || (s = v(wi.call(null, n)),
                a = !0)
            },
            p(e, t) {
                (!r || 12 & t[0] && !c(n.src, i = mt(e[14], {
                    width: e[2] ? 400 : e[3],
                    format: "webp"
                }))) && O(n, "src", i)
            },
            i(e) {
                r || (e && xe((()=>{
                    r && (o || (o = Ne(t, ro, {
                        duration: 200
                    }, !0)),
                    o.run(1))
                }
                )),
                r = !0)
            },
            o(e) {
                e && (o || (o = Ne(t, ro, {
                    duration: 200
                }, !1)),
                o.run(0)),
                r = !1
            },
            d(e) {
                e && L(t),
                e && o && o.end(),
                a = !1,
                s()
            }
        }
    }
    function Vo(e) {
        let t, n, i, o;
        return n = new Bo({
            props: {
                class: "text-white"
            }
        }),
        {
            c() {
                t = T("div"),
                Ie(n.$$.fragment),
                O(t, "class", "pointer-events-none absolute inset-0 flex flex-col items-center justify-center")
            },
            m(e, i) {
                z(e, t, i),
                We(n, t, null),
                o = !0
            },
            i(e) {
                o || (Me(n.$$.fragment, e),
                e && xe((()=>{
                    o && (i || (i = Ne(t, ro, {
                        duration: 200
                    }, !0)),
                    i.run(1))
                }
                )),
                o = !0)
            },
            o(e) {
                Te(n.$$.fragment, e),
                e && (i || (i = Ne(t, ro, {
                    duration: 200
                }, !1)),
                i.run(0)),
                o = !1
            },
            d(e) {
                e && L(t),
                Oe(n),
                e && i && i.end()
            }
        }
    }
    function Yo(e) {
        let t, n, i, o, r, a;
        const s = e[26].controls
          , l = p(s, e, e[30], Ho)
          , c = l || qo(e);
        return {
            c() {
                t = T("div"),
                i = N(),
                o = T("div"),
                c && c.c(),
                O(t, "class", "absolute inset-x-0 bottom-0 top-auto h-32 bg-gradient-to-t from-black/70 to-transparent"),
                O(o, "class", "absolute inset-x-0 inset-y-0")
            },
            m(e, n) {
                z(e, t, n),
                z(e, i, n),
                z(e, o, n),
                c && c.m(o, null),
                a = !0
            },
            p(e, t) {
                l ? l.p && (!a || 1073747968 & t[0]) && g(l, s, e, e[30], a ? h(s, e[30], t, Oo) : w(e[30]), Ho) : c && c.p && (!a || 2050 & t[0]) && c.p(e, a ? t : [-1, -1])
            },
            i(e) {
                a || (e && xe((()=>{
                    a && (n || (n = Ne(t, ro, {
                        duration: 200
                    }, !0)),
                    n.run(1))
                }
                )),
                Me(c, e),
                e && xe((()=>{
                    a && (r || (r = Ne(o, ro, {
                        duration: 200
                    }, !0)),
                    r.run(1))
                }
                )),
                a = !0)
            },
            o(e) {
                e && (n || (n = Ne(t, ro, {
                    duration: 200
                }, !1)),
                n.run(0)),
                Te(c, e),
                e && (r || (r = Ne(o, ro, {
                    duration: 200
                }, !1)),
                r.run(0)),
                a = !1
            },
            d(e) {
                e && L(t),
                e && n && n.end(),
                e && L(i),
                e && L(o),
                c && c.d(e),
                e && r && r.end()
            }
        }
    }
    function Zo(e) {
        let t, n;
        return t = new vt({
            props: {
                data: kt,
                fill: "currentColor",
                size: e[1]
            }
        }),
        {
            c() {
                Ie(t.$$.fragment)
            },
            m(e, i) {
                We(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                2 & n[0] && (i.size = e[1]),
                t.$set(i)
            },
            i(e) {
                n || (Me(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Te(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Oe(t, e)
            }
        }
    }
    function Xo(e) {
        let t, n;
        return t = new vt({
            props: {
                data: $t,
                fill: "currentColor",
                size: e[1]
            }
        }),
        {
            c() {
                Ie(t.$$.fragment)
            },
            m(e, i) {
                We(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                2 & n[0] && (i.size = e[1]),
                t.$set(i)
            },
            i(e) {
                n || (Me(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Te(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Oe(t, e)
            }
        }
    }
    function qo(e) {
        let t, n, i, o, r, a, s;
        const l = [Xo, Zo]
          , c = [];
        function d(e, t) {
            return e[11] ? 0 : 1
        }
        return i = d(e),
        o = c[i] = l[i](e),
        {
            c() {
                t = T("div"),
                n = T("button"),
                o.c(),
                O(n, "class", "rounded p-1 text-white duration-200 hover:bg-white/20"),
                O(t, "class", "flex h-full flex-col items-center justify-center p-4")
            },
            m(o, l) {
                z(o, t, l),
                _(t, n),
                c[i].m(n, null),
                r = !0,
                a || (s = I(n, "click", W(e[5])),
                a = !0)
            },
            p(e, t) {
                let r = i;
                i = d(e),
                i === r ? c[i].p(e, t) : (ze(),
                Te(c[r], 1, 1, (()=>{
                    c[r] = null
                }
                )),
                Le(),
                o = c[i],
                o ? o.p(e, t) : (o = c[i] = l[i](e),
                o.c()),
                Me(o, 1),
                o.m(n, null))
            },
            i(e) {
                r || (Me(o),
                r = !0)
            },
            o(e) {
                Te(o),
                r = !1
            },
            d(e) {
                e && L(t),
                c[i].d(),
                a = !1,
                s()
            }
        }
    }
    function Jo(e) {
        let t, n, i, o, a, s, l, c, d = e[9] && Go(e), u = (!e[11] && !e[10] || e[12]) && Fo(e), f = e[12] && Vo(), p = e[13] && Yo(e);
        return {
            c() {
                t = T("div"),
                n = T("div"),
                d && d.c(),
                i = N(),
                u && u.c(),
                o = N(),
                f && f.c(),
                a = N(),
                p && p.c(),
                O(n, "class", "video-container h-full w-full"),
                O(t, "class", "relative h-full w-full")
            },
            m(r, m) {
                z(r, t, m),
                _(t, n),
                d && d.m(n, null),
                e[28](n),
                _(t, i),
                u && u.m(t, null),
                _(t, o),
                f && f.m(t, null),
                _(t, a),
                p && p.m(t, null),
                s = !0,
                l || (c = [I(t, "click", e[5]), I(t, "mouseenter", e[29]), I(t, "mouseleave", e[17]), I(t, "keydown", e[5])],
                l = !0)
            },
            p(e, i) {
                e[9] ? d ? d.p(e, i) : (d = Go(e),
                d.c(),
                d.m(n, null)) : d && (d.d(1),
                d = null),
                !e[11] && !e[10] || e[12] ? u ? (u.p(e, i),
                7168 & i[0] && Me(u, 1)) : (u = Fo(e),
                u.c(),
                Me(u, 1),
                u.m(t, o)) : u && (ze(),
                Te(u, 1, 1, (()=>{
                    u = null
                }
                )),
                Le()),
                e[12] ? f ? 4096 & i[0] && Me(f, 1) : (f = Vo(),
                f.c(),
                Me(f, 1),
                f.m(t, a)) : f && (ze(),
                Te(f, 1, 1, (()=>{
                    f = null
                }
                )),
                Le()),
                e[13] ? p ? (p.p(e, i),
                8192 & i[0] && Me(p, 1)) : (p = Yo(e),
                p.c(),
                Me(p, 1),
                p.m(t, null)) : p && (ze(),
                Te(p, 1, 1, (()=>{
                    p = null
                }
                )),
                Le())
            },
            i(e) {
                s || (Me(u),
                Me(f),
                Me(p),
                s = !0)
            },
            o(e) {
                Te(u),
                Te(f),
                Te(p),
                s = !1
            },
            d(n) {
                n && L(t),
                d && d.d(),
                e[28](null),
                u && u.d(),
                f && f.d(),
                p && p.d(),
                l = !1,
                r(c)
            }
        }
    }
    function Qo(e) {
        let t, n;
        return t = new zo({
            props: {
                ratio: e[4] ?? e[15](),
                enabled: e[0],
                $$slots: {
                    default: [Jo]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Ie(t.$$.fragment)
            },
            m(e, i) {
                We(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                16 & n[0] && (i.ratio = e[4] ?? e[15]()),
                1 & n[0] && (i.enabled = e[0]),
                1073758158 & n[0] && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(i)
            },
            i(e) {
                n || (Me(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Te(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Oe(t, e)
            }
        }
    }
    function er(e) {
        let t = "WEBVTT\n\n";
        return t += e.replace(/(\d+)\,(\d+)/g, "$1.$2").replace(/--> /g, "--\x3e "),
        t
    }
    function tr(e, t, n) {
        let {$$slots: i={}, $$scope: o} = t;
        var r = this && this.__awaiter || function(e, t, n, i) {
            function o(e) {
                return e instanceof n ? e : new n((function(t) {
                    t(e)
                }
                ))
            }
            return new (n || (n = Promise))((function(n, r) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : o(e.value).then(a, s)
                }
                l((i = i.apply(e, t || [])).next())
            }
            ))
        }
        , a, s;
        let {review: l} = t, {maintainAspectRatio: c=!0} = t, {widgetId: d} = t, {playbackButtonSize: u=32} = t, {animatedThumbnail: f=!1} = t, {thumbnailWidth: p} = t, {thumbnail: m} = t, {aspectRatio: h} = t, {player: g="widget_player"} = t, {activeSubtitle: w} = t, b, v, y = !1, x = !1;
        const A = null !== (s = null === (a = l.media_asset) || void 0 === a ? void 0 : a.metadata) && void 0 !== s ? s : {}
          , $ = null != m ? m : no(l, {
            animated: f
        });
        function j() {
            if (!A.playback_ids)
                return null;
            const e = A.playback_ids;
            return e.find((e=>"public" === e.policy)).id
        }
        function k() {
            const e = j();
            return `https://stream.mux.com/${e}.m3u8?max_resolution=720p`
        }
        function S() {
            const e = No(l);
            return e
        }
        function _() {
            var e, t, n, i, o;
            const r = null === (t = null === (e = l.media_asset) || void 0 === e ? void 0 : e.captions) || void 0 === t ? void 0 : t.srt;
            if (!r)
                return null;
            if ("undefined" == typeof window)
                return null;
            const a = er(null !== (o = null === (i = null === (n = l.media_asset) || void 0 === n ? void 0 : n.captions) || void 0 === i ? void 0 : i.srt) && void 0 !== o ? o : "")
              , s = new Blob([a],{
                type: "text/vtt"
            })
              , c = URL.createObjectURL(s);
            return c
        }
        function E() {
            return r(this, void 0, void 0, (function*() {
                if (Uo(l))
                    return;
                n(7, b.onended = ()=>n(11, C = !1), b);
                const e = k();
                if (b.canPlayType("application/vnd.apple.mpegurl")) {
                    const t = document.createElement("source");
                    t.src = e,
                    t.type = "application/x-mpegURL",
                    b.appendChild(t)
                } else {
                    const t = yield Do();
                    if (t.isSupported()) {
                        const n = new t({
                            autoStartLoad: !1
                        });
                        n.loadSource(e),
                        n.attachMedia(b),
                        R = n
                    } else
                        console.error("This is a legacy browser that doesn't support MSE");
                    yield ye()
                }
                b.addEventListener("loadedmetadata", (()=>{
                    const e = b.textTracks
                      , t = e[0];
                    t && (t.mode = "hidden",
                    t.addEventListener("cuechange", (e=>{
                        const i = t.activeCues[0];
                        n(18, w = i ? i.text : null)
                    }
                    )))
                }
                )),
                b.addEventListener("ended", (()=>{
                    n(11, C = !1),
                    n(13, W = !0)
                }
                ), !1),
                n(7, b.onplay = ()=>{
                    n(11, C = !0)
                }
                , b),
                n(7, b.onpause = ()=>{
                    n(11, C = !1),
                    n(13, W = !0)
                }
                , b),
                b.addEventListener("error", (e=>{
                    console.error(e.target.error)
                }
                )),
                Io(b, l, {
                    widgetId: d,
                    player: g
                })
            }
            ))
        }
        let C = !1, P = !1, R, z = !1;
        function L() {
            return r(this, void 0, void 0, (function*() {
                z || R && (R.startLoad(),
                z = !0,
                n(12, P = !0),
                R.on(Hls.Events.FRAG_LOADED, (()=>{
                    n(12, P = !1),
                    n(10, x = !0)
                }
                )))
            }
            ))
        }
        function M() {
            return r(this, void 0, void 0, (function*() {
                y || (n(9, y = !0),
                yield ye(),
                yield E(),
                console.log("mounted"))
            }
            ))
        }
        function T() {
            return r(this, void 0, void 0, (function*() {
                if (Uo(l))
                    return window.open(l.url, "_blank");
                yield M(),
                yield L();
                const e = document.querySelectorAll("video");
                e.forEach((e=>{
                    e !== b && e.pause()
                }
                )),
                yield b.play()
            }
            ))
        }
        function B() {
            b.pause()
        }
        function U() {
            return C
        }
        function N() {
            C ? B() : T()
        }
        function D() {
            C && n(13, W = !1)
        }
        let {class: I=""} = t
          , W = !0;
        function O(e) {
            me[e ? "unshift" : "push"]((()=>{
                b = e,
                n(7, b)
            }
            ))
        }
        function H(e) {
            me[e ? "unshift" : "push"]((()=>{
                v = e,
                n(8, v)
            }
            ))
        }
        ce((()=>{}
        ));
        const G = ()=>n(13, W = !0);
        return e.$$set = e=>{
            "review"in e && n(19, l = e.review),
            "maintainAspectRatio"in e && n(0, c = e.maintainAspectRatio),
            "widgetId"in e && n(20, d = e.widgetId),
            "playbackButtonSize"in e && n(1, u = e.playbackButtonSize),
            "animatedThumbnail"in e && n(2, f = e.animatedThumbnail),
            "thumbnailWidth"in e && n(3, p = e.thumbnailWidth),
            "thumbnail"in e && n(21, m = e.thumbnail),
            "aspectRatio"in e && n(4, h = e.aspectRatio),
            "player"in e && n(22, g = e.player),
            "activeSubtitle"in e && n(18, w = e.activeSubtitle),
            "class"in e && n(6, I = e.class),
            "$$scope"in e && n(30, o = e.$$scope)
        }
        ,
        [c, u, f, p, h, N, I, b, v, y, x, C, P, W, $, S, _, D, w, l, d, m, g, T, B, U, i, O, H, G, o]
    }
    class nr extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, tr, Qo, s, {
                review: 19,
                maintainAspectRatio: 0,
                widgetId: 20,
                playbackButtonSize: 1,
                animatedThumbnail: 2,
                thumbnailWidth: 3,
                thumbnail: 21,
                aspectRatio: 4,
                player: 22,
                activeSubtitle: 18,
                play: 23,
                pause: 24,
                isPlaying: 25,
                togglePlay: 5,
                class: 6
            }, null, [-1, -1])
        }
        get play() {
            return this.$$.ctx[23]
        }
        get pause() {
            return this.$$.ctx[24]
        }
        get isPlaying() {
            return this.$$.ctx[25]
        }
        get togglePlay() {
            return this.$$.ctx[5]
        }
    }
    function ir(e) {
        E(e, "svelte-1mc39h0", ".sj-avatars-pro-content mark{background-color:var(--clr-highlight);color:inherit}")
    }
    function or(e) {
        let t, n, i;
        return n = new Ji({
            props: {
                rating: e[0].rating,
                color: e[1].colors.rating || Ze,
                strokeWidth: e[1].colors.ratingStroke ? 12 : 0,
                stroke: e[1].colors.ratingStroke ?? "currentColor"
            }
        }),
        {
            c() {
                t = T("div"),
                Ie(n.$$.fragment),
                O(t, "class", "mb-2")
            },
            m(e, o) {
                z(e, t, o),
                We(n, t, null),
                i = !0
            },
            p(e, t) {
                const i = {};
                1 & t && (i.rating = e[0].rating),
                2 & t && (i.color = e[1].colors.rating || Ze),
                2 & t && (i.strokeWidth = e[1].colors.ratingStroke ? 12 : 0),
                2 & t && (i.stroke = e[1].colors.ratingStroke ?? "currentColor"),
                n.$set(i)
            },
            i(e) {
                i || (Me(n.$$.fragment, e),
                i = !0)
            },
            o(e) {
                Te(n.$$.fragment, e),
                i = !1
            },
            d(e) {
                e && L(t),
                Oe(n)
            }
        }
    }
    function rr(e) {
        let t, n, i;
        return n = new nr({
            props: {
                review: e[0],
                widgetId: e[2]?.id
            }
        }),
        {
            c() {
                t = T("div"),
                Ie(n.$$.fragment),
                O(t, "class", "h-full max-h-96 w-full overflow-hidden overflow-y-auto rounded mt-4")
            },
            m(e, o) {
                z(e, t, o),
                We(n, t, null),
                i = !0
            },
            p(e, t) {
                const i = {};
                1 & t && (i.review = e[0]),
                4 & t && (i.widgetId = e[2]?.id),
                n.$set(i)
            },
            i(e) {
                i || (Me(n.$$.fragment, e),
                i = !0)
            },
            o(e) {
                Te(n.$$.fragment, e),
                i = !1
            },
            d(e) {
                e && L(t),
                Oe(n)
            }
        }
    }
    function ar(e) {
        let t, n, i;
        return n = new vo({
            props: {
                maxLines: 10,
                $$slots: {
                    default: [sr]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = T("p"),
                Ie(n.$$.fragment),
                O(t, "class", "sj-avatars-pro-content h-full flex-grow overflow-y-auto whitespace-pre-line text-base")
            },
            m(e, o) {
                z(e, t, o),
                We(n, t, null),
                i = !0
            },
            p(e, t) {
                const i = {};
                17 & t && (i.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                n.$set(i)
            },
            i(e) {
                i || (Me(n.$$.fragment, e),
                i = !0)
            },
            o(e) {
                Te(n.$$.fragment, e),
                i = !1
            },
            d(e) {
                e && L(t),
                Oe(n)
            }
        }
    }
    function sr(e) {
        let t, n = e[0].html + "", i;
        return {
            c() {
                t = new J(!1),
                i = D(),
                t.a = i
            },
            m(e, o) {
                t.m(n, e, o),
                z(e, i, o)
            },
            p(e, i) {
                1 & i && n !== (n = e[0].html + "") && t.p(n)
            },
            d(e) {
                e && L(i),
                e && t.d()
            }
        }
    }
    function lr(e) {
        let t, n = eo(e[0]) + "", i;
        return {
            c() {
                t = U("/ "),
                i = U(n)
            },
            m(e, n) {
                z(e, t, n),
                z(e, i, n)
            },
            p(e, t) {
                1 & t && n !== (n = eo(e[0]) + "") && Z(i, n)
            },
            d(e) {
                e && L(t),
                e && L(i)
            }
        }
    }
    function cr(e) {
        let t, n, i, o, r, a, s = e[0].customer_name + "", l, c, d = eo(e[0]), u, f, p = e[0].rating && or(e);
        const m = [ar, rr]
          , h = [];
        function g(e, t) {
            return "text" == e[0].type ? 0 : "video" == e[0].type ? 1 : -1
        }
        ~(i = g(e)) && (o = h[i] = m[i](e));
        let w = d && lr(e);
        return {
            c() {
                t = T("div"),
                p && p.c(),
                n = N(),
                o && o.c(),
                r = N(),
                a = T("p"),
                l = U(s),
                c = N(),
                w && w.c(),
                O(a, "class", "mt-2 text-sm opacity-70"),
                O(t, "style", e[3]()),
                O(t, "class", "h-full w-full rounded-lg border bg-white p-4 shadow-2xl"),
                X(t, "color", Ye)
            },
            m(e, o) {
                z(e, t, o),
                p && p.m(t, null),
                _(t, n),
                ~i && h[i].m(t, null),
                _(t, r),
                _(t, a),
                _(a, l),
                _(a, c),
                w && w.m(a, null),
                f = !0
            },
            p(e, [c]) {
                e[0].rating ? p ? (p.p(e, c),
                1 & c && Me(p, 1)) : (p = or(e),
                p.c(),
                Me(p, 1),
                p.m(t, n)) : p && (ze(),
                Te(p, 1, 1, (()=>{
                    p = null
                }
                )),
                Le());
                let u = i;
                i = g(e),
                i === u ? ~i && h[i].p(e, c) : (o && (ze(),
                Te(h[u], 1, 1, (()=>{
                    h[u] = null
                }
                )),
                Le()),
                ~i ? (o = h[i],
                o ? o.p(e, c) : (o = h[i] = m[i](e),
                o.c()),
                Me(o, 1),
                o.m(t, r)) : o = null),
                (!f || 1 & c) && s !== (s = e[0].customer_name + "") && Z(l, s),
                1 & c && (d = eo(e[0])),
                d ? w ? w.p(e, c) : (w = lr(e),
                w.c(),
                w.m(a, null)) : w && (w.d(1),
                w = null)
            },
            i(e) {
                f || (Me(p),
                Me(o),
                u || xe((()=>{
                    u = Ue(t, ao, {
                        y: 10
                    }),
                    u.start()
                }
                )),
                f = !0)
            },
            o(e) {
                Te(p),
                Te(o),
                f = !1
            },
            d(e) {
                e && L(t),
                p && p.d(),
                ~i && h[i].d(),
                w && w.d()
            }
        }
    }
    function dr(e, t, n) {
        let {review: i} = t
          , {design: o} = t
          , {widget: r} = t;
        function a() {
            var e, t, n;
            const i = []
              , r = o.colors;
            return i.push(`--clr-primary: ${null !== (e = null == r ? void 0 : r.primary) && void 0 !== e ? e : Fe}`),
            i.push(`--clr-highlight: ${Xe}`),
            i.push(`--clr-border: ${null !== (t = r.border) && void 0 !== t ? t : "#ffffff"}`),
            i.push(`--clr-text: ${null !== (n = r.text) && void 0 !== n ? n : Ye}`),
            i.push(`--font: ${et(o.font)}`),
            i.join("; ")
        }
        return e.$$set = e=>{
            "review"in e && n(0, i = e.review),
            "design"in e && n(1, o = e.design),
            "widget"in e && n(2, r = e.widget)
        }
        ,
        [i, o, r, a]
    }
    class ur extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, dr, cr, s, {
                review: 0,
                design: 1,
                widget: 2
            }, ir)
        }
    }
    function fr(e) {
        let t, n;
        return t = new Mi({
            props: {
                $$slots: {
                    default: [hr, ({enabled: e, styles: t})=>({
                        16: e,
                        17: t
                    }), ({enabled: e, styles: t})=>(e ? 65536 : 0) | (t ? 131072 : 0)]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Ie(t.$$.fragment)
            },
            m(e, i) {
                We(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                458887 & n && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(i)
            },
            i(e) {
                n || (Me(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Te(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Oe(t, e)
            }
        }
    }
    function pr(e) {
        let t, n, i, o, r, a;
        return i = new ur({
            props: {
                design: e[1],
                review: e[0],
                widget: e[2]
            }
        }),
        {
            c() {
                t = T("div"),
                n = T("div"),
                Ie(i.$$.fragment),
                O(n, "class", "w-full"),
                O(t, "class", "senja-embed"),
                X(t, "z-index", "50"),
                X(t, "position", "fixed"),
                X(t, "width", "320px")
            },
            m(s, l) {
                z(s, t, l),
                _(t, n),
                We(i, n, null),
                e[12](t),
                o = !0,
                r || (a = v(Si.call(null, t, e[13])),
                r = !0)
            },
            p(e, t) {
                const n = {};
                2 & t && (n.design = e[1]),
                1 & t && (n.review = e[0]),
                4 & t && (n.widget = e[2]),
                i.$set(n)
            },
            i(e) {
                o || (Me(i.$$.fragment, e),
                o = !0)
            },
            o(e) {
                Te(i.$$.fragment, e),
                o = !1
            },
            d(n) {
                n && L(t),
                Oe(i),
                e[12](null),
                r = !1,
                a()
            }
        }
    }
    function mr(e) {
        let t, n;
        return t = new Ci({
            props: {
                styles: e[17],
                enabled: e[16],
                $$slots: {
                    default: [pr]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Ie(t.$$.fragment)
            },
            m(e, i) {
                We(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                131072 & n && (i.styles = e[17]),
                65536 & n && (i.enabled = e[16]),
                262279 & n && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(i)
            },
            i(e) {
                n || (Me(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Te(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Oe(t, e)
            }
        }
    }
    function hr(e) {
        let t, n;
        return t = new ki({
            props: {
                $$slots: {
                    default: [mr]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Ie(t.$$.fragment)
            },
            m(e, i) {
                We(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                458887 & n && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(i)
            },
            i(e) {
                n || (Me(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Te(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Oe(t, e)
            }
        }
    }
    function gr(e) {
        let t, n, i, o, r, a, s, l, c, d, u, f, p, m;
        o = new xi({
            props: {
                src: e[0].customer_avatar,
                fallbackName: e[0].customer_name,
                class: "sj-interactive-floating-avatar",
                size: e[3] + "px"
            }
        });
        let h = e[5] && fr(e);
        return {
            c() {
                t = T("div"),
                n = T("div"),
                i = T("button"),
                Ie(o.$$.fragment),
                r = N(),
                a = T("div"),
                c = N(),
                h && h.c(),
                O(a, "class", s = Qe("absolute inset-0 opacity-0 duration-200 group-hover:opacity-50", e[5] && "opacity-50")),
                X(a, "background-color", "var(--clr-primary)"),
                X(i, "border", "4px solid var(--clr-border)"),
                O(i, "class", l = Qe("cutout-border group relative overflow-hidden rounded-full duration-200 hover:scale-125", e[5] && "scale-125")),
                O(n, "class", "relative"),
                O(t, "style", d = 0 != e[4] ? "margin-left: -10px;" : ""),
                O(t, "class", u = Qe("relative z-0 flex-none rounded-full hover:z-10", e[5] && "z-10"))
            },
            m(s, l) {
                z(s, t, l),
                _(t, n),
                _(n, i),
                We(o, i, null),
                _(i, r),
                _(i, a),
                e[11](i),
                _(n, c),
                h && h.m(n, null),
                f = !0,
                p || (m = I(i, "click", e[10]),
                p = !0)
            },
            p(e, [r]) {
                const c = {};
                1 & r && (c.src = e[0].customer_avatar),
                1 & r && (c.fallbackName = e[0].customer_name),
                8 & r && (c.size = e[3] + "px"),
                o.$set(c),
                (!f || 32 & r && s !== (s = Qe("absolute inset-0 opacity-0 duration-200 group-hover:opacity-50", e[5] && "opacity-50"))) && O(a, "class", s),
                (!f || 32 & r && l !== (l = Qe("cutout-border group relative overflow-hidden rounded-full duration-200 hover:scale-125", e[5] && "scale-125"))) && O(i, "class", l),
                e[5] ? h ? (h.p(e, r),
                32 & r && Me(h, 1)) : (h = fr(e),
                h.c(),
                Me(h, 1),
                h.m(n, null)) : h && (ze(),
                Te(h, 1, 1, (()=>{
                    h = null
                }
                )),
                Le()),
                (!f || 16 & r && d !== (d = 0 != e[4] ? "margin-left: -10px;" : "")) && O(t, "style", d),
                (!f || 32 & r && u !== (u = Qe("relative z-0 flex-none rounded-full hover:z-10", e[5] && "z-10"))) && O(t, "class", u)
            },
            i(e) {
                f || (Me(o.$$.fragment, e),
                Me(h),
                f = !0)
            },
            o(e) {
                Te(o.$$.fragment, e),
                Te(h),
                f = !1
            },
            d(n) {
                n && L(t),
                Oe(o),
                e[11](null),
                h && h.d(),
                p = !1,
                m()
            }
        }
    }
    function wr(e, t, n) {
        var i = this && this.__awaiter || function(e, t, n, i) {
            function o(e) {
                return e instanceof n ? e : new n((function(t) {
                    t(e)
                }
                ))
            }
            return new (n || (n = Promise))((function(n, r) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : o(e.value).then(a, s)
                }
                l((i = i.apply(e, t || [])).next())
            }
            ))
        }
        ;
        let {review: o} = t, {design: r} = t, {widget: a} = t, {size: s=52} = t, {index: l=0} = t, c = !1, d, u;
        function f() {
            return i(this, void 0, void 0, (function*() {
                n(5, c = !0),
                yield ye(),
                m()
            }
            ))
        }
        function p() {
            return i(this, void 0, void 0, (function*() {
                n(5, c = !1)
            }
            ))
        }
        function m() {
            return i(this, void 0, void 0, (function*() {
                u && hi(d, u, {
                    middleware: [mi({})],
                    strategy: "fixed"
                }).then((({x: e, y: t})=>{
                    Object.assign(u.style, {
                        left: `${e}px`,
                        top: `${t}px`
                    })
                }
                ))
            }
            ))
        }
        ce((()=>{
            const e = ()=>{
                m()
            }
            ;
            return window.addEventListener("resize", e),
            window.addEventListener("scroll", e),
            ()=>{
                window.removeEventListener("resize", e),
                window.removeEventListener("scroll", e)
            }
        }
        ));
        const h = ()=>{
            c ? p() : f()
        }
        ;
        function g(e) {
            me[e ? "unshift" : "push"]((()=>{
                d = e,
                n(6, d)
            }
            ))
        }
        function w(e) {
            me[e ? "unshift" : "push"]((()=>{
                u = e,
                n(7, u)
            }
            ))
        }
        const b = async()=>{
            p()
        }
        ;
        return e.$$set = e=>{
            "review"in e && n(0, o = e.review),
            "design"in e && n(1, r = e.design),
            "widget"in e && n(2, a = e.widget),
            "size"in e && n(3, s = e.size),
            "index"in e && n(4, l = e.index)
        }
        ,
        [o, r, a, s, l, c, d, u, f, p, h, g, w, b]
    }
    class br extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, wr, gr, s, {
                review: 0,
                design: 1,
                widget: 2,
                size: 3,
                index: 4
            })
        }
    }
    function vr(e) {
        E(e, "svelte-1eppd9q", ".sj-avatars-pro mark{background-color:var(--clr-highlight);color:inherit;@apply rounded px-0.5;}")
    }
    function yr(e, t, n) {
        const i = e.slice();
        return i[12] = t[n],
        i[14] = n,
        i
    }
    function xr(e) {
        let t, n = e[0].text + "", i, o;
        return {
            c() {
                t = T("div"),
                i = U(n),
                O(t, "class", o = Qe("mb-2 ml-2 w-full text-sm font-bold uppercase", e[0].center ? "text-center" : "")),
                X(t, "color", "var(--clr-text)")
            },
            m(e, n) {
                z(e, t, n),
                _(t, i)
            },
            p(e, r) {
                1 & r && n !== (n = e[0].text + "") && Z(i, n),
                1 & r && o !== (o = Qe("mb-2 ml-2 w-full text-sm font-bold uppercase", e[0].center ? "text-center" : "")) && O(t, "class", o)
            },
            d(e) {
                e && L(t)
            }
        }
    }
    function Ar(e) {
        let t, n;
        return t = new br({
            props: {
                review: e[12],
                index: e[14],
                design: e[0],
                widget: e[1],
                size: e[11](40, {
                    sm: "52"
                })
            }
        }),
        {
            c() {
                Ie(t.$$.fragment)
            },
            m(e, i) {
                We(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                1 & n && (i.design = e[0]),
                2 & n && (i.widget = e[1]),
                2048 & n && (i.size = e[11](40, {
                    sm: "52"
                })),
                t.$set(i)
            },
            i(e) {
                n || (Me(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Te(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Oe(t, e)
            }
        }
    }
    function $r(e) {
        let t, n, i;
        return n = new Mt({
            props: {
                design: e[0]
            }
        }),
        {
            c() {
                t = T("div"),
                Ie(n.$$.fragment),
                O(t, "class", "mt-2")
            },
            m(e, o) {
                z(e, t, o),
                We(n, t, null),
                i = !0
            },
            p(e, t) {
                const i = {};
                1 & t && (i.design = e[0]),
                n.$set(i)
            },
            i(e) {
                i || (Me(n.$$.fragment, e),
                i = !0)
            },
            o(e) {
                Te(n.$$.fragment, e),
                i = !1
            },
            d(e) {
                e && L(t),
                Oe(n)
            }
        }
    }
    function jr(e) {
        let t, n, i, o, r, a, s, l, c = e[0].text && xr(e), d = e[5], u = [];
        for (let t = 0; t < d.length; t += 1)
            u[t] = Ar(yr(e, d, t));
        const f = e=>Te(u[e], 1, 1, (()=>{
            u[e] = null
        }
        ));
        let p = e[2] && $r(e);
        return {
            c() {
                t = T("div"),
                n = T("div"),
                i = T("div"),
                c && c.c(),
                o = N(),
                r = T("div");
                for (let e = 0; e < u.length; e += 1)
                    u[e].c();
                a = N(),
                p && p.c(),
                O(r, "class", "flex w-full items-center"),
                O(i, "class", "flex flex-col"),
                O(n, "class", "flex w-full flex-col items-center"),
                O(t, "class", "sj-avatars-pro w-full"),
                O(t, "style", s = e[6]() + "; font-family: var(--font); opacity: " + (e[3] ? 1 : 0))
            },
            m(s, d) {
                z(s, t, d),
                _(t, n),
                _(n, i),
                c && c.m(i, null),
                _(i, o),
                _(i, r);
                for (let e = 0; e < u.length; e += 1)
                    u[e] && u[e].m(r, null);
                e[8](r),
                _(i, a),
                p && p.m(i, null),
                l = !0
            },
            p(e, n) {
                if (e[0].text ? c ? c.p(e, n) : (c = xr(e),
                c.c(),
                c.m(i, o)) : c && (c.d(1),
                c = null),
                2083 & n) {
                    let t;
                    for (d = e[5],
                    t = 0; t < d.length; t += 1) {
                        const i = yr(e, d, t);
                        u[t] ? (u[t].p(i, n),
                        Me(u[t], 1)) : (u[t] = Ar(i),
                        u[t].c(),
                        Me(u[t], 1),
                        u[t].m(r, null))
                    }
                    for (ze(),
                    t = d.length; t < u.length; t += 1)
                        f(t);
                    Le()
                }
                e[2] ? p ? (p.p(e, n),
                4 & n && Me(p, 1)) : (p = $r(e),
                p.c(),
                Me(p, 1),
                p.m(i, null)) : p && (ze(),
                Te(p, 1, 1, (()=>{
                    p = null
                }
                )),
                Le()),
                (!l || 8 & n && s !== (s = e[6]() + "; font-family: var(--font); opacity: " + (e[3] ? 1 : 0))) && O(t, "style", s)
            },
            i(e) {
                if (!l) {
                    for (let e = 0; e < d.length; e += 1)
                        Me(u[e]);
                    Me(p),
                    l = !0
                }
            },
            o(e) {
                u = u.filter(Boolean);
                for (let e = 0; e < u.length; e += 1)
                    Te(u[e]);
                Te(p),
                l = !1
            },
            d(n) {
                n && L(t),
                c && c.d(),
                M(u, n),
                e[8](null),
                p && p.d()
            }
        }
    }
    function kr(e) {
        let t, n, i, o;
        return t = new rt({
            props: {
                font: e[0].font
            }
        }),
        i = new pt({
            props: {
                $$slots: {
                    default: [jr, ({rp: e})=>({
                        11: e
                    }), ({rp: e})=>e ? 2048 : 0]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Ie(t.$$.fragment),
                n = N(),
                Ie(i.$$.fragment)
            },
            m(e, r) {
                We(t, e, r),
                z(e, n, r),
                We(i, e, r),
                o = !0
            },
            p(e, [n]) {
                const o = {};
                1 & n && (o.font = e[0].font),
                t.$set(o);
                const r = {};
                34847 & n && (r.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                i.$set(r)
            },
            i(e) {
                o || (Me(t.$$.fragment, e),
                Me(i.$$.fragment, e),
                o = !0)
            },
            o(e) {
                Te(t.$$.fragment, e),
                Te(i.$$.fragment, e),
                o = !1
            },
            d(e) {
                Oe(t, e),
                e && L(n),
                Oe(i, e)
            }
        }
    }
    function Sr(e, t, n) {
        var i = this && this.__awaiter || function(e, t, n, i) {
            function o(e) {
                return e instanceof n ? e : new n((function(t) {
                    t(e)
                }
                ))
            }
            return new (n || (n = Promise))((function(n, r) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : o(e.value).then(a, s)
                }
                l((i = i.apply(e, t || [])).next())
            }
            ))
        }
        ;
        let {design: o} = t
          , {widget: r} = t
          , {reviews: a} = t
          , {showAttribution: s=!1} = t;
        const l = a.slice(0, 100);
        let c = !1, d;
        function u() {
            var e, t, n;
            let i = [];
            const r = o.colors;
            return i.push(`--clr-primary: ${null !== (e = null == r ? void 0 : r.primary) && void 0 !== e ? e : Fe}`),
            i.push(`--clr-border: ${null !== (t = r.border) && void 0 !== t ? t : "#ffffff"}`),
            i.push(`--clr-text: ${null !== (n = r.text) && void 0 !== n ? n : Ye}`),
            i.push(`--font: ${et(o.font)}`),
            i = [...i, ...tt(o)],
            i.join("; ")
        }
        function f() {
            return i(this, void 0, void 0, (function*() {
                const e = null == d ? void 0 : d.children;
                if (e) {
                    for (let t = 0; t < e.length; t++) {
                        const n = e[t];
                        n.style.display = "block"
                    }
                    yield ye();
                    for (let t = 0; t < e.length; t++) {
                        const n = e[t];
                        n.getBoundingClientRect().right > d.getBoundingClientRect().right ? n.style.display = "none" : n.style.display = "block"
                    }
                }
            }
            ))
        }
        function p(e) {
            me[e ? "unshift" : "push"]((()=>{
                d = e,
                n(4, d)
            }
            ))
        }
        return a = a.sort(((e,t)=>e.customer_avatar && !t.customer_avatar ? -1 : !e.customer_avatar && t.customer_avatar ? 1 : 0)),
        ce((()=>(f(),
        window.addEventListener("resize", f),
        setTimeout((()=>{
            n(3, c = !0),
            f()
        }
        ), 10),
        ()=>{
            window.removeEventListener("resize", f)
        }
        ))),
        e.$$set = e=>{
            "design"in e && n(0, o = e.design),
            "widget"in e && n(1, r = e.widget),
            "reviews"in e && n(7, a = e.reviews),
            "showAttribution"in e && n(2, s = e.showAttribution)
        }
        ,
        [o, r, s, c, d, l, u, a, p]
    }
    class _r extends Ke {
        constructor(e) {
            super(),
            Ge(this, e, Sr, kr, s, {
                design: 0,
                widget: 1,
                reviews: 7,
                showAttribution: 2
            }, vr)
        }
    }
    function Er(e) {
        var t, n, i, o, r, a;
        let {review: s, lang: l, autoDetectLang: c, defaultLang: d} = e;
        if (c && "undefined" != typeof window && (l = null !== (t = Cr(window.location.href)) && void 0 !== t ? t : d),
        !l)
            return s;
        if (l === s.lang)
            return s;
        const u = null === (n = s.translations) || void 0 === n ? void 0 : n.find((e=>e.lang == l));
        return u ? (s.text = null !== (i = u.text) && void 0 !== i ? i : s.text,
        s.title = null !== (o = u.title) && void 0 !== o ? o : s.title,
        s.html = null !== (r = u.text) && void 0 !== r ? r : s.html,
        s.customer_tagline = null !== (a = u.customer_tagline) && void 0 !== a ? a : s.customer_tagline,
        Object.assign({}, s)) : s
    }
    function Cr(e) {
        var t;
        try {
            const n = /^(?:https?:\/\/)?([^\/]+)/i
              , i = /^(?:https?:\/\/)?[^\/]+\/([a-z]{2}(?:-[A-Z]{2})?)\//i
              , o = e.match(n)
              , r = document.documentElement.lang
              , a = new URLSearchParams(window.location.search)
              , s = null !== (t = a.get("lang")) && void 0 !== t ? t : a.get("language");
            if (s)
                return s.split("-")[0];
            if (r)
                return r.split("-")[0];
            if (o) {
                const e = o[1]
                  , t = /^([a-z]{2}(?:-[A-Z]{2})?)\./i
                  , n = e.match(t);
                if (n)
                    return n[1]
            }
            const l = e.match(i);
            return l ? l[1] : null
        } catch (e) {
            return null
        }
    }
    class Pr {
        getPageDetails() {
            var e;
            if (window !== window.top && (null === (e = document.referrer) || void 0 === e ? void 0 : e.length)) {
                const e = document.referrer;
                try {
                    const t = new URL(e);
                    return {
                        url: t.href,
                        host: t.hostname
                    }
                } catch (e) {}
            }
            return {
                url: window.location.href,
                host: window.location.host
            }
        }
        _uuidv4() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e=>(e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)))
        }
        async sendEvent(e, t, n) {
            var i, o, r;
            const a = n.widget
              , s = e.getAttribute("data-session")
              , l = e.getAttribute("data-id");
            let c = null === localStorage || void 0 === localStorage ? void 0 : localStorage.getItem("sj_v_id");
            c || (c = this._uuidv4(),
            null === localStorage || void 0 === localStorage || localStorage.setItem("sj_v_id", c));
            const d = Intl.DateTimeFormat().resolvedOptions().timeZone
              , u = zr[d]
              , f = this.getPageDetails();
            let p = f.url;
            const m = f.host
              , h = null != e.querySelector(".sj-powered-by");
            if (null === (i = window.location.search) || void 0 === i ? void 0 : i.includes("preview"))
                return;
            if (Rr.includes(p))
                return;
            const g = {
                load_session_id: s,
                widget_id: l,
                version: "1",
                action: t,
                visitor_id: c,
                timestamp: (new Date).toISOString(),
                payload: JSON.stringify(Object.assign(Object.assign({
                    country: u,
                    page: p,
                    host: m,
                    design: null === (r = null === (o = null == a ? void 0 : a.config) || void 0 === o ? void 0 : o.design) || void 0 === r ? void 0 : r.type,
                    powered_by_enabled: h
                }, n), {
                    widget: void 0
                }))
            };
            await fetch("https://analytics.senja.io/widget", {
                method: "POST",
                body: JSON.stringify(g)
            })
        }
        track(e, t) {
            var n;
            const i = this._uuidv4();
            e.setAttribute("data-session", i);
            const o = {
                sessionId: i,
                isVisible: !1,
                trackedView: !1
            };
            window.addEventListener("senjaWidgetPoweredByClick", (n=>{
                n.detail.widget_id === e.getAttribute("data-id") && this.sendEvent(e, "powered_by_click", {
                    widget: t
                })
            }
            ));
            const r = n=>{
                if (o.isVisible = n,
                n) {
                    if (o.startTime = Date.now(),
                    o.trackedView)
                        return;
                    o.trackedView = !0,
                    this.sendEvent(e, "view", {
                        widget: t
                    })
                } else {
                    if (!o.startTime)
                        return;
                    const n = Date.now()
                      , i = parseFloat(((n - o.startTime) / 1e3).toFixed(2));
                    this.sendEvent(e, "exit_view", {
                        duration: i,
                        widget: t
                    })
                }
            }
              , a = new IntersectionObserver((e=>{
                e.forEach((e=>{
                    r(e.isIntersecting)
                }
                ))
            }
            ))
              , s = new MutationObserver((t=>{
                t.forEach((t=>{
                    "childList" === t.type && t.removedNodes.forEach((t=>{
                        var n;
                        t === e && (r(!1),
                        null === (n = null == o ? void 0 : o.intersectionObserver) || void 0 === n || n.disconnect())
                    }
                    ))
                }
                ))
            }
            ));
            o.mutationObserver = s,
            e.addEventListener("click", (()=>{
                this.sendEvent(e, "click", {
                    widget: t
                })
            }
            )),
            o.intersectionObserver = a;
            const l = Je(null === (n = t.config) || void 0 === n ? void 0 : n.design);
            l ? r(!0) : a.observe(e),
            e.parentElement && s.observe(e.parentElement, {
                childList: !0
            })
        }
    }
    const Rr = ["about:blank", "about:srcdoc", "about:invalid", "about:blank#blocked"]
      , zr = {
        "Asia/Barnaul": "RU",
        "Africa/Nouakchott": "MR",
        "Africa/Lusaka": "ZM",
        "Asia/Pyongyang": "KP",
        "Europe/Bratislava": "SK",
        "America/Belize": "BZ",
        "America/Maceio": "BR",
        "Pacific/Chuuk": "FM",
        "Indian/Comoro": "KM",
        "Pacific/Palau": "PW",
        "Asia/Jakarta": "ID",
        "Africa/Windhoek": "NA",
        "America/Chihuahua": "MX",
        "America/Nome": "US",
        "Africa/Mbabane": "SZ",
        "Africa/Porto-Novo": "BJ",
        "Europe/San_Marino": "SM",
        "Pacific/Fakaofo": "TK",
        "America/Denver": "US",
        "Europe/Belgrade": "RS",
        "America/Indiana/Tell_City": "US",
        "America/Fortaleza": "BR",
        "America/Halifax": "CA",
        "Europe/Bucharest": "RO",
        "America/Indiana/Petersburg": "US",
        "Europe/Kirov": "RU",
        "Europe/Athens": "GR",
        "America/Argentina/Ushuaia": "AR",
        "Europe/Monaco": "MC",
        "Europe/Vilnius": "LT",
        "Europe/Copenhagen": "DK",
        "Pacific/Kanton": "KI",
        "America/Caracas": "VE",
        "Asia/Almaty": "KZ",
        "Europe/Paris": "FR",
        "Africa/Blantyre": "MW",
        "Asia/Muscat": "OM",
        "America/North_Dakota/Beulah": "US",
        "America/Matamoros": "MX",
        "Asia/Irkutsk": "RU",
        "America/Costa_Rica": "CR",
        "America/Araguaina": "BR",
        "Atlantic/Canary": "ES",
        "America/Santo_Domingo": "DO",
        "America/Vancouver": "CA",
        "Africa/Addis_Ababa": "ET",
        "Africa/Accra": "GH",
        "Pacific/Kwajalein": "MH",
        "Asia/Baghdad": "IQ",
        "Australia/Adelaide": "AU",
        "Australia/Hobart": "AU",
        "America/Guayaquil": "EC",
        "America/Argentina/Tucuman": "AR",
        "Australia/Lindeman": "AU",
        "America/New_York": "US",
        "Pacific/Fiji": "FJ",
        "America/Antigua": "AG",
        "Africa/Casablanca": "MA",
        "America/Paramaribo": "SR",
        "Africa/Cairo": "EG",
        "America/Cayenne": "GF",
        "America/Detroit": "US",
        "Antarctica/Syowa": "AQ",
        "Africa/Douala": "CM",
        "America/Argentina/La_Rioja": "AR",
        "Africa/Lagos": "NG",
        "America/St_Barthelemy": "BL",
        "Asia/Nicosia": "CY",
        "Asia/Macau": "MO",
        "Europe/Riga": "LV",
        "Asia/Ashgabat": "TM",
        "Indian/Antananarivo": "MG",
        "America/Argentina/San_Juan": "AR",
        "Asia/Aden": "YE",
        "Asia/Tomsk": "RU",
        "America/Asuncion": "PY",
        "Pacific/Bougainville": "PG",
        "Asia/Vientiane": "LA",
        "America/Mazatlan": "MX",
        "Africa/Luanda": "AO",
        "Europe/Oslo": "NO",
        "Africa/Kinshasa": "CD",
        "Europe/Warsaw": "PL",
        "America/Grand_Turk": "TC",
        "Asia/Seoul": "KR",
        "Africa/Tripoli": "LY",
        "America/St_Thomas": "VI",
        "Asia/Kathmandu": "NP",
        "Pacific/Pitcairn": "PN",
        "Pacific/Nauru": "NR",
        "America/Curacao": "CW",
        "Asia/Kabul": "AF",
        "Pacific/Tongatapu": "TO",
        "Europe/Simferopol": "UA",
        "Asia/Ust-Nera": "RU",
        "Africa/Mogadishu": "SO",
        "Indian/Mayotte": "YT",
        "Pacific/Niue": "NU",
        "America/Thunder_Bay": "CA",
        "Atlantic/Azores": "PT",
        "Pacific/Gambier": "PF",
        "Europe/Stockholm": "SE",
        "Africa/Libreville": "GA",
        "America/Punta_Arenas": "CL",
        "America/Guatemala": "GT",
        "America/Noronha": "BR",
        "Europe/Helsinki": "FI",
        "Asia/Gaza": "PS",
        "Pacific/Kosrae": "FM",
        "America/Aruba": "AW",
        "America/Nassau": "BS",
        "Asia/Choibalsan": "MN",
        "America/Winnipeg": "CA",
        "America/Anguilla": "AI",
        "Asia/Thimphu": "BT",
        "Asia/Beirut": "LB",
        "Atlantic/Faroe": "FO",
        "Europe/Berlin": "DE",
        "Europe/Amsterdam": "NL",
        "Pacific/Honolulu": "US",
        "America/Regina": "CA",
        "America/Scoresbysund": "GL",
        "Europe/Vienna": "AT",
        "Europe/Tirane": "AL",
        "Africa/El_Aaiun": "EH",
        "America/Creston": "CA",
        "Asia/Qostanay": "KZ",
        "Asia/Ho_Chi_Minh": "VN",
        "Europe/Samara": "RU",
        "Europe/Rome": "IT",
        "Australia/Eucla": "AU",
        "America/El_Salvador": "SV",
        "America/Chicago": "US",
        "Africa/Abidjan": "CI",
        "Asia/Kamchatka": "RU",
        "Pacific/Tarawa": "KI",
        "America/Santiago": "CL",
        "America/Bahia": "BR",
        "Indian/Christmas": "CX",
        "Asia/Atyrau": "KZ",
        "Asia/Dushanbe": "TJ",
        "Europe/Ulyanovsk": "RU",
        "America/Yellowknife": "CA",
        "America/Recife": "BR",
        "Australia/Sydney": "AU",
        "America/Fort_Nelson": "CA",
        "Pacific/Efate": "VU",
        "Europe/Saratov": "RU",
        "Africa/Banjul": "GM",
        "Asia/Omsk": "RU",
        "Europe/Ljubljana": "SI",
        "Europe/Budapest": "HU",
        "Europe/Astrakhan": "RU",
        "America/Argentina/Buenos_Aires": "AR",
        "Pacific/Chatham": "NZ",
        "America/Argentina/Salta": "AR",
        "Africa/Niamey": "NE",
        "Asia/Pontianak": "ID",
        "Indian/Reunion": "RE",
        "Asia/Hong_Kong": "HK",
        "Antarctica/McMurdo": "AQ",
        "Africa/Malabo": "GQ",
        "America/Los_Angeles": "US",
        "America/Argentina/Cordoba": "AR",
        "Pacific/Pohnpei": "FM",
        "America/Tijuana": "MX",
        "America/Campo_Grande": "BR",
        "America/Dawson_Creek": "CA",
        "Asia/Novosibirsk": "RU",
        "Pacific/Pago_Pago": "AS",
        "Asia/Jerusalem": "IL",
        "Europe/Sarajevo": "BA",
        "Africa/Freetown": "SL",
        "Asia/Yekaterinburg": "RU",
        "America/Juneau": "US",
        "Africa/Ouagadougou": "BF",
        "Africa/Monrovia": "LR",
        "Europe/Kiev": "UA",
        "America/Argentina/San_Luis": "AR",
        "Asia/Tokyo": "JP",
        "Asia/Qatar": "QA",
        "America/La_Paz": "BO",
        "America/Bogota": "CO",
        "America/Thule": "GL",
        "Asia/Manila": "PH",
        "Asia/Hovd": "MN",
        "Asia/Tehran": "IR",
        "Atlantic/Madeira": "PT",
        "America/Metlakatla": "US",
        "Europe/Vatican": "VA",
        "Asia/Bishkek": "KG",
        "Asia/Dili": "TL",
        "Antarctica/Palmer": "AQ",
        "Atlantic/Cape_Verde": "CV",
        "Indian/Chagos": "IO",
        "America/Kentucky/Monticello": "US",
        "Africa/Algiers": "DZ",
        "Africa/Maseru": "LS",
        "Asia/Kuala_Lumpur": "MY",
        "Africa/Khartoum": "SD",
        "America/Argentina/Rio_Gallegos": "AR",
        "America/Blanc-Sablon": "CA",
        "Africa/Maputo": "MZ",
        "America/Tortola": "VG",
        "Atlantic/Bermuda": "BM",
        "America/Argentina/Catamarca": "AR",
        "America/Cayman": "KY",
        "America/Puerto_Rico": "PR",
        "Pacific/Majuro": "MH",
        "Europe/Busingen": "DE",
        "Pacific/Midway": "UM",
        "Indian/Cocos": "CC",
        "Asia/Singapore": "SG",
        "America/Boise": "US",
        "America/Nuuk": "GL",
        "America/Goose_Bay": "CA",
        "Australia/Broken_Hill": "AU",
        "Africa/Dar_es_Salaam": "TZ",
        "Africa/Asmara": "ER",
        "Asia/Samarkand": "UZ",
        "Asia/Tbilisi": "GE",
        "America/Argentina/Jujuy": "AR",
        "America/Indiana/Winamac": "US",
        "America/Porto_Velho": "BR",
        "Asia/Magadan": "RU",
        "Europe/Zaporozhye": "UA",
        "Antarctica/Casey": "AQ",
        "Asia/Shanghai": "CN",
        "Pacific/Norfolk": "NF",
        "Europe/Guernsey": "GG",
        "Australia/Brisbane": "AU",
        "Antarctica/DumontDUrville": "AQ",
        "America/Havana": "CU",
        "America/Atikokan": "CA",
        "America/Mexico_City": "MX",
        "America/Rankin_Inlet": "CA",
        "America/Cuiaba": "BR",
        "America/Resolute": "CA",
        "Africa/Ceuta": "ES",
        "Arctic/Longyearbyen": "SJ",
        "Pacific/Guam": "GU",
        "Asia/Damascus": "SY",
        "Asia/Colombo": "LK",
        "Asia/Yerevan": "AM",
        "America/Montserrat": "MS",
        "America/Belem": "BR",
        "Europe/Kaliningrad": "RU",
        "Atlantic/South_Georgia": "GS",
        "Asia/Tashkent": "UZ",
        "Asia/Kolkata": "IN",
        "America/St_Johns": "CA",
        "Asia/Srednekolymsk": "RU",
        "Asia/Yakutsk": "RU",
        "Europe/Prague": "CZ",
        "Africa/Djibouti": "DJ",
        "Asia/Dubai": "AE",
        "Europe/Uzhgorod": "UA",
        "America/Edmonton": "CA",
        "Asia/Famagusta": "CY",
        "America/Indiana/Knox": "US",
        "Asia/Hebron": "PS",
        "Asia/Taipei": "TW",
        "Europe/London": "GB",
        "Africa/Dakar": "SN",
        "Australia/Darwin": "AU",
        "America/Glace_Bay": "CA",
        "Antarctica/Vostok": "AQ",
        "America/Indiana/Vincennes": "US",
        "America/Nipigon": "CA",
        "Asia/Kuwait": "KW",
        "Pacific/Guadalcanal": "SB",
        "America/Toronto": "CA",
        "Africa/Gaborone": "BW",
        "Africa/Bujumbura": "BI",
        "Africa/Lubumbashi": "CD",
        "America/Merida": "MX",
        "America/Marigot": "MF",
        "Europe/Zagreb": "HR",
        "Pacific/Easter": "CL",
        "America/Santarem": "BR",
        "Pacific/Noumea": "NC",
        "America/Sitka": "US",
        "Atlantic/Stanley": "FK",
        "Pacific/Funafuti": "TV",
        "America/Iqaluit": "CA",
        "America/Rainy_River": "CA",
        "America/Anchorage": "US",
        "America/Lima": "PE",
        "Asia/Baku": "AZ",
        "America/Indiana/Vevay": "US",
        "Asia/Ulaanbaatar": "MN",
        "America/Managua": "NI",
        "Asia/Krasnoyarsk": "RU",
        "Asia/Qyzylorda": "KZ",
        "America/Eirunepe": "BR",
        "Europe/Podgorica": "ME",
        "Europe/Chisinau": "MD",
        "Europe/Mariehamn": "AX",
        "Europe/Volgograd": "RU",
        "Africa/Nairobi": "KE",
        "Europe/Isle_of_Man": "IM",
        "America/Menominee": "US",
        "Africa/Harare": "ZW",
        "Asia/Anadyr": "RU",
        "America/Moncton": "CA",
        "Indian/Maldives": "MV",
        "America/Whitehorse": "CA",
        "Antarctica/Mawson": "AQ",
        "Europe/Madrid": "ES",
        "America/Argentina/Mendoza": "AR",
        "America/Manaus": "BR",
        "Africa/Bangui": "CF",
        "Indian/Mauritius": "MU",
        "Africa/Tunis": "TN",
        "Australia/Lord_Howe": "AU",
        "America/Kentucky/Louisville": "US",
        "America/North_Dakota/Center": "US",
        "Asia/Novokuznetsk": "RU",
        "Asia/Makassar": "ID",
        "America/Port_of_Spain": "TT",
        "America/Bahia_Banderas": "MX",
        "Pacific/Auckland": "NZ",
        "America/Sao_Paulo": "BR",
        "Asia/Dhaka": "BD",
        "America/Pangnirtung": "CA",
        "Europe/Dublin": "IE",
        "Asia/Brunei": "BN",
        "Africa/Brazzaville": "CG",
        "America/Montevideo": "UY",
        "America/Jamaica": "JM",
        "America/Indiana/Indianapolis": "US",
        "America/Kralendijk": "BQ",
        "Europe/Gibraltar": "GI",
        "Pacific/Marquesas": "PF",
        "Pacific/Apia": "WS",
        "Europe/Jersey": "JE",
        "America/Phoenix": "US",
        "Africa/Ndjamena": "TD",
        "Asia/Karachi": "PK",
        "Africa/Kampala": "UG",
        "Asia/Sakhalin": "RU",
        "America/Martinique": "MQ",
        "Europe/Moscow": "RU",
        "Africa/Conakry": "GN",
        "America/Barbados": "BB",
        "Africa/Lome": "TG",
        "America/Ojinaga": "MX",
        "America/Tegucigalpa": "HN",
        "Asia/Bangkok": "TH",
        "Africa/Johannesburg": "ZA",
        "Europe/Vaduz": "LI",
        "Africa/Sao_Tome": "ST",
        "America/Cambridge_Bay": "CA",
        "America/Lower_Princes": "SX",
        "America/Miquelon": "PM",
        "America/St_Kitts": "KN",
        "Australia/Melbourne": "AU",
        "Europe/Minsk": "BY",
        "Asia/Vladivostok": "RU",
        "Europe/Sofia": "BG",
        "Antarctica/Davis": "AQ",
        "Pacific/Galapagos": "EC",
        "America/North_Dakota/New_Salem": "US",
        "Asia/Amman": "JO",
        "Pacific/Wallis": "WF",
        "America/Hermosillo": "MX",
        "Pacific/Kiritimati": "KI",
        "Antarctica/Macquarie": "AU",
        "America/Guyana": "GY",
        "Asia/Riyadh": "SA",
        "Pacific/Tahiti": "PF",
        "America/St_Vincent": "VC",
        "America/Cancun": "MX",
        "America/Grenada": "GD",
        "Pacific/Wake": "UM",
        "America/Dawson": "CA",
        "Europe/Brussels": "BE",
        "Indian/Kerguelen": "TF",
        "America/Yakutat": "US",
        "Indian/Mahe": "SC",
        "Atlantic/Reykjavik": "IS",
        "America/Panama": "PA",
        "America/Guadeloupe": "GP",
        "Europe/Malta": "MT",
        "Antarctica/Troll": "AQ",
        "Asia/Jayapura": "ID",
        "Asia/Bahrain": "BH",
        "Asia/Chita": "RU",
        "Europe/Tallinn": "EE",
        "Asia/Khandyga": "RU",
        "America/Rio_Branco": "BR",
        "Atlantic/St_Helena": "SH",
        "Africa/Juba": "SS",
        "America/Adak": "US",
        "Pacific/Saipan": "MP",
        "America/St_Lucia": "LC",
        "America/Inuvik": "CA",
        "Europe/Luxembourg": "LU",
        "Africa/Bissau": "GW",
        "Asia/Oral": "KZ",
        "America/Boa_Vista": "BR",
        "Europe/Skopje": "MK",
        "America/Port-au-Prince": "HT",
        "Pacific/Port_Moresby": "PG",
        "Europe/Andorra": "AD",
        "America/Indiana/Marengo": "US",
        "Africa/Kigali": "RW",
        "Africa/Bamako": "ML",
        "America/Dominica": "DM",
        "Asia/Aqtobe": "KZ",
        "Europe/Istanbul": "TR",
        "Pacific/Rarotonga": "CK",
        "America/Danmarkshavn": "GL",
        "Europe/Zurich": "CH",
        "Asia/Yangon": "MM",
        "America/Monterrey": "MX",
        "Europe/Lisbon": "PT",
        "Asia/Kuching": "MY",
        "Antarctica/Rothera": "AQ",
        "Australia/Perth": "AU",
        "Asia/Phnom_Penh": "KH",
        "America/Swift_Current": "CA",
        "Asia/Aqtau": "KZ",
        "Asia/Urumqi": "CN"
    };
    function Lr(e, t) {
        void 0 === t && (t = {});
        var n = t.insertAt;
        if (e && "undefined" != typeof document) {
            var i = document.head || document.getElementsByTagName("head")[0]
              , o = document.createElement("style");
            o.type = "text/css",
            "top" === n && i.firstChild ? i.insertBefore(o, i.firstChild) : i.appendChild(o),
            o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
        }
    }
    var Mr = '.senja-embed *,.senja-embed :after,.senja-embed :before{border:0 solid #e5e7eb;box-sizing:border-box}.senja-embed :after,.senja-embed :before{--tw-content:""}.senja-embed html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;-moz-tab-size:4;-o-tab-size:4;tab-size:4}.senja-embed .text-2xl,.senja-embed .text-3xl,.senja-embed .text-4xl,.senja-embed .text-base,.senja-embed .text-lg,.senja-embed .text-sm,.senja-embed .text-xl{margin:0}.senja-embed body{line-height:inherit;margin:0}.senja-embed hr{border-top-width:1px;color:inherit;height:0}.senja-embed abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.senja-embed h1,.senja-embed h2,.senja-embed h3,.senja-embed h4,.senja-embed h5,.senja-embed h6{font-size:inherit;font-weight:inherit}.senja-embed a{color:inherit;text-decoration:inherit}.senja-embed b,.senja-embed strong{font-weight:700}.senja-embed code,.senja-embed kbd,.senja-embed pre,.senja-embed samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}.senja-embed small{font-size:80%}.senja-embed sub,.senja-embed sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.senja-embed sub{bottom:-.25em}.senja-embed sup{top:-.5em}.senja-embed table{border-collapse:collapse;border-color:inherit;text-indent:0}.senja-embed button,.senja-embed input,.senja-embed optgroup,.senja-embed select,.senja-embed textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}.senja-embed button,.senja-embed select{text-transform:none}.senja-embed [type=button],.senja-embed [type=reset],.senja-embed [type=submit],.senja-embed button{-webkit-appearance:button;background-color:transparent;background-image:none}.senja-embed :-moz-focusring{outline:auto}.senja-embed :-moz-ui-invalid{box-shadow:none}.senja-embed progress{vertical-align:baseline}.senja-embed ::-webkit-inner-spin-button,.senja-embed ::-webkit-outer-spin-button{height:auto}.senja-embed [type=search]{-webkit-appearance:textfield;outline-offset:-2px}.senja-embed ::-webkit-search-decoration{-webkit-appearance:none}.senja-embed ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.senja-embed summary{display:list-item}.senja-embed blockquote,.senja-embed dd,.senja-embed dl,.senja-embed figure,.senja-embed h1,.senja-embed h2,.senja-embed h3,.senja-embed h4,.senja-embed h5,.senja-embed h6,.senja-embed hr,.senja-embed p,.senja-embed pre{margin:0}.senja-embed fieldset{margin:0;padding:0}.senja-embed legend{padding:0}.senja-embed menu,.senja-embed ol,.senja-embed ul{list-style:none;margin:0;padding:0}.senja-embed textarea{resize:vertical}.senja-embed input::-moz-placeholder,.senja-embed textarea::-moz-placeholder{color:#9ca3af;opacity:1}.senja-embed input::placeholder,.senja-embed textarea::placeholder{color:#9ca3af;opacity:1}.senja-embed [role=button],.senja-embed button{cursor:pointer}.senja-embed :disabled{cursor:default}.senja-embed audio,.senja-embed canvas,.senja-embed embed,.senja-embed iframe,.senja-embed img,.senja-embed object,.senja-embed svg,.senja-embed video{display:block;vertical-align:middle}.senja-embed img,.senja-embed video{height:auto;max-width:100%}.senja-embed [hidden]{display:none}';
    Lr(Mr);
    var Tr = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.senja-embed :is(.pointer-events-none){pointer-events:none}.senja-embed :is(.pointer-events-auto){pointer-events:auto}.senja-embed :is(.visible){visibility:visible}.senja-embed :is(.static){position:static}.senja-embed :is(.fixed){position:fixed}.senja-embed :is(.absolute){position:absolute}.senja-embed :is(.relative){position:relative}.senja-embed :is(.inset-0){inset:0}.senja-embed :is(.inset-x-0){left:0;right:0}.senja-embed :is(.inset-y-0){bottom:0;top:0}.senja-embed :is(.bottom-0){bottom:0}.senja-embed :is(.right-2){right:8px}.senja-embed :is(.right-4){right:16px}.senja-embed :is(.top-2){top:8px}.senja-embed :is(.top-4){top:16px}.senja-embed :is(.top-auto){top:auto}.senja-embed :is(.z-0){z-index:0}.senja-embed :is(.z-10){z-index:10}.senja-embed :is(.z-\\[9999998\\]){z-index:9999998}.senja-embed :is(.mx-auto){margin-left:auto;margin-right:auto}.senja-embed :is(.my-2){margin-bottom:8px;margin-top:8px}.senja-embed :is(.my-auto){margin-bottom:auto;margin-top:auto}.senja-embed :is(.-ml-1){margin-left:-4px}.senja-embed :is(.-mr-0){margin-right:0}.senja-embed :is(.-mr-0\\.5){margin-right:-2px}.senja-embed :is(.-mt-0){margin-top:0}.senja-embed :is(.-mt-0\\.5){margin-top:-2px}.senja-embed :is(.-mt-12){margin-top:-48px}.senja-embed :is(.mb-1){margin-bottom:4px}.senja-embed :is(.mb-2){margin-bottom:8px}.senja-embed :is(.ml-2){margin-left:8px}.senja-embed :is(.mr-2){margin-right:8px}.senja-embed :is(.mt-2){margin-top:8px}.senja-embed :is(.mt-4){margin-top:16px}.senja-embed :is(.block){display:block}.senja-embed :is(.inline){display:inline}.senja-embed :is(.flex){display:flex}.senja-embed :is(.hidden){display:none}.senja-embed :is(.h-20){height:80px}.senja-embed :is(.h-32){height:128px}.senja-embed :is(.h-6){height:24px}.senja-embed :is(.h-full){height:100%}.senja-embed :is(.max-h-12){max-height:48px}.senja-embed :is(.max-h-96){max-height:384px}.senja-embed :is(.w-20){width:80px}.senja-embed :is(.w-6){width:24px}.senja-embed :is(.w-full){width:100%}.senja-embed :is(.max-w-\\[100px\\]){max-width:100px}.senja-embed :is(.max-w-lg){max-width:512px}.senja-embed :is(.flex-none){flex:none}.senja-embed :is(.flex-shrink){flex-shrink:1}.senja-embed :is(.flex-grow){flex-grow:1}.senja-embed :is(.origin-bottom-right){transform-origin:bottom right}.senja-embed :is(.-rotate-45){--tw-rotate:-45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.senja-embed :is(.scale-125){--tw-scale-x:1.25;--tw-scale-y:1.25;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.senja-embed :is(.transform){transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.senja-embed :is(.resize){resize:both}.senja-embed :is(.flex-col){flex-direction:column}.senja-embed :is(.flex-wrap){flex-wrap:wrap}.senja-embed :is(.items-start){align-items:flex-start}.senja-embed :is(.items-center){align-items:center}.senja-embed :is(.justify-start){justify-content:flex-start}.senja-embed :is(.justify-end){justify-content:flex-end}.senja-embed :is(.justify-center){justify-content:center}.senja-embed :is(.justify-between){justify-content:space-between}.senja-embed :is(.gap-1){gap:4px}.senja-embed :is(.gap-2){gap:8px}.senja-embed :is(.gap-4){gap:16px}.senja-embed :is(.overflow-hidden){overflow:hidden}.senja-embed :is(.overflow-y-auto){overflow-y:auto}.senja-embed :is(.truncate){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.senja-embed :is(.whitespace-pre-line){white-space:pre-line}.senja-embed :is(.rounded){border-radius:4px}.senja-embed :is(.rounded-full){border-radius:9999px}.senja-embed :is(.rounded-lg){border-radius:8px}.senja-embed :is(.rounded-md){border-radius:6px}.senja-embed :is(.rounded-none){border-radius:0}.senja-embed :is(.border){border-width:1px}.senja-embed :is(.border-none){border-style:none}.senja-embed :is(.bg-black){--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.senja-embed :is(.bg-gray-100){--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.senja-embed :is(.bg-gray-200\\/80){background-color:rgba(229,231,235,.8)}.senja-embed :is(.bg-white){--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.senja-embed :is(.bg-white\\/60){background-color:hsla(0,0%,100%,.6)}.senja-embed :is(.bg-gradient-to-t){background-image:linear-gradient(to top,var(--tw-gradient-stops))}.senja-embed :is(.from-black\\/70){--tw-gradient-from:rgba(0,0,0,.7) var(--tw-gradient-from-position);--tw-gradient-to:transparent var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.senja-embed :is(.to-transparent){--tw-gradient-to:transparent var(--tw-gradient-to-position)}.senja-embed :is(.object-contain){-o-object-fit:contain;object-fit:contain}.senja-embed :is(.object-cover){-o-object-fit:cover;object-fit:cover}.senja-embed :is(.p-1){padding:4px}.senja-embed :is(.p-4){padding:16px}.senja-embed :is(.px-0){padding-left:0;padding-right:0}.senja-embed :is(.px-4){padding-left:16px;padding-right:16px}.senja-embed :is(.px-6){padding-left:24px;padding-right:24px}.senja-embed :is(.px-\\[5px\\]){padding-left:5px;padding-right:5px}.senja-embed :is(.py-1){padding-bottom:4px;padding-top:4px}.senja-embed :is(.py-2){padding-bottom:8px;padding-top:8px}.senja-embed :is(.py-2\\.5){padding-bottom:10px;padding-top:10px}.senja-embed :is(.py-8){padding-bottom:32px;padding-top:32px}.senja-embed :is(.pb-8){padding-bottom:32px}.senja-embed :is(.text-center){text-align:center}.senja-embed :is(.align-middle){vertical-align:middle}.senja-embed :is(.text-base){font-size:16px;line-height:24px}.senja-embed :is(.text-lg){font-size:18px;line-height:28px}.senja-embed :is(.text-sm){font-size:14px;line-height:20px}.senja-embed :is(.text-xl){font-size:20px;line-height:28px}.senja-embed :is(.text-xs){font-size:12px;line-height:16px}.senja-embed :is(.font-bold){font-weight:700}.senja-embed :is(.font-medium){font-weight:500}.senja-embed :is(.uppercase){text-transform:uppercase}.senja-embed :is(.tracking-tight){letter-spacing:-.025em}.senja-embed :is(.text-gray-300){--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity))}.senja-embed :is(.text-gray-500){--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.senja-embed :is(.text-gray-600){--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.senja-embed :is(.text-gray-700){--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.senja-embed :is(.text-white){--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.senja-embed :is(.opacity-0){opacity:0}.senja-embed :is(.opacity-50){opacity:.5}.senja-embed :is(.opacity-70){opacity:.7}.senja-embed :is(.opacity-80){opacity:.8}.senja-embed :is(.shadow){--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.senja-embed :is(.shadow-2xl){--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.senja-embed :is(.shadow-xl){--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.senja-embed :is(.backdrop-blur-lg){--tw-backdrop-blur:blur(16px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.senja-embed :is(.transition){transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.senja-embed :is(.duration-200){transition-duration:.2s}.senja-embed :is(.hover\\:z-10:hover){z-index:10}.senja-embed :is(.hover\\:scale-125:hover){--tw-scale-x:1.25;--tw-scale-y:1.25;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.senja-embed :is(.hover\\:scale-\\[1\\.02\\]:hover){--tw-scale-x:1.02;--tw-scale-y:1.02;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.senja-embed :is(.hover\\:border-transparent:hover){border-color:transparent}.senja-embed :is(.hover\\:bg-white\\/20:hover){background-color:hsla(0,0%,100%,.2)}.senja-embed :is(.hover\\:bg-gradient-to-r:hover){background-image:linear-gradient(to right,var(--tw-gradient-stops))}.senja-embed :is(.hover\\:from-\\[\\#6701EF\\]:hover){--tw-gradient-from:#6701ef var(--tw-gradient-from-position);--tw-gradient-to:rgba(103,1,239,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.senja-embed :is(.hover\\:to-purple-500:hover){--tw-gradient-to:#a855f7 var(--tw-gradient-to-position)}.senja-embed :is(.hover\\:text-white:hover){--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.senja-embed :is(.hover\\:shadow-xl:hover){--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.senja-embed :is(.group:hover .group-hover\\:-mr-0){margin-right:0}.senja-embed :is(.group:hover .group-hover\\:scale-105){--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.senja-embed :is(.group:hover .group-hover\\:opacity-50){opacity:.5}@media (min-width:640px){.senja-embed :is(.sm\\:text-xl){font-size:20px;line-height:28px}}@media (min-width:768px){.senja-embed :is(.md\\:text-xl){font-size:20px;line-height:28px}}";
    Lr(Tr);
    const Br = (e,t)=>{
        const n = new Pr;
        window.addEventListener("senjaWidgetLoaded", (function(i) {
            var o;
            let r = i.detail;
            const a = r.id
              , s = r.widget
              , l = r.designId
              , c = r.aggregate;
            let d = r.reviews;
            if ("random" == (null === (o = null == s ? void 0 : s.testimonial_arrangement) || void 0 === o ? void 0 : o.sort) && (d = d.sort((()=>Math.random() - .5))),
            l !== e)
                return;
            d = Ur(d, s),
            Nr(s);
            const u = Array.from(document.querySelectorAll(`.senja-embed[data-id="${a}"]`));
            u.forEach((e=>{
                e && "true" !== e.getAttribute("data-built") && (e.setAttribute("data-built", "true"),
                e.removeAttribute("data-building"),
                Dr({
                    targetDiv: e,
                    widget: s,
                    reviews: d,
                    builder: t,
                    aggregate: c
                }),
                "false" != e.getAttribute("data-track") && n.track(e, s))
            }
            ))
        }
        ))
    }
    ;
    function Ur(e, t) {
        return e.map((e=>{
            var n, i, o, r;
            return Er({
                review: e,
                lang: null === (i = null === (n = t.filters) || void 0 === n ? void 0 : n.languages) || void 0 === i ? void 0 : i[0],
                defaultLang: null === (o = t.config) || void 0 === o ? void 0 : o.defaultLang,
                autoDetectLang: null === (r = t.config) || void 0 === r ? void 0 : r.autoSwapTranslations
            })
        }
        ))
    }
    function Nr(e, t) {
        var n, i;
        let o = document.querySelector("#senja-widget-css");
        o || (o = document.createElement("style"),
        o.id = "senja-widget-css",
        o.textContent = ".senja-embed {  -webkit-text-size-adjust: 100%; }"),
        (null === (n = e.config) || void 0 === n ? void 0 : n.customCss) && (o.textContent = o.textContent + "\n" + (null === (i = e.config) || void 0 === i ? void 0 : i.customCss)),
        document.head.appendChild(o),
        t && t.appendChild(o)
    }
    function Dr(e) {
        var t, n, i, o;
        const {targetDiv: r, widget: a, reviews: s, builder: l} = e
          , c = null !== (t = r.getAttribute("data-mode")) && void 0 !== t ? t : "dom";
        if ("dom" == c)
            l(r, {
                widget: a,
                reviews: s,
                design: a.config.design,
                showAttribution: null === (n = a.config) || void 0 === n ? void 0 : n.showAttribution,
                aggregate: e.aggregate
            });
        else if ("shadow" == c) {
            const t = r.attachShadow({
                mode: "open"
            })
              , n = document.createElement("style");
            n.innerHTML = `\n\t\t\t:host { font-family: inherit; text-align: left; }\n\t\t\t${Mr}\n\t\t\t${Tr}\n\t\t\t${null !== (i = a.config.customCss) && void 0 !== i ? i : ""}\n\t\t`,
            t.appendChild(n);
            const c = document.createElement("div");
            c.className = "senja-embed",
            c.setAttribute("data-id", a.id),
            c.setAttribute("data-built", "true"),
            t.appendChild(c),
            l(c, {
                widget: a,
                reviews: s,
                design: a.config.design,
                showAttribution: null === (o = a.config) || void 0 === o ? void 0 : o.showAttribution,
                aggregate: e.aggregate
            })
        }
    }
    function Ir() {
        Br("avatars_pro", ((e,t)=>{
            new _r({
                target: e,
                props: t
            })
        }
        ))
    }
    Ir()
}();
