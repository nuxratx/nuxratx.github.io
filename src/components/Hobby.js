import React from "react";
import "../styles/Hobby.css";
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
      "first":{
        title:"",
        image: "/assets/utah.jpeg"
      },
      "High Sierra": {
        title: "High Sierra",
        image: "/assets/utah.jpeg"
      },
      Truth: {
        title: "Escalante",
        techStack: "",
       
        image: "/assets/utah2.jpeg"
      },
      "High Sierra": {
        title: "High Sierra",
        image: "/assets/highsierra.JPG"
      },
      "Pisgah National Forest": {
        title: "Pisgah National Forest",
        image: "/assets/ashville.JPG"
        
      },
      "Slot Canyon": {
        title: "Slot Canyon",
        image: "/assets/utah3.jpeg"
      },
      "Snow school": {
        title: "Snow school",
        image: "/assets/adventure.JPG"
      
      },
      
      "Snow": {
        title: "sierra",
        image: "/assets/blueberries.JPG"
      },
      "river": {
        title: "",
        image: "/assets/river.jpeg"
      },
    };
    const projects = {
      "Art Leob Trail": {
        desc:
        "A sweet summer treat. Roughly 30.1 miles",
        techStack: "Roughly 30.1 miles",
        open: "https://www.hikewnc.info/trailheads/pisgah-national-forest/long-distance/art-loeb-trail/"
      },
      "Colorado Trail": {
        desc:
        "A 567 miles of a moody trail ",
  
        open: "https://www.hikewnc.info/trailheads/pisgah-national-forest/long-distance/art-loeb-trail/"
      },
      "The North-Placid Trail ": {
        desc:
        "Challenging yet rewarding trail. About 135 miles from Northville to Lake Placid",
        techStack: " About 135 miles from Northville to Lake Placid",
        open:
          "https://www.adirondack.net/hiking/challenges/northville-placid-trail/"
      },
      "Empire State Trail": {
        desc:
        "Cycling through the iconic Hudson, roughly 750 miles.",
        
        open: "https://empiretrail.ny.gov/"
      },
      
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ passion projects</span>
              
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
                  </p>
                  
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="projects-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    
                   
                  </div>
                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
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
