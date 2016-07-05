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
    };
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleViewChanged = this.handleViewChanged.bind(this);
  }

  componentWillReceiveProps() {
    // if (nextProps.displayPlaces[0]) {
    //   const filter = nextProps.displayPlaces[0].userId === this.props.User
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
        options={{
          maxWidth: 300,
        }}
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
                    position={{
                      lat: +marker.lat,
                      lng: +marker.lng,
                    }}
                    key={index}
                    defaultAnimation={2}
                    icon={this.props.filterType === 'Starred' ? 'https://cdn0.iconfinder.com/data/icons/stuttgart/32/star.png' : null}
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
  filterType: React.PropTypes.string,
};

export default Gmap;

