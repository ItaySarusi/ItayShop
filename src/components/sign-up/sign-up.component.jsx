import React, {useState} from 'react'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {SignUpContainer, SignUpTitle} from './sign-up.styles'
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {createUser} from "../../redux/user/user.actions";
import {v4 as uuid} from "uuid"

const INITIAL_FORM_STATE = {
    id: uuid(),
    displayName: '',
    email: '',
    password: '',
    confirmedPassword: ''
}

const SignUp = () => {
    const dispatch = useDispatch();

    const {users} = useSelector(store => store?.user);

    const [formData, setFormData] = useState(INITIAL_FORM_STATE);

    const handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmedPassword} = formData;

        if (password !== confirmedPassword) {
            toast.error('Passowrd don\'t match')
            return;
        }

        const isUserExist = Boolean(users.find(user => user.email === email));

        if (isUserExist) {
            toast.error('User already exists with this email');
            return;
        }

        dispatch(createUser({displayName, email, password}));
        setFormData(INITIAL_FORM_STATE);
        toast.success('User Successfully Registered')
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    return (
        <SignUpContainer>
            <SignUpTitle>i don't have an account :</SignUpTitle>
            <span>Sign up with a new user: </span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='displayName'
                    label='Display Name'
                    type='text'
                    value={formData.displayName}
                    onChange={handleChange}
                    required
                />
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
                <FormInput
                    name='confirmedPassword'
                    label='Confirm Password'
                    type='password'
                    value={formData.confirmedPassword}
                    onChange={handleChange}
                    required
                />
                <CustomButton type='submit'> SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )
}

export default SignUp;