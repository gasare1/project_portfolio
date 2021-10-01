import React, { useState, useRef, useEffect } from "react";
import video from "../../Images/profilevideo.mp4";
import { BsBootstrap } from "react-icons/bs";
import { FaReact, FaHtml5, FaCss3, FaGithubAlt } from "react-icons/fa";
import GoogleLogin from "react-google-login";
import { Form, Modal } from "react-bootstrap";
import {

  HomeBg,
  HomeContainer,
  HomeContent,
  HomeH1,
  HomeP,
  HomeP1,
  HomeContent1,
  HomeText,
  HomeContentP,
} from "../HomeComponent/HomeStyle";
import { Video } from "./Profilecss";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import { Redirect } from "react-router";

import Navigbar from "../NavBar/Navbar/navigbar";
import Profilenav from "./Profilenav";
import Userprofile from "./Userprofile";
import { useHistory, Route } from "react-router-dom";
const Profile = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
  var [isAuthorized, setIsAuthorized] = React.useState(false);
  
  const history = useHistory();
  const [name, setName] = React.useState("");
  const responseGoogle = (response) => {
    isAuthorized = isAuthorized
    localStorage.setItem("token", window.location.search.split("=")[1])
    console.log(response);
    console.log(response.profileObj);
    setName(response.profileObj.name);
    history.push("/profile");
    
  };
  
  
  
  if (name === {name}){
    return <Redirect to="/"/>
  }
  

  return (
    <>
      <HomeContainer id="profile">
      
        <HomeBg>
          <Video autoPlay loop muted src={video} type="video/mp4" />
        </HomeBg>
        <HomeContent>
        <GoogleLogin
              clientId="829794049909-o4c4bu0feuh6rtjs7luuc3mh20purvka.apps.googleusercontent.com"
              buttonText="Get Your google information"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          <HomeH1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            
           Welcome {name}
          </HomeH1>
          <HomeP
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Welcome to my web-development portfolio.
          </HomeP>
        </HomeContent>
      </HomeContainer>
    </>
  );
};

export default Profile;