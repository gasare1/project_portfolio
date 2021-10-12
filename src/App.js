import logo from "./logo.svg";
import "./App.css";
import Navigbar from "./Components/NavBar/Navbar/navigbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/HomeComponent/Home";
import Projects from "./Components/Projects/Projects";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import ScrollToTop from "./Components/NavBar/Navbar/ScrollToTop";
import Profile from "./Components/Profile/Profile";
import Profilenav from "./Components/Profile/Profilenav";
import ReactSession from "react-client-session";
import React from "react";
import GoogleLogin from "react-google-login";
import About from "./Components/About/About";
import Footers from "./Components/Footer/Footer";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect } from "react";
import Unauthorizedpage from "./Components/Store/Unauthorized";
function App() {
  return (
    <div className="d-flex flex-column h-100">
      <Router>
        <ScrollToTop />
        <Navigbar />
        <Switch />
        <Route path="/" component={Home} exact>
          <Home />
        </Route>
        <Route path="/" component={Projects} exact>
          <Projects />
        </Route>
        <Route path="/" component={About} exact>
          <About />
        </Route>{" "}
        <Route path="/" component={Footers} exact>
          <Footers />
        </Route>
        {localStorage.getItem("firstname") ? (
          <Route path="/profile" component={() => <Profile />} exact />
        ) : (
          <Route path="/profile" component={() => <Unauthorizedpage  />} exact />
        )}
        {localStorage.getItem("name") ? (
          <Route path="/profile" component={() => <Profile />} exact />
        ) : (
          <Route path="/unauthorized" component={() => <Unauthorizedpage />} exact />
        )}
      </Router>
    </div>
  );
}

export default App;
