import React, { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from './../hooks/use-http';
import { getAllQuotes } from './../lib/api';

const Quotes = () => {
    const {
        status,
        data: quotes,
        error,
        sendRequest
    } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending')
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );

    if (error) return <div className="centered focused">{error}</div>;

    if (status === 'completed' && (!quotes || quotes.length === 0))
        return <NoQuotesFound />;

    return <QuoteList quotes={quotes} />;
};

export default Quotes;
