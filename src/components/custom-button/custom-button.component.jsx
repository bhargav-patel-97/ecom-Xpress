import React from 'react';
import './custom-button.styles.scss';

//––––––––––––––––––––––––––––[ Import Flagship & Mixpanel ]––––––––––––––––––––––––––––//
import { useFlagship, HitType } from "@flagship.io/react-sdk";
import mixpanel from 'mixpanel-browser';


//––––––––––––––––––––––––––––[ Initializing Mixpanel ]––––––––––––––––––––––––––––//
mixpanel.init('1cde3a30d8e169d3da3462b1e58c16a5', {debug: true}); 


const CustomButton = ({ children, isGoogleSignIn, inverted, itemData, ...otherProps }) => {
    
    //––––––––––––––––––––––––––––[ Initializing Flagship & Fetching the flag (Variation) ]––––––––––––––––––––––––––––//
    const { getFlag } = useFlagship()
    const flag = getFlag("bg-color","rgb(137, 207, 240)")
    const { hit: fsHit } = useFlagship()

    return (    
        <button 
        className={`${inverted ? 'inverted' : ''}
        ${ isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}
        {...otherProps}
        style={{
            backgroundColor: flag.getValue()
        }}

        //––––––––––––––––––––––––––––[ Sending Event data to Flagship (HIT) ]––––––––––––––––––––––––––––//
        onClick={()=>{
            fsHit.send({
                type: HitType.TRANSACTION, //or "TRANSACTION"
                transactionId: "#12345",
                affiliation: "Cart Value",
                currency: "USD",
                itemCount: 1,
                totalRevenue: itemData.price
            })

            //––––––––––––––––––––––––––––[ Sending Event data to MixPanel ]––––––––––––––––––––––––––––//
            mixpanel.track('Item Added to Cart', {'Name': itemData.name,"Id":itemData.Id ,'Price': itemData.price});
            }}
        >
            {children}
        </button>
    );
};

export default CustomButton;