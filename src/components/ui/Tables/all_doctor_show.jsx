import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

function InsertTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("http://localhost/HMS/PHP/showData.php")
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
                <th>Doctor ID</th>
                <th>Doctor Name</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, key) => (
                <tr key={key}>
                  <td>{user.doctor_id}</td>
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

export default InsertTable;
