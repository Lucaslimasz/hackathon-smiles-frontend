import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Main from "../screens/Main";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Onboard from "../screens/Onboard";

import { StatusBar } from "react-native";

function NavigationDefault() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Onboard" component={Onboard} />
      </Stack.Navigator>
    </>
  );
}

export default NavigationDefault;
