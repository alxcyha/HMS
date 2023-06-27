<?php
// Allow requests from any origin
header('Access-Control-Allow-Origin: *');

// Allow specific HTTP methods
header('Access-Control-Allow-Methods: GET, PUT, DELETE');

// Allow specific headers
header('Access-Control-Allow-Headers: Content-Type');

// Check if the request method is OPTIONS (preflight request)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  // Return early for preflight requests
  exit;
}

// Check if the request method is GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  // Perform any necessary validation or processing

  // Fetch all doctors from the database
  try {
    $dsn = 'mysql:host=localhost;dbname=hmstry';
    $username = 'root';
    $dbPassword = '';

    $pdo = new PDO($dsn, $username, $dbPassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare('SELECT * FROM all_doctors');

    // Execute the prepared statement
    $stmt->execute();

    // Fetch all rows from the result set as an associative array
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return the fetched data as JSON response
    header('Content-Type: application/json');
    echo json_encode($result);
  } catch (PDOException $e) {
    // Return an error response
    $response = [
      'success' => false,
      'message' => 'Error: ' . $e->getMessage()
    ];
    echo json_encode($response);
  }
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
  // Perform update operation for modifying an existing doctor

  // Retrieve the request body data
  $data = json_decode(file_get_contents('php://input'), true);

  // Update the data in the database
  try {
    $dsn = 'mysql:host=localhost;dbname=hmstry';
    $username = 'root';
    $dbPassword = '';

    $pdo = new PDO($dsn, $username, $dbPassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare('UPDATE all_doctors SET doctor_name = :doctor_name, department_name = :department_name WHERE doctor_id = :doctor_id');
    $stmt->bindParam(':doctor_name', $data['doctorName']);
    $stmt->bindParam(':department_name', $data['departmentName']);
    $stmt->bindParam(':doctor_id', $data['doctorID']);

    // Execute the prepared statement
    $stmt->execute();

    // Return a success response
    $response = [
      'success' => true,
      'message' => 'Doctor updated successfully'
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
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
  // Perform delete operation for removing a doctor

  // Retrieve the doctor ID from the query parameters
  $doctorId = $_GET['doctor_id'];

  // Delete the data from the database
  try {
    $dsn = 'mysql:host=localhost;dbname=hmstry';
    $username = 'root';
    $dbPassword = '';

    $pdo = new PDO($dsn, $username, $dbPassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare('DELETE FROM all_doctors WHERE doctor_id = :doctor_id');
    $stmt->bindParam(':doctor_id', $doctorId);

    // Execute the prepared statement
    $stmt->execute();

    // Return a success response
    $response = [
      'success' => true,
      'message' => 'Doctor deleted successfully'
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
  // Return an error response if the request method is not supported
  $response = [
    'success' => false,
    'message' => 'Invalid request method'
  ];
  echo json_encode($response);
}
