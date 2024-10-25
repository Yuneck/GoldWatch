// MyAssetsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyAssetsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Assets</Text>
      {/* Add the content for the My Assets page */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
  },
});

export default MyAssetsScreen;
