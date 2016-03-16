$(document).ready(function () {
    $('#enter').click(function () {
        var nombre = $('#user_name').val();
        var contraseña = $('#user_pass').val();
        if(contraseña == 'pass' && nombre == 'profesor'){
            window.open('home.html', '_self');
        }else {
            $('#error').html('Contraseña incorrecta');
        }
    });
});