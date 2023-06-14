<?php
session_start();
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Database connection parameters
  $servername = "localhost";
  $username_db = "root";
  $password_db = "";
  $dbname = "hmstry";

  // Create a database connection
  $conn = new mysqli($servername, $username_db, $password_db, $dbname);

  // Check for connection errors
  if ($conn->connect_error) {
    die(json_encode(array('success' => 'error', 'message' => 'Connection failed: ' . $conn->connect_error)));
  }

  // Fetch the password from the database based on the provided username
  $stmt = $conn->prepare("SELECT password FROM admin WHERE username = ?");
  $stmt->bind_param("s", $username);
  $stmt->execute();
  $stmt->bind_result($hashedPassword);
  $stmt->fetch();

  if ($hashedPassword !== null && $password === $hashedPassword) {
    // Username and password are correct
    $_SESSION['username'] = $username;
    echo json_encode(array('success' => 'success'));
  } elseif ($hashedPassword !== null) {
    // Incorrect password
    echo json_encode(array('error' => 'incorrect password'));
  } else {
    // User not found
    echo json_encode(array('error' => 'user not found'));
  }


  $stmt->close();
  $conn->close();
}
