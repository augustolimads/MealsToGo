import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard.component";
import Spacer from "../../../components/Spacer.component";
import { SafeArea } from "../../../components/SafeArea.component";
import { useRestaurants } from "../services/restaurants.context";
import * as S from "./Restaurant.styled";
import Loading from "../../../components/Loading.component";

export function RestaurantScreen() {
  const [search, setSearch] = useState("");
  const { restaurants, isLoading } = useRestaurants();

  return (
    <SafeArea>
      <S.SearchContainer>
        <Searchbar
          placeholder="search"
          value={search}
          onChangeText={setSearch}
        />
      </S.SearchContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <S.RestaurantList
          data={restaurants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Spacer position="vertical" size={2}>
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          )}
        />
      )}
    </SafeArea>
  );
}
