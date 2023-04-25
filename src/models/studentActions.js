import serverAPI from "./ServerAPI";

const joinQueue = async (user, setQueuePosition, setHasJoined, studentClass, problemSummary) => {
    if (studentClass && problemSummary) {
        let res = await serverAPI.studentJoinQueue(user, studentClass, problemSummary);
        console.log(res.data.position);
        if (res.data.position) {
            setQueuePosition(res.data.position);
            setHasJoined(true);
        }
    } else {
        alert("Please fill out both fields before joining the queue.");
    }
};

const leaveQueue = async (user, setQueuePosition, setHasJoined) => {
    let res = await serverAPI.studentLeaveQueue(user);
    console.log(res.data);
    setQueuePosition(null);
    setHasJoined(false);
};

export { joinQueue, leaveQueue };
