import { WebSocketServer } from 'ws';
import { handleConnection } from '../handlers/wss.handler';

const WSS_PORT = 3000;

const wss = new WebSocketServer({ port: WSS_PORT });

export const wssServer = () => {
  wss.on('connection', handleConnection);
  console.log('WSS start on port ', WSS_PORT);
};
