import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.ui.primary};
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}`}px;
`;

const SearchView = styled(View)`
  padding: ${props => props.theme.space[1]};
`;

const ListView = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
  background-color: ${props => props.theme.colors.brand.muted};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchView>
      <Searchbar value="" />
    </SearchView>

    <ListView>
      <RestaurantInfoCard />
    </ListView>
  </SafeArea>
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
