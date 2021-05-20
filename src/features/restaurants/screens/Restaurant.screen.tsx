import React, { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard.component";
import Spacer from "../../../components/Spacer.component";
import { SafeArea } from "../../../components/SafeArea.component";
import { useRestaurants } from "../services/restaurants.context";
import MenuItem from "react-native-paper/lib/typescript/components/Menu/MenuItem";
import * as S from "./Restaurant.styled";

export function RestaurantScreen() {
  const [search, setSearch] = useState("");
  const { restaurants } = useRestaurants();

  useEffect(() => {
    console.log(restaurants);
  }, [restaurants]);

  return (
    <SafeArea>
      <S.SearchContainer>
        <Searchbar
          placeholder="search"
          value={search}
          onChangeText={setSearch}
        />
      </S.SearchContainer>
      <S.RestaurantList
        data={restaurants}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Spacer position="vertical" size={2}>
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
      />
    </SafeArea>
  );
}
