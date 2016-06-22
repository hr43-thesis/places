import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <nav>
    <Link to="/places">Home</Link>
    <Link to="/search">Search</Link>
  </nav>
);

export default Nav;

// Nav.propTypes = {
//   isAuth: React.PropTypes.bool,
// };
