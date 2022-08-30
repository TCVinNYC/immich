import { io } from 'socket.io-client';
let websocket;
export const openWebsocketConnection = () => {
    try {
        websocket = io('', {
            path: '/api/socket.io',
            transports: ['polling'],
            reconnection: true,
            forceNew: true,
            autoConnect: true
        });
        listenToEvent(websocket);
    }
    catch (e) {
        console.log('Cannot connect to websocket ', e);
    }
};
const listenToEvent = (socket) => {
    socket.on('on_upload_success', (data) => { });
    socket.on('error', (e) => {
        console.log('Websocket Error', e);
    });
};
export const closeWebsocketConnection = () => {
    websocket?.close();
};
//# sourceMappingURL=websocket.js.map