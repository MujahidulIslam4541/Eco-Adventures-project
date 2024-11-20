/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import app from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const authContext=createContext();
const auth = getAuth(app);

export default function AuthProvider({children}) {

const[user,setUser]=useState(null)
console.log(user)

const createNewUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email,password)
}

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currantUser)=>{
        setUser(currantUser);

        return()=>{
            unsubscribe
        }
    })


},[])



const logOut=()=>{
    return signOut(auth)
};


const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}



const authInfo={
    user,
    setUser,
    createNewUser,
    logOut,
    loginUser
}


  return <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    
  
}
