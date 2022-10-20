import { Navbar, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
   return (
      <>
         <Container fluid className='bg-light'>
            <Row className="align-items-center py-3 px-lg-5">
               <div className="col-lg-5">
                  <a href className="navbar-brand d-none d-lg-block">
                     <img src="/banner.jpg" width={'100%'} height={70} />
                  </a>
               </div>
               <div className="col-lg-5">
                  <a href className="navbar-brand d-none d-lg-block">
                     <img src="/banner.jpg" width={'100%'} height={70} />
                  </a>
               </div>
               <div className="col-lg-2 text-center text-lg-right">
                  Monday, January 01, 2045
               </div>
            </Row>
         </Container>

         <Navbar bg="light" expand="lg" className='py-2 px-lg-5'>
            <Container fluid>
               <Navbar.Brand href="/"> <h3><span style={{ color: 'red' }}>INDO</span><span className="text-black">NEWS</span></h3></Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse>
                  <Nav className="me-auto my-2 my-lg-0" >
                     <Nav.Link href="/">Home</Nav.Link>
                     <Nav.Link href="dashboard">Dashboard</Nav.Link>
                     <Nav.Link href="login">Login</Nav.Link>
                     <Nav.Link href="register">Register</Nav.Link>
                     <NavDropdown title="User" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                           Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                           Logout
                        </NavDropdown.Item>
                     </NavDropdown>
                  </Nav>
                  <Form className="d-flex ml-auto">
                     <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 search-width"
                        aria-label="Search"
                     />
                     <Button variant="outline-success"><i className="fa fa-search" /></Button>
                  </Form>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
}

export default Header;