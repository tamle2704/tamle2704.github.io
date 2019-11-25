//---------------------------CAROUSEL------------------------------
$('.banner-index').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    speed: 1000,
    dots: true,
    arrows: true
});
$('.trainer-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 700,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }]
});
$('.stories').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    dots: true,
    arrows: true
});
$('.blog-new').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }]
});
$('.client-say').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    dots: true,
    arrows: true
});
$('.images').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true
});
//----------------------BACK-TO-TOP-----------------------
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

// -------------------FILTER-----------------------
$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});

//------------HOVER CARD BLOG -----------------
