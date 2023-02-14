import React, { Suspense } from 'react';
import { Await, defer, json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
    const { events } = useLoaderData();

    return (
        <Suspense fallback={<p>Loading events...</p>}>
            <Await
                resolve={events}
                errorElement={
                    <p>
                        Could not fetch the events{' '}
                        <span role="img" aria-label="Poo emoji"></span>💩
                    </p>
                }
            >
                {loadedEvents => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    );
}

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        throw json(
            { message: 'Could not fetch the events 💩' },
            { status: 500 }
        );
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export function eventsLoader() {
    return defer({ events: loadEvents() });
}

export default EventsPage;
