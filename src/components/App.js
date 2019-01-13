import React, { Component } from 'react';
import axios from 'axios';

import CardList from './CardList';
import Header from './Header';
import Scroll from './Scroll';
import '../styles/App.css'

import 'tachyons';

class App extends Component {
  state = {
    robots: [],
    searchField: ''
  }

  async componentDidMount() {
    const resp = await axios.get('https://www.hatchways.io/api/assessment/students');
    console.log(resp);
    this.setState({ robots: resp.data.students });
  }

  onSearchChange = (event) => {
    this.setState ({
      searchField: event.target.value
    });

  }

  render() {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.firstName.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <Header onSearchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filterRobots} />
          </Scroll>
        </div>
      );
    }

  }
}

export default App;
