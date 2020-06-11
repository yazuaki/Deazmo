import React, { useState } from 'react';
import {View, Text, Button, StyleSheet, Modal } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ActivityForm from './activityForm'



const ProfileScreen = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false)
    return(
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={{fontSize: 24, marginRight: 24}}>Create an Activity</Text>
          <MaterialCommunityIcons
            name='plus'
            size={28}
            style={styles.modalToggle}
            onPress={() => setModalOpen(true)}
            size={40}
          />     
        </View>
        
        <Button
        title="Edit profile"
        onPress={() => navigation.navigate("ProfileSettings")}
        />
        <Button
        title="My Activities"
        onPress={() => navigation.navigate("Daily Activity")}
        />
    {/* VisibleModal */}
  <Modal visible={modalOpen} animationType='slide' >
    <View style={styles.modalContent}>
      <ActivityForm />
      <MaterialCommunityIcons
        name='close'
        size={24}
        style={{...styles.modalToggle, ...styles.modalClose }}
        onPress={() => setModalOpen(false)}
      />
    </View>
  </Modal>
      </View>
    );
  };

  export default ProfileScreen

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding: 10
    },
    top:{
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems:'center'
      
    },
    modalContent:{
      flex: 1
    },
    modalToggle:{
      borderWidth:1,
      borderColor: 'red',
      padding:10,
      borderRadius: 10,
      alignSelf: 'flex-end'
    },
    modalClose:{
      marginBottom: 0,
    }
    

  })