import React, { useState, useRef, useEffect } from "react";
import video from "../../Images/profilevideo.mp4";
import { BsBootstrap } from "react-icons/bs";
import { FaReact, FaHtml5, FaCss3, FaGithubAlt } from "react-icons/fa";
import GoogleLogin from "react-google-login";
import { CgToggleOff, CgToggleOn } from "react-icons/cg";
import useFetch from "react-fetch-hook";
import { Form, Modal } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import WeatherApp from "../HomeComponent/Weather";
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
import image1 from "../../Images/pexels-jess-bailey-designs-1097930.jpg";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import { Redirect } from "react-router";

import Navigbar from "../NavBar/Navbar/navigbar";
import Profilenav from "./Profilenav";
import Userprofile from "./Userprofile";
import { useHistory, Route } from "react-router-dom";
import ReactWeather from "react-open-weather";
import axios from "axios";
const Profile = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    getAllNames();
  }, []);
  const url = "";

  const [name2, setName2] = React.useState("");
  const getAllNames = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const allNames = response.data.name2.allNames;
        console.log("Your user name is " + allNames);
        setName2(allNames);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  useEffect(() => {
    const firstname = localStorage.getItem("firstname");
    setName(firstname);
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
    isAuthorized = isAuthorized;
    localStorage.setItem("token", window.location.search.split("=")[1]);
    console.log(response);
    console.log(response.profileObj);
    setName(response.profileObj.name);
    history.push("/profile");
  };

  const now = 20;

  const [onbackground, setOnBackground] = useState(false);
  const toggle = () => {
    setOnBackground(!onbackground);
  };

  return (
    <>
      <HomeContainer
        id="profile"
        style={{
          background: `${onbackground ? "linear-gradient(to left, #232526, #414345)" : "linear-gradient(to left, #ece9e6, #ffffff)"}`,
          backgroundSize: " 100% 100%",
          width: "100vw",
          backgroundRepeat: "no-repeat",caretColor:'transparent'
        }}
      >
        <HomeBg></HomeBg>
        <HomeContent>
          <GoogleLogin
            clientId="829794049909-o4c4bu0feuh6rtjs7luuc3mh20purvka.apps.googleusercontent.com"
            buttonText="Get Your google information"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />

          <HomeH1 style={{ color: `${onbackground ? "white" : "black"}` }}>
            <div style={{float:'left'}}>{onbackground ? (
              <span style={{fontSize:'12px',caretColor:'transparent'}}>
                <CgToggleOn
                  style={{ color: "black", fontSize: "40px" }}
                  onClick={toggle}
                />
                Light?
              </span>
            ) : (
              <span style={{fontSize:'12px',caretColor:'transparent'}}>
                <CgToggleOff
                  style={{ color: "black", fontSize: "40px" }}
                  onClick={toggle}
                />
                Night?
              </span>
            )}</div>
            Welcome {name}
            {name2}
          </HomeH1>
          <HomeP style={{ color: `${onbackground ? "white" : "black"}` }}>
            Welcome to your profile page.
          </HomeP>
          <span style={{ color: "black" }}>
            <ProgressBar
              animated
              now={now}
              now={now}
              label={`${now}% complete`}
            />
            Page is under Construction Contact the admin for further updates
          </span>
        </HomeContent>
      </HomeContainer>
    </>
  );
};

export default Profile;
