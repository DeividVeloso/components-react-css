import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Card>
            <img
              alt="mustang"
              width={280}
              height={180}
              src="./images/mustang.png"
            />
            <p>opopoppopopopopopopo</p>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
