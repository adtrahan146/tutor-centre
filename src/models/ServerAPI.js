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
        let res = await this.api.get("student/test/");
        if (res.data) {
            console.log(res.data);
        }
        return res;
    }

    async getQueueWaittime() {
        try {
            let res = await this.api.get("student/estimatedWaitTime/");
            if (res.data) {
                console.log(res.data);
                return res.data.estimatedWaitTime;
            }
            return res;
        } catch (error) {
            console.log(error)
        }
        
    }
}

const serverAPI = new ServerAPI();
export default serverAPI;
