'use strict';

/**
* Check scroll-bar width
* exemple ->   let scroll = $.scrollbarWidth();
*/
$.scrollbarWidth = function () {
    var a, b, c;if (c === undefined) {
        a = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b = a.children();c = b.innerWidth() - b.height(99).innerWidth();a.remove();
    }return c;
};

/**
* Scroll to the block
* @param {block} str - For what we click
* @param {targetBlock} str - to what we should scroll
*/
function scrollUp(block, targetBlock) {
    $(block).click(function (e) {
        var target = $(targetBlock).offset().top;

        $('body,html').stop().animate({ scrollTop: target }, 800);
        return false;

        e.preventDefault();
    });
}

/**
* Scroll animation
* @param {item} jquery obj - Wrapper for class 'animate-it';
*/
function animationBlock(item) {

    $(window).scroll(function () {
        checkForAnimate();
    });

    function checkForAnimate() {
        var bottomCheck = $(window).height() + $(window).scrollTop();
        var windowTop = $(window).scrollTop() + $(window).height() / 1.5;
        item.each(function () {
            if (windowTop > $(this).offset().top || bottomCheck > $('body').height() * 0.98) {

                var itemSect = $(this);
                var point = 0;
                itemSect.find('.animate-it').addClass('animated');

                var timer = setInterval(function () {
                    itemSect.find('.animate-delay').eq(point).addClass('animated');
                    point++;
                    if (itemSect.find('.animate-delay').length == point) {
                        clearInterval(timer);
                    }
                }, 200);
            }
        });
    }
    checkForAnimate();
}

/**
* GO TO href (smooth)
*/
function goTo() {
    $('.header-menu a').click(function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top - 65;
        $('body,html').animate({ scrollTop: target }, 500);
    });
}

/**
* Cut text script
* (Add to  div class "cut-text" width data-attr "data-cut"(length letters to show) )
*/
function cutText() {
    var filler = '...';
    var filler_length = filler.length;
    $('.cut-text').each(function () {
        var value = $(this).data('cut') - filler_length;
        var text = $.trim($(this).text());
        if (text.length > value && value > 0) {
            var newText = text.substring(0, value) + filler;
            $(this).text(newText);
        }
    });
};

/**
* Functional header butter
* @param {menuMobile} jquery obj - For what we click
* @param {toggleMenu} jquery obj - to what menu we will slideToggle
*/
function headeButer(menuMobile, toggleMenu) {
    if (menuMobile) {
        menuMobile.click(function (event) {
            if ($(window).width() < 1024 - $.scrollbarWidth()) {
                $(this).toggleClass('active');
                toggleMenu.stop().slideToggle();
            }
        });

        $(document).on('click touchstart', function (event) {
            if ($(window).width() < 1024 - $.scrollbarWidth()) {
                var div = toggleMenu;
                if (!div.is(event.target) && div.has(event.target).length === 0 && !menuMobile.is(event.target) && menuMobile.has(event.target).length === 0) {
                    toggleMenu.slideUp();
                    menuMobile.removeClass('active');
                }
            }
        });
    }
}

/**
* Expresion for numbers with spaces
* @param {x} number
* @return {string}
*/
function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

$(document).ready(function () {

    $('.footer_placeholder').height($('.footer').outerHeight());

    goTo();
});

$(window).resize(function () {

    $('.footer_placeholder').height($('.footer').outerHeight());
});
'use strict';

var end_day = new Date("14 January 2021 00:00");
// January, February, March, April, May, June, July, August, September, October, November, December

function mytimer() {
    var time_now = new Date(),
        time_delta = end_day - time_now;

    if (time_delta < 0) {
        time_delta = 0;
    }

    var time_day = Math.floor(time_delta / 86400000),
        time_ost = time_delta - Math.floor(time_delta / 86400000) * 86400000,
        time_hrs = Math.floor(time_ost / 3600000);
    time_ost = time_ost - Math.floor(time_ost / 3600000) * 3600000;
    var time_min = Math.floor(time_ost / 60000);
    time_ost = time_ost - Math.floor(time_ost / 60000) * 60000;
    var time_sec = Math.floor(time_ost / 1000);

    if (time_day < 10) {
        time_day = '0' + time_day;
    }
    if (time_hrs < 10) {
        time_hrs = '0' + time_hrs;
    }
    if (time_min < 10) {
        time_min = '0' + time_min;
    }
    if (time_sec < 10) {
        time_sec = '0' + time_sec;
    }
    $('.timer-content .sec strong').text(time_sec);
    $('.timer-content .hours strong').text(time_hrs);
    $('.timer-content .days strong').text(time_day);
    $('.timer-content .mins strong').text(time_min);
    if (time_delta == 0) {
        clearInterval(stock_interval);
        alert('Акция кончилась');
    }
    var dney = time_day.toString().length;
    if (dney == 3) {
        $('.days strong').addClass('three');
    } else if (dney == 2) {
        $('.days strong').addClass('two');
    }
};

$(document).ready(function () {
    var stock_interval = setInterval(mytimer, 1000);

    $('.reviews-slider').slick({
        dots: true,
        arrows: false
    });

    $('.close').click(function () {
        $.fancybox.close();
    });
});

$(window).load(function () {});

$(window).resize(function () {
    var w = $(window).width();
    if (w < 480) {
        $('.location p br').addClass('remove');
    } else {
        $('.location p br').removeClass('remove');
    }
});
"use strict";

$(document).ready(function () {});

$(window).load(function () {});

$(window).resize(function () {});
"use strict";

$(document).ready(function () {});

$(window).load(function () {});

$(window).resize(function () {});
"use strict";

$(document).ready(function () {});

$(window).load(function () {});

$(window).resize(function () {});
"use strict";

$(document).ready(function () {});

$(window).load(function () {});

$(window).resize(function () {});