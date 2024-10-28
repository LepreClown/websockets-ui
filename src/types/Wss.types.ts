export enum WssEnum {
  LOGIN = 'reg',
  ADD_USER_TO_ROOM = 'add_user_to_room',
  CREATE_ROOM = 'create_room',
  UPDATE_ROOM = 'update_room',
  START_GAME = 'start_game',
  CREATE_GAME = 'create_game',
  UPDATE_WINNERS = 'update_winners',
  ADD_SHIPS = 'add_ships',
  ATTACK = 'attack',
  RANDOM_ATTACK = 'random_attack',
  TURN = 'turn',
  FINISH = 'finish',
}

export type WssEnumKeys = keyof typeof WssEnum;
export interface WssAction {
  type: WssEnum;
}

export interface Message<T = string> extends WssAction {
  data: T;
}
