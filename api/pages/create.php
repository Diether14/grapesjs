<?php
    require('../connection.php');
    if(isset($_POST['name'])){
        $name = $_POST['name'];
        $html = $_POST['html'];
        $sql = "INSERT INTO pages (name, html, json) VALUES (?,?,?)";
        $stmt= $pdo->prepare($sql);
        if($stmt->execute([$name, $html, $html])){
            echo json_encode(array('message' => 'Saved'));
        }else{
            echo json_encode(array('message' => 'Error'));
        }
    }
    else{
        echo 'not set';
    }
?>