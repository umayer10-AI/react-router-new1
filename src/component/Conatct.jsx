import React, { useEffect, useState } from 'react';
import axios from "axios"
import ContactCart from './ContactCart';
import { useNavigation } from 'react-router';

const Conatct = () => {

    const [c, setC] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
        const a = async () => {
            const b = await axios.get("https://jsonplaceholder.typicode.com/comments")
            setC(b.data)
        }
        a()
    },[])

    if(navigation.state === "loading"){
        return <h2 className='text-4xl font-bold text-center my-30'>Loading...</h2>
    }

    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-10'>Contact page</h2>
            <div className='max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    c.map(v => <ContactCart key={v.id} p={v}></ContactCart>)
                }
            </div>
        </div>
    );
};

export default Conatct;