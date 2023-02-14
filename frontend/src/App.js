import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import EventsLayout from './pages/EventsLayout';
import HomePage from './pages/Home';
import EventsPage, { eventsLoader } from './pages/Events';
import EventDetailPage, {
    deleteEventAction,
    eventDetailLoader
} from './pages/EventDetail';
import EditEventPage from './pages/EditEvent';
import NewEventPage from './pages/NewEvent';
import ErrorPage from './pages/ErrorPage';
import { eventAction } from './components/EventForm';
import NewsletterPage, { newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'events',
                element: <EventsLayout />,
                children: [
                    {
                        index: true,
                        element: <EventsPage />,
                        loader: eventsLoader
                    },
                    {
                        path: 'new',
                        element: <NewEventPage />,
                        action: eventAction
                    },
                    {
                        path: ':id',
                        id: 'event-detail',
                        loader: eventDetailLoader,
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage />,
                                action: deleteEventAction
                            },
                            {
                                path: 'edit',
                                element: <EditEventPage />,
                                action: eventAction
                            }
                        ]
                    }
                ]
            },
            {
                path: 'newsletter',
                element: <NewsletterPage />,
                action: newsletterAction
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
