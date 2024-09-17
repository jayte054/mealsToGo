import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import {SvgXml} from "react-native-svg"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Spacer } from "../../../components/spacer.components";
import { Restaurant, RestaurantInfoObject } from "../../../types";
import star from "../../../../assets/star";
import open from "../../../../assets/open"
import { Texts } from "../../../components/typography/text.component"

import {
  RestaurantCardCover,
  RestaurantCard,
  Info,
  Rating,
  StatInfo,
  Status,
} from "./restautant-info-card.styles";

// const Title = styled.Text`
//   font-family: ${props => props.theme.fonts.heading};
//   font-size: ${props => props.theme.fontSizes.body};
//   color: ${(props) => props.theme.colors.ui.success};
// `;

// const Address = styled.Text`
//   font-family: ${props => props.theme.fonts.body};
//   font-size: ${props => props.theme.fontSizes.caption};
// `
// const ClosedTag = styled.Text`
//   color: ${props => props.theme.colors.text.error};
//   font-size: ${props => props.theme.fontSizes.caption};
// `

// const Spacing = styled.View`
//   padding-left:${props => props.theme.space[3]}
// `

export const RestaurantInfoCard = ({
  restaurant = {} as RestaurantInfoObject,
}: Restaurant) => {
  const {
    name = "Jayte's Restaurantt",
    icon = <MaterialIcons name="dinner-dining" size={17} color="black" />,
    photos = ["https://cdn.businessday.ng/2020/08/Restaurants-in-Nigeria.jpg"],
    address = "my street on the corner",
    isOpenNow = false,
    rating = 3,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(rating))

  const ClosedTemporarily = () => (
    <>
    {isClosedTemporarily && (
    // <ClosedTag>
    <Texts variant="error">
      CLOSED TEMPORARILY
    </Texts>
    // </ClosedTag>
    )}
    </>
  );

  return (
    <View>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Texts variant="label">{name}</Texts>
          <StatInfo>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <Status>
              {isOpenNow ? (
                <SvgXml xml={open} width={20} height={20} />
              ) : (
                <ClosedTemporarily />
              )}
              {/* <Spacing /> */}
              <Spacer position="left" size="large">
                <Texts>{icon}</Texts>
              </Spacer>
            </Status>
          </StatInfo>
          <Texts variant="caption">{address}</Texts>
        </Info>
      </RestaurantCard>
    </View>
  );
};
