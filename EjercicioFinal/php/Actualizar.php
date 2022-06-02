<?php
include("ConexionBD.php");
    $paridCte=$_POST['par1'];
    $ID= $_POST['ID'];
    $Titulo = $_POST['Juego'];
    $Genero = $_POST['Gen'];
    $Precio = $_POST['Pre'];
    $Fecha =$_POST['Date'];
        try{
        $sql = "update videojuego set ID='$ID',Titulo='$Titulo',Genero='$Genero',Precio='$Precio',Fecha='$Fecha'";
        $query = $con->prepare($sql);
    $query->execute();
    $query->closeCursor();
    }catch(PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e->getMessage();
    }
?>
