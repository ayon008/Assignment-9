import React from 'react';
import { Button } from 'react-daisyui';
import image from '../../assets/images/user.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='flex items-center justify-center banner'>
            <div className='flex items-center justify-between w-full h-fit'>
                <div className='w-1/2 text-left'>
                    <h1 className='md:text-7xl text-3xl font-semibold'>One Step <br /> Closer To Your <br /><span className='text-[#7E90FE]'>Dream Job</span></h1>
                    <p className='md:text-lg text-xs my-5 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <Button className='btn-apply text-white'>Get Started</Button>
                </div>
                <div className='w-1/2'>
                    <img src={image} className='w-[90%] ms-auto h-auto' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;