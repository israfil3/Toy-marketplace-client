import React from 'react';
import { json } from 'react-router-dom';

const AddToy = () => {

    const addToy = (event) => {
        event.preventDefault()
        const form = event.target;
        const picture = form.url.value;
        const name = form.name.value;
        const seller_name = form.seller.value;
        const seller_email = form.email.value;
        const sub_category = form.subcategory.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const addedToy = {picture,name,seller_email,sub_category,price,quantity,description,seller_name}
        console.log( addedToy)
        fetch('https://myservar-israfil3.vercel.app/addToy',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(addedToy)
        })
        .then(res =>res.json)
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
            <form onSubmit={addToy} className='form-area text-center border-4 border-red-600'>
            <h1 className='text-center text-2xl my-5'>Add Your toys</h1>
            <hr className='border-4 my-5 w-48 mx-auto border-green-500'/>
                <input className='mr-3' type="url" name="url" id="url"  placeholder='Entry Your Photo Url' required/>
                <input  type="text" name="name" id="name"  placeholder='Entry Your Name' required/><br />
                <input className='mr-3' type="text" name="seller" id="seller"  placeholder='Entry Seller Name'/>
                <input type="email" name="email" id="email"  placeholder='Entry your Email' required/><br />
                <input className='mr-3' type="text" name ="subcategory" placeholder='sub-category' required/>
                <input type="text" name="price"  placeholder='Price'/><br />
                <input className='mr-3' type="text" name="quantity"  placeholder='quantity' required/>
                <input className='py-20' type="text" name="description"  placeholder='description' required/><br />

              
                <input className='btn my-5 btn-outline btn-error' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddToy;