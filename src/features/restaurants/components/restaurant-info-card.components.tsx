import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import {SvgXml} from "react-native-svg"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Restaurant, RestaurantInfoObject } from "../../../types";
import star from "../../../../assets/star";
import open from "../../../../assets/open"

const Title = styled.Text`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.success};
`;


const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[2]};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors?.ui.quaternary || "#ffffff"};
`;

const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`
const Address = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`

const Rating = styled.View`
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
  flex-direction: row;
`;

const StatInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ClosedTag = styled.Text`
  color: ${props => props.theme.colors.text.error};
    font-size: ${props => props.theme.fontSizes.caption};

`

const Status = styled.View`
  flex-direction: row;
`

export const RestaurantInfoCard = ({
  restaurant = {} as RestaurantInfoObject,
}: Restaurant) => {
  const {
    name = "Jayte's Restaurantt",
    icon = <MaterialIcons name="dinner-dining" size={17} color="black" />,
    photos = ["https://cdn.businessday.ng/2020/08/Restaurants-in-Nigeria.jpg"],
    address = "my street",
    isOpenNow = false,
    rating = 3,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(rating))

  const ClosedTemporarily = () => (
    <>{isClosedTemporarily && (
    <ClosedTag>
      CLOSED TEMPORARILY
    </ClosedTag>)}</>
  );

  return (
    <View>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <StatInfo>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <Status>
             { isOpenNow ? <SvgXml xml={open} width={20} height={20} /> : <ClosedTemporarily />}
             <Text>{icon}</Text>
            </Status>
          </StatInfo>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </View>
  );
};
