import { Button, TextInput, View } from "react-native";
import { useState } from "react";
import { postInventoryItem } from "../api";

function ImportVariantComponent(): React.JSX.Element {
  const [itemId, setItemId] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [location, setLocation] = useState("");
  const [hoursInSpace, setHoursInSpace] = useState(0);

  const importVariant = () => {
    postInventoryItem(itemId, {
      serialNumber,
      quantity,
      location,
      hoursInSpace,
    }).then(() => {
      // Reset the form
      setItemId("");
      setSerialNumber("");
      setQuantity(0);
      setLocation("");
      setHoursInSpace(0);
    });
  };

  return (
    <View>
      <TextInput
        testID="import-itemId-input"
        placeholder="Item ID"
        value={itemId}
        onChangeText={(i) => setItemId(i)}
      />
      <TextInput
        testID="import-serialNumber-input"
        placeholder="Serial Number"
        value={serialNumber}
        onChangeText={(s) => setSerialNumber(s)}
      />
      <TextInput
        testID="import-quantity-input"
        placeholder="Quantity"
        value={quantity.toString()}
        onChangeText={(q) => setQuantity(parseInt(q, 10))}
      />
      <TextInput
        testID="import-location-input"
        placeholder="Location"
        value={location}
        onChangeText={(l) => setLocation(l)}
      />
      <TextInput
        testID="import-hoursInSpace-input"
        placeholder="Hours in Space"
        value={hoursInSpace.toString()}
        onChangeText={(h) => setHoursInSpace(parseInt(h, 10))}
      />
      <Button
        testID="import-button"
        title="Import"
        onPress={() => {
          importVariant();
        }}
      />
    </View>
  );
}

export default ImportVariantComponent;
