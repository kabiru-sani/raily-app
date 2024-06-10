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
    function a() {
        return Object.create(null)
    }
    function o(e) {
        e.forEach(i)
    }
    function r(e) {
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
    function u(e, t, n, i) {
        if (e) {
            const a = p(e, t, n, i);
            return e[0](a)
        }
    }
    function p(e, t, i, a) {
        return e[1] && a ? n(i.ctx.slice(), e[1](a(t))) : i.ctx
    }
    function m(e, t, n, i) {
        if (e[2] && i) {
            const a = e[2](i(n));
            if (void 0 === t.dirty)
                return a;
            if ("object" == typeof a) {
                const e = []
                  , n = Math.max(t.dirty.length, a.length);
                for (let i = 0; i < n; i += 1)
                    e[i] = t.dirty[i] | a[i];
                return e
            }
            return t.dirty | a
        }
        return t.dirty
    }
    function g(e, t, n, i, a, o) {
        if (a) {
            const r = p(t, n, i, o);
            e.p(r, a)
        }
    }
    function h(e) {
        if (e.ctx.length > 32) {
            const t = []
              , n = e.ctx.length / 32;
            for (let e = 0; e < n; e++)
                t[e] = -1;
            return t
        }
        return -1
    }
    function f(e) {
        const t = {};
        for (const n in e)
            "$" !== n[0] && (t[n] = e[n]);
        return t
    }
    function b(e) {
        return null == e ? "" : e
    }
    function v(t) {
        return t && r(t.destroy) ? t.destroy : e
    }
    const w = "undefined" != typeof window;
    let y = w ? ()=>window.performance.now() : ()=>Date.now()
      , x = w ? e=>requestAnimationFrame(e) : e;
    const A = new Set;
    function k(e) {
        A.forEach((t=>{
            t.c(e) || (A.delete(t),
            t.f())
        }
        )),
        0 !== A.size && x(k)
    }
    function $(e) {
        let t;
        return 0 === A.size && x(k),
        {
            promise: new Promise((n=>{
                A.add(t = {
                    c: e,
                    f: n
                })
            }
            )),
            abort() {
                A.delete(t)
            }
        }
    }
    function _(e, t) {
        e.appendChild(t)
    }
    function j(e, t, n) {
        const i = S(e);
        if (!i.getElementById(t)) {
            const e = U("style");
            e.id = t,
            e.textContent = n,
            L(i, e)
        }
    }
    function S(e) {
        if (!e)
            return document;
        const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
        return t && t.host ? t : e.ownerDocument
    }
    function C(e) {
        const t = U("style");
        return L(S(e), t),
        t.sheet
    }
    function L(e, t) {
        return _(e.head || e, t),
        t.sheet
    }
    function z(e, t, n) {
        e.insertBefore(t, n || null)
    }
    function E(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }
    function M(e, t) {
        for (let n = 0; n < e.length; n += 1)
            e[n] && e[n].d(t)
    }
    function U(e) {
        return document.createElement(e)
    }
    function P(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e)
    }
    function R(e) {
        return document.createTextNode(e)
    }
    function B() {
        return R(" ")
    }
    function N() {
        return R("")
    }
    function T(e, t, n, i) {
        return e.addEventListener(t, n, i),
        ()=>e.removeEventListener(t, n, i)
    }
    function D(e) {
        return function(t) {
            return t.stopPropagation(),
            e.call(this, t)
        }
    }
    function I(e, t, n) {
        null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
    }
    const F = ["width", "height"];
    function O(e, t) {
        const n = Object.getOwnPropertyDescriptors(e.__proto__);
        for (const i in t)
            null == t[i] ? e.removeAttribute(i) : "style" === i ? e.style.cssText = t[i] : "__value" === i ? e.value = e[i] = t[i] : n[i] && n[i].set && -1 === F.indexOf(i) ? e[i] = t[i] : I(e, i, t[i])
    }
    function G(e, t) {
        Object.keys(t).forEach((n=>{
            q(e, n, t[n])
        }
        ))
    }
    function q(e, t, n) {
        t in e ? e[t] = "boolean" == typeof e[t] && "" === n || n : I(e, t, n)
    }
    function V(e) {
        return /-/.test(e) ? G : O
    }
    function W(e) {
        return Array.from(e.childNodes)
    }
    function H(e, t) {
        t = "" + t,
        e.data !== t && (e.data = t)
    }
    function K(e, t, n, i) {
        null == n ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "")
    }
    function Z(e, t, {bubbles: n=!1, cancelable: i=!1}={}) {
        const a = document.createEvent("CustomEvent");
        return a.initCustomEvent(e, n, i, t),
        a
    }
    const Y = new Map;
    let X = 0, J;
    function Q(e) {
        let t = 5381
          , n = e.length;
        for (; n--; )
            t = (t << 5) - t ^ e.charCodeAt(n);
        return t >>> 0
    }
    function ee(e, t) {
        const n = {
            stylesheet: C(t),
            rules: {}
        };
        return Y.set(e, n),
        n
    }
    function te(e, t, n, i, a, o, r, s=0) {
        const l = 16.666 / i;
        let c = "{\n";
        for (let e = 0; e <= 1; e += l) {
            const i = t + (n - t) * o(e);
            c += 100 * e + `%{${r(i, 1 - i)}}\n`
        }
        const d = c + `100% {${r(n, 1 - n)}}\n}`
          , u = `__svelte_${Q(d)}_${s}`
          , p = S(e)
          , {stylesheet: m, rules: g} = Y.get(p) || ee(p, e);
        g[u] || (g[u] = !0,
        m.insertRule(`@keyframes ${u} ${d}`, m.cssRules.length));
        const h = e.style.animation || "";
        return e.style.animation = `${h ? `${h}, ` : ""}${u} ${i}ms linear ${a}ms 1 both`,
        X += 1,
        u
    }
    function ne(e, t) {
        const n = (e.style.animation || "").split(", ")
          , i = n.filter(t ? e=>e.indexOf(t) < 0 : e=>-1 === e.indexOf("__svelte"))
          , a = n.length - i.length;
        a && (e.style.animation = i.join(", "),
        X -= a,
        X || ie())
    }
    function ie() {
        x((()=>{
            X || (Y.forEach((e=>{
                const {ownerNode: t} = e.stylesheet;
                t && E(t)
            }
            )),
            Y.clear())
        }
        ))
    }
    function ae(e) {
        J = e
    }
    function oe() {
        if (!J)
            throw new Error("Function called outside component initialization");
        return J
    }
    function re(e) {
        oe().$$.on_mount.push(e)
    }
    function se() {
        const e = oe();
        return (t,n,{cancelable: i=!1}={})=>{
            const a = e.$$.callbacks[t];
            if (a) {
                const o = Z(t, n, {
                    cancelable: i
                });
                return a.slice().forEach((t=>{
                    t.call(e, o)
                }
                )),
                !o.defaultPrevented
            }
            return !0
        }
    }
    const le = []
      , ce = [];
    let de = [];
    const ue = []
      , pe = Promise.resolve();
    let me = !1;
    function ge() {
        me || (me = !0,
        pe.then(xe))
    }
    function he() {
        return ge(),
        pe
    }
    function fe(e) {
        de.push(e)
    }
    function be(e) {
        ue.push(e)
    }
    const ve = new Set;
    let we = 0, ye;
    function xe() {
        if (0 !== we)
            return;
        const e = J;
        do {
            try {
                for (; we < le.length; ) {
                    const e = le[we];
                    we++,
                    ae(e),
                    Ae(e.$$)
                }
            } catch (e) {
                throw le.length = 0,
                we = 0,
                e
            }
            for (ae(null),
            le.length = 0,
            we = 0; ce.length; )
                ce.pop()();
            for (let e = 0; e < de.length; e += 1) {
                const t = de[e];
                ve.has(t) || (ve.add(t),
                t())
            }
            de.length = 0
        } while (le.length);
        for (; ue.length; )
            ue.pop()();
        me = !1,
        ve.clear(),
        ae(e)
    }
    function Ae(e) {
        if (null !== e.fragment) {
            e.update(),
            o(e.before_update);
            const t = e.dirty;
            e.dirty = [-1],
            e.fragment && e.fragment.p(e.ctx, t),
            e.after_update.forEach(fe)
        }
    }
    function ke(e) {
        const t = []
          , n = [];
        de.forEach((i=>-1 === e.indexOf(i) ? t.push(i) : n.push(i))),
        n.forEach((e=>e())),
        de = t
    }
    function $e() {
        return ye || (ye = Promise.resolve(),
        ye.then((()=>{
            ye = null
        }
        ))),
        ye
    }
    function _e(e, t, n) {
        e.dispatchEvent(Z(`${t ? "intro" : "outro"}${n}`))
    }
    const je = new Set;
    let Se;
    function Ce() {
        Se = {
            r: 0,
            c: [],
            p: Se
        }
    }
    function Le() {
        Se.r || o(Se.c),
        Se = Se.p
    }
    function ze(e, t) {
        e && e.i && (je.delete(e),
        e.i(t))
    }
    function Ee(e, t, n, i) {
        if (e && e.o) {
            if (je.has(e))
                return;
            je.add(e),
            Se.c.push((()=>{
                je.delete(e),
                i && (n && e.d(1),
                i())
            }
            )),
            e.o(t)
        } else
            i && i()
    }
    const Me = {
        duration: 0
    };
    function Ue(n, i, a, s) {
        const l = {
            direction: "both"
        };
        let c = i(n, a, l)
          , d = s ? 0 : 1
          , u = null
          , p = null
          , m = null;
        function g() {
            m && ne(n, m)
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
        function f(i) {
            const {delay: a=0, duration: r=300, easing: s=t, tick: l=e, css: f} = c || Me
              , b = {
                start: y() + a,
                b: i
            };
            i || (b.group = Se,
            Se.r += 1),
            u || p ? p = b : (f && (g(),
            m = te(n, d, i, r, a, s, f)),
            i && l(0, 1),
            u = h(b, r),
            fe((()=>_e(n, i, "start"))),
            $((e=>{
                if (p && e > p.start && (u = h(p, r),
                p = null,
                _e(n, u.b, "start"),
                f && (g(),
                m = te(n, d, u.b, u.duration, 0, s, c.css))),
                u)
                    if (e >= u.end)
                        l(d = u.b, 1 - d),
                        _e(n, u.b, "end"),
                        p || (u.b ? g() : --u.group.r || o(u.group.c)),
                        u = null;
                    else if (e >= u.start) {
                        const t = e - u.start;
                        d = u.a + u.d * s(t / u.duration),
                        l(d, 1 - d)
                    }
                return !(!u && !p)
            }
            )))
        }
        return {
            run(e) {
                r(c) ? $e().then((()=>{
                    c = c(l),
                    f(e)
                }
                )) : f(e)
            },
            end() {
                g(),
                u = p = null
            }
        }
    }
    function Pe(e, t) {
        const n = {}
          , i = {}
          , a = {
            $$scope: 1
        };
        let o = e.length;
        for (; o--; ) {
            const r = e[o]
              , s = t[o];
            if (s) {
                for (const e in r)
                    e in s || (i[e] = 1);
                for (const e in s)
                    a[e] || (n[e] = s[e],
                    a[e] = 1);
                e[o] = s
            } else
                for (const e in r)
                    a[e] = 1
        }
        for (const e in i)
            e in n || (n[e] = void 0);
        return n
    }
    function Re(e, t, n) {
        const i = e.$$.props[t];
        void 0 !== i && (e.$$.bound[i] = n,
        n(e.$$.ctx[i]))
    }
    function Be(e) {
        e && e.c()
    }
    function Ne(e, t, n, a) {
        const {fragment: s, after_update: l} = e.$$;
        s && s.m(t, n),
        a || fe((()=>{
            const t = e.$$.on_mount.map(i).filter(r);
            e.$$.on_destroy ? e.$$.on_destroy.push(...t) : o(t),
            e.$$.on_mount = []
        }
        )),
        l.forEach(fe)
    }
    function Te(e, t) {
        const n = e.$$;
        null !== n.fragment && (ke(n.after_update),
        o(n.on_destroy),
        n.fragment && n.fragment.d(t),
        n.on_destroy = n.fragment = null,
        n.ctx = [])
    }
    function De(e, t) {
        -1 === e.$$.dirty[0] && (le.push(e),
        ge(),
        e.$$.dirty.fill(0)),
        e.$$.dirty[t / 31 | 0] |= 1 << t % 31
    }
    function Ie(t, n, i, r, s, l, c, d=[-1]) {
        const u = J;
        ae(t);
        const p = t.$$ = {
            fragment: null,
            ctx: [],
            props: l,
            update: e,
            not_equal: s,
            bound: a(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(n.context || (u ? u.$$.context : [])),
            callbacks: a(),
            dirty: d,
            skip_bound: !1,
            root: n.target || u.$$.root
        };
        c && c(p.root);
        let m = !1;
        if (p.ctx = i ? i(t, n.props || {}, ((e,n,...i)=>{
            const a = i.length ? i[0] : n;
            return p.ctx && s(p.ctx[e], p.ctx[e] = a) && (!p.skip_bound && p.bound[e] && p.bound[e](a),
            m && De(t, e)),
            n
        }
        )) : [],
        p.update(),
        m = !0,
        o(p.before_update),
        p.fragment = !!r && r(p.ctx),
        n.target) {
            if (n.hydrate) {
                const e = W(n.target);
                p.fragment && p.fragment.l(e),
                e.forEach(E)
            } else
                p.fragment && p.fragment.c();
            n.intro && ze(t.$$.fragment),
            Ne(t, n.target, n.anchor, n.customElement),
            xe()
        }
        ae(u)
    }
    class Fe {
        $destroy() {
            Te(this, 1),
            this.$destroy = e
        }
        $on(t, n) {
            if (!r(n))
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
    const Oe = "#6701E6"
      , Ge = "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741"
      , qe = "#FBBF24";
    function Ve(e, t) {
        var n;
        if (!e)
            return null;
        let i = !0
          , a = e;
        if (e.includes("https://senja-io.s3.us-west-1.amazonaws.com"))
            a = e.replace("https://senja-io.s3.us-west-1.amazonaws.com", "https://senjaio.b-cdn.net");
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
                a = e.replace("https://lh3.googleusercontent.com", "https://senja-lh3.b-cdn.net");
            else {
                if (e.includes("https://ph-avatars.imgix.net")) {
                    const n = new URL(e);
                    return (null == t ? void 0 : t.width) && n.searchParams.set("w", `${t.width}`),
                    (null == t ? void 0 : t.height) && n.searchParams.set("w", `${t.height}`),
                    n.toString()
                }
                if (e.includes("https://ik.imagekit.io/senja")) {
                    const i = e.split("https://ik.imagekit.io/senja")[0]
                      , o = e.split("https://ik.imagekit.io/senja")[1];
                    if (e.includes("tr:"))
                        return e;
                    const r = [];
                    return (null == t ? void 0 : t.width) && r.push(`w-${t.width}`),
                    (null == t ? void 0 : t.height) && r.push(`h-${t.height}`),
                    r.push(`f-${null !== (n = null == t ? void 0 : t.format) && void 0 !== n ? n : "webp"}`),
                    a = r.length > 0 ? `${i}https://ik.imagekit.io/senja/tr:${r.join(",")}${o}` : e,
                    a
                }
                i = !1
            }
        }
        if (i) {
            const e = new URL(a);
            return (null == t ? void 0 : t.width) && e.searchParams.set("width", `${t.width}`),
            (null == t ? void 0 : t.height) && e.searchParams.set("height", `${t.height}`),
            (null == t ? void 0 : t.format) && e.searchParams.set("format", null == t ? void 0 : t.format),
            e.toString()
        }
        return e
    }
    let We = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    };
    const He = (e,t)=>{
        var n, i;
        const a = e.src
          , o = null === (i = null === (n = null === window || void 0 === window ? void 0 : window.location) || void 0 === n ? void 0 : n.search) || void 0 === i ? void 0 : i.includes("disableLazyLoad=true");
        if (o)
            return;
        const r = ()=>{
            const t = e.getBoundingClientRect();
            return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
        }
        ;
        if (r())
            return;
        e.src = "";
        const s = ()=>{
            var n;
            null === (n = null == t ? void 0 : t.onLoad) || void 0 === n || n.call(t),
            e.style.opacity = "1"
        }
          , l = new IntersectionObserver((t=>{
            t[0].isIntersecting && (e.src = a,
            e.complete ? s() : e.addEventListener("load", s),
            l.unobserve(e))
        }
        ),We);
        return l.observe(e),
        e.style.opacity = "0",
        {
            destroy() {
                e.removeEventListener("load", s)
            }
        }
    }
    ;
    function Ke(e) {
        j(e, "svelte-1dfnct6", ".sj-avatar-container.svelte-1dfnct6.svelte-1dfnct6{border-radius:9999px;background-color:rgba(128, 128, 128, 0.14)}.sj-avatar-container.svelte-1dfnct6 img.svelte-1dfnct6{border-radius:9999px;object-fit:cover}.sj-avatar-container.svelte-1dfnct6 img.svelte-1dfnct6:after{display:none}")
    }
    function Ze(t) {
        let n, i, a, r, s, l, d, u;
        return {
            c() {
                n = U("div"),
                i = U("img"),
                K(i, "width", t[7] + "px"),
                K(i, "height", t[7] + "px"),
                c(i.src, a = t[6]) || I(i, "src", a),
                I(i, "alt", r = (t[0] ?? "") + " avatar"),
                I(i, "class", s = b(t[2]) + " svelte-1dfnct6"),
                I(i, "loading", "lazy"),
                I(i, "referrerpolicy", "no-referrer"),
                I(n, "class", l = "sj-avatar-container " + t[3] + " svelte-1dfnct6")
            },
            m(e, a) {
                z(e, n, a),
                _(n, i),
                d || (u = [v(t[5].call(null, i)), T(i, "error", t[16])],
                d = !0)
            },
            p(e, [t]) {
                128 & t && K(i, "width", e[7] + "px"),
                128 & t && K(i, "height", e[7] + "px"),
                64 & t && !c(i.src, a = e[6]) && I(i, "src", a),
                1 & t && r !== (r = (e[0] ?? "") + " avatar") && I(i, "alt", r),
                4 & t && s !== (s = b(e[2]) + " svelte-1dfnct6") && I(i, "class", s),
                8 & t && l !== (l = "sj-avatar-container " + e[3] + " svelte-1dfnct6") && I(n, "class", l)
            },
            i: e,
            o: e,
            d(e) {
                e && E(n),
                d = !1,
                o(u)
            }
        }
    }
    function Ye(e, t, n) {
        let i, a, o, r, {src: s} = t, {size: l="40px"} = t, {useSize: c=!0} = t, {gravatarHash: d} = t, {fallbackName: u} = t, {fallbackSrc: p} = t, {optimize: m=!0} = t, {lazyload: g=!0} = t, h = 40, f = 40, b = !1;
        function v(e) {
            return e || (d ? `https://www.gravatar.com/avatar/${d}?d=mp` : p ?? Ge)
        }
        let {class: w=""} = t
          , {outerClass: y=""} = t;
        const x = e=>{
            b || (e.target.src = p ?? Ge,
            n(4, b = !0))
        }
        ;
        return e.$$set = e=>{
            "src"in e && n(9, s = e.src),
            "size"in e && n(8, l = e.size),
            "useSize"in e && n(10, c = e.useSize),
            "gravatarHash"in e && n(11, d = e.gravatarHash),
            "fallbackName"in e && n(0, u = e.fallbackName),
            "fallbackSrc"in e && n(1, p = e.fallbackSrc),
            "optimize"in e && n(12, m = e.optimize),
            "lazyload"in e && n(13, g = e.lazyload),
            "class"in e && n(2, w = e.class),
            "outerClass"in e && n(3, y = e.outerClass)
        }
        ,
        e.$$.update = ()=>{
            if (256 & e.$$.dirty)
                try {
                    n(8, l = parseInt(`${l}`)),
                    n(14, f = parseInt(`${l}`)),
                    h = 1.5 * l
                } catch (e) {
                    console.warn("Error parsing size"),
                    h = 40
                }
            512 & e.$$.dirty && n(15, i = v(s)),
            1280 & e.$$.dirty && n(7, a = c ? l : void 0),
            53248 & e.$$.dirty && n(6, o = m ? Ve(i, {
                width: 1.5 * f,
                height: 1.5 * f,
                format: "webp"
            }) : i),
            8192 & e.$$.dirty && n(5, r = g ? He : ()=>{}
            )
        }
        ,
        [u, p, w, y, b, r, o, a, l, s, c, d, m, g, f, i, x]
    }
    class Xe extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, Ye, Ze, s, {
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
            }, Ke)
        }
    }
    var Je = e=>"number" == typeof e && e === Number(e) && Number.isFinite(e);
    function Qe(e) {
        j(e, "svelte-g0yi58", "svg.svelte-g0yi58{width:var(--width);height:var(--height);margin-right:2px;flex:none;overflow:visible}")
    }
    function et(e) {
        let t, n, i, a, o, r, s, l;
        return {
            c() {
                t = P("defs"),
                n = P("linearGradient"),
                i = P("stop"),
                a = P("stop"),
                r = P("stop"),
                I(i, "offset", "0%"),
                K(i, "stop-color", e[5]),
                K(i, "stop-opacity", "1"),
                I(a, "offset", o = 100 * e[0] + "%"),
                K(a, "stop-color", e[5]),
                K(a, "stop-opacity", "1"),
                I(r, "offset", s = 100 * e[0] + "%"),
                K(r, "stop-color", e[6]),
                K(r, "stop-opacity", "1"),
                I(n, "id", l = "grad-" + e[1]),
                I(n, "x1", "0%"),
                I(n, "y1", "0%"),
                I(n, "x2", "100%"),
                I(n, "y2", "0%")
            },
            m(e, o) {
                z(e, t, o),
                _(t, n),
                _(n, i),
                _(n, a),
                _(n, r)
            },
            p(e, t) {
                1 & t && o !== (o = 100 * e[0] + "%") && I(a, "offset", o),
                1 & t && s !== (s = 100 * e[0] + "%") && I(r, "offset", s),
                2 & t && l !== (l = "grad-" + e[1]) && I(n, "id", l)
            },
            d(e) {
                e && E(t)
            }
        }
    }
    function tt(t) {
        let n, i, a, o, r = 1 !== t[0] && 0 !== t[0] && et(t);
        return {
            c() {
                n = P("svg"),
                r && r.c(),
                i = P("path"),
                I(i, "fill", a = 1 === t[0] ? t[5] : 0 === t[0] ? t[6] : `url(#grad-${t[1]})`),
                I(i, "d", "M187.183 57.47a9.955 9.955 0\n    00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972\n    9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578\n    6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0\n    003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0\n    005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979\n    9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0\n    002.925-10.604zm0 0"),
                I(n, "xmlns", "http://www.w3.org/2000/svg"),
                I(n, "width", "249.748"),
                I(n, "viewBox", "0 -10 187.673 179.503"),
                I(n, "height", "239.338"),
                K(n, "--width", t[4]),
                K(n, "--height", t[7]),
                I(n, "stroke", t[3]),
                I(n, "stroke-width", o = t[2] + "px"),
                I(n, "stroke-linejoin", "round"),
                I(n, "stroke-linecap", "round"),
                I(n, "vector-effect", "non-scaling-stroke"),
                I(n, "class", "svelte-g0yi58")
            },
            m(e, t) {
                z(e, n, t),
                r && r.m(n, null),
                _(n, i)
            },
            p(e, [t]) {
                1 !== e[0] && 0 !== e[0] ? r ? r.p(e, t) : (r = et(e),
                r.c(),
                r.m(n, i)) : r && (r.d(1),
                r = null),
                3 & t && a !== (a = 1 === e[0] ? e[5] : 0 === e[0] ? e[6] : `url(#grad-${e[1]})`) && I(i, "fill", a),
                16 & t && K(n, "--width", e[4]),
                8 & t && I(n, "stroke", e[3]),
                4 & t && o !== (o = e[2] + "px") && I(n, "stroke-width", o)
            },
            i: e,
            o: e,
            d(e) {
                e && E(n),
                r && r.d()
            }
        }
    }
    function nt(e, t, n) {
        let {full: i} = t
          , {id: a} = t
          , {config: o={}} = t;
        const r = o.fullColor || "#ffcf00"
          , s = o.emptyColor || "#7f7f7f";
        let {strokeWidth: l=0} = t
          , {stroke: c="currentColor"} = t
          , d = o.size && Je(o.size) ? o.size : 20;
        d += "px";
        const u = d;
        return e.$$set = e=>{
            "full"in e && n(0, i = e.full),
            "id"in e && n(1, a = e.id),
            "config"in e && n(8, o = e.config),
            "strokeWidth"in e && n(2, l = e.strokeWidth),
            "stroke"in e && n(3, c = e.stroke)
        }
        ,
        [i, a, l, c, d, r, s, u, o]
    }
    class it extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, nt, tt, s, {
                full: 0,
                id: 1,
                config: 8,
                strokeWidth: 2,
                stroke: 3
            }, Qe)
        }
    }
    var at = ()=>"_" + Math.random().toString(36).substr(2, 9);
    function ot(e) {
        j(e, "svelte-11fw6uj", "div.svelte-11fw6uj{display:flex;gap:0.1rem}span.svelte-11fw6uj{color:#7f7f7f;line-height:1;align-self:center;margin-left:8px}")
    }
    function rt(e, t, n) {
        const i = e.slice();
        return i[14] = t[n],
        i
    }
    function st(e) {
        let t, n;
        return t = new it({
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
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i),
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
                n || (ze(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Te(t, e)
            }
        }
    }
    function lt(e) {
        let t, n;
        return {
            c() {
                t = U("span"),
                n = R(e[1]),
                K(t, "font-size", e[6] + "px"),
                I(t, "class", "svelte-11fw6uj")
            },
            m(e, i) {
                z(e, t, i),
                _(t, n)
            },
            p(e, i) {
                2 & i && H(n, e[1]),
                64 & i && K(t, "font-size", e[6] + "px")
            },
            d(e) {
                e && E(t)
            }
        }
    }
    function ct(e) {
        let t, n, i, a = e[7], o = [];
        for (let t = 0; t < a.length; t += 1)
            o[t] = st(rt(e, a, t));
        const r = e=>Ee(o[e], 1, 1, (()=>{
            o[e] = null
        }
        ));
        let s = e[3].showText && lt(e);
        return {
            c() {
                t = U("div");
                for (let e = 0; e < o.length; e += 1)
                    o[e].c();
                n = B(),
                s && s.c(),
                I(t, "style", e[2]),
                I(t, "class", "sj-star-rating svelte-11fw6uj")
            },
            m(e, a) {
                z(e, t, a);
                for (let e = 0; e < o.length; e += 1)
                    o[e] && o[e].m(t, null);
                _(t, n),
                s && s.m(t, null),
                i = !0
            },
            p(e, [l]) {
                if (185 & l) {
                    let i;
                    for (a = e[7],
                    i = 0; i < a.length; i += 1) {
                        const r = rt(e, a, i);
                        o[i] ? (o[i].p(r, l),
                        ze(o[i], 1)) : (o[i] = st(r),
                        o[i].c(),
                        ze(o[i], 1),
                        o[i].m(t, n))
                    }
                    for (Ce(),
                    i = a.length; i < o.length; i += 1)
                        r(i);
                    Le()
                }
                e[3].showText ? s ? s.p(e, l) : (s = lt(e),
                s.c(),
                s.m(t, null)) : s && (s.d(1),
                s = null),
                (!i || 4 & l) && I(t, "style", e[2])
            },
            i(e) {
                if (!i) {
                    for (let e = 0; e < a.length; e += 1)
                        ze(o[e]);
                    i = !0
                }
            },
            o(e) {
                o = o.filter(Boolean);
                for (let e = 0; e < o.length; e += 1)
                    Ee(o[e]);
                i = !1
            },
            d(e) {
                e && E(t),
                M(o, e),
                s && s.d()
            }
        }
    }
    function dt(e, t, n) {
        let i, a, o, r, s, l, c, {id: d=at()} = t, {rating: u} = t, {style: p=""} = t, {config: m={}} = t, {stroke: g="currentColor"} = t, {strokeWidth: h=0} = t, f = m.size && Je(m.size) ? m.size : 20;
        return f = f / 2 < 16 ? 16 : f / 2,
        e.$$set = e=>{
            "id"in e && n(0, d = e.id),
            "rating"in e && n(1, u = e.rating),
            "style"in e && n(2, p = e.style),
            "config"in e && n(3, m = e.config),
            "stroke"in e && n(4, g = e.stroke),
            "strokeWidth"in e && n(5, h = e.strokeWidth)
        }
        ,
        e.$$.update = ()=>{
            2 & e.$$.dirty && (!Je(u) || u < 0 || u > 5) && console.error(`Rating prop must be a number between 0 and 5. Received ${u}`),
            2 & e.$$.dirty && n(13, i = Math.floor(u)),
            8194 & e.$$.dirty && n(12, a = Math.round(100 * (u - i)) / 100),
            2 & e.$$.dirty && n(11, o = Math.floor(5 - u)),
            8192 & e.$$.dirty && n(10, r = Array(i).fill(1)),
            4096 & e.$$.dirty && n(9, s = 0 !== a ? [a] : []),
            2048 & e.$$.dirty && n(8, l = Array(o).fill(0)),
            1792 & e.$$.dirty && n(7, c = r.concat(s).concat(l))
        }
        ,
        [d, u, p, m, g, h, f, c, l, s, r, o, a, i]
    }
    class ut extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, dt, ct, s, {
                id: 0,
                rating: 1,
                style: 2,
                config: 3,
                stroke: 4,
                strokeWidth: 5
            }, ot)
        }
    }
    function pt(e) {
        let t, n;
        return t = new ut({
            props: {
                rating: mt(e[0]),
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
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i),
                n = !0
            },
            p(e, [n]) {
                const i = {};
                1 & n && (i.rating = mt(e[0])),
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
                n || (ze(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Te(t, e)
            }
        }
    }
    function mt(e) {
        let t = e;
        return isNaN(e) && (t = 5),
        e < 0 && (t = -e),
        e > 5 && e <= 10 ? t = e / 2 : e > 10 && (t = 5),
        t
    }
    function gt(e, t, n) {
        const i = qe;
        let {rating: a=0} = t
          , {size: o=20} = t
          , {color: r=i} = t
          , {stroke: s="currentColor"} = t
          , {strokeWidth: l=0} = t;
        return e.$$set = e=>{
            "rating"in e && n(0, a = e.rating),
            "size"in e && n(1, o = e.size),
            "color"in e && n(2, r = e.color),
            "stroke"in e && n(3, s = e.stroke),
            "strokeWidth"in e && n(4, l = e.strokeWidth)
        }
        ,
        [a, o, r, s, l, i]
    }
    class ht extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, gt, pt, s, {
                rating: 0,
                size: 1,
                color: 2,
                stroke: 3,
                strokeWidth: 4
            })
        }
    }
    function ft(e) {
        return [(e >> 16 & 255) / 255, (e >> 8 & 255) / 255, (255 & e) / 255]
    }
    ["SCREEN", "LINEAR_LIGHT"].reduce(((e,t,n)=>Object.assign(e, {
        [t]: n
    })), {});
    class bt {
        constructor(e, t, n, i=!1) {
            const a = this
              , o = -1 !== document.location.search.toLowerCase().indexOf("debug=webgl");
            a.canvas = e,
            a.gl = a.canvas.getContext("webgl", {
                antialias: !0
            }),
            a.meshes = [];
            const r = a.gl;
            t && n && this.setSize(t, n),
            a.lastDebugMsg,
            a.debug = i && o ? function(e) {
                const t = new Date;
                t - a.lastDebugMsg > 1e3 && console.log("---"),
                console.log(t.toLocaleTimeString() + Array(Math.max(0, 32 - e.length)).join(" ") + e + ": ", ...Array.from(arguments).slice(1)),
                a.lastDebugMsg = t
            }
            : ()=>{}
            ,
            Object.defineProperties(a, {
                Material: {
                    enumerable: !1,
                    value: class {
                        constructor(e, t, n={}) {
                            const i = this;
                            function o(e, t) {
                                const n = r.createShader(e);
                                return r.shaderSource(n, t),
                                r.compileShader(n),
                                r.getShaderParameter(n, r.COMPILE_STATUS) || console.error(r.getShaderInfoLog(n)),
                                a.debug("Material.compileShaderSource", {
                                    source: t
                                }),
                                n
                            }
                            function s(e, t) {
                                return Object.entries(e).map((([e,n])=>n.getDeclaration(e, t))).join("\n")
                            }
                            i.uniforms = n,
                            i.uniformInstances = [];
                            const l = "\n              precision highp float;\n            ";
                            i.vertexSource = `\n              ${l}\n              attribute vec4 position;\n              attribute vec2 uv;\n              attribute vec2 uvNorm;\n              ${s(a.commonUniforms, "vertex")}\n              ${s(n, "vertex")}\n              ${e}\n            `,
                            i.Source = `\n              ${l}\n              ${s(a.commonUniforms, "fragment")}\n              ${s(n, "fragment")}\n              ${t}\n            `,
                            i.vertexShader = o(r.VERTEX_SHADER, i.vertexSource),
                            i.fragmentShader = o(r.FRAGMENT_SHADER, i.Source),
                            i.program = r.createProgram(),
                            r.attachShader(i.program, i.vertexShader),
                            r.attachShader(i.program, i.fragmentShader),
                            r.linkProgram(i.program),
                            r.getProgramParameter(i.program, r.LINK_STATUS) || console.error(r.getProgramInfoLog(i.program)),
                            r.useProgram(i.program),
                            i.attachUniforms(void 0, a.commonUniforms),
                            i.attachUniforms(void 0, i.uniforms)
                        }
                        attachUniforms(e, t) {
                            const n = this;
                            void 0 === e ? Object.entries(t).forEach((([e,t])=>{
                                n.attachUniforms(e, t)
                            }
                            )) : "array" == t.type ? t.value.forEach(((t,i)=>n.attachUniforms(`${e}[${i}]`, t))) : "struct" == t.type ? Object.entries(t.value).forEach((([t,i])=>n.attachUniforms(`${e}.${t}`, i))) : (a.debug("Material.attachUniforms", {
                                name: e,
                                uniform: t
                            }),
                            n.uniformInstances.push({
                                uniform: t,
                                location: r.getUniformLocation(n.program, e)
                            }))
                        }
                    }
                },
                Uniform: {
                    enumerable: !1,
                    value: class {
                        constructor(e) {
                            this.type = "float",
                            Object.assign(this, e),
                            this.typeFn = {
                                float: "1f",
                                int: "1i",
                                vec2: "2fv",
                                vec3: "3fv",
                                vec4: "4fv",
                                mat4: "Matrix4fv"
                            }[this.type] || "1f",
                            this.update()
                        }
                        update(e) {
                            void 0 !== this.value && r[`uniform${this.typeFn}`](e, 0 === this.typeFn.indexOf("Matrix") ? this.transpose : this.value, 0 === this.typeFn.indexOf("Matrix") ? this.value : null)
                        }
                        getDeclaration(e, t, n) {
                            const i = this;
                            if (i.excludeFrom !== t) {
                                if ("array" === i.type)
                                    return i.value[0].getDeclaration(e, t, i.value.length) + `\nconst int ${e}_length = ${i.value.length};`;
                                if ("struct" === i.type) {
                                    let a = e.replace("u_", "");
                                    return a = a.charAt(0).toUpperCase() + a.slice(1),
                                    `uniform struct ${a} \n                                  {\n` + Object.entries(i.value).map((([e,n])=>n.getDeclaration(e, t).replace(/^uniform/, ""))).join("") + `\n} ${e}${n > 0 ? `[${n}]` : ""};`
                                }
                                return `uniform ${i.type} ${e}${n > 0 ? `[${n}]` : ""};`
                            }
                        }
                    }
                },
                PlaneGeometry: {
                    enumerable: !1,
                    value: class {
                        constructor(e, t, n, i, o) {
                            r.createBuffer(),
                            this.attributes = {
                                position: new a.Attribute({
                                    target: r.ARRAY_BUFFER,
                                    size: 3
                                }),
                                uv: new a.Attribute({
                                    target: r.ARRAY_BUFFER,
                                    size: 2
                                }),
                                uvNorm: new a.Attribute({
                                    target: r.ARRAY_BUFFER,
                                    size: 2
                                }),
                                index: new a.Attribute({
                                    target: r.ELEMENT_ARRAY_BUFFER,
                                    size: 3,
                                    type: r.UNSIGNED_SHORT
                                })
                            },
                            this.setTopology(n, i),
                            this.setSize(e, t, o)
                        }
                        setTopology(e=1, t=1) {
                            const n = this;
                            n.xSegCount = e,
                            n.ySegCount = t,
                            n.vertexCount = (n.xSegCount + 1) * (n.ySegCount + 1),
                            n.quadCount = n.xSegCount * n.ySegCount * 2,
                            n.attributes.uv.values = new Float32Array(2 * n.vertexCount),
                            n.attributes.uvNorm.values = new Float32Array(2 * n.vertexCount),
                            n.attributes.index.values = new Uint16Array(3 * n.quadCount);
                            for (let e = 0; e <= n.ySegCount; e++)
                                for (let t = 0; t <= n.xSegCount; t++) {
                                    const i = e * (n.xSegCount + 1) + t;
                                    if (n.attributes.uv.values[2 * i] = t / n.xSegCount,
                                    n.attributes.uv.values[2 * i + 1] = 1 - e / n.ySegCount,
                                    n.attributes.uvNorm.values[2 * i] = t / n.xSegCount * 2 - 1,
                                    n.attributes.uvNorm.values[2 * i + 1] = 1 - e / n.ySegCount * 2,
                                    t < n.xSegCount && e < n.ySegCount) {
                                        const a = e * n.xSegCount + t;
                                        n.attributes.index.values[6 * a] = i,
                                        n.attributes.index.values[6 * a + 1] = i + 1 + n.xSegCount,
                                        n.attributes.index.values[6 * a + 2] = i + 1,
                                        n.attributes.index.values[6 * a + 3] = i + 1,
                                        n.attributes.index.values[6 * a + 4] = i + 1 + n.xSegCount,
                                        n.attributes.index.values[6 * a + 5] = i + 2 + n.xSegCount
                                    }
                                }
                            n.attributes.uv.update(),
                            n.attributes.uvNorm.update(),
                            n.attributes.index.update(),
                            a.debug("Geometry.setTopology", {
                                uv: n.attributes.uv,
                                uvNorm: n.attributes.uvNorm,
                                index: n.attributes.index
                            })
                        }
                        setSize(e=1, t=1, n="xz") {
                            const i = this;
                            i.width = e,
                            i.height = t,
                            i.orientation = n,
                            i.attributes.position.values && i.attributes.position.values.length === 3 * i.vertexCount || (i.attributes.position.values = new Float32Array(3 * i.vertexCount));
                            const o = e / -2
                              , r = t / -2
                              , s = e / i.xSegCount
                              , l = t / i.ySegCount;
                            for (let e = 0; e <= i.ySegCount; e++) {
                                const t = r + e * l;
                                for (let a = 0; a <= i.xSegCount; a++) {
                                    const r = o + a * s
                                      , l = e * (i.xSegCount + 1) + a;
                                    i.attributes.position.values[3 * l + "xyz".indexOf(n[0])] = r,
                                    i.attributes.position.values[3 * l + "xyz".indexOf(n[1])] = -t
                                }
                            }
                            i.attributes.position.update(),
                            a.debug("Geometry.setSize", {
                                position: i.attributes.position
                            })
                        }
                    }
                },
                Mesh: {
                    enumerable: !1,
                    value: class {
                        constructor(e, t) {
                            const n = this;
                            n.geometry = e,
                            n.material = t,
                            n.wireframe = !1,
                            n.attributeInstances = [],
                            Object.entries(n.geometry.attributes).forEach((([e,t])=>{
                                n.attributeInstances.push({
                                    attribute: t,
                                    location: t.attach(e, n.material.program)
                                })
                            }
                            )),
                            a.meshes.push(n),
                            a.debug("Mesh.constructor", {
                                mesh: n
                            })
                        }
                        draw() {
                            r.useProgram(this.material.program),
                            this.material.uniformInstances.forEach((({uniform: e, location: t})=>e.update(t))),
                            this.attributeInstances.forEach((({attribute: e, location: t})=>e.use(t))),
                            r.drawElements(this.wireframe ? r.LINES : r.TRIANGLES, this.geometry.attributes.index.values.length, r.UNSIGNED_SHORT, 0)
                        }
                        remove() {
                            a.meshes = a.meshes.filter((e=>e != this))
                        }
                    }
                },
                Attribute: {
                    enumerable: !1,
                    value: class {
                        constructor(e) {
                            this.type = r.FLOAT,
                            this.normalized = !1,
                            this.buffer = r.createBuffer(),
                            Object.assign(this, e),
                            this.update()
                        }
                        update() {
                            void 0 !== this.values && (r.bindBuffer(this.target, this.buffer),
                            r.bufferData(this.target, this.values, r.STATIC_DRAW))
                        }
                        attach(e, t) {
                            const n = r.getAttribLocation(t, e);
                            return this.target === r.ARRAY_BUFFER && (r.enableVertexAttribArray(n),
                            r.vertexAttribPointer(n, this.size, this.type, this.normalized, 0, 0)),
                            n
                        }
                        use(e) {
                            r.bindBuffer(this.target, this.buffer),
                            this.target === r.ARRAY_BUFFER && (r.enableVertexAttribArray(e),
                            r.vertexAttribPointer(e, this.size, this.type, this.normalized, 0, 0))
                        }
                    }
                }
            });
            const s = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            a.commonUniforms = {
                projectionMatrix: new a.Uniform({
                    type: "mat4",
                    value: s
                }),
                modelViewMatrix: new a.Uniform({
                    type: "mat4",
                    value: s
                }),
                resolution: new a.Uniform({
                    type: "vec2",
                    value: [1, 1]
                }),
                aspectRatio: new a.Uniform({
                    type: "float",
                    value: 1
                })
            }
        }
        setSize(e=640, t=480) {
            this.width = e,
            this.height = t,
            this.canvas.width = e,
            this.canvas.height = t,
            this.gl.viewport(0, 0, e, t),
            this.commonUniforms.resolution.value = [e, t],
            this.commonUniforms.aspectRatio.value = e / t,
            this.debug("MiniGL.setSize", {
                width: e,
                height: t
            })
        }
        setOrthographicCamera(e=0, t=0, n=0, i=-2e3, a=2e3) {
            this.commonUniforms.projectionMatrix.value = [2 / this.width, 0, 0, 0, 0, 2 / this.height, 0, 0, 0, 0, 2 / (i - a), 0, e, t, n, 1],
            this.debug("setOrthographicCamera", this.commonUniforms.projectionMatrix.value)
        }
        render() {
            this.gl.clearColor(0, 0, 0, 0),
            this.gl.clearDepth(1),
            this.meshes.forEach((e=>e.draw()))
        }
    }
    function vt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    class wt {
        constructor(...e) {
            vt(this, "el", void 0),
            vt(this, "cssVarRetries", 0),
            vt(this, "maxCssVarRetries", 200),
            vt(this, "angle", 0),
            vt(this, "isLoadedClass", !1),
            vt(this, "isScrolling", !1),
            vt(this, "scrollingTimeout", void 0),
            vt(this, "scrollingRefreshDelay", 200),
            vt(this, "isIntersecting", !1),
            vt(this, "shaderFiles", void 0),
            vt(this, "vertexShader", void 0),
            vt(this, "sectionColors", void 0),
            vt(this, "computedCanvasStyle", void 0),
            vt(this, "conf", void 0),
            vt(this, "uniforms", void 0),
            vt(this, "t", 1253106),
            vt(this, "last", 0),
            vt(this, "width", void 0),
            vt(this, "minWidth", 1111),
            vt(this, "height", 600),
            vt(this, "xSegCount", void 0),
            vt(this, "ySegCount", void 0),
            vt(this, "mesh", void 0),
            vt(this, "material", void 0),
            vt(this, "geometry", void 0),
            vt(this, "minigl", void 0),
            vt(this, "scrollObserver", void 0),
            vt(this, "amp", 320),
            vt(this, "seed", 5),
            vt(this, "freqX", 14e-5),
            vt(this, "freqY", 29e-5),
            vt(this, "freqDelta", 1e-5),
            vt(this, "activeColors", [1, 1, 1, 1]),
            vt(this, "isMetaKey", !1),
            vt(this, "isGradientLegendVisible", !1),
            vt(this, "isMouseDown", !1),
            vt(this, "handleScroll", (()=>{
                clearTimeout(this.scrollingTimeout),
                this.scrollingTimeout = setTimeout(this.handleScrollEnd, this.scrollingRefreshDelay),
                this.isGradientLegendVisible && this.hideGradientLegend(),
                this.conf.playing && (this.isScrolling = !0,
                this.pause())
            }
            )),
            vt(this, "handleScrollEnd", (()=>{
                this.isScrolling = !1,
                this.isIntersecting && this.play()
            }
            )),
            vt(this, "resize", (()=>{
                this.width = window.innerWidth,
                this.minigl.setSize(this.width, this.height),
                this.minigl.setOrthographicCamera(),
                this.xSegCount = Math.ceil(this.width * this.conf.density[0]),
                this.ySegCount = Math.ceil(this.height * this.conf.density[1]),
                this.mesh.geometry.setTopology(this.xSegCount, this.ySegCount),
                this.mesh.geometry.setSize(this.width, this.height),
                this.mesh.material.uniforms.u_shadow_power.value = this.width < 600 ? 5 : 6
            }
            )),
            vt(this, "handleMouseDown", (e=>{
                this.isGradientLegendVisible && (this.isMetaKey = e.metaKey,
                this.isMouseDown = !0,
                !1 === this.conf.playing && requestAnimationFrame(this.animate))
            }
            )),
            vt(this, "handleMouseUp", (()=>{
                this.isMouseDown = !1
            }
            )),
            vt(this, "animate", (e=>{
                if (!this.shouldSkipFrame(e) || this.isMouseDown) {
                    if (this.t += Math.min(e - this.last, 1e3 / 15),
                    this.last = e,
                    this.isMouseDown) {
                        let e = 160;
                        this.isMetaKey && (e = -160),
                        this.t += e
                    }
                    this.mesh.material.uniforms.u_time.value = this.t,
                    this.minigl.render()
                }
                if (0 !== this.last && this.isStatic)
                    return this.minigl.render(),
                    void this.disconnect();
                (this.conf.playing || this.isMouseDown) && requestAnimationFrame(this.animate)
            }
            )),
            vt(this, "addIsLoadedClass", (()=>{
                !this.isLoadedClass && (this.isLoadedClass = !0,
                this.el.classList.add("isLoaded"),
                setTimeout((()=>{
                    this.el.parentElement.classList.add("isLoaded")
                }
                ), 3e3))
            }
            )),
            vt(this, "pause", (()=>{
                this.conf.playing = !1
            }
            )),
            vt(this, "play", (()=>{
                requestAnimationFrame(this.animate),
                this.conf.playing = !0
            }
            )),
            vt(this, "initGradient", (e=>(this.el = document.querySelector(e),
            this.connect(),
            this)))
        }
        async connect() {
            this.shaderFiles = {
                vertex: "varying vec3 v_color;\n\nvoid main() {\n  float time = u_time * u_global.noiseSpeed;\n\n  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;\n\n  vec2 st = 1. - uvNorm.xy;\n\n  //\n  // Tilting the plane\n  //\n\n  // Front-to-back tilt\n  float tilt = resolution.y / 2.0 * uvNorm.y;\n\n  // Left-to-right angle\n  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;\n\n  // Up-down shift to offset incline\n  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);\n\n  //\n  // Vertex noise\n  //\n\n  float noise = snoise(vec3(\n    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,\n    noiseCoord.y * u_vertDeform.noiseFreq.y,\n    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed\n  )) * u_vertDeform.noiseAmp;\n\n  // Fade noise to zero at edges\n  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);\n\n  // Clamp to 0\n  noise = max(0.0, noise);\n\n  vec3 pos = vec3(\n    position.x,\n    position.y + tilt + incline + noise - offset,\n    position.z\n  );\n\n  //\n  // Vertex color, to be passed to fragment shader\n  //\n\n  if (u_active_colors[0] == 1.) {\n    v_color = u_baseColor;\n  }\n\n  for (int i = 0; i < u_waveLayers_length; i++) {\n    if (u_active_colors[i + 1] == 1.) {\n      WaveLayers layer = u_waveLayers[i];\n\n      float noise = smoothstep(\n        layer.noiseFloor,\n        layer.noiseCeil,\n        snoise(vec3(\n          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,\n          noiseCoord.y * layer.noiseFreq.y,\n          time * layer.noiseSpeed + layer.noiseSeed\n        )) / 2.0 + 0.5\n      );\n\n      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));\n    }\n  }\n\n  //\n  // Finish\n  //\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}",
                noise: "//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n{\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}",
                blend: "//\n// https://github.com/jamieowen/glsl-blend\n//\n\n// Normal\n\nvec3 blendNormal(vec3 base, vec3 blend) {\n\treturn blend;\n}\n\nvec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n\treturn (blendNormal(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Screen\n\nfloat blendScreen(float base, float blend) {\n\treturn 1.0-((1.0-base)*(1.0-blend));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend) {\n\treturn vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n\treturn (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Multiply\n\nvec3 blendMultiply(vec3 base, vec3 blend) {\n\treturn base*blend;\n}\n\nvec3 blendMultiply(vec3 base, vec3 blend, float opacity) {\n\treturn (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Overlay\n\nfloat blendOverlay(float base, float blend) {\n\treturn base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend) {\n\treturn vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n\treturn (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Hard light\n\nvec3 blendHardLight(vec3 base, vec3 blend) {\n\treturn blendOverlay(blend,base);\n}\n\nvec3 blendHardLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Soft light\n\nfloat blendSoftLight(float base, float blend) {\n\treturn (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend) {\n\treturn vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color dodge\n\nfloat blendColorDodge(float base, float blend) {\n\treturn (blend==1.0)?blend:min(base/(1.0-blend),1.0);\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend) {\n\treturn vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {\n\treturn (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color burn\n\nfloat blendColorBurn(float base, float blend) {\n\treturn (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend) {\n\treturn vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {\n\treturn (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Vivid Light\n\nfloat blendVividLight(float base, float blend) {\n\treturn (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend) {\n\treturn vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Lighten\n\nfloat blendLighten(float base, float blend) {\n\treturn max(blend,base);\n}\n\nvec3 blendLighten(vec3 base, vec3 blend) {\n\treturn vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));\n}\n\nvec3 blendLighten(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLighten(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear burn\n\nfloat blendLinearBurn(float base, float blend) {\n\t// Note : Same implementation as BlendSubtractf\n\treturn max(base+blend-1.0,0.0);\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend) {\n\t// Note : Same implementation as BlendSubtract\n\treturn max(base+blend-vec3(1.0),vec3(0.0));\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear dodge\n\nfloat blendLinearDodge(float base, float blend) {\n\t// Note : Same implementation as BlendAddf\n\treturn min(base+blend,1.0);\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend) {\n\t// Note : Same implementation as BlendAdd\n\treturn min(base+blend,vec3(1.0));\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear light\n\nfloat blendLinearLight(float base, float blend) {\n\treturn blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend) {\n\treturn vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));\n}",
                fragment: "varying vec3 v_color;\n\nvoid main() {\n  vec3 color = v_color;\n  if (u_darken_top == 1.0) {\n    vec2 st = gl_FragCoord.xy/resolution.xy;\n    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;\n  }\n  gl_FragColor = vec4(color, 1.0);\n}"
            },
            this.conf = {
                presetName: "",
                wireframe: !1,
                density: [.06, .16],
                zoom: 1,
                rotation: 0,
                playing: !0
            },
            document.querySelectorAll("canvas").length < 1 ? console.log("DID NOT LOAD HERO STRIPE CANVAS") : (this.minigl = new bt(this.el,null,null,!0),
            requestAnimationFrame((()=>{
                this.el && (this.computedCanvasStyle = getComputedStyle(this.el),
                this.waitForCssVars())
            }
            )))
        }
        disconnect() {
            this.scrollObserver && (window.removeEventListener("scroll", this.handleScroll),
            window.removeEventListener("mousedown", this.handleMouseDown),
            window.removeEventListener("mouseup", this.handleMouseUp),
            window.removeEventListener("keydown", this.handleKeyDown),
            this.scrollObserver.disconnect()),
            window.removeEventListener("resize", this.resize)
        }
        initMaterial() {
            this.uniforms = {
                u_time: new this.minigl.Uniform({
                    value: 0
                }),
                u_shadow_power: new this.minigl.Uniform({
                    value: 5
                }),
                u_darken_top: new this.minigl.Uniform({
                    value: "" === this.el.dataset.jsDarkenTop ? 1 : 0
                }),
                u_active_colors: new this.minigl.Uniform({
                    value: this.activeColors,
                    type: "vec4"
                }),
                u_global: new this.minigl.Uniform({
                    value: {
                        noiseFreq: new this.minigl.Uniform({
                            value: [this.freqX, this.freqY],
                            type: "vec2"
                        }),
                        noiseSpeed: new this.minigl.Uniform({
                            value: 5e-6
                        })
                    },
                    type: "struct"
                }),
                u_vertDeform: new this.minigl.Uniform({
                    value: {
                        incline: new this.minigl.Uniform({
                            value: Math.sin(this.angle) / Math.cos(this.angle)
                        }),
                        offsetTop: new this.minigl.Uniform({
                            value: -.5
                        }),
                        offsetBottom: new this.minigl.Uniform({
                            value: -.5
                        }),
                        noiseFreq: new this.minigl.Uniform({
                            value: [3, 4],
                            type: "vec2"
                        }),
                        noiseAmp: new this.minigl.Uniform({
                            value: this.amp
                        }),
                        noiseSpeed: new this.minigl.Uniform({
                            value: 10
                        }),
                        noiseFlow: new this.minigl.Uniform({
                            value: 3
                        }),
                        noiseSeed: new this.minigl.Uniform({
                            value: this.seed
                        })
                    },
                    type: "struct",
                    excludeFrom: "fragment"
                }),
                u_baseColor: new this.minigl.Uniform({
                    value: this.sectionColors[0],
                    type: "vec3",
                    excludeFrom: "fragment"
                }),
                u_waveLayers: new this.minigl.Uniform({
                    value: [],
                    excludeFrom: "fragment",
                    type: "array"
                })
            };
            for (let e = 1; e < this.sectionColors.length; e += 1)
                this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({
                    value: {
                        color: new this.minigl.Uniform({
                            value: this.sectionColors[e],
                            type: "vec3"
                        }),
                        noiseFreq: new this.minigl.Uniform({
                            value: [2 + e / this.sectionColors.length, 3 + e / this.sectionColors.length],
                            type: "vec2"
                        }),
                        noiseSpeed: new this.minigl.Uniform({
                            value: 11 + .3 * e
                        }),
                        noiseFlow: new this.minigl.Uniform({
                            value: 6.5 + .3 * e
                        }),
                        noiseSeed: new this.minigl.Uniform({
                            value: this.seed + 10 * e
                        }),
                        noiseFloor: new this.minigl.Uniform({
                            value: .1
                        }),
                        noiseCeil: new this.minigl.Uniform({
                            value: .63 + .07 * e
                        })
                    },
                    type: "struct"
                }));
            return this.vertexShader = [this.shaderFiles.noise, this.shaderFiles.blend, this.shaderFiles.vertex].join("\n\n"),
            new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)
        }
        initMesh() {
            this.material = this.initMaterial(),
            this.geometry = new this.minigl.PlaneGeometry,
            this.mesh = new this.minigl.Mesh(this.geometry,this.material)
        }
        shouldSkipFrame(e) {
            return !!window.document.hidden || !this.conf.playing || parseInt(e, 10) % 2 == 0 || void 0
        }
        updateFrequency(e) {
            this.freqX += e,
            this.freqY += e
        }
        toggleColor(e) {
            this.activeColors[e] = 0 === this.activeColors[e] ? 1 : 0
        }
        showGradientLegend() {
            this.width > this.minWidth && (this.isGradientLegendVisible = !0,
            document.body.classList.add("isGradientLegendVisible"))
        }
        hideGradientLegend() {
            this.isGradientLegendVisible = !1,
            document.body.classList.remove("isGradientLegendVisible")
        }
        init() {
            this.initGradientColors(),
            this.initMesh(),
            this.resize(),
            requestAnimationFrame(this.animate),
            window.addEventListener("resize", this.resize)
        }
        waitForCssVars() {
            if (this.computedCanvasStyle && -1 !== this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#"))
                this.init(),
                this.addIsLoadedClass();
            else {
                if (this.cssVarRetries += 1,
                this.cssVarRetries > this.maxCssVarRetries)
                    return this.sectionColors = [16711680, 16711680, 16711935, 65280, 255],
                    void this.init();
                requestAnimationFrame((()=>this.waitForCssVars()))
            }
        }
        initGradientColors() {
            this.sectionColors = ["--gradient-color-1", "--gradient-color-2", "--gradient-color-3", "--gradient-color-4"].map((e=>{
                let t = this.computedCanvasStyle.getPropertyValue(e).trim();
                if (4 === t.length) {
                    const e = t.substr(1).split("").map((e=>e + e)).join("");
                    t = `#${e}`
                }
                return t && `0x${t.substr(1)}`
            }
            )).filter(Boolean).map(ft)
        }
    }
    function yt(e, t) {
        let n;
        try {
            n = e()
        } catch (e) {
            n = "function" == typeof t ? t(e) : t
        }
        return n
    }
    function xt(e, t, n) {
        return Math.min(Math.max(e, n), t)
    }
    class At extends Error {
        constructor(e) {
            super(`Failed to parse color: "${e}"`)
        }
    }
    var kt = At;
    function $t(e) {
        if ("string" != typeof e)
            throw new kt(e);
        if ("transparent" === e.trim().toLowerCase())
            return [0, 0, 0, 0];
        let t = e.trim();
        t = Pt.test(e) ? Ct(e) : e;
        const n = zt.exec(t);
        if (n) {
            const e = Array.from(n).slice(1);
            return [...e.slice(0, 3).map((e=>parseInt(Lt(e, 2), 16))), parseInt(Lt(e[3] || "f", 2), 16) / 255]
        }
        const i = Et.exec(t);
        if (i) {
            const e = Array.from(i).slice(1);
            return [...e.slice(0, 3).map((e=>parseInt(e, 16))), parseInt(e[3] || "ff", 16) / 255]
        }
        const a = Mt.exec(t);
        if (a) {
            const e = Array.from(a).slice(1);
            return [...e.slice(0, 3).map((e=>parseInt(e, 10))), parseFloat(e[3] || "1")]
        }
        const o = Ut.exec(t);
        if (o) {
            const [t,n,i,a] = Array.from(o).slice(1).map(parseFloat);
            if (xt(0, 100, n) !== n)
                throw new kt(e);
            if (xt(0, 100, i) !== i)
                throw new kt(e);
            return [...Bt(t, n, i), Number.isNaN(a) ? 1 : a]
        }
        throw new kt(e)
    }
    function _t(e) {
        let t = 5381
          , n = e.length;
        for (; n; )
            t = 33 * t ^ e.charCodeAt(--n);
        return (t >>> 0) % 2341
    }
    const jt = e=>parseInt(e.replace(/_/g, ""), 36)
      , St = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce(((e,t)=>{
        const n = jt(t.substring(0, 3))
          , i = jt(t.substring(3)).toString(16);
        let a = "";
        for (let e = 0; e < 6 - i.length; e++)
            a += "0";
        return e[n] = `${a}${i}`,
        e
    }
    ), {});
    function Ct(e) {
        const t = e.toLowerCase().trim()
          , n = St[_t(t)];
        if (!n)
            throw new kt(e);
        return `#${n}`
    }
    const Lt = (e,t)=>Array.from(Array(t)).map((()=>e)).join("")
      , zt = new RegExp(`^#${Lt("([a-f0-9])", 3)}([a-f0-9])?$`,"i")
      , Et = new RegExp(`^#${Lt("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`,"i")
      , Mt = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Lt(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i")
      , Ut = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i
      , Pt = /^[a-z]+$/i
      , Rt = e=>Math.round(255 * e)
      , Bt = (e,t,n)=>{
        let i = n / 100;
        if (0 === t)
            return [i, i, i].map(Rt);
        const a = (e % 360 + 360) % 360 / 60
          , o = (1 - Math.abs(2 * i - 1)) * (t / 100)
          , r = o * (1 - Math.abs(a % 2 - 1));
        let s = 0
          , l = 0
          , c = 0;
        a >= 0 && a < 1 ? (s = o,
        l = r) : a >= 1 && a < 2 ? (s = r,
        l = o) : a >= 2 && a < 3 ? (l = o,
        c = r) : a >= 3 && a < 4 ? (l = r,
        c = o) : a >= 4 && a < 5 ? (s = r,
        c = o) : a >= 5 && a < 6 && (s = o,
        c = r);
        const d = i - o / 2
          , u = s + d
          , p = l + d
          , m = c + d;
        return [u, p, m].map(Rt)
    }
    ;
    function Nt(e) {
        const [t,n,i,a] = $t(e).map(((e,t)=>3 === t ? e : e / 255))
          , o = Math.max(t, n, i)
          , r = Math.min(t, n, i)
          , s = (o + r) / 2;
        if (o === r)
            return [0, 0, s, a];
        const l = o - r
          , c = s > .5 ? l / (2 - o - r) : l / (o + r)
          , d = 60 * (t === o ? (n - i) / l + (n < i ? 6 : 0) : n === o ? (i - t) / l + 2 : (t - n) / l + 4);
        return [d, c, s, a]
    }
    function Tt(e, t, n, i) {
        return `hsla(${(e % 360).toFixed()}, ${xt(0, 100, 100 * t).toFixed()}%, ${xt(0, 100, 100 * n).toFixed()}%, ${parseFloat(xt(0, 1, i).toFixed(3))})`
    }
    function Dt(e, t) {
        const [n,i,a,o] = Nt(e);
        return Tt(n + t, i, a, o)
    }
    function It(e) {
        if ("transparent" === e)
            return 0;
        function t(e) {
            const t = e / 255;
            return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }
        const [n,i,a] = $t(e);
        return .2126 * t(n) + .7152 * t(i) + .0722 * t(a)
    }
    function Ft(e) {
        const [t,n,i,a] = $t(e);
        let o = e=>{
            const t = xt(0, 255, e).toString(16);
            return 1 === t.length ? `0${t}` : t
        }
        ;
        return `#${o(t)}${o(n)}${o(i)}${a < 1 ? o(Math.round(255 * a)) : ""}`
    }
    function Ot(e) {
        const t = yt((()=>Ft(null != e ? e : Oe)), (()=>Oe))
          , n = yt((()=>It(t)), (()=>0))
          , i = n > .5 ? "#000000" : "#ffffff"
          , a = n > .5 ? "#ffffff" : "#000000";
        let o = yt((()=>It(t) > .5 ? 1.6 : 1), (()=>1));
        const r = yt((()=>Ft(Dt(t, 20 * o))), (()=>t))
          , s = yt((()=>Ft(Dt(t, 17 * o))), (()=>t))
          , l = yt((()=>Ft(Dt(t, -18 * o))), (()=>t))
          , c = yt((()=>Ft(Dt(t, 0))), (()=>t));
        return `--primary: ${t}; --on-primary: ${i}; --on-primary-polar: ${a}; --gradient-color-1: ${r}; --gradient-color-2: ${s}; --gradient-color-3: ${l}; --gradient-color-4: ${c};`
    }
    function Gt(e) {
        return new Promise((t=>{
            if (document.querySelector(e))
                return t(document.querySelector(e));
            const n = new MutationObserver((i=>{
                document.querySelector(e) && (t(document.querySelector(e)),
                n.disconnect())
            }
            ));
            n.observe(document.body, {
                childList: !0,
                subtree: !0
            })
        }
        ))
    }
    function qt(e) {
        let t;
        const n = e[2].default
          , i = u(n, e, e[1], null);
        return {
            c() {
                i && i.c()
            },
            m(e, n) {
                i && i.m(e, n),
                t = !0
            },
            p(e, a) {
                i && i.p && (!t || 2 & a) && g(i, n, e, e[1], t ? m(n, e[1], a, null) : h(e[1]), null)
            },
            i(e) {
                t || (ze(i, e),
                t = !0)
            },
            o(e) {
                Ee(i, e),
                t = !1
            },
            d(e) {
                i && i.d(e)
            }
        }
    }
    function Vt(e) {
        let t, n, i = e[0] && qt(e);
        return {
            c() {
                i && i.c(),
                t = N()
            },
            m(e, a) {
                i && i.m(e, a),
                z(e, t, a),
                n = !0
            },
            p(e, [n]) {
                e[0] ? i ? (i.p(e, n),
                1 & n && ze(i, 1)) : (i = qt(e),
                i.c(),
                ze(i, 1),
                i.m(t.parentNode, t)) : i && (Ce(),
                Ee(i, 1, 1, (()=>{
                    i = null
                }
                )),
                Le())
            },
            i(e) {
                n || (ze(i),
                n = !0)
            },
            o(e) {
                Ee(i),
                n = !1
            },
            d(e) {
                i && i.d(e),
                e && E(t)
            }
        }
    }
    function Wt(e, t, n) {
        let {$$slots: i={}, $$scope: a} = t
          , o = !1;
        return re((()=>{
            n(0, o = !0)
        }
        )),
        e.$$set = e=>{
            "$$scope"in e && n(1, a = e.$$scope)
        }
        ,
        [o, a, i]
    }
    class Ht extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, Wt, Vt, s, {})
        }
    }
    function Kt(e) {
        let t;
        return {
            c() {
                t = U("canvas"),
                I(t, "id", e[0]),
                I(t, "class", "w-full h-full"),
                I(t, "style", e[1]),
                I(t, "data-transition-in", "")
            },
            m(e, n) {
                z(e, t, n)
            },
            p(e, n) {
                1 & n && I(t, "id", e[0])
            },
            d(e) {
                e && E(t)
            }
        }
    }
    function Zt(e) {
        let t, n;
        return t = new Ht({
            props: {
                $$slots: {
                    default: [Kt]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i),
                n = !0
            },
            p(e, [n]) {
                const i = {};
                33 & n && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(i)
            },
            i(e) {
                n || (ze(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Te(t, e)
            }
        }
    }
    function Yt(e, t, n) {
        let i, {color: a=Oe} = t, {id: o="gradient-canvas"} = t;
        const r = Ot(a);
        async function s() {
            i && i.disconnect(),
            await Gt("#gradient-canvas"),
            i = new wt,
            i.initGradient("#gradient-canvas")
        }
        return re((()=>s())),
        e.$$set = e=>{
            "color"in e && n(2, a = e.color),
            "id"in e && n(0, o = e.id)
        }
        ,
        [o, r, a]
    }
    class Xt extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, Yt, Zt, s, {
                color: 2,
                id: 0
            })
        }
    }
    function Jt(e) {
        let t, n, i, a;
        return {
            c() {
                t = U("img"),
                I(t, "alt", n = e[0].alt ?? e[0].id),
                I(t, "width", e[3]),
                I(t, "height", e[3]),
                c(t.src, i = Ve(e[0].src, {
                    format: "png",
                    width: 2 * parseInt(e[3]?.toString())
                })) || I(t, "src", i),
                I(t, "style", a = "width: " + e[3] + "px; height: " + e[3] + "px; object-fit: contain; " + e[7]),
                I(t, "class", e[8])
            },
            m(e, n) {
                z(e, t, n)
            },
            p(e, o) {
                1 & o && n !== (n = e[0].alt ?? e[0].id) && I(t, "alt", n),
                8 & o && I(t, "width", e[3]),
                8 & o && I(t, "height", e[3]),
                9 & o && !c(t.src, i = Ve(e[0].src, {
                    format: "png",
                    width: 2 * parseInt(e[3]?.toString())
                })) && I(t, "src", i),
                136 & o && a !== (a = "width: " + e[3] + "px; height: " + e[3] + "px; object-fit: contain; " + e[7]) && I(t, "style", a),
                256 & o && I(t, "class", e[8])
            },
            d(e) {
                e && E(t)
            }
        }
    }
    function Qt(e) {
        let t, n = e[0].svg + "";
        return {
            c() {
                t = P("svg"),
                I(t, "xmlns", "http://www.w3.org/2000/svg"),
                I(t, "width", e[3]),
                I(t, "height", e[3]),
                I(t, "viewBox", "0 0 24 24"),
                I(t, "stroke", e[1]),
                I(t, "fill", e[2]),
                I(t, "style", e[7]),
                I(t, "stroke-width", e[4]),
                I(t, "stroke-linecap", e[5]),
                I(t, "stroke-linejoin", e[6]),
                I(t, "class", e[8])
            },
            m(e, i) {
                z(e, t, i),
                t.innerHTML = n
            },
            p(e, i) {
                1 & i && n !== (n = e[0].svg + "") && (t.innerHTML = n),
                8 & i && I(t, "width", e[3]),
                8 & i && I(t, "height", e[3]),
                2 & i && I(t, "stroke", e[1]),
                4 & i && I(t, "fill", e[2]),
                128 & i && I(t, "style", e[7]),
                16 & i && I(t, "stroke-width", e[4]),
                32 & i && I(t, "stroke-linecap", e[5]),
                64 & i && I(t, "stroke-linejoin", e[6]),
                256 & i && I(t, "class", e[8])
            },
            d(e) {
                e && E(t)
            }
        }
    }
    function en(t) {
        let n;
        function i(e, t) {
            return "lucide" == e[0].type ? Qt : "image" == e[0].type ? Jt : void 0
        }
        let a = i(t)
          , o = a && a(t);
        return {
            c() {
                o && o.c(),
                n = N()
            },
            m(e, t) {
                o && o.m(e, t),
                z(e, n, t)
            },
            p(e, [t]) {
                a === (a = i(e)) && o ? o.p(e, t) : (o && o.d(1),
                o = a && a(e),
                o && (o.c(),
                o.m(n.parentNode, n)))
            },
            i: e,
            o: e,
            d(e) {
                o && o.d(e),
                e && E(n)
            }
        }
    }
    function tn(e, t, n) {
        let {data: i} = t
          , {stroke: a="currentColor"} = t
          , {fill: o="none"} = t
          , {size: r="24"} = t
          , {strokeWidth: s="2"} = t
          , {strokeLinecap: l="round"} = t
          , {strokeLinejoin: c="round"} = t
          , {style: d=""} = t
          , {class: u=""} = t;
        return e.$$set = e=>{
            "data"in e && n(0, i = e.data),
            "stroke"in e && n(1, a = e.stroke),
            "fill"in e && n(2, o = e.fill),
            "size"in e && n(3, r = e.size),
            "strokeWidth"in e && n(4, s = e.strokeWidth),
            "strokeLinecap"in e && n(5, l = e.strokeLinecap),
            "strokeLinejoin"in e && n(6, c = e.strokeLinejoin),
            "style"in e && n(7, d = e.style),
            "class"in e && n(8, u = e.class)
        }
        ,
        [i, a, o, r, s, l, c, d, u]
    }
    class nn extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, tn, en, s, {
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
    function an(e) {
        j(e, "svelte-oniw8b", "#dots.svelte-oniw8b #dot1.svelte-oniw8b{animation:svelte-oniw8b-load 1s infinite}#dots.svelte-oniw8b #dot2.svelte-oniw8b{animation:svelte-oniw8b-load 1s infinite;animation-delay:0.2s}#dots.svelte-oniw8b #dot3.svelte-oniw8b{animation:svelte-oniw8b-load 1s infinite;animation-delay:0.4s}@keyframes svelte-oniw8b-load{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")
    }
    function on(t) {
        let n, i, a, o, r, s, l, c;
        return {
            c() {
                n = P("svg"),
                i = P("defs"),
                a = P("g"),
                o = P("g"),
                r = P("circle"),
                s = P("circle"),
                l = P("circle"),
                I(r, "id", "dot1"),
                I(r, "cx", "25"),
                I(r, "cy", "30"),
                I(r, "r", "13"),
                I(r, "class", "svelte-oniw8b"),
                I(s, "id", "dot2"),
                I(s, "cx", "65"),
                I(s, "cy", "30"),
                I(s, "r", "13"),
                I(s, "class", "svelte-oniw8b"),
                I(l, "id", "dot3"),
                I(l, "cx", "105"),
                I(l, "cy", "30"),
                I(l, "r", "13"),
                I(l, "class", "svelte-oniw8b"),
                I(o, "id", "dots"),
                I(o, "fill", "currentColor"),
                I(o, "class", "svelte-oniw8b"),
                I(a, "id", "Page-1"),
                I(a, "stroke", "none"),
                I(a, "stroke-width", "1"),
                I(a, "fill", "none"),
                I(a, "fill-rule", "evenodd"),
                I(n, "id", "dots"),
                I(n, "width", c = t[0] + "px"),
                I(n, "viewBox", "0 0 132 58"),
                I(n, "version", "1.1"),
                I(n, "xmlns", "http://www.w3.org/2000/svg"),
                I(n, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
                I(n, "class", "svelte-oniw8b")
            },
            m(e, t) {
                z(e, n, t),
                _(n, i),
                _(n, a),
                _(a, o),
                _(o, r),
                _(o, s),
                _(o, l)
            },
            p(e, [t]) {
                1 & t && c !== (c = e[0] + "px") && I(n, "width", c)
            },
            i: e,
            o: e,
            d(e) {
                e && E(n)
            }
        }
    }
    function rn(e, t, n) {
        let {size: i=32} = t;
        return e.$$set = e=>{
            "size"in e && n(0, i = e.size)
        }
        ,
        [i]
    }
    class sn extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, rn, on, s, {
                size: 0
            }, an)
        }
    }
    function ln(e) {
        let t, n, i, a;
        return i = new sn({}),
        {
            c() {
                t = U("div"),
                n = U("span"),
                Be(i.$$.fragment),
                I(n, "class", e[4]),
                I(t, "class", "absolute inset-0 flex items-center justify-center")
            },
            m(e, o) {
                z(e, t, o),
                _(t, n),
                Ne(i, n, null),
                a = !0
            },
            p(e, t) {
                (!a || 16 & t) && I(n, "class", e[4])
            },
            i(e) {
                a || (ze(i.$$.fragment, e),
                a = !0)
            },
            o(e) {
                Ee(i.$$.fragment, e),
                a = !1
            },
            d(e) {
                e && E(t),
                Te(i)
            }
        }
    }
    function cn(e) {
        let t, n, i, a, o, r, s, l, d, u = e[5] && ln(e);
        return {
            c() {
                t = U("div"),
                n = U("img"),
                o = B(),
                u && u.c(),
                I(n, "class", i = e[6].class + " duration-100 " + (e[5] ? "opacity-0" : "opacity-100")),
                c(n.src, a = e[0]) || I(n, "src", a),
                I(n, "alt", e[1]),
                I(n, "style", e[2]),
                I(t, "class", r = e[3] + " relative")
            },
            m(i, a) {
                z(i, t, a),
                _(t, n),
                _(t, o),
                u && u.m(t, null),
                s = !0,
                l || (d = T(n, "load", e[7]),
                l = !0)
            },
            p(e, [o]) {
                (!s || 96 & o && i !== (i = e[6].class + " duration-100 " + (e[5] ? "opacity-0" : "opacity-100"))) && I(n, "class", i),
                (!s || 1 & o && !c(n.src, a = e[0])) && I(n, "src", a),
                (!s || 2 & o) && I(n, "alt", e[1]),
                (!s || 4 & o) && I(n, "style", e[2]),
                e[5] ? u ? (u.p(e, o),
                32 & o && ze(u, 1)) : (u = ln(e),
                u.c(),
                ze(u, 1),
                u.m(t, null)) : u && (Ce(),
                Ee(u, 1, 1, (()=>{
                    u = null
                }
                )),
                Le()),
                (!s || 8 & o && r !== (r = e[3] + " relative")) && I(t, "class", r)
            },
            i(e) {
                s || (ze(u),
                s = !0)
            },
            o(e) {
                Ee(u),
                s = !1
            },
            d(e) {
                e && E(t),
                u && u.d(),
                l = !1,
                d()
            }
        }
    }
    function dn(e, t, i) {
        let {src: a} = t
          , {alt: o=""} = t
          , {style: r=""} = t
          , {containerClass: s=""} = t
          , {iconClass: l=""} = t
          , c = !0;
        const d = ()=>i(5, c = !1);
        return e.$$set = e=>{
            i(6, t = n(n({}, t), f(e))),
            "src"in e && i(0, a = e.src),
            "alt"in e && i(1, o = e.alt),
            "style"in e && i(2, r = e.style),
            "containerClass"in e && i(3, s = e.containerClass),
            "iconClass"in e && i(4, l = e.iconClass)
        }
        ,
        t = f(t),
        [a, o, r, s, l, c, t, d]
    }
    class un extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, dn, cn, s, {
                src: 0,
                alt: 1,
                style: 2,
                containerClass: 3,
                iconClass: 4
            })
        }
    }
    const pn = {
        type: "lucide",
        svg: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>'
    }
      , mn = {
        type: "lucide",
        svg: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>'
    }
      , gn = {
        type: "lucide",
        svg: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>'
    }
      , hn = {
        type: "lucide",
        svg: '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>'
    }
      , fn = {
        type: "lucide",
        svg: '<path d="m22 8-6 4 6 4V8Z"></path><rect x="2" y="6" width="14" height="12" rx="2" ry="2"></rect>'
    }
      , bn = {
        type: "lucide",
        svg: '<path d="M17 6.1H3"></path><path d="M21 12.1H3"></path><path d="M15.1 18H3"></path>'
    }
      , vn = {
        type: "lucide",
        svg: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M8 13h2"></path><path d="M8 17h2"></path><path d="M14 13h2"></path><path d="M14 17h2"></path>'
    }
      , wn = {
        type: "lucide",
        svg: '<polygon points="5 3 19 12 5 21 5 3"></polygon>'
    }
      , yn = {
        id: "apple_podcasts",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/apple-podcasts_qu93U89iEW.png?updatedAt=1683237865905"
    }
      , xn = {
        id: "app_store",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/app-store-logo_e_ZmR6wR4.png?updatedAt=1683237874270"
    }
      , An = {
        id: "bubble",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/bubble-logo_foz6MHVo6.png?updatedAt=1683237858026"
    }
      , kn = {
        id: "capterra",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/capterra-logo_dW13Iq2VO.png?updatedAt=1683237846036"
    }
      , $n = {
        id: "carrd",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/carrd-logo_6Ez0I7JFW.png?updatedAt=1683237844102"
    }
      , _n = {
        id: "discord",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/discord_logo_ryxE_0yTF.png?updatedAt=1683238202180"
    }
      , jn = {
        id: "facebook",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/facebook_bFffK2WVJ.png?updatedAt=1683237837525"
    }
      , Sn = {
        id: "g2",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/g2-logo_KM4Oxlm17.png?updatedAt=1683238273960"
    }
      , Cn = {
        id: "google",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/google-logo_nQ-UQh1h8.png?updatedAt=1683237861964"
    }
      , Ln = {
        id: "gumroad",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/gumroad-logo_nCzndaRQ_.png?updatedAt=1683238414669"
    }
      , zn = {
        id: "instagram",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/instagram__BkwWamZT.png?updatedAt=1683238469749"
    }
      , En = {
        id: "linkedin",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/linkedin-icon_SZpzTuOcL.webp?updatedAt=1683237860003"
    }
      , Mn = {
        id: "notion",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/Notion_app_logo_iQm2Tu3qyG.png?updatedAt=1683237872290"
    }
      , Un = {
        id: "play_store",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/play-store-logo_RAQM30ZRp.png?updatedAt=1683238557113"
    }
      , Pn = {
        id: "podia",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/podia_4tKUTxXZB.jpeg?updatedAt=1683238615189"
    }
      , Rn = {
        id: "product_hunt",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/Product_Hunt_Logo_ehjmNNDY1.png?updatedAt=1683237851917"
    }
      , Bn = {
        id: "reddit",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/reddit-icon_aG2n8H0yo.png?updatedAt=1683237829748"
    }
      , Nn = {
        id: "shopify",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/shopify-bag-logo-png-0_bWwJIGhd5.png?updatedAt=1683237847822"
    }
      , Tn = {
        id: "slack",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/slack_8_D44fyw_.png?updatedAt=1683237854107"
    }
      , Dn = {
        id: "softr",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/softr-logo_fM83KqgVPW.png?updatedAt=1683237870169"
    }
      , In = {
        id: "squarespace",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/squarespace-logo-png-transparent_1QPRixGxz.png?updatedAt=1683237841693"
    }
      , Fn = {
        id: "teachable",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/teachable_Zz1pI_yxo.png?updatedAt=1683238787277"
    }
      , On = {
        id: "telegram",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/telegram-logo_gXNupXImO.png?updatedAt=1683237876703"
    }
      , Gn = {
        id: "trustpilot",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/trustpilot-logo_Hdn_TGo6b.png?updatedAt=1683237856080"
    }
      , qn = {
        id: "youtube",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/youtube_5osZnL0bQ.png?updatedAt=1683238870218"
    }
      , Vn = {
        id: "twitter",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/twitter-logo_XvN85kjZi.png?updatedAt=1683237831514"
    }
      , Wn = {
        id: "typedream",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/typedream_8OC8v60Pn.png?updatedAt=1683237839558"
    }
      , Hn = {
        id: "unicorn_platform",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/unicorn-platform_Zja5Yqr3M.png?updatedAt=1683237835498"
    }
      , Kn = {
        id: "webflow",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/webflow_logo_icon_169218_l2_U2hF5m.png?updatedAt=1683237863925"
    }
      , Zn = {
        id: "whatsapp",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/whatsapp-logo_Xt5raTHb3.webp?updatedAt=1683237867825"
    }
      , Yn = {
        id: "wix",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/Wix-Logo_wZb7vDZjR.png?updatedAt=1683238950272"
    }
      , Xn = {
        id: "wordpress",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/wordpress-icon-logo-45667D3313-seeklogo.com_ZBGPOZ0Ib.png?updatedAt=1683237849828"
    }
      , Jn = {
        id: "yelp",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/yelp_JPn4XDkwE.png?updatedAt=1683237990771"
    }
      , Qn = {
        id: "zapier",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/zapier_ylMcpjHcH.webp?updatedAt=1683239048590"
    }
      , ei = {
        id: "figma",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/figma_Large_Ugt243kDz.png?updatedAt=1684321035062"
    }
      , ti = {
        id: "sketch",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/sketch-logos-idLLygx0ut_49UXAfh4s.png?updatedAt=1684321032883"
    }
      , ni = {
        id: "patreon",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/patreon-logos-ido-ACGeiB_gS-PG3jFD.png?updatedAt=1684321032822"
    }
      , ii = {
        id: "framer",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/framer_5PeczhHYK.png?updatedAt=1684321032574"
    }
      , ai = {
        id: "click_funnels",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/clickfunnels-logos-idNFbBFNFQ__qNJcj4mD.png?updatedAt=1684321032644"
    }
      , oi = {
        id: "skillshare",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/skillshare_xUns0kSMM.jpg?updatedAt=1710859046835"
    }
      , ri = {
        id: "elementor",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/Elementor-Logo-Symbol-Red_9QslX6u9R.png?updatedAt=1684321032536"
    }
      , si = {
        id: "memberstack",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/memberstack-logos-id9FS_zbIG_IY4aovBUE.png?updatedAt=1684321032497"
    }
      , li = {
        id: "udemy",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/Udemy_logo_6GJgRAMfK.png?updatedAt=1709751703186"
    }
      , ci = {
        id: "kajabi",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/kajabi-2_nzW82_vdo.webp?updatedAt=1684321032609"
    }
      , di = {
        id: "thinkific",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/thinkific-logos-id_WkEb-We_Y9v-y0-sa.png?updatedAt=1684321032179"
    }
      , ui = {
        id: "wordpress_org",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/wordpress-logo-9F351E1870-seeklogo.com_zja2Oa0Zt.png?updatedAt=1684327801481"
    }
      , pi = {
        id: "buy_me_a_coffee",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/buymeacoffee_Sk5tMywBW.png?updatedAt=1685640814115"
    }
      , mi = {
        id: "whop",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/whop-logo-square_1nKVzlAzI.png?updatedAt=1685640814749"
    }
      , gi = {
        id: "tiktok",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/tiktok_UAciSu8FQ.webp?updatedAt=1685640814514"
    }
      , hi = {
        id: "passionfroot",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/passionfroot_X0oCUPNQS.png?updatedAt=1685640813925"
    }
      , fi = {
        id: "lemon_squeezy",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/lemon_squeezy_LpemO5gDZ.png?updatedAt=1685640813905"
    }
      , bi = {
        id: "pinterest",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/pinterest_Ajtml0MBg.png?updatedAt=1685641136048"
    }
      , vi = {
        id: "zillow",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/zillow-logo_olB--SMtZ.png?updatedAt=1709307180674"
    }
      , wi = {
        id: "appsumo",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/appsumo-logo_hs2fpXy43.png?updatedAt=1709307181654"
    }
      , yi = {
        id: "amazon",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/Amazon_icon_g7S332xl3.png?updatedAt=1709307181813"
    }
      , xi = {
        id: "chrome_web_store",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/Google_Chrome_Web_Store_icon_2015.svg_Zw8C9quImI.png?updatedAt=1709757059969"
    }
      , Ai = {
        id: "airbnb",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/airbnb_yzYJ9VUaC.png?updatedAt=1710858443141"
    }
      , ki = {
        id: "realtor",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/realtor_fhBeLPNyU.png?updatedAt=1710858442782"
    }
      , $i = {
        id: "testimonial_to",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/idGJDYcUK8_logos_T9JZE39ZI.png?updatedAt=1711034604079"
    }
      , _i = {
        id: "fiverr",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/pngegg_ab6AfhKr2.png?updatedAt=1712157355470"
    }
      , ji = {
        id: "sourceforge",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/sourceforge-logo-0372412E49-seeklogo.com%20(1)_rZ0kk9If6.png?updatedAt=1715347912023"
    }
      , Si = {
        id: "skool",
        type: "image",
        src: "https://ik.imagekit.io/senja/Logos/idYtQZyeoz_1716815523736_Mmg2O7QP1N.png?updatedAt=1716815549821"
    }
      , Ci = [yn, xn, An, kn, $n, _n, jn, Sn, Cn, Ln, zn, En, Mn, Un, Pn, Rn, Bn, Nn, Tn, Dn, In, Fn, On, Gn, Vn, Wn, Hn, Kn, Zn, _i, Yn, Xn, Jn, qn, Qn, ei, ii, ti, ni, ii, ai, oi, ri, si, li, ci, di, ui, mi, gi, hi, fi, pi, bi, yi, vi, wi, xi, Ai, ki, $i, ji, Si];
    function Li(e) {
        let t, n;
        return t = new nn({
            props: {
                data: e[4],
                size: e[5],
                style: e[2],
                class: e[1]
            }
        }),
        {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                16 & n && (i.data = e[4]),
                4 & n && (i.style = e[2]),
                2 & n && (i.class = e[1]),
                t.$set(i)
            },
            i(e) {
                n || (ze(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Te(t, e)
            }
        }
    }
    function zi(e) {
        let t, n;
        return t = new nn({
            props: {
                data: vn,
                size: e[5],
                class: e[1],
                style: e[2],
                fill: e[3]
            }
        }),
        {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                2 & n && (i.class = e[1]),
                4 & n && (i.style = e[2]),
                8 & n && (i.fill = e[3]),
                t.$set(i)
            },
            i(e) {
                n || (ze(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Te(t, e)
            }
        }
    }
    function Ei(e) {
        let t, n;
        return t = new nn({
            props: {
                data: gn,
                size: e[5],
                class: e[1],
                style: e[2],
                fill: e[3]
            }
        }),
        {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                2 & n && (i.class = e[1]),
                4 & n && (i.style = e[2]),
                8 & n && (i.fill = e[3]),
                t.$set(i)
            },
            i(e) {
                n || (ze(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Te(t, e)
            }
        }
    }
    function Mi(e) {
        let t, n;
        return t = new nn({
            props: {
                data: fn,
                size: e[5],
                class: e[1],
                style: e[2],
                fill: e[3]
            }
        }),
        {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                2 & n && (i.class = e[1]),
                4 & n && (i.style = e[2]),
                8 & n && (i.fill = e[3]),
                t.$set(i)
            },
            i(e) {
                n || (ze(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Te(t, e)
            }
        }
    }
    function Ui(e) {
        let t, n;
        return t = new nn({
            props: {
                data: bn,
                size: e[5],
                class: e[1],
                style: e[2],
                fill: e[3]
            }
        }),
        {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                2 & n && (i.class = e[1]),
                4 & n && (i.style = e[2]),
                8 & n && (i.fill = e[3]),
                t.$set(i)
            },
            i(e) {
                n || (ze(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Te(t, e)
            }
        }
    }
    function Pi(e) {
        let t, n, i, a, o;
        const r = [Ui, Mi, Ei, zi, Li]
          , s = [];
        function l(e, t) {
            return "text" == e[0] ? 0 : "video" == e[0] ? 1 : "image" == e[0] ? 2 : "csv" == e[0] ? 3 : e[4] ? 4 : -1
        }
        return ~(n = l(e)) && (i = s[n] = r[n](e)),
        {
            c() {
                t = U("div"),
                i && i.c(),
                I(t, "class", a = e[7].wrapperClass ?? e[6])
            },
            m(e, i) {
                z(e, t, i),
                ~n && s[n].m(t, null),
                o = !0
            },
            p(e, c) {
                let d = n;
                n = l(e),
                n === d ? ~n && s[n].p(e, c) : (i && (Ce(),
                Ee(s[d], 1, 1, (()=>{
                    s[d] = null
                }
                )),
                Le()),
                ~n ? (i = s[n],
                i ? i.p(e, c) : (i = s[n] = r[n](e),
                i.c()),
                ze(i, 1),
                i.m(t, null)) : i = null),
                (!o || 128 & c && a !== (a = e[7].wrapperClass ?? e[6])) && I(t, "class", a)
            },
            i(e) {
                o || (ze(i),
                o = !0)
            },
            o(e) {
                Ee(i),
                o = !1
            },
            d(e) {
                e && E(t),
                ~n && s[n].d()
            }
        }
    }
    function Ri(t) {
        let n = t[0], i, a, o = Pi(t);
        return {
            c() {
                o.c(),
                i = N()
            },
            m(e, t) {
                o.m(e, t),
                z(e, i, t),
                a = !0
            },
            p(t, [a]) {
                1 & a && s(n, n = t[0]) ? (Ce(),
                Ee(o, 1, 1, e),
                Le(),
                o = Pi(t),
                o.c(),
                ze(o, 1),
                o.m(i.parentNode, i)) : o.p(t, a)
            },
            i(e) {
                a || (ze(o),
                a = !0)
            },
            o(e) {
                Ee(o),
                a = !1
            },
            d(e) {
                e && E(i),
                o.d(e)
            }
        }
    }
    function Bi(e, t, i) {
        let a, {size: o=24} = t, {customPrefs: r={}} = t, {integration: s} = t;
        const l = r[s]?.size ?? r["*"]?.size ?? o
          , c = r[s]?.class ?? r["*"]?.class ?? "";
        let {class: d=""} = t
          , {style: u=r[s]?.style ?? r["*"]?.style ?? ""} = t
          , {fill: p="transparent"} = t;
        return e.$$set = e=>{
            i(7, t = n(n({}, t), f(e))),
            "size"in e && i(8, o = e.size),
            "customPrefs"in e && i(9, r = e.customPrefs),
            "integration"in e && i(0, s = e.integration),
            "class"in e && i(1, d = e.class),
            "style"in e && i(2, u = e.style),
            "fill"in e && i(3, p = e.fill)
        }
        ,
        e.$$.update = ()=>{
            1 & e.$$.dirty && i(4, a = Ci.find((e=>e.id == s)))
        }
        ,
        t = f(t),
        [s, d, u, p, a, l, c, t, o, r]
    }
    class Ni extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, Bi, Ri, s, {
                size: 8,
                customPrefs: 9,
                integration: 0,
                class: 1,
                style: 2,
                fill: 3
            })
        }
    }
    const Ti = ["popup", "toast"]
      , Di = e=>Ti.includes(null == e ? void 0 : e.type);
    function Ii() {
        try {
            const e = navigator.userAgent.toLowerCase();
            return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e)
        } catch (e) {
            return !1
        }
    }
    const Fi = [{
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
    function Oi(e, t=!1, n) {
        var i, a;
        const o = !!e.customer_username
          , r = !!e.customer_tagline
          , s = Gi(e, n);
        if (o || r) {
            const t = (null === (i = e.customer_username) || void 0 === i ? void 0 : i.startsWith("@")) ? e.customer_username : `@${e.customer_username}`;
            return "twitter" === e.integration ? e.customer_username ? t : null != s ? s : "" : "product_hunt" == e.integration ? o ? t : s : null != s ? s : ""
        }
        return t && e.integration ? `Posted on ${null === (a = Fi.find((t=>t.id == e.integration))) || void 0 === a ? void 0 : a.title}` : ""
    }
    function Gi(e, t) {
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
    function qi(e, t) {
        const n = Vi(e);
        return e.thumbnail_url && !(null == t ? void 0 : t.animated) ? e.thumbnail_url : n ? `https://image.mux.com/${n}/${(null == t ? void 0 : t.animated) ? "animated.webp" : "thumbnail.jpg"}` : null
    }
    function Vi(e) {
        var t, n, i;
        if (!e.media_asset)
            return null;
        const a = null === (t = e.media_asset) || void 0 === t ? void 0 : t.metadata;
        if (!(null == a ? void 0 : a.playback_ids))
            return null;
        const o = a.playback_ids;
        return null !== (i = null === (n = o.find((e=>"public" === e.policy))) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : ""
    }
    function Wi(e) {
        const t = e - 1;
        return t * t * t + 1
    }
    function Hi(e, {delay: n=0, duration: i=400, easing: a=t}={}) {
        const o = +getComputedStyle(e).opacity;
        return {
            delay: n,
            duration: i,
            easing: a,
            css: e=>"opacity: " + e * o
        }
    }
    function Ki(e, {delay: t=0, duration: n=400, easing: i=Wi, start: a=0, opacity: o=0}={}) {
        const r = getComputedStyle(e)
          , s = +r.opacity
          , l = "none" === r.transform ? "" : r.transform
          , c = 1 - a
          , d = s * (1 - o);
        return {
            delay: t,
            duration: n,
            easing: i,
            css: (e,t)=>`\n\t\t\ttransform: ${l} scale(${1 - c * t});\n\t\t\topacity: ${s - d * t}\n\t\t`
        }
    }
    Fi.filter((e=>"csv" !== e.id && "video" !== e.id));
    const Zi = e=>({
        text: 8 & e
    })
      , Yi = e=>({
        text: e[3]
    })
      , Xi = e=>({
        text: 4 & e
    })
      , Ji = e=>({
        text: e[2]
    });
    function Qi(e) {
        let t, n, i, a;
        const o = [ta, ea]
          , r = [];
        function s(e, t) {
            return e[5] ? 0 : e[6] ? 1 : -1
        }
        return ~(t = s(e)) && (n = r[t] = o[t](e)),
        {
            c() {
                n && n.c(),
                i = N()
            },
            m(e, n) {
                ~t && r[t].m(e, n),
                z(e, i, n),
                a = !0
            },
            p(e, a) {
                let l = t;
                t = s(e),
                t === l ? ~t && r[t].p(e, a) : (n && (Ce(),
                Ee(r[l], 1, 1, (()=>{
                    r[l] = null
                }
                )),
                Le()),
                ~t ? (n = r[t],
                n ? n.p(e, a) : (n = r[t] = o[t](e),
                n.c()),
                ze(n, 1),
                n.m(i.parentNode, i)) : n = null)
            },
            i(e) {
                a || (ze(n),
                a = !0)
            },
            o(e) {
                Ee(n),
                a = !1
            },
            d(e) {
                ~t && r[t].d(e),
                e && E(i)
            }
        }
    }
    function ea(e) {
        let t, n, i, a;
        const o = e[10].label
          , r = u(o, e, e[9], Yi)
          , s = r || na(e);
        return {
            c() {
                t = U("button"),
                s && s.c(),
                I(t, "class", "border-none"),
                K(t, "opacity", "0.8"),
                K(t, "transform", "scale(0.95)"),
                K(t, "margin-top", "1px"),
                K(t, "transform-origin", "top left")
            },
            m(o, r) {
                z(o, t, r),
                s && s.m(t, null),
                n = !0,
                i || (a = T(t, "click", D(e[8])),
                i = !0)
            },
            p(e, t) {
                r ? r.p && (!n || 520 & t) && g(r, o, e, e[9], n ? m(o, e[9], t, Zi) : h(e[9]), Yi) : s && s.p && (!n || 8 & t) && s.p(e, n ? t : -1)
            },
            i(e) {
                n || (ze(s, e),
                n = !0)
            },
            o(e) {
                Ee(s, e),
                n = !1
            },
            d(e) {
                e && E(t),
                s && s.d(e),
                i = !1,
                a()
            }
        }
    }
    function ta(e) {
        let t, n, i, a;
        const o = e[10].label
          , r = u(o, e, e[9], Ji)
          , s = r || ia(e);
        return {
            c() {
                t = U("button"),
                s && s.c(),
                I(t, "class", "border-none"),
                K(t, "opacity", "0.8"),
                K(t, "transform", "scale(0.95)"),
                K(t, "margin-top", "1px"),
                K(t, "transform-origin", "top left")
            },
            m(o, r) {
                z(o, t, r),
                s && s.m(t, null),
                n = !0,
                i || (a = T(t, "click", D(e[7])),
                i = !0)
            },
            p(e, t) {
                r ? r.p && (!n || 516 & t) && g(r, o, e, e[9], n ? m(o, e[9], t, Xi) : h(e[9]), Ji) : s && s.p && (!n || 4 & t) && s.p(e, n ? t : -1)
            },
            i(e) {
                n || (ze(s, e),
                n = !0)
            },
            o(e) {
                Ee(s, e),
                n = !1
            },
            d(e) {
                e && E(t),
                s && s.d(e),
                i = !1,
                a()
            }
        }
    }
    function na(e) {
        let t, n;
        return {
            c() {
                t = U("span"),
                n = R(e[3])
            },
            m(e, i) {
                z(e, t, i),
                _(t, n)
            },
            p(e, t) {
                8 & t && H(n, e[3])
            },
            d(e) {
                e && E(t)
            }
        }
    }
    function ia(e) {
        let t, n;
        return {
            c() {
                t = U("span"),
                n = R(e[2])
            },
            m(e, i) {
                z(e, t, i),
                _(t, n)
            },
            p(e, t) {
                4 & t && H(n, e[2])
            },
            d(e) {
                e && E(t)
            }
        }
    }
    function aa(e) {
        let t, n, i, a;
        const o = e[10].default
          , r = u(o, e, e[9], null);
        let s = e[1] && Qi(e);
        return {
            c() {
                t = U("div"),
                n = U("div"),
                r && r.c(),
                i = B(),
                s && s.c(),
                K(n, "overflow", "hidden"),
                K(n, "display", "-webkit-box"),
                K(n, "-webkit-line-clamp", e[1] ? `${e[0]}` : "10000"),
                K(n, "-webkit-box-orient", "vertical"),
                K(n, "transition", "-webkit-line-clamp 0.5s ease-out")
            },
            m(o, l) {
                z(o, t, l),
                _(t, n),
                r && r.m(n, null),
                e[11](n),
                _(t, i),
                s && s.m(t, null),
                a = !0
            },
            p(e, [i]) {
                r && r.p && (!a || 512 & i) && g(r, o, e, e[9], a ? m(o, e[9], i, null) : h(e[9]), null),
                (!a || 3 & i) && K(n, "-webkit-line-clamp", e[1] ? `${e[0]}` : "10000"),
                e[1] ? s ? (s.p(e, i),
                2 & i && ze(s, 1)) : (s = Qi(e),
                s.c(),
                ze(s, 1),
                s.m(t, null)) : s && (Ce(),
                Ee(s, 1, 1, (()=>{
                    s = null
                }
                )),
                Le())
            },
            i(e) {
                a || (ze(r, e),
                ze(s),
                a = !0)
            },
            o(e) {
                Ee(r, e),
                Ee(s),
                a = !1
            },
            d(n) {
                n && E(t),
                r && r.d(n),
                e[11](null),
                s && s.d()
            }
        }
    }
    function oa(e, t, n) {
        let {$$slots: i={}, $$scope: a} = t;
        var o = this && this.__awaiter || function(e, t, n, i) {
            function a(e) {
                return e instanceof n ? e : new n((function(t) {
                    t(e)
                }
                ))
            }
            return new (n || (n = Promise))((function(n, o) {
                function r(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : a(e.value).then(r, s)
                }
                l((i = i.apply(e, t || [])).next())
            }
            ))
        }
        ;
        let {maxLines: r=10} = t
          , {enable: s=!0} = t
          , {text: l="Read more"} = t
          , {readLessText: c="Read less"} = t;
        const d = se();
        let u = r, p, m = !1;
        function g() {
            return o(this, void 0, void 0, (function*() {
                yield he();
                const {scrollHeight: e, clientHeight: t} = p;
                if (0 == t)
                    return setTimeout(g, 100);
                n(5, m = e > t),
                d("calculated")
            }
            ))
        }
        re((()=>{
            g()
        }
        ));
        let h = !1;
        function f() {
            return o(this, void 0, void 0, (function*() {
                n(0, r = 1e4),
                yield he(),
                yield g(),
                yield he(),
                d("readMore"),
                n(6, h = !0)
            }
            ))
        }
        function b() {
            return o(this, void 0, void 0, (function*() {
                n(0, r = u),
                yield he(),
                yield g(),
                yield he(),
                d("readMore"),
                n(6, h = !1)
            }
            ))
        }
        function v(e) {
            ce[e ? "unshift" : "push"]((()=>{
                p = e,
                n(4, p)
            }
            ))
        }
        return e.$$set = e=>{
            "maxLines"in e && n(0, r = e.maxLines),
            "enable"in e && n(1, s = e.enable),
            "text"in e && n(2, l = e.text),
            "readLessText"in e && n(3, c = e.readLessText),
            "$$scope"in e && n(9, a = e.$$scope)
        }
        ,
        [r, s, l, c, p, m, h, f, b, a, i, v]
    }
    class ra extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, oa, aa, s, {
                maxLines: 0,
                enable: 1,
                text: 2,
                readLessText: 3
            })
        }
    }
    function sa(t) {
        let n, i, a, o, r, s, l, c, d;
        return {
            c() {
                n = P("svg"),
                i = P("defs"),
                a = P("style"),
                o = R(".cls-1 {\n\t\t\t\tfill: #6701e6;\n\t\t\t}\n\t\t\t.cls-2 {\n\t\t\t\tfill: #8b41f2;\n\t\t\t}\n\t\t"),
                r = P("g"),
                s = P("g"),
                l = P("path"),
                c = P("path"),
                d = P("path"),
                I(l, "class", "cls-1"),
                I(l, "d", "M239.53,111.88,128.9,222.51,93.62,187.23h0L35.36,129l0,0L18.3,111.83a62.5,62.5,0,0,1,0-88.38l5.17-5.15a62.51,62.51,0,0,1,88.38,0l17.09,17.09,17.06-17a62.42,62.42,0,0,1,88.36,0l5.17,5.16A62.49,62.49,0,0,1,239.53,111.88Z"),
                I(c, "class", "cls-2"),
                I(c, "d", "M204.24,76.59,93.65,187.18l0,0h0L35.36,129l0,0L18.3,111.83a62.5,62.5,0,0,1,0-88.38l5.17-5.15a62.51,62.51,0,0,1,88.38,0l17.09,17.09,17.06-17A62.47,62.47,0,0,1,216.66,5.91,62.5,62.5,0,0,1,204.24,76.59Z"),
                I(d, "class", "cls-1"),
                I(d, "d", "M128.94,35.39c-17.51,22-37.38,36.89-57.62,39.78a37.72,37.72,0,1,1-8-74.89C65.11.12,66.87,0,68.61,0A62.22,62.22,0,0,1,111.85,18.3Z"),
                I(s, "id", "Layer_1-2"),
                I(s, "data-name", "Layer 1"),
                I(r, "id", "Layer_2"),
                I(r, "data-name", "Layer 2"),
                I(n, "width", t[0]),
                I(n, "height", t[0]),
                I(n, "class", t[1]),
                I(n, "xmlns", "http://www.w3.org/2000/svg"),
                I(n, "viewBox", "0 0 257.84 222.51")
            },
            m(e, t) {
                z(e, n, t),
                _(n, i),
                _(i, a),
                _(a, o),
                _(n, r),
                _(r, s),
                _(s, l),
                _(s, c),
                _(s, d)
            },
            p(e, [t]) {
                1 & t && I(n, "width", e[0]),
                1 & t && I(n, "height", e[0]),
                2 & t && I(n, "class", e[1])
            },
            i: e,
            o: e,
            d(e) {
                e && E(n)
            }
        }
    }
    function la(e, t, n) {
        let {size: i="32px"} = t
          , {class: a=""} = t;
        return e.$$set = e=>{
            "size"in e && n(0, i = e.size),
            "class"in e && n(1, a = e.class)
        }
        ,
        [i, a]
    }
    class ca extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, la, sa, s, {
                size: 0,
                class: 1
            })
        }
    }
    function da(e) {
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
    function ua(...e) {
        return e.filter(Boolean).join(" ")
    }
    function pa(e) {
        j(e, "svelte-yfjn2g", "a.svelte-yfjn2g{border-bottom:none !important}")
    }
    function ma(e) {
        let t, n, i, a;
        const o = e[9].default
          , r = u(o, e, e[8], null)
          , s = r || ha(e);
        return {
            c() {
                t = U("a"),
                s && s.c(),
                I(t, "target", "_blank"),
                I(t, "href", e[4]),
                I(t, "class", "sj-powered-by flex justify-end svelte-yfjn2g")
            },
            m(o, r) {
                z(o, t, r),
                s && s.m(t, null),
                n = !0,
                i || (a = T(t, "click", e[5]),
                i = !0)
            },
            p(e, i) {
                r ? r.p && (!n || 256 & i) && g(r, o, e, e[8], n ? m(o, e[8], i, null) : h(e[8]), null) : s && s.p && (!n || 2 & i) && s.p(e, n ? i : -1),
                (!n || 16 & i) && I(t, "href", e[4])
            },
            i(e) {
                n || (ze(s, e),
                n = !0)
            },
            o(e) {
                Ee(s, e),
                n = !1
            },
            d(e) {
                e && E(t),
                s && s.d(e),
                i = !1,
                a()
            }
        }
    }
    function ga(e) {
        let t, n, i, a, o, r;
        const s = e[9].default
          , l = u(s, e, e[8], null)
          , c = l || fa(e);
        return {
            c() {
                t = U("div"),
                n = U("a"),
                c && c.c(),
                I(n, "target", "_blank"),
                I(n, "rel", "nofollow"),
                I(n, "href", e[4]),
                I(n, "class", " svelte-yfjn2g"),
                I(t, "class", i = "sj-powered-by flex " + ("start" == e[3] ? "justify-start" : "justify-end"))
            },
            m(i, s) {
                z(i, t, s),
                _(t, n),
                c && c.m(n, null),
                a = !0,
                o || (r = T(n, "click", e[5]),
                o = !0)
            },
            p(e, o) {
                l ? l.p && (!a || 256 & o) && g(l, s, e, e[8], a ? m(s, e[8], o, null) : h(e[8]), null) : c && c.p && (!a || 4 & o) && c.p(e, a ? o : -1),
                (!a || 16 & o) && I(n, "href", e[4]),
                (!a || 8 & o && i !== (i = "sj-powered-by flex " + ("start" == e[3] ? "justify-start" : "justify-end"))) && I(t, "class", i)
            },
            i(e) {
                a || (ze(c, e),
                a = !0)
            },
            o(e) {
                Ee(c, e),
                a = !1
            },
            d(e) {
                e && E(t),
                c && c.d(e),
                o = !1,
                r()
            }
        }
    }
    function ha(e) {
        let t, n;
        return t = new ca({
            props: {
                class: "inline",
                size: e[1]
            }
        }),
        {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                2 & n && (i.size = e[1]),
                t.$set(i)
            },
            i(e) {
                n || (ze(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Te(t, e)
            }
        }
    }
    function fa(e) {
        let t, n, i, a, o, r, s, l, c, d;
        return i = new ca({
            props: {
                class: "inline -mt-0.5",
                size: 14
            }
        }),
        l = new nn({
            props: {
                data: hn,
                size: 14,
                class: "-rotate-45 mr-2"
            }
        }),
        {
            c() {
                t = U("div"),
                n = U("div"),
                Be(i.$$.fragment),
                o = B(),
                r = U("div"),
                r.textContent = "Collect testimonials with Senja",
                s = B(),
                Be(l.$$.fragment),
                I(n, "class", a = ua(!e[2] && "p-1 px-[5px] group-hover:-mr-0 -mr-0.5 rounded-full group-hover:scale-105 shadow-xl bg-white")),
                I(r, "class", "py-1"),
                I(t, "class", c = ua(" rounded-full group  flex gap-1 items-center   align-middle text-xs font-medium", e[2] ? "" : "mb-1 border hover:border-transparent origin-bottom-right hover:scale-[1.02] duration-200 bg-white hover:text-white hover:from-[#6701EF] hover:to-purple-500 hover:bg-gradient-to-r text-gray-600 backdrop-blur-lg"))
            },
            m(e, a) {
                z(e, t, a),
                _(t, n),
                Ne(i, n, null),
                _(t, o),
                _(t, r),
                _(t, s),
                Ne(l, t, null),
                d = !0
            },
            p(e, i) {
                (!d || 4 & i && a !== (a = ua(!e[2] && "p-1 px-[5px] group-hover:-mr-0 -mr-0.5 rounded-full group-hover:scale-105 shadow-xl bg-white"))) && I(n, "class", a),
                (!d || 4 & i && c !== (c = ua(" rounded-full group  flex gap-1 items-center   align-middle text-xs font-medium", e[2] ? "" : "mb-1 border hover:border-transparent origin-bottom-right hover:scale-[1.02] duration-200 bg-white hover:text-white hover:from-[#6701EF] hover:to-purple-500 hover:bg-gradient-to-r text-gray-600 backdrop-blur-lg"))) && I(t, "class", c)
            },
            i(e) {
                d || (ze(i.$$.fragment, e),
                ze(l.$$.fragment, e),
                d = !0)
            },
            o(e) {
                Ee(i.$$.fragment, e),
                Ee(l.$$.fragment, e),
                d = !1
            },
            d(e) {
                e && E(t),
                Te(i),
                Te(l)
            }
        }
    }
    function ba(e) {
        let t, n, i, a;
        const o = [ga, ma]
          , r = [];
        function s(e, t) {
            return "logo_with_text" == e[0] ? 0 : 1
        }
        return t = s(e),
        n = r[t] = o[t](e),
        {
            c() {
                n.c(),
                i = N()
            },
            m(e, n) {
                r[t].m(e, n),
                z(e, i, n),
                a = !0
            },
            p(e, [a]) {
                let l = t;
                t = s(e),
                t === l ? r[t].p(e, a) : (Ce(),
                Ee(r[l], 1, 1, (()=>{
                    r[l] = null
                }
                )),
                Le(),
                n = r[t],
                n ? n.p(e, a) : (n = r[t] = o[t](e),
                n.c()),
                ze(n, 1),
                n.m(i.parentNode, i))
            },
            i(e) {
                a || (ze(n),
                a = !0)
            },
            o(e) {
                Ee(n),
                a = !1
            },
            d(e) {
                r[t].d(e),
                e && E(i)
            }
        }
    }
    function va(e, t, n) {
        let i, {$$slots: a={}, $$scope: o} = t;
        var r;
        let {style: s="logo_with_text"} = t
          , {logoSize: l=24} = t
          , {design: c} = t
          , {textOnly: d=!1} = t
          , {justify: u="end"} = t;
        function p(e) {
            var t, n;
            const i = null !== (n = null === (t = e.target.closest("div.senja-embed")) || void 0 === t ? void 0 : t.getAttribute("data-id")) && void 0 !== n ? n : ""
              , a = new CustomEvent("senjaWidgetPoweredByClick",{
                detail: {
                    design_id: null == c ? void 0 : c.type,
                    widget_id: i
                }
            });
            window.dispatchEvent(a)
        }
        return e.$$set = e=>{
            "style"in e && n(0, s = e.style),
            "logoSize"in e && n(1, l = e.logoSize),
            "design"in e && n(6, c = e.design),
            "textOnly"in e && n(2, d = e.textOnly),
            "justify"in e && n(3, u = e.justify),
            "$$scope"in e && n(8, o = e.$$scope)
        }
        ,
        e.$$.update = ()=>{
            192 & e.$$.dirty && n(4, i = da({
                source: "widget",
                content: null !== n(7, r = null == c ? void 0 : c.type) && void 0 !== r ? r : "",
                userProvidedUrl: "undefined" != typeof window ? window.SenjaAffiliatePoweredBy : void 0
            }))
        }
        ,
        [s, l, d, u, i, p, c, r, o, a]
    }
    class wa extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, va, ba, s, {
                style: 0,
                logoSize: 1,
                design: 6,
                textOnly: 2,
                justify: 3
            }, pa)
        }
    }
    function ya(e) {
        let t;
        const n = e[3].default
          , i = u(n, e, e[2], null);
        return {
            c() {
                i && i.c()
            },
            m(e, n) {
                i && i.m(e, n),
                t = !0
            },
            p(e, a) {
                i && i.p && (!t || 4 & a) && g(i, n, e, e[2], t ? m(n, e[2], a, null) : h(e[2]), null)
            },
            i(e) {
                t || (ze(i, e),
                t = !0)
            },
            o(e) {
                Ee(i, e),
                t = !1
            },
            d(e) {
                i && i.d(e)
            }
        }
    }
    function xa(e) {
        let t = e[0], n, i, a = e[0] && Aa(e);
        return {
            c() {
                a && a.c(),
                n = N()
            },
            m(e, t) {
                a && a.m(e, t),
                z(e, n, t),
                i = !0
            },
            p(e, i) {
                e[0] ? t ? s(t, e[0]) ? (a.d(1),
                a = Aa(e),
                t = e[0],
                a.c(),
                a.m(n.parentNode, n)) : a.p(e, i) : (a = Aa(e),
                t = e[0],
                a.c(),
                a.m(n.parentNode, n)) : t && (a.d(1),
                a = null,
                t = e[0])
            },
            i(e) {
                i || (ze(a),
                i = !0)
            },
            o(e) {
                Ee(a),
                i = !1
            },
            d(e) {
                e && E(n),
                a && a.d(e)
            }
        }
    }
    function Aa(e) {
        let t, i;
        const a = e[3].default
          , o = u(a, e, e[2], null);
        let r = [{
            class: e[1]
        }]
          , s = {};
        for (let e = 0; e < r.length; e += 1)
            s = n(s, r[e]);
        return {
            c() {
                t = U(e[0]),
                o && o.c(),
                V(e[0])(t, s)
            },
            m(e, n) {
                z(e, t, n),
                o && o.m(t, null),
                i = !0
            },
            p(e, n) {
                o && o.p && (!i || 4 & n) && g(o, a, e, e[2], i ? m(a, e[2], n, null) : h(e[2]), null),
                V(e[0])(t, s = Pe(r, [(!i || 2 & n) && {
                    class: e[1]
                }]))
            },
            i(e) {
                i || (ze(o, e),
                i = !0)
            },
            o(e) {
                Ee(o, e),
                i = !1
            },
            d(e) {
                e && E(t),
                o && o.d(e)
            }
        }
    }
    function ka(e) {
        let t, n, i, a;
        const o = [xa, ya]
          , r = [];
        function s(e, t) {
            return e[0] ? 0 : 1
        }
        return t = s(e),
        n = r[t] = o[t](e),
        {
            c() {
                n.c(),
                i = N()
            },
            m(e, n) {
                r[t].m(e, n),
                z(e, i, n),
                a = !0
            },
            p(e, [a]) {
                let l = t;
                t = s(e),
                t === l ? r[t].p(e, a) : (Ce(),
                Ee(r[l], 1, 1, (()=>{
                    r[l] = null
                }
                )),
                Le(),
                n = r[t],
                n ? n.p(e, a) : (n = r[t] = o[t](e),
                n.c()),
                ze(n, 1),
                n.m(i.parentNode, i))
            },
            i(e) {
                a || (ze(n),
                a = !0)
            },
            o(e) {
                Ee(n),
                a = !1
            },
            d(e) {
                r[t].d(e),
                e && E(i)
            }
        }
    }
    function $a(e, t, n) {
        let {$$slots: i={}, $$scope: a} = t
          , {tag: o=null} = t
          , {class: r=""} = t;
        return e.$$set = e=>{
            "tag"in e && n(0, o = e.tag),
            "class"in e && n(1, r = e.class),
            "$$scope"in e && n(2, a = e.$$scope)
        }
        ,
        [o, r, a, i]
    }
    class _a extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, $a, ka, s, {
                tag: 0,
                class: 1
            })
        }
    }
    function ja(e) {
        j(e, "svelte-15z69jy", ".aspect-container.svelte-15z69jy{width:var(--aspect-width);height:var(--aspect-height);padding-top:var(--aspect-padding-top);padding-left:var(--aspect-padding-left);position:relative}.aspect-content.svelte-15z69jy{position:absolute;top:0;left:0;bottom:0;right:0}")
    }
    function Sa(e) {
        let t;
        const n = e[9].default
          , i = u(n, e, e[10], null);
        return {
            c() {
                i && i.c()
            },
            m(e, n) {
                i && i.m(e, n),
                t = !0
            },
            p(e, a) {
                i && i.p && (!t || 1024 & a) && g(i, n, e, e[10], t ? m(n, e[10], a, null) : h(e[10]), null)
            },
            i(e) {
                t || (ze(i, e),
                t = !0)
            },
            o(e) {
                Ee(i, e),
                t = !1
            },
            d(e) {
                i && i.d(e)
            }
        }
    }
    function Ca(e) {
        let t, n, i;
        return t = new _a({
            props: {
                $$slots: {
                    default: [La]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                n = U("div"),
                Be(t.$$.fragment),
                K(n, "display", "contents"),
                K(n, "--aspect-padding-top", e[5]),
                K(n, "--aspect-padding-left", e[4]),
                K(n, "--aspect-width", e[3]),
                K(n, "--aspect-height", e[2])
            },
            m(e, a) {
                z(e, n, a),
                Ne(t, n, null),
                i = !0
            },
            p(e, i) {
                32 & i && K(n, "--aspect-padding-top", e[5]),
                16 & i && K(n, "--aspect-padding-left", e[4]),
                8 & i && K(n, "--aspect-width", e[3]),
                4 & i && K(n, "--aspect-height", e[2]);
                const a = {};
                1026 & i && (a.$$scope = {
                    dirty: i,
                    ctx: e
                }),
                t.$set(a)
            },
            i(e) {
                i || (ze(t.$$.fragment, e),
                i = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                i = !1
            },
            d(e) {
                e && t && E(n),
                Te(t, e)
            }
        }
    }
    function La(e) {
        let t, n, i, a;
        const o = e[9].default
          , r = u(o, e, e[10], null);
        return {
            c() {
                t = U("div"),
                n = U("div"),
                r && r.c(),
                I(n, "class", i = "aspect-content " + e[1] + " svelte-15z69jy"),
                I(t, "class", "aspect-container svelte-15z69jy")
            },
            m(e, i) {
                z(e, t, i),
                _(t, n),
                r && r.m(n, null),
                a = !0
            },
            p(e, t) {
                r && r.p && (!a || 1024 & t) && g(r, o, e, e[10], a ? m(o, e[10], t, null) : h(e[10]), null),
                (!a || 2 & t && i !== (i = "aspect-content " + e[1] + " svelte-15z69jy")) && I(n, "class", i)
            },
            i(e) {
                a || (ze(r, e),
                a = !0)
            },
            o(e) {
                Ee(r, e),
                a = !1
            },
            d(e) {
                e && E(t),
                r && r.d(e)
            }
        }
    }
    function za(e) {
        let t, n, i, a;
        const o = [Ca, Sa]
          , r = [];
        function s(e, t) {
            return e[0] ? 0 : 1
        }
        return t = s(e),
        n = r[t] = o[t](e),
        {
            c() {
                n.c(),
                i = N()
            },
            m(e, n) {
                r[t].m(e, n),
                z(e, i, n),
                a = !0
            },
            p(e, [a]) {
                let l = t;
                t = s(e),
                t === l ? r[t].p(e, a) : (Ce(),
                Ee(r[l], 1, 1, (()=>{
                    r[l] = null
                }
                )),
                Le(),
                n = r[t],
                n ? n.p(e, a) : (n = r[t] = o[t](e),
                n.c()),
                ze(n, 1),
                n.m(i.parentNode, i))
            },
            i(e) {
                a || (ze(n),
                a = !0)
            },
            o(e) {
                Ee(n),
                a = !1
            },
            d(e) {
                r[t].d(e),
                e && E(i)
            }
        }
    }
    function Ea(e, t, n) {
        let i, a, o, r, s, {$$slots: l={}, $$scope: c} = t, {ratio: d=16 / 9} = t, {enabled: u=!0} = t, {useWidth: p=!0} = t, {class: m=""} = t;
        return e.$$set = e=>{
            "ratio"in e && n(6, d = e.ratio),
            "enabled"in e && n(0, u = e.enabled),
            "useWidth"in e && n(7, p = e.useWidth),
            "class"in e && n(1, m = e.class),
            "$$scope"in e && n(10, c = e.$$scope)
        }
        ,
        e.$$.update = ()=>{
            64 & e.$$.dirty && n(8, i = 1 / d * 100),
            384 & e.$$.dirty && n(5, a = p ? `${i}%` : ""),
            384 & e.$$.dirty && n(4, o = p ? "" : `${i}%`),
            128 & e.$$.dirty && n(3, r = p ? "100%" : ""),
            128 & e.$$.dirty && n(2, s = p ? "" : "100%")
        }
        ,
        [u, m, s, r, o, a, d, p, i, l, c]
    }
    class Ma extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, Ea, za, s, {
                ratio: 6,
                enabled: 0,
                useWidth: 7,
                class: 1
            }, ja)
        }
    }
    function Ua(e) {
        j(e, "svelte-ahd6o7", ".lds-ring.svelte-ahd6o7.svelte-ahd6o7{display:inline-block;position:relative;width:var(--lds-size);height:var(--lds-size)}.lds-ring.svelte-ahd6o7 div.svelte-ahd6o7{box-sizing:border-box;display:block;position:absolute;width:var(--lds-size);height:var(--lds-size);border:2px solid var(--lds-color);border-radius:50%;animation:svelte-ahd6o7-lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:var(--lds-color) transparent transparent transparent}.lds-ring.svelte-ahd6o7 div.svelte-ahd6o7:nth-child(1){animation-delay:-0.45s}.lds-ring.svelte-ahd6o7 div.svelte-ahd6o7:nth-child(2){animation-delay:-0.3s}.lds-ring.svelte-ahd6o7 div.svelte-ahd6o7:nth-child(3){animation-delay:-0.15s}@keyframes svelte-ahd6o7-lds-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}")
    }
    function Pa(t) {
        let n, i, a, o, r, s, l, c, d;
        return {
            c() {
                n = U("div"),
                i = U("div"),
                a = B(),
                o = U("div"),
                r = B(),
                s = U("div"),
                l = B(),
                c = U("div"),
                I(i, "class", "svelte-ahd6o7"),
                I(o, "class", "svelte-ahd6o7"),
                I(s, "class", "svelte-ahd6o7"),
                I(c, "class", "svelte-ahd6o7"),
                K(n, "opacity", t[2]),
                K(n, "--lds-color", t[1] ?? "currentColor"),
                K(n, "--lds-size", t[0]),
                I(n, "class", d = "lds-ring " + t[3] + " svelte-ahd6o7")
            },
            m(e, t) {
                z(e, n, t),
                _(n, i),
                _(n, a),
                _(n, o),
                _(n, r),
                _(n, s),
                _(n, l),
                _(n, c)
            },
            p(e, [t]) {
                4 & t && K(n, "opacity", e[2]),
                2 & t && K(n, "--lds-color", e[1] ?? "currentColor"),
                1 & t && K(n, "--lds-size", e[0]),
                8 & t && d !== (d = "lds-ring " + e[3] + " svelte-ahd6o7") && I(n, "class", d)
            },
            i: e,
            o: e,
            d(e) {
                e && E(n)
            }
        }
    }
    function Ra(e, t, n) {
        let {size: i="48px"} = t
          , {color: a=null} = t
          , {opacity: o=1} = t
          , {class: r=""} = t;
        return e.$$set = e=>{
            "size"in e && n(0, i = e.size),
            "color"in e && n(1, a = e.color),
            "opacity"in e && n(2, o = e.opacity),
            "class"in e && n(3, r = e.class)
        }
        ,
        [i, a, o, r]
    }
    class Ba extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, Ra, Pa, s, {
                size: 0,
                color: 1,
                opacity: 2,
                class: 3
            }, Ua)
        }
    }
    function Na(e) {
        var t, n;
        return !!(null === (n = null === (t = e.media) || void 0 === t ? void 0 : t[0]) || void 0 === n ? void 0 : n.external)
    }
    function Ta(e) {
        var t, n, i, a, o;
        if ("video" != (null == e ? void 0 : e.type))
            return;
        if ("video" == (null === (n = null === (t = e.media) || void 0 === t ? void 0 : t[0]) || void 0 === n ? void 0 : n.type)) {
            const t = null !== (i = e.media[0].width) && void 0 !== i ? i : 16
              , n = null !== (a = e.media[0].height) && void 0 !== a ? a : 9;
            return t / n
        }
        const r = null === (o = e.media_asset) || void 0 === o ? void 0 : o.metadata;
        if (!r)
            return 4 / 3;
        const s = r.aspect_ratio;
        if (!s)
            return 4 / 3;
        const [l,c] = s.split(":").map((e=>parseInt(e)));
        return l / c
    }
    function Da() {
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
    async function Ia(e, t, n) {
        var i, a;
        if ("undefined" == typeof window)
            return;
        if (null === (i = window.location.href) || void 0 === i ? void 0 : i.includes("preview=true"))
            return;
        await Fa.loadScript("https://src.litix.io/core/4/mux.js");
        const o = window.mux.utils.now();
        window.mux.monitor(e, {
            debug: !1,
            data: {
                env_key: "ur7ktq7kbsjgmh3ppg0vuu2vk",
                player_name: n.player,
                player_init_time: o,
                video_id: null === (a = null == t ? void 0 : t.media_asset) || void 0 === a ? void 0 : a.id,
                video_title: `Testimonial by ${null == t ? void 0 : t.customer_name}`,
                custom_1: t.id,
                custom_2: n.widgetId
            }
        })
    }
    class Fa {
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
    Fa.scripts = new Map;
    const Oa = e=>({
        loading: 4096 & e[0],
        playing: 2048 & e[0]
    })
      , Ga = e=>({
        class: "h-full w-full",
        loading: e[12],
        togglePlay: e[5],
        playing: e[11]
    });
    function qa(e) {
        let t, n = e[16](), i, a = n && Va(e);
        return {
            c() {
                t = U("video"),
                a && a.c(),
                t.playsInline = !0,
                I(t, "disablepictureinpicture", !0),
                I(t, "preload", "metadata"),
                I(t, "class", i = "relative h-full bg-black w-full object-cover " + e[6])
            },
            m(n, i) {
                z(n, t, i),
                a && a.m(t, null),
                e[27](t)
            },
            p(e, o) {
                n && a.p(e, o),
                64 & o[0] && i !== (i = "relative h-full bg-black w-full object-cover " + e[6]) && I(t, "class", i)
            },
            d(n) {
                n && E(t),
                a && a.d(),
                e[27](null)
            }
        }
    }
    function Va(t) {
        let n, i;
        return {
            c() {
                n = U("track"),
                I(n, "kind", "captions"),
                c(n.src, i = t[16]()) || I(n, "src", i),
                n.default = !0
            },
            m(e, t) {
                z(e, n, t)
            },
            p: e,
            d(e) {
                e && E(n)
            }
        }
    }
    function Wa(e) {
        let t, n, i, a, o, r, s;
        return {
            c() {
                t = U("div"),
                n = U("img"),
                c(n.src, i = Ve(e[14], {
                    width: e[2] ? 400 : e[3],
                    format: "webp"
                })) || I(n, "src", i),
                I(n, "class", "h-full w-full object-cover"),
                I(n, "alt", ""),
                I(t, "class", "absolute inset-0 bg-black rounded-none overflow-hidden")
            },
            m(e, i) {
                z(e, t, i),
                _(t, n),
                o = !0,
                r || (s = v(He.call(null, n)),
                r = !0)
            },
            p(e, t) {
                (!o || 12 & t[0] && !c(n.src, i = Ve(e[14], {
                    width: e[2] ? 400 : e[3],
                    format: "webp"
                }))) && I(n, "src", i)
            },
            i(e) {
                o || (e && fe((()=>{
                    o && (a || (a = Ue(t, Hi, {
                        duration: 200
                    }, !0)),
                    a.run(1))
                }
                )),
                o = !0)
            },
            o(e) {
                e && (a || (a = Ue(t, Hi, {
                    duration: 200
                }, !1)),
                a.run(0)),
                o = !1
            },
            d(e) {
                e && E(t),
                e && a && a.end(),
                r = !1,
                s()
            }
        }
    }
    function Ha(e) {
        let t, n, i, a;
        return n = new Ba({
            props: {
                class: "text-white"
            }
        }),
        {
            c() {
                t = U("div"),
                Be(n.$$.fragment),
                I(t, "class", "pointer-events-none absolute inset-0 flex flex-col items-center justify-center")
            },
            m(e, i) {
                z(e, t, i),
                Ne(n, t, null),
                a = !0
            },
            i(e) {
                a || (ze(n.$$.fragment, e),
                e && fe((()=>{
                    a && (i || (i = Ue(t, Hi, {
                        duration: 200
                    }, !0)),
                    i.run(1))
                }
                )),
                a = !0)
            },
            o(e) {
                Ee(n.$$.fragment, e),
                e && (i || (i = Ue(t, Hi, {
                    duration: 200
                }, !1)),
                i.run(0)),
                a = !1
            },
            d(e) {
                e && E(t),
                Te(n),
                e && i && i.end()
            }
        }
    }
    function Ka(e) {
        let t, n, i, a, o, r;
        const s = e[26].controls
          , l = u(s, e, e[30], Ga)
          , c = l || Xa(e);
        return {
            c() {
                t = U("div"),
                i = B(),
                a = U("div"),
                c && c.c(),
                I(t, "class", "absolute inset-x-0 bottom-0 top-auto h-32 bg-gradient-to-t from-black/70 to-transparent"),
                I(a, "class", "absolute inset-x-0 inset-y-0")
            },
            m(e, n) {
                z(e, t, n),
                z(e, i, n),
                z(e, a, n),
                c && c.m(a, null),
                r = !0
            },
            p(e, t) {
                l ? l.p && (!r || 1073747968 & t[0]) && g(l, s, e, e[30], r ? m(s, e[30], t, Oa) : h(e[30]), Ga) : c && c.p && (!r || 2050 & t[0]) && c.p(e, r ? t : [-1, -1])
            },
            i(e) {
                r || (e && fe((()=>{
                    r && (n || (n = Ue(t, Hi, {
                        duration: 200
                    }, !0)),
                    n.run(1))
                }
                )),
                ze(c, e),
                e && fe((()=>{
                    r && (o || (o = Ue(a, Hi, {
                        duration: 200
                    }, !0)),
                    o.run(1))
                }
                )),
                r = !0)
            },
            o(e) {
                e && (n || (n = Ue(t, Hi, {
                    duration: 200
                }, !1)),
                n.run(0)),
                Ee(c, e),
                e && (o || (o = Ue(a, Hi, {
                    duration: 200
                }, !1)),
                o.run(0)),
                r = !1
            },
            d(e) {
                e && E(t),
                e && n && n.end(),
                e && E(i),
                e && E(a),
                c && c.d(e),
                e && o && o.end()
            }
        }
    }
    function Za(e) {
        let t, n;
        return t = new nn({
            props: {
                data: wn,
                fill: "currentColor",
                size: e[1]
            }
        }),
        {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                2 & n[0] && (i.size = e[1]),
                t.$set(i)
            },
            i(e) {
                n || (ze(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Te(t, e)
            }
        }
    }
    function Ya(e) {
        let t, n;
        return t = new nn({
            props: {
                data: pn,
                fill: "currentColor",
                size: e[1]
            }
        }),
        {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                2 & n[0] && (i.size = e[1]),
                t.$set(i)
            },
            i(e) {
                n || (ze(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Te(t, e)
            }
        }
    }
    function Xa(e) {
        let t, n, i, a, o, r, s;
        const l = [Ya, Za]
          , c = [];
        function d(e, t) {
            return e[11] ? 0 : 1
        }
        return i = d(e),
        a = c[i] = l[i](e),
        {
            c() {
                t = U("div"),
                n = U("button"),
                a.c(),
                I(n, "class", "rounded p-1 text-white duration-200 hover:bg-white/20"),
                I(t, "class", "flex h-full flex-col items-center justify-center p-4")
            },
            m(a, l) {
                z(a, t, l),
                _(t, n),
                c[i].m(n, null),
                o = !0,
                r || (s = T(n, "click", D(e[5])),
                r = !0)
            },
            p(e, t) {
                let o = i;
                i = d(e),
                i === o ? c[i].p(e, t) : (Ce(),
                Ee(c[o], 1, 1, (()=>{
                    c[o] = null
                }
                )),
                Le(),
                a = c[i],
                a ? a.p(e, t) : (a = c[i] = l[i](e),
                a.c()),
                ze(a, 1),
                a.m(n, null))
            },
            i(e) {
                o || (ze(a),
                o = !0)
            },
            o(e) {
                Ee(a),
                o = !1
            },
            d(e) {
                e && E(t),
                c[i].d(),
                r = !1,
                s()
            }
        }
    }
    function Ja(e) {
        let t, n, i, a, r, s, l, c, d = e[9] && qa(e), u = (!e[11] && !e[10] || e[12]) && Wa(e), p = e[12] && Ha(), m = e[13] && Ka(e);
        return {
            c() {
                t = U("div"),
                n = U("div"),
                d && d.c(),
                i = B(),
                u && u.c(),
                a = B(),
                p && p.c(),
                r = B(),
                m && m.c(),
                I(n, "class", "video-container h-full w-full"),
                I(t, "class", "relative h-full w-full")
            },
            m(o, g) {
                z(o, t, g),
                _(t, n),
                d && d.m(n, null),
                e[28](n),
                _(t, i),
                u && u.m(t, null),
                _(t, a),
                p && p.m(t, null),
                _(t, r),
                m && m.m(t, null),
                s = !0,
                l || (c = [T(t, "click", e[5]), T(t, "mouseenter", e[29]), T(t, "mouseleave", e[17]), T(t, "keydown", e[5])],
                l = !0)
            },
            p(e, i) {
                e[9] ? d ? d.p(e, i) : (d = qa(e),
                d.c(),
                d.m(n, null)) : d && (d.d(1),
                d = null),
                !e[11] && !e[10] || e[12] ? u ? (u.p(e, i),
                7168 & i[0] && ze(u, 1)) : (u = Wa(e),
                u.c(),
                ze(u, 1),
                u.m(t, a)) : u && (Ce(),
                Ee(u, 1, 1, (()=>{
                    u = null
                }
                )),
                Le()),
                e[12] ? p ? 4096 & i[0] && ze(p, 1) : (p = Ha(),
                p.c(),
                ze(p, 1),
                p.m(t, r)) : p && (Ce(),
                Ee(p, 1, 1, (()=>{
                    p = null
                }
                )),
                Le()),
                e[13] ? m ? (m.p(e, i),
                8192 & i[0] && ze(m, 1)) : (m = Ka(e),
                m.c(),
                ze(m, 1),
                m.m(t, null)) : m && (Ce(),
                Ee(m, 1, 1, (()=>{
                    m = null
                }
                )),
                Le())
            },
            i(e) {
                s || (ze(u),
                ze(p),
                ze(m),
                s = !0)
            },
            o(e) {
                Ee(u),
                Ee(p),
                Ee(m),
                s = !1
            },
            d(n) {
                n && E(t),
                d && d.d(),
                e[28](null),
                u && u.d(),
                p && p.d(),
                m && m.d(),
                l = !1,
                o(c)
            }
        }
    }
    function Qa(e) {
        let t, n;
        return t = new Ma({
            props: {
                ratio: e[4] ?? e[15](),
                enabled: e[0],
                $$slots: {
                    default: [Ja]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i),
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
                n || (ze(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Te(t, e)
            }
        }
    }
    function eo(e) {
        let t = "WEBVTT\n\n";
        return t += e.replace(/(\d+)\,(\d+)/g, "$1.$2").replace(/--> /g, "--\x3e "),
        t
    }
    function to(e, t, n) {
        let {$$slots: i={}, $$scope: a} = t;
        var o = this && this.__awaiter || function(e, t, n, i) {
            function a(e) {
                return e instanceof n ? e : new n((function(t) {
                    t(e)
                }
                ))
            }
            return new (n || (n = Promise))((function(n, o) {
                function r(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : a(e.value).then(r, s)
                }
                l((i = i.apply(e, t || [])).next())
            }
            ))
        }
        , r, s;
        let {review: l} = t, {maintainAspectRatio: c=!0} = t, {widgetId: d} = t, {playbackButtonSize: u=32} = t, {animatedThumbnail: p=!1} = t, {thumbnailWidth: m} = t, {thumbnail: g} = t, {aspectRatio: h} = t, {player: f="widget_player"} = t, {activeSubtitle: b} = t, v, w, y = !1, x = !1;
        const A = null !== (s = null === (r = l.media_asset) || void 0 === r ? void 0 : r.metadata) && void 0 !== s ? s : {}
          , k = null != g ? g : qi(l, {
            animated: p
        });
        function $() {
            if (!A.playback_ids)
                return null;
            const e = A.playback_ids;
            return e.find((e=>"public" === e.policy)).id
        }
        function _() {
            const e = $();
            return `https://stream.mux.com/${e}.m3u8?max_resolution=720p`
        }
        function j() {
            const e = Ta(l);
            return e
        }
        function S() {
            var e, t, n, i, a;
            const o = null === (t = null === (e = l.media_asset) || void 0 === e ? void 0 : e.captions) || void 0 === t ? void 0 : t.srt;
            if (!o)
                return null;
            if ("undefined" == typeof window)
                return null;
            const r = eo(null !== (a = null === (i = null === (n = l.media_asset) || void 0 === n ? void 0 : n.captions) || void 0 === i ? void 0 : i.srt) && void 0 !== a ? a : "")
              , s = new Blob([r],{
                type: "text/vtt"
            })
              , c = URL.createObjectURL(s);
            return c
        }
        function C() {
            return o(this, void 0, void 0, (function*() {
                if (Na(l))
                    return;
                n(7, v.onended = ()=>n(11, L = !1), v);
                const e = _();
                if (v.canPlayType("application/vnd.apple.mpegurl")) {
                    const t = document.createElement("source");
                    t.src = e,
                    t.type = "application/x-mpegURL",
                    v.appendChild(t)
                } else {
                    const t = yield Da();
                    if (t.isSupported()) {
                        const n = new t({
                            autoStartLoad: !1
                        });
                        n.loadSource(e),
                        n.attachMedia(v),
                        E = n
                    } else
                        console.error("This is a legacy browser that doesn't support MSE");
                    yield he()
                }
                v.addEventListener("loadedmetadata", (()=>{
                    const e = v.textTracks
                      , t = e[0];
                    t && (t.mode = "hidden",
                    t.addEventListener("cuechange", (e=>{
                        const i = t.activeCues[0];
                        n(18, b = i ? i.text : null)
                    }
                    )))
                }
                )),
                v.addEventListener("ended", (()=>{
                    n(11, L = !1),
                    n(13, F = !0)
                }
                ), !1),
                n(7, v.onplay = ()=>{
                    n(11, L = !0)
                }
                , v),
                n(7, v.onpause = ()=>{
                    n(11, L = !1),
                    n(13, F = !0)
                }
                , v),
                v.addEventListener("error", (e=>{
                    console.error(e.target.error)
                }
                )),
                Ia(v, l, {
                    widgetId: d,
                    player: f
                })
            }
            ))
        }
        let L = !1, z = !1, E, M = !1;
        function U() {
            return o(this, void 0, void 0, (function*() {
                M || E && (E.startLoad(),
                M = !0,
                n(12, z = !0),
                E.on(Hls.Events.FRAG_LOADED, (()=>{
                    n(12, z = !1),
                    n(10, x = !0)
                }
                )))
            }
            ))
        }
        function P() {
            return o(this, void 0, void 0, (function*() {
                y || (n(9, y = !0),
                yield he(),
                yield C(),
                console.log("mounted"))
            }
            ))
        }
        function R() {
            return o(this, void 0, void 0, (function*() {
                if (Na(l))
                    return window.open(l.url, "_blank");
                yield P(),
                yield U();
                const e = document.querySelectorAll("video");
                e.forEach((e=>{
                    e !== v && e.pause()
                }
                )),
                yield v.play()
            }
            ))
        }
        function B() {
            v.pause()
        }
        function N() {
            return L
        }
        function T() {
            L ? B() : R()
        }
        function D() {
            L && n(13, F = !1)
        }
        let {class: I=""} = t
          , F = !0;
        function O(e) {
            ce[e ? "unshift" : "push"]((()=>{
                v = e,
                n(7, v)
            }
            ))
        }
        function G(e) {
            ce[e ? "unshift" : "push"]((()=>{
                w = e,
                n(8, w)
            }
            ))
        }
        re((()=>{}
        ));
        const q = ()=>n(13, F = !0);
        return e.$$set = e=>{
            "review"in e && n(19, l = e.review),
            "maintainAspectRatio"in e && n(0, c = e.maintainAspectRatio),
            "widgetId"in e && n(20, d = e.widgetId),
            "playbackButtonSize"in e && n(1, u = e.playbackButtonSize),
            "animatedThumbnail"in e && n(2, p = e.animatedThumbnail),
            "thumbnailWidth"in e && n(3, m = e.thumbnailWidth),
            "thumbnail"in e && n(21, g = e.thumbnail),
            "aspectRatio"in e && n(4, h = e.aspectRatio),
            "player"in e && n(22, f = e.player),
            "activeSubtitle"in e && n(18, b = e.activeSubtitle),
            "class"in e && n(6, I = e.class),
            "$$scope"in e && n(30, a = e.$$scope)
        }
        ,
        [c, u, p, m, h, T, I, v, w, y, x, L, z, F, k, j, S, D, b, l, d, g, f, R, B, N, i, O, G, q, a]
    }
    class no extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, to, Qa, s, {
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
    function io(e) {
        let t, n, i, a, r, s, l, c, d, u, p, m, g, h, f, b, v, w, y, x = e[0].customer_name + "", A, k, $, j = Oi(e[0]), S, C, L, M, P, N, D, F, O, G, q, V, W = !e[7] && ao(e);
        p = new nn({
            props: {
                data: mn,
                size: 24
            }
        }),
        f = new un({
            props: {
                src: Ve(e[0].customer_avatar, {
                    width: 160
                }),
                alt: e[0].customer_name,
                class: "w-full h-full object-cover",
                containerClass: "w-20 h-20 overflow-hidden rounded-full bg-gray-100 text-gray-300"
            }
        });
        let Z = e[0].integration && oo(e)
          , Y = j && ro(e)
          , X = e[0].customer_company_logo && so(e)
          , J = e[0].rating && lo(e)
          , Q = e[0].title && co(e)
          , ee = e[0].html && uo(e)
          , te = "video" == e[0].type && e[0].media_asset && po(e)
          , ne = e[3] && fo(e)
          , ie = e[6] && bo(e);
        return {
            c() {
                t = U("div"),
                n = U("div"),
                a = B(),
                r = U("div"),
                s = U("div"),
                l = U("div"),
                c = U("div"),
                W && W.c(),
                d = B(),
                u = U("button"),
                Be(p.$$.fragment),
                m = B(),
                g = U("div"),
                h = U("div"),
                Be(f.$$.fragment),
                b = B(),
                v = U("div"),
                w = U("div"),
                y = U("div"),
                A = R(x),
                k = B(),
                Z && Z.c(),
                $ = B(),
                Y && Y.c(),
                S = B(),
                X && X.c(),
                C = B(),
                L = U("div"),
                J && J.c(),
                M = B(),
                Q && Q.c(),
                P = B(),
                ee && ee.c(),
                N = B(),
                te && te.c(),
                D = B(),
                ne && ne.c(),
                F = B(),
                ie && ie.c(),
                I(n, "class", "fixed inset-0 bg-gray-200/80"),
                I(u, "class", "absolute top-2 right-2 border-none text-white rounded-md p-1 hover:bg-white/20"),
                I(c, "class", "relative h-20"),
                K(c, "background-color", "var(--clr-primary)"),
                I(h, "class", "rounded-full p-1 -ml-1 bg-white/60"),
                I(y, "class", "truncate flex gap-2 items-center text-lg font-medium md:text-xl"),
                I(w, "class", "flex flex-col mb-2 overflow-hidden"),
                I(v, "class", "flex justify-between w-full"),
                I(g, "class", "flex flex-col relative -mt-12 items-start gap-4 px-6"),
                I(L, "class", "flex flex-col gap-2 px-6 pb-8"),
                I(l, "class", "relative bg-white"),
                I(s, "class", "bg-white rounded-lg max-w-lg w-full pointer-events-auto flex-none overflow-hidden mx-auto shadow-2xl"),
                I(r, "class", "my-auto relative w-full pointer-events-none"),
                I(t, "class", "fixed sj-toast-modal py-8 px-4 overflow-y-auto inset-0 z-[9999998] flex flex-col items-center")
            },
            m(i, o) {
                z(i, t, o),
                _(t, n),
                _(t, a),
                _(t, r),
                _(r, s),
                _(s, l),
                _(l, c),
                W && W.m(c, null),
                _(c, d),
                _(c, u),
                Ne(p, u, null),
                _(l, m),
                _(l, g),
                _(g, h),
                Ne(f, h, null),
                _(g, b),
                _(g, v),
                _(v, w),
                _(w, y),
                _(y, A),
                _(y, k),
                Z && Z.m(y, null),
                _(w, $),
                Y && Y.m(w, null),
                _(v, S),
                X && X.m(v, null),
                _(l, C),
                _(l, L),
                J && J.m(L, null),
                _(L, M),
                Q && Q.m(L, null),
                _(L, P),
                ee && ee.m(L, null),
                _(L, N),
                te && te.m(L, null),
                _(L, D),
                ne && ne.m(L, null),
                _(r, F),
                ie && ie.m(r, null),
                G = !0,
                q || (V = [T(n, "click", e[8]), T(u, "click", e[9])],
                q = !0)
            },
            p(e, t) {
                e[7] ? W && (Ce(),
                Ee(W, 1, 1, (()=>{
                    W = null
                }
                )),
                Le()) : W ? (W.p(e, t),
                128 & t && ze(W, 1)) : (W = ao(e),
                W.c(),
                ze(W, 1),
                W.m(c, d));
                const n = {};
                1 & t && (n.src = Ve(e[0].customer_avatar, {
                    width: 160
                })),
                1 & t && (n.alt = e[0].customer_name),
                f.$set(n),
                (!G || 1 & t) && x !== (x = e[0].customer_name + "") && H(A, x),
                e[0].integration ? Z ? (Z.p(e, t),
                1 & t && ze(Z, 1)) : (Z = oo(e),
                Z.c(),
                ze(Z, 1),
                Z.m(y, null)) : Z && (Ce(),
                Ee(Z, 1, 1, (()=>{
                    Z = null
                }
                )),
                Le()),
                1 & t && (j = Oi(e[0])),
                j ? Y ? Y.p(e, t) : (Y = ro(e),
                Y.c(),
                Y.m(w, null)) : Y && (Y.d(1),
                Y = null),
                e[0].customer_company_logo ? X ? X.p(e, t) : (X = so(e),
                X.c(),
                X.m(v, null)) : X && (X.d(1),
                X = null),
                e[0].rating ? J ? (J.p(e, t),
                1 & t && ze(J, 1)) : (J = lo(e),
                J.c(),
                ze(J, 1),
                J.m(L, M)) : J && (Ce(),
                Ee(J, 1, 1, (()=>{
                    J = null
                }
                )),
                Le()),
                e[0].title ? Q ? Q.p(e, t) : (Q = co(e),
                Q.c(),
                Q.m(L, P)) : Q && (Q.d(1),
                Q = null),
                e[0].html ? ee ? ee.p(e, t) : (ee = uo(e),
                ee.c(),
                ee.m(L, N)) : ee && (ee.d(1),
                ee = null),
                "video" == e[0].type && e[0].media_asset ? te ? (te.p(e, t),
                1 & t && ze(te, 1)) : (te = po(e),
                te.c(),
                ze(te, 1),
                te.m(L, D)) : te && (Ce(),
                Ee(te, 1, 1, (()=>{
                    te = null
                }
                )),
                Le()),
                e[3] ? ne ? ne.p(e, t) : (ne = fo(e),
                ne.c(),
                ne.m(L, null)) : ne && (ne.d(1),
                ne = null),
                e[6] ? ie ? (ie.p(e, t),
                64 & t && ze(ie, 1)) : (ie = bo(e),
                ie.c(),
                ze(ie, 1),
                ie.m(r, null)) : ie && (Ce(),
                Ee(ie, 1, 1, (()=>{
                    ie = null
                }
                )),
                Le())
            },
            i(e) {
                G || (fe((()=>{
                    G && (i || (i = Ue(n, Hi, {
                        duration: 100
                    }, !0)),
                    i.run(1))
                }
                )),
                ze(W),
                ze(p.$$.fragment, e),
                ze(f.$$.fragment, e),
                ze(Z),
                ze(J),
                ze(te),
                ze(ie),
                fe((()=>{
                    G && (O || (O = Ue(r, Ki, {
                        start: .9,
                        duration: 300
                    }, !0)),
                    O.run(1))
                }
                )),
                G = !0)
            },
            o(e) {
                i || (i = Ue(n, Hi, {
                    duration: 100
                }, !1)),
                i.run(0),
                Ee(W),
                Ee(p.$$.fragment, e),
                Ee(f.$$.fragment, e),
                Ee(Z),
                Ee(J),
                Ee(te),
                Ee(ie),
                O || (O = Ue(r, Ki, {
                    start: .9,
                    duration: 300
                }, !1)),
                O.run(0),
                G = !1
            },
            d(e) {
                e && E(t),
                e && i && i.end(),
                W && W.d(),
                Te(p),
                Te(f),
                Z && Z.d(),
                Y && Y.d(),
                X && X.d(),
                J && J.d(),
                Q && Q.d(),
                ee && ee.d(),
                te && te.d(),
                ne && ne.d(),
                ie && ie.d(),
                e && O && O.end(),
                q = !1,
                o(V)
            }
        }
    }
    function ao(e) {
        let t, n;
        return t = new Xt({
            props: {
                color: e[1]
            }
        }),
        {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                2 & n && (i.color = e[1]),
                t.$set(i)
            },
            i(e) {
                n || (ze(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Te(t, e)
            }
        }
    }
    function oo(e) {
        let t, n, i;
        return n = new Ni({
            props: {
                integration: e[0].integration,
                size: 18
            }
        }),
        {
            c() {
                t = U("div"),
                Be(n.$$.fragment),
                I(t, "class", "rounded-full bg-white")
            },
            m(e, a) {
                z(e, t, a),
                Ne(n, t, null),
                i = !0
            },
            p(e, t) {
                const i = {};
                1 & t && (i.integration = e[0].integration),
                n.$set(i)
            },
            i(e) {
                i || (ze(n.$$.fragment, e),
                i = !0)
            },
            o(e) {
                Ee(n.$$.fragment, e),
                i = !1
            },
            d(e) {
                e && E(t),
                Te(n)
            }
        }
    }
    function ro(e) {
        let t, n = Oi(e[0]) + "", i;
        return {
            c() {
                t = U("div"),
                i = R(n),
                I(t, "class", "truncate text-base text-gray-500")
            },
            m(e, n) {
                z(e, t, n),
                _(t, i)
            },
            p(e, t) {
                1 & t && n !== (n = Oi(e[0]) + "") && H(i, n)
            },
            d(e) {
                e && E(t)
            }
        }
    }
    function so(e) {
        let t, n, i;
        return {
            c() {
                t = U("div"),
                n = U("img"),
                c(n.src, i = Ve(e[0].customer_company_logo, {
                    width: 300
                })) || I(n, "src", i),
                I(n, "alt", ""),
                I(n, "class", "max-h-12 max-w-[100px] object-contain"),
                I(t, "class", "flex-none")
            },
            m(e, i) {
                z(e, t, i),
                _(t, n)
            },
            p(e, t) {
                1 & t && !c(n.src, i = Ve(e[0].customer_company_logo, {
                    width: 300
                })) && I(n, "src", i)
            },
            d(e) {
                e && E(t)
            }
        }
    }
    function lo(e) {
        let t, n;
        return t = new ht({
            props: {
                rating: e[0].rating,
                size: 24
            }
        }),
        {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                1 & n && (i.rating = e[0].rating),
                t.$set(i)
            },
            i(e) {
                n || (ze(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Te(t, e)
            }
        }
    }
    function co(e) {
        let t, n, i = e[0].title + "", a;
        return {
            c() {
                t = U("div"),
                n = U("h3"),
                a = R(i),
                I(n, "class", "text-lg text-gray-700 font-medium tracking-tight sm:text-xl"),
                I(t, "class", "mt-2")
            },
            m(e, i) {
                z(e, t, i),
                _(t, n),
                _(n, a)
            },
            p(e, t) {
                1 & t && i !== (i = e[0].title + "") && H(a, i)
            },
            d(e) {
                e && E(t)
            }
        }
    }
    function uo(e) {
        let t, n = (e[0].html ?? e[0].text ?? "") + "";
        return {
            c() {
                t = U("div"),
                I(t, "class", "whitespace-pre-line my-2 text-gray-700 text-base")
            },
            m(e, i) {
                z(e, t, i),
                t.innerHTML = n
            },
            p(e, i) {
                1 & i && n !== (n = (e[0].html ?? e[0].text ?? "") + "") && (t.innerHTML = n)
            },
            d(e) {
                e && E(t)
            }
        }
    }
    function po(e) {
        let t, n, i, a, o;
        n = new no({
            props: {
                review: e[0],
                widgetId: e[2]
            }
        });
        let r = e[0].media_asset.captions?.transcript && mo(e);
        return {
            c() {
                t = U("div"),
                Be(n.$$.fragment),
                i = B(),
                r && r.c(),
                a = N(),
                I(t, "class", "rounded-md my-2 bg-black overflow-hidden")
            },
            m(e, s) {
                z(e, t, s),
                Ne(n, t, null),
                z(e, i, s),
                r && r.m(e, s),
                z(e, a, s),
                o = !0
            },
            p(e, t) {
                const i = {};
                1 & t && (i.review = e[0]),
                4 & t && (i.widgetId = e[2]),
                n.$set(i),
                e[0].media_asset.captions?.transcript ? r ? (r.p(e, t),
                1 & t && ze(r, 1)) : (r = mo(e),
                r.c(),
                ze(r, 1),
                r.m(a.parentNode, a)) : r && (Ce(),
                Ee(r, 1, 1, (()=>{
                    r = null
                }
                )),
                Le())
            },
            i(e) {
                o || (ze(n.$$.fragment, e),
                ze(r),
                o = !0)
            },
            o(e) {
                Ee(n.$$.fragment, e),
                Ee(r),
                o = !1
            },
            d(e) {
                e && E(t),
                Te(n),
                e && E(i),
                r && r.d(e),
                e && E(a)
            }
        }
    }
    function mo(e) {
        let t, n, i;
        return n = new ra({
            props: {
                maxLines: 5,
                $$slots: {
                    label: [ho, ({text: e})=>({
                        11: e
                    }), ({text: e})=>e ? 2048 : 0],
                    default: [go]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = U("div"),
                Be(n.$$.fragment),
                I(t, "class", "mt-2")
            },
            m(e, a) {
                z(e, t, a),
                Ne(n, t, null),
                i = !0
            },
            p(e, t) {
                const i = {};
                6145 & t && (i.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                n.$set(i)
            },
            i(e) {
                i || (ze(n.$$.fragment, e),
                i = !0)
            },
            o(e) {
                Ee(n.$$.fragment, e),
                i = !1
            },
            d(e) {
                e && E(t),
                Te(n)
            }
        }
    }
    function go(e) {
        let t, n, i = e[0].media_asset.captions.transcript + "", a, o;
        return {
            c() {
                t = U("p"),
                n = U("span"),
                n.textContent = "“",
                a = R(i),
                o = U("span"),
                o.textContent = "”",
                I(n, "class", "text-xl opacity-50"),
                I(o, "class", "text-xl opacity-50"),
                I(t, "class", "text-gray-600 text-base mt-2")
            },
            m(e, i) {
                z(e, t, i),
                _(t, n),
                _(t, a),
                _(t, o)
            },
            p(e, t) {
                1 & t && i !== (i = e[0].media_asset.captions.transcript + "") && H(a, i)
            },
            d(e) {
                e && E(t)
            }
        }
    }
    function ho(e) {
        let t, n = e[11] + "", i;
        return {
            c() {
                t = U("span"),
                i = R(n),
                I(t, "slot", "label"),
                I(t, "class", "text-primary-200 text-base")
            },
            m(e, n) {
                z(e, t, n),
                _(t, i)
            },
            p(e, t) {
                2048 & t && n !== (n = e[11] + "") && H(i, n)
            },
            d(e) {
                e && E(t)
            }
        }
    }
    function fo(e) {
        let t, n, i, a;
        return {
            c() {
                t = U("a"),
                n = R(e[3]),
                I(t, "href", e[4]),
                I(t, "target", "_blank"),
                I(t, "class", "bg-black hover:scale-[1.02] duration-200 hover:shadow-xl font-medium text-base text-center px-4 mt-2 py-2.5 text-white rounded-md")
            },
            m(o, r) {
                z(o, t, r),
                _(t, n),
                i || (a = T(t, "click", e[10]),
                i = !0)
            },
            p(e, i) {
                8 & i && H(n, e[3]),
                16 & i && I(t, "href", e[4])
            },
            d(e) {
                e && E(t),
                i = !1,
                a()
            }
        }
    }
    function bo(e) {
        let t, n, i;
        return n = new wa({
            props: {
                design: e[5]
            }
        }),
        {
            c() {
                t = U("div"),
                Be(n.$$.fragment),
                I(t, "class", "mt-4 max-w-lg w-full mx-auto")
            },
            m(e, a) {
                z(e, t, a),
                Ne(n, t, null),
                i = !0
            },
            p(e, t) {
                const i = {};
                32 & t && (i.design = e[5]),
                n.$set(i)
            },
            i(e) {
                i || (ze(n.$$.fragment, e),
                i = !0)
            },
            o(e) {
                Ee(n.$$.fragment, e),
                i = !1
            },
            d(e) {
                e && E(t),
                Te(n)
            }
        }
    }
    function vo(e) {
        let t, n, i = e[0] && io(e);
        return {
            c() {
                i && i.c(),
                t = N()
            },
            m(e, a) {
                i && i.m(e, a),
                z(e, t, a),
                n = !0
            },
            p(e, [n]) {
                e[0] ? i ? (i.p(e, n),
                1 & n && ze(i, 1)) : (i = io(e),
                i.c(),
                ze(i, 1),
                i.m(t.parentNode, t)) : i && (Ce(),
                Ee(i, 1, 1, (()=>{
                    i = null
                }
                )),
                Le())
            },
            i(e) {
                n || (ze(i),
                n = !0)
            },
            o(e) {
                Ee(i),
                n = !1
            },
            d(e) {
                i && i.d(e),
                e && E(t)
            }
        }
    }
    function wo(e, t, n) {
        let {primaryColor: i} = t
          , {review: a} = t
          , {widgetId: o} = t
          , {ctaText: r} = t
          , {ctaUrl: s} = t
          , {design: l} = t
          , {showAttribution: c} = t
          , d = !1;
        re((()=>{
            n(7, d = Ii())
        }
        ));
        const u = ()=>n(0, a = void 0)
          , p = ()=>n(0, a = void 0)
          , m = ()=>{
            n(0, a = void 0)
        }
        ;
        return e.$$set = e=>{
            "primaryColor"in e && n(1, i = e.primaryColor),
            "review"in e && n(0, a = e.review),
            "widgetId"in e && n(2, o = e.widgetId),
            "ctaText"in e && n(3, r = e.ctaText),
            "ctaUrl"in e && n(4, s = e.ctaUrl),
            "design"in e && n(5, l = e.design),
            "showAttribution"in e && n(6, c = e.showAttribution)
        }
        ,
        [a, i, o, r, s, l, c, d, u, p, m]
    }
    class yo extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, wo, vo, s, {
                primaryColor: 1,
                review: 0,
                widgetId: 2,
                ctaText: 3,
                ctaUrl: 4,
                design: 5,
                showAttribution: 6
            })
        }
    }
    function xo(e) {
        j(e, "svelte-1t89mz4", ".sj-floating-avatar{border:2px solid var(--clr-border)}.sj-avatars mark{@apply bg-amber-300/30 px-1 py-0.5;;color:inherit}")
    }
    function Ao(e, t, n) {
        const i = e.slice();
        return i[16] = t[n],
        i[18] = n,
        i
    }
    function ko(e) {
        let t, n, i = e[8], a = [];
        for (let t = 0; t < i.length; t += 1)
            a[t] = _o(Ao(e, i, t));
        const o = e=>Ee(a[e], 1, 1, (()=>{
            a[e] = null
        }
        ));
        return {
            c() {
                t = U("div");
                for (let e = 0; e < a.length; e += 1)
                    a[e].c();
                I(t, "class", "flex sj-avatars-list")
            },
            m(e, i) {
                z(e, t, i);
                for (let e = 0; e < a.length; e += 1)
                    a[e] && a[e].m(t, null);
                n = !0
            },
            p(e, n) {
                if (275 & n) {
                    let r;
                    for (i = e[8],
                    r = 0; r < i.length; r += 1) {
                        const o = Ao(e, i, r);
                        a[r] ? (a[r].p(o, n),
                        ze(a[r], 1)) : (a[r] = _o(o),
                        a[r].c(),
                        ze(a[r], 1),
                        a[r].m(t, null))
                    }
                    for (Ce(),
                    r = i.length; r < a.length; r += 1)
                        o(r);
                    Le()
                }
            },
            i(e) {
                if (!n) {
                    for (let e = 0; e < i.length; e += 1)
                        ze(a[e]);
                    n = !0
                }
            },
            o(e) {
                a = a.filter(Boolean);
                for (let e = 0; e < a.length; e += 1)
                    Ee(a[e]);
                n = !1
            },
            d(e) {
                e && E(t),
                M(a, e)
            }
        }
    }
    function $o(e) {
        let t, i, a, o, r, s;
        i = new Xe({
            props: {
                src: e[16].customer_avatar,
                fallbackName: e[16].customer_name,
                class: "sj-floating-avatar"
            }
        });
        let l = [{
            class: a = e[1].popupEnabled ? "block hover:scale-125 duration-200 hover:z-30" : ""
        }]
          , c = {};
        for (let e = 0; e < l.length; e += 1)
            c = n(c, l[e]);
        function d() {
            return e[12](e[16])
        }
        return {
            c() {
                t = U(e[1].popupEnabled ? "button" : "div"),
                Be(i.$$.fragment),
                V(e[1].popupEnabled ? "button" : "div")(t, c)
            },
            m(e, n) {
                z(e, t, n),
                Ne(i, t, null),
                o = !0,
                r || (s = T(t, "click", d),
                r = !0)
            },
            p(n, i) {
                e = n,
                V(e[1].popupEnabled ? "button" : "div")(t, c = Pe(l, [(!o || 2 & i && a !== (a = e[1].popupEnabled ? "block hover:scale-125 duration-200 hover:z-30" : "")) && {
                    class: a
                }]))
            },
            i(e) {
                o || (ze(i.$$.fragment, e),
                o = !0)
            },
            o(e) {
                Ee(i.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && E(t),
                Te(i),
                r = !1,
                s()
            }
        }
    }
    function _o(t) {
        let n, i = t[1].popupEnabled ? "button" : "div", a, o, r, l = (t[1].popupEnabled ? "button" : "div") && $o(t);
        return {
            c() {
                n = U("div"),
                l && l.c(),
                a = B(),
                I(n, "style", o = t[18] != t[0].length - 1 ? "margin-right: -10px;" : ""),
                I(n, "class", "")
            },
            m(e, t) {
                z(e, n, t),
                l && l.m(n, null),
                _(n, a)
            },
            p(e, t) {
                e[1].popupEnabled || "div" ? i ? s(i, e[1].popupEnabled ? "button" : "div") ? (l.d(1),
                l = $o(e),
                i = e[1].popupEnabled ? "button" : "div",
                l.c(),
                l.m(n, a)) : l.p(e, t) : (l = $o(e),
                i = e[1].popupEnabled ? "button" : "div",
                l.c(),
                l.m(n, a)) : i && (l.d(1),
                l = null,
                i = e[1].popupEnabled ? "button" : "div"),
                (!r || 1 & t && o !== (o = e[18] != e[0].length - 1 ? "margin-right: -10px;" : "")) && I(n, "style", o)
            },
            i: e,
            o(e) {
                Ee(l),
                r = !1
            },
            d(e) {
                e && E(n),
                l && l.d(e)
            }
        }
    }
    function jo(t) {
        let n;
        return {
            c() {
                n = U("div"),
                n.textContent = `${t[9].toFixed(1)}`,
                I(n, "class", "sj-rating-text text-base leading-none"),
                K(n, "color", "var(--clr-text)")
            },
            m(e, t) {
                z(e, n, t)
            },
            p: e,
            d(e) {
                e && E(n)
            }
        }
    }
    function So(e) {
        let t, n;
        return t = new wa({
            props: {
                design: e[1],
                style: "logo",
                logoSize: 20
            }
        }),
        {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                2 & n && (i.design = e[1]),
                t.$set(i)
            },
            i(e) {
                n || (ze(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Te(t, e)
            }
        }
    }
    function Co(e) {
        let t, n, i;
        function a(t) {
            e[13](t)
        }
        let o = {
            showAttribution: e[3],
            design: e[1],
            ctaText: e[1].ctaText,
            ctaUrl: e[1].ctaUrl,
            widgetId: e[2].id,
            primaryColor: e[1].colors.primary
        };
        return void 0 !== e[4] && (o.review = e[4]),
        t = new yo({
            props: o
        }),
        ce.push((()=>Re(t, "review", a))),
        {
            c() {
                Be(t.$$.fragment)
            },
            m(e, n) {
                Ne(t, e, n),
                i = !0
            },
            p(e, i) {
                const a = {};
                8 & i && (a.showAttribution = e[3]),
                2 & i && (a.design = e[1]),
                2 & i && (a.ctaText = e[1].ctaText),
                2 & i && (a.ctaUrl = e[1].ctaUrl),
                4 & i && (a.widgetId = e[2].id),
                2 & i && (a.primaryColor = e[1].colors.primary),
                !n && 16 & i && (n = !0,
                a.review = e[4],
                be((()=>n = !1))),
                t.$set(a)
            },
            i(e) {
                i || (ze(t.$$.fragment, e),
                i = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                i = !1
            },
            d(e) {
                Te(t, e)
            }
        }
    }
    function Lo(e) {
        let t, i, a, o, r, s, l, c, d, u, p, m, g, h, f, b, v = (e[1].showAvatars ?? !0) && ko(e);
        s = new ht({
            props: {
                rating: e[9],
                strokeWidth: e[1].colors.ratingStroke ? 12 : 0,
                stroke: e[1].colors.ratingStroke ?? "currentColor",
                size: 16,
                color: "var(--clr-rating)"
            }
        });
        let w = e[1].showRatingNumber && jo(e)
          , y = e[3] && So(e)
          , x = e[1].popupEnabled && e[1].ctaText && Co(e)
          , A = [{
            target: "_blank"
        }, {
            href: g = e[1].url
        }, {
            class: h = "sj-avatars flex items-center gap-4 " + (e[10] ? "justify-center" : "")
        }, {
            style: f = e[7]()
        }]
          , k = {};
        for (let e = 0; e < A.length; e += 1)
            k = n(k, A[e]);
        return {
            c() {
                t = U(e[5] ? "a" : "div"),
                v && v.c(),
                i = B(),
                a = U("div"),
                o = U("div"),
                r = U("div"),
                Be(s.$$.fragment),
                l = B(),
                w && w.c(),
                c = B(),
                d = U("div"),
                u = R(e[6]),
                p = B(),
                y && y.c(),
                m = B(),
                x && x.c(),
                I(r, "class", "flex-none"),
                I(o, "class", "flex items-center gap-1"),
                I(d, "class", "sj-summary-text text-sm"),
                K(d, "color", "var(--clr-text)"),
                I(a, "class", "flex flex-col justify-center gap-1"),
                V(e[5] ? "a" : "div")(t, k)
            },
            m(e, n) {
                z(e, t, n),
                v && v.m(t, null),
                _(t, i),
                _(t, a),
                _(a, o),
                _(o, r),
                Ne(s, r, null),
                _(o, l),
                w && w.m(o, null),
                _(a, c),
                _(a, d),
                _(d, u),
                _(t, p),
                y && y.m(t, null),
                _(t, m),
                x && x.m(t, null),
                b = !0
            },
            p(e, n) {
                e[1].showAvatars ?? 1 ? v ? (v.p(e, n),
                2 & n && ze(v, 1)) : (v = ko(e),
                v.c(),
                ze(v, 1),
                v.m(t, i)) : v && (Ce(),
                Ee(v, 1, 1, (()=>{
                    v = null
                }
                )),
                Le());
                const a = {};
                2 & n && (a.strokeWidth = e[1].colors.ratingStroke ? 12 : 0),
                2 & n && (a.stroke = e[1].colors.ratingStroke ?? "currentColor"),
                s.$set(a),
                e[1].showRatingNumber ? w ? w.p(e, n) : (w = jo(e),
                w.c(),
                w.m(o, null)) : w && (w.d(1),
                w = null),
                (!b || 64 & n) && H(u, e[6]),
                e[3] ? y ? (y.p(e, n),
                8 & n && ze(y, 1)) : (y = So(e),
                y.c(),
                ze(y, 1),
                y.m(t, m)) : y && (Ce(),
                Ee(y, 1, 1, (()=>{
                    y = null
                }
                )),
                Le()),
                e[1].popupEnabled && e[1].ctaText ? x ? (x.p(e, n),
                2 & n && ze(x, 1)) : (x = Co(e),
                x.c(),
                ze(x, 1),
                x.m(t, null)) : x && (Ce(),
                Ee(x, 1, 1, (()=>{
                    x = null
                }
                )),
                Le()),
                V(e[5] ? "a" : "div")(t, k = Pe(A, [{
                    target: "_blank"
                }, (!b || 2 & n && g !== (g = e[1].url)) && {
                    href: g
                }, {
                    class: h
                }, {
                    style: f
                }]))
            },
            i(e) {
                b || (ze(v),
                ze(s.$$.fragment, e),
                ze(y),
                ze(x),
                b = !0)
            },
            o(e) {
                Ee(v),
                Ee(s.$$.fragment, e),
                Ee(y),
                Ee(x),
                b = !1
            },
            d(e) {
                e && E(t),
                v && v.d(),
                Te(s),
                w && w.d(),
                y && y.d(),
                x && x.d()
            }
        }
    }
    function zo(t) {
        let n = t[5] ? "a" : "div", i, a = (t[5] ? "a" : "div") && Lo(t);
        return {
            c() {
                a && a.c(),
                i = N()
            },
            m(e, t) {
                a && a.m(e, t),
                z(e, i, t)
            },
            p(e, [t]) {
                e[5] || "div" ? n ? s(n, e[5] ? "a" : "div") ? (a.d(1),
                a = Lo(e),
                n = e[5] ? "a" : "div",
                a.c(),
                a.m(i.parentNode, i)) : a.p(e, t) : (a = Lo(e),
                n = e[5] ? "a" : "div",
                a.c(),
                a.m(i.parentNode, i)) : n && (a.d(1),
                a = null,
                n = e[5] ? "a" : "div")
            },
            i: e,
            o(e) {
                Ee(a)
            },
            d(e) {
                e && E(i),
                a && a.d(e)
            }
        }
    }
    function Eo(e, t) {
        let n = e;
        const {testimonialCount: i} = t;
        return n ? (n = n.replace("{count}", i.toString()),
        n = n.replace("{testimonial_count}", i.toString()),
        n) : `from ${i} reviews`
    }
    function Mo(e, t, n) {
        let i, a;
        var o;
        let {design: r} = t
          , {reviews: s} = t
          , {widget: l} = t
          , {aggregate: c} = t;
        function d() {
            var e;
            const t = []
              , n = r.colors;
            return t.push(`--clr-primary: ${n.primary}`),
            t.push(`--clr-text: ${n.text}`),
            t.push(`--clr-border: ${n.border}`),
            t.push(`--clr-rating: ${null !== (e = n.rating) && void 0 !== e ? e : qe}`),
            t.join("; ")
        }
        s = s.sort(((e,t)=>e.customer_avatar && !t.customer_avatar ? -1 : !e.customer_avatar && t.customer_avatar ? 1 : 0));
        let {showAttribution: u=!0} = t;
        const p = r.maxAvatars
          , m = s.slice(0, p);
        let g = c.avg.rating, h = null !== (o = r.center) && void 0 !== o && o, f;
        const b = e=>n(4, f = e);
        function v(e) {
            f = e,
            n(4, f)
        }
        return e.$$set = e=>{
            "design"in e && n(1, r = e.design),
            "reviews"in e && n(0, s = e.reviews),
            "widget"in e && n(2, l = e.widget),
            "aggregate"in e && n(11, c = e.aggregate),
            "showAttribution"in e && n(3, u = e.showAttribution)
        }
        ,
        e.$$.update = ()=>{
            2050 & e.$$.dirty && n(6, i = Eo(r.text, {
                testimonialCount: c.count
            })),
            2 & e.$$.dirty && n(5, a = !!r.url && !r.popupEnabled)
        }
        ,
        [s, r, l, u, f, a, i, d, m, g, h, c, b, v]
    }
    class Uo extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, Mo, zo, s, {
                design: 1,
                reviews: 0,
                widget: 2,
                aggregate: 11,
                showAttribution: 3
            }, xo)
        }
    }
    function Po(e) {
        let t, n;
        return t = new Uo({
            props: {
                design: e[1].config.design,
                reviews: e[0],
                aggregate: e[2],
                widget: e[1],
                showAttribution: e[1].config.showAttribution
            }
        }),
        {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i),
                n = !0
            },
            p(e, n) {
                const i = {};
                2 & n && (i.design = e[1].config.design),
                1 & n && (i.reviews = e[0]),
                4 & n && (i.aggregate = e[2]),
                2 & n && (i.widget = e[1]),
                2 & n && (i.showAttribution = e[1].config.showAttribution),
                t.$set(i)
            },
            i(e) {
                n || (ze(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                Ee(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Te(t, e)
            }
        }
    }
    function Ro(e) {
        let t, n, i = "avatars" == e[1].config.design.type && Po(e);
        return {
            c() {
                i && i.c(),
                t = N()
            },
            m(e, a) {
                i && i.m(e, a),
                z(e, t, a),
                n = !0
            },
            p(e, [n]) {
                "avatars" == e[1].config.design.type ? i ? (i.p(e, n),
                2 & n && ze(i, 1)) : (i = Po(e),
                i.c(),
                ze(i, 1),
                i.m(t.parentNode, t)) : i && (Ce(),
                Ee(i, 1, 1, (()=>{
                    i = null
                }
                )),
                Le())
            },
            i(e) {
                n || (ze(i),
                n = !0)
            },
            o(e) {
                Ee(i),
                n = !1
            },
            d(e) {
                i && i.d(e),
                e && E(t)
            }
        }
    }
    function Bo(e, t, n) {
        let {reviews: i} = t
          , {widget: a} = t
          , {aggregate: o} = t;
        return e.$$set = e=>{
            "reviews"in e && n(0, i = e.reviews),
            "widget"in e && n(1, a = e.widget),
            "aggregate"in e && n(2, o = e.aggregate)
        }
        ,
        [i, a, o]
    }
    class No extends Fe {
        constructor(e) {
            super(),
            Ie(this, e, Bo, Ro, s, {
                reviews: 0,
                widget: 1,
                aggregate: 2
            })
        }
    }
    function To(e) {
        var t, n, i, a, o, r;
        let {review: s, lang: l, autoDetectLang: c, defaultLang: d} = e;
        if (c && "undefined" != typeof window && (l = null !== (t = Do(window.location.href)) && void 0 !== t ? t : d),
        !l)
            return s;
        if (l === s.lang)
            return s;
        const u = null === (n = s.translations) || void 0 === n ? void 0 : n.find((e=>e.lang == l));
        return u ? (s.text = null !== (i = u.text) && void 0 !== i ? i : s.text,
        s.title = null !== (a = u.title) && void 0 !== a ? a : s.title,
        s.html = null !== (o = u.text) && void 0 !== o ? o : s.html,
        s.customer_tagline = null !== (r = u.customer_tagline) && void 0 !== r ? r : s.customer_tagline,
        Object.assign({}, s)) : s
    }
    function Do(e) {
        var t;
        try {
            const n = /^(?:https?:\/\/)?([^\/]+)/i
              , i = /^(?:https?:\/\/)?[^\/]+\/([a-z]{2}(?:-[A-Z]{2})?)\//i
              , a = e.match(n)
              , o = document.documentElement.lang
              , r = new URLSearchParams(window.location.search)
              , s = null !== (t = r.get("lang")) && void 0 !== t ? t : r.get("language");
            if (s)
                return s.split("-")[0];
            if (o)
                return o.split("-")[0];
            if (a) {
                const e = a[1]
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
    class Io {
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
            var i, a, o;
            const r = n.widget
              , s = e.getAttribute("data-session")
              , l = e.getAttribute("data-id");
            let c = null === localStorage || void 0 === localStorage ? void 0 : localStorage.getItem("sj_v_id");
            c || (c = this._uuidv4(),
            null === localStorage || void 0 === localStorage || localStorage.setItem("sj_v_id", c));
            const d = Intl.DateTimeFormat().resolvedOptions().timeZone
              , u = Oo[d]
              , p = this.getPageDetails();
            let m = p.url;
            const g = p.host
              , h = null != e.querySelector(".sj-powered-by");
            if (null === (i = window.location.search) || void 0 === i ? void 0 : i.includes("preview"))
                return;
            if (Fo.includes(m))
                return;
            const f = {
                load_session_id: s,
                widget_id: l,
                version: "1",
                action: t,
                visitor_id: c,
                timestamp: (new Date).toISOString(),
                payload: JSON.stringify(Object.assign(Object.assign({
                    country: u,
                    page: m,
                    host: g,
                    design: null === (o = null === (a = null == r ? void 0 : r.config) || void 0 === a ? void 0 : a.design) || void 0 === o ? void 0 : o.type,
                    powered_by_enabled: h
                }, n), {
                    widget: void 0
                }))
            };
            await fetch("https://analytics.senja.io/widget", {
                method: "POST",
                body: JSON.stringify(f)
            })
        }
        track(e, t) {
            var n;
            const i = this._uuidv4();
            e.setAttribute("data-session", i);
            const a = {
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
            const o = n=>{
                if (a.isVisible = n,
                n) {
                    if (a.startTime = Date.now(),
                    a.trackedView)
                        return;
                    a.trackedView = !0,
                    this.sendEvent(e, "view", {
                        widget: t
                    })
                } else {
                    if (!a.startTime)
                        return;
                    const n = Date.now()
                      , i = parseFloat(((n - a.startTime) / 1e3).toFixed(2));
                    this.sendEvent(e, "exit_view", {
                        duration: i,
                        widget: t
                    })
                }
            }
              , r = new IntersectionObserver((e=>{
                e.forEach((e=>{
                    o(e.isIntersecting)
                }
                ))
            }
            ))
              , s = new MutationObserver((t=>{
                t.forEach((t=>{
                    "childList" === t.type && t.removedNodes.forEach((t=>{
                        var n;
                        t === e && (o(!1),
                        null === (n = null == a ? void 0 : a.intersectionObserver) || void 0 === n || n.disconnect())
                    }
                    ))
                }
                ))
            }
            ));
            a.mutationObserver = s,
            e.addEventListener("click", (()=>{
                this.sendEvent(e, "click", {
                    widget: t
                })
            }
            )),
            a.intersectionObserver = r;
            const l = Di(null === (n = t.config) || void 0 === n ? void 0 : n.design);
            l ? o(!0) : r.observe(e),
            e.parentElement && s.observe(e.parentElement, {
                childList: !0
            })
        }
    }
    const Fo = ["about:blank", "about:srcdoc", "about:invalid", "about:blank#blocked"]
      , Oo = {
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
    function Go(e, t) {
        void 0 === t && (t = {});
        var n = t.insertAt;
        if (e && "undefined" != typeof document) {
            var i = document.head || document.getElementsByTagName("head")[0]
              , a = document.createElement("style");
            a.type = "text/css",
            "top" === n && i.firstChild ? i.insertBefore(a, i.firstChild) : i.appendChild(a),
            a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e))
        }
    }
    var qo = '.senja-embed *,.senja-embed :after,.senja-embed :before{border:0 solid #e5e7eb;box-sizing:border-box}.senja-embed :after,.senja-embed :before{--tw-content:""}.senja-embed html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;-moz-tab-size:4;-o-tab-size:4;tab-size:4}.senja-embed .text-2xl,.senja-embed .text-3xl,.senja-embed .text-4xl,.senja-embed .text-base,.senja-embed .text-lg,.senja-embed .text-sm,.senja-embed .text-xl{margin:0}.senja-embed body{line-height:inherit;margin:0}.senja-embed hr{border-top-width:1px;color:inherit;height:0}.senja-embed abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.senja-embed h1,.senja-embed h2,.senja-embed h3,.senja-embed h4,.senja-embed h5,.senja-embed h6{font-size:inherit;font-weight:inherit}.senja-embed a{color:inherit;text-decoration:inherit}.senja-embed b,.senja-embed strong{font-weight:700}.senja-embed code,.senja-embed kbd,.senja-embed pre,.senja-embed samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}.senja-embed small{font-size:80%}.senja-embed sub,.senja-embed sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.senja-embed sub{bottom:-.25em}.senja-embed sup{top:-.5em}.senja-embed table{border-collapse:collapse;border-color:inherit;text-indent:0}.senja-embed button,.senja-embed input,.senja-embed optgroup,.senja-embed select,.senja-embed textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}.senja-embed button,.senja-embed select{text-transform:none}.senja-embed [type=button],.senja-embed [type=reset],.senja-embed [type=submit],.senja-embed button{-webkit-appearance:button;background-color:transparent;background-image:none}.senja-embed :-moz-focusring{outline:auto}.senja-embed :-moz-ui-invalid{box-shadow:none}.senja-embed progress{vertical-align:baseline}.senja-embed ::-webkit-inner-spin-button,.senja-embed ::-webkit-outer-spin-button{height:auto}.senja-embed [type=search]{-webkit-appearance:textfield;outline-offset:-2px}.senja-embed ::-webkit-search-decoration{-webkit-appearance:none}.senja-embed ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.senja-embed summary{display:list-item}.senja-embed blockquote,.senja-embed dd,.senja-embed dl,.senja-embed figure,.senja-embed h1,.senja-embed h2,.senja-embed h3,.senja-embed h4,.senja-embed h5,.senja-embed h6,.senja-embed hr,.senja-embed p,.senja-embed pre{margin:0}.senja-embed fieldset{margin:0;padding:0}.senja-embed legend{padding:0}.senja-embed menu,.senja-embed ol,.senja-embed ul{list-style:none;margin:0;padding:0}.senja-embed textarea{resize:vertical}.senja-embed input::-moz-placeholder,.senja-embed textarea::-moz-placeholder{color:#9ca3af;opacity:1}.senja-embed input::placeholder,.senja-embed textarea::placeholder{color:#9ca3af;opacity:1}.senja-embed [role=button],.senja-embed button{cursor:pointer}.senja-embed :disabled{cursor:default}.senja-embed audio,.senja-embed canvas,.senja-embed embed,.senja-embed iframe,.senja-embed img,.senja-embed object,.senja-embed svg,.senja-embed video{display:block;vertical-align:middle}.senja-embed img,.senja-embed video{height:auto;max-width:100%}.senja-embed [hidden]{display:none}';
    Go(qo);
    var Vo = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.senja-embed :is(.pointer-events-none){pointer-events:none}.senja-embed :is(.pointer-events-auto){pointer-events:auto}.senja-embed :is(.visible){visibility:visible}.senja-embed :is(.static){position:static}.senja-embed :is(.fixed){position:fixed}.senja-embed :is(.absolute){position:absolute}.senja-embed :is(.relative){position:relative}.senja-embed :is(.inset-0){inset:0}.senja-embed :is(.inset-x-0){left:0;right:0}.senja-embed :is(.inset-y-0){bottom:0;top:0}.senja-embed :is(.bottom-0){bottom:0}.senja-embed :is(.right-2){right:8px}.senja-embed :is(.right-4){right:16px}.senja-embed :is(.top-2){top:8px}.senja-embed :is(.top-4){top:16px}.senja-embed :is(.top-auto){top:auto}.senja-embed :is(.z-\\[9999998\\]){z-index:9999998}.senja-embed :is(.mx-auto){margin-left:auto;margin-right:auto}.senja-embed :is(.my-2){margin-bottom:8px;margin-top:8px}.senja-embed :is(.my-auto){margin-bottom:auto;margin-top:auto}.senja-embed :is(.-ml-1){margin-left:-4px}.senja-embed :is(.-mr-0){margin-right:0}.senja-embed :is(.-mr-0\\.5){margin-right:-2px}.senja-embed :is(.-mt-0){margin-top:0}.senja-embed :is(.-mt-0\\.5){margin-top:-2px}.senja-embed :is(.-mt-12){margin-top:-48px}.senja-embed :is(.mb-1){margin-bottom:4px}.senja-embed :is(.mb-2){margin-bottom:8px}.senja-embed :is(.mr-2){margin-right:8px}.senja-embed :is(.mt-2){margin-top:8px}.senja-embed :is(.mt-4){margin-top:16px}.senja-embed :is(.block){display:block}.senja-embed :is(.inline){display:inline}.senja-embed :is(.flex){display:flex}.senja-embed :is(.hidden){display:none}.senja-embed :is(.h-20){height:80px}.senja-embed :is(.h-32){height:128px}.senja-embed :is(.h-6){height:24px}.senja-embed :is(.h-full){height:100%}.senja-embed :is(.max-h-12){max-height:48px}.senja-embed :is(.w-20){width:80px}.senja-embed :is(.w-6){width:24px}.senja-embed :is(.w-full){width:100%}.senja-embed :is(.max-w-\\[100px\\]){max-width:100px}.senja-embed :is(.max-w-lg){max-width:512px}.senja-embed :is(.flex-none){flex:none}.senja-embed :is(.flex-shrink){flex-shrink:1}.senja-embed :is(.flex-grow){flex-grow:1}.senja-embed :is(.origin-bottom-right){transform-origin:bottom right}.senja-embed :is(.-rotate-45){--tw-rotate:-45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.senja-embed :is(.transform){transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.senja-embed :is(.resize){resize:both}.senja-embed :is(.flex-col){flex-direction:column}.senja-embed :is(.flex-wrap){flex-wrap:wrap}.senja-embed :is(.items-start){align-items:flex-start}.senja-embed :is(.items-center){align-items:center}.senja-embed :is(.justify-start){justify-content:flex-start}.senja-embed :is(.justify-end){justify-content:flex-end}.senja-embed :is(.justify-center){justify-content:center}.senja-embed :is(.justify-between){justify-content:space-between}.senja-embed :is(.gap-1){gap:4px}.senja-embed :is(.gap-2){gap:8px}.senja-embed :is(.gap-4){gap:16px}.senja-embed :is(.overflow-hidden){overflow:hidden}.senja-embed :is(.overflow-y-auto){overflow-y:auto}.senja-embed :is(.truncate){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.senja-embed :is(.whitespace-pre-line){white-space:pre-line}.senja-embed :is(.rounded){border-radius:4px}.senja-embed :is(.rounded-full){border-radius:9999px}.senja-embed :is(.rounded-lg){border-radius:8px}.senja-embed :is(.rounded-md){border-radius:6px}.senja-embed :is(.rounded-none){border-radius:0}.senja-embed :is(.border){border-width:1px}.senja-embed :is(.border-none){border-style:none}.senja-embed :is(.bg-amber-300\\/30){background-color:rgba(252,211,77,.3)}.senja-embed :is(.bg-black){--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.senja-embed :is(.bg-gray-100){--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.senja-embed :is(.bg-gray-200\\/80){background-color:rgba(229,231,235,.8)}.senja-embed :is(.bg-white){--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.senja-embed :is(.bg-white\\/60){background-color:hsla(0,0%,100%,.6)}.senja-embed :is(.bg-gradient-to-t){background-image:linear-gradient(to top,var(--tw-gradient-stops))}.senja-embed :is(.from-black\\/70){--tw-gradient-from:rgba(0,0,0,.7) var(--tw-gradient-from-position);--tw-gradient-to:transparent var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.senja-embed :is(.to-transparent){--tw-gradient-to:transparent var(--tw-gradient-to-position)}.senja-embed :is(.object-contain){-o-object-fit:contain;object-fit:contain}.senja-embed :is(.object-cover){-o-object-fit:cover;object-fit:cover}.senja-embed :is(.p-1){padding:4px}.senja-embed :is(.p-4){padding:16px}.senja-embed :is(.px-1){padding-left:4px;padding-right:4px}.senja-embed :is(.px-4){padding-left:16px;padding-right:16px}.senja-embed :is(.px-6){padding-left:24px;padding-right:24px}.senja-embed :is(.px-\\[5px\\]){padding-left:5px;padding-right:5px}.senja-embed :is(.py-0){padding-bottom:0;padding-top:0}.senja-embed :is(.py-1){padding-bottom:4px;padding-top:4px}.senja-embed :is(.py-2){padding-bottom:8px;padding-top:8px}.senja-embed :is(.py-2\\.5){padding-bottom:10px;padding-top:10px}.senja-embed :is(.py-8){padding-bottom:32px;padding-top:32px}.senja-embed :is(.pb-8){padding-bottom:32px}.senja-embed :is(.text-center){text-align:center}.senja-embed :is(.align-middle){vertical-align:middle}.senja-embed :is(.text-base){font-size:16px;line-height:24px}.senja-embed :is(.text-lg){font-size:18px;line-height:28px}.senja-embed :is(.text-sm){font-size:14px;line-height:20px}.senja-embed :is(.text-xl){font-size:20px;line-height:28px}.senja-embed :is(.text-xs){font-size:12px;line-height:16px}.senja-embed :is(.font-medium){font-weight:500}.senja-embed :is(.leading-none){line-height:1}.senja-embed :is(.tracking-tight){letter-spacing:-.025em}.senja-embed :is(.text-gray-300){--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity))}.senja-embed :is(.text-gray-500){--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.senja-embed :is(.text-gray-600){--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.senja-embed :is(.text-gray-700){--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.senja-embed :is(.text-white){--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.senja-embed :is(.opacity-50){opacity:.5}.senja-embed :is(.opacity-80){opacity:.8}.senja-embed :is(.shadow){--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.senja-embed :is(.shadow-2xl){--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.senja-embed :is(.shadow-xl){--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.senja-embed :is(.backdrop-blur-lg){--tw-backdrop-blur:blur(16px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.senja-embed :is(.transition){transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.senja-embed :is(.duration-200){transition-duration:.2s}.senja-embed :is(.hover\\:z-30:hover){z-index:30}.senja-embed :is(.hover\\:scale-125:hover){--tw-scale-x:1.25;--tw-scale-y:1.25;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.senja-embed :is(.hover\\:scale-\\[1\\.02\\]:hover){--tw-scale-x:1.02;--tw-scale-y:1.02;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.senja-embed :is(.hover\\:border-transparent:hover){border-color:transparent}.senja-embed :is(.hover\\:bg-white\\/20:hover){background-color:hsla(0,0%,100%,.2)}.senja-embed :is(.hover\\:bg-gradient-to-r:hover){background-image:linear-gradient(to right,var(--tw-gradient-stops))}.senja-embed :is(.hover\\:from-\\[\\#6701EF\\]:hover){--tw-gradient-from:#6701ef var(--tw-gradient-from-position);--tw-gradient-to:rgba(103,1,239,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.senja-embed :is(.hover\\:to-purple-500:hover){--tw-gradient-to:#a855f7 var(--tw-gradient-to-position)}.senja-embed :is(.hover\\:text-white:hover){--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.senja-embed :is(.hover\\:shadow-xl:hover){--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.senja-embed :is(.group:hover .group-hover\\:-mr-0){margin-right:0}.senja-embed :is(.group:hover .group-hover\\:scale-105){--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (min-width:640px){.senja-embed :is(.sm\\:text-xl){font-size:20px;line-height:28px}}@media (min-width:768px){.senja-embed :is(.md\\:text-xl){font-size:20px;line-height:28px}}";
    Go(Vo);
    const Wo = (e,t)=>{
        const n = new Io;
        window.addEventListener("senjaWidgetLoaded", (function(i) {
            var a;
            let o = i.detail;
            const r = o.id
              , s = o.widget
              , l = o.designId
              , c = o.aggregate;
            let d = o.reviews;
            if ("random" == (null === (a = null == s ? void 0 : s.testimonial_arrangement) || void 0 === a ? void 0 : a.sort) && (d = d.sort((()=>Math.random() - .5))),
            l !== e)
                return;
            d = Ho(d, s),
            Ko(s);
            const u = Array.from(document.querySelectorAll(`.senja-embed[data-id="${r}"]`));
            u.forEach((e=>{
                e && "true" !== e.getAttribute("data-built") && (e.setAttribute("data-built", "true"),
                e.removeAttribute("data-building"),
                Zo({
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
    function Ho(e, t) {
        return e.map((e=>{
            var n, i, a, o;
            return To({
                review: e,
                lang: null === (i = null === (n = t.filters) || void 0 === n ? void 0 : n.languages) || void 0 === i ? void 0 : i[0],
                defaultLang: null === (a = t.config) || void 0 === a ? void 0 : a.defaultLang,
                autoDetectLang: null === (o = t.config) || void 0 === o ? void 0 : o.autoSwapTranslations
            })
        }
        ))
    }
    function Ko(e, t) {
        var n, i;
        let a = document.querySelector("#senja-widget-css");
        a || (a = document.createElement("style"),
        a.id = "senja-widget-css",
        a.textContent = ".senja-embed {  -webkit-text-size-adjust: 100%; }"),
        (null === (n = e.config) || void 0 === n ? void 0 : n.customCss) && (a.textContent = a.textContent + "\n" + (null === (i = e.config) || void 0 === i ? void 0 : i.customCss)),
        document.head.appendChild(a),
        t && t.appendChild(a)
    }
    function Zo(e) {
        var t, n, i, a;
        const {targetDiv: o, widget: r, reviews: s, builder: l} = e
          , c = null !== (t = o.getAttribute("data-mode")) && void 0 !== t ? t : "dom";
        if ("dom" == c)
            l(o, {
                widget: r,
                reviews: s,
                design: r.config.design,
                showAttribution: null === (n = r.config) || void 0 === n ? void 0 : n.showAttribution,
                aggregate: e.aggregate
            });
        else if ("shadow" == c) {
            const t = o.attachShadow({
                mode: "open"
            })
              , n = document.createElement("style");
            n.innerHTML = `\n\t\t\t:host { font-family: inherit; text-align: left; }\n\t\t\t${qo}\n\t\t\t${Vo}\n\t\t\t${null !== (i = r.config.customCss) && void 0 !== i ? i : ""}\n\t\t`,
            t.appendChild(n);
            const c = document.createElement("div");
            c.className = "senja-embed",
            c.setAttribute("data-id", r.id),
            c.setAttribute("data-built", "true"),
            t.appendChild(c),
            l(c, {
                widget: r,
                reviews: s,
                design: r.config.design,
                showAttribution: null === (a = r.config) || void 0 === a ? void 0 : a.showAttribution,
                aggregate: e.aggregate
            })
        }
    }
    function Yo() {
        Wo("avatars", ((e,t)=>{
            new No({
                target: e,
                props: t
            })
        }
        ))
    }
    Yo()
}();
