import React from 'react';
import { Navbar, Button, Dropdown, Menu } from 'react-daisyui';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div className='h-[100px]'>
            <Navbar className='h-full'>
                <Navbar.Start>
                    <Dropdown>
                        <Button tag="label" color="ghost" tabIndex={0} className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </Button>
                        <Dropdown.Menu tabIndex={0} style={{ color: ' #757575' }} className="w-52 menu-sm mt-3 z-[1]">
                            <Dropdown.Item>Statistics</Dropdown.Item>
                            <Dropdown.Item>Applied Job</Dropdown.Item>
                            <Dropdown.Item>Blog</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link to={'/'} className="btn btn-ghost normal-case text-2xl p-0">Career Hub</Link>
                </Navbar.Start>
                <Navbar.Center className="hidden lg:flex">
                    <Menu horizontal className="px-1" style={{ color: ' #757575' }}>
                        <Menu.Item>
                            <Link to={'/stat'}>Statistics</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={'/jobs'}>Applied Job</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={'/blog'}>Blog</Link>
                        </Menu.Item>
                    </Menu>
                </Navbar.Center>
                <Navbar.End>
                    <Button tag='a' className='btn-apply text-xs text-white'>Start Applying</Button>
                </Navbar.End>
            </Navbar>
        </div>
    );
};

export default Header;