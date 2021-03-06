import React from "react";
import {withRouter} from 'react-router-dom'
import CollectionItem from '../collection-item/collection-item.component'

import {CollectionPreviewContainer, PreviewContainer, TitleContainer} from './collection-preview.styles'
//Each collection line structure on Shop page
const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
        <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
        </TitleContainer>
        <PreviewContainer>
            {items
                .filter((id, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);