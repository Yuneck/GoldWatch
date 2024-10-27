
import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { StyleSheet, Text, View} from 'react-native';





export default function App() {



  return (

    <WelcomeScreen></WelcomeScreen>
   

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  //  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
