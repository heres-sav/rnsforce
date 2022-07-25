import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/DrawerContent";
import MainScreen from "../screens/MainScreen";

const SecretDrawer = createDrawerNavigator();

const SecretNavigator = () => (
    <SecretDrawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{ headerShown: false }}>
        <SecretDrawer.Screen name="MainScreen" component={MainScreen} />
    </SecretDrawer.Navigator>
);

export default SecretNavigator;
