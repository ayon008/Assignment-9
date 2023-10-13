import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import './JobDescription.css';
import { Button } from 'react-daisyui';
import addToDb from '../../Utilities/Utilities';

const JobDescription = () => {
    const data = useLoaderData();
    const savedId = parseInt(localStorage.getItem('id'));
    console.log(savedId);
    const savedData = data.find(singleData => singleData.id === savedId);
    const { job_title, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information, id } = savedData;

    const apply = id => {
        addToDb(id);
    }

    return (
        <div className='flex items-start mt-20 gap-10 max-w-[90%] mx-auto'>
            <div className='w-[60%]'>
                <p><strong>Job Description:</strong> <span className='text-[#757575]'>{job_description}</span></p>
                <p className='my-10'><strong>Job Responsibility:</strong><span className='text-[#757575]'> {job_responsibility}</span></p>
                <p><strong>Education Requirement:</strong></p>
                <p className='mt-5 text-[#757575]'>{educational_requirements}</p>
                <p className='mt-10'><strong>Experience:</strong></p>
                <p className='mt-5 text-[#757575]'>{experiences}</p>
            </div>
            <div className='w-[40%]'>
                <div className='w-full description rounded-lg p-7'>
                    <h3 className='text-lg font-semibold'>Job Details</h3>
                    <hr className='text-[#9873FF] my-5' />
                    <p className='flex items-center gap-3 mb-3'>
                        <span className='text-[#9873FF]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <div>
                            <span className='text-[#474747] font-semibold text-lg'> Salary :</span> <span className='text-[#757575]'>{salary} (Per Month)</span>
                        </div>
                    </p>
                    <p className='flex items-center gap-3'>
                        <span className='text-[#9873FF]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                            </svg>
                        </span>
                        <div>
                            <span className='text-[#474747] font-semibold text-lg'> Job Title :</span> <span className='text-[#757575]'>{job_title}</span>
                        </div>
                    </p>
                    <h3 className='text-lg font-semibold mt-7'>Contact Information</h3>
                    <hr className='text-[#9873FF] my-5' />
                    <p className='flex items-center gap-3'>
                        <span className='text-[#9873FF]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </span>
                        <div>
                            <span className='text-[#474747] font-semibold text-lg'> Phone :</span> <span className='text-[#757575]'>{contact_information.phone}</span>
                        </div>
                    </p>
                    <p className='flex items-center gap-3 my-3'>
                        <span className='text-[#9873FF]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </span>
                        <div>
                            <span className='text-[#474747] font-semibold text-lg'> Email :</span> <span className='text-[#757575]'>{contact_information.email}</span>
                        </div>
                    </p>
                    <p className='flex items-start gap-3'>
                        <span className='text-[#9873FF]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </span>
                        <div>
                            <span className='text-[#474747] font-semibold text-lg'> Address :</span> <span className='text-[#757575]'>{contact_information.address}</span>
                        </div>
                    </p>
                </div>
                <button className='mt-5 w-full btn-apply text-white py-4 rounded-lg font-semibold text-base' onClick={() => apply(id)}>Apply Now</button>
            </div>
        </div>
    );
};

export default JobDescription;