import { playersStore } from '../store';
import { createSessionId } from '../helpers';
import { WssEnum } from '../types/Wss.types';
import { loginUser } from '../controllers/login.controller';
import WebSocket from 'ws';

const handleError = (error: unknown) => {
  console.error('Error processing message:', error);
};

const handleSendMessage = (wss: WebSocket, id: string) => {
  return (rawData: WebSocket.RawData) => {
    const message = JSON.parse(rawData.toString());

    const handlers: Partial<Record<WssEnum, () => void>> = {
      [WssEnum.LOGIN]: () => loginUser(wss, id, message),
      [WssEnum.ADD_USER_TO_ROOM]: () => {},
      [WssEnum.CREATE_ROOM]: () => {},
      [WssEnum.ADD_SHIPS]: () => {},
      [WssEnum.ATTACK]: () => {},
    };

    try {
      const handleCommand = handlers[message.type as WssEnum];

      if (handleCommand) {
        handleCommand();
      } else {
        console.log(`Unknown command type: ${message?.type}`);
      }
    } catch (error) {
      handleError(error);
    }
  };
};

const handleDisconnection = (id: string) => {
  playersStore.delete(id);
  console.log(`Player disconnected, session ID: ${id}`);
};

export const handleConnection = (wss: WebSocket) => {
  const sessionId = createSessionId();
  console.log(`WebSocket connection. Session ID: ${sessionId}`);

  wss.on('message', handleSendMessage(wss, sessionId));

  wss.on('close', handleDisconnection);
};
