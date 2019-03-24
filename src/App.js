import React, { Component } from "react";
import "./App.scss";
import DisplayAllAirplanes from "./components/display-all-airplanes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Favorite airplane</header>
        <DisplayAllAirplanes />
      </div>
    );
  }
}

export default App;
