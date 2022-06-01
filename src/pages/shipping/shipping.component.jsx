import React, { useState } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { ShippingContainer, ShippingTitle } from './shipping.styles';
import { useSelector } from 'react-redux';
import { FooterBlockContainer } from '../checkout/checkout.styles';
import { v4 as uuid } from 'uuid';
import { useHistory } from 'react-router-dom';

const Shipping = () => {
  const history = useHistory();
  const { currentUser } = useSelector((store) => store.user);

  const [orderDetails, setOrderDetails] = useState({
    id: uuid(),
    name: currentUser.displayName,
    email: currentUser.email,
    userID: currentUser.id,
    userDN: currentUser.displayName,
    city: '',
    phone: '',
    postalCode: '',
    country: '',
    address: '',
  });

  const handleChange = (e) =>
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({ pathname: '/order', state: orderDetails });
  };

  function onlyLetters(inputtxt) {
    let letters = /^[A-Za-z]+$/;
    if (inputtxt.match(letters)) {
      return true;
    } else {
      alert('Please insert only letters on this section');
      return false;
    }
  }

  return (
    <ShippingContainer>
      <ShippingTitle>Shipping</ShippingTitle>
      <span>Please fill the required fields</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='name'
          label='Name'
          type='text'
          value={currentUser?.displayName}
          onChange={(e) => onlyLetters(e.target.value) && handleChange(e)}
          maxLength='20'
          required
        />
        <FormInput
          name='email'
          label='Email'
          type='email'
          value={currentUser?.email}
          onChange={handleChange}
          maxLength='30'
          required
        />
        <FormInput
          name='phone'
          label='Phone/Mobile Number'
          type='number'
          value={orderDetails.phone}
          onChange={handleChange}
          max={9999999999}
          required
        />
        <FormInput
          name='city'
          label='City'
          type='text'
          value={orderDetails.city}
          onChange={(e) => onlyLetters(e.target.value) && handleChange(e)}
          required
          maxLength='20'
        />
        <FormInput
          name='postalCode'
          label='Postal Code'
          type='number'
          value={orderDetails.postalCode}
          onChange={handleChange}
          required
          max={9999999999}
        />
        <FormInput
          name='country'
          label='Country'
          type='text'
          value={orderDetails.country}
          onChange={(e) => onlyLetters(e.target.value) && handleChange(e)}
          required
          maxLength='20'
        />
        <textarea
          name='address'
          placeholder='Address'
          maxLength='30'
          value={orderDetails.address}
          onChange={handleChange}
          rows={3}
          style={{ width: '100%' }}
        ></textarea>
        <FooterBlockContainer>
          <CustomButton type='submit'> Continue </CustomButton>
        </FooterBlockContainer>
      </form>
    </ShippingContainer>
  );
};

export default Shipping;
