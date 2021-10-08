import React, { Component } from "react";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
import { AiFillGithub } from "react-icons/ai";
import { SiPostgresql } from "react-icons/si";
import { Button } from "react-bootstrap";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaGithubAlt,
  FaPython,
} from "react-icons/fa";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import ButtonMailto from "./Mailto";
export default class Footers extends Component {
  render() {
    return (
      <MDBFooter
        style={{
          backgroundColor: "black",
          justifyConent: "center",
          alignItems: "center",
          disply: "flex",
          color: "white",
        }}
        className="text-center text-lg-left"
      >
        <MDBContainer className="p-2 pb-5 " style={{marginTop:'30px',justifyConent: "center",
          disply: "flex",}} >
    
          <form style={{marginLeft:'20rem'}} action="">
            <MDBRow>
              <MDBCol md="2" mt="2" size="12" className="mb-4 mb-md-0">
                {" "}
                <AiFillGithub />
              </MDBCol>
              <MDBCol md="2" mt="2" size="12" className="mb-4 mb-md-0">
                {" "}
                <FaPython />
              </MDBCol>
              <MDBCol md="2" mt="2" size="12" className="mb-4 mb-md-0">
                {" "}
                <FaReact />
              </MDBCol>
              <MDBCol
                md="2"
                mt="2"
                size="12"
                className="mb-4 mb-md-0"
                mailto="Glenasare10@gmail.com"
              >
                {" "}
                <SiPostgresql />
              </MDBCol>
            </MDBRow>
          </form>
          <form   className="text-center p-4 "  action=""> 
            <MDBRow>
              <MDBCol size="3" className="mb-4 mb-md-4">
                <p className="pt-2">
                  <strong>Sign up for updates</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" size="12" className="mb-4 mb-md-0">
                <MDBInput
                  type="text"
                  id="form5Example2"
                  placeholder="Email address"
                />
              </MDBCol>

              <MDBCol size="2" className="mb-4 mb-md-0">
                <Button href="/">Subscribe</Button>
              </MDBCol>
            </MDBRow>
          </form>
          <Button style={{textDecoration:'none',color:'white'}} label="Contact Me" href="mailto:glenasare10@gmail.com">Contact Me</Button>
          <div style={{ flexDirection: "row" }}></div>
       
        </MDBContainer>
      
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
            <hr/>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a
            className="text-dark"
            style={{ textDecoration: "none" }}
            href="https://glenasare.netlify.com"
          >
            Glen Asare
          </a>
        </div>
      </MDBFooter>
    );
  }
}
