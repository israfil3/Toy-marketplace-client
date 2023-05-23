import React, { useContext } from 'react';
import { AuthContext } from '../../authProvider/AuthProvider';

const MyToy = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1>m!!!!!!!!!!!!!</h1>
        </div>
    );
};

export default MyToy;