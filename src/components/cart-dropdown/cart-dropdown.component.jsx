import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                ) : (
                    <span className='empty-message'>Your cart is empty.</span>
                )
            }
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);