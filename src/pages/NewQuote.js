import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const addQuoteHandler = quoteData => {
        const { author, text } = quoteData;
        console.log(author, text);
    };

    return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
