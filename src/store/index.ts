import { RoomGame } from '../types/Board.types';
import { Room } from '../types/Room.types';
import { User } from '../types/Player.types';

export const playersStore = new Map<string, WebSocket>();
export const usersStore = new Map<string, User>();
export const gameStore = new Map<string, RoomGame>();
export const shipStore = new Map<string, Room>();
export const roomStore = new Map<
  string,
  { name: string; currentWin: number }
>();
