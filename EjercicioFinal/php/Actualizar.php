<?php
include("ConexionBD.php");
    $ID= $_POST['ID'];
    $inputTituloVideojuego = $_POST['Juego'];
    $Genero = $_POST['Gen'];
    $inputPrecio = $_POST['Pre'];
    $Fecha =$_POST['Date'];
        try{
        $sql = "update videojuego set inputTituloVideojuego='  $inputTituloVideojuego  ',Genero=' $Genero  ',inputPrecio='  $inputPrecio  ',Fecha='  $Fecha 'WHERE ID='$ID'";
        $query = $con->prepare($sql);
    $query->execute();
    $query->closeCursor();
    }catch(PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e->getMessage();
    }
?>