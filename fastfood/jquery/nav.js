$(document).ready(function () {
    $('.burger').click(function () {
        $('.nav__links').toggleClass('nav__active');

        $('.line1').toggleClass('burger__exit1');
        $('.line2').toggleClass('burger__exit2');
        $('.line3').toggleClass('burger__exit3');
    })
    $(window).scroll(function () {
        var scrollValue = $(window).scrollTop();

        if (scrollValue > 0) {
            $('nav').css('background', 'rgba(0, 0, 0, 1)');
        } else {
            $('nav').css('background', 'rgba(0, 0, 0, .8)');
        }

        // active navv
        let navLink = $('.nav__link');

        if (scrollValue >= 0 && scrollValue < 450) {
            $(navLink[0]).addClass('nav__link-active');
        } else if (scrollValue >= 500 && scrollValue < 1100) {
            $(navLink[1]).addClass('nav__link-active');
        } else if (scrollValue >= 1600) {
            $(navLink[3]).addClass('nav__link-active');
        } else {
            navLink.removeClass('nav__link-active');
        }

    })
})