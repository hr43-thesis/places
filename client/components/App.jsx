import React from 'react';
import Nav from './Nav/Nav.jsx';
import Login from './Login/LoginContainer.jsx';

const App = (props) => (
  <div>
    <Nav auth={props.isAuth} />
    {props.isAuth ?
      <main>
        {props.children}
      </main>
      :
      <Login />
    }
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
  isAuth: React.PropTypes.bool,
};

export default App;
