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
    $ph_no = $_POST['ph_no'];
    
    $sql = "DELETE FROM ytTable where name='$name';";
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
