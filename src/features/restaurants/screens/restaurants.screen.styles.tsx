import styled from "styled-components/native";
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.brand.primary};
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}`}px;
`;

export const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[1]};
`;

export const ListView = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.brand.muted};
`;

export const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 8
    }
})``