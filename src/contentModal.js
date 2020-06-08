import React, {Component} from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import ItemCard from './itemCard';
import { ListItem, Icon } from 'react-native-elements'
import {deleteActivity} from './actions/activity'

import { connect } from 'react-redux'

class contentModal extends Component{
    render(){
        return(
            <View style={styles.container}>
            <View>
             <ItemCard/>
            </View>    
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // padding: 10,
    },
    
  })

  const mapStatetoProps = (state) => {
    return{
        activity: state.activities.activityForm
    }
}

  export default connect (mapStatetoProps)(contentModal);