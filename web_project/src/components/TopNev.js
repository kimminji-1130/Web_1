import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNev() {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
        <img src="https://item.kakaocdn.net/do/30492b0eb225427f966bf63d1dbfb017f43ad912ad8dd55b04db6a64cddaf76d"
          className="cheeseduck"
          
        />
          <Navbar.Brand href="pages\Home.js">블로그</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="pages\Home.js">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <Nav.Link href="#action3">Link</Nav.Link>
              <Nav.Link href="#action4">Link</Nav.Link>
              <Nav.Link href="#action5">Link</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    );
  }
  
  export default TopNev;