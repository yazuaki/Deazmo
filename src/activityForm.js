import React, { Component } from 'react';
import { StyleSheet, Button, TextInput, View, Picker, Text, Image} from 'react-native';
import { Formik, } from 'formik'
import { connect } from 'react-redux'
import { addActivity } from './actions/activity'
import activityReducer from './reducers/activityReducer';


const images = {
    pictures: {
        'sports': require('./components/images/tausta.jpeg'),
        'leisure': require('./components/images/tausta.jpeg'),
        'outdoors': require('./components/images/tausta.jpeg'),
        'pets': require('./components/images/tausta.jpeg'),
    }
    
}
// const imagelist = images.map((pictures))

class activityForm extends Component {

    state = {
        name:'', info:'', req:'', size:'', category: ''
      }
      

    render() {
        
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                <Text style={styles.headertext}>Create an activity</Text>
                </View>
            <Formik
                initialValues={{name: '', info: '', req: "", size:"", category: ""}}
                onSubmit={() => {
                            this.props.add(this.state.name,this.state.info,this.state.req, this.state.size, this.state.category)                           
                            this.setState({ name: null, info: null, req:null,  size: null, category: null })
                          }}                
            >
                
                {(props) => (
                    <View style={styles.inputcontainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='Activity Name'
                            onChangeText={(name) => this.setState({ name })}
                            value={this.state.name}
                        />

                        <TextInput
                            multiline
                            style={styles.input}
                            placeholder='info of activity'
                            onChangeText={(info) => this.setState({ info })}
                            value={this.state.info}
                        />
                        <TextInput
                            multiline
                            style={styles.input}
                            placeholder='Requirements such as golf clubs'
                            onChangeText={(req) => this.setState({ req })}
                            value={this.state.req}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder='Group size (2-10)'
                            onChangeText={(size) => this.setState({ size })}
                            value={this.state.size}
                            keyboardType='numeric'
                        />
                        <View style={styles.category}>
                            <Text style={styles.categorytext}>CHOOSE A CATEGORY</Text>
                        <Picker style={styles.picker}
                            selectedValue={this.state.category}
                            // Image source={imagelist.pictures}
                            onValueChange={(itemValue, itemIndex)=> this.setState({category:itemValue})}
                            >
                            <Picker.Item label="Sports" value="Sports" />
                            <Picker.Item label="Leisure" value="Leisure" />
                            <Picker.Item label="Outdoors" value="Outdoors" />
                            <Picker.Item label="Pets" value="Pets" />
                        </Picker>
                        </View>
                        <Button title='Submit' color='maroon'
                         onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>            
        </View>
        )
    }  
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
    },
    header:{
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    headertext:{
        fontSize:20,
        fontFamily: 'serif',
    },
    inputcontainer:{
        flex:1,
        marginTop:10,

    },
    input:{
        marginTop: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      fontSize: 18,
      borderRadius: 6,
    },
    category:{
        justifyContent:'center',
     
    },
    categorytext:{
        fontSize:18,
        paddingLeft:10,
        fontFamily: 'serif',
        marginTop: 10,
        borderBottomWidth:1,
        borderColor: 'black',
    
    },
    picker:{
        
    }

  })

    const mapStatetoProps = (state ) => {
        console.log(state);
    return{
        activity: state.activities.activityForm
    }
}
    const mapDispatchtoProps = (dispatch) => {
    return{
        add: (name,info,req,size, category ) => dispatch(addActivity(name,info, req, size, category))
    }
}

  export default connect (mapStatetoProps, mapDispatchtoProps)(activityForm);