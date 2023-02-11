import React from 'react';
import { useRouteError } from 'react-router-dom';
import PageContent from '../components/PageContent';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    let title = 'An error occurred';
    let message = 'Something went very very wrong 💩';

    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }

    if (error.status === 404) {
        title = 'Not found!';
        message = 'Could not find resource';
    }

    return (
        <PageContent title="An error occured">
            <p>{message}</p>
        </PageContent>
    );
};

export default ErrorPage;
