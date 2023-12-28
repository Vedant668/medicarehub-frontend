import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
//import { saveStudent } from '../Services/ELearningServices';
import './AllCss.css';
export function BookingForm() {


    const [formData, setFormData] = useState({

        Name: '',
        DateOfBirth: '',
        Age: '',
        Weight: '',
        Gender: '',
        Symptoms: '',
        AppointmentDate: '',
        AppointmentTime: '',
        Doctor: ''



    });

    // to print inserted sucessful or not message on page
    const [isSubmitted, setIsSubmitted] = useState(false);

    // const [error, setError] = useState("");

    // const handleChangeAge = (e)=>{
    //     if(e.target.value <200){
    //         setFormData({ ...formData, [e.target.Age]: e.target.value });
    //     }
    //  else{
    //     setError("Enter a valid Age < 200");
    //     return;
    //   }
    // }

    const handleChange = (e) => {
        // if(e.target.name === "Age"){
        //     if(e.target.value >200 || e.target.value < 1)
        //     return;
        // }
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(formData);

        try {

            // const result = await saveStudent(formData);
            // setIsSubmitted(true);


            // setTimeout(() => {
            //     setIsSubmitted(false)       //to vanish the registered successful message after 2 sec
            // }, 2000);

            // console.log(result.message);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container fluid className="BookingForm">

            <Row>
                <Col lg={1}></Col>
                <Col lg={4}>
                    <Alert style={{ background: 'transparent', textAlign: 'center', border: 'none' }}>
                        <h2>Welcome to Booking form</h2>
                    </Alert>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Name</b></Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="Name" value={formData.Name} onChange={handleChange} required pattern="[A-Za-z ]{1,20}" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Date of Birth</b></Form.Label>
                            <Form.Control type="date" placeholder="Enter Date of Birth" name="DateOfBirth" value={formData.DateOfBirth} onChange={handleChange} required />
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label><b>Age</b></Form.Label>
                                    <Form.Control type="number" placeholder="Enter Age" name="Age" value={formData.Age} onChange={handleChange} required min="1" max="110" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label><b>Weight</b></Form.Label>
                                    <Form.Control type="number" placeholder="Enter Weight" name="Weight" value={formData.Weight} onChange={handleChange} required min="5" max="200" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Gender</b></Form.Label>
                            <Row>
                                <Col lg={3}><Form.Check type="radio" label="Male" name="Gender" value="male" checked={formData.Gender === 'male'} onChange={handleChange} required /></Col>
                                <Col lg={3}><Form.Check type="radio" label="Female" name="Gender" value="female" checked={formData.Gender === 'female'} onChange={handleChange} required /></Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Symptoms</b></Form.Label>
                            <Form.Control type="textarea" placeholder="Enter Symptoms" name="Symptoms" value={formData.Symptoms} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Appointment Date</b></Form.Label>
                            <Form.Control type="date" placeholder="Enter AppointmentDate" name="AppointmentDate" value={formData.AppointmentDate} onChange={handleChange} required />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label><b>Appointment Time</b></Form.Label>
                                    <Form.Control as="select" name="AppointmentTime" value={formData.AppointmentTime} onChange={handleChange} required>
                                        <option value="" disabled>Select</option>
                                        <option value="9">9:00 AM</option>
                                        <option value="12">12:00 PM</option>
                                        <option value="3">3:00 PM</option>
                                        <option value="6">6:00 PM</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label><b>Doctor</b></Form.Label>
                                    <Form.Control as="select" name="Doctor" value={formData.Doctor} onChange={handleChange} required>
                                        <option value="" disabled selected>Select</option>
                                        <option value="Dr. Puneet Tiwari">Dr. Puneet Tiwari</option>
                                        <option value="Dr. Adnan Khan">Dr. Adnan Khan</option>
                                        <option value="Dr. Vishal Bansal">Dr. Vishal Bansal</option>
                                        <option value="Dr. Sanjay Gurwani">Dr. Sanjay Gurwani</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Button style={{ backgroundColor: "rgb(0,0,153)" }} type="submit">
                                Submit
                            </Button>
                            {isSubmitted ? <Alert style={{ backgroundColor: "rgb(0,204,102)" }}>Registered Successfully</Alert> : null}
                        </Row>
                    </Form>
                </Col>
                <Col lg={7}></Col>
            </Row>


            <Row className='mt-3' style={{ height: '50px' }}>
                <Col lg={6}>
                </Col>
                <Col lg={6}>

                </Col>
            </Row>

        </Container>
    );
};

