import React, { useEffect } from "react";
import type { PropsWithChildren } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { ItemList } from "./types";
import ItemListComponent from "./components/ItemListComponent";
import { getInventoryItems } from "./api";
import ImportVariantComponent from "./components/ImportVariantComponent";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  return (
    <View>
      <Text>{title}</Text>
      {children}
    </View>
  );
}

function App(): React.JSX.Element {
  // Load the items from the API
  const [itemsData, setItemsData] = React.useState<{
    totalItems: number;
    items: ItemList;
  }>({
    totalItems: 0,
    items: {},
  });

  useEffect(() => {
    getInventoryItems().then((res) => {
      setItemsData(res.data);
    });
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Section title="Import Variant">
          <ImportVariantComponent />
        </Section>
        {itemsData.totalItems > 0 && (
          <Section title="List of Items">
            <Text>Displaying {itemsData.totalItems} items</Text>
            <ItemListComponent items={itemsData.items} />
          </Section>
        )}
      </View>
    </SafeAreaView>
  );
}

export default App;
