import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) =>
    props.theme.colors?.ui.quaternary || "#ffffff"};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Rating = styled.View`
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
  flex-direction: row;
`;
export const StatInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Status = styled.View`
  flex-direction: row;
`;