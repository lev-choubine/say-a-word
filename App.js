
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Header} from 'react-native';
import Inputs from './inputs.js'
import { Div } from 'react-native-div' ;
export default function App() {
  return (
    <View style={styles.container}>
      <Div style={{backgroundColor: '#8fbc8f',
                   width: `100%`,
                   justifyContent: 'center',
                   marginTop: 0}}>
      <Text style={styles.header} h1>ゲロゲロ</Text>
      </Div>
      <Image 
        source={require('./unnamed.png')} 
        style={{
          height: 100,
          width:90,
          // borderRadius: 100,
          marginTop: 20
        }}/>
      <StatusBar style="auto" />
      <Inputs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "flex-start",
    
  },
  header: {
    color: '#008000',
    fontSize: 50,
    
    
    alignItems: 'center',
    
    paddingTop: 100,
    paddingBottom: 15,
    paddingLeft: 'auto',
    paddingRight: 'auto',
    marginTop: 0,
    alignSelf: 'center',
  },
  text: {
    justifyContent: 'center',

  }
});
