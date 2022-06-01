import {actionsType} from "../../constants/actionsType";

export const createOrder = (order) => ({
    type: actionsType.CREATE_ORDER,
    payload: order
})
export const removeOrder = (index) => ({
    type: actionsType.REMOVE_ORDER,
    payload: index
})

export const editOrder = (order) => ({
    type: actionsType.EDIT_ORDER,
    payload: order
})