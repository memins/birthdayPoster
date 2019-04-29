$(function () {
    var checkbox = $('#checkbox'),
        path = $('#path'),
        bow = $('#bow'),
        male = $('#male');

    checkbox.on('change', function () {
        if ($(this).is(':checked')) {
            male.removeClass('ma');
            setTimeout(function () {
                path.addClass('fe');
                male.addClass('fe');
                bow.addClass('fe');
            }, 390);
        } else {
            male.addClass('ma');
            setTimeout(function () {
                path.removeClass('fe');
                male.removeClass('fe');
                bow.removeClass('fe');
            }, 390);
        }
    });
});