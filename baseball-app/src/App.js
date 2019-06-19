import React from "react";
import Dashboard from "./component/Dashboard";
import Display from "./component/Display";

import "./App.css";

class App extends React.Component {
  state = {
    strikes: 0,
    balls: 0,
    outs: 0
  };

  addStrike = e => {
    e.preventDefault();
    this.setState(prevState => ({
      strikes: prevState.strikes < 2 ? ++prevState.strikes : 0
    }));
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

    if (this.state.strikes < 2) {
      this.setState(prevState => ({
        strikes: prevState.strikes < 2 ? ++prevState.strikes : this.state
      }));
    }
  };

  addOut = () => {};

  render() {
    return (
      <div className="App">
        <h1>Baseball App</h1>
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
