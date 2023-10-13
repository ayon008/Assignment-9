import React from 'react';
import Header from '../Header/Header';
import JobDetail from '../JobDetail/JobDetail';
import './JobDetails.css'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const JobDetails = ({ children }) => {
    return (
        <div>
            <div className='job-details h-[60vh]'>
                <div className='max-w-[90%] mx-auto'>
                    <Header></Header>
                    <JobDetail>{children}</JobDetail>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default JobDetails;