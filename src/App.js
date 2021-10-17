import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import ArtPage from './pages/Artwork';
import ArtDetailsPage from './pages/ArtDetails.js';
import FavoritesPage from './pages/Favorites';

const App = () => {
    return (
        <>
            <Navigation />
            <main>
                <Switch>
                    <Route
                        path="/artwork/:artId"
                        component={ArtDetailsPage}
                        exact
                    />
                    <Route path="/artwork" component={ArtPage} exact />
                    <Route path="/favorites" component={FavoritesPage} />
                    <Route path="/" component={() => <h1>Hello!</h1>} />
                    <Redirect from="*" to="/artwork" />
                </Switch>
            </main>
        </>
    );
};

export default App;
