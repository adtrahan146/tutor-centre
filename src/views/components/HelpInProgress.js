import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

const HelpInProgress = ({ onDoneBeingHelped }) => {
    const handleZoomLinkClick = () => {
        Linking.openURL("https://uno.zoom.us/j/85759495736");
    };
    return (
        <View>
            <TouchableOpacity onPress={handleZoomLinkClick}>
                <Text style={styles.button}>Launch the Zoom</Text>
            </TouchableOpacity>
            <Text>Your Zoom link: https://uno.zoom.us/j/85759495736</Text>
            <TouchableOpacity style={styles.button} onPress={onDoneBeingHelped}>
                <Text style={styles.buttonText}>Done Being Helped</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#007AFF",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
});

export default HelpInProgress;
