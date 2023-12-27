
import { Carousel } from "react-bootstrap"; 
import {Container,Col,Row,Card,Button,Image,Collapse} from "react-bootstrap";
import { useState } from "react";
import slider1 from './Image/slider1.png';
import slider2 from './Image/slider2.png';
import slider3 from './Image/slider3.png';
import pic1 from './Image/pic1.png';
import { Footer } from "./Footer";
import { Clinispecial } from "./Clinispecial";
export function Home(){
    const carouselItemStyle = {
        height: "600px", // Adjust the height as needed
        
      };

      const [open, setOpen] = useState(false)

    return(
        <Container fluid className="Homepage d-flex flex-column align-items-center justify-content-center">

    <Carousel style={{width:'100%'}}>
      <Carousel.Item style={carouselItemStyle}>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to MediCareHub</h3>
         
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item style={carouselItemStyle}>
      <img
          className="d-block w-100"
          src={slider2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to MediCareHub</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={carouselItemStyle}>
      <img
          className="d-block w-100"
          src={slider3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to MediCareHub</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        

    <Row id="cards">
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="card1.jpg" />
                            <Card.Body>
                            <Card.Title>Dentist</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV">Know More</Button>
                            
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="card2.jpg" />
                            <Card.Body>
                            <Card.Title>Gynecologist</Card.Title>
                            <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV">Know More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="card4.jpg" />
                            <Card.Body>
                            <Card.Title>physiotherapy</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV">Know More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="card6.jpeg" />
                            <Card.Body>
                            <Card.Title>Orthopedic</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV">Know More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    id="btnShow"
                >
                Show More
                </Button>
                </Row>
                <Collapse in={open}>
                <Row id="cards">
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="card7.jpg" />
                            <Card.Body>
                            <Card.Title>Nephrologist</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV">Know More</Button>
                            
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="card8.jpg" />
                            <Card.Body>
                            <Card.Title>Cardiologist</Card.Title>
                            <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV">Know More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="card9.jpg" />
                            <Card.Body>
                            <Card.Title>Pulmonologist</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV">Know More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="card10.jpg" />
                            <Card.Body>
                            <Card.Title>Ophthalmologist</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" id="btnSV">Know More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Collapse>








        <Clinispecial></Clinispecial>

        <Row><Image src={pic1}></Image></Row>
       
        </Container>
    );
}