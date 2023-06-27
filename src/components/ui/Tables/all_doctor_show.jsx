import React, { useState, useEffect } from "react";
import {
  Table,
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

function InsertTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    doctor_id: "",
    doctor_name: "",
    department_name: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [editingUser, setEditingUser] = useState(null);

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

  const toggleModal = () => {
    if (modal) {
      setEditingUser(null);
      setFormData({
        doctor_id: "",
        doctor_name: "",
        department_name: "",
      });
    }
    setModal(!modal);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    fetch("http://localhost/HMS/PHP/showData.php", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        fetchUsers();

        setFormData({
          doctor_id: "",
          doctor_name: "",
          department_name: "",
        });
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Error adding user: " + error.message);
      });
  };

  const handleDeleteUser = (doctorId) => {
    fetch(`http://localhost/HMS/PHP/showData.php?doctor_id=${doctorId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        fetchUsers();
        setSuccessMessage("User deleted successfully.");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Error deleting user: " + error.message);
      });
  };

  const handleUpdateUser = () => {
    fetch(
      `http://localhost/HMS/PHP/update.php?doctor_id=${editingUser.doctor_id}`,
      {
        method: "PUT",
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        fetchUsers();
        toggleModal();
        setSuccessMessage("User updated successfully.");
        setFormData({
          doctor_id: "",
          doctor_name: "",
          department_name: "",
        });
        setEditingUser(null);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Error updating user: " + error.message);
      });
  };

  const handleEditUser = (doctorId) => {
    const userToEdit = users.find((user) => user.doctor_id === doctorId);
    if (userToEdit) {
      setEditingUser(userToEdit);
      setFormData({
        doctor_id: userToEdit.doctor_id,
        doctor_name: userToEdit.doctor_name,
        department_name: userToEdit.department_name,
      });
      toggleModal();
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          {successMessage && <Alert color="success">{successMessage}</Alert>}
          {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
          <Table striped>
            <thead className="table-primary">
              <tr>
                <th>Doctor ID</th>
                <th>Doctor Name</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, key) => (
                <tr key={key}>
                  <td>{user.doctor_id}</td>
                  <td>{user.doctor_name}</td>
                  <td>{user.department_name}</td>
                  <td>
                    <Button
                      color="danger"
                      onClick={() => handleDeleteUser(user.doctor_id)}
                    >
                      Delete
                    </Button>
                    <Button
                      color="primary"
                      onClick={() => handleEditUser(user.doctor_id)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>
              {editingUser ? "Edit User" : "Add User"}
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="doctorId">Doctor ID</Label>
                <Input
                  type="text"
                  name="doctor_id"
                  id="doctorId"
                  value={formData.doctor_id}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="doctorName">Doctor Name</Label>
                <Input
                  type="text"
                  name="doctor_name"
                  id="doctorName"
                  value={formData.doctor_name}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="departmentName">Department</Label>
                <Input
                  type="select"
                  name="department_name"
                  id="departmentName"
                  value={formData.department_name}
                  onChange={handleInputChange}
                >
                  <option value="">Select Department</option>
                  <option value="Anesthesiology">Anesthesiology</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Cardiothoracic Surgery">
                    Cardiothoracic Surgery
                  </option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Emergency Medicine">Emergency Medicine</option>
                  <option value="Endocrinology">Endocrinology</option>
                  <option value="ENT (Otolaryngology)">
                    ENT (Otolaryngology)
                  </option>
                  <option value="Gastroenterology">Gastroenterology</option>
                  <option value="General Surgery">General Surgery</option>
                  <option value="Hematology">Hematology</option>
                  <option value="Nephrology">Nephrology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Oncology">Oncology</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Psychiatry">Psychiatry</option>
                  <option value="Radiology">Radiology</option>
                  <option value="Urology">Urology</option>
                </Input>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={editingUser ? handleUpdateUser : handleAddUser}
              >
                {editingUser ? "Update" : "Add"}
              </Button>{" "}
              <Button color="secondary" onClick={toggleModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export default InsertTable;
