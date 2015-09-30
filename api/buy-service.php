
<?php 
    $rice = $_POST['rice'];
    $bean = floatval($_POST['bean']);
    $chocolate = floatval($_POST['chocolate']);
    $psn = floatval($_POST['psn']);
    
    $soma = 0;
    
    if(is_numeric($rice) && is_numeric($bean) && is_numeric($chocolate) && is_numeric($psn))
    {
        $soma = $rice + $bean + $chocolate + $psn;
    }
    
    echo $rice;
?>