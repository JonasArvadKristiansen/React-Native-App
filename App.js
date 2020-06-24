import React, { useState, Component } from 'react';
import { StyleSheet, Button, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';
import Weather from './Weather';


export default class App extends Component {

  state = {
    
  };

findCoodinates = () => {
  navigator.geolocation.getCurrentPosition(
    position => {
      const location = position;
      this.setState({'location': location.coords.latitude + ' , ' + location.coords.longitude});
},
    error => Alert.alert(error.message),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
};

    getDataUsingGet(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=4ca58c02db0e5bd08cba675c246b5762')
    .then((response) => response.json())
    .then((responseJson) => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
    })
  }


  render() {
  return (
    <View style={styles.Continaer}>  
  <View>
    <TouchableOpacity onPress={this.findCoodinates}>
      <Text> find my Coordinates</Text>
      <Text>Location: {this.state.location} </Text>
    </TouchableOpacity>
  </View>
  <View>
<Weather/>
	</View>
     </View>   
    );
  }
}
const styles = StyleSheet.create({
  text: {
    marginTop: Constants.statusBarHeight + 10,
    fontSize: 20,
  },

  Vejertekst:{
    fontSize: 20,
  },

  input:{
    borderWidth: 1,
    width: 200,
    backgroundColor: "#E9EBEE",
    marginTop: 16,
  },
  Continaer:{
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    backgroundColor: "orange",
    color: "red",
    marginTop: Constants.statusBarHeight,
    textAlign: "center",
  }
  });