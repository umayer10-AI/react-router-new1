import React from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router';

const ContactCartDetails = () => {

    const p = useLoaderData()
    const navigation = useNavigate()
    const n = useNavigation()

    if(n.state === "loading"){
        return <h2 className='text-4xl font-bold text-center my-30'>Loading...</h2>
    }

    return (
        <div className='space-y-2 p-5 border rounded-2xl max-w-[80%] mx-auto'>
            <h2 className='font-bold text-xl'>{p.name}</h2>
            <p className='font-semibold text-green-500'>{p.email}</p>
            <p className='font-semibold'>{p.body}</p>
            <div className='flex justify-center'>
                <button onClick={() => navigation(-1)} className='btn btn-error'>Back</button>
            </div>
        </div>
    );
};

export default ContactCartDetails;