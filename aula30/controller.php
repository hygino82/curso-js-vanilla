<?php
$name=filter_input(INPUT_POST,'name',FILTER_SANITIZE_SPECIAL_CHARS);
$arr=[
    'name'=>$name,
    'age'=>18,
    'city'=>'Coronel Vivida'
];
echo json_encode($arr);