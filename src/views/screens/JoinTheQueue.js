import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import HelpInProgress from "../components/HelpInProgress";
import serverAPI from "../../models/ServerAPI";
import { useSocket } from "../../context/socketContext";
import { joinQueue, leaveQueue } from "../../models/studentActions";

const JoinTheQueue = ({ navigation }) => {
    const [waitTime, setWaitTime] = useState(0);
    const [queuePosition, setQueuePosition] = useState(null);
    const [hasJoined, setHasJoined] = useState(false);
    const [isBeingHelped, setIsBeingHelped] = useState(false);
    const [studentClass, setStudentClass] = useState("");
    const [problemSummary, setProblemSummary] = useState("");
    const [queueSize, setQueueSize] = useState(0);

    const user = { studentId: "Alex T" };

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
        init();
    }, []);

    useEffect(() => {
        if (queuePosition > queueSize) {
            console.log(`here!!!!!`);
            setQueuePosition((queuePosition) => Math.max(queuePosition - 1, 0));
        } else if (queuePosition === 0 && hasJoined) {
            setIsBeingHelped(true);
        } else if (queuePosition === null) {
            setIsBeingHelped(false);
        }
        console.log(`useEffect Init Function`);
    }, [queueSize, queuePosition]);

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
        setQueueSize(data.size);
    };

    const handleDoneBeingHelped = () => {
        // Reset the states
        setIsBeingHelped(false);
        setHasJoined(false);
        setQueuePosition(null);
        navigation.navigate("Student");
    };

    const handleTutorAlertNextPerson = () => {
        setQueuePosition((queuePosition) => Math.max(queuePosition - 1, 0));
    };

    return (
        <View style={styles.background}>
            <Text style={styles.header}>UNO Computer Science Tutor Center</Text>

            <Text style={styles.joinQueue}>Join the Queue for Help</Text>
            {/*<Text>Tutor: Jared Wise</Text>*/}

            {isBeingHelped ? (
                <HelpInProgress onDoneBeingHelped={handleDoneBeingHelped} />
            ) : hasJoined ? (
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => leaveQueue(user.studentId, setQueuePosition, setHasJoined)}>
                        <Text style={styles.buttonText}>Leave</Text>
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <View style={styles.queue}>
                            <Text>Estimated Total Wait Time for Queue:</Text>
                            <Text>{waitTime} minutes</Text>
                            <Text>
                                {queuePosition === null ? "Not in line" : "Your Position: " + queuePosition}, Total in line: {queueSize}
                            </Text>
                        </View>
                    </View>
                </View>
            ) : (
                <View>
                    <View style={styles.inputContainer}>
                        <Text>Class:</Text>
                        <TextInput style={styles.input} onChangeText={setStudentClass} value={studentClass} placeholder="Enter your class" />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text>One sentence summary of the problem:</Text>
                        <TextInput style={styles.input} onChangeText={setProblemSummary} value={problemSummary} placeholder="Enter a summary of your problem" />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => joinQueue(user.studentId, setQueuePosition, setHasJoined, studentClass, problemSummary)}>
                        <Text style={styles.buttonText}>Click to Join</Text>
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <View style={styles.queue}>
                            <Text>Estimated Total Wait Time for Queue:</Text>
                            <Text>{waitTime} minutes</Text>
                            <Text>
                                {queuePosition === null ? "Not in line" : "Your Position: " + queuePosition}, Total in line: {queueSize}
                            </Text>
                        </View>
                    </View>
                </View>
            )}

            <Text style={styles.footing}>Intro to Software Engineering Spring 2023</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        paddingHorizontal: 10,
        width: "100%",
    },

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
