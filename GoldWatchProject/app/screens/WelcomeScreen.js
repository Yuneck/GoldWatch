import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <View style={styles.container}>
            <ImageBackground 
            //resizeMode="contain"            
            style= {styles.background}
            source={require('../assets/goldbar.png')}
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
    /*
    <View style={styles.myAssets}></View>
                <View style={styles.registerAssets}></View>
    myAssets: {
        width: "20%",
        height: 70,
        backgroundColor: "gold",
    }, 
    registerAssets: {
        width: "20%",
        height: 70,
        backgroundColor: "gold",
    }
*/
})
export default WelcomeScreen;