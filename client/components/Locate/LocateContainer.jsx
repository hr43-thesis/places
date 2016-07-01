import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as followActions from '../../redux/actions/followActions';
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
    // do the call to my server with follows
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

  render() {
    return (
      <div>
        <h1>My Places</h1>
        <button onClick={() => this.testButton()}>Update locations</button>
        <div className="row">
          <div className="col s4">
            <div className="section">
              Filter will go here
              <button onClick={(e) => { this.handleFilterType(e); }}> Starred </button>
              <button onClick={(e) => { this.handleFilterType(e); }}> Pinned </button>
            </div>
            <div className="divider" />
            <div className="section">
              List will go here
              <ul>
                {this.props.displayPlaces.map((place, index) => (
                  <li onClick={() => this.handleListClick(index)}>
                    {place.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col s8">
            <FriendMap filterType={this.state.filterType} />
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
};

const mapStateToProps = (state) => (
  {
    places: state.places,
    displayPlaces: state.displayPlaces,
    favs: state.favs,
    follows: state.follows,
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(followActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Locate);

