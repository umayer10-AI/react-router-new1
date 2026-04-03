import React from 'react';
import { Link } from 'react-router';

const ProductCarts = ({p}) => {
    return (
        <div className='space-y-2 p-5 border rounded-2xl'>
            <h2 className='font-bold text-xl'>{p.name}</h2>
            <p className='font-semibold text-green-500'>{p.username}</p>
            <p className='font-semibold'>{p.email}</p>
            <p className='font-semibold'>{p.address.zipcode}</p>
            <button className='btn btn-accent'><Link to={`/product/${p.id}`}>Info</Link></button>
        </div>
    );
};

export default ProductCarts;