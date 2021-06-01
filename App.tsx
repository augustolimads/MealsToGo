import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import AppLoading from "expo-app-loading";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Routes } from "./src/infrastructure/navigation";
import { restaurantsRequest } from "./src/features/restaurants/services/restaurants.service";
import { RestaurantsProvider } from "./src/features/restaurants/services/restaurants.context";
import firebase from "firebase";
import "./ReactotronConfig";
import { AuthenticationContextProvider } from "./src/features/user/services/authentication.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAKJ6k7perzIYTqpDzUz5JWYtE_5xwDXHA",
  authDomain: "mealstogo-133d6.firebaseapp.com",
  projectId: "mealstogo-133d6",
  storageBucket: "mealstogo-133d6.appspot.com",
  messagingSenderId: "632438914219",
  appId: "1:632438914219:web:f9b7e631b7641414ee8bee",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword("augusto@email.com", "123456")
      .then((user) => {
        console.log(user);
        setIsAuth(true);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

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
        <AuthenticationContextProvider>
          <RestaurantsProvider>
            <Routes />
          </RestaurantsProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
