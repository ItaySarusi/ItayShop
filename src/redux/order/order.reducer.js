import {actionsType} from "../../constants/actionsType";
import { addOrder, editOrder, removeOrder } from "../../utils/cart.util";

const INITIAL_STATE = {
    orders: []
};


export const orderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionsType.CREATE_ORDER:
            return {...state, orders: addOrder(state.orders, action.payload)}
        case actionsType.REMOVE_ORDER:
            return {
                ...state, orders: removeOrder(state.orders,action.payload)}
        case actionsType.EDIT_ORDER:
            return {...state, orders: editOrder(state.orders, action.payload)}
        default:
            return state
    }
}