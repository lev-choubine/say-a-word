import React, { Component, useState, useRef, useEffect } from 'react'

import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, SafeAreaView, StatusBar, Div} from 'react-native'
import JapSyns from "./japSyn.js"

   
 
    const Syns = (props) => {
        const [syns, setSyns]=useState(props.syns)
        const [japSyns, setJapSyns]=useState('')
        let synss=""
        if(props.syns){
            synss=props.syns.map((p,index)=>{
                
               return(

                
                  
                    <JapSyns　word={p}/>
            
               )
                    
                
        })}else{
            synss=""
        }
   

    return(
        <View>
       {synss}
       </View>
    )

}


export default Syns;
