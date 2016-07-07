import React from 'react';
// import axios from 'axios';

const Login = (props) => (
  <div>
    <div className="row">
      <div className="topline col s12">
      </div>
      <div className="topNav col s12">
        <img className="logo" alt="" src="images/compass.png" />
        <span className="logoText">Places</span>
      </div>
    </div>
    <div className="row">
      <div className="splash col s12">
        <div className="splashContent col s12">
          <span className="tagline">
            Where will Places take you?
          </span>
          <div className="login">
            <button
              onClick={props.handleLoginClick}
              className="waves-effect waves-light btn"
            >
              Login to Discover
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="row splashDivider">
      <div className="col s12 m4 l4 bullets">
        Tap into your friends’ discoveries
      </div>
      <div className="col s12 m4 l4 bullets">
        Save your favorite places
      </div>
      <div className="col s12 m4 l4 bullets">
        Coordinate location with friends
      </div>
    </div>
    <div className="row">
      <div className="col s12 m4 l4 placeOne">
      </div>
      <div className="col s12 m4 l4 placeTwo">
      </div>
      <div className="col s12 m4 l4 placeThree">
      </div>
    </div>
    <div className="row">
      <div className="col s12 footer">
        Made with love in San Francisco
      </div>
    </div>
  </div>
);

Login.propTypes = {
  handleLoginClick: React.PropTypes.func,
};

export default Login;
