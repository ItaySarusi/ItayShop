import {actionsType} from "../../constants/actionsType";
import {addItemToCart, removeItemFromCart} from "../../utils/cart.util";

const INITIAL_STATE = {
    hidden: true,
    cartItems: {}
};

const cartReducer = (state = INITIAL_STATE, action) =>{
    let item = null;
    let currentUser = null;
    let user = null;
    switch (action.type) {
        case actionsType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case actionsType.ADD_ITEM:
            ({ item, currentUser } = action.payload);

            user = currentUser?.email || 'guestUser';
            const userCartItems = state.cartItems[user] || [];
             
            return {
                ...state,
                cartItems: { ...state.cartItems, [user]: addItemToCart(userCartItems, item) }
            };
        case actionsType.CLEAR_ITEM_FROM_CART:
            ({ item, currentUser } = action.payload);
            user = currentUser?.email || 'guestUser';            

            return {
                ...state,
                cartItems: {
                    ...state.cartItems, 
                    [user]: state.cartItems[user].filter((cartItem) =>  cartItem.id !== item.id )
                }
            };
        case actionsType.REMOVE_ITEM:
            ({ item, currentUser } = action.payload);
            user = currentUser?.email || 'guestUser';            
            return {
                ...state,
              cartItems: {...state.cartItems, [user]: removeItemFromCart(state.cartItems[user], item)}
            };
        case actionsType.CLEAR_CART_ITEMS:
            ({ currentUser } = action.payload)
            user = currentUser?.email || 'guestUser'; 
            const updatedCartItems = delete state.cartItems[user];           
            return {
                ...state,
                cartItems: updatedCartItems
            };
        
        case actionsType.SET_GUEST_ITEMS_TO_USER:
            ({ currentUser } = action.payload)
            user = currentUser.email;
            const guestCartItems = state.cartItems['guestUser'];
            let currentUserCartItems = state.cartItems[user] || [];
            
            if (!guestCartItems || !guestCartItems.length) {
                return state;
            }
            
            guestCartItems.forEach(item => {
                currentUserCartItems = addItemToCart(currentUserCartItems, item, item.quantity);
            })


            return {
                ...state,
                cartItems: {
                    ...state.cartItems, [user]: currentUserCartItems, guestUser: []
                }
            }

        default:
            return state;
    }
};

export default cartReducer;