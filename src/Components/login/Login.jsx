import React, { useContext } from 'react';
import { AuthContext } from '../../authProvider/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext)

    const loginUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const email =form.email.value;
        const password = form.password.value
        console.log(email,password);
        login(email,password)
        .then(result=> {
            const user = result.user;
            event.target.reset();
            console.log(user)
        })
        .catch(error => {
            const errorMassage = error.massage
        })
    }
    return (
        <div>  
            <p className='text-center mt-10 text-3xl'>Log In Now</p>
            <hr className='border-4 my-5 w-48 mx-auto border-red-500'/>
          <div className="hero  bg-base-200">
                <div className="card my-20 flex-shrink-0 w-[100%] max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                 <form onSubmit={loginUser}>
                               
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" name="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                 </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;