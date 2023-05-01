import React from 'react';
import NavigationBar from '../../sharedPage/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginWithPrivateLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginWithPrivateLayout;