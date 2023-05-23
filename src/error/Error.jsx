import React from 'react';
import logo from './best-404-page-design-10.jpg'
import { Link } from 'react-router-dom';

 const Error = () => {
    return (
        
        <div className='mx-auto w-[90%]'>
            <img className='mx-auto' src={logo} alt="" />
            <Link to={'/*'}></Link>
        </div>
    );
};

export default Error;