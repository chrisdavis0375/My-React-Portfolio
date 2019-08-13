import React from "react";
import Intro from "../../components/Intro/Intro";
import Background from "../../components/Background/Background";
class Landing extends React.Component {
  render() {
    return (
      <div>
        <Background />
        <Intro />
      </div>
    );
  }
}
export default Landing;
