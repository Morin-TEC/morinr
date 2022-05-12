window.onload = function() {

    document.getElementById("btnajax").addEventListener("click",pedirHeader);
    document.getElementById("btnreset").addEventListener("click",iniciarHeader);
    
    
    function pedirHeader() {
    
    var solicitud = new XMLHttpRequest();          //Crear objeto XMLHttpRequest
    
    solicitud.onreadystatechange = function() {   // En esta propiedad declaramos la funcion a ejecutar
                                                // cuando cambie el status del objeto XMLHttpRequest
    
        if (solicitud.readyState == 4 && solicitud.status == 200) {                 // La respueta esta lista
            document.getElementById("MyDiv").innerHTML = solicitud.responseText;  // La propiedad responseText tiene la respuesta en texto
    }};
    
    solicitud.open("GET", "Ajax.php", true);
    solicitud.send();
    
     }
    
    function iniciarHeader() {
        document.getElementById("MyDiv").innerHTML = "<h2>Este es un Header nivel 2<h2>"; 
    }
    
    } 
$(document).ready(function() {
    $('#btnjson').click(function() {
        $.post('registro.php',{},function(data){
    
              console.log(data);
              $('#inputTituloVideojuego').val(data.inputTituloVideojuego);
              $('#Genero').val(data.Genero);
              $('#inputPrecio').val(data.inputPrecio);
              $('#Fecha').val(data.Fecha);
    
          },'json');
    });
    });
    