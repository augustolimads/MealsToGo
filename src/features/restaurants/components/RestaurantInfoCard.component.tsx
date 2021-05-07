import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Spacer from "../../../components/Spacer.component";

interface restarauntProps {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isCloseTemporary: boolean;
}

const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  padding: ${({ theme }) => theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.ui.primary};
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ui.primary};
`;

const Rating = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.space[2]} 0;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const EndSection = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

// const Spacer = styled.View`
//   margin: 0 ${({ theme }) => theme.space[2]};
// `;

export function RestaurantInfoCard({
  name,
  photos,
  address,
  icon,
  isOpenNow,
  rating,
  isCloseTemporary,
}: restarauntProps) {
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((item, index) => (
              <SvgXml xml={star} width={20} height={20} key={index} />
            ))}
          </Rating>
          <EndSection>
            {isCloseTemporary && <Title>CLOSED TEMPORARILY</Title>}
            <Spacer size={2} />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer size={2} />
            <Image source={{ uri: icon }} style={{ width: 20, height: 20 }} />
          </EndSection>
        </Section>
        <Address>{address}</Address>
      </Card.Content>
    </RestaurantCard>
  );
}
