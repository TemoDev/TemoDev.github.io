$(document).ready(function () {
    $('.burger').click(function () {
        $('.nav__links').toggleClass('nav__active');

        $('.line1').toggleClass('burger__exit1');
        $('.line2').toggleClass('burger__exit2');
        $('.line3').toggleClass('burger__exit3');
    });

    // Product Filter Search
    var searchBar = $('.searchMe');
    searchBar.on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".product__item").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

            if ($(this).text().toLowerCase().indexOf(value) == -1) {
                $('.ifClear').show();
            } else {
                $('.ifClear').hide();
            }
        });
    });

    // product filter navBar
    $('.product__type').click(function (e) {

        $('.searchMe').val('');
        $('.ifClear').hide();

        $(".product__item").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf($(e.target).text().toLowerCase()) > -1)
        });

        if ($(e.target).text().toLowerCase() == 'all') {
            $(".product__item").css('display', 'block');
        }

    })
})