export enum RoomStatusEnum {
  CREATE = 'CREATE',
  FINISH = 'FINISH',
  PROGRESS = 'PROGRESS',
}

export interface Room {
  roomId: number;
  roomUsers: RoomUser[];
}

export interface RoomUser {
  name: string;
  index: string;
}
