import React from 'react';
import logo1 from '../../assets/icons/social.png'

const Footer = () => {
    return (
        <div className='bg-black mt-20 py-16'>
            <div className='max-w-[90%] mx-auto grid grid-cols-5 gap-14'>
                <div className='text-white'>
                    <h3 className='text-2xl'>Career Hub</h3>
                    <p className='my-7' style={{ color: 'rgba(255, 255, 255, 0.70)' }}>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div>
                        <img src={logo1} alt="" />
                    </div>
                </div>
                <div>
                    <h3 className='text-lg text-white'>Company</h3>
                    <ul style={{ color: 'rgba(255, 255, 255, 0.70)' }}>
                        <li className='my-4'>About Us</li>
                        <li>Latest News</li>
                        <li className='my-4'>Career</li>
                        <li>Work</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg text-white'>Product</h3>
                    <ul style={{ color: 'rgba(255, 255, 255, 0.70)' }}>
                        <li className='my-4'>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li className='my-4'>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg text-white'>Support</h3>
                    <ul style={{ color: 'rgba(255, 255, 255, 0.70)' }}>
                        <li className='my-4'>Help Desk</li>
                        <li>Sales</li>
                        <li className='my-4'>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg text-white'>Contact</h3>
                    <ul style={{ color: 'rgba(255, 255, 255, 0.70)' }}>
                        <li className='my-4'>524 Broadway , NYC</li>
                        <li>+1 777 - 978 - 5570</li>
                    </ul>
                </div>
            </div>
            <hr className='text-white bg-white my-10' />
            <div className='flex items-center justify-between max-w-[90%] text-xs mx-auto' style={{ color: 'rgba(255, 255, 255, 0.70)' }}>
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by <strong>CareerHub</strong></p>
            </div>
        </div>
    );
};

export default Footer;