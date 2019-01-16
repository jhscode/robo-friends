import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { searchRobots } from './reducers';

import 'tachyons';

const store = createStore(searchRobots);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
