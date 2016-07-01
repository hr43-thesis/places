import React from 'react';
import { connect } from 'react-redux';
import Bots from './Bots.jsx';
// import * as actions from '../../redux/actions/followActions';

class BotsContainer extends React.Component {
  // constructor() {
  //   super();
  //   // this.handleSearchUser = this.handleSearchUser.bind(this);
  //   // this.handleFollowUser = this.handleFollowUser.bind(this);
  // }

  componentWillMount() {
    // this.props.combineUsers();
  }

  render() {
    return (
      <div>
        <Bots
          {...this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bots: state.bots,
});

BotsContainer.propTypes = {
  bots: React.PropTypes.array,
};

export default connect(mapStateToProps)(BotsContainer);
