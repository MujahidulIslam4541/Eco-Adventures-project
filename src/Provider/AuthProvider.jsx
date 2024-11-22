/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import app from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";



export const authContext = createContext();
const auth = getAuth(app);

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createNewUser = (email, password) => {


        
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            return  toast.error('Must be One Uppercase,one lowercase and must be length 6 character');
            
        }


        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (updated) => {
        return updateProfile(auth.currentUser, updated);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currantUser) => {
            setUser(currantUser);
            setLoading(false)

            return () => {
                unsubscribe
            }
        })


    }, [])



    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    };


    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }





    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        loginUser,
        loading,
        updateUserProfile,
    }


    return <authContext.Provider value={authInfo}>{children}</authContext.Provider>


}
