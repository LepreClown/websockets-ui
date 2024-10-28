import { Battleship, Ship } from '../types/Ship.types';

export const createBattleshipModel = (ship: Ship): Battleship => {
  const { variant, position, direction, size } = ship;

  let hitCount = 0;
  const hitPositions = new Set<string>();

  const isSunk = hitCount === size;

  const createPositionKey = (x: number | string, y: number | string) => {
    return `${x}:${y}`;
  };

  const registerHit = (x: number | string, y: number | string): boolean => {
    const key = createPositionKey(x, y);
    if (hitPositions.has(key)) return false;
    hitPositions.add(key);
    hitCount++;

    return true;
  };

  return {
    variant,
    position,
    direction,
    size,
    isSunk,
    registerHit,
  };
};
