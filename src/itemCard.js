// import React, { Component } from 'react';
// import {StyleSheet, Image, View,Text,} from 'react-native';
// import { connect } from 'react-redux'
// import Swiper from 'react-native-deck-swiper'


// const Card = ( data ) => (

//     <View style={styles.card}>
//          <Image source={data.card.category} style={styles.cardImage} />
//          <View style={styles.cardInfo}>
//          <Text>{data.card.name}</Text>
//          <Text>{data.card.info}</Text>
//          <Text>{data.card.req}</Text>
//          <Text>{data.card.size}</Text>
//          </View>
//     </View>
// );



// class itemCard extends Component {
    
//     render(){
//         console.log(this.props.activity)
//         return(
//             <View style={styles.container}>
//                 <Swiper
//                     onSwiped={(cardIndex) => {console.log(cardIndex)}}
//                     cards={this.props.activity}
//                     renderCard={(data) => <Card card={data}/>}
//                     cardIndex={0}
//                     stackSize= {3}
//                 />
//             </View>
           
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor:'#fff',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     card:{
//         flex:1,
//         borderRadius:8,
//         shadowRadius: 25,
//         shadowColor:'#000',
//         shadowOpacity: 0.08,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         // padding:10,

        
//     },
//     cardImage:{
//         flex: 1,
//         resizeMode: 'contain',
        
//     },
//     cardInfo:{
//         flex: 1
//     }

// })

// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
//       activity: state.activities.activityForm
//     }
//   }
  

//   export default connect(mapStateToProps)(itemCard)
import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'


 class itemCard extends Component {


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
                    </View>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'#4FD0E9'}
            stackSize= {3}>
            <Button
                onPress={() => {console.log('oulala')}}
                title="Press me">
                You can press me
            </Button>
        </Swiper>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'green',
    alignItems: 'center'
    
  },
  cardImage:{
    flex: 0.4,
    resizeMode: 'contain',    
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  },
})

const mapStateToProps = (state) => {
  console.log(state);
  return {
    activity: state.activities.activityForm
  }
}

export default connect(mapStateToProps)(itemCard)