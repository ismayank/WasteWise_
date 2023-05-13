<?php
header('Access-Control-Allow-Origin: *');
$host = "localhost";
$user = "root";
$password = "";
$database = "youtube_table";

$conn = new mysqli($host, $user, $password, $database);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
}
else {
    $biomedical = $_POST['biomedical'];
    $plastic = $_POST['plastic'];
    $chemical = $_POST['chemical'];
    $metal = $_POST['metal'];
    $glass = $_POST['glass'];

    $sql = "INSERT INTO healthcare (biomedical, plastic, chemical, metal, glass) VALUES ('$biomedical', '$plastic', '$chemical', '$metal', '$glass')";
    
    $res = mysqli_query($conn, $sql);

    if ($res) {
        echo "Success";
    }
    else {
        echo "Error!";
    }
    $conn->close();
}
?>
