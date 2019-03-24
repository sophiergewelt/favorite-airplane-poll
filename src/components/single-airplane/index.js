import React, { Component } from "react";
import { connect } from "react-redux";
import "../../App.js";
import "./style.scss";

class SingleAirplane extends Component {
  handleCounterChange = event => {
    this.props.dispatch({
      type: "update-counter",
      payload: { name: this.props.airplane.name, type: event }
    });
  };

  render() {
    return (
      <div className="single-airplane-card">
        <h2 className="airplane-name">{this.props.airplane.name}</h2>
        <div className="vote">
          <p className="vote title">Vote</p>
          <button
            className="button thumbs-up"
            onClick={() => this.handleCounterChange("increment")}
          >
            +1
          </button>
          <span>{this.props.airplane.counter}</span>
          <button
            className="button thumbs-down"
            onClick={() => this.handleCounterChange("decrement")}
          >
            -1
          </button>
        </div>
      </div>
    );
  }
}

export default connect(function(state) {
  return { counter: state.counter };
})(SingleAirplane);
