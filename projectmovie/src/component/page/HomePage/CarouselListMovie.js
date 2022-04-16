import React, { Component } from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel2";
import "../src/owl.theme.default.css";
import "../../../asset/css/carouselListMovie.css";

export default class CarouselListMovie extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: [
        <div key={1} className="item">
          <img src="/img/fullimage1.jpg" alt="The Last of us" />
        </div>,
        <div key={2} className="item">
          <img src="/img/fullimage2.jpg" alt="GTA V" />
        </div>,
        <div key={3} className="item">
          <img src="/img/fullimage3.jpg" alt="Mirror Edge" />
        </div>,
      ],

      itemNo: 1,
      loop: false,
      nav: false,
      rewind: true,
      autoplay: true,
    };
  }

  startPlay() {
    this.setState({
      autoplay: true,
    });
  }

  stopPlay() {
    this.setState({
      autoplay: false,
    });
  }

  addItem() {
    let items = this.state.items;
    let newItem = (
      <div key={this.state.items.length + 1} className="item">
        <img src="/img/fullimage2.jpg" alt="GTA V" />
      </div>
    );
    items.push(newItem);
    this.setState({ items });
  }

  newOptions() {
    this.setState({
      nav: true, // Show next and prev buttons
    });
  }

  render() {
    const options = {
      items: this.state.itemNo,
      loop: this.state.loop,
      nav: this.state.nav,
      rewind: this.state.rewind,
      autoplay: this.state.autoplay,
    };

    const events = {
      onDragged: function (event) {
        console.log("onDragged: " + event.type);
      },
      onChanged: function (event) {
        console.log("onChanged: " + event.type);
      },
      onTranslate: function (event) {
        console.log("onTranslate: " + event.type);
      },
    };

    return (
      <div>
        <OwlCarousel ref="car" options={options} events={events}>
          {this.state.items}
        </OwlCarousel>

        <button onClick={() => this.refs.car.prev()}>prev</button>

        <button onClick={() => this.refs.car.next()}>next</button>

        <button onClick={() => this.refs.car.goTo(0)}>goTo</button>

        <button onClick={this.startPlay.bind(this)}>play</button>

        <button onClick={this.stopPlay.bind(this)}>stop</button>

        <button onClick={this.addItem.bind(this)}>Add New</button>

        <button onClick={this.newOptions.bind(this)}>New Options</button>
      </div>
    );
  }
}
