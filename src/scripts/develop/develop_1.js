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
    $('.days strong').addClass('two')
    }  
};


$(document).ready(function(){
    var stock_interval = setInterval(mytimer, 1000);

    $('.reviews-slider').slick({
        dots: true,
        arrows: false
    });

    $('.close').click(function() {
        $.fancybox.close();
    })
});

$(window).load(function(){

});

$(window).resize(function(){
    var w = $(window).width();
    if ( w < 480 ) {
        $('.location p br').addClass('remove');
    } else {
        $('.location p br').removeClass('remove');
    }
});