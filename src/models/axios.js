import axios from "axios";

export const serverAPI = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
});

export const handleButtonPressTest = async () => {
    let res = await serverAPI.get("/test/");
    if (res.data) {
        console.log(res.data);
    }
    return res;
};
