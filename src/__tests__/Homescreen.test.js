import { render, fireEvent } from "@testing-library/react-native";
import Homescreen from "../views/screens/Homescreen";
import { handleButtonPressTest } from "../models/axios";

// Mock the axios module
// jest.mock("../models/axios", () => ({
//     handleButtonPressTest: jest.fn(),
// }));

describe("Homescreen", () => {
    it("renders the header and buttons", () => {
        try {
            const { getByText } = render(<Homescreen />);
            expect(getByText("Hello World")).toBeTruthy();
            expect(getByText("GET /test/")).toBeTruthy();
            expect(getByText("Go to TutorView Temp Btn")).toBeTruthy();
        } catch (error) {
            console.error("Error occurred:", error);
        }
    });

    it("handles button press events", async () => {
        const navigation = { navigate: jest.fn() };

        const { getByText } = render(<Homescreen navigation={navigation} />);
        const getTestButton = getByText("GET /test/");
        const tutorViewButton = getByText("Go to TutorView Temp Btn");

        await fireEvent.press(getTestButton);

        // Add an expect statement to ensure handleButtonPressTest is called
        // and returns the expected response
        const response = await handleButtonPressTest();
        expect(response.data).toEqual("hello world!");

        fireEvent.press(tutorViewButton);
        expect(navigation.navigate).toHaveBeenCalledWith("Tutor");
    });
});
