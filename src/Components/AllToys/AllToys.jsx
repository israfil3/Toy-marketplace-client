// import React from 'react';
import React, { useEffect, useState } from 'react';

const AllToys = () => {
    const [lodeData ,setData] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[]);
    console.log(lodeData)
    return (
        <div>
            <h3>all toys</h3>
        </div>
    );
};

export default AllToys;