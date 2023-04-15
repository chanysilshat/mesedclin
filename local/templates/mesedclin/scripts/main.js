$(document).ready(function () {
    $(" input[name=phone] ").inputmask("+7 999 999-99-99");

    $(document).on("click",".dropdown-nav-header__btn",function(e){
        if($(this).hasClass("open")){
            $(this).removeClass('open');
            $('.dropdown-nav-header__list').removeClass('active');
        }else{
            $(this).addClass('open');
            $('.dropdown-nav-header__list').addClass('active');
        }
    });

    $(document).on("click",".menu",function() {
        if($(this).hasClass("open")){
            $(this).toggleClass("open");
            $(".mobile").toggleClass('visible');
            scrollLock.enablePageScroll();
            //$('#hidden-block').toggleClass('hidden-active');
        }else{
            $(this).toggleClass("open");
            $(".mobile").toggleClass('visible');
            scrollLock.disablePageScroll();
            //$('#hidden-block').toggleClass('hidden-active');
        }
    });


    $('.slider-main-screen').owlCarousel({
        items: 1,
        margin: 20,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"12\" viewBox=\"0 0 8 12\" fill=\"none\">\n" +
        "<path d=\"M7 11L2 6L7 1\" stroke=\"#2F2F2F\" stroke-width=\"2\"/>\n" +
        "</svg>","<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"12\" viewBox=\"0 0 8 12\" fill=\"none\">\n" +
        "<path d=\"M0.999999 1L6 6L1 11\" stroke=\"#2F2F2F\" stroke-width=\"2\"/>\n" +
        "</svg>"],
    });

    $('.slider-news-list').owlCarousel({
        items: 3,
        margin: 25,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"12\" viewBox=\"0 0 8 12\" fill=\"none\">\n" +
        "<path d=\"M7 11L2 6L7 1\" stroke=\"#2F2F2F\" stroke-width=\"2\"/>\n" +
        "</svg>","<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"12\" viewBox=\"0 0 8 12\" fill=\"none\">\n" +
        "<path d=\"M0.999999 1L6 6L1 11\" stroke=\"#2F2F2F\" stroke-width=\"2\"/>\n" +
        "</svg>"],
        responsive:{
            0:{
                items: 1,
            },
            760:{
                items: 2,
            },
            769:{
                items: 3,
            }
        }
    });

    $('.slider-clinic-specialists').owlCarousel({
        items: 4,
        margin: 10,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"12\" viewBox=\"0 0 8 12\" fill=\"none\">\n" +
        "<path d=\"M7 11L2 6L7 1\" stroke=\"#2F2F2F\" stroke-width=\"2\"/>\n" +
        "</svg>","<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"12\" viewBox=\"0 0 8 12\" fill=\"none\">\n" +
        "<path d=\"M0.999999 1L6 6L1 11\" stroke=\"#2F2F2F\" stroke-width=\"2\"/>\n" +
        "</svg>"],
        responsive:{
            0:{
                items: 1,
            },
            760:{
                items: 2,
            },
            1020:{
                items: 3,
            },
            1201:{
                items: 4,
            }
        }
    });

    $('.slider-clinic-card').owlCarousel({
        items: 1,
        margin: 20,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"9\" height=\"13\" viewBox=\"0 0 9 13\" fill=\"none\">\n" +
        "<path d=\"M7.5 12L2 6.5L7.5 1\" stroke=\"white\" stroke-width=\"2\"/>\n" +
        "</svg>","<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"9\" height=\"13\" viewBox=\"0 0 9 13\" fill=\"none\">\n" +
        "<path d=\"M1.5 1L7 6.5L1.5 12\" stroke=\"white\" stroke-width=\"2\"/>\n" +
        "</svg>"],
    });

    $('.slider-certificates').owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"12\" viewBox=\"0 0 8 12\" fill=\"none\">\n" +
        "<path d=\"M7 11L2 6L7 1\" stroke=\"#2F2F2F\" stroke-width=\"2\"/>\n" +
        "</svg>","<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"12\" viewBox=\"0 0 8 12\" fill=\"none\">\n" +
        "<path d=\"M0.999999 1L6 6L1 11\" stroke=\"#2F2F2F\" stroke-width=\"2\"/>\n" +
        "</svg>"],
        responsive:{
            0:{
                items: 3,
            },
            1020:{
                items: 4,
            },
            1201:{
                items: 5,
            }
        }
    });

    $('.slider-working').owlCarousel({
        items: 1,
        margin: 20,
        loop: true,
        nav: true,
        dots: false,
        touchDrag: false,
        mouseDrag: false,
        navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"16\" viewBox=\"0 0 10 16\" fill=\"none\">\n" +
        "<path d=\"M9 15L2 8L9 1\" stroke=\"black\" stroke-width=\"2\"/>\n" +
        "</svg>","<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"16\" viewBox=\"0 0 10 16\" fill=\"none\">\n" +
        "<path d=\"M1 1L8 8L1 15\" stroke=\"black\" stroke-width=\"2\"/>\n" +
        "</svg>"],
    });

    $(".address__item").not(":first").hide();

    $(".address__select").change(function() {
        $(".address__item").hide().eq($(this).val()).fadeIn();
    });

    $('.list-services__top .arrow').on('click', function () {
        $(this).parent().next('.list-services__body').slideToggle(300);
        $(this).parent().toggleClass('active');
    });
    $('.list-vacancy__top .arrow').on('click', function () {
        $(this).parent().next('.list-vacancy__body').slideToggle(300);
        $(this).parent().toggleClass('active');
    });

    $("form input[type=file]").change(function(){
        let filename = $(this).val().replace(/.*\\/, "");
        $(this).closest('form').find('.attribut label p').text(filename);
    });

    $(document).on("click",".clinic-about__content .clinic-about__more",function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(".clinic-about__text").removeClass('active');
            $(this).html('Читать больше');
        }else{
            $(this).addClass('active');
            $(".clinic-about__text").addClass('active');
            $(this).html('Свернуть');
        }
    });

    $('.sliderBA').anyImageComparisonSlider({
        initialPosition: 0.5,
        cursor: 'none',
    });

    $(document).ready(function() {
        $('.js-example-basic-single').select2();
    });

});
$(document).on('click', 'a.ani[href^="#"]', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -120
    }, 700);
});
