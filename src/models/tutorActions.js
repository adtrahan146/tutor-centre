import serverAPI from "./ServerAPI";

const removeUserFromQueue = async (user) => {
    try {
        const res = await serverAPI.tutorRemoveUser(user);
        if (res && res.data) {
            // Check if res is defined before accessing res.data
            console.log(res.data);
            return res.data;
        }
    } catch (error) {
        console.log(error);
    }
};

const alertNextPersonInQueue = async () => {
    try {
        const res = await serverAPI.tutorAlertNextPerson();
        if (res && res.data) {
            console.log(res.data);
            return res.data;
        }
    } catch (error) {
        console.log(error);
    }
};

export { removeUserFromQueue, alertNextPersonInQueue };
