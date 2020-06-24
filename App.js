import React, { useState, Component } from 'react';
import { StyleSheet, Button, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';
import Weather from './Weather';


class App extends Component {

  state={temp:'',by:'',testing:''}

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

getDataUsingGet = () => {
  var okay = "Viborg";
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${okay}&appid=4ca58c02db0e5bd08cba675c246b5762&units=metric`)
  .then((response) => response.json())

  .then((responseJson) => {
    alert(JSON.stringify(responseJson));


    this.setState({temp: responseJson.main.temp}); 
    this.setState({by: responseJson.name});

   // console.log(responseJson)
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
      
    <View>
      <TextInput id='hello'
        style={styles.input}
        placeholder=' Skriv et by navn'
        onChange={() => this.setState.hello} />
        
        <Text style={styles.Vejertekst}>
            Her er vejert for: {this.state.by}
        </Text>
    </View>
      <View>
      <Text style={styles.tempText}> {this.state.temp} ˚ </Text>
      </View>
      <Button title='Test' onPress={this.getDataUsingGet} />
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
    marginTop: Constants.statusBarHeight + 200,
    fontSize: 18,
  },

  Vejertekst:{
    fontSize: 18,
  },

  input:{
    borderWidth: 1,
    width: 200,
    backgroundColor: "#E9EBEE",
    marginTop: 5,
  },
  Continaer:{
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    marginTop: Constants.statusBarHeight,
    textAlign: "center",
  },
  weatherContainer: {
		flex: 2,
		backgroundColor: 'orange'
	},
	tempText: {
		fontSize: 48,
    color: '#fff',
    alignItems: 'center'
  },
	});

export default App;