import React from "react";
import "./about.css";
class About extends React.Component {
  render() {
    console.log("BITCH");

    return (
      <div>
        <div className="background-container">
          <img
            id="main-background"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
            alt=""
          />
          <div className="stars" />
          <div className="twinkling" />
          <div className="clouds" />
        </div>
        <div className="col-lg-3" id="nav">
          <div>
            <img src="../assets/images/Portfolio.jpg" id="myPicture" />
            <p className="navtextname">
              <strong>Chris Davis</strong>
            </p>
            <p className="navtext">Full Stack Web Developer</p>
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
        </div>

        <div className="col-lg-9" id="content">
          <h3 id="header">About Me</h3>
          <hr id="horizontal" />

          <a target="_blank" href="https://github.com/chrisdavis0375">
            <img className="gitLogo" src="../assets/images/gitlogo.jpg" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/chris-davis-759a99177/"
          >
            <img class="linkedLogo" src="../assets/images/linkedinlogo.jpg" />
          </a>

          <div id="pictureBackground">
            <p>
              Hello, my name is Chris Davis and I just recently moved to Arizona
              to pursue a career in Web Development. I am currently enrolled in
              Arizona State University's coding bootcamp for full stack
              development. I was born and raised in Hot Springs, Arkansas and as
              long as I can remember I have always had a deep passion for
              learning the newest technologies and understanding how they work.
            </p>
            <img
              class="aboutMePictures"
              src="../assets/images/aboutpicture1.jpg"
            />
            <img
              class="aboutMePictures"
              src="../assets/images/aboutpicture2.jpg"
            />
            <img
              class="aboutMePictures"
              src="../assets/images/aboutpicture3.jpg"
            />
            <p>
              My hobbies include coding my ideas to life, building and modifying
              my own computers, staying in shape, and playing A LOT of video
              games. I'm currently fluent in HTML5, CSS, Javascript, and MySQL.
              I have also been exposed to Bootstrap and other CSS libraries,
              jQuery, nodejs, and npm packages.
            </p>

            <img
              class="aboutMePictures"
              src="../assets/images/aboutpicture4.jpg"
            />
            <img
              class="aboutMePictures"
              src="../assets/images/aboutpicture5.jpg"
            />
            <img
              class="aboutMePictures"
              src="../assets/images/aboutpicture6.jpg"
            />
            <p>
              I am in the process of learning back-end development starting with
              MySQL and MySQL workbench and expected to graduate ASU by August
              5th, 2019. Lastly I have worked in an agile environment with my
              fellow classmates and used github and gitbash for version control.
            </p>

            <img
              class="aboutMePictures"
              src="../assets/images/aboutpicture7.jpg"
            />
            <img
              class="aboutMePictures"
              src="../assets/images/aboutpicture8.jpg"
            />
            <img
              class="aboutMePictures"
              src="../assets/images/aboutpicture9.jpg"
            />
            <p>
              If you have any questions for me or would like to reach out to me
              please feel free to contact me by emailing me at
              chrisdavis0375@gmail.com.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
