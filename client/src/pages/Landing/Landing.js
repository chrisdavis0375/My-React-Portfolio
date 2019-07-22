import React from "react";
import "./landing.css";
import "./intro.css";
import "./animista.css";
//import Intro from "../../components/intro-box/Intro";
class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className="background-container">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
            alt=""
          />
          <div className="stars" />
          <div className="twinkling" />
          <div className="clouds" />
        </div>
        <div className="container" id="introBox">
          <div className="row">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2" />
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
              <h1 className="text-center">Chris Davis</h1>
              <h2>
                <strong>Full Stack Web Developer</strong>
              </h2>
              <hr />
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2" />
          </div>
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <a href="/about">
                <button id="portfoliobtn">Portfolio</button>
              </a>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
