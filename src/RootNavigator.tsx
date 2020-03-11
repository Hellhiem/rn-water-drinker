import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginContainer from "screens/Login/Login.container";
import WaterStatistics from "screens/WaterStatistics/WaterStatistics.container";
import NavigationRoutes from "types/NavigationRoutes";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={NavigationRoutes.Login} component={LoginContainer} options={{ headerShown: false }} />
        <Stack.Screen
          name={NavigationRoutes.WaterStatistics}
          component={WaterStatistics}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
