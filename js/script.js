$(document).ready(function () {
    var tamaño = 0;
    var contraseña = '';
    $('.presentacion').click(function () {
        console.log('pulsado');
        $('.texto-ayuda').html('Introduce tu contraseña');
    });
    $('.ayuda').click(function () {
        $('.bocadillo').toggleClass('esconder');
    });
    $('div[type=button]').click(function () {
        if ($(this).hasClass('btn-negro') && tamaño < 4) {
            $('.pass').append(' <div class="btn btn-negro btn-lg introducida"></div>');
            contraseña += 'negro';
            tamaño++;
        } else if ($(this).hasClass('btn-danger') && tamaño < 4) {
            $('.pass').append(' <div class="btn btn-danger btn-lg introducida"></div>');
            contraseña += 'rojo';
            tamaño++;
        } else if ($(this).hasClass('btn-warning') && tamaño < 4) {
            $('.pass').append(' <div class="btn btn-warning btn-lg introducida"></div>');
            contraseña += 'naranja';
            tamaño++;
        } else if ($(this).hasClass('btn-success') && tamaño < 4) {
            $('.pass').append(' <div class="btn btn-success btn-lg introducida"></div>');
            contraseña += 'verde';
            tamaño++;
        } else if ($(this).hasClass('btn-primary') && tamaño < 4) {
            $('.pass').append(' <div class="btn btn-primary btn-lg introducida"></div>');
            contraseña += 'azul';
            tamaño++;
        } else if ($(this).hasClass('btn-amarillo') && tamaño < 4) {
            $('.pass').append(' <div class="btn btn-amarillo btn-lg introducida"></div>');
            contraseña += 'amarillo';
            tamaño++;
        } else if ($(this).hasClass('btn-morado') && tamaño < 4) {
            $('.pass').append(' <div class="btn btn-morado btn-lg introducida"></div>');
            contraseña += 'morado';
            tamaño++;
        } else if ($(this).hasClass('btn-rosa') && tamaño < 4) {
            $('.pass').append(' <div class="btn btn-rosa btn-lg introducida"></div>');
            contraseña += 'rosa';
            tamaño++;
        } else if ($(this).hasClass('btn-default') && tamaño < 4) {
            $('.pass').append(' <div class="btn btn-default btn-lg introducida"></div>');
            contraseña += 'blanco';
            tamaño++;
        }
    });
    $('button[data-dismiss=modal]').click(function () {
        $('.pass').html('');
        $('.texto-ayuda').html('Selecciona tu avatar');
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
        if (contraseña === 'rojoazulnaranjarojo') {
            window.open('temas.html', '_self');
        } else {
            $('.texto-ayuda').html('Contraseña incorrecta');
            $('.bocadillo').removeClass('esconder');
        }
    });
    $('.pass').click(function () {
        $('.pass').html('');
        contraseña = '';
        tamaño = 0;
    });
});