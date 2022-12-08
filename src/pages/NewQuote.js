import React from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { addQuote } from './../lib/api';

const NewQuote = () => {
    const history = useHistory();

    const { status, data, error, sendRequest } = useHttp(addQuote);

    const addQuoteHandler = async quoteData => {
        await sendRequest(quoteData);
        history.push('/quotes');
    };

    return (
        <>
            {status === 'pending' && <LoadingSpinner />}
            {status !== 'pending' && <QuoteForm onAddQuote={addQuoteHandler} />}
        </>
    );
};

export default NewQuote;
