import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AuthenticationContext } from "../../features/user/services/authentication.context";

import { MainNavigator } from "./main.navigator";
import { AccountNavigator } from "./account.navigator";

export function Routes() {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
}
