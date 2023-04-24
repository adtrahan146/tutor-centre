import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import serverAPI from "../../models/ServerAPI";

const Homescreen = ({ navigation }) => {
    

    return (
        <View style={styles.container}>
            {/*<Text style={styles.header}>Hello World</Text>*/}
            <Text style={styles.header}>UNO Computer Science Tutor Center</Text>
            <Image style={styles.logo} source={require('../../../assets/logo.png')} />

            <View style={styles.spacing} />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Student Sign In</Text>
                {/* this button will take students to the login screen, once logged in they will be taken to what is currently
                "studentView Temp"*/}
            </TouchableOpacity>

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
        backgroundColor: "white",
    },
    header: {
        fontSize: 52,
        fontWeight: "bold",
        textAlign: "center",
        color: "#293C7D",
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
    logo: {
        width: 300,
        height: 300,

    },
});

export default Homescreen;
