import React from "react";
import { StatusBar } from "react-native";
import { RestaurantScreen } from "./src/features/restaurants/screens/Restaurant.screen";

export default function App() {
  return (
    <>
      <StatusBar />
      <RestaurantScreen />
    </>
  );
}
