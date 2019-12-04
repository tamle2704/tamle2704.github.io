//---------------------------CAROUSEL------------------------------
$('.banner-index').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    speed: 1000,
    arrows: true,
    dots: false
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
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 1,
    slidesToScroll: 3,
    arrows: true,
});
$(".testimonial-reel").slick({
    centerMode: true,
    centerPadding: "40px",
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    lazyLoad: "ondemand",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                centerMode: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
$('.blog-new').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1,
                dots: false
            }
        }]
});
$('.images').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
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
            breakpoint: 800,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }]
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

// -------------------FILTER-COURSE----------------------
$(document).ready(function () {

    $(".filter-course").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('3000');
        }
        else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    $('.filter-course').click(function () {
        $('.active-button').removeClass('active-button');
        $(this).addClass('active-button');
    });
});

// -------------------FILTER-SCHEDULE----------------------
$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "monday") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('3000');
        }
        else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    $('.filter-button').click(function () {
        $('.active-button').removeClass('active-button');
        $(this).addClass('active-button');
    });
});

//-----------------------------VIDEO-MODAL------------------
$(document).ready(function () {
    autoPlayYouTubeModal();
});

function autoPlayYouTubeModal() {
        var trigger = $('.videoModalTriger');
    trigger.click(function () {
        var theModal = $(this).data("target");
        var videoSRC = $(this).attr("data-videoModal");
        var videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal).on('hidden.bs.modal', function (e) {
            $(theModal + ' iframe').attr('src', '');
        });
    });
};
    
    


