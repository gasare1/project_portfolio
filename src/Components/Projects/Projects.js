import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card, Button, Container } from "react-bootstrap";
import image from "../../Images/callmrmoe.PNG";
import image2 from "../../Images/blissrec.PNG";
import image3 from "../../Images/IBM.PNG";
import image4 from "../../Images/adminPicture.PNG";
import image5 from "../../Images/madrigal.PNG";
import {
  Form,
  Modal,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./project.scss";
import background from "../../Images/homebg.jpeg";
import { ProjHome } from "./Projele";
import "./project.css";
function Projects() {
  AOS.init();
  return (
    <div id="projects">
      <ProjHome
        className="project"
        style={{
          justifyContent: "center",
          display: "flex",
          margin: "100px",
          fontFamily: "Comfortaa, cursive",
        }}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Container>
        <Row xs={1} md={2}>
        <Col  md={4}>
        <Card
          style={{ width: "18rem", margin: "50px" }}
          className="shadow-lg p-3 mb-5 bg-white rounded"
          className="card2"
        >
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bolder" }}>
              Call Mr Moe
            </Card.Title>
            <Card.Text>
              This is a Real Estate Website that was build with ReactJs
              Framework and Python Backend
            </Card.Text>
            <Button variant="primary" href="https://callmrmoe.com">
              Access Page
            </Button>
          </Card.Body>
        </Card>
        </Col>
        <Col md={4}>
        <Card
          style={{ width: "18rem", margin: "50px" }}
          className="shadow-lg p-3 mb-5 bg-white rounded"
          className="card2"
        >
          <Card.Img variant="top" src={image4} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bolder" }}>
              Admin Console
            </Card.Title>
            <Card.Text>
              This is a Admin that was build with ReactJs Framework and Random
              User API.. *NOT Mobile Responsive yet work is still in progress
            </Card.Text>
            <Button variant="primary" href="https://adminconsole.netlify.app">
              Access Page
            </Button>
          </Card.Body>
        </Card>
        </Col>
        
        <Col md={1}>
        <Card
          style={{ width: "18rem", margin: "50px" }}
          className="shadow-lg p-3 mb-5 bg-white rounded"
          className="card2"
        >
          <Card.Img variant="top" src={image2} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bolder" }}>
              Bliss Records
            </Card.Title>
            <Card.Text>
              This is a Record Label Website it was built using Reactjs and
              Python Backend
            </Card.Text>
            <Button variant="primary" href="https://blissrecords.net">
              Access Page
            </Button>
          </Card.Body>
        </Card>
        </Col>
        <Row xs={1} md={2}>
        <Col>
        <Card
          style={{ width: "18rem", margin: "50px" }}
          className="shadow-lg p-3 mb-5 bg-white rounded"
          className="card2"
        >
          <Card.Img variant="top" src={image3} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bolder" }}>
              International Baptist Ministries
            </Card.Title>
            <Card.Text>
              This is a Church Website it was built using Reactjs
            </Card.Text>
            <Button variant="primary" href="https://ibmchurch.com/#/">
              Access Page
            </Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        </Col>
        </Row>
        <Col md={4}>
        <Card
          style={{ width: "18rem", margin: "50px" }}
          className="shadow-lg p-3 mb-5 bg-white rounded"
          className="card2"
        >
          <Card.Img variant="top" src={image5} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bolder" }}>
              Madrigal CarWash
            </Card.Title>
            <Card.Text>
              This is a carwash website I am building for a client that is not completed yet. Utililzed React Bootstrap and Styled-components
            </Card.Text>
            <Button variant="primary" href="https://madrigalcarwash.com/">
              Access Page
            </Button>
          </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
      </ProjHome>
    </div>
  );
}

export default Projects;
