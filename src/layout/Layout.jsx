import React from 'react';
import NavigationBar from '../sharedPage/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import './Layout.css'


const Layout = () => {
    return (
        <div className='relative'>
              <div className='background-image'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Layout;