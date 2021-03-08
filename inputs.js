
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
// import Tts from 'react-native-tts'
import * as Speech from 'expo-speech';
class Inputs extends Component {
   state = {
      email: ''
     
   }
   
   
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   
   login = (email) => {
    //   alert('your super word is: ' + email);
    //   Tts.speak('Hello, world!');
       
        Speech.speak(email);
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Your Word Here"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email)
               }>
               <Text style = {styles.submitButtonText}> Read! </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})