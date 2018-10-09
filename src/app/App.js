import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About, Home, Contact, Navbar, Resume, Work } from './containers';
import { ScrollToTop, WorkInfo } from './components';

const AppData = require('./App.json');

// workaround for gh-pages
const basename = process.env.NODE_ENV === 'production' ? '/myportfolio' : null;
const routes = [
  { path: '/', title: 'Home', Component: Home, isVisible: false },
  { path: '/about', title: 'About', Component: About },
  {
    path: '/work',
    title: 'Work',
    Component: Work,
    data: { data: AppData.work },
  },
  {
    path: '/work/:id',
    title: 'Work',
    Component: WorkInfo,
    isVisible: false,
    data: { data: AppData.work },
  },
  { path: '/resume', title: 'Resume', Component: Resume },
  { path: '/contact', title: 'Contact', Component: Contact },
];

const App = () => (
  <Router basename={basename}>
    <Route
      render={() => (
        <div>
          <Navbar links={routes} />

          <ScrollToTop>
            <Switch>
              {routes.map(({ path, Component, data }) => (
                <Route
                  key={path}
                  exact
                  path={path}
                  render={props => <Component {...data} {...props} />}
                />
              ))}
            </Switch>
          </ScrollToTop>
        </div>
      )}
    />
  </Router>
);

export default App;
