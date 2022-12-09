import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';

import classes from './components/layout/Layout.module.css';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const SingleQuote = React.lazy(() => import('./pages/SingleQuote'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));

function App() {
    return (
        <Layout>
            <main className={classes.main}>
                <Suspense
                    fallback={
                        <div className="centered">
                            <LoadingSpinner />
                        </div>
                    }
                >
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/quotes" />
                        </Route>
                        <Route path="/quotes" exact>
                            <AllQuotes />
                        </Route>
                        <Route path="/quotes/:quoteId/">
                            <SingleQuote />
                        </Route>
                        <Route path="/new-quote">
                            <NewQuote />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Suspense>
            </main>
        </Layout>
    );
}

export default App;
