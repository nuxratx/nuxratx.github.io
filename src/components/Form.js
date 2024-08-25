import React from "react";
import "../styles/form.css";


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
                  <input type="text" id="name" name="name" />
                  <button type="submit">Submit</button>
              </form>
              </FadeInSection>
          </div>
      );
  }

}
export default Form;