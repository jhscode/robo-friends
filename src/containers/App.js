import React, { Component } from 'react';
import axios from 'axios';

import CardList from '../components/CardList';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/App.css'

import 'tachyons';

class App extends Component {
  state = {
    robots: [],
    searchField: ''
  }

  async componentDidMount() {
    // use axios to make api call. changed componentdidmount to async await
    const resp = await axios.get('https://www.hatchways.io/api/assessment/students');
    // update state from the promise return and parsed by axios
    this.setState({ robots: resp.data.students });
  }

  onSearchChange = (event) => {
    this.setState ({
      searchField: event.target.value
    });

  }

  render() {
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.firstName.toLowerCase().includes(searchField.toLowerCase());
    });
    return ( 
      !robots.length ? 
      <h1>Loading...</h1> :
      (
        <div className="tc">
          <Header onSearchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filterRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      )
    );
  }
}

export default App;
