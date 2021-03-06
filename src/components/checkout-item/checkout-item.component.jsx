import React from "react";
import {connect} from 'react-redux'
import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.actions";
import {CheckoutItemContainer, TextContainer, ImageContainer, QuantityContainer, RemoveButtonContainer} from './checkout-item.styles'

const CheckoutItems = ({cartItem, clearItemFromCart, addItem, removeItem, currentUser}) => {
    const {imageUrl, name, quantity, price} = cartItem;
    return(
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt='item'/>
        </ImageContainer>
        <TextContainer> {name}</TextContainer>
        <QuantityContainer>
            <span className='arrow' onClick={() => removeItem(cartItem, currentUser)}> &#10094;</span>
            <span className='value'>{quantity}</span>
            <span className='arrow' onClick={() => addItem(cartItem, currentUser)}> &#10095; </span>
        </QuantityContainer>
        <TextContainer> {price}</TextContainer>
        <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem, currentUser)}> &#10005; </RemoveButtonContainer>
    </CheckoutItemContainer>
)};

const mapDispatchToProps = {
    clearItemFromCart,
    addItem,
    removeItem
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});


export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItems);