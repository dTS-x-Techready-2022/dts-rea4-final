import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import styles from "./NavBar.module.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    Swal.fire("Successfully logged out");
    navigate("/login");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link className={styles.navItem} to="/login">
              Login
            </Link>
            <a className={styles.navItem} onClick={logoutHandler}>
              Logout
            </a>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavBar;
