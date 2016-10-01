import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <IndexLink to="/about" activeClassName="active">About</IndexLink>
      {" | "}
      <IndexLink to="/timeline" activeClassName="active">Timeline</IndexLink>

    </nav>
  );
};

export default Header;
