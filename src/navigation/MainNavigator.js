import React, { useContext } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { navigationRef } from "./helper/RootNavigation";
import { AuthContext } from "../Context";
import CommonNavigator from "./CommonNavigator";
import SecretNavigator from "./SecretNavigator";
import DrawerContent from "../components/DrawerContent";
import MainScreen from "../screens/MainScreen";

const Drawer = createDrawerNavigator();

// Custom theme
const navCustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2383c3",
    background: "transparent",
    text: "#000013",
  },
};

const MainNavigator = () => {
  const {access} = useContext(AuthContext);
  return (
    <NavigationContainer>
        {access.access_token ? <SecretNavigator/> : <CommonNavigator/>}
    </NavigationContainer>
  );
};

export default MainNavigator;
