$(document).ready(function () {
    $('.del').on('click', function () {
        $(this).parents('tr').remove();
    });


    $('.header .btn').on('click', function () {
        event.preventDefault();
        $('body').toggleClass('active');
    });
});