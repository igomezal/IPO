$(document).ready(function(){
    $('.ayuda').click(function(){
        $('.bocadillo').toggleClass('esconder');
    });
    var cuenta = 1;
    $(document).on('click', '.ejercicio', function () {
        console.log('Pulsado');
       var id = $(this).attr('id'); 
        console.log(id);
        if(id==cuenta){
            $('.texto-ayuda').html('¡Muy bien sigue asi!');
            $(this).remove();
            if(cuenta==1){
                $('.respuesta').html('Hi_op_ta_o ');
            }else if(cuenta==2){
                $('.respuesta').html('Hipop_ta_o ');
            }else if(cuenta==3){
                $('.respuesta').html('Hipopóta_o ');
            }else if(cuenta==4){
                $('.respuesta').html('Hipopótamo ');
                $('.letras').html('<img src="img/logo-fantastico.png"/>');
            }
            cuenta++;
        }else{
            $('.texto-ayuda').html('¡Sigue intentandolo!');
            $('.letras').html('<button type="button" class="btn btn-primary btn-lg ejercicio" id="2">P</button> <button type="button" class="btn btn-primary btn-lg ejercicio" id="1">H</button> <button type="button" class="btn btn-primary btn-lg ejercicio" id="4">M</button> <button type="button" class="btn btn-primary btn-lg ejercicio" id="3">Ó</button>');
            cuenta = 1;
            $('.respuesta').html('_i_op_ta_o ');
        }
    });
});