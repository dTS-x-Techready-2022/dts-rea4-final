import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import { useState } from "react";
import { signUp } from "../../components/signup";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function RegisterPage() {
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState({
    email: "",
    password: "",
  });

  const formHandler = (e) => {
    const { value, name } = e.target;
    const form = {
      email: formRegister.email,
      password: formRegister.password,
    };
    form[name] = value;
    setFormRegister(form);
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    const response = await signUp(formRegister.email, formRegister.password);
    console.log(response);
    if (response.message == "Firebase: Error (auth/email-already-in-use).") {
      Swal.fire("Email has already been used, please use another email");
    } else {
      Swal.fire("Success registering new email, please sign in");
      navigate("/login");
    }
  };
  return (
    <Form onSubmit={registerHandler} className="mt-3 ms-6 w-25 container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={formHandler}
          name="email"
          type="email"
          placeholder="Enter email"
          value={formRegister.email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={formHandler}
          name="password"
          type="password"
          placeholder="Password"
          value={formRegister.password}
        />
      </Form.Group>
      <div>
        <Link to="/login">Have an account? Please sign in</Link>
      </div>
      <Button variant="dark" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
}

export default RegisterPage;
