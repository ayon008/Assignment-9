import React from 'react';

const AppliedJob = ({ appliedJob }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description } = appliedJob;
    return (
        <div className='p-5 rounded-lg mt-5' style={{ border: '1px solid #E8E8E8' }}>
            <div className="card card-side bg-base-100 flex md:flex-row flex-col ">
                <figure className="bg-[#F4F4F4] rounded-none py-3 px-5 h-[220px] w-[220px]"><img className='' src={logo} alt="Movie" /></figure>
                <div className="card-body md:ps-6 ps-0">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className='flex items-center gap-3 mt-3'>
                        <button className='text-[#7E90FE] px-5 py-2 rounded-md font-semibold' style={{ border: '2px solid #7E90FE' }}>Full Time</button>
                        <button className='text-[#7E90FE] px-5 py-2 rounded-md font-semibold' style={{ border: '2px solid #7E90FE' }}>{remote_or_onsite}</button>
                    </div>
                    <div className='flex gap-3 items-center text-[#757575] mt-3'>
                        <div className='flex gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <p>{location}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p>Salary: {salary}</p>
                        </div>
                    </div>
                </div>
                <div className='my-auto'>
                    <button className='px-5 py-2 rounded-md font-semibold view-details bg-[#7E90FE] text-white mt-5'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;