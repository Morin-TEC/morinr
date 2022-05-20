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