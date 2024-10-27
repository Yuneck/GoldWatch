
import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { StyleSheet, Text, View} from 'react-native';
import SQLite from 'react-native-sqlite-storage';




export default function App() {

  const db = SQLite.openDatabase(
    {
      name: 'MainDB',
      location: 'default',
    },
    () => {},
    error => { console.log(error) }
  );

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
