import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import DailyActivityScreen from './DailyActivityScreen'
import MessageScreen from './MessageScreen'

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const DailyActivityStack = createStackNavigator();
const MessageStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Daily Activity"
        component={DailyActivityStackScreen}
        options={{
          tabBarLabel: 'Daily Activity',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="alarm" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageStackScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    
)

export default MainTabScreen

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
const DailyActivityStackScreen = ({navigation}) => (
  <DailyActivityStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#00bfff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}>
      <DailyActivityStack.Screen name="Daily Activity" component={DailyActivityScreen} />
    </DailyActivityStack.Navigator>
    
  )
  const MessageStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#00bfff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
      }}>
        <ProfileStack.Screen name="Message" component={MessageScreen} />
      </ProfileStack.Navigator>
  
  )
