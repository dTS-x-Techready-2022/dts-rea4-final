import { useCallback, useEffect, useState } from 'react';
import { Navbar, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logout } from "../slices/auth";

function Header() {

   const location = useLocation();
   const { user: currentUser } = useSelector((state) => state.auth);
   const [dateState, setDateState] = useState(new Date());

   const dispatch = useDispatch();
   const handleLogout = useCallback(() => {
      dispatch(logout());
   }, [dispatch]);

   useEffect(() => {
      setInterval(() => setDateState(new Date()), 1);
   }, [])

   const date = dateState.toLocaleDateString('id-ID', {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
   });

   return (
      <>
         <Container fluid className='bg-light'>
            <Row className="align-items-center py-3 px-lg-5">
               <div className="col-lg-5">
                  <a href className="navbar-brand d-none d-lg-block">
                     <img src="/banner.jpg" width={'100%'} height={50} alt="" />
                  </a>
               </div>
               <div className="col-lg-5">
                  <a href className="navbar-brand d-none d-lg-block">
                     <img src="/banner.jpg" width={'100%'} height={50} alt="" />
                  </a>
               </div>
               <div className="col-lg-2 text-center text-lg-left">
                  {date}
               </div>
            </Row>
         </Container>

         <Navbar bg="light" expand="lg" className='py-2 px-lg-5'>
            <Container fluid>
               <Navbar.Brand href="/">
                  <h3 style={{ fontWeight: 800 }}>
                     <span style={{ color: 'red' }}>INDO</span><span className="text-black">NEWS</span>
                  </h3>
               </Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse>
                  <Nav activeKey={location.pathname} className="me-auto my-2 my-lg-0" >
                     <Nav.Link href="/" as={Link} to="/">Home</Nav.Link>
                     {currentUser ? (
                        <>
                           <Nav.Link href="/dashboard" as={Link} to="/dashboard">Dashboard</Nav.Link>
                           <NavDropdown title={currentUser.email} id="navbarScrollingDropdown">
                              <NavDropdown.Item as={Link} href="/profile" to="/profile">Profile</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#" onClick={handleLogout}>
                                 <span className="fa fa-sign-out mr-1"></span> Logout
                              </NavDropdown.Item>
                           </NavDropdown>
                        </>
                     ) :
                        <>
                           <Nav.Link as={Link} href="/login" to="/login">Login</Nav.Link>
                           <Nav.Link as={Link} href="/register" to="/register">Register</Nav.Link>
                        </>
                     }
                  </Nav>

                
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
}

export default Header;