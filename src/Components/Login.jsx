import { Container, Col, Row, Form, Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { userLogin } from "../Services/UserServices";
import { doctorLogin } from "../Services/DoctorServices";
import {Image} from "react-bootstrap";
import login from "./Image/login.jpg";
export function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(
    {
      login: "", email: "", phone: "", password: ""
    }
  );
  const [loginError, setLoginError] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (formData.login==='user') {
      console.log("USER");
      try {
        const result = await userLogin(formData);
        console.log(result);
        localStorage.setItem("token", result.token);
        navigate("/");
      } catch (error) {
        console.log(error);
        setLoginError(true);

        setTimeout(() => {
          setLoginError(false);       //to vanish the message after 2 sec
        }, 2000);
      }
    }
    else {
      console.log("DOCTOR");
      try {
        const result = await doctorLogin(formData);
        console.log(result);
        localStorage.setItem("token", result.token);
        navigate("/doctor");
      } catch (error) {
        console.log(error);
        setLoginError(true);
      }
    }
  }
  return (
    <Container fluid className="Login">

      <Row style={{ padding: "" }}>
        <Col lg={2}>
        </Col>
        <Col lg={3}>
          <Alert style={{ background: 'transparent', textAlign: 'center', border: 'none' }}>
            <h2><b>Login</b></h2>
          </Alert>
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><b>Gender</b></Form.Label>
              <Row>
                <Col lg={3}><Form.Check type="radio" label="User" name="login" value="user" checked={formData.login === 'user'} onChange={handleChange} required /></Col>
                <Col lg={3}><Form.Check type="radio" label="Doctor" name="login" value="doctor" checked={formData.login === 'doctor'} onChange={handleChange} required /></Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ color: 'rgb(0,0,153)' }}><b>Email</b></Form.Label>
              <Form.Control type="email" placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ color: 'rgb(0,0,153)' }}><b>Phone Number</b></Form.Label>
              <Form.Control type="text" placeholder="Enter Phone Number" name="phone" value={formData.phone} onChange={handleChange} required pattern="[0-9]{10}" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ color: 'rgb(0,0,153)' }}><b>Password</b></Form.Label>
              <Form.Control type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleChange} required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" />
              <Form.Text className="text-muted">
                Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
              </Form.Text>
            </Form.Group>


            <Button style={{ backgroundColor: "rgb(0,0,153)" }} type="submit">
              Login
            </Button>

          </Form>
          {loginError ? <Alert style={{ backgroundColor: "rgb(0,204,102)" }}>Invalid Phone or Password</Alert> : null}
          
        </Col>
        <Col lg={1}>
        </Col>
        <Col lg={6}>
        <Image  src={login}></Image>
        </Col>
      </Row>


    </Container>
  );
}