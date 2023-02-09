import React from 'react';

import EventsList from '../components/EventsList';

const DUMMY_EVENTS = [
    {
        id: 'ab01',
        image:
            'https://images.unsplash.com/photo-1520820446914-04cb9819a6cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVtbXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: "Valentine's Day",
        date: '2023-02-14'
    },
    {
        id: 'ab02',
        image:
            'https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Design Course',
        date: '2023-03-04'
    },
    {
        id: 'ab03',
        image:
            'https://images.unsplash.com/photo-1675866528992-3b9148f23e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Abstract workshop',
        date: '2023-04-24'
    },
    {
        id: 'ab04',
        image:
            'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        title: '1st day at work',
        date: '2023-05-11'
    }
];

const EventsPage = () => {
    return (
        <>
            {/* <h1 className="page-title">EventsPage</h1> */}
            <EventsList events={DUMMY_EVENTS} />
        </>
    );
};

export default EventsPage;
