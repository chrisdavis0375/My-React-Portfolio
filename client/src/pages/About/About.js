import React from "react";
import Background from "../../components/Background/Background";
import Sidebar from "../../components/Sidebar/Sidebar";

class About extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Background />
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default About;
