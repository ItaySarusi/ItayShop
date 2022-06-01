import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/custom-button/custom-button.component';
import {
  Column,
  GroupList,
  ListItem,
  Paragraph,
  Row,
  Title,
} from './order.styles';
import { createOrder } from '../../redux/order/order.action';
import { clearCartItems } from '../../redux/cart/cart.actions';
import { toast } from 'react-toastify';

const Order = (props) => {
  const { state } = props.location;
  const dispatch = useDispatch();
  const { cartItems, currentUser } = useSelector((store) => ({
    cartItems: store.cart.cartItems,
    currentUser: store.user.currentUser,
  }));

  const userCartItems = cartItems[currentUser.email];
  const cartItemsPrice = userCartItems.reduce(
    (accumulatedQuantity, item) =>
      accumulatedQuantity + item.quantity * item.price,
    0
  );
  const SHIPPING_PRICE = 20.0;
  const TAX = 0.0;
  const totalPrice = cartItemsPrice + SHIPPING_PRICE + TAX;

  const confirmOrder = () => {
    const order = { ...state, totalPrice, items: userCartItems };
    dispatch(createOrder(order));
    dispatch(clearCartItems(currentUser));
    toast.success('Order Successfully Confirmed');
    props.history.push('/');
  };

  return (
    <Fragment>
      <Row>
        <Column md={8}>
          <GroupList>
            <ListItem>
              <Title>Shipping</Title>
              <Paragraph>
                <strong>Address: </strong>
                {state.address}, {state.city}, {state.postalCode} ,{' '}
                {state.country}
              </Paragraph>
            </ListItem>
            <ListItem>
              <Title> Order Items </Title>
              {userCartItems.length === 0 ? (
                <span>Your cart is Empty</span>
              ) : (
                <GroupList>
                  {userCartItems.map((item, index) => (
                    <ListItem key={index}>
                      <Row>
                        <Column md={3}>
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            width={75}
                            height={75}
                          />
                        </Column>
                        <Column md={5}>{item.name}</Column>
                        <Column md={4}>
                          {item.quantity} x {item.price}$ ={' '}
                          {item.price * item.quantity}$
                        </Column>
                      </Row>
                    </ListItem>
                  ))}
                </GroupList>
              )}
            </ListItem>
          </GroupList>
        </Column>
        <Column md={4}>
          <div className='card'>
            <GroupList>
              <ListItem>
                <h2 className='text-center'>Order Summary</h2>
              </ListItem>
              <ListItem>
                <Row>
                  <Column sm={6}>Items</Column>
                  <Column sm={6}>$ {cartItemsPrice.toFixed(2)}</Column>
                </Row>
              </ListItem>
              <ListItem>
                <Row>
                  <Column sm={6}>Shipping</Column>
                  <Column sm={6}>$ {SHIPPING_PRICE.toFixed(2)}</Column>
                </Row>
              </ListItem>
              <ListItem>
                <Row>
                  <Column sm={6}>Tax</Column>
                  <Column sm={6}>$ {TAX.toFixed(2)}</Column>
                </Row>
              </ListItem>
              <ListItem>
                <Row>
                  <Column sm={6}>Total</Column>
                  <Column sm={6}>$ {totalPrice.toFixed(2)}</Column>
                </Row>
              </ListItem>
              <ListItem>
                <CustomButton
                  type='button'
                  className='btn-block'
                  disabled={userCartItems.length === 0}
                  onClick={confirmOrder}
                >
                  Confirm Order
                </CustomButton>
              </ListItem>
            </GroupList>
          </div>
        </Column>
      </Row>
    </Fragment>
  );
};

export default Order;
