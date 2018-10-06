import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About, Home, Contact, Navbar, Resume, Work } from './containers';
import { ScrollToTop } from './components';

// workaround for gh-pages
const basename = process.env.NODE_ENV === 'production' ? '/myportfolio' : null;
const routes = [
  { path: '/', title: 'Home', Component: Home },
  { path: '/about', title: 'About', Component: About },
  { path: '/work', title: 'Work', Component: Work },
  { path: '/resume', title: 'Resume', Component: Resume },
  { path: '/contact', title: 'Contact', Component: Contact },
];

const App = () => (
  <Router basename={basename}>
    <Route
      render={() => (
        <div>
          <Navbar links={routes.slice(1)} />

          <ScrollToTop>
            <Switch>
              {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path} component={Component} />
              ))}
            </Switch>
          </ScrollToTop>
        </div>
      )}
    />
  </Router>
);

export default App;
