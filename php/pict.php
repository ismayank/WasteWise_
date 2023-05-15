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
} else {
    $name = $_POST['name'];
    $phno = $_POST['phno'];

    $sql = "SELECT * FROM pickup WHERE name = '$name' AND phno = '$phno'";
    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $name = $row['name'];
            $phno = $row['phno'];
            $date = $row['date'];
            $add = $row['add'];

            // Process the retrieved data as needed
            echo "Name: " . $name . "   ";
            echo "Phone: " . $phno . "   ";
            echo "Date: " . $date . "   ";
            echo "Address: " . $add . "   ";
            echo "   ";
        }
    } else {
        echo "No matching records found.";
    }

    $conn->close();
}
?>
