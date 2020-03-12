import React from 'react';
import { connect } from 'react-redux';
import { selectForCollectionForOverView } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.components';
import "./collection-overview.styles.scss";
const CollectionOverview = ({ collections }) => (
    <div className = "collections-overview">
		{ 
			collections.map( ({id,...otherCollectionProps}) => (
				<CollectionPreview key = {id} {...otherCollectionProps} />
			))
		}
	</div>

)
const mapStateToProps = state => ({
	collections: selectForCollectionForOverView(state)
})

export default connect(mapStateToProps)(CollectionOverview)