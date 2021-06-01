import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react";
import { NavigationContainer } from "@react-navigation/stack";
import AccountScreen from "../../features/user/screens/Account.screen";

const Stack = createStackNavigator();

export function AccountNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={<AccountScreen />} />
      <Stack.Screen
        name="Login"
        component={() => (
          <View>
            <Text>LoginScreen</Text>
          </View>
        )}
      />
      <Stack.Screen
        name="Register"
        component={() => (
          <View>
            <Text>LoginScreen</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  );
}
