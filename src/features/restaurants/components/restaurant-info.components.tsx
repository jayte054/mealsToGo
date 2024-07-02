import React from "react";
import {Text, View} from "react-native"
import {Card} from "react-native-paper"

export const RestaurantInfo = ({restaurant = {}}) => {
    const {
      name = "Jayte's Restaurant",
      icon,
      photos = ["https://cdn.businessday.ng/2020/08/Restaurants-in-Nigeria.jpg"],
      address = "my street",
      isOpenNow= true,
      rating = 4,
      isClosedTemporaririly = false,
    } = restaurant;
    
    return (
      <View>
        <Card>
            <Card.Cover source={{uri: photos[0]}} />
            <Card.Title title={name} />
        </Card>
      </View>
    );
}