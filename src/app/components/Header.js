import { useCallback } from 'react';
import { Navbar, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from "../slices/auth";

function Header() {

   const { user: currentUser } = useSelector((state) => state.auth);
   const dispatch = useDispatch();

   const handleLogout = useCallback(() => {
      dispatch(logout());
   }, [dispatch]);


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
                     <Nav.Link as={Link} to="/">Home</Nav.Link>
                     {currentUser ? (
                        <>
                           <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                           <NavDropdown title="User" id="navbarScrollingDropdown">
                              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#" onClick={handleLogout}>
                                 Logout
                              </NavDropdown.Item>
                           </NavDropdown>
                        </>
                     ) :
                        <>
                           <Nav.Link as={Link} to="/login">Login</Nav.Link>
                           <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        </>
                     }
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