import React from 'react';
import { json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
    const events = useLoaderData();

    if (events.isError) {
        return <p>{events.message}</p>;
    }

    return <EventsList events={events} />;
}

export async function eventsLoader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        throw json({ message: 'Could not fetch events 💩' }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export default EventsPage;
