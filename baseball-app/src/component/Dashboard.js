import React from "react";

function Dashboard(props) {
  return (
    <>
      <p>Balls: {props.balls}</p>
      <p>Strikes: {props.strikes}</p>
      <p>Outs: {props.outs}</p>
    </>
  );
}

export default Dashboard;
