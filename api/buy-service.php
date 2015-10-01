<?php 
    /*$request = http_build_query($_POST);
    $size = strlen($request);*/

    $rice = floatval($_REQUEST['rice']);
    $bean = floatval($_REQUEST['bean']);
    $chocolate = floatval($_REQUEST['chocolate']);
    $psn = floatval($_REQUEST['psn']);
    
    $teste = $_REQUEST['teste'];
    
    $soma = 0;
    
    if(is_numeric($rice) && is_numeric($bean) && is_numeric($chocolate) && is_numeric($psn))
    {
        $soma = $rice + $bean + $chocolate + $psn;
    }
    
    echo $teste;
?>