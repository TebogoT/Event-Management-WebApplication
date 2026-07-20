import React from 'react'
//CREATECONTEXT CREATES SHARED STORAGE SPACE AND STATE IS CURRENT STTE OF DATA 
import { createContext, useState, useEffect } from "react";

//Creates the box that will hold the data
export const UserContext = createContext();

//Provider is a react component that fills in data, children are need so everything can render inside the provider, for data or things to display
export function UserProvider({children}) {

    //Stores current loggedIn user, state only exists while app is running or current state, once refreshing all data or logged-in users won't be remebered
    const [user, setUser] = useState(null)

    //Stores every user that registers
    const [users, setUsers] = useState([]);

    //Load data when the app starts
    useEffect(() => {
        //Loading the current logged-in user , so that once refreshes does not logout, still uses the current getItem, which is current user
        const savedUser = localStorage.getItem("currentUser");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }

        const savedUsers = localStorage.getItem("users");
        if (savedUsers) {
            setUsers(JSON.parse(savedUsers));
        }
        //Dependency array [] means run once only when the application starts
    }, []);


    //Save registered users whenever users changes.
    useEffect(() => {
        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );
        //Dependency array [users] now means run everytime the users state changes
    }, [users]);


    //Save or remove the current user whenever user changes.
    useEffect(() => {
        if (user) {
            localStorage.setItem(
                "currentUser",
                JSON.stringify(user)
            );
        } else {
            localStorage.removeItem("currentUser");
        }

    }, [user]);
 
    //REGISTRATION FUNCTION
    //Function to add newUsers to previousUsers
    function registerUser(newUser) {
        //find() checks if the new registered user email alreasy exists
        const existingUser = users.find(
            user => user.email.toLowerCase() === newUser.email.toLowerCase()
        );
        if (existingUser) {
            return {
                success: false,
                message: "Email already registered."
            };
        }


        setUsers(previousUsers => [
            ...previousUsers,
            newUser
        ]);

        return {
            success: true
        };
    }

    
    //LOGIN FUNCTION
    function login(email, password) {
        const foundUser = users.find(user =>

            //compare stored email and password with email and passwords the user typed (&& and both must be true)
            user.email.toLowerCase() === email.toLowerCase().trim() &&
            user.password === password

        );

        if (!foundUser) {
            return false;
        }
        setUser(foundUser);
        return true;

    }

    //LOGOUT FUNCTION
    function logout() {

        setUser(null);

    }

    
    return (
        <UserContext.Provider 
        value = {{
            user,
            users,
            registerUser,
            login,
            logout
        }}
        >
            {children}
        
        </UserContext.Provider>
    );
}

