import React, { Suspense } from 'react';

import {
    useRouteLoaderData,
    json,
    redirect,
    defer,
    Await
} from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

const EventDetailPage = () => {
    const { event, events } = useRouteLoaderData('event-detail');

    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <Await
                    resolve={event}
                    errorElement={<p>Could not load the event!</p>}
                >
                    {loadedEvent => <EventItem event={loadedEvent} />}
                </Await>
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
                <Await
                    resolve={events}
                    errorElement={<p>Could not load events!</p>}
                >
                    {loadedEvents => <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>
        </>
    );
};

async function loadEvent(id) {
    const response = await fetch(`http://localhost:8080/events/${id}`);

    if (!response.ok) {
        throw json(
            { message: 'Could not fetch the event 💩' },
            { status: 500 }
        );
    } else {
        const resData = await response.json();
        return resData.event;
    }
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

export async function eventDetailLoader({ request, params }) {
    const { id } = params;
    return defer({
        event: loadEvent(id),
        events: loadEvents()
    });
}

export async function deleteEventAction({ request, params }) {
    const { id } = params;

    const response = await fetch(`http://localhost:8080/events/${id}`, {
        method: request.method
    });

    if (!response.ok) {
        throw json(
            { message: 'Could not delete the event 💩' },
            { status: 500 }
        );
    } else {
        return redirect('/events');
    }
}

export default EventDetailPage;
