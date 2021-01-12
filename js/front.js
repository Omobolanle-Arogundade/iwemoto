function isInteger(e) { var t = parseInt(e, 10); return !isNaN(t) && !isFloat(e) }

function isFloat(e) { var t = parseFloat(e),
        n = Math.floor(t),
        i = t - n; return i > 0 }
if (window.Modernizr = function(e, t, n) {
        function i(e) { b.cssText = e }

        function o(e, t) { return i(T.join(e + ";") + (t || "")) }

        function r(e, t) { return typeof e === t }

        function s(e, t) { return !!~("" + e).indexOf(t) }

        function a(e, t) { for (var i in e) { var o = e[i]; if (!s(o, "-") && b[o] !== n) return "pfx" != t || o } return !1 }

        function l(e, t, i) { for (var o in e) { var s = t[e[o]]; if (s !== n) return i === !1 ? e[o] : r(s, "function") ? s.bind(i || t) : s } return !1 }

        function c(e, t, n) { var i = e.charAt(0).toUpperCase() + e.slice(1),
                o = (e + " " + S.join(i + " ") + i).split(" "); return r(t, "string") || r(t, "undefined") ? a(o, t) : (o = (e + " " + $.join(i + " ") + i).split(" "), l(o, t, n)) }

        function d() { h.input = function(n) { for (var i = 0, o = n.length; i < o; i++) D[n[i]] = !!(n[i] in w); return D.list && (D.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), D }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), h.inputtypes = function(e) { for (var i, o, r, s = 0, a = e.length; s < a; s++) w.setAttribute("type", o = e[s]), i = "text" !== w.type, i && (w.value = k, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && w.style.WebkitAppearance !== n ? (m.appendChild(w), r = t.defaultView, i = r.getComputedStyle && "textfield" !== r.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, m.removeChild(w)) : /^(search|tel)$/.test(o) || (i = /^(url|email)$/.test(o) ? w.checkValidity && w.checkValidity() === !1 : w.value != k)), N[e[s]] = !!i; return N }("search tel url email datetime date month week time datetime-local number range color".split(" ")) } var u, p, f = "2.7.1",
            h = {},
            g = !0,
            m = t.documentElement,
            v = "modernizr",
            y = t.createElement(v),
            b = y.style,
            w = t.createElement("input"),
            k = ":)",
            x = {}.toString,
            T = " -webkit- -moz- -o- -ms- ".split(" "),
            C = "Webkit Moz O ms",
            S = C.split(" "),
            $ = C.toLowerCase().split(" "),
            E = { svg: "http://www.w3.org/2000/svg" },
            A = {},
            N = {},
            D = {},
            O = [],
            I = O.slice,
            j = function(e, n, i, o) { var r, s, a, l, c = t.createElement("div"),
                    d = t.body,
                    u = d || t.createElement("body"); if (parseInt(i, 10))
                    for (; i--;) a = t.createElement("div"), a.id = o ? o[i] : v + (i + 1), c.appendChild(a); return r = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), c.id = v, (d ? c : u).innerHTML += r, u.appendChild(c), d || (u.style.background = "", u.style.overflow = "hidden", l = m.style.overflow, m.style.overflow = "hidden", m.appendChild(u)), s = n(c, e), d ? c.parentNode.removeChild(c) : (u.parentNode.removeChild(u), m.style.overflow = l), !!s },
            L = function(t) { var n = e.matchMedia || e.msMatchMedia; if (n) return n(t).matches; var i; return j("@media " + t + " { #" + v + " { position: absolute; } }", function(t) { i = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position }), i },
            H = function() {
                function e(e, o) { o = o || t.createElement(i[e] || "div"), e = "on" + e; var s = e in o; return s || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), s = r(o[e], "function"), r(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, s } var i = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" }; return e }(),
            P = {}.hasOwnProperty;
        p = r(P, "undefined") || r(P.call, "undefined") ? function(e, t) { return t in e && r(e.constructor.prototype[t], "undefined") } : function(e, t) { return P.call(e, t) }, Function.prototype.bind || (Function.prototype.bind = function(e) { var t = this; if ("function" != typeof t) throw new TypeError; var n = I.call(arguments, 1),
                i = function() { if (this instanceof i) { var o = function() {};
                        o.prototype = t.prototype; var r = new o,
                            s = t.apply(r, n.concat(I.call(arguments))); return Object(s) === s ? s : r } return t.apply(e, n.concat(I.call(arguments))) }; return i }), A.flexbox = function() { return c("flexWrap") }, A.flexboxlegacy = function() { return c("boxDirection") }, A.canvas = function() { var e = t.createElement("canvas"); return !(!e.getContext || !e.getContext("2d")) }, A.canvastext = function() { return !(!h.canvas || !r(t.createElement("canvas").getContext("2d").fillText, "function")) }, A.webgl = function() { return !!e.WebGLRenderingContext }, A.touch = function() { var n; return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : j(["@media (", T.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) { n = 9 === e.offsetTop }), n }, A.geolocation = function() { return "geolocation" in navigator }, A.postmessage = function() { return !!e.postMessage }, A.websqldatabase = function() { return !!e.openDatabase }, A.indexedDB = function() { return !!c("indexedDB", e) }, A.hashchange = function() { return H("hashchange", e) && (t.documentMode === n || t.documentMode > 7) }, A.history = function() { return !(!e.history || !history.pushState) }, A.draganddrop = function() { var e = t.createElement("div"); return "draggable" in e || "ondragstart" in e && "ondrop" in e }, A.websockets = function() { return "WebSocket" in e || "MozWebSocket" in e }, A.rgba = function() { return i("background-color:rgba(150,255,150,.5)"), s(b.backgroundColor, "rgba") }, A.hsla = function() { return i("background-color:hsla(120,40%,100%,.5)"), s(b.backgroundColor, "rgba") || s(b.backgroundColor, "hsla") }, A.multiplebgs = function() { return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background) }, A.backgroundsize = function() { return c("backgroundSize") }, A.borderimage = function() { return c("borderImage") }, A.borderradius = function() { return c("borderRadius") }, A.boxshadow = function() { return c("boxShadow") }, A.textshadow = function() { return "" === t.createElement("div").style.textShadow }, A.opacity = function() { return o("opacity:.55"), /^0.55$/.test(b.opacity) }, A.cssanimations = function() { return c("animationName") }, A.csscolumns = function() { return c("columnCount") }, A.cssgradients = function() { var e = "background-image:",
                t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                n = "linear-gradient(left top,#9f9, white);"; return i((e + "-webkit- ".split(" ").join(t + e) + T.join(n + e)).slice(0, -e.length)), s(b.backgroundImage, "gradient") }, A.cssreflections = function() { return c("boxReflect") }, A.csstransforms = function() { return !!c("transform") }, A.csstransforms3d = function() { var e = !!c("perspective"); return e && "webkitPerspective" in m.style && j("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) { e = 9 === t.offsetLeft && 3 === t.offsetHeight }), e }, A.csstransitions = function() { return c("transition") }, A.fontface = function() { var e; return j('@font-face {font-family:"font";src:url("https://")}', function(n, i) { var o = t.getElementById("smodernizr"),
                    r = o.sheet || o.styleSheet,
                    s = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "";
                e = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0]) }), e }, A.generatedcontent = function() { var e; return j(["#", v, "{font:0/0 a}#", v, ':after{content:"', k, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) { e = t.offsetHeight >= 3 }), e }, A.video = function() { var e = t.createElement("video"),
                n = !1; try {
                (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")) } catch (i) {} return n }, A.audio = function() { var e = t.createElement("audio"),
                n = !1; try {
                (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")) } catch (i) {} return n }, A.localstorage = function() { try { return localStorage.setItem(v, v), localStorage.removeItem(v), !0 } catch (e) { return !1 } }, A.sessionstorage = function() { try { return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0 } catch (e) { return !1 } }, A.webworkers = function() { return !!e.Worker }, A.applicationcache = function() { return !!e.applicationCache }, A.svg = function() { return !!t.createElementNS && !!t.createElementNS(E.svg, "svg").createSVGRect }, A.inlinesvg = function() { var e = t.createElement("div"); return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == E.svg }, A.smil = function() { return !!t.createElementNS && /SVGAnimate/.test(x.call(t.createElementNS(E.svg, "animate"))) }, A.svgclippaths = function() { return !!t.createElementNS && /SVGClipPath/.test(x.call(t.createElementNS(E.svg, "clipPath"))) }; for (var M in A) p(A, M) && (u = M.toLowerCase(), h[u] = A[M](), O.push((h[u] ? "" : "no-") + u)); return h.input || d(), h.addTest = function(e, t) { if ("object" == typeof e)
                    for (var i in e) p(e, i) && h.addTest(i, e[i]);
                else { if (e = e.toLowerCase(), h[e] !== n) return h;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof g && g && (m.className += " " + (t ? "" : "no-") + e), h[e] = t } return h }, i(""), y = w = null,
            function(e, t) {
                function n(e, t) { var n = e.createElement("p"),
                        i = e.getElementsByTagName("head")[0] || e.documentElement; return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild) }

                function i() { var e = y.elements; return "string" == typeof e ? e.split(" ") : e }

                function o(e) { var t = v[e[g]]; return t || (t = {}, m++, e[g] = m, v[m] = t), t }

                function r(e, n, i) { if (n || (n = t), d) return n.createElement(e);
                    i || (i = o(n)); var r; return r = i.cache[e] ? i.cache[e].cloneNode() : h.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), !r.canHaveChildren || f.test(e) || r.tagUrn ? r : i.frag.appendChild(r) }

                function s(e, n) { if (e || (e = t), d) return e.createDocumentFragment();
                    n = n || o(e); for (var r = n.frag.cloneNode(), s = 0, a = i(), l = a.length; s < l; s++) r.createElement(a[s]); return r }

                function a(e, t) { t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) { return y.shivMethods ? r(n, e, t) : t.createElem(n) }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(e) { return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")' }) + ");return n}")(y, t.frag) }

                function l(e) { e || (e = t); var i = o(e); return !y.shivCSS || c || i.hasCSS || (i.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), d || a(e, i), e } var c, d, u = "3.7.0",
                    p = e.html5 || {},
                    f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    g = "_html5shiv",
                    m = 0,
                    v = {};! function() { try { var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", c = "hidden" in e, d = 1 == e.childNodes.length || function() { t.createElement("a"); var e = t.createDocumentFragment(); return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement }() } catch (n) { c = !0, d = !0 } }(); var y = { elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: u, shivCSS: p.shivCSS !== !1, supportsUnknownElements: d, shivMethods: p.shivMethods !== !1, type: "default", shivDocument: l, createElement: r, createDocumentFragment: s };
                e.html5 = y, l(t) }(this, t), h._version = f, h._prefixes = T, h._domPrefixes = $, h._cssomPrefixes = S, h.mq = L, h.hasEvent = H, h.testProp = function(e) { return a([e]) }, h.testAllProps = c, h.testStyles = j, h.prefixed = function(e, t, n) { return t ? c(e, t, n) : c(e, "pfx") }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (g ? " js " + O.join(" ") : ""), h }(this, this.document), ! function(e, t) { "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) { var t = !!e && "length" in e && e.length,
                n = fe.type(e); return "function" !== n && !fe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e) }

        function i(e, t, n) { if (fe.isFunction(t)) return fe.grep(e, function(e, i) { return !!t.call(e, i, e) !== n }); if (t.nodeType) return fe.grep(e, function(e) { return e === t !== n }); if ("string" == typeof t) { if (Te.test(t)) return fe.filter(t, e, n);
                t = fe.filter(t, e) } return fe.grep(e, function(e) { return fe.inArray(e, t) > -1 !== n }) }

        function o(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e }

        function r(e) { var t = {}; return fe.each(e.match(Ne) || [], function(e, n) { t[n] = !0 }), t }

        function s() { ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a)) : (ie.detachEvent("onreadystatechange", a), e.detachEvent("onload", a)) }

        function a() {
            (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (s(), fe.ready()) }

        function l(e, t, n) { if (void 0 === n && 1 === e.nodeType) { var i = "data-" + t.replace(Le, "-$1").toLowerCase(); if (n = e.getAttribute(i), "string" == typeof n) { try { n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : je.test(n) ? fe.parseJSON(n) : n) } catch (o) {}
                    fe.data(e, t, n) } else n = void 0 } return n }

        function c(e) { var t; for (t in e)
                if (("data" !== t || !fe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0 }

        function d(e, t, n, i) { if (Ie(e)) { var o, r, s = fe.expando,
                    a = e.nodeType,
                    l = a ? fe.cache : e,
                    c = a ? e[s] : e[s] && s; if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = a ? e[s] = ne.pop() || fe.guid++ : s), l[c] || (l[c] = a ? {} : { toJSON: fe.noop }), "object" != typeof t && "function" != typeof t || (i ? l[c] = fe.extend(l[c], t) : l[c].data = fe.extend(l[c].data, t)), r = l[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[fe.camelCase(t)] = n), "string" == typeof t ? (o = r[t], null == o && (o = r[fe.camelCase(t)])) : o = r, o } }

        function u(e, t, n) { if (Ie(e)) { var i, o, r = e.nodeType,
                    s = r ? fe.cache : e,
                    a = r ? e[fe.expando] : fe.expando; if (s[a]) { if (t && (i = n ? s[a] : s[a].data)) { fe.isArray(t) ? t = t.concat(fe.map(t, fe.camelCase)) : t in i ? t = [t] : (t = fe.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length; for (; o--;) delete i[t[o]]; if (n ? !c(i) : !fe.isEmptyObject(i)) return }(n || (delete s[a].data, c(s[a]))) && (r ? fe.cleanData([e], !0) : ue.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0) } } }

        function p(e, t, n, i) { var o, r = 1,
                s = 20,
                a = i ? function() { return i.cur() } : function() { return fe.css(e, t, "") },
                l = a(),
                c = n && n[3] || (fe.cssNumber[t] ? "" : "px"),
                d = (fe.cssNumber[t] || "px" !== c && +l) && Pe.exec(fe.css(e, t)); if (d && d[3] !== c) { c = c || d[3], n = n || [], d = +l || 1;
                do r = r || ".5", d /= r, fe.style(e, t, d + c); while (r !== (r = a() / l) && 1 !== r && --s) } return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = o)), o }

        function f(e) { var t = We.split("|"),
                n = e.createDocumentFragment(); if (n.createElement)
                for (; t.length;) n.createElement(t.pop()); return n }

        function h(e, t) { var n, i, o = 0,
                r = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0; if (!r)
                for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || fe.nodeName(i, t) ? r.push(i) : fe.merge(r, h(i, t)); return void 0 === t || t && fe.nodeName(e, t) ? fe.merge([e], r) : r }

        function g(e, t) { for (var n, i = 0; null != (n = e[i]); i++) fe._data(n, "globalEval", !t || fe._data(t[i], "globalEval")) }

        function m(e) { qe.test(e.type) && (e.defaultChecked = e.checked) }

        function v(e, t, n, i, o) { for (var r, s, a, l, c, d, u, p = e.length, v = f(t), y = [], b = 0; p > b; b++)
                if (s = e[b], s || 0 === s)
                    if ("object" === fe.type(s)) fe.merge(y, s.nodeType ? [s] : s);
                    else if (Xe.test(s)) { for (l = l || v.appendChild(t.createElement("div")), c = (_e.exec(s) || ["", ""])[1].toLowerCase(), u = Be[c] || Be._default, l.innerHTML = u[1] + fe.htmlPrefilter(s) + u[2], r = u[0]; r--;) l = l.lastChild; if (!ue.leadingWhitespace && ze.test(s) && y.push(t.createTextNode(ze.exec(s)[0])), !ue.tbody)
                    for (s = "table" !== c || Ve.test(s) ? "<table>" !== u[1] || Ve.test(s) ? 0 : l : l.firstChild, r = s && s.childNodes.length; r--;) fe.nodeName(d = s.childNodes[r], "tbody") && !d.childNodes.length && s.removeChild(d); for (fe.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = v.lastChild } else y.push(t.createTextNode(s)); for (l && v.removeChild(l), ue.appendChecked || fe.grep(h(y, "input"), m), b = 0; s = y[b++];)
                if (i && fe.inArray(s, i) > -1) o && o.push(s);
                else if (a = fe.contains(s.ownerDocument, s), l = h(v.appendChild(s), "script"), a && g(l), n)
                for (r = 0; s = l[r++];) Ue.test(s.type || "") && n.push(s); return l = null, v }

        function y() { return !0 }

        function b() { return !1 }

        function w() { try { return ie.activeElement } catch (e) {} }

        function k(e, t, n, i, o, r) { var s, a; if ("object" == typeof t) { "string" != typeof n && (i = i || n, n = void 0); for (a in t) k(e, a, n, i, t[a], r); return e } if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = b;
            else if (!o) return e; return 1 === r && (s = o, o = function(e) { return fe().off(e), s.apply(this, arguments) }, o.guid = s.guid || (s.guid = fe.guid++)), e.each(function() { fe.event.add(this, t, o, i, n) }) }

        function x(e, t) { return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e }

        function T(e) { return e.type = (null !== fe.find.attr(e, "type")) + "/" + e.type, e }

        function C(e) { var t = ot.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

        function S(e, t) { if (1 === t.nodeType && fe.hasData(e)) { var n, i, o, r = fe._data(e),
                    s = fe._data(t, r),
                    a = r.events; if (a) { delete s.handle, s.events = {}; for (n in a)
                        for (i = 0, o = a[n].length; o > i; i++) fe.event.add(t, n, a[n][i]) }
                s.data && (s.data = fe.extend({}, s.data)) } }

        function $(e, t) { var n, i, o; if (1 === t.nodeType) { if (n = t.nodeName.toLowerCase(), !ue.noCloneEvent && t[fe.expando]) { o = fe._data(t); for (i in o.events) fe.removeEvent(t, i, o.handle);
                    t.removeAttribute(fe.expando) } "script" === n && t.text !== e.text ? (T(t).text = e.text, C(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ue.html5Clone && e.innerHTML && !fe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && qe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) } }

        function E(e, t, n, i) { t = re.apply([], t); var o, r, s, a, l, c, d = 0,
                u = e.length,
                p = u - 1,
                f = t[0],
                g = fe.isFunction(f); if (g || u > 1 && "string" == typeof f && !ue.checkClone && it.test(f)) return e.each(function(o) { var r = e.eq(o);
                g && (t[0] = f.call(this, o, r.html())), E(r, t, n, i) }); if (u && (c = v(t, e[0].ownerDocument, !1, e, i), o = c.firstChild, 1 === c.childNodes.length && (c = o), o || i)) { for (a = fe.map(h(c, "script"), T), s = a.length; u > d; d++) r = c, d !== p && (r = fe.clone(r, !0, !0), s && fe.merge(a, h(r, "script"))), n.call(e[d], r, d); if (s)
                    for (l = a[a.length - 1].ownerDocument, fe.map(a, C), d = 0; s > d; d++) r = a[d], Ue.test(r.type || "") && !fe._data(r, "globalEval") && fe.contains(l, r) && (r.src ? fe._evalUrl && fe._evalUrl(r.src) : fe.globalEval((r.text || r.textContent || r.innerHTML || "").replace(rt, "")));
                c = o = null } return e }

        function A(e, t, n) { for (var i, o = t ? fe.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || fe.cleanData(h(i)), i.parentNode && (n && fe.contains(i.ownerDocument, i) && g(h(i, "script")), i.parentNode.removeChild(i)); return e }

        function N(e, t) { var n = fe(t.createElement(e)).appendTo(t.body),
                i = fe.css(n[0], "display"); return n.detach(), i }

        function D(e) { var t = ie,
                n = ct[e]; return n || (n = N(e, t), "none" !== n && n || (lt = (lt || fe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (lt[0].contentWindow || lt[0].contentDocument).document, t.write(), t.close(), n = N(e, t), lt.detach()), ct[e] = n), n }

        function O(e, t) { return { get: function() { return e() ? void delete this.get : (this.get = t).apply(this, arguments) } } }

        function I(e) { if (e in Ct) return e; for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Tt.length; n--;)
                if (e = Tt[n] + t, e in Ct) return e }

        function j(e, t) { for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (r[s] = fe._data(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Re(i) && (r[s] = fe._data(i, "olddisplay", D(i.nodeName)))) : (o = Re(i), (n && "none" !== n || !o) && fe._data(i, "olddisplay", o ? n : fe.css(i, "display")))); for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none")); return e }

        function L(e, t, n) { var i = wt.exec(t); return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t }

        function H(e, t, n, i, o) { for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += fe.css(e, n + Me[r], !0, o)), i ? ("content" === n && (s -= fe.css(e, "padding" + Me[r], !0, o)), "margin" !== n && (s -= fe.css(e, "border" + Me[r] + "Width", !0, o))) : (s += fe.css(e, "padding" + Me[r], !0, o), "padding" !== n && (s += fe.css(e, "border" + Me[r] + "Width", !0, o))); return s }

        function P(t, n, i) { var o = !0,
                r = "width" === n ? t.offsetWidth : t.offsetHeight,
                s = ht(t),
                a = ue.boxSizing && "border-box" === fe.css(t, "boxSizing", !1, s); if (ie.msFullscreenElement && e.top !== e && t.getClientRects().length && (r = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= r || null == r) { if (r = gt(t, n, s), (0 > r || null == r) && (r = t.style[n]), ut.test(r)) return r;
                o = a && (ue.boxSizingReliable() || r === t.style[n]), r = parseFloat(r) || 0 } return r + H(t, n, i || (a ? "border" : "content"), o, s) + "px" }

        function M(e, t, n, i, o) { return new M.prototype.init(e, t, n, i, o) }

        function R() { return e.setTimeout(function() { St = void 0 }), St = fe.now() }

        function F(e, t) { var n, i = { height: e },
                o = 0; for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Me[o], i["margin" + n] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i }

        function q(e, t, n) { for (var i, o = (z.tweeners[t] || []).concat(z.tweeners["*"]), r = 0, s = o.length; s > r; r++)
                if (i = o[r].call(n, t, e)) return i }

        function _(e, t, n) { var i, o, r, s, a, l, c, d, u = this,
                p = {},
                f = e.style,
                h = e.nodeType && Re(e),
                g = fe._data(e, "fxshow");
            n.queue || (a = fe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() { a.unqueued || l() }), a.unqueued++, u.always(function() { u.always(function() { a.unqueued--, fe.queue(e, "fx").length || a.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = fe.css(e, "display"), d = "none" === c ? fe._data(e, "olddisplay") || D(e.nodeName) : c, "inline" === d && "none" === fe.css(e, "float") && (ue.inlineBlockNeedsLayout && "inline" !== D(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ue.shrinkWrapBlocks() || u.always(function() { f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2] })); for (i in t)
                if (o = t[i], Et.exec(o)) { if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) { if ("show" !== o || !g || void 0 === g[i]) continue;
                        h = !0 }
                    p[i] = g && g[i] || fe.style(e, i) } else c = void 0;
            if (fe.isEmptyObject(p)) "inline" === ("none" === c ? D(e.nodeName) : c) && (f.display = c);
            else { g ? "hidden" in g && (h = g.hidden) : g = fe._data(e, "fxshow", {}), r && (g.hidden = !h), h ? fe(e).show() : u.done(function() { fe(e).hide() }), u.done(function() { var t;
                    fe._removeData(e, "fxshow"); for (t in p) fe.style(e, t, p[t]) }); for (i in p) s = q(h ? g[i] : 0, i, u), i in g || (g[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0)) } }

        function U(e, t) { var n, i, o, r, s; for (n in e)
                if (i = fe.camelCase(n), o = t[i], r = e[n], fe.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = fe.cssHooks[i], s && "expand" in s) { r = s.expand(r), delete e[i]; for (n in r) n in e || (e[n] = r[n], t[n] = o) } else t[i] = o }

        function z(e, t, n) { var i, o, r = 0,
                s = z.prefilters.length,
                a = fe.Deferred().always(function() { delete l.elem }),
                l = function() { if (o) return !1; for (var t = St || R(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r); return a.notifyWith(e, [c, r, n]), 1 > r && l ? n : (a.resolveWith(e, [c]), !1) },
                c = a.promise({ elem: e, props: fe.extend({}, t), opts: fe.extend(!0, { specialEasing: {}, easing: fe.easing._default }, n), originalProperties: t, originalOptions: n, startTime: St || R(), duration: n.duration, tweens: [], createTween: function(t, n) { var i = fe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing); return c.tweens.push(i), i }, stop: function(t) { var n = 0,
                            i = t ? c.tweens.length : 0; if (o) return this; for (o = !0; i > n; n++) c.tweens[n].run(1); return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this } }),
                d = c.props; for (U(d, c.opts.specialEasing); s > r; r++)
                if (i = z.prefilters[r].call(c, e, d, c.opts)) return fe.isFunction(i.stop) && (fe._queueHooks(c.elem, c.opts.queue).stop = fe.proxy(i.stop, i)), i;
            return fe.map(d, q, c), fe.isFunction(c.opts.start) && c.opts.start.call(e, c), fe.fx.timer(fe.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always) }

        function W(e) { return fe.attr(e, "class") || "" }

        function B(e) { return function(t, n) { "string" != typeof t && (n = t, t = "*"); var i, o = 0,
                    r = t.toLowerCase().match(Ne) || []; if (fe.isFunction(n))
                    for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n) } }

        function X(e, t, n, i) {
            function o(a) { var l; return r[a] = !0, fe.each(e[a] || [], function(e, a) { var c = a(t, n, i); return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1) }), l } var r = {},
                s = e === Gt; return o(t.dataTypes[0]) || !r["*"] && o("*") }

        function V(e, t) { var n, i, o = fe.ajaxSettings.flatOptions || {}; for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]); return n && fe.extend(!0, e, n), e }

        function Y(e, t, n) { for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type")); if (o)
                for (s in a)
                    if (a[s] && a[s].test(o)) { l.unshift(s); break }
            if (l[0] in n) r = l[0];
            else { for (s in n) { if (!l[0] || e.converters[s + " " + l[0]]) { r = s; break }
                    i || (i = s) }
                r = r || i } return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0 }

        function Q(e, t, n, i) { var o, r, s, a, l, c = {},
                d = e.dataTypes.slice(); if (d[1])
                for (s in e.converters) c[s.toLowerCase()] = e.converters[s]; for (r = d.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) { if (s = c[l + " " + r] || c["* " + r], !s)
                    for (o in c)
                        if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) { s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], d.unshift(a[1])); break }
                if (s !== !0)
                    if (s && e["throws"]) t = s(t);
                    else try { t = s(t) } catch (u) { return { state: "parsererror", error: s ? u : "No conversion from " + l + " to " + r } } } return { state: "success", data: t } }

        function J(e) { return e.style && e.style.display || fe.css(e, "display") }

        function K(e) { for (; e && 1 === e.nodeType;) { if ("none" === J(e) || "hidden" === e.type) return !0;
                e = e.parentNode } return !1 }

        function G(e, t, n, i) { var o; if (fe.isArray(t)) fe.each(t, function(t, o) { n || on.test(e) ? i(e, o) : G(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i) });
            else if (n || "object" !== fe.type(t)) i(e, t);
            else
                for (o in t) G(e + "[" + o + "]", t[o], n, i) }

        function Z() { try { return new e.XMLHttpRequest } catch (t) {} }

        function ee() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

        function te(e) { return fe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow) }
        var ne = [],
            ie = e.document,
            oe = ne.slice,
            re = ne.concat,
            se = ne.push,
            ae = ne.indexOf,
            le = {},
            ce = le.toString,
            de = le.hasOwnProperty,
            ue = {},
            pe = "1.12.3",
            fe = function(e, t) { return new fe.fn.init(e, t) },
            he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ge = /^-ms-/,
            me = /-([\da-z])/gi,
            ve = function(e, t) { return t.toUpperCase() };
        fe.fn = fe.prototype = { jquery: pe, constructor: fe, selector: "", length: 0, toArray: function() { return oe.call(this) }, get: function(e) { return null != e ? 0 > e ? this[e + this.length] : this[e] : oe.call(this) }, pushStack: function(e) { var t = fe.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t }, each: function(e) { return fe.each(this, e) }, map: function(e) { return this.pushStack(fe.map(this, function(t, n) { return e.call(t, n, t) })) }, slice: function() { return this.pushStack(oe.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(e) { var t = this.length,
                    n = +e + (0 > e ? t : 0); return this.pushStack(n >= 0 && t > n ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: se, sort: ne.sort, splice: ne.splice }, fe.extend = fe.fn.extend = function() { var e, t, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1; for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || fe.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (o = arguments[a]))
                    for (i in o) e = s[i], n = o[i], s !== n && (c && n && (fe.isPlainObject(n) || (t = fe.isArray(n))) ? (t ? (t = !1, r = e && fe.isArray(e) ? e : []) : r = e && fe.isPlainObject(e) ? e : {}, s[i] = fe.extend(c, r, n)) : void 0 !== n && (s[i] = n));
            return s }, fe.extend({ expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) { throw new Error(e) }, noop: function() {}, isFunction: function(e) { return "function" === fe.type(e) }, isArray: Array.isArray || function(e) { return "array" === fe.type(e) }, isWindow: function(e) { return null != e && e == e.window }, isNumeric: function(e) { var t = e && e.toString(); return !fe.isArray(e) && t - parseFloat(t) + 1 >= 0 }, isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 }, isPlainObject: function(e) { var t; if (!e || "object" !== fe.type(e) || e.nodeType || fe.isWindow(e)) return !1; try { if (e.constructor && !de.call(e, "constructor") && !de.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) { return !1 } if (!ue.ownFirst)
                    for (t in e) return de.call(e, t); for (t in e); return void 0 === t || de.call(e, t) }, type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e }, globalEval: function(t) { t && fe.trim(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) }, camelCase: function(e) { return e.replace(ge, "ms-").replace(me, ve) }, nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function(e, t) { var i, o = 0; if (n(e))
                    for (i = e.length; i > o && t.call(e[o], o, e[o]) !== !1; o++);
                else
                    for (o in e)
                        if (t.call(e[o], o, e[o]) === !1) break; return e }, trim: function(e) { return null == e ? "" : (e + "").replace(he, "") }, makeArray: function(e, t) { var i = t || []; return null != e && (n(Object(e)) ? fe.merge(i, "string" == typeof e ? [e] : e) : se.call(i, e)), i }, inArray: function(e, t, n) { var i; if (t) { if (ae) return ae.call(t, e, n); for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n } return -1 }, merge: function(e, t) { for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++]; if (n !== n)
                    for (; void 0 !== t[i];) e[o++] = t[i++]; return e.length = o, e }, grep: function(e, t, n) { for (var i, o = [], r = 0, s = e.length, a = !n; s > r; r++) i = !t(e[r], r), i !== a && o.push(e[r]); return o }, map: function(e, t, i) { var o, r, s = 0,
                    a = []; if (n(e))
                    for (o = e.length; o > s; s++) r = t(e[s], s, i), null != r && a.push(r);
                else
                    for (s in e) r = t(e[s], s, i), null != r && a.push(r); return re.apply([], a) }, guid: 1, proxy: function(e, t) { var n, i, o; return "string" == typeof t && (o = e[t], t = e, e = o), fe.isFunction(e) ? (n = oe.call(arguments, 2), i = function() { return e.apply(t || this, n.concat(oe.call(arguments))) }, i.guid = e.guid = e.guid || fe.guid++, i) : void 0 }, now: function() { return +new Date }, support: ue }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ne[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { le["[object " + t + "]"] = t.toLowerCase() });
        var ye = function(e) {
            function t(e, t, n, i) { var o, r, s, a, l, c, u, f, h = t && t.ownerDocument,
                    g = t ? t.nodeType : 9; if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n; if (!i && ((t ? t.ownerDocument || t : q) !== I && O(t), t = t || I, L)) { if (11 !== g && (c = ve.exec(e)))
                        if (o = c[1]) { if (9 === g) { if (!(s = t.getElementById(o))) return n; if (s.id === o) return n.push(s), n } else if (h && (s = h.getElementById(o)) && R(t, s) && s.id === o) return n.push(s), n } else { if (c[2]) return G.apply(n, t.getElementsByTagName(e)), n; if ((o = c[3]) && k.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(o)), n }
                    if (k.qsa && !B[e + " "] && (!H || !H.test(e))) { if (1 !== g) h = t, f = e;
                        else if ("object" !== t.nodeName.toLowerCase()) { for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = F), u = S(e), r = u.length, l = pe.test(a) ? "#" + a : "[id='" + a + "']"; r--;) u[r] = l + " " + p(u[r]);
                            f = u.join(","), h = ye.test(e) && d(t.parentNode) || t } if (f) try { return G.apply(n, h.querySelectorAll(f)), n } catch (m) {} finally { a === F && t.removeAttribute("id") } } } return E(e.replace(ae, "$1"), t, n, i) }

            function n() {
                function e(n, i) { return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i } var t = []; return e }

            function i(e) { return e[F] = !0, e }

            function o(e) { var t = I.createElement("div"); try { return !!e(t) } catch (n) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

            function r(e, t) { for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t }

            function s(e, t) { var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V); if (i) return i; if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1 }

            function a(e) { return function(t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } }

            function l(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

            function c(e) { return i(function(t) { return t = +t, i(function(n, i) { for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o])) }) }) }

            function d(e) { return e && "undefined" != typeof e.getElementsByTagName && e }

            function u() {}

            function p(e) { for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value; return i }

            function f(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    r = U++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) return e(t, n, r);
                } : function(t, n, s) { var a, l, c, d = [_, r]; if (s) { for (; t = t[i];)
                            if ((1 === t.nodeType || o) && e(t, n, s)) return !0 } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || o) { if (c = t[F] || (t[F] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (a = l[i]) && a[0] === _ && a[1] === r) return d[2] = a[2]; if (l[i] = d, d[2] = e(t, n, s)) return !0 } }
            }

            function h(e) { return e.length > 1 ? function(t, n, i) { for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0 } : e[0] }

            function g(e, n, i) { for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i); return i }

            function m(e, t, n, i, o) { for (var r, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a))); return s }

            function v(e, t, n, o, r, s) { return o && !o[F] && (o = v(o)), r && !r[F] && (r = v(r, s)), i(function(i, s, a, l) { var c, d, u, p = [],
                        f = [],
                        h = s.length,
                        v = i || g(t || "*", a.nodeType ? [a] : a, []),
                        y = !e || !i && t ? v : m(v, p, e, a, l),
                        b = n ? r || (i ? e : h || o) ? [] : s : y; if (n && n(y, b, a, l), o)
                        for (c = m(b, f), o(c, [], a, l), d = c.length; d--;)(u = c[d]) && (b[f[d]] = !(y[f[d]] = u)); if (i) { if (r || e) { if (r) { for (c = [], d = b.length; d--;)(u = b[d]) && c.push(y[d] = u);
                                r(null, b = [], c, l) } for (d = b.length; d--;)(u = b[d]) && (c = r ? ee(i, u) : p[d]) > -1 && (i[c] = !(s[c] = u)) } } else b = m(b === s ? b.splice(h, b.length) : b), r ? r(null, s, b, l) : G.apply(s, b) }) }

            function y(e) { for (var t, n, i, o = e.length, r = x.relative[e[0].type], s = r || x.relative[" "], a = r ? 1 : 0, l = f(function(e) { return e === t }, s, !0), c = f(function(e) { return ee(t, e) > -1 }, s, !0), d = [function(e, n, i) { var o = !r && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i)); return t = null, o }]; o > a; a++)
                    if (n = x.relative[e[a].type]) d = [f(h(d), n)];
                    else { if (n = x.filter[e[a].type].apply(null, e[a].matches), n[F]) { for (i = ++a; o > i && !x.relative[e[i].type]; i++); return v(a > 1 && h(d), a > 1 && p(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(ae, "$1"), n, i > a && y(e.slice(a, i)), o > i && y(e = e.slice(i)), o > i && p(e)) }
                        d.push(n) }
                return h(d) }

            function b(e, n) { var o = n.length > 0,
                    r = e.length > 0,
                    s = function(i, s, a, l, c) { var d, u, p, f = 0,
                            h = "0",
                            g = i && [],
                            v = [],
                            y = A,
                            b = i || r && x.find.TAG("*", c),
                            w = _ += null == y ? 1 : Math.random() || .1,
                            k = b.length; for (c && (A = s === I || s || c); h !== k && null != (d = b[h]); h++) { if (r && d) { for (u = 0, s || d.ownerDocument === I || (O(d), a = !L); p = e[u++];)
                                    if (p(d, s || I, a)) { l.push(d); break }
                                c && (_ = w) }
                            o && ((d = !p && d) && f--, i && g.push(d)) } if (f += h, o && h !== f) { for (u = 0; p = n[u++];) p(g, v, s, a); if (i) { if (f > 0)
                                    for (; h--;) g[h] || v[h] || (v[h] = J.call(l));
                                v = m(v) }
                            G.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l) } return c && (_ = w, A = y), g }; return o ? i(s) : s }
            var w, k, x, T, C, S, $, E, A, N, D, O, I, j, L, H, P, M, R, F = "sizzle" + 1 * new Date,
                q = e.document,
                _ = 0,
                U = 0,
                z = n(),
                W = n(),
                B = n(),
                X = function(e, t) { return e === t && (D = !0), 0 },
                V = 1 << 31,
                Y = {}.hasOwnProperty,
                Q = [],
                J = Q.pop,
                K = Q.push,
                G = Q.push,
                Z = Q.slice,
                ee = function(e, t) { for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1 },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                se = new RegExp(ne + "+", "g"),
                ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                le = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                ue = new RegExp(re),
                pe = new RegExp("^" + ie + "$"),
                fe = { ID: new RegExp("^#(" + ie + ")"), CLASS: new RegExp("^\\.(" + ie + ")"), TAG: new RegExp("^(" + ie + "|[*])"), ATTR: new RegExp("^" + oe), PSEUDO: new RegExp("^" + re), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
                he = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                me = /^[^{]+\{\s*\[native \w/,
                ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                be = /'|\\/g,
                we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                ke = function(e, t, n) { var i = "0x" + t - 65536; return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
                xe = function() { O() };
            try { G.apply(Q = Z.call(q.childNodes), q.childNodes), Q[q.childNodes.length].nodeType } catch (Te) { G = { apply: Q.length ? function(e, t) { K.apply(e, Z.call(t)) } : function(e, t) { for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1 } } }
            k = t.support = {}, C = t.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, O = t.setDocument = function(e) { var t, n, i = e ? e.ownerDocument || e : q; return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, j = I.documentElement, L = !C(I), (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), k.attributes = o(function(e) { return e.className = "i", !e.getAttribute("className") }), k.getElementsByTagName = o(function(e) { return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length }), k.getElementsByClassName = me.test(I.getElementsByClassName), k.getById = o(function(e) { return j.appendChild(e).id = F, !I.getElementsByName || !I.getElementsByName(F).length }), k.getById ? (x.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && L) { var n = t.getElementById(e); return n ? [n] : [] } }, x.filter.ID = function(e) { var t = e.replace(we, ke); return function(e) { return e.getAttribute("id") === t } }) : (delete x.find.ID, x.filter.ID = function(e) { var t = e.replace(we, ke); return function(e) { var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }), x.find.TAG = k.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : k.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) { var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e); if ("*" === e) { for (; n = r[o++];) 1 === n.nodeType && i.push(n); return i } return r }, x.find.CLASS = k.getElementsByClassName && function(e, t) { return "undefined" != typeof t.getElementsByClassName && L ? t.getElementsByClassName(e) : void 0 }, P = [], H = [], (k.qsa = me.test(I.querySelectorAll)) && (o(function(e) { j.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + F + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || H.push(".#.+[+~]") }), o(function(e) { var t = I.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:") })), (k.matchesSelector = me.test(M = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && o(function(e) { k.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), P.push("!=", re) }), H = H.length && new RegExp(H.join("|")), P = P.length && new RegExp(P.join("|")), t = me.test(j.compareDocumentPosition), R = t || me.test(j.contains) ? function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode; return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))) } : function(e, t) { if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1 }, X = t ? function(e, t) { if (e === t) return D = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !k.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === q && R(q, e) ? -1 : t === I || t.ownerDocument === q && R(q, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) { if (e === t) return D = !0, 0; var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        a = [e],
                        l = [t]; if (!o || !r) return e === I ? -1 : t === I ? 1 : o ? -1 : r ? 1 : N ? ee(N, e) - ee(N, t) : 0; if (o === r) return s(e, t); for (n = e; n = n.parentNode;) a.unshift(n); for (n = t; n = n.parentNode;) l.unshift(n); for (; a[i] === l[i];) i++; return i ? s(a[i], l[i]) : a[i] === q ? -1 : l[i] === q ? 1 : 0 }, I) : I }, t.matches = function(e, n) { return t(e, null, null, n) }, t.matchesSelector = function(e, n) { if ((e.ownerDocument || e) !== I && O(e), n = n.replace(de, "='$1']"), k.matchesSelector && L && !B[n + " "] && (!P || !P.test(n)) && (!H || !H.test(n))) try { var i = M.call(e, n); if (i || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i } catch (o) {}
                return t(n, I, null, [e]).length > 0 }, t.contains = function(e, t) { return (e.ownerDocument || e) !== I && O(e), R(e, t) }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== I && O(e); var n = x.attrHandle[t.toLowerCase()],
                    i = n && Y.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0; return void 0 !== i ? i : k.attributes || !L ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }, t.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) { var t, n = [],
                    i = 0,
                    o = 0; if (D = !k.detectDuplicates, N = !k.sortStable && e.slice(0), e.sort(X), D) { for (; t = e[o++];) t === e[o] && (i = n.push(o)); for (; i--;) e.splice(n[i], 1) } return N = null, e }, T = t.getText = function(e) { var t, n = "",
                    i = 0,
                    o = e.nodeType; if (o) { if (1 === o || 9 === o || 11 === o) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += T(e) } else if (3 === o || 4 === o) return e.nodeValue } else
                    for (; t = e[i++];) n += T(t); return n }, x = t.selectors = { cacheLength: 50, createPseudo: i, match: fe, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(we, ke), e[3] = (e[3] || e[4] || e[5] || "").replace(we, ke), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) { var t = e.replace(we, ke).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) { var t = z[e + " "]; return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(e, n, i) { return function(o) { var r = t.attr(o, e); return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-")) } }, CHILD: function(e, t, n, i, o) { var r = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t; return 1 === i && 0 === o ? function(e) { return !!e.parentNode } : function(t, n, l) { var c, d, u, p, f, h, g = r !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1; if (m) { if (r) { for (; g;) { for (p = t; p = p[g];)
                                            if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling" } return !0 } if (h = [s ? m.firstChild : m.lastChild], s && y) { for (p = m, u = p[F] || (p[F] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[e] || [], f = c[0] === _ && c[1], b = f && c[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();)
                                        if (1 === p.nodeType && ++b && p === t) { d[e] = [_, f, b]; break } } else if (y && (p = t, u = p[F] || (p[F] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[e] || [], f = c[0] === _ && c[1], b = f), b === !1)
                                    for (;
                                        (p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (u = p[F] || (p[F] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), d[e] = [_, b]), p !== t));); return b -= o, b === i || b % i === 0 && b / i >= 0 } } }, PSEUDO: function(e, n) { var o, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e); return r[F] ? r(n) : r.length > 1 ? (o = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) { for (var i, o = r(e, n), s = o.length; s--;) i = ee(e, o[s]), e[i] = !(t[i] = o[s]) }) : function(e) { return r(e, 0, o) }) : r } }, pseudos: { not: i(function(e) { var t = [],
                            n = [],
                            o = $(e.replace(ae, "$1")); return o[F] ? i(function(e, t, n, i) { for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r)) }) : function(e, i, r) { return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop() } }), has: i(function(e) { return function(n) { return t(e, n).length > 0 } }), contains: i(function(e) { return e = e.replace(we, ke),
                            function(t) { return (t.textContent || t.innerText || T(t)).indexOf(e) > -1 } }), lang: i(function(e) { return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, ke).toLowerCase(),
                            function(t) { var n;
                                do
                                    if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1 } }), target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function(e) { return e === j }, focus: function(e) { return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function(e) { return e.disabled === !1 }, disabled: function(e) { return e.disabled === !0 }, checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0 }, parent: function(e) { return !x.pseudos.empty(e) }, header: function(e) { return ge.test(e.nodeName) }, input: function(e) { return he.test(e.nodeName) }, button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: c(function() { return [0] }), last: c(function(e, t) { return [t - 1] }), eq: c(function(e, t, n) { return [0 > n ? n + t : n] }), even: c(function(e, t) { for (var n = 0; t > n; n += 2) e.push(n); return e }), odd: c(function(e, t) { for (var n = 1; t > n; n += 2) e.push(n); return e }), lt: c(function(e, t, n) { for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i); return e }), gt: c(function(e, t, n) { for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i); return e }) } }, x.pseudos.nth = x.pseudos.eq;
            for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[w] = a(w);
            for (w in { submit: !0, reset: !0 }) x.pseudos[w] = l(w);
            return u.prototype = x.filters = x.pseudos, x.setFilters = new u, S = t.tokenize = function(e, n) { var i, o, r, s, a, l, c, d = W[e + " "]; if (d) return n ? 0 : d.slice(0); for (a = e, l = [], c = x.preFilter; a;) { i && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ce.exec(a)) && (i = o.shift(), r.push({ value: i, type: o[0].replace(ae, " ") }), a = a.slice(i.length)); for (s in x.filter) !(o = fe[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({ value: i, type: s, matches: o }), a = a.slice(i.length)); if (!i) break } return n ? a.length : a ? t.error(e) : W(e, l).slice(0) }, $ = t.compile = function(e, t) { var n, i = [],
                    o = [],
                    r = B[e + " "]; if (!r) { for (t || (t = S(e)), n = t.length; n--;) r = y(t[n]), r[F] ? i.push(r) : o.push(r);
                    r = B(e, b(o, i)), r.selector = e } return r }, E = t.select = function(e, t, n, i) { var o, r, s, a, l, c = "function" == typeof e && e,
                    u = !i && S(e = c.selector || e); if (n = n || [], 1 === u.length) { if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && k.getById && 9 === t.nodeType && L && x.relative[r[1].type]) { if (t = (x.find.ID(s.matches[0].replace(we, ke), t) || [])[0], !t) return n;
                        c && (t = t.parentNode), e = e.slice(r.shift().value.length) } for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !x.relative[a = s.type]);)
                        if ((l = x.find[a]) && (i = l(s.matches[0].replace(we, ke), ye.test(r[0].type) && d(t.parentNode) || t))) { if (r.splice(o, 1), e = i.length && p(r), !e) return G.apply(n, i), n; break } } return (c || $(e, u))(i, t, !L, n, !t || ye.test(e) && d(t.parentNode) || t), n }, k.sortStable = F.split("").sort(X).join("") === F, k.detectDuplicates = !!D, O(), k.sortDetached = o(function(e) { return 1 & e.compareDocumentPosition(I.createElement("div")) }), o(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || r("type|href|height|width", function(e, t, n) { return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), k.attributes && o(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || r("value", function(e, t, n) { return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue }), o(function(e) { return null == e.getAttribute("disabled") }) || r(te, function(e, t, n) { var i; return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }), t
        }(e);
        fe.find = ye, fe.expr = ye.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = ye.uniqueSort, fe.text = ye.getText, fe.isXMLDoc = ye.isXML, fe.contains = ye.contains;
        var be = function(e, t, n) { for (var i = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) { if (o && fe(e).is(n)) break;
                        i.push(e) }
                return i },
            we = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
            ke = fe.expr.match.needsContext,
            xe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            Te = /^.[^:#\[\.,]*$/;
        fe.filter = function(e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? fe.find.matchesSelector(i, e) ? [i] : [] : fe.find.matches(e, fe.grep(t, function(e) { return 1 === e.nodeType })) }, fe.fn.extend({ find: function(e) { var t, n = [],
                    i = this,
                    o = i.length; if ("string" != typeof e) return this.pushStack(fe(e).filter(function() { for (t = 0; o > t; t++)
                        if (fe.contains(i[t], this)) return !0 })); for (t = 0; o > t; t++) fe.find(e, i[t], n); return n = this.pushStack(o > 1 ? fe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n }, filter: function(e) { return this.pushStack(i(this, e || [], !1)) }, not: function(e) { return this.pushStack(i(this, e || [], !0)) }, is: function(e) { return !!i(this, "string" == typeof e && ke.test(e) ? fe(e) : e || [], !1).length } });
        var Ce, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            $e = fe.fn.init = function(e, t, n) { var i, o; if (!e) return this; if (n = n || Ce, "string" == typeof e) { if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Se.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (i[1]) { if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), xe.test(i[1]) && fe.isPlainObject(t))
                            for (i in t) fe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]); return this } if (o = ie.getElementById(i[2]), o && o.parentNode) { if (o.id !== i[2]) return Ce.find(e);
                        this.length = 1, this[0] = o } return this.context = ie, this.selector = e, this } return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : fe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(fe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), fe.makeArray(e, this)) };
        $e.prototype = fe.fn, Ce = fe(ie);
        var Ee = /^(?:parents|prev(?:Until|All))/,
            Ae = { children: !0, contents: !0, next: !0, prev: !0 };
        fe.fn.extend({ has: function(e) { var t, n = fe(e, this),
                    i = n.length; return this.filter(function() { for (t = 0; i > t; t++)
                        if (fe.contains(this, n[t])) return !0 }) }, closest: function(e, t) { for (var n, i = 0, o = this.length, r = [], s = ke.test(e) || "string" != typeof e ? fe(e, t || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) { r.push(n); break }
                return this.pushStack(r.length > 1 ? fe.uniqueSort(r) : r) }, index: function(e) { return e ? "string" == typeof e ? fe.inArray(this[0], fe(e)) : fe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) { return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t)))) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), fe.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return be(e, "parentNode") }, parentsUntil: function(e, t, n) { return be(e, "parentNode", n) }, next: function(e) { return o(e, "nextSibling") }, prev: function(e) { return o(e, "previousSibling") }, nextAll: function(e) { return be(e, "nextSibling") }, prevAll: function(e) { return be(e, "previousSibling") }, nextUntil: function(e, t, n) { return be(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return be(e, "previousSibling", n) }, siblings: function(e) { return we((e.parentNode || {}).firstChild, e) }, children: function(e) { return we(e.firstChild) }, contents: function(e) { return fe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : fe.merge([], e.childNodes) } }, function(e, t) { fe.fn[e] = function(n, i) { var o = fe.map(this, t, n); return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = fe.filter(i, o)), this.length > 1 && (Ae[e] || (o = fe.uniqueSort(o)), Ee.test(e) && (o = o.reverse())), this.pushStack(o) } });
        var Ne = /\S+/g;
        fe.Callbacks = function(e) { e = "string" == typeof e ? r(e) : fe.extend({}, e); var t, n, i, o, s = [],
                a = [],
                l = -1,
                c = function() { for (o = e.once, i = t = !0; a.length; l = -1)
                        for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = s.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (s = n ? [] : "") },
                d = { add: function() { return s && (n && !t && (l = s.length - 1, a.push(n)), function i(t) { fe.each(t, function(t, n) { fe.isFunction(n) ? e.unique && d.has(n) || s.push(n) : n && n.length && "string" !== fe.type(n) && i(n) }) }(arguments), n && !t && c()), this }, remove: function() { return fe.each(arguments, function(e, t) { for (var n;
                                (n = fe.inArray(t, s, n)) > -1;) s.splice(n, 1), l >= n && l-- }), this }, has: function(e) { return e ? fe.inArray(e, s) > -1 : s.length > 0 }, empty: function() { return s && (s = []), this }, disable: function() { return o = a = [], s = n = "", this }, disabled: function() { return !s }, lock: function() { return o = !0, n || d.disable(), this }, locked: function() { return !!o }, fireWith: function(e, n) { return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || c()), this }, fire: function() { return d.fireWith(this, arguments), this }, fired: function() { return !!i } }; return d }, fe.extend({ Deferred: function(e) { var t = [
                        ["resolve", "done", fe.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", fe.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", fe.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = { state: function() { return n }, always: function() { return o.done(arguments).fail(arguments), this }, then: function() { var e = arguments; return fe.Deferred(function(n) { fe.each(t, function(t, r) { var s = fe.isFunction(e[t]) && e[t];
                                    o[r[1]](function() { var e = s && s.apply(this, arguments);
                                        e && fe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments) }) }), e = null }).promise() }, promise: function(e) { return null != e ? fe.extend(e, i) : i } },
                    o = {}; return i.pipe = i.then, fe.each(t, function(e, r) { var s = r[2],
                        a = r[3];
                    i[r[1]] = s.add, a && s.add(function() { n = a }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() { return o[r[0] + "With"](this === o ? i : this, arguments), this }, o[r[0] + "With"] = s.fireWith }), i.promise(o), e && e.call(o, o), o }, when: function(e) { var t, n, i, o = 0,
                    r = oe.call(arguments),
                    s = r.length,
                    a = 1 !== s || e && fe.isFunction(e.promise) ? s : 0,
                    l = 1 === a ? e : fe.Deferred(),
                    c = function(e, n, i) { return function(o) { n[e] = this, i[e] = arguments.length > 1 ? oe.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i) } }; if (s > 1)
                    for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && fe.isFunction(r[o].promise) ? r[o].promise().progress(c(o, n, t)).done(c(o, i, r)).fail(l.reject) : --a; return a || l.resolveWith(i, r), l.promise() } });
        var De;
        fe.fn.ready = function(e) { return fe.ready.promise().done(e), this }, fe.extend({ isReady: !1, readyWait: 1, holdReady: function(e) { e ? fe.readyWait++ : fe.ready(!0) }, ready: function(e) {
                (e === !0 ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, e !== !0 && --fe.readyWait > 0 || (De.resolveWith(ie, [fe]), fe.fn.triggerHandler && (fe(ie).triggerHandler("ready"), fe(ie).off("ready")))) } }), fe.ready.promise = function(t) { if (!De)
                if (De = fe.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) e.setTimeout(fe.ready);
                else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", a), e.addEventListener("load", a);
            else { ie.attachEvent("onreadystatechange", a), e.attachEvent("onload", a); var n = !1; try { n = null == e.frameElement && ie.documentElement } catch (i) {}
                n && n.doScroll && ! function o() { if (!fe.isReady) { try { n.doScroll("left") } catch (t) { return e.setTimeout(o, 50) }
                        s(), fe.ready() } }() } return De.promise(t) }, fe.ready.promise();
        var Oe;
        for (Oe in fe(ue)) break;
        ue.ownFirst = "0" === Oe, ue.inlineBlockNeedsLayout = !1, fe(function() { var e, t, n, i;
                n = ie.getElementsByTagName("body")[0], n && n.style && (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ue.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i)) }),
            function() { var e = ie.createElement("div");
                ue.deleteExpando = !0; try { delete e.test } catch (t) { ue.deleteExpando = !1 }
                e = null }();
        var Ie = function(e) { var t = fe.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1; return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t) },
            je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Le = /([A-Z])/g;
        fe.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(e) { return e = e.nodeType ? fe.cache[e[fe.expando]] : e[fe.expando], !!e && !c(e) }, data: function(e, t, n) { return d(e, t, n) }, removeData: function(e, t) { return u(e, t) }, _data: function(e, t, n) { return d(e, t, n, !0) }, _removeData: function(e, t) { return u(e, t, !0) } }), fe.fn.extend({ data: function(e, t) { var n, i, o, r = this[0],
                        s = r && r.attributes; if (void 0 === e) { if (this.length && (o = fe.data(r), 1 === r.nodeType && !fe._data(r, "parsedAttrs"))) { for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = fe.camelCase(i.slice(5)), l(r, i, o[i])));
                            fe._data(r, "parsedAttrs", !0) } return o } return "object" == typeof e ? this.each(function() { fe.data(this, e) }) : arguments.length > 1 ? this.each(function() { fe.data(this, e, t) }) : r ? l(r, e, fe.data(r, e)) : void 0 }, removeData: function(e) { return this.each(function() { fe.removeData(this, e) }) } }), fe.extend({ queue: function(e, t, n) { var i; return e ? (t = (t || "fx") + "queue", i = fe._data(e, t), n && (!i || fe.isArray(n) ? i = fe._data(e, t, fe.makeArray(n)) : i.push(n)), i || []) : void 0 }, dequeue: function(e, t) { t = t || "fx"; var n = fe.queue(e, t),
                        i = n.length,
                        o = n.shift(),
                        r = fe._queueHooks(e, t),
                        s = function() { fe.dequeue(e, t) }; "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire() }, _queueHooks: function(e, t) { var n = t + "queueHooks"; return fe._data(e, n) || fe._data(e, n, { empty: fe.Callbacks("once memory").add(function() { fe._removeData(e, t + "queue"), fe._removeData(e, n) }) }) } }), fe.fn.extend({ queue: function(e, t) { var n = 2; return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function() { var n = fe.queue(this, e, t);
                        fe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e) }) }, dequeue: function(e) { return this.each(function() { fe.dequeue(this, e) }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, t) { var n, i = 1,
                        o = fe.Deferred(),
                        r = this,
                        s = this.length,
                        a = function() {--i || o.resolveWith(r, [r]) }; for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = fe._data(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a)); return a(), o.promise(t) } }),
            function() { var e;
                ue.shrinkWrapBlocks = function() { if (null != e) return e;
                    e = !1; var t, n, i; return n = ie.getElementsByTagName("body")[0], n && n.style ? (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ie.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0 } }();
        var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Pe = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$", "i"),
            Me = ["Top", "Right", "Bottom", "Left"],
            Re = function(e, t) { return e = t || e, "none" === fe.css(e, "display") || !fe.contains(e.ownerDocument, e) },
            Fe = function(e, t, n, i, o, r, s) { var a = 0,
                    l = e.length,
                    c = null == n; if ("object" === fe.type(n)) { o = !0; for (a in n) Fe(e, t, a, n[a], !0, r, s) } else if (void 0 !== i && (o = !0, fe.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) { return c.call(fe(e), n) })), t))
                    for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n))); return o ? e : c ? t.call(e) : l ? t(e[0], n) : r },
            qe = /^(?:checkbox|radio)$/i,
            _e = /<([\w:-]+)/,
            Ue = /^$|\/(?:java|ecma)script/i,
            ze = /^\s+/,
            We = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        ! function() { var e = ie.createElement("div"),
                t = ie.createDocumentFragment(),
                n = ie.createElement("input");
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ue.leadingWhitespace = 3 === e.firstChild.nodeType, ue.tbody = !e.getElementsByTagName("tbody").length, ue.htmlSerialize = !!e.getElementsByTagName("link").length, ue.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ue.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ue.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = ie.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ue.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ue.noCloneEvent = !!e.addEventListener, e[fe.expando] = 1, ue.attributes = !e.getAttribute(fe.expando) }();
        var Be = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ue.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };
        Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td;
        var Xe = /<|&#?\w+;/,
            Ve = /<tbody/i;
        ! function() { var t, n, i = ie.createElement("div"); for (t in { submit: !0, change: !0, focusin: !0 }) n = "on" + t, (ue[t] = n in e) || (i.setAttribute(n, "t"), ue[t] = i.attributes[n].expando === !1);
            i = null }();
        var Ye = /^(?:input|select|textarea)$/i,
            Qe = /^key/,
            Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ke = /^(?:focusinfocus|focusoutblur)$/,
            Ge = /^([^.]*)(?:\.(.+)|)/;
        fe.event = {
            global: {},
            add: function(e, t, n, i, o) { var r, s, a, l, c, d, u, p, f, h, g, m = fe._data(e); if (m) { for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = fe.guid++), (s = m.events) || (s = m.events = {}), (d = m.handle) || (d = m.handle = function(e) { return "undefined" == typeof fe || e && fe.event.triggered === e.type ? void 0 : fe.event.dispatch.apply(d.elem, arguments) }, d.elem = e), t = (t || "").match(Ne) || [""], a = t.length; a--;) r = Ge.exec(t[a]) || [], f = g = r[1], h = (r[2] || "").split(".").sort(), f && (c = fe.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = fe.event.special[f] || {}, u = fe.extend({ type: f, origType: g, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && fe.expr.match.needsContext.test(o), namespace: h.join(".") }, l), (p = s[f]) || (p = s[f] = [], p.delegateCount = 0, c.setup && c.setup.call(e, i, h, d) !== !1 || (e.addEventListener ? e.addEventListener(f, d, !1) : e.attachEvent && e.attachEvent("on" + f, d))), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), fe.event.global[f] = !0);
                    e = null } },
            remove: function(e, t, n, i, o) { var r, s, a, l, c, d, u, p, f, h, g, m = fe.hasData(e) && fe._data(e); if (m && (d = m.events)) { for (t = (t || "").match(Ne) || [""], c = t.length; c--;)
                        if (a = Ge.exec(t[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f) { for (u = fe.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, p = d[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) s = p[r], !o && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(r, 1), s.selector && p.delegateCount--, u.remove && u.remove.call(e, s));
                            l && !p.length && (u.teardown && u.teardown.call(e, h, m.handle) !== !1 || fe.removeEvent(e, f, m.handle), delete d[f]) } else
                            for (f in d) fe.event.remove(e, f + t[c], n, i, !0);
                    fe.isEmptyObject(d) && (delete m.handle, fe._removeData(e, "events")) } },
            trigger: function(t, n, i, o) {
                var r, s, a, l, c, d, u, p = [i || ie],
                    f = de.call(t, "type") ? t.type : t,
                    h = de.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = d = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !Ke.test(f + fe.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."),
                        f = h.shift(), h.sort()), s = f.indexOf(":") < 0 && "on" + f, t = t[fe.expando] ? t : new fe.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : fe.makeArray(n, [t]), c = fe.event.special[f] || {}, o || !c.trigger || c.trigger.apply(i, n) !== !1)) { if (!o && !c.noBubble && !fe.isWindow(i)) { for (l = c.delegateType || f, Ke.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), d = a;
                        d === (i.ownerDocument || ie) && p.push(d.defaultView || d.parentWindow || e) } for (u = 0;
                        (a = p[u++]) && !t.isPropagationStopped();) t.type = u > 1 ? l : c.bindType || f, r = (fe._data(a, "events") || {})[t.type] && fe._data(a, "handle"), r && r.apply(a, n), r = s && a[s], r && r.apply && Ie(a) && (t.result = r.apply(a, n), t.result === !1 && t.preventDefault()); if (t.type = f, !o && !t.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), n) === !1) && Ie(i) && s && i[f] && !fe.isWindow(i)) { d = i[s], d && (i[s] = null), fe.event.triggered = f; try { i[f]() } catch (g) {}
                        fe.event.triggered = void 0, d && (i[s] = d) } return t.result }
            },
            dispatch: function(e) { e = fe.event.fix(e); var t, n, i, o, r, s = [],
                    a = oe.call(arguments),
                    l = (fe._data(this, "events") || {})[e.type] || [],
                    c = fe.event.special[e.type] || {}; if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) { for (s = fe.event.handlers.call(this, e, l), t = 0;
                        (o = s[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, i = ((fe.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation())); return c.postDispatch && c.postDispatch.call(this, e), e.result } },
            handlers: function(e, t) { var n, i, o, r, s = [],
                    a = t.delegateCount,
                    l = e.target; if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) { for (i = [], n = 0; a > n; n++) r = t[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? fe(o, this).index(l) > -1 : fe.find(o, this, null, [l]).length), i[o] && i.push(r);
                            i.length && s.push({ elem: l, handlers: i }) }
                return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s },
            fix: function(e) { if (e[fe.expando]) return e; var t, n, i, o = e.type,
                    r = e,
                    s = this.fixHooks[o]; for (s || (this.fixHooks[o] = s = Je.test(o) ? this.mouseHooks : Qe.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new fe.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n]; return e.target || (e.target = r.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } },
            mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(e, t) { var n, i, o, r = t.button,
                        s = t.fromElement; return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e } },
            special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== w() && this.focus) try { return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === w() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return fe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(e) { return fe.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } },
            simulate: function(e, t, n) { var i = fe.extend(new fe.Event, n, { type: e, isSimulated: !0 });
                fe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault() }
        }, fe.removeEvent = ie.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) } : function(e, t, n) { var i = "on" + t;
            e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n)) }, fe.Event = function(e, t) { return this instanceof fe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? y : b) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), void(this[fe.expando] = !0)) : new fe.Event(e, t) }, fe.Event.prototype = { constructor: fe.Event, isDefaultPrevented: b, isPropagationStopped: b, isImmediatePropagationStopped: b, preventDefault: function() { var e = this.originalEvent;
                this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function() { var e = this.originalEvent;
                this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function() { var e = this.originalEvent;
                this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation() } }, fe.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) { fe.event.special[e] = { delegateType: t, bindType: t, handle: function(e) { var n, i = this,
                        o = e.relatedTarget,
                        r = e.handleObj; return o && (o === i || fe.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n } } }), ue.submit || (fe.event.special.submit = { setup: function() { return !fe.nodeName(this, "form") && void fe.event.add(this, "click._submit keypress._submit", function(e) { var t = e.target,
                        n = fe.nodeName(t, "input") || fe.nodeName(t, "button") ? fe.prop(t, "form") : void 0;
                    n && !fe._data(n, "submit") && (fe.event.add(n, "submit._submit", function(e) { e._submitBubble = !0 }), fe._data(n, "submit", !0)) }) }, postDispatch: function(e) { e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && fe.event.simulate("submit", this.parentNode, e)) }, teardown: function() { return !fe.nodeName(this, "form") && void fe.event.remove(this, "._submit") } }), ue.change || (fe.event.special.change = { setup: function() { return Ye.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (fe.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._justChanged = !0) }), fe.event.add(this, "click._change", function(e) { this._justChanged && !e.isTrigger && (this._justChanged = !1), fe.event.simulate("change", this, e) })), !1) : void fe.event.add(this, "beforeactivate._change", function(e) { var t = e.target;
                    Ye.test(t.nodeName) && !fe._data(t, "change") && (fe.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || fe.event.simulate("change", this.parentNode, e) }), fe._data(t, "change", !0)) }) }, handle: function(e) { var t = e.target; return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function() { return fe.event.remove(this, "._change"), !Ye.test(this.nodeName) } }), ue.focusin || fe.each({ focus: "focusin", blur: "focusout" }, function(e, t) { var n = function(e) { fe.event.simulate(t, e.target, fe.event.fix(e)) };
            fe.event.special[t] = { setup: function() { var i = this.ownerDocument || this,
                        o = fe._data(i, t);
                    o || i.addEventListener(e, n, !0), fe._data(i, t, (o || 0) + 1) }, teardown: function() { var i = this.ownerDocument || this,
                        o = fe._data(i, t) - 1;
                    o ? fe._data(i, t, o) : (i.removeEventListener(e, n, !0), fe._removeData(i, t)) } } }), fe.fn.extend({ on: function(e, t, n, i) { return k(this, e, t, n, i) }, one: function(e, t, n, i) { return k(this, e, t, n, i, 1) }, off: function(e, t, n) { var i, o; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, fe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (o in e) this.off(o, t, e[o]); return this } return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = b), this.each(function() { fe.event.remove(this, e, n, t) }) }, trigger: function(e, t) { return this.each(function() { fe.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; return n ? fe.event.trigger(e, t, n, !0) : void 0 } });
        var Ze = / jQuery\d+="(?:null|\d+)"/g,
            et = new RegExp("<(?:" + We + ")[\\s/>]", "i"),
            tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            nt = /<script|<style|<link/i,
            it = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ot = /^true\/(.*)/,
            rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            st = f(ie),
            at = st.appendChild(ie.createElement("div"));
        fe.extend({ htmlPrefilter: function(e) { return e.replace(tt, "<$1></$2>") }, clone: function(e, t, n) { var i, o, r, s, a, l = fe.contains(e.ownerDocument, e); if (ue.html5Clone || fe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (at.innerHTML = e.outerHTML, at.removeChild(r = at.firstChild)), !(ue.noCloneEvent && ue.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
                    for (i = h(r), a = h(e), s = 0; null != (o = a[s]); ++s) i[s] && $(o, i[s]); if (t)
                    if (n)
                        for (a = a || h(e), i = i || h(r), s = 0; null != (o = a[s]); s++) S(o, i[s]);
                    else S(e, r);
                return i = h(r, "script"), i.length > 0 && g(i, !l && h(e, "script")), i = a = o = null, r }, cleanData: function(e, t) { for (var n, i, o, r, s = 0, a = fe.expando, l = fe.cache, c = ue.attributes, d = fe.event.special; null != (n = e[s]); s++)
                    if ((t || Ie(n)) && (o = n[a], r = o && l[o])) { if (r.events)
                            for (i in r.events) d[i] ? fe.event.remove(n, i) : fe.removeEvent(n, i, r.handle);
                        l[o] && (delete l[o], c || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), ne.push(o)) } } }), fe.fn.extend({ domManip: E, detach: function(e) { return A(this, e, !0) }, remove: function(e) { return A(this, e) }, text: function(e) { return Fe(this, function(e) { return void 0 === e ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e)) }, null, e, arguments.length) }, append: function() { return E(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = x(this, e);
                        t.appendChild(e) } }) }, prepend: function() { return E(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = x(this, e);
                        t.insertBefore(e, t.firstChild) } }) }, before: function() { return E(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() { return E(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() { for (var e, t = 0; null != (e = this[t]); t++) { for (1 === e.nodeType && fe.cleanData(h(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && fe.nodeName(e, "select") && (e.options.length = 0) } return this }, clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return fe.clone(this, e, t) }) }, html: function(e) { return Fe(this, function(e) { var t = this[0] || {},
                        n = 0,
                        i = this.length; if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0; if ("string" == typeof e && !nt.test(e) && (ue.htmlSerialize || !et.test(e)) && (ue.leadingWhitespace || !ze.test(e)) && !Be[(_e.exec(e) || ["", ""])[1].toLowerCase()]) { e = fe.htmlPrefilter(e); try { for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (fe.cleanData(h(t, !1)), t.innerHTML = e);
                            t = 0 } catch (o) {} }
                    t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() { var e = []; return E(this, arguments, function(t) { var n = this.parentNode;
                    fe.inArray(this, e) < 0 && (fe.cleanData(h(this)), n && n.replaceChild(t, this)) }, e) } }), fe.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { fe.fn[e] = function(e) { for (var n, i = 0, o = [], r = fe(e), s = r.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), fe(r[i])[t](n), se.apply(o, n.get()); return this.pushStack(o) } });
        var lt, ct = { HTML: "block", BODY: "block" },
            dt = /^margin/,
            ut = new RegExp("^(" + He + ")(?!px)[a-z%]+$", "i"),
            pt = function(e, t, n, i) { var o, r, s = {}; for (r in t) s[r] = e.style[r], e.style[r] = t[r];
                o = n.apply(e, i || []); for (r in t) e.style[r] = s[r]; return o },
            ft = ie.documentElement;
        ! function() {
            function t() { var t, d, u = ie.documentElement;
                u.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = o = a = !1, i = s = !0, e.getComputedStyle && (d = e.getComputedStyle(c), n = "1%" !== (d || {}).top, a = "2px" === (d || {}).marginLeft, o = "4px" === (d || { width: "4px" }).width, c.style.marginRight = "50%", i = "4px" === (d || { marginRight: "4px" }).marginRight, t = c.appendChild(ie.createElement("div")), t.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", c.style.width = "1px", s = !parseFloat((e.getComputedStyle(t) || {}).marginRight), c.removeChild(t)), c.style.display = "none", r = 0 === c.getClientRects().length, r && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = c.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === t[0].offsetHeight, r && (t[0].style.display = "", t[1].style.display = "none", r = 0 === t[0].offsetHeight)), u.removeChild(l) } var n, i, o, r, s, a, l = ie.createElement("div"),
                c = ie.createElement("div");
            c.style && (c.style.cssText = "float:left;opacity:.5", ue.opacity = "0.5" === c.style.opacity, ue.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ue.clearCloneStyle = "content-box" === c.style.backgroundClip, l = ie.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), ue.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, fe.extend(ue, { reliableHiddenOffsets: function() { return null == n && t(), r }, boxSizingReliable: function() { return null == n && t(), o }, pixelMarginRight: function() { return null == n && t(), i }, pixelPosition: function() { return null == n && t(), n }, reliableMarginRight: function() { return null == n && t(), s }, reliableMarginLeft: function() { return null == n && t(), a } })) }();
        var ht, gt, mt = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (ht = function(t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) }, gt = function(e, t, n) { var i, o, r, s, a = e.style; return n = n || ht(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || fe.contains(e.ownerDocument, e) || (s = fe.style(e, t)), n && !ue.pixelMarginRight() && ut.test(s) && dt.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r), void 0 === s ? s : s + "" }) : ft.currentStyle && (ht = function(e) { return e.currentStyle }, gt = function(e, t, n) { var i, o, r, s, a = e.style; return n = n || ht(e), s = n ? n[t] : void 0, null == s && a && a[t] && (s = a[t]), ut.test(s) && !mt.test(t) && (i = a.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto" });
        var vt = /alpha\([^)]*\)/i,
            yt = /opacity\s*=\s*([^)]*)/i,
            bt = /^(none|table(?!-c[ea]).+)/,
            wt = new RegExp("^(" + He + ")(.*)$", "i"),
            kt = { position: "absolute", visibility: "hidden", display: "block" },
            xt = { letterSpacing: "0", fontWeight: "400" },
            Tt = ["Webkit", "O", "Moz", "ms"],
            Ct = ie.createElement("div").style;
        fe.extend({ cssHooks: { opacity: { get: function(e, t) { if (t) { var n = gt(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": ue.cssFloat ? "cssFloat" : "styleFloat" }, style: function(e, t, n, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var o, r, s, a = fe.camelCase(t),
                        l = e.style; if (t = fe.cssProps[a] || (fe.cssProps[a] = I(a) || a), s = fe.cssHooks[t] || fe.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t]; if (r = typeof n, "string" === r && (o = Pe.exec(n)) && o[1] && (n = p(e, t, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (fe.cssNumber[a] ? "" : "px")), ue.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try { l[t] = n } catch (c) {} } }, css: function(e, t, n, i) { var o, r, s, a = fe.camelCase(t); return t = fe.cssProps[a] || (fe.cssProps[a] = I(a) || a), s = fe.cssHooks[t] || fe.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = gt(e, t, i)), "normal" === r && t in xt && (r = xt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r } }), fe.each(["height", "width"], function(e, t) { fe.cssHooks[t] = { get: function(e, n, i) { return n ? bt.test(fe.css(e, "display")) && 0 === e.offsetWidth ? pt(e, kt, function() { return P(e, t, i) }) : P(e, t, i) : void 0 }, set: function(e, n, i) { var o = i && ht(e); return L(e, n, i ? H(e, t, i, ue.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, o), o) : 0) } } }), ue.opacity || (fe.cssHooks.opacity = { get: function(e, t) { return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function(e, t) { var n = e.style,
                    i = e.currentStyle,
                    o = fe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === fe.trim(r.replace(vt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = vt.test(r) ? r.replace(vt, o) : r + " " + o) } }), fe.cssHooks.marginRight = O(ue.reliableMarginRight, function(e, t) { return t ? pt(e, { display: "inline-block" }, gt, [e, "marginRight"]) : void 0 }), fe.cssHooks.marginLeft = O(ue.reliableMarginLeft, function(e, t) { return t ? (parseFloat(gt(e, "marginLeft")) || (fe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - pt(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left }) : 0)) + "px" : void 0 }), fe.each({ margin: "", padding: "", border: "Width" }, function(e, t) { fe.cssHooks[e + t] = { expand: function(n) { for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Me[i] + t] = r[i] || r[i - 2] || r[0]; return o } }, dt.test(e) || (fe.cssHooks[e + t].set = L) }), fe.fn.extend({ css: function(e, t) { return Fe(this, function(e, t, n) { var i, o, r = {},
                        s = 0; if (fe.isArray(t)) { for (i = ht(e), o = t.length; o > s; s++) r[t[s]] = fe.css(e, t[s], !1, i); return r } return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t) }, e, t, arguments.length > 1) }, show: function() { return j(this, !0) }, hide: function() { return j(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { Re(this) ? fe(this).show() : fe(this).hide() }) } }), fe.Tween = M, M.prototype = { constructor: M, init: function(e, t, n, i, o, r) { this.elem = e, this.prop = n, this.easing = o || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (fe.cssNumber[n] ? "" : "px") }, cur: function() { var e = M.propHooks[this.prop]; return e && e.get ? e.get(this) : M.propHooks._default.get(this) }, run: function(e) { var t, n = M.propHooks[this.prop]; return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this } }, M.prototype.init.prototype = M.prototype, M.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) }, set: function(e) { fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit) } } }, M.propHooks.scrollTop = M.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, fe.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, fe.fx = M.prototype.init, fe.fx.step = {};
        var St, $t, Et = /^(?:toggle|show|hide)$/,
            At = /queueHooks$/;
        fe.Animation = fe.extend(z, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return p(n.elem, e, Pe.exec(t), n), n }] }, tweener: function(e, t) { fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne); for (var n, i = 0, o = e.length; o > i; i++) n = e[i], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(t) }, prefilters: [_], prefilter: function(e, t) { t ? z.prefilters.unshift(e) : z.prefilters.push(e) } }), fe.speed = function(e, t, n) { var i = e && "object" == typeof e ? fe.extend({}, e) : { complete: n || !n && t || fe.isFunction(e) && e, duration: e, easing: n && t || t && !fe.isFunction(t) && t }; return i.duration = fe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in fe.fx.speeds ? fe.fx.speeds[i.duration] : fe.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() { fe.isFunction(i.old) && i.old.call(this), i.queue && fe.dequeue(this, i.queue) }, i }, fe.fn.extend({ fadeTo: function(e, t, n, i) { return this.filter(Re).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) }, animate: function(e, t, n, i) { var o = fe.isEmptyObject(e),
                        r = fe.speed(t, n, i),
                        s = function() { var t = z(this, fe.extend({}, e), r);
                            (o || fe._data(this, "finish")) && t.stop(!0) }; return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s) }, stop: function(e, t, n) { var i = function(e) { var t = e.stop;
                        delete e.stop, t(n) }; return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() { var t = !0,
                            o = null != e && e + "queueHooks",
                            r = fe.timers,
                            s = fe._data(this); if (o) s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && At.test(o) && i(s[o]); for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));!t && n || fe.dequeue(this, e) }) }, finish: function(e) { return e !== !1 && (e = e || "fx"), this.each(function() { var t, n = fe._data(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            r = fe.timers,
                            s = i ? i.length : 0; for (n.finish = !0, fe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1)); for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish }) } }), fe.each(["toggle", "show", "hide"], function(e, t) { var n = fe.fn[t];
                fe.fn[t] = function(e, i, o) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, o) } }), fe.each({ slideDown: F("show"), slideUp: F("hide"), slideToggle: F("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { fe.fn[e] = function(e, n, i) { return this.animate(t, e, n, i) } }), fe.timers = [], fe.fx.tick = function() { var e, t = fe.timers,
                    n = 0; for (St = fe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || fe.fx.stop(), St = void 0 }, fe.fx.timer = function(e) { fe.timers.push(e), e() ? fe.fx.start() : fe.timers.pop() }, fe.fx.interval = 13, fe.fx.start = function() { $t || ($t = e.setInterval(fe.fx.tick, fe.fx.interval)) }, fe.fx.stop = function() { e.clearInterval($t), $t = null }, fe.fx.speeds = { slow: 600, fast: 200, _default: 400 }, fe.fn.delay = function(t, n) { return t = fe.fx ? fe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) { var o = e.setTimeout(n, t);
                    i.stop = function() { e.clearTimeout(o) } }) },
            function() { var e, t = ie.createElement("input"),
                    n = ie.createElement("div"),
                    i = ie.createElement("select"),
                    o = i.appendChild(ie.createElement("option"));
                n = ie.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", ue.getSetAttribute = "t" !== n.className, ue.style = /top/.test(e.getAttribute("style")), ue.hrefNormalized = "/a" === e.getAttribute("href"), ue.checkOn = !!t.value, ue.optSelected = o.selected, ue.enctype = !!ie.createElement("form").enctype, i.disabled = !0, ue.optDisabled = !o.disabled, t = ie.createElement("input"), t.setAttribute("value", ""), ue.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ue.radioValue = "t" === t.value }();
        var Nt = /\r/g,
            Dt = /[\x20\t\r\n\f]+/g;
        fe.fn.extend({ val: function(e) { var t, n, i, o = this[0]; return arguments.length ? (i = fe.isFunction(e), this.each(function(n) { var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, fe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : fe.isArray(o) && (o = fe.map(o, function(e) { return null == e ? "" : e + "" })), t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o)) })) : o ? (t = fe.valHooks[o.type] || fe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Nt, "") : null == n ? "" : n)) : void 0 } }), fe.extend({ valHooks: { option: { get: function(e) { var t = fe.find.attr(e, "value"); return null != t ? t : fe.trim(fe.text(e)).replace(Dt, " ") } }, select: { get: function(e) { for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                            if (n = i[l], (n.selected || l === o) && (ue.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) { if (t = fe(n).val(), r) return t;
                                s.push(t) }
                        return s }, set: function(e, t) { for (var n, i, o = e.options, r = fe.makeArray(t), s = o.length; s--;)
                            if (i = o[s], fe.inArray(fe.valHooks.option.get(i), r) > -1) try { i.selected = n = !0 } catch (a) { i.scrollHeight } else i.selected = !1;
                        return n || (e.selectedIndex = -1), o } } } }), fe.each(["radio", "checkbox"], function() { fe.valHooks[this] = { set: function(e, t) { return fe.isArray(t) ? e.checked = fe.inArray(fe(e).val(), t) > -1 : void 0 } }, ue.checkOn || (fe.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) });
        var Ot, It, jt = fe.expr.attrHandle,
            Lt = /^(?:checked|selected)$/i,
            Ht = ue.getSetAttribute,
            Pt = ue.input;
        fe.fn.extend({ attr: function(e, t) { return Fe(this, fe.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { fe.removeAttr(this, e) }) } }), fe.extend({ attr: function(e, t, n) { var i, o, r = e.nodeType; if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (1 === r && fe.isXMLDoc(e) || (t = t.toLowerCase(), o = fe.attrHooks[t] || (fe.expr.match.bool.test(t) ? It : Ot)), void 0 !== n ? null === n ? void fe.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = fe.find.attr(e, t), null == i ? void 0 : i)) }, attrHooks: { type: { set: function(e, t) { if (!ue.radioValue && "radio" === t && fe.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) { var n, i, o = 0,
                    r = t && t.match(Ne); if (r && 1 === e.nodeType)
                    for (; n = r[o++];) i = fe.propFix[n] || n, fe.expr.match.bool.test(n) ? Pt && Ht || !Lt.test(n) ? e[i] = !1 : e[fe.camelCase("default-" + n)] = e[i] = !1 : fe.attr(e, n, ""), e.removeAttribute(Ht ? n : i) } }), It = { set: function(e, t, n) { return t === !1 ? fe.removeAttr(e, n) : Pt && Ht || !Lt.test(n) ? e.setAttribute(!Ht && fe.propFix[n] || n, n) : e[fe.camelCase("default-" + n)] = e[n] = !0, n } }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) { var n = jt[t] || fe.find.attr;
            Pt && Ht || !Lt.test(t) ? jt[t] = function(e, t, i) { var o, r; return i || (r = jt[t], jt[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, jt[t] = r), o } : jt[t] = function(e, t, n) { return n ? void 0 : e[fe.camelCase("default-" + t)] ? t.toLowerCase() : null } }), Pt && Ht || (fe.attrHooks.value = { set: function(e, t, n) { return fe.nodeName(e, "input") ? void(e.defaultValue = t) : Ot && Ot.set(e, t, n) } }), Ht || (Ot = { set: function(e, t, n) { var i = e.getAttributeNode(n); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0 } }, jt.id = jt.name = jt.coords = function(e, t, n) { var i; return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null }, fe.valHooks.button = { get: function(e, t) { var n = e.getAttributeNode(t); return n && n.specified ? n.value : void 0 }, set: Ot.set }, fe.attrHooks.contenteditable = { set: function(e, t, n) { Ot.set(e, "" !== t && t, n) } }, fe.each(["width", "height"], function(e, t) { fe.attrHooks[t] = { set: function(e, n) { return "" === n ? (e.setAttribute(t, "auto"), n) : void 0 } } })), ue.style || (fe.attrHooks.style = { get: function(e) { return e.style.cssText || void 0 }, set: function(e, t) { return e.style.cssText = t + "" } });
        var Mt = /^(?:input|select|textarea|button|object)$/i,
            Rt = /^(?:a|area)$/i;
        fe.fn.extend({ prop: function(e, t) { return Fe(this, fe.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return e = fe.propFix[e] || e, this.each(function() { try { this[e] = void 0, delete this[e] } catch (t) {} }) } }), fe.extend({ prop: function(e, t, n) { var i, o, r = e.nodeType; if (3 !== r && 8 !== r && 2 !== r) return 1 === r && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, o = fe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = fe.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : Mt.test(e.nodeName) || Rt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), ue.hrefNormalized || fe.each(["href", "src"], function(e, t) { fe.propHooks[t] = { get: function(e) { return e.getAttribute(t, 4) } } }), ue.optSelected || (fe.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null }, set: function(e) { var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { fe.propFix[this.toLowerCase()] = this }), ue.enctype || (fe.propFix.enctype = "encoding");
        var Ft = /[\t\r\n\f]/g;
        fe.fn.extend({ addClass: function(e) { var t, n, i, o, r, s, a, l = 0; if (fe.isFunction(e)) return this.each(function(t) { fe(this).addClass(e.call(this, t, W(this))) }); if ("string" == typeof e && e)
                    for (t = e.match(Ne) || []; n = this[l++];)
                        if (o = W(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ft, " ")) { for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            a = fe.trim(i), o !== a && fe.attr(n, "class", a) }
                return this }, removeClass: function(e) { var t, n, i, o, r, s, a, l = 0; if (fe.isFunction(e)) return this.each(function(t) { fe(this).removeClass(e.call(this, t, W(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof e && e)
                    for (t = e.match(Ne) || []; n = this[l++];)
                        if (o = W(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ft, " ")) { for (s = 0; r = t[s++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            a = fe.trim(i), o !== a && fe.attr(n, "class", a) }
                return this }, toggleClass: function(e, t) { var n = typeof e; return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function(n) { fe(this).toggleClass(e.call(this, n, W(this), t), t) }) : this.each(function() { var t, i, o, r; if ("string" === n)
                        for (i = 0, o = fe(this), r = e.match(Ne) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = W(this), t && fe._data(this, "__className__", t), fe.attr(this, "class", t || e === !1 ? "" : fe._data(this, "__className__") || "")) }) }, hasClass: function(e) { var t, n, i = 0; for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + W(n) + " ").replace(Ft, " ").indexOf(t) > -1) return !0;
                return !1 } }), fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { fe.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), fe.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } });
        var qt = e.location,
            _t = fe.now(),
            Ut = /\?/,
            zt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        fe.parseJSON = function(t) { if (e.JSON && e.JSON.parse) return e.JSON.parse(t + ""); var n, i = null,
                o = fe.trim(t + ""); return o && !fe.trim(o.replace(zt, function(e, t, o, r) { return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "") })) ? Function("return " + o)() : fe.error("Invalid JSON: " + t) }, fe.parseXML = function(t) { var n, i; if (!t || "string" != typeof t) return null; try { e.DOMParser ? (i = new e.DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t)) } catch (o) { n = void 0 } return n && n.documentElement && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), n };
        var Wt = /#.*$/,
            Bt = /([?&])_=[^&]*/,
            Xt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Yt = /^(?:GET|HEAD)$/,
            Qt = /^\/\//,
            Jt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Kt = {},
            Gt = {},
            Zt = "*/".concat("*"),
            en = qt.href,
            tn = Jt.exec(en.toLowerCase()) || [];
        fe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: en,
                type: "GET",
                isLocal: Vt.test(tn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": fe.parseJSON, "text xml": fe.parseXML },
                flatOptions: { url: !0, context: !0 }
            },
            ajaxSetup: function(e, t) { return t ? V(V(e, fe.ajaxSettings), t) : V(fe.ajaxSettings, e) },
            ajaxPrefilter: B(Kt),
            ajaxTransport: B(Gt),
            ajax: function(t, n) {
                function i(t, n, i, o) { var r, u, y, b, k, T = n;
                    2 !== w && (w = 2, l && e.clearTimeout(l), d = void 0, a = o || "", x.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, i && (b = Y(p, x, i)), b = Q(p, b, x, r), r ? (p.ifModified && (k = x.getResponseHeader("Last-Modified"), k && (fe.lastModified[s] = k), k = x.getResponseHeader("etag"), k && (fe.etag[s] = k)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, u = b.data, y = b.error, r = !y)) : (y = T, !t && T || (T = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (n || T) + "", r ? g.resolveWith(f, [u, T, x]) : g.rejectWith(f, [x, T, y]), x.statusCode(v), v = void 0, c && h.trigger(r ? "ajaxSuccess" : "ajaxError", [x, p, r ? u : y]), m.fireWith(f, [x, T]), c && (h.trigger("ajaxComplete", [x, p]), --fe.active || fe.event.trigger("ajaxStop"))) } "object" == typeof t && (n = t, t = void 0), n = n || {}; var o, r, s, a, l, c, d, u, p = fe.ajaxSetup({}, n),
                    f = p.context || p,
                    h = p.context && (f.nodeType || f.jquery) ? fe(f) : fe.event,
                    g = fe.Deferred(),
                    m = fe.Callbacks("once memory"),
                    v = p.statusCode || {},
                    y = {},
                    b = {},
                    w = 0,
                    k = "canceled",
                    x = { readyState: 0, getResponseHeader: function(e) { var t; if (2 === w) { if (!u)
                                    for (u = {}; t = Xt.exec(a);) u[t[1].toLowerCase()] = t[2];
                                t = u[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function() { return 2 === w ? a : null }, setRequestHeader: function(e, t) { var n = e.toLowerCase(); return w || (e = b[n] = b[n] || e, y[e] = t), this }, overrideMimeType: function(e) { return w || (p.mimeType = e), this }, statusCode: function(e) { var t; if (e)
                                if (2 > w)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else x.always(e[x.status]);
                            return this }, abort: function(e) { var t = e || k; return d && d.abort(t), i(0, t), this } }; if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, p.url = ((t || p.url || en) + "").replace(Wt, "").replace(Qt, tn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = fe.trim(p.dataType || "*").toLowerCase().match(Ne) || [""], null == p.crossDomain && (o = Jt.exec(p.url.toLowerCase()), p.crossDomain = !(!o || o[1] === tn[1] && o[2] === tn[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = fe.param(p.data, p.traditional)), X(Kt, p, n, x), 2 === w) return x;
                c = fe.event && p.global, c && 0 === fe.active++ && fe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Yt.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (Ut.test(s) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Bt.test(s) ? s.replace(Bt, "$1_=" + _t++) : s + (Ut.test(s) ? "&" : "?") + "_=" + _t++)), p.ifModified && (fe.lastModified[s] && x.setRequestHeader("If-Modified-Since", fe.lastModified[s]), fe.etag[s] && x.setRequestHeader("If-None-Match", fe.etag[s])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : p.accepts["*"]); for (r in p.headers) x.setRequestHeader(r, p.headers[r]); if (p.beforeSend && (p.beforeSend.call(f, x, p) === !1 || 2 === w)) return x.abort();
                k = "abort"; for (r in { success: 1, error: 1, complete: 1 }) x[r](p[r]); if (d = X(Gt, p, n, x)) { if (x.readyState = 1, c && h.trigger("ajaxSend", [x, p]), 2 === w) return x;
                    p.async && p.timeout > 0 && (l = e.setTimeout(function() { x.abort("timeout") }, p.timeout)); try { w = 1, d.send(y, i) } catch (T) { if (!(2 > w)) throw T;
                        i(-1, T) } } else i(-1, "No Transport"); return x },
            getJSON: function(e, t, n) { return fe.get(e, t, n, "json") },
            getScript: function(e, t) { return fe.get(e, void 0, t, "script") }
        }), fe.each(["get", "post"], function(e, t) { fe[t] = function(e, n, i, o) { return fe.isFunction(n) && (o = o || i, i = n, n = void 0), fe.ajax(fe.extend({ url: e, type: t, dataType: o, data: n, success: i }, fe.isPlainObject(e) && e)) } }), fe._evalUrl = function(e) { return fe.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, fe.fn.extend({ wrapAll: function(e) { if (fe.isFunction(e)) return this.each(function(t) { fe(this).wrapAll(e.call(this, t)) }); if (this[0]) { var t = fe(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild; return e }).append(this) } return this }, wrapInner: function(e) { return fe.isFunction(e) ? this.each(function(t) { fe(this).wrapInner(e.call(this, t)) }) : this.each(function() { var t = fe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function(e) { var t = fe.isFunction(e); return this.each(function(n) { fe(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function() { return this.parent().each(function() { fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes) }).end() } }), fe.expr.filters.hidden = function(e) { return ue.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : K(e) }, fe.expr.filters.visible = function(e) { return !fe.expr.filters.hidden(e) };
        var nn = /%20/g,
            on = /\[\]$/,
            rn = /\r?\n/g,
            sn = /^(?:submit|button|image|reset|file)$/i,
            an = /^(?:input|select|textarea|keygen)/i;
        fe.param = function(e, t) { var n, i = [],
                o = function(e, t) { t = fe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) }; if (void 0 === t && (t = fe.ajaxSettings && fe.ajaxSettings.traditional), fe.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function() { o(this.name, this.value) });
            else
                for (n in e) G(n, e[n], t, o); return i.join("&").replace(nn, "+") }, fe.fn.extend({ serialize: function() { return fe.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = fe.prop(this, "elements"); return e ? fe.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !fe(this).is(":disabled") && an.test(this.nodeName) && !sn.test(e) && (this.checked || !qe.test(e)) }).map(function(e, t) { var n = fe(this).val(); return null == n ? null : fe.isArray(n) ? fe.map(n, function(e) { return { name: t.name, value: e.replace(rn, "\r\n") } }) : { name: t.name, value: n.replace(rn, "\r\n") } }).get() } }), fe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() { return this.isLocal ? ee() : ie.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee() } : Z;
        var ln = 0,
            cn = {},
            dn = fe.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function() { for (var e in cn) cn[e](void 0, !0) }), ue.cors = !!dn && "withCredentials" in dn, dn = ue.ajax = !!dn, dn && fe.ajaxTransport(function(t) { if (!t.crossDomain || ue.cors) { var n; return { send: function(i, o) { var r, s = t.xhr(),
                            a = ++ln; if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (r in t.xhrFields) s[r] = t.xhrFields[r];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"); for (r in i) void 0 !== i[r] && s.setRequestHeader(r, i[r] + "");
                        s.send(t.hasContent && t.data || null), n = function(e, i) { var r, l, c; if (n && (i || 4 === s.readyState))
                                if (delete cn[a], n = void 0, s.onreadystatechange = fe.noop, i) 4 !== s.readyState && s.abort();
                                else { c = {}, r = s.status, "string" == typeof s.responseText && (c.text = s.responseText); try { l = s.statusText } catch (d) { l = "" }
                                    r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = c.text ? 200 : 404 }
                            c && o(r, l, c, s.getAllResponseHeaders()) }, t.async ? 4 === s.readyState ? e.setTimeout(n) : s.onreadystatechange = cn[a] = n : n() }, abort: function() { n && n(void 0, !0) } } } }), fe.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return fe.globalEval(e), e } } }), fe.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), fe.ajaxTransport("script", function(e) { if (e.crossDomain) { var t, n = ie.head || fe("head")[0] || ie.documentElement; return { send: function(i, o) { t = ie.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success")) }, n.insertBefore(t, n.firstChild) }, abort: function() { t && t.onload(void 0, !0) } } } });
        var un = [],
            pn = /(=)\?(?=&|$)|\?\?/;
        fe.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = un.pop() || fe.expando + "_" + _t++; return this[e] = !0, e } }), fe.ajaxPrefilter("json jsonp", function(t, n, i) { var o, r, s, a = t.jsonp !== !1 && (pn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && pn.test(t.data) && "data"); return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(pn, "$1" + o) : t.jsonp !== !1 && (t.url += (Ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() { return s || fe.error(o + " was not called"), s[0] }, t.dataTypes[0] = "json", r = e[o], e[o] = function() { s = arguments }, i.always(function() { void 0 === r ? fe(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, un.push(o)), s && fe.isFunction(r) && r(s[0]), s = r = void 0 }), "script") : void 0 }), fe.parseHTML = function(e, t, n) { if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || ie; var i = xe.exec(e),
                o = !n && []; return i ? [t.createElement(i[1])] : (i = v([e], t, o), o && o.length && fe(o).remove(), fe.merge([], i.childNodes)) };
        var fn = fe.fn.load;
        fe.fn.load = function(e, t, n) { if ("string" != typeof e && fn) return fn.apply(this, arguments); var i, o, r, s = this,
                a = e.indexOf(" "); return a > -1 && (i = fe.trim(e.slice(a, e.length)), e = e.slice(0, a)), fe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && fe.ajax({ url: e, type: o || "GET", dataType: "html", data: t }).done(function(e) { r = arguments, s.html(i ? fe("<div>").append(fe.parseHTML(e)).find(i) : e) }).always(n && function(e, t) { s.each(function() { n.apply(this, r || [e.responseText, t, e]) }) }), this }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { fe.fn[t] = function(e) { return this.on(t, e) } }), fe.expr.filters.animated = function(e) { return fe.grep(fe.timers, function(t) { return e === t.elem }).length }, fe.offset = { setOffset: function(e, t, n) { var i, o, r, s, a, l, c, d = fe.css(e, "position"),
                    u = fe(e),
                    p = {}; "static" === d && (e.style.position = "relative"), a = u.offset(), r = fe.css(e, "top"), l = fe.css(e, "left"), c = ("absolute" === d || "fixed" === d) && fe.inArray("auto", [r, l]) > -1, c ? (i = u.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : u.css(p) } }, fe.fn.extend({ offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { fe.offset.setOffset(this, e, t) }); var t, n, i = { top: 0, left: 0 },
                    o = this[0],
                    r = o && o.ownerDocument; return r ? (t = r.documentElement, fe.contains(t, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = te(r), { top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : i) : void 0 }, position: function() { if (this[0]) { var e, t, n = { top: 0, left: 0 },
                        i = this[0]; return "fixed" === fe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), fe.nodeName(e[0], "html") || (n = e.offset()), n.top += fe.css(e[0], "borderTopWidth", !0), n.left += fe.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - fe.css(i, "marginTop", !0), left: t.left - n.left - fe.css(i, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && !fe.nodeName(e, "html") && "static" === fe.css(e, "position");) e = e.offsetParent; return e || ft }) } }), fe.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) { var n = /Y/.test(t);
            fe.fn[e] = function(i) { return Fe(this, function(e, i, o) { var r = te(e); return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(n ? fe(r).scrollLeft() : o, n ? o : fe(r).scrollTop()) : e[i] = o) }, e, i, arguments.length, null) } }), fe.each(["top", "left"], function(e, t) { fe.cssHooks[t] = O(ue.pixelPosition, function(e, n) { return n ? (n = gt(e, t), ut.test(n) ? fe(e).position()[t] + "px" : n) : void 0 }) }), fe.each({ Height: "height", Width: "width" }, function(e, t) { fe.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, i) { fe.fn[i] = function(i, o) { var r = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || o === !0 ? "margin" : "border"); return Fe(this, function(t, n, i) { var o; return fe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? fe.css(t, n, s) : fe.style(t, n, i, s) }, t, r ? i : void 0, r, null) } }) }), fe.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, i) { return this.on(t, e, n, i) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), fe.fn.size = function() { return this.length }, fe.fn.andSelf = fe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return fe });
        var hn = e.jQuery,
            gn = e.$;
        return fe.noConflict = function(t) { return e.$ === fe && (e.$ = gn), t && e.jQuery === fe && (e.jQuery = hn), fe }, t || (e.jQuery = e.$ = fe), fe
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) { var t = e.fn.jquery.split(" ")[0].split("."); if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher") }(jQuery), + function(e) { "use strict";

    function t() { var e = document.createElement("bootstrap"),
            t = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var n in t)
            if (void 0 !== e.style[n]) return { end: t[n] };
        return !1 }
    e.fn.emulateTransitionEnd = function(t) { var n = !1,
            i = this;
        e(this).one("bsTransitionEnd", function() { n = !0 }); var o = function() { n || e(i).trigger(e.support.transition.end) }; return setTimeout(o, t), this }, e(function() { e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = { bindType: e.support.transition.end, delegateType: e.support.transition.end, handle: function(t) { return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0 } }) }) }(jQuery), + function(e) { "use strict";

    function t(t) { return this.each(function() { var n = e(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof t && o[t].call(n) }) } var n = '[data-dismiss="alert"]',
        i = function(t) { e(t).on("click", n, this.close) };
    i.VERSION = "3.3.1", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
        function n() { s.detach().trigger("closed.bs.alert").remove() } var o = e(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")); var s = e(r);
        t && t.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n()) }; var o = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() { return e.fn.alert = o, this }, e(document).on("click.bs.alert.data-api", n, i.prototype.close) }(jQuery), + function(e) { "use strict";

    function t(t) { return this.each(function() { var i = e(this),
                o = i.data("bs.button"),
                r = "object" == typeof t && t;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == t ? o.toggle() : t && o.setState(t) }) } var n = function(t, i) { this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1 };
    n.VERSION = "3.3.1", n.DEFAULTS = { loadingText: "loading..." }, n.prototype.setState = function(t) { var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        t += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(e.proxy(function() { i[o](null == r[t] ? this.options[t] : r[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n)) }, this), 0) }, n.prototype.toggle = function() { var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]'); if (t.length) { var n = this.$element.find("input"); "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        e && this.$element.toggleClass("active") }; var i = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() { return e.fn.button = i, this }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) { var i = e(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), t.call(i, "toggle"), n.preventDefault() }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) { e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type)) }) }(jQuery), + function(e) { "use strict";

    function t(t) { return this.each(function() { var i = e(this),
                o = i.data("bs.carousel"),
                r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                s = "string" == typeof t ? t : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof t ? o.to(t) : s ? o[s]() : r.interval && o.pause().cycle() }) } var n = function(t, n) { this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this)) };
    n.VERSION = "3.3.1", n.TRANSITION_DURATION = 600, n.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, n.prototype.keydown = function(e) { if (!/input|textarea/i.test(e.target.tagName)) { switch (e.which) {
                case 37:
                    this.prev(); break;
                case 39:
                    this.next(); break;
                default:
                    return }
            e.preventDefault() } }, n.prototype.cycle = function(t) { return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this }, n.prototype.getItemIndex = function(e) { return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active) }, n.prototype.getItemForDirection = function(e, t) { var n = "prev" == e ? -1 : 1,
            i = this.getItemIndex(t),
            o = (i + n) % this.$items.length; return this.$items.eq(o) }, n.prototype.to = function(e) { var t = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active")); return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() { t.to(e) }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e)) }, n.prototype.pause = function(t) { return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, n.prototype.next = function() { return this.sliding ? void 0 : this.slide("next") }, n.prototype.prev = function() { return this.sliding ? void 0 : this.slide("prev") }, n.prototype.slide = function(t, i) { var o = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(t, o),
            s = this.interval,
            a = "next" == t ? "left" : "right",
            l = "next" == t ? "first" : "last",
            c = this; if (!r.length) { if (!this.options.wrap) return;
            r = this.$element.find(".item")[l]() } if (r.hasClass("active")) return this.sliding = !1; var d = r[0],
            u = e.Event("slide.bs.carousel", { relatedTarget: d, direction: a }); if (this.$element.trigger(u), !u.isDefaultPrevented()) { if (this.sliding = !0, s && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var p = e(this.$indicators.children()[this.getItemIndex(r)]);
                p && p.addClass("active") } var f = e.Event("slid.bs.carousel", { relatedTarget: d, direction: a }); return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() { r.removeClass([t, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), c.sliding = !1, setTimeout(function() { c.$element.trigger(f) }, 0) }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(f)), s && this.cycle(), this } }; var i = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() { return e.fn.carousel = i, this }; var o = function(n) { var i, o = e(this),
            r = e(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")); if (r.hasClass("carousel")) { var s = e.extend({}, r.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (s.interval = !1), t.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault() } };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), e(window).on("load", function() { e('[data-ride="carousel"]').each(function() { var n = e(this);
            t.call(n, n.data()) }) }) }(jQuery), + function(e) { "use strict";

    function t(t) { var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""); return e(i) }

    function n(t) { return this.each(function() { var n = e(this),
                o = n.data("bs.collapse"),
                r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);!o && r.toggle && "show" == t && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof t && o[t]() }) } var i = function(t, n) { this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e(this.options.trigger).filter('[href="#' + t.id + '"], [data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    i.VERSION = "3.3.1", i.TRANSITION_DURATION = 350, i.DEFAULTS = { toggle: !0, trigger: '[data-toggle="collapse"]' }, i.prototype.dimension = function() { var e = this.$element.hasClass("width"); return e ? "width" : "height" }, i.prototype.show = function() { if (!this.transitioning && !this.$element.hasClass("in")) { var t, o = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing"); if (!(o && o.length && (t = o.data("bs.collapse"), t && t.transitioning))) { var r = e.Event("show.bs.collapse"); if (this.$element.trigger(r), !r.isDefaultPrevented()) { o && o.length && (n.call(o, "hide"), t || o.data("bs.collapse", null)); var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var a = function() { this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!e.support.transition) return a.call(this); var l = e.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l]) } } } }, i.prototype.hide = function() { if (!this.transitioning && this.$element.hasClass("in")) { var t = e.Event("hide.bs.collapse"); if (this.$element.trigger(t), !t.isDefaultPrevented()) { var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var o = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this) } } }, i.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, i.prototype.getParent = function() { return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) { var o = e(i);
            this.addAriaAndCollapsedClass(t(o), o) }, this)).end() }, i.prototype.addAriaAndCollapsedClass = function(e, t) { var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n) }; var o = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() { return e.fn.collapse = o, this }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) { var o = e(this);
        o.attr("data-target") || i.preventDefault(); var r = t(o),
            s = r.data("bs.collapse"),
            a = s ? "toggle" : e.extend({}, o.data(), { trigger: this });
        n.call(r, a) }) }(jQuery), + function(e) { "use strict";

    function t(t) { t && 3 === t.which || (e(o).remove(), e(r).each(function() { var i = e(this),
                o = n(i),
                r = { relatedTarget: this };
            o.hasClass("open") && (o.trigger(t = e.Event("hide.bs.dropdown", r)), t.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", r))) })) }

    function n(t) { var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")); var i = n && e(n); return i && i.length ? i : t.parent() }

    function i(t) { return this.each(function() { var n = e(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof t && i[t].call(n) }) } var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        s = function(t) { e(t).on("click.bs.dropdown", this.toggle) };
    s.VERSION = "3.3.1", s.prototype.toggle = function(i) { var o = e(this); if (!o.is(".disabled, :disabled")) { var r = n(o),
                s = r.hasClass("open"); if (t(), !s) { "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t); var a = { relatedTarget: this }; if (r.trigger(i = e.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown", a) } return !1 } }, s.prototype.keydown = function(t) { if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) { var i = e(this); if (t.preventDefault(), t.stopPropagation(), !i.is(".disabled, :disabled")) { var o = n(i),
                    s = o.hasClass("open"); if (!s && 27 != t.which || s && 27 == t.which) return 27 == t.which && o.find(r).trigger("focus"), i.trigger("click"); var a = " li:not(.divider):visible a",
                    l = o.find('[role="menu"]' + a + ', [role="listbox"]' + a); if (l.length) { var c = l.index(t.target);
                    38 == t.which && c > 0 && c--, 40 == t.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus") } } } }; var a = e.fn.dropdown;
    e.fn.dropdown = i, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function() { return e.fn.dropdown = a, this }, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) { e.stopPropagation() }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', s.prototype.keydown) }(jQuery), + function(e) {
    "use strict";

    function t(t, i) { return this.each(function() { var o = e(this),
                r = o.data("bs.modal"),
                s = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof t ? r[t](i) : s.show && r.show(i) }) }
    var n = function(t, n) { this.options = n, this.$body = e(document.body), this.$element = e(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    n.VERSION = "3.3.1", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, n.prototype.toggle = function(e) { return this.isShown ? this.hide() : this.show(e) }, n.prototype.show = function(t) { var i = this,
            o = e.Event("show.bs.modal", { relatedTarget: t });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() { var o = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.options.backdrop && i.adjustBackdrop(), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus(); var r = e.Event("shown.bs.modal", { relatedTarget: t });
            o ? i.$element.find(".modal-dialog").one("bsTransitionEnd", function() { i.$element.trigger("focus").trigger(r) }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r) })) }, n.prototype.hide = function(t) { t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal()) }, n.prototype.enforceFocus = function() { e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) { this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus") }, this)) }, n.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) { 27 == e.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, n.prototype.resize = function() { this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal") }, n.prototype.hideModal = function() { var e = this;
        this.$element.hide(), this.backdrop(function() { e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal") }) }, n.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, n.prototype.backdrop = function(t) { var i = this,
            o = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var r = e.support.transition && o; if (this.$backdrop = e('<div class="modal-backdrop ' + o + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", e.proxy(function(e) { e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)) }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var s = function() { i.removeBackdrop(), t && t() };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s() } else t && t() }, n.prototype.handleUpdate = function() { this.options.backdrop && this.adjustBackdrop(), this.adjustDialog() }, n.prototype.adjustBackdrop = function() { this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight) }, n.prototype.adjustDialog = function() { var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : "" }) }, n.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, n.prototype.checkScrollbar = function() { this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar() }, n.prototype.setScrollbar = function() { var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth) }, n.prototype.resetScrollbar = function() { this.$body.css("padding-right", "") }, n.prototype.measureScrollbar = function() { var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e); var t = e.offsetWidth - e.clientWidth; return this.$body[0].removeChild(e), t };
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() { return e.fn.modal = i, this }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = e(this),
            o = i.attr("href"),
            r = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : e.extend({ remote: !/#/.test(o) && o }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(r, s, this)
    })
}(jQuery), + function(e) { "use strict";

    function t(t) { return this.each(function() { var i = e(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof t && t,
                s = r && r.selector;
            (o || "destroy" != t) && (s ? (o || i.data("bs.tooltip", o = {}), o[s] || (o[s] = new n(this, r))) : o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof t && o[t]()) }) } var n = function(e, t) { this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t) };
    n.VERSION = "3.3.1", n.TRANSITION_DURATION = 150, n.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, n.prototype.init = function(t, n, i) { this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport); for (var o = this.options.trigger.split(" "), r = o.length; r--;) { var s = o[r]; if ("click" == s) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != s) { var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this)) } }
        this.options.selector ? this._options = e.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, n.prototype.getDefaults = function() { return n.DEFAULTS }, n.prototype.getOptions = function(t) { return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), t }, n.prototype.getDelegateOptions = function() { var t = {},
            n = this.getDefaults(); return this._options && e.each(this._options, function(e, i) { n[e] != i && (t[e] = i) }), t }, n.prototype.enter = function(t) { var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type); return n && n.$tip && n.$tip.is(":visible") ? void(n.hoverState = "in") : (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() { "in" == n.hoverState && n.show() }, n.options.delay.show)) : n.show()) }, n.prototype.leave = function(t) { var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type); return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() { "out" == n.hoverState && n.hide() }, n.options.delay.hide)) : n.hide() }, n.prototype.show = function() { var t = e.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { this.$element.trigger(t); var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if (t.isDefaultPrevented() || !i) return; var o = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade"); var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), r.detach().css({ top: 0, left: 0, display: "block" }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element); var d = this.getPosition(),
                u = r[0].offsetWidth,
                p = r[0].offsetHeight; if (c) { var f = a,
                    h = this.options.container ? e(this.options.container) : this.$element.parent(),
                    g = this.getPosition(h);
                a = "bottom" == a && d.bottom + p > g.bottom ? "top" : "top" == a && d.top - p < g.top ? "bottom" : "right" == a && d.right + u > g.width ? "left" : "left" == a && d.left - u < g.left ? "right" : a, r.removeClass(f).addClass(a) } var m = this.getCalculatedOffset(a, d, u, p);
            this.applyPlacement(m, a); var v = function() { var e = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == e && o.leave(o) };
            e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v() } }, n.prototype.applyPlacement = function(t, n) { var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top = t.top + s, t.left = t.left + a, e.offset.setOffset(i[0], e.extend({ using: function(e) { i.css({ top: Math.round(e.top), left: Math.round(e.left) }) } }, t), 0), i.addClass("in"); var l = i[0].offsetWidth,
            c = i[0].offsetHeight; "top" == n && c != r && (t.top = t.top + r - c); var d = this.getViewportAdjustedDelta(n, t, l, c);
        d.left ? t.left += d.left : t.top += d.top; var u = /top|bottom/.test(n),
            p = u ? 2 * d.left - o + l : 2 * d.top - r + c,
            f = u ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(p, i[0][f], u) }, n.prototype.replaceArrow = function(e, t, n) { this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "") }, n.prototype.setContent = function() { var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right") }, n.prototype.hide = function(t) {
        function i() { "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), t && t() } var o = this,
            r = this.tip(),
            s = e.Event("hide.bs." + this.type); return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (r.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this) }, n.prototype.fixTitle = function() { var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "") }, n.prototype.hasContent = function() { return this.getTitle() }, n.prototype.getPosition = function(t) { t = t || this.$element; var n = t[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = e.extend({}, o, { width: o.right - o.left, height: o.bottom - o.top })); var r = i ? { top: 0, left: 0 } : t.offset(),
            s = { scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop() },
            a = i ? { width: e(window).width(), height: e(window).height() } : null; return e.extend({}, o, s, a, r) }, n.prototype.getCalculatedOffset = function(e, t, n, i) { return "bottom" == e ? { top: t.top + t.height, left: t.left + t.width / 2 - n / 2 } : "top" == e ? { top: t.top - i, left: t.left + t.width / 2 - n / 2 } : "left" == e ? { top: t.top + t.height / 2 - i / 2, left: t.left - n } : { top: t.top + t.height / 2 - i / 2, left: t.left + t.width } }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) { var o = { top: 0, left: 0 }; if (!this.$viewport) return o; var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport); if (/right|left/.test(e)) { var a = t.top - r - s.scroll,
                l = t.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l) } else { var c = t.left - r,
                d = t.left + r + n;
            c < s.left ? o.left = s.left - c : d > s.width && (o.left = s.left + s.width - d) } return o }, n.prototype.getTitle = function() { var e, t = this.$element,
            n = this.options; return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title) }, n.prototype.getUID = function(e) { do e += ~~(1e6 * Math.random()); while (document.getElementById(e)); return e }, n.prototype.tip = function() { return this.$tip = this.$tip || e(this.options.template) }, n.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, n.prototype.enable = function() { this.enabled = !0 }, n.prototype.disable = function() { this.enabled = !1 }, n.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, n.prototype.toggle = function(t) { var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n) }, n.prototype.destroy = function() { var e = this;
        clearTimeout(this.timeout), this.hide(function() { e.$element.off("." + e.type).removeData("bs." + e.type) }) }; var i = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() { return e.fn.tooltip = i, this } }(jQuery), + function(e) { "use strict";

    function t(t) { return this.each(function() { var i = e(this),
                o = i.data("bs.popover"),
                r = "object" == typeof t && t,
                s = r && r.selector;
            (o || "destroy" != t) && (s ? (o || i.data("bs.popover", o = {}), o[s] || (o[s] = new n(this, r))) : o || i.data("bs.popover", o = new n(this, r)), "string" == typeof t && o[t]()) }) } var n = function(e, t) { this.init("popover", e, t) }; if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.1", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() { return n.DEFAULTS }, n.prototype.setContent = function() { var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide() }, n.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, n.prototype.getContent = function() { var e = this.$element,
            t = this.options; return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content) }, n.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") }, n.prototype.tip = function() { return this.$tip || (this.$tip = e(this.options.template)), this.$tip }; var i = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() { return e.fn.popover = i, this } }(jQuery), + function(e) { "use strict";

    function t(n, i) { var o = e.proxy(this.process, this);
        this.$body = e("body"), this.$scrollElement = e(e(n).is("body") ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o), this.refresh(), this.process() }

    function n(n) { return this.each(function() { var i = e(this),
                o = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new t(this, r)), "string" == typeof n && o[n]() }) }
    t.VERSION = "3.3.1", t.DEFAULTS = { offset: 10 }, t.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, t.prototype.refresh = function() { var t = "offset",
            n = 0;
        e.isWindow(this.$scrollElement[0]) || (t = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(); var i = this;
        this.$body.find(this.selector).map(function() { var i = e(this),
                o = i.data("target") || i.attr("href"),
                r = /^#./.test(o) && e(o); return r && r.length && r.is(":visible") && [
                [r[t]().top + n, o]
            ] || null }).sort(function(e, t) { return e[0] - t[0] }).each(function() { i.offsets.push(this[0]), i.targets.push(this[1]) }) }, t.prototype.process = function() { var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            s = this.activeTarget; if (this.scrollHeight != n && this.refresh(), t >= i) return s != (e = r[r.length - 1]) && this.activate(e); if (s && t < o[0]) return this.activeTarget = null, this.clear(); for (e = o.length; e--;) s != r[e] && t >= o[e] && (!o[e + 1] || t <= o[e + 1]) && this.activate(r[e]) }, t.prototype.activate = function(t) { this.activeTarget = t, this.clear(); var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy") }, t.prototype.clear = function() { e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") }; var i = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() { return e.fn.scrollspy = i, this }, e(window).on("load.bs.scrollspy.data-api", function() { e('[data-spy="scroll"]').each(function() { var t = e(this);
            n.call(t, t.data()) }) }) }(jQuery), + function(e) { "use strict";

    function t(t) { return this.each(function() { var i = e(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof t && o[t]() }) } var n = function(t) { this.element = e(t) };
    n.VERSION = "3.3.1", n.TRANSITION_DURATION = 150, n.prototype.show = function() { var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target"); if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) { var o = n.find(".active:last a"),
                r = e.Event("hide.bs.tab", { relatedTarget: t[0] }),
                s = e.Event("show.bs.tab", { relatedTarget: o[0] }); if (o.trigger(r), t.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) { var a = e(i);
                this.activate(t.closest("li"), n), this.activate(a, a.parent(), function() { o.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }), t.trigger({ type: "shown.bs.tab", relatedTarget: o[0] }) }) } } }, n.prototype.activate = function(t, i, o) {
        function r() { s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o() } var s = i.find("> .active"),
            a = o && e.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in") }; var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() { return e.fn.tab = i, this }; var o = function(n) { n.preventDefault(), t.call(e(this), "show") };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o) }(jQuery), + function(e) { "use strict";

    function t(t) { return this.each(function() { var i = e(this),
                o = i.data("bs.affix"),
                r = "object" == typeof t && t;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof t && o[t]() }) } var n = function(t, i) { this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition() };
    n.VERSION = "3.3.1", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = { offset: 0, target: window }, n.prototype.getState = function(e, t, n, i) { var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height(); if (null != n && "top" == this.affixed) return n > o && "top"; if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(e - i >= o + s) && "bottom"; var a = null == this.affixed,
            l = a ? o : r.top,
            c = a ? s : t; return null != n && n >= l ? "top" : null != i && l + c >= e - i && "bottom" }, n.prototype.getPinnedOffset = function() { if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix"); var e = this.$target.scrollTop(),
            t = this.$element.offset(); return this.pinnedOffset = t.top - e }, n.prototype.checkPositionWithEventLoop = function() { setTimeout(e.proxy(this.checkPosition, this), 1) }, n.prototype.checkPosition = function() { if (this.$element.is(":visible")) { var t = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                s = e("body").height(); "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element)); var a = this.getState(s, t, o, r); if (this.affixed != a) { null != this.unpin && this.$element.css("top", ""); var l = "affix" + (a ? "-" + a : ""),
                    c = e.Event(l + ".bs.affix"); if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix") } "bottom" == a && this.$element.offset({ top: s - t - r }) } }; var i = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() { return e.fn.affix = i, this }, e(window).on("load", function() { e('[data-spy="affix"]').each(function() { var n = e(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i) }) }) }(jQuery), ! function(e) { "object" == typeof module && "object" == typeof module.exports ? e(require("jquery"), window, document) : e(jQuery, window, document) }(function(e, t, n, i) { var o = [],
        r = function() { return o.length ? o[o.length - 1] : null },
        s = function() { var e, t = !1; for (e = o.length - 1; e >= 0; e--) o[e].$blocker && (o[e].$blocker.toggleClass("current", !t).toggleClass("behind", t), t = !0) };
    e.modal = function(t, n) { var i, s; if (this.$body = e("body"), this.options = e.extend({}, e.modal.defaults, n), this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10)), this.$blocker = null, this.options.closeExisting)
            for (; e.modal.isActive();) e.modal.close(); if (o.push(this), t.is("a"))
            if (s = t.attr("href"), /^#/.test(s)) { if (this.$elm = e(s), 1 !== this.$elm.length) return null;
                this.$body.append(this.$elm), this.open() } else this.$elm = e("<div>"), this.$body.append(this.$elm), i = function(e, t) { t.elm.remove() }, this.showSpinner(), t.trigger(e.modal.AJAX_SEND), e.get(s).done(function(n) { if (e.modal.isActive()) { t.trigger(e.modal.AJAX_SUCCESS); var o = r();
                    o.$elm.empty().append(n).on(e.modal.CLOSE, i), o.hideSpinner(), o.open(), t.trigger(e.modal.AJAX_COMPLETE) } }).fail(function() { t.trigger(e.modal.AJAX_FAIL); var n = r();
                n.hideSpinner(), o.pop(), t.trigger(e.modal.AJAX_COMPLETE) });
        else this.$elm = t, this.$body.append(this.$elm), this.open() }, e.modal.prototype = { constructor: e.modal, open: function() { var t = this;
            this.block(), this.options.doFade ? setTimeout(function() { t.show() }, this.options.fadeDuration * this.options.fadeDelay) : this.show(), e(n).off("keydown.modal").on("keydown.modal", function(e) { var t = r();
                27 == e.which && t.options.escapeClose && t.close() }), this.options.clickClose && this.$blocker.click(function(t) { t.target == this && e.modal.close() }) }, close: function() { o.pop(), this.unblock(), this.hide(), e.modal.isActive() || e(n).off("keydown.modal") }, block: function() { this.$elm.trigger(e.modal.BEFORE_BLOCK, [this._ctx()]), this.$body.css("overflow", "hidden"), this.$blocker = e('<div class="jquery-modal blocker current"></div>').appendTo(this.$body), s(), this.options.doFade && this.$blocker.css("opacity", 0).animate({ opacity: 1 }, this.options.fadeDuration), this.$elm.trigger(e.modal.BLOCK, [this._ctx()]) }, unblock: function(t) {!t && this.options.doFade ? this.$blocker.fadeOut(this.options.fadeDuration, this.unblock.bind(this, !0)) : (this.$blocker.children().appendTo(this.$body), this.$blocker.remove(), this.$blocker = null, s(), e.modal.isActive() || this.$body.css("overflow", "")) }, show: function() { this.$elm.trigger(e.modal.BEFORE_OPEN, [this._ctx()]), this.options.showClose && (this.closeButton = e('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText + "</a>"), this.$elm.append(this.closeButton)), this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker), this.options.doFade ? this.$elm.css("opacity", 0).show().animate({ opacity: 1 }, this.options.fadeDuration) : this.$elm.show(), this.$elm.trigger(e.modal.OPEN, [this._ctx()]) }, hide: function() { this.$elm.trigger(e.modal.BEFORE_CLOSE, [this._ctx()]), this.closeButton && this.closeButton.remove(); var t = this;
            this.options.doFade ? this.$elm.fadeOut(this.options.fadeDuration, function() { t.$elm.trigger(e.modal.AFTER_CLOSE, [t._ctx()]) }) : this.$elm.hide(0, function() { t.$elm.trigger(e.modal.AFTER_CLOSE, [t._ctx()]) }), this.$elm.trigger(e.modal.CLOSE, [this._ctx()]) }, showSpinner: function() { this.options.showSpinner && (this.spinner = this.spinner || e('<div class="' + this.options.modalClass + '-spinner"></div>').append(this.options.spinnerHtml), this.$body.append(this.spinner), this.spinner.show()) }, hideSpinner: function() { this.spinner && this.spinner.remove() }, _ctx: function() { return { elm: this.$elm, $blocker: this.$blocker, options: this.options } } }, e.modal.close = function(t) { if (e.modal.isActive()) { t && t.preventDefault(); var n = r(); return n.close(), n.$elm } }, e.modal.isActive = function() { return o.length > 0 }, e.modal.getCurrent = r, e.modal.defaults = { closeExisting: !0, escapeClose: !0, clickClose: !0, closeText: "Close", closeClass: "", modalClass: "modal", spinnerHtml: null, showSpinner: !0, showClose: !0, fadeDuration: null, fadeDelay: 1 }, e.modal.BEFORE_BLOCK = "modal:before-block", e.modal.BLOCK = "modal:block", e.modal.BEFORE_OPEN = "modal:before-open", e.modal.OPEN = "modal:open", e.modal.BEFORE_CLOSE = "modal:before-close", e.modal.CLOSE = "modal:close", e.modal.AFTER_CLOSE = "modal:after-close", e.modal.AJAX_SEND = "modal:ajax:send", e.modal.AJAX_SUCCESS = "modal:ajax:success", e.modal.AJAX_FAIL = "modal:ajax:fail", e.modal.AJAX_COMPLETE = "modal:ajax:complete", e.fn.modal = function(t) { return 1 === this.length && new e.modal(this, t), this }, e(n).on("click.modal", 'a[rel~="modal:close"]', e.modal.close), e(n).on("click.modal", 'a[rel~="modal:open"]', function(t) { t.preventDefault(), e(this).modal() }) }),
function() { "use strict";

    function e(e) {
        function t(t, i) { var r, g, m = t == window,
                v = i && void 0 !== i.message ? i.message : void 0; if (i = e.extend({}, e.blockUI.defaults, i || {}), !i.ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) { if (i.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, i.overlayCSS || {}), r = e.extend({}, e.blockUI.defaults.css, i.css || {}), i.onOverlayClick && (i.overlayCSS.cursor = "pointer"), g = e.extend({}, e.blockUI.defaults.themedCSS, i.themedCSS || {}), v = void 0 === v ? i.message : v, m && f && n(window, { fadeOut: 0 }), v && "string" != typeof v && (v.parentNode || v.jquery)) { var y = v.jquery ? v[0] : v,
                        b = {};
                    e(t).data("blockUI.history", b), b.el = y, b.parent = y.parentNode, b.display = y.style.display, b.position = y.style.position, b.parent && b.parent.removeChild(y) }
                e(t).data("blockUI.onUnblock", i.onUnblock); var w, k, x, T, C = i.baseZ;
                w = e(d || i.forceIframe ? '<iframe class="blockUI" style="z-index:' + C++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + i.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), k = e(i.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + C++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + C++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), i.theme && m ? (T = '<div class="blockUI ' + i.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (C + 10) + ';display:none;position:fixed">', i.title && (T += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"), T += '<div class="ui-widget-content ui-dialog-content"></div>', T += "</div>") : i.theme ? (T = '<div class="blockUI ' + i.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (C + 10) + ';display:none;position:absolute">', i.title && (T += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"), T += '<div class="ui-widget-content ui-dialog-content"></div>', T += "</div>") : T = m ? '<div class="blockUI ' + i.blockMsgClass + ' blockPage" style="z-index:' + (C + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + i.blockMsgClass + ' blockElement" style="z-index:' + (C + 10) + ';display:none;position:absolute"></div>', x = e(T), v && (i.theme ? (x.css(g), x.addClass("ui-widget-content")) : x.css(r)), i.theme || k.css(i.overlayCSS), k.css("position", m ? "fixed" : "absolute"), (d || i.forceIframe) && w.css("opacity", 0); var S = [w, k, x],
                    $ = e(m ? "body" : t);
                e.each(S, function() { this.appendTo($) }), i.theme && i.draggable && e.fn.draggable && x.draggable({ handle: ".ui-dialog-titlebar", cancel: "li" }); var E = p && (!e.support.boxModel || e("object,embed", m ? null : t).length > 0); if (u || E) { if (m && i.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !m) var A = l(t, "borderTopWidth"),
                        N = l(t, "borderLeftWidth"),
                        D = A ? "(0 - " + A + ")" : 0,
                        O = N ? "(0 - " + N + ")" : 0;
                    e.each(S, function(e, t) { var n = t[0].style; if (n.position = "absolute", e < 2) m ? n.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + i.quirksmodeOffsetHack + ') + "px"') : n.setExpression("height", 'this.parentNode.offsetHeight + "px"'), m ? n.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : n.setExpression("width", 'this.parentNode.offsetWidth + "px"'), O && n.setExpression("left", O), D && n.setExpression("top", D);
                        else if (i.centerY) m && n.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), n.marginTop = 0;
                        else if (!i.centerY && m) { var o = i.css && i.css.top ? parseInt(i.css.top, 10) : 0,
                                r = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + o + ') + "px"';
                            n.setExpression("top", r) } }) } if (v && (i.theme ? x.find(".ui-widget-content").append(v) : x.append(v), (v.jquery || v.nodeType) && e(v).show()), (d || i.forceIframe) && i.showOverlay && w.show(), i.fadeIn) { var I = i.onBlock ? i.onBlock : c,
                        j = i.showOverlay && !v ? I : c,
                        L = v ? I : c;
                    i.showOverlay && k._fadeIn(i.fadeIn, j), v && x._fadeIn(i.fadeIn, L) } else i.showOverlay && k.show(), v && x.show(), i.onBlock && i.onBlock.bind(x)(); if (o(1, t, i), m ? (f = x[0], h = e(i.focusableElements, f), i.focusInput && setTimeout(s, 20)) : a(x[0], i.centerX, i.centerY), i.timeout) { var H = setTimeout(function() { m ? e.unblockUI(i) : e(t).unblock(i) }, i.timeout);
                    e(t).data("blockUI.timeout", H) } } }

        function n(t, n) { var r, s = t == window,
                a = e(t),
                l = a.data("blockUI.history"),
                c = a.data("blockUI.timeout");
            c && (clearTimeout(c), a.removeData("blockUI.timeout")), n = e.extend({}, e.blockUI.defaults, n || {}), o(0, t, n), null === n.onUnblock && (n.onUnblock = a.data("blockUI.onUnblock"), a.removeData("blockUI.onUnblock")); var d;
            d = s ? e("body").children().filter(".blockUI").add("body > .blockUI") : a.find(">.blockUI"), n.cursorReset && (d.length > 1 && (d[1].style.cursor = n.cursorReset), d.length > 2 && (d[2].style.cursor = n.cursorReset)), s && (f = h = null), n.fadeOut ? (r = d.length, d.stop().fadeOut(n.fadeOut, function() { 0 === --r && i(d, l, n, t) })) : i(d, l, n, t) }

        function i(t, n, i, o) { var r = e(o); if (!r.data("blockUI.isBlocked")) { t.each(function(e, t) { this.parentNode && this.parentNode.removeChild(this) }), n && n.el && (n.el.style.display = n.display, n.el.style.position = n.position, n.el.style.cursor = "default", n.parent && n.parent.appendChild(n.el), r.removeData("blockUI.history")), r.data("blockUI.static") && r.css("position", "static"), "function" == typeof i.onUnblock && i.onUnblock(o, i); var s = e(document.body),
                    a = s.width(),
                    l = s[0].style.width;
                s.width(a - 1).width(a), s[0].style.width = l } }

        function o(t, n, i) { var o = n == window,
                s = e(n); if ((t || (!o || f) && (o || s.data("blockUI.isBlocked"))) && (s.data("blockUI.isBlocked", t), o && i.bindEvents && (!t || i.showOverlay))) { var a = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                t ? e(document).bind(a, i, r) : e(document).unbind(a, r) } }

        function r(t) { if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && f && t.data.constrainTabKey) { var n = h,
                    i = !t.shiftKey && t.target === n[n.length - 1],
                    o = t.shiftKey && t.target === n[0]; if (i || o) return setTimeout(function() { s(o) }, 10), !1 } var r = t.data,
                a = e(t.target); return a.hasClass("blockOverlay") && r.onOverlayClick && r.onOverlayClick(t), a.parents("div." + r.blockMsgClass).length > 0 || 0 === a.parents().children().filter("div.blockUI").length }

        function s(e) { if (h) { var t = h[e === !0 ? h.length - 1 : 0];
                t && t.focus() } }

        function a(e, t, n) { var i = e.parentNode,
                o = e.style,
                r = (i.offsetWidth - e.offsetWidth) / 2 - l(i, "borderLeftWidth"),
                s = (i.offsetHeight - e.offsetHeight) / 2 - l(i, "borderTopWidth");
            t && (o.left = r > 0 ? r + "px" : "0"), n && (o.top = s > 0 ? s + "px" : "0") }

        function l(t, n) { return parseInt(e.css(t, n), 10) || 0 }
        e.fn._fadeIn = e.fn.fadeIn; var c = e.noop || function() {},
            d = /MSIE/.test(navigator.userAgent),
            u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            p = (document.documentMode || 0, e.isFunction(document.createElement("div").style.setExpression));
        e.blockUI = function(e) { t(window, e) }, e.unblockUI = function(e) { n(window, e) }, e.growlUI = function(t, n, i, o) { var r = e('<div class="growlUI"></div>');
            t && r.append("<h1>" + t + "</h1>"), n && r.append("<h2>" + n + "</h2>"), void 0 === i && (i = 3e3); var s = function(t) { t = t || {}, e.blockUI({ message: r, fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700, fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3, timeout: "undefined" != typeof t.timeout ? t.timeout : i, centerY: !1, showOverlay: !1, onUnblock: o, css: e.blockUI.defaults.growlCSS }) };
            s();
            r.css("opacity");
            r.mouseover(function() { s({ fadeIn: 0, timeout: 3e4 }); var t = e(".blockMsg");
                t.stop(), t.fadeTo(300, 1) }).mouseout(function() { e(".blockMsg").fadeOut(1e3) }) }, e.fn.block = function(n) { if (this[0] === window) return e.blockUI(n), this; var i = e.extend({}, e.blockUI.defaults, n || {}); return this.each(function() { var t = e(this);
                i.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({ fadeOut: 0 }) }), this.each(function() { "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, n) }) }, e.fn.unblock = function(t) { return this[0] === window ? (e.unblockUI(t), this) : this.each(function() { n(this, t) }) }, e.blockUI.version = 2.7, e.blockUI.defaults = { message: '<span class="sprite sprite-spinner-lg"></span>', title: null, draggable: !0, theme: !1, css: { padding: 0, margin: 0, width: "30%", top: "19%", left: "35%", textAlign: "center", color: "#FFF", cursor: "wait" }, themedCSS: { width: "30%", top: "20%", left: "35%" }, overlayCSS: { backgroundColor: "#000", opacity: .7, cursor: "Please wait..." }, cursorReset: "default", growlCSS: { width: "300px", top: "10px", left: "", right: "10px", border: "none", padding: "5px", opacity: .6, cursor: "default", color: "#fff", backgroundColor: "#000", "-webkit-border-radius": "10px", "-moz-border-radius": "10px", "border-radius": "10px" }, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", forceIframe: !1, baseZ: 1e3, centerX: !0, centerY: !0, allowBodyStretch: !0, bindEvents: !0, constrainTabKey: !0, fadeIn: 200, fadeOut: 400, timeout: 0, showOverlay: !0, focusInput: !0, focusableElements: ":input:enabled:visible", onBlock: null, onUnblock: null, onOverlayClick: null, quirksmodeOffsetHack: 4, blockMsgClass: "blockMsg", ignoreIfBlocked: !1 }; var f = null,
            h = [] } "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery) }(), ! function(e) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery) }(function(e) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, i) {
            var o, r = this;
            r.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: e(t), appendDots: e(t), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(t, n) { return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(n + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, r.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [],
                r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(t), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(t).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = n++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
        }
        var n = 0;
        return t
    }(), t.prototype.activateADA = function() { var e = this;
        e.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) { var o = this; if ("boolean" == typeof n) i = n, n = null;
        else if (0 > n || n >= o.slideCount) return !1;
        o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : i === !0 ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, n) { e(n).attr("data-slick-index", t) }), o.$slidesCache = o.$slides, o.reinit() }, t.prototype.animateHeight = function() { var e = this; if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) { var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({ height: t }, e.options.speed) } }, t.prototype.animateSlide = function(t, n) { var i = {},
            o = this;
        o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (t = -t), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({ left: t }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({ top: t }, o.options.speed, o.options.easing, n) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), e({ animStart: o.currentLeft }).animate({ animStart: t }, { duration: o.options.speed, easing: o.options.easing, step: function(e) { e = Math.ceil(e), o.options.vertical === !1 ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i)) }, complete: function() { n && n.call() } })) : (o.applyTransition(), t = Math.ceil(t), o.options.vertical === !1 ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function() { o.disableTransition(), n.call() }, o.options.speed)) }, t.prototype.getNavTarget = function() { var t = this,
            n = t.options.asNavFor; return n && null !== n && (n = e(n).not(t.$slider)), n }, t.prototype.asNavFor = function(t) { var n = this,
            i = n.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() { var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0) }) }, t.prototype.applyTransition = function(e) { var t = this,
            n = {};
        t.options.fade === !1 ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n) }, t.prototype.autoPlay = function() { var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed)) }, t.prototype.autoPlayClear = function() { var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer) }, t.prototype.autoPlayIterator = function() { var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 === 0 && (e.direction = 1))), e.slideHandler(t)) }, t.prototype.buildArrows = function() { var t = this;
        t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, t.prototype.buildDots = function() { var t, n, i = this; if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) { for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false") } }, t.prototype.buildOut = function() { var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) { e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "") }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable") }, t.prototype.buildRows = function() { var e, t, n, i, o, r, s, a = this; if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) { for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; o > e; e++) { var l = document.createElement("div"); for (t = 0; t < a.options.rows; t++) { var c = document.createElement("div"); for (n = 0; n < a.options.slidesPerRow; n++) { var d = e * s + (t * a.options.slidesPerRow + n);
                        r.get(d) && c.appendChild(r.get(d)) }
                    l.appendChild(c) }
                i.appendChild(l) }
            a.$slider.empty().append(i), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" }) } }, t.prototype.checkResponsive = function(t, n) { var i, o, r, s = this,
            a = !1,
            l = s.$slider.width(),
            c = window.innerWidth || e(window).width(); if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) { o = null; for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (s.originalSettings.mobileFirst === !1 ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || a === !1 || s.$slider.trigger("breakpoint", [s, a]) } }, t.prototype.changeSlide = function(t, n) { var i, o, r, s = this,
            a = e(t.currentTarget); switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll !== 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
            case "previous":
                o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n); break;
            case "next":
                o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n); break;
            case "index":
                var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus"); break;
            default:
                return } }, t.prototype.checkNavigable = function(e) { var t, n, i = this; if (t = i.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1];
        else
            for (var o in t) { if (e < t[o]) { e = n; break }
                n = t[o] }
        return e }, t.prototype.cleanUpEvents = function() { var t = this;
        t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition) }, t.prototype.cleanUpSlideEvents = function() { var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1)) }, t.prototype.cleanUpRows = function() { var e, t = this;
        t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e)) }, t.prototype.clickHandler = function(e) { var t = this;
        t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault()) }, t.prototype.destroy = function(t) { var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { e(this).attr("style", e(this).data("originalStyling")) }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n]) }, t.prototype.disableTransition = function(e) { var t = this,
            n = {};
        n[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n) }, t.prototype.fadeSlide = function(e, t) { var n = this;
        n.cssTransitions === !1 ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }), n.$slides.eq(e).animate({ opacity: 1 }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }), t && setTimeout(function() { n.disableTransition(e), t.call() }, n.options.speed)) }, t.prototype.fadeSlideOut = function(e) { var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(e).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 })) }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) { var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit()) }, t.prototype.focusHandler = function() { var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(n) { n.stopImmediatePropagation(); var i = e(this);
            setTimeout(function() { t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay()) }, 0) }) }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() { var e = this; return e.currentSlide }, t.prototype.getDotCount = function() { var e = this,
            t = 0,
            n = 0,
            i = 0; if (e.options.infinite === !0)
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (e.options.centerMode === !0) i = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll); return i - 1 }, t.prototype.getLeft = function(e) { var t, n, i, o = this,
            r = 0; return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = n * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (e - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * n * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (e + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = o.options.vertical === !1 ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + r, o.options.variableWidth === !0 && (i = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = o.options.rtl === !0 ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, o.options.centerMode === !0 && (i = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = o.options.rtl === !0 ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (o.$list.width() - i.outerWidth()) / 2)), t }, t.prototype.getOption = t.prototype.slickGetOption = function(e) { var t = this; return t.options[e] }, t.prototype.getNavigableIndexes = function() { var e, t = this,
            n = 0,
            i = 0,
            o = []; for (t.options.infinite === !1 ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > n;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; return o }, t.prototype.getSlick = function() { return this }, t.prototype.getSlideCount = function() { var t, n, i, o = this; return i = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(t, r) { return r.offsetLeft - i + e(r).outerWidth() / 2 > -1 * o.swipeLeft ? (n = r, !1) : void 0 }), t = Math.abs(e(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) { var n = this;
        n.changeSlide({ data: { message: "index", index: parseInt(e) } }, t) }, t.prototype.init = function(t) { var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), n.options.accessibility === !0 && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay()) }, t.prototype.initADA = function() { var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) { e(this).attr({ role: "option", "aria-describedby": "slick-slide" + t.instanceUid + n }) }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(n) { e(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + t.instanceUid + n, id: "slick-slide" + t.instanceUid + n }) }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA() }, t.prototype.initArrowEvents = function() { var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, e.changeSlide)) }, t.prototype.initDotEvents = function() { var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", { message: "index" }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1)) }, t.prototype.initSlideEvents = function() { var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1))) }, t.prototype.initializeEvents = function() { var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", { action: "start" }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", { action: "move" }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", { action: "end" }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition) }, t.prototype.initUI = function() { var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show() }, t.prototype.keyHandler = function(e) { var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({ data: { message: t.options.rtl === !0 ? "next" : "previous" } }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({ data: { message: t.options.rtl === !0 ? "previous" : "next" } })) }, t.prototype.lazyLoad = function() {
        function t(t) { e("img[data-lazy]", t).each(function() { var t = e(this),
                    n = e(this).attr("data-lazy"),
                    i = document.createElement("img");
                i.onload = function() { t.animate({ opacity: 0 }, 100, function() { t.attr("src", n).animate({ opacity: 1 }, 200, function() { t.removeAttr("data-lazy").removeClass("slick-loading") }), s.$slider.trigger("lazyLoaded", [s, t, n]) }) }, i.onerror = function() { t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n]) }, i.src = n }) } var n, i, o, r, s = this;
        s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = Math.ceil(o + s.options.slidesToShow), s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++)), n = s.$slider.find(".slick-slide").slice(o, r), t(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), t(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), t(i)) }, t.prototype.loadSlider = function() { var e = this;
        e.setPosition(), e.$slideTrack.css({ opacity: 1 }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad() }, t.prototype.next = t.prototype.slickNext = function() { var e = this;
        e.changeSlide({ data: { message: "next" } }) }, t.prototype.orientationChange = function() { var e = this;
        e.checkResponsive(), e.setPosition() }, t.prototype.pause = t.prototype.slickPause = function() { var e = this;
        e.autoPlayClear(), e.paused = !0 }, t.prototype.play = t.prototype.slickPlay = function() { var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1 }, t.prototype.postSlide = function(e) { var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && t.initADA()) }, t.prototype.prev = t.prototype.slickPrev = function() { var e = this;
        e.changeSlide({ data: { message: "previous" } }) }, t.prototype.preventDefault = function(e) { e.preventDefault() }, t.prototype.progressiveLazyLoad = function(t) { t = t || 1; var n, i, o, r = this,
            s = e("img[data-lazy]", r.$slider);
        s.length ? (n = s.first(), i = n.attr("data-lazy"), o = document.createElement("img"), o.onload = function() { n.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), r.options.adaptiveHeight === !0 && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, n, i]), r.progressiveLazyLoad() }, o.onerror = function() { 3 > t ? setTimeout(function() { r.progressiveLazyLoad(t + 1) }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, n, i]), r.progressiveLazyLoad()) }, o.src = i) : r.$slider.trigger("allImagesLoaded", [r]) }, t.prototype.refresh = function(t) { var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, { currentSlide: n }), o.init(), t || o.changeSlide({ data: { message: "index", index: n } }, !1) }, t.prototype.registerBreakpoints = function() { var t, n, i, o = this,
            r = o.options.responsive || null; if ("array" === e.type(r) && r.length) { o.respondTo = o.options.respondTo || "window"; for (t in r)
                if (i = o.breakpoints.length - 1, n = r[t].breakpoint, r.hasOwnProperty(t)) { for (; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                    o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings }
            o.breakpoints.sort(function(e, t) { return o.options.mobileFirst ? e - t : t - e }) } }, t.prototype.reinit = function() { var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t]) }, t.prototype.resize = function() { var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() { t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition() }, 50)) }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) { var i = this; return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : i.slideCount - 1) : e = t === !0 ? --e : e, !(i.slideCount < 1 || 0 > e || e > i.slideCount - 1) && (i.unload(), n === !0 ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit()) }, t.prototype.setCSS = function(e) { var t, n, i = this,
            o = {};
        i.options.rtl === !0 && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, i.transformsEnabled === !1 ? i.$slideTrack.css(o) : (o = {}, i.cssTransitions === !1 ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o))) }, t.prototype.setDimensions = function() { var e = this;
        e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({ padding: "0px " + e.options.centerPadding }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({ padding: e.options.centerPadding + " 0px" })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length))); var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t) }, t.prototype.setFade = function() { var t, n = this;
        n.$slides.each(function(i, o) { t = n.slideWidth * i * -1, n.options.rtl === !0 ? e(o).css({ position: "relative", right: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 }) : e(o).css({ position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 }) }), n.$slides.eq(n.currentSlide).css({ zIndex: n.options.zIndex - 1, opacity: 1 }) }, t.prototype.setHeight = function() { var e = this; if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) { var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t) } }, t.prototype.setOption = t.prototype.slickSetOption = function() { var t, n, i, o, r, s = this,
            a = !1; if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : "undefined" != typeof arguments[1] && (r = "single")), "single" === r) s.options[i] = o;
        else if ("multiple" === r) e.each(i, function(e, t) { s.options[e] = t });
        else if ("responsive" === r)
            for (n in o)
                if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
                else { for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                    s.options.responsive.push(o[n]) }
        a && (s.unload(), s.reinit()) }, t.prototype.setPosition = function() { var e = this;
        e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e]) }, t.prototype.setProps = function() { var e = this,
            t = document.body.style;
        e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1 }, t.prototype.setSlideClasses = function(e) { var t, n, i, o, r = this;
        n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), r.options.centerMode === !0 ? (t = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = r.options.infinite === !0 ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad() }, t.prototype.setupInfinite = function() { var t, n, i, o = this; if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (n = null, o.slideCount > o.options.slidesToShow)) { for (i = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned"); for (t = 0; i > t; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() { e(this).attr("id", "") }) } }, t.prototype.interrupt = function(e) { var t = this;
        e || t.autoPlay(), t.interrupted = e }, t.prototype.selectHandler = function(t) {
        var n = this,
            i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
        return o || (o = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(o), void n.asNavFor(o)) : void n.slideHandler(o)
    }, t.prototype.slideHandler = function(e, t, n) { var i, o, r, s, a, l = null,
            c = this; return t = t || !1, c.animating === !0 && c.options.waitForAnimate === !0 || c.options.fade === !0 && c.currentSlide === e || c.slideCount <= c.options.slidesToShow ? void 0 : (t === !1 && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, c.options.infinite === !1 && c.options.centerMode === !1 && (0 > e || e > c.getDotCount() * c.options.slidesToScroll) ? void(c.options.fade === !1 && (i = c.currentSlide, n !== !0 ? c.animateSlide(s, function() { c.postSlide(i) }) : c.postSlide(i))) : c.options.infinite === !1 && c.options.centerMode === !0 && (0 > e || e > c.slideCount - c.options.slidesToScroll) ? void(c.options.fade === !1 && (i = c.currentSlide, n !== !0 ? c.animateSlide(s, function() { c.postSlide(i) }) : c.postSlide(i))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = 0 > i ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), c.options.fade === !0 ? (n !== !0 ? (c.fadeSlideOut(r), c.fadeSlide(o, function() { c.postSlide(o) })) : c.postSlide(o), void c.animateHeight()) : void(n !== !0 ? c.animateSlide(l, function() { c.postSlide(o) }) : c.postSlide(o)))) }, t.prototype.startLoad = function() { var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading") }, t.prototype.swipeDirection = function() { var e, t, n, i, o = this; return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), 0 > i && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= i && i >= 315 ? o.options.rtl === !1 ? "left" : "right" : i >= 135 && 225 >= i ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? i >= 35 && 135 >= i ? "down" : "up" : "vertical" }, t.prototype.swipeEnd = function(e) { var t, n, i = this; if (i.dragging = !1, i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1; if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) { switch (n = i.swipeDirection()) {
                case "left":
                case "down":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0; break;
                case "right":
                case "up":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1 } "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n])) } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {}) }, t.prototype.swipeHandler = function(e) { var t = this; if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e); break;
            case "move":
                t.swipeMove(e); break;
            case "end":
                t.swipeEnd(e) } }, t.prototype.swipeMove = function(e) { var t, n, i, o, r, s = this; return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || r && 1 !== r.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), n = s.swipeDirection(), "vertical" !== n ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(), o = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), s.options.verticalSwiping === !0 && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, s.options.infinite === !1 && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), s.options.vertical === !1 ? s.swipeLeft = t + i * o : s.swipeLeft = t + i * (s.$list.height() / s.listWidth) * o, s.options.verticalSwiping === !0 && (s.swipeLeft = t + i * o), s.options.fade !== !0 && s.options.touchMove !== !1 && (s.animating === !0 ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0) }, t.prototype.swipeStart = function(e) { var t, n = this; return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0)) }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() { var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit()) }, t.prototype.unload = function() { var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "") }, t.prototype.unslick = function(e) { var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy() }, t.prototype.updateArrows = function() { var e, t = this;
        e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))) }, t.prototype.updateDots = function() { var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false")) }, t.prototype.visibility = function() { var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1) }, e.fn.slick = function() { var e, n, i = this,
            o = arguments[0],
            r = Array.prototype.slice.call(arguments, 1),
            s = i.length; for (e = 0; s > e; e++)
            if ("object" == typeof o || "undefined" == typeof o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), "undefined" != typeof n) return n;
        return i }
}), $.fn.digits = function() { return this.each(function() { $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")) }) }, $(document).ready(function() {
    function e(e) { e.naturalHeight <= 1 && e.naturalWidth <= 1 && (e.src = "/assets/img/seller/seller-avatar.png") }
    $("img").each(function() { this.complete ? e(this) : $(this).load(function() { e(this) }).error(function() { this.src = "/assets/img/seller/seller-avatar.png" }) }), $("#responsive-menu-button").click(function() { $(".hamburger").toggleClass("is-active") }), $.fn.digits = function() { return this.each(function() { $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")) }) }, $("#overlay-close-btn").click(function() { $("body").removeClass("checkout-body"), $("#purchase-modal").hide(), $(".prod-page-inner").show() }), $("#getDReceipt").click(function() { $("#purchase-modal").hide(), $("#d-receipt-modal").show() }), $("#getPReceipt").click(function() { $("#purchase-modal").hide(), $("#p-receipt-modal").show() }), $("#send-code").click(function() { $("#requestCode").hide(), $("#enterCode").show() }), $("#bvn-go-back").click(function() { $("#enterCode").hide(), $("#requestCode").show() }), $("#addAlly").click(function() { $("#all-allies").hide(), $("#add-ally-form").show() }), $("#allAllies").click(function() { $("#add-ally-form").hide(), $("#all-allies").show() }), $("#ally-close-btn").click(function() { $("#add-ally-form").hide(), $("#all-allies").show() }), $("#choose-d-btn").click(function() { $("#intro-p").hide(), $("#step-d").show() }), $("#choose-p-btn").click(function() { $("#intro-p").hide(), $("#step-p").show() }), $("#add-d-p-close-btn").click(function() { $("#step-d").hide(), $("#intro-p").show() }), $("#add-p-p-close-btn").click(function() { $("#step-p").hide(), $("#intro-p").show() }), $(".pf-number").keydown(function(e) { 46 == e.keyCode || 8 == e.keyCode || 9 == e.keyCode || 27 == e.keyCode || 13 == e.keyCode || 65 == e.keyCode && e.ctrlKey === !0 || e.keyCode >= 35 && e.keyCode <= 39 || (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) && e.preventDefault() }), $("#togglesignup").click(function() { $(".error-message").hide(), $("#loginform,#forgotform").slideUp("slow", function() { $("#regform").slideDown("slow"), $(".error-message").hide() }) }), $("#toggleforgot").click(function() { $(".error-message").hide(), $("#loginform,#regform").slideUp("slow", function() { $("#forgotform").slideDown("slow"), $(".error-message").hide() }) }), $("#togglesignin,#togglesignin2").click(function() { $(".error-message").hide(), $("#regform,#forgotform").slideUp("slow", function() { $("#loginform").slideDown("slow"), $(".error-message").hide() }) }) });