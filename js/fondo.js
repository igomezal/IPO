$(document).ready(function () {
    $('.background-color-green').click(function () {
        $('body').css("background-color", "92d36d");
        $('.background-color-green').addClass('active');
        $('.background-color-blue').removeClass('active');
        $('.background-color-orange').removeClass('active');
    });

    $('.background-color-blue').click(function () {
        $('body').css("background-color", "#337ab7");
        $('.background-color-blue').addClass('active');
        $('.background-color-green').removeClass('active');
        $('.background-color-orange').removeClass('active');
    });

    $('.background-color-orange').click(function () {
        $('body').css("background-color", "#f0ad4e");
        $('.background-color-orange').addClass('active');
        $('.background-color-green').removeClass('active');
        $('.background-color-blue').removeClass('active');
    });

});