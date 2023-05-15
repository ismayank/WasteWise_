<?php

// Database connection settings
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'youtube_table';

// Create a new MySQLi object
$mysqli = new mysqli($host, $username, $password, $database);

// Check for connection errors
if ($mysqli->connect_error) {
    die('Connection Error: ' . $mysqli->connect_error);
}

// User input
$email = $_POST['email'];
$pass = $_POST['pass'];

// Path to the SQL file
$sqlFile = 'update_password.sql';

// Read the SQL file contents
$sqlContents = file_get_contents($sqlFile);

// Execute the SQL statements
if ($mysqli->multi_query($sqlContents)) {
    // Skip the creation statement by fetching the results
    while ($mysqli->next_result()) {
        if ($result = $mysqli->store_result()) {
            $result->free();
        }
    }

    // Call the procedure with user input
    $callProcedure = "CALL update_password('$email', '$pass');";
    if ($mysqli->multi_query($callProcedure)) {
        // Retrieve the result set
        do {
            if ($result = $mysqli->store_result()) {
                while ($row = $result->fetch_assoc()) {
                    echo $row['message'] . "<br>";
                }
                $result->free();
            }
        } while ($mysqli->more_results() && $mysqli->next_result());
    } else {
        echo "Error calling the procedure: " . $mysqli->error;
    }
} else {
    echo "Error executing the SQL file: " . $mysqli->error;
}

// Close the database connection
$mysqli->close();

?>
