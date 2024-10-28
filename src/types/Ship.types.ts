export enum ShipVariantsEnum {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  HUGE = 'HUGE',
}

export interface ShipPosition {
  x: number;
  y: number;
}

export interface Ship {
  variant: ShipVariantsEnum;
  position: ShipPosition;
  direction: boolean;
  size: number;
}

export interface Battleship {
  variant: ShipVariantsEnum;
  position: ShipPosition;
  size: number;
  direction: boolean;
  isSunk: boolean;
  registerHit: (x: number | string, y: number | string) => boolean;
}
