import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TutorView from "./src/views/screens/TutorView";
import Homescreen from "./src/views/screens/Homescreen";

const switchNavigator = createSwitchNavigator(
    {
        appFlow: createStackNavigator(
            {
                Home: Homescreen,
                Tutor: TutorView,
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
