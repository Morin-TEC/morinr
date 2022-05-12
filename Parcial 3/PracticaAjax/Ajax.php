<?php 
                echo "Hoy es ";
                date_default_timezone_set('America/Mexico_City');
                $mes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
                echo "" . date("d") ." de ". $mes[date("m")-1] ." del ". date("Y");
                echo " y actualmente son las ".date("H:i:sa").".";
?>