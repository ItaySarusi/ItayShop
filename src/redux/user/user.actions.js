import { actionsType } from '../../constants/actionsType';

export const setCurrentUser = (user) => ({
  type: actionsType.SET_CURRENT_USER,
  payload: user,
});

export const createUser = (user) => ({
  type: actionsType.CREATE_USER,
  payload: user,
});

export const setUsers = (users) => ({
  type: actionsType.SET_USERS,
  payload: users,
});

export const logoutUser = () => ({ type: actionsType.LOGOUT_USER });
