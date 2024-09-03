import React from "react";
import "../styles/Form.css";
import FadeInSection from "./FadeInSection";


class Form extends React.Component {
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
      return (
          <div id="form">
            <FadeInSection>
              <div className="section-header">
                <span className="section-title">/ Form</span>
               </div>
              <h1>My Form</h1>
              <form>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name"/>
                  <div>     
                  <textarea id="text5" name="text5" rows="4" cols="50" placeholder="What is your favorite flower?"></textarea>
                  </div>
                  <button type="submit">Submit</button>
              </form>
              </FadeInSection>
          </div>
      );
  }

}
export default Form;