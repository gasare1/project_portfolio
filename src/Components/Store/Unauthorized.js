import React, { Component } from "react";
import { Redirect } from "react-router";
import { render } from "react-dom";
import "react-datetime/css/react-datetime.css";
class Unauthorizedpage extends Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    this.state = {
      currentDate: date,
    };
  }
  render() {
    return (
      <div
        id="unauthorized"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          margin: "100px",
        }}
      >
        <h1 style={{ color: "red" }}>401 Unauthorized</h1>
        <p>
          HTTP/1.1 401 Unauthorized page please login to gain access Date:{" "}
          {this.state.currentDate}
          WWW-Authenticate: Basic realm="Access to staging site"
          <Redirect to='/'/>
        </p>
      </div>
    );
  }
}

export default Unauthorizedpage;
