import React from "react";
import "./intro.css";
import "./animista.css";

class Intro extends React.Component {
  render() {
    return (
      <div className="container" id="introBox">
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2" />
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
            <h1 className="text-center">Chris Davis</h1>
            <h2>
              <strong>Full Stack Web Developer</strong>
            </h2>
            <hr />
            <a href="/about">
              <button id="portfoliobtn">Portfolio</button>
            </a>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2" />
        </div>
      </div>
    );
  }
}

export default Intro;
