import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Bots from './Bots.jsx';
import * as Actions from '../../redux/actions/botsActions';


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

  handleMoving(botId, moving) {
    if (moving) {
      this.props.stopMoving(botId);
    } else {
      this.props.startMoving(botId);
    }
  }

  render() {
    return (
      <div>
        <Bots
          {...this.props}
          handlePost={(botId, posting) => this.handlePost(botId, posting)}
          handleMoving={(botId, moving) => this.handleMoving(botId, moving)}
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
    startPosting: bindActionCreators(Actions.startPosting, dispatch),
    stopPosting: bindActionCreators(Actions.stopPosting, dispatch),
    addBot: bindActionCreators(Actions.addBot, dispatch),
    startMoving: bindActionCreators(Actions.startMoving, dispatch),
    stopMoving: bindActionCreators(Actions.stopMoving, dispatch),
  };
}

BotsContainer.propTypes = {
  startPosting: React.PropTypes.func,
  stopPosting: React.PropTypes.func,
  addBot: React.PropTypes.func,
  startMoving: React.PropTypes.func,
  stopMoving: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(BotsContainer);
