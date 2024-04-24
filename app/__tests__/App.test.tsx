import React from "react";
import { mockRadiationMeasuring } from "../src/NativeModules";
import App from "../src/App";

// Note: import explicitly to use the types shipped with jest.
import { it } from "@jest/globals";

// Note: test renderer must be required after react-native.
// import renderer, { act } from "react-test-renderer";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  within,
} from "@testing-library/react-native";

describe("App", () => {
  beforeAll(() => {
    mockRadiationMeasuring();
  });

  it("renders correctly", async () => {
    render(<App />);
  });

  it("loads the inventory", async () => {
    render(<App />);
    await waitFor(() => {
      screen.getByText("List of Items");

      screen.getByText("Displaying 4 items");
    });
  });

  it("shows the items", async () => {
    render(<App />);
    await waitFor(() => {
      screen.getByText("Rocket parts");
      screen.getByText("Space Suit");
      screen.getByText("Space Helmet");
      screen.getByText("Oxygen Tank");
    });
  });

  it("shows the variants", async () => {
    render(<App />);
    await waitFor(() => {
      screen.getByText("nose-cone-123");
      screen.getByText("fuel-tank-789");
      screen.getByText("ralph-lauren-123");
      screen.getByText("versace-789");
    });
  });

  it("can calculate radiation for a variant", async () => {
    render(<App />);
    await waitFor(async () => {
      // screen.getByText("nose-cone-123");
      const variantItem = screen.getByTestId("nose-cone-123-variant");

      const radiationButton =
        within(variantItem).getByTestId("radiation-button");

      fireEvent.press(radiationButton);

      await waitFor(() => {
        within(variantItem).getByText("Radiation: 40");
      });
    });
  });

  it("imports a new variant", async () => {
    render(<App />);
    await waitFor(async () => {
      screen.getByText("Import Variant");

      const itemIdInput = screen.getByTestId("import-itemId-input");
      fireEvent.changeText(itemIdInput, "y07x55xhtee");

      const serialNumberInput = screen.getByTestId("import-serialNumber-input");
      fireEvent.changeText(serialNumberInput, "polo-123");

      const quantityInput = screen.getByTestId("import-quantity-input");
      fireEvent.changeText(quantityInput, "5");

      const locationInput = screen.getByTestId("import-location-input");
      fireEvent.changeText(locationInput, "LOC-12-10");

      const hoursInSpaceInput = screen.getByTestId("import-hoursInSpace-input");
      fireEvent.changeText(hoursInSpaceInput, "1");

      fireEvent.press(screen.getByTestId("import-button"));
    });
  });

  it("imports an existing variant", async () => {
    render(<App />);
    await waitFor(async () => {
      screen.getByText("Import Variant");

      const itemIdInput = screen.getByTestId("import-itemId-input");
      fireEvent.changeText(itemIdInput, "y07x55xhtee");

      const serialNumberInput = screen.getByTestId("import-serialNumber-input");
      fireEvent.changeText(serialNumberInput, "ralph-lauren-123");

      const quantityInput = screen.getByTestId("import-quantity-input");
      fireEvent.changeText(quantityInput, "10");

      const locationInput = screen.getByTestId("import-location-input");
      fireEvent.changeText(locationInput, "LOC-13-10");

      const hoursInSpaceInput = screen.getByTestId("import-hoursInSpace-input");
      fireEvent.changeText(hoursInSpaceInput, "100");

      fireEvent.press(screen.getByTestId("import-button"));
    });
  });
});
