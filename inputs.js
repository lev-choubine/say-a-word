
import React, { Component, useState} from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
// import Tts from 'react-native-tts'
import * as Speech from 'expo-speech';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default function Inputs() {
    const [email, setEmail] = useState('')
    const [kanji, setKanji] = useState([])
    
    function handleEmail(text){
        setEmail(text)
     }
     
    function login (email){
          getKanji();
          ;
     }
  
   function getKanji() {
  
          fetch(`https://kanji-cors-bypass.herokuapp.com/api/${email}`)
      
            .then((response) => response.json())
      
            .then(async(json) => {
            await setKanji(json);
            console.log(json)
            await Speech.speak(json[0].senses[0].english_definitions[0])
            })
      
            .catch((error) => console.error(error))
      
    }

    function onSwipeLeft(gestureState){
      alert('You swiped left!');
    }
   
    function onSwipeRight(gestureState) {
      alert('You swiped left!');
    }


   

    


   
      return (
         <View style = {styles.container}>
            <Text
               onSwipe={(direction, state) => onSwipe(direction, state)}
               style = {styles.display}
               onSwipeLeft={() => onSwipeLeft()}
               onSwipeRight={() => onSwipeRight()}
            >{
               kanji.length!==0?
               kanji[0].senses[0].english_definitions[0]:
               ''
               }
            </Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "単語を入力してください"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {handleEmail}/>
            
            
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => login()
               }>
            
               <Text style = {styles.submitButtonText}> 翻訳 </Text>
            </TouchableOpacity>
            
         </View>
      );
   
}



const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      justifyContent: 'center',
      alignItems: 'center',
   },
   display: {
      height:30,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 900,
      fontSize: 25,
      maxWidth: 300
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