import React from "react";

import {CustomButtonContainer} from './custom-button.styles'

//This component is not a main component - meaning it appears inside other componenets.
const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;