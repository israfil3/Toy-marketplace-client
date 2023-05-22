import React, { useContext } from 'react';
import { Link, Route } from 'react-router-dom';
import logo from './My project (1).png';
import './home.css'
import { AuthContext } from '../../authProvider/AuthProvider';

const Home = () => {
    const {user} =useContext(AuthContext);
    console.log(user)
    return (
       <div className='flex items-center justify-between text-2xl px-12 bg-slate-500'>
            <img className='logo' src={logo} alt="" />
            <div className="nav-area flex">
                <Link className="btn btn-sm btn-outline btn-error" to={'home'}>Home</Link>
                <Link  className="btn btn-sm btn-outline btn-error" to={'blog'}>Blogs</Link>
                <Link  className="btn btn-sm btn-success" to={'/alltoyes'}>All Toys</Link>
                {
                    user&& <div className="">
                        <Link  className="btn btn-sm btn-outline btn-error" to={'/mytoy'}>My Toys</Link>
                         <Link  className="btn btn-sm btn-outline btn-error" to={'/addtoy'}>Add A Toys</Link>
                    </div>
                }
                <p>{user?.displayName}</p>
            </div>
            <div className="">
                {
                     user ? <Link  className="btn btn-sm btn-outline btn-success" to={'login'}>Log In</Link>:<Link  className="btn btn-sm btn-outline btn-success" to={'singUp'}>Sing Up</Link>
                }
                   
            </div>
        </div>
    );
};

export default Home;



