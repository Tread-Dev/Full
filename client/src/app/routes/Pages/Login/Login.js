import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";

import {
  Form,
  FormGroup,
  FormText,
  Input,
  CustomInput,
  Button,
  Label,
  EmptyLayout,
  ThemeConsumer,
} from "./../../../components";

import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormessage, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [status, setStatus] = useState(false);

  const Submit = async (event) => {
    event.preventDefault();

    if(!email||!password){
        setMessage("Please input all fields")
    }
    else{
    await axios
      .post("/api/v1/trainer/auth/register", { email, password })
      .then((res) => {
        setToken(res.data.token);
        setStatus(res.data.success);
        setEmail("");
        setPassword("");
        history.push({ pathname: "/trainer/auth/dashboard" });
        console.log(email+"  "+password);
        // window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
      })
      .catch((err) => {
        console.log(err.response.data.error);
        setStatus(err.response.data.success);
        setMessage(err.response.data.error);
      });

    //setEmail("");
    
    }
  };

  const Email = (e) => {
    setEmail(e.target.value);
  };
  const Password = (e) => {
    setPassword(e.target.value);
  };

  return (
    <EmptyLayout>
      <EmptyLayout.Section center width={1000}>
        {/* START Header */}
        {/* <HeaderAuth 
                title="Sign In to Application"
            /> */}
        <div style={{ textAlign: "center" }}>
          <h1>TREAD</h1>
          <h2>Sign In to Application</h2>
          <p style={{ color: "red" }}>{errormessage}</p>
        </div>

        {/* END Header */}
        {/* START Form */}
        <Form className="mb-3">
          <FormGroup>
            <Label for="emailAdress">Email Adress</Label>
            <Input
              type="email"
              placeholder="Enter email"
              onChange={Email}
              required
              value={email}
              className="bg-white"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              placeholder="Password"
              onChange={Password}
              required
              value={password}
              className="bg-white"
            />
          </FormGroup>

          <ThemeConsumer>
            {({ color }) => (
              <Button
                color={color}
                block
                tag={Link}
                onClick={Submit}
              >
                Sign In
              </Button>
            )}
          </ThemeConsumer>
        </Form>
        {/* END Form */}
        {/* START Bottom Links */}
        <FormText
          style={{
            textAlign: "center",
            fontSize: 14,
            textDecoration: "none",
            
          }}
        >
          <Link to="/trainer/auth/register" style={{ color:"blue" }}>
            Register Now!
          </Link>{" "}
          <Link
            to="/trainer/auth/forgotpassword"
            style={{ color:"blue" }}
          >
            Forget Password?
          </Link>
        </FormText>
        {/* <div className="d-flex mb-5">
                <Link to="/pages/forgotpassword" className="text-decoration-none">
                    Forgot Password
                </Link>
                <Link to="/pages/register" className="ml-auto text-decoration-none">
                    Register
                </Link>
            </div> */}
        {/* END Bottom Links */}
        {/* START Footer */}
        {/* <FooterAuth /> */}
        {/* END Footer */}
      </EmptyLayout.Section>
    </EmptyLayout>
  );
};
export default Login;
