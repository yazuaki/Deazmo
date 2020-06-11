import React, { useState } from 'react';
import {View, Text, Button, StyleSheet, Modal,FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ContentModal from './contentModal'

const HomeScreen = ({navigation}) => {

    return(
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
        title="Search Group Activities"
        onPress={() => navigation.navigate("Activity")}
        />
      </View>
    );
  };


  const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent:'center'
    },
    modalContent:{
      flex: 1
    },
    modalToggle:{
      marginBottom: 10,
      borderWidth:1,
      borderColor: '#f2f2f2',
      padding:10,
      borderRadius: 10,
      alignSelf: 'center'
    },
    modalClose:{
      marginBottom: 0,
    },
   

  })

export default HomeScreen;