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

    // Generate a unique ID
    $pid = generateUniqueID($conn);

    $sql = "INSERT INTO pickup VALUES ('$pid', '$name', '$phno', '$add', '$date');";
    $res = mysqli_query($conn, $sql);

    if ($res) {
        echo "Your 'Pickup ID': $pid ";
        echo "Kindly Note it";
            }
    else {
        echo "Error!";
    }
    $conn->close();
}

function generateUniqueID($conn) {
    $prefix = 'P';
    $idExists = true;
    $uniqueID = '';

    // Keep generating new IDs until a unique one is found
    $counter = 0;
    while ($idExists && $counter <= 9999) {
        $counter++;
        $randomNumber = sprintf("%04d", $counter);
        $uniqueID = $prefix . $randomNumber;

        // Check if the generated ID already exists in the table
        $sql = "SELECT * FROM pickup WHERE pid = '$uniqueID'";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) === 0) {
            $idExists = false;
        }
    }

    if ($idExists) {
        // Handle the case when all IDs from 0000 to 9999 are already taken
        echo "Error: No available unique ID found.";
        exit();
    }

    return $uniqueID;
}

?>

