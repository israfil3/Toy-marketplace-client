import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/Firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true)

    const createUser = (email,password)=> {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const login =(email,password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,realUSer => {
            setUser(realUSer);
            setLoader(false)
        });
        return() => {
            return unsubscribe();
        }
    },[])
    const userInfo = {
        user,
        loader,
        createUser,
        login
    }
    return (
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;