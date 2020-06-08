import React, { useState } from 'react';
import {View, Text, Button, StyleSheet, Modal,FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ContentModal from './contentModal'

const HomeScreen = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false)
    return(
      <View style={{flex:1, alignItems: 'center', justifyContent:'center',}}>
        <Modal visible={modalOpen} animationType='slide' >
          <View style={styles.modalContent}>
            <ContentModal />
            <MaterialCommunityIcons
              name='close'
              size={24}
              style={{...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
          </View>
        </Modal>
        <MaterialCommunityIcons
          name='pencil-plus'
          size={28}
          style={styles.modalToggle}
          onPress={() => setModalOpen(true)}
        /> 
        <Text>Home Screen</Text>
        <Button
        title="Go To Profile screen"
        onPress={() => navigation.navigate("Profile")}
        />
      </View>
    );
  };


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
    },
   

  })

export default HomeScreen;