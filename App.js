import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  TextInput,
  Text,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';

const ApiKey ="4ca58c02db0e5bd08cba675c246b5762";

const Bynavn_land = "";

fetch('http://api.openweathermap.org/data/2.5/weather?q=viborg&appid=4ca58c02db0e5bd08cba675c246b5762')
export default function App() {
  return (
    <View style={styles.Continaer}>
      <Text style={styles.text}>
      Her det en test jeg prøver
      </Text>
    <TextInput
    style={styles.input}
    placeholder=' awdwad'
    />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: Constants.statusBarHeight,
    textAlign: "center",
  },
  input:{
    borderWidth: 1,
    width: 200,
    backgroundColor: "#E9EBEE",
    color: "blue",
  },
  Continaer:{
    alignItems: "center",
    //justifyContent: "center",
  },
});