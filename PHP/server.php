<?php

session_start();

// Allow requests from any origin
header('Access-Control-Allow-Origin: http://localhost:3000');

// Allow specific HTTP methods (POST in this case)
header('Access-Control-Allow-Methods: POST');

// Allow specific headers
header('Access-Control-Allow-Headers: Content-Type');

header('Content-Type: application/json');

// Check if the request method is OPTIONS (preflight request)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  // Return early for preflight requests
  exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];
  $userType = $_POST['userType']; // Assuming you have a userType field in your login form

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

  if ($userType === 'admin') {
    // Execute admin login code
    $stmt = $conn->prepare("SELECT password FROM admin WHERE username = ?");
  } elseif ($userType === 'patient') {
    // Execute patient login code
    $stmt = $conn->prepare("SELECT password FROM patient_admin WHERE patient_id = ?");
  } elseif ($userType === 'doctor') {
    // Execute doctor login code
    $stmt = $conn->prepare("SELECT password FROM doctor_admin WHERE doctor_id = ?");
  } else {
    // Invalid user type
    die(json_encode(array('success' => 'error', 'message' => 'Invalid user type')));
  }

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
