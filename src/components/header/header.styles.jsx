import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    padding: 2em;
`;

export const LogoContainer = styled(Link)`
    height: 90%;
    width: 50px;
`;
 
export const OptionsContainer = styled.div`
    width: 70%;
    font-size: 1.1em;
    margin-top: 1.2em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    color: #626767;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
    color: #3b3b3b;
    font-weight: 700;
    }
`;