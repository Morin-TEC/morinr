<?php
//$ID_Videojuego=5;
$iduser=$_POST['par1'];

$hostname='localhost';
$database='a19100222';
$username='root';
$password='';
$port='3306';

try {
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
} catch(PDOException $e) {
    echo "Error de conexion a la base de datos";
    echo $e->getMessage();
    exit();
}
  //$con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

  try{
    $sql = "delete from videojuego where ID=".$iduser;
    $query = $con->prepare($sql);
    $query->execute();
    $result = $query->fetch(PDO::FETCH_ASSOC);
    $query->closeCursor();
}catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}
echo json_encode($result);
?>