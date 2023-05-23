import React, { useEffect } from 'react';
import logo from '../Addimg/My project (2).png'
import 'aos/dist/aos.css'
import Aos from 'aos';

const Section2 = () => {
    useEffect (()=>{
        Aos.init({duration:3000});
    },[])
    return (
        <div data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500" className='w-[70%] bg-gradient-to-r from-purple-500 to-pink-500 px-10 rounded-r-[100px] mx-auto my-7'>
            <div className="lg:flex items-center mx-auto ">
                <div className="from-red-900">
                    <h1 className='text-3xl'>Find your Favorite Toy</h1>
                    <input className='py-6 lg:px-10 my-5 rounded' type="search" name="search" id="" placeholder='search your toys'/> <br />
                    <input className='btn btn-outline btn-success' type="submit" value="Search" />
                </div>
                <img className='lg:w-[500px] lg:mx-5'  src={logo} alt="" />
            </div>
        </div>
    );
};

export default Section2;