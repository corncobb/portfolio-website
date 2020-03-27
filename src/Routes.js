import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
    Home,
    About,
    Contact,
    NotFound
} from './views'

import {
    Home as HomeView,
} from './views';

const Routes = () => {
    return (
        <Switch>
            <Redirect
                exact
                from="/"
                to="/home"
            />
            <RouteWithLayout
                component={Home}
                exact
                layout={MainLayout}
                path="/home"
            />
            <RouteWithLayout
                component={About}
                exact
                layout={MainLayout}
                path="/about"
            />
            <RouteWithLayout
                component={Contact}
                exact
                layout={MainLayout}
                path="/contact"
            />
            <RouteWithLayout
                component={NotFound}
                exact
                layout={MinimalLayout}
                path="/not-found"
            />
            <Redirect to="/not-found" />
        </Switch>
    );
};

export default Routes;
