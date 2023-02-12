import React from 'react';

import {
    useParams,
    json,
    useRouteLoaderData,
    redirect
} from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
    const params = useParams();

    const data = useRouteLoaderData('event-detail');

    return (
        <>
            <h1 className="page-title">EventDetailPage</h1>
            <h2 className="page-title">Event ID: {params.id}</h2>
            <EventItem {...data} />
        </>
    );
};

export async function eventDetailLoader({ request, params }) {
    const { id } = params;

    const response = await fetch(`http://localhost:8080/events/${id}`);

    if (!response.ok) {
        throw json(
            { message: 'Could not fetch the event 💩' },
            { status: 500 }
        );
    } else {
        return response;
    }
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
