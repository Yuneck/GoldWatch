import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import MainScreenMenu from '../components/MainScreenMenu';
import SummaryInfo from '../components/SummaryInfo';

import SQLite from 'react-native-sqlite-storage';

function WelcomeScreen(props) {


    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode="cover" // Changed to cover to fill the screen fully
                style={styles.background}
                source={require('../assets/WelcomeScreen.png')}
            >
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