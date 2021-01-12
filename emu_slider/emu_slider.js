/*
|------------------------------------------|
| MelonHTML5 - Emu Slider                  |
|------------------------------------------|
| @author:  Lee Le (lee@melonhtml5.com)    |
| @version: 1.02 (13 FEb 2013)             |
| @website: www.melonhtml5.com             |
|------------------------------------------|
*/

Emu_Slider = {
    _identifier: "melonhtml5_emu_slider",
    _use_fallback: !1,
    _types: {
        imac: { image: "images/iMac.png", orientation: "landscape", width: 1280, height: 1037, screen_top: 45, screen_bottom: 318, screen_left: 46, screen_right: 46 },
        mac_cinema: { image: "images/Mac_Cinema.png", orientation: "landscape", width: 992, height: 836, screen_top: 45, screen_bottom: 227, screen_left: 47, screen_right: 47 },
        macbook_pro: {
            image: "/emu_slider/macbook.png",
            orientation: "landscape",
            width: 1280,
            height: 719,
            screen_top: 45,
            screen_bottom: 66,
            screen_left: 152,
            screen_right: 153
        },
        ipad: { image: "images/iPad.png", orientation: "portrait", width: 800, height: 1021, screen_top: 74, screen_bottom: 75, screen_left: 75, screen_right: 69 },
        iphone: { image: "images/iPhone.png", orientation: "portrait", width: 600, height: 1263, screen_top: 185, screen_bottom: 176, screen_left: 47, screen_right: 45 },
        lumia900: { image: "images/Lumia900.png", orientation: "portrait", width: 600, height: 1072, screen_top: 150, screen_bottom: 150, screen_left: 80, screen_right: 80 },
        galaxys3: {
            image: "images/GalaxyS3.png",
            orientation: "portrait",
            width: 600,
            height: 1165,
            screen_top: 145,
            screen_bottom: 137,
            screen_left: 41,
            screen_right: 43
        }
    },
    _containers: null,
    _animations: "fade scale slide rotate blind open".split(" "),
    _ease: "easeOutBounce",
    init: function() {
        $.browser.msie && (Emu_Slider._use_fallback = !0);
        Emu_Slider._cacheElements();
        Emu_Slider._build()
    },
    _build: function() {
        Emu_Slider._containers.each(function() {
            var b = $(this),
                a = b.data("type");
            if (a = Emu_Slider._types[a]) {
                var e = b.data("width"),
                    d = e / (a.width / a.height);
                b.width(e).height(d).css("background-image",
                    'url("' + a.image + '")');
                b.addClass(b.data("animation"));
                a = $("<div>").css({ top: Math.floor(d / a.height * a.screen_top), bottom: Math.floor(d / a.height * a.screen_bottom), left: Math.floor(e / a.width * a.screen_left), right: Math.floor(e / a.width * a.screen_right) }).addClass("screen").appendTo(b);
                $("<div>").addClass("indicator").appendTo(a);
                var c = $("<div>").addClass("scroller").appendTo(a),
                    f = [],
                    h = 0;
                b.children("a").each(function(a) {
                    var d = $(this).attr("href");
                    f.push(d);
                    $(this).remove();
                    0 === a && Emu_Slider._buildPicDiv(b, d).appendTo(c);
                    a = new Image;
                    a.src = d;
                    a.complete ? h++ : (b.addClass("loading"), a.onload = function() { h++ })
                });
                b.data("images", f);
                b.data("index", 0);
                var g = function() { h == f.length ? (b.removeClass("loading"), Emu_Slider._slideshow(b)) : setTimeout(g, 1E3) };
                setTimeout(g, 1E3)
            }
        })
    },
    _buildPicDiv: function(b, a) {
        var e = b.children(".screen"),
            d = $("<div>").html('<img src="' + a + '" />'),
            c = new Image;
        c.src = a;
        c.complete ? c.width / c.height > e.width() / e.height() ? d.addClass("landscape") : d.addClass("portrait") : c.onload = function() {
            this.width / this.height > e.width() /
                e.height() ? d.addClass("landscape") : d.addClass("portrait")
        };
        return d
    },
    _progress: function(b) {
        var a = b.find("div.indicator");
        a.animate({ width: 0 }, b.data("duration"), function() { a.width("100%") })
    },
    _slideshow: function(b) {
        Emu_Slider._progress(b);
        setTimeout(function() { Emu_Slider._next(b) }, b.data("duration"))
    },
    _next: function(b) {
        if (b.parent().length) {
            var a = b.data("images"),
                e = b.data("index") === a.length - 1 ? 0 : b.data("index") + 1,
                d = b.find("div.scroller"),
                c = d.children("div").first(),
                f = Emu_Slider._buildPicDiv(b, a[e]),
                h = b.data("animation");
            "random" === h && (a = Math.floor(Math.random() * Emu_Slider._animations.length), h = Emu_Slider._animations[a], b.removeClass("random " + Emu_Slider._animations.join(" ")), b.addClass(h));
            var g = function() {
                c.remove();
                Emu_Slider._slideshow(b)
            };
            setTimeout(function() {
                switch (h) {
                    case "fade":
                        f.insertBefore(c);
                        Emu_Slider._use_fallback ? c.fadeOut(1E3) : c.css({ opacity: 0, transform: "scale(2)" });
                        setTimeout(g, 1E3);
                        break;
                    case "scale":
                        f.insertBefore(c);
                        Emu_Slider._use_fallback ? c.animate({
                            width: 10,
                            height: 10,
                            left: "25%",
                            top: "50%",
                            opacity: 0
                        }, 1E3) : c.css({ transform: "scale(0) rotateZ(180deg)", opacity: 0 });
                        setTimeout(g, 1E3);
                        break;
                    case "rotate":
                        f.insertBefore(c);
                        Emu_Slider._use_fallback ? c.fadeOut(1E3) : c.css({ opacity: 0, "margin-left": c.width(), transform: "rotateZ(360deg)" });
                        setTimeout(g, 1E3);
                        break;
                    case "blind":
                        f.insertBefore(c);
                        Emu_Slider._use_fallback ? c.animate({ top: "-100%", opacity: 0 }, 1E3) : c.css({ opacity: 0, top: "-100%" });
                        setTimeout(g, 1E3);
                        break;
                    case "slide":
                        var a = b.data("ease");
                        a || (a = Emu_Slider._ease);
                        f.insertAfter(c);
                        d.animate({ "margin-left": "-100%" }, 1E3, a, function() {
                            d.css("margin-left", 0);
                            g()
                        });
                        break;
                    case "open":
                        f.insertBefore(c);
                        c.children("img").hide();
                        var a = $("<div>").addClass("open1").html('<img src="' + c.children().attr("src") + '" />').appendTo(c),
                            j = $("<div>").addClass("open2").html('<img src="' + c.children().attr("src") + '" />').appendTo(c);
                        c.hasClass("portrait") ? Emu_Slider._use_fallback ? (a.animate({ left: "-50%" }, 1E3), j.animate({ right: "-50%" }, 1E3)) : (c.width(), a.css("left", "-50%"), j.css("right", "-50%")) : Emu_Slider._use_fallback ?
                            (a.animate({ top: "-50%" }, 1E3), j.animate({ bottom: "-50%" }, 1E3)) : (c.width(), a.css("top", "-50%"), j.css("bottom", "-50%"));
                        setTimeout(g, 1E3)
                }
                b.data("index", e)
            }, 0)
        }
    },
    _cacheElements: function() { this._containers = $("div." + this._identifier) },
    Events: function() {}
};
$(document).ready(Emu_Slider.init);