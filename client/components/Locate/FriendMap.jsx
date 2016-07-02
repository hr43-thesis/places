import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow, Polyline } from 'react-google-maps';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actionsCreators from '../../redux/actions/displayPlacesActions';

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

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
    // this.setState({ center: nextProps.center });
    // if (this.googleMapComponent) {
    //   this.googleMapComponent.props.map.setZoom(nextProps.zoom);
    // }
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
    const imgStyle = { height: '100px' };
    return (
      <InfoWindow
        key={`${ref}_info_window`}
        onCloseclick={(e) => this.handleMarkerClick(marker, index, e)}
      >
        <div>
          <h4>{marker.name}</h4>
          <img alt={ref} style={imgStyle} src={marker.imageUrl} />
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
                const ref = `marker_${index}`;
                // do some logic around whether to show marker?
                const renderMarker = (
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
                  </Marker>
                );
                return renderMarker;
              })}
              {this.props.displayUsers.map((marker, index) => {
                const path = [
                  { lat: +marker.currLat, lng: +marker.currLng },
                  { lat: +marker.prevLat, lng: +marker.prevLng },
                ];
                const ref = `marker_${index}`;
                // do some logic around updatedAt
                const lineRender = new Date().getTime()
                  - new Date(marker.updatedAt).getTime() < 60000 ?
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
      </section>
    );
  }
}

// const mapStateToProps = (state) => (
//   {
//     places: state.places,
//     displayPlaces: state.displayPlaces,
//     favs: state.favs,
//   }
// );

// const mapDispatchToProps = (dispatch) => bindActionCreators(actionsCreators, dispatch);

FriendMap.propTypes = {
  displayUsers: React.PropTypes.array,
  center: React.PropTypes.object,
  zoom: React.PropTypes.number,
  hideAll: React.PropTypes.func,
  updateShowing: React.PropTypes.func,
  // updateCenter: React.PropTypes.func,
};

export default FriendMap;
