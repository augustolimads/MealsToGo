import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard.component";

export function RestaurantScreen() {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="search"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard
          name="some restaurant"
          icon="some restaurant"
          photos={["https://picsum.photos/200", "https://picsum.photos/200"]}
          address="100 some random street"
          isOpenNow={true}
          rating={3}
          isCloseTemporary={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  search: {
    backgroundColor: "white",
    padding: 16,
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
