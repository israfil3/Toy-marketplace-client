import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const SingleToy = () => {
    const pra = useParams;
    const superman = useLoaderData();
    const {name, _id,} = superman;
    console.log(superman,pra)
    return (
        <div>
            <h1>hello{name}</h1>
            <h3>he;;p{_id}</h3>
        </div>
    );
};

export default SingleToy;