<?php
    $user = 'root';
    $pass = '';
    $pdo = new PDO('mysql:host=localhost;dbname=grapes', $user, $pass);
    header('Access-Control-Allow-Origin: *');
?>