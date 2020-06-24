$('.news__more').click(function () {
    $('.news__wrapper').slideToggle();

    var button = $(this);
    button.text(button.text() == "Show more" ? "Show less" : "Show more")
})