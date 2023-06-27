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
  $date_of_checkup = $requestData['date_of_checkup'];
  $advance_payment = $requestData['advance_payment'];
  $mode_of_payment = $requestData['mode_of_payment'];
  $room_number = $requestData['room_number'];
  $department_name = $requestData['department_name'];
  $attendant_name = $requestData['attendant_name'];
  $initial_condition = $requestData['initial_condition'];
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
    $stmt->bindParam(1, $patient_id);
    $stmt->bindParam(2, $advance_payment);
    $stmt->bindParam(3, $mode_of_payment);
    $stmt->bindParam(4, $room_number);
    $stmt->bindParam(5, $department_name);
    $stmt->bindParam(6, $date_of_admission);
    $stmt->bindParam(7, $initial_condition);
    $stmt->bindParam(8, $diagnosis);
    $stmt->bindParam(9, $treatment);
    $stmt->bindParam(10, $doctor_id);
    $stmt->bindParam(11, $attendant_name);



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
