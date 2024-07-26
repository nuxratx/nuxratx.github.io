import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently an <b>engineer's associate</b> at
        <a href=""> Wells Fargo</a>, working in the Equity Derivatives
        sector. At the same time, I am also undertaking a
        part-time <b> Master's of Science</b> in <b> Cybersecurity</b> @{" "}
        <a href="https://engineering.nyu.edu/">NYU</a>.
      </p>
    );
    const two = (
      <p>
        Outside of my professional bandwidth, I spend significant of my time in the outdoor, cooking and answering my sister's ever wondering queries about the world.
      </p>
    );

    const tech_stack = [
      "SDLC",
      "Python",
      "Vulenrabilities Remidiation",
      "Scripting",
      "Automation",
      "Release management"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content box">
            <div className="about-description">
              {[one]}
              {"Here are some roles I have been trusted with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="My-picture" src={"/assets/me2.JPG"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
