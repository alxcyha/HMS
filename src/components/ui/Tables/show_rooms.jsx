import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Table, Container, Row, Col } from "reactstrap";
import "typeface-roboto";

function XMLTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/HMS/PHP/xml.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid request.");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.row);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1
            style={{
              fontFamily: "Roboto",
              textAlign: "center",
              fontWeight: 1000,
              color: "#073b87",
            }}
          >
            DATA MART
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped>
            <thead className="table-primary">
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
