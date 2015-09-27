(function ($) {
    function setHeight(el, height) {
        $.each(['padding-top', 'padding-bottom', 'margin-top', 'margin-bottom'], function (i, prop) {
            height -= parseInt(el.css(prop));
        });

        el.height(height);
    }

    function updateHeight(el, opts) {
        var siblings = el.siblings(),
            siblingsHeight = 0,
            emptySpace,
            fillElementsCount = 1 + siblings.filter(opts.selector).length;

        siblings.filter(':not(' + opts.selector + ')').each(function (i, subling) {
            siblingsHeight += $(subling).outerHeight(true);
        });

        emptySpace = (el.parent().height() - siblingsHeight) / fillElementsCount;

        setHeight(el, emptySpace);
    }

    function updateAll() {
        $($.fn.fillHeight.defaults.selector).fillHeight();
    }

    $.fn.fillHeight = function (options) {
        var opts = $.extend({}, $.fn.fillHeight.defaults, options);

        this.each(function(i, el) {
            updateHeight($(el), opts);
        });

        return this;
    };

    $.fn.fillHeight.defaults = {
        autoRun: true,
        selector: '.fill-height',
        updateEvent: 'fill-height-update'
    };

    $(document).ready(function() {
        if ($.fn.fillHeight.defaults.autoRun) {
            updateAll();
        }
        $(window).bind('resize', updateAll).bind($.fn.fillHeight.defaults.updateEvent, updateAll);
    });
})(jQuery);