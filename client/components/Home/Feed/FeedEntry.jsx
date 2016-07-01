import React from 'react';
import ReactPlayer from 'react-player';

const modalStyle = {
  'max-width': '500',
  height: 'auto',
};

const FeedEntry = (props) => (
  <div>
    <div id={`modal-${props.place.placeId}`} className="modal" style={modalStyle}>
      <div className="modal-content">
        {/* <img src={props.place.imageUrl} alt={props.place.name} className="responsive-img" /> */}
        <ReactPlayer width={450} url={props.place.videoUrl} playing />
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
          <img src={props.place.imageUrl} alt="" className="responsive-img" />
        </div>
        <div className="col s10">
          <span className="black-text">
            <h5 className="valign-wrapper">
              <a
                href="#"
                onClick={() => { props.handleModalClick(props.place.placeId); }}
              >
                {props.place.name}
              </a>
              {' '}
              <a style={{ cursor: 'pointer' }}><i
                className="material-icons"
                onClick={() =>
                  props.actions.addFav(
                    props.userId,
                    props.place.placeId,
                    props.place.userPlaceId
                  )}
              >
                star
              </i></a>
            </h5>
            {' '}
            {props.place.note}
            {' - '}
            {props.place.userName}
          </span>
        </div>
      </div>
    </div>
  </div>
);

FeedEntry.propTypes = {
  place: React.PropTypes.object,
  actions: React.PropTypes.object,
  userId: React.PropTypes.number,
  handleModalClick: React.PropTypes.func,
};

export default FeedEntry;
