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
            <i className="material-icons">star</i>
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
  handleAddFav: React.PropTypes.func,
};

export default FeedEntry;
