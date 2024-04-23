import { Text, View } from "react-native";
import { ItemList } from "../types";

function ItemListComponent({ items }: { items: ItemList }): React.JSX.Element {
  return (
    <View>
      {Object.keys(items).map((id) => (
        <View key={id}>
          <Text>{items[id].name}</Text>
          {items[id].variants.map((variant) => (
            <View key={variant.serialNumber}>
              <Text>{variant.serialNumber}</Text>
              <Text>Quantity: {variant.quantity}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

export default ItemListComponent;
