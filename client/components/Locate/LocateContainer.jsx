import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as followActions from '../../redux/actions/followActions';
import * as locateActions from '../../redux/actions/locateActions';
import FriendMap from './FriendMap.jsx';

class Locate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: 'style',
      filterType: '',
    };
  }

  componentWillMount() {
    // do the call to my server with follows?
  }

  handleFilterType(e) {
    // place holder
    console.log('e: ', e.target.firstChild.nodeValue);
    console.log('this: ', this);
  }

  handleListClick(index) {
    console.log(index);
    this.props.updateShowing(index);
  }

  testButton() {
    this.props.getLocationInfo(this.props.follows);
  }

  buildLocate() {
    console.log('buildLocate clikced!');
    console.log(this.props.follows);
    console.log('typeof loadLocate', typeof this.props.loadLocate);
    this.props.loadLocate(this.props.follows);
  }

  render() {
    return (
      <div>
        <h1>Locate Friends</h1>
        <button onClick={() => this.testButton()}>Update locations</button>
        <button onClick={() => this.buildLocate()}>Load actual location</button>
        <div className="row">
          <div className="col s4">
            <div className="divider" />
            <div className="section">
              List will go here
            </div>
          </div>
          <div className="col s8">
            <FriendMap
              displayUsers={this.props.locate || []}
              hideAll={this.props.hideAll}
              updateShowing={this.props.updateShowing}
            />
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

