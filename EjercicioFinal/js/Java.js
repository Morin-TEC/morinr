$(document).ready(function() {

    $('#btnConsultarBD').click(function() {
        swal("Ingresa el ID a consultar: ",
        {
          content:"input",
        })
        .then((parid) => {
          console.log("La consulta es: "+parid);
            $.post('./php/Consultar.php',{par1:parid},function(data){
              refrescar(data);
              },'json');
        });
    });
    
    $('#btnEliminarBD').click(function() {
        let parid = $('#ID').val();
            $.post('./php/Eliminar.php',{par1:parid},function(data){
                refrescar(data);
            },'json');
    
            Swal.fire(
                '¡Genial!' , 
                 'Videojuego eliminado' , 
                 'success', 
                );
        
    });
    
    $('#btnRegistrarBD').click(function() {
        let ID = $('#ID').val();
        let inputTituloVideojuego = $('#inputTituloVideojuego').val();
        let Genero =  $('#Genero').val();
        let inputPrecio = $('#inputPrecio').val();
        let Fecha = $('#Fecha').val();
        $.post('./php/Registrar.php',{ID:ID,Juego:inputTituloVideojuego,Gen:Genero,Pre:inputPrecio,Date:Fecha
        });
        Swal.fire(
            '¡Genial!' , 
             'Videojuego registrado' , 
             'success', 
            );
    });
    
    function refrescar(objeto) {
        console.log(objeto);
        $('#ID').val(objeto.ID);
        $('#inputTituloVideojuego').val(objeto.inputTituloVideojuego);
        $('#Genero').val(objeto.Genero);
        $('#inputPrecio').val(objeto.inputPrecio);
        $('#Fecha').val(objeto.Fecha);
    }
    
    $('#btnActualizarBD').click(function() {
        let ID = $('#ID').val();
        let inputTituloVideojuego = $('#inputTituloVideojuego').val();
        let Genero =  $('#Genero').val();
        let inputPrecio = $('#inputPrecio').val();
        let Fecha = $('#Fecha').val();
        $.post('./php/Actualizar.php',{ID:ID,Juego:inputTituloVideojuego,Gen:Genero,Pre:inputPrecio,Date:Fecha
        });
        Swal.fire(
            '¡Genial!' , 
             'Videojuego modificado' , 
             'success', 
            );
    });  
    });