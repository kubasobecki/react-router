import React from 'react';
import { Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Welcome = () => {
    const params = useParams();
    console.log(params);

    return (
        <section>
            <h1>The Welcome Page</h1>
            <Route path="/welcome/new-user">
                <p>Hello user</p>
            </Route>
        </section>
    );
};

export default Welcome;
