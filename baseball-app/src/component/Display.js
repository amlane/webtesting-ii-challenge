import React from "react";

function Display(props) {
  return (
    <>
      <button onClick={props.addStrike}>STRIKE</button>{" "}
      <button onClick={props.addBall}>BALL</button>{" "}
      <button onClick={props.addFoul}>FOUL</button>{" "}
      <button onClick={props.addHit}>HIT</button>{" "}
    </>
  );
}

export default Display;
