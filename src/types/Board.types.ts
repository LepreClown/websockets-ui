import { Player } from './Player.types';
import { RoomStatusEnum } from './Room.types';

export enum BoardActionsEnum {
  SHOT = 'shot',
  MISS = 'miss',
  KILLED = 'killed',
}

export interface RoomGame {
  gameId: number | string;
  roomStatus: RoomStatusEnum;
  currentPlayer: number | string;
  players: Player[];
  indexPlayer: number | string;
}
