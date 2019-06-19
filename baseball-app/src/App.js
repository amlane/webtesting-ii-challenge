import React from "react";
import Dashboard from "./component/Dashboard";
import Display from "./component/Display";

import "./App.css";

class App extends React.Component {
  state = {
    strikes: 0,
    balls: 0,
    outs: 0,
    runs: 0,
    inning: 0,
    players: [],
    batter: "",
    batterId: 0
  };

  componentDidMount = () => {
    this.setState(
      {
        players: [
          {
            id: 1,
            name: "Amanda"
          },
          {
            id: 2,
            name: "Taslim"
          },
          {
            id: 3,
            name: "Jonathan"
          }
        ]
      },
      () => this.setPlayer()
    );
  };

  setPlayer = () => {
    this.setState(
      {
        batter: this.state.players[this.state.batterId].name
      },
      () => console.log("player", this.state.batter)
    );
  };

  addStrike = e => {
    e.preventDefault();
    this.setState(prevState => ({
      strikes: prevState.strikes < 2 ? ++prevState.strikes : 0
    }));
    this.addOut();
  };

  addBall = e => {
    e.preventDefault();
    this.setState(prevState => ({
      balls: prevState.balls < 3 ? ++prevState.balls : 0
    }));
  };

  addHit = e => {
    e.preventDefault();
    this.setState({
      balls: 0,
      strikes: 0
    });
  };

  addFoul = e => {
    e.preventDefault();
    this.setState(prevState => ({
      strikes: prevState.strikes < 2 ? ++prevState.strikes : this.state.strikes
    }));
  };

  addOut = () => {
    this.setState(
      prevState => ({
        outs: prevState.strikes === 0 ? prevState.outs + 1 : this.state.outs,
        batterId:
          prevState.strikes === 0 ? prevState.batterId + 1 : this.state.batterId
      }),
      () => this.setPlayer()
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Baseball App</h1>
        <span>
          Team:{" "}
          <span>
            {this.state.players.map(p => {
              return <li key={p.id}>{p.name}</li>;
            })}
          </span>
        </span>

        <p>Player At Bat: {this.state.batter}</p>
        <Dashboard
          balls={this.state.balls}
          strikes={this.state.strikes}
          outs={this.state.outs}
        />
        <Display
          addStrike={this.addStrike}
          addFoul={this.addFoul}
          addHit={this.addHit}
          addBall={this.addBall}
        />
      </div>
    );
  }
}

export default App;
