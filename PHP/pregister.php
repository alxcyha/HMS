<?php
// Allow requests from any origin
header('Access-Control-Allow-Origin: *');

// Allow specific HTTP methods (POST in this case)
header('Access-Control-Allow-Methods: POST');

// Allow specific headers
header('Access-Control-Allow-Headers: Content-Type');

// Check if the request method is OPTIONS (preflight request)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  // Return early for preflight requests
  exit;
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve the data from the request body
  $requestData = json_decode(file_get_contents('php://input'), true);

  // Extract the values from the request data
  $patientName = $requestData['patientName'];
  $patientID = $requestData['patientID'];
  $phoneNumber = $requestData['phoneNumber'];
  $departmentName = $requestData['departmentName'];
  $doctorName = $requestData['doctorName'];
  $sex = $requestData['sex'];
  $age = $requestData['age'];
  $address = $requestData['address'];
  $city = $requestData['city'];
  $diagnosis = $requestData['diagnosis'];


  // Perform any necessary validation or processing

  // Insert the data into the database or perform other actions as needed
  // Example: Inserting into a MySQL database using PDO
  $dsn = 'mysql:host=localhost;dbname=hmstry';
  $username = 'root';
  $password = '';

  try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare the SQL statement
    $stmt = $pdo->prepare('INSERT INTO pat_entry (patient_id, patient_name, age, sex, address, city, phone_number, doctor_name, diagnosis, department_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');

    // Bind the values to the statement parameters
    $stmt->bindValue(1, $patientID);
    $stmt->bindValue(2, $patientName);
    $stmt->bindValue(3, $age);
    $stmt->bindValue(4, $sex);
    $stmt->bindValue(5, $address);
    $stmt->bindValue(6, $city);
    $stmt->bindValue(7, $phoneNumber);
    $stmt->bindValue(8, $doctorName);
    $stmt->bindValue(9, $diagnosis);
    $stmt->bindValue(10, $departmentName);

    // Execute the prepared statement
    $stmt->execute();

    // Return a success response
    $response = [
      'success' => true,
      'message' => 'Doctor registration successful'
    ];
    echo json_encode($response);
  } catch (PDOException $e) {
    // Return an error response
    $response = [
      'success' => false,
      'message' => 'Error: ' . $e->getMessage()
    ];
    echo json_encode($response);
  }
} else {
  // Return an error response if the request method is not POST
  $response = [
    'success' => false,
    'message' => 'Invalid request method'
  ];
  echo json_encode($response);
}
