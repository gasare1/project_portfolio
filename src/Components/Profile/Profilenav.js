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
  } from "../NavBar/Navbar/navbarelements";
  
  
  
  import React, { useState, useEffect, useContext, useRef } from "react";
  import "bootstrap/dist/css/bootstrap.min.css";
  import {
    BsHouseDoorFill,
    BsFillQuestionCircleFill,
    BsSearch,
  } from "react-icons/bs";
  import { BiLogInCircle,BiLogOutCircle } from "react-icons/bi";
  import { GiHouse, GiReceiveMoney } from "react-icons/gi";
  import { MdEmail } from "react-icons/md";
  import { CgMenuLeft } from "react-icons/cg";
  import { RiMenuFoldLine, RiLoginCircleLine } from "react-icons/ri";
  import { Link as Links } from "react-scroll";
  import { Link, Redirect, useHistory } from "react-router-dom";
  import { Form, Button, Modal, Row, Col } from "react-bootstrap";
  import { SiTwitter } from "react-icons/si";
  import axios from "axios";
  
  import { makeStyles } from "@material-ui/core/styles";
  import { SiMinutemailer } from "react-icons/si";
  import { FaTimes } from "react-icons/fa";
  const Profilenav = ({ login }) => {
    var cors = require('cors')
    
    const [navbar, setNavbar] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [Login, setLogin] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);
  
    const [isLoginOpen, setIsLoginOpen] = React.useState(false);
    const [isSignupOpen, setIsSignupOpen] = React.useState(false);
    const [isQOpen, setQOpen] = React.useState(false);
    const [ismobileMenu, setmobileMenu] = React.useState(false);
    const [Session, setSession] = useState("");
    const history = useHistory();
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
    const changeBackground = () => {
      if (window.screenY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    const [navBackground, setNavBackground] = useState(false);
    const navRef = useRef();
    const logout = () => {
      axios.get('http://127.0.0.1:5000/logout')
      .then((response) => {
        if (response.status == 200) {
          setSession("Login");
        } else {
          setSession("Logout");
        }
      })
    };

    navRef.current = navBackground;
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 100;
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

    return (
      <Navbar
        style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "black" : "transparent",
          height: "90px",
        }}
      >
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav>
            <NavbarBrand>PORTFOLIO</NavbarBrand>
            <Mobilebtn>
              <CgMenuLeft
                style={{ fontSize: "40px", color: "white" }}
                onClick={showMobileModal}
                ismobileMenu={ismobileMenu}
              />
            </Mobilebtn>
  
            <NavItem>
              <NavLink>
                {" "}
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <GiHouse style={{ color: "white" }} />
                  <a
                    style={{ textDecoration: "none", color: "gray" }}
                    target="_blank"
                  >
                    {" "}
                    Home
                  </a>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={showContactModal} isContactOpen={isContactOpen}>
                {" "}
                <MdEmail style={{ color: "white" }} />{" "}
                <a
                  style={{ textDecoration: "none", color: "gray" }}
                  target="_blank"
                >
                  {" "}
                  Contact Us
                </a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                {" "}
                <Links style={{ textDecoration: "none" }} to="contact">
                  <BsFillQuestionCircleFill style={{ color: "white" }} />
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
              <NavLink>
                <GiReceiveMoney style={{ color: "white" }} />
                <a
                  style={{ textDecoration: "none", color: "gray" }}
                  target="_blank"
                  href="https://github.com/gasare1/Call_Mr.Moe"
                >
                  {" "}
                  GitHub
                </a>
              </NavLink>
            </NavItem>
  
            <NavItem>
              <NavLink>
                {" "}
                <BiLogOutCircle style={{ color: "white" }} />
                <a style={{ textDecoration: "none", color: "white" }} href="http://127.0.0.1:5000/logout"> Logout</a>
                
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <a
                  style={{ textDecoration: "none", color: "gray" }}
                  target="_blank"
                >
                  {" "}
                </a>
              </NavLink>
            </NavItem>
  
            <Modal
              style={{
                cursor: "pointer",
                flexDirection: "column",
                width: "100vw",
              }}
              show={ismobileMenu}
              onHide={hideModal}
            >
              <Modal.Header style={{ background: "#000" }} closeButton>
                <Modal.Title>
                  <div className="container">
                    <div className="col">
                      <div className="row">
                        <h1>Mobile Menu</h1>
                      </div>
                    </div>
                  </div>
                </Modal.Title>
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
                    <NavLink style={{ display: "flex" }}>
                      {" "}
                      <Link style={{ textDecoration: "none" }} to="/">
                        <GiHouse style={{ color: "black" }} />
                        <a
                          style={{ textDecoration: "none", color: "gray" }}
                          target="_blank"
                        >
                          {" "}
                          Home
                        </a>
                      </Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ display: "flex" }}
                      onClick={showContactModal}
                      isContactOpen={isContactOpen}
                    >
                      {" "}
                      <MdEmail />{" "}
                      <a
                        style={{ textDecoration: "none", color: "gray" }}
                        target="_blank"
                      >
                        {" "}
                        Contact Us
                      </a>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{ display: "flex" }}>
                      {" "}
                      <Links to="contact">
                        <BsFillQuestionCircleFill />
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
                    <NavLink style={{ display: "flex" }}>
                      {" "}
                      <Link to="homesearch">
                        <BsSearch style={{ color: "black" }} />
                        <a
                          style={{ textDecoration: "none", color: "gray" }}
                          target="_blank"
                        >
                          {" "}
                          Search
                        </a>
                      </Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{ display: "flex" }}>
                      <GiReceiveMoney />
                      <a
                        style={{ textDecoration: "none", color: "gray" }}
                        target="_blank"
                        href="https://valleycasa.com/preferred-lenders/"
                      >
                        {" "}
                        Loan Programs
                      </a>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={showModal}
                      isLoginOpen={isLoginOpen}
                      style={{ display: "flex" }}
                    >
                      <BiLogInCircle />
                      <a
                        style={{ textDecoration: "none", color: "gray" }}
                        target="_blank"
                      >
                        {" "}
                        Sign Up
                      </a>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{ display: "flex" }}>
                      {" "}
                      <Link to="buyer" style={{ textDecoration: "none" }}>
                        <GiHouse style={{ color: "black" }} />
                        <a
                          style={{ textDecoration: "none", color: "gray" }}
                          target="_blank"
                        >
                          {" "}
                          Buyer
                        </a>
                      </Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
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
            
          </Nav>
        </Collapse>
      </Navbar>
    );
  };
  
  export default Profilenav;