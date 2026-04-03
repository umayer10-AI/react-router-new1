import React from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { Outlet, useNavigate } from 'react-router';

const A1 = () => {

    const nav = useNavigate();

    return (
        <div>
            <Navbar></Navbar>
            <button onClick={() => nav('/')} className='btn btn-primary ml-10'>Back</button>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default A1;