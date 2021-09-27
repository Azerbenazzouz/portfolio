import React,{useState,useEffect} from 'react';

// import { auth } from './firebase';

export const AuthContext =React.createContext();


export default function AuthProvider(Props){
    //state
    
    // return
    return (
        <AuthContext.Provider value={{}}>
            {Props.children}
        </AuthContext.Provider>
    )
}