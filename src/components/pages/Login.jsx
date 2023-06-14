import React, { useState } from 'react';
import $ from "jquery";
import {Form, Label, Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Grid, Link } from '@mui/material';
import Copyright from '../ui/Copyright';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router';




function LoginPT() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = $(e.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        setResult(data);
      },
    });
  };

  return (
    <>
      {/* Section: Design Block */}
      <Container className="text-center">
        {/* Background image */}
        <Col>
          <div
            className="p-5 bg-image"
            style={{
              backgroundImage: "url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm373batch15-bg-11.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f8e17abb22adb3b3261d9076259e3e0e')",
              height: "300px", 
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          {/* Background image */}
        </Col>
        <Col>
          <div
            className="card mx-4 mx-md-5 shadow-5-strong"
            style={{
              marginTop: "-100px",
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)"
            }}
          >
            <div className="card-body py-4 px-md-4">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-7">
                  <h2 className="fw-bold mt-3">Hello ADMIN!</h2>
                  <h2 className="mb-3">Sign In</h2>
                  <Form
                    action="http://localhost:8000/server.php"
                    method="post"
                    onChange={(event) => handleChange(event)}
                  >
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        value={username}
                        onChange={(event) => handleChange(event)}
                        placeholder='Username'
                      />
                      {/* <Label className="form-label" htmlFor="username">Username</Label> */}
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type={show ? "text" : "password"}
                        id="password"
                        className="form-control"
                        placeholder='Password'
                        onChange={(event) => handleChange(event)}
                      />
                      {/* <label className="form-label" htmlFor="password">Password</label> */}
                    </div>

                    <LoadingButton
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      loading={isLoading}
                    >
                      Sign In
                    </LoadingButton>
                    <Box>
                      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                        <Link onClick={() => navigate("/")} className="text-primary">
                          {"Patients' Login here"}
                        </Link>
                        </Grid>
                        <Grid item xs={6}>
                        <Link onClick={() => navigate("/loginDR")} className="text-muted">
                          {"Doctor's Login here"}
                        </Link>
                        </Grid>
                      </Grid>
                
                    </Box>

                    <div className="text-center"></div>
                  </Form>
                  
                </div>
              </div>
            </div>
          </div>
          <Copyright />
        </Col>
      </Container>
      {/* Container: Design Block */}
      <h1>{result}</h1>
    </>
  );
}

export default LoginPT;