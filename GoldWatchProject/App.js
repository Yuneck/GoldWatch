import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { StyleSheet, Text, TouchableHighlight, View, Image, SafeAreaView, 
  Button, Alert, Platform, StatusBar} from 'react-native';


export default function App() {

const [resourceHistory, setResourceHistory] = useState([]);
const [totalResources, setTotalResources] = useState({ gold: 0, silver: 0, platinum: 0 });

  // Function to add resource entry
const addResource = async (resourceType, amount) => {
  try {
    const date = new Date().toISOString(); // Current date
    const newEntry = { date, amount, resourceType };

    // Get existing entries
    const existingEntries = await AsyncStorage.getItem('resourceEntries');
    const entries = existingEntries ? JSON.parse(existingEntries) : [];

    // Add new entry
    entries.push(newEntry);
    await AsyncStorage.setItem('resourceEntries', JSON.stringify(entries));

    // Update total amount
    await updateTotalResources(resourceType, amount);

    // Refresh UI data
    loadResourceHistory();
    loadTotalResources();
  } catch (e) {
    console.error('Failed to add resource:', e);
  }
};


 // Function to update total amount of a specific resource
 const updateTotalResources = async (resourceType, amount) => {
  try {
    const totalResources = await AsyncStorage.getItem('totalResources');
    const totals = totalResources ? JSON.parse(totalResources) : { gold: 0, silver: 0, platinum: 0 };

    // Update total amount for the specified resource
    totals[resourceType] += amount;

    // Save updated totals
    await AsyncStorage.setItem('totalResources', JSON.stringify(totals));
  } catch (e) {
    console.error('Failed to update total resources:', e);
  }
};

 // Function to load resource history
 const loadResourceHistory = async () => {
  try {
    const resourceEntries = await AsyncStorage.getItem('resourceEntries');
    setResourceHistory(resourceEntries ? JSON.parse(resourceEntries) : []);
  } catch (e) {
    console.error('Failed to load resource history:', e);
  }
};


 // Function to load total resources
 const loadTotalResources = async () => {
  try {
    const totalResources = await AsyncStorage.getItem('totalResources');
    setTotalResources(totalResources ? JSON.parse(totalResources) : { gold: 0, silver: 0, platinum: 0 });
  } catch (e) {
    console.error('Failed to load total resources:', e);
    setTotalResources({ gold: 0, silver: 0, platinum: 0 });
  }
};


  // Function to clear all resource totals and history
  const clearAllResources = async () => {
    try {
      await AsyncStorage.removeItem('resourceEntries');  // Clear resource history
      await AsyncStorage.removeItem('totalResources');   // Clear total resources

      // Reset state
      setResourceHistory([]);
      setTotalResources({ gold: 0, silver: 0, platinum: 0 });
    } catch (e) {
      console.error('Failed to clear resources:', e);
    }
  };

  // Load data on component mount
  useEffect(() => {
    loadResourceHistory();
    loadTotalResources();
  }, []);


  return (
    <View style={{ padding: 20 }}>
      <Text>Gold: {totalResources.gold}</Text>
      <Text>Silver: {totalResources.silver}</Text>
      <Text>Platinum: {totalResources.platinum}</Text>

      <Button title="Add 5 Gold" onPress={() => addResource('gold', 5)} />
      <Button title="Add 3 Silver" onPress={() => addResource('silver', 3)} />
      <Button title="Add 2 Platinum" onPress={() => addResource('platinum', 2)} />

      <Text style={{ marginTop: 20 }}>Resource History:</Text>
      {resourceHistory.map((entry, index) => (
        <Text key={index}>
          {entry.date} - {entry.resourceType}: {entry.amount}
        </Text>
      ))}

      {/* Buttons to Show Current Resource Totals */}
      <Button title="Show Gold Total" onPress={() => alert(`Gold: ${totalResources.gold}`)} />
      <Button title="Show Silver Total" onPress={() => alert(`Silver: ${totalResources.silver}`)} />
      <Button title="Show Platinum Total" onPress={() => alert(`Platinum: ${totalResources.platinum}`)} />

      {/* Button to Clear All Resources */}
      <Button title="Clear All Resources" onPress={clearAllResources} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  //  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
