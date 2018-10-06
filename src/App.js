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

  // handleGroupBy = (items, key) => {
  //   let arr = [];
  //   // let keys = [];
  //   let count = 0;
  //   items.map(item => {
  //     let obj = {};
  //     if (item[key]) {
  //       obj[item[key]] = item;

  //       if (arr.length > 0) {
  //         console.log("ARR", Object.keys(arr[count]).toString());
  //         console.log("item[key]", item[key]);

  //         if (Object.keys(arr[count]).toString() === item[key]) {
  //           count++;
  //         }
  //       }

  //       arr.push(obj);
  //       // console.log(Object.keys(arr));
  //       // if (arr[index].includes(item[key])) {
  //       //   console.log("Já tem");
  //       // }
  //     } else {
  //       arr.push(item);
  //     }
  //   });

  // let novo = [];
  // keys.map((key, index) => {
  //   arr.map(item => {
  //     console.log("ITEM", item);
  //     console.log("KEY", item[key]);
  //   });
  // });

  // console.log("NOVO", arr);
  // };

  // handleGroupBy = (items, key) => {
  //   Array.prototype.groupBy = function(prop) {
  //     return this.reduce(function(groups, item) {
  //       const val = item[prop];
  //       groups[val] = groups[val] || [];
  //       groups[val].push(item);
  //       return groups;
  //     }, {});
  //   };
  //   console.log(items.groupBy(key));
  // };

  handleMatrizReduce = () => {
    const numbers = [
      [1, 4, 0, 6, -7, 0],
      [12, 2, -4, -90, 0, 0],
      [87, 0, 0, -60, 0, 1],
      [3, 1, 2, 7, 8, -9]
    ];

    let novo = numbers.map((nums, index) => {
      return nums.reduce((acc, next) => {
        if (next > 0) {
          return (acc += next);
        }
        return acc;
      }, 0);
    });

    console.log("SUMReduce", novo);

    var sum = [0, 0, 0, 0];
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers[i].length; j++) {
        if (numbers[i][j] > 0) {
          sum[i] = sum[i] + numbers[i][j];
        }
      }
    }

    console.log("SUM", sum);
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
          {this.handleMatrizReduce(carros, "marca")}
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
