import {actionsType} from "../../constants/actionsType";

export const toggleCartHidden = () => ({
    type: actionsType.TOGGLE_CART_HIDDEN
});

export const addItem = (item, currentUser) => ({
    type: actionsType.ADD_ITEM,
    payload: { item, currentUser }
});

export const removeItem = (item, currentUser) => ({
    type: actionsType.REMOVE_ITEM,
    payload: { item, currentUser }
});

export const clearItemFromCart = (item, currentUser) => ({
    type: actionsType.CLEAR_ITEM_FROM_CART,
    payload: { item, currentUser }
});

export const clearCartItems = currentUser => ({
    type: actionsType.CLEAR_CART_ITEMS,
    payload: { currentUser }
})

export const setGuestItemsToUser = currentUser => {
    return {
    type: actionsType.SET_GUEST_ITEMS_TO_USER,
    payload: { currentUser }
}}