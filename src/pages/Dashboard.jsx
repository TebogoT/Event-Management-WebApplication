import React from 'react'
import React, { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import CreateEvent from "../components/CreateEvent";



const Dashboard = () => {

    //CONTROLS STATE, WHETHER "CreateEvent.jsx" CARD IS VISIBLE OR HIDDEN
    const [showCreateEvent, setShowCreateEvent] = useState(false);

    //CONTROLS WHICH EVENT WE ARE EDITING
    const [selectedEvent, setSelectedEvent] = useState(null);

    const { events } = useContext(EventContext);

    return (
        <div>
            <h1>Dashboard</h1>
            <button
                onClick={() => {
                    setSelectedEvent(null);
                    setShowCreateEvent(true)}}
            >
                Add Event
            </button>


            {/*if showCreateEvent is "true" display "CreateEvent,jsx" */}
            {
            showCreateEvent && (
            <CreateEvent
                onClose={() => setShowCreateEvent(false)}
            />
            )}
        
        </div>
    )
}

export default Dashboard

