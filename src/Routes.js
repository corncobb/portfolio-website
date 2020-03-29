import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
    Home,
    About,
    Contact,
    NotFound
} from './views'

const Routes = () => {
    return (
        <Switch>
            <RouteWithLayout
                component={About}
                layout={MainLayout}
                path="/about"
            />
            <RouteWithLayout
                component={Contact}
                layout={MainLayout}
                path="/contact"
            />
            <RouteWithLayout
                component={NotFound}
                layout={MinimalLayout}
                path="/not-found"
            />
            <RouteWithLayout
                exact
                component={Home}
                layout={MainLayout}
                path="/"

            />
            {/* <Route
                component={Home}
                exact
                path="/"
            /> */}
            <Redirect to="/not-found" />
        </Switch>
    );
};

export default Routes;
