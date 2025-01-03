import React from "react";
import "../styles/Product.css";
import "../styles/Hobby.css";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import Projects from "./Hobby";


class Product extends React.Component {
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
      const spotlightProducts = {

        "frontview":{
          title: "star1",
          Image: "assets/star1.JPG"
        },
        "sideview":{
          title: "star2",
          Image: "assets/star2.JPG"
        }
      };


      return (
          <div id="product">
            <div className="section-header">
                <span className="section-title">/ Product</span>

              </div>
              <Carousel>
                {Object.keys(spotlightProducts).map((key, i) => (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={spotlightProducts[key]["image"]}
                      alt={key}
                    />
              
                    <div className="caption-bg">
                    <Carousel.Caption>
                     <h3>{spotlightProducts[key]["title"]}</h3>
                     <p>
                      {spotlightProducts[key]["desc"]}
                     </p>
                  
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="products-container">
          <ul className="products-grid">
            {Object.keys(Product).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="products-card">
                  <div className="card-header">
                    
                   
                  </div>
                  <div className="card-title">{key}</div>
                  <div className="card-desc">{Product[key]["desc"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
            <FadeInSection>
              <form>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name"/>
                  <div>     
                  <textarea id="text5" name="text5" rows="4" cols="50" placeholder="What is your favorite flower?"></textarea>
                  </div>
                  <button type="submit">Submit</button>
              </form>
              <div class="product-item__info">
                  <div class="product-item-meta"> Star
                  <img src="assets/star1.JPG"  width="300" height="200"></img>
                  <img src="assets/star2.JPG" width="300" height="200"></img>

                       <div class="">
                      <div class=""><span class="price">
                        <span>Sale price</span>$20.00</span></div>
              </div></div></div>

              </FadeInSection>
          </div>
      );
  }


}
export default Product;

