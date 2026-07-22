import React from 'react'
import { createContext, useState, useEffect } from "react";


export const EventContext = createContext();

export function EventProvider({ children }) {
    //used to handle the addEvent function
    const [events, setEvents] = useState([]);

    //used to handle the deleteEvent function
    const { deleteEvent } = useContext(EventContext);
    <Button
        variant="danger"
        onClick={() => deleteEvent(event.id)}
    >
        Delete
    </Button>

    const { updateEvent } = useContext(EventContext);

    //USED TO LOOK INTO LOCALSTORAGE IF "EVENTS" EXIST, IF IT DOES IT LOADS IT
    useEffect(() => {
        const savedEvents =
            localStorage.getItem("events");
        if (savedEvents) {
            setEvents(JSON.parse(savedEvents));
        }
    }, []);

    //EVERYTIME EVENTS CHANGES, SAVE IT
    useEffect(() => {
        localStorage.setItem(
            "events",
            JSON.stringify(events)
        );
    }, [events]);

    return (
        <EventContext.Provider
        value={{
            events,
            addEvent,
            deleteEvent,
            updateEvent

        }}
        >
        {children}
        </EventContext.Provider>

    )

    ///FUNCTION TO ADD A NEW EVENT
    function addEvent(newEvent) {
        setEvents(previousEvents => [
        ...previousEvents,
        newEvent

    ]);

    }

     //FUNCTION TO ADD A NEW EVENT
     //filter by "id"
    function deleteEvent(id) {
        setEvents(
            previousEvents =>
                previousEvents.filter(
                    event => event.id !== id
                )
        );
    }

    //FUNCTION TO UPDATE EVENTS
    function updateEvent(updatedEvent) {
        setEvents(
            previousEvents =>
                previousEvents.map(event =>
                    //Ternary Operator, replaces an "if statement" to write it shorter
                    event.id === updatedEvent.id
                        ? updatedEvent
                        : event
                )
        );
    }

}


const EventContext = () => {
  return (
    <div>
      
    </div>
  )
}

export default EventContext
