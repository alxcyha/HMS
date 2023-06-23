
import { Table } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function InsertTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch('http://localhost/HMS/PHP/insertData.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Invalid request.');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError('Error fetching data: ' + error.message);
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Table className="table table-striped">
        <thead>
          <tr className="table-primary">
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
    </>
  );
}

export default InsertTable;
