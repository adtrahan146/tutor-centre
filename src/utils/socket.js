import { useEffect } from "react";
import { io } from "socket.io-client";
import { LOCAL_HOST, SOCKET_PORT } from "@env";

const useSocket = (onQueueUpdated, onTutorAlertNextPerson) => {
    useEffect(() => {
        try {
            const socket = io(`${LOCAL_HOST}:${SOCKET_PORT}`);

            socket.on("queue_updated", onQueueUpdated);
            socket.on("tutor_alert_next_person", onTutorAlertNextPerson);

            return () => {
                socket.disconnect();
            };
        } catch (error) {
            console.log(error);
        }
    }, [onQueueUpdated, onTutorAlertNextPerson]);
};

export default useSocket;
