import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
    Home,
    Resume,
    About,
    Contact,
    NotFound
} from './views'

const Routes = () => {
    return (
        <Switch>
            <RouteWithLayout
                component={Home}
                exact
                layout={MainLayout}
                path="/"
            />
            <RouteWithLayout
                component={Resume}
                layout={MainLayout}
                path="/resume"
            />
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
            <Redirect to="/not-found" />
        </Switch>
    );
};

export default Routes;
