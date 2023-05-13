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
    $biodegradable = $_POST['biodegradable'];
    $chemical = $_POST['chemical'];
    $textile = $_POST['textile'];
    $plastic = $_POST['plastic'];
    $metal = $_POST['metal'];
    $ewaste = $_POST['ewaste'];
    $glass = $_POST['glass'];
    $hazardous = $_POST['hazardous'];

    $sql = "INSERT INTO industrial VALUES ('$biodegradable', '$chemical', '$textile', '$plastic', '$metal', '$ewaste', '$glass', '$hazardous')";
    
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
