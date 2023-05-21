import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const SingleToy = () => {
    const pra = useParams;
    const superman = useLoaderData();
    const {name,price,quantity,rating,seller,sub_category,picture,description,_id,seller_name,seller_email} = superman;
    console.log(superman,pra)
    return (
            <div className="mx-auto w-[70%] flex gap-8 items-center border-2 border-blue-800 my-14">
                <img className="w-96 rounded" src={picture} alt="Shoes" />
                 <div className="">
                 <h2 className="card-title">Name:  {name}</h2>
                <p className='text-2xl my-3'>Seller name:  {seller_name}</p>
                <p className='text-2xl my-3'>Seller email: {seller_email}</p>
                <p className='text-2xl my-3'>price:   {price}$</p>
                <p className='text-2xl'>Rating:   {rating}</p>
                <p className='text-2xl my-3'>Available quantity:   {quantity}</p>
                <p className='text-2xl'>Details: {description}</p>
              </div>
            </div>
    );
};

export default SingleToy;
