import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const AssetsDisplay = ({ purchases, onClear }) => {
  const renderPurchase = ({ item }) => (
    <View style={styles.purchaseItem}>
      <Text>Date: {item.date}</Text>
      <Text>Seller: {item.sellerName}</Text>
      <Text>Assets:</Text>
      {item.assets.map((asset) => (
        <View key={asset.id} style={styles.assetItem}>
          <Text>Type: {asset.type}</Text>
          <Text>Quantity: {asset.quantity}</Text>
          <Text>Price: {asset.price}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Clear All Purchases and Assets" onPress={onClear} />
      <FlatList
        data={purchases}
        renderItem={renderPurchase}
        keyExtractor={(item) => item.id.toString()} // Assuming each purchase has a unique id
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  purchaseItem: {
    marginBottom: 15,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  assetItem: {
    marginTop: 5,
    padding: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default AssetsDisplay;
