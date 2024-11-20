/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import app from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const authContext=createContext();
const auth = getAuth(app);

export default function AuthProvider({children}) {

const[user,setUser]=useState(null)
const [loading,setLoading]=useState(true)


const createNewUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email,password)
}

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currantUser)=>{
        setUser(currantUser);
        setLoading(false)

        return()=>{
            unsubscribe
        }
    })


},[])



const logOut=()=>{
    setLoading(true)
    return signOut(auth)
};


const loginUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
}



const authInfo={
    user,
    setUser,
    createNewUser,
    logOut,
    loginUser,
    loading
}


  return <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    
  
}
