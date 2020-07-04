import React from "react";

import {
  Link,
} from "react-router-dom";
import { Button, Form, Col, Container } from "react-bootstrap";

const TrainerHome = () => {
  const headStyle = {
    textAlign: "center",
    fontSize: 40,
  };
  const subheadStyle = {
    textAlign: "center",
    fontSize: 30,
  };

  const buttonStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
      <div style={{textAlign:"center"}}>
    <Container fluid >
      <div style={{maxWidth:400}}>
        <br />
        <Form className="Fields">
          <Form.Row>
            <Col>
              <Form.Text style={headStyle}>TREAD</Form.Text>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Text style={subheadStyle}>
                Trainer Register and Login
              </Form.Text>
            </Col>
          </Form.Row>

          <br />

          <br />
          
          <Form.Row>
            <Col>
              <Link to="/trainer/auth/register" style={buttonStyle}>
                <Button variant="primary" type="submit" block size="md">
                  Register
                </Button>
              </Link>
              {/* <Button variant="primary" type="submit" block size="md">
                Create your account
              </Button> */}
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Link to="/trainer/auth/login" style={buttonStyle}>
                <Button variant="primary" type="submit" block size="md">
                  Login in
                </Button>
              </Link>
            </Col>
          </Form.Row>
        </Form>
      </div>
    </Container>
    </div>
  );
};

export default TrainerHome;
