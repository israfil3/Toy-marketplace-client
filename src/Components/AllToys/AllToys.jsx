import React, { useEffect, useState } from 'react';
import Sub from './Sub';


const AllToys = () => {
        const [allUser, setUser] = useState([]);
        useEffect(()=> {
            fetch('https://myservar.vercel.app/superman')
            .then(res => res.json())
            .then(data => setUser(data))
        },[]);
        if(allUser.length > 20){
            alert('Data limit only 20');
            return;
        }
    return (

        <div> 
           <div className="flex justify-between px-10 text-2xl">
              <h1>Seller</h1>
              <h1>Toy Name</h1>
              <h1>Sub-category</h1>
              <h1>Price</h1>
              <h1>Available Quantity</h1>
              <h1>Details</h1>
           </div>
            {
                
                allUser.map(totalUser => <Sub key={totalUser.id} totalUser={totalUser}></Sub> )
            }
        </div>
    );
};

export default AllToys;