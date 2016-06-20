import React from 'react';
import { Link } from 'react-router';

const Nav = (props) => {
  let nav = <nav>Login</nav>;
  if (props.isAuth) {
    nav = (
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    );
  }
  return (nav);
};

export default Nav;

Nav.propTypes = {
  isAuth: React.PropTypes.bool,
};
