import React from 'react';
import Gmap from './Gmap.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsCreators from '../../redux/actions/displayPlacesActions';
import PlaceList from './PlaceListContainer.jsx';

class MyPlaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterBy: 'Pinned',
    };
    this.handleListClick = this.handleListClick.bind(this);
  }
  componentWillMount() {
    this.props.updateDisplayPlaces(this.props.places, this.props.userId, 'Pinned');
  }

  handleFilterType(e) {
    // place holder
    const filter = e.target.firstChild.nodeValue;
    // this.setState({ filterType: e.target.firstChild.nodeValue });
    this.setState({ filterBy: filter });
    this.props.updateDisplayPlaces(this.props.places, this.props.userId,
      filter, this.props.favs);
  }

  handleListClick(index, place) {
    if (place.showInfo) {
      this.props.hideAll();
    } else {
      this.props.hideAll();
      this.props.updateShowing(index);
    }
  }

  render() {
    return (
      <div>
        <h1>My Places</h1>
        <div className="row">
          <div className="col s4">
            <div className="section">
              <button onClick={(e) => { this.handleFilterType(e); }}>Starred</button>
              <button onClick={(e) => { this.handleFilterType(e); }}>Pinned</button>
            </div>
            <div className="divider" />
            <div className="section">
              <PlaceList
                onListClick={this.handleListClick}
                places={this.props.displayPlaces}
              />
            </div>
          </div>
          <div className="col s8">
            <Gmap
              displayPlaces={this.props.displayPlaces}
              hideAll={this.props.hideAll}
              updateShowing={this.props.updateShowing}
              filterType={this.state.filterBy}
            />
          </div>
        </div>
      </div>
    );
  }
}

MyPlaces.propTypes = {
  places: React.PropTypes.array,
  displayPlaces: React.PropTypes.array,
  favs: React.PropTypes.array,
  userId: React.PropTypes.number,
  updateDisplayPlaces: React.PropTypes.func,
  updateShowing: React.PropTypes.func,
  hideAll: React.PropTypes.func,
};

const mapStateToProps = (state) => (
  {
    places: state.places,
    displayPlaces: state.displayPlaces,
    favs: state.favs,
    userId: state.user.id,
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(actionsCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyPlaces);

