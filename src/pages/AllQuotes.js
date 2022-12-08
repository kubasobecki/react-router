import React, { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from './../hooks/use-http';
import { getAllQuotes } from './../lib/api';

const Quotes = () => {
    const { status, data: quotes, error, sendRequest } = useHttp(getAllQuotes);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    return (
        <>
            {status === 'pending' && <LoadingSpinner />}
            {status === 'completed' && quotes.length > 0 && (
                <QuoteList quotes={quotes} />
            )}
            {status === 'completed' && quotes.length < 1 && <NoQuotesFound />}
        </>
    );
};

export default Quotes;
