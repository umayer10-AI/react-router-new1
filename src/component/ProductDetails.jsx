import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const ProductDetails = () => {

    const p = useLoaderData()
    const navigate = useNavigate()

    return (
        <div className='max-w-[90%] mx-auto'>
            <button onClick={() => navigate('/product')} className='btn btn-warning'>Back</button>
            <div class="relative max-w-md mx-auto bg-[#1A0B2E] border border-gray-800 rounded-[30px] p-8 shadow-2xl overflow-hidden">
    
                <div class="relative mx-auto w-32 h-32 bg-gradient-to-br from-[#F7E93F] via-[#FB09B4] to-[#9100F8] rounded-full flex items-center justify-center mb-6">
                    <p class="text-4xl text-white font-bold uppercase">{p.username[0]}</p>
                    <span class="absolute top-2 -right-2 bg-[#00FF88] text-[#1A0B2E] text-[10px] font-extrabold px-3 py-1 rounded-full">ID: {p.id}</span>
                </div>

                <div class="text-center mb-8">
                    <p class="text-3xl font-bold text-white tracking-tight">{p.name}</p>
                    <p class="text-[#FB09B4] font-medium">@{p.username}</p>
                </div>

                <div class="space-y-4 bg-[#130822] p-5 rounded-2xl border border-gray-800 mb-6">
                    <div class="flex items-center gap-3">
                        <p class="text-[#00FF88]"><i class="fa-regular fa-envelope"></i></p>
                        <p class="text-gray-300 text-sm">{p.email}</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <p class="text-[#00FF88]"><i class="fa-solid fa-phone"></i></p>
                        <p class="text-gray-300 text-sm">{p.phone}</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <p class="text-[#00FF88]"><i class="fa-solid fa-globe"></i></p>
                        <p class="text-gray-300 text-sm">{p.website}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-4 mb-6">
                    <div class="bg-[#130822] p-5 rounded-2xl border border-gray-800">
                        <p class="text-[#F7E93F] font-bold text-sm mb-2 uppercase">Current Address</p>
                        <p class="text-white font-semibold">{p.address.street}, {p.address.suite}</p>
                        <p class="text-gray-400 text-sm">{p.address.city} - {p.address.zipcode}</p>
                        <p class="text-[10px] text-gray-600 mt-2 italic">Geo: {p.address.geo.lat}, {p.address.geo.lng}</p>
                    </div>
                </div>

                <div class="bg-gradient-to-r from-[#2D1B4D] to-[#1A0B2E] p-5 rounded-2xl border border-gray-800">
                    <p class="text-[#FB09B4] font-bold text-sm mb-2 uppercase">Company Details</p>
                    <p class="text-white font-bold text-lg">{p.company.name}</p>
                    <p class="text-gray-300 text-sm italic mb-1">"{p.company.catchPhrase}"</p>
                    <p class="text-gray-500 text-[11px]">{p.company.bs}</p>
                </div>

                <div class="mt-8">
                    <button class="w-full bg-gradient-to-r from-[#F7E93F] via-[#FB09B4] to-[#9100F8] text-white font-bold py-3 rounded-full shadow-lg hover:opacity-90 transition">
                        Connect with {p.username}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;