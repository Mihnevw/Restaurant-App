import $ from 'jquery';

(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(import('jquery'));
    } else {
        factory($);
    }
})(function ($) {

    // Запазване на оригиналния "swing" easing като "jswing"
    if (typeof $.easing !== 'undefined') {
        $.easing['jswing'] = $.easing['swing'];
    }

    var pow = Math.pow,
        sqrt = Math.sqrt,
        sin = Math.sin,
        cos = Math.cos,
        PI = Math.PI,
        c1 = 1.70158,
        c2 = c1 * 1.525,
        c3 = c1 + 1,
        c4 = (2 * PI) / 3,
        c5 = (2 * PI) / 4.5;

    function bounceOut(x) {
        var n1 = 7.5625,
            d1 = 2.75;
        if (x < 1 / d1) {
            return n1 * x * x;
        } else if (x < 2 / d1) {
            return n1 * (x -= (1.5 / d1)) * x + .75;
        } else if (x < 2.5 / d1) {
            return n1 * (x -= (2.25 / d1)) * x + .9375;
        } else {
            return n1 * (x -= (2.625 / d1)) * x + .984375;
        }
    }

    $.extend($.easing, {
        def: 'easeOutQuad',
        swing: function (x) {
            return $.easing[$.easing.def](x);
        },
        easeInQuad: function (x) {
            return x * x;
        },
        easeOutQuad: function (x) {
            return 1 - (1 - x) * (1 - x);
        },
        easeInOutQuad: function (x) {
            return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
        },
        easeInCubic: function (x) {
            return x * x * x;
        },
        easeOutCubic: function (x) {
            return 1 - pow(1 - x, 3);
        },
        easeInOutCubic: function (x) {
            return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
        },
        easeInBounce: function (x) {
            return 1 - bounceOut(1 - x);
        },
        easeOutBounce: bounceOut,
        easeInOutBounce: function (x) {
            return x < 0.5 ?
                (1 - bounceOut(1 - 2 * x)) / 2 :
                (1 + bounceOut(2 * x - 1)) / 2;
        }
    });

});
