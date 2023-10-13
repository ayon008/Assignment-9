import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';


const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    })
    return (
        <div>
            <div className='text-center mt-24'>
                <h1 className='text-5xl font-semibold'>Job Category List</h1>
                <p className='text-[#757575] text-base my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-7'>
                {
                    categories.map(ct => <Category key={ct.id} ct={ct}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;