$(document).ready(function () {
    $('#enter').click(function () {
        entrar();
    });
    $('#user_name').keyup(function (event) {
        if (event.which == 13) {
            entrar();
        }
    });
    $('#user_pass').keyup(function (event) {
        if (event.which == 13) {
            entrar();
        }
    });
});

var entrar = function(){
    var nombre = $('#user_name').val();
    var contraseña = $('#user_pass').val();
    if(contraseña == 'pass' && nombre == 'profesor'){
        window.open('home.html', '_self');
    }else {
        $('#error').html('Contraseña incorrecta <br><br>');
    }
}


