import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { toast } from 'react-toastify';

import {
  ButtonsBarContainer,
  SignInContainer,
  SignInTitle,
} from './sign-in.styles';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';
import { setGuestItemsToUser } from 'redux/cart/cart.actions';
import axios from 'axios';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const history = useHistory();
  const { state } = useLocation();
  const dispatch = useDispatch();
  var userType = 'User';
  let { users } = useSelector((store) => {
    return store.user;
  });
  const previousRoute = state ? state.from : '/';

  const handleNavigation = () => {
    return history.push(userType === 'Admin' ? '/admin' : previousRoute);
  };

  const userAuthentication = (loginUser) => {
    for (let user of users) {
      if (user.type === 'admin') {
        userType = 'Admin';
      } else {
        userType = 'User';
      }
      if (
        loginUser.email === user.email &&
        loginUser.password === user.password
      ) {
        return user;
      }
    }
    toast.error('Invalid Username or Password');
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get('users.json')
      .then((res) => {
        users = res.data.users;
      })
      .catch((err) => console.log(err.message));
    const authenticatedUser = userAuthentication(formData);
    if (authenticatedUser) {
      toast.success(userType + ' Successfully Logged in');
      dispatch(setCurrentUser(authenticatedUser));
      dispatch(setGuestItemsToUser(authenticatedUser));
      handleNavigation();
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account :</SignInTitle>
      <span>Sign in with an Email and Password: </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          label='Email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormInput
          name='password'
          label='Password'
          type='password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'> Submit</CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
