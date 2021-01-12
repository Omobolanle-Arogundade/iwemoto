/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.core.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) {
    function c(b, c) { var e = b.nodeName.toLowerCase(); if ("area" === e) { var f = b.parentNode,
                g = f.name,
                h; return !b.href || !g || f.nodeName.toLowerCase() !== "map" ? !1 : (h = a("img[usemap=#" + g + "]")[0], !!h && d(h)) } return (/input|select|textarea|button|object/.test(e) ? !b.disabled : "a" == e ? b.href || c : c) && d(b) }

    function d(b) { return !a(b).parents().andSelf().filter(function() { return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this) }).length }
    a.ui = a.ui || {}; if (a.ui.version) return;
    a.extend(a.ui, { version: "1.8.24", keyCode: { ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91 } }), a.fn.extend({ propAttr: a.fn.prop || a.fn.attr, _focus: a.fn.focus, focus: function(b, c) { return typeof b == "number" ? this.each(function() { var d = this;
                setTimeout(function() { a(d).focus(), c && c.call(d) }, b) }) : this._focus.apply(this, arguments) }, scrollParent: function() { var b; return a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? b = this.parents().filter(function() { return /(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1)) }).eq(0) : b = this.parents().filter(function() { return /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1)) }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b }, zIndex: function(c) { if (c !== b) return this.css("zIndex", c); if (this.length) { var d = a(this[0]),
                    e, f; while (d.length && d[0] !== document) { e = d.css("position"); if (e === "absolute" || e === "relative" || e === "fixed") { f = parseInt(d.css("zIndex"), 10); if (!isNaN(f) && f !== 0) return f }
                    d = d.parent() } } return 0 }, disableSelection: function() { return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) { a.preventDefault() }) }, enableSelection: function() { return this.unbind(".ui-disableSelection") } }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(c, d) {
        function h(b, c, d, f) { return a.each(e, function() { c -= parseFloat(a.curCSS(b, "padding" + this, !0)) || 0, d && (c -= parseFloat(a.curCSS(b, "border" + this + "Width", !0)) || 0), f && (c -= parseFloat(a.curCSS(b, "margin" + this, !0)) || 0) }), c } var e = d === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            f = d.toLowerCase(),
            g = { innerWidth: a.fn.innerWidth, innerHeight: a.fn.innerHeight, outerWidth: a.fn.outerWidth, outerHeight: a.fn.outerHeight };
        a.fn["inner" + d] = function(c) { return c === b ? g["inner" + d].call(this) : this.each(function() { a(this).css(f, h(this, c) + "px") }) }, a.fn["outer" + d] = function(b, c) { return typeof b != "number" ? g["outer" + d].call(this, b) : this.each(function() { a(this).css(f, h(this, b, !0, c) + "px") }) } }), a.extend(a.expr[":"], { data: a.expr.createPseudo ? a.expr.createPseudo(function(b) { return function(c) { return !!a.data(c, b) } }) : function(b, c, d) { return !!a.data(b, d[3]) }, focusable: function(b) { return c(b, !isNaN(a.attr(b, "tabindex"))) }, tabbable: function(b) { var d = a.attr(b, "tabindex"),
                e = isNaN(d); return (e || d >= 0) && c(b, !e) } }), a(function() { var b = document.body,
            c = b.appendChild(c = document.createElement("div"));
        c.offsetHeight, a.extend(c.style, { minHeight: "100px", height: "auto", padding: 0, borderWidth: 0 }), a.support.minHeight = c.offsetHeight === 100, a.support.selectstart = "onselectstart" in c, b.removeChild(c).style.display = "none" }), a.curCSS || (a.curCSS = a.css), a.extend(a.ui, { plugin: { add: function(b, c, d) { var e = a.ui[b].prototype; for (var f in d) e.plugins[f] = e.plugins[f] || [], e.plugins[f].push([c, d[f]]) }, call: function(a, b, c) { var d = a.plugins[b]; if (!d || !a.element[0].parentNode) return; for (var e = 0; e < d.length; e++) a.options[d[e][0]] && d[e][1].apply(a.element, c) } }, contains: function(a, b) { return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b) }, hasScroll: function(b, c) { if (a(b).css("overflow") === "hidden") return !1; var d = c && c === "left" ? "scrollLeft" : "scrollTop",
                e = !1; return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e) }, isOverAxis: function(a, b, c) { return a > b && a < b + c }, isOver: function(b, c, d, e, f, g) { return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g) } }) })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.widget.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { if (a.cleanData) { var c = a.cleanData;
        a.cleanData = function(b) { for (var d = 0, e;
                (e = b[d]) != null; d++) try { a(e).triggerHandler("remove") } catch (f) {}
            c(b) } } else { var d = a.fn.remove;
        a.fn.remove = function(b, c) { return this.each(function() { return c || (!b || a.filter(b, [this]).length) && a("*", this).add([this]).each(function() { try { a(this).triggerHandler("remove") } catch (b) {} }), d.call(a(this), b, c) }) } }
    a.widget = function(b, c, d) { var e = b.split(".")[0],
            f;
        b = b.split(".")[1], f = e + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][f] = function(c) { return !!a.data(c, b) }, a[e] = a[e] || {}, a[e][b] = function(a, b) { arguments.length && this._createWidget(a, b) }; var g = new c;
        g.options = a.extend(!0, {}, g.options), a[e][b].prototype = a.extend(!0, g, { namespace: e, widgetName: b, widgetEventPrefix: a[e][b].prototype.widgetEventPrefix || b, widgetBaseClass: f }, d), a.widget.bridge(b, a[e][b]) }, a.widget.bridge = function(c, d) { a.fn[c] = function(e) { var f = typeof e == "string",
                g = Array.prototype.slice.call(arguments, 1),
                h = this; return e = !f && g.length ? a.extend.apply(null, [!0, e].concat(g)) : e, f && e.charAt(0) === "_" ? h : (f ? this.each(function() { var d = a.data(this, c),
                    f = d && a.isFunction(d[e]) ? d[e].apply(d, g) : d; if (f !== d && f !== b) return h = f, !1 }) : this.each(function() { var b = a.data(this, c);
                b ? b.option(e || {})._init() : a.data(this, c, new d(e, this)) }), h) } }, a.Widget = function(a, b) { arguments.length && this._createWidget(a, b) }, a.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", options: { disabled: !1 }, _createWidget: function(b, c) { a.data(c, this.widgetName, this), this.element = a(c), this.options = a.extend(!0, {}, this.options, this._getCreateOptions(), b); var d = this;
            this.element.bind("remove." + this.widgetName, function() { d.destroy() }), this._create(), this._trigger("create"), this._init() }, _getCreateOptions: function() { return a.metadata && a.metadata.get(this.element[0])[this.widgetName] }, _create: function() {}, _init: function() {}, destroy: function() { this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled") }, widget: function() { return this.element }, option: function(c, d) { var e = c; if (arguments.length === 0) return a.extend({}, this.options); if (typeof c == "string") { if (d === b) return this.options[c];
                e = {}, e[c] = d } return this._setOptions(e), this }, _setOptions: function(b) { var c = this; return a.each(b, function(a, b) { c._setOption(a, b) }), this }, _setOption: function(a, b) { return this.options[a] = b, a === "disabled" && this.widget()[b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", b), this }, enable: function() { return this._setOption("disabled", !1) }, disable: function() { return this._setOption("disabled", !0) }, _trigger: function(b, c, d) { var e, f, g = this.options[b];
            d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent; if (f)
                for (e in f) e in c || (c[e] = f[e]); return this.element.trigger(c, d), !(a.isFunction(g) && g.call(this.element[0], c, d) === !1 || c.isDefaultPrevented()) } } })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.mouse.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { var c = !1;
    a(document).mouseup(function(a) { c = !1 }), a.widget("ui.mouse", { options: { cancel: ":input,option", distance: 1, delay: 0 }, _mouseInit: function() { var b = this;
            this.element.bind("mousedown." + this.widgetName, function(a) { return b._mouseDown(a) }).bind("click." + this.widgetName, function(c) { if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) return a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1 }), this.started = !1 }, _mouseDestroy: function() { this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate) }, _mouseDown: function(b) { if (c) return;
            this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b; var d = this,
                e = b.which == 1,
                f = typeof this.options.cancel == "string" && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1; if (!e || f || !this._mouseCapture(b)) return !0;
            this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { d.mouseDelayMet = !0 }, this.options.delay)); if (this._mouseDistanceMet(b) && this._mouseDelayMet(b)) { this._mouseStarted = this._mouseStart(b) !== !1; if (!this._mouseStarted) return b.preventDefault(), !0 } return !0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) { return d._mouseMove(a) }, this._mouseUpDelegate = function(a) { return d._mouseUp(a) }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), c = !0, !0 }, _mouseMove: function(b) { return !a.browser.msie || document.documentMode >= 9 || !!b.button ? this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted) : this._mouseUp(b) }, _mouseUp: function(b) { return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target == this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), !1 }, _mouseDistanceMet: function(a) { return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance }, _mouseDelayMet: function(a) { return this.mouseDelayMet }, _mouseStart: function(a) {}, _mouseDrag: function(a) {}, _mouseStop: function(a) {}, _mouseCapture: function(a) { return !0 } }) })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.position.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { a.ui = a.ui || {}; var c = /left|center|right/,
        d = /top|center|bottom/,
        e = "center",
        f = {},
        g = a.fn.position,
        h = a.fn.offset;
    a.fn.position = function(b) { if (!b || !b.of) return g.apply(this, arguments);
            b = a.extend({}, b); var h = a(b.of),
                i = h[0],
                j = (b.collision || "flip").split(" "),
                k = b.offset ? b.offset.split(" ") : [0, 0],
                l, m, n; return i.nodeType === 9 ? (l = h.width(), m = h.height(), n = { top: 0, left: 0 }) : i.setTimeout ? (l = h.width(), m = h.height(), n = { top: h.scrollTop(), left: h.scrollLeft() }) : i.preventDefault ? (b.at = "left top", l = m = 0, n = { top: b.of.pageY, left: b.of.pageX }) : (l = h.outerWidth(), m = h.outerHeight(), n = h.offset()), a.each(["my", "at"], function() { var a = (b[this] || "").split(" ");
                a.length === 1 && (a = c.test(a[0]) ? a.concat([e]) : d.test(a[0]) ? [e].concat(a) : [e, e]), a[0] = c.test(a[0]) ? a[0] : e, a[1] = d.test(a[1]) ? a[1] : e, b[this] = a }), j.length === 1 && (j[1] = j[0]), k[0] = parseInt(k[0], 10) || 0, k.length === 1 && (k[1] = k[0]), k[1] = parseInt(k[1], 10) || 0, b.at[0] === "right" ? n.left += l : b.at[0] === e && (n.left += l / 2), b.at[1] === "bottom" ? n.top += m : b.at[1] === e && (n.top += m / 2), n.left += k[0], n.top += k[1], this.each(function() { var c = a(this),
                    d = c.outerWidth(),
                    g = c.outerHeight(),
                    h = parseInt(a.curCSS(this, "marginLeft", !0)) || 0,
                    i = parseInt(a.curCSS(this, "marginTop", !0)) || 0,
                    o = d + h + (parseInt(a.curCSS(this, "marginRight", !0)) || 0),
                    p = g + i + (parseInt(a.curCSS(this, "marginBottom", !0)) || 0),
                    q = a.extend({}, n),
                    r;
                b.my[0] === "right" ? q.left -= d : b.my[0] === e && (q.left -= d / 2), b.my[1] === "bottom" ? q.top -= g : b.my[1] === e && (q.top -= g / 2), f.fractions || (q.left = Math.round(q.left), q.top = Math.round(q.top)), r = { left: q.left - h, top: q.top - i }, a.each(["left", "top"], function(c, e) { a.ui.position[j[c]] && a.ui.position[j[c]][e](q, { targetWidth: l, targetHeight: m, elemWidth: d, elemHeight: g, collisionPosition: r, collisionWidth: o, collisionHeight: p, offset: k, my: b.my, at: b.at }) }), a.fn.bgiframe && c.bgiframe(), c.offset(a.extend(q, { using: b.using })) }) }, a.ui.position = { fit: { left: function(b, c) { var d = a(window),
                        e = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft();
                    b.left = e > 0 ? b.left - e : Math.max(b.left - c.collisionPosition.left, b.left) }, top: function(b, c) { var d = a(window),
                        e = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop();
                    b.top = e > 0 ? b.top - e : Math.max(b.top - c.collisionPosition.top, b.top) } }, flip: { left: function(b, c) { if (c.at[0] === e) return; var d = a(window),
                        f = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft(),
                        g = c.my[0] === "left" ? -c.elemWidth : c.my[0] === "right" ? c.elemWidth : 0,
                        h = c.at[0] === "left" ? c.targetWidth : -c.targetWidth,
                        i = -2 * c.offset[0];
                    b.left += c.collisionPosition.left < 0 ? g + h + i : f > 0 ? g + h + i : 0 }, top: function(b, c) { if (c.at[1] === e) return; var d = a(window),
                        f = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop(),
                        g = c.my[1] === "top" ? -c.elemHeight : c.my[1] === "bottom" ? c.elemHeight : 0,
                        h = c.at[1] === "top" ? c.targetHeight : -c.targetHeight,
                        i = -2 * c.offset[1];
                    b.top += c.collisionPosition.top < 0 ? g + h + i : f > 0 ? g + h + i : 0 } } }, a.offset.setOffset || (a.offset.setOffset = function(b, c) { /static/.test(a.curCSS(b, "position")) && (b.style.position = "relative"); var d = a(b),
                e = d.offset(),
                f = parseInt(a.curCSS(b, "top", !0), 10) || 0,
                g = parseInt(a.curCSS(b, "left", !0), 10) || 0,
                h = { top: c.top - e.top + f, left: c.left - e.left + g }; "using" in c ? c.using.call(b, h) : d.css(h) }, a.fn.offset = function(b) { var c = this[0]; return !c || !c.ownerDocument ? null : b ? a.isFunction(b) ? this.each(function(c) { a(this).offset(b.call(this, c, a(this).offset())) }) : this.each(function() { a.offset.setOffset(this, b) }) : h.call(this) }), a.curCSS || (a.curCSS = a.css),
        function() { var b = document.getElementsByTagName("body")[0],
                c = document.createElement("div"),
                d, e, g, h, i;
            d = document.createElement(b ? "div" : "body"), g = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }, b && a.extend(g, { position: "absolute", left: "-1000px", top: "-1000px" }); for (var j in g) d.style[j] = g[j];
            d.appendChild(c), e = b || document.documentElement, e.insertBefore(d, e.firstChild), c.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", h = a(c).offset(function(a, b) { return b }).offset(), d.innerHTML = "", e.removeChild(d), i = h.top + h.left + (b ? 2e3 : 0), f.fractions = i > 21 && i < 22 }() })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.draggable.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { a.widget("ui.draggable", a.ui.mouse, { widgetEventPrefix: "drag", options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1 }, _create: function() { this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit() }, destroy: function() { if (!this.element.data("draggable")) return; return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this }, _mouseCapture: function(b) { var c = this.options; return this.helper || c.disabled || a(b.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(b), this.handle ? (c.iframeFix && a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function() { a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({ width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1e3 }).css(a(this).offset()).appendTo("body") }), !0) : !1) }, _mouseStart: function(b) { var c = this.options; return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, a.extend(this.offset, { click: { left: b.pageX - this.offset.left, top: b.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), c.containment && this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0) }, _mouseDrag: function(b, c) { this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"); if (!c) { var d = this._uiHash(); if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
                this.position = d.position } if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px"; if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px"; return a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1 }, _mouseStop: function(b) { var c = !1;
            a.ui.ddmanager && !this.options.dropBehaviour && (c = a.ui.ddmanager.drop(this, b)), this.dropped && (c = this.dropped, this.dropped = !1); var d = this.element[0],
                e = !1; while (d && (d = d.parentNode)) d == document && (e = !0); if (!e && this.options.helper === "original") return !1; if (this.options.revert == "invalid" && !c || this.options.revert == "valid" && c || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, c)) { var f = this;
                a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() { f._trigger("stop", b) !== !1 && f._clear() }) } else this._trigger("stop", b) !== !1 && this._clear(); return !1 }, _mouseUp: function(b) { return a("div.ui-draggable-iframeFix").each(function() { this.parentNode.removeChild(this) }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b) }, cancel: function() { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this }, _getHandle: function(b) { var c = !this.options.handle || !a(this.options.handle, this.element).length ? !0 : !1; return a(this.options.handle, this.element).find("*").andSelf().each(function() { this == b.target && (c = !0) }), c }, _createHelper: function(b) { var c = this.options,
                d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : c.helper == "clone" ? this.element.clone().removeAttr("id") : this.element; return d.parents("body").length || d.appendTo(c.appendTo == "parent" ? this.element[0].parentNode : c.appendTo), d[0] != this.element[0] && !/(fixed|absolute)/.test(d.css("position")) && d.css("position", "absolute"), d }, _adjustOffsetFromHelper: function(b) { typeof b == "string" && (b = b.split(" ")), a.isArray(b) && (b = { left: +b[0], top: +b[1] || 0 }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top) }, _getParentOffset: function() { this.offsetParent = this.helper.offsetParent(); var b = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()); if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) b = { top: 0, left: 0 }; return { top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function() { if (this.cssPosition == "relative") { var a = this.element.position(); return { top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } }, _cacheMargins: function() { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } }, _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function() { var b = this.options;
            b.containment == "parent" && (b.containment = this.helper[0].parentNode); if (b.containment == "document" || b.containment == "window") this.containment = [b.containment == "document" ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, b.containment == "document" ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (b.containment == "document" ? 0 : a(window).scrollLeft()) + a(b.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b.containment == "document" ? 0 : a(window).scrollTop()) + (a(b.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]; if (!/^(document|window|parent)$/.test(b.containment) && b.containment.constructor != Array) { var c = a(b.containment),
                    d = c[0]; if (!d) return; var e = c.offset(),
                    f = a(d).css("overflow") != "hidden";
                this.containment = [(parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0), (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0), (f ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css("borderLeftWidth"), 10) || 0) - (parseInt(a(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(a(d).css("borderTopWidth"), 10) || 0) - (parseInt(a(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c } else b.containment.constructor == Array && (this.containment = b.containment) }, _convertPositionTo: function(b, c) { c || (c = this.position); var d = b == "absolute" ? 1 : -1,
                e = this.options,
                f = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                g = /(html|body)/i.test(f[0].tagName); return { top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()) * d), left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft()) * d) } }, _generatePosition: function(b) { var c = this.options,
                d = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                e = /(html|body)/i.test(d[0].tagName),
                f = b.pageX,
                g = b.pageY; if (this.originalPosition) { var h; if (this.containment) { if (this.relative_container) { var i = this.relative_container.offset();
                        h = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top] } else h = this.containment;
                    b.pageX - this.offset.click.left < h[0] && (f = h[0] + this.offset.click.left), b.pageY - this.offset.click.top < h[1] && (g = h[1] + this.offset.click.top), b.pageX - this.offset.click.left > h[2] && (f = h[2] + this.offset.click.left), b.pageY - this.offset.click.top > h[3] && (g = h[3] + this.offset.click.top) } if (c.grid) { var j = c.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1] : this.originalPageY;
                    g = h ? j - this.offset.click.top < h[1] || j - this.offset.click.top > h[3] ? j - this.offset.click.top < h[1] ? j + c.grid[1] : j - c.grid[1] : j : j; var k = c.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0] : this.originalPageX;
                    f = h ? k - this.offset.click.left < h[0] || k - this.offset.click.left > h[2] ? k - this.offset.click.left < h[0] ? k + c.grid[0] : k - c.grid[0] : k : k } } return { top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()), left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft()) } }, _clear: function() { this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1 }, _trigger: function(b, c, d) { return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d]), b == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, b, c, d) }, plugins: {}, _uiHash: function(a) { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } } }), a.extend(a.ui.draggable, { version: "1.8.24" }), a.ui.plugin.add("draggable", "connectToSortable", { start: function(b, c) { var d = a(this).data("draggable"),
                e = d.options,
                f = a.extend({}, c, { item: d.element });
            d.sortables = [], a(e.connectToSortable).each(function() { var c = a.data(this, "sortable");
                c && !c.options.disabled && (d.sortables.push({ instance: c, shouldRevert: c.options.revert }), c.refreshPositions(), c._trigger("activate", b, f)) }) }, stop: function(b, c) { var d = a(this).data("draggable"),
                e = a.extend({}, c, { item: d.element });
            a.each(d.sortables, function() { this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, d.options.helper == "original" && this.instance.currentItem.css({ top: "auto", left: "auto" })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e)) }) }, drag: function(b, c) { var d = a(this).data("draggable"),
                e = this,
                f = function(b) { var c = this.offset.click.top,
                        d = this.offset.click.left,
                        e = this.positionAbs.top,
                        f = this.positionAbs.left,
                        g = b.height,
                        h = b.width,
                        i = b.top,
                        j = b.left; return a.ui.isOver(e + c, f + d, i, j, g, h) };
            a.each(d.sortables, function(f) { this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() { return c.helper[0] }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", b), d.dropped = !1) }) } }), a.ui.plugin.add("draggable", "cursor", { start: function(b, c) { var d = a("body"),
                e = a(this).data("draggable").options;
            d.css("cursor") && (e._cursor = d.css("cursor")), d.css("cursor", e.cursor) }, stop: function(b, c) { var d = a(this).data("draggable").options;
            d._cursor && a("body").css("cursor", d._cursor) } }), a.ui.plugin.add("draggable", "opacity", { start: function(b, c) { var d = a(c.helper),
                e = a(this).data("draggable").options;
            d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity) }, stop: function(b, c) { var d = a(this).data("draggable").options;
            d._opacity && a(c.helper).css("opacity", d._opacity) } }), a.ui.plugin.add("draggable", "scroll", { start: function(b, c) { var d = a(this).data("draggable");
            d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML" && (d.overflowOffset = d.scrollParent.offset()) }, drag: function(b, c) { var d = a(this).data("draggable"),
                e = d.options,
                f = !1; if (d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML") { if (!e.axis || e.axis != "x") d.overflowOffset.top + d.scrollParent[0].offsetHeight - b.pageY < e.scrollSensitivity ? d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop - e.scrollSpeed); if (!e.axis || e.axis != "y") d.overflowOffset.left + d.scrollParent[0].offsetWidth - b.pageX < e.scrollSensitivity ? d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft - e.scrollSpeed) } else { if (!e.axis || e.axis != "x") b.pageY - a(document).scrollTop() < e.scrollSensitivity ? f = a(document).scrollTop(a(document).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < e.scrollSensitivity && (f = a(document).scrollTop(a(document).scrollTop() + e.scrollSpeed)); if (!e.axis || e.axis != "y") b.pageX - a(document).scrollLeft() < e.scrollSensitivity ? f = a(document).scrollLeft(a(document).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < e.scrollSensitivity && (f = a(document).scrollLeft(a(document).scrollLeft() + e.scrollSpeed)) }
            f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b) } }), a.ui.plugin.add("draggable", "snap", { start: function(b, c) { var d = a(this).data("draggable"),
                e = d.options;
            d.snapElements = [], a(e.snap.constructor != String ? e.snap.items || ":data(draggable)" : e.snap).each(function() { var b = a(this),
                    c = b.offset();
                this != d.element[0] && d.snapElements.push({ item: this, width: b.outerWidth(), height: b.outerHeight(), top: c.top, left: c.left }) }) }, drag: function(b, c) { var d = a(this).data("draggable"),
                e = d.options,
                f = e.snapTolerance,
                g = c.offset.left,
                h = g + d.helperProportions.width,
                i = c.offset.top,
                j = i + d.helperProportions.height; for (var k = d.snapElements.length - 1; k >= 0; k--) { var l = d.snapElements[k].left,
                    m = l + d.snapElements[k].width,
                    n = d.snapElements[k].top,
                    o = n + d.snapElements[k].height; if (!(l - f < g && g < m + f && n - f < i && i < o + f || l - f < g && g < m + f && n - f < j && j < o + f || l - f < h && h < m + f && n - f < i && i < o + f || l - f < h && h < m + f && n - f < j && j < o + f)) { d.snapElements[k].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), { snapItem: d.snapElements[k].item })), d.snapElements[k].snapping = !1; continue } if (e.snapMode != "inner") { var p = Math.abs(n - j) <= f,
                        q = Math.abs(o - i) <= f,
                        r = Math.abs(l - h) <= f,
                        s = Math.abs(m - g) <= f;
                    p && (c.position.top = d._convertPositionTo("relative", { top: n - d.helperProportions.height, left: 0 }).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", { top: o, left: 0 }).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", { top: 0, left: l - d.helperProportions.width }).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", { top: 0, left: m }).left - d.margins.left) } var t = p || q || r || s; if (e.snapMode != "outer") { var p = Math.abs(n - i) <= f,
                        q = Math.abs(o - j) <= f,
                        r = Math.abs(l - g) <= f,
                        s = Math.abs(m - h) <= f;
                    p && (c.position.top = d._convertPositionTo("relative", { top: n, left: 0 }).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", { top: o - d.helperProportions.height, left: 0 }).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", { top: 0, left: l }).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", { top: 0, left: m - d.helperProportions.width }).left - d.margins.left) }!d.snapElements[k].snapping && (p || q || r || s || t) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), { snapItem: d.snapElements[k].item })), d.snapElements[k].snapping = p || q || r || s || t } } }), a.ui.plugin.add("draggable", "stack", { start: function(b, c) { var d = a(this).data("draggable").options,
                e = a.makeArray(a(d.stack)).sort(function(b, c) { return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0) }); if (!e.length) return; var f = parseInt(e[0].style.zIndex) || 0;
            a(e).each(function(a) { this.style.zIndex = f + a }), this[0].style.zIndex = f + e.length } }), a.ui.plugin.add("draggable", "zIndex", { start: function(b, c) { var d = a(c.helper),
                e = a(this).data("draggable").options;
            d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex) }, stop: function(b, c) { var d = a(this).data("draggable").options;
            d._zIndex && a(c.helper).css("zIndex", d._zIndex) } }) })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.droppable.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { a.widget("ui.droppable", { widgetEventPrefix: "drop", options: { accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect" }, _create: function() { var b = this.options,
                c = b.accept;
            this.isover = 0, this.isout = 1, this.accept = a.isFunction(c) ? c : function(a) { return a.is(c) }, this.proportions = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight }, a.ui.ddmanager.droppables[b.scope] = a.ui.ddmanager.droppables[b.scope] || [], a.ui.ddmanager.droppables[b.scope].push(this), b.addClasses && this.element.addClass("ui-droppable") }, destroy: function() { var b = a.ui.ddmanager.droppables[this.options.scope]; for (var c = 0; c < b.length; c++) b[c] == this && b.splice(c, 1); return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this }, _setOption: function(b, c) { b == "accept" && (this.accept = a.isFunction(c) ? c : function(a) { return a.is(c) }), a.Widget.prototype._setOption.apply(this, arguments) }, _activate: function(b) { var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c)) }, _deactivate: function(b) { var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c)) }, _over: function(b) { var c = a.ui.ddmanager.current; if (!c || (c.currentItem || c.element)[0] == this.element[0]) return;
            this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c))) }, _out: function(b) { var c = a.ui.ddmanager.current; if (!c || (c.currentItem || c.element)[0] == this.element[0]) return;
            this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c))) }, _drop: function(b, c) { var d = c || a.ui.ddmanager.current; if (!d || (d.currentItem || d.element)[0] == this.element[0]) return !1; var e = !1; return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() { var b = a.data(this, "droppable"); if (b.options.greedy && !b.options.disabled && b.options.scope == d.options.scope && b.accept.call(b.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(b, { offset: b.element.offset() }), b.options.tolerance)) return e = !0, !1 }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element) : !1 }, ui: function(a) { return { draggable: a.currentItem || a.element, helper: a.helper, position: a.position, offset: a.positionAbs } } }), a.extend(a.ui.droppable, { version: "1.8.24" }), a.ui.intersect = function(b, c, d) { if (!c.offset) return !1; var e = (b.positionAbs || b.position.absolute).left,
            f = e + b.helperProportions.width,
            g = (b.positionAbs || b.position.absolute).top,
            h = g + b.helperProportions.height,
            i = c.offset.left,
            j = i + c.proportions.width,
            k = c.offset.top,
            l = k + c.proportions.height; switch (d) {
            case "fit":
                return i <= e && f <= j && k <= g && h <= l;
            case "intersect":
                return i < e + b.helperProportions.width / 2 && f - b.helperProportions.width / 2 < j && k < g + b.helperProportions.height / 2 && h - b.helperProportions.height / 2 < l;
            case "pointer":
                var m = (b.positionAbs || b.position.absolute).left + (b.clickOffset || b.offset.click).left,
                    n = (b.positionAbs || b.position.absolute).top + (b.clickOffset || b.offset.click).top,
                    o = a.ui.isOver(n, m, k, i, c.proportions.height, c.proportions.width); return o;
            case "touch":
                return (g >= k && g <= l || h >= k && h <= l || g < k && h > l) && (e >= i && e <= j || f >= i && f <= j || e < i && f > j);
            default:
                return !1 } }, a.ui.ddmanager = { current: null, droppables: { "default": [] }, prepareOffsets: function(b, c) { var d = a.ui.ddmanager.droppables[b.options.scope] || [],
                e = c ? c.type : null,
                f = (b.currentItem || b.element).find(":data(droppable)").andSelf();
            g: for (var h = 0; h < d.length; h++) { if (d[h].options.disabled || b && !d[h].accept.call(d[h].element[0], b.currentItem || b.element)) continue; for (var i = 0; i < f.length; i++)
                    if (f[i] == d[h].element[0]) { d[h].proportions.height = 0; continue g }
                d[h].visible = d[h].element.css("display") != "none"; if (!d[h].visible) continue;
                e == "mousedown" && d[h]._activate.call(d[h], c), d[h].offset = d[h].element.offset(), d[h].proportions = { width: d[h].element[0].offsetWidth, height: d[h].element[0].offsetHeight } } }, drop: function(b, c) { var d = !1; return a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() { if (!this.options) return;!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, c)) }), d }, dragStart: function(b, c) { b.element.parents(":not(body,html)").bind("scroll.droppable", function() { b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c) }) }, drag: function(b, c) { b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() { if (this.options.disabled || this.greedyChild || !this.visible) return; var d = a.ui.intersect(b, this, this.options.tolerance),
                    e = !d && this.isover == 1 ? "isout" : d && this.isover == 0 ? "isover" : null; if (!e) return; var f; if (this.options.greedy) { var g = this.options.scope,
                        h = this.element.parents(":data(droppable)").filter(function() { return a.data(this, "droppable").options.scope === g });
                    h.length && (f = a.data(h[0], "droppable"), f.greedyChild = e == "isover" ? 1 : 0) }
                f && e == "isover" && (f.isover = 0, f.isout = 1, f._out.call(f, c)), this[e] = 1, this[e == "isout" ? "isover" : "isout"] = 0, this[e == "isover" ? "_over" : "_out"].call(this, c), f && e == "isout" && (f.isout = 0, f.isover = 1, f._over.call(f, c)) }) }, dragStop: function(b, c) { b.element.parents(":not(body,html)").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c) } } })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.core.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
