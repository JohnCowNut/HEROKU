import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.components';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';
   
const CollectionPage = ({collection}) => {
	console.log(collection)
	const {title,items} =collection
	return (
    <div className ='collection-page'>
		<h2 className="title">{title}</h2>
		<div className="items">
			{
				items.map(el => <CollectionItem key={el.id} item={el}/>)
			} 
		</div>
	</div>
)}
const mapStateToProps = (state,ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage) ;      