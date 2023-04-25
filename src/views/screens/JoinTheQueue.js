import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import serverAPI from "../../models/ServerAPI";
import useSocket from "../../utils/socket";

const JoinTheQueue = () => {
    const [waitTime, setWaitTime] = useState(0);
    const [queuePosition, setQueuePosition] = useState(0);

    const user = { user: "Alex T" };

    useEffect(() => {
        const init = async () => {
            try {
                let waitTimeRes = await serverAPI.getQueueWaittime();
                console.log(waitTimeRes);
                setWaitTime(waitTimeRes);
            } catch (error) {
                console.log(error);
            }
        };
        console.log(`useEffect Init Function`);
        init();
    }, []);

    const handleQueueUpdated = (data) => {
        console.log("Queue updated:", data);
        setWaitTime(data.estimatedWaitTime);
    };

    const joinQueue = async (user) => {
        let res = await serverAPI.studentJoinQueue(user);
        console.log(res.data.position);
        if (res.data.position) {
            setQueuePosition(res.data.position);
        }
    };
    // Use the useSocket custom hook to establish the WebSocket connection
    useSocket(handleQueueUpdated);

    return (
        <View style={styles.background}>
            <Text style={styles.header}>UNO Computer Science Tutor Center</Text>

            <Text style={styles.joinQueue}>Join the Queue for Help</Text>
            {/*<Text>Tutor: Jared Wise</Text>*/}

            <TouchableOpacity style={styles.button} onPress={() => joinQueue(user)}>
                <Text style={styles.buttonText}>Click to Join</Text>
            </TouchableOpacity>

            <View style={styles.row}>
                <View style={styles.queue}>
                    <Text>Estimated Wait Time for Queue:</Text>
                    <Text>{waitTime} minutes</Text>

                    <Text>You are in position: </Text>
                    <Text>{queuePosition === 0 ? "Not in line" : queuePosition}</Text>
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
    button: {
        backgroundColor: "#007AFF",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
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
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
});

export default JoinTheQueue;
