import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
`;

export const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 25px;
  margin-top: 15px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  //padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;

export const Container = styled.div.attrs(({main, header}) => ({
    className: `container ${main && 'h-75'} ${header && 'h-20'}`
}))``;