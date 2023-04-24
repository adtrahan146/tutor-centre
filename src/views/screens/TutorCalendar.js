import React from "react";
import {Text, StyleSheet, View, WebView} from "react-native";

const TutorCalendar=()=>{
    return(
        <View style={styles.mainView}>
            <Text>Calendars</Text>
        </View>    
        );
};
const styles= StyleSheet.create({
    mainView: {
        //automatically set to flex=column align=stretch
        borderColor: "black",
        borderWidth: 3,
        justifyContent: "center", //space-between space-around //flex-start flex-end center stretch
        flexDirection: "column",
        alignItems: "center",
        height:500 //column
    },

    calendarText: {
        fontSize: 25,
        color: "black",
        justifyContent: "center", //space-between space-around
        alignItems: "center", //flex-start flex-end center stretch
        flexDirection: "column",
        fontWeight: "bold",
    },
});
export default TutorCalendar;