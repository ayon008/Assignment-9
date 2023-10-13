import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const AllJobs = () => {
    const data = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('savedJobs'))
        const savedJobs = [];
        for (const id in savedData) {
            const matched = data.find(dt => dt.id === parseInt(id));
            if (matched) {
                savedJobs.push(matched);
            }
        }
        setAppliedJobs(savedJobs);
    }, [data])
    return (
        <div className='pb-10'>
            {
                appliedJobs.map(appliedJob => <AppliedJob appliedJob={appliedJob} key={appliedJob.id}></AppliedJob>)
            }
        </div>
    );
};

export default AllJobs;