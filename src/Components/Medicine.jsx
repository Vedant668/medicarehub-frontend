import './AllCss.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic1 from './Image/brow.jpg';
import pic2 from './Image/healthcare3.jpg';
import pic3 from './Image/healthcare.jpg';
import pic4 from './Image/medicine-bottles-pills4.jpg';
import pic5 from './Image/packings-pills-capsules-medicines_5.jpg';
import pic6 from './Image/colorful-pills8.jpg';
export function Medicine(){
  return(
  <Container>
    <Row>
       <Col>
    <Card className ="mt-5" style={{ width: '18rem' }} >
    <Card.Img variant="top" src={pic2} />
    <Card.Body className='CardBody'>
      <Card.Title className='CardTitle' >Paracetamol</Card.Title>
      <Card.Text className="CardText">
      an analegic and antiprytic is used to temporaly relieve in pain the
        bulk of the  content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Paracetamol used in two dose</ListGroup.Item>
      <ListGroup.Item>paracetamol give relief</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
   
  </Card>
 </Col> 

 <Col>
    <Card className="mt-5" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic6} />
    <Card.Body className='CardBody'>
      <Card.Title className='CardTitle'>Dolutegravir</Card.Title>
      <Card.Text className="CardText">
        Some quick example medicine to build on the chemical and make up the
        bulk of the drug content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>drug just odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
   
  </Card>
 </Col> 

 <Col>
    <Card className="mt-5" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic1} />
    <Card.Body  className='CardBody'>
      <Card.Title className='CardTitle'>Mupirocin</Card.Title>
      <Card.Text className="CardText">
      Some quick relief pain in eye rashes to on the  and make up the
        of the medicine content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
   
  </Card>
 </Col> 
  </Row>

  <Row>
       <Col>
    <Card className="mt-5" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic4} />
    <Card.Body className='CardBody'>
      <Card.Title className='CardTitle' >Delamanid</Card.Title>
      <Card.Text className="CardText">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
   
  </Card>
 </Col> 

 <Col>
    <Card className="mt-5" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic3} />
    <Card.Body className='CardBody'>
      <Card.Title className='CardTitle'>Bedaquiline</Card.Title>
      <Card.Text className="CardText">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
   
  </Card>
 </Col> 

 <Col>
    <Card className="mt-5" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic5} />
    <Card.Body  className='CardBody'>
      <Card.Title className='CardTitle'>Terbinafine</Card.Title>
      <Card.Text className="CardText">
      an analegisc and to antiprytic is used to temporaly relieve in pain the
        bulk of the  content.
      </Card.Text>
    </Card.Body>
    
     
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
   
   
  </Card>
 </Col> 
  </Row>
  </Container>
  )
}