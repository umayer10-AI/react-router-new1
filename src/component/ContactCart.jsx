import React from 'react';
import { Link } from 'react-router';

const ContactCart = ({p}) => {
    return (
        <div>
            <div className='space-y-3 p-5 border rounded-2xl h-full'>
                <h2 className='font-bold text-xl'>{p.name}</h2>
                <p className='font-semibold text-green-500'>{p.email}</p>
                <p className='font-semibold line-clamp-3'>{p.body}</p>
                <button className='btn btn-accent'><Link to={`/contact/${p.id}`}>Info</Link></button>
            </div>
        </div>
    );
};

export default ContactCart;