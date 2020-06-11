import React, { Component } from 'react';
import { StyleSheet, Button, TextInput, View, Picker, Text, Image} from 'react-native';
import { Formik, } from 'formik'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


class profileSettings extends Component {

    state = {
        profile:{
            Name: '',
            age: '',
            Nationaility: '',
            bio:'',
            avatar: null
        }
      }
      handlePickAvatar = async () => {};

    render() {
        
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                <Text style={styles.headertext}>Profile Settings</Text>
                <TouchableOpacity style={styles.avatarPlaceholder}>
                    <Image source={{uri: this.state.profile.avatar}} onPress={this.handlePickAvatar} />
                    <MaterialCommunityIcons
                        name='plus'
                        size={28}
                        size={40}
                    />    
                </TouchableOpacity>
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
                            placeholder='Name'
                            onChangeText={(name) => this.setState({ name })}
                            value={this.state.name}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='age'
                            onChangeText={(name) => this.setState({ name })}
                            value={this.state.name}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Nationaility'
                            onChangeText={(name) => this.setState({ name })}
                            value={this.state.name}
                        />
                        <TextInput
                            multiline
                            style={styles.input}
                            placeholder='Bio, languages you speak'
                            onChangeText={(info) => this.setState({ info })}
                            value={this.state.info}
                        />
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
    avatarPlaceholder:{
        width: 100,
        height:100,
        backgroundColor: '#E1E2E6',
        borderRadius: 50,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
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
  })

 

  export default profileSettings