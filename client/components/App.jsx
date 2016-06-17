import React from 'react';
import Nav from './Nav/Nav.jsx';
// import Home from './Home/HomeContainer';

const App = (props) => (
  <div>
    <Nav />
    <main>
      {props.children}
    </main>
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
