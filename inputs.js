
import React, { Component, useState} from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
// import Tts from 'react-native-tts'
import * as Speech from 'expo-speech';


export default function Inputs() {
    const [email, setEmail] = useState('')
    const [kanji, setKanji] = useState([])
    
    function handleEmail(text){
        setEmail(text)
     }
     
    function login (email){
      //   alert('your super word is: ' + email);
      //   Tts.speak('Hello, world!');
          getKanji();
          ;
     }
  
   function getKanji() {
  
          fetch(`https://kanji-cors-bypass.herokuapp.com/api/${email}`)
      
            .then((response) => response.json())
      
            .then((json) => {setKanji(json);
            console.log(kanji)
            Speech.speak(kanji[0].senses[0].english_definitions[0])
            })
      
            .catch((error) => console.error(error))
      
    }




   

    


   
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Your Word Here"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {handleEmail}/>
            
            
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => login()
               }>
            
               <Text style = {styles.submitButtonText}> Translate </Text>
            </TouchableOpacity>
            <Text>{
               kanji.length!==0?
               kanji[0].senses[0].english_definitions[0]:
               ''
               }</Text>
         </View>
      );
   
}



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