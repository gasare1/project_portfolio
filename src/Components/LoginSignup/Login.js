import React, { Component, useState } from "react";
import axios from "axios";
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import { Link, Redirect, useHistory, Route } from "react-router-dom";
import GoogleLogin from "react-google-login";
import Profile from "../Profile/Profile";
import App from "../../App";
export default function Singin() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isAuthorized, setIsAuthorized] = React.useState();
  const [Session, setSession] = useState("");
  const history = useHistory();
 
  const login = async (e) => {
    e.preventDefault();
    await fetch("http://127.0.0.1:5000/login1", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password_hash: password,
      }),
    }).then((response) => {
      if (response.status == 200) {
        
        history.push(
          <Route
            path="/profile"
            component={() => <Profile authorized={isAuthorized} />}
            exact
          />
        );
        setSession("You are Logged in. Please close it!");
       
      } else {
        setSession("Wrong Credentials Please try again!!");
      }
    });
  };
  const [name, setName] = React.useState("");
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    setName(response.profileObj.name);
    history.push("/profile");
    window.location.reload();
    
  };
  console.log(name)
  return (
    <div
      onSubmit={login}
      id="login"
      style={{
        marginTop: "100px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h1>SIGN IN</h1>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Button
              variant="primary"
              type="submit"
              value="submit"
              onClick={login}
            >
              Login
            </Button>
          </Form.Group>
          <br />
          <hr />
          <Form.Group className="mb-3" controlId="formBasicCheckbox" >
            <GoogleLogin
              clientId="829794049909-usu1p5b3qcvaplttm46h52b2bq9pm16f.apps.googleusercontent.com"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </Form.Group>
        </div>

        <Form.Text
          className="text-muted"
          style={{ color: "red", margin: "20px" }}
        >
          {Session}
        </Form.Text>
      </Form>
    </div>
  );
}
