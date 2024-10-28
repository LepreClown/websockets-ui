import { Battleship } from './Ship.types';

export interface User {
  id: string;
  name: string;
  password: string;
  sessionId: string;
}

export interface Player {
  userId: string;
  ships: Battleship[] | null;
  board: Map<string, Battleship> | null;
}
