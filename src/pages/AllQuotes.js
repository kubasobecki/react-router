import React from 'react';
import QuoteList from '../components/quotes/QuoteList';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Kuba', text: 'Learning React  is fun!' },
    { id: 'q2', author: 'Max', text: 'Learning JS  is great!' },
    { id: 'q3', author: 'Chris', text: 'Learning Redux  is awesome!' },
    { id: 'q4', author: 'Kate', text: 'Learning TypeScript  is amazing!' }
];

const Quotes = () => {
    return (
        <>
            {DUMMY_QUOTES.length > 0 && <QuoteList quotes={DUMMY_QUOTES} />}
            {DUMMY_QUOTES.length < 1 && <NoQuotesFound />}
        </>
    );
};

export default Quotes;
