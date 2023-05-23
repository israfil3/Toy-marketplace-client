import React from 'react';
import logo from '../Addimg/My project (2).png'

const Section2 = () => {
    return (
        <div className='w-[70%] bg-gradient-to-r from-purple-500 to-pink-500 px-10 rounded-r-[100px] mx-auto my-7'>
            <div className="flex items-center mx-auto ">
                <div className="from-red-900">
                    <h1 className='text-3xl'>Find your Favorite Toy</h1>
                    <input className='py-6 px-10 my-5 rounded' type="search" name="search" id="" placeholder='search your toys'/> <br />
                    <input className='btn' type="submit" value="Search" />
                </div>
                <img className='w-[500px] mx-5'  src={logo} alt="" />
            </div>
        </div>
    );
};

export default Section2;