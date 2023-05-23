import React, { useEffect } from 'react';
import logo from '../Addimg/kg.png'
import 'aos/dist/aos.css'
import Aos from 'aos';

const Section1 = () => {
    useEffect(()=>{
        Aos.init({duration:3000});
    },[])
    return (
    <div  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className=" w-[60%] mx-auto py-10">
        <h1 className='text-4xl text-center my-5 text-red-500'>BABY PLAY</h1>
        <hr className='my-5 w-48 mx-auto border-green-500'/>
        <div className='lg:flex  mx-auto'>
            <div className="">
                <h2 className='text-3xl text-red-400'>Borrow,Play, <br /> return & Repeat</h2>
                <hr className='my-5 w-48  border-green-500'/>
                <h1>Play with toys and toy cars <br /> on Play Toy TV channel - the best <br /> toys channel for kids. <br /> Here You can find videos for <br /> kids with your favorite toys robocar Poli a.</h1>

                <button className='btn btn-outline btn-error mt-4'>join now</button>
            </div>
            <div className="border-4 rounded-[50%] border-red-700">
               <img className='lg:w-[90%] sm:my-5' src={logo} alt="" />
            </div>
            
          </div>   
          </div>       

    );
};

export default Section1;