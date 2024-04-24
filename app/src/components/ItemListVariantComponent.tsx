import { useState } from "react";
import { Button, Text, View } from "react-native";
import { Variant } from "../types";
import { RadiationMeasuring } from "../NativeModules";

function ItemListVariantComponent({
  variant,
}: {
  variant: Variant;
}): React.JSX.Element {
  const [radiation, setRadiation] = useState(0);

  const calculateRadiation = () => {
    if (variant.hoursInSpace) {
      RadiationMeasuring.calculateRadiation(
        variant.hoursInSpace,
        (result: number) => setRadiation(result)
      );
      return;
    }
  };

  return (
    <View testID={`${variant.serialNumber}-variant`}>
      <Text>{variant.serialNumber}</Text>
      <Text>Quantity: {variant.quantity}</Text>
      {radiation > 0 && <Text>Radiation: {radiation}</Text>}
      <Button
        testID="radiation-button"
        title="Calculate Radiation"
        onPress={calculateRadiation}
      />
    </View>
  );
}

export default ItemListVariantComponent;
