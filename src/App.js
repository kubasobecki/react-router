import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import SingleQuote from './pages/SingleQuote';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';

import classes from './components/layout/Layout.module.css';

function App() {
    return (
        <Layout>
            <main className={classes.main}>
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
            </main>
        </Layout>
    );
}

export default App;
