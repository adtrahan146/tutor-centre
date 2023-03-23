import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
    const handleButtonPress = () => {
        console.log("GET /test/ button pressed");
        // Add your logic for the button press here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Hello World</Text>
            <View style={styles.spacing} />
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>GET /test/</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    header: {
        fontSize: 32,
        fontWeight: "bold",
    },
    spacing: {
        height: 10,
    },
    button: {
        backgroundColor: "#007AFF",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
});

export default App;
