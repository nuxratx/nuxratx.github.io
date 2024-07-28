import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "Hangman": {
        title: "hangman",
        desc:
          "Is it letter 't'?",
        techStack: "C# (UNITY)",
        link: "https://github.com/nuxratx/ppuzzles",
        
        image: "/assets/hangman.png"
      },
      Truth: {
        title: "",
        desc:
          "ping multiple servers",
        techStack: "JAVASCRIPT (THREE.JS)",
        link: "https://github.com/nuxratx/scripts",
        
        image: "/assets/pro3.png"
      },
      "Ecological Footprint": {
        title: "ecological footprint",
        desc:
          "",
        techStack: "",
        link: "https://github.com/nuxratx/ecological_footprints",
        
        image: "/assets/project1.png"
      },
      
    };
    const projects = {
      "is it letter 't' ?": {
        desc:
          "When my sister complained that her summer vacation is too boring, I gifted this to her. Indeed she appeared to be less bored for next couple of days",
        techStack: "python, Jupyter, CLI",
       
      },
      "ping multiple servers": {
        desc:
          "A script that came to fruition after I was loosing a few hair by looking up hundreds of servers manually",
        techStack: "network, python",
       
      },
      "ecological footprint": {
        desc:
          "I was curious one evening when I first started to program, if I can take the csv files from wikipedia and make a map of where on earth human have the most impact on natural capital. ",
        techStack: "python, folium, csv, data-manipulation",
        link: "https://github.com/nuxratx/ecological_footprints",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
