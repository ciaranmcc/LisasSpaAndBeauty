
$(function () {

    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
        $(".fill-screen").css("width", window.innerWidth);
    });

    //add bootstrap scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 65
    });


    //smooth scrolling
    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 60
    },1500,'easeInOutExpo');
    event.preventDefault();
    });

    //Activate Wow.js
    new WOW().init();
});