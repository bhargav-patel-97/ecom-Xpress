import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollection = createSelector(
    [selectShop],
    shop => shop.collection
);

export const selectCollectionForPreview = createSelector(
    [selectCollection],
    collection => Object.keys(collection).map(key => collection[key])
) ;

export const selectCollectionId = collectionUrlParam => createSelector(
    [selectCollection],
    collection => collection[collectionUrlParam]
);