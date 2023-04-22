import React, {useState} from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Linking } from "react-native";

const TutorView = ({navigation}) => {
    const [zoomLink, setZoomLink] = useState('https://uno.zoom.us/j/85759495736');

    const handleZoomLinkClick = () => {
        Linking.openURL(zoomLink);
    };
    return (
        <View style={styles.view}>
            <Text style={styles.toptext}>UNO CSCI JAVA HELP DESK</Text>
            <Text style={styles.toptext2}>WELCOME TUTORS!</Text>
            <TouchableOpacity onPress={function () {alert("I love tutors!");}}>
                <Text style={styles.button} >View Live Student Queue</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("TutorCalendar")}}>
                <Text style={styles.button} >View Calendy Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleZoomLinkClick}>
                <Text style={styles.button} >Launch the                 Zoom</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    view: {
        //automatically set to flex=column align=stretch
        borderColor: "black",
        borderWidth: 3,
        justifyContent: "center", //space-between space-around //flex-start flex-end center stretch
        flexDirection: "column",
        alignItems: "center",
        height:500 //column
    },
    toptext: {
        fontSize: 25,
        color: "black",
        justifyContent: "center", //space-between space-around
        alignItems: "center", //flex-start flex-end center stretch
        flexDirection: "column",
        fontWeight: "bold",
    },
    toptext2: {
        fontSize: 22,
        color: "rgba(82,94,107,255)",
        justifyContent: "center", //space-between space-around
        alignItems: "center", //flex-start flex-end center stretch
        flexDirection: "column",
        fontWeight: "bold",
        marginBottom: 20
    },
    button: {
        marginHorizontal: 5,
        backgroundColor: 'rgba(0,82,145,255)',
        color: 'rgba(227, 228, 228, 1)',
        fontSize: 20,
        fontWeight: '500',
        paddingVertical: 5,
        marginVertical: 5,
        paddingHorizontal: 10,
        width: 200,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        marginRight: 130
    },
}); //npx expo-cli init food --npm or npx react-native-cli init food --npm

export default TutorView;
