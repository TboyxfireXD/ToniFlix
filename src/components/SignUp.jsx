import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SignUp.css";
import Navs from "./Navs";

function SignUp() {
  return (
    <div className="op">
      <div className="signUp">
        <div className="header">
          <h1>Sign Up/Log In</h1>
        </div>
        <div className="sign-up">
          <Form className="form">
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              style={{ backgroundColor: "black" }}
              type="submit"
              href="/movies"
            >
              Submit
            </Button>
          </Form>
        </div>
        <footer>
          <p>2024 Toniflix. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default SignUp;
