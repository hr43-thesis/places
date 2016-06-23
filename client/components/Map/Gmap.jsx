import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
// import { connect } from 'react-redux';
// import { Link } from 'react-router';

const defaultMarkers = [
  {
    position: {
      lat: 37.7761391,
      lng: -122.3897686,
    },
    key: 'The Yard',
    defaultAnimation: 2,
  },
  {
    position: {
      lat: 37.7903982,
      lng: -122.4616293,
    },
    key: 'Presidio Golf Course',
    defaultAnimation: 2,
  },
  {
    position: {
      lat: 37.7757447,
      lng: -122.4088245,
    },
    key: 'Raven Night Club',
    defaultAnimation: 2,
  },
  {
    position: {
      lat: 37.7753907,
      lng: -122.3966198,
    },
    key: 'Home',
    defaultAnimation: 2,
  },
];

class MyPlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: null,
      center: {
        lat: 37.7835896,
        lng: -122.4092149,
      },
      places: defaultMarkers,
    };
    // this.handleMapClick = this.handleMapClick.bind(this);
    this.handleViewChanged = this.handleViewChanged.bind(this);
  }
  handleViewChanged() {
    this.setState({
      bounds: this.googleMapComponent.getBounds(),
      center: this.googleMapComponent.getCenter(),
    });
  }

  handleMapClick(e) {
    console.log('e is: ', e);
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


  render() {
    return (
      <section style={{ height: '600px' }}>
        <GoogleMapLoader
          containerElement={
            <div
              style={{
                width: '80%',
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
              {this.state.places.map((marker, index) => (
                <Marker
                  {...marker}
                  onRightclick={(event) => this.handleMarkerRightclick(index, event)}
                />
                )
              )}
            </GoogleMap>
         }
        />
      </section>
    );
  }
}

// const mapStateToProps = function mapStateToProps(state) {
//   return {
//     markers: state.filteredListings,
//   };
// };

MyPlaces.propTypes = {
  markers: React.PropTypes.object,
};

// export default connect(mapStateToProps)(MyPlaces);
export default MyPlaces;
