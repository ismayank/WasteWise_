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
    $name = $_POST['name'];
    $phno = $_POST['phno'];
    $add = $_POST['add'];
    $date = $_POST['date'];


    $sql = "INSERT INTO pickup VALUES ('$name', '$phno', '$add' , '$date');";
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
