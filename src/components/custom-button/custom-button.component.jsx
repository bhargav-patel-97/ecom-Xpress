import React from 'react';
import './custom-button.styles.scss';
import { useFlagship, HitType } from "@flagship.io/react-sdk";


const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
    
    //********************[ flagship.io ]********************
    const { getFlag } = useFlagship()
    const flag = getFlag("bg-color","rgb(137, 207, 240)")
    const { hit: fsHit } = useFlagship()

    console.log(flag.getValue());
    //const flagMetadata = flag.metadata;
    //console.log(flagMetadata);

    //********************[ Handling click ]********************
    // function handleClick(){
    //     console.log("Hello!");
    //   };

    return (    
        <button 
            className={`${inverted ? 'inverted' : ''}
                ${ isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}
            {...otherProps}
            style={{
                backgroundColor: flag.getValue()
            }}
            onClick={(e)=>{
                e.preventDefault();
                fsHit.send({
              type: HitType.TRANSACTION, //or "TRANSACTION"
              transactionId: "#12345",
              affiliation: "Cart Value",
              currency: "USD",
              itemCount: 1,
              totalRevenue: 10
            })
            }}
        >
            {children}
        </button>
    );
};

export default CustomButton;