import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import serverAPI from "../../models/ServerAPI";
import useSocket from "../../utils/socket";

const StudentView = ({ navigation }) => {
    const [waitTime, setWaitTime] = useState(0);

    const handleQueueUpdated = (data) => {
        console.log("Queue updated:", data);
        // Update the waitTime state with the new data
        setWaitTime(data.estimatedWaitTime);
    };

    // Use the useSocket custom hook to establish the WebSocket connection
    useSocket(handleQueueUpdated);

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

    return (
        <View style={styles.background}>
            <Text style={styles.header}>UNO Computer Science Tutor Center</Text>

            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("JoinTheQueue")}>
                    <Text style={styles.nextPage}>Join the Queue for Help</Text>
                </TouchableOpacity>
                <View>
                    <Text>Estimated wait time for queue: {waitTime} minutes.</Text>
                </View>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("ScheduleAppointment")}>
                    <Text style={styles.nextPage}>Schedule a Tutoring Appointment</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("AboutTutors")}>
                    <Text style={styles.nextPage}>About the Tutors</Text>
                </TouchableOpacity>
                <Text style={styles.footing}>Intro to Software Engineering Spring 2023</Text>
            </View>
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
        marginTop: 50,
        //position: 'absolute',
        bottom: 0,
        //backgroundColor: "#F5FCFF",
    },

    background: {
        backgroundColor: "#F5FCFF",
    },
});

export default StudentView;
