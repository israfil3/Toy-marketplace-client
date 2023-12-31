import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/Firebase.config';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
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
    };
    const googleSing = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)
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
        login,
        googleSing
    }
    return (
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;