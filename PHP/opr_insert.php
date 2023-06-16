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
  $patient_id = $requestData['patient_id'];
  $doctor_id = $requestData['doctor_id'];
  $date_of_admission = $requestData['date_of_admission'];
  $date_of_operation = $requestData['date_of_operation'];
  $type_of_operation = $requestData['type_of_operation'];
  $operation_theater_number = $requestData['operation_theater_number'];
  $condition_before_operation = $requestData['condition_before_operation'];
  $condition_after_operation = $requestData['condition_after_operation'];
  $treatment_advice = $requestData['treatment_advice'];


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
    $stmt = $pdo->prepare('INSERT INTO pat_opr (patient_id, date_of_admission, date_of_operation, doctor_id, operation_theater_number, type_of_operation, condition_before_operation, condition_after_operation, treatment_advice) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');


    // Bind the values to the statement parameters
    $stmt->bindParam(1, $patient_id);
    $stmt->bindParam(2, $date_of_admission);
    $stmt->bindParam(3, $date_of_operation);
    $stmt->bindParam(4, $doctor_id);
    $stmt->bindParam(5, $operation_theater_number);
    $stmt->bindParam(6, $type_of_operation);
    $stmt->bindParam(7, $condition_before_operation);
    $stmt->bindParam(8, $condition_after_operation);
    $stmt->bindParam(9, $treatment_advice);


    // Execute the prepared statement
    $stmt->execute();

    // Return a success response
    $response = [
      'success' => true,
      'message' => 'Admit form submitted'
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
