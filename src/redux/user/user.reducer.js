import { actionsType } from '../../constants/actionsType';
//import {users} from "data/users.json";
const users = [];

const INITIAL_STATE = {
  currentUser: null,
  users
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case actionsType.CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case actionsType.LOGOUT_USER:
      return {
        ...state,
        currentUser: null,
      };
    case actionsType.SET_USERS:
        return {
            currentUser: action.payload.currentUser,
            users: action.payload.users
        }
    default:
      return state;
  }
};

export default userReducer;
