import React from 'react';

import { useParams, json, useLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
    const params = useParams();

    const { event } = useLoaderData();

    return (
        <>
            <h1 className="page-title">EventDetailPage</h1>
            <h2 className="page-title">Event ID: {params.id}</h2>
            <EventItem event={event} />
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
        const resData = await response.json();
        return resData;
    }
}

export default EventDetailPage;
