import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsCreators from '../../redux/actions/displayPlacesActions';
// import { Link } from 'react-router';

// const defaultMarkers = [
//   {
//     position: {
//       lat: 37.7761391,
//       lng: -122.3897686,
//     },
//     key: 'The Yard',
//     defaultAnimation: 2,
//   },
//   {
//     position: {
//       lat: 37.7903982,
//       lng: -122.4616293,
//     },
//     key: 'Presidio Golf Course',
//     defaultAnimation: 2,
//   },
//   {
//     position: {
//       lat: 37.7757447,
//       lng: -122.4088245,
//     },
//     key: 'Raven Night Club',
//     defaultAnimation: 2,
//   },
//   {
//     position: {
//       lat: 37.7753907,
//       lng: -122.3966198,
//     },
//     key: 'Home',
//     defaultAnimation: 2,
//   },
// ];

class Gmap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: null,
      center: {
        lat: 37.7835896,
        lng: -122.4092149,
      },
    };
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleViewChanged = this.handleViewChanged.bind(this);
  }

  componentWillMount() {
    // something about updating dispay views  the store
    // filter by id, make sure showInfo is false... shouldnt be an issue
    console.log('this.props is:', this.props);
    this.props.updateDisplayPlaces(this.props.places, 'me');
  }

  handleViewChanged() {
    this.setState({
      bounds: this.googleMapComponent.getBounds(),
      center: this.googleMapComponent.getCenter(),
    });
  }

  handleMapClick(e) {
    console.log('e is: ', e);
<<<<<<< 506b453dd81e2bcb1dfbc09b7698216c82d30a4a
    this.props.hideAll();
  }

  handleMarkerClick(marker, index) {
    // e.preventDefault();
    // marker.showInfo = true;
    console.log('CLICKEEDDd');
    console.log(this, marker, index);
    this.props.updateShowing(index);
    // const newPlaces = this.state.places;
    // newPlaces[index].showInfo = !newPlaces[index].showInfo;
    console.log('marker clicked-->', marker);
    // this.setState({ places: newPlaces });
  }

=======
  }

  // handleMarkerClick(marker) {
  //   marker.showInfo = true;
  //   console.log('marker clicked-->', marker);
  //   this.setState(this.state);
  // }

  // handleMarkerClose(marker) {
  //   marker.showInfo = false;
  //   console.log('marker closed-->', marker);
  //   this.setState(this.state);
  // }
>>>>>>> (env) Restoring gmap
  handleMarkerRightclick(index, event) {
      /*
       * All you modify is data, and the view is driven by data.
       * This is so called data-driven-development. (And yes, it's now in
       * web front end and even with google maps API.)
       */
    console.log('event is: ', event);
    console.log('this is: ', this);
    console.log('index is: ', index);
  }

  renderInfoWindow(ref, marker, index) {
    console.log('rendering infoWindow');
    console.log('rendering infoWindow, marker is ', marker);
    return (
      <InfoWindow
        key={`${ref}_info_window`}
        onCloseclick={(e) => this.handleMarkerClick(marker, index, e)}
      >
        <div>
          {marker.key}
        </div>
      </InfoWindow>
    );
  }


  render() {
    const formattedLocations = this.props.displayPlaces.map(place => (
      // return the formatted object
      {
        position: {
          lat: place.lat,
          lng: place.lng,
        },
        key: place.name,
        defaultAnimation: 2,
        showInfo: place.showInfo,
      }
    ));

    return (
      <section style={{ height: '800px' }}>
        <GoogleMapLoader
          containerElement={
            <div
              style={{
                width: '66%',

                height: '100%',
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => (this.googleMapComponent = map)}
              defaultZoom={13}
              center={this.state.center}
              onClick={this.handleMapClick}
              onBoundsChanged={this.handleViewChanged}
            >
              {formattedLocations.map((marker, index) => {
                const ref = `marker_${index}`;
                const renderMarker = (
                  <Marker
                    {...marker}
                    ref={ref}
                    onClick={(event) => this.handleMarkerClick(marker, index, event)}
                    onRightclick={(event) => this.handleMarkerRightclick(index, event)}
                  >
                    {marker.showInfo ? this.renderInfoWindow(ref, marker, index) : null}
                  </Marker>
                );
                return renderMarker;
              }

              )}
            </GoogleMap>
         }
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => (
  {
    places: state.places,
    displayPlaces: state.displayPlaces,
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(actionsCreators, dispatch);

Gmap.propTypes = {
  places: React.PropTypes.array,
  displayPlaces: React.PropTypes.array,
  updateDisplayPlaces: React.PropTypes.func,
  updateShowing: React.PropTypes.func,
  hideAll: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gmap);
// export default Gmap;


