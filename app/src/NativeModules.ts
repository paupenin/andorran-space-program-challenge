import { NativeModules } from "react-native";

let RadiationMeasuring = NativeModules.RadiationMeasuring;

const mockRadiationMeasuring = () => {
  RadiationMeasuring = {
    calculateRadiation: jest.fn((number, callback) => callback(number * 2)),
  };
};

export { RadiationMeasuring, mockRadiationMeasuring };
