import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Homescreen from "../views/screens/Homescreen";

describe("Homescreen", () => {
    it("renders the header and buttons", () => {
        const { getByText } = render(<Homescreen />);
        expect(getByText("Hello World")).toBeTruthy();
        expect(getByText("GET /test/")).toBeTruthy();
        expect(getByText("Go to TutorView Temp Btn")).toBeTruthy();
    });

    it("handles button press events", () => {
        const navigation = { navigate: jest.fn() };

        const { getByText } = render(<Homescreen navigation={navigation} />);
        const getTestButton = getByText("GET /test/");
        const tutorViewButton = getByText("Go to TutorView Temp Btn");

        //this tests the console log that we will delete later
        const consoleSpy = jest.spyOn(console, "log");
        fireEvent.press(getTestButton);
        expect(consoleSpy).toHaveBeenCalledWith("GET /test/ button pressed");
        consoleSpy.mockRestore();

        fireEvent.press(tutorViewButton);
        expect(navigation.navigate).toHaveBeenCalledWith("Tutor");
    });
});
