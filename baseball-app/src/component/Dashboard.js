import React from "react";

function Dashboard(props) {
  return (
    <>
      <p>Balls: {props.balls}</p>
      <p>Strikes: {props.strikes}</p>
    </>
  );
}

export default Dashboard;
