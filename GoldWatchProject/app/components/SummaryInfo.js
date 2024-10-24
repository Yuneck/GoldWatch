import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { summary } from '../data/UserData'; // Updated import path

function SummaryInfo() {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0); // Keep track of the selected tab

    const tabs = summary.ownedMetals.map((metal) => ({
        title: metal,
        content: <Text>Content for {metal}</Text>,
    }));

    const handleTabChange = (index) => {
        setSelectedTabIndex(index); 
    };

    return (
        <View style={styles.overlay}>
            
            <View style={styles.tabContainer}>
                {tabs.map((tab, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.tab, selectedTabIndex === index && styles.selectedTab]}
                        onPress={() => handleTabChange(index)}
                    >
                        <Text style={styles.tabText}>{tab.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.content}>
                {tabs[selectedTabIndex].content} 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flexDirection: 'row', // Keep the overall layout as vertical
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 15,
        height: '30%', // Set height as needed
        width: '90%', // Set width as needed
        position: 'absolute',
        top: 70,
        left: '5%', // Center it horizontally
    },
    title: {
        color: '#FFD700',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10, // Space between title and tabs
    },
    tabContainer: {
        flexDirection: 'column', // Stack tabs vertically
        justifyContent: 'flex-start',
        marginRight: 10, // Spacing between tabs and content
    },
    tab: {
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 5,
        marginBottom: 5, // Space between tabs
    },
    selectedTab: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Highlight selected tab
    },
    tabText: {
        color: '#FFD700',
        fontSize: 16,
    },
    content: {
        flex: 1, // Allow content to take available space
        padding: 20,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
});

export default SummaryInfo;
