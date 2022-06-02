$(document).ready(function() {

    $('#btnConsultarBD').click(function() {
        $('#modal1').modal();
        $('#modal1').on('hidden.bs.modal',function(e){
            let paridCte=$('#ID').val();
            $.post('./php/Consultar.php',{par1:paridCte},function(data){
                refrescar(data);
            },'json');
        })
    });
    
    $('#btnEliminarBD').click(function() {
            let paridCte=$('#ID').val();
            $.post('./php/Eliminar.php',{ID:ID},function(data){
                refrescar(data);
            },'json');
    
            Swal.fire(
                'Accion' , 
                 'Videojuego eliminado' , 
                 'success', 
                );
        
    });
    
    $('#btnRegistrarBD').click(function() {
        let ID = $('#ID').val();
        let Titulo = $('#Titulo').val();
        let Genero =  $('#Genero').val();
        let Precio = $('#Precio').val();
        let Fecha = $('#Fecha').val();
        $.post('./php/Registrar.php',{ID:ID,Juego:Titulo,Gen:Genero,Pre:Precio,Date:Fecha
        });
        Swal.fire(
            'Accion' , 
             'Videojuego registrado' , 
             'success', 
            );
    });
    
    function refrescar(objeto) {
        console.log(objeto);
        $('#ID').val(objeto.ID);
        $('#Titulo').val(objeto.Titulo);
        $('#Genero').val(objeto.Genero);
        $('#Precio').val(objeto.Precio);
        $('#Fecha').val(objeto.Fecha);
    }
    
    $('#btnActualizarBD').click(function() {
        let ID = $('#ID').val();
        let Titulo = $('#Titulo').val();
        let Genero =  $('#Genero').val();
        let Precio = $('#Precio').val();
        let Fecha = $('#Fecha').val();
        $.post('./php/Actualizar.php',{ID:ID,Juego:Titulo,Gen:Genero,Pre:Precio,Date:Fecha
        });
        Swal.fire(
            'Accion' , 
             'Videojuego modificado' , 
             'success', 
            );
    });  
    });