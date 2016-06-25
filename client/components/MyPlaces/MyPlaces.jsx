import React from 'react';
import Gmap from '../Map/Gmap.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsCreators from '../../redux/actions/displayPlacesActions';



class MyPlaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: 'style',
      filterType: '',
    };
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

  render() {
    return (
      <div>
        <h1>My Places</h1>
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
            <Gmap filterType={this.state.filterType} />
          </div>
        </div>
      </div>
    );
  }
}

MyPlaces.propTypes = {
  places: React.PropTypes.array,
  displayPlaces: React.PropTypes.array,
  updateDisplayPlaces: React.PropTypes.func,
  updateShowing: React.PropTypes.func,
  hideAll: React.PropTypes.func,
};

const mapStateToProps = (state) => (
  {
    places: state.places,
    displayPlaces: state.displayPlaces,
    favs: state.favs,
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(actionsCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyPlaces);

