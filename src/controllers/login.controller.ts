import { LoginData } from '../types/Login.types';
import {
  createUser,
  getUserByName,
  isLoginUser,
  updateSessionForUser,
} from '../models/user.model';
import { randomUUID } from 'node:crypto';
import { User } from '../types/Player.types';
import { sendMessageToClient } from '../helpers';
import { WssEnum } from '../types/Wss.types';
import WebSocket from 'ws';

const sendLoginRes = (
  userId: string,
  name: string,
  ws: WebSocket,
  error: boolean = false,
  errorText: string = '',
): void => {
  sendMessageToClient(ws, {
    data: {
      index: userId,
      name,
      error,
      errorText,
    },
    type: WssEnum.LOGIN,
  });
};

export const loginUser = (
  wss: WebSocket,
  sessionId: string,
  data: LoginData,
) => {
  const isHasUser = getUserByName(data.name);

  if (!isHasUser) {
    const userId = randomUUID();
    const userBody = {
      id: userId,
      sessionId,
      name: data.name,
      password: data.password,
    } as User;

    createUser(userId, userBody);
    sendLoginRes(userId, data?.name, wss);
  }

  const isAuth = isLoginUser(data?.name, data?.password);

  if (isAuth) {
    const userId = updateSessionForUser(data?.name, sessionId);
    if (userId) sendLoginRes(userId ?? '', data?.name, wss);
  }

  sendLoginRes(
    String(0),
    data?.name,
    wss,
    true,
    'The password or name entered is incorrect!',
  );
};
