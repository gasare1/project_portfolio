import React, { useState, useRef, useEffect } from "react";
import video from "../../Images/homebg.jpeg";
import { BsBootstrap } from "react-icons/bs";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaGithubAlt,
  FaPython,
} from "react-icons/fa";
import { Form, Modal } from "react-bootstrap";
import Navigbar from "../NavBar/Navbar/navigbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "../Projects/Projects";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import ScrollToTop from "../NavBar/Navbar/ScrollToTop";
import ReactWeather, { useOpenWeather } from "react-open-weather";
import WeatherApp from "./Weather";
import AOS from "aos";
import "aos/dist/aos.css";
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
import { SiPostgresql } from "react-icons/si";
import "aos/dist/aos.css";
import "./home.css";
import file from "./Profile.pdf";
import Weather from 'simple-react-weather'
import { SiPostman,SiJira,SiJava,SiAsana,SiGnubash } from "react-icons/si";
import GeoLocation from './GeoLocation'
const Home = () => {
  AOS.init();

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  useEffect (() => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }, [/*Here can enter some value to call again the content inside useEffect*/])

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
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "80f4d94a8038dc5274f4113b84de39cd",
    lat: "48.137154",
    lon: "11.576124",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });

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
          <Video style={{background:' #232526',background: '-webkit-linear-gradient(to left, #232526, #414345)',background: 'linear-gradient(to left, #232526, #414345)' }}></Video>
        </HomeBg>
        
        <HomeText>
        <Weather id="weather" unit="F" lat={lat} lon={lng} appid="80f4d94a8038dc5274f4113b84de39cd" style={{display:'flex',zIndex:'99',color:'#fff',float:'left',backgroundColor:'gray'}}/>
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
            <FaPython />
          </HomeContentP>
          <HomeContentP
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="600"
          >
            PostgreSQL <SiPostgresql />
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
          <HomeContentP
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="600"
            data-aos-duration="1500"
          >
            Bash <SiGnubash />
            
          </HomeContentP>
          <HomeContentP
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="600"
            data-aos-duration="1500"
          >
            Postman <SiPostman />
            
          </HomeContentP>
          <HomeContentP
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="600"
            data-aos-duration="1500"
          >
            Java <SiJava />
            
          </HomeContentP>
          <HomeContentP
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="600"
            data-aos-duration="1500"
          >
            Asana <SiAsana />
            
          </HomeContentP>
          <HomeContentP
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="600"
            data-aos-duration="1500"
          >
            Jira <SiJira />
            
          </HomeContentP>
        </HomeText>
        <HomeContent id="homecontent">
          <HomeH1>Hello World </HomeH1>
          <HomeP id="homep" >Welcome to my web-development portfolio </HomeP>
          <HomeP id="homep" >Login username is test, password test also can log in with your google account.</HomeP>
          <Button
            variant="outlined"
            color="primary"
            id="button"
            style={{
              marginTop: "20px",
              zIndex: "99",
              cursor: "pointer",
              color: "black",
              textDecoration: "none",
            }}
            className="cv"
          >
            {" "}
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="https://drive.google.com/uc?export=download&id=1V01ZHmRVjNdnfZ72koT5OoU94X-U_GHV"
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
