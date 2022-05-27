$(document).ready(function() {
    $('#btnProm').click(function()
        {
            let promesa = new Promise(function(resolve,reject) {
                var solicitud = new XMLHttpRequest();
                solicitud.onreadystatechange = function(){
                    if(solicitud.readyState == 4 && solicitud.status == 200){
                        resolve(solicitud.response);
                    }
                }
                solicitud.open("GET","getHeader.txt",true);
                solicitud.send();
            });
    
            promesa.then(function(value) {document.getElementById("enca").innerHTML = value;});
        });
    });

    $(document).ready(function() {
        $('#btnJsonFetch').click(function()
            {
        let promesa  = fetch("getRegistro.php");
    
        // Se puede hacer esto> promesa.then(function(respuesta) {console.log(respuesta); console.log(respuesta.json() ); });
        // Promesa con funcion flecha
         promesa.then( respuesta => respuesta.json() )
                .then( datos => console.log(datos) );
    });
});

    $(document).ready(function() {
        $('#btnjson').click(function() {
            $.post('getRegistro.php',{},function(data){
        
                  console.log(data);
                  $('#inputTituloVideojuego').val(data.inputTituloVideojuego);
                  $('#Genero').val(data.Genero);
                  $('#inputPrecio').val(data.inputPrecio);
                  $('#Fecha').val(data.Fecha);
        
              },'json');
        });
        });
        
        $(document).ready(function(){
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Nice, you triggered this alert message!', 'success')
  })
};
});

$(document).ready(function(){
    $('#btn2').click(function(){
        $('#exampleModal').modal('show');
    });

    $('#btnConsultaBD').click(function() {
        let parid=prompt("Teclee el ID a consultar");
    
        $.post('getRegistroDB.php',{par1:parid},function(data){
          refrescar(data);
          },'json');
    });

    function refrescar(objeto) {
        console.log(objeto);
        $('#inputTituloVideojuego').val(objeto.inputTituloVideojuego);
        $('#Genero').val(objeto.Genero);
        $('#inputPrecio').val(objeto.inputPrecio);
        $('#Fecha').val(objeto.Fecha);
  }

});

$(document).ready(function(){
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
    
    solicitud.open("GET", "getHeader.txt", true);
    solicitud.send();
    
     }
    
    function iniciarHeader() {
        document.getElementById("MyDiv").innerHTML = "<h2>Este es un Header nivel 2<h2>"; 
    }
    
    } });

var myModal = new bootstrap.Modal(document.getElementById('myModal'));