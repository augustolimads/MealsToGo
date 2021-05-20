import React, { useEffect } from "react";
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
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos }} />
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
