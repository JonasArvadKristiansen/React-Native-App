import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';



export default function App() {
  return (
    <View>
    <Text style={styles.text}>
      Her det en test jeg prøver
     
    </Text>

    <Button
          title="Press me"
          onPress={() => Alert.alert('You are gay')}
          backgroundColor=""
        />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: Constants.statusBarHeight,
    textAlign: "center",
    color: "red",
    backgroundColor: "yellow",
    padding: 30,
  },
  
});