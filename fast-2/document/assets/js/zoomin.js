! function () {
    var e = Object.assign || function (e) {
            for (var t, o = 1; o < arguments.length; o++)
                for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        },
        t = ["IMG"],
        o = [27, 81],
        n = function (e) {
            return -1 < t.indexOf(e.tagName)
        },
        i = function (e) {
            return e.naturalWidth !== e.width
        },
        r = function (e) {
            return e && 1 === e.nodeType
        },
        d = function (d) {
            var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                l = a.margin,
                c = void 0 === l ? 0 : l,
                m = a.background,
                s = void 0 === m ? "#fff" : m,
                u = a.scrollOffset,
                p = void 0 === u ? 48 : u,
                f = a.metaClick,
                v = a.container,
                g = a.template,
                h = function (e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    if ("function" == typeof window.CustomEvent) return new CustomEvent(e, t);
                    var o = document.createEvent("CustomEvent");
                    return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o
                },
                y = function () {
                    if (A.original) {
                        if (A.original.dispatchEvent(h("show")), N = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, S = !0, A.zoomed = function (e) {
                                var t = e.getBoundingClientRect(),
                                    o = t.top,
                                    n = t.left,
                                    i = t.width,
                                    r = t.height,
                                    d = e.cloneNode(),
                                    a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                                    l = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
                                return d.removeAttribute("id"), d.style.position = "absolute", d.style.top = o + a + "px", d.style.left = n + l + "px", d.style.width = i + "px", d.style.height = r + "px", d.style.transform = "", d
                            }(A.original), document.body.appendChild(x), O.template) {
                            var e = r(O.template) ? O.template : document.querySelector(O.template);
                            A.template = document.createElement("div"), A.template.appendChild(e.content.cloneNode(!0)), document.body.appendChild(A.template)
                        }
                        if (document.body.appendChild(A.zoomed), requestAnimationFrame(function () {
                                document.body.classList.add("medium-zoom--open")
                            }), A.original.style.visibility = "hidden", A.zoomed.classList.add("medium-zoom-image--open"), A.zoomed.addEventListener("click", z), A.zoomed.addEventListener("transitionend", w), A.original.getAttribute("data-zoom-target")) {
                            A.zoomedHd = A.zoomed.cloneNode(), A.zoomedHd.src = A.zoomed.getAttribute("data-zoom-target"), A.zoomedHd.onerror = function () {
                                clearInterval(t), console.error("Unable to reach the zoom image target " + A.zoomedHd.src), A.zoomedHd = null, k()
                            };
                            var t = setInterval(function () {
                                A.zoomedHd.naturalWidth && (clearInterval(t), A.zoomedHd.classList.add("medium-zoom-image--open"), A.zoomedHd.addEventListener("click", z), document.body.appendChild(A.zoomedHd), k())
                            }, 10)
                        } else k()
                    }
                },
                z = function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        o = function () {
                            S || !A.original || (A.original.dispatchEvent(h("hide")), S = !0, document.body.classList.remove("medium-zoom--open"), A.zoomed.style.transform = "", A.zoomedHd && (A.zoomedHd.style.transform = "", A.zoomedHd.removeEventListener("click", e)), A.template && (A.template.style.transition = "opacity 150ms", A.template.style.opacity = 0), A.zoomed.removeEventListener("click", e), A.zoomed.addEventListener("transitionend", L))
                        };
                    0 < t ? setTimeout(o, t) : o()
                },
                b = function (e) {
                    e && e.target ? (A.original = e.target, y()) : A.original ? z() : (A.original = T[0], y())
                },
                E = function (e) {
                    return (e.metaKey || e.ctrlKey) && O.metaClick ? window.open(e.target.getAttribute("data-original") || e.target.parentNode.href || e.target.src, "_blank") : (e.preventDefault(), void b(e))
                },
                w = function e() {
                    S = !1, A.zoomed.removeEventListener("transitionend", e), A.original.dispatchEvent(h("shown"))
                },
                L = function e() {
                    A.original && (A.original.style.visibility = "", document.body.removeChild(A.zoomed), A.zoomedHd && document.body.removeChild(A.zoomedHd), document.body.removeChild(x), A.zoomed.classList.remove("medium-zoom-image--open"), A.template && document.body.removeChild(A.template), S = !1, A.zoomed.removeEventListener("transitionend", e), A.original.dispatchEvent(h("hidden")), A.original = null, A.zoomed = null, A.zoomedHd = null, A.template = null)
                },
                C = function () {
                    if (!S && A.original) {
                        var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                        Math.abs(N - e) > O.scrollOffset && z(150)
                    }
                },
                H = function (e) {
                    -1 < o.indexOf(e.keyCode || e.which) && z()
                },
                k = function () {
                    var t = Math.min;
                    if (A.original) {
                        var o, n, i = {
                            width: window.innerWidth,
                            height: window.innerHeight,
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        };
                        if (O.container)
                            if (O.container instanceof Object) e(i, O.container), o = i.width - i.left - i.right - 2 * O.margin, n = i.height - i.top - i.bottom - 2 * O.margin;
                            else {
                                var d = (r(O.container) ? O.container : document.querySelector(O.container)).getBoundingClientRect(),
                                    a = d.width,
                                    l = d.height,
                                    c = d.left,
                                    m = d.top;
                                e(i, {
                                    width: a,
                                    height: l,
                                    left: c,
                                    top: m
                                })
                            } o = o || i.width - 2 * O.margin, n = n || i.height - 2 * O.margin;
                        var s = A.zoomedHd || A.original,
                            u = s.naturalWidth,
                            p = void 0 === u ? o : u,
                            f = s.naturalHeight,
                            v = void 0 === f ? n : f,
                            g = s.getBoundingClientRect(),
                            h = g.top,
                            y = g.left,
                            z = g.width,
                            b = g.height,
                            E = t(t(p, o) / z, t(v, n) / b) || 1,
                            w = "scale(" + E + ") translate3d(" + ((o - z) / 2 - y + O.margin + i.left) / E + "px, " + ((n - b) / 2 - h + O.margin + i.top) / E + "px, 0)";
                        A.zoomed.style.transform = w, A.zoomedHd && (A.zoomedHd.style.transform = w)
                    }
                },
                O = {
                    margin: c,
                    background: s,
                    scrollOffset: p,
                    metaClick: void 0 === f || f,
                    container: v,
                    template: g
                };
            d instanceof Object && e(O, d);
            var T = function (e) {
                    try {
                        return Array.isArray(e) ? e.filter(n) : (o = e, NodeList.prototype.isPrototypeOf(o) || HTMLCollection.prototype.isPrototypeOf(o) ? Array.apply(null, e).filter(n) : r(e) ? [e].filter(n) : "string" == typeof e ? Array.apply(null, document.querySelectorAll(e)).filter(n) : Array.apply(null, document.querySelectorAll(t.map(function (e) {
                            return e.toLowerCase()
                        }).join(","))).filter(i))
                    } catch (e) {
                        throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList, an HTMLCollection or an array.\nSee: https://github.com/francoischalifour/medium-zoom")
                    }
                    var o
                }(d),
                x = function (e) {
                    var t = document.createElement("div");
                    return t.classList.add("medium-zoom-overlay"), t.style.backgroundColor = e, t
                }(O.background),
                A = {
                    original: null,
                    zoomed: null,
                    zoomedHd: null,
                    template: null
                },
                N = 0,
                S = !1;
            return T.forEach(function (e) {
                e.classList.add("medium-zoom-image"), e.addEventListener("click", E)
            }), x.addEventListener("click", z), document.addEventListener("scroll", C), document.addEventListener("keyup", H), window.addEventListener("resize", z), {
                show: b,
                hide: z,
                toggle: b,
                update: function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    return t.background && (x.style.backgroundColor = t.background), t.container && t.container instanceof Object && (t.container = e({}, O.container, t.container)), e(O, t)
                },
                addEventListeners: function (e, t) {
                    T.forEach(function (o) {
                        o.addEventListener(e, t)
                    })
                },
                detach: function () {
                    A.zoomed && z();
                    var e = h("detach");
                    T.forEach(function (t) {
                        t.classList.remove("medium-zoom-image"), t.removeEventListener("click", E), t.dispatchEvent(e)
                    }), T.splice(0, T.length), x.removeEventListener("click", z), document.removeEventListener("scroll", C), document.removeEventListener("keyup", H), window.removeEventListener("resize", z)
                },
                images: T,
                options: O
            }
        },
        a = Object.freeze({
            default: d
        });
    ! function (e, t) {
        void 0 === t && (t = {});
        var o = t.insertAt;
        if (e && "undefined" != typeof document) {
            var n = document.head || document.getElementsByTagName("head")[0],
                i = document.createElement("style");
            i.type = "text/css", "top" === o && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
        }
    }(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--open .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s}.medium-zoom-image--open{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");
    var l = a && d || a;
    $docsify.plugins = [].concat(function (e) {
        var t;
        e.doneEach(function (e) {
            t && t.detach(), t = l("img:not(.emoji):not([data-no-zoom])")
        })
    }, $docsify.plugins)
}();