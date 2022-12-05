import React from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const SingleQuote = () => {
    const params = useParams();
    console.log(params);

    return (
        <>
            <h1>Quote ID: {params.quoteId}</h1>
            <Route path={`/quotes/${params.quoteId}/comments`} exact>
                <Comments />
            </Route>
        </>
    );
};

export default SingleQuote;
