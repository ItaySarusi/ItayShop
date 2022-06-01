import React from "react";
import {connect} from 'react-redux'
import {addItem} from "../../redux/cart/cart.actions";
import {
    AddButton,
    BackgroundImage,
    CollectionFooterContainer,
    CollectionItemContainer,
    NameContainer,
    PriceContainer
} from './collection-item.styles'
import {toast} from "react-toastify";

const CollectionItem = ({item, addItem, currentUser}) => {
    const { name, price, imageUrl } = item;

    const handleAddToCart = () => {        
        addItem(item, currentUser);
        toast.success(`${name} Added to Cart`,{position: "top-center"})
    }

    return(
    <CollectionItemContainer>
        <BackgroundImage imageUrl={imageUrl}/>
        <CollectionFooterContainer>
            <NameContainer> {name}</NameContainer>
            <PriceContainer>{price} $</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={handleAddToCart} inverted> Add to Cart</AddButton>
    </CollectionItemContainer>
)};

const mapDispatchToProps = {
    addItem
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});
  

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem)