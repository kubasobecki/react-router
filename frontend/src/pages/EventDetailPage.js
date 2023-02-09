import React from 'react';

import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
    const params = useParams();

    return (
        <>
            <h1 className="page-title">EventDetailPage</h1>
            <h2 className="page-title">Event ID: {params.id}</h2>
        </>
    );
};

export default EventDetailPage;
