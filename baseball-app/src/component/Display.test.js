import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import App from "../App";
import { fireEvent } from "@testing-library/react/dist";

describe("testing Dashboard component", () => {
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
});
