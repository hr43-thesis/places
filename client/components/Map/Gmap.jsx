import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsCreators from '../../redux/actions/displayPlacesActions';


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
    // update display places to be all user's places initially
    // me is place holder
    this.props.updateDisplayPlaces(this.props.places, 'me');
  }

  handleViewChanged() {
    this.setState({
      bounds: this.googleMapComponent.getBounds(),
      center: this.googleMapComponent.getCenter(),
    });
  }


  handleMapClick() {
    this.props.hideAll();
  }

  handleMarkerClick(marker, index) {
<<<<<<< HEAD
    this.props.updateShowing(index);
  }

  renderInfoWindow(ref, marker, index) {
==
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
                width: '100%',
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
    favs: state.favs,
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

