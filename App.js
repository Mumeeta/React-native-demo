import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import CompanyHash from './screens/CompanyHash';
import KirjaaScreen from './screens/KirjaaScreen';
import LisäätiimiScreen from './screens/LisäätiimiScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="React Native Demo" component={MainTabScreen} />
        <Drawer.Screen name="Etusivu" component={HomeScreen} />
        <Drawer.Screen name="Notification" component={NotificationScreen} />
        <Drawer.Screen name="CompanyHash" component={CompanyHash} />
        <Drawer.Screen name="Kirjaa" component={KirjaaScreen} />
        <Drawer.Screen name="Lisäätiimi" component={LisäätiimiScreen} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
