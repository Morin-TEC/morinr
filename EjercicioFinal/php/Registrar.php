<?php
 include("ConexionBD.php");
        $ID= $_POST['ID'];
        $inputTituloVideojuego = $_POST['Juego'];
        $Genero = $_POST['Gen'];
        $inputPrecio = $_POST['Pre'];
        $Fecha =$_POST['Date'];
        try{
        $sql = "insert into videojuego (inputTituloVideojuego, Genero, inputPrecio, Fecha)S
        VALUES('$inputTituloVideojuego', '$Genero', '$inputPrecio', '$Fecha')";
        $query = $con->prepare($sql);
    $query->execute();
    $query->closeCursor();
    }catch(PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e->getMessage();
    }
?>