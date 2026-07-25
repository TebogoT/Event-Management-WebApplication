import React from 'react'
import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import CreateEvent from "../components/CreateEvent";
import EventCard from "../components/EventCard";
import "./Dashboard.css";


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
                event={selectedEvent}
                onClose={() => setShowCreateEvent(false)}
            />
            )}

             {events.length === 0 ? (
                <p>No events have been created yet.</p>
            ) : (
                events.map((event) => (
                    <EventCard
                        key={event.id}
                        event={event}
                        onEdit={() => {
                            setSelectedEvent(event);
                            setShowCreateEvent(true);
                        }}
                    />
                ))
            )}
        
        </div>
    )
}

export default Dashboard

