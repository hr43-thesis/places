import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as followActions from '../../redux/actions/followActions';
import * as locateActions from '../../redux/actions/locateActions';
import FriendMap from './FriendMap.jsx';

const imgStyle = { height: '100px' };

class Locate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: 'style',
      filterType: '',
    };
    this.props.getLocationInfo.bind(this);
    this.props.loadLocate.bind(this);
    this.intervals = [];
    this.intervals.push(setInterval(() => {
      // console.log('inside setInterval, this is: ', this);
      this.props.getLocationInfo(this.props.follows);
    }, 10000));
  }

  componentWillMount() {
    // update the follows with location here
    this.props.getLocationInfo(this.props.follows);
    setTimeout(() => this.props.loadLocate(this.props.follows), 1000);
    // const self = this;
    // self.props.getLocationInfo(self.props.follows);
    // setTimeout(self.props.loadLocate(self.props.follows), 1500);
  }

  componentWillUnmount() {
    this.intervals.forEach(clearInterval);
  }

  handleFilterType(e) {
    // place holder
    console.log('e: ', e.target.firstChild.nodeValue);
    console.log('this: ', this);
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
            Followed Friends
            <div className="divider" />
            <div className="section">
              <ul>
                {this.props.locate.map((user, index) => (
                  <li onClick={() => this.handleListClick(index, user)}>
                    {user.name}<br /><img alt="loading" style={imgStyle} src={user.imageUrl} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col s8">
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

