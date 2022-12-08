import React, { useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from './../hooks/use-http';
import { getSingleQuote } from './../lib/api';

const SingleQuote = () => {
    // const params = useParams();
    const route = useRouteMatch();
    const { quoteId } = route.params;
    const {
        status,
        data: quote,
        error,
        sendRequest
    } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending')
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    if (error) return <div className="centered">{error}</div>;

    if (status === 'completed' && !quote) return <h1>No quote found 💩</h1>;

    return (
        <>
            <h1>Quote Details</h1>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={route.url} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${route.url}/comments`}>
                        Show Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${route.url}/comments`}>
                <Comments quoteId={quoteId} />
            </Route>
        </>
    );
};

export default SingleQuote;
