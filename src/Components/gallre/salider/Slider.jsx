// import React from 'react';
import './slider.css'
import React, { Component } from 'react'
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'

import img1 from '../all_img/img1.jpg'
import img2 from '../all_img/img2.jpg';
import img3 from '../all_img/img3.jpg';
import img4 from '../all_img/img4.jpg';
import img5 from '../all_img/img5.jpg';
import img6 from '../all_img/img6.jpg';
import img7 from '../all_img/img7.jpg';
import img8 from '../all_img/img8.jpg';
import img9 from '../all_img/img9.jpg';

const Slider = () => {
    return (
        <>  
            <h1 className='text-center text-4xl mt-6 font-head'>Img-Gallery</h1>
            <hr className='h-tag' />
            <SlideshowLightbox className="container grid grid-cols-3 gap-8 dk">
                    <img className="w-full rounded" src={img1} />
                    <img className="w-full rounded" src={img2} />
                    <img className="w-full rounded" src={img3} />
                    <img className="w-full rounded" src={img4} />
                    <img className="w-full rounded" src={img5} />
                    <img className="w-full rounded" src={img6} />
                    <img className="w-full rounded" src={img7} />
                    <img className="w-full rounded" src={img8} />
                    <img className="w-full rounded" src={img9} />
         </SlideshowLightbox> 
        
        </>
    );
};

export default Slider;