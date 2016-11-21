$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".zoom img").css({
        width: (100 + scroll / 5) + "%",
        top: -(scroll / 10) + "%",
        // Add Blur
        // "-webkit-filter": "blur(" + (scroll/200) + "px)",
        // filter: "blur(" + (scroll/200) + "px)"
    });
});