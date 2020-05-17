import React from 'react';
import PreviewCollection  from '../../components/preview-collection/preview-collection.component';
import './collection-overview.styles.scss'

import { connect } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect'; 

const collectionOverview = ({ collection }) => (
    (<div className='collections-overview'>{
        collection.map(({id, ...otherProps}) => (
            <PreviewCollection key={id} {...otherProps} />
        ))
    }</div>)
);

const mapStateToProps = createStructuredSelector({
    collection: selectCollectionForPreview
})

export default connect(mapStateToProps)(collectionOverview);