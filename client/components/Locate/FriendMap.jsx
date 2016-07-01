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
    };
    //   testData: [
    //     {
    //       id: 0,
    //       name: 'Stone Cold Steve Austin',
    //       currLat: 37.765061,
    //       currLng: -122.477020,
    //       prevLat: 37.764230,
    //       prevLng: -122.457140,
    //       repCount: 20,
    //       updatedAt: new Date(),
    //       showInfo: false,
    //       imageUrl: 'http://www.reviewstl.com/wp-content/uploads/2013/03/Stone-Cold-Steve-Austin-Beer.jpg',
    //     },
    //     {
    //       id: 1,
    //       name: 'Barak Obama',
    //       currLat: 37.760661,
    //       currLng: -122.423020,
    //       prevLat: 37.760730,
    //       prevLng: -122.422140,
    //       repCount: 10,
    //       updatedAt: new Date(),
    //       showInfo: false,
    //       imageUrl: 'http://www.gannett-cdn.com/media/USATODAY/GenericImages/2012/09/21/c03_obama_06-x-wide-community.jpg',
    //     },
    //     {
    //       id: 2,
    //       name: 'Elf',
    //       currLat: 37.760061,
    //       currLng: -122.427020,
    //       prevLat: 37.760230,
    //       prevLng: -122.427140,
    //       repCount: 50,
    //       updatedAt: new Date('2016/06/29 16:50:02'),
    //       showInfo: false,
    //       imageUrl: 'http://4.bp.blogspot.com/-IHsHRia-_bU/TiZGlQQBItI/AAAAAAAAALQ/U2B_37hZio8/s1600/Buddy+the+Elf.png',
    //     },
    //   ],
    // };
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleViewChanged = this.handleViewChanged.bind(this);
    // this.intervals = [];
    // this.intervals.push(setInterval(this.moveMarkers.bind(this), 3000));
  }

  componentWillMount() {
    // update display places to be all user's places initially
    // me is place holder
    // this.props.updateDisplayPlaces(this.props.places, 'me');
  }

  componentWillUnmount() {
    // this.intervals.forEach(clearInterval);
  }

  // moveMarkers() {
  //   let movedData = [...this.state.testData];
  //   movedData = movedData.map(user => {
  //     const newUser = Object.assign({}, user, {
  //       prevLng: user.currLng,
  //       prevLat: user.currLat,
  //       currLat: (user.currLat + Math.random() / 100),
  //       currLng: (user.currLng + Math.random() / 100),
  //     });
  //     return newUser;
  //   });
  //   this.setState({ testData: movedData });
  // }

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
    // this.props.updateShowing(index);
    // const newData = [...this.state.testData];
    // newData[index].showInfo = !newData[index].showInfo;
    // this.setState({ testData: newData });
  }

  renderInfoWindow(ref, marker, index) {
    return (
      <InfoWindow
        key={`${ref}_info_window`}
        onCloseclick={(e) => this.handleMarkerClick(marker, index, e)}
      >
        <div>
          <h4>{marker.name}</h4>
          <img alt={ref} src={marker.imageUrl} />
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
              {this.props.displayUsers.map((marker, index) => {
                console.log('marker has props: ', marker);
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
                return (
                  <Polyline
                    path={path}
                    key={index}
                    ref={ref}
                    options={{
                      strokeColor: '#FF0000',
                      strokeOpacity: 1.0,
                      strokeWeight: 2,
                    }}
                  />
                );
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
  hideAll: React.PropTypes.func,
  updateShowing: React.PropTypes.func,
};

export default FriendMap;
// export default connect(mapStateToProps, mapDispatchToProps)(FriendMap);

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

