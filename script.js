$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scrollY > 20) {
            $('.navbar').addClass("sticky");

        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //Scroll Button
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    })
    //Menu button
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });
});
//Typing Animation
var typed = new Typed(".typing", {
    strings: ["Web Developer", "Python Developer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["Web Developer", "Python Developer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});