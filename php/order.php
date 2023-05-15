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
    $totalQuantity = $_POST['subtotal'];
    $totalCost = $_POST['total'];

    // Generate a unique order ID
    $o_id = generateUniqueID($conn);

    $sql = "INSERT INTO order_table VALUES ('$o_id', '$totalQuantity', '$totalCost')";
    $res = mysqli_query($conn, $sql);

    if ($res) {
        echo "Success";
    } else {
        echo "Error!";
    }
    $conn->close();
}
function generateUniqueID($conn) {
    $prefix = 'O';
    $idExists = true;
    $uniqueID = '';

    // Get the last used ID from the table
    $sql = "SELECT MAX(o_id) AS max_id FROM order_table";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    $lastID = $row['max_id'];

    // If no IDs exist in the table, start with '0000'
    if ($lastID === null) {
        $lastID = '0000';
    }

    // Convert the last ID to an integer
    $lastID = intval(substr($lastID, 1));

    // Increment the last ID by 1
    $newID = $lastID + 1;

    // If the new ID exceeds 9999, reset it to 0
    if ($newID > 9999) {
        $newID = 0;
    }

    // Generate the new unique ID
    $uniqueID = $prefix . sprintf("%04d", $newID);

    // Check if the generated ID already exists in the table
    $sql = "SELECT * FROM order_table WHERE o_id = '$uniqueID'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) === 0) {
        $idExists = false;
    }

    return $uniqueID;
}
?>

