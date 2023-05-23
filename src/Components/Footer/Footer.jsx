import React from 'react';
import { FaBeer, FaApple,FaPaypal,FaCcVisa,FaFacebookF,FaGooglePlusG,FaInstagram,FaArrowAltCircleUp,FaRegArrowAltCircleRight} from 'react-icons/fa'
import logo from './My project (1).png'
const Footer = () => {
    return (
        <div className='bg-stone-600 text-white p-10'>
            <div className="lg:grid lg:grid-cols-3  lg:my-10 text-center">
                <div className="text-2xl text-left">
                    <img className='w-[30%]' src={logo} alt="" />
                    <h1 className='mb-10'>GET UPDATES FUN <br /> STUFF YOU PROBABLY WANT <br /> TO NOW ABOUT IN YOUR INBOX</h1>
                    <div className="flex items-center gap-3">
                    <input className='border-2  border-t-0 border-l-0 border-r-0 rounded' type="email" name="email" placeholder='Email address'  /><FaRegArrowAltCircleRight/>
                    </div>
                </div>
                <div className="mx-auto">
                 <h1 className='text-2xl mb-5'>Menu</h1>
                 <h2>Shop All</h2>
                 <h2>About Us</h2>
                 <h3>Communtiy</h3>
                 <h4>(vibes)</h4>

                </div>
                <div className="">
                    <h1 className='text-2xl mb-5'>Support</h1>
                    <h3>Shipping & returns</h3>
                    <h4>help & FEQ</h4>
                    <h4>terms Policy</h4>
                    <h2>Privacy policy</h2>
                    <h3>content</h3>
                </div>
            </div>
          
            <div className="grid grid-cols-3 items-center gap-5">
               <div className="flex gap-4 text-4xl text-yellow-500 text-center">
                    <FaApple></FaApple>
                    <FaPaypal></FaPaypal>
                    <FaCcVisa></FaCcVisa>
               </div>
                <div className="flex gap-4 text-4xl text-yellow-500 ">
                    <FaFacebookF/>
                    <FaGooglePlusG/>
                    <FaInstagram/>
                </div>
               <FaArrowAltCircleUp className='text-4xl text-yellow-500'/>
            </div>
        </div>
    );
};

export default Footer;