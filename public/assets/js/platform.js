!function() {
    "use strict";
    class t {
        static log(t) {
            window.senjaDebug && console.log(t)
        }
    }
    class e {
        static async loadScript(e) {
            if (t.log(`Loading script ${e}`),
            !this.scripts.has(e)) {
                t.log(`Script ${e} not loaded yet, loading...`);
                let i = document.querySelector(`script[src="${e}"]`);
                if (!i) {
                    t.log(`Script ${e} not found, creating...`);
                    const n = new Promise(((t,n)=>{
                        i = document.createElement("script"),
                        i.src = e,
                        i.defer = !0,
                        i.onload = ()=>t(i),
                        i.onerror = n,
                        document.head.appendChild(i)
                    }
                    ));
                    this.scripts.set(e, n)
                }
            }
            return t.log(`Script ${e} loaded, returning promise...`),
            t.log(await this.scripts.get(e)),
            this.scripts.get(e)
        }
    }
    e.scripts = new Map;
    class i {
        constructor() {
            this.builtWidgets = []
        }
        static log(t) {
            window.senjaDebug && console.log(t)
        }
        static init(t) {
            if (window.SenjaBuilderInitialized)
                return;
            t && (this.env = t),
            window.SenjaBuilderInitialized = !0,
            this.setupDebugger();
            const e = document.querySelectorAll(".senja-embed");
            this.setupStyles(),
            this.setupEmbeds(e),
            this.observe()
        }
        static setupDebugger() {
            var t;
            const e = "true" === (null === (t = document.currentScript) || void 0 === t ? void 0 : t.getAttribute("data-debug"));
            window.senjaDebug = e
        }
        static observe() {
            const t = new MutationObserver(function() {
                const t = document.querySelectorAll(".senja-embed");
                this.setupEmbeds(t)
            }
            .bind(this));
            t.observe(document, {
                attributes: !1,
                childList: !0,
                characterData: !1,
                subtree: !0
            })
        }
        static setupStyles() {
            if (document.querySelector('style[data-senja-platform="true"]'))
                return;
            const t = document.createElement("style");
            t.type = "text/css",
            t.setAttribute("data-senja-platform", "true"),
            t.innerHTML = '\n      .senja-spinner-container {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          width: 100%;\n      }\n    \n      .senja-embed[data-built="true"] .senja-spinner-container {\n        display: none;\n      }\n\n        .senja-spinner {\n          display: inline-block;\n          width: 16px;\n          height: 16px;\n          border: 3px solid rgba(220, 220, 230, 0.5) !important;\n          border-radius: 50%;\n          border-top-color: rgba(220, 220, 230, 1) !important;\n          animation: spin 1s ease-in-out infinite !important;\n          -webkit-animation: spin 1s ease-in-out infinite !important;\n        }\n        \n        @keyframes spin {\n          to { -webkit-transform: rotate(360deg); }\n        }\n        @-webkit-keyframes spin {\n          to { -webkit-transform: rotate(360deg); }\n        }\n    ',
            document.head.appendChild(t)
        }
        static setupEmbeds(t) {
            for (let e = 0; e < t.length; e++) {
                const i = t[e];
                if (null == i)
                    continue;
                const n = i.getAttribute("data-id");
                n && ("true" !== i.getAttribute("data-built") && "true" !== i.getAttribute("data-building") && this.buildEmbed(i, n))
            }
        }
        static addLoadingSpinner(t) {
            if ("false" === t.getAttribute("data-spinner"))
                return;
            const e = document.createElement("div");
            e.classList.add("senja-spinner-container");
            const i = document.createElement("div");
            i.classList.add("senja-spinner"),
            e.appendChild(i),
            t.appendChild(e)
        }
        static async buildEmbed(t, i) {
            var n, s, a, r, d;
            if ("true" === t.getAttribute("data-built"))
                return;
            t.setAttribute("data-building", "true"),
            this.addLoadingSpinner(t);
            let o = `https://widget.senja.io/api/widget-config/${i}`;
            "staging" === this.env && (o = `https://widget.senja.io/api/widget-config/${i}?staging=true`);
            const c = await fetch(o)
              , u = await c.json()
              , l = u.widget;
            if (!l)
                return;
            window.SenjaAffiliatePoweredBy = null === (s = null === (n = l.project) || void 0 === n ? void 0 : n.config) || void 0 === s ? void 0 : s.affiliateLink;
            const g = u.builder
              , p = u.aggregate
              , b = null === (r = null === (a = null == l ? void 0 : l.config) || void 0 === a ? void 0 : a.design) || void 0 === r ? void 0 : r.type;
            if (!b)
                return;
            const w = null !== (d = u.reviews) && void 0 !== d ? d : [];
            if (await e.loadScript(g),
            "true" === t.getAttribute("data-lazyload") && !this.fixedWidgetDesigns.includes(b))
                return void this.lazyload(t, {
                    widget: l,
                    reviews: w,
                    id: i,
                    designId: b,
                    aggregate: p
                });
            const m = new CustomEvent("senjaWidgetLoaded",{
                detail: {
                    id: i,
                    reviews: w,
                    widget: l,
                    designId: b,
                    aggregate: p
                }
            });
            window.dispatchEvent(m)
        }
        static lazyload(t, e) {
            const {widget: i, reviews: n, id: s, designId: a} = e
              , r = new IntersectionObserver(((r,d)=>{
                r.forEach((r=>{
                    if (r.isIntersecting) {
                        if ("true" === t.getAttribute("data-built"))
                            return null == d ? void 0 : d.unobserve(t);
                        const o = new CustomEvent("senjaWidgetLoaded",{
                            detail: {
                                id: s,
                                reviews: n,
                                widget: i,
                                designId: a,
                                aggregate: e.aggregate
                            }
                        });
                        window.dispatchEvent(o),
                        d.unobserve(r.target)
                    }
                }
                ))
            }
            ));
            r.observe(t)
        }
    }
    i.fixedWidgetDesigns = ["popup", "toast"],
    i.env = "production",
    i.init("production")
}();
