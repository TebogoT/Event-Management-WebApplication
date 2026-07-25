import { useEffect, useState } from "react";
import "./WelcomeScreen.css";

const WelcomeScreen = () => {
    // Determines whether the welcome screen is visible
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // Wait 3 seconds before hiding the welcome screen
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        // Clean up the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    // If visible becomes false, don't render anything
    if (!visible) return null;

    return (
        <div className="welcome-screen">
            <h1>EVENTIFY</h1>
            <p>Discover Amazing Events</p>
        </div>
    );
};

export default WelcomeScreen;
