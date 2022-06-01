import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h2`
  text-transform: uppercase;
  letter-spacing: 2px;
  
  & span {
    color: darkred;
  }
`;