import React from "react";
import "./sidebar.css";
import Portfolio from "./images/Portfolio.jpg";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3" id="nav">
        <img src={Portfolio} id="myPicture" />
        <div className="col-12 navtext">
          <p className=" lead">
            <strong>Chris Davis</strong>
          </p>
          <p>Full Stack Web Developer</p>
        </div>

        <div id="navbtnBox">
          <a href="about.html">
            <button id="aboutbtn" className="navbtn">
              About
            </button>
          </a>
          <a href="projects.html">
            <button id="workbtn" className="navbtn">
              See my work
            </button>
          </a>
          <a href="contact.html">
            <button id="contactbtn" className="navbtn">
              Contact
            </button>
          </a>
          <a href="resume.html">
            <button id="resumebtn" className="navbtn">
              Resume
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
