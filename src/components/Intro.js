import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"howdy, "}
            <span className="intro-name">{"nusrat"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">Enthusiastic life long learner</div>
          <div className="intro-desc">
            I'm an engineer's associate based in NYC. I am fascinated by automation, scripting and computer programming.
            I think it's a privilege to be able to understand how our lives are so intertwined with technology. 
          
          </div>
          <a
            href="https://www.linkedin.com/in/nusrat-a-0768bb260/"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"Drop by"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
