import React, { Component, useState, useRef } from 'react'

import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, SafeAreaView, StatusBar} from 'react-native'


   
 
    const Syns = (props) => {
        const [syns, setSyns]=useState(props.syns)
      
    
    return(
       
    <Text>{props.syns?props.syns:''}</Text>
    )

}


export default Syns;
