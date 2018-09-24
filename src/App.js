import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

class App extends Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState((prevState, props) => {
      return {
        open: !prevState.open
      };
    });
  };
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
            flexDirection: "column",
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
            <button onClick={this.handleClick}>Click me</button>
            <div className={this.state.open ? "fadein" : "fadeout"}>
              {this.state.open ? (
                <p>
                  {`ABRIUABRIUABRIUABRIUABRI\nUABRIUABRIUABRIUAB\nRIUABRIUABRIUABRIUABRIUABRIU\nRIUABRIUABRIUABRIUABRIUABRIU\nRIUABRIUABRIUABRIUABRIUABRIU\nRIUABRIUABRIUABRIUABRIUABRIU`}
                </p>
              ) : (
                <h1>Fechado</h1>
              )}
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
