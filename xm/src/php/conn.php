<?php
    $servername = 'localhost';
    $username = 'root';
    $passname = '';
    $dbname = 'check';

    $conn = new mysqli($servername,$username,$passname,$dbname);
    if($conn->connect_error){
        die('出错原因是：'.$conn->connect_error);
    }
?>