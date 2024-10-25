import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { openDatabase } from 'react-native-sqlite-storage';

const App = () => {
  const [db, setDb] = useState(null);
  const [dbStatus, setDbStatus] = useState('Connecting...');
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    const dbName = 'myDatabase.db'; // Choose a database name
    let dbInstance = null;

    const openDB = async () => {
      try {
        dbInstance = await SQLite.openDatabase({ name: dbName, location: 'default' });
        setDb(dbInstance);
        setDbStatus('Database opened successfully');
      } catch (error) {
        setDbStatus('Error opening database');
        setErrorMessage(error.message);
        console.error("Error opening DB:", error);
      }
    };

    openDB();

    return () => {
      if (dbInstance) {
        dbInstance.close().then(() => {
            console.log('Database closed successfully');
        }).catch((error) => {
            console.error('Error closing database:', error);
        });
      }
    };
  }, []);


  return (
    <View>
      <Text>{dbStatus}</Text>
      {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
      {db && <Text>Database object: {JSON.stringify(db)}</Text>} 
    </View>
  );
};
export default App;


/*
import React, { useState, useEffect } from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { StyleSheet, Text, View} from 'react-native';
import SQLite from 'react-native-sqlite-storage';

export default function App() {
  const [dbInstance, setDb] = useState(null);  // Track database status

  useEffect(() => {
    dbInstance = SQLite.openDatabase(
      {
        name: 'testGoldWatchDB',
        location: 'default',
      },
      () => {
        console.log('Database opened successfully');
        setDb(dbInstance); // Set db only after successful opening
      },
      error => {
        console.error('Error opening DB:', error);
        // Handle the error appropriately, maybe display a message to the user.
      }
    );
  
        // Clean up the database connection when the component unmounts. This is crucial!
        return () => {
          if (dbInstance) {
            dbInstance.close();
          }
        };
      }, []);
    
      // Now, conditionally render based on db being ready:
      if (!dbInstance) {
        return <Text>Loading database...</Text>; // Or a better loading indicator
      }


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
*/
