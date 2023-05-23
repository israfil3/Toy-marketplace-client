import { applyActionCode } from 'firebase/auth';
import React from 'react';
import { json } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToy = () => {
    const notify = () => toast("Add to sus",{
        position: toast.POSITION.TOP_CENTER
    });

    const addToy = (event) => {
        event.preventDefault()
        const form = event.target;
        const picture = form.url.value;
        const name = form.name.value;
        const rating = form.rating.value;
        const seller_name = form.seller.value;
        const seller_email = form.email.value;
        const sub_category = form.subcategory.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const addedToy = {picture,name,seller_email,sub_category,price,quantity,description,seller_name,rating}
        fetch('https://myservar-israfil3.vercel.app/addToy',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(addedToy)
        })
        .then(res =>res.json)
        .then(data => {
            const user = data.user;
            alert('CRUD Add Successfully')
            event.target.reset()
            
        })
    }
    return (
        <div>
            <form onSubmit={addToy} className='form-area text-center border-4 border-red-600'>
            <h1 className='text-center text-2xl my-5'>Add Your toys</h1>
            <hr className='border-4 my-5 w-48 mx-auto border-green-500'/>
                <input className='mr-3' type="url" name="url" id="url"  placeholder='Entry Your Photo Url' required/>
                <input  type="text" name="name" id="name"  placeholder='Entry Your Name' required/><br />
                <input className='mr-3' type="text" name="seller" id="seller"  placeholder='Seller name'/>
                <input type="email" name="email" id="email"  placeholder='Seller Email' required/><br />
                <input className='mr-3' type="text" name="rating" id="rating"  placeholder='Rating'/>
                <input className='mr-3' type="text" name ="subcategory" placeholder='sub-category' required/> <br />
                <input type="text" name="price"  placeholder='Price'/>
                <input className='ml-3' type="text" name="quantity"  placeholder='quantity' required/><br />
                <input className='p-40' type="text" name="description"  placeholder='description' required/><br />
                <input onClick={notify} className='btn my-5 btn-outline btn-error' type="submit" value="Submit" />
                <ToastContainer />
            </form>
        </div>
    );
};

export default AddToy;