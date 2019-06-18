import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    strikes: 0,
    balls: 0
  };

  addStrike = e => {
    e.preventDefault();
    this.state.strikes < 2
      ? this.setState(prevState => ({
          strikes: ++prevState.strikes
        }))
      : this.setState({
          strikes: 0
        });
  };

  addBall = e => {
    e.preventDefault();
    this.state.balls < 3
      ? this.setState(prevState => ({
          balls: ++prevState.balls
        }))
      : this.setState({
          balls: 0
        });
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
        strikes: ++prevState.strikes
      }));
    } else if (this.state.strikes === 2) {
      this.setState({
        ...this.state
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Baseball App</h1>
        <p>Balls: {this.state.balls}</p>
        <p>Strikes: {this.state.strikes}</p>
        <button onClick={this.addStrike}>STRIKE</button>{" "}
        <button onClick={this.addBall}>BALL</button>{" "}
        <button onClick={this.addFoul}>FOUL</button>{" "}
        <button onClick={this.addHit}>HIT</button>{" "}
      </div>
    );
  }
}

export default App;
