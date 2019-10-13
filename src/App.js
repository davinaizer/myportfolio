import React from 'react';
import { Provider } from 'react-redux';

import Router from './routes/Router';
import store from './store/store';

const App = () => (
    <Provider store={store}>
        <Router />
    </Provider>
);

export default App;
