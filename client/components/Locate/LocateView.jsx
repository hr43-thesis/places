import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as followActions from '../../redux/actions/followActions';
import * as locateActions from '../../redux/actions/locateActions';
import FriendMap from './FriendGmap.jsx';
import FriendList from './FriendListContainer.jsx';


class Locate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: '',
    };
    this.handleListClick = this.handleListClick.bind(this);

    this.props.getLocationInfo.bind(this);
    this.props.loadLocate.bind(this);
    this.intervals = [];
    this.intervals.push(setInterval(() => {
      this.props.getLocationInfo(this.props.follows);
    }, 5000));
  }

  componentWillMount() {
    // update the follows list with location info
    this.props.getLocationInfo(this.props.follows);
    setTimeout(() => this.props.loadLocate(this.props.follows), 1000);
  }

  componentWillUnmount() {
    this.intervals.forEach(clearInterval);
  }


  handleListClick(index, user) {
    if (user.showInfo) {
      this.props.hideAll();
    } else {
      this.props.hideAll();
      this.props.updateShowing(index);
      // this.updateCenter(user);
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div style={{ paddingTop: '20px' }} className="col s3">
            <span style={{ fontSize: 'medium', fontStyle: 'italic' }}>
              Friends with recently updated location...
            </span>
            <div className="divider" />
            <div className="section">
              <FriendList
                onListClick={this.handleListClick}
                locate={this.props.locate}
              />
            </div>
          </div>
          <div className="col s9">
            {this.props.locate.length > 0 ?
              <FriendMap
                displayUsers={this.props.locate || []}
                hideAll={this.props.hideAll}
                updateShowing={this.props.updateShowing}
                center={this.state.center}
                zoom={this.state.zoom}
                updateCenter={this.updateCenter}
              /> : 'Loading...'}
          </div>
        </div>
      </div>
    );
  }
}

Locate.propTypes = {
  places: React.PropTypes.array,
  displayPlaces: React.PropTypes.array,
  updateDisplayPlaces: React.PropTypes.func,
  updateShowing: React.PropTypes.func,
  hideAll: React.PropTypes.func,
  follows: React.PropTypes.array,
  getLocationInfo: React.PropTypes.func,
  loadLocate: React.PropTypes.func,
  locate: React.PropTypes.array,
};

const mapStateToProps = (state) => (
  {
    places: state.places,
    displayPlaces: state.displayPlaces,
    favs: state.favs,
    follows: state.follows,
    locate: state.locate,
  }
);

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(Object.assign({}, followActions, locateActions), dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Locate);

