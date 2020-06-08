import React, { useState } from 'react';
import {View, Text, Button, StyleSheet, Modal } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ActivityForm from './activityForm'


const ProfileScreen = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false)
    return(
      <View style={styles.container}>
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
        <Text>Home Screen</Text>
        <Button
        title="Go To Profile screen"
        onPress={() => navigation.navigate("Home")}
        />
        <Button
        title="Add Group Activity"
        onPress={() => navigation.navigate("ActivityForm")}
        />
        <MaterialCommunityIcons
          name='pencil-plus'
          size={28}
          style={styles.modalToggle}
          onPress={() => setModalOpen(true)}
        />      
      </View>
    );
  };

  export default ProfileScreen

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding: 10
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
    }
    

  })