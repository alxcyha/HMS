import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

function Audit() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("http://localhost/testers/PHP/audit.php")
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
                <th>Doctor ID</th>
                <th>Date of Admission</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, key) => (
                <tr key={key}>
                  <td>{user.patient_id}</td>
                  <td>{user.doctor_id}</td>
                  <td>{user.date_of_admission}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Audit;
