import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav className="nav navbar-default navbar-fixed-top">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
        shapit
        </a>
      </div>
      <div className="container-fluid">
        <ul className="nav navbar-default navbar-justified navbar-fixed-bottom">
          <li role="presentation" className="col-xs-4 col-sm-4 col-md-4"><a href="/">Home</a></li>
          <li role="presentation" className="col-xs-4 col-sm-4 col-md-4"><a href="/about">About</a></li>
          <li role="presentation" className="col-xs-4 col-sm-4 col-md-4"><a href="/timeline">Timeline</a></li>
        </ul>

      </div>

      <div className="hidden">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <IndexLink to="/about" activeClassName="active">About</IndexLink>
      {" | "}
      <IndexLink to="/timeline" activeClassName="active">Timeline</IndexLink>
      </div>

    </nav>

  );
};




export default Header;
