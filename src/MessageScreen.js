import React, { Component } from 'react';
import { StyleSheet,FlatList,View,Text} from 'react-native';




class MessageScreen extends Component {

  render() {

    return (
     <View style={styles.container}>
         <Text>Here you can see all your messages</Text>
     </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});

export default MessageScreen;

