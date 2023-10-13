import React from 'react';
import './jobDetail.css';
import { Outlet } from 'react-router-dom';


const JobDetail = ({ children }) => {
    return (
        <div>
            <div className='flex justify-center items-center job-detail'>
                {children}
            </div>
        </div>
    );
};

export default JobDetail;