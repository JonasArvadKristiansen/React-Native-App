import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,
} from 'react-native';



export default function App() {
  return (
    <View>
      Her det en test jeg prøver
    <Text style={styles.text}>
     
    </Text>
    </View>
          onPress={() => Alert.alert('You are gay')}
          backgroundColor=""
        />
    <Button
          title="Press me"

  );
}

const styles = StyleSheet.create({
    padding: 30,
    backgroundColor: "yellow",
    color: "red",
    marginTop: Constants.statusBarHeight,
    textAlign: "center",
  text: {
  },
  
});