
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './src/MainTabScreen'
import activityScreen from './src/activityScreen'
import profileSettings from './src/components/profileSettings'

// import { DrawerContent } from './src/DrawerContent'

//import GoogleSignins from './GoogleSignins'

const Drawer = createDrawerNavigator();

const App = () => {
  return(
       <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={MainTabScreen} />
          <Drawer.Screen name="Activity" component={activityScreen} />
          <Drawer.Screen name="ProfileSettings" component={profileSettings} />
        </Drawer.Navigator>
      </NavigationContainer>
  )
}


export default App;
