import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LogInScreen from "../screens/LogInScreen";

const CommonStack = createStackNavigator();

const CommonNavigator = () => (
    <CommonStack.Navigator screenOptions={{ headerShown: false }}>
        <CommonStack.Screen name="LogInScreen" component={LogInScreen} />
    </CommonStack.Navigator>
);

export default CommonNavigator;
