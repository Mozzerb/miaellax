$(window).scroll(function () {
    if ($(window).scrollTop() >= 60) {
        $('.navbar').css('background','#FFFFFF');
    } else {
        $('.navbar').css('background','transparent');
    }
});

