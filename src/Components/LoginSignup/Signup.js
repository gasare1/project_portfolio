import React, { Component, useState } from "react";
import { Form,Modal, Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [state, setStates] = useState("");
  const [terms, setTerms] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isTermOpen, setIsTermOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const showModal = () => {
    setIsTermOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
    setIsTermOpen(false);
  };
  const submit = async (e) => {
    e.preventDefault();
    await fetch("https://glenasare15.pythonanywhere.com/portfolioregister", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "email": email,
        "password_hash": password,
        "firstname":firstname,
        "lastname":lastname
       
      }),
      
    }).then((response) => {
      console.log(response)
      if(response.status == 200){
        setMessage("You have been registered succesfully, Please close and login!!");
      }
     
     
    });

    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      {message}
      <Form onSubmit={submit}>
        <Row className="mb-3">
          

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
        
          <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
    
          
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="First Name"
              required
              onChange={(e) => setFirstname(e.target.value)}
            />
         
       
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Last Name"
              required
              onChange={(e) => setLastname(e.target.value)}
            />
          </Form.Group>
        </Row>
      </Form>
      <Modal.Footer>
      <Button variant="outlined" color="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default Register;
