import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from './My project (1).png';
import './home.css'
import { AuthContext } from '../../authProvider/AuthProvider';

const Home = () => {
    const {user} =useContext(AuthContext);
    return (
        <>

        <div className="navbar bg-base-100 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <p className='my-5'>{user?.displayName}</p>
                <Link className="btn btn-sm btn-outline btn-error" to={'home'}>Home</Link >
                <Link  className="btn btn-sm btn-outline btn-error my-4" to={'blog'}>Blogs</Link>
                <Link className="btn btn-sm btn-success mb-3" to={'/alltoyes'}>All Toys</Link>
                {
                    user&& <div className="flex">
                        <Link  className="btn btn-sm btn-outline btn-error" to={'/mytoy'}>My Toys</Link>
                         <Link className="btn btn-sm btn-outline btn-error" to={'/addtoy'}>Add A Toys</Link>
                    </div>
                }

                </div>
                
                </div>
                <img className='logo' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex gap-6">
            <Link className="btn btn-sm btn-outline btn-error" to={'home'}>Home</Link >
                <Link  className="btn btn-sm btn-outline btn-error" to={'blog'}>Blogs</Link>
                <Link className="btn btn-sm btn-success" to={'/alltoyes'}>All Toys</Link>
                {
                    user&& <div className="flex gap-5">
                        <Link  className="btn btn-sm btn-outline btn-error" to={'/mytoy'}>My Toys</Link>
                         <Link className="btn btn-sm btn-outline btn-error" to={'/addtoy'}>Add A Toys</Link>
                    </div>
                }
                 <p>{user?.displayName}</p>
            </div>
            <div className="navbar-end">
            <div >
                {
                     user ? <Link className="btn btn-sm btn-outline btn-success" to={'login'}>Log In</Link>:<Link  className="btn btn-sm btn-outline btn-success" to={'singUp'}>Sing Up</Link>
                }
                   
            </div>

            </div>
            <Link to={'/*'}></Link>
            </div>
        </>
    );
};

export default Home;



{/* <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                    <a className="justify-between">
                        Parent
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                    </a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul> */}





                       {/* <div className='lg:flex lg:items-center justify-between text-2xl px-12 bg-slate-500'>
            <img className='logo' src={logo} alt="" />
            <div className="nav-area flex">
                <Link className="btn btn-sm btn-outline btn-error" to={'home'}>Home</Link >
                <Link  className="btn btn-sm btn-outline btn-error" to={'blog'}>Blogs</Link>
                <Link className="btn btn-sm btn-success" to={'/alltoyes'}>All Toys</Link>
                {
                    user&& <div className="">
                        <Link  className="btn btn-sm btn-outline btn-error" to={'/mytoy'}>My Toys</Link>
                         <Link className="btn btn-sm btn-outline btn-error" to={'/addtoy'}>Add A Toys</Link>
                    </div>
                }
                <p>{user?.displayName}</p>
            </div>
            <div className="">
                {
                     user ? <Link className="btn btn-sm btn-outline btn-success" to={'login'}>Log In</Link>:<Link  className="btn btn-sm btn-outline btn-success" to={'singUp'}>Sing Up</Link>
                }
                   
            </div>
            <Link to={'/*'}></Link>

        </div> */}
        {/* 888888888888888888888888888888888888888888888888888888 */}