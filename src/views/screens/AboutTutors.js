import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native';


const AboutTutors= () =>
{
    

    return (
        <View style={styles.background}>
            <Text style={styles.header}>UNO Computer Science Tutor Center</Text>

            <Text>About the Tutors</Text>
            <Text>Tutor: Jared Wise is awesome</Text>
        </View>
    );
};

const styles = StyleSheet.create
({
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
        backgroundColor: "#F5FCFF",
    },
    
    buttonContainer:{
        backgroundColor: "#005CA6",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
      },
      aboutImg:{
        width: 30,
        height: 30
      },
      aboutContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120
        
      },
      aboutText:{
        fontSize: 20
      },
    
    nextPage:{
        color: "#FFFFFF",
        fontSize: 16,
    },

    footing:{
      textAlign: 'center',
      marginTop: 30,
      //backgroundColor: "#F5FCFF",
    },

    background:{
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      flexDirection: "column",
    }

});


export default AboutTutors;