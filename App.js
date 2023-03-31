import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TutorView from "./src/views/screens/TutorView";
import Homescreen from "./src/views/screens/Homescreen";
import StudentView from "./src/views/screens/StudentView";
import JoinTheQueue from "./src/views/screens/JoinTheQueue";
import ScheduleAppointment from "./src/views/screens/ScheduleAnAppointment";
import AboutTutors from "./src/views/screens/AboutTutors";

const switchNavigator = createSwitchNavigator(
    {
        appFlow: createStackNavigator(
            {
                Home: Homescreen,
                Tutor: TutorView,
                Student: StudentView,
                JoinTheQueue: JoinTheQueue,
                ScheduleAppointment: ScheduleAppointment,
                AboutTutors: AboutTutors
            },
            { initialRouteName: "Home" }
        ),
    },
    {
        initialRouteName: "appFlow",
    }
);

const App = createAppContainer(switchNavigator);

export default () => {
    return <App />;
};
