import { createContext, useEffect, useState } from "react";
import { userObserver } from '../auth/firebase';


export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(false);
    console.log("Provider currentUser => ", currentUser);

    //! sessionStorage'dan user verisini al ve currentUser'a tanımla;
    useEffect(()=> {
        // setCurrentUser(JSON.parse(sessionStorage.getItem('user')));  
        userObserver(setCurrentUser);
    }, []);
  
    return (
    <AuthContext.Provider value={{currentUser}}>
        { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;