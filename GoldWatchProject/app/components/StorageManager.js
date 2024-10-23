import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to add an asset entry to AsyncStorage
export const addAssetEntry = async (assetType, amount) => {
  try {
    const date = new Date().toISOString(); // Current date
    const newEntry = { date, amount, assetType };

    // Get existing entries
    const existingEntries = await AsyncStorage.getItem('assetEntries');
    const entries = existingEntries ? JSON.parse(existingEntries) : [];

    // Add new entry
    entries.push(newEntry);
    await AsyncStorage.setItem('assetEntries', JSON.stringify(entries));

    // Update total amount
    await updateTotalAssets(assetType, amount);
  } catch (e) {
    console.error('Failed to add asset:', e);
  }
};

// Function to update total amount of a specific asset
const updateTotalAssets = async (assetType, amount) => {
  try {
    const totalAssets = await AsyncStorage.getItem('totalAssets');
    const totals = totalAssets ? JSON.parse(totalAssets) : { gold: 0, silver: 0, platinum: 0 };

    // Update total amount for the specified asset
    totals[assetType] += amount;

    // Save updated totals
    await AsyncStorage.setItem('totalAssets', JSON.stringify(totals));
  } catch (e) {
    console.error('Failed to update total assets:', e);
  }
};

// Function to load asset history
export const loadAssetHistory = async () => {
  try {
    const assetEntries = await AsyncStorage.getItem('assetEntries');
    return assetEntries ? JSON.parse(assetEntries) : [];
  } catch (e) {
    console.error('Failed to load asset history:', e);
    return [];
  }
};

// Function to load total assets
export const loadTotalAssets = async () => {
  try {
    const totalAssets = await AsyncStorage.getItem('totalAssets');
    return totalAssets ? JSON.parse(totalAssets) : { gold: 0, silver: 0, platinum: 0 };
  } catch (e) {
    console.error('Failed to load total assets:', e);
    return { gold: 0, silver: 0, platinum: 0 };
  }
};

// Function to clear all assets
export const clearAllAssets = async () => {
  try {
    await AsyncStorage.removeItem('assetEntries');  // Clear asset history
    await AsyncStorage.removeItem('totalAssets');   // Clear total assets
  } catch (e) {
    console.error('Failed to clear assets:', e);
  }
};

// Function to add an asset and reload the data
export const addAsset = async (assetType, amount, setAssetHistory, setTotalAssets) => {
  await addAssetEntry(assetType, amount);
  loadAssetsData(setAssetHistory, setTotalAssets);
};

// Function to load all assets data (history and totals)
export const loadAssetsData = async (setAssetHistory, setTotalAssets) => {
  const history = await loadAssetHistory();
  const totals = await loadTotalAssets();
  setAssetHistory(history);
  setTotalAssets(totals);
};

// Function to clear all assets and reload the data
export const clearAssets = async (setAssetHistory, setTotalAssets) => {
  await clearAllAssets();
  loadAssetsData(setAssetHistory, setTotalAssets);
};


export const formatAssetTotals = (totalAssets) => {
    return {
      gold: `Gold: ${totalAssets.gold}`,
      silver: `Silver: ${totalAssets.silver}`,  
      platinum: `Platinum: ${totalAssets.platinum}`,
    };
  };    
  
  // Function to format asset history for display
  export const formatAssetHistory = (assetHistory) => {
    return assetHistory.map((entry, index) => {
      return `${entry.date} - ${entry.assetType}: ${entry.amount}`;
    });
  };