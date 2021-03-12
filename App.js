
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Header} from 'react-native';
import Inputs from './inputs.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header} h1>ゲロゲロ</Text>
      
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
    justifyContent: 'center',
  },
  header: {
    color: '#008000',
    fontSize: 50,
  },
  text: {
    justifyContent: 'center',

  }
});
