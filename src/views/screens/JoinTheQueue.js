import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, } from "react-native";

const JoinTheQueue = () => {
    return (
        <View style={styles.background}>
            <Text style={styles.header}>UNO Computer Science Tutor Center</Text>

            <Text style={styles.joinQueue}>Join the Queue for Help</Text>
            {/*<Text>Tutor: Jared Wise</Text>*/}

            <View style={styles.row}>
                <View style={styles.queue}>
                    <Text>Estimated Wait Time:</Text>
                    <Text>You are (number) in the Queue</Text>
                </View>

                <View style={styles.queue}>
                    <Text>insert Queue</Text>
                </View>
            </View>

            <Text style={styles.footing}>Intro to Software Engineering Spring 2023</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 52,
        fontWeight: "bold",
        //backgroundColor: "#F5FCFF",
        textAlign: "center",
        color: "#293C7D",
    },
    queue: {
        //backgroundColor: "green",
        padding: 5,
        color: "white",
        width: 500,
        height: 500,
        borderWidth: 5,
        borderColor: "black",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: "#F5FCFF",
    },

    buttonContainer: {
        backgroundColor: "#005CA6",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    aboutImg: {
        width: 30,
        height: 30,
    },
    aboutContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 120,
    },
    aboutText: {
        fontSize: 20,
    },

    nextPage: {
        color: "#FFFFFF",
        fontSize: 16,
    },

    footing: {
        textAlign: "center",
        bottom: 0,
        
        //backgroundColor: "#F5FCFF",
    },
    joinQueue: {
        fontSize: 32,
        fontWeight: "bold",
        //backgroundColor: "#F5FCFF",
        textAlign: "center",
        color: "#293C7D",
    },

    background: {
        backgroundColor: "#F5FCFF",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
});

export default JoinTheQueue;
