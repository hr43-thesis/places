import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow, Polyline } from 'react-google-maps';
// import measureMeters from '../../utils/math';

class FriendMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: null,
      center: {
        lat: 37.7835896,
        lng: -122.4092149,
      },
      zoom: 12,
    };
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleViewChanged = this.handleViewChanged.bind(this);
  }


  componentWillUnmount() {
    this.props.hideAll();
    // this.intervals.forEach(clearInterval);
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
      // this.setState({ center: { lat: +marker.currLat, lng: +marker.currLng } });
      // this.googleMapComponent.props.map.setZoom(14);
    }
  }

  renderInfoWindow(ref, marker, index) {
    const imgStyle = { height: '60px' };
    return (
      <InfoWindow
        key={`${ref}_info_window`}
        onCloseclick={(e) => this.handleMarkerClick(marker, index, e)}
        options={{
          maxWidth: 100,
        }}
      >
        <div>
          <h5>{marker.name}</h5>
          <img alt={ref} style={imgStyle} src={marker.imageUrl} />
        </div>
      </InfoWindow>
    );
  }


  render() {
    return (
      <div style={{ position: 'absolute', height: '100%', width: '100%' }}>
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
              ref={(map) => {
                window.gm = map;
                this.googleMapComponent = map;
              }}
              defaultZoom={this.state.zoom}
              center={this.state.center}
              onClick={this.handleMapClick}
              onBoundsChanged={this.handleViewChanged}
            >
              {this.props.displayUsers.map((marker, index) => {
                const time = new Date(marker.locUpdatedAt).getTime();
                const ref = `marker_${index}`;
                // do some logic around whether to show marker?
                const renderMarker = (new Date().getTime() - time < 4 * Math.pow(10, 7) ?
                  <Marker
                    position={{
                      lat: +marker.currLat,
                      lng: +marker.currLng,
                    }}
                    key={index}
                    ref={ref}
                    onClick={(event) => this.handleMarkerClick(marker, index, event)}
                  >
                    {marker.showInfo ? this.renderInfoWindow(ref, marker, index) : null}
                  </Marker> : null
                );
                return renderMarker;
              })}
              {this.props.displayUsers.map((marker, index) => {
                const path = [
                  { lat: +marker.currLat, lng: +marker.currLng },
                  { lat: +marker.prevLat, lng: +marker.prevLng },
                ];
                const ref = `marker_${index}`;
                // ensure the user is still moving, but not more than 300 meters at a time
                const lineRender = new Date().getTime()
                  - new Date(marker.locUpdatedAt).getTime() < 60000 /* &&
                  measureMeters(+marker.currLat, +marker.currLng,
                    +marker.prevLat, +marker.prevLng)  < 300 */ ?
                  <Polyline
                    path={path}
                    key={index}
                    ref={ref}
                    options={{
                      strokeColor: '#FF0000',
                      strokeOpacity: 1.0,
                      strokeWeight: 2,
                    }}
                  /> : null;
                return lineRender;
              })}
            </GoogleMap>
         }
        />
      </div>
    );
  }
}


FriendMap.propTypes = {
  displayUsers: React.PropTypes.array,
  center: React.PropTypes.object,
  zoom: React.PropTypes.number,
  hideAll: React.PropTypes.func,
  updateShowing: React.PropTypes.func,
};

export default FriendMap;
