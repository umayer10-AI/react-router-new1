import React from 'react';
import Navbar from './component/Navbar';
import { Outlet, useNavigate } from 'react-router';

const A1 = () => {

    const nav = useNavigate();

    return (
        <div>
            <Navbar></Navbar>
            <button onClick={() => nav('/')} className='btn btn-primary ml-10'>Back</button>
            <Outlet></Outlet>
        </div>
    );
};

export default A1;