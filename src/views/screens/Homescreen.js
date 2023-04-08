import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import serverAPI from "../../models/ServerAPI";

const Homescreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Hello World</Text>
            <View style={styles.spacing} />
            <TouchableOpacity style={styles.button} onPress={() => serverAPI.handleButtonPressTest()}>
                <Text style={styles.buttonText}>GET /test/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Student")}>
                <Text style={styles.buttonText}>Go to StudentView Temp </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Tutor")}>
                <Text style={styles.buttonText}>Go to TutorView Temp Btn</Text>
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
        height: 50,
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

export default Homescreen;