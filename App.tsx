import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import AppLoading from "expo-app-loading";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Routes } from "./src/routes";
import { restaurantsRequest } from "./src/features/restaurants/services/restaurants.service";
import { RestaurantsProvider } from "./src/features/restaurants/services/restaurants.context";

export default function App() {
  restaurantsRequest();
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar />
      <ThemeProvider theme={theme}>
        <RestaurantsProvider>
          <Routes />
        </RestaurantsProvider>
      </ThemeProvider>
    </>
  );
}
