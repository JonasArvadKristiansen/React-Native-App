import React, { useState, Component } from 'react';
import { StyleSheet,Button,View,TextInput,Text, Alert,
  
} 
from 'react-native';
import Constants from 'expo-constants';

class App extends Component {
  state={temp:'',by:'',testing:''}


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

    <TextInput id='hello'
    style={styles.input}
    placeholder=' Skriv et by navn'
   onChange={() => this.setState.hello}
   
    />
    
      <Text style={styles.Vejertekst}>
        Her er vejert for: {this.state.by}
      </Text>

    <View>
     <Text> 
      der her er en test  "{this.state.temp}"
      </Text>
    </View>

      <Button title='Test' onPress={this.getDataUsingGet} />
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

export default App;