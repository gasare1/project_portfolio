import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import image from "../../Images/callmrmoe.PNG";
import image2 from "../../Images/blissrec.PNG";
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
import background from '../../Images/codingback2.jpg'
import { ProjHome } from "./Projele";
function Projects() {
    AOS.init();
  return (
      <div  id="projects" style={{
       backgroundImage:`url(${background})`,backgroundSize:' 100% 100%',width:'100vw',height:'auto',backgroundRepeat:'no-repeat'
      }}>
    <ProjHome className='project'
      style={{
        
        justifyContent: "center",
        display: "flex",
        margin: "50px"
        
        
      }}
     
      data-aos="fade-up"
     data-aos-duration="3000"
    >
      <Card style={{ width: "18rem", margin: "50px" }} className="shadow-lg p-3 mb-5 bg-white rounded"  className="card2"  >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some Custom text one can write here</Card.Text>
          <Button variant="primary" href="https://callmrmoe.com">Access Page</Button>
          <NavDropdown id="" title="Project Discription">
            <NavDropdown.Item >
            <h1>Call Mr Moe</h1>
            <hr/>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br/>Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,<br/> when an unknown printer took a galley
                of type and scrambled<br/> it to make a type specimen book.<br/> It has
                survived not only five <br/>centuries, but also the leap into
                electronic typesetting,<br/> remaining essentially unchanged.<br/> It was
                popularised in the 1960s<br/> with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like<br/> Aldus PageMaker including versions of
                Lorem<br/> Ipsum.
              </p>
              <hr/>
            </NavDropdown.Item>
          </NavDropdown>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", margin: "50px" }} className="shadow-lg p-3 mb-5 bg-white rounded"  className="card2">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some Custom text one can write here</Card.Text>
          <Button variant="primary">Access Page</Button>
          <NavDropdown id="" title="Project Discription">
            <NavDropdown.Item>
            <h1>Call Mr Moe</h1>
            <hr/>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br/>Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,<br/> when an unknown printer took a galley
                of type and scrambled<br/> it to make a type specimen book.<br/> It has
                survived not only five <br/>centuries, but also the leap into
                electronic typesetting,<br/> remaining essentially unchanged.<br/> It was
                popularised in the 1960s<br/> with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like<br/> Aldus PageMaker including versions of
                Lorem<br/> Ipsum.
              </p>
              <hr/>
            </NavDropdown.Item>
          </NavDropdown>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", margin: "50px" }} className="shadow-lg p-3 mb-5 bg-white rounded"  className="card2">
        <Card.Img variant="top" src={image2} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some Custom text one can write here</Card.Text>
          <Button variant="primary" href="https://blissrecords.net">Access Page</Button>
          <NavDropdown id="" title="Project Discription">
            <NavDropdown.Item>
            <h1>Bliss Records</h1>
            <hr/>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br/>Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,<br/> when an unknown printer took a galley
                of type and scrambled<br/> it to make a type specimen book.<br/> It has
                survived not only five <br/>centuries, but also the leap into
                electronic typesetting,<br/> remaining essentially unchanged.<br/> It was
                popularised in the 1960s<br/> with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like<br/> Aldus PageMaker including versions of
                Lorem<br/> Ipsum.
              </p>
              <hr/>
            </NavDropdown.Item>
          </NavDropdown>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", margin: "50px" }} className="shadow-lg p-3 mb-5 bg-white rounded"  className="card2">
        <Card.Img variant="top" src={image2} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some Custom text one can write here</Card.Text>
          <Button variant="primary">Access Page</Button>
          <NavDropdown id="" title="Project Discription">
            <NavDropdown.Item>
            <h1>Bliss Records</h1>
            <hr/>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br/>Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,<br/> when an unknown printer took a galley
                of type and scrambled<br/> it to make a type specimen book.<br/> It has
                survived not only five <br/>centuries, but also the leap into
                electronic typesetting,<br/> remaining essentially unchanged.<br/> It was
                popularised in the 1960s<br/> with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like<br/> Aldus PageMaker including versions of
                Lorem<br/> Ipsum.
              </p>
              <hr/>
            </NavDropdown.Item>
          </NavDropdown>
        </Card.Body>
      </Card>
    </ProjHome>
    </div>
  );
}

export default Projects;
