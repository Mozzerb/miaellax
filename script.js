$(window).scroll(function () {
    if ($(window).scrollTop() >= 60) {
        $('.navbar').css('background','#000000');
    } else {
        $('.navbar').css('background','transparent');
    }
});

