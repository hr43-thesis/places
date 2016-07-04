import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

class Gmap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: null,
      center: {
        lat: 37.7835896,
        lng: -122.4092149,
      },
      mounting: true,
    };
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleViewChanged = this.handleViewChanged.bind(this);
  }
  componentWillMount() {
    // update display places to be all user's places initially
    // me is place holder
    // this.props.updateDisplayPlaces(this.props.places, 'me');
    // console.log('Map is about to mount---------');
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      mounting: nextProps,
    });
    // console.log('inside comp willrecieve, props are:', nextProps);
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
    if (marker.showInfo) {
      this.props.hideAll();
    } else {
      this.props.hideAll();
      this.props.updateShowing(index);
    }
  }

  renderInfoWindow(ref, marker, index) {
    return (
      <InfoWindow
        key={`${ref}_info_window`}
        onCloseclick={(e) => this.handleMarkerClick(marker, index, e)}
      >
        <div>
          <h4>{marker.name}</h4>
          <br />
          {marker.note}
        </div>
      </InfoWindow>
    );
  }


  render() {
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
              {this.props.displayPlaces.map((marker, index) => {
                const ref = `marker_${index}`;
                const renderMarker = (
                  <Marker
                    {...marker}
                    position={{
                      lat: +marker.lat,
                      lng: +marker.lng,
                    }}
                    key={index}
                    defaultAnimation={2}
                    ref={ref}
                    onClick={(event) => this.handleMarkerClick(marker, index, event)}
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

Gmap.propTypes = {
  places: React.PropTypes.array,
  displayPlaces: React.PropTypes.array,
  updateDisplayPlaces: React.PropTypes.func,
  updateShowing: React.PropTypes.func,
  hideAll: React.PropTypes.func,
  fitlerType: React.PropTypes.string,
};

export default Gmap;

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

