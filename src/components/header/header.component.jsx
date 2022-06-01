import React, {Fragment} from "react";
import {createStructuredSelector} from "reselect";
import {connect, useDispatch} from "react-redux"
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectCartHidden} from "../../redux/cart/cart.selector";

import {Container, HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer} from './header.styles'
import {logoutUser} from "../../redux/user/user.actions";

const Header = ({currentUser, hidden}) => {
    const dispatch = useDispatch()
    const handleLogout = () => dispatch(logoutUser())

    return (
        <Container header>
            <HeaderContainer>
                <LogoContainer to='/'>
                    <Logo className='logo'/>
                </LogoContainer>
                <OptionsContainer>
                    <OptionLink to='/shop'>
                        SHOP
                    </OptionLink>
                    <OptionLink to='/checkout'>
                        CART
                    </OptionLink>
                    <OptionLink to='/about'>
                        ABOUT
                    </OptionLink>
                    
                    {currentUser ? (
                        <Fragment>
                            {
                            //check user type and enable admin link
                            currentUser.type === 'admin'?
                            (<OptionLink to='/admin'>
                                Admin
                            </OptionLink>):null
                            }
                            <OptionLink to={'view-orders'}>
                                View your Orders
                            </OptionLink>
                            <OptionDiv onClick={handleLogout}>
                                SIGN OUT
                            </OptionDiv>
                        </Fragment>
                    ) : (
                        <OptionLink to='/signin'>
                            SIGN IN
                        </OptionLink>
                    )}
                    <CartIcon/>
                </OptionsContainer>
                {hidden ? null : <CartDropdown/>}
            </HeaderContainer>
        </Container>
    );
};
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);