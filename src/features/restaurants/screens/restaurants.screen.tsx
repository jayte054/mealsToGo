import React from "react"
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.components";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar value=""/>
    </View>

    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,
  },
  search: {
    flex: 2,
    paddingTop: 5,
  },
  searchText: {
    color: "white",
    fontWeight: "bold",
    padding: 9,
  },
  list: {
    flex: 20,
    backgroundColor: "blue",
  },
  listText: {
    fontWeight: "bold",
    color: "white",
    padding: 9,
  },
});