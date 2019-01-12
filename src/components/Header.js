import React, { Fragment } from 'react';
import SearchBox from './SearchBox';

const Header = ({ onSearchChange }) => {
  return (
    <Fragment>
      <h1>Robo Friends Cards</h1>
      <SearchBox onSearchChange={onSearchChange}/>
    </Fragment>
  );
}

export default Header;