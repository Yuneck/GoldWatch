import React from 'react';
import { Button, View } from 'react-native';

const MainMenu = () => {
    return (
        <View style={styles.mainMenuContainer}>
            <Button title="My assets"/>
            <Button title="Analytics"/>
        </View>
    );
}

export default MainMenu;