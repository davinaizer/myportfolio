import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { getConfigData } from '../utils/ConfigHelper';
import setConfigAction from '../actions/configAction';

import { ScrollToTop, Spinner, WorkInfo } from '../components';
import { About, Home, Contact, Resume, Work, Navbar } from '../containers';

// remote server base path
const publicPath = process.env.NODE_ENV === 'production' ? '/react-portfolio' : null;
const routes = [
    { path: '/', title: 'Home', Component: Home, isVisible: false },
    { path: '/about', title: 'About', Component: About },
    {
        path: '/work',
        title: 'Work',
        Component: Work,
    },
    {
        path: '/work/:id',
        title: 'Work',
        Component: WorkInfo,
        isVisible: false,
    },
    { path: '/resume', title: 'Resume', Component: Resume },
    { path: '/contact', title: 'Contact', Component: Contact },
];

const Router = () => {
    const dispatch = useDispatch();
    const isDataLoaded = useSelector(state => state.config.isDataLoaded);

    useEffect(() => {
        dispatch(setConfigAction(getConfigData()));
    }, [dispatch]);

    return (
        <BrowserRouter basename={publicPath}>
            {isDataLoaded ? (
                <Route
                    render={() => (
                        <>
                            <Navbar links={routes} />
                            <ScrollToTop>
                                <Switch>
                                    {routes.map(({ path, Component }) => (
                                        <Route
                                            key={path}
                                            exact
                                            path={path}
                                            render={props => <Component {...props} />}
                                        />
                                    ))}
                                </Switch>
                            </ScrollToTop>
                        </>
                    )}
                />
            ) : (
                <Spinner />
            )}
        </BrowserRouter>
    );
};

export default Router;
