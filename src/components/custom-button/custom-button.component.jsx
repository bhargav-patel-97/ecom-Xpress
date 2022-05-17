import React from 'react';
import './custom-button.styles.scss';
import { useFsFlag } from "@flagship.io/react-sdk";


const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
    const flag = useFsFlag("backgroundColor","green")
    const flagExists = flag.exists();
    const flagMetadata = flag.metadata;
    
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