import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import App from "../App";
import { fireEvent } from "@testing-library/react/dist";

describe("its an app", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render App.js", () => {
    render(<App />);
  });

  it("should render a header 'Baseball App'", () => {
    const { getByText } = render(<App />);

    getByText(/Baseball App/i);
  });

  it("should increment strikes by 1 when button is clicked and strikes are less than 2", () => {
    const { getByText } = render(<App />);
    //find button
    const button = getByText(/STRIKE/);
    //click it
    fireEvent.click(button);
    //test that strikes are = to 1 if less than 2
    getByText(/strikes: 1/i);

    fireEvent.click(button);
    getByText(/strikes: 2/i);

    fireEvent.click(button);
    getByText(/strikes: 0/i);
  });

  it("should increment balls by 1 when button is clicked and balls are less than 3", () => {
    const { getByText } = render(<App />);
    //find button
    const button = getByText(/BALL/);
    //click it
    fireEvent.click(button);
    //test that strikes are = to 1 if less than 2
    getByText(/balls: 1/i);

    fireEvent.click(button);
    getByText(/balls: 2/i);

    fireEvent.click(button);
    getByText(/balls: 3/i);

    fireEvent.click(button);
    getByText(/balls: 0/i);
  });

  it("should return balls and strikes to zero when a hit button is clicked", () => {
    const { getByText } = render(<App />);
    const button = getByText(/HIT/);

    fireEvent.click(button);
    getByText(/balls: 0/i);
    getByText(/strikes: 0/i);
  });

  it("should increment strikes by 1 when less than 2 when foul button is clicked", () => {
    const { getByText } = render(<App />);
    const button = getByText(/FOUL/);

    fireEvent.click(button);
    getByText(/strikes: 1/i);
    fireEvent.click(button);
    getByText(/strikes: 2/i);
    fireEvent.click(button);
    getByText(/strikes: 2/i);
  });
});
