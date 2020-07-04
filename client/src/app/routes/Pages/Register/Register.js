import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";


import {
    Form,
    FormGroup,
    FormText,
    Input,
    Button,
    Label,
    EmptyLayout,
    ThemeConsumer
} from "./../../../components";

import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";

const Register = () => {
  const history = useHistory();
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [numberOfClients, setType] = useState("");
  const [trainerType, setCategory] = useState("");
  const [errormessage, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [status, setStatus] = useState(false);

 
  const Submit = async (event) => {
    event.preventDefault();

    if(!firstName||!lastName||!email||!password||!numberOfClients||!trainerType){
      setMessage("Please provide all fields!")
    }
    else{
    await axios
      .post("/api/v1/trainer/auth/register", {
        firstName,
        lastName,
        email,
        password,
        numberOfClients,
        trainerType,
      })
      .then((res) => {
        console.log(res.data.success);
        setToken(res.data.token);
        setStatus(res.data.success);
        setFirst("");
        setLast("");
        setCategory("");
        setEmail("");
        setPassword("");
        setType("");
        history.push({ pathname: "/trainer/auth/dashboard" });
      })
      .catch((err) => {
        console.log(err.response.data.error);
        console.log(err.response.data.success);
        setStatus(err.response.data.success);
        setMessage(err.response.data.error);
      });
    }
  };
  const First = (e) => {
    setFirst(e.target.value);
  };
  const Last = (e) => {
    setLast(e.target.value);
  };
  const Email = (e) => {
    setEmail(e.target.value);
  };
  const Password = (e) => {
    setPassword(e.target.value);
  };
  const Type = (e) => {
    setType(e.target.value);
  };
  const Category = (e) => {
    setCategory(e.target.value);
  };

  return (
    
    <EmptyLayout  >
       <EmptyLayout.Section center width={400}> 
        {/* START Header */}
        {/* <HeaderAuth title="Create Account" /> */}
        {/* END Header */}
        {/* START Form */}
        <div style={{textAlign:"center"}}>
        <h1 >TREAD</h1>
        <h2   >Create Account</h2>
        <p  style={{color:"red"}} >{errormessage}</p>
        </div>
        
        <Form className="mb-3">
        
          <FormGroup>
            <Label for="firstname">First Name</Label>
            <Input
              type="text"
              placeholder="Enter a First Name..."
              className="bg-white"
              onChange={First} 
              value={firstName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input
              type="text"
              placeholder="Enter a Last Name..."
              className="bg-white"
              onChange={Last} 
              value={lastName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email address</Label>
            <Input
              type="email"
              placeholder="Email address..."
              className="bg-white"
              onChange={Email}
              value={email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              placeholder="Password..."
              className="bg-white"
              onChange={Password}
                value={password}
            />
          </FormGroup>
          <FormGroup>
            <Label for="noclients">Number of clients</Label>
            <Input
              type="select"
              className="bg-white"
              onChange={Type}
                
                value={numberOfClients}
            >
                <option></option>
                <option>1-1 clients</option>
                <option>1-2 clients</option>
                <option>1-3 clients</option>
                <option>1-4 clients</option>
                <option>1-5 clients</option>
                </Input>
          </FormGroup>
          <FormGroup>
            <Label for="category">Trainer Category</Label>
            <Input
              type="select"
              className="bg-white"
              onChange={Category}
                
              value={trainerType}
            >
                <option></option>
                <option>HIIT</option>
                <option>a</option>
                <option>b</option>
                <option>c</option>
                <option>d</option>
                </Input>
          </FormGroup>
         
          <ThemeConsumer>
            {({ color }) => (
              <Button color={color} block tag={Link} to="/trainer/auth/dashboard" onClick={Submit}>
                Create Account
              </Button>
            )}
          </ThemeConsumer>
        </Form>
        {/* END Form */}
        {/* START Bottom Links */}
        <FormText style={{ textAlign: "center", fontSize: 14, color:"black" }}>
            Already registered <Link to="/trainer/auth/login" style={{color:"blue"}}>Sign in?</Link>
        </FormText>
        
        {/* END Bottom Links */}
        {/* START Footer */}
        <FooterAuth />
        {/* END Footer */}
      </EmptyLayout.Section>
    </EmptyLayout>
    
  );
};
export default Register;
