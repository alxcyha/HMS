<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hms";

// Create a connection
$connection = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

echo "Connected successfully";

// Load the XML file
$xml = simplexml_load_file('HMS/XML/department.xml');

// Iterate over each department record
foreach ($xml->department as $department) {
    $departmentName = $department->department_name;
    $departmentLocation = $department->department_location;
    $facilities = $department->facilities;

    // Insert the data into the department table
    $sql = "INSERT INTO department (department_name, department_location, facilities) VALUES ('$departmentName', '$departmentLocation', '$facilities')";
    $result = mysqli_query($connection, $sql);

    if (!$result) {
        echo 'Error inserting department: ' . mysqli_error($connection);
    }
}

// Close the database connection
mysqli_close($connection);
