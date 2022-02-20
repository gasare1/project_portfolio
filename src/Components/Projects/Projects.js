import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card, Button, Container } from "react-bootstrap";
import image from "../../Images/callmrmoe.PNG";
import image2 from "../../Images/blissrec.PNG";
import image3 from "../../Images/IBM.PNG";
import image4 from "../../Images/adminPicture.PNG";
import image5 from "../../Images/madrigal.PNG";
import { Row, Col } from "react-bootstrap";
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
    <div id="projects" data-aos="fade-up" data-aos-duration="3000">
    <h1 style={{color:'white',zIndex:'1',justifyContent:'center',alignItems:'center',display:'flex',marginTop:'50px',fontFamily:'monospace'}}>My Projects</h1>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col xs={12} md={4}>
            <Card className="shadow-lg p-3 mb-5 bg-white rounded" id="card2">
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
          <Col xs={12} md={4}>
            <Card className="shadow-lg p-3 mb-5 bg-white rounded" id="card2">
              <Card.Img variant="top" src={image4} />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bolder" }}>
                  Smart Home Dashboard
                </Card.Title>
                <Card.Text>
                  This is a Dashboard that was build with ReactJs Framework. *NOT Mobile Responsive yet work is still in
                  progress
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://smarthomep.netlify.app/"
                >
                  Access Page
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="shadow-lg p-3 mb-5 bg-white rounded" id="card2">
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
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Card className="shadow-lg p-3 mb-5 bg-white rounded" id="card2">
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
          <Col></Col>

          <Col xs={12} md={4}>
            <Card className="shadow-lg p-3 mb-5 bg-white rounded" id="card2">
              <Card.Img variant="top" src={image5} />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bolder" }}>
                  Madrigal CarWash
                </Card.Title>
                <Card.Text>
                  This is a carwash website I am building for a client that is
                  not completed yet. Utililzed React Bootstrap and
                  Styled-components
                </Card.Text>
                <Button variant="primary" href="https://madrigalcarwash.com/">
                  Access Page
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
