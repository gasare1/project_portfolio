import React, { Component } from "react";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
import { AiFillGithub } from "react-icons/ai";
import { SiPostgresql } from "react-icons/si";
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
        <MDBContainer className="p-5 pb-0 " style={{marginTop:'30px',justifyConent: "center",
          alignItems: "center",
          disply: "flex",}} >
          <form style={{marginLeft:'10rem'}} action="">
            <MDBRow>
              <MDBCol size="auto" className="mb-4 mb-md-0">
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

              <MDBCol size="auto" className="mb-4 mb-md-0">
                <MDBBtn>Subscribe</MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
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
          <ButtonMailto style={{textDecoration:'none',color:'white'}} label="Contact Me" mailto="mailto:glenasare10@gmail.com" ></ButtonMailto>
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
