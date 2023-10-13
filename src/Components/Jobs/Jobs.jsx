import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import { faL } from '@fortawesome/free-solid-svg-icons';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    let lessJobs;

    const [open, setOpen] = useState(true)

    open ? lessJobs = jobs.slice(0, 4) : lessJobs = jobs;

    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h1 className='text-5xl font-semibold'>Featured Jobs</h1>
                <p className='text-[#757575] text-base my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='mt-7 grid grid-cols-2 gap-3'>
                {
                    lessJobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className='text-center'>
                {
                    lessJobs.length === 4 && <button onClick={() => setOpen(false)} className='px-5 py-2 rounded-md font-semibold view-details bg-[#7E90FE] text-white mt-8'>Show All</button>
                }
            </div>
        </div>
    );
};

export default Jobs;