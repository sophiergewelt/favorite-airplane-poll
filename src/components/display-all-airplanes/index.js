import React, { Component } from "react";
import "../../App.js";
import SingleAirplane from "../single-airplane";
import { connect } from "react-redux";
import "./style.scss";

class DisplayAllAirplanes extends Component {
  renderAllItems = () => {
    let itemsArray = this.props.airplanes
      .sort((a, b) => {
        let diff = b.counter - a.counter;
        if (diff !== 0) {
          return diff;
        }
        return a.name > b.name ? -1 : 1;
      })
      .map((airplane, index) => {
        return <SingleAirplane key={index} airplane={airplane} />;
      });

    return itemsArray;
  };

  render() {
    let airplanes = this.renderAllItems();
    return <div className={"all-items-container"}>{airplanes}</div>;
  }
}

export default connect(function(state) {
  return { airplanes: state.airplanes };
})(DisplayAllAirplanes);
