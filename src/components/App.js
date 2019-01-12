import React, { Component } from 'react';

import CardList from './CardList';
import Header from './Header';
import '../styles/App.css'

import { robots } from '../robots';

import 'tachyons';

class App extends Component {

  state = {
    robots,
    searchField: ''
  }

  onSearchChange = (event) => {
    this.setState ({
      searchField: event.target.value
    });

  }

  render() {

    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <Header onSearchChange={this.onSearchChange}/>
        <CardList robots={filterRobots} />
      </div>
    );
  }
}

export default App;
