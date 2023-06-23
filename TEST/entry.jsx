import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

function Entry() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("http://localhost/testers/PHP/showpat_entry.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid request.");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Error fetching data: " + error.message);
        setLoading(false);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Table striped>
            <thead className="table-primary">
              <tr>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Address</th>
                <th>City</th>
                <th>Phone Number</th>
                <th>Entry Date</th>
                <th>Doctor Name</th>
                <th>Diagnosis</th>
                <th>Department Name</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, key) => (
                <tr key={key}>
                  <td>{user.patient_id}</td>
                  <td>{user.patient_name}</td>
                  <td>{user.age}</td>
                  <td>{user.sex}</td>
                  <td>{user.address}</td>
                  <td>{user.city}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.entry_date}</td>
                  <td>{user.age}</td>
                  <td>{user.doctor_name}</td>
                  <td>{user.department_name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Entry;
