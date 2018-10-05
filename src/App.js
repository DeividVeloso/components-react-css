import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

let carros = [
  {
    nome: "fusca",
    cor: "vermelho",
    marca: "volkswagen"
  },
  {
    nome: "celta",
    cor: "azul",
    marca: "chevrolet"
  },
  {
    nome: "astra",
    cor: "preto",
    marca: "chevrolet"
  }
];
class App extends Component {
  state = {
    open: false
  };

  // handleGroupBy = (items, key) => {
  //   let obj = {};
  //   obj["meu"] = [{ nome: "Deivid" }, { nome: "Jovem" }, { nome: "Ema" }];
  //   console.log(obj);
  // };

  handleGroupBy = (items, key) => {
    let arr = [];
    // let keys = [];
    let count = 0;
    items.map(item => {
      let obj = {};
      if (item[key]) {
        obj[item[key]] = item;

        if (arr.length > 0) {
          console.log("ARR", Object.keys(arr[count]).toString());
          console.log("item[key]", item[key]);

          if (Object.keys(arr[count]).toString() === item[key]) {
            count++;
          }
        }

        arr.push(obj);
        // console.log(Object.keys(arr));
        // if (arr[index].includes(item[key])) {
        //   console.log("Já tem");
        // }
      } else {
        arr.push(item);
      }
    });

    // let novo = [];
    // keys.map((key, index) => {
    //   arr.map(item => {
    //     console.log("ITEM", item);
    //     console.log("KEY", item[key]);
    //   });
    // });

    console.log("NOVO", arr);
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
          {this.handleGroupBy(carros, "marca")}
          <Card>
            <div style={{ flex: 1 }}>
              <img
                alt="mustang"
                width={280}
                height={180}
                src="./images/mustang.png"
              />
              <img
                alt="mustang"
                width={280}
                height={180}
                src="./images/bar-chart_animated.svg"
              />
              <p>opopoppopopopopopopo</p>
              <button onClick={this.handleClick}>Click me</button>
            </div>
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
