import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  let button;
  if (false) {
    button = <a className={styles.navItem}>Logout</a>;
  } else {
    button = (
      <Link className={styles.navItem} to="/login">
        Login
      </Link>
    );
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link className={styles.navItem} to="/">
              Home
            </Link>
            s{button}
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavBar;
