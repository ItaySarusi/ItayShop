import styled from "styled-components";

export const FooterContainer = styled.div.attrs(()=>({
    className: `container`
}))``;

export const Title = styled.h3`
  text-transform: uppercase;
  color: #ffffff;
`;

export const SocialIcon = styled.i.attrs(({icon})=>({
    className: `fa fa-${icon}`
}))``;