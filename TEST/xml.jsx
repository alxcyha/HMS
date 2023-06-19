import React, { useState, useEffect } from 'react';
import './App.css';
import { Table, Container, Row, Col } from 'reactstrap';

function XMLTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost/testers/PHP/xml.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Invalid request.');
        }
        return response.json();
      })
      .then(data => {
        setData(data.row);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1>XML Data</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>Department Name</th>
                <th>Doctor ID</th>
                <th>Doctor Name</th>
                <th>Patient ID</th>
                <th>Patient Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.department_name}</td>
                  <td>{row.doctor_id}</td>
                  <td>{row.doctor_name}</td>
                  <td>{row.patient_id}</td>
                  <td>{row.patient_name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default XMLTable;
