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


function App() {

 


  return (
    
    <div className="d-flex flex-column h-100">
      
     
      <Router>
     
      <ScrollToTop />
        <Navigbar/>
        <Switch />
        <Route path="/" component={Home} exact>
            <Home/>
          </Route>
          <Route path="/" component={Projects} exact>
            <Projects />
          </Route>
          
        <Route
          path="/profile"
          component={() => <Profile />}
          exact
        />
      </Router>
    </div>
  );
}

export default App;
