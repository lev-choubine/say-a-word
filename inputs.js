
import React, { Component, useState, useRef} from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
// import Tts from 'react-native-tts'
import * as Speech from 'expo-speech';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Syns from './syns.js'


export default function Inputs() {
    const [email, setEmail] = useState('')
    const [kanji, setKanji] = useState([])
    const [gestureName, setGestureName]= useState('none')
    const [myText, setMyText]= useState('I\'m ready to get swiped!')
    const [backgroundColor, setBackgroundColor]= useState('orange')
    const [syns, setSyns]= useState([])



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
            setSyns([])
            await Speech.speak(json[0].senses[0].english_definitions[0])
            })
      
            .catch((error) => console.error(error))
      
    }


    function onSwipeUp(gestureState){
    setMyText('You swiped up!');
  }
 
  function onSwipeDown(gestureState){
   setMyText('You swiped down!');
 }
 
 function onSwipeRight(gestureState){
   setMyText('You swiped right!');
 }

 function onSwipeLeft(gestureState){
  setMyText('You swiped left!');
}
 
async function onSwipe (gestureName, gestureState){
   const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
   setGestureName(gestureName);
   switch (gestureName) {
     case SWIPE_UP:
      setBackgroundColor('red');
      let word=kanji[0].senses[0].english_definitions[0];
      let newWord
      function checkVerb(word){
          
        if(word.slice(0,3)==="to "){
            newWord = word.slice(3)
          }  else{
              newWord = word
          }
      }
      await checkVerb(word)
      console.log(newWord)
      fetch(`https://kanji-cors-bypass.herokuapp.com/syno/${newWord}`)
      
            .then((response) => response.json())
      
            .then(async(json) => {
            
            console.log(json[0].meta.syns)
            if(json[0].meta.syns){
               setSyns(json[0].meta.syns[0])
            }else{
               setSyns([])
            }
            })
      
            .catch((error) => console.error(error))
       break;
     case SWIPE_DOWN:
      setBackgroundColor('green');
       break;
     case SWIPE_LEFT:
      setBackgroundColor('blue');
       break;
     case SWIPE_RIGHT:
      setBackgroundColor('yellow');
       break;
   }
 }

 const config = {
   velocityThreshold: 0.1
   ,
   directionalOffsetThreshold: 110
 };
   

    


   
      return (
         <View style = {styles.container}>
            <GestureRecognizer
            onSwipe={(direction, state) => onSwipe(direction, state)}
            onSwipeUp={(state) => onSwipeUp(state)}
            onSwipeDown={(state) => onSwipeDown(state)}
            onSwipeLeft={(state) => onSwipeLeft(state)}
            onSwipeRight={(state) => onSwipeRight(state)}
            config={config}
            style={{
              
              backgroundColor: backgroundColor,
              maxHeight: `50`,
              paddingLeft:`20`,
              paddingRight:`20`,
              borderRadius: 30,
            }}
            >
            <Text
              
              

               style = {styles.display}
        
            >{
               kanji.length!==0?
               kanji[0].senses[0].english_definitions[0]:
               ''
               
               }
           
            </Text>
            </GestureRecognizer>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "?????????????????????????????????"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {handleEmail}/>
            
            
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => login()
               }>
            
               <Text style = {styles.submitButtonText}> ?????? </Text>
            </TouchableOpacity>
          
               <Syns syns={syns}/>
        
            
            
         </View>
      );
   
}



const styles = StyleSheet.create({
   container: {
      paddingTop: `23`,
      justifyContent: 'center',
      alignItems: 'center',
   },
   display: {
      height:50,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: `900`,
      fontSize: 25,
      maxWidth: 300,
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 5,
      borderRadius: 30,
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      justifyContent: 'center',
      borderWidth: 1,
      minWidth: 300,
      alignItems: 'center',
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 50,
      fontWeight: `900`,
      fontSize: 40,
      width:200,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
   },
   submitButtonText:{
      color: 'white'
   }
})