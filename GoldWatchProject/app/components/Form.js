import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const Form = ({ onAddPurchase }) => {
  const [date, setDate] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [assets, setAssets] = useState([]);
  const [assetType, setAssetType] = useState('');
  const [assetQuantity, setAssetQuantity] = useState('');
  const [assetPrice, setAssetPrice] = useState('');

  // Function to add a new asset to the asset list
  const handleAddAsset = () => {
    if (assetType && assetQuantity && assetPrice) {
      const newAsset = {
        id: Math.random().toString(), // Unique id for each asset
        type: assetType,
        quantity: parseInt(assetQuantity),
        price: parseFloat(assetPrice),
      };
      setAssets([...assets, newAsset]);
      // Clear asset fields after adding
      setAssetType('');
      setAssetQuantity('');
      setAssetPrice('');
    } else {
      alert('Please fill all asset fields');
    }
  };

  // Function to add the purchase with assets
  const handleAddPurchase = () => {
    if (date && sellerName && assets.length > 0) {
      const newPurchase = {
        date,
        sellerName,
        assets,
      };
      onAddPurchase(newPurchase);
      // Reset form fields
      setDate('');
      setSellerName('');
      setAssets([]);
    } else {
      alert('Please fill all purchase fields and add at least one asset');
    }
  };

  // Function to render added assets in a list
  const renderAsset = ({ item }) => (
    <View style={styles.assetItem}>
      <Text>Type: {item.type}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>Price: {item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Purchase Fields */}
      <Text style={styles.label}>Enter Purchase Date (YYYY-MM-DD):</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="YYYY-MM-DD"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Seller Name:</Text>
      <TextInput
        style={styles.input}
        value={sellerName}
        onChangeText={setSellerName}
        placeholder="Seller Name"
      />

      {/* Asset Fields */}
      <Text style={styles.label}>Add Asset:</Text>
      <Text style={styles.label}>Asset Type (Gold/Silver/Platinum):</Text>
      <TextInput
        style={styles.input}
        value={assetType}
        onChangeText={setAssetType}
        placeholder="Asset Type"
      />

      <Text style={styles.label}>Quantity:</Text>
      <TextInput
        style={styles.input}
        value={assetQuantity}
        onChangeText={setAssetQuantity}
        placeholder="Quantity"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        value={assetPrice}
        onChangeText={setAssetPrice}
        placeholder="Price"
        keyboardType="numeric"
      />

      <Button title="Add Asset" onPress={handleAddAsset} />

      {/* Display added assets */}
      <Text style={styles.label}>Added Assets:</Text>
      <FlatList
        data={assets}
        renderItem={renderAsset}
        keyExtractor={(item) => item.id}  // Ensure each asset has a unique key
        style={styles.assetList}
      />

      <Button title="Save Purchase with Assets" onPress={handleAddPurchase} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  assetItem: {
    marginBottom: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  assetList: {
    marginBottom: 20,
  },
});

export default Form;