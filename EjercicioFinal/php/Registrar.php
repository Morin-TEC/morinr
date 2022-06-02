<?php
 include("ConexionBD.php");
        $ID= $_POST['ID'];
        $Titulo = $_POST['Juego'];
        $Genero = $_POST['Gen'];
        $Precio = $_POST['Pre'];
        $Fecha =$_POST['Date'];
        try{
        $sql = "insert into videojuego  (ID,TituloVideojuego,Genero,inputPrecio,Fecha) 
        VALUES('$ID', '$Titulo', '$Genero', '$Precio', '$Fecha')";
        $query = $con->prepare($sql);
    $query->execute();
    $query->closeCursor();
    }catch(PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e->getMessage();
    }
?>