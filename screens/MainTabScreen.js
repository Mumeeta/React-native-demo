import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import KirjaaScreen from "./KirjaaScreen";
import LisäätiimiScreen from "./LisäätiimiScreen";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#ff00ff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Etusivu",
        tabBarColor: "#2d3748",
        tabBarIcon: ({ color }) => (
          <Ionicons name="home" size={24} color="black" />
        ),
      }}
    />

    <Tab.Screen
      name="Kirjaa"
      component={KirjaaScreen}
      options={{
        tabBarLabel: "Kirjaa",
        tabBarColor: "#694fad",
        tabBarIcon: ({ color }) => (
          <Ionicons name="logo-ionic" size={24} color="black" />
        ),
      }}
    />
    <Tab.Screen
      name="lisää"
      component={LisäätiimiScreen}
      options={{
        tabBarLabel: "Lisäätiimi",
        tabBarColor: "#d02860",
        tabBarIcon: ({ color }) => (
          <Ionicons name="play-back-circle-outline" size={24} color="black" />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#2d3748",
      },
      headerTintColor: "#ff00ff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="NestedHome"
      component={HomeScreen}
      options={{
        title: "Overview",
        headerLeft: () => (
          <AntDesign.Button
            name=""
            size={25}
            backgroundColor="#2d3748"
            onPress={() => navigation.openDrawer()}
          ></AntDesign.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#2d3748",
      },
      headerTintColor: "#ff00ff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name="Faq"
      component={FaqScreen}
      options={{
        headerLeft: () => (
          <Ionicons.Button
            name="menu"
            size={25}
            backgroundColor="#2d3748"
            onPress={() => navigation.openDrawer()}
          ></Ionicons.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
