import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View, Image, } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';


 class activityScreen extends Component {


  render () {
    console.log(this.props.activity)
    return (
      <View style={styles.container}>
        
        <Swiper
            cards={this.props.activity}
            renderCard={(card) => {
                return (        
                    <View style={styles.card}>
                        <Image source={card.category} style={styles.cardImage} />      
                          <Text style={styles.title}>{card.name}</Text> 
                        <View style={styles.cardinfo}>
                          <View style={styles.infotext}>
                            <MaterialCommunityIcons
                                name='information-variant'
                                size={24}
                                color={'blue'}
                            />
                          <Text style={styles.text}>{card.info}</Text> 
                          </View>
                          <View style={styles.infotext}> 
                            <MaterialCommunityIcons
                              name='check-outline'
                              size={24}
                              color={'red'}
                            />
                          <Text style={styles.text}>{card.req}</Text> 
                            </View>
                            <View style={styles.infotext}>
                            <MaterialCommunityIcons
                              name='account-multiple'
                              size={24}
                            />
                          <Text style={styles.text}>{card.size}</Text> 
                          </View>
                        </View>   
                        <View style={styles.bottom}>
                          <TouchableOpacity
                          style={styles.button}
                          > 
                            <Text>PASS</Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                          style={styles.button}
                          > 
                            <Text>OPEN</Text>
                          </TouchableOpacity>
                        </View>           
                    </View>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            stackSize= {10}
            backgroundColor={'#fff'}>
            
        </Swiper>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  cardImage:{
    flex:0.8,
    width: '100%',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
  },
  cardinfo:{
    flex:0.8,
    width: '100%',
  },
  title:{
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'sans-serif-medium',
    color: 'black',
    fontWeight: 'bold'
  },
  infotext:{
    marginTop: 10,
    flexDirection: 'row',
    marginBottom:10
  },
  text: {
    marginLeft: 10,
    fontSize: 16,

  },
  bottom:{
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',

  },
  button:{
    width: 120,
    color: 'red',
    fontSize: 50,
    padding: 20,
    borderWidth:1,
    borderColor: 'black',
    backgroundColor:'orange',
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 10
    
  }
})

const mapStateToProps = (state) => {
  console.log(state);
  return {
    activity: state.activities.activityForm
  }
}

export default connect(mapStateToProps)(activityScreen)