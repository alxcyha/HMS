import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import W3 from "../widget3";

function InsertTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("http://localhost/HMS/PHP/countPT.php")
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
    <W3 />
  );
}

export default InsertTable;
