$(document).ready(function () {
    $(".hamburger-menu").click(() => {
        $(".hamburger-menu").toggleClass("open");
        $("#menu-wrapper").slideToggle(1000);
        $(".trending").fadeToggle(2000);
    });
    // carousel js start
    $('.owl-carousel').owlCarousel({
        margin: 10,
        dots: false,
        nav: true,
        mousedrag: true,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    // carousel js end
});

