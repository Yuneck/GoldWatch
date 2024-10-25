import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

import MainScreenMenu from '../components/MainScreenMenu';
import SummaryInfo from '../components/SummaryInfo';
import MyAssetsScreen from './MyAssetsScreen';
import AnalyticsScreen from './AnalyticsScreen'; // Add this line
import MarketTrendsScreen from './MarketTrendsScreen'; // Add this line
import PreferencesScreen from './PreferencesScreen'; // Add this line

function WelcomeScreen(props) {
    const [selectedPage, setSelectedPage] = useState('Summary');

    const handlePageChange = (page) => {
        setSelectedPage(page);
      };

      const renderPage = () => {
        switch (selectedPage) {
          case 'MyAssets':
            return <MyAssetsScreen />;
          case 'Analytics':
            return <AnalyticsScreen />; // Add this case
          case 'MarketTrends':
            return <MarketTrendsScreen />; // Add this case
          case 'Preferences':
            return <PreferencesScreen />; // Add this case
          default:
            return (
              <>
                <Text title={selectedPage} />
                <SummaryInfo />
                <MainScreenMenu onPageChange={handlePageChange} />
              </>
            );
        }
      };

    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode="cover"
                style={styles.background}
                source={require('../assets/WelcomeScreen.png')}
            >
                {renderPage()}
                <SummaryInfo />
                <MainScreenMenu />  
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end", // Keeps content at the bottom
    },
    container: {
        flex: 1, // Full height and width
        margin: 0,
        padding: 0, // Ensure no margins or paddings are added
        backgroundColor: "black", // Fallback background
    },
});

export default WelcomeScreen;