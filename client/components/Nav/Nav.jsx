import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => (
  <nav>
    <IndexLink to="/">Home</IndexLink>
    {' - '}
    <Link to="/places">Places</Link>
  </nav>
);

export default Nav;
