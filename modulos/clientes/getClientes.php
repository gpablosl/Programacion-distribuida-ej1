<?php

    include '../../appCode/clsClientes.php';

    $clientes = new Clientes();
    $result = $clientes->getClientes();
    foreach($result as $row)
    {
        echo $row["nombre"] .
        $row["telefono"] . '<br>'; 
    }

?>