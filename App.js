
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './src/MainTabScreen'
import { DrawerContent } from './src/DrawerContent'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
//import GoogleSignins from './GoogleSignins'

const Drawer = createDrawerNavigator();

const App = () => {
  return(
       <NavigationContainer>
        <Drawer.Navigator DrawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={MainTabScreen} />
          {/* <Drawer.Screen name="Profile" component={ProfileStackScreen} />*/}
        </Drawer.Navigator>
      </NavigationContainer>
  )
}


export default App;
