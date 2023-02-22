masonry();

$(function () {
    offCanvas();
    makeImagesResponsive();
});

function makeImagesResponsive() {
    $("img").addClass("img-responsive");
}

function masonry() {
    var $grid = $('.grid').masonry({
        itemSelector: ".masonry-item"
    });
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });
}

function offCanvas() {
    $(document).ready(function () {
        $('[data-toggle="offcanvas"]').click(function () {
            $('.row-offcanvas').toggleClass('active')
        });
    });
}