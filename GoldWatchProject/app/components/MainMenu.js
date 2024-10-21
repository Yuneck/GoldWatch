import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';



const MainMenu = () => {
    return (
        <View style={styles.mainMenuContainer}>
            <MyAssetsButon/>
            <Analytics/>
            <MarketTrends/>
            <Preferences/>
        </View>
    );
}

const MyAssetsButon = ({onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={styles.image}>
        <Image style={styles.image} source={require("../assets/icons/myAssets.png")} />    
    </TouchableOpacity>
);

const Analytics = ({onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={styles.image}>
        <Image style={styles.image} source={require("../assets/icons/analytics.png")} />    
    </TouchableOpacity>
);

const MarketTrends = ({onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={styles.image}>
        <Image style={styles.image} source={require("../assets/icons/marketTrends.png")} />    
    </TouchableOpacity>
);

const Preferences = ({onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={styles.image}>
        <Image style={styles.image} source={require("../assets/icons/preferences.png")} />    
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    mainMenuContainer: {  
        flexDirection: "row",
        position: "absolute",
        bottom: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 80,
        height: 80,
    },
})

export default MainMenu;