import React from 'react';

const FeedEntry = (props) => (
  <div className="card-panel grey lighten-5 z-depth-1 hoverable">
    <div className="row valign-wrapper">
      <div className="col s2">
        <img src={props.place.imageUrl} alt="" className="responsive-img" />
      </div>
      <div className="col s10">
        <span className="black-text">
          <h5 className="valign-wrapper">
            {props.place.name}
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
);

FeedEntry.propTypes = {
  place: React.PropTypes.object,
  actions: React.PropTypes.object,
  userId: React.PropTypes.number,
};

export default FeedEntry;
