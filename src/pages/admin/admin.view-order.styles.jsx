import styled from "styled-components";

export const OrderPageContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const Heading = styled.h1`

  border-bottom: 1px solid gray;
  margin-bottom: 100px;
  `;

export const Title = styled.h3`
  margin-bottom: 5px ;
  `;



export const OrderHeaderContainer = styled.div`
  width: 100%;
  //height: 40px;
  display: flex;
  justify-content: space-between;
  margin: ${({my}) => my && my}em;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: ${props => props?.width ?? '23%'}%;
  text-transform: ${({uppercase}) => uppercase ? 'uppercase' : 'normal'};
  text-overflow: ellipsis;
  overflow: hidden;
  &:last-child {
    width: 8%;
  }
`;

export const Divider = styled.span`
    border-bottom: 1px solid gray;
    height: 5px;
    width: 100%;
`;

export const Button = styled.span`
    border-bottom: 1px solid red  ;
    cursor: pointer;
    color: red;
    font-size:25px;
    height: 5px;
    width: 100%;
`;