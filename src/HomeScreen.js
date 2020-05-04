import React from 'react';
import {View, Text, Button, StyleSheet } from 'react-native'

const HomeScreen = ({navigation}) => {
    return(
      <View style={{flex:1, alignItems: 'center', justifyContent:'center',}}>
        <Text>Home Screen</Text>
        <Button
        title="Go To Profile screen"
        onPress={() => navigation.navigate("Profile")}
        />
      </View>
    );
  };

  export default HomeScreen