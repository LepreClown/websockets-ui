import { usersStore } from '../store';
import { User } from '../types/Player.types';

export const createUser = (id: string, user: User) => usersStore.set(id, user);
export const getUser = (id: string) => usersStore.get(id);
export const getAllUsers = (): User[] => Array.from(usersStore.values());
export const isExistUser = (id: string) => usersStore.has(id);

export const getUserByName = (username: string) =>
  getAllUsers().find((user) => user.name === username);

export const getUserById = (id: string) =>
  getAllUsers().find((user) => user.sessionId === id);

export const isLoginUser = (username: string, password: string) => {
  const user = getUserByName(username);
  return user !== undefined && user.password === password;
};

export const updateSessionForUser = (username: string, newId: string) => {
  const user = getUserByName(username);
  if (!user) return;
  const updatedUser = { ...user, sessionId: newId };
  usersStore.set(user.id, updatedUser);

  return user.id;
};
