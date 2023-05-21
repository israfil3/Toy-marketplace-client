import React from 'react';
import { Link } from 'react-router-dom';
import logo from './My project (1).png';
import './home.css'

const Home = () => {
    return (
       <div className='flex items-center justify-between text-2xl px-12 bg-slate-500'>
            <img className='logo' src={logo} alt="" />
            <div className="nav-area">
                <Link className="btn btn-sm btn-outline btn-error" to={'home'}>Home</Link>
                <Link  className="btn btn-sm btn-outline btn-error" to={'blog'}>Blogs</Link>
                <Link  className="btn btn-sm btn-success" to={'/alltoyes'}>All Toys</Link>
                <Link  className="btn btn-sm btn-outline btn-error">My Toys</Link>
                <Link  className="btn btn-sm btn-outline btn-error" to={'/addtoy'}>Add A Toys</Link>
            </div>
            <div className="">
                <Link  className="btn btn-sm btn-outline btn-success" to={'login'}>Log In</Link>
                <Link  className="btn btn-sm btn-outline btn-success" to={'singUp'}>Sing Up</Link>
            </div>
        </div>
    );
};

export default Home;



