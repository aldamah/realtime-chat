import React from "react";
import ReactDOM  from "react-dom";
import MyButton from "../myButton";
import { render, cleanup } from "@testing-library/react";

import renderer from "react-test-renderer";

afterEach(cleanup);

it(" renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MyButton/>, div);
});

it("renders  button correctly", () => {
    const { getByTestId } = render(<MyButton label={"Click here"} />);
    expect(getByTestId("mybutton")).toHaveTextContent("Click here");
});

it ("matches snapshot", () => {
   const tree = renderer.create(<MyButton label={"save"}/>).toJSON();
   expect(tree).toMatchSnapshot();
});