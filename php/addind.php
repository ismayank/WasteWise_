<?php
header('Access-Control-Allow-Origin: *');
$host = "localhost";
$user = "root";
$password = "";
$database = "industrial";

$conn = new mysqli($host, $user, $password, $database);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
}
else {
    $biodegradable = $_POST['biodegradable'];
    $chemical = $_POST['chemical'];
    $plastic= $_POST['plastic'];
    $textile = $_POST['textile'];
    $metal = $_POST['metal'];
    $ewaste = $_POST['ewaste'];
    $glass= $_POST['glass'];
    $hazardous = $_POST['hazardous'];

    
    $sql = "INSERT INTO agricultural VALUES ('$biodegradable', '$chemical','$plastic','$textile','$metal', '$ewaste','$glass','$hazardous');";
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
