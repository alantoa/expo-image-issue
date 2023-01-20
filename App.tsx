import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  // Image,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { day, month, week } from "./image-datas";

const layout = Dimensions.get("window");

const imageWidth = layout.width / 3;
const renderItem = ({ item, index }) => {
  return (
    <Image
      key={index}
      source={{
        uri: item,
      }}
      style={{
        height: imageWidth,
        width: imageWidth,
      }}
      cachePolicy="memory-disk"
    />
  );
};
const DayRoute = () => {
  return (
    <FlashList
      keyExtractor={(_, index) => `${index}`}
      data={day}
      numColumns={3}
      estimatedItemSize={imageWidth}
      ItemSeparatorComponent={() => (
        <View
          style={{
            width: StyleSheet.hairlineWidth,
            height: StyleSheet.hairlineWidth,
          }}
        />
      )}
      renderItem={renderItem}
    />
  );
};

const WeekRoute = () => {
  return (
    <FlashList
      keyExtractor={(_, index) => `${index}`}
      data={week}
      numColumns={3}
      estimatedItemSize={imageWidth}
      ItemSeparatorComponent={() => (
        <View
          style={{
            width: StyleSheet.hairlineWidth,
            height: StyleSheet.hairlineWidth,
          }}
        />
      )}
      renderItem={renderItem}
    />
  );
};
const MonthRoute = () => {
  return (
    <FlashList
      keyExtractor={(_, index) => `${index}`}
      data={month}
      numColumns={3}
      estimatedItemSize={imageWidth}
      ItemSeparatorComponent={() => (
        <View
          style={{
            width: StyleSheet.hairlineWidth,
            height: StyleSheet.hairlineWidth,
          }}
        />
      )}
      renderItem={renderItem}
    />
  );
};

const renderScene = SceneMap({
  day: DayRoute,
  week: WeekRoute,
  month: MonthRoute,
});

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "day", title: "Day" },
    { key: "week", title: "Week" },
    { key: "month", title: "Month" },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        lazy
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
