import styled from "styled-components";

export const Row = styled.div.attrs(() => ({
    className: 'row'
}))``;

export const Column = styled.div.attrs(({md, sm}) => {
    let classes = '';
    if (md)
        classes = `col-md-${md}`
    else if (sm)
        classes = `col-sm-${sm}`

    return ({
        className: classes
    })
})``;

export const GroupList = styled.ul.attrs(() => ({
    className: 'list-group list-group-flush'
}))``;

export const ListItem = styled.li.attrs(() => ({
    className: 'list-group-item'
}))``;

export const Title = styled.h2`
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  font-size: 1.25em;
`;