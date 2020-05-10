import React from 'react';
import './authenticate.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const Authenticate = () => (
    <div className='authenticate'>
        <SignIn />
        <SignUp />
    </div>
);

export default Authenticate;