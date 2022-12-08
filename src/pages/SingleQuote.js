import React from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Kuba', text: 'Learning React  is fun!' },
    { id: 'q2', author: 'Max', text: 'Learning JS  is great!' },
    { id: 'q3', author: 'Chris', text: 'Learning Redux  is awesome!' },
    { id: 'q4', author: 'Kate', text: 'Learning TypeScript  is amazing!' }
];

const SingleQuote = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    const route = useRouteMatch();
    console.log(route);

    if (!quote) return <h1>No quote found 💩</h1>;

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
                <Comments />
            </Route>
        </>
    );
};

export default SingleQuote;
