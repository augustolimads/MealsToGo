import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

interface restarauntProps {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isCloseTemporary: boolean;
}

const Title = styled.Text`
  text-align: center;
  color: red;
`;

export function RestaurantInfoCard({
  name,
  photos,
  icon,
  address,
  isOpenNow,
  rating,
  isCloseTemporary,
}: restarauntProps) {
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} source={{ uri: photos[0] }} style={styles.cover} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});
