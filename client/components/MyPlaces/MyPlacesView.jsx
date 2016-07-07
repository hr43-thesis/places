import React from 'react';
import Gmap from './PlaceGmap.jsx';
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

  handleFilterType(e, filterItem) {
    this.props.clearDisplay();
    setTimeout(() => {
      this.setState({ filterBy: filterItem });
      this.props.updateDisplayPlaces(this.props.places, this.props.userId,
        filterItem, this.props.favs);
    }, 200);
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
        <div className="row">
          <div style={{ paddingTop: '20px' }} className="col s3">
            <p>
              <input
                className="with-gap"
                name="placeTypes"
                type="radio"
                id="pinned"
                checked={this.state.filterBy === 'Pinned'}
                onClick={(e) => this.handleFilterType(e, 'Pinned')}
              />
              <label htmlFor="pinned">Pinned</label>
            </p>
            <p>
              <input
                className="with-gap"
                name="placeTypes"
                type="radio"
                id="starred"
                checked={this.state.filterBy === 'Starred'}
                onClick={(e) => this.handleFilterType(e, 'Starred')}
              />
              <label htmlFor="starred">Starred</label>
            </p>
            <div className="divider" />
            <div className="divider" />
            <div className="section">
              <PlaceList
                onListClick={this.handleListClick}
                places={this.props.displayPlaces}
              />
            </div>
          </div>
          <div className="col s9">
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
  clearDisplay: React.PropTypes.func,
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

