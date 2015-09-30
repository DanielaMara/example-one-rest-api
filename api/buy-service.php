
<?php 
    $rice = $_GET['rice'];
    $rice = floatval(($rice));
    $bean = $_GET['bean'];
    $chocolate = $_GET['chocolate'];
    $psn = $_GET['psn'];
    
    $soma = 0.0;
    
    if(is_numeric($rice) && is_numeric($bean) && is_numeric($chocolate) && is_numeric($psn))
    {
        $soma = $rice + $bean + $chocolate + $psn;
    }
    
    echo $rice;
?>