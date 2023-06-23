import React, { useState } from "react";
import { Form, Container, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Grid, Link } from "@mui/material";
import Copyright from "../ui/Copyright";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router";

function LoginDoctor() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.id === "username") {
      setUsername(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      setIsLoading(true);
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data);
      if (data.success === "success") {
        navigate("/home");
      } else if (data.error === "incorrect password") {
        window.alert("Incorrect password!");
      } else if (data.error === "user not found") {
        window.alert("User not found!");
      } else {
        window.alert("An error occurred. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Section: Design Block */}
      <Container className="text-center">
        {/* Background image */}
        {/* <Col>
          <div
            className="p-5 bg-image"
            style={{
              // backgroundImage: "url('https://t4.ftcdn.net/jpg/01/33/33/41/360_F_133334155_X23HzbJKawbIgXVaub4bPM8CjpkS5uMS.jpg')",
              height: "300px", 
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          {/* Background image */}
        {/* </Col> */}
        <Col>
          <div
            className="card mx-3 mx-md-5 shadow-5-strong"
            style={{
              marginTop: "-100px",
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div className="card-body py-4 px-md-4">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10">
                  <h2 className="fw-bold mt-3"></h2>
                  <h2 className="mb-4">HELLO ADMIN!</h2>
                  <Form
                    action="http://localhost/HMS/PHP/server.php"
                    method="post"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        value={username}
                        onChange={handleChange}
                        placeholder="Admin ID"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type={show ? "text" : "password"}
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Hidden input field for user type */}
                    <input type="hidden" name="userType" value="admin" />

                    <LoadingButton
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mb: 2 }}
                      loading={isLoading}
                    >
                      Sign In
                    </LoadingButton>
                    <Box>
                      <Grid>
                        <Grid>
                          <Link
                            onClick={() => navigate("/")}
                            className="text-muted"
                          >
                            {"Doctor login"}
                          </Link>
                        </Grid>
                        {/* <Grid item xs={6}>
                        <Link onClick={() => navigate("/login")} className="text-primary">
                          {"Admin Login here"}
                        </Link>
                        </Grid> */}
                      </Grid>
                    </Box>

                    <div className="text-center"></div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Container>
      {/* Container: Design Block */}
    </>
  );
}

export default LoginDoctor;
