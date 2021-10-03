import React from "react";
import "./about.css";
import imageback from '../../Images/aboutback6.jpg'
function About() {
  return (
    <div id="about" style={{backgroundImage:`url(${imageback})`}}>
        <div id="text">
      <h1> Who is Glen?</h1>
      <p>
        I'm a bootcamp Graduate of Nucamp. I currently work for Electic AI as a
        System Administrator
      </p>
      <p>I discovered Coding during my Freshman year of Highschool</p>
      <p>
        During my highschool years I discorevered HTML, but I was unable to
        grasp my head around the posibilty of turning a bunch of words into a
        nice looking page or software
      </p>
      <p>
        I started researching and eventually I was able to find a way to change
        the HTML code in the inspect Tab to reflect on a website{" "}
      </p>
      <p>
        After Highschool I chose Software Engineering as my major. Although i
        was initaily unable to attend full time, my passion for coding never
        faded.{" "}
      </p>
      <p>
        I worked hard to learn as much as I could. So far I have knowledge in
        Python, Java, React framework and PostgresSQL
      </p>
      <p>
        I will consider myself as a fullstack developer as I can manage to mutitask
        anything pertaining to front and backend
      </p>
      <p>
        This Website was built using ReactJs with a lot of libraries and Python
        flask server and PostgresSQL database
      </p>
      <p>
        I'm always learning and have dedicated myself to learn as much
        as I can. My goal for the next year is to become a Software Engineer.
      </p>
      </div>
    </div>
  );
}

export default About;
