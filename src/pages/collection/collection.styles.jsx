import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div.attrs(() => ({
    className: 'input-group input-group-lg',
}))`
  width: 100%;
`;

export const Search = styled.input.attrs(() => ({
    className: 'form-control'
}))``;