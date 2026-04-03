import React from 'react';
import Navbar from './component/Navbar';
import { Outlet } from 'react-router';

const A1 = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default A1;