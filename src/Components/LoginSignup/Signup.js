import React, { Component, useState } from "react";
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [state, setStates] = useState("");
  const [terms, setTerms] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isTermOpen, setIsTermOpen] = React.useState(false);

  const showModal = () => {
    setIsTermOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
    setIsTermOpen(false);
  };
  const submit = async (e) => {
    e.preventDefault();
    await fetch(" http://127.0.0.1:5000/adminregister", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password_hash: password,
       
      }),
    });

    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Form onSubmit={submit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Row>
      </Form>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default Register;
