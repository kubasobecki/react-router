import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';

const EditEventPage = () => {
    const data = useRouteLoaderData('event-detail');
    console.log(data);

    return <EventForm {...data} />;
};

export default EditEventPage;
