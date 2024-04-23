import React, { useEffect } from "react";
import type { PropsWithChildren } from "react";
import { SafeAreaView, Text, View } from "react-native";

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
  return (
    <SafeAreaView>
      <View>
        <Section title="Add Variant">
          <Text>Add a variant to an item in the inventory</Text>
        </Section>
      </View>
    </SafeAreaView>
  );
}

export default App;
