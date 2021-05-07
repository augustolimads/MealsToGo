import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
`;

const SearchContainer = styled.View`
  background-color: white;
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  background-color: white;
  padding: 16px;
`;

export function RestaurantScreen() {
  const [search, setSearch] = useState("");

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="search"
          value={search}
          onChangeText={setSearch}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard
          name="some restaurant"
          icon="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png"
          photos={["https://picsum.photos/200", "https://picsum.photos/200"]}
          address="100 some random street"
          isOpenNow={true}
          rating={3}
          isCloseTemporary={true}
        />
      </RestaurantListContainer>
    </SafeArea>
  );
}
