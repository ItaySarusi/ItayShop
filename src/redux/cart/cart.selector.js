import { createSelector } from "reselect";

const selectCart = state => state.cart;
const selectUser = state => state.user;

export const selectCartItems = createSelector(
    [selectCart, selectUser],
    (cart, user) => {
        const currentUser = user.currentUser?.email || 'guestUser';
        return cart.cartItems[currentUser] || [];
    }
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => {
        return cartItems.reduce( (accumulatedQuantity ,cartItem) => accumulatedQuantity + cartItem.quantity, 0)
    }
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce( (accumulatedQuantity ,cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
);