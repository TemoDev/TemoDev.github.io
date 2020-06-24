$(document).ready(function () {

    $(window).scroll(function () {
        let scrollValue = $(window).scrollTop();

        if (scrollValue > 100) {
            $('.element-1 img').css('transform', 'rotate(' + scrollValue / 25 + 'deg)');
            $('.element-1').css('top', scrollValue / 5 + 'px');

            $('.element-2 img').css('transform', 'rotate(' + -(scrollValue / 7) + 'deg)');
            $('.element-2').css('top', 50 + scrollValue / 3 + 'px');

            $('.element-3 img').css('transform', 'rotate(' + scrollValue / 5 + 'deg)');
            $('.element-3').css('top', 500 + -(scrollValue / 2) + 'px');

            $('.element-4 img').css('transform', 'rotate(' + -(scrollValue / 5) + 'deg)');
            $('.element-4').css('top', 700 + -(scrollValue / 2) + 'px');

            $('.element-5 img').css('transform', 'rotate(' + -(scrollValue / 5) + 'deg)');
            $('.element-5').css('top', 20 + scrollValue / 5 + 'px');

        }
    })
})