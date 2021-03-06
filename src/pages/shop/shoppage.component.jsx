import React from "react";
import {Route} from 'react-router-dom';
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = (props) => {
    const {match} = props;
    
    return (
        <div className='shop-page'>
            <Route
                exact path={`${match.path}`}
                component={CollectionOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </div>
    )
}

export default ShopPage