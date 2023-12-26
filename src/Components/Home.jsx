
import { Carousel } from "react-bootstrap"; 
import {Container} from "react-bootstrap";
import { Image,Row } from "react-bootstrap";
import slider1 from './Image/slider1.png';
import slider2 from './Image/slider2.png';
import slider3 from './Image/slider3.png';
import pic1 from './Image/pic1.png';
export function Home(){
    const carouselItemStyle = {
        height: "600px", // Adjust the height as needed
        
      };
    return(
        <Container fluid className="Homepage">

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
        <Row><Image src={pic1}></Image></Row>
        </Container>
    );
}