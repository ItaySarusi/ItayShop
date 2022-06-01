import React, {Fragment, useState} from "react";
import {connect} from 'react-redux';
import {selectCollection} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

import {
    CollectionItemsContainer,
    CollectionPageContainer,
    CollectionTitle,
    InputContainer, Search,
    SearchContainer
} from './collection.styles';

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    const [search, setSearch] = useState('');

    const handleFilter = (items) => items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <Fragment>
            <SearchContainer>
                <InputContainer>
                    <Search type='text' placeholder='Search Product...' onChange={(e) => setSearch(e.target.value)} />
                    {/*<input type="text" className="form-control" aria-label="Sizing example input"
                           placeholder='Search....'
                           onChange={}
                           aria-describedby="inputGroup-sizing-lg"/>*/}
                </InputContainer>
            </SearchContainer>
            <CollectionPageContainer>
                <CollectionTitle>{title}</CollectionTitle>
                <CollectionItemsContainer>
                    {handleFilter(items).map(item => (
                        <CollectionItem key={item.id} item={item}/>
                    ))}
                </CollectionItemsContainer>
            </CollectionPageContainer>
        </Fragment>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state) || 'default'
});

export default connect(mapStateToProps)(CollectionPage);