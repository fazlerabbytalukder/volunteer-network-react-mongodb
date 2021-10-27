

import {
    onAuthStateChanged,
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeAuthentication from '../firebase/firebase.init';



initilizeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = (redirect_url, history) => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                history.push(redirect_url);
            })
            .finally(() => { setIsLoading(false) })
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, []);


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => { setIsLoading(false) })
    }


    return {
        user,
        isLoading,
        setUser,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;