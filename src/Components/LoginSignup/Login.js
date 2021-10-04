import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import { Link, Redirect, useHistory, Route } from "react-router-dom";
import GoogleLogin from "react-google-login";
import Profile from "../Profile/Profile";
import App from "../../App";
export default function Singin() {
  const [password, setPassword] = useState("");
  const [email, setUsername] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isAuthorized, setIsAuthorized] = React.useState();
  const [Session, setSession] = useState("");
  var history = useHistory();
  const [name, setName] = React.useState("");
  const [name2, setName2] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(false);
  const login = async (e) => {
    setLoading(true);
    setState(true);
    e.preventDefault();
    await fetch("http://glenasare15.pythonanywhere.com/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password_hash: password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          console.log("LOG IN SUCCESSFUL");
          history.push("/");
          const firstname = localStorage.getItem("firstname");
          setName(firstname);

          return response.json();
        } else if (response.status === 408) {
          console.log("SOMETHING WENT WRONG");
          this.setState({ requestFailed: true });
        }
      })
      .then((data) => {
        localStorage.setItem("firstname", data[0] + " " + data[1]);
        window.location.reload();
      });
  };

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    setName(response.profileObj.name);
    history.push("/");
    window.location.reload();
  };
  console.log(name2);
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
          <h1 style={{ fontFamily: "Comfortaa, cursive" }}>Welcome {name2}</h1>
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
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
