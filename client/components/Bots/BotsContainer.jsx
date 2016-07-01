import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Bots from './Bots.jsx';
import { startPosting, stopPosting } from '../../redux/actions/botsActions';


class BotsContainer extends React.Component {
  // constructor() {
  //   super();
  //   // this.handleStart = this.handleStart.bind(this);
  //   // this.handleFollowUser = this.handleFollowUser.bind(this);
  // }

  componentWillMount() {
    // this.props.combineUsers();
  }

  handlePost(botId, posting) {
    if (posting) {
      this.props.stopPosting(botId);
    } else {
      this.props.startPosting(botId);
    }
  }

  render() {
    return (
      <div>
        <Bots
          {...this.props}
          handlePost={(botId, posting) => this.handlePost(botId, posting)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bots: state.bots,

});

function mapDispatchToProps(dispatch) {
  return {
    startPosting: bindActionCreators(startPosting, dispatch),
    stopPosting: bindActionCreators(stopPosting, dispatch),
  };
}

BotsContainer.propTypes = {
  startPosting: React.PropTypes.func,
  stopPosting: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(BotsContainer);
