import React from 'react';
import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";


export const EventContext = createContext();

export function EventProvider({ children }) {

    //eventContext to know who is logged in
    const { user } = useContext(UserContext);

    //used to handle the addEvent function
    const [events, setEvents] = useState([]);


    //USED TO LOOK INTO LOCALSTORAGE IF "EVENTS" EXIST, IF IT DOES IT LOADS IT
    useEffect(() => {
        const savedEvents = localStorage.getItem("events");
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

     // Only events belonging to the logged-in user
    const userEvents = user
        ? events.filter(event => event.userId === user.id)
        : [];

    ///FUNCTION TO ADD A NEW EVENT
    function addEvent(newEvent) {

        if (!user) return;

        const eventWithOwner = {
            ...newEvent,
            userId: user.id
        };

        setEvents(previousEvents => [
            ...previousEvents,
            eventWithOwner
        ]);

    }

     //FUNCTION TO DELETE A NEW EVENT
     //filter by "id"
    function deleteEvent(id) {
        setEvents(previousEvents =>
            previousEvents.filter(
                event => !(event.id === id && event.userId === user.id)
            )
        );
    }

    //FUNCTION TO UPDATE EVENTS
   function updateEvent(updatedEvent) {
        setEvents(previousEvents =>
            previousEvents.map(event => {
                if (
                    event.id === updatedEvent.id &&
                    event.userId === user.id
                ) {
                    return {
                        ...updatedEvent,
                        userId: user.id
                    };
                }
                return event;
            })
        );
    }


    return (
        <EventContext.Provider
        value={{
            events: userEvents,
            addEvent,
            deleteEvent,
            updateEvent

        }}
        >
        {children}
        </EventContext.Provider>

    )

}

export default EventContext
