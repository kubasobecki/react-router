import React from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const history = useHistory();

    const addQuoteHandler = quoteData => {
        const { author, text } = quoteData;
        console.log(author, text);

        history.push('/quotes');
    };

    return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