jQuery.effects || function(a, b) {
    function c(b) { var c; return b && b.constructor == Array && b.length == 3 ? b : (c = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b)) ? [parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3], 10)] : (c = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b)) ? [parseFloat(c[1]) * 2.55, parseFloat(c[2]) * 2.55, parseFloat(c[3]) * 2.55] : (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b)) ? [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16)] : (c = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b)) ? [parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16), parseInt(c[3] + c[3], 16)] : (c = /rgba\(0, 0, 0, 0\)/.exec(b)) ? e.transparent : e[a.trim(b).toLowerCase()] }

    function d(b, d) { var e;
        do { e = (a.curCSS || a.css)(b, d); if (e != "" && e != "transparent" || a.nodeName(b, "body")) break;
            d = "backgroundColor" } while (b = b.parentNode); return c(e) }

    function h() { var a = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
            b = {},
            c, d; if (a && a.length && a[0] && a[a[0]]) { var e = a.length; while (e--) c = a[e], typeof a[c] == "string" && (d = c.replace(/\-(\w)/g, function(a, b) { return b.toUpperCase() }), b[d] = a[c]) } else
            for (c in a) typeof a[c] == "string" && (b[c] = a[c]); return b }

    function i(b) { var c, d; for (c in b) d = b[c], (d == null || a.isFunction(d) || c in g || /scrollbar/.test(c) || !/color/i.test(c) && isNaN(parseFloat(d))) && delete b[c]; return b }

    function j(a, b) { var c = { _: 0 },
            d; for (d in b) a[d] != b[d] && (c[d] = b[d]); return c }

    function k(b, c, d, e) { typeof b == "object" && (e = c, d = null, c = b, b = c.effect), a.isFunction(c) && (e = c, d = null, c = {}); if (typeof c == "number" || a.fx.speeds[c]) e = d, d = c, c = {}; return a.isFunction(d) && (e = d, d = null), c = c || {}, d = d || c.duration, d = a.fx.off ? 0 : typeof d == "number" ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, e = e || c.complete, [b, c, d, e] }

    function l(b) { return !b || typeof b == "number" || a.fx.speeds[b] ? !0 : typeof b == "string" && !a.effects[b] ? !0 : !1 }
    a.effects = {}, a.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(b, e) { a.fx.step[e] = function(a) { a.colorInit || (a.start = d(a.elem, e), a.end = c(a.end), a.colorInit = !0), a.elem.style[e] = "rgb(" + Math.max(Math.min(parseInt(a.pos * (a.end[0] - a.start[0]) + a.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[1] - a.start[1]) + a.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[2] - a.start[2]) + a.start[2], 10), 255), 0) + ")" } }); var e = { aqua: [0, 255, 255], azure: [240, 255, 255], beige: [245, 245, 220], black: [0, 0, 0], blue: [0, 0, 255], brown: [165, 42, 42], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgrey: [169, 169, 169], darkgreen: [0, 100, 0], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkviolet: [148, 0, 211], fuchsia: [255, 0, 255], gold: [255, 215, 0], green: [0, 128, 0], indigo: [75, 0, 130], khaki: [240, 230, 140], lightblue: [173, 216, 230], lightcyan: [224, 255, 255], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightyellow: [255, 255, 224], lime: [0, 255, 0], magenta: [255, 0, 255], maroon: [128, 0, 0], navy: [0, 0, 128], olive: [128, 128, 0], orange: [255, 165, 0], pink: [255, 192, 203], purple: [128, 0, 128], violet: [128, 0, 128], red: [255, 0, 0], silver: [192, 192, 192], white: [255, 255, 255], yellow: [255, 255, 0], transparent: [255, 255, 255] },
        f = ["add", "remove", "toggle"],
        g = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
    a.effects.animateClass = function(b, c, d, e) { return a.isFunction(d) && (e = d, d = null), this.queue(function() { var g = a(this),
                k = g.attr("style") || " ",
                l = i(h.call(this)),
                m, n = g.attr("class") || "";
            a.each(f, function(a, c) { b[c] && g[c + "Class"](b[c]) }), m = i(h.call(this)), g.attr("class", n), g.animate(j(l, m), { queue: !1, duration: c, easing: d, complete: function() { a.each(f, function(a, c) { b[c] && g[c + "Class"](b[c]) }), typeof g.attr("style") == "object" ? (g.attr("style").cssText = "", g.attr("style").cssText = k) : g.attr("style", k), e && e.apply(this, arguments), a.dequeue(this) } }) }) }, a.fn.extend({ _addClass: a.fn.addClass, addClass: function(b, c, d, e) { return c ? a.effects.animateClass.apply(this, [{ add: b }, c, d, e]) : this._addClass(b) }, _removeClass: a.fn.removeClass, removeClass: function(b, c, d, e) { return c ? a.effects.animateClass.apply(this, [{ remove: b }, c, d, e]) : this._removeClass(b) }, _toggleClass: a.fn.toggleClass, toggleClass: function(c, d, e, f, g) { return typeof d == "boolean" || d === b ? e ? a.effects.animateClass.apply(this, [d ? { add: c } : { remove: c }, e, f, g]) : this._toggleClass(c, d) : a.effects.animateClass.apply(this, [{ toggle: c }, d, e, f]) }, switchClass: function(b, c, d, e, f) { return a.effects.animateClass.apply(this, [{ add: c, remove: b }, d, e, f]) } }), a.extend(a.effects, { version: "1.8.24", save: function(a, b) { for (var c = 0; c < b.length; c++) b[c] !== null && a.data("ec.storage." + b[c], a[0].style[b[c]]) }, restore: function(a, b) { for (var c = 0; c < b.length; c++) b[c] !== null && a.css(b[c], a.data("ec.storage." + b[c])) }, setMode: function(a, b) { return b == "toggle" && (b = a.is(":hidden") ? "show" : "hide"), b }, getBaseline: function(a, b) { var c, d; switch (a[0]) {
                case "top":
                    c = 0; break;
                case "middle":
                    c = .5; break;
                case "bottom":
                    c = 1; break;
                default:
                    c = a[0] / b.height } switch (a[1]) {
                case "left":
                    d = 0; break;
                case "center":
                    d = .5; break;
                case "right":
                    d = 1; break;
                default:
                    d = a[1] / b.width } return { x: d, y: c } }, createWrapper: function(b) { if (b.parent().is(".ui-effects-wrapper")) return b.parent(); var c = { width: b.outerWidth(!0), height: b.outerHeight(!0), "float": b.css("float") },
                d = a("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                e = document.activeElement; try { e.id } catch (f) { e = document.body } return b.wrap(d), (b[0] === e || a.contains(b[0], e)) && a(e).focus(), d = b.parent(), b.css("position") == "static" ? (d.css({ position: "relative" }), b.css({ position: "relative" })) : (a.extend(c, { position: b.css("position"), zIndex: b.css("z-index") }), a.each(["top", "left", "bottom", "right"], function(a, d) { c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto") }), b.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), d.css(c).show() }, removeWrapper: function(b) { var c, d = document.activeElement; return b.parent().is(".ui-effects-wrapper") ? (c = b.parent().replaceWith(b), (b[0] === d || a.contains(b[0], d)) && a(d).focus(), c) : b }, setTransition: function(b, c, d, e) { return e = e || {}, a.each(c, function(a, c) { var f = b.cssUnit(c);
                f[0] > 0 && (e[c] = f[0] * d + f[1]) }), e } }), a.fn.extend({ effect: function(b, c, d, e) { var f = k.apply(this, arguments),
                g = { options: f[1], duration: f[2], callback: f[3] },
                h = g.options.mode,
                i = a.effects[b]; return a.fx.off || !i ? h ? this[h](g.duration, g.callback) : this.each(function() { g.callback && g.callback.call(this) }) : i.call(this, g) }, _show: a.fn.show, show: function(a) { if (l(a)) return this._show.apply(this, arguments); var b = k.apply(this, arguments); return b[1].mode = "show", this.effect.apply(this, b) }, _hide: a.fn.hide, hide: function(a) { if (l(a)) return this._hide.apply(this, arguments); var b = k.apply(this, arguments); return b[1].mode = "hide", this.effect.apply(this, b) }, __toggle: a.fn.toggle, toggle: function(b) { if (l(b) || typeof b == "boolean" || a.isFunction(b)) return this.__toggle.apply(this, arguments); var c = k.apply(this, arguments); return c[1].mode = "toggle", this.effect.apply(this, c) }, cssUnit: function(b) { var c = this.css(b),
                d = []; return a.each(["em", "px", "%", "pt"], function(a, b) { c.indexOf(b) > 0 && (d = [parseFloat(c), b]) }), d } }); var m = {};
    a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, b) { m[b] = function(b) { return Math.pow(b, a + 2) } }), a.extend(m, { Sine: function(a) { return 1 - Math.cos(a * Math.PI / 2) }, Circ: function(a) { return 1 - Math.sqrt(1 - a * a) }, Elastic: function(a) { return a === 0 || a === 1 ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin(((a - 1) * 80 - 7.5) * Math.PI / 15) }, Back: function(a) { return a * a * (3 * a - 2) }, Bounce: function(a) { var b, c = 4; while (a < ((b = Math.pow(2, --c)) - 1) / 11); return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((b * 3 - 2) / 22 - a, 2) } }), a.each(m, function(b, c) { a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function(a) { return 1 - c(1 - a) }, a.easing["easeInOut" + b] = function(a) { return a < .5 ? c(a * 2) / 2 : c(a * -2 + 2) / -2 + 1 } }) }(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.blind.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { a.effects.blind = function(b) { return this.queue(function() { var c = a(this),
                d = ["position", "top", "bottom", "left", "right"],
                e = a.effects.setMode(c, b.options.mode || "hide"),
                f = b.options.direction || "vertical";
            a.effects.save(c, d), c.show(); var g = a.effects.createWrapper(c).css({ overflow: "hidden" }),
                h = f == "vertical" ? "height" : "width",
                i = f == "vertical" ? g.height() : g.width();
            e == "show" && g.css(h, 0); var j = {};
            j[h] = e == "show" ? i : 0, g.animate(j, b.duration, b.options.easing, function() { e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue() }) }) } })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.bounce.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { a.effects.bounce = function(b) { return this.queue(function() { var c = a(this),
                d = ["position", "top", "bottom", "left", "right"],
                e = a.effects.setMode(c, b.options.mode || "effect"),
                f = b.options.direction || "up",
                g = b.options.distance || 20,
                h = b.options.times || 5,
                i = b.duration || 250; /show|hide/.test(e) && d.push("opacity"), a.effects.save(c, d), c.show(), a.effects.createWrapper(c); var j = f == "up" || f == "down" ? "top" : "left",
                k = f == "up" || f == "left" ? "pos" : "neg",
                g = b.options.distance || (j == "top" ? c.outerHeight(!0) / 3 : c.outerWidth(!0) / 3);
            e == "show" && c.css("opacity", 0).css(j, k == "pos" ? -g : g), e == "hide" && (g = g / (h * 2)), e != "hide" && h--; if (e == "show") { var l = { opacity: 1 };
                l[j] = (k == "pos" ? "+=" : "-=") + g, c.animate(l, i / 2, b.options.easing), g = g / 2, h-- } for (var m = 0; m < h; m++) { var n = {},
                    p = {};
                n[j] = (k == "pos" ? "-=" : "+=") + g, p[j] = (k == "pos" ? "+=" : "-=") + g, c.animate(n, i / 2, b.options.easing).animate(p, i / 2, b.options.easing), g = e == "hide" ? g * 2 : g / 2 } if (e == "hide") { var l = { opacity: 0 };
                l[j] = (k == "pos" ? "-=" : "+=") + g, c.animate(l, i / 2, b.options.easing, function() { c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments) }) } else { var n = {},
                    p = {};
                n[j] = (k == "pos" ? "-=" : "+=") + g, p[j] = (k == "pos" ? "+=" : "-=") + g, c.animate(n, i / 2, b.options.easing).animate(p, i / 2, b.options.easing, function() { a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments) }) }
            c.queue("fx", function() { c.dequeue() }), c.dequeue() }) } })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.clip.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { a.effects.clip = function(b) { return this.queue(function() { var c = a(this),
                d = ["position", "top", "bottom", "left", "right", "height", "width"],
                e = a.effects.setMode(c, b.options.mode || "hide"),
                f = b.options.direction || "vertical";
            a.effects.save(c, d), c.show(); var g = a.effects.createWrapper(c).css({ overflow: "hidden" }),
                h = c[0].tagName == "IMG" ? g : c,
                i = { size: f == "vertical" ? "height" : "width", position: f == "vertical" ? "top" : "left" },
                j = f == "vertical" ? h.height() : h.width();
            e == "show" && (h.css(i.size, 0), h.css(i.position, j / 2)); var k = {};
            k[i.size] = e == "show" ? j : 0, k[i.position] = e == "show" ? 0 : j / 2, h.animate(k, { queue: !1, duration: b.duration, easing: b.options.easing, complete: function() { e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue() } }) }) } })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.drop.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { a.effects.drop = function(b) { return this.queue(function() { var c = a(this),
                d = ["position", "top", "bottom", "left", "right", "opacity"],
                e = a.effects.setMode(c, b.options.mode || "hide"),
                f = b.options.direction || "left";
            a.effects.save(c, d), c.show(), a.effects.createWrapper(c); var g = f == "up" || f == "down" ? "top" : "left",
                h = f == "up" || f == "left" ? "pos" : "neg",
                i = b.options.distance || (g == "top" ? c.outerHeight(!0) / 2 : c.outerWidth(!0) / 2);
            e == "show" && c.css("opacity", 0).css(g, h == "pos" ? -i : i); var j = { opacity: e == "show" ? 1 : 0 };
            j[g] = (e == "show" ? h == "pos" ? "+=" : "-=" : h == "pos" ? "-=" : "+=") + i, c.animate(j, { queue: !1, duration: b.duration, easing: b.options.easing, complete: function() { e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue() } }) }) } })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.explode.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { a.effects.explode = function(b) { return this.queue(function() { var c = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3,
                d = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3;
            b.options.mode = b.options.mode == "toggle" ? a(this).is(":visible") ? "hide" : "show" : b.options.mode; var e = a(this).show().css("visibility", "hidden"),
                f = e.offset();
            f.top -= parseInt(e.css("marginTop"), 10) || 0, f.left -= parseInt(e.css("marginLeft"), 10) || 0; var g = e.outerWidth(!0),
                h = e.outerHeight(!0); for (var i = 0; i < c; i++)
                for (var j = 0; j < d; j++) e.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -j * (g / d), top: -i * (h / c) }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: g / d, height: h / c, left: f.left + j * (g / d) + (b.options.mode == "show" ? (j - Math.floor(d / 2)) * (g / d) : 0), top: f.top + i * (h / c) + (b.options.mode == "show" ? (i - Math.floor(c / 2)) * (h / c) : 0), opacity: b.options.mode == "show" ? 0 : 1 }).animate({ left: f.left + j * (g / d) + (b.options.mode == "show" ? 0 : (j - Math.floor(d / 2)) * (g / d)), top: f.top + i * (h / c) + (b.options.mode == "show" ? 0 : (i - Math.floor(c / 2)) * (h / c)), opacity: b.options.mode == "show" ? 1 : 0 }, b.duration || 500);
            setTimeout(function() { b.options.mode == "show" ? e.css({ visibility: "visible" }) : e.css({ visibility: "visible" }).hide(), b.callback && b.callback.apply(e[0]), e.dequeue(), a("div.ui-effects-explode").remove() }, b.duration || 500) }) } })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.fade.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { a.effects.fade = function(b) { return this.queue(function() { var c = a(this),
                d = a.effects.setMode(c, b.options.mode || "hide");
            c.animate({ opacity: d }, { queue: !1, duration: b.duration, easing: b.options.easing, complete: function() { b.callback && b.callback.apply(this, arguments), c.dequeue() } }) }) } })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.fold.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { a.effects.fold = function(b) { return this.queue(function() { var c = a(this),
                d = ["position", "top", "bottom", "left", "right"],
                e = a.effects.setMode(c, b.options.mode || "hide"),
                f = b.options.size || 15,
                g = !!b.options.horizFirst,
                h = b.duration ? b.duration / 2 : a.fx.speeds._default / 2;
            a.effects.save(c, d), c.show(); var i = a.effects.createWrapper(c).css({ overflow: "hidden" }),
                j = e == "show" != g,
                k = j ? ["width", "height"] : ["height", "width"],
                l = j ? [i.width(), i.height()] : [i.height(), i.width()],
                m = /([0-9]+)%/.exec(f);
            m && (f = parseInt(m[1], 10) / 100 * l[e == "hide" ? 0 : 1]), e == "show" && i.css(g ? { height: 0, width: f } : { height: f, width: 0 }); var n = {},
                p = {};
            n[k[0]] = e == "show" ? l[0] : f, p[k[1]] = e == "show" ? l[1] : 0, i.animate(n, h, b.options.easing).animate(p, h, b.options.easing, function() { e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue() }) }) } })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.highlight.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { a.effects.highlight = function(b) { return this.queue(function() { var c = a(this),
                d = ["backgroundImage", "backgroundColor", "opacity"],
                e = a.effects.setMode(c, b.options.mode || "show"),
                f = { backgroundColor: c.css("backgroundColor") };
            e == "hide" && (f.opacity = 0), a.effects.save(c, d), c.show().css({ backgroundImage: "none", backgroundColor: b.options.color || "#ffff99" }).animate(f, { queue: !1, duration: b.duration, easing: b.options.easing, complete: function() { e == "hide" && c.hide(), a.effects.restore(c, d), e == "show" && !a.support.opacity && this.style.removeAttribute("filter"), b.callback && b.callback.apply(this, arguments), c.dequeue() } }) }) } })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.pulsate.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { a.effects.pulsate = function(b) { return this.queue(function() { var c = a(this),
                d = a.effects.setMode(c, b.options.mode || "show"),
                e = (b.options.times || 5) * 2 - 1,
                f = b.duration ? b.duration / 2 : a.fx.speeds._default / 2,
                g = c.is(":visible"),
                h = 0;
            g || (c.css("opacity", 0).show(), h = 1), (d == "hide" && g || d == "show" && !g) && e--; for (var i = 0; i < e; i++) c.animate({ opacity: h }, f, b.options.easing), h = (h + 1) % 2;
            c.animate({ opacity: h }, f, b.options.easing, function() { h == 0 && c.hide(), b.callback && b.callback.apply(this, arguments) }), c.queue("fx", function() { c.dequeue() }).dequeue() }) } })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.scale.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { a.effects.puff = function(b) { return this.queue(function() { var c = a(this),
                d = a.effects.setMode(c, b.options.mode || "hide"),
                e = parseInt(b.options.percent, 10) || 150,
                f = e / 100,
                g = { height: c.height(), width: c.width() };
            a.extend(b.options, { fade: !0, mode: d, percent: d == "hide" ? e : 100, from: d == "hide" ? g : { height: g.height * f, width: g.width * f } }), c.effect("scale", b.options, b.duration, b.callback), c.dequeue() }) }, a.effects.scale = function(b) { return this.queue(function() { var c = a(this),
                d = a.extend(!0, {}, b.options),
                e = a.effects.setMode(c, b.options.mode || "effect"),
                f = parseInt(b.options.percent, 10) || (parseInt(b.options.percent, 10) == 0 ? 0 : e == "hide" ? 0 : 100),
                g = b.options.direction || "both",
                h = b.options.origin;
            e != "effect" && (d.origin = h || ["middle", "center"], d.restore = !0); var i = { height: c.height(), width: c.width() };
            c.from = b.options.from || (e == "show" ? { height: 0, width: 0 } : i); var j = { y: g != "horizontal" ? f / 100 : 1, x: g != "vertical" ? f / 100 : 1 };
            c.to = { height: i.height * j.y, width: i.width * j.x }, b.options.fade && (e == "show" && (c.from.opacity = 0, c.to.opacity = 1), e == "hide" && (c.from.opacity = 1, c.to.opacity = 0)), d.from = c.from, d.to = c.to, d.mode = e, c.effect("size", d, b.duration, b.callback), c.dequeue() }) }, a.effects.size = function(b) { return this.queue(function() { var c = a(this),
                d = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                e = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                f = ["width", "height", "overflow"],
                g = ["fontSize"],
                h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                i = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                j = a.effects.setMode(c, b.options.mode || "effect"),
                k = b.options.restore || !1,
                l = b.options.scale || "both",
                m = b.options.origin,
                n = { height: c.height(), width: c.width() };
            c.from = b.options.from || n, c.to = b.options.to || n; if (m) { var p = a.effects.getBaseline(m, n);
                c.from.top = (n.height - c.from.height) * p.y, c.from.left = (n.width - c.from.width) * p.x, c.to.top = (n.height - c.to.height) * p.y, c.to.left = (n.width - c.to.width) * p.x } var q = { from: { y: c.from.height / n.height, x: c.from.width / n.width }, to: { y: c.to.height / n.height, x: c.to.width / n.width } }; if (l == "box" || l == "both") q.from.y != q.to.y && (d = d.concat(h), c.from = a.effects.setTransition(c, h, q.from.y, c.from), c.to = a.effects.setTransition(c, h, q.to.y, c.to)), q.from.x != q.to.x && (d = d.concat(i), c.from = a.effects.setTransition(c, i, q.from.x, c.from), c.to = a.effects.setTransition(c, i, q.to.x, c.to));
            (l == "content" || l == "both") && q.from.y != q.to.y && (d = d.concat(g), c.from = a.effects.setTransition(c, g, q.from.y, c.from), c.to = a.effects.setTransition(c, g, q.to.y, c.to)), a.effects.save(c, k ? d : e), c.show(), a.effects.createWrapper(c), c.css("overflow", "hidden").css(c.from); if (l == "content" || l == "both") h = h.concat(["marginTop", "marginBottom"]).concat(g), i = i.concat(["marginLeft", "marginRight"]), f = d.concat(h).concat(i), c.find("*[width]").each(function() { var c = a(this);
                k && a.effects.save(c, f); var d = { height: c.height(), width: c.width() };
                c.from = { height: d.height * q.from.y, width: d.width * q.from.x }, c.to = { height: d.height * q.to.y, width: d.width * q.to.x }, q.from.y != q.to.y && (c.from = a.effects.setTransition(c, h, q.from.y, c.from), c.to = a.effects.setTransition(c, h, q.to.y, c.to)), q.from.x != q.to.x && (c.from = a.effects.setTransition(c, i, q.from.x, c.from), c.to = a.effects.setTransition(c, i, q.to.x, c.to)), c.css(c.from), c.animate(c.to, b.duration, b.options.easing, function() { k && a.effects.restore(c, f) }) });
            c.animate(c.to, { queue: !1, duration: b.duration, easing: b.options.easing, complete: function() { c.to.opacity === 0 && c.css("opacity", c.from.opacity), j == "hide" && c.hide(), a.effects.restore(c, k ? d : e), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue() } }) }) } })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.shake.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { a.effects.shake = function(b) { return this.queue(function() { var c = a(this),
                d = ["position", "top", "bottom", "left", "right"],
                e = a.effects.setMode(c, b.options.mode || "effect"),
                f = b.options.direction || "left",
                g = b.options.distance || 20,
                h = b.options.times || 3,
                i = b.duration || b.options.duration || 140;
            a.effects.save(c, d), c.show(), a.effects.createWrapper(c); var j = f == "up" || f == "down" ? "top" : "left",
                k = f == "up" || f == "left" ? "pos" : "neg",
                l = {},
                m = {},
                n = {};
            l[j] = (k == "pos" ? "-=" : "+=") + g, m[j] = (k == "pos" ? "+=" : "-=") + g * 2, n[j] = (k == "pos" ? "-=" : "+=") + g * 2, c.animate(l, i, b.options.easing); for (var p = 1; p < h; p++) c.animate(m, i, b.options.easing).animate(n, i, b.options.easing);
            c.animate(m, i, b.options.easing).animate(l, i / 2, b.options.easing, function() { a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments) }), c.queue("fx", function() { c.dequeue() }), c.dequeue() }) } })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.slide.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { a.effects.slide = function(b) { return this.queue(function() { var c = a(this),
                d = ["position", "top", "bottom", "left", "right"],
                e = a.effects.setMode(c, b.options.mode || "show"),
                f = b.options.direction || "left";
            a.effects.save(c, d), c.show(), a.effects.createWrapper(c).css({ overflow: "hidden" }); var g = f == "up" || f == "down" ? "top" : "left",
                h = f == "up" || f == "left" ? "pos" : "neg",
                i = b.options.distance || (g == "top" ? c.outerHeight(!0) : c.outerWidth(!0));
            e == "show" && c.css(g, h == "pos" ? isNaN(i) ? "-" + i : -i : i); var j = {};
            j[g] = (e == "show" ? h == "pos" ? "+=" : "-=" : h == "pos" ? "-=" : "+=") + i, c.animate(j, { queue: !1, duration: b.duration, easing: b.options.easing, complete: function() { e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue() } }) }) } })(jQuery);;
/*! jQuery UI - v1.8.24 - 2012-09-28
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.transfer.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a, b) { a.effects.transfer = function(b) { return this.queue(function() { var c = a(this),
                d = a(b.options.to),
                e = d.offset(),
                f = { top: e.top, left: e.left, height: d.innerHeight(), width: d.innerWidth() },
                g = c.offset(),
                h = a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({ top: g.top, left: g.left, height: c.innerHeight(), width: c.innerWidth(), position: "absolute" }).animate(f, b.duration, b.options.easing, function() { h.remove(), b.callback && b.callback.apply(c[0], arguments), c.dequeue() }) }) } })(jQuery);;