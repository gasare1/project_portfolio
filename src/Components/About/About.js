import React from "react";
import "./about.css";
import imageback from '../../Images/questionmark2.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../../Images/profileimage.jpeg'
function About() {
    AOS.init();
  return (
    <div id="about" style={{background:' #000000',background: '-webkit-linear-gradient(to right, #000000, #434343);',background: 'linear-gradient(to right, #000000, #434343)',caretColor:'transparent' }}>
        <div id="text">
      <h1 data-aos="zoom-in"> Who is Glen?</h1>
      <div style={{borderRadius:'100%'}}  className="imageclass"><img style={{borderRadius:'100%',height:'200px'}} src={image}/></div>
      <p data-aos="fade-up"
     data-aos-duration="3000">
        I was a Junior Software Engineer for Cloud Computing Technologies
      </p>
      <p data-aos="fade-up"
     data-aos-duration="3000">I discovered Coding during my Freshman year of Highschool</p>
      <p data-aos="fade-up"
     data-aos-duration="3000">
        During my highschool years I discorevered HTML, but I was unable to
        grasp my head around the posibilty of turning a bunch of words into a
        nice looking page or software
      </p>
      
      
      <p data-aos="fade-up"
     data-aos-duration="3000">
        I started researching and eventually I was able to find a way to change
        the HTML code in the inspect Tab to reflect on a website{" "}
      </p>
      <p data-aos="fade-up"
     data-aos-duration="3000">
        After Highschool I chose Software Engineering as my major. Although i
        was initaily unable to attend full time, my passion for coding never
        faded.{" "}
      </p>
      <p data-aos="fade-up"
     data-aos-duration="3000" >
        I worked hard to learn as much as I could. So far I have experience with
        Python, Java, React framework, PostgresSQL, Docker, etc.
      </p>
      <p data-aos="fade-up"
     data-aos-duration="3000">
        I will consider myself as a fullstack developer as I can manage to multi-task
        anything pertaining to front and backend
      </p>
      <p data-aos="fade-up"
     data-aos-duration="3000">
        This Website was built using ReactJs with a lot of libraries and Python
        flask server, PostgresSQL database, Google API and Open Weather API.
      </p>
      <p data-aos="fade-up"
     data-aos-duration="3000">
        I'm always learning and have dedicated myself to learn as much
        as I can. My goal is to become one of the best Software Engineers.
      </p>
      </div>
    </div>
  );
}

export default About;
