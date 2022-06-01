import { InputContainer, Search, SearchContainer } from 'pages/collection/collection.styles';
import React, { Fragment, useState } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";

import {CollectionOverviewContainer} from "./collection-overview.styles";

const CollectionOverview = ({collections}) => {
    const [search, setSearch] = useState('');

    const handleFilter = (items) => items.map(item => {
        return {...item, items: item.items.filter(subItem => subItem.name.toLowerCase().includes(search.toLowerCase()))};
    });
    //Search bar on main shop page:
    return (
        <Fragment>
            <SearchContainer>
                <InputContainer>
                    <Search type='text' placeholder='Search Product...' onChange={(e) => setSearch(e.target.value)} />
                </InputContainer>
            </SearchContainer>
            <CollectionOverviewContainer>
                {handleFilter(collections).map(({id, ...otherCollectionProps}) =>(
                    <div key={id}>
                        <CollectionPreview {...otherCollectionProps} />
                    </div>
                ))}
            </CollectionOverviewContainer>
        </Fragment>
    )
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview)