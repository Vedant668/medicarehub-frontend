import {Navbar ,Container ,Nav ,Button} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import './AllCss.css';
export function NavigationBar(){
    
    return(
        <Navbar expand="lg" className=" Navbar bg-body-tertiary sticky-top" bg="dark" style={{height:'80px', fontSize:'20px'}}>

        {/* used sticky-top to fix nav bar */}
  
        <Container fluid>
          <Navbar.Brand href="#">Medi Care Hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <LinkContainer to="/">
              <Nav.Link >Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Hospitals">
              <Nav.Link >Hospitals</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/medicine">
              <Nav.Link >Medicines</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
              <Nav.Link >About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
              <Nav.Link >Contact</Nav.Link>
              </LinkContainer>
              
            
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form> */}
            {/* <LinkContainer to="/learnerlist">
            <Button variant="outline-success" className="me-5">list</Button>
            </LinkContainer> */}
  
            {/* <LinkContainer to="/admin">
            <Button variant="outline-success" className="me-5">Admin</Button>
            </LinkContainer> */}
  
            <LinkContainer to="/login">
            <Button variant="primary" className="me-2" style={{width :'100px'}}>Login</Button>
            </LinkContainer>
            
  
            {/* <LinkContainer to="/signinadmin">
            <Button variant="primary" className="me-2" >Sign In</Button>
            </LinkContainer> */}
            
            <LinkContainer to="/registration">
            <Button variant="primary" className="me-3">Register</Button>
            </LinkContainer>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}