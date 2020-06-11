import styled, { css } from 'styled-components';

const buttonStyles = css`
    color: white;
    background-color: black;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const googleStyles = css`
    width: 240px;
    background-color: #4285f4;
    color: #fff;
    border: none;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

const invertedStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid white;
    }
`;

const applyStyles = (props) => {
    if(props.isGoogleSignIn) {
        return googleStyles;
    }
    return props.inverted ? invertedStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    // min-width: 165px;
    margin: 0.5em;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 1em;  
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${applyStyles}
`;