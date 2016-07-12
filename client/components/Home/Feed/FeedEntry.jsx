import React from 'react';
// import ReactVideo from 'react.video';
import ReactPlayer from 'react-player';

const modalStyle = {
  maxWidth: '500px',
  height: 'auto',
};
const userImageUrl = {
  width: '50px',
  height: '50px',
};
const placeTitleStyle = {
  fontSize: '16px',
  marginTop: '5px',
  fontWeight: 'bold',
};
const noteStyle = {
  fontSize: '20px',
  marginTop: '5px',
  fontWeight: 'bold',
};

const FeedEntry = (props) => {
  let mediaButton;
  if (props.place.imageUrl) {
    mediaButton = (
      <a style={{ cursor: 'pointer' }}>
        <i
          className="material-icons"
          onClick={() => {
            props.handleModalClick(props.place.placeId);
          }}
        >
          perm_media
        </i>
      </a>
    );
  } else if (props.place.videoUrl) {
    mediaButton = (
      <a style={{ cursor: 'pointer' }}>
        <i
          className="material-icons"
          onClick={() => {
            props.handleModalClick(props.place.placeId);
          }}
        >
          videocam
        </i>
      </a>
    );
  } else {
    mediaButton = null;
  }

  return (
    <div>
      <div id={`modal-${props.place.placeId}`} className="modal" style={modalStyle}>
        <div className="modal-content">
          {props.place.imageUrl ?
            <img src={props.place.imageUrl} alt={props.place.name} className="responsive-img" /> :
            <ReactPlayer
              url={props.place.videoUrl}
              width={'100%'}
              controls
            />
          }
          <p>
            {props.place.note}
            {' - '}
            {props.place.userName}
          </p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">
            Close
          </a>
        </div>
      </div>
      <div className="card-panel grey lighten-5 z-depth-1 hoverable">
        <div className="row valign-wrapper">
          <div className="col s2" style={{ textAlign: 'center' }}>
            <img
              src={props.place.userImageUrl} alt=""
              className="responsive-img" style={userImageUrl}
            />
            <div style={{ fontWeigh: 'bold' }}>
              {props.place.userName}
            </div>
          </div>
          <div className="col s10">
            <span style={placeTitleStyle}>
              {props.place.name}</span> on {' '}
            {props.place.createdAt}
            {' '}
            <div style={noteStyle}>
              {props.place.note}
            </div>
            {' '}
            {props.favs.includes(props.place.userPlaceId) ?
              <i className="material-icons">
              star
              </i> :
              <a style={{ cursor: 'pointer' }}>
                <i
                  className="material-icons"
                  onClick={() =>
                  props.actions.addFav(
                    props.userId,
                    props.place.placeId,
                    props.place.userPlaceId
                  )}
                >
                star
                </i>
              </a>
            }
            {' '}
            {mediaButton}
          </div>
        </div>
      </div>
    </div>
  );
};

FeedEntry.propTypes = {
  place: React.PropTypes.object,
  actions: React.PropTypes.object,
  userId: React.PropTypes.number,
  handleModalClick: React.PropTypes.func,
  favs: React.PropTypes.array,
};

export default FeedEntry;
