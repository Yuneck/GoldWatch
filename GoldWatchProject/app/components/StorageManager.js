import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@purchases';

// Load purchases data from AsyncStorage
export const loadPurchasesData = async (setPurchases) => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    const purchases = jsonValue ? JSON.parse(jsonValue) : [];
    setPurchases(purchases);
  } catch (e) {
    console.error('Failed to load purchases data:', e);
  }
};

// Add a new purchase to AsyncStorage and update state
export const handleAddPurchase = async (newPurchase, setPurchases) => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    const purchases = jsonValue ? JSON.parse(jsonValue) : [];
    purchases.push({ ...newPurchase, id: Date.now() }); // Assign a unique ID
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(purchases));
    setPurchases(purchases); // Update state with the new purchases array
  } catch (e) {
    console.error('Failed to add purchase:', e);
  }
};

// Clear all purchases from AsyncStorage and update state
export const handleClearPurchases = async (setPurchases) => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setPurchases([]); // Reset state
  } catch (e) {
    console.error('Failed to clear purchases:', e);
  }
};
