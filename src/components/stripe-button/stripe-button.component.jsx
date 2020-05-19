import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const pubKey = 'pk_test_nvVN7CQlIIXnBwotOzKWJkSO00i9n7fMsO';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Processed.');
    }

    return (
        <StripeCheckout
            label='Pay now'
            name='Ecom Xpress'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={pubKey}
        /> 
    )
};

export default StripeCheckoutButton;