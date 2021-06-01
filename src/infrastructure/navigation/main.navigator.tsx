import React from "react";
import { Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantScreen } from "../../features/restaurants/screens/Restaurant.screen";
import { SafeArea } from "../../components/SafeArea.component";
import Loading from "../../components/Loading.component";

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

export function MainNavigator() {
  return (
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
  );
}

const Map = () => (
  <SafeArea>
    <Text>Mapa</Text>
    <Loading />
  </SafeArea>
);
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
    <Loading />
  </SafeArea>
);
