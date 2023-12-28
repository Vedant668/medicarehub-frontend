import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { saveUser } from '../Services/UserServices';
import './AllCss.css';
export function Signup  ()  {


    const [formData, setFormData] = useState({

        Name: '',
        Phone: '',
        Email: '',
        Gender: '',
        Password: '',
        City:''
        
    });

    // to print inserted sucessful or not message on page
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(formData);

        try {

            const result = await saveUser(formData);
            setIsSubmitted(true);


            setTimeout(() => {
                setIsSubmitted(false)       //to vanish the registered successful message after 2 sec
            }, 2000);

            console.log(result.message);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container fluid className="RegistrationForm ">

            <Row>
                <Col lg={7}></Col>
                <Col lg={5}>
                    <Alert style={{background:'transparent', textAlign:'center', border: 'none'}}>
                        <h2>Welcome to Registration form</h2>
                    </Alert>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Name</b></Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="Name" value={formData.Name} onChange={handleChange} required pattern="[A-Za-z ]{1,20}" />
                        </Form.Group>                        

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Phone Number</b></Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone Number" name="Phone" value={formData.Phone} onChange={handleChange} required pattern="[0-9]{10}" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Email Address</b></Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" name="Email" value={formData.Email} onChange={handleChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Gender</b></Form.Label>
                            <Row>
                                <Col lg={1}><Form.Check type="radio" label="Male" name="Gender" value="male" checked={formData.Gender === 'male'} onChange={handleChange} required /></Col>
                                <Col lg={1}><Form.Check type="radio" label="Female" name="Gender" value="female" checked={formData.Gender === 'female'} onChange={handleChange} required /></Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Password</b></Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" name="Password" value={formData.Password} onChange={handleChange} required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" />
                            <Form.Text className="text-muted">
                                Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
                            </Form.Text>
                        </Form.Group>
                        
                        <Row>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>City</b></Form.Label>
                            <Form.Control type="text" placeholder="Enter City" name="City" value={formData.Username} onChange={handleChange} required pattern="[A-Za-z0-9]{5,20}" />
                        </Form.Group>
                        
                        <Button style={{backgroundColor:"rgb(0,102,102)"}} type="submit">
                            Submit
                        </Button>
                        {isSubmitted ? <Alert style={{backgroundColor:"rgb(0,204,102)"}}>Registered Successfully</Alert> : null}
                        </Row>
                    </Form>
                </Col>
            </Row>


            <Row className='mt-3' style={{height:'50px'}}>
                <Col lg={6}>
                </Col>
                <Col lg={6}>
               
                </Col>
            </Row>

        </Container>
    );
};

