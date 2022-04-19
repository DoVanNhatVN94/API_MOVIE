import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../asset/css/owl.css";

export default class CarouselListMovie extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row title" style={{ marginBottom: "20px" }}>
            <div className="col-sm-12 btn btn-info">
              Owl Carousel In React Application
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <OwlCarousel
            items={5}
            className="owl-theme"
            autoPlay={true}
            loop
            nav
            margin={8}
          >
            <div>
              <img
                className="img"
                src="https://picsum.photos/200/300?random=1"
              />
            </div>
            <div>
              <img
                className="img"
                src="https://picsum.photos/200/300?random=2"
              />
            </div>
            <div>
              <img
                className="img"
                src="https://picsum.photos/200/300?random=3"
              />
            </div>
            <div>
              <img
                className="img"
                src="https://picsum.photos/200/300?random=4"
              />
            </div>
            <div>
              <img
                className="img"
                src="https://picsum.photos/200/300?random=5"
              />
            </div>
            <div>
              <img
                className="img"
                src="https://picsum.photos/200/300?random=6"
              />
            </div>
            <div>
              <img
                className="img"
                src="https://picsum.photos/200/300?random=7"
              />
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}
//aaa
