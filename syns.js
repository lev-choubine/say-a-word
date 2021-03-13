import React, { Component, useState, useRef } from 'react'

import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, SafeAreaView, StatusBar} from 'react-native'


   
 
    const Syns = (props) => {
        const [syns, setSyns]=useState(props.syns)
        let synss=""
        if(props.syns){
            synss=props.syns.map((p,index)=>{
                
               return(
                <Text>{p}</Text>
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
