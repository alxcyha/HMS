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
  $patientID = $requestData['patient_id'];
  $doctorID = $requestData['doctor_id'];
  $dateOfCheckup = $requestData['date_of_checkup'];
  $advancePayment = $requestData['advance_payment'];
  $modeOfPayment = $requestData['mode_of_payment'];
  $roomNumber = $requestData['room_number'];
  $departmentName = $requestData['department_name'];
  $attendantName = $requestData['attendant_name'];
  $initialCondition = $requestData['initial_condition'];
  $diagnosis = $requestData['diagnosis'];
  $treatment = $requestData['treatment'];


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
    $stmt = $pdo->prepare('INSERT INTO pat_admit (patient_id, advance_payment, mode_of_payment, room_number, department_name, date_of_admission, initial_condition, diagnosis, treatment, doctor_id, attendant_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');


    // Bind the values to the statement parameters
    $stmt->bindParam(1, $patientID);
    $stmt->bindParam(2, $advancePayment);
    $stmt->bindParam(3, $modeOfPayment);
    $stmt->bindParam(4, $roomNumber);
    $stmt->bindParam(5, $departmentName);
    $stmt->bindParam(6, $dateOfCheckup);
    $stmt->bindParam(7, $initialCondition);
    $stmt->bindParam(8, $diagnosis);
    $stmt->bindParam(9, $treatment);
    $stmt->bindParam(10, $doctorID);
    $stmt->bindParam(11, $attendantName);


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
