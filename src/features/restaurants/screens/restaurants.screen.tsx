import React from "react";
import { StyleSheet, FlatList, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer.components";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";

import { 
  SafeArea,
  SearchView,
  RestaurantList
 } from "./restaurants.screen.styles";
// const SafeArea = styled(SafeAreaView)`
//   flex: 1;
//   background-color: ${props => props.theme.colors.ui.primary};
//   ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}`}px;
// `;

// const SearchView = styled(View)`
//   padding: ${props => props.theme.space[1]};
// `;

// const ListView = styled(View)`
//   flex: 1;
//   padding: ${(props) => props.theme.space[2]};
//   background-color: ${props => props.theme.colors.brand.muted};
// `;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchView>
      <Searchbar value="" />
    </SearchView>

    <RestaurantList
      data={[
        { name: "1" },
        { name: "2" },
        { name: "3" },
        { name: "4" },
        { name: "5" },
        { name: "6" },
      ]}
      renderItem={() => (
        <Spacer postion="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item: any) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />
  </SafeArea>
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     marginTop: StatusBar.currentHeight,
//   },
//   search: {
//     flex: 2,
//     paddingTop: 5,
//   },
//   searchText: {
//     color: "white",
//     fontWeight: "bold",
//     padding: 9,
//   },
//   list: {
//     flex: 20,
//     backgroundColor: "blue",
//   },
//   listText: {
//     fontWeight: "bold",
//     color: "white",
//     padding: 9,
//   },
// });
