import React from 'react';
import Nav from './Nav/Nav.jsx';

const App = (props) => (
  <div>
    <Nav auth={props.isAuth} />
    <main>
      {props.children}
    </main>
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
  isAuth: React.PropTypes.bool,
};

export default App;
