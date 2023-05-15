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
    // Retrieve the latest order_id and totalCost from the order_table
    $sql = "SELECT o_id, totalCost FROM order_table ORDER BY o_id DESC LIMIT 1";
    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $o_id = $row['o_id'];
        $totalCost = $row['totalCost'];

        // Retrieve the name, phone no, and address from the user
        $name = $_POST['name'];
        $phno = $_POST['phno'];
        $add = $_POST['add'];

        // Insert the data into the delivery table
        $sql = "INSERT INTO delivery  VALUES ('$o_id', '$totalCost', '$name', '$phno', '$add')";
        $res = mysqli_query($conn, $sql);

        if ($res) {
            echo "Success";
        }
        else {
            echo "Error!";
        }
    }
    else {
        echo "Error retrieving the latest order_id and totalCost";
    }

    $conn->close();
}
?>
