import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
//import { useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { StyleSheet, Text, TouchableHighlight, View, Image, SafeAreaView, 
  Button, Alert, Platform} from 'react-native';
  import { 
    addAsset, 
    loadAssetsData, 
    clearAssets, 
    formatAssetTotals, 
    formatAssetHistory 
  } from './app/components/StorageManager';

export default function App() {

  const [assetHistory, setAssetHistory] = useState([]);
  const [totalAssets, setTotalAssets] = useState({ gold: 0, silver: 0, platinum: 0 });

  // Use helper functions to format data for display
  const formattedTotals = formatAssetTotals(totalAssets);
  const formattedHistory = formatAssetHistory(assetHistory);

  return (
    <View style={{ padding: 20 }}>
      <Text>{formattedTotals.gold}</Text>
      <Text>{formattedTotals.silver}</Text>
      <Text>{formattedTotals.platinum}</Text>

      <Button title="Add 5 Gold" onPress={() => addAsset('gold', 5, setAssetHistory, setTotalAssets)} />
      <Button title="Add 3 Silver" onPress={() => addAsset('silver', 3, setAssetHistory, setTotalAssets)} />
      <Button title="Add 2 Platinum" onPress={() => addAsset('platinum', 2, setAssetHistory, setTotalAssets)} />

      <Text style={{ marginTop: 20 }}>Asset History:</Text>
      {formattedHistory.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}

      <Button title="Show Gold Total" onPress={() => alert(formattedTotals.gold)} />
      <Button title="Show Silver Total" onPress={() => alert(formattedTotals.silver)} />
      <Button title="Show Platinum Total" onPress={() => alert(formattedTotals.platinum)} />

      <Button title="Clear All Assets" onPress={() => clearAssets(setAssetHistory, setTotalAssets)} />
    </View>
  );
};