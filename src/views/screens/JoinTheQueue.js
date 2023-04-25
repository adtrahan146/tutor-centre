import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import serverAPI from "../../models/ServerAPI";
import { useSocket } from "../../context/socketContext";
import { joinQueue, leaveQueue } from "../../models/studentActions";

const JoinTheQueue = () => {
    const [waitTime, setWaitTime] = useState(0);
    const [queuePosition, setQueuePosition] = useState(0);

    const user = { user: "Alex T" };

    const socket = useSocket();

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

    useEffect(() => {
        if (socket) {
            socket.on("queue_updated", handleQueueUpdated);
            socket.on("tutor_alert_next_person", handleTutorAlertNextPerson);

            return () => {
                socket.off("queue_updated", handleQueueUpdated);
                socket.off("tutor_alert_next_person", handleTutorAlertNextPerson);
            };
        }
    }, [socket]);

    const handleQueueUpdated = (data) => {
        console.log("Queue updated:", data);
        setWaitTime(data.estimatedWaitTime);
    };

    const handleTutorAlertNextPerson = () => {
        setQueuePosition((queuePosition) => queuePosition - 1);
    };

    return (
        <View style={styles.background}>
            <Text style={styles.header}>UNO Computer Science Tutor Center</Text>

            <Text style={styles.joinQueue}>Join the Queue for Help</Text>
            {/*<Text>Tutor: Jared Wise</Text>*/}

            <TouchableOpacity style={styles.button} onPress={() => joinQueue(user, setQueuePosition)}>
                <Text style={styles.buttonText}>Click to Join</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => leaveQueue(user, setQueuePosition)}>
                <Text style={styles.buttonText}>Leave</Text>
            </TouchableOpacity>

            <View style={styles.row}>
                <View style={styles.queue}>
                    <Text>Estimated Wait Time for Queue:</Text>
                    <Text>{waitTime} minutes</Text>

                    <Text>You are in position: </Text>
                    <Text>{queuePosition === 0 || queuePosition === null ? "Not in line" : queuePosition}</Text>
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
