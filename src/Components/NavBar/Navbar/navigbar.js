import {
  NavLink,
  NavItem,
  Nav,
  NavbarBrand,
  Collapse,
  Navbar,
  NavbarToggler,
  Wrapper,
  Burger,
  Content,
  Menu,
  MenuButton,
  BurgerIcon,
  BurgerMenu,
  Mobilebtn,
} from "./navbarelements";
import "./navbar.css";
import { GoogleLogout } from "react-google-login";
import Signup from "../../LoginSignup/Signup";
import GoogleLogin from "react-google-login";
import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsHouseDoorFill,
  BsFillQuestionCircleFill,
  BsSearch,
} from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";
import { GiHouse, GiReceiveMoney } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";
import { RiMenuFoldLine, RiLoginCircleLine } from "react-icons/ri";
import { Link as Links } from "react-scroll";
import { RiFindReplaceLine } from "react-icons/ri";
import {
  Form,
  Button,
  Modal,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  NavDropdown,
} from "react-bootstrap";
import { SiTwitter } from "react-icons/si";
import axios from "axios";
import Register from "./register";

import { makeStyles } from "@material-ui/core/styles";
import { SiMinutemailer } from "react-icons/si";
import { FaTimes, FaGithubAlt } from "react-icons/fa";
import Login from "../../LoginSignup/Login";
import Singin from "../../LoginSignup/Login";
import { GrProjects } from "react-icons/gr";
import { AiFillLinkedin, AiOutlineClose } from "react-icons/ai";
import { useLocalStorage } from "../../Store/localStorage";
const Navigbar = ({ login }) => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [Login, setLogin] = useState(false);
  const [Logout, setLogout] = useState("Logout");
  const toggle = () => setIsOpen(!isOpen);

  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isSignupOpen, setIsSignupOpen] = React.useState(false);
  const [isQOpen, setQOpen] = React.useState(false);
  const [ismobileMenu, setmobileMenu] = React.useState(false);

  const showSignup = () => {
    setIsSignupOpen(true);
  };
  const showModal = () => {
    setIsLoginOpen(true);
  };
  const showQ = () => {
    setQOpen(true);
  };

  const hideModal = () => {
    setIsLoginOpen(false);
    setQOpen(false);
    setmobileMenu(false);
  };

  const [isContactOpen, setIsContactOpen] = React.useState(false);

  const showContactModal = () => {
    setIsContactOpen(true);
  };

  const hideContactModal = () => {
    setIsContactOpen(false);
  };
  const hideSignupModal = () => {
    setIsSignupOpen(false);
  };
  const showMobileModal = () => {
    setmobileMenu(true);
  };
  const [message, setMessage] = React.useState("");
  const changeBackground = () => {
    if (window.screenY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    const firstname = localStorage.getItem("firstname");
    setName(firstname);
  }, []);

  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 70;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  window.addEventListener("scroll", changeBackground);
  const [Session, setSession] = useState("");
  const history = useHistory();

  const logout = (response) => {
    console.log(response);
    history.push("/");

    window.location.reload();
  };

  const [name, setName] = React.useState("");
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    setName(response.profileObj.name);
    history.push("/");
  };
  function refreshPage() {
    window.location.reload();
  }

  const logout1 = async (e) => {
    e.preventDefault();
    await fetch("https://glenasare15.pythonanywhere.com/logout", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (response) {
        console.log(response);
        console.log("SUCCESSS");
        localStorage.removeItem("firstname");
        history.push("/");
        window.location.reload();
        return response.json();
      } else if (response.status === 408) {
        console.log("SOMETHING WENT WRONG");
        this.setState({ requestFailed: true });
      }
    });
  };
  return (
    <div style={{ zIndex: "" }}>
      <GoogleLogin
        clientId="829794049909-usu1p5b3qcvaplttm46h52b2bq9pm16f.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
      <Navbar
        style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "black" : "transparent",
          height: "90px",
        }}
      >
        <Collapse isOpen={isOpen} navbar>
          <NavbarBrand style={{ fontFamily: "Comfortaa, cursive" }}>
            Glen Asare
          </NavbarBrand>
          <Mobilebtn>
            <CgMenuLeft
              style={{ fontSize: "40px", color: "white" }}
              onClick={showMobileModal}
              ismobileMenu={ismobileMenu}
            />
          </Mobilebtn>
          <Nav>
            <NavItem>
              <NavLink to="/">
                {" "}
                <GiHouse style={{ color: "white", marginRight: "5px" }} />{" "}
                {name ? (
                  <Link
                    style={{ color: "gray", textDecoration: "none" }}
                    to="/"
                  >
                    Home
                  </Link>
                ) : (
                  <Links
                    style={{ color: "gray", textDecoration: "none" }}
                    to="/"
                  >
                    Home
                  </Links>
                )}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={showContactModal} isContactOpen={isContactOpen}>
                {" "}
                <RiFindReplaceLine
                  style={{ color: "white", marginRight: "5px" }}
                />
                <Links
                  style={{ color: "gray", textDecoration: "none" }}
                  to="projects"
                >
                  Projects
                </Links>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                {" "}
                <Links style={{ textDecoration: "none" }} to="about">
                  <BsFillQuestionCircleFill
                    style={{ color: "white", marginRight: "5px" }}
                  />

                  <a
                    style={{ textDecoration: "none", color: "gray" }}
                    target="_blank"
                  >
                    {" "}
                    About{" "}
                  </a>
                </Links>
              </NavLink>
            </NavItem>

            <NavItem>
              <FaGithubAlt
                style={{ color: "white", marginRight: "5px", fontSize: "20px" }}
              />
              <a
                style={{
                  textDecoration: "none",
                  color: "gray",
                  fontSize: "20px",
                }}
                href="https://github.com/gasare1"
                target="blank"
              >
                {" "}
                GitHub
              </a>
            </NavItem>
            <NavItem>
              <AiFillLinkedin style={{ color: "white", fontSize: "20px" }} />
              <a
                style={{
                  textDecoration: "none",
                  color: "gray",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
                href="https://www.linkedin.com/in/glen-asare-6b1bb61a2/"
                target="blank"
              >
                {" "}
                LinkedIn
              </a>
            </NavItem>
            <NavItem>
              <NavLink onClick={showSignup} isSignupOpen={isSignupOpen}>
                {name ? (
                  <span> </span>
                ) : (
                  <span>
                    <BiLogInCircle style={{ color: "white" }} />
                    <a
                      style={{ textDecoration: "none", color: "gray" }}
                      target="_blank"
                    >
                      {" "}
                      Sign Up
                    </a>
                  </span>
                )}
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                {" "}
                <NavDropdown
                  id=""
                  title="Account"
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <NavDropdown.Item
                    onClick={showModal}
                    isLoginOpen={isLoginOpen}
                  >
                    {name ? <span> </span> : <span>Login</span>}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {name ? (
                      <span>
                        {" "}
                        <Link
                          style={{ color: "black", textDecoration: "none" }}
                          to="/profile"
                        >
                          Account
                        </Link>
                      </span>
                    ) : (
                      <span></span>
                    )}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {name ? (
                      <span>
                        <a onClick={logout1}>Logout</a>
                      </span>
                    ) : (
                      <span></span>
                    )}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {name ? (
                      <GoogleLogout
                        clientId="829794049909-usu1p5b3qcvaplttm46h52b2bq9pm16f.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                      ></GoogleLogout>
                    ) : (
                      <span> </span>
                    )}
                  </NavDropdown.Item>
                </NavDropdown>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={showSignup} isSignupOpen={isSignupOpen}>
                <a
                  style={{ textDecoration: "none", color: "gray" }}
                  target="_blank"
                >
                  {" "}
                  Hi {name} !
                </a>
              </NavLink>
            </NavItem>

            <Modal
              style={{
                cursor: "pointer",
                flexDirection: "column",
                width: "100vw",
                fontFamily: "Comfortaa, cursive",
              }}
              show={ismobileMenu}
              onHide={hideModal}
            >
              <Modal.Header style={{ background: "#fff" }}>
                <Modal.Title>
                  <div className="container">
                    <div className="col">
                      <div className="row">
                        <h1 style={{ fontFamily: "Comfortaa, cursive" }}>
                          Mobile Menu
                        </h1>
                      </div>
                    </div>
                  </div>
                </Modal.Title>

                <AiOutlineClose
                  onClick={hideModal}
                  style={{ fontSize: "30px" }}
                />
              </Modal.Header>
              <Modal.Body>
                <Form
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {" "}
                  <NavItem>
                    <NavLink to="/" style={{ display: "flex" }}>
                      {" "}
                      <GiHouse style={{ color: "black" }} />{" "}
                      {name ? (
                        <Link
                          style={{ color: "black", textDecoration: "none" }}
                          to="/"
                        >
                          Home
                        </Link>
                      ) : (
                        <Links
                          style={{ color: "black", textDecoration: "none" }}
                          to="/"
                        >
                          Home
                        </Links>
                      )}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ display: "flex" }}
                      onClick={showContactModal}
                      isContactOpen={isContactOpen}
                    >
                      {" "}
                      <RiFindReplaceLine style={{ color: "black" }} />{" "}
                      <Links
                        style={{ color: "black", textDecoration: "none" }}
                        to="projects"
                      >
                        Projects
                      </Links>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{ display: "flex" }}>
                      {" "}
                      <Links style={{ textDecoration: "none" }} to="contact">
                        <BsFillQuestionCircleFill style={{ color: "black" }} />
                        <a
                          style={{ textDecoration: "none", color: "black" }}
                          target="_blank"
                        >
                          {" "}
                          About{" "}
                        </a>
                      </Links>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{ display: "flex" }}>
                      <GiReceiveMoney style={{ color: "black" }} />
                      <a
                        style={{
                          textDecoration: "none",
                          color: "black",
                          cursor: "pointer",
                        }}
                        target="_blank"
                        href="https://github.com/gasare1/Call_Mr.Moe"
                      >
                        {" "}
                        GitHub
                      </a>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{ display: "flex" }}>
                      <AiFillLinkedin style={{ color: "black" }} />
                      <a
                        style={{
                          textDecoration: "none",
                          color: "black",
                          cursor: "pointer",
                        }}
                        target="_blank"
                        href="https://github.com/gasare1/Call_Mr.Moe"
                      >
                        {" "}
                        LinkedIn
                      </a>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{ display: "flex" }}>
                      {" "}
                      {name}
                      <NavDropdown
                        id=""
                        title="Account"
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <NavDropdown.Item>
                          {name ? (
                            <span>
                              {" "}
                              <Link
                                style={{
                                  color: "black",
                                  textDecoration: "none",
                                }}
                                to="/profile"
                              >
                                Account
                              </Link>
                            </span>
                          ) : (
                            <span
                              style={{ color: "black", textDecoration: "none" }}
                              onClick={showModal}
                              isLoginOpen={isLoginOpen}
                            >
                              Login
                            </span>
                          )}
                        </NavDropdown.Item>

                        <NavDropdown.Item href="http://127.0.0.1:5000/logout ">
                          {name ? (
                            <span onClick={refreshPage}>Logout</span>
                          ) : (
                            <span></span>
                          )}
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          {name ? (
                            <GoogleLogout
                              clientId="829794049909-usu1p5b3qcvaplttm46h52b2bq9pm16f.apps.googleusercontent.com"
                              buttonText="Logout"
                              onLogoutSuccess={logout}
                            ></GoogleLogout>
                          ) : (
                            <span> </span>
                          )}
                        </NavDropdown.Item>
                      </NavDropdown>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ display: "flex" }}
                      onClick={showSignup}
                      isSignupOpen={isSignupOpen}
                    >
                      {name ? (
                        <span> </span>
                      ) : (
                        <span>
                          <BiLogInCircle style={{ color: "gray" }} />
                          <a
                            style={{ textDecoration: "none", color: "gray" }}
                            target="_blank"
                          >
                            {" "}
                            Sign Up
                          </a>
                        </span>
                      )}
                    </NavLink>
                  </NavItem>
                  <NavItem style={{ display: "flex" }}>
                    <NavLink onClick={showSignup} isSignupOpen={isSignupOpen}>
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        target="_blank"
                      >
                        {" "}
                        Hi <span style={{ color: "black" }}>{name} !</span>
                      </a>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{ display: "flex" }}>
                      <a
                        style={{ textDecoration: "none", color: "gray" }}
                        target="_blank"
                      >
                        {" "}
                      </a>
                    </NavLink>
                  </NavItem>
                </Form>
              </Modal.Body>
            </Modal>
            <Modal show={isLoginOpen} onHide={hideModal}>
              <Modal.Header>
                <Modal.Title>
                  <div className="container">
                    <div className="col">
                      <div className="row">
                        <h1 style={{ fontFamily: "Comfortaa, cursive" }}>
                          Welcome {name}
                        </h1>
                      </div>
                    </div>
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Singin />
                </Form>
              </Modal.Body>
            </Modal>

            <Modal show={isSignupOpen} onHide={hideContactModal}>
              <Modal.Header>
                <Modal.Title>
                  <div className="container">
                    <div className="col">
                      <div className="row">
                        <h1>
                          Sign Up <SiMinutemailer />
                        </h1>
                      </div>
                    </div>
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {message}
                <Form>
                  <Signup />
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <button onClick={hideSignupModal} className="btn btn-danger">
                  Close
                </button>
              </Modal.Footer>
            </Modal>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigbar;
