import "react-native";
import React from "react";
import App from "../src/App";

// Note: import explicitly to use the types shipped with jest.
import { it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

describe("App", () => {
  it("renders correctly", () => {
    renderer.create(<App />);
  });

  // if("can add an item to the inventory", () => {

});
