
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons';
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
import HomeScreen from './src/HomeScreen'
import ProfileScreen from './src/ProfileScreen'


const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
      <HomeStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#00bfff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}>
          <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title:'HOME',
          }} />
        </HomeStack.Navigator>
)

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#00bfff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
)

const App = () => {
  return(
       <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStackScreen} />
          <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  )
}


export default App;
