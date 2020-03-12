import {createSelector} from 'reselect';


const selectShop = state => state.shop
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
  )
export const selectForCollectionForOverView = createSelector(
	[selectCollections],
	collections => Object.keys(collections).map(el => collections[el])
	)
export const selectCollection = collectionParams => createSelector(
	[selectCollections],
	collections => collections[collectionParams]
	)
