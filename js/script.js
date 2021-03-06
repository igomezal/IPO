$(document).ready(function () {
    var tamaño = 0;
    var contraseña = '';
    $('.presentacion').click(function () {
        console.log('pulsado');
        $('.texto-ayudap2').html('Introduce tu contraseña');
    });
    $('.ayuda').click(function () {
        $('.bocadillo').toggleClass('esconder');
    });
    $('div[type=button]').click(function () {
        if ($(this).hasClass('btn-negro') && tamaño < 3) {
            $('.pass').append(' <div class="btn btn-negro btn-lg introducida"></div>');
            contraseña += 'negro';
            tamaño++;
        } else if ($(this).hasClass('btn-danger') && tamaño < 3) {
            $('.pass').append(' <div class="btn btn-danger btn-lg introducida"></div>');
            contraseña += 'rojo';
            tamaño++;
        } else if ($(this).hasClass('btn-warning') && tamaño < 3) {
            $('.pass').append(' <div class="btn btn-warning btn-lg introducida"></div>');
            contraseña += 'naranja';
            tamaño++;
        } else if ($(this).hasClass('btn-success') && tamaño < 3) {
            $('.pass').append(' <div class="btn btn-success btn-lg introducida"></div>');
            contraseña += 'verde';
            tamaño++;
        } else if ($(this).hasClass('btn-primary') && tamaño < 3) {
            $('.pass').append(' <div class="btn btn-primary btn-lg introducida"></div>');
            contraseña += 'azul';
            tamaño++;
        } else if ($(this).hasClass('btn-amarillo') && tamaño < 3) {
            $('.pass').append(' <div class="btn btn-amarillo btn-lg introducida"></div>');
            contraseña += 'amarillo';
            tamaño++;
        } else if ($(this).hasClass('btn-morado') && tamaño < 3) {
            $('.pass').append(' <div class="btn btn-morado btn-lg introducida"></div>');
            contraseña += 'morado';
            tamaño++;
        } else if ($(this).hasClass('btn-rosa') && tamaño < 3) {
            $('.pass').append(' <div class="btn btn-rosa btn-lg introducida"></div>');
            contraseña += 'rosa';
            tamaño++;
        } else if ($(this).hasClass('btn-default') && tamaño < 3) {
            $('.pass').append(' <div class="btn btn-default btn-lg introducida"></div>');
            contraseña += 'blanco';
            tamaño++;
        }
        if (tamaño === 1) {
            $('.pass').after('&nbsp; <div class="btn btn-default glyphicon glyphicon-remove borrar" style="color:red;"></div>');
        }
    });
    $('button[data-dismiss=modal]').click(function () {
        $('.pass').html('');
        $('.texto-ayudap2').html('Selecciona tu avatar');
        contraseña = '';
        tamaño = 0;
    });
    $('body').click(function () {
        if (!($('body').hasClass('modal-open'))) {
            $('.pass').html('');
            contraseña = '';
            tamaño = 0;
        }
    });
    $('.entrar').click(function () {
        if (contraseña === 'rojoazulnaranja') {
            window.open('temas.html', '_self');
        } else {
            $('.texto-ayudap2').html('Contraseña incorrecta');
            $('.contraseña_erronea').html('<center><p>La contraseña introducida no es la correcta.</p></center>');
            $('.bocadillo').removeClass('esconder');
        }
    });
    $('.pass').click(function () {
        $('.pass').html('');
        $('.borrar').remove();
        contraseña = '';
        $('.contraseña_erronea').html('');
        tamaño = 0;
    });
    $(document).on('click', '.borrar', function () {
        $('.pass').html('');
        $('.borrar').remove();
        contraseña = '';
        $('.contraseña_erronea').html('');
        tamaño = 0;
    });
});