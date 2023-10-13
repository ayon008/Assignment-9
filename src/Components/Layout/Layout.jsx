import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import './Layout.css'
import Categories from '../Categories/Categories';
import Job from '../Jobs/Jobs';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <div className='h-screen layout'>
            <div className='max-w-[90%] mx-auto'>
                <Header></Header>
                <Banner></Banner>
                <Categories></Categories>
                <Job></Job>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;