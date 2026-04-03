import React from 'react';
import { NavLink, useNavigation } from 'react-router';

const Navbar = () => {

    const navigate = useNavigation();

    if(navigate.state === "loading"){
        return <h2 className='text-4xl font-bold text-center my-30'>Loading...</h2>
    }

    return (
        <div className='flex flex-col lg:flex-row justify-between items-center py-4 bg-cyan-800 z-50 sticky top-0 px-10 mb-5'>
            <h2 className='text-2xl font-bold'>Navbar</h2>
            <ul className='flex items-center gap-8 font-semibold'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/product'>Product</NavLink>
            </ul>
        </div>
    );
};

export default Navbar;