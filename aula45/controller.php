<?php
$pdo = new PDO("mysql:host=localhost;dbname=curso_teste", "hygino", "89631139");
$sql = $pdo->query("SELECT * FROM tb_book");
$sql->execute();
$data = $sql->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($data);
