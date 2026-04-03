import React from 'react';
import { useLoaderData, useNavigation } from 'react-router';
import ProductCarts from './ProductCarts';

const Product = () => {

    const p = useLoaderData();
    const navigation = useNavigation();

    if(navigation.state === "loading"){
        return <h2 className="text-center text-4xl font-bold">Loading...</h2>
    }

    return (
        <div className='max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                p.map(v => <ProductCarts key={v.id} p={v}></ProductCarts>)
            }
        </div>
    );
};

export default Product;