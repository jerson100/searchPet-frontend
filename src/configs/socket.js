import { io } from "socket.io-client";

const URL = import.meta.env.VITE_BACKEND_URL;
const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;
