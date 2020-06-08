import React, { Component } from 'react';
import {StyleSheet, Image, View,Text,} from 'react-native';
import { connect } from 'react-redux'
import Swiper from 'react-native-deck-swiper'

const Card = ( data ) => (
    <View style={styles.card}>
         {/* <Card title={data.name} /> */}
         <Image source={data.card.categoty} />
         {/* <Text>{data.card.size}</Text> */}
         {/* <Text> 12345koke</Text> */}
    </View>
);


class itemCard extends Component {
    
    render(){
        console.log(this.props.activity)
        return(
            <View style={styles.container}>
                <Swiper
                cards={this.props.activity}
                // cardIndex={index}
                renderCard={(data) => <Card card={data}/>}
                // onSwiper={onSwiped}
            />
            </View>
           
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card:{
        flex:0.45,
        borderRadius:8,
        shadowRadius: 25,
        shadowColor:'#000',
        shadowOpacity: 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10

    },
    cardImage:{
        flex: 1,
        resizeMode: 'contain'
    }

})

const mapStateToProps = (state) => {
    console.log(state);
    return {
      activity: state.activities.activityForm
    }
  }
  

  export default connect(mapStateToProps)(itemCard)