
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Header} from 'react-native';
import Inputs from './inputs.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text h1>Read to me!</Text>
      <Text>{"\n"}
      Enter a word {"\n"}
      then press the "READ" button to heat it back!
      </Text>
      <Image 
        source={require('./hacker.jpg')} 
        style={{
          height: 400,
          width:200,
          borderRadius: 30,
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
});
