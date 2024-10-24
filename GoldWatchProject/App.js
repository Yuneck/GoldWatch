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
  import AssetsDisplay from './app/components/AssetsDisplay';
  import { loadPurchasesData, handleAddPurchase, handleClearPurchases } from './app/components/StorageManager';
import Form from './app/components/Form';

  export default function App() {
    const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    loadPurchasesData(setPurchases); // Load purchases when the app starts
  }, []);


  
  return (
    <View style={{ flex: 1 }}>
      <Form onAddPurchase={(newPurchase) => handleAddPurchase(newPurchase, setPurchases)} />
      <AssetsDisplay purchases={purchases} onClear={() => handleClearPurchases(setPurchases)} />
    </View>
  );
}