import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const TutorView = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.toptext}>Tutors</Text>
            <Button
                style={styles.buttontext}
                onPress={function () {
                    alert("I love tutors!");
                }}
                title={"Get Tutored"}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    view: {
        //automatically set to flex=column align=stretch
        borderColor: "black",
        borderWidth: 3,
        justifyContent: "center", //space-between space-around
        alignItems: "center", //flex-start flex-end center stretch
        flexDirection: "column", //column
        height: 300,
    },

    text: {
        borderColor: "green",
        borderWidth: 1,
        //marginVertical: 20,
        //marginHorizontal: 20,
        margin: 20,
        padding: 20,
    },
    image: {
        height: 150,
        width: 150,
    },
    toptext: {
        fontSize: "25",
        color: "orange",
        justifyContent: "center", //space-between space-around
        alignItems: "center", //flex-start flex-end center stretch
        flexDirection: "column",
    },
    buttontext: {
        fontSize: 30,
        borderColor: "black",
        overlayColor: "blue",
        color: "orange",
        justifyContent: "center", //space-between space-around
        alignItems: "center", //flex-start flex-end center stretch
        flexDirection: "column",
    },
}); //npx expo-cli init food --npm or npx react-native-cli init food --npm

export default TutorView;
