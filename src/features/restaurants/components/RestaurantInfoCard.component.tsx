import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Spacer from "../../../components/Spacer.component";
import { Text } from "../../../components/Text.component";
import {
  Address,
  EndSection,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  Icon,
} from "./RestaurantInfoStyle.styles";
import { RestaurantProps } from "../../../types/restaurant.interface";

export function RestaurantInfoCard({ restaurant }: RestaurantProps) {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((item, index) => (
              <SvgXml xml={star} width={20} height={20} key={index} />
            ))}
          </Rating>
          <EndSection>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer size={2} />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer size={2} />
            <Icon source={{ uri: icon }} />
          </EndSection>
        </Section>
        <Address>{address}</Address>
      </Card.Content>
    </RestaurantCard>
  );
}
