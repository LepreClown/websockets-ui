import { randomBytes } from 'node:crypto';
import { Message } from '../types/Wss.types';
import WebSocket from 'ws';

export const createSessionId = () => {
  return randomBytes(16).toString('hex');
};

export const sendMessageToClient = (
  webSocket: WebSocket,
  clientMessage: Message<{}>,
): void => {
  const formattedMessage = {
    ...clientMessage,
    data: JSON.stringify(clientMessage?.data),
    id: 0,
  };
  webSocket.send(JSON.stringify(formattedMessage));
};
