import serverAPI from "./ServerAPI";

const joinQueue = async (user, setQueuePosition) => {
    let res = await serverAPI.studentJoinQueue(user);
    console.log(res.data.position);
    if (res.data.position) {
        setQueuePosition(res.data.position);
    }
};

const leaveQueue = async (user, setQueuePosition) => {
    let res = await serverAPI.studentLeaveQueue(user);
    console.log(res.data);
    setQueuePosition(null);
};

export { joinQueue, leaveQueue };
