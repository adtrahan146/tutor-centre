import { render, fireEvent } from "@testing-library/react-native";
import Homescreen from "../views/screens/Homescreen";
import serverAPI from "../models/ServerAPI";

jest.mock("../models/ServerAPI", () => ({
    handleButtonPressTest: jest.fn(),
}));

describe("Homescreen", () => {
    it("renders the header and buttons", () => {
        const { getByText } = render(<Homescreen />);
        expect(getByText("Hello World")).toBeTruthy();
        expect(getByText("GET /test/")).toBeTruthy();
        expect(getByText("Go to TutorView Temp Btn")).toBeTruthy();
    });

    it("handles button press events", async () => {
        expect.assertions(3);
        const navigation = { navigate: jest.fn() };
        const { getByText } = render(<Homescreen navigation={navigation} />);
        const getTestButton = getByText("GET /test/");
        const tutorViewButton = getByText("Go to TutorView Temp Btn");

        serverAPI.handleButtonPressTest.mockResolvedValue({ data: "hello world!" });

        await fireEvent.press(getTestButton);

        // Ensure handleButtonPressTest is called
        expect(serverAPI.handleButtonPressTest).toHaveBeenCalledTimes(1);
        await expect(serverAPI.handleButtonPressTest()).resolves.toEqual({ data: "hello world!" });

        fireEvent.press(tutorViewButton);
        expect(navigation.navigate).toHaveBeenCalledWith("Tutor");
    });
});
