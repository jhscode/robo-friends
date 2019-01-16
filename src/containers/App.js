import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import CardList from '../components/CardList';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/App.css'
import { setSearchField } from '../actions';


const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  state = {
    robots: [],
  }

  async componentDidMount() {
    // use axios to make api call. changed componentdidmount to async await
    const resp = await axios.get('https://www.hatchways.io/api/assessment/students');
    // update state from the promise return and parsed by axios
    this.setState({ robots: resp.data.students });
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filterRobots = robots.filter(robot => {
      return robot.firstName.toLowerCase().includes(searchField.toLowerCase());
    });
    return ( 
      !robots.length ? 
      <h1>Loading...</h1> :
      (
        <div className="tc">
          <Header onSearchChange={onSearchChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
