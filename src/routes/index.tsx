import React from "react";
import { Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantScreen } from "../features/restaurants/screens/Restaurant.screen";
import { SafeArea } from "../components/SafeArea.component";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

interface RouteProps {
  route: { name: string };
  size?: number;
  color?: string;
}

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }: RouteProps) => {
  const iconName = TAB_ICON[route.name] as string;

  return {
    tabBarIcon: ({ size, color }: RouteProps) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          style: {},
        }}
      >
        <Tab.Screen name="Restaurants" component={RestaurantScreen} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Map = () => (
  <SafeArea>
    <Text>Mapa</Text>
  </SafeArea>
);
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
