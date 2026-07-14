import React from 'react'
import { useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import './Home.css'

const Home = () => {
  // State to hold the input text it works by using the useState hook to create a state variable inputName and a function setInputName to update it
  const [inputName, setInputName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

 //FUNCTION TO HANDLE LOGIN SUBMISSION IT DOES THIS BY CHECKING IF THE INPUT NAME IS EMPTY OR CONTAINS ONLY WHITESPACE AND SETTING THE LOGGEDIN STATE TO TRUE WHEN THE USER LOGS IN BY ENTERING A VALID USERNAME
  const login = (event) => {
    event.preventDefault();
    // Check if the inputName is empty or contains only whitespace
    if (inputName.trim() === "") {
      return
    }
    // Set the loggedIn state to true when the user logs in by entering a valid username
    setLoggedIn(true); 
  };
  
  //FUNCTION TO HANDLE LOGOUT SUBMISSION
  const logout = () => {
    // Reset the loggedIn state and clear the inputName when logging out by clicking the logout button
    setLoggedIn(false); 
    setInputName(""); 
  }


  return (
    <div className="home-page">
      <NavigationBar />
      <div className="home-container">
        {!loggedIn ? (
          <div className="login-card">
            <form onSubmit={login} className="login-form">
              <h1 className="home-title">Welcome to the Home Page</h1>
              <p className="home-subtitle">Please login</p>

              <input
                type="text"
                id="userName"
                className="userName"
                placeholder="Please enter your username"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />

              <button type="submit" className="submitBtn">
                Login
              </button>
            </form>
          </div>
        ) : (
          <div className="welcome-card">
            <h1>Welcome to the Home Page, {inputName}</h1>
            <p>You are logged in.</p>

            <button onClick={logout} className="logoutBtn">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home
