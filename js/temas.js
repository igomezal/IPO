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
            $(this).remove();
            if(cuenta==1){
                $('.respuesta').html('El <span style="color: blue">hi_op_ta_o</span> vive en África<span></span>');
                $('.feedback').html('<div class="acierto"<center><h1>¡Muy bien!</h1><center>');
            }else if(cuenta==2){
                $('.respuesta').html('El <span style="color: blue">hipop_ta_o</span> vive en África<span></span>');
            }else if(cuenta==3){
                $('.respuesta').html('El <span style="color: blue">hipopóta_o</span> vive en África<span></span>');
            }else if(cuenta==4){
                $('.respuesta').html('El <span style="color: blue">hipopótamo</span> vive en África<span></span>');
                $('.fantastico').html('<center><img src="img/star.png" style="width: 40px; height: 40px;"> <img src="img/star.png" style="width: 40px; height: 40px;"> <img src="img/star_fallo.png" style="width: 40px; height: 40px;"><br><br><img src="img/logo-fantastico.png" style="width: 500px; height: 150px;"/><br><br><a type="button" href="index.html" class="btn btn-primary btn-lg glyphicon glyphicon-home"> Inicio</a>&nbsp &nbsp &nbsp<a type="button" href="actividad.html" class="btn btn-warning btn-lg glyphicon glyphicon-repeat"> Reiniciar</a></center>');
            }
            cuenta++;
        }else{
            $('#myError').modal('show');
            
        }
    });
    $('#continuar').click(function(){
        $('#myError').modal('hide');
    });
});