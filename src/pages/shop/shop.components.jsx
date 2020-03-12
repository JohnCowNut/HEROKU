import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.components';
import CollectionOverview from '../../components/collection-overview/collection-overview.components'
const ShopPage = ({ match }) =>
    (
        <div className="shop-page">
				<Route exact path={`${match.url}`} component={CollectionOverview}/>
				<Route exact path= {`${match.url}/:collectionId`} component={CollectionPage} />
		</div>
    )

export default ShopPage;