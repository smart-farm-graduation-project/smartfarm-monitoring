import { Manager, io } from 'socket.io-client';
// import { socketUrl } from './url';
import url, { socketUrl } from './url';

const socketConnect = (roomId:string) => {
    const socket = io(socketUrl, {
        transports:["websocket"]
    })
    // const manager = new Manager(url, {
    //     reconnectionDelayMax: 10000,
    //     transports: ["websocket"]
    // });
    // const socket = manager.socket('/ws/chat');
    // return socket;

    // const ws = new WebSocket(socketUrl);
    // return ws;
}

export {socketConnect};