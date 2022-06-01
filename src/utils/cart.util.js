export const addItemToCart = (cartItems, cartItemToAdd, quantity=1) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + quantity}
            : cartItem
        )
    }

    return [...cartItems,  { ...cartItemToAdd, quantity: quantity }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    );
};

export const addOrder = (orders, orderToAdd) => {
    if (orders.length) {
        return [...orders, orderToAdd]
    } else
        return [orderToAdd]
}

export const removeOrder = (orders, index) => {
    if (orders.length && index > -1) {
        
           return [
            ...orders.slice(0, index),
            ...orders.slice(index + 1)
            ]
    } else
        return []
}

export const editOrder = (orders, orderToEdit) => {
    if (orders.length) {
        return orders.map(order => order.id === orderToEdit.id ? orderToEdit : order)
    } else
        return []
}