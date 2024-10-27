
import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { StyleSheet, Text, View} from 'react-native';

const db = SQLite.openDatabase(
  {
    name: 'testDB',
    location: 'default',
  },
  () => {
    console.log('Database opened successfully');
  },
  error => {console.log(error)}
);

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
