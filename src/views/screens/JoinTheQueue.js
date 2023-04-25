import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
//import { FaCalendarAlt } from "react-icons/fa";
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

    const joinQueue = async (user) => {
        let res = await serverAPI.studentJoinQueue(user);
        console.log(res.data.position);
        if (res.data.position) {
            setQueuePosition(res.data.position);
        }
    };

    const leaveQueue = async (user) => {
        let res = await serverAPI.studentLeaveQueue(user);
        console.log(res.data);
        setQueuePosition(null);
    };

    const handleQueueUpdated = (data) => {
        console.log("Queue updated:", data);
        setWaitTime(data.estimatedWaitTime);
    };

    const handleTutorAlertNextPerson = () => {
        setQueuePosition(queuePosition - 1);
    };

    useSocket(handleQueueUpdated, handleTutorAlertNextPerson);

    return (
        <View style={styles.background}>

            <Text style={styles.header}>UNO Computer Science Tutor Center</Text>

            <Text style={styles.joinQueue}>Join the Queue for Help</Text>
            {/*<Text>Tutor: Jared Wise</Text>*/}

            <View style={styles.spacing} />

            <View style={styles.row}>
                <TouchableOpacity onPress={() => joinQueue(user)}>
                    <Text style={styles.buttonJoin}>Join Queue</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => leaveQueue(user)}>
                    <Text style={styles.buttonLeave}>Leave Queue</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.spacing2} />

            <View style={styles.row}>
                <View style={styles.queue}>
                    <Text>Estimated Wait Time for Queue:</Text>
                    <Text>{waitTime} minutes</Text>

                    <Text>You are in position: </Text>
                    <Text>{queuePosition === 0 || queuePosition === null ? "Not in line" : queuePosition}</Text>
                </View>
            </View>

            {/*<View style={styles.footing}>
                <TouchableOpacity onPress={() => navigation.navigate("ScheduleAppointment")}>
                    <FaCalendarAlt />
                </TouchableOpacity> 
            </View>*/}
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
    buttonJoin: {
        backgroundColor: "#4CBB17",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginRight: 20,
        fontSize: 20,
        fontWeight: "500",
        color: "white",
    },
    buttonLeave: {
        backgroundColor: "#D22B2B",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginRight: 20,
        fontSize: 20,
        fontWeight: "500",
        color: "white",
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
        alignSelf: "flex-start",

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
        //backgroundColor: "#F5FCFF",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        //height: 500, //column
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        
    },
    spacing: {
        height: 50,
    },
    spacing2: {
        height: 10,
    },
});

export default JoinTheQueue;
