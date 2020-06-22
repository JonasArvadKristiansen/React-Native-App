import React, { useState, Component } from 'react';
import { StyleSheet,Button,View,TextInput,Text, Alert,
  
} from 'react-native';
import Constants from 'expo-constants';


export default class App extends Component {

  getDataUsingGet(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=viborg&appid=4ca58c02db0e5bd08cba675c246b5762')
    .then((response) => response.json())
    .then((responseJson) => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
        
    })
    .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
    });
  }

  render() {
  return (
    <View style={styles.Continaer}>
      <Text style={styles.text}>
        Skriv den by du ville gerne se vejert for.
      </Text>

    <TextInput
    style={styles.input}
    placeholder=' Skriv et by navn'
    />

      <Text style={styles.Vejertekst}>
        Her er vejert for: 
      </Text>
      <Text>
        
      </Text>
      <Button title='Get Data Using GET' onPress={this.getDataUsingGet}/>
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
    
  },
});