import React from 'react';
import logo from '../Addimg/kg.png'

const Section1 = () => {
    return (
    <div className=" w-[60%] mx-auto py-10">
        <h1 className='text-4xl text-center my-5 text-red-500'>BABY PLAY</h1>
        <hr className='my-5 w-48 mx-auto border-green-500'/>
        <div className='flex  mx-auto'>
            <div className="">
                <h2 className='text-3xl text-red-400'>Borrow,Play, <br /> return & Repeat</h2>
                <hr className='my-5 w-48  border-green-500'/>
                <h1>Play with toys and toy cars <br /> on Play Toy TV channel - the best <br /> toys channel for kids. <br /> Here You can find videos for <br /> kids with your favorite toys robocar Poli a.</h1>

                <button className='btn btn-outline btn-error mt-4'>join now</button>
            </div>
            <div className="border rounded-[50%] border-red-700">
               <img className='w-[90%]' src={logo} alt="" />
            </div>
            
          </div>   
          </div>       

    );
};

export default Section1;