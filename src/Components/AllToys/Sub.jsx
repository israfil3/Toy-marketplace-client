import React from 'react';
import { Link } from 'react-router-dom';

const Sub = ({totalUser}) => {
    const {name,price,quantity,rating,seller,sub_category,picture,description,_id,seller_name,seller_email} = totalUser;
    return (
        <>
           <div className="grid lg:grid-cols-6 justify-between px-10 border items-center py-5 ">
                <h2>{seller_name}</h2>
                <h2>{name}</h2>
                <h2>{sub_category}</h2>
                <h2>{price}</h2>
                <h2>{quantity}</h2>
                <button className='btn'><Link to={`/newToy/${_id}`}>View Details</Link></button>
           </div>
        </>
    );
};

export default Sub;