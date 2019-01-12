import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import { robots } from '../robots';

import 'tachyons';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CardList robots={robots} />
      </Fragment>
    );
  }
}

export default App;
