import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { StyleSheet, Text, TouchableHighlight, View, Image, SafeAreaView, 
  Button, Alert, Platform, StatusBar} from 'react-native';


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
