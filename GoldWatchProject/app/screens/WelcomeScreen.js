import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <View style={styles.container}>
            <ImageBackground 
            resizeMode="contain"            
            style= {styles.background}
            source={require('../assets/WelcomeScreen.png')}
            >
            
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
    },
    container: {
        backgroundColor: "black",
        flex: 1,
    },

})
export default WelcomeScreen;