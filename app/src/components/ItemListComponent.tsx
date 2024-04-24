import { Text, View } from "react-native";
import { ItemList } from "../types";
import ItemListVariantComponent from "./ItemListVariantComponent";

function ItemListComponent({ items }: { items: ItemList }): React.JSX.Element {
  return (
    <View>
      {Object.keys(items).map((id) => (
        <View key={id}>
          <Text>{items[id].name}</Text>
          {items[id].variants.map((variant) => (
            <ItemListVariantComponent
              key={variant.serialNumber}
              variant={variant}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

export default ItemListComponent;
