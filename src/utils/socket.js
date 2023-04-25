import { useEffect } from "react";
import { io } from "socket.io-client";
import { LOCAL_HOST, SOCKET_PORT } from "@env";

const useSocket = (onQueueUpdated) => {
    useEffect(() => {
        try {
            const socket = io(`${LOCAL_HOST}:${SOCKET_PORT}`);

            socket.on("queue_updated", onQueueUpdated);

            return () => {
                socket.disconnect();
            };
        } catch (error) {
            console.log(error);
        }
    }, [onQueueUpdated]);
};

export default useSocket;
