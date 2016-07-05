import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export default function Auth(Component) {
  class AuthenticatedComponent extends React.Component {
    static propTypes = {
      isAuth: PropTypes.bool,
      dispatch: PropTypes.func.isRequired,
    };

    componentDidMount() {
      this.checkAndRedirect();
    }

    componentDidUpdate() {
      this.checkAndRedirect();
    }

    checkAndRedirect() {
      const { dispatch } = this.props;
      if (!this.props.isAuth) {
        dispatch(push('/welcome'));
      }
    }

    render() {
      return (
        <div className="authenticated">
          {this.props.isAuth ? <Component {...this.props} /> : null}
        </div>
      );
    }
  }

  const mapStateToProps = (state) => ({
    isAuth: state.isAuth,
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
}
