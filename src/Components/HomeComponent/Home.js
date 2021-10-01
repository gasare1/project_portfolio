import React, { useState, useRef, useEffect } from "react";
import video from "../../Images/portback.mp4";
import { BsBootstrap } from "react-icons/bs";
import { FaReact, FaHtml5, FaCss3, FaGithubAlt } from "react-icons/fa";
import { Form, Modal } from "react-bootstrap";
import Navigbar from "../NavBar/Navbar/navigbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "../Projects/Projects";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import ScrollToTop from "../NavBar/Navbar/ScrollToTop";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Video,
  HomeBg,
  HomeContainer,
  HomeContent,
  HomeH1,
  HomeP,
  HomeP1,
  HomeContent1,
  HomeText,
  HomeContentP,
} from "./HomeStyle";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "@material-ui/core";

import "aos/dist/aos.css";

import file from "./Profile.pdf";

const Home = () => {
  AOS.init();
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `Profile.pdf`;
    link.href = "C:/Users/Glen%20Asare/Downloads/Profile.pdf";
    link.click();
  };
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const showModal = () => {
    setIsLoginOpen(true);
  };

  const hideModal = () => {
    setIsLoginOpen(false);
  };
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  const showContactModal = () => {
    setIsContactOpen(true);
  };
  const hideContactModal = () => {
    setIsContactOpen(false);
  };
  return (
    <div>
      <Navigbar />
      <HomeContainer id="/">
        <HomeBg>
          <Video autoPlay loop muted src={video} type="video/mp4" />
        </HomeBg>
        <HomeText>
          <HomeContentP
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="600"
          >
            ReactJS <FaReact />
          </HomeContentP>
          <HomeContentP
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="600"
          >
            Python
            <FaReact />
          </HomeContentP>
          <HomeContentP
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="600"
          >
            PostgreSQL <FaReact />
          </HomeContentP>
          <HomeContentP
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="800"
          >
            BootStrap <BsBootstrap />
          </HomeContentP>
          <HomeContentP
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="600"
            data-aos-duration="1200"
          >
            CSS & Scss <FaCss3 />
          </HomeContentP>
          <HomeContentP
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="600"
            data-aos-duration="1500"
          >
            GitHub <FaGithubAlt />
          </HomeContentP>
        </HomeText>
        <HomeContent>
          <HomeH1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Hello World
          </HomeH1>
          <HomeP
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Welcome to my web-development portfolio.
          </HomeP>

          <Button
            variant="outlined"
            color="primary"
            style={{
              marginTop: "20px",
              zIndex: "99",
              cursor: "pointer",
              color: "white",
              textDecoration: "none",
            }}
            className="cv"
          >
            {" "}
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://drive.google.com/uc?export=download&id=1o38e2-HvIcy5oWvK3RVG_3OvCo8VERQT"
              download
            >
              <strong>Download my Resume!</strong>
            </a>
          </Button>

          <div style={{ width: "100vw" }}>
            <Modal
              style={{ width: "100vw" }}
              show={isLoginOpen}
              onHide={hideModal}
            >
              <Modal.Header closeButton>RESUME </Modal.Header>
              <Modal.Body style={{ width: "100vw" }} closeButton>
                <Form style={{ width: "100vw" }}>
                  <embed
                    src={file + "#toolbar=0"}
                    type="application/pdf"
                    height={915}
                    width="900"
                  />
                </Form>
              </Modal.Body>
            </Modal>
          </div>
        </HomeContent>
        
      </HomeContainer>
    </div>
  );
};

export default Home;
