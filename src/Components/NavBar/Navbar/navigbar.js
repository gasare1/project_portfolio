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
import './navbar.css'
import { GoogleLogout } from "react-google-login";
import Signup from "../../LoginSignup/Signup";
import GoogleLogin from "react-google-login";
import { Link,  useHistory} from "react-router-dom";
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
import { FaTimes } from "react-icons/fa";
import Login from "../../LoginSignup/Login";
import Singin from "../../LoginSignup/Login";
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
  const changeBackground = () => {
    if (window.screenY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

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
    console.log(response)
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
          <NavbarBrand>PORTFOLIO</NavbarBrand>
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
                
                  <GiHouse style={{ color: "white" }} />
                  
                    {" "}
                   {name ?  <Link onClick={refreshPage} style={{color:'white',textDecoration:'none'}} to='/'>Home</Link>:<Links onClick={refreshPage} style={{color:'white',textDecoration:'none'}} to='/'>Home</Links>  } 
        
                
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
              <NavLink onClick={showSignup} isSignupOpen={isSignupOpen}>
                {name ? <span> </span> : <span><BiLogInCircle style={{ color: "white" }} />
                <a
                  style={{ textDecoration: "none", color: "gray" }}
                  target="_blank"
                >
                  {" "}
                  Sign Up
                </a></span>}
               
              </NavLink>
            </NavItem>

            <NavItem >
              <NavLink>
                {" "}
                <NavDropdown id="" title="Account"  style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
                  <NavDropdown.Item
                    onClick={showModal}
                    isLoginOpen={isLoginOpen}
                  >
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
                      <span>Login</span>
                    )}
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item href="http://127.0.0.1:5000/logout ">
                    {name ? (
                      <span onClick={refreshPage}>Logout</span>
                    ) : (
                      <span></span>
                    )}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                  >
                    {name ? 
                      
                        
                        <GoogleLogout
                          clientId="829794049909-usu1p5b3qcvaplttm46h52b2bq9pm16f.apps.googleusercontent.com"
                          buttonText="Logout"
                          onLogoutSuccess={logout}
                        
                        ></GoogleLogout>
                    
                     : 
                      <span> </span>
                      
                    }
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
            <Modal show={isLoginOpen} onHide={hideModal}>
              <Modal.Header >
                <Modal.Title>
                  <div className="container">
                    <div className="col">
                      <div className="row">
                        <h1>Welcome {name}</h1>
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
