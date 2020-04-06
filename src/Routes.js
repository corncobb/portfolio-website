import React, { useEffect } from 'react';
import { Switch, Redirect, useLocation } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
    Home,
    Resume,
    About,
    Contact,
    Portfolio,
    PortfolioProject,
    NotFound,
} from './views'

const Routes = () => {
    const { pathname } = useLocation();
    
    // Scroll to the top of the page on every new page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

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
                exact
                component={Portfolio}
                layout={MainLayout}
                path="/portfolio"
            />
            <RouteWithLayout
                component={PortfolioProject}
                layout={MainLayout}
                path="/portfolio/:id"
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
