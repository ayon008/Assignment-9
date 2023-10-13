import React from 'react';
import './Category.css'

const Category = ({ ct }) => {
    const { logo, category_name, availability } = ct;
    return (
        <div>
            <div className='catergory md:py-9 md:ps-4 py-5 ps-4 rounded'>
                <img className='h-[40px] w-[40px]' src={logo} alt="" />
                <div className='mt-9'>
                    <h3 className='md:text-xl text-sm font-semibold'>{category_name}</h3>
                    <p className='text-[#A3A3A3] mt-4 text-xs'>{availability}</p>
                </div>
            </div>
        </div>
    );
};

export default Category;