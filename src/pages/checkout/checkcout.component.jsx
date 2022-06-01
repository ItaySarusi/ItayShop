import React from "react";
import {connect} from 'react-redux'
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect";
import CheckoutItems from "../../components/checkout-item/checkout-item.component";
import {
    CheckoutHeaderContainer,
    CheckoutPageContainer, FooterBlockContainer,
    HeaderBlockContainer,
    TotalContainer,
} from "./checkout.styles"
import CustomButton from "../../components/custom-button/custom-button.component";
import {useHistory} from "react-router-dom";

const Checkout = ({cartItems ,total}) => {
    const history = useHistory();
    const handleProceedCheckout = () => history.push('/shipping')
    return(
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer className='header-block'>
                    <span> Product </span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span> Description </span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span> Quantity </span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span> Price </span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span> Remove </span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem => (
                    <CheckoutItems key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            <FooterBlockContainer>
                <TotalContainer> TOTAL: ${total} </TotalContainer>
                <CustomButton disabled={cartItems.length === 0}  onClick={handleProceedCheckout}> Place Order </CustomButton>
            </FooterBlockContainer>
        </CheckoutPageContainer>
    )
};

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);