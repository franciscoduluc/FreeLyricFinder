import React, { Component } from "react";
import moduleName from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
