$(document).ready(function(){
    $('.contenido').css('display','none');
    $('#seleccionar').change(function(){
       opt = $(this).val();
       if(opt=="primeroa"){
           $('.mostrar-clase').html('<a href="alumnos-clase.html"><i class="fa fa-list"></i>  Ver alumnos</a>');
          $('.contenido').css('display','inline');
       }
   }); 
});