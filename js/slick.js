// slide show with slick
$(function() {
    $('.main__contents__slide-show').slick( {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        infinite: true,
        fade: true,
        swipe: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        asNavFor: '.main__contents__slide-show__thumb',
    });
    $('.main__contents__slide-show__thumb').slick({
        asNavFor: '.main__contents__slide-show',
        focusOnSelect: true,
        slidesToShow:3,
        slidesToScroll:1,
        dots: false,
        arrows: false,
    });
});
