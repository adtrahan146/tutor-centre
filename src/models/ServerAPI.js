import axios from "axios";

class ServerAPI {
    api;
    constructor() {
        this.api = axios.create({
            baseURL: "http://localhost:3000",
            timeout: 5000,
        });
    }

    async handleButtonPressTest() {
        let res = await this.api.get("/test/");
        if (res.data) {
            console.log(res.data);
        }
        return res;
    }
}

const serverAPI = new ServerAPI();
export default serverAPI;
