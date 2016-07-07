import React from 'react';
// import ReactVideo from 'react.video';
import ReactPlayer from 'react-player';

const modalStyle = {
  'max-width': '500px',
  height: 'auto',
};
const userImageUrl = {
  width: '50px',
  height: '50px',
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
          <div className="col s2">
            <img
              src={props.place.userImageUrl} alt=""
              className="responsive-img" style={userImageUrl}
            />
          </div>
          <div className="col s10">
            <span className="black-text">
              {props.place.userName} was at {' '}
              {props.place.name} on {' '}
              {props.place.createdAt}
              {' '}
              <div>
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
            </span>
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
