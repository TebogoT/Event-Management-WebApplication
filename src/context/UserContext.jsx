import React from 'react'
//CREATECONTEXT CREATES SHARED STORAGE SPACE AND STATE IS CURRENT STTE OF DATA 
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({children}) {
    const [user, setUser] = useState(null)

    //[]So that many user will be able ro register
    const [users, setUsers] = useState([]);
 
    //Function to add newUsers to previousUsers
    function registerUser(newUser) {
    setUsers(previousUsers => [
        ...previousUsers,
        newUser
    ]);

    }

    const foundUser = users.find(user => {
        return (

            user.email === email &&
            user.password === password

        );
    });

    //function to logout
    function logout() {

        setUser(null);

    }

    


    return (
        <UserContext.Provider 
        value = {{
            user,
            setUser
        }}
        >
            {children}
        
        </UserContext.Provider>
    );
}

export default UserContext
