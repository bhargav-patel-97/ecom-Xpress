import React from 'react';
import './custom-button.styles.scss';
import { useFsFlag } from "@flagship.io/react-sdk";


const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
    
    //********************[ flagship.io ]********************
    const flag = useFsFlag("bg-color","rgb(137, 207, 240)")
    //const flagExists = flag.exists();
    console.log(flag.getValue());
    //const flagMetadata = flag.metadata;
    //console.log(flagMetadata);


    return (    
        <button 
            className={`${inverted ? 'inverted' : ''}
                ${ isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}
            {...otherProps}
            style={{
                backgroundColor: flag.getValue()
            }}
        >
            {children}
        </button>
    );
};

export default CustomButton;