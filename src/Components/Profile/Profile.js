import React, { useState, useRef, useEffect } from "react";
import video from "../../Images/profilevideo.mp4";
import { BsBootstrap } from "react-icons/bs";
import { FaReact, FaHtml5, FaCss3, FaGithubAlt } from "react-icons/fa";
import GoogleLogin from "react-google-login";
import useFetch from "react-fetch-hook"
import { Form, Modal } from "react-bootstrap";
import { Progress } from "shards-react";
import { Alert } from "shards-react";
import {ProgressBar}from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
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
import image1  from "../../Images/profback.jpg";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import { Redirect } from "react-router";

import Navigbar from "../NavBar/Navbar/navigbar";
import Profilenav from "./Profilenav";
import Userprofile from "./Userprofile";
import { useHistory, Route } from "react-router-dom";
import axios from "axios";
const Profile = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    getAllNames();
  }, []);
  const url = ''

  const [name2, setName2] = React.useState("");
  const getAllNames = () => {
    axios.get(`${url}`)
    .then((response)=>{
      const allNames = response.data.name2.allNames;
      console.log("Your user name is "+allNames)
      setName2(allNames)
    })
    .catch(error=>console.error(`Error: ${error}`));
  }
  useEffect(() => {
    const firstname = localStorage.getItem('firstname')
    setName(firstname)

    
  }, [])
  
 
 
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

  const now = 20;
 
  
  if (name === {name}){
    return <Redirect to="/"/>
  }
  

  return (
    <>
      <HomeContainer id="profile" style={{backgroundImage:`url(${image1}) `,backgroundSize:' 100% 100%',width:'100vw',backgroundRepeat:'no-repeat'}}>
      
        <HomeBg>
         
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
      
          >
            
           Welcome {name}{name2}
          </HomeH1>
          <HomeP
            
          >
            
            Welcome to your profile page.
          </HomeP>
          <span style={{color:'white'}}
            
          >
             <ProgressBar now={now} label={`${now}% complete`} />
            
            Page is under Construction Contact the admin for further updates
          </span>
        </HomeContent>
      </HomeContainer>
    </>
  );
};

export default Profile;