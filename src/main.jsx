import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { EventProvider } from "./context/EventContext";
import './index.css';
import App from './App.jsx';


createRoot(document.getElementById('root')).render(

  <UserProvider>
    <EventProvider>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </EventProvider>
  </UserProvider>

)
