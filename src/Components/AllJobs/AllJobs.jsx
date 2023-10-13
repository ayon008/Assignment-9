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
    }, [data]);

    const [filterJobs, setFilterJobs] = useState([]);
    
    useEffect(() => {
        setFilterJobs(appliedJobs)
    }, [appliedJobs])

    const handler = (e) => {
        const value = e.target.value;
        if (value === 'remote') {
            const remotes = appliedJobs.filter(apj => apj.remote_or_onsite === 'Remote');
            setFilterJobs(remotes)
        }
        else if (value === 'onsite') {
            const onSites = appliedJobs.filter(apj => apj.remote_or_onsite === 'Onsite');
            setFilterJobs(onSites)
        }
    }
    return (
        <div>
            <div className='mt-5 w-fit ms-auto'>
                <select name="" id="" onChange={handler}>
                    <option value="" disabled selected>Filter By</option>
                    <option value="remote">Remote</option>
                    <option value="onsite">OnSite</option>
                </select>
            </div>
            <div className='pb-10'>
                {
                    filterJobs.map(appliedJob => <AppliedJob appliedJob={appliedJob} key={appliedJob.id}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AllJobs;