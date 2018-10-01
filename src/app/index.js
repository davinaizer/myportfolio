import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// IMAGE BULK LOAD
var cache = {};
function importAll(r) {
  r.keys().forEach(key => (cache[key] = r(key)));
}
importAll(require.context('./img/', true, /\.(ico|png|jp(e*)g|svg)$/));
// -----------

ReactDOM.render(<App />, document.getElementById('app'));
