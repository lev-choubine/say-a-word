
import React, { Component, useState, useRef, useEffect} from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Div } from 'react-native'

const JapSyns = (props) => {
    const[japSyn, setJapSyn]=useState('')
    const[vebr, setVerb]=useState(props.word)

useEffect(()=>{
  
   

    fetch(`https://kanji-cors-bypass.herokuapp.com/api/${props.word}`)
      
    .then((response) => response.json())

    .then(async(json) => {
    await setJapSyn(json.[0].slug);
    console.log(json)
 
   
    })

    .catch((error) => console.error(error))
},[props])
return(
    <View style={{flexDirection:'row', flexWrap:'wrap', fontSize: 20, alignSelf: 'center',}}>
    <Text style={{fontSize: 20, alignSelf: 'flex-end'}}>
        {props.word}
    </Text>
    <Text>     </Text>
    <Text style={{fontSize: 20, alignSelf: 'flex-start'}}>
        {japSyn}
    </Text>
    </View>
)

}

export default JapSyns;