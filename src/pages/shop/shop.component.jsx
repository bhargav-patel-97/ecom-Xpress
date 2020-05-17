import React from 'react';
import PreviewCollection  from '../../components/preview-collection/preview-collection.component';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect'; 

const ShopPage = ({ collection }) => (
    (<div className='shop-page'>{
        collection.map(({id, ...otherProps}) => (
            <PreviewCollection key={id} {...otherProps} />
        ))
    }</div>)
);

const mapStateToProps = createStructuredSelector({
    collection: selectCollection
})

export default connect(mapStateToProps)(ShopPage);