import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import image from "../../Images/callmrmoe.PNG";
import image2 from "../../Images/blissrec.PNG";
import image3 from '../../Images/IBM.PNG'
import {
  Form,
  Modal,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  NavDropdown,
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './project.scss'
import background from '../../Images/aboutback4.jpg'
import { ProjHome } from "./Projele";
import './project.css'
function Projects() {
    AOS.init();
  return (
      <div  id="projects" style={{
       backgroundImage:`url(${background})`
      }}>
    <ProjHome className='project'
      style={{
        
        justifyContent: "center",
        display: "flex",
        margin: "100px"
        ,fontFamily:'Comfortaa, cursive'
        
      }}
     
      data-aos="fade-up"
     data-aos-duration="3000"
    >
      <Card style={{ width: "18rem", margin: "50px" }} className="shadow-lg p-3 mb-5 bg-white rounded"  className="card2"  >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title style={{fontWeight:'bolder'}}>Call Mr Moe</Card.Title>
          <Card.Text>This is a Real Estate Website that was build with ReactJs Framework and Python Backend</Card.Text>
          <Button variant="primary" href="https://callmrmoe.com">Access Page</Button>
          
        </Card.Body>
        
      </Card>
      <Card style={{ width: "18rem", margin: "50px" }} className="shadow-lg p-3 mb-5 bg-white rounded"  className="card2">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title style={{fontWeight:'bolder'}}>Call Mr Moe</Card.Title>
          <Card.Text>This is a Real Estate Website that was build with ReactJs Framework and Python Backend</Card.Text>
          <Button variant="primary">Access Page</Button>
          
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", margin: "50px" }} className="shadow-lg p-3 mb-5 bg-white rounded"  className="card2">
        <Card.Img variant="top" src={image2} />
        <Card.Body>
          <Card.Title style={{fontWeight:'bolder'}}>Bliss Records</Card.Title>
          <Card.Text>This is a Record Label Website it was built using Reactjs and Python Backend</Card.Text>
          <Button variant="primary" href="https://blissrecords.net">Access Page</Button>
          
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", margin: "50px" }} className="shadow-lg p-3 mb-5 bg-white rounded"  className="card2">
        <Card.Img variant="top" src={image3} />
        <Card.Body>
          <Card.Title style={{fontWeight:'bolder'}}>International Baptist Ministries</Card.Title>
          <Card.Text>This is a Churhc Website it was built using Reactjs</Card.Text>
          <Button variant="primary" href="https://ibmchurch.com/#/">Access Page</Button>
          
        </Card.Body>
      </Card>
    </ProjHome>
    </div>
  );
}

export default Projects;
